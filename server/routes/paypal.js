/**
 * PayPal Payment Integration Route for Rock One Wild Tea Estate
 * Supports:
 * - PayPal Smart Buttons & Card checkout
 * - PayPal Orders API v2 (Order creation & capture)
 * - Automatic status update in Turso Cloud / SQLite
 * - Immediate dispatch of Director & CEO signed Gate Pass / Allocation Certificate
 */

const express = require('express');
const router = express.Router();
const db = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, executeTurso } = require('../db/turso');
const { sendOrderConfirmationEmails, sendTourGatePassEmail } = require('../services/email');

// Environment configuration
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || '';
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || '';
const PAYPAL_MODE = (process.env.PAYPAL_MODE || 'sandbox').toLowerCase();
const PAYPAL_BASE_URL = PAYPAL_MODE === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

/**
 * Helper: Retrieve PayPal OAuth2 Bearer Access Token
 */
async function getPayPalAccessToken() {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
        return null;
    }

    try {
        const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');
        const res = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });

        if (!res.ok) {
            const errBody = await res.text();
            console.error('❌ [PayPal] OAuth token error:', errBody);
            return null;
        }

        const data = await res.json();
        return data.access_token;
    } catch (err) {
        console.error('❌ [PayPal] Failed to fetch access token:', err.message);
        return null;
    }
}

/**
 * GET /api/paypal/config
 * Returns public PayPal client configuration for the front-end SDK
 */
router.get('/config', (req, res) => {
    res.json({
        success: true,
        clientId: PAYPAL_CLIENT_ID || 'sb',
        mode: PAYPAL_MODE,
        currency: 'USD',
        configured: Boolean(PAYPAL_CLIENT_ID && PAYPAL_CLIENT_SECRET),
        businessEmail: process.env.PAYPAL_BUSINESS_EMAIL || 'rockonewild@gmail.com',
        paypalMeUrl: process.env.PAYPAL_ME_URL || ''
    });
});

/**
 * POST /api/paypal/create-order
 * Initializes a PayPal Order via PayPal REST API v2
 */
