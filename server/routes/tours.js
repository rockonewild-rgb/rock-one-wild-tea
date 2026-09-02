const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

/**
 * GET /api/tours/slots
 * Fetch all tour slots
 */
router.get('/slots', (req, res) => {
    try {
        const { date } = req.query;
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
 * Book a tour slot
 */
router.post('/book', (req, res) => {
    try {
        const {
            tour_slot_id, tour_date, time_slot,
            guest_name, guest_email, guest_phone,
            guest_count = 1, notes = ''
        } = req.body;

        if (!tour_date || !time_slot || !guest_name || !guest_email) {
            return res.status(400).json({
                success: false,
                error: 'tour_date, time_slot, guest_name, and guest_email are required.'
            });
        }

        const count = Number(guest_count) || 1;

        // Find matching tour slot if slot_id given or search by date/time
        let slot = null;
        if (tour_slot_id) {
            slot = db.prepare('SELECT * FROM tour_slots WHERE id = ?').get(tour_slot_id);
        } else {
            slot = db.prepare('SELECT * FROM tour_slots WHERE tour_date = ? AND time_slot = ?').get(tour_date, time_slot);
        }

        // If slot exists, check seat availability
        if (slot) {
            const available = slot.max_capacity - slot.booked_seats;
            if (available < count) {
                return res.status(400).json({
                    success: false,
                    error: `Only ${available} seat(s) available for this session.`
                });
            }

            // Update booked seats
            db.prepare('UPDATE tour_slots SET booked_seats = booked_seats + ? WHERE id = ?').run(count, slot.id);
        }

        const bookingId = 'TB-' + Date.now().toString(36).toUpperCase();
        const insertBooking = db.prepare(`
            INSERT INTO tour_bookings (id, tour_slot_id, tour_date, time_slot, guest_name, guest_email, guest_phone, guest_count, notes, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insertBooking.run(
            bookingId, slot ? slot.id : null, tour_date, time_slot,
            guest_name, guest_email, guest_phone || '', count,
            notes || '', 'confirmed'
        );

        const booking = db.prepare('SELECT * FROM tour_bookings WHERE id = ?').get(bookingId);
        res.status(201).json({
            success: true,
            message: 'Tour booking confirmed successfully',
            data: booking
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/tours/bookings
 * List all bookings
 */
router.get('/bookings', (req, res) => {
    try {
        const bookings = db.prepare('SELECT * FROM tour_bookings ORDER BY created_at DESC').all();
        res.json({ success: true, count: bookings.length, data: bookings });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
