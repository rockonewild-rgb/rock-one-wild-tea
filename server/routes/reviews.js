const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

/**
 * GET /api/reviews
 * Fetch verified reviews and aggregated rating stats
 */
router.get('/', (req, res) => {
    try {
        const reviews = db.prepare('SELECT * FROM reviews ORDER BY created_at DESC').all();

        // Calculate aggregated stats
        const total = reviews.length;
        const avg = total > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / total) : 5.0;

        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach(r => {
            if (distribution[r.rating] !== undefined) {
                distribution[r.rating]++;
            }
        });

        res.json({
            success: true,
            count: total,
            stats: {
                average: Number(avg.toFixed(1)),
                total,
                distribution
            },
            data: reviews
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/reviews
 * Submit customer review
 */
router.post('/', (req, res) => {
    try {
        const {
            author, role = 'Estate Visitor', location = 'Sri Lanka',
            rating = 5, title = '', content
        } = req.body;

        if (!author || !content) {
            return res.status(400).json({
                success: false,
                error: 'Author name and review content are required.'
            });
        }

        const id = 'REV-' + Date.now().toString(36).toUpperCase();
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

        const insert = db.prepare(`
            INSERT INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insert.run(
            id, author, role, location,
            Math.min(5, Math.max(1, Number(rating))),
            title, content, dateStr, 1
        );

        const created = db.prepare('SELECT * FROM reviews WHERE id = ?').get(id);
        res.status(201).json({
            success: true,
            message: 'Review submitted successfully',
            data: created
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
