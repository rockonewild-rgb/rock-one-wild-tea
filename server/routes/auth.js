const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const { db } = require('../db/database');
const { rawSupabase, createAuthClient, isSupabaseAvailable, isConnectivityOrServiceError } = require('../db/supabase');

const AUTH_TIMEOUT_MS = 4500;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const derived = crypto.scryptSync(String(password), salt, 64).toString('hex');
    return `${salt}:${derived}`;
}

function verifyPassword(password, storedHash) {
    if (!storedHash || !storedHash.includes(':')) return false;
    const [salt, keyHex] = storedHash.split(':');
    const keyBuf = Buffer.from(keyHex, 'hex');
    const derivedBuf = crypto.scryptSync(String(password), salt, 64);
    if (keyBuf.length !== derivedBuf.length) return false;
    return crypto.timingSafeEqual(keyBuf, derivedBuf);
}

async function withTimeout(promise, ms = AUTH_TIMEOUT_MS) {
    let timer;
    try {
        return await Promise.race([
            promise,
            new Promise((_, reject) => {
                timer = setTimeout(() => reject(new Error(`Auth timeout (${ms}ms)`)), ms);
            })
        ]);
    } finally {
        if (timer) clearTimeout(timer);
    }
}

function syncSqliteUser({ id, full_name, email, phone = '', password }) {
    try {
        const hash = hashPassword(password);
        db.prepare(`
            INSERT OR REPLACE INTO customer_users (id, full_name, email, phone, password_hash)
            VALUES (?, ?, ?, ?, ?)
        `).run(id, full_name, email, phone, hash);
    } catch (e) {
        console.warn('⚠️ [Auth] SQLite user cache sync notice:', e.message);
    }
}

/**
 * GET /api/auth/google/url
 * Generate Supabase OAuth authorization URL for Google Sign-In
 */
router.get('/google/url', async (req, res) => {
    try {
        const clientOrigin = req.query.origin || `${req.protocol}://${req.get('host')}`;
        const redirectTo = `${clientOrigin}/?auth_provider=google`;

        if (!isSupabaseAvailable() || !rawSupabase) {
            return res.status(503).json({
                success: false,
                error: 'Supabase authentication service is currently offline. Please sign in with Email ID.'
            });
        }

        const { data, error } = await withTimeout(
            rawSupabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent'
                    }
                }
            })
        );

        if (error) {
            return res.status(400).json({ success: false, error: error.message });
        }

        if (!data || !data.url) {
            return res.status(500).json({ success: false, error: 'Could not generate Google authorization URL.' });
        }

        res.json({ success: true, url: data.url });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Google OAuth initialization failed.' });
    }
});

/**
 * POST /api/auth/verify-token
 * Verify a Supabase access token (e.g. from Google OAuth callback hash) and retrieve patron profile
 */
