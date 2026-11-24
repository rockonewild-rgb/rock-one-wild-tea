const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

// Initialize database, Supabase & Turso clients
require('./db/database');
const { pingSupabase, getSupabaseHealth } = require('./db/supabase');
const { isTursoAvailable, initTursoSchema, syncLocalToTurso } = require('./db/turso');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable Gzip/Brotli Compression for all text, JSON, JS, CSS, and HTML responses
app.use(compression({
    threshold: 1024, // only compress responses above 1KB
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    }
}));

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Static files with optimized HTTP caching headers
app.use(express.static(path.join(__dirname, '..'), {
    maxAge: '1h',
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
        } else if (filePath.match(/\.(jpg|jpeg|png|webp|svg|gif|ico|mp3|wav|ogg)$/i)) {
            res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');
        } else if (filePath.match(/\.(css|js)$/i)) {
            res.setHeader('Cache-Control', 'no-cache, must-revalidate');
            if (filePath.endsWith('.js')) {
                res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
            } else if (filePath.endsWith('.css')) {
                res.setHeader('Content-Type', 'text/css; charset=utf-8');
            }
        }
    }
}));

// API Healthcheck with Supabase keep-alive ping support
app.get('/api/health', async (req, res) => {
    let pingResult = null;
    const shouldPing = req.query.ping === 'true' || req.query.keepalive === 'true' || req.query.ping === '1';
    
    if (shouldPing && typeof pingSupabase === 'function') {
        pingResult = await pingSupabase();
    }
    
    const health = typeof getSupabaseHealth === 'function' ? getSupabaseHealth() : { isHealthy: true };

    res.json({
        status: 'online',
        service: 'Rock One Wild Tea Estate REST API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        database: {
            sqlite: 'connected',
            turso: isTursoAvailable() ? 'connected' : 'not-configured (using local SQLite)',
            supabase: health.isHealthy ? 'connected' : 'circuit-breaker-fallback',
            supabaseHealth: health,
            ping: pingResult
        }
    });
});

// Periodic in-process keep-alive: pings Supabase every 6 hours only if Supabase is configured
const keepAliveTimer = setInterval(async () => {
    try {
        const { isSupabaseAvailable } = require('./db/supabase');
        if (typeof pingSupabase === 'function' && isSupabaseAvailable()) {
            await pingSupabase();
        }
    } catch (e) {}
}, 6 * 60 * 60 * 1000);
if (keepAliveTimer.unref) keepAliveTimer.unref();

// Mount Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/boxes', require('./routes/boxes'));
app.use('/api/tours', require('./routes/tours'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/inquiries', require('./routes/inquiries'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/stats', require('./routes/stats'));
app.use('/api/paypal', require('./routes/paypal'));
app.use('/api/coupons', require('./routes/coupons'));

// 404 Handler for undefined API routes
app.use('/api', (req, res) => {
    res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// SPA Fallback: Serve index.html for all other non-API routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
});

// Start Server
if (require.main === module) {
    app.listen(PORT, async () => {
        const sbHealth = typeof getSupabaseHealth === 'function' ? getSupabaseHealth() : { url: 'Not configured' };
        console.log(`\n🌿 Rock One Wild Tea REST API Server running on port ${PORT}`);
        console.log(`   Local URL:       http://localhost:${PORT}`);
        console.log(`   API Health:      http://localhost:${PORT}/api/health?ping=1`);
        console.log(`   Primary DB:      ${isTursoAvailable() ? 'Turso Cloud (libSQL)' : 'Supabase Cloud / Local SQLite'}`);
        console.log(`   Local Fallback:  data/teafactory.db (SQLite)`);

        if (isTursoAvailable()) {
            console.log(`   Turso Status:    🌿 CONNECTED (${process.env.TURSO_DATABASE_URL})`);
            try {
                await initTursoSchema();
                if (process.env.TURSO_AUTO_SEED === 'true' || process.env.TURSO_AUTO_SEED === '1') {
                    await syncLocalToTurso();
                } else {
                    console.log('   Turso Auto-Seed: 🔒 DISABLED (Manual database control active; zero auto-repopulation)');
                }
            } catch (e) {
                console.warn('   Turso Init Note:', e.message);
            }
        } else {
            console.log(`   Turso Status:    ℹ️ Not configured (Set TURSO_DATABASE_URL & TURSO_AUTH_TOKEN in .env)`);
        }

        const { isSupabaseAvailable } = require('./db/supabase');
        if (isSupabaseAvailable() && typeof pingSupabase === 'function') {
            const probe = await pingSupabase();
            if (probe.success) {
                console.log(`   Supabase Status: ✅ ONLINE & SYNCED (Live Read/Write active)\n`);
            } else {
                console.log(`   Supabase Status: ⚠️ OFFLINE/PAUSED (${probe.error}) -> Serving from Turso Cloud\n`);
            }
        } else {
            console.log(`   Supabase Status: ℹ️ Not configured (All operations active on Turso Cloud)\n`);
        }
    });
}

module.exports = app;
