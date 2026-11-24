const { createClient } = require('@libsql/client');
require('dotenv').config();

const url = (process.env.TURSO_DATABASE_URL || '').trim();
const authToken = (process.env.TURSO_AUTH_TOKEN || '').trim();

let turso = null;
let isTursoAvailable = false;

if (url && authToken) {
    try {
        turso = createClient({
            url,
            authToken
        });
        isTursoAvailable = true;
        console.log(`🌿 [Turso Cloud] Connected: ${url}`);
    } catch (err) {
        console.warn('⚠️ [Turso] Connection failed:', err.message);
    }
} else {
    console.log('ℹ️ [Turso] TURSO_DATABASE_URL or TURSO_AUTH_TOKEN not set in environment. Running on local SQLite.');
}

/**
 * Initialize all database tables on Turso cloud matching SQLite schema
 */
async function initTursoSchema() {
    if (!turso || !isTursoAvailable) return false;

    try {
        await turso.batch([
            `CREATE TABLE IF NOT EXISTS products (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                category TEXT NOT NULL,
                type TEXT NOT NULL,
                season TEXT,
                grade TEXT,
                elevation TEXT,
                price_usd REAL NOT NULL,
                shipping_fee_usd REAL DEFAULT 0.0,
                stock INTEGER DEFAULT 10,
                image TEXT,
                description TEXT,
                flavor_notes TEXT,
                brewing_guide TEXT,
                is_reserve INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS boxes (
                number INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                reserve_flush TEXT NOT NULL,
                price_usd REAL NOT NULL,
                status TEXT DEFAULT 'available',
                allocated_to TEXT,
                gold_seal_code TEXT,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS tour_slots (
                id TEXT PRIMARY KEY,
                tour_date TEXT NOT NULL,
                time_slot TEXT NOT NULL,
                name TEXT NOT NULL,
                category TEXT NOT NULL,
                max_capacity INTEGER DEFAULT 12,
                booked_seats INTEGER DEFAULT 0,
                price_usd REAL DEFAULT 65.0,
                is_active INTEGER DEFAULT 1
            )`,
            `CREATE TABLE IF NOT EXISTS tour_bookings (
                id TEXT PRIMARY KEY,
                tour_slot_id TEXT,
                tour_date TEXT NOT NULL,
                time_slot TEXT NOT NULL,
                guest_name TEXT NOT NULL,
                guest_email TEXT NOT NULL,
                guest_phone TEXT,
                guest_count INTEGER NOT NULL,
                notes TEXT,
                status TEXT DEFAULT 'confirmed',
                slip_image TEXT,
                validated_at TEXT,
                validation_note TEXT,
                total_price REAL DEFAULT 0.0,
                currency_code TEXT DEFAULT 'USD',
                total_in_currency REAL DEFAULT 0.0,
                package_name TEXT,
                payment_method TEXT DEFAULT 'bank',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS orders (
                id TEXT PRIMARY KEY,
                customer_name TEXT NOT NULL,
                customer_email TEXT NOT NULL,
                customer_phone TEXT,
                shipping_address TEXT NOT NULL,
                subtotal_usd REAL NOT NULL,
                shipping_usd REAL DEFAULT 0,
                discount_usd REAL DEFAULT 0,
                total_usd REAL NOT NULL,
                currency_code TEXT DEFAULT 'USD',
                currency_rate REAL DEFAULT 1.0,
                total_in_currency REAL NOT NULL,
                payment_method TEXT DEFAULT 'credit_card',
                payment_status TEXT DEFAULT 'paid',
                fulfillment_status TEXT DEFAULT 'processing',
                bespoke_notes TEXT,
                slip_image TEXT,
                validated_at TEXT,
                validation_note TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS order_items (
                id TEXT PRIMARY KEY,
                order_id TEXT NOT NULL,
                product_id TEXT NOT NULL,
                product_name TEXT NOT NULL,
                quantity INTEGER NOT NULL,
                unit_price_usd REAL NOT NULL,
                total_price_usd REAL NOT NULL,
                gift_options TEXT,
                FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE
            )`,
            `CREATE TABLE IF NOT EXISTS inquiries (
                id TEXT PRIMARY KEY,
                full_name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                service_interested TEXT,
                budget_range TEXT,
                message TEXT NOT NULL,
                status TEXT DEFAULT 'new',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS reviews (
                id TEXT PRIMARY KEY,
                author TEXT NOT NULL,
                role TEXT,
                location TEXT,
                rating INTEGER NOT NULL,
                title TEXT,
                content TEXT NOT NULL,
                date_str TEXT,
                is_verified INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS announcements (
                id TEXT PRIMARY KEY,
                tag TEXT NOT NULL,
                date_str TEXT NOT NULL,
                heading TEXT NOT NULL,
                content TEXT NOT NULL,
                image TEXT,
                link TEXT,
                is_active INTEGER DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS newsletter_subscribers (
                id TEXT PRIMARY KEY,
                email TEXT UNIQUE NOT NULL,
                source TEXT DEFAULT 'website_banner',
                subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE TABLE IF NOT EXISTS customer_users (
                id TEXT PRIMARY KEY,
                full_name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                phone TEXT DEFAULT '',
                password_hash TEXT NOT NULL,
                role TEXT DEFAULT 'staff',
                status TEXT DEFAULT 'active',
                last_login TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )`
        ], 'write');

        console.log('✅ [Turso Cloud] Schema verified & initialized successfully.');
        return true;
    } catch (err) {
        console.error('❌ [Turso Cloud] Schema initialization failed:', err.message);
        return false;
    }
}

