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
                const formatted = data.map(r => {
                    const bg = typeof r.brewing_guide === 'string' ? JSON.parse(r.brewing_guide) : (r.brewing_guide || {});
                    const fNotes = Array.isArray(r.flavor_notes) ? r.flavor_notes : (typeof r.flavor_notes === 'string' ? JSON.parse(r.flavor_notes) : []);
                    const radar = bg.sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
                    const fProfile = bg.flavorProfile || (fNotes.length > 0 ? fNotes.join(', ') : '');
                    const tNotes = (bg.tastingNotes && bg.tastingNotes.length > 0) ? bg.tastingNotes : (fNotes.length > 0 ? fNotes : ['Single Estate', 'Artisanal Harvest']);
                    return {
                        ...r,
                        price: Number(r.price_usd || 0),
                        price_usd: Number(r.price_usd || 0),
                        leafGrade: r.grade || bg.leafGrade || 'Single-Estate Reserve',
                        weight: bg.weight || '100g',
                        symbol: bg.symbol || '',
                        steepTemp: bg.temp || bg.steepTemp || '90°C',
                        steepTime: bg.time || bg.steepTime || '3-4 Minutes',
                        stock: bg.stock_status || (typeof r.stock === 'number' ? (r.stock <= 5 ? 'Low Stock' : 'In Stock') : (r.stock || 'In Stock')),
                        stock_quantity: typeof r.stock === 'number' ? r.stock : 10,
                        image: normalizeProductImage(r.image),
                        flavor_notes: fNotes,
                        flavorProfile: fProfile,
                        tastingNotes: tNotes,
                        sensoryRadar: radar,
                        steepSeconds: bg.steepSeconds || 180,
                        brewing_guide: bg,
                        is_reserve: Boolean(r.is_reserve)
                    };
                });
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
            const bg = r.brewing_guide ? JSON.parse(r.brewing_guide) : {};
            const fNotes = r.flavor_notes ? JSON.parse(r.flavor_notes) : [];
            const radar = bg.sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
            const fProfile = bg.flavorProfile || (fNotes.length > 0 ? fNotes.join(', ') : '');
            const tNotes = (bg.tastingNotes && bg.tastingNotes.length > 0) ? bg.tastingNotes : (fNotes.length > 0 ? fNotes : ['Single Estate', 'Artisanal Harvest']);
            return {
                ...r,
                price: priceVal,
                price_usd: priceVal,
                leafGrade: r.grade || bg.leafGrade || 'Single-Estate Reserve',
                weight: bg.weight || '100g',
                symbol: bg.symbol || '',
                steepTemp: bg.temp || bg.steepTemp || '90°C',
                steepTime: bg.time || bg.steepTime || '3-4 Minutes',
                stock: bg.stock_status || (typeof r.stock === 'number' ? (r.stock <= 5 ? 'Low Stock' : 'In Stock') : (r.stock || 'In Stock')),
                stock_quantity: typeof r.stock === 'number' ? r.stock : 10,
                image: normalizeProductImage(r.image),
                flavor_notes: fNotes,
                flavorProfile: fProfile,
                tastingNotes: tNotes,
                sensoryRadar: radar,
                steepSeconds: bg.steepSeconds || 180,
                brewing_guide: bg,
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
                const bg = typeof data.brewing_guide === 'string' ? JSON.parse(data.brewing_guide) : (data.brewing_guide || {});
                const fNotes = Array.isArray(data.flavor_notes) ? data.flavor_notes : (typeof data.flavor_notes === 'string' ? JSON.parse(data.flavor_notes) : []);
                const radar = bg.sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
                const fProfile = bg.flavorProfile || (fNotes.length > 0 ? fNotes.join(', ') : '');
                const tNotes = (bg.tastingNotes && bg.tastingNotes.length > 0) ? bg.tastingNotes : (fNotes.length > 0 ? fNotes : ['Single Estate', 'Artisanal Harvest']);
                return res.json({
                    success: true,
                    data: {
                        ...data,
                        price: Number(data.price_usd || 0),
                        leafGrade: data.grade || bg.leafGrade || 'Single-Estate Reserve',
                        weight: bg.weight || '100g',
                        symbol: bg.symbol || '',
                        steepTemp: bg.temp || bg.steepTemp || '90°C',
                        steepTime: bg.time || bg.steepTime || '3-4 Minutes',
                        stock: bg.stock_status || (typeof data.stock === 'number' ? (data.stock <= 5 ? 'Low Stock' : 'In Stock') : (data.stock || 'In Stock')),
                        stock_quantity: typeof data.stock === 'number' ? data.stock : 10,
                        flavor_notes: fNotes,
                        flavorProfile: fProfile,
                        tastingNotes: tNotes,
                        sensoryRadar: radar,
                        steepSeconds: bg.steepSeconds || 180,
                        brewing_guide: bg,
                        is_reserve: Boolean(data.is_reserve)
                    }
                });
            }
        }

        const row = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
        if (!row) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        const bg = row.brewing_guide ? JSON.parse(row.brewing_guide) : {};
        const fNotes = row.flavor_notes ? JSON.parse(row.flavor_notes) : [];
        const radar = bg.sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
        const fProfile = bg.flavorProfile || (fNotes.length > 0 ? fNotes.join(', ') : '');
        const tNotes = (bg.tastingNotes && bg.tastingNotes.length > 0) ? bg.tastingNotes : (fNotes.length > 0 ? fNotes : ['Single Estate', 'Artisanal Harvest']);

        const product = {
            ...row,
            leafGrade: row.grade || bg.leafGrade || 'Single-Estate Reserve',
            weight: bg.weight || '100g',
            symbol: bg.symbol || '',
            steepTemp: bg.temp || bg.steepTemp || '90°C',
            steepTime: bg.time || bg.steepTime || '3-4 Minutes',
            stock: bg.stock_status || (typeof row.stock === 'number' ? (row.stock <= 5 ? 'Low Stock' : 'In Stock') : (row.stock || 'In Stock')),
            stock_quantity: typeof row.stock === 'number' ? row.stock : 10,
            flavor_notes: fNotes,
            flavorProfile: fProfile,
            tastingNotes: tNotes,
            sensoryRadar: radar,
            steepSeconds: bg.steepSeconds || 180,
            brewing_guide: bg,
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
            season = '2026 Flush', grade, leafGrade, elevation = '1,200m Wellawela Slopes',
            price_usd, price, stock, image = 'images/Product.jpeg',
            description, desc, flavor_notes = [], brewing_guide = null,
            is_reserve = false, flavorProfile, tastingNotes, sensoryRadar, steepSeconds,
            weight, symbol, steepTemp, steepTime
        } = req.body;

        const finalPrice = Number(price_usd || price || 0);
        if (!name || !finalPrice) {
            return res.status(400).json({ success: false, error: 'Name and price are required.' });
        }

        const id = req.body.id || ('prod-' + Date.now().toString(36));
        const finalGrade = leafGrade || grade || 'Finest Reserve';
        const finalDesc = description || desc || '';
        const finalTastingNotes = Array.isArray(tastingNotes) ? tastingNotes : (Array.isArray(flavor_notes) ? flavor_notes : []);
        const finalFlavorProfile = flavorProfile || (finalTastingNotes.length > 0 ? finalTastingNotes.join(', ') : 'Single-Estate Reserve');
        const finalRadar = sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
        const finalSteepSeconds = parseInt(steepSeconds, 10) || 180;
        const stockStatusStr = typeof stock === 'string' ? stock : (Number(stock) <= 5 ? 'Low Stock' : 'In Stock');
        const stockInt = typeof stock === 'number' ? stock : (stock === 'Low Stock' ? 5 : (stock === 'Rare Reserve' ? 3 : 15));

        const bg = {
            ...(typeof brewing_guide === 'object' && brewing_guide !== null ? brewing_guide : {}),
            temp: steepTemp || (brewing_guide && brewing_guide.temp) || '90°C',
            time: steepTime || (brewing_guide && brewing_guide.time) || '3-4 Minutes',
            weight: weight || '100g Vintage Tin',
            symbol: symbol || '',
            stock_status: stockStatusStr,
            sensoryRadar: finalRadar,
            flavorProfile: finalFlavorProfile,
            tastingNotes: finalTastingNotes,
            steepSeconds: finalSteepSeconds
        };

        const record = {
            id,
            name,
            category,
            type,
            season,
            grade: finalGrade,
            elevation,
            price_usd: finalPrice,
            stock: stockInt,
            image,
            description: finalDesc,
            flavor_notes: finalTastingNotes,
            brewing_guide: bg,
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
                    `).run(id, name, category, type, season, finalGrade, elevation, finalPrice, Number(stock) || 10, image, finalDesc, JSON.stringify(finalTastingNotes), JSON.stringify(bg), is_reserve ? 1 : 0);
                } catch (e) {}

                return res.status(201).json({
                    success: true,
                    data: {
                        ...data,
                        leafGrade: finalGrade,
                        weight: bg.weight,
                        symbol: bg.symbol,
                        steepTemp: bg.temp,
                        steepTime: bg.time,
                        stock: stockStatusStr,
                        stock_quantity: stockInt,
                        flavorProfile: finalFlavorProfile,
                        tastingNotes: finalTastingNotes,
                        sensoryRadar: finalRadar,
                        steepSeconds: finalSteepSeconds
                    }
                });
            }
        }

        // SQLite fallback
        const insert = db.prepare(`
            INSERT INTO products (id, name, category, type, season, grade, elevation, price_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insert.run(
            id, name, category, type, season, finalGrade, elevation,
            finalPrice, stockInt, image, finalDesc,
            JSON.stringify(finalTastingNotes), JSON.stringify(bg),
            is_reserve ? 1 : 0
        );

        const created = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
        res.status(201).json({
            success: true,
            data: {
                ...created,
                leafGrade: finalGrade,
                weight: bg.weight,
                symbol: bg.symbol,
                steepTemp: bg.temp,
                steepTime: bg.time,
                stock: stockStatusStr,
                stock_quantity: stockInt,
                flavor_notes: finalTastingNotes,
                flavorProfile: finalFlavorProfile,
                tastingNotes: finalTastingNotes,
                sensoryRadar: finalRadar,
                steepSeconds: finalSteepSeconds,
                brewing_guide: bg,
                is_reserve: Boolean(created.is_reserve)
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/products/:id
 */
router.put('/:id', async (req, res) => {
    try {
        const prodId = req.params.id;
        const {
            name, category, type, season, grade, leafGrade, elevation,
            price_usd, price, stock, image, description, desc,
            flavor_notes, brewing_guide, is_reserve,
            flavorProfile, tastingNotes, sensoryRadar, steepSeconds,
            weight, symbol, steepTemp, steepTime
        } = req.body;

        const updates = {};
        if (name !== undefined) updates.name = name;
        if (category !== undefined) updates.category = category;
        if (type !== undefined) updates.type = type;
        if (season !== undefined) updates.season = season;
        if (grade !== undefined || leafGrade !== undefined) updates.grade = grade || leafGrade;
        if (elevation !== undefined) updates.elevation = elevation;
        if (price_usd !== undefined || price !== undefined) updates.price_usd = Number(price_usd || price);
        if (stock !== undefined) {
            const stockInt = typeof stock === 'number' ? stock : (stock === 'Low Stock' ? 5 : (stock === 'Rare Reserve' ? 3 : 15));
            updates.stock = stockInt;
        }
        if (image !== undefined) updates.image = image;
        if (description !== undefined || desc !== undefined) updates.description = description || desc;

        const finalTNotes = tastingNotes !== undefined ? (Array.isArray(tastingNotes) ? tastingNotes : [tastingNotes]) : (flavor_notes !== undefined ? (Array.isArray(flavor_notes) ? flavor_notes : [flavor_notes]) : undefined);
        if (finalTNotes !== undefined) updates.flavor_notes = finalTNotes;

        if (brewing_guide !== undefined || sensoryRadar !== undefined || flavorProfile !== undefined || finalTNotes !== undefined || steepSeconds !== undefined || weight !== undefined || symbol !== undefined || steepTemp !== undefined || steepTime !== undefined || stock !== undefined) {
            const baseBg = typeof brewing_guide === 'object' && brewing_guide !== null ? brewing_guide : {};
            updates.brewing_guide = {
                ...baseBg,
                ...(sensoryRadar ? { sensoryRadar } : {}),
                ...(flavorProfile ? { flavorProfile } : {}),
                ...(finalTNotes ? { tastingNotes: finalTNotes } : {}),
                ...(steepSeconds ? { steepSeconds: parseInt(steepSeconds, 10) } : {}),
                ...(weight ? { weight } : {}),
                ...(symbol !== undefined ? { symbol } : {}),
                ...(steepTemp ? { temp: steepTemp } : {}),
                ...(steepTime ? { time: steepTime } : {}),
                ...(typeof stock === 'string' ? { stock_status: stock } : {})
            };
        }
        if (is_reserve !== undefined) updates.is_reserve = Boolean(is_reserve);

        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('products').update(updates).eq('id', prodId).select().single();
            if (!error && data) {
                return res.json({ success: true, data });
            }
        }

        // SQLite update
        try {
            db.prepare(`
                UPDATE products
                SET name = COALESCE(?, name), price_usd = COALESCE(?, price_usd), stock = COALESCE(?, stock),
                    flavor_notes = COALESCE(?, flavor_notes), brewing_guide = COALESCE(?, brewing_guide)
                WHERE id = ?
            `).run(
                name, Number(price_usd || price), Number(stock),
                finalTNotes ? JSON.stringify(finalTNotes) : null,
                updates.brewing_guide ? JSON.stringify(updates.brewing_guide) : null,
                prodId
            );
        } catch (e) {}

        res.json({ success: true, message: 'Product updated successfully' });
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
