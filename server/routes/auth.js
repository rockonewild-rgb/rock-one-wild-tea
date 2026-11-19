const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const { db } = require('../db/database');
const { rawSupabase, createAuthClient, isSupabaseAvailable, isConnectivityOrServiceError } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

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

async function syncUserToDatabase({ id, full_name, email, phone = '', password_hash = 'OAUTH_GOOGLE' }) {
    // 1. SQLite Local
    try {
        db.prepare(`
            INSERT INTO customer_users (id, full_name, email, phone, password_hash)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                full_name = excluded.full_name,
                email = excluded.email,
                phone = excluded.phone,
                password_hash = excluded.password_hash
        `).run(id, full_name, email, phone, password_hash);
    } catch (e) {
        console.warn('⚠️ [Auth] SQLite user cache sync notice:', e.message);
    }

    // 2. Turso Cloud
    if (isTursoAvailable()) {
        try {
            await executeTurso(`
                INSERT INTO customer_users (id, full_name, email, phone, password_hash)
                VALUES (?, ?, ?, ?, ?)
                ON CONFLICT(id) DO UPDATE SET
                    full_name = excluded.full_name,
                    email = excluded.email,
                    phone = excluded.phone,
                    password_hash = excluded.password_hash
            `, [id, full_name, email, phone, password_hash]);
        } catch (te) {
            console.warn('⚠️ [Auth] Turso user sync notice:', te.message);
        }
    }
}

function syncSqliteUser({ id, full_name, email, phone = '', password }) {
    const hash = hashPassword(password);
    syncUserToDatabase({ id, full_name, email, phone, password_hash: hash }).catch(() => {});
}

/**
 * GET /api/auth/google/config
 * Expose configured Google Client ID to frontend for Google Identity Services (GIS)
 */
router.get('/google/config', (req, res) => {
    const clientId = (process.env.GOOGLE_CLIENT_ID || '25319114091-3dfpdlddbi971fmmcrlepjq2ppkaqqet.apps.googleusercontent.com').trim();
    res.json({
        success: true,
        clientId
    });
});

/**
 * GET /api/auth/google/url
 * Generate OAuth authorization URL for Google Sign-In
 * Supports https://www.rockonewild.com and custom domain origins
 */
router.get('/google/url', async (req, res) => {
    try {
        let clientOrigin = req.query.origin || req.headers.origin || `${req.protocol}://${req.get('host')}`;
        clientOrigin = String(clientOrigin).replace(/\/+$/, '');
        const redirectTo = `${clientOrigin}/?auth_provider=google`;

        // 1. Primary: Supabase OAuth if available
        if (isSupabaseAvailable() && rawSupabase) {
            try {
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

                if (!error && data && data.url) {
                    return res.json({ success: true, url: data.url, mode: 'supabase', redirectTo });
                }
                if (error) {
                    console.warn('⚠️ [Auth] Supabase signInWithOAuth notice:', error.message);
                }
            } catch (sbErr) {
                console.warn('⚠️ [Auth] Supabase signInWithOAuth exception:', sbErr.message);
            }
        }

        // 2. Direct Google OAuth fallback if Supabase is offline or not configured
        const clientId = (process.env.GOOGLE_CLIENT_ID || '25319114091-3dfpdlddbi971fmmcrlepjq2ppkaqqet.apps.googleusercontent.com').trim();
        if (clientId) {
            const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
                client_id: clientId,
                redirect_uri: redirectTo,
                response_type: 'token id_token',
                scope: 'openid email profile',
                prompt: 'select_account consent',
                nonce: crypto.randomBytes(16).toString('hex')
            }).toString();
            return res.json({ success: true, url: googleAuthUrl, mode: 'google-direct', redirectTo });
        }

        res.status(503).json({
            success: false,
            error: 'Google authentication service is currently not configured.'
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Google OAuth initialization failed.' });
    }
});

/**
 * POST /api/auth/verify-token
 * Verify access token (from Supabase OAuth or Google ID token) and retrieve/sync patron profile
 */
router.post('/verify-token', async (req, res) => {
    try {
        const token = (req.body.access_token || req.body.token || req.body.credential || '').trim();
        if (!token) {
            return res.status(400).json({ success: false, error: 'Access token or credential is required.' });
        }

        let userObj = null;
        let authSource = 'unknown';

        // 1. Try Supabase Auth getUser if online
        if (isSupabaseAvailable() && rawSupabase) {
            try {
                const { data, error } = await withTimeout(rawSupabase.auth.getUser(token));
                if (!error && data && data.user) {
                    const u = data.user;
                    const meta = u.user_metadata || {};
                    const fullName = meta.full_name || meta.name || meta.user_name || (u.email ? u.email.split('@')[0] : 'Patron');
                    userObj = {
                        id: u.id,
                        email: u.email ? u.email.toLowerCase() : '',
                        full_name: fullName,
                        phone: meta.phone || ''
                    };
                    authSource = 'supabase-oauth';
                }
            } catch (sbErr) {}
        }

        // 2. Fallback: Verify directly with Google tokeninfo (for Google ID tokens or GIS credentials)
        if (!userObj) {
            try {
                const gRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(token)}`);
                const gData = await gRes.json();
                if (gData && gData.email && !gData.error) {
                    userObj = {
                        id: 'G-' + (gData.sub || Date.now().toString(36)),
                        email: gData.email.toLowerCase(),
                        full_name: gData.name || gData.given_name || gData.email.split('@')[0],
                        phone: ''
                    };
                    authSource = 'google-id-token';
                }
            } catch (gErr) {}
        }

        if (!userObj) {
            return res.status(401).json({
                success: false,
                error: 'Invalid or expired session token.'
            });
        }

        // Sync patron to SQLite and Turso Cloud
        await syncUserToDatabase({
            id: userObj.id,
            full_name: userObj.full_name,
            email: userObj.email,
            phone: userObj.phone,
            password_hash: 'OAUTH_GOOGLE'
        });

        res.json({
            success: true,
            source: authSource,
            message: `Welcome to Rock One Wild Tea, ${userObj.full_name}.`,
            user: userObj,
            token
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Token verification failed.' });
    }
});

/**
 * POST /api/auth/google/verify-credential
 * Direct verification endpoint for Google Identity Services (GIS) One-Tap / Popup
 */
router.post('/google/verify-credential', async (req, res) => {
    try {
        const credential = (req.body.credential || req.body.token || '').trim();
        if (!credential) {
            return res.status(400).json({ success: false, error: 'Google credential token is required.' });
        }

        const gRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`);
        const gData = await gRes.json();
        if (gData.error || !gData.email) {
            return res.status(401).json({
                success: false,
                error: gData.error_description || 'Invalid Google credential token.'
            });
        }

        const userObj = {
            id: 'G-' + (gData.sub || Date.now().toString(36)),
            email: gData.email.toLowerCase(),
            full_name: gData.name || gData.given_name || gData.email.split('@')[0],
            phone: ''
        };

        await syncUserToDatabase({
            id: userObj.id,
            full_name: userObj.full_name,
            email: userObj.email,
            phone: '',
            password_hash: 'OAUTH_GOOGLE'
        });

        res.json({
            success: true,
            source: 'google-identity-services',
            message: `Welcome to Rock One Wild Tea, ${userObj.full_name}.`,
            user: userObj,
            token: credential
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Google token verification failed.' });
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
