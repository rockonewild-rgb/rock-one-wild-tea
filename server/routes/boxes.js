const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

/**
 * GET /api/boxes
 * Fetch all 10 numbered collector boxes and their allocation status
 */
router.get('/', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM boxes ORDER BY number ASC').all();
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/boxes/:number
 */
router.get('/:number', (req, res) => {
    try {
        const box = db.prepare('SELECT * FROM boxes WHERE number = ?').get(req.params.number);
        if (!box) {
            return res.status(404).json({ success: false, error: 'Collector box not found' });
        }
        res.json({ success: true, data: box });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/boxes/:number
 * Reserve or allocate a collector box
 */
router.put('/:number', (req, res) => {
    try {
        const box = db.prepare('SELECT * FROM boxes WHERE number = ?').get(req.params.number);
        if (!box) {
            return res.status(404).json({ success: false, error: 'Collector box not found' });
        }

        const { status, allocated_to, reserve_flush, price_usd } = req.body;
        const newStatus = status || box.status;
        const newAllocatedTo = allocated_to !== undefined ? allocated_to : box.allocated_to;
        const newFlush = reserve_flush || box.reserve_flush;
        const newPrice = price_usd !== undefined ? Number(price_usd) : box.price_usd;

        const update = db.prepare(`
            UPDATE boxes
            SET status = ?, allocated_to = ?, reserve_flush = ?, price_usd = ?, updated_at = CURRENT_TIMESTAMP
            WHERE number = ?
        `);

        update.run(newStatus, newAllocatedTo, newFlush, newPrice, req.params.number);

        const updatedBox = db.prepare('SELECT * FROM boxes WHERE number = ?').get(req.params.number);
        res.json({ success: true, data: updatedBox });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
