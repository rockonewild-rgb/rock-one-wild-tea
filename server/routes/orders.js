const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');
const { sendOrderConfirmationEmails, sendTourGatePassEmail } = require('../services/email');

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
            subtotal_usd, shipping_usd = 0, discount_usd = 0, total_usd,
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
        const shippingFee = Number(shipping_usd || 0);
        const discount = Number(discount_usd || 0);
        const total = Number(total_usd || (subtotal + shippingFee - discount) || 0);
        const currRate = Number(currency_rate || 1.0);
        const totalCurr = Number(total_in_currency || total || 0);

        const orderRecord = {
            id: orderId,
            customer_name,
            customer_email,
            customer_phone,
            shipping_address,
            subtotal_usd: subtotal,
            shipping_usd: shippingFee,
            discount_usd: discount,
            total_usd: total,
            currency_code,
            currency_rate: currRate,
            total_in_currency: totalCurr,
            payment_method,
            payment_status: payment_method === 'bank' || payment_method === 'slip' ? 'pending_deposit' : (payment_method === 'cod' ? 'pending_cod' : 'paid'),
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
            let { error: ordErr } = await supabase.from('orders').insert([orderRecord]);

            // If the Supabase schema is missing columns (e.g. slip_image, shipping_usd), strip each
            // missing column reported by Supabase and retry, so the order is never lost from the admin list.
            const fallbackRecord = { ...orderRecord };
            for (let attempt = 0; attempt < 6 && ordErr && ordErr.message; attempt++) {
                const m = ordErr.message.match(/Could not find the '([^']+)' column/);
                if (!m || !(m[1] in fallbackRecord)) break;
                const missingCol = m[1];
                console.warn(`[Supabase] orders table is missing column "${missingCol}". Retrying insert without it...`);
                if (missingCol === 'slip_image' && orderRecord.slip_image) {
                    fallbackRecord.bespoke_notes = (fallbackRecord.bespoke_notes ? fallbackRecord.bespoke_notes + ' | ' : '') + '[Deposit Slip Attached]';
                }
                if (missingCol === 'shipping_usd' && orderRecord.shipping_usd) {
                    fallbackRecord.bespoke_notes = (fallbackRecord.bespoke_notes ? fallbackRecord.bespoke_notes + ' | ' : '') + `[Shipping USD ${Number(orderRecord.shipping_usd).toFixed(2)}]`;
                }
                delete fallbackRecord[missingCol];
                const retryRes = await supabase.from('orders').insert([fallbackRecord]);
                ordErr = retryRes.error;
            }

            if (ordErr) {
                console.warn('⚠️ Supabase order insert error:', ordErr.message);
            } else if (itemRecords.length > 0) {
                const { error: itmErr } = await supabase.from('order_items').insert(itemRecords);
                if (itmErr) console.warn('⚠️ Supabase items insert error:', itmErr.message);
            }
        }

        // Keep local SQLite in sync
        try {
            const insertOrder = db.prepare(`
                INSERT OR REPLACE INTO orders (id, customer_name, customer_email, customer_phone, shipping_address, subtotal_usd, shipping_usd, discount_usd, total_usd, currency_code, currency_rate, total_in_currency, payment_method, payment_status, fulfillment_status, bespoke_notes)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `);
            insertOrder.run(
                orderId, customer_name, customer_email, customer_phone,
                shipping_address, subtotal, shippingFee, discount, total, currency_code,
                currRate, totalCurr, payment_method,
                orderRecord.payment_status, 'processing', bespoke_notes || ''
            );

            const insertItem = db.prepare(`
                INSERT OR REPLACE INTO order_items (id, order_id, product_id, product_name, quantity, unit_price_usd, total_price_usd, gift_options)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `);
            itemRecords.forEach(it => {
                insertItem.run(it.id, orderId, it.product_id, it.product_name, it.quantity, it.unit_price_usd, it.total_price_usd, JSON.stringify(it.gift_options));
            });

            if (isTursoAvailable()) {
                await executeTurso(`
                    INSERT OR REPLACE INTO orders (id, customer_name, customer_email, customer_phone, shipping_address, subtotal_usd, shipping_usd, discount_usd, total_usd, currency_code, currency_rate, total_in_currency, payment_method, payment_status, fulfillment_status, bespoke_notes, slip_image)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `, [
                    orderId, customer_name, customer_email, customer_phone,
                    shipping_address, subtotal, shippingFee, discount, total, currency_code,
                    currRate, totalCurr, payment_method,
                    orderRecord.payment_status, 'processing', bespoke_notes || '', slip_image || ''
                ]);

                for (const it of itemRecords) {
                    await executeTurso(`
                        INSERT OR REPLACE INTO order_items (id, order_id, product_id, product_name, quantity, unit_price_usd, total_price_usd, gift_options)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                    `, [it.id, orderId, it.product_id, it.product_name, it.quantity, it.unit_price_usd, it.total_price_usd, JSON.stringify(it.gift_options)]);
                }
            }
        } catch (e) {
            console.warn('Orders insert notice:', e.message);
        }

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
        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            const tursoOrders = await queryTurso('SELECT * FROM orders ORDER BY created_at DESC');
            if (Array.isArray(tursoOrders)) {
                const tursoItems = (await queryTurso('SELECT * FROM order_items')) || [];
                const fullOrders = tursoOrders.map(ord => ({
                    ...ord,
                    order_items: tursoItems.filter(it => it.order_id === ord.id).map(it => ({
                        ...it,
                        gift_options: it.gift_options ? (typeof it.gift_options === 'string' ? JSON.parse(it.gift_options) : it.gift_options) : null
                    }))
                }));
                return res.json({ success: true, count: fullOrders.length, data: fullOrders, source: 'turso' });
            }
        }

        // 2. Supabase Cloud (Secondary Fallback)
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('orders').select('*, order_items(*)').order('created_at', { ascending: false });
            if (!error && Array.isArray(data)) {
                return res.json({ success: true, count: data.length, data, source: 'supabase' });
            }
        }

        // 3. Local SQLite (Offline Fallback)
        const orders = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
        const getItems = db.prepare('SELECT * FROM order_items WHERE order_id = ?');

        const fullOrders = orders.map(ord => ({
            ...ord,
            order_items: getItems.all(ord.id).map(it => ({
                ...it,
                gift_options: it.gift_options ? JSON.parse(it.gift_options) : null
            }))
        }));

        res.json({ success: true, count: fullOrders.length, data: fullOrders, source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/orders/:id/confirm
 * Confirm payment on order / transaction. If associated with a tour booking, automatically dispatches Gate Pass email.
 */
router.post('/:id/confirm', async (req, res) => {
    try {
        const orderId = req.params.id;
        const { note = 'Deposit slip approved by Admin' } = req.body;
        const nowIso = new Date().toISOString();

        // 1. Check if this is or links to a tour booking
        const isTourRef = orderId.startsWith('TR-') || orderId.startsWith('TB-') || (req.body.category === 'tour');
        let tourBooking = null;

        if (isTourRef) {
            if (isSupabaseAvailable()) {
                const { data } = await supabase.from('tour_bookings').select('*').eq('id', orderId).single();
                if (data) tourBooking = data;
            }
            if (!tourBooking) {
                try {
                    tourBooking = db.prepare('SELECT * FROM tour_bookings WHERE id = ?').get(orderId);
                } catch (e) {}
            }
        }

        // If it is a tour booking, update tour_bookings and dispatch Gate Pass
        let gatePassDelivery = null;
        if (tourBooking || isTourRef) {
            const bookingToConfirm = tourBooking || {
                id: orderId,
                guest_name: req.body.customerName || req.body.customer_name || 'Estate Guest',
                guest_email: req.body.email || req.body.customer_email || '',
                tour_date: req.body.tour_date || req.body.tourDate || 'Confirmed Date',
                time_slot: req.body.time_slot || req.body.timeSlot || '10:00 AM - 11:30 AM',
                guest_count: req.body.guest_count || req.body.guests || 1,
                package_name: req.body.packageName || req.body.package_name || 'Highland Estate Factory Tour & Cupping',
                status: 'confirmed'
            };

            if (isSupabaseAvailable()) {
                try {
                    await supabase.from('tour_bookings').update({
                        status: 'confirmed',
                        validated_at: nowIso,
                        validation_note: note
                    }).eq('id', orderId);
                } catch (e) {}
            }

            try {
                db.prepare(`
                    UPDATE tour_bookings 
                    SET status = 'confirmed', validated_at = ?, validation_note = ? 
                    WHERE id = ?
                `).run(nowIso, note, orderId);
            } catch (e) {}

            try {
                gatePassDelivery = await sendTourGatePassEmail(bookingToConfirm);
            } catch (mailErr) {
                console.error('❌ Tour Gate Pass email error in orders/confirm:', mailErr.message);
            }
        }

        // Update orders table in Supabase & SQLite
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('orders').update({
                    payment_status: 'paid',
                    validated_at: nowIso,
                    validation_note: note
                }).eq('id', orderId);
            } catch (e) {}
        }

        try {
            db.prepare(`
                UPDATE orders 
                SET payment_status = 'paid', validated_at = ?, validation_note = ? 
                WHERE id = ? OR booking_id = ?
            `).run(nowIso, note, orderId, orderId);

            if (isTursoAvailable()) {
                await executeTurso(`
                    UPDATE orders 
                    SET payment_status = 'paid', validated_at = ?, validation_note = ? 
                    WHERE id = ?
                `, [nowIso, note, orderId]);
            }
        } catch (e) {}

        res.json({
            success: true,
            message: `Payment confirmed for ${orderId}. ${isTourRef ? 'Official Gate Pass automatically dispatched to guest.' : ''}`,
            id: orderId,
            gate_pass_delivery: gatePassDelivery
        });
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

            if (isTursoAvailable()) {
                await executeTurso('DELETE FROM order_items WHERE order_id = ?', [orderId]);
                await executeTurso('DELETE FROM orders WHERE id = ?', [orderId]);
            }
        } catch (e) {}

        res.json({ success: true, message: 'Order deleted successfully', id: orderId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
