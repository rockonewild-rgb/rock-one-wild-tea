const express = require('express');
const router = express.Router();
const { db } = require('../db/database');

/**
 * GET /api/stats
 * Aggregate dashboard metrics
 */
router.get('/', (req, res) => {
    try {
        const totalProducts = db.prepare('SELECT COUNT(*) as count FROM products').get().count;
        const totalOrders = db.prepare('SELECT COUNT(*) as count FROM orders').get().count;
        const revenue = db.prepare('SELECT COALESCE(SUM(total_usd), 0) as total FROM orders').get().total;
        const totalBookings = db.prepare('SELECT COUNT(*) as count FROM tour_bookings').get().count;
        const totalInquiries = db.prepare('SELECT COUNT(*) as count FROM inquiries').get().count;
        const totalSubscribers = db.prepare('SELECT COUNT(*) as count FROM newsletter_subscribers').get().count;

        const boxes = db.prepare('SELECT status, COUNT(*) as count FROM boxes GROUP BY status').all();
        const boxStats = { available: 0, reserved: 0, sold: 0 };
        boxes.forEach(b => {
            boxStats[b.status] = b.count;
        });

        res.json({
            success: true,
            data: {
                total_products: totalProducts,
                total_orders: totalOrders,
                total_revenue_usd: revenue,
                total_tour_bookings: totalBookings,
                total_inquiries: totalInquiries,
                total_subscribers: totalSubscribers,
                collector_boxes: boxStats,
                server_time: new Date().toISOString()
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
