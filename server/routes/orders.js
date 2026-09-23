const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { sendOrderConfirmationEmails } = require('../services/email');

/**
 * POST /api/orders
 * Create a new order with items
 */
router.post('/', async (req, res) => {
    try {
        const {
            id: customOrderId,
            customer_name, customer_email, customer_phone = '',
            shipping_address, items = [],
            subtotal_usd, discount_usd = 0, total_usd,
            currency_code = 'USD', currency_rate = 1.0, total_in_currency,
            payment_method = 'bank', bespoke_notes = '', slip_image = ''
        } = req.body;

        if (!customer_name || !customer_email || !shipping_address || !items || items.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Customer name, email, shipping address, and at least one item are required.'
            });
        }

        const orderId = customOrderId || ('ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 900 + 100));
        const subtotal = Number(subtotal_usd || total_usd || 0);
        const discount = Number(discount_usd || 0);
        const total = Number(total_usd || 0);
        const currRate = Number(currency_rate || 1.0);
        const totalCurr = Number(total_in_currency || total || 0);

        const orderRecord = {
            id: orderId,
            customer_name,
            customer_email,
            customer_phone,
            shipping_address,
            subtotal_usd: subtotal,
            discount_usd: discount,
            total_usd: total,
            currency_code,
            currency_rate: currRate,
            total_in_currency: totalCurr,
            payment_method,
            payment_status: payment_method === 'bank' ? 'pending_deposit' : 'paid',
            fulfillment_status: 'processing',
            slip_image,
            bespoke_notes: bespoke_notes || ''
        };

        const itemRecords = items.map((it, idx) => ({
            id: `${orderId}-item-${idx + 1}`,
            order_id: orderId,
            product_id: it.id || it.product_id || ('prod-' + (idx + 1)),
            product_name: it.name || it.product_name || 'Artisanal Tea Item',
            quantity: Number(it.quantity) || 1,
            unit_price_usd: Number(it.unit_price_usd || it.price_usd || it.price) || 0,
            total_price_usd: (Number(it.unit_price_usd || it.price_usd || it.price) || 0) * (Number(it.quantity) || 1),
            gift_options: it.giftOptions || it.gift_options || {}
        }));

        if (isSupabaseAvailable()) {
            const { error: ordErr } = await supabase.from('orders').insert([orderRecord]);
            if (ordErr) console.warn('⚠️ Supabase order insert error:', ordErr.message);

            if (itemRecords.length > 0) {
                const { error: itmErr } = await supabase.from('order_items').insert(itemRecords);
                if (itmErr) console.warn('⚠️ Supabase items insert error:', itmErr.message);
            }
        }

        // Keep local SQLite in sync
        try {
            const insertOrder = db.prepare(`
                INSERT OR REPLACE INTO orders (id, customer_name, customer_email, customer_phone, shipping_address, subtotal_usd, discount_usd, total_usd, currency_code, currency_rate, total_in_currency, payment_method, payment_status, fulfillment_status, bespoke_notes)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `);
            insertOrder.run(
                orderId, customer_name, customer_email, customer_phone,
                shipping_address, subtotal, discount, total, currency_code,
                currRate, totalCurr, payment_method,
                payment_method === 'bank' ? 'pending_deposit' : 'paid', 'processing', bespoke_notes || ''
            );

            const insertItem = db.prepare(`
                INSERT OR REPLACE INTO order_items (id, order_id, product_id, product_name, quantity, unit_price_usd, total_price_usd, gift_options)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `);
            itemRecords.forEach(it => {
                insertItem.run(it.id, orderId, it.product_id, it.product_name, it.quantity, it.unit_price_usd, it.total_price_usd, JSON.stringify(it.gift_options));
            });
        } catch (e) {}

        // Dispatch Email confirmation
        let emailStatus = null;
        try {
            emailStatus = await sendOrderConfirmationEmails({
                ...orderRecord,
                items: itemRecords
            });
        } catch (mailErr) {
            console.error('⚠️ Order email dispatch error:', mailErr.message);
        }

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            order_id: orderId,
            data: {
                ...orderRecord,
                items: itemRecords
            },
            email_delivery: emailStatus
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/orders
 */
router.get('/', async (req, res) => {
    try {
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('orders').select('*, order_items(*)').order('created_at', { ascending: false });
            if (!error && data) {
                return res.json({ success: true, count: data.length, data });
            }
        }

        const orders = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
        const getItems = db.prepare('SELECT * FROM order_items WHERE order_id = ?');

        const fullOrders = orders.map(ord => ({
            ...ord,
            order_items: getItems.all(ord.id).map(it => ({
                ...it,
                gift_options: it.gift_options ? JSON.parse(it.gift_options) : null
            }))
        }));

        res.json({ success: true, count: fullOrders.length, data: fullOrders });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/orders/:id
 */
router.delete('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        if (isSupabaseAvailable()) {
            await supabase.from('order_items').delete().eq('order_id', orderId);
            const { error } = await supabase.from('orders').delete().eq('id', orderId);
            if (error) console.warn('⚠️ Supabase order delete error:', error.message);
        }

        try {
            db.prepare('DELETE FROM order_items WHERE order_id = ?').run(orderId);
            db.prepare('DELETE FROM orders WHERE id = ?').run(orderId);
        } catch (e) {}

        res.json({ success: true, message: 'Order deleted successfully', id: orderId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
