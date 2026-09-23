const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');

/**
 * GET /api/announcements
 * Fetch active announcements
 */
router.get('/', async (req, res) => {
    try {
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase
                .from('announcements')
                .select('*')
                .eq('is_active', true)
                .order('created_at', { ascending: false });

            if (!error && data) {
                return res.json({ success: true, count: data.length, data });
            }
        }

        // SQLite fallback
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
            is_active: true
        };

        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('announcements').insert([record]).select().single();
            if (!error && data) {
                // Keep local sqlite in sync
                try {
                    db.prepare(`
                        INSERT OR REPLACE INTO announcements (id, tag, date_str, heading, content, image, link, is_active)
                        VALUES (?, ?, ?, ?, ?, ?, ?, 1)
                    `).run(id, tag, dateStr, finalHeading, content, image, link);
                } catch (e) {}

                return res.status(201).json({ success: true, data });
            }
        }

        // SQLite fallback
        const insert = db.prepare(`
            INSERT INTO announcements (id, tag, date_str, heading, content, image, link, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, 1)
        `);
        insert.run(id, tag, dateStr, finalHeading, content, image, link);

        const created = db.prepare('SELECT * FROM announcements WHERE id = ?').get(id);
        res.status(201).json({ success: true, data: created });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/announcements/:id
 * Delete an announcement from Supabase & SQLite
 */
router.delete('/:id', async (req, res) => {
    try {
        const annId = req.params.id;

        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('announcements').delete().eq('id', annId);
            if (error) {
                console.warn('⚠️ Supabase delete error:', error.message);
            }
        }

        // SQLite deletion
        try {
            db.prepare('DELETE FROM announcements WHERE id = ?').run(annId);
        } catch (e) {}

        res.json({ success: true, message: 'Announcement deleted successfully', id: annId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