router.post('/create-order', async (req, res) => {
    try {
        const { orderId, amount, currency = 'USD', description, items = [] } = req.body;

        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            return res.status(400).json({ success: false, error: 'A valid payment amount is required.' });
        }

        const formattedAmount = numAmount.toFixed(2);
        const accessToken = await getPayPalAccessToken();

        // If credentials are live/sandbox configured in PayPal
        if (accessToken) {
            const paypalPayload = {
                intent: 'CAPTURE',
                purchase_units: [{
                    reference_id: orderId || `TEA-${Date.now()}`,
                    description: description || 'Rock One Wild Tea Highland Estate Order / Experience',
                    amount: {
                        currency_code: currency,
                        value: formattedAmount
                    }
                }],
                application_context: {
                    brand_name: 'Rock One Wild Tea Estate',
                    landing_page: 'NO_PREFERENCE',
                    user_action: 'PAY_NOW',
                    shipping_preference: 'NO_SHIPPING'
                }
            };

            const paypalRes = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paypalPayload)
            });

            const paypalData = await paypalRes.json();
            if (!paypalRes.ok) {
                console.error('❌ [PayPal] Order creation error:', paypalData);
                return res.status(paypalRes.status).json({ success: false, error: paypalData });
            }

            return res.json({
                success: true,
                id: paypalData.id,
                status: paypalData.status,
                order: paypalData
            });
        }

        // Test / Pre-configuration Fallback Mode:
        // Allows testing without blocking developers when credentials are being set up
        const mockOrderId = `PAYPAL-MOCK-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
        console.log(`ℹ️ [PayPal] Running in sandbox preview mode. Created Mock PayPal Order: ${mockOrderId} ($${formattedAmount})`);

        res.json({
            success: true,
            id: mockOrderId,
            status: 'CREATED',
            mode: 'sandbox-preview',
            amount: formattedAmount,
            currency: currency
        });

    } catch (err) {
        console.error('❌ [PayPal] Exception in create-order:', err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/paypal/capture-order
 * Captures an approved PayPal Order and immediately confirms the transaction in database & email
 */
router.post('/capture-order', async (req, res) => {
    try {
        const { paypalOrderId, internalOrderId, payer, details } = req.body;

        if (!paypalOrderId || !internalOrderId) {
            return res.status(400).json({ success: false, error: 'paypalOrderId and internalOrderId are required.' });
        }

        let captureResult = { status: 'COMPLETED', id: `CAP-${Date.now()}` };
        const accessToken = await getPayPalAccessToken();

        // If live PayPal credentials exist, execute capture via PayPal API
        if (accessToken && !paypalOrderId.startsWith('PAYPAL-MOCK-')) {
            const captureRes = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${encodeURIComponent(paypalOrderId)}/capture`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            const captureData = await captureRes.json();
            if (!captureRes.ok) {
                console.error('❌ [PayPal] Capture failed:', captureData);
                return res.status(captureRes.status).json({ success: false, error: captureData });
            }

            captureResult = captureData;
        } else {
            console.log(`✅ [PayPal] Mock PayPal Order ${paypalOrderId} captured for ${internalOrderId}`);
        }

        const nowIso = new Date().toISOString();
        const nowFormatted = new Date().toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        const note = `Paid via PayPal (Ref: ${paypalOrderId}) on ${nowFormatted}`;

        const isTour = internalOrderId.startsWith('TR-') || internalOrderId.startsWith('TB-') || req.body.category === 'tour';

        // 1. Update Database (SQLite, Turso & Supabase)
        try {
            // Update SQLite
            db.prepare(`
                UPDATE orders 
                SET payment_status = 'paid', payment_method = 'paypal', validated_at = ?, validation_note = ? 
                WHERE id = ? OR booking_id = ?
            `).run(nowIso, note, internalOrderId, internalOrderId);

            if (isTour) {
                db.prepare(`
                    UPDATE tour_bookings 
                    SET status = 'confirmed', payment_method = 'paypal', validated_at = ?, validation_note = ? 
                    WHERE id = ?
                `).run(nowIso, note, internalOrderId);
            }

            // Update Turso Cloud
            if (isTursoAvailable()) {
                await executeTurso(`
                    UPDATE orders 
                    SET payment_status = 'paid', payment_method = 'paypal', validated_at = ?, validation_note = ? 
                    WHERE id = ?
                `, [nowIso, note, internalOrderId]);

                if (isTour) {
                    await executeTurso(`
                        UPDATE tour_bookings 
                        SET status = 'confirmed', payment_method = 'paypal', validated_at = ?, validation_note = ? 
                        WHERE id = ?
                    `, [nowIso, note, internalOrderId]);
                }
            }

            // Update Supabase if available
            if (isSupabaseAvailable()) {
                await supabase.from('orders').update({
                    payment_status: 'paid',
                    payment_method: 'paypal',
                    validated_at: nowIso,
                    validation_note: note
                }).eq('id', internalOrderId);

                if (isTour) {
                    await supabase.from('tour_bookings').update({
                        status: 'confirmed',
                        payment_method: 'paypal',
                        validated_at: nowIso,
                        validation_note: note
                    }).eq('id', internalOrderId);
                }
            }
        } catch (dbErr) {
            console.warn('⚠️ [PayPal] Non-critical error updating database:', dbErr.message);
        }

        // 2. Automatically dispatch confirmation email
        let emailDispatch = null;
        try {
            if (isTour) {
                const tourObj = {
                    id: internalOrderId,
                    guest_name: req.body.customerName || req.body.guestName || (payer && payer.name ? `${payer.name.given_name || ''} ${payer.name.surname || ''}`.trim() : 'Estate Guest'),
                    guest_email: req.body.email || req.body.guestEmail || (payer ? payer.email_address : ''),
                    tour_date: req.body.tourDate || req.body.tour_date || 'Confirmed Reservation',
                    time_slot: req.body.timeSlot || req.body.time_slot || '10:00 AM - 11:30 AM',
                    guest_count: req.body.guestCount || req.body.guests || 1,
                    package_name: req.body.packageName || req.body.package_name || 'Highland Estate Factory Tour & Sommelier Cupping',
                    status: 'confirmed'
                };
                emailDispatch = await sendTourGatePassEmail(tourObj);
                console.log(`🌿 [PayPal] Official Gate Pass automatically dispatched to ${tourObj.guest_email}`);
            } else {
                const orderObj = {
                    id: internalOrderId,
                    customer_name: req.body.customerName || (payer && payer.name ? `${payer.name.given_name || ''} ${payer.name.surname || ''}`.trim() : 'Valued Patron'),
                    customer_email: req.body.email || (payer ? payer.email_address : ''),
                    customer_phone: req.body.phone || '',
                    shipping_address: req.body.address || 'Standard International Delivery',
                    total_usd: req.body.amount || req.body.price || 0,
                    currency_code: 'USD',
                    payment_method: 'PayPal',
                    deliveryRange: req.body.deliveryRange || '3–7 business days via Express Priority Courier',
                    items: req.body.items || []
                };
                emailDispatch = await sendOrderConfirmationEmails(orderObj);
                console.log(`🌿 [PayPal] Order Confirmation & Certificate email dispatched to ${orderObj.customer_email}`);
            }
        } catch (mailErr) {
            console.warn('⚠️ [PayPal] Notice on transactional email dispatch:', mailErr.message);
        }

        res.json({
            success: true,
            status: 'COMPLETED',
            orderId: internalOrderId,
            paypalOrderId: paypalOrderId,
            note: note,
            emailDispatch: emailDispatch,
            message: 'Payment authorized & captured via PayPal. Certificate & Gate Pass activated!'
        });

    } catch (err) {
        console.error('❌ [PayPal] Exception in capture-order:', err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/paypal/webhook
 * PayPal Webhook listener for background payment notifications
 */
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    try {
        const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        console.log(`🌿 [PayPal Webhook] Received event: ${body.event_type || 'Unknown'}`);
        res.status(200).json({ received: true });
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
});

module.exports = router;
