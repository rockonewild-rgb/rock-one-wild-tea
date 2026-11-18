const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

/**
 * POST /api/newsletter/subscribe
 */
router.post('/subscribe', async (req, res) => {
    try {
        const { email, source = 'website_banner' } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({
                success: false,
                error: 'A valid email address is required.'
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const id = 'sub-' + Date.now().toString(36);

        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    INSERT OR IGNORE INTO newsletter_subscribers (id, email, source, subscribed_at)
                    VALUES (?, ?, ?, CURRENT_TIMESTAMP)
                `, [id, normalizedEmail, source]);
            } catch (te) {
                console.warn('⚠️ [Turso] Newsletter subscription error:', te.message);
            }
        }

        // 2. Supabase Cloud (Secondary)
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('newsletter_subscribers').upsert([
                    { id, email: normalizedEmail, source }
                ], { onConflict: 'email' });
            } catch (se) {
                console.warn('⚠️ [Supabase] Newsletter subscription error:', se.message);
            }
        }

        // 3. SQLite Fallback
        try {
            db.prepare(`
                INSERT OR IGNORE INTO newsletter_subscribers (id, email, source)
                VALUES (?, ?, ?)
            `).run(id, normalizedEmail, source);
        } catch (e) {}

        res.status(201).json({
            success: true,
            message: 'Thank you for subscribing to our private Connoisseur Club.',
            data: { id, email: normalizedEmail, source }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/newsletter/subscribers
 */
router.get('/subscribers', async (req, res) => {
    try {
        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            const tursoRows = await queryTurso('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC');
            if (Array.isArray(tursoRows)) {
                return res.json({ success: true, count: tursoRows.length, data: tursoRows, source: 'turso' });
            }
        }

        // 2. Supabase Cloud (Secondary)
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false });
            if (!error && Array.isArray(data)) {
                return res.json({ success: true, count: data.length, data, source: 'supabase' });
            }
        }

        // 3. SQLite Fallback
        const rows = db.prepare('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows, source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
