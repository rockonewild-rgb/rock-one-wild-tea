const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

/**
 * POST /api/newsletter/subscribe
 * Subscribe an email to the estate newsletter
 */
router.post('/subscribe', (req, res) => {
    try {
        const { email, source = 'website_banner' } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ success: false, error: 'Valid email address is required.' });
        }

        const normalizedEmail = email.trim().toLowerCase();

        // Check if already subscribed
        const existing = db.prepare('SELECT * FROM newsletter_subscribers WHERE email = ?').get(normalizedEmail);
        if (existing) {
            return res.json({
                success: true,
                message: 'You are already registered to our Private Reserve Dispatch.',
                already_subscribed: true
            });
        }

        const id = 'sub-' + Date.now().toString(36);
        const insert = db.prepare(`
            INSERT INTO newsletter_subscribers (id, email, source)
            VALUES (?, ?, ?)
        `);

        insert.run(id, normalizedEmail, source);

        res.status(201).json({
            success: true,
            message: 'Welcome to the Rock One Wild Tea Private Reserve Dispatch.'
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/newsletter/subscribers
 */
router.get('/subscribers', (req, res) => {
    try {
        const rows = db.prepare('SELECT id, email, source, subscribed_at FROM newsletter_subscribers ORDER BY subscribed_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
