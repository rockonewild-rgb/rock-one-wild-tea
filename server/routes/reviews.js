const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

/**
 * GET /api/reviews
 * Fetch all customer reviews and computed ratings summary.
 * Authoritative primary database is Turso Cloud.
 */
router.get('/', async (req, res) => {
    try {
        let reviews = [];
        let fetched = false;

        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                const tursoRows = await queryTurso('SELECT * FROM reviews ORDER BY created_at DESC');
                if (Array.isArray(tursoRows)) {
                    reviews = tursoRows;
                    fetched = true;
                }
            } catch (e) {
                console.warn('⚠️ [Turso Cloud] reviews query error:', e.message);
            }
        }

        // 2. Supabase Cloud (Secondary Fallback - only if Turso was unreachable)
        if (!fetched && isSupabaseAvailable()) {
            try {
                const { data, error } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
                if (!error && Array.isArray(data)) {
                    reviews = data;
                    fetched = true;
                }
            } catch (e) {
                console.warn('⚠️ [Supabase] reviews query error:', e.message);
            }
        }

        // 3. Local SQLite (Offline Fallback - only if cloud databases were unreachable)
        if (!fetched) {
            try {
                reviews = db.prepare('SELECT * FROM reviews ORDER BY created_at DESC').all();
            } catch (e) {
                console.warn('⚠️ [SQLite] reviews query error:', e.message);
            }
        }

        const total = reviews.length;
        const avg = total > 0 ? (reviews.reduce((sum, r) => sum + Number(r.rating || 5), 0) / total) : 0;
        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach(r => {
            const star = Math.min(5, Math.max(1, Math.round(Number(r.rating || 5))));
            if (distribution[star] !== undefined) {
                distribution[star]++;
            }
        });

        res.json({
            success: true,
            count: total,
            stats: {
                average: total > 0 ? Number(avg.toFixed(1)) : 0,
                total,
                distribution
            },
            data: reviews,
            source: fetched ? 'turso' : 'sqlite'
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/reviews
 * Submit a customer review and synchronize across all databases.
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
        const cleanRating = Math.min(5, Math.max(1, Number(rating) || 5));
        const record = {
            id,
            author,
            role,
            location,
            rating: cleanRating,
            title: title || '',
            content,
            date_str: dateStr,
            is_verified: 1
        };

        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    INSERT OR REPLACE INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
                `, [id, author, role, location, cleanRating, title || '', content, dateStr]);
            } catch (te) {
                console.warn('⚠️ [Turso Cloud] insert review error:', te.message);
            }
        }

        // 2. Supabase Cloud (Secondary)
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('reviews').insert([{
                    id,
                    author,
                    role,
                    location,
                    rating: cleanRating,
                    title: title || '',
                    content,
                    date_str: dateStr,
                    is_verified: true
                }]);
            } catch (se) {
                console.warn('⚠️ [Supabase] insert review error:', se.message);
            }
        }

        // 3. Local SQLite (Offline Cache)
        try {
            const insert = db.prepare(`
                INSERT OR REPLACE INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
            `);
            insert.run(id, author, role, location, cleanRating, title || '', content, dateStr);
        } catch (le) {
            console.warn('⚠️ [SQLite] insert review error:', le.message);
        }

        res.status(201).json({ success: true, message: 'Review submitted successfully', data: record });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/reviews/:id
 * Permanently delete a review by ID across all databases.
 */
router.delete('/:id', async (req, res) => {
    try {
        const reviewId = req.params.id;

        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM reviews WHERE id = ?', [reviewId]);
            } catch (te) {
                console.warn('⚠️ [Turso Cloud] delete review error:', te.message);
            }
        }

        // 2. Supabase Cloud
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('reviews').delete().eq('id', reviewId);
            } catch (se) {
                console.warn('⚠️ [Supabase] delete review error:', se.message);
            }
        }

        // 3. Local SQLite
        try {
            db.prepare('DELETE FROM reviews WHERE id = ?').run(reviewId);
        } catch (le) {
            console.warn('⚠️ [SQLite] delete review error:', le.message);
        }

        res.json({ success: true, message: 'Review deleted successfully', id: reviewId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/reviews
 * Clear all reviews across all databases (Admin utility).
 */
router.delete('/', async (req, res) => {
    try {
        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM reviews');
            } catch (te) {
                console.warn('⚠️ [Turso Cloud] clear all reviews error:', te.message);
            }
        }
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('reviews').delete().neq('id', '');
            } catch (se) {}
        }
        try {
            db.prepare('DELETE FROM reviews').run();
        } catch (le) {}

        res.json({ success: true, message: 'All reviews cleared successfully' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
