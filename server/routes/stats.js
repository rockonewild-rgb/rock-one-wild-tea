const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { supabase, isSupabaseAvailable } = require('../db/supabase');

/**
 * GET /api/stats
 * Aggregate dashboard metrics (Supabase Primary with SQLite Fallback)
 */
router.get('/', async (req, res) => {
    try {
        if (isSupabaseAvailable()) {
            const [prodRes, ordRes, bookRes, inqRes, subRes, boxRes] = await Promise.all([
                supabase.from('products').select('id'),
                supabase.from('orders').select('total_usd'),
                supabase.from('tour_bookings').select('id'),
                supabase.from('inquiries').select('id'),
                supabase.from('newsletter_subscribers').select('id'),
                supabase.from('boxes').select('status')
            ]);

            if (!prodRes.error && !ordRes.error && !bookRes.error && !inqRes.error && !subRes.error && !boxRes.error) {
                const revenue = (ordRes.data || []).reduce((sum, o) => sum + Number(o.total_usd || 0), 0);
                const boxStats = { available: 0, reserved: 0, sold: 0 };
                (boxRes.data || []).forEach(b => {
                    const st = (b.status || 'available').toLowerCase();
                    boxStats[st] = (boxStats[st] || 0) + 1;
                });

                return res.json({
                    success: true,
                    source: 'supabase',
                    data: {
                        total_products: (prodRes.data || []).length,
                        total_orders: (ordRes.data || []).length,
                        total_revenue_usd: revenue,
                        total_tour_bookings: (bookRes.data || []).length,
                        total_inquiries: (inqRes.data || []).length,
                        total_subscribers: (subRes.data || []).length,
                        collector_boxes: boxStats,
                        server_time: new Date().toISOString()
                    }
                });
            }
        }

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
            source: 'sqlite',
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
