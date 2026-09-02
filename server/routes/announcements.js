const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

/**
 * GET /api/announcements
 * Fetch active announcements
 */
router.get('/', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM announcements WHERE is_active = 1 ORDER BY created_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/announcements
 * Create an announcement
 */
router.post('/', (req, res) => {
    try {
        const { tag, heading, content, image = 'images/luxury_tea_estate.jpg', link = '#home' } = req.body;

        if (!tag || !heading || !content) {
            return res.status(400).json({
                success: false,
                error: 'Tag, heading, and content are required.'
            });
        }

        const id = 'ann-' + Date.now().toString(36);
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        const insert = db.prepare(`
            INSERT INTO announcements (id, tag, date_str, heading, content, image, link, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insert.run(id, tag, dateStr, heading, content, image, link, 1);

        const created = db.prepare('SELECT * FROM announcements WHERE id = ?').get(id);
        res.status(201).json({ success: true, data: created });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
