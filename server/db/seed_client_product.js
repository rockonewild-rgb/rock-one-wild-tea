require('dotenv').config();
const { db } = require('./database');
const { createClient } = require('@libsql/client');

const clientProduct = {
    id: 'prod-rock-one-black-tea',
    name: 'Rock One Wild Tea – Premium Black Tea',
    category: 'Black Tea',
    type: 'Black Tea',
    season: 'Uva Seasonal Flush 2026',
    grade: 'TRI 2025 Hand-Rolled Whole Leaf',
    elevation: 'Uva Region (3,000–5,000 ft)',
    price_usd: 17.0,
    shipping_fee_usd: 19.0,
    stock: 50,
    image: 'images/products/rock_one_black_tea_7.jpg',
    description: 'Artisan small-batch Ceylon black tea from our family-owned wild forest tea garden in Sri Lanka\'s Uva Medium region. Handcrafted from clone TRI 2025 to create a smooth, naturally sweet cup with delicate floral notes and gentle honey-like character.',
    flavor_notes: JSON.stringify(['Smooth & Sweet', 'Delicate Floral', 'Honey-Like Character', 'Wild Forest Terroir']),
    brewing_guide: JSON.stringify({
        shipping_lkr: 500,
        shippingCharge_lkr: 500,
        temp: '95°C - 100°C',
        time: '3 - 4 mins',
        leaves: '2.5g per 200ml',
        weight: '50g Pack',
        netWeight: '50g per Pack',
        caffeine: 'Naturally Contains Caffeine',
        serving: 'Morning and Afternoon',
        cultivar: 'TRI 2025',
        origin: 'Uva Medium Growing Region, Sri Lanka',
        elevation: 'Uva Region – Approximately 3,000–5,000 feet',
        production: 'Artisan Small-Batch Production',
        teaGarden: 'Family-Owned Tea Garden',
        processing: 'Traditional Hand-Rolled Black Tea Processing',
        flavourProfile: 'Smooth, Naturally Sweet and Delicate Floral Notes',
        aroma: 'Gentle Floral and Honey-Like Character',
        regionalIdentity: 'Distinctive Uva Seasonal Tea-Growing Character',
        productionStyle: 'Limited-Quantity Artisan Production',
        philosophy: 'Small Batches. Personal Care. Exceptional Ceylon Tea. We believe that exceptional tea begins with nature and is perfected through craftsmanship. Every batch reflects our family’s dedication, respect for our natural surroundings and passion for sharing the distinctive character of Ceylon tea with the world. From Our Wild Forest Tea Garden to Your Cup.',
        about: 'Handcrafted Ceylon black tea from our family-owned tea garden surrounded by natural high-montane forest in Sri Lanka\'s Uva Medium region (3,000–5,000 ft elevation). Carefully produced in limited artisan quantities using traditional hand-rolled orthodox processing techniques and elite cultivar TRI 2025. Every batch yields a clear, amber-golden liquor celebrated for its silky smooth mouthfeel, subtle honey sweetness, and fresh floral aroma.',
        originStory: 'Uva Medium Growing Region, Sri Lanka — Nestled amidst virgin mountain forests at 3,000 to 5,000 feet elevation, where morning mountain mists, fertile organic soil, and warm afternoon sun create the world-renowned seasonal Uva character.',
        tastingNotes: ['Smooth Sweetness', 'Delicate Floral', 'Honey-Like Character', 'Uva Seasonal Notes'],
        rating: 5.0,
        reviewsCount: 38,
        images: [
            'images/products/rock_one_black_tea_7.jpg',
            'images/products/rock_one_black_tea_4.jpg',
            'images/products/rock_one_black_tea_1.jpg',
            'images/products/rock_one_black_tea_2.jpg',
            'images/products/rock_one_black_tea_3.jpg',
            'images/products/rock_one_black_tea_5.jpg',
            'images/products/rock_one_black_tea_6.jpg'
        ],
        sensoryRadar: { floral: 92, malty: 78, sweetness: 88, astringency: 32, body: 82, aroma: 94 }
    }),
    is_reserve: 0
};

// 1. Insert or update in local SQLite
try {
    const stmt = db.prepare(`
        INSERT INTO products (id, name, category, type, season, grade, elevation, price_usd, shipping_fee_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
            name=excluded.name,
            category=excluded.category,
            type=excluded.type,
            season=excluded.season,
            grade=excluded.grade,
            elevation=excluded.elevation,
            price_usd=excluded.price_usd,
            shipping_fee_usd=excluded.shipping_fee_usd,
            stock=excluded.stock,
            image=excluded.image,
            description=excluded.description,
            flavor_notes=excluded.flavor_notes,
            brewing_guide=excluded.brewing_guide,
            is_reserve=excluded.is_reserve
    `);

    stmt.run(
        clientProduct.id,
        clientProduct.name,
        clientProduct.category,
        clientProduct.type,
        clientProduct.season,
        clientProduct.grade,
        clientProduct.elevation,
        clientProduct.price_usd,
        clientProduct.shipping_fee_usd,
        clientProduct.stock,
        clientProduct.image,
        clientProduct.description,
        clientProduct.flavor_notes,
        clientProduct.brewing_guide,
        clientProduct.is_reserve
    );
    console.log('✅ Inserted/Updated in local SQLite database');
} catch (e) {
    console.error('SQLite insert error:', e.message);
}

// 2. Sync to Turso Cloud
async function syncTurso() {
    const url = (process.env.TURSO_DATABASE_URL || '').trim();
    const authToken = (process.env.TURSO_AUTH_TOKEN || '').trim();
    if (!url || !authToken) {
        console.log('Turso credentials missing');
        return;
    }

    const turso = createClient({ url, authToken });

    // Ensure schema
    await turso.execute(`
        CREATE TABLE IF NOT EXISTS products (
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
        )
    `);

    // Sync all products from SQLite so Turso is complete
    const allLocal = db.prepare('SELECT * FROM products').all();
    for (const p of allLocal) {
        await turso.execute({
            sql: `INSERT OR REPLACE INTO products (id, name, category, type, season, grade, elevation, price_usd, shipping_fee_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            args: [
                p.id,
                p.name,
                p.category,
                p.type,
                p.season,
                p.grade,
                p.elevation,
                p.price_usd,
                p.shipping_fee_usd || 0.0,
                p.stock || 10,
                p.image,
                p.description,
                p.flavor_notes,
                p.brewing_guide,
                p.is_reserve || 0
            ]
        });
    }
    console.log(`✅ Synced all ${allLocal.length} products to Turso Cloud!`);

    const verify = await turso.execute('SELECT id, name, price_usd, shipping_fee_usd FROM products');
    console.log('📋 Current Turso Products:');
    verify.rows.forEach(r => console.log(`  - [${r.id}] ${r.name} ($${r.price_usd} + $${r.shipping_fee_usd} ship)`));
}

syncTurso().then(() => {
    console.log('🎉 Seeding client product completed successfully!');
    process.exit(0);
}).catch(err => {
    console.error('❌ Turso sync error:', err.message);
    process.exit(1);
});
