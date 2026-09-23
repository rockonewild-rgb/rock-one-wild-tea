const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');

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

        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('newsletter_subscribers').upsert([
                { id, email: normalizedEmail, source }
            ], { onConflict: 'email' }).select().single();

            if (!error && data) {
                return res.status(201).json({
                    success: true,
                    message: 'Thank you for subscribing to our private Connoisseur Club.',
                    data
                });
            }
        }

        // SQLite fallback
        try {
            db.prepare(`
                INSERT OR IGNORE INTO newsletter_subscribers (id, email, source)
                VALUES (?, ?, ?)
            `).run(id, normalizedEmail, source);
        } catch (e) {}

        res.status(201).json({
            success: true,
            message: 'Thank you for subscribing to our private Connoisseur Club.'
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
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false });
            if (!error && data) {
                return res.json({ success: true, count: data.length, data });
            }
        }

        const rows = db.prepare('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
