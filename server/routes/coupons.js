const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

/**
 * GET /api/coupons
 * Fetch all coupons/vouchers
 */
router.get('/', async (req, res) => {
    try {
        if (isTursoAvailable()) {
            try {
                const tursoRows = await queryTurso('SELECT * FROM coupons ORDER BY created_at DESC');
                if (Array.isArray(tursoRows)) {
                    return res.json({ success: true, count: tursoRows.length, data: tursoRows, source: 'turso' });
                }
            } catch (te) {
                // Turso fallback to SQLite
            }
        }

        const rows = db.prepare('SELECT * FROM coupons ORDER BY created_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows, source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/coupons
 * Create a new coupon
 */
router.post('/', async (req, res) => {
    try {
        let { code, percent, label, min_spend = 0, expiry_date = null, status = 'active' } = req.body;

        if (!code || !percent) {
            return res.status(400).json({ success: false, error: 'Coupon code and discount percentage are required.' });
        }

        code = String(code).trim().toUpperCase();
        percent = parseInt(percent, 10);
        if (isNaN(percent) || percent <= 0 || percent > 95) {
            return res.status(400).json({ success: false, error: 'Discount percent must be between 1% and 95%.' });
        }

        if (!label) {
            label = `${percent}% OFF Privilege Reserve`;
        }

        const id = 'cpn-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 4);
        const createdAt = new Date().toISOString();

        // 1. SQLite primary write
        const stmt = db.prepare(`
            INSERT INTO coupons (id, code, percent, label, min_spend, expiry_date, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);
        stmt.run(id, code, percent, label, Number(min_spend) || 0, expiry_date || null, status, createdAt);

        const newCoupon = { id, code, percent, label, min_spend: Number(min_spend) || 0, expiry_date, status, created_at: createdAt };

        // 2. Turso Cloud sync (async best-effort)
        if (isTursoAvailable()) {
            executeTurso(`
                INSERT INTO coupons (id, code, percent, label, min_spend, expiry_date, status, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `, [id, code, percent, label, Number(min_spend) || 0, expiry_date || null, status, createdAt]).catch(() => {});
        }

        res.status(201).json({ success: true, data: newCoupon });
    } catch (err) {
        if (err.message && err.message.includes('UNIQUE constraint failed')) {
            return res.status(409).json({ success: false, error: 'A coupon with this code already exists.' });
        }
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PATCH /api/coupons/:id
 * Toggle coupon status or edit details
 */
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status, label, percent, min_spend, expiry_date } = req.body;

        const existing = db.prepare('SELECT * FROM coupons WHERE id = ?').get(id);
        if (!existing) {
            return res.status(404).json({ success: false, error: 'Coupon not found.' });
        }

        const newStatus = status !== undefined ? status : existing.status;
        const newLabel = label !== undefined ? label : existing.label;
        const newPercent = percent !== undefined ? parseInt(percent, 10) : existing.percent;
        const newMinSpend = min_spend !== undefined ? Number(min_spend) : existing.min_spend;
        const newExpiry = expiry_date !== undefined ? expiry_date : existing.expiry_date;

        db.prepare(`
            UPDATE coupons 
            SET status = ?, label = ?, percent = ?, min_spend = ?, expiry_date = ?
            WHERE id = ?
        `).run(newStatus, newLabel, newPercent, newMinSpend, newExpiry, id);

        if (isTursoAvailable()) {
            executeTurso(`
                UPDATE coupons 
                SET status = ?, label = ?, percent = ?, min_spend = ?, expiry_date = ?
                WHERE id = ?
            `, [newStatus, newLabel, newPercent, newMinSpend, newExpiry, id]).catch(() => {});
        }

        const updated = db.prepare('SELECT * FROM coupons WHERE id = ?').get(id);
        res.json({ success: true, data: updated });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/coupons/:id
 * Delete coupon
 */
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        db.prepare('DELETE FROM coupons WHERE id = ?').run(id);

        if (isTursoAvailable()) {
            executeTurso('DELETE FROM coupons WHERE id = ?', [id]).catch(() => {});
        }

        res.json({ success: true, message: `Coupon ${id} deleted successfully.` });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
