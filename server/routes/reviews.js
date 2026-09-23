const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');

/**
 * GET /api/reviews
 */
router.get('/', async (req, res) => {
    try {
        let reviews = [];

        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
            if (!error && data) {
                reviews = data;
            }
        }

        if (reviews.length === 0) {
            reviews = db.prepare('SELECT * FROM reviews ORDER BY created_at DESC').all();
        }

        const total = reviews.length;
        const avg = total > 0 ? (reviews.reduce((sum, r) => sum + Number(r.rating || 5), 0) / total) : 5.0;
        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach(r => {
            const star = Math.round(Number(r.rating || 5));
            if (distribution[star] !== undefined) {
                distribution[star]++;
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
 */
router.post('/', async (req, res) => {
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
        const record = {
            id,
            author,
            role,
            location,
            rating: Math.min(5, Math.max(1, Number(rating))),
            title,
            content,
            date_str: dateStr,
            is_verified: true
        };

        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('reviews').insert([record]).select().single();
            if (!error && data) {
                try {
                    db.prepare(`
                        INSERT OR REPLACE INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
                    `).run(id, author, role, location, Number(rating), title, content, dateStr);
                } catch (e) {}

                return res.status(201).json({ success: true, message: 'Review submitted', data });
            }
        }

        const insert = db.prepare(`
            INSERT INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        insert.run(id, author, role, location, Math.min(5, Math.max(1, Number(rating))), title, content, dateStr, 1);

        const created = db.prepare('SELECT * FROM reviews WHERE id = ?').get(id);
        res.status(201).json({ success: true, message: 'Review submitted', data: created });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/reviews/:id
 */
router.delete('/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;
        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('reviews').delete().eq('id', reviewId);
            if (error) console.warn('⚠️ Supabase delete error:', error.message);
        }

        try {
            db.prepare('DELETE FROM reviews WHERE id = ?').run(reviewId);
        } catch (e) {}

        res.json({ success: true, message: 'Review deleted successfully', id: reviewId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
