const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

// Initialize database
require('./db/database');

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
        } else if (filePath.match(/\.(jpg|jpeg|png|webp|svg|gif|ico|mp3|wav|ogg)$/i)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (filePath.match(/\.(css|js)$/i)) {
            res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
        }
    }
}));

// API Healthcheck
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        service: 'Rock One Wild Tea Estate REST API',
        version: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

// Mount Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/boxes', require('./routes/boxes'));
app.use('/api/tours', require('./routes/tours'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/inquiries', require('./routes/inquiries'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/announcements', require('./routes/announcements'));
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/stats', require('./routes/stats'));

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
    app.listen(PORT, () => {
        console.log(`\n🌿 Rock One Wild Tea REST API Server running on port ${PORT}`);
        console.log(`   Local URL:    http://localhost:${PORT}`);
        console.log(`   API Health:   http://localhost:${PORT}/api/health`);
        console.log(`   Database:     data/teafactory.db (SQLite)\n`);
    });
}

module.exports = app;
