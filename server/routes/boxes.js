const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

/**
 * GET /api/boxes
 * Fetch all collector boxes and their allocation status.
 * Turso Cloud is the Primary Database.
 */
router.get('/', async (req, res) => {
    try {
        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            const tursoRows = await queryTurso('SELECT * FROM boxes ORDER BY number ASC');
            if (Array.isArray(tursoRows)) {
                return res.json({ success: true, count: tursoRows.length, data: tursoRows, source: 'turso' });
            }
        }

        // 2. Supabase Cloud (Secondary Fallback)
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('boxes').select('*').order('number', { ascending: true });
            if (!error && Array.isArray(data)) {
                return res.json({ success: true, count: data.length, data, source: 'supabase' });
            }
        }

        // 3. Local SQLite (Offline Fallback)
        const rows = db.prepare('SELECT * FROM boxes ORDER BY number ASC').all();
        res.json({ success: true, count: rows.length, data: rows, source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/boxes
 * Create / Add a new collector box
 */
router.post('/', async (req, res) => {
    try {
        const { number, name, reserve_flush, price_usd, status = 'available', allocated_to = null, gold_seal_code = '' } = req.body;
        const boxNumber = parseInt(number, 10);
        if (isNaN(boxNumber) || !name) {
            return res.status(400).json({ success: false, error: 'Valid box number and name are required.' });
        }

        const price = Number(price_usd || 150);
        const seal = gold_seal_code || `RW-2026-BOX-${String(boxNumber).padStart(2, '0')}`;
        const flush = reserve_flush || 'Highland Single-Estate Flush';

        // 1. Insert into Turso
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    INSERT OR REPLACE INTO boxes (number, name, reserve_flush, price_usd, status, allocated_to, gold_seal_code, updated_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
                `, [boxNumber, name, flush, price, status, allocated_to, seal]);
            } catch (te) {
                console.warn('⚠️ [Turso] Box create notice:', te.message);
            }
        }

        // 2. Insert into Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('boxes').upsert([{
                    number: boxNumber,
                    name,
                    reserve_flush: flush,
                    price_usd: price,
                    status,
                    allocated_to,
                    gold_seal_code: seal,
                    updated_at: new Date().toISOString()
                }], { onConflict: 'number' });
            } catch (se) {
                console.warn('⚠️ [Supabase] Box create notice:', se.message);
            }
        }

        // 3. Insert into SQLite
        try {
            db.prepare(`
                INSERT OR REPLACE INTO boxes (number, name, reserve_flush, price_usd, status, allocated_to, gold_seal_code, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            `).run(boxNumber, name, flush, price, status, allocated_to, seal);
        } catch (le) {}

        res.status(201).json({
            success: true,
            message: `Collector box #${boxNumber} created successfully.`,
            data: { number: boxNumber, name, reserve_flush: flush, price_usd: price, status, allocated_to, gold_seal_code: seal }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/boxes/:number
 * Update collector box status, allocation, pricing, or flush
 */
router.put('/:number', async (req, res) => {
    try {
        const boxNumber = parseInt(req.params.number, 10);
        const { status, allocated_to, reserve_flush, price_usd } = req.body;

        const updates = {};
        if (status !== undefined) updates.status = status;
        if (allocated_to !== undefined) updates.allocated_to = allocated_to;
        if (reserve_flush !== undefined) updates.reserve_flush = reserve_flush;
        if (price_usd !== undefined) updates.price_usd = Number(price_usd);

        // 1. Update Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    UPDATE boxes
                    SET status = COALESCE(?, status),
                        allocated_to = ?,
                        reserve_flush = COALESCE(?, reserve_flush),
                        price_usd = COALESCE(?, price_usd),
                        updated_at = CURRENT_TIMESTAMP
                    WHERE number = ?
                `, [status || null, allocated_to !== undefined ? allocated_to : null, reserve_flush || null, price_usd !== undefined ? Number(price_usd) : null, boxNumber]);
            } catch (te) {
                console.warn('⚠️ [Turso] Box update notice:', te.message);
            }
        }

        // 2. Update Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('boxes').update({
                    ...updates,
                    updated_at: new Date().toISOString()
                }).eq('number', boxNumber);
            } catch (se) {
                console.warn('⚠️ [Supabase] Box update notice:', se.message);
            }
        }

        // 3. Update SQLite
        try {
            db.prepare(`
                UPDATE boxes
                SET status = COALESCE(?, status),
                    allocated_to = ?,
                    reserve_flush = COALESCE(?, reserve_flush),
                    price_usd = COALESCE(?, price_usd),
                    updated_at = CURRENT_TIMESTAMP
                WHERE number = ?
            `).run(status || null, allocated_to !== undefined ? allocated_to : null, reserve_flush || null, price_usd !== undefined ? Number(price_usd) : null, boxNumber);
        } catch (e) {}

        // Fetch latest state from Turso or SQLite
        let updatedBox = null;
        if (isTursoAvailable()) {
            const rows = await queryTurso('SELECT * FROM boxes WHERE number = ?', [boxNumber]);
            if (rows && rows.length > 0) updatedBox = rows[0];
        }
        if (!updatedBox) {
            updatedBox = db.prepare('SELECT * FROM boxes WHERE number = ?').get(boxNumber);
        }

        res.json({ success: true, message: `Box #${boxNumber} updated successfully`, data: updatedBox });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/boxes/:number
 * Delete a single collector box by number
 */
router.delete('/:number', async (req, res) => {
    try {
        const boxNumber = parseInt(req.params.number, 10);

        // 1. Delete from Turso Cloud
        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM boxes WHERE number = ?', [boxNumber]);
            } catch (te) {
                console.warn('⚠️ [Turso] Box delete notice:', te.message);
            }
        }

        // 2. Delete from Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('boxes').delete().eq('number', boxNumber);
            } catch (se) {
                console.warn('⚠️ [Supabase] Box delete notice:', se.message);
            }
        }

        // 3. Delete from SQLite
        try {
            db.prepare('DELETE FROM boxes WHERE number = ?').run(boxNumber);
        } catch (e) {}

        res.json({ success: true, message: `Box #${boxNumber} deleted successfully.`, number: boxNumber });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/boxes
 * Delete ALL collector boxes across all databases
 */
router.delete('/', async (req, res) => {
    try {
        // 1. Clear Turso Cloud
        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM boxes');
            } catch (te) {
                console.warn('⚠️ [Turso] Clear boxes notice:', te.message);
            }
        }

        // 2. Clear Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('boxes').delete().neq('number', -999999);
            } catch (se) {
                console.warn('⚠️ [Supabase] Clear boxes notice:', se.message);
            }
        }

        // 3. Clear SQLite
        try {
            db.prepare('DELETE FROM boxes').run();
        } catch (e) {}

        res.json({ success: true, message: 'All collector boxes have been cleared across databases.' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
