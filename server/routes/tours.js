const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');
const { 
    sendTourDepositReceivedAdminAlert, 
    sendTourGatePassEmail, 
    sendTourConfirmationEmails 
} = require('../services/email');

/**
 * GET /api/tours/settings
 * Retrieves persisted tour operations & pricing configuration
 */
router.get('/settings', async (req, res) => {
    try {
        let settingsRow = null;
        if (isTursoAvailable()) {
            try {
                const tursoRows = await queryTurso('SELECT value FROM tour_settings WHERE key = ?', ['main_tour_config']);
                if (Array.isArray(tursoRows) && tursoRows[0]) {
                    settingsRow = tursoRows[0];
                }
            } catch (te) {}
        }
        if (!settingsRow) {
            try {
                settingsRow = db.prepare('SELECT value FROM tour_settings WHERE key = ?').get('main_tour_config');
            } catch (e) {}
        }
        if (settingsRow && settingsRow.value) {
            return res.json({
                success: true,
                data: typeof settingsRow.value === 'string' ? JSON.parse(settingsRow.value) : settingsRow.value
            });
        }
        res.json({ success: true, data: null });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/tours/settings
 * Updates and persists tour operations & pricing configuration
 */
router.post('/settings', async (req, res) => {
    try {
        const settings = req.body || {};
        const valStr = JSON.stringify(settings);
        const nowIso = new Date().toISOString();

        try {
            db.prepare('CREATE TABLE IF NOT EXISTS tour_settings (key TEXT PRIMARY KEY, value TEXT, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)').run();
            db.prepare('INSERT OR REPLACE INTO tour_settings (key, value, updated_at) VALUES (?, ?, ?)').run('main_tour_config', valStr, nowIso);
        } catch (e) {
            console.warn('SQLite tour_settings save notice:', e.message);
        }

        if (isTursoAvailable()) {
            try {
                await executeTurso('CREATE TABLE IF NOT EXISTS tour_settings (key TEXT PRIMARY KEY, value TEXT, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)');
                await executeTurso('INSERT OR REPLACE INTO tour_settings (key, value, updated_at) VALUES (?, ?, ?)', ['main_tour_config', valStr, nowIso]);
            } catch (te) {
                console.warn('Turso tour_settings save notice:', te.message);
            }
        }

        res.json({
            success: true,
            message: 'Tour configuration successfully persisted.',
            data: settings
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/tours/slots
 */
router.get('/slots', async (req, res) => {
    try {
        const { date } = req.query;

        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            let query = 'SELECT * FROM tour_slots WHERE is_active = 1';
            const params = [];
            if (date) {
                query += ' AND tour_date = ?';
                params.push(date);
            }
            query += ' ORDER BY tour_date ASC, time_slot ASC';
            const tursoRows = await queryTurso(query, params);
            if (Array.isArray(tursoRows)) {
                return res.json({
                    success: true,
                    count: tursoRows.length,
                    data: tursoRows.map(s => ({
                        ...s,
                        available_seats: (s.max_capacity || 12) - (s.booked_seats || 0)
                    })),
                    source: 'turso'
                });
            }
        }

        // 2. Supabase Cloud (Secondary Fallback)
        if (isSupabaseAvailable()) {
            let query = supabase.from('tour_slots').select('*').eq('is_active', true);
            if (date) {
                query = query.eq('tour_date', date);
            }
            query = query.order('tour_date', { ascending: true }).order('time_slot', { ascending: true });

            const { data, error } = await query;
            if (!error && Array.isArray(data)) {
                return res.json({
                    success: true,
                    count: data.length,
                    data: data.map(s => ({
                        ...s,
                        available_seats: (s.max_capacity || 12) - (s.booked_seats || 0)
                    })),
                    source: 'supabase'
                });
            }
        }

        // 3. Local SQLite (Offline Fallback)
        let query = 'SELECT * FROM tour_slots WHERE is_active = 1';
        const params = [];

        if (date) {
            query += ' AND tour_date = ?';
            params.push(date);
        }

        query += ' ORDER BY tour_date ASC, time_slot ASC';
        const slots = db.prepare(query).all(...params);

        res.json({
            success: true,
            count: slots.length,
            data: slots.map(s => ({
                ...s,
                available_seats: (s.max_capacity || 12) - (s.booked_seats || 0)
            })),
            source: 'sqlite'
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/tours/book
 * Creates a tour booking with deposit and notifies rockonewild@gmail.com
 */
router.post('/book', async (req, res) => {
    try {
        const {
            id: customId,
            tour_slot_id, tour_date, time_slot,
            guest_name, guest_email, guest_phone,
            guest_count = 1, notes = '', slip_image = '',
            package_name = '', total_price = 0,
            currency_code = 'USD', total_in_currency = 0,
            payment_method = 'bank'
        } = req.body;

        if (!tour_date || !time_slot || !guest_name || !guest_email) {
            return res.status(400).json({
                success: false,
                error: 'tour_date, time_slot, guest_name, and guest_email are required.'
            });
        }

        const count = Number(guest_count) || 1;
        const bookingId = customId || ('TB-' + Date.now().toString(36).toUpperCase());
        const isCard = payment_method === 'card';
        const initialStatus = isCard ? 'confirmed' : 'deposit_pending';

        const bookingRecord = {
            id: bookingId,
            tour_slot_id: tour_slot_id || null,
            tour_date,
            time_slot,
            guest_name,
            guest_email,
            guest_phone: guest_phone || '',
            guest_count: count,
            notes: notes || '',
            slip_image: slip_image || '',
            package_name: package_name || '01. Gongfu-Style Black Tea Brewing Experience',
            total_price: Number(total_price) || (count * 4.754),
            currency_code: currency_code || 'USD',
            total_in_currency: Number(total_in_currency) || (currency_code === 'LKR' ? count * 1450 : (count * 4.754)),
            payment_method: payment_method || 'bank',
            status: initialStatus
        };

        if (isSupabaseAvailable()) {
            let { error: bookErr } = await supabase.from('tour_bookings').insert([bookingRecord]);

            // If some columns are missing in the Supabase schema, retry gracefully with core fields
            if (bookErr && bookErr.message) {
                console.warn('⚠️ Supabase schema retry for tour_bookings:', bookErr.message);
                const fallbackBooking = {
                    id: bookingRecord.id,
                    tour_slot_id: bookingRecord.tour_slot_id,
                    tour_date: bookingRecord.tour_date,
                    time_slot: bookingRecord.time_slot,
                    guest_name: bookingRecord.guest_name,
                    guest_email: bookingRecord.guest_email,
                    guest_phone: bookingRecord.guest_phone,
                    guest_count: bookingRecord.guest_count,
                    notes: bookingRecord.notes + (bookingRecord.slip_image ? ' | [Deposit Slip Attached]' : ''),
                    status: bookingRecord.status
                };
                const retryRes = await supabase.from('tour_bookings').insert([fallbackBooking]);
                bookErr = retryRes.error;
            }

            if (bookErr) console.warn('⚠️ Supabase tour booking notice:', bookErr.message);

            if (tour_slot_id) {
                const { data: currentSlot } = await supabase.from('tour_slots').select('booked_seats').eq('id', tour_slot_id).single();
                if (currentSlot) {
                    await supabase.from('tour_slots').update({
                        booked_seats: (currentSlot.booked_seats || 0) + count
                    }).eq('id', tour_slot_id);
                }
            }
        }

        // SQLite sync
        try {
            db.prepare(`
                INSERT OR REPLACE INTO tour_bookings (id, tour_slot_id, tour_date, time_slot, guest_name, guest_email, guest_phone, guest_count, notes, slip_image, status, total_price, currency_code, total_in_currency, package_name, payment_method)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `).run(
                bookingId, tour_slot_id, tour_date, time_slot, guest_name, guest_email, guest_phone, count,
                notes, slip_image || '', initialStatus, bookingRecord.total_price, bookingRecord.currency_code,
                bookingRecord.total_in_currency, bookingRecord.package_name, bookingRecord.payment_method
            );

            if (tour_slot_id) {
                db.prepare('UPDATE tour_slots SET booked_seats = booked_seats + ? WHERE id = ?').run(count, tour_slot_id);
            }

            if (isTursoAvailable()) {
                await executeTurso(`
                    INSERT OR REPLACE INTO tour_bookings (id, tour_slot_id, tour_date, time_slot, guest_name, guest_email, guest_phone, guest_count, notes, slip_image, status, total_price, currency_code, total_in_currency, package_name, payment_method)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `, [
                    bookingId, tour_slot_id || null, tour_date, time_slot, guest_name, guest_email, guest_phone || '', count,
                    notes, slip_image || '', initialStatus, bookingRecord.total_price, bookingRecord.currency_code,
                    bookingRecord.total_in_currency, bookingRecord.package_name, bookingRecord.payment_method
                ]);
                if (tour_slot_id) {
                    await executeTurso('UPDATE tour_slots SET booked_seats = booked_seats + ? WHERE id = ?', [count, tour_slot_id]);
                }
            }
        } catch (e) {
            console.warn('SQLite tour booking insert notice:', e.message);
        }

        // Dispatch Tour Deposit Received Notification to rockonewild@gmail.com
        let emailStatus = null;
        try {
            emailStatus = await sendTourDepositReceivedAdminAlert(bookingRecord);
            // If instantly paid with card, also send Gate Pass
            if (isCard) {
                await sendTourGatePassEmail(bookingRecord);
            }
        } catch (mailErr) {
            console.error('⚠️ Tour deposit email dispatch error:', mailErr.message);
        }

        res.status(201).json({
            success: true,
            message: 'Tour booking received with deposit. Estate Concierge desk notified at rockonewild@gmail.com.',
            booking_id: bookingId,
            status: initialStatus,
            data: bookingRecord,
            email_delivery: emailStatus
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/tours/bookings/:id/confirm
 * Admin review & payment approval -> Updates status to 'confirmed' and automatically emails Gate Pass to customer.
 */
router.post('/bookings/:id/confirm', async (req, res) => {
    try {
        const bookingId = req.params.id;
        const { note = 'Deposit slip verified by Admin' } = req.body;
        const nowIso = new Date().toISOString();

        let booking = null;

        // 1. Try fetching from Supabase
        if (isSupabaseAvailable()) {
            const { data } = await supabase.from('tour_bookings').select('*').eq('id', bookingId).single();
            if (data) booking = data;
        }

        // 2. Fallback to SQLite
        if (!booking) {
            try {
                booking = db.prepare('SELECT * FROM tour_bookings WHERE id = ?').get(bookingId);
            } catch (e) {}
        }

        if (!booking) {
            // Also check if ID matches in orders table
            try {
                const ord = db.prepare('SELECT * FROM orders WHERE id = ? OR booking_id = ?').get(bookingId, bookingId);
                if (ord) {
                    booking = {
                        id: bookingId,
                        guest_name: ord.customer_name,
                        guest_email: ord.customer_email,
                        guest_phone: ord.customer_phone,
                        tour_date: ord.tour_date || 'Confirmed Reservation',
                        time_slot: ord.time_slot || '10:00 AM - 11:30 AM',
                        guest_count: 1,
                        package_name: ord.bespoke_notes || 'Estate Factory Tour & Cupping',
                        status: 'confirmed'
                    };
                }
            } catch (e) {}
        }

        if (!booking) {
            // Create minimal record for dispatch if not found
            booking = {
                id: bookingId,
                guest_name: req.body.guest_name || req.body.customer_name || 'Estate Guest',
                guest_email: req.body.guest_email || req.body.email || req.body.customer_email || '',
                tour_date: req.body.tour_date || 'Confirmed Date',
                time_slot: req.body.time_slot || '10:00 AM - 11:30 AM',
                guest_count: req.body.guest_count || 1,
                package_name: req.body.package_name || 'Highland Estate Factory Tour & Cupping',
                status: 'confirmed'
            };
        }

        // Update Supabase
        if (isSupabaseAvailable()) {
            try {
                await supabase.from('tour_bookings').update({
                    status: 'confirmed',
                    validated_at: nowIso,
                    validation_note: note
                }).eq('id', bookingId);
            } catch (supErr) {
                console.warn('Supabase tour confirmation update notice:', supErr.message);
            }
        }

        // Update SQLite & Turso
        try {
            db.prepare(`
                UPDATE tour_bookings 
                SET status = 'confirmed', validated_at = ?, validation_note = ? 
                WHERE id = ?
            `).run(nowIso, note, bookingId);

            // Also update any matching order
            db.prepare(`
                UPDATE orders 
                SET payment_status = 'paid', validated_at = ?, validation_note = ? 
                WHERE id = ?
            `).run(nowIso, note, bookingId);

            if (isTursoAvailable()) {
                await executeTurso(`
                    UPDATE tour_bookings 
                    SET status = 'confirmed', validated_at = ?, validation_note = ? 
                    WHERE id = ?
                `, [nowIso, note, bookingId]);
                await executeTurso(`
                    UPDATE orders 
                    SET payment_status = 'paid', validated_at = ?, validation_note = ? 
                    WHERE id = ?
                `, [nowIso, note, bookingId]);
            }
        } catch (sqlErr) {
            console.warn('SQLite/Turso tour confirmation update notice:', sqlErr.message);
        }

        booking.status = 'confirmed';
        booking.validated_at = nowIso;
        booking.validation_note = note;

        // Automatically dispatch official Gate Pass email to the booking customer
        let gatePassResult = null;
        try {
            gatePassResult = await sendTourGatePassEmail(booking);
        } catch (mailErr) {
            console.error('❌ Failed to email Gate Pass to customer:', mailErr.message);
        }

        res.json({
            success: true,
            message: `Payment confirmed for booking ${bookingId}. Official Gate Pass has been automatically dispatched to ${booking.guest_email || booking.email}.`,
            booking_id: bookingId,
            data: booking,
            gate_pass_delivery: gatePassResult
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/tours/bookings/:id/send-gatepass
 * Re-sends official Gate Pass email to customer
 */
router.post('/bookings/:id/send-gatepass', async (req, res) => {
    try {
        const bookingId = req.params.id;
        let booking = null;

        if (isSupabaseAvailable()) {
            const { data } = await supabase.from('tour_bookings').select('*').eq('id', bookingId).single();
            if (data) booking = data;
        }

        if (!booking) {
            try {
                booking = db.prepare('SELECT * FROM tour_bookings WHERE id = ?').get(bookingId);
            } catch (e) {}
        }

        if (!booking) {
            booking = {
                id: bookingId,
                guest_name: req.body.guest_name || req.body.customerName || 'Estate Guest',
                guest_email: req.body.guest_email || req.body.email || '',
                tour_date: req.body.tour_date || 'Confirmed Date',
                time_slot: req.body.time_slot || '10:00 AM - 11:30 AM',
                guest_count: req.body.guest_count || 1,
                package_name: req.body.package_name || 'Highland Estate Factory Tour & Cupping'
            };
        }

        const mailRes = await sendTourGatePassEmail(booking);
        res.json({
            success: true,
            message: `Gate Pass email sent to ${booking.guest_email || booking.email}`,
            data: mailRes
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/tours/bookings
 */
router.get('/bookings', async (req, res) => {
    try {
        // 1. Turso Cloud (Primary)
        if (isTursoAvailable()) {
            const tursoRows = await queryTurso('SELECT * FROM tour_bookings ORDER BY created_at DESC');
            if (Array.isArray(tursoRows)) {
                return res.json({ success: true, count: tursoRows.length, data: tursoRows, source: 'turso' });
            }
        }

        // 2. Supabase Cloud (Secondary Fallback)
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('tour_bookings').select('*').order('created_at', { ascending: false });
            if (!error && Array.isArray(data)) {
                return res.json({ success: true, count: data.length, data, source: 'supabase' });
            }
        }

        // 3. Local SQLite (Offline Fallback)
        const rows = db.prepare('SELECT * FROM tour_bookings ORDER BY created_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows, source: 'sqlite' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/tours/bookings/:id
 */
router.delete('/bookings/:id', async (req, res) => {
    try {
        const bookId = req.params.id;

        // 1. Delete from Turso Cloud
        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM tour_bookings WHERE id = ?', [bookId]);
            } catch (te) {
                console.warn('⚠️ [Turso] Tour booking delete error:', te.message);
            }
        }

        // 2. Delete from Supabase
        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('tour_bookings').delete().eq('id', bookId);
            if (error) console.warn('⚠️ Supabase tour booking delete error:', error.message);
        }

        // 3. Delete from SQLite
        try {
            db.prepare('DELETE FROM tour_bookings WHERE id = ?').run(bookId);
        } catch (e) {}

        res.json({ success: true, message: 'Booking deleted successfully', id: bookId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
