const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { rawSupabase, isSupabaseAvailable } = require('../db/supabase');
const { isTursoAvailable, queryTurso, executeTurso } = require('../db/turso');
const { EMAIL_REGEX, hashPassword, verifyPassword, generateRandomPassword } = require('../services/auth_utils');
const { sendUserAccountWelcomeEmail } = require('../services/email');

/**
 * GET /api/users
 * Retrieve all registered system users & staff accounts
 */
router.get('/', async (req, res) => {
    try {
        let users = [];

        // 1. Fetch from Turso Cloud if available, else SQLite
        if (isTursoAvailable()) {
            try {
                const tursoRows = await queryTurso(`
                    SELECT id, full_name, email, phone, role, status, created_at, last_login 
                    FROM customer_users 
                    ORDER BY created_at DESC
                `);
                if (tursoRows && tursoRows.length > 0) {
                    users = tursoRows;
                }
            } catch (te) {
                console.warn('Turso fetch users warning:', te.message);
            }
        }

        if (users.length === 0) {
            try {
                users = db.prepare(`
                    SELECT id, full_name, email, phone, role, status, created_at, last_login 
                    FROM customer_users 
                    ORDER BY created_at DESC
                `).all();
            } catch (e) {
                console.warn('SQLite fetch users warning:', e.message);
            }
        }

        // 2. If Supabase is available, sync/merge any remote users
        if (isSupabaseAvailable() && rawSupabase) {
            try {
                const { data, error } = await rawSupabase.auth.admin.listUsers();
                if (!error && data && data.users) {
                    const existingEmails = new Set(users.map(u => (u.email || '').toLowerCase()));
                    data.users.forEach(su => {
                        const sEmail = (su.email || '').toLowerCase();
                        if (sEmail && !existingEmails.has(sEmail)) {
                            const meta = su.user_metadata || {};
                            const newUser = {
                                id: su.id,
                                full_name: meta.full_name || meta.name || sEmail.split('@')[0],
                                email: sEmail,
                                phone: meta.phone || su.phone || '',
                                role: meta.role || 'patron',
                                status: su.banned_until ? 'suspended' : 'active',
                                created_at: su.created_at,
                                last_login: su.last_sign_in_at || null
                            };
                            users.push(newUser);

                            // Sync to SQLite cache
                            try {
                                db.prepare(`
                                    INSERT OR IGNORE INTO customer_users (id, full_name, email, phone, password_hash, role, status, created_at)
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                                `).run(newUser.id, newUser.full_name, newUser.email, newUser.phone, 'SUPABASE_SYNC', newUser.role, newUser.status, newUser.created_at);
                            } catch (e) {}
                        }
                    });
                }
            } catch (sbErr) {
                console.warn('Supabase listUsers notice:', sbErr.message);
            }
        }

        res.json({
            success: true,
            count: users.length,
            data: users
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
        const role = (req.body.role || 'staff').toLowerCase();
        const phone = (req.body.phone || '').trim();
        const status = (req.body.status || 'active').toLowerCase();
        const sendInvite = req.body.send_invite_email !== false; // default true
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

        // 1. Check duplicate in SQLite
        const existingSqlite = db.prepare('SELECT id, email FROM customer_users WHERE email = ?').get(rawEmail);
        if (existingSqlite) {
            return res.status(409).json({
                success: false,
                error: `An account with Email ID "${rawEmail}" is already registered in the system.`
            });
        }

        const userId = 'USR-' + Date.now().toString(36).toUpperCase();
        let supabaseUserId = null;

        // 2. Provision in Supabase Auth if online
        if (isSupabaseAvailable() && rawSupabase) {
            try {
                const { data, error } = await rawSupabase.auth.admin.createUser({
                    email: rawEmail,
                    password: password,
                    email_confirm: true,
                    user_metadata: {
                        full_name: fullName,
                        role: role,
                        phone: phone
                    }
                });

                if (error) {
                    const msg = (error.message || '').toLowerCase();
                    if (msg.includes('already') || msg.includes('registered') || error.status === 422) {
                        return res.status(409).json({
                            success: false,
                            error: `An account with Email ID "${rawEmail}" already exists in Supabase Auth.`
                        });
                    }
                    console.warn('⚠️ Supabase admin.createUser notice:', error.message);
                } else if (data && data.user) {
                    supabaseUserId = data.user.id;
                }
            } catch (sbErr) {
                console.warn('⚠️ Supabase account creation fallback to SQLite:', sbErr.message);
            }
        }

        // 3. Insert into SQLite & Turso Cloud
        const finalId = supabaseUserId || userId;
        const passwordHash = hashPassword(password);
        db.prepare(`
            INSERT INTO customer_users (id, full_name, email, phone, password_hash, role, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `).run(finalId, fullName, rawEmail, phone, passwordHash, role, status);

        if (isTursoAvailable()) {
            try {
                await executeTurso(`
                    INSERT OR REPLACE INTO customer_users (id, full_name, email, phone, password_hash, role, status)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `, [finalId, fullName, rawEmail, phone, passwordHash, role, status]);
            } catch (te) {
                console.warn('⚠️ Turso insert user notice:', te.message);
            }
        }

        const createdUser = {
            id: finalId,
            full_name: fullName,
            email: rawEmail,
            phone,
            role,
            status,
            created_at: new Date().toISOString()
        };

        // 4. Optionally dispatch Welcome & Credentials Email
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
            message: `System account for ${fullName} (${rawEmail}) provisioned successfully with role "${role}".`,
            user: createdUser,
            temporary_password: password,
            email_delivery: emailDelivery
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * PUT /api/users/:id
 * Update user details, role, phone, status, or password
 */
router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { full_name, phone, role, status, password } = req.body;

        const existing = db.prepare('SELECT * FROM customer_users WHERE id = ?').get(userId);
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

        // Update SQLite & Turso
        db.prepare(`
            UPDATE customer_users 
            SET full_name = ?, phone = ?, role = ?, status = ?, password_hash = ?
            WHERE id = ?
        `).run(newName, newPhone, newRole, newStatus, newHash, userId);

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

        // Update Supabase if available
        if (isSupabaseAvailable() && rawSupabase) {
            try {
                const sbPayload = {
                    user_metadata: {
                        full_name: newName,
                        role: newRole,
                        phone: newPhone
                    }
                };
                if (password && String(password).trim().length >= 6) {
                    sbPayload.password = String(password).trim();
                }
                await rawSupabase.auth.admin.updateUserById(userId, sbPayload);
            } catch (sbErr) {
                console.warn('Supabase updateUserById notice:', sbErr.message);
            }
        }

        const updated = db.prepare('SELECT id, full_name, email, phone, role, status, created_at, last_login FROM customer_users WHERE id = ?').get(userId);

        res.json({
            success: true,
            message: `User ${updated.full_name} updated successfully.`,
            user: updated
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

/**
 * POST /api/users/:id/reset-password
 * Reset user password and dispatch updated credentials to their Email ID
 */
router.post('/:id/reset-password', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = db.prepare('SELECT * FROM customer_users WHERE id = ?').get(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User account not found.' });
        }

        const newPassword = req.body.password ? String(req.body.password).trim() : generateRandomPassword(10);
        const newHash = hashPassword(newPassword);

        // Update SQLite & Turso
        db.prepare('UPDATE customer_users SET password_hash = ? WHERE id = ?').run(newHash, userId);

        if (isTursoAvailable()) {
            try {
                await executeTurso('UPDATE customer_users SET password_hash = ? WHERE id = ?', [newHash, userId]);
            } catch (te) {}
        }

        // Update Supabase
        if (isSupabaseAvailable() && rawSupabase) {
            try {
                await rawSupabase.auth.admin.updateUserById(userId, { password: newPassword });
            } catch (e) {}
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
 * Delete a system user account
 */
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        // Prevent deleting primary super admin rockonewild@gmail.com
        const user = db.prepare('SELECT email FROM customer_users WHERE id = ?').get(userId);
        if (user && user.email === 'rockonewild@gmail.com') {
            return res.status(403).json({
                success: false,
                error: 'The primary Estate Administrator account (rockonewild@gmail.com) cannot be deleted.'
            });
        }

        // Delete from Supabase
        if (isSupabaseAvailable() && rawSupabase) {
            try {
                await rawSupabase.auth.admin.deleteUser(userId);
            } catch (e) {}
        }

        // Delete from SQLite & Turso
        db.prepare('DELETE FROM customer_users WHERE id = ?').run(userId);

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
