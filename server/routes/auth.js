const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const { db } = require('../db/database');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

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

/**
 * Synchronize user record across Turso Cloud (authoritative) and local SQLite
 */
async function syncUserToDatabase({ id, full_name, email, phone = '', password_hash = 'OAUTH_GOOGLE', role = 'patron', status = 'active' }) {
    const now = new Date().toISOString();

    // 1. Local SQLite cache
    try {
        db.prepare(`
            INSERT INTO customer_users (id, full_name, email, phone, password_hash, role, status, created_at, last_login)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                full_name = excluded.full_name,
                email = excluded.email,
                phone = excluded.phone,
                password_hash = excluded.password_hash,
                last_login = excluded.last_login
        `).run(id, full_name, email, phone, password_hash, role, status, now, now);
    } catch (e) {
        console.warn('⚠️ [Auth] SQLite cache sync notice:', e.message);
    }

    // 2. Turso Cloud (Primary authoritative database)
    if (isTursoAvailable()) {
        try {
            await executeTurso(`
                INSERT INTO customer_users (id, full_name, email, phone, password_hash, role, status, created_at, last_login)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(id) DO UPDATE SET
                    full_name = excluded.full_name,
                    email = excluded.email,
                    phone = excluded.phone,
                    password_hash = excluded.password_hash,
                    last_login = excluded.last_login
            `, [id, full_name, email, phone, password_hash, role, status, now, now]);
        } catch (te) {
            console.warn('⚠️ [Auth] Turso user sync notice:', te.message);
        }
    }
}

/**
 * Query user by Email from Turso Cloud or SQLite fallback
 */
async function findUserByEmail(email) {
    const cleanEmail = String(email || '').trim().toLowerCase();
    if (!cleanEmail) return null;

    if (isTursoAvailable()) {
        try {
            const rows = await queryTurso('SELECT * FROM customer_users WHERE LOWER(email) = ? LIMIT 1', [cleanEmail]);
            if (rows && rows.length > 0) return rows[0];
        } catch (e) {
            console.warn('⚠️ [Auth] Turso query error:', e.message);
        }
    }

    try {
        return db.prepare('SELECT * FROM customer_users WHERE LOWER(email) = ? LIMIT 1').get(cleanEmail);
    } catch (e) {
        return null;
    }
}

/**
 * GET /api/auth/google/config
 * Return the configured Google Client ID for Google Identity Services (GIS)
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
 * Generate DIRECT Google OAuth 2.0 authorization URL
 * Completely direct to Google — No Supabase required!
 */
router.get('/google/url', async (req, res) => {
    try {
        let clientOrigin = req.query.origin || req.headers.origin || `${req.protocol}://${req.get('host')}`;
        clientOrigin = String(clientOrigin).replace(/\/+$/, '');
        const redirectTo = `${clientOrigin}/?auth_provider=google`;

        const clientId = (process.env.GOOGLE_CLIENT_ID || '25319114091-3dfpdlddbi971fmmcrlepjq2ppkaqqet.apps.googleusercontent.com').trim();
        if (!clientId) {
            return res.status(500).json({ success: false, error: 'Google Client ID is not configured.' });
        }

        const params = new URLSearchParams({
            client_id: clientId,
            redirect_uri: redirectTo,
            response_type: 'token id_token',
            scope: 'openid email profile',
            prompt: 'select_account consent',
            nonce: crypto.randomBytes(16).toString('hex')
        });

        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

        res.json({
            success: true,
            url: googleAuthUrl,
            mode: 'google-direct',
            redirectTo
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Google OAuth initialization failed.' });
    }
});

/**
 * POST /api/auth/verify-token
 * Direct Google token verification endpoint (using Google's official tokeninfo API)
 * Saves authenticated patron directly into Turso Cloud
 */
router.post('/verify-token', async (req, res) => {
    try {
        const token = (req.body.access_token || req.body.token || req.body.credential || '').trim();
        if (!token) {
            return res.status(400).json({ success: false, error: 'Access token or credential is required.' });
        }

        let userObj = null;

        // Verify token directly with Google official tokeninfo endpoint
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
            }
        } catch (gErr) {
            console.warn('⚠️ Google tokeninfo error:', gErr.message);
        }

        if (!userObj) {
            return res.status(401).json({
                success: false,
                error: 'Invalid or expired Google session token.'
            });
        }

        // Save patron directly into Turso Cloud database
        await syncUserToDatabase({
            id: userObj.id,
            full_name: userObj.full_name,
            email: userObj.email,
            phone: userObj.phone,
            password_hash: 'OAUTH_GOOGLE'
        });

        res.json({
            success: true,
            source: 'google-direct',
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

        // Save patron directly into Turso Cloud database
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
 * Register a new patron using Email ID & password directly in Turso Cloud
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

        // Check if user already exists in Turso Cloud / SQLite
        const existing = await findUserByEmail(rawEmail);
        if (existing) {
            return res.status(409).json({
                success: false,
                error: 'An account with this Email ID is already registered. Please Sign In instead.'
            });
        }

        const localId = 'USR-' + Date.now().toString(36).toUpperCase();
        const hash = hashPassword(password);

        await syncUserToDatabase({
            id: localId,
            full_name: fullName,
            email: rawEmail,
            phone,
            password_hash: hash,
            role: 'patron',
            status: 'active'
        });

        res.status(201).json({
            success: true,
            source: 'turso-cloud',
            message: `Welcome to Rock One Wild Tea, ${fullName}.`,
            user: {
                id: localId,
                email: rawEmail,
                full_name: fullName,
                phone,
                role: 'patron'
            },
            token: 'TOKEN-' + localId + '-' + Date.now()
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message || 'Registration error.' });
    }
});

/**
 * POST /api/auth/login
 * Sign in existing patron with Email ID & password directly against Turso Cloud
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

        // Find user in Turso Cloud / SQLite
        const userRow = await findUserByEmail(rawEmail);
        if (!userRow || !verifyPassword(password, userRow.password_hash)) {
            return res.status(401).json({
                success: false,
                error: 'Incorrect Email ID or password.'
            });
        }

        // Update last login in Turso
        const now = new Date().toISOString();
        if (isTursoAvailable()) {
            executeTurso('UPDATE customer_users SET last_login = ? WHERE id = ?', [now, userRow.id]).catch(() => {});
        }
        try {
            db.prepare('UPDATE customer_users SET last_login = ? WHERE id = ?').run(now, userRow.id);
        } catch (e) {}

        res.json({
            success: true,
            source: 'turso-cloud',
            message: `Welcome back, ${userRow.full_name}.`,
            user: {
                id: userRow.id,
                email: userRow.email,
                full_name: userRow.full_name,
                phone: userRow.phone || '',
                role: userRow.role || 'patron'
            },
            token: 'TOKEN-' + userRow.id + '-' + Date.now()
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