const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');

function normalizeProductImage(img) {
    if (!img) return 'images/Product.jpeg';
    if (img.startsWith('images/products/')) return img;
    if (img.includes('rock_one_')) return img;
    if (img.includes('silver_tips')) return 'images/Product.jpeg';
    if (img.includes('black_tea')) return 'images/luxury_tea_tin.jpg';
    if (img.includes('green_tea')) return 'images/luxury_tea_chest.jpg';
    if (img.includes('tea_box')) return 'images/Gift Box.jpeg';
    return img;
}

function formatProductRow(r) {
    if (!r) return null;
    const priceVal = Number(r.price_usd !== undefined ? r.price_usd : (r.price !== undefined ? r.price : 0)) || 0;
    const shippingVal = Number(r.shipping_fee_usd !== undefined ? r.shipping_fee_usd : (r.shippingCharge !== undefined ? r.shippingCharge : (r.shippingFee || 0))) || 0;
    const bg = typeof r.brewing_guide === 'string' ? JSON.parse(r.brewing_guide) : (r.brewing_guide || {});
    const fNotes = Array.isArray(r.flavor_notes) ? r.flavor_notes : (typeof r.flavor_notes === 'string' ? JSON.parse(r.flavor_notes) : (bg.tastingNotes || []));
    const radar = bg.sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
    const fProfile = bg.flavorProfile || (fNotes.length > 0 ? fNotes.join(', ') : 'Single-Estate Reserve');
    const tNotes = (bg.tastingNotes && bg.tastingNotes.length > 0) ? bg.tastingNotes : (fNotes.length > 0 ? fNotes : ['Single Estate', 'Artisanal Harvest']);
    const stockStatus = bg.stock_status || (typeof r.stock === 'number' ? (r.stock <= 5 ? 'Low Stock' : 'In Stock') : (r.stock || 'In Stock'));
    const stockQty = typeof r.stock === 'number' ? r.stock : (stockStatus === 'Low Stock' ? 5 : 15);
    const steepSec = bg.steepSeconds || (parseInt(bg.time, 10) ? parseInt(bg.time, 10) * 60 : 180);
    const normImg = normalizeProductImage(r.image);
    const imgList = Array.isArray(r.images) && r.images.length > 0 ? r.images : (Array.isArray(bg.images) && bg.images.length > 0 ? bg.images : [normImg]);

    return {
        ...r,
        price: priceVal,
        price_usd: priceVal,
        shipping_fee_usd: shippingVal,
        shippingCharge: shippingVal,
        shippingFee: shippingVal,
        leafGrade: r.grade || bg.leafGrade || 'Single-Estate Reserve',
        subcategory: bg.subcategory || r.subcategory || 'Hot Tea (Gongfu style)',
        weight: bg.weight || '100g Vintage Tin',
        symbol: bg.symbol || '',
        steepTemp: bg.temp || bg.steepTemp || '90°C',
        steepTime: bg.time || bg.steepTime || '3-4 Minutes',
        stock: stockStatus,
        stock_quantity: stockQty,
        image: normImg,
        images: imgList,
        gallery: imgList,
        flavor_notes: fNotes,
        flavorProfile: fProfile,
        tastingNotes: tNotes,
        sensoryRadar: radar,
        steepSeconds: steepSec,
        brewing_guide: bg,
        is_reserve: Boolean(r.is_reserve)
    };
}

/**
 * GET /api/products
 * Fetch all products (Turso Cloud Primary)
 */
