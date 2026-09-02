-- ==============================================================================
-- ROCK ONE WILD TEA ESTATE - SUPABASE POSTGRESQL SCHEMA & INITIAL DATA SEED
-- Run this script in your Supabase SQL Editor (https://supabase.com/dashboard/project/gozetekxnevnmwekrrhr/sql)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Drop existing tables if needed (Clean Setup)
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS tour_bookings CASCADE;
DROP TABLE IF EXISTS tour_slots CASCADE;
DROP TABLE IF EXISTS boxes CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS inquiries CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS announcements CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;

-- 3. Products Table
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    season TEXT,
    grade TEXT,
    elevation TEXT,
    price_usd NUMERIC(10, 2) NOT NULL,
    stock INTEGER DEFAULT 10,
    image TEXT,
    description TEXT,
    flavor_notes JSONB DEFAULT '[]'::jsonb,
    brewing_guide JSONB DEFAULT '{}'::jsonb,
    is_reserve BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Numbered Collector Boxes (Allocations) Table
CREATE TABLE boxes (
    number INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    reserve_flush TEXT NOT NULL,
    price_usd NUMERIC(10, 2) NOT NULL,
    status TEXT DEFAULT 'available', -- 'available' | 'reserved' | 'sold'
    allocated_to TEXT,
    gold_seal_code TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tour Slots Table
CREATE TABLE tour_slots (
    id TEXT PRIMARY KEY,
    tour_date TEXT NOT NULL,
    time_slot TEXT NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    max_capacity INTEGER DEFAULT 12,
    booked_seats INTEGER DEFAULT 0,
    price_usd NUMERIC(10, 2) DEFAULT 65.0,
    is_active BOOLEAN DEFAULT true
);

-- 6. Tour Bookings Table
CREATE TABLE tour_bookings (
    id TEXT PRIMARY KEY,
    tour_slot_id TEXT,
    tour_date TEXT NOT NULL,
    time_slot TEXT NOT NULL,
    guest_name TEXT NOT NULL,
    guest_email TEXT NOT NULL,
    guest_phone TEXT,
    guest_count INTEGER NOT NULL DEFAULT 1,
    notes TEXT,
    status TEXT DEFAULT 'confirmed',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Orders Table
CREATE TABLE orders (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    shipping_address TEXT NOT NULL,
    subtotal_usd NUMERIC(10, 2) NOT NULL,
    discount_usd NUMERIC(10, 2) DEFAULT 0,
    total_usd NUMERIC(10, 2) NOT NULL,
    currency_code TEXT DEFAULT 'USD',
    currency_rate NUMERIC(10, 4) DEFAULT 1.0,
    total_in_currency NUMERIC(10, 2) NOT NULL,
    payment_method TEXT DEFAULT 'credit_card',
    payment_status TEXT DEFAULT 'paid',
    fulfillment_status TEXT DEFAULT 'processing',
    bespoke_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Order Items Table
CREATE TABLE order_items (
    id TEXT PRIMARY KEY,
    order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price_usd NUMERIC(10, 2) NOT NULL,
    total_price_usd NUMERIC(10, 2) NOT NULL,
    gift_options JSONB
);

-- 9. Concierge Inquiries Table
CREATE TABLE inquiries (
    id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service_interested TEXT,
    budget_range TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Customer Reviews Table
CREATE TABLE reviews (
    id TEXT PRIMARY KEY,
    author TEXT NOT NULL,
    role TEXT,
    location TEXT,
    rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
    title TEXT,
    content TEXT NOT NULL,
    date_str TEXT,
    is_verified BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Announcements & Bulletins Table
CREATE TABLE announcements (
    id TEXT PRIMARY KEY,
    tag TEXT NOT NULL,
    date_str TEXT NOT NULL,
    heading TEXT NOT NULL,
    content TEXT NOT NULL,
    image TEXT,
    link TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. Newsletter Subscribers Table
CREATE TABLE newsletter_subscribers (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    source TEXT DEFAULT 'website_banner',
    subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- INITIAL DATA SEEDING
-- ==============================================================================

-- Seed Products
INSERT INTO products (id, name, category, type, season, grade, elevation, price_usd, stock, image, description, flavor_notes, brewing_guide, is_reserve)
VALUES
(
    'prod-01',
    'Wild High-Mountain Silver Tips',
    'artisan',
    'White Tea',
    'Spring Equinox 2026',
    'Imperial Silver Velvet',
    '1,240m Montane Ridge',
    145.00,
    18,
    'images/silver_tips.jpg',
    'Sun-withered velvety buds harvested at dawn before direct mountain sunlight touches the forest canopy. Imparts floral wildflower honey and raw pear aromatics.',
    '["Wild Orchid", "Mountain Honey", "White Peach", "Subtle Pine"]'::jsonb,
    '{"temp": "75°C - 80°C", "time": "4 - 5 mins", "leaves": "3g per 150ml"}'::jsonb,
    true
),
(
    'prod-02',
    'Orthodox Highland Black OP1',
    'artisan',
    'Black Tea',
    'Equinox 2026',
    'Orange Pekoe 1 (OP1)',
    '1,200m Wallawela Slopes',
    85.00,
    45,
    'images/black_tea.jpg',
    'Full-leaf whole orthodox black tea hand-rolled on cedar tables and cured over slow-burning cinnamon wood kilns.',
    '["Malt & Date", "Dark Cocoa", "Wood Smoke", "Golden Caramel"]'::jsonb,
    '{"temp": "95°C - 100°C", "time": "3 - 4 mins", "leaves": "2.5g per 200ml"}'::jsonb,
    false
),
(
    'prod-03',
    'Wild Canopy Forest Green',
    'artisan',
    'Green Tea',
    'Early Dawn Flush',
    'Fine Young Tip',
    '1,280m Peak Sanctuary',
    95.00,
    30,
    'images/green_tea.jpg',
    'Wok-fired whole leaf green tea retaining vibrant antioxidant chlorophyll and sweet vegetative minerals.',
    '["Sweet Grass", "Steamed Bamboo", "Toasted Pine Nut", "Fresh Dew"]'::jsonb,
    '{"temp": "80°C - 85°C", "time": "2 - 3 mins", "leaves": "2g per 150ml"}'::jsonb,
    false
),
(
    'prod-04',
    'Reserve Highland Golden Flush',
    'private_reserve',
    'Specialty Black',
    'Monsoon Break Limited',
    'Golden Flowery Orange Pekoe (GFOP)',
    '1,320m Cloud Peak',
    220.00,
    8,
    'images/tea_box.png',
    'Strictly allocated micro-harvest from 80-year-old wild tea arbor trees. Numbered and sealed with private wax estate stamp.',
    '["Cinnamon Bark", "Dried Apricot", "Muscatel Grape", "Amber Resin"]'::jsonb,
    '{"temp": "90°C - 95°C", "time": "3.5 mins", "leaves": "3g per 180ml"}'::jsonb,
    true
);

-- Seed Collector Boxes 1 to 10
INSERT INTO boxes (number, name, reserve_flush, price_usd, status, allocated_to, gold_seal_code)
VALUES
(1, 'Collector Chest No. 01', 'Equinox Wild Single-Estate Flush', 850.00, 'sold', 'Lord Sterling Cellars (UK)', 'RW-2026-BOX-01'),
(2, 'Collector Chest No. 02', 'Equinox Wild Single-Estate Flush', 850.00, 'sold', 'Kamei Tea Guild (Kyoto)', 'RW-2026-BOX-02'),
(3, 'Collector Chest No. 03', 'Equinox Wild Single-Estate Flush', 850.00, 'reserved', 'Geneva Private Vault', 'RW-2026-BOX-03'),
(4, 'Collector Chest No. 04', 'Equinox Wild Single-Estate Flush', 850.00, 'available', NULL, 'RW-2026-BOX-04'),
(5, 'Collector Chest No. 05', 'Equinox Wild Single-Estate Flush', 850.00, 'available', NULL, 'RW-2026-BOX-05'),
(6, 'Collector Chest No. 06', 'Equinox Wild Single-Estate Flush', 850.00, 'available', NULL, 'RW-2026-BOX-06'),
(7, 'Collector Chest No. 07', 'Equinox Wild Single-Estate Flush', 850.00, 'available', NULL, 'RW-2026-BOX-07'),
(8, 'Collector Chest No. 08', 'Equinox Wild Single-Estate Flush', 850.00, 'available', NULL, 'RW-2026-BOX-08'),
(9, 'Collector Chest No. 09', 'Equinox Wild Single-Estate Flush', 850.00, 'available', NULL, 'RW-2026-BOX-09'),
(10, 'Collector Chest No. 10', 'Equinox Wild Single-Estate Flush', 850.00, 'available', NULL, 'RW-2026-BOX-10');

-- Seed Tour Slots
INSERT INTO tour_slots (id, tour_date, time_slot, name, category, max_capacity, booked_seats, price_usd, is_active)
VALUES
('tour-01', '2026-09-05', '08:30 AM', 'Sunrise Wild Terroir Trek & Dawn Plucking', 'terroir_trek', 8, 4, 85.00, true),
('tour-02', '2026-09-05', '11:00 AM', 'Orthodox Rolling & Wood-Fired Kiln Masterclass', 'factory_masterclass', 12, 6, 65.00, true),
('tour-03', '2026-09-05', '03:00 PM', 'Connoisseur Reserve Tea Cupping & Sommelier Flight', 'sommelier_flight', 10, 3, 75.00, true),
('tour-04', '2026-09-06', '08:30 AM', 'Sunrise Wild Terroir Trek & Dawn Plucking', 'terroir_trek', 8, 2, 85.00, true),
('tour-05', '2026-09-06', '11:00 AM', 'Orthodox Rolling & Wood-Fired Kiln Masterclass', 'factory_masterclass', 12, 8, 65.00, true),
('tour-06', '2026-09-06', '03:00 PM', 'Connoisseur Reserve Tea Cupping & Sommelier Flight', 'sommelier_flight', 10, 5, 75.00, true),
('tour-07', '2026-09-07', '11:00 AM', 'Orthodox Rolling & Wood-Fired Kiln Masterclass', 'factory_masterclass', 12, 1, 65.00, true);

-- Seed Reviews
INSERT INTO reviews (id, author, role, location, rating, title, content, date_str, is_verified)
VALUES
(
    'rev-01',
    'Lord Julian Sterling',
    'Tea Sommelier & Private Collector',
    'London, United Kingdom',
    5,
    'The purest Ceylon expression I have tasted in 30 years',
    'The Wild Silver Tips offer a delicate, unpruned honey floral note that simply does not exist in commercial estate blends. The unhurried altitude craft of Ettampitiya is palpable in every steep.',
    'August 14, 2026',
    true
),
(
    'rev-02',
    'Kenji Takahashi',
    'High-Mountain Tea Specialist',
    'Kyoto, Japan',
    5,
    'Exceptional liquor clarity and zero bitterness',
    'Visited No: 54 Wallawela for a private cupping flight. The wood-kiln roasting method developed by Master Bandara produces an orthodox black tea that rivals ancient Fujian mountain reserves.',
    'August 22, 2026',
    true
),
(
    'rev-03',
    'Eleanor Vance',
    'Luxury Travel & Gastronomy Editor',
    'Geneva, Switzerland',
    5,
    'A true highlands sanctuary experience',
    'The sunrise terroir walk amidst the cloud mist followed by fresh silver tips in the timber tasting room was the highlight of our journey through Sri Lanka. Unrivaled hospitality.',
    'August 28, 2026',
    true
);

-- Seed Announcements
INSERT INTO announcements (id, tag, date_str, heading, content, image, link, is_active)
VALUES
(
    'ann-01',
    'HARVEST ALLOCATION',
    'September 2026',
    '2026 Autumn Equinox Reserve Chests Released',
    'Our autumn equinox flush yields only 10 individually numbered collector teak chests, hand-sealed with private estate gold stamps and registered in the central cellar ledger.',
    'images/tea_box.png',
    '#gifts',
    true
),
(
    'ann-02',
    'SANCTUARY EXPEDITIONS',
    'September 2026',
    'Private Sunrise Cupping Flights Now Open',
    'Book an exclusive 5:30 AM sunrise harvesting trek with Chief Plucker Kalyani Kumari followed by private wood-kiln roasting workshops and cellar tasting flights.',
    'images/luxury_tea_estate.jpg',
    '#tours',
    true
),
(
    'ann-03',
    'GLOBAL CERTIFICATION',
    'August 2026',
    '100% Glyphosate & Chemical-Free Montane Sanctuary Certified',
    'Rock One Wild Tea sanctuary receives permanent rainforest watershed biodiversity protection certification, guaranteeing zero synthetic fertilizers or artificial sprays.',
    'images/estate_terroir.png',
    '#about',
    true
);

-- Enable Row Level Security (RLS) for Public Read Access
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE boxes ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public Read Products" ON products FOR SELECT USING (true);
CREATE POLICY "Public Read Boxes" ON boxes FOR SELECT USING (true);
CREATE POLICY "Public Read Tour Slots" ON tour_slots FOR SELECT USING (true);
CREATE POLICY "Public Read Reviews" ON reviews FOR SELECT USING (true);
CREATE POLICY "Public Read Announcements" ON announcements FOR SELECT USING (true);

-- Public Insert Policies (For placing orders, bookings, inquiries, reviews)
CREATE POLICY "Public Insert Orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Order Items" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Tour Bookings" ON tour_bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Reviews" ON reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Newsletter" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
