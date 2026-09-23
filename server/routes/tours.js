const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');

/**
 * GET /api/tours/slots
 */
router.get('/slots', async (req, res) => {
    try {
        const { date } = req.query;

        if (isSupabaseAvailable()) {
            let query = supabase.from('tour_slots').select('*').eq('is_active', true);
            if (date) {
                query = query.eq('tour_date', date);
            }
            query = query.order('tour_date', { ascending: true }).order('time_slot', { ascending: true });

            const { data, error } = await query;
            if (!error && data) {
                return res.json({
                    success: true,
                    count: data.length,
                    data: data.map(s => ({
                        ...s,
                        available_seats: (s.max_capacity || 12) - (s.booked_seats || 0)
                    }))
                });
            }
        }

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
                available_seats: s.max_capacity - s.booked_seats
            }))
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/tours/book
 */
router.post('/book', async (req, res) => {
    try {
        const {
            id: customId,
            tour_slot_id, tour_date, time_slot,
            guest_name, guest_email, guest_phone,
            guest_count = 1, notes = '', slip_image = ''
        } = req.body;

        if (!tour_date || !time_slot || !guest_name || !guest_email) {
            return res.status(400).json({
                success: false,
                error: 'tour_date, time_slot, guest_name, and guest_email are required.'
            });
        }

        const count = Number(guest_count) || 1;
        const bookingId = customId || ('TB-' + Date.now().toString(36).toUpperCase());

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
            status: 'confirmed'
        };

        if (isSupabaseAvailable()) {
            let { error: bookErr } = await supabase.from('tour_bookings').insert([bookingRecord]);

            // If slip_image column is missing in the Supabase schema, retry gracefully without it
            if (bookErr && bookErr.message && (bookErr.message.includes('slip_image') || bookErr.message.includes('schema cache'))) {
                console.warn('⚠️ slip_image column missing in Supabase tour_bookings table. Retrying insert without slip_image...');
                const fallbackBooking = { ...bookingRecord };
                delete fallbackBooking.slip_image;
                if (bookingRecord.slip_image) {
                    fallbackBooking.notes = (fallbackBooking.notes ? fallbackBooking.notes + ' | ' : '') + '[Deposit Slip Attached]';
                }
                const retryRes = await supabase.from('tour_bookings').insert([fallbackBooking]);
                bookErr = retryRes.error;
            }

            if (bookErr) console.warn('⚠️ Supabase tour booking error:', bookErr.message);

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
                INSERT OR REPLACE INTO tour_bookings (id, tour_slot_id, tour_date, time_slot, guest_name, guest_email, guest_phone, guest_count, notes, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'confirmed')
            `).run(bookingId, tour_slot_id, tour_date, time_slot, guest_name, guest_email, guest_phone, count, notes);

            if (tour_slot_id) {
                db.prepare('UPDATE tour_slots SET booked_seats = booked_seats + ? WHERE id = ?').run(count, tour_slot_id);
            }
        } catch (e) {}

        res.status(201).json({
            success: true,
            message: 'Tour booking confirmed successfully.',
            booking_id: bookingId,
            data: bookingRecord
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
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('tour_bookings').select('*').order('created_at', { ascending: false });
            if (!error && data) {
                return res.json({ success: true, count: data.length, data });
            }
        }

        const rows = db.prepare('SELECT * FROM tour_bookings ORDER BY created_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows });
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
        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('tour_bookings').delete().eq('id', bookId);
            if (error) console.warn('⚠️ Supabase tour booking delete error:', error.message);
        }

        try {
            db.prepare('DELETE FROM tour_bookings WHERE id = ?').run(bookId);
        } catch (e) {}

        res.json({ success: true, message: 'Booking deleted successfully', id: bookId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
