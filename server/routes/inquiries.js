const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');
const { sendInquiryEmails } = require('../services/email');

/**
 * POST /api/inquiries
 * Submit concierge inquiry or B2B request
 */
router.post('/', async (req, res) => {
    try {
        const {
            id: customId,
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

        const id = customId || ('INQ-' + Date.now().toString(36).toUpperCase());
        const record = {
            id,
            full_name,
            email,
            phone,
            service_interested,
            budget_range,
            message,
            status: 'new'
        };

        let created = record;

        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('inquiries').insert([record]).select().single();
            if (!error && data) {
                created = data;
            }
        }

        try {
            db.prepare(`
                INSERT OR REPLACE INTO inquiries (id, full_name, email, phone, service_interested, budget_range, message, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, 'new')
            `).run(id, full_name, email, phone, service_interested, budget_range, message);
        } catch (e) {}

        // Dispatch Resend email notification
        let emailStatus = null;
        try {
            emailStatus = await sendInquiryEmails(created);
        } catch (mailErr) {
            console.error('⚠️ Email dispatch warning:', mailErr.message);
        }

        res.status(201).json({
            success: true,
            message: 'Inquiry received successfully. Our concierge will contact you promptly.',
            data: created,
            email_delivery: emailStatus
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * GET /api/inquiries
 */
router.get('/', async (req, res) => {
    try {
        if (isSupabaseAvailable()) {
            const { data, error } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false });
            if (!error && data) {
                return res.json({ success: true, count: data.length, data });
            }
        }

        const rows = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
        res.json({ success: true, count: rows.length, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PATCH /api/inquiries/:id
 * Update inquiry status or fields
 */
router.patch('/:id', async (req, res) => {
    try {
        const inqId = req.params.id;
        const { status, message, notes } = req.body;

        if (!status && !message && !notes) {
            return res.status(400).json({ success: false, error: 'No update fields provided' });
        }

        const updatePayload = {};
        if (status) updatePayload.status = status;
        if (message || notes) updatePayload.message = message || notes;

        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('inquiries').update(updatePayload).eq('id', inqId);
            if (error) console.warn('⚠️ Supabase inquiry update error:', error.message);
        }

        try {
            if (status) {
                db.prepare('UPDATE inquiries SET status = ? WHERE id = ?').run(status, inqId);
            }
        } catch (e) {}

        res.json({ success: true, message: 'Inquiry updated successfully', id: inqId, data: updatePayload });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/inquiries/:id
 */
router.put('/:id', async (req, res) => {
    try {
        const inqId = req.params.id;
        const { status } = req.body;

        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('inquiries').update({ status }).eq('id', inqId);
            if (error) console.warn('⚠️ Supabase inquiry update error:', error.message);
        }

        try {
            db.prepare('UPDATE inquiries SET status = ? WHERE id = ?').run(status || 'new', inqId);
        } catch (e) {}

        res.json({ success: true, message: 'Inquiry updated successfully', id: inqId, status });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/inquiries/:id
 */
router.delete('/:id', async (req, res) => {
    try {
        const inqId = req.params.id;
        if (isSupabaseAvailable()) {
            const { error } = await supabase.from('inquiries').delete().eq('id', inqId);
            if (error) console.warn('⚠️ Supabase delete error:', error.message);
        }

        try {
            db.prepare('DELETE FROM inquiries WHERE id = ?').run(inqId);
        } catch (e) {}

        res.json({ success: true, message: 'Inquiry deleted successfully', id: inqId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