router.post('/verify-token', async (req, res) => {
    try {
        const token = (req.body.access_token || req.body.token || '').trim();
        if (!token) {
            return res.status(400).json({ success: false, error: 'Access token is required.' });
        }

        if (!isSupabaseAvailable() || !rawSupabase) {
            return res.status(503).json({ success: false, error: 'Supabase authentication service is currently offline.' });
        }

        const { data, error } = await withTimeout(rawSupabase.auth.getUser(token));
        if (error || !data || !data.user) {
            return res.status(401).json({
                success: false,
                error: error ? error.message : 'Invalid or expired session token.'
            });
        }

        const u = data.user;
        const meta = u.user_metadata || {};
        const fullName = meta.full_name || meta.name || meta.user_name || (u.email ? u.email.split('@')[0] : 'Patron');
        const phone = meta.phone || '';

        const userObj = {
            id: u.id,
            email: u.email,
            full_name: fullName,
            phone
        };

        // Cache patron locally for offline compatibility
        try {
            db.prepare(`
                INSERT OR REPLACE INTO customer_users (id, full_name, email, phone, password_hash)
                VALUES (?, ?, ?, ?, ?)
            `).run(userObj.id, userObj.full_name, userObj.email, userObj.phone, 'OAUTH_GOOGLE');
        } catch (e) {
            console.warn('⚠️ [Auth verify-token] SQLite sync notice:', e.message);
        }

        res.json({
            success: true,
            source: 'supabase-oauth',
            message: `Welcome to Rock One Wild Tea, ${userObj.full_name}.`,
            user: userObj,
            token
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Token verification failed.' });
    }
});

/**
 * POST /api/auth/register
 * Register a new patron using Email ID & password (Supabase Auth + SQLite fallback)
 */
router.post('/register', async (req, res) => {
    try {
        const rawEmail = (req.body.email || '').trim().toLowerCase();
        const fullName = (req.body.full_name || req.body.fullName || req.body.name || '').trim();
        const phone = (req.body.phone || '').trim();
        const password = String(req.body.password || '');

        if (!fullName || !rawEmail || !password) {
            return res.status(400).json({
                success: false,
                error: 'Full name, Email ID, and password are required.'
            });
        }

        if (!EMAIL_REGEX.test(rawEmail)) {
            return res.status(400).json({
                success: false,
                error: 'Please enter a valid Email ID.'
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                error: 'Password must be at least 6 characters.'
            });
        }

        // 1. Try Supabase Auth when available
        if (isSupabaseAvailable() && rawSupabase) {
            try {
                const { data, error } = await withTimeout(
                    rawSupabase.auth.admin.createUser({
                        email: rawEmail,
                        password,
                        email_confirm: true,
                        user_metadata: {
                            full_name: fullName,
                            phone
                        }
                    })
                );

                if (error) {
                    const msg = (error.message || '').toLowerCase();
                    if (msg.includes('already') || msg.includes('registered') || error.status === 422) {
                        return res.status(409).json({
                            success: false,
                            error: 'An account with this Email ID is already registered. Please Sign In instead.'
                        });
                    }
                    if (!isConnectivityOrServiceError(error)) {
                        return res.status(400).json({
                            success: false,
                            error: error.message || 'Could not register account.'
                        });
                    }
                    throw error;
                }

                if (data && data.user) {
                    const userObj = {
                        id: data.user.id,
                        email: data.user.email,
                        full_name: data.user.user_metadata?.full_name || fullName,
                        phone: data.user.user_metadata?.phone || phone
                    };

                    // Cache salted hash locally for offline fallback
                    syncSqliteUser({ ...userObj, password });

                    let accessToken = '';
                    try {
                        const authClient = createAuthClient();
                        if (authClient) {
                            const signRes = await withTimeout(
                                authClient.auth.signInWithPassword({ email: rawEmail, password })
                            );
                            accessToken = signRes.data?.session?.access_token || '';
                        }
                    } catch (e) {}

                    return res.status(201).json({
                        success: true,
                        source: 'supabase',
                        message: `Welcome to Rock One Wild Tea, ${userObj.full_name}.`,
                        user: userObj,
                        token: accessToken
                    });
                }
            } catch (sbErr) {
                console.warn('⚠️ [Auth Register] Supabase unavailable, using SQLite fallback:', sbErr.message);
            }
        }

        // 2. Local SQLite fallback
        const existing = db.prepare('SELECT id FROM customer_users WHERE email = ?').get(rawEmail);
        if (existing) {
            return res.status(409).json({
                success: false,
                error: 'An account with this Email ID is already registered. Please Sign In instead.'
            });
        }

        const localId = 'USR-' + Date.now().toString(36).toUpperCase();
        const hash = hashPassword(password);
        db.prepare(`
            INSERT INTO customer_users (id, full_name, email, phone, password_hash)
            VALUES (?, ?, ?, ?, ?)
        `).run(localId, fullName, rawEmail, phone, hash);

        res.status(201).json({
            success: true,
            source: 'sqlite',
            message: `Welcome to Rock One Wild Tea, ${fullName}.`,
            user: {
                id: localId,
                email: rawEmail,
                full_name: fullName,
                phone
            },
            token: ''
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Registration error.' });
    }
});

/**
 * POST /api/auth/login
 * Sign in existing patron with Email ID & password
 */
router.post('/login', async (req, res) => {
    try {
        const rawEmail = (req.body.email || '').trim().toLowerCase();
        const password = String(req.body.password || '');

        if (!rawEmail || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email ID and password are required.'
            });
        }

        if (!EMAIL_REGEX.test(rawEmail)) {
            return res.status(400).json({
                success: false,
                error: 'Please enter a valid Email ID.'
            });
        }

        // 1. Try Supabase Auth via an isolated stateless client
        if (isSupabaseAvailable()) {
            const authClient = createAuthClient();
            if (authClient) {
                try {
                    const { data, error } = await withTimeout(
                        authClient.auth.signInWithPassword({
                            email: rawEmail,
                            password
                        })
                    );

                    if (!error && data && data.user) {
                        const userObj = {
                            id: data.user.id,
                            email: data.user.email,
                            full_name: data.user.user_metadata?.full_name || data.user.email.split('@')[0],
                            phone: data.user.user_metadata?.phone || ''
                        };

                        // Keep local SQLite cache synced for offline access
                        syncSqliteUser({ ...userObj, password });

                        return res.json({
                            success: true,
                            source: 'supabase',
                            message: `Welcome back, ${userObj.full_name}.`,
                            user: userObj,
                            token: data.session?.access_token || ''
                        });
                    }

                    if (error && !isConnectivityOrServiceError(error)) {
                        // Check if this user registered locally while offline and migrate them cleanly
                        const localRow = db.prepare('SELECT * FROM customer_users WHERE email = ?').get(rawEmail);
                        if (localRow && verifyPassword(password, localRow.password_hash)) {
                            try {
                                await withTimeout(rawSupabase.auth.admin.createUser({
                                    email: rawEmail,
                                    password,
                                    email_confirm: true,
                                    user_metadata: { full_name: localRow.full_name, phone: localRow.phone || '' }
                                }));
                            } catch (migErr) {}

                            return res.json({
                                success: true,
                                source: 'sqlite-migrated',
                                message: `Welcome back, ${localRow.full_name}.`,
                                user: {
                                    id: localRow.id,
                                    email: localRow.email,
                                    full_name: localRow.full_name,
                                    phone: localRow.phone || ''
                                },
                                token: ''
                            });
                        }

                        return res.status(401).json({
                            success: false,
                            error: 'Incorrect Email ID or password.'
                        });
                    }

                    if (error) throw error;
                } catch (sbErr) {
                    console.warn('⚠️ [Auth Login] Supabase unavailable, using SQLite fallback:', sbErr.message);
                }
            }
        }

        // 2. Local SQLite fallback verification
        const userRow = db.prepare('SELECT * FROM customer_users WHERE email = ?').get(rawEmail);
        if (!userRow || !verifyPassword(password, userRow.password_hash)) {
            return res.status(401).json({
                success: false,
                error: 'Incorrect Email ID or password.'
            });
        }

        res.json({
            success: true,
            source: 'sqlite',
            message: `Welcome back, ${userRow.full_name}.`,
            user: {
                id: userRow.id,
                email: userRow.email,
                full_name: userRow.full_name,
                phone: userRow.phone || ''
            },
            token: ''
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Sign in error.' });
    }
});

/**
 * POST /api/auth/logout
 */
router.post('/logout', (req, res) => {
    res.json({
        success: true,
        message: 'Signed out successfully.'
    });
});

module.exports = router;
