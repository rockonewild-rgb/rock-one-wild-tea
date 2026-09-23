const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');

function normalizeProductImage(img) {
    if (!img) return 'images/Product.jpeg';
    if (img.includes('silver_tips')) return 'images/Product.jpeg';
    if (img.includes('black_tea')) return 'images/luxury_tea_tin.jpg';
    if (img.includes('green_tea')) return 'images/luxury_tea_chest.jpg';
    if (img.includes('tea_box')) return 'images/Gift Box.jpeg';
    return img;
}

/**
 * GET /api/products
 * Fetch all products
 */
router.get('/', async (req, res) => {
    try {
        const { category, search, reserve } = req.query;

        if (isSupabaseAvailable()) {
            let query = supabase.from('products').select('*');
            if (category && category !== 'all') {
                query = query.eq('category', category);
            }
            if (reserve !== undefined) {
                query = query.eq('is_reserve', reserve === 'true' || reserve === '1');
            }
            if (search) {
                query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
            }
            query = query.order('price_usd', { ascending: false });

            const { data, error } = await query;
            if (!error && data) {
                const formatted = data.map(r => ({
                    ...r,
                    price: Number(r.price_usd || 0),
                    price_usd: Number(r.price_usd || 0),
                    image: normalizeProductImage(r.image),
                    flavor_notes: Array.isArray(r.flavor_notes) ? r.flavor_notes : (typeof r.flavor_notes === 'string' ? JSON.parse(r.flavor_notes) : []),
                    brewing_guide: typeof r.brewing_guide === 'string' ? JSON.parse(r.brewing_guide) : r.brewing_guide,
                    is_reserve: Boolean(r.is_reserve)
                }));
                return res.json({ success: true, count: formatted.length, data: formatted });
            }
        }

        // SQLite fallback
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

        const products = rows.map(r => {
            const priceVal = Number(r.price_usd !== undefined ? r.price_usd : (r.price !== undefined ? r.price : 0)) || 0;
            return {
                ...r,
                price: priceVal,
                price_usd: priceVal,
                image: normalizeProductImage(r.image),
                flavor_notes: r.flavor_notes ? JSON.parse(r.flavor_notes) : [],
                brewing_guide: r.brewing_guide ? JSON.parse(r.brewing_guide) : null,
                is_reserve: Boolean(r.is_reserve)
            };
        });

        res.json({ success: true, count: products.length, data: products });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/products/:id
 */
router.get('/:id', async (req, res) => {
    try {
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('products').select('*').eq('id', req.params.id).single();
            if (!error && data) {
                return res.json({
                    success: true,
                    data: {
                        ...data,
                        price: Number(data.price_usd || 0),
                        flavor_notes: Array.isArray(data.flavor_notes) ? data.flavor_notes : (typeof data.flavor_notes === 'string' ? JSON.parse(data.flavor_notes) : []),
                        brewing_guide: typeof data.brewing_guide === 'string' ? JSON.parse(data.brewing_guide) : data.brewing_guide,
                        is_reserve: Boolean(data.is_reserve)
                    }
                });
            }
        }

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
 */
router.post('/', async (req, res) => {
    try {
        const {
            name, category = 'artisan', type = 'Specialty Tea',
            season = '2026 Flush', grade = 'OP1', elevation = '1,200m Wallawela',
            price_usd, price, stock = 10, image = 'images/Product.jpeg',
            description = '', flavor_notes = [], brewing_guide = null,
            is_reserve = false
        } = req.body;

        const finalPrice = Number(price_usd || price || 0);
        if (!name || !finalPrice) {
            return res.status(400).json({ success: false, error: 'Name and price are required.' });
        }

        const id = 'prod-' + Date.now().toString(36);
        const record = {
            id,
            name,
            category,
            type,
            season,
            grade,
            elevation,
            price_usd: finalPrice,
            stock: Number(stock),
            image,
            description,
            flavor_notes: Array.isArray(flavor_notes) ? flavor_notes : [],
            brewing_guide: brewing_guide || {},
            is_reserve: Boolean(is_reserve)
        };

        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('products').insert([record]).select().single();
            if (!error && data) {
                // SQLite sync
                try {
                    db.prepare(`
                        INSERT OR REPLACE INTO products (id, name, category, type, season, grade, elevation, price_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    `).run(id, name, category, type, season, grade, elevation, finalPrice, Number(stock), image, description, JSON.stringify(flavor_notes), JSON.stringify(brewing_guide), is_reserve ? 1 : 0);
                } catch (e) {}

                return res.status(201).json({ success: true, data });
            }
        }

        // SQLite fallback
        const insert = db.prepare(`
            INSERT INTO products (id, name, category, type, season, grade, elevation, price_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insert.run(
            id, name, category, type, season, grade, elevation,
            finalPrice, Number(stock), image, description,
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
 * DELETE /api/products/:id
 */
router.delete('/:id', async (req, res) => {
    try {
        const prodId = req.params.id;

        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('products').delete().eq('id', prodId);
            if (error) console.warn('⚠️ Supabase delete error:', error.message);
        }

        try {
            db.prepare('DELETE FROM products WHERE id = ?').run(prodId);
        } catch (e) {}

        res.json({ success: true, message: 'Product deleted successfully', id: prodId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
