const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
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
            payment_method = 'credit_card', bespoke_notes = ''
        } = req.body;

        if (!customer_name || !customer_email || !shipping_address || !items || items.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Customer name, email, shipping address, and at least one item are required.'
            });
        }

        const orderId = customOrderId || ('ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(Math.random() * 900 + 100));

        // Insert Order
        const insertOrder = db.prepare(`
            INSERT INTO orders (id, customer_name, customer_email, customer_phone, shipping_address, subtotal_usd, discount_usd, total_usd, currency_code, currency_rate, total_in_currency, payment_method, payment_status, fulfillment_status, bespoke_notes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insertOrder.run(
            orderId, customer_name, customer_email, customer_phone,
            shipping_address, Number(subtotal_usd || total_usd || 0), Number(discount_usd || 0),
            Number(total_usd || 0), currency_code, Number(currency_rate || 1.0),
            Number(total_in_currency || total_usd || 0), payment_method,
            payment_method === 'bank' ? 'pending_deposit' : 'paid', 'processing', bespoke_notes || ''
        );

        // Insert Order Items and adjust product stock
        const insertItem = db.prepare(`
            INSERT INTO order_items (id, order_id, product_id, product_name, quantity, unit_price_usd, total_price_usd, gift_options)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const updateStock = db.prepare('UPDATE products SET stock = MAX(0, stock - ?) WHERE id = ?');

        items.forEach((it, idx) => {
            const itemId = orderId + '-item-' + (idx + 1);
            const qty = Number(it.quantity) || 1;
            const unitPrice = Number(it.unit_price_usd || it.price_usd || it.price) || 0;
            const itemTotal = unitPrice * qty;

            insertItem.run(
                itemId, orderId, it.id || it.product_id || ('prod-' + (idx + 1)),
                it.name || it.product_name || 'Artisanal Tea Item', qty, unitPrice, itemTotal,
                it.giftOptions || it.gift_options ? JSON.stringify(it.giftOptions || it.gift_options) : null
            );

            // Deduct stock
            if (it.id || it.product_id) {
                updateStock.run(qty, it.id || it.product_id);
            }
        });

        // Retrieve full order record
        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
        const orderItems = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);

        const orderWithItems = {
            ...order,
            items: orderItems.map(i => ({
                ...i,
                gift_options: i.gift_options ? JSON.parse(i.gift_options) : null
            }))
        };

        // Dispatch Resend Email notification to Customer & Owner (awaited for serverless resilience)
        let emailResult = null;
        try {
            emailResult = await sendOrderConfirmationEmails(orderWithItems);
            console.log('✅ Order email dispatched successfully for:', orderId);
        } catch (mailErr) {
            console.error('⚠️ Order email dispatch error:', mailErr.message);
        }

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            data: orderWithItems,
            email_delivery: emailResult
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/orders/:id
 * Fetch single order with its items
 */
router.get('/:id', (req, res) => {
    try {
        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(req.params.id);
        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }

        const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(req.params.id);

        res.json({
            success: true,
            data: {
                ...order,
                items: items.map(i => ({
                    ...i,
                    gift_options: i.gift_options ? JSON.parse(i.gift_options) : null
                }))
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/orders
 * List all orders
 */
router.get('/', (req, res) => {
    try {
        const orders = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
        res.json({ success: true, count: orders.length, data: orders });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
