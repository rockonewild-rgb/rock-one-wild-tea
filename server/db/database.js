const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

// Detect writable directory for local vs Vercel / AWS Lambda
let dbPath;
if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NODE_ENV === 'production') {
    const tmpDir = '/tmp';
    dbPath = path.join(tmpDir, 'teafactory.db');
    
    // Copy bundled seed database to /tmp if it doesn't exist yet in /tmp
    const bundledDb = path.join(__dirname, '../../data/teafactory.db');
    if (fs.existsSync(bundledDb) && !fs.existsSync(dbPath)) {
        try {
            fs.copyFileSync(bundledDb, dbPath);
        } catch (e) {
            console.warn('Notice copying db to /tmp:', e.message);
        }
    }
} else {
    const dataDir = path.join(__dirname, '../../data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    dbPath = path.join(dataDir, 'teafactory.db');
}

const db = new DatabaseSync(dbPath);

// Enable foreign keys
db.exec('PRAGMA foreign_keys = ON;');

/**
 * Initialize all database tables
 */
function initSchema() {
    db.exec(`
        -- 1. Products Table
        CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            type TEXT NOT NULL,
            season TEXT,
            grade TEXT,
            elevation TEXT,
            price_usd REAL NOT NULL,
            stock INTEGER DEFAULT 10,
            image TEXT,
            description TEXT,
            flavor_notes TEXT, -- JSON array of strings
            brewing_guide TEXT, -- JSON object
            is_reserve INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 2. Numbered Collector Boxes (Allocations) Table
        CREATE TABLE IF NOT EXISTS boxes (
            number INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            reserve_flush TEXT NOT NULL,
            price_usd REAL NOT NULL,
            status TEXT DEFAULT 'available', -- 'available' | 'reserved' | 'sold'
            allocated_to TEXT,
            gold_seal_code TEXT,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 3. Tour Slots Table
        CREATE TABLE IF NOT EXISTS tour_slots (
            id TEXT PRIMARY KEY,
            tour_date TEXT NOT NULL,
            time_slot TEXT NOT NULL,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            max_capacity INTEGER DEFAULT 12,
            booked_seats INTEGER DEFAULT 0,
            price_usd REAL DEFAULT 65.0,
            is_active INTEGER DEFAULT 1
        );

        -- 4. Tour Bookings Table
        CREATE TABLE IF NOT EXISTS tour_bookings (
            id TEXT PRIMARY KEY,
            tour_slot_id TEXT,
            tour_date TEXT NOT NULL,
            time_slot TEXT NOT NULL,
            guest_name TEXT NOT NULL,
            guest_email TEXT NOT NULL,
            guest_phone TEXT,
            guest_count INTEGER NOT NULL,
            notes TEXT,
            status TEXT DEFAULT 'confirmed', -- 'confirmed' | 'cancelled'
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 5. Orders Table
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            customer_name TEXT NOT NULL,
            customer_email TEXT NOT NULL,
            customer_phone TEXT,
            shipping_address TEXT NOT NULL,
            subtotal_usd REAL NOT NULL,
            discount_usd REAL DEFAULT 0,
            total_usd REAL NOT NULL,
            currency_code TEXT DEFAULT 'USD',
            currency_rate REAL DEFAULT 1.0,
            total_in_currency REAL NOT NULL,
            payment_method TEXT DEFAULT 'credit_card',
            payment_status TEXT DEFAULT 'paid',
            fulfillment_status TEXT DEFAULT 'processing',
            bespoke_notes TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 6. Order Items Table
        CREATE TABLE IF NOT EXISTS order_items (
            id TEXT PRIMARY KEY,
            order_id TEXT NOT NULL,
            product_id TEXT NOT NULL,
            product_name TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            unit_price_usd REAL NOT NULL,
            total_price_usd REAL NOT NULL,
            gift_options TEXT, -- JSON object
            FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE
        );

        -- 7. Concierge Inquiries Table
        CREATE TABLE IF NOT EXISTS inquiries (
            id TEXT PRIMARY KEY,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            service_interested TEXT,
            budget_range TEXT,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'new', -- 'new' | 'in_review' | 'resolved'
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 8. Customer Reviews Table
        CREATE TABLE IF NOT EXISTS reviews (
            id TEXT PRIMARY KEY,
            author TEXT NOT NULL,
            role TEXT,
            location TEXT,
            rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
            title TEXT,
            content TEXT NOT NULL,
            date_str TEXT,
            is_verified INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 9. Announcements & Bulletins Table
        CREATE TABLE IF NOT EXISTS announcements (
            id TEXT PRIMARY KEY,
            tag TEXT NOT NULL,
            date_str TEXT NOT NULL,
            heading TEXT NOT NULL,
            content TEXT NOT NULL,
            image TEXT,
            link TEXT,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        -- 10. Newsletter Subscribers Table
        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            source TEXT DEFAULT 'website_banner',
            subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
}

/**
 * Seed initial database records if empty
 */
function seedInitialData() {
    // 1. Seed Products
    const prodCount = db.prepare('SELECT COUNT(*) as count FROM products').get().count;
    if (prodCount === 0) {
        const insertProd = db.prepare(`
            INSERT INTO products (id, name, category, type, season, grade, elevation, price_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const defaultProducts = [
            {
                id: 'prod-01',
                name: 'Wild High-Mountain Silver Tips',
                category: 'artisan',
                type: 'White Tea',
                season: 'Spring Equinox 2026',
                grade: 'Imperial Silver Velvet',
                elevation: '1,240m Montane Ridge',
                price_usd: 145.0,
                stock: 18,
                image: 'images/silver_tips.jpg',
                description: 'Sun-withered velvety buds harvested at dawn before direct mountain sunlight touches the forest canopy. Imparts floral wildflower honey and raw pear aromatics.',
                flavor_notes: JSON.stringify(['Wild Orchid', 'Mountain Honey', 'White Peach', 'Subtle Pine']),
                brewing_guide: JSON.stringify({ temp: '75°C - 80°C', time: '4 - 5 mins', leaves: '3g per 150ml' }),
                is_reserve: 1
            },
            {
                id: 'prod-02',
                name: 'Orthodox Highland Black OP1',
                category: 'artisan',
                type: 'Black Tea',
                season: 'Equinox 2026',
                grade: 'Orange Pekoe 1 (OP1)',
                elevation: '1,200m Wallawela Slopes',
                price_usd: 85.0,
                stock: 45,
                image: 'images/black_tea.jpg',
                description: 'Full-leaf whole orthodox black tea hand-rolled on cedar tables and cured over slow-burning cinnamon wood kilns.',
                flavor_notes: JSON.stringify(['Malt & Date', 'Dark Cocoa', 'Wood Smoke', 'Golden Caramel']),
                brewing_guide: JSON.stringify({ temp: '95°C - 100°C', time: '3 - 4 mins', leaves: '2.5g per 200ml' }),
                is_reserve: 0
            },
            {
                id: 'prod-03',
                name: 'Wild Canopy Forest Green',
                category: 'artisan',
                type: 'Green Tea',
                season: 'Early Dawn Flush',
                grade: 'Fine Young Tip',
                elevation: '1,280m Peak Sanctuary',
                price_usd: 95.0,
                stock: 30,
                image: 'images/green_tea.jpg',
                description: 'Wok-fired whole leaf green tea retaining vibrant antioxidant chlorophyll and sweet vegetative minerals.',
                flavor_notes: JSON.stringify(['Sweet Grass', 'Steamed Bamboo', 'Toasted Pine Nut', 'Fresh Dew']),
                brewing_guide: JSON.stringify({ temp: '80°C - 85°C', time: '2 - 3 mins', leaves: '2g per 150ml' }),
                is_reserve: 0
            },
            {
                id: 'prod-04',
                name: 'Reserve Highland Golden Flush',
                category: 'private_reserve',
                type: 'Specialty Black',
                season: 'Monsoon Break Limited',
                grade: 'Golden Flowery Orange Pekoe (GFOP)',
                elevation: '1,320m Cloud Peak',
                price_usd: 220.0,
                stock: 8,
                image: 'images/tea_box.png',
                description: 'Strictly allocated micro-harvest from 80-year-old wild tea arbor trees. Numbered and sealed with private wax estate stamp.',
                flavor_notes: JSON.stringify(['Cinnamon Bark', 'Dried Apricot', 'Muscatel Grape', 'Amber Resin']),
                brewing_guide: JSON.stringify({ temp: '90°C - 95°C', time: '3.5 mins', leaves: '3g per 180ml' }),
                is_reserve: 1
            }
        ];

        defaultProducts.forEach(p => {
            insertProd.run(
                p.id, p.name, p.category, p.type, p.season, p.grade,
                p.elevation, p.price_usd, p.stock, p.image, p.description,
                p.flavor_notes, p.brewing_guide, p.is_reserve
            );
        });
    }

    // 2. Seed Collector Boxes 1 to 10
    const boxCount = db.prepare('SELECT COUNT(*) as count FROM boxes').get().count;
    if (boxCount === 0) {
        const insertBox = db.prepare(`
            INSERT INTO boxes (number, name, reserve_flush, price_usd, status, allocated_to, gold_seal_code)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);

        for (let i = 1; i <= 10; i++) {
            const status = i <= 2 ? 'sold' : (i === 3 ? 'reserved' : 'available');
            const allocatedTo = i === 1 ? 'Lord Sterling Cellars (UK)' : (i === 2 ? 'Kamei Tea Guild (Kyoto)' : (i === 3 ? 'Geneva Private Vault' : null));
            const goldCode = `RW-2026-BOX-${String(i).padStart(2, '0')}`;
            insertBox.run(
                i,
                `Collector Chest No. ${String(i).padStart(2, '0')}`,
                'Equinox Wild Single-Estate Flush',
                850.0,
                status,
                allocatedTo,
                goldCode
            );
        }
    }

    // 3. Seed Tour Slots
    const tourCount = db.prepare('SELECT COUNT(*) as count FROM tour_slots').get().count;
    if (tourCount === 0) {
        const insertTour = db.prepare(`
            INSERT INTO tour_slots (id, tour_date, time_slot, name, category, max_capacity, booked_seats, price_usd, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const defaultTourSlots = [
            { id: 'tour-01', tour_date: '2026-09-05', time_slot: '08:30 AM', name: 'Sunrise Wild Terroir Trek & Dawn Plucking', category: 'terroir_trek', max_capacity: 8, booked_seats: 4, price_usd: 85.0 },
            { id: 'tour-02', tour_date: '2026-09-05', time_slot: '11:00 AM', name: 'Orthodox Rolling & Wood-Fired Kiln Masterclass', category: 'factory_masterclass', max_capacity: 12, booked_seats: 6, price_usd: 65.0 },
            { id: 'tour-03', tour_date: '2026-09-05', time_slot: '03:00 PM', name: 'Connoisseur Reserve Tea Cupping & Sommelier Flight', category: 'sommelier_flight', max_capacity: 10, booked_seats: 3, price_usd: 75.0 },
            { id: 'tour-04', tour_date: '2026-09-06', time_slot: '08:30 AM', name: 'Sunrise Wild Terroir Trek & Dawn Plucking', category: 'terroir_trek', max_capacity: 8, booked_seats: 2, price_usd: 85.0 },
            { id: 'tour-05', tour_date: '2026-09-06', time_slot: '11:00 AM', name: 'Orthodox Rolling & Wood-Fired Kiln Masterclass', category: 'factory_masterclass', max_capacity: 12, booked_seats: 8, price_usd: 65.0 },
            { id: 'tour-06', tour_date: '2026-09-06', time_slot: '03:00 PM', name: 'Connoisseur Reserve Tea Cupping & Sommelier Flight', category: 'sommelier_flight', max_capacity: 10, booked_seats: 5, price_usd: 75.0 },
            { id: 'tour-07', tour_date: '2026-09-07', time_slot: '11:00 AM', name: 'Orthodox Rolling & Wood-Fired Kiln Masterclass', category: 'factory_masterclass', max_capacity: 12, booked_seats: 1, price_usd: 65.0 }
        ];

        defaultTourSlots.forEach(t => {
            insertTour.run(t.id, t.tour_date, t.time_slot, t.name, t.category, t.max_capacity, t.booked_seats, t.price_usd, 1);
        });
    }

    // 4. Seed Reviews
    const revCount = db.prepare('SELECT COUNT(*) as count FROM reviews').get().count;
    if (revCount === 0) {
        const insertRev = db.prepare(`
            INSERT INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const defaultReviews = [
            {
                id: 'rev-01',
                author: 'Lord Julian Sterling',
                role: 'Tea Sommelier & Private Collector',
                location: 'London, United Kingdom',
                rating: 5,
                title: 'The purest Ceylon expression I have tasted in 30 years',
                content: 'The Wild Silver Tips offer a delicate, unpruned honey floral note that simply does not exist in commercial estate blends. The unhurried altitude craft of Ettampitiya is palpable in every steep.',
                date_str: 'August 14, 2026'
            },
            {
                id: 'rev-02',
                author: 'Kenji Takahashi',
                role: 'High-Mountain Tea Specialist',
                location: 'Kyoto, Japan',
                rating: 5,
                title: 'Exceptional liquor clarity and zero bitterness',
                content: 'Visited No: 54 Wallawela for a private cupping flight. The wood-kiln roasting method developed by Master Bandara produces an orthodox black tea that rivals ancient Fujian mountain reserves.',
                date_str: 'August 22, 2026'
            },
            {
                id: 'rev-03',
                author: 'Eleanor Vance',
                role: 'Luxury Travel & Gastronomy Editor',
                location: 'Geneva, Switzerland',
                rating: 5,
                title: 'A true highlands sanctuary experience',
                content: 'The sunrise terroir walk amidst the cloud mist followed by fresh silver tips in the timber tasting room was the highlight of our journey through Sri Lanka. Unrivaled hospitality.',
                date_str: 'August 28, 2026'
            }
        ];

        defaultReviews.forEach(r => {
            insertRev.run(r.id, r.author, r.role, r.location, r.rating, r.title, r.content, r.date_str, 1);
        });
    }

    // 5. Seed Announcements
    const annCount = db.prepare('SELECT COUNT(*) as count FROM announcements').get().count;
    if (annCount === 0) {
        const insertAnn = db.prepare(`
            INSERT INTO announcements (id, tag, date_str, heading, content, image, link, is_active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const defaultAnnouncements = [
            {
                id: 'ann-01',
                tag: 'HARVEST ALLOCATION',
                date_str: 'September 2026',
                heading: '2026 Autumn Equinox Reserve Chests Released',
                content: 'Our autumn equinox flush yields only 10 individually numbered collector teak chests, hand-sealed with private estate gold stamps and registered in the central cellar ledger.',
                image: 'images/tea_box.png',
                link: '#gifts'
            },
            {
                id: 'ann-02',
                tag: 'SANCTUARY EXPEDITIONS',
                date_str: 'September 2026',
                heading: 'Private Sunrise Cupping Flights Now Open',
                content: 'Book an exclusive 5:30 AM sunrise harvesting trek with Chief Plucker Kalyani Kumari followed by private wood-kiln roasting workshops and cellar tasting flights.',
                image: 'images/luxury_tea_estate.jpg',
                link: '#tours'
            },
            {
                id: 'ann-03',
                tag: 'GLOBAL CERTIFICATION',
                date_str: 'August 2026',
                heading: '100% Glyphosate & Chemical-Free Montane Sanctuary Certified',
                content: 'Rock One Wild Tea sanctuary receives permanent rainforest watershed biodiversity protection certification, guaranteeing zero synthetic fertilizers or artificial sprays.',
                image: 'images/estate_terroir.png',
                link: '#about'
            }
        ];

        defaultAnnouncements.forEach(a => {
            insertAnn.run(a.id, a.tag, a.date_str, a.heading, a.content, a.image, a.link, 1);
        });
    }
}

// Execute schema and seeding on load
initSchema();
seedInitialData();

module.exports = {
    db,
    initSchema,
    seedInitialData
};
