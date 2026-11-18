const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

/**
 * GET /api/announcements
 * Fetch active announcements (Turso Primary)
 */
router.get('/', async (req, res) => {
    try {
        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            const tursoRows = await queryTurso('SELECT * FROM announcements WHERE is_active = 1 ORDER BY created_at DESC');
            if (Array.isArray(tursoRows)) {
                return res.json({ success: true, count: tursoRows.length, data: tursoRows, source: 'turso' });
            }
        }

        // 2. Supabase Cloud (Secondary Fallback)
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase
                .from('announcements')
                .select('*')
                .eq('is_active', true)
                .order('created_at', { ascending: false });

            if (!error && Array.isArray(data)) {
                return res.json({ success: true, count: data.length, data, source: 'supabase' });
            }
        }

        // 3. SQLite Fallback
        const rows = db.prepare('SELECT * FROM announcements WHERE is_active = 1 ORDER BY created_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows, source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/announcements
 * Create an announcement
 */
router.post('/', async (req, res) => {
    try {
        const { id: customId, tag, heading, title, content, image = 'images/luxury_tea_estate.jpg', link = '#home', premium = false } = req.body;
        const finalHeading = heading || title;

        if (!tag || !finalHeading || !content) {
            return res.status(400).json({
                success: false,
                error: 'Tag, heading/title, and content are required.'
            });
        }

        const id = customId || ('ann-' + Date.now().toString(36));
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

        const record = {
            id,
            tag,
            date_str: dateStr,
            heading: finalHeading,
            content,
            image,
            link,
            is_active: 1
        };

        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    INSERT OR REPLACE INTO announcements (id, tag, date_str, heading, content, image, link, is_active)
                    VALUES (?, ?, ?, ?, ?, ?, ?, 1)
                `, [id, tag, dateStr, finalHeading, content, image, link]);
            } catch (te) {
                console.warn('⚠️ [Turso] Announcement insert error:', te.message);
            }
        }

        // 2. Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('announcements').upsert([record]);
            } catch (se) {
                console.warn('⚠️ [Supabase] Announcement insert error:', se.message);
            }
        }

        // 3. SQLite
        try {
            db.prepare(`
                INSERT OR REPLACE INTO announcements (id, tag, date_str, heading, content, image, link, is_active)
                VALUES (?, ?, ?, ?, ?, ?, ?, 1)
            `).run(id, tag, dateStr, finalHeading, content, image, link);
        } catch (e) {}

        res.status(201).json({ success: true, data: record });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/announcements/:id
 */
router.delete('/:id', async (req, res) => {
    try {
        const annId = req.params.id;

        // 1. Turso Cloud
        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM announcements WHERE id = ?', [annId]);
            } catch (te) {
                console.warn('⚠️ [Turso] Announcement delete error:', te.message);
            }
        }

        // 2. Supabase
        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('announcements').delete().eq('id', annId);
            if (error) console.warn('⚠️ Supabase delete error:', error.message);
        }

        // 3. SQLite
        try {
            db.prepare('DELETE FROM announcements WHERE id = ?').run(annId);
        } catch (e) {}

        res.json({ success: true, message: 'Announcement deleted successfully', id: annId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
