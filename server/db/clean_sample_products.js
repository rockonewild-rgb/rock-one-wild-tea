require('dotenv').config();
const { db } = require('./database');
const { createClient } = require('@libsql/client');

console.log('1. Cleaning sample products from local SQLite...');
const sampleIds = ['prod-01', 'prod-02', 'prod-03', 'prod-04'];
const delStmt = db.prepare("DELETE FROM products WHERE id IN ('prod-01', 'prod-02', 'prod-03', 'prod-04')");
const info = delStmt.run();
console.log(`Deleted ${info.changes} sample products from SQLite.`);

const remaining = db.prepare('SELECT id, name, price_usd, shipping_fee_usd FROM products').all();
console.log('Remaining SQLite products:');
remaining.forEach(p => console.log(`  - [${p.id}] ${p.name}`));

async function cleanTurso() {
    const url = (process.env.TURSO_DATABASE_URL || '').trim();
    const authToken = (process.env.TURSO_AUTH_TOKEN || '').trim();
    if (!url || !authToken) {
        console.log('No Turso credentials provided.');
        return;
    }
    console.log('2. Cleaning sample products from Turso Cloud...');
    try {
        const turso = createClient({ url, authToken });
        const res = await turso.execute("DELETE FROM products WHERE id IN ('prod-01', 'prod-02', 'prod-03', 'prod-04')");
        console.log(`Turso delete affected rows: ${res.rowsAffected}`);
        const list = await turso.execute('SELECT id, name FROM products');
        console.log('Remaining Turso products:');
        list.rows.forEach(r => console.log(`  - [${r.id}] ${r.name}`));
    } catch (e) {
        console.warn('Turso cleanup error (offline or unreachable):', e.message);
    }
}

cleanTurso().then(() => {
    console.log('Cleanup finished.');
    process.exit(0);
}).catch(err => {
    console.error('Error during cleanup:', err);
    process.exit(1);
});
