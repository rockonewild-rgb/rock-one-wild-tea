const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

/**
 * GET /api/products
 * Fetch all products with optional filtering
 */
router.get('/', (req, res) => {
    try {
        const { category, search, reserve } = req.query;
        let query = 'SELECT * FROM products WHERE 1=1';
        const params = [];

        if (category && category !== 'all') {
            query += ' AND category = ?';
            params.push(category);
        }

        if (reserve !== undefined) {
            query += ' AND is_reserve = ?';
            params.push(reserve === 'true' || reserve === '1' ? 1 : 0);
        }

        if (search) {
            query += ' AND (name LIKE ? OR description LIKE ? OR flavor_notes LIKE ?)';
            const term = `%${search}%`;
            params.push(term, term, term);
        }

        query += ' ORDER BY price_usd DESC';
        const rows = db.prepare(query).all(...params);

        // Parse JSON fields
        const products = rows.map(r => ({
            ...r,
            flavor_notes: r.flavor_notes ? JSON.parse(r.flavor_notes) : [],
            brewing_guide: r.brewing_guide ? JSON.parse(r.brewing_guide) : null,
            is_reserve: Boolean(r.is_reserve)
        }));

        res.json({ success: true, count: products.length, data: products });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/products/:id
 * Fetch a single product by ID
 */
router.get('/:id', (req, res) => {
    try {
        const row = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
        if (!row) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        const product = {
            ...row,
            flavor_notes: row.flavor_notes ? JSON.parse(row.flavor_notes) : [],
            brewing_guide: row.brewing_guide ? JSON.parse(row.brewing_guide) : null,
            is_reserve: Boolean(row.is_reserve)
        };

        res.json({ success: true, data: product });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/products
 * Create a new product
 */
router.post('/', (req, res) => {
    try {
        const {
            name, category = 'artisan', type = 'Specialty Tea',
            season = '2026 Flush', grade = 'OP1', elevation = '1,200m Wallawela',
            price_usd, stock = 10, image = 'images/tea_box.png',
            description = '', flavor_notes = [], brewing_guide = null,
            is_reserve = false
        } = req.body;

        if (!name || !price_usd) {
            return res.status(400).json({ success: false, error: 'Name and price_usd are required.' });
        }

        const id = 'prod-' + Date.now().toString(36);
        const insert = db.prepare(`
            INSERT INTO products (id, name, category, type, season, grade, elevation, price_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insert.run(
            id, name, category, type, season, grade, elevation,
            Number(price_usd), Number(stock), image, description,
            JSON.stringify(flavor_notes), brewing_guide ? JSON.stringify(brewing_guide) : null,
            is_reserve ? 1 : 0
        );

        const created = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
        res.status(201).json({
            success: true,
            data: {
                ...created,
                flavor_notes: JSON.parse(created.flavor_notes || '[]'),
                brewing_guide: created.brewing_guide ? JSON.parse(created.brewing_guide) : null,
                is_reserve: Boolean(created.is_reserve)
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/products/:id
 * Update product
 */
router.put('/:id', (req, res) => {
    try {
        const existing = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
        if (!existing) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        const {
            name = existing.name,
            category = existing.category,
            type = existing.type,
            season = existing.season,
            grade = existing.grade,
            elevation = existing.elevation,
            price_usd = existing.price_usd,
            stock = existing.stock,
            image = existing.image,
            description = existing.description,
            flavor_notes = existing.flavor_notes ? JSON.parse(existing.flavor_notes) : [],
            brewing_guide = existing.brewing_guide ? JSON.parse(existing.brewing_guide) : null,
            is_reserve = existing.is_reserve
        } = req.body;

        const update = db.prepare(`
            UPDATE products
            SET name = ?, category = ?, type = ?, season = ?, grade = ?,
                elevation = ?, price_usd = ?, stock = ?, image = ?,
                description = ?, flavor_notes = ?, brewing_guide = ?, is_reserve = ?
            WHERE id = ?
        `);

        update.run(
            name, category, type, season, grade, elevation,
            Number(price_usd), Number(stock), image, description,
            JSON.stringify(flavor_notes), brewing_guide ? JSON.stringify(brewing_guide) : null,
            is_reserve ? 1 : 0,
            req.params.id
        );

        const updated = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
        res.json({
            success: true,
            data: {
                ...updated,
                flavor_notes: JSON.parse(updated.flavor_notes || '[]'),
                brewing_guide: updated.brewing_guide ? JSON.parse(updated.brewing_guide) : null,
                is_reserve: Boolean(updated.is_reserve)
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/products/:id
 */
router.delete('/:id', (req, res) => {
    try {
        const existing = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
        if (!existing) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        db.prepare('DELETE FROM products WHERE id = ?').run(req.params.id);
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
