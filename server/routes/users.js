const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');
const { EMAIL_REGEX, hashPassword, verifyPassword, generateRandomPassword } = require('../services/auth_utils');
const { sendUserAccountWelcomeEmail } = require('../services/email');

/**
 * GET /api/users
 * Retrieve all registered patrons, customers, and system users from Turso Cloud
 */
router.get('/', async (req, res) => {
    try {
        let users = [];
        let fetchedFromTurso = false;

        // 1. Fetch from Turso Cloud (authoritative primary)
        if (isTursoAvailable()) {
            try {
                const tursoRows = await queryTurso(`
                    SELECT id, full_name, email, phone, role, status, created_at, last_login, password_hash
                    FROM customer_users 
                    ORDER BY created_at DESC
                `);
                if (tursoRows && Array.isArray(tursoRows)) {
                    users = tursoRows;
                    fetchedFromTurso = true;
                }
            } catch (te) {
                console.warn('Turso fetch users warning:', te.message);
            }
        }

        // 2. If Turso is offline/failed, fallback to SQLite
        if (!fetchedFromTurso) {
            try {
                users = db.prepare(`
                    SELECT id, full_name, email, phone, role, status, created_at, last_login, password_hash
                    FROM customer_users 
                    ORDER BY created_at DESC
                `).all();
            } catch (e) {
                console.warn('SQLite fetch users warning:', e.message);
            }
        }

        // Map auth_provider cleanly and sanitize sensitive password_hash
        const sanitizedUsers = users.map(u => {
            const isGoogle = (u.password_hash === 'OAUTH_GOOGLE' || (u.id && String(u.id).startsWith('G-')));
            return {
                id: u.id,
                full_name: u.full_name || 'Web Patron',
                email: u.email,
                phone: u.phone || '',
                role: u.role || 'patron',
                status: u.status || 'active',
                created_at: u.created_at || new Date().toISOString(),
                last_login: u.last_login || null,
                auth_provider: isGoogle ? 'google' : 'email',
                registration_method: isGoogle ? 'Google Sign-In' : 'Web Email & Password'
            };
        });

        res.json({
            success: true,
            count: sanitizedUsers.length,
            data: sanitizedUsers
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/users
 * Admin creation of a new user account using Email ID
 */
router.post('/', async (req, res) => {
    try {
        const rawEmail = (req.body.email || '').trim().toLowerCase();
        const fullName = (req.body.full_name || req.body.fullName || req.body.name || '').trim();
        const role = (req.body.role || 'patron').toLowerCase();
        const phone = (req.body.phone || '').trim();
        const status = (req.body.status || 'active').toLowerCase();
        const sendInvite = req.body.send_invite_email !== false;
        let password = req.body.password ? String(req.body.password).trim() : '';

        // Validation
        if (!rawEmail || !fullName) {
            return res.status(400).json({
                success: false,
                error: 'Email ID and Full Name are required.'
            });
        }

        if (!EMAIL_REGEX.test(rawEmail)) {
            return res.status(400).json({
                success: false,
                error: 'Please enter a valid Email ID address (e.g. user@domain.com).'
            });
        }

        // Auto-generate secure password if not provided
        if (!password) {
            password = generateRandomPassword(10);
        } else if (password.length < 6) {
            return res.status(400).json({
                success: false,
                error: 'Password must be at least 6 characters.'
            });
        }

        // Check duplicate
        let existing = null;
        if (isTursoAvailable()) {
            try {
                const rows = await queryTurso('SELECT id, email FROM customer_users WHERE LOWER(email) = ? LIMIT 1', [rawEmail]);
                if (rows && rows.length > 0) existing = rows[0];
            } catch (e) {}
        }
        if (!existing) {
            existing = db.prepare('SELECT id, email FROM customer_users WHERE LOWER(email) = ?').get(rawEmail);
        }

        if (existing) {
            return res.status(409).json({
                success: false,
                error: `An account with Email ID "${rawEmail}" is already registered in the system.`
            });
        }

        const userId = 'USR-' + Date.now().toString(36).toUpperCase();
        const passwordHash = hashPassword(password);
        const now = new Date().toISOString();

        // 1. Insert into SQLite
        try {
            db.prepare(`
                INSERT INTO customer_users (id, full_name, email, phone, password_hash, role, status, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `).run(userId, fullName, rawEmail, phone, passwordHash, role, status, now);
        } catch (e) {}

        // 2. Insert into Turso Cloud
        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    INSERT INTO customer_users (id, full_name, email, phone, password_hash, role, status, created_at)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                `, [userId, fullName, rawEmail, phone, passwordHash, role, status, now]);
            } catch (te) {
                console.warn('⚠️ Turso insert user notice:', te.message);
            }
        }

        const createdUser = {
            id: userId,
            full_name: fullName,
            email: rawEmail,
            phone,
            role,
            status,
            created_at: now,
            auth_provider: 'email',
            registration_method: 'Admin Provisioned'
        };

        // Optionally dispatch Welcome & Credentials Email
        let emailDelivery = null;
        if (sendInvite) {
            const clientOrigin = req.get('origin') || `${req.protocol}://${req.get('host')}`;
            try {
                emailDelivery = await sendUserAccountWelcomeEmail({
                    email: rawEmail,
                    full_name: fullName,
                    role: role,
                    password: password,
                    origin: clientOrigin
                });
            } catch (mailErr) {
                console.error('⚠️ User welcome email error:', mailErr.message);
            }
        }

        res.status(201).json({
            success: true,
            message: `Account for ${fullName} (${rawEmail}) registered successfully with role "${role}".`,
            user: createdUser,
            temporary_password: password,
            email_delivery: emailDelivery
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT/PATCH /api/users/:id
 * Update user details, role, phone, status, or password
 */
const handleUpdateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { full_name, phone, role, status, password } = req.body;

        let existing = null;
        if (isTursoAvailable()) {
            try {
                const rows = await queryTurso('SELECT * FROM customer_users WHERE id = ? LIMIT 1', [userId]);
                if (rows && rows.length > 0) existing = rows[0];
            } catch (e) {}
        }
        if (!existing) {
            existing = db.prepare('SELECT * FROM customer_users WHERE id = ?').get(userId);
        }

        if (!existing) {
            return res.status(404).json({ success: false, error: 'User account not found.' });
        }

        const newName = full_name ? String(full_name).trim() : existing.full_name;
        const newPhone = phone !== undefined ? String(phone).trim() : existing.phone;
        const newRole = role ? String(role).toLowerCase() : existing.role;
        const newStatus = status ? String(status).toLowerCase() : existing.status;
        let newHash = existing.password_hash;

        if (password && String(password).trim().length >= 6) {
            newHash = hashPassword(String(password).trim());
        }

        // Update SQLite & Turso Cloud
        try {
            db.prepare(`
                UPDATE customer_users 
                SET full_name = ?, phone = ?, role = ?, status = ?, password_hash = ?
                WHERE id = ?
            `).run(newName, newPhone, newRole, newStatus, newHash, userId);
        } catch (e) {}

        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    UPDATE customer_users 
                    SET full_name = ?, phone = ?, role = ?, status = ?, password_hash = ?
                    WHERE id = ?
                `, [newName, newPhone, newRole, newStatus, newHash, userId]);
            } catch (te) {
                console.warn('⚠️ Turso update user notice:', te.message);
            }
        }

        const updatedUser = {
            id: userId,
            full_name: newName,
            email: existing.email,
            phone: newPhone,
            role: newRole,
            status: newStatus,
            created_at: existing.created_at,
            last_login: existing.last_login
        };

        res.json({
            success: true,
            message: `User ${newName} updated successfully.`,
            user: updatedUser
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

router.put('/:id', handleUpdateUser);
router.patch('/:id', handleUpdateUser);

/**
 * POST /api/users/:id/reset-password
 * Reset user password and dispatch updated credentials to their Email ID
 */
router.post('/:id/reset-password', async (req, res) => {
    try {
        const userId = req.params.id;
        let user = null;
        if (isTursoAvailable()) {
            try {
                const rows = await queryTurso('SELECT * FROM customer_users WHERE id = ? LIMIT 1', [userId]);
                if (rows && rows.length > 0) user = rows[0];
            } catch (e) {}
        }
        if (!user) {
            user = db.prepare('SELECT * FROM customer_users WHERE id = ?').get(userId);
        }

        if (!user) {
            return res.status(404).json({ success: false, error: 'User account not found.' });
        }

        const newPassword = req.body.password ? String(req.body.password).trim() : generateRandomPassword(10);
        const newHash = hashPassword(newPassword);

        // Update SQLite & Turso Cloud
        try {
            db.prepare('UPDATE customer_users SET password_hash = ? WHERE id = ?').run(newHash, userId);
        } catch (e) {}

        if (isTursoAvailable()) {
            try {
                await executeTurso('UPDATE customer_users SET password_hash = ? WHERE id = ?', [newHash, userId]);
            } catch (te) {}
        }

        // Dispatch credentials email
        let emailDelivery = null;
        if (req.body.send_email !== false) {
            const clientOrigin = req.get('origin') || `${req.protocol}://${req.get('host')}`;
            try {
                emailDelivery = await sendUserAccountWelcomeEmail({
                    email: user.email,
                    full_name: user.full_name,
                    role: user.role,
                    password: newPassword,
                    origin: clientOrigin
                });
            } catch (e) {}
        }

        res.json({
            success: true,
            message: `Password reset successfully for ${user.email}.`,
            user_id: userId,
            email: user.email,
            new_password: newPassword,
            email_delivery: emailDelivery
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * DELETE /api/users/:id
 * Delete a user account from Turso Cloud & SQLite
 */
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Prevent deleting primary super admin rockonewild@gmail.com
        let user = null;
        if (isTursoAvailable()) {
            try {
                const rows = await queryTurso('SELECT email FROM customer_users WHERE id = ? LIMIT 1', [userId]);
                if (rows && rows.length > 0) user = rows[0];
            } catch (e) {}
        }
        if (!user) {
            user = db.prepare('SELECT email FROM customer_users WHERE id = ?').get(userId);
        }

        if (user && user.email === 'rockonewild@gmail.com') {
            return res.status(403).json({
                success: false,
                error: 'The primary Estate Administrator account (rockonewild@gmail.com) cannot be deleted.'
            });
        }

        // Delete from SQLite & Turso Cloud
        try {
            db.prepare('DELETE FROM customer_users WHERE id = ?').run(userId);
        } catch (e) {}

        if (isTursoAvailable()) {
            try {
                await executeTurso('DELETE FROM customer_users WHERE id = ?', [userId]);
            } catch (te) {}
        }

        res.json({
            success: true,
            message: 'User account deleted successfully.',
            id: userId
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;