/**
 * Seed initial records into Turso Cloud from local SQLite if Turso is empty
 */
async function syncLocalToTurso() {
    if (!turso || !isTursoAvailable) return false;

    // Check if auto-seed is enabled (defaults to disabled for full manual database control)
    const isAutoSeedEnabled = process.env.TURSO_AUTO_SEED === 'true' || process.env.TURSO_AUTO_SEED === '1';
    if (!isAutoSeedEnabled) {
        console.log('ℹ️ [Turso Cloud] Auto-seeding is disabled (TURSO_AUTO_SEED!=true). Database will not be repopulated.');
        return false;
    }

    try {
        const prodCheck = await turso.execute('SELECT COUNT(*) as count FROM products');
        const count = prodCheck.rows[0]?.count || 0;

        if (Number(count) > 0) {
            console.log(`ℹ️ [Turso Cloud] Database already has data (${count} products). Skipping initial migration.`);
            return true;
        }

        console.log('🔄 [Turso Cloud] Empty database detected. Seeding data from local SQLite...');
        const { db } = require('./database');

        // 1. Seed Products
        const localProds = db.prepare('SELECT * FROM products').all();
        if (localProds && localProds.length > 0) {
            const batchProds = localProds.map(p => ({
                sql: `INSERT OR IGNORE INTO products (id, name, category, type, season, grade, elevation, price_usd, shipping_fee_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                args: [
                    p.id, p.name, p.category, p.type, p.season, p.grade, p.elevation,
                    p.price_usd, p.shipping_fee_usd || 0, p.stock || 10, p.image,
                    p.description, p.flavor_notes, p.brewing_guide, p.is_reserve ? 1 : 0
                ]
            }));
            await turso.batch(batchProds, 'write');
            console.log(`✅ [Turso Cloud] Migrated ${localProds.length} products.`);
        }

        // 2. Seed Boxes
        const localBoxes = db.prepare('SELECT * FROM boxes').all();
        if (localBoxes && localBoxes.length > 0) {
            const batchBoxes = localBoxes.map(b => ({
                sql: `INSERT OR IGNORE INTO boxes (number, name, reserve_flush, price_usd, status, allocated_to, gold_seal_code)
                      VALUES (?, ?, ?, ?, ?, ?, ?)`,
                args: [b.number, b.name, b.reserve_flush, b.price_usd, b.status, b.allocated_to, b.gold_seal_code]
            }));
            await turso.batch(batchBoxes, 'write');
            console.log(`✅ [Turso Cloud] Migrated ${localBoxes.length} numbered boxes.`);
        }

        // 3. Seed Tour Slots
        const localSlots = db.prepare('SELECT * FROM tour_slots').all();
        if (localSlots && localSlots.length > 0) {
            const batchSlots = localSlots.map(s => ({
                sql: `INSERT OR IGNORE INTO tour_slots (id, tour_date, time_slot, name, category, max_capacity, booked_seats, price_usd, is_active)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                args: [s.id, s.tour_date, s.time_slot, s.name, s.category, s.max_capacity, s.booked_seats, s.price_usd, s.is_active ? 1 : 0]
            }));
            await turso.batch(batchSlots, 'write');
            console.log(`✅ [Turso Cloud] Migrated ${localSlots.length} tour slots.`);
        }

        // 4. Seed Users
        const localUsers = db.prepare('SELECT * FROM customer_users').all();
        if (localUsers && localUsers.length > 0) {
            const batchUsers = localUsers.map(u => ({
                sql: `INSERT OR IGNORE INTO customer_users (id, full_name, email, phone, password_hash, role, status)
                      VALUES (?, ?, ?, ?, ?, ?, ?)`,
                args: [u.id, u.full_name, u.email, u.phone || '', u.password_hash, u.role || 'staff', u.status || 'active']
            }));
            await turso.batch(batchUsers, 'write');
            console.log(`✅ [Turso Cloud] Migrated ${localUsers.length} user accounts.`);
        }

        // 5. Seed Reviews
        const localReviews = db.prepare('SELECT * FROM reviews').all();
        if (localReviews && localReviews.length > 0) {
            const batchReviews = localReviews.map(r => ({
                sql: `INSERT OR IGNORE INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                args: [r.id, r.author, r.role, r.location, r.rating, r.title, r.content, r.date_str, r.is_verified ? 1 : 0]
            }));
            await turso.batch(batchReviews, 'write');
            console.log(`✅ [Turso Cloud] Migrated ${localReviews.length} reviews.`);
        }

        console.log('🎉 [Turso Cloud] Full database seed complete!');
        return true;
    } catch (err) {
        console.error('❌ [Turso Cloud] Migration sync error:', err.message);
        return false;
    }
}

/**
 * Execute a query on Turso Cloud and return rows
 */
async function queryTurso(sql, args = []) {
    if (!turso || !isTursoAvailable) return null;
    try {
        const res = await turso.execute({ sql, args });
        return res.rows || [];
    } catch (err) {
        console.warn('⚠️ [Turso Query Error]:', err.message);
        return null;
    }
}

/**
 * Execute an INSERT / UPDATE / DELETE statement on Turso Cloud
 */
async function executeTurso(sql, args = []) {
    if (!turso || !isTursoAvailable) return null;
    try {
        return await turso.execute({ sql, args });
    } catch (err) {
        console.warn('⚠️ [Turso Execute Error]:', err.message);
        return null;
    }
}

/**
 * Probe live Turso database connection and return health status
 */
async function pingTurso() {
    if (!turso || !isTursoAvailable) {
        return { success: false, connected: false, error: 'TURSO_DATABASE_URL or TURSO_AUTH_TOKEN not configured' };
    }
    try {
        const ping = await turso.execute('SELECT 1 AS connected, CURRENT_TIMESTAMP AS server_time');
        return {
            success: true,
            connected: true,
            url: (process.env.TURSO_DATABASE_URL || '').trim(),
            serverTime: ping.rows[0]?.server_time || null
        };
    } catch (err) {
        return {
            success: false,
            connected: false,
            url: (process.env.TURSO_DATABASE_URL || '').trim(),
            error: err.message
        };
    }
}

module.exports = {
    turso,
    isTursoAvailable: () => isTursoAvailable,
    initTursoSchema,
    syncLocalToTurso,
    queryTurso,
    executeTurso,
    pingTurso
};