router.get('/', async (req, res) => {
    try {
        const { category, search, reserve } = req.query;

        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
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

            const tursoRows = await queryTurso(query, params);
            if (Array.isArray(tursoRows)) {
                const formatted = tursoRows.map(formatProductRow);
                return res.json({ success: true, count: formatted.length, data: formatted, source: 'turso' });
            }
        }

        // 2. Supabase Cloud (Secondary Fallback)
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
            if (!error && Array.isArray(data)) {
                const formatted = data.map(formatProductRow);
                return res.json({ success: true, count: formatted.length, data: formatted, source: 'supabase' });
            }
        }

        // 3. Local SQLite (Offline Fallback)
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
        const formatted = rows.map(formatProductRow);
        res.json({ success: true, count: formatted.length, data: formatted, source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/products/:id
 * Fetch single product by ID
 */
router.get('/:id', async (req, res) => {
    try {
        const prodId = req.params.id;

        // 1. Turso Cloud
        if (isTursoAvailable()) {
            const rows = await queryTurso('SELECT * FROM products WHERE id = ?', [prodId]);
            if (Array.isArray(rows) && rows.length > 0) {
                return res.json({ success: true, data: formatProductRow(rows[0]), source: 'turso' });
            }
        }

        // 2. Supabase
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('products').select('*').eq('id', prodId).single();
            if (!error && data) {
                return res.json({ success: true, data: formatProductRow(data), source: 'supabase' });
            }
        }

        // 3. SQLite
        const row = db.prepare('SELECT * FROM products WHERE id = ?').get(prodId);
        if (!row) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.json({ success: true, data: formatProductRow(row), source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/products
 * Create a new product across Turso, Supabase, and SQLite
 */
router.post('/', async (req, res) => {
    try {
        const {
            name, category = 'artisan', type = 'Specialty Tea',
            season = '2026 Flush', grade, leafGrade, elevation = '1,200m Wellawela Slopes',
            price_usd, price, stock, image = 'images/Product.jpeg',
            description, desc, flavor_notes = [], brewing_guide = null,
            is_reserve = false, flavorProfile, tastingNotes, sensoryRadar, steepSeconds,
            weight, symbol, steepTemp, steepTime,
            shipping_fee_usd, shippingCharge, shippingFee
        } = req.body;

        const finalPrice = Number(price_usd || price || 0);
        const finalShipping = Number(shipping_fee_usd !== undefined ? shipping_fee_usd : (shippingCharge !== undefined ? shippingCharge : (shippingFee || 0))) || 0;
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
        const finalSubcategory = req.body.subcategory || req.body.sub_category || (brewing_guide && brewing_guide.subcategory) || 'Hot Tea (Gongfu style)';
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
            steepSeconds: finalSteepSeconds,
            shippingCharge: finalShipping,
            shippingFee: finalShipping,
            subcategory: finalSubcategory,
            images: Array.isArray(req.body.images) && req.body.images.length > 0 ? req.body.images : [image]
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
            shipping_fee_usd: finalShipping,
            stock: stockInt,
            image,
            description: finalDesc,
            flavor_notes: finalTastingNotes,
            brewing_guide: bg,
            is_reserve: Boolean(is_reserve)
        };

        // 1. Insert into Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    INSERT OR REPLACE INTO products (id, name, category, type, season, grade, elevation, price_usd, shipping_fee_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `, [
                    id, name, category, type, season, finalGrade, elevation,
                    finalPrice, finalShipping, stockInt, image, finalDesc,
                    JSON.stringify(finalTastingNotes), JSON.stringify(bg),
                    is_reserve ? 1 : 0
                ]);
            } catch (te) {
                console.warn('⚠️ [Turso] Product insert error:', te.message);
            }
        }

        // 2. Insert into Supabase (Secondary)
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('products').upsert([record], { onConflict: 'id' });
            } catch (se) {
                console.warn('⚠️ [Supabase] Product insert error:', se.message);
            }
        }

        // 3. Insert into SQLite (Local)
        try {
            db.prepare(`
                INSERT OR REPLACE INTO products (id, name, category, type, season, grade, elevation, price_usd, shipping_fee_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).run(
                id, name, category, type, season, finalGrade, elevation,
                finalPrice, finalShipping, stockInt, image, finalDesc,
                JSON.stringify(finalTastingNotes), JSON.stringify(bg),
                is_reserve ? 1 : 0
            );
        } catch (e) {}

        const formatted = formatProductRow(record);
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: formatted
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/products/:id
 * Update product details across all databases
 */
router.put('/:id', async (req, res) => {
    try {
        const prodId = req.params.id;
        const {
            name, category, type, season, grade, leafGrade, elevation,
            price_usd, price, stock, image, description, desc,
            flavor_notes, brewing_guide, is_reserve,
            flavorProfile, tastingNotes, sensoryRadar, steepSeconds,
            weight, symbol, steepTemp, steepTime,
            shipping_fee_usd, shippingCharge, shippingFee
        } = req.body;

        const updates = {};
        if (name !== undefined) updates.name = name;
        if (category !== undefined) updates.category = category;
        if (type !== undefined) updates.type = type;
        if (season !== undefined) updates.season = season;
        if (grade !== undefined || leafGrade !== undefined) updates.grade = grade || leafGrade;
        if (elevation !== undefined) updates.elevation = elevation;
        if (price_usd !== undefined || price !== undefined) updates.price_usd = Number(price_usd || price);
        if (shipping_fee_usd !== undefined || shippingCharge !== undefined || shippingFee !== undefined) {
            updates.shipping_fee_usd = Number(shipping_fee_usd !== undefined ? shipping_fee_usd : (shippingCharge !== undefined ? shippingCharge : shippingFee)) || 0;
        }
        if (stock !== undefined) {
            const stockInt = typeof stock === 'number' ? stock : (stock === 'Low Stock' ? 5 : (stock === 'Rare Reserve' ? 3 : 15));
            updates.stock = stockInt;
        }
        if (image !== undefined) updates.image = image;
        if (description !== undefined || desc !== undefined) updates.description = description || desc;

        const finalTNotes = tastingNotes !== undefined ? (Array.isArray(tastingNotes) ? tastingNotes : [tastingNotes]) : (flavor_notes !== undefined ? (Array.isArray(flavor_notes) ? flavor_notes : [flavor_notes]) : undefined);
        if (finalTNotes !== undefined) updates.flavor_notes = finalTNotes;

        const subcategory = req.body.subcategory || req.body.sub_category;

        if (brewing_guide !== undefined || sensoryRadar !== undefined || flavorProfile !== undefined || finalTNotes !== undefined || steepSeconds !== undefined || weight !== undefined || symbol !== undefined || steepTemp !== undefined || steepTime !== undefined || stock !== undefined || updates.shipping_fee_usd !== undefined || subcategory !== undefined) {
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
                ...(typeof stock === 'string' ? { stock_status: stock } : {}),
                ...(subcategory ? { subcategory } : {}),
                ...(updates.shipping_fee_usd !== undefined ? { shippingCharge: updates.shipping_fee_usd, shipping_fee: updates.shipping_fee_usd } : {}),
                ...(Array.isArray(req.body.images) ? { images: req.body.images } : {})
            };
        }
        if (is_reserve !== undefined) updates.is_reserve = Boolean(is_reserve);

        // 1. Update Turso Cloud (Primary)
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    UPDATE products
                    SET name = COALESCE(?, name),
                        price_usd = COALESCE(?, price_usd),
                        shipping_fee_usd = COALESCE(?, shipping_fee_usd),
                        stock = COALESCE(?, stock),
                        image = COALESCE(?, image),
                        description = COALESCE(?, description),
                        flavor_notes = COALESCE(?, flavor_notes),
                        brewing_guide = COALESCE(?, brewing_guide),
                        is_reserve = COALESCE(?, is_reserve)
                    WHERE id = ?
                `, [
                    updates.name || null,
                    updates.price_usd !== undefined ? updates.price_usd : null,
                    updates.shipping_fee_usd !== undefined ? updates.shipping_fee_usd : null,
                    updates.stock !== undefined ? updates.stock : null,
                    updates.image || null,
                    updates.description || null,
                    updates.flavor_notes ? JSON.stringify(updates.flavor_notes) : null,
                    updates.brewing_guide ? JSON.stringify(updates.brewing_guide) : null,
                    updates.is_reserve !== undefined ? (updates.is_reserve ? 1 : 0) : null,
                    prodId
                ]);
            } catch (te) {
                console.warn('⚠️ [Turso] Product update error:', te.message);
            }
        }

        // 2. Update Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('products').update(updates).eq('id', prodId);
            } catch (se) {
                console.warn('⚠️ [Supabase] Product update error:', se.message);
            }
        }

        // 3. Update SQLite
        try {
            db.prepare(`
                UPDATE products
                SET name = COALESCE(?, name),
                    price_usd = COALESCE(?, price_usd),
                    shipping_fee_usd = COALESCE(?, shipping_fee_usd),
                    stock = COALESCE(?, stock),
                    image = COALESCE(?, image),
                    description = COALESCE(?, description),
                    flavor_notes = COALESCE(?, flavor_notes),
                    brewing_guide = COALESCE(?, brewing_guide),
                    is_reserve = COALESCE(?, is_reserve)
                WHERE id = ?
            `).run(
                updates.name || null,
                updates.price_usd !== undefined ? updates.price_usd : null,
                updates.shipping_fee_usd !== undefined ? updates.shipping_fee_usd : null,
                updates.stock !== undefined ? updates.stock : null,
                updates.image || null,
                updates.description || null,
                updates.flavor_notes ? JSON.stringify(updates.flavor_notes) : null,
                updates.brewing_guide ? JSON.stringify(updates.brewing_guide) : null,
                updates.is_reserve !== undefined ? (updates.is_reserve ? 1 : 0) : null,
                prodId
            );
        } catch (e) {}

        res.json({ success: true, message: 'Product updated successfully', id: prodId });
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

        // 1. Delete from Turso Cloud
        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM products WHERE id = ?', [prodId]);
            } catch (te) {
                console.warn('⚠️ [Turso] Product delete error:', te.message);
            }
        }

        // 2. Delete from Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('products').delete().eq('id', prodId);
            } catch (se) {
                console.warn('⚠️ [Supabase] Product delete error:', se.message);
            }
        }

        // 3. Delete from SQLite
        try {
            db.prepare('DELETE FROM products WHERE id = ?').run(prodId);
        } catch (e) {}

        res.json({ success: true, message: 'Product deleted successfully', id: prodId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
