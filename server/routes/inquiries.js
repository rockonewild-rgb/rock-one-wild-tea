const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { sendInquiryEmails } = require('../services/email');

/**
 * POST /api/inquiries
 * Submit concierge inquiry or B2B request
 */
router.post('/', async (req, res) => {
    try {
        const {
            full_name, email, phone = '',
            service_interested = 'General Inquiry',
            budget_range = 'Not Specified',
            message
        } = req.body;

        if (!full_name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Full name, email, and message are required.'
            });
        }

        const id = 'INQ-' + Date.now().toString(36).toUpperCase();
        const insert = db.prepare(`
            INSERT INTO inquiries (id, full_name, email, phone, service_interested, budget_range, message, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        insert.run(id, full_name, email, phone, service_interested, budget_range, message, 'new');

        const created = db.prepare('SELECT * FROM inquiries WHERE id = ?').get(id);

        // Dispatch Resend email notification in the background
        sendInquiryEmails(created).catch(err => {
            console.error('Email dispatch error:', err.message);
        });

        res.status(201).json({
            success: true,
            message: 'Inquiry received successfully. Our concierge will contact you promptly.',
            data: created
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/inquiries
 * List all inquiries
 */
router.get('/', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
