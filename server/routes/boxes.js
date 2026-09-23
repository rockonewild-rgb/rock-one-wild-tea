const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');

/**
 * GET /api/boxes
 * Fetch all 10 numbered collector boxes and their allocation status
 */
router.get('/', async (req, res) => {
    try {
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('boxes').select('*').order('number', { ascending: true });
            if (!error && data) {
                return res.json({ success: true, count: data.length, data });
            }
        }

        const rows = db.prepare('SELECT * FROM boxes ORDER BY number ASC').all();
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/boxes/:number
 */
router.put('/:number', async (req, res) => {
    try {
        const boxNumber = parseInt(req.params.number, 10);
        const { status, allocated_to, reserve_flush, price_usd } = req.body;

        if (isSupabaseAvailable()) {
            const updates = {};
            if (status !== undefined) updates.status = status;
            if (allocated_to !== undefined) updates.allocated_to = allocated_to;
            if (reserve_flush !== undefined) updates.reserve_flush = reserve_flush;
            if (price_usd !== undefined) updates.price_usd = Number(price_usd);
            updates.updated_at = new Date().toISOString();

            const { data, error } = await supabase.from('boxes').update(updates).eq('number', boxNumber).select().single();
            if (!error && data) {
                try {
                    db.prepare(`
                        UPDATE boxes SET status = COALESCE(?, status), allocated_to = ?, updated_at = CURRENT_TIMESTAMP
                        WHERE number = ?
                    `).run(status, allocated_to, boxNumber);
                } catch (e) {}

                return res.json({ success: true, data });
            }
        }

        const box = db.prepare('SELECT * FROM boxes WHERE number = ?').get(boxNumber);
        if (!box) {
            return res.status(404).json({ success: false, error: 'Collector box not found' });
        }

        const newStatus = status || box.status;
        const newAllocatedTo = allocated_to !== undefined ? allocated_to : box.allocated_to;
        const newFlush = reserve_flush || box.reserve_flush;
        const newPrice = price_usd !== undefined ? Number(price_usd) : box.price_usd;

        db.prepare(`
            UPDATE boxes
            SET status = ?, allocated_to = ?, reserve_flush = ?, price_usd = ?, updated_at = CURRENT_TIMESTAMP
            WHERE number = ?
        `).run(newStatus, newAllocatedTo, newFlush, newPrice, boxNumber);

        const updatedBox = db.prepare('SELECT * FROM boxes WHERE number = ?').get(boxNumber);
        res.json({ success: true, data: updatedBox });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
