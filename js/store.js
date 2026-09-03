/**
 * Tea Factory Luxury Portal - Central State Store
 * Backed by LocalStorage for data persistence.
 */

const DEFAULT_SEASONS = [
    "Royal Emerald Reserve",
    "Golden Leaf Selection",
    "Celestial Autumn Pearl",
    "Imperial Jasmine Blossom"
];

const DEFAULT_ANNOUNCEMENTS = [
    {
        id: 1,
        title: "The Launch of Golden Leaf Selection",
        date: "August 15, 2026",
        content: "Discover our premium Gold-tipped black tea, harvested under the full moon from our highest estate slopes. Exclusively available in Series 3.",
        tag: "New Release",
        premium: true,
        image: "images/luxury_tea_tin.jpg"
    },
    {
        id: 2,
        title: "Exclusive Private Tasting Session",
        date: "September 02, 2026",
        content: "We are hosting an exclusive private tasting session for tea connoisseurs. Learn the art of tea brewing from our Master Tea Sommelier. Limited slots available.",
        tag: "Event",
        premium: false,
        image: "images/luxury_tea_estate.jpg"
    },
    {
        id: 3,
        title: "Factory Estate Tour Bookings Open",
        date: "Ongoing",
        content: "Take a step back in time. Explore the historical 1890 Tea Factory, walk through the organic gardens, and witness the artisanal processing first-hand.",
        tag: "Announcement",
        premium: true,
        image: "images/luxury_tea_tour.jpg"
    }
];

const DEFAULT_GALLERY_IMAGES = [
    "1 (1).jpeg", "1 (2).jpeg", "1 (3).jpeg", "1 (4).jpeg", "1 (5).jpeg",
    "1 (6).jpeg", "1 (7).jpeg", "1 (8).jpeg", "1 (9).jpeg", "1 (10).jpeg",
    "1 (12).jpeg", "1 (13).jpeg", "1 (14).jpeg", "1 (15).jpeg", "1 (16).jpeg",
    "1 (17).jpeg", "1 (18).jpeg", "1 (19).jpeg", "1 (20).jpeg", "1 (21).jpeg",
    "1 (22).jpeg", "1 (23).jpeg", "1 (24).jpeg", "1 (25).jpeg", "1 (26).jpeg",
    "1 (27).jpeg", "1 (28).jpeg", "1 (29).jpeg", "Gift box 2.jpeg", "WhatsApp Image 2026-08-13 at 10.50.29 AM.jpeg"
].map((img, i) => ({
    id: `g_${i + 1}`,
    src: `images/${encodeURIComponent(img)}`,
    tag: img.includes('Gift box') ? 'Packaging & Reserves' : 'Estate & Harvest'
}));

const CURRENCIES = {
    USD: { code: 'USD', symbol: '$', rate: 1.0, decimals: 2, label: 'USD ($)', symbolPosition: 'prefix' },
    EUR: { code: 'EUR', symbol: '€', rate: 0.92, decimals: 2, label: 'EUR (€)', symbolPosition: 'prefix' },
    GBP: { code: 'GBP', symbol: '£', rate: 0.78, decimals: 2, label: 'GBP (£)', symbolPosition: 'prefix' },
    LKR: { code: 'LKR', symbol: 'Rs ', rate: 305.0, decimals: 0, label: 'LKR (Rs)', symbolPosition: 'prefix' },
    AED: { code: 'AED', symbol: 'AED ', rate: 3.67, decimals: 2, label: 'AED (د.إ)', symbolPosition: 'prefix' }
};

class TeaFactoryStore {
    constructor() {
        this.storageKey = 'tea_factory_store_state';
        this.loadState();
        if (typeof window !== 'undefined') {
            setTimeout(() => this.syncWithBackend(), 150);
        }
    }

    // Load state from localStorage or initialize with defaults
    loadState() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            try {
                this.state = JSON.parse(stored);
                
                // Robust state migration for older localStorage versions
                let needsSave = false;
                
                if (!this.state.currentSeason) {
                    this.state.currentSeason = { name: "Royal Emerald Reserve", seriesNumber: 1, pricePerBox: 150.00 };
                    needsSave = true;
                }
                if (!this.state.boxes || !Array.isArray(this.state.boxes) || this.state.boxes.length === 0) {
                    this.state.boxes = Array.from({ length: 10 }, (_, i) => ({
                        id: i + 1,
                        name: `Gift Box #${String(i + 1).padStart(2, '0')}`,
                        status: "Available",
                        price: 150.00,
                        booking: null
                    }));
                    needsSave = true;
                }
                if (!this.state.products || !Array.isArray(this.state.products) || this.state.products.length === 0 || !localStorage.getItem('products_migrated_v5')) {
                    this.state.products = this.getDefaultProducts();
                    localStorage.setItem('products_migrated_v5', 'true');
                    needsSave = true;
                }
                if (!this.state.bookings || !Array.isArray(this.state.bookings)) {
                    this.state.bookings = [];
                    needsSave = true;
                }
                if (!this.state.tourSlots || !Array.isArray(this.state.tourSlots) || this.state.tourSlots.length === 0) {
                    this.state.tourSlots = [
                        { id: 1, timeSlot: "09:00 AM - 10:00 AM", status: "Available", booking: null, package: "Silver Leaf Tour" },
                        { id: 2, timeSlot: "10:15 AM - 11:15 AM", status: "Available", booking: null, package: "Silver Leaf Tour" },
                        { id: 3, timeSlot: "11:30 AM - 12:30 PM", status: "Available", booking: null, package: "Golden Sommelier Tour" },
                        { id: 4, timeSlot: "01:00 PM - 02:00 PM", status: "Booked", booking: { name: "Archibald Sterling", guests: 4 }, package: "Golden Sommelier Tour" },
                        { id: 5, timeSlot: "02:15 PM - 03:15 PM", status: "Available", booking: null, package: "Imperial Grand Tasting" },
                        { id: 6, timeSlot: "03:30 PM - 04:30 PM", status: "Available", booking: null, package: "Imperial Grand Tasting" },
                        { id: 7, timeSlot: "04:45 PM - 05:45 PM", status: "Available", booking: null, package: "Silver Leaf Tour" }
                    ];
                    needsSave = true;
                }
                if (!this.state.announcements || !Array.isArray(this.state.announcements) || this.state.announcements.length === 0) {
                    this.state.announcements = [
                        {
                            id: 1,
                            title: "The Launch of Golden Leaf Selection",
                            date: "August 15, 2026",
                            content: "Discover our premium Gold-tipped black tea, harvested under the full moon from our highest estate slopes. Exclusively available in Series 3.",
                            tag: "New Release",
                            premium: true,
                            image: "images/luxury_tea_tin.jpg"
                        },
                        {
                            id: 2,
                            title: "Exclusive Private Tasting Session",
                            date: "September 02, 2026",
                            content: "We are hosting an exclusive private tasting session for tea connoisseurs. Learn the art of tea brewing from our Master Tea Sommelier. Limited slots available.",
                            tag: "Event",
                            premium: false,
                            image: "images/luxury_tea_estate.jpg"
                        },
                        {
                            id: 3,
                            title: "Factory Estate Tour Bookings Open",
                            date: "Ongoing",
                            content: "Take a step back in time. Explore the historical 1890 Tea Factory, walk through the organic gardens, and witness the artisanal processing first-hand.",
                            tag: "Announcement",
                            premium: true,
                            image: "images/luxury_tea_tour.jpg"
                        }
                    ];
                    needsSave = true;
                }
                if (!this.state.emailLogs || !Array.isArray(this.state.emailLogs)) {
                    this.state.emailLogs = [];
                    needsSave = true;
                }
                if (!this.state.orders || !Array.isArray(this.state.orders)) {
                    this.state.orders = [];
                    needsSave = true;
                }
                if (!this.state.reviews || !Array.isArray(this.state.reviews) || this.state.reviews.length === 0) {
                    this.state.reviews = this.getDefaultReviews();
                    needsSave = true;
                }
                if (!this.state.inquiries || !Array.isArray(this.state.inquiries) || this.state.inquiries.length === 0) {
                    this.state.inquiries = this.getDefaultInquiries();
                    needsSave = true;
                }
                if (!this.state.cart || !Array.isArray(this.state.cart)) {
                    this.state.cart = [];
                    needsSave = true;
                }
                if (!this.state.activeCurrency || !CURRENCIES[this.state.activeCurrency]) {
                    this.state.activeCurrency = 'USD';
                    needsSave = true;
                }
                
                if (needsSave) {
                    this.saveState();
                }
                return;
            } catch (e) {
                console.error("Failed to parse store state, initializing default state.", e);
            }
        }
        this.initializeDefaultState();
    }

    getDefaultReviews() {
        return [
            {
                id: "rev_1",
                name: "Marcus Vance",
                location: "London, United Kingdom",
                title: "Executive Tea Sommelier",
                rating: 5,
                experienceType: "Gift Box Reserve",
                comment: "A masterpiece of orthodox Ceylon tea. The woodiness and wild floral honey notes are unlike anything else in the market. Each steep reveals a deeper layer of complexity.",
                date: "August 18, 2026"
            },
            {
                id: "rev_2",
                name: "Clara Montaigne",
                location: "Paris, France",
                title: "Editorial Director, Luxury Traveler Digest",
                rating: 5,
                experienceType: "Estate Factory Tour",
                comment: "Tasting these numbered reserves is a sacred ritual. The handcrafted light-wood cedar box represents the supreme dedication of the estate to artisanal history.",
                date: "August 12, 2026"
            },
            {
                id: "rev_3",
                name: "Dr. Kenji Tanaka",
                location: "Kyoto, Japan",
                title: "Founder, Kyoto Tea Connoisseurs Club",
                rating: 5,
                experienceType: "Sommelier Private Cupping",
                comment: "An unforgettable encounter at the historic factory. The private tasting tours are educational, serene, and represent Sri Lanka's finest luxury hospitality.",
                date: "July 29, 2026"
            },
            {
                id: "rev_4",
                name: "Sophia Al-Maktoum",
                location: "Dubai, UAE",
                title: "Private Tea Collector",
                rating: 5,
                experienceType: "Gift Box Reserve",
                comment: "The limited equinox chest arrived in pristine condition with gold wax seal intact. Exceptional single-estate character with unparalleled floral fragrance.",
                date: "July 15, 2026"
            },
            {
                id: "rev_5",
                name: "Julian Bernhardt",
                location: "Zurich, Switzerland",
                title: "Fine Tea Importer & Connoisseur",
                rating: 5,
                experienceType: "Pure Orthodox Tea",
                comment: "The deep taproot arbor trees impart a mineral depth that cannot be replicated by commercial plantations. Truly Ceylon's crown jewel.",
                date: "June 30, 2026"
            }
        ];
    }

    getReviews() {
        return this.state.reviews || [];
    }

    addReview(reviewData) {
        if (!this.state.reviews) this.state.reviews = [];
        const newReview = {
            id: "rev_" + Date.now(),
            name: reviewData.name || "Anonymous Connoisseur",
            location: reviewData.location || "Verified Collector",
            title: reviewData.title || "Tea Enthusiast",
            rating: Math.min(5, Math.max(1, parseInt(reviewData.rating, 10) || 5)),
            experienceType: reviewData.experienceType || "Single-Estate Experience",
            comment: reviewData.comment || "",
            date: reviewData.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        };
        this.state.reviews.unshift(newReview);
        this.saveState();
        return newReview;
    }

    deleteReview(reviewId) {
        if (!this.state.reviews) return;
        this.state.reviews = this.state.reviews.filter(r => r.id !== reviewId);
        this.saveState();
    }

    getReviewStats() {
        const reviews = this.getReviews();
        if (reviews.length === 0) {
            return { average: 5.0, count: 0, distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
        }
        const total = reviews.reduce((sum, r) => sum + (r.rating || 5), 0);
        const avg = (total / reviews.length).toFixed(1);
        const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach(r => {
            const star = Math.min(5, Math.max(1, Math.round(r.rating || 5)));
            dist[star] = (dist[star] || 0) + 1;
        });
        return {
            average: avg,
            count: reviews.length,
            distribution: dist
        };
    }

    getDefaultInquiries() {
        return [
            {
                id: "INQ-98241",
                fullName: "Lady Eleanor Sterling",
                email: "e.sterling@mayfair-estates.co.uk",
                phone: "+44 7700 900452",
                country: "United Kingdom",
                organization: "Mayfair Private Cellars",
                interests: [
                    "Numbered Collector Teak Wood Chests (Series 01–10)",
                    "Single-Estate Imperial Golden Needle & Silver Tips"
                ],
                volumeTier: "Cellar Reserve Tier (6 – 20 Units / Season)",
                contactMethod: "WhatsApp Priority Desk",
                notes: "Requesting allocation reservation for Series 03 and Series 07 of upcoming equinox flush. Interested in bespoke brass monogram plate.",
                date: "August 29, 2026",
                status: "Allocated",
                timestamp: Date.now() - 86400000 * 2
            },
            {
                id: "INQ-98105",
                fullName: "Antoine de Rochechouart",
                email: "a.rochechouart@chateau-lyon.fr",
                phone: "+33 6 12 34 56 78",
                country: "France",
                organization: "Rochechouart Hospitality Group",
                interests: [
                    "Bespoke Corporate, Diplomatic & Luxury Gifting",
                    "Private Sommelier Cupping & Master Factory Tour"
                ],
                volumeTier: "Sovereign Patron / Corporate Tier (20+ Bespoke Units)",
                contactMethod: "Direct Email Ledger",
                notes: "Planning delegation visit to Sri Lanka in November 2026. Inquiring about 50 customized gift chests with diplomatic heraldic sealing.",
                date: "August 27, 2026",
                status: "Pending Concierge Review",
                timestamp: Date.now() - 86400000 * 4
            }
        ];
    }

    getInquiries() {
        return this.state.inquiries || [];
    }

    addInquiry(inquiryData) {
        if (!this.state.inquiries) this.state.inquiries = [];
        const newInquiry = {
            id: inquiryData.id || ("INQ-" + Math.floor(10000 + Math.random() * 90000)),
            fullName: inquiryData.fullName || "Anonymous Patron",
            email: inquiryData.email || "",
            phone: inquiryData.phone || "",
            country: inquiryData.country || "Global Connoisseur",
            organization: inquiryData.organization || "Private Reserve Member",
            interests: Array.isArray(inquiryData.interests) && inquiryData.interests.length > 0 
                ? inquiryData.interests 
                : [inquiryData.interests || "Numbered Collector Teak Wood Chests (Series 01–10)"],
            volumeTier: inquiryData.volumeTier || "Connoisseur Private Tier (1 – 5 Chests / Season)",
            contactMethod: inquiryData.contactMethod || "WhatsApp Priority Desk",
            notes: inquiryData.notes || "",
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            status: "Pending Concierge Review",
            timestamp: Date.now()
        };
        this.state.inquiries.unshift(newInquiry);
        this.logMockInquiryEmail(newInquiry);
        this.saveState();
        return newInquiry;
    }

    updateInquiryStatus(inquiryId, newStatus) {
        if (!this.state.inquiries) return;
        const inq = this.state.inquiries.find(i => i.id === inquiryId);
        if (inq) {
            inq.status = newStatus;
            this.saveState();
        }
    }

    deleteInquiry(inquiryId) {
        if (!this.state.inquiries) return;
        this.state.inquiries = this.state.inquiries.filter(i => i.id !== inquiryId);
        this.saveState();
    }

    getDefaultProducts() {
        return [
            {
                id: "p1",
                name: "Imperial Gold Tip",
                category: "Black Tea",
                price: 45.00,
                weight: "100g",
                image: "images/Product.jpeg",
                desc: "Hand-rolled golden tips from our 1,240m+ highest estate fields, producing a rich coppery brew with honeyed floral notes and sweet malt finish.",
                stock: "Rare Reserve",
                symbol: "",
                leafGrade: "FBOPF Extra Special (Gold Tip)",
                elevation: "1,240m Highlands",
                harvestSeason: "Equinox First Flush",
                flavorProfile: "Wild Orchid, Honeyed Malt, Caramelized Fig",
                tastingNotes: ["Wild Orchid", "Warm Wildflower Honey", "Malted Barley", "Sweet Caramelized Fig"],
                steepTemp: "95°C (203°F)",
                steepTime: "3 Minutes",
                steepSeconds: 180,
                leafRatio: "2.5g / 180ml",
                infusions: [
                    { round: 1, seconds: 180, label: "1st Infusion (Aroma & Floral)" },
                    { round: 2, seconds: 210, label: "2nd Infusion (Body & Honey Malt)" },
                    { round: 3, seconds: 270, label: "3rd Infusion (Sweet Mineral Finish)" }
                ],
                sensoryRadar: {
                    floral: 85,
                    malty: 92,
                    sweetness: 80,
                    astringency: 42,
                    body: 88,
                    aroma: 94
                }
            },
            {
                id: "p2",
                name: "Highlands Silver Needle Tips",
                category: "White Tea",
                price: 65.00,
                weight: "80g",
                image: "images/Product.jpeg",
                desc: "Sun-dried velvety unopened buds hand-plucked at dawn. Delivers an ethereal pale champagne liquor with lingering honeysuckle sweetness.",
                stock: "Micro-Batch",
                symbol: "",
                leafGrade: "Imperial Silver Tips (Hand-Selected)",
                elevation: "1,320m Peak Ridge",
                harvestSeason: "Morning Mist Spring Harvest",
                flavorProfile: "Fresh Jasmine, White Peach, Sweet Montane Dew",
                tastingNotes: ["Fresh Jasmine Blossom", "White Peach", "Sweet Dew", "Subtle Vanilla Pod"],
                steepTemp: "80°C (176°F)",
                steepTime: "4 Minutes",
                steepSeconds: 240,
                leafRatio: "3.0g / 180ml",
                infusions: [
                    { round: 1, seconds: 240, label: "1st Infusion (Delicate White Blossom)" },
                    { round: 2, seconds: 300, label: "2nd Infusion (Nectar & Ripe Peach)" },
                    { round: 3, seconds: 360, label: "3rd Infusion (Velvety Lingering Sweetness)" }
                ],
                sensoryRadar: {
                    floral: 96,
                    malty: 20,
                    sweetness: 90,
                    astringency: 18,
                    body: 55,
                    aroma: 98
                }
            },
            {
                id: "p3",
                name: "Estate Emerald Mountain Needle",
                category: "Green Tea",
                price: 42.00,
                weight: "100g",
                image: "images/Product.jpeg",
                desc: "Pan-roasted single-estate green tea leaves with vibrant jade clarity, toasted chestnut notes, and crisp montane mineral undertones.",
                stock: "In Stock",
                symbol: "",
                leafGrade: "Orthodox Whole Leaf Green",
                elevation: "1,200m Valley Slopes",
                harvestSeason: "Spring Sunrise Harvest",
                flavorProfile: "Toasted Chestnut, Bamboo Shoots, Sweet Umami",
                tastingNotes: ["Fresh Toasted Chestnut", "Steamed Bamboo Leaf", "Sweet Umami", "Crisp Montane Mineral"],
                steepTemp: "82°C (180°F)",
                steepTime: "2.5 Minutes",
                steepSeconds: 150,
                leafRatio: "2.0g / 180ml",
                infusions: [
                    { round: 1, seconds: 150, label: "1st Infusion (Bright Vegetal & Umami)" },
                    { round: 2, seconds: 180, label: "2nd Infusion (Nutty Roasted Chestnut)" },
                    { round: 3, seconds: 240, label: "3rd Infusion (Clean Refreshing Mineral)" }
                ],
                sensoryRadar: {
                    floral: 68,
                    malty: 28,
                    sweetness: 76,
                    astringency: 52,
                    body: 68,
                    aroma: 86
                }
            },
            {
                id: "p4",
                name: "Ceylon Amber Oolong Reserve",
                category: "Oolong Tea",
                price: 52.00,
                weight: "90g",
                image: "images/Product.jpeg",
                desc: "Semi-oxidized artisanal mountain tea rolled by hand and lightly roasted over aromatic wood embers. Rich notes of ripe apricot and amber honey.",
                stock: "Seasonal Special",
                symbol: "",
                leafGrade: "Artisanal Twisted Leaf Oolong",
                elevation: "1,180m Montane Slope",
                harvestSeason: "Autumn Equinox Batch",
                flavorProfile: "Ripe Apricot, Roasted Macadamia, Amber Honey",
                tastingNotes: ["Ripe Apricot", "Roasted Macadamia", "Magnolia Petals", "Amber Honey"],
                steepTemp: "90°C (194°F)",
                steepTime: "3 Minutes",
                steepSeconds: 180,
                leafRatio: "2.5g / 180ml",
                infusions: [
                    { round: 1, seconds: 180, label: "1st Infusion (Floral Magnolia Opening)" },
                    { round: 2, seconds: 240, label: "2nd Infusion (Warm Roasted Apricot)" },
                    { round: 3, seconds: 300, label: "3rd Infusion (Silky Honey Finish)" }
                ],
                sensoryRadar: {
                    floral: 88,
                    malty: 72,
                    sweetness: 84,
                    astringency: 36,
                    body: 80,
                    aroma: 92
                }
            }
        ];
    }

    addProduct(productData) {
        const newProduct = {
            id: "p_" + Date.now(),
            name: productData.name,
            category: productData.category,
            price: parseFloat(productData.price) || 0.00,
            weight: productData.weight || "100g",
            image: productData.image || "images/Product.jpeg",
            desc: productData.desc || "",
            stock: productData.stock || "In Stock",
            symbol: productData.symbol || "",
            leafGrade: productData.leafGrade || "Premium Grade",
            elevation: productData.elevation || "1,200m Highlands",
            harvestSeason: productData.harvestSeason || "Single-Estate Seasonal",
            flavorProfile: productData.flavorProfile || "Artisanal Blend",
            tastingNotes: productData.tastingNotes || ["Floral", "Honey", "Smooth Finish"],
            steepTemp: productData.steepTemp || "90°C (194°F)",
            steepTime: productData.steepTime || "3 Minutes",
            steepSeconds: parseInt(productData.steepSeconds, 10) || 180,
            leafRatio: productData.leafRatio || "2.5g / 180ml",
            infusions: productData.infusions || [
                { round: 1, seconds: 180, label: "1st Infusion" },
                { round: 2, seconds: 240, label: "2nd Infusion" },
                { round: 3, seconds: 300, label: "3rd Infusion" }
            ],
            sensoryRadar: productData.sensoryRadar || {
                floral: 75,
                malty: 70,
                sweetness: 75,
                astringency: 40,
                body: 75,
                aroma: 85
            }
        };
        if (!this.state.products) this.state.products = [];
        this.state.products.push(newProduct);
        this.saveState();
        return newProduct;
    }

    updateProduct(productId, updatedData) {
        if (!this.state.products) return null;
        const prodIndex = this.state.products.findIndex(p => p.id === productId);
        if (prodIndex === -1) return null;

        const current = this.state.products[prodIndex];
        this.state.products[prodIndex] = {
            ...current,
            name: updatedData.name !== undefined ? updatedData.name : current.name,
            category: updatedData.category !== undefined ? updatedData.category : current.category,
            price: updatedData.price !== undefined ? parseFloat(updatedData.price) : current.price,
            weight: updatedData.weight !== undefined ? updatedData.weight : current.weight,
            image: updatedData.image !== undefined ? updatedData.image : current.image,
            desc: updatedData.desc !== undefined ? updatedData.desc : current.desc,
            stock: updatedData.stock !== undefined ? updatedData.stock : current.stock,
            symbol: updatedData.symbol !== undefined ? updatedData.symbol : current.symbol,
            leafGrade: updatedData.leafGrade !== undefined ? updatedData.leafGrade : current.leafGrade,
            elevation: updatedData.elevation !== undefined ? updatedData.elevation : current.elevation,
            harvestSeason: updatedData.harvestSeason !== undefined ? updatedData.harvestSeason : current.harvestSeason,
            flavorProfile: updatedData.flavorProfile !== undefined ? updatedData.flavorProfile : current.flavorProfile,
            tastingNotes: updatedData.tastingNotes !== undefined ? updatedData.tastingNotes : current.tastingNotes,
            steepTemp: updatedData.steepTemp !== undefined ? updatedData.steepTemp : current.steepTemp,
            steepTime: updatedData.steepTime !== undefined ? updatedData.steepTime : current.steepTime,
            steepSeconds: updatedData.steepSeconds !== undefined ? updatedData.steepSeconds : current.steepSeconds,
            leafRatio: updatedData.leafRatio !== undefined ? updatedData.leafRatio : current.leafRatio,
            infusions: updatedData.infusions !== undefined ? updatedData.infusions : current.infusions,
            sensoryRadar: updatedData.sensoryRadar !== undefined ? updatedData.sensoryRadar : current.sensoryRadar
        };

        this.saveState();
        return this.state.products[prodIndex];
    }

    deleteProduct(productId) {
        if (!this.state.products) return;
        this.state.products = this.state.products.filter(p => p.id !== productId);
        this.saveState();
    }

    initializeDefaultState() {
        this.state = {
            currentSeason: {
                name: "Royal Emerald Reserve",
                seriesNumber: 1,
                pricePerBox: 150.00 // Premium pricing in USD
            },
            // 1 to 10 gift boxes
            boxes: Array.from({ length: 10 }, (_, i) => ({
                id: i + 1,
                name: `Gift Box #${String(i + 1).padStart(2, '0')}`,
                status: "Available", // "Available", "Pending", "Booked"
                price: 150.00,
                booking: null // Will hold customer details when booked
            })),
            products: this.getDefaultProducts(),
            bookings: [],
            // Hourly tour slots for tomorrow/general bookings
            tourSlots: [
                { id: 1, timeSlot: "09:00 AM - 10:00 AM", status: "Available", booking: null, package: "Silver Leaf Tour" },
                { id: 2, timeSlot: "10:15 AM - 11:15 AM", status: "Available", booking: null, package: "Silver Leaf Tour" },
                { id: 3, timeSlot: "11:30 AM - 12:30 PM", status: "Available", booking: null, package: "Golden Sommelier Tour" },
                { id: 4, timeSlot: "01:00 PM - 02:00 PM", status: "Booked", booking: { name: "Archibald Sterling", guests: 4 }, package: "Golden Sommelier Tour" },
                { id: 5, timeSlot: "02:15 PM - 03:15 PM", status: "Available", booking: null, package: "Imperial Grand Tasting" },
                { id: 6, timeSlot: "03:30 PM - 04:30 PM", status: "Available", booking: null, package: "Imperial Grand Tasting" },
                { id: 7, timeSlot: "04:45 PM - 05:45 PM", status: "Available", booking: null, package: "Silver Leaf Tour" }
            ],
            announcements: [...DEFAULT_ANNOUNCEMENTS],
            gallery: [...DEFAULT_GALLERY_IMAGES],
            emailLogs: [], // Mock logs for emails sent to clients
            orders: [],    // Payment orders created by owner from enquiries
            reviews: this.getDefaultReviews(),
            inquiries: this.getDefaultInquiries(),
            activeCurrency: "USD"
        };
        this.saveState();
    }

    saveState() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    }

    // ─── Multi-Currency Engine ────────────────────────────────────────────────
    getCurrencies() {
        return CURRENCIES;
    }

    getActiveCurrency() {
        return (this.state && this.state.activeCurrency && CURRENCIES[this.state.activeCurrency]) 
            ? this.state.activeCurrency 
            : 'USD';
    }

    setActiveCurrency(currencyCode) {
        const code = (currencyCode || '').toUpperCase();
        if (CURRENCIES[code]) {
            this.state.activeCurrency = code;
            this.saveState();
            return true;
        }
        return false;
    }

    formatCurrency(usdAmount, targetCurrency = null) {
        const code = targetCurrency || this.getActiveCurrency();
        const curr = CURRENCIES[code] || CURRENCIES.USD;
        const num = typeof usdAmount === 'number' ? usdAmount : parseFloat(usdAmount || 0);
        const converted = num * curr.rate;
        
        let formattedVal;
        if (curr.decimals === 0) {
            formattedVal = Math.round(converted).toLocaleString('en-US');
        } else {
            formattedVal = converted.toLocaleString('en-US', {
                minimumFractionDigits: curr.decimals,
                maximumFractionDigits: curr.decimals
            });
        }
        return `${curr.symbol}${formattedVal}`;
    }

    convertCurrency(usdAmount, targetCurrency = null) {
        const code = targetCurrency || this.getActiveCurrency();
        const curr = CURRENCIES[code] || CURRENCIES.USD;
        const num = typeof usdAmount === 'number' ? usdAmount : parseFloat(usdAmount || 0);
        return num * curr.rate;
    }

    // Getters
    getCurrentSeason() { return this.state.currentSeason || { name: "Royal Emerald Reserve", seriesNumber: 1, pricePerBox: 150.00 }; }
    getBoxes() { return this.state.boxes || []; }
    getProducts() {
        if (!this.state.products || !Array.isArray(this.state.products) || this.state.products.length === 0) {
            this.state.products = this.getDefaultProducts();
            this.saveState();
        }
        return this.state.products;
    }
    getBookings() { return this.state.bookings || []; }
    getTourSlots() { return this.state.tourSlots || []; }
    getAnnouncements() { return this.state.announcements || []; }
    getGalleryImages() {
        if (!this.state.gallery || !Array.isArray(this.state.gallery) || this.state.gallery.length === 0) {
            this.state.gallery = [...DEFAULT_GALLERY_IMAGES];
            this.saveState();
        }
        return this.state.gallery;
    }
    getEmailLogs() { return this.state.emailLogs || []; }
    getOrders() { return this.state.orders || []; }
    getOrderById(orderId) { return (this.state.orders || []).find(o => o.id === orderId) || null; }

    // ─── Recent Order Memory (device-local, separate key) ─────────────────────
    static get RECENT_ORDERS_KEY() { return 'tf_recent_order_ids'; }

    // Save an order ID viewed/placed on this device (max 5, newest first)
    saveRecentOrderId(orderId) {
        if (!orderId) return;
        try {
            const raw = localStorage.getItem(TeaFactoryStore.RECENT_ORDERS_KEY);
            let ids = raw ? JSON.parse(raw) : [];
            // Remove duplicate then prepend
            ids = ids.filter(id => id !== orderId);
            ids.unshift(orderId);
            // Keep at most 5
            ids = ids.slice(0, 5);
            localStorage.setItem(TeaFactoryStore.RECENT_ORDERS_KEY, JSON.stringify(ids));
        } catch(e) { /* silently ignore */ }
    }

    // Returns array of recent order IDs (newest first), cross-referenced against orders that actually exist
    getRecentOrderIds() {
        try {
            const raw = localStorage.getItem(TeaFactoryStore.RECENT_ORDERS_KEY);
            if (!raw) return [];
            const ids = JSON.parse(raw);
            // Only return IDs whose orders still exist
            return ids.filter(id => this.getOrderById(id));
        } catch(e) { return []; }
    }

    // Clear all remembered recent orders from this device
    clearRecentOrders() {
        try { localStorage.removeItem(TeaFactoryStore.RECENT_ORDERS_KEY); } catch(e) {}
    }

    // ─── Order Management ──────────────────────────────────────────────────────
    // Creates a payment order from an existing enquiry booking
    createOrder(bookingId, orderData) {
        if (!this.state.orders) this.state.orders = [];
        const booking = this.state.bookings.find(b => b.id === bookingId);
        if (!booking) return { success: false, message: 'Booking not found' };

        const orderId = 'ORD-' + Date.now().toString().slice(-8);
        const newOrder = {
            id: orderId,
            bookingId: bookingId,
            boxId: booking.boxId,
            boxName: booking.boxName,
            seasonName: booking.seasonName,
            customerName: booking.customerName,
            email: booking.email,
            phone: booking.phone,
            price: parseFloat(orderData.price) || booking.price,
            paymentMethod: orderData.paymentMethod || 'both',  // 'online' | 'bank' | 'both'
            paymentLink: orderData.paymentLink || '',
            bankName: orderData.bankName || '',
            accountName: orderData.accountName || '',
            accountNo: orderData.accountNo || '',
            referenceNote: orderData.referenceNote || '',
            ownerNote: orderData.ownerNote || '',
            status: 'Awaiting Payment',    // Awaiting Payment → Slip Submitted → Paid & Confirmed → Cancelled
            slipImage: '',
            createdAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
        };
        this.state.orders.unshift(newOrder);

        // Update the original booking status to reflect order created
        const bIdx = this.state.bookings.findIndex(b => b.id === bookingId);
        if (bIdx !== -1) this.state.bookings[bIdx].status = 'Order Created';

        this.saveState();
        return { success: true, order: newOrder };
    }

    // Updates order status; optionally attaches deposit slip image
    updateOrderStatus(orderId, status, slipImage) {
        if (!this.state.orders) return false;
        const idx = this.state.orders.findIndex(o => o.id === orderId);
        if (idx === -1) return false;
        this.state.orders[idx].status = status;
        if (slipImage) this.state.orders[idx].slipImage = slipImage;

        // Sync the linked booking status too
        const linkedBookingId = this.state.orders[idx].bookingId;
        const bIdx = this.state.bookings.findIndex(b => b.id === linkedBookingId);
        if (bIdx !== -1) {
            if (status === 'Paid & Confirmed') {
                this.state.bookings[bIdx].status = 'Paid & Confirmed';
                // Mark box as fully booked
                const boxIdx = this.state.boxes.findIndex(b => b.id === this.state.orders[idx].boxId);
                if (boxIdx !== -1) this.state.boxes[boxIdx].status = 'Booked';
            } else if (status === 'Cancelled') {
                this.state.bookings[bIdx].status = 'Cancelled';
            } else if (status === 'Slip Submitted') {
                this.state.bookings[bIdx].status = 'Slip Submitted';
            }
        }
        this.saveState();
        return true;
    }

    // Universal Bank Slip Validation for all transactions (Orders & Bookings)
    validateDepositSlip(id, isValid, reason = '') {
        const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        let matched = false;

        // 1. Check if ID matches an order in state.orders
        if (this.state.orders) {
            const orderIdx = this.state.orders.findIndex(o => o.id === id || o.bookingId === id);
            if (orderIdx !== -1) {
                matched = true;
                const newStatus = isValid ? 'Paid & Confirmed' : 'Slip Rejected';
                this.state.orders[orderIdx].status = newStatus;
                this.state.orders[orderIdx].validatedAt = dateStr;
                if (reason) this.state.orders[orderIdx].validationNote = reason;

                // Sync linked booking
                const bId = this.state.orders[orderIdx].bookingId;
                if (bId) this.updateBookingStatus(bId, newStatus);
            }
        }

        // 2. Check if ID matches a booking in state.bookings
        if (this.state.bookings) {
            const bookingIdx = this.state.bookings.findIndex(b => b.id === id);
            if (bookingIdx !== -1) {
                matched = true;
                const newStatus = isValid ? 'Paid & Confirmed' : 'Slip Rejected';
                this.state.bookings[bookingIdx].status = newStatus;
                this.state.bookings[bookingIdx].validatedAt = dateStr;
                if (reason) this.state.bookings[bookingIdx].validationNote = reason;

                if (isValid) {
                    if (this.state.bookings[bookingIdx].boxId) {
                        const boxIdx = this.state.boxes.findIndex(bx => bx.id === this.state.bookings[bookingIdx].boxId);
                        if (boxIdx !== -1) this.state.boxes[boxIdx].status = 'Booked';
                    }
                } else {
                    if (this.state.bookings[bookingIdx].boxId) {
                        const boxIdx = this.state.boxes.findIndex(bx => bx.id === this.state.bookings[bookingIdx].boxId);
                        if (boxIdx !== -1) this.state.boxes[boxIdx].status = 'Available';
                    } else if (this.state.bookings[bookingIdx].slotId) {
                        const slotIdx = this.state.tourSlots.findIndex(s => s.id === this.state.bookings[bookingIdx].slotId);
                        if (slotIdx !== -1) this.state.tourSlots[slotIdx].status = 'Available';
                    }
                }
            }
        }

        if (matched) {
            this.saveState();
            return { success: true };
        }
        return { success: false, message: 'Transaction record not found.' };
    }

    // Gallery Management (Add, Delete)
    addGalleryImage(imageData) {
        if (!this.state.gallery) this.state.gallery = [...DEFAULT_GALLERY_IMAGES];
        const newImg = {
            id: 'g_' + Date.now(),
            src: imageData.src,
            caption: imageData.caption || 'Artisanal Estate Moment',
            tag: imageData.tag || 'Estate & Harvest'
        };
        this.state.gallery.unshift(newImg);
        this.saveState();
        return newImg;
    }

    deleteGalleryImage(imageId) {
        if (!this.state.gallery) return false;
        this.state.gallery = this.state.gallery.filter(g => g.id !== imageId);
        this.saveState();
        return true;
    }

    // E-Commerce Booking Method
    bookBox(boxId, customerData) {
        const boxIndex = this.state.boxes.findIndex(b => b.id === boxId);
        if (boxIndex === -1) return { success: false, message: "Box not found" };
        
        const box = this.state.boxes[boxIndex];
        if (box.status === "Booked") {
            return { success: false, message: "This exclusive collector chest has already been reserved by an operator." };
        }

        const dateNow = new Date();
        // Calculate Expected Delivery Range (3 to 7 days from now)
        const deliveryStart = new Date();
        deliveryStart.setDate(dateNow.getDate() + 3);
        const deliveryEnd = new Date();
        deliveryEnd.setDate(dateNow.getDate() + 7);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const deliveryRange = `${deliveryStart.toLocaleDateString('en-US', options)} - ${deliveryEnd.toLocaleDateString('en-US', options)}`;

        const bookingId = `ENQ-${String(this.state.currentSeason.seriesNumber).padStart(2, '0')}-${boxId}-${Date.now().toString().slice(-4)}`;
        
        const newBooking = {
            id: bookingId,
            boxId: box.id,
            boxName: box.name,
            seasonName: this.state.currentSeason.name,
            seriesNumber: this.state.currentSeason.seriesNumber,
            price: box.price,
            customerName: customerData.name,
            email: customerData.email,
            phone: customerData.phone,
            bookingDate: dateNow.toLocaleDateString('en-US', { ...options, hour: '2-digit', minute: '2-digit' }),
            deliveryRange: deliveryRange,
            preferredDate: customerData.preferredDate || "",
            message: customerData.message || "",
            giftPackaging: !!customerData.giftPackaging,
            giftMessage: customerData.giftMessage || "",
            waxSealColor: customerData.waxSealColor || "Imperial Gold",
            monogramInitials: customerData.monogramInitials || "",
            currency: this.getActiveCurrency(),
            formattedPrice: this.formatCurrency(box.price),
            status: "Enquiry Pending",
            socialChannel: customerData.socialChannel || "WhatsApp"
        };

        // Update Box State to Enquiry Pending
        this.state.boxes[boxIndex].status = "Enquiry Pending";
        this.state.boxes[boxIndex].booking = {
            bookingId: bookingId,
            customerName: customerData.name
        };

        // Add to global bookings list
        this.state.bookings.unshift(newBooking);

        // Generate Automated Email Notification Log
        this.logMockEmail(newBooking);

        this.saveState();
        return { success: true, booking: newBooking };
    }

    // Gift Box Management (Add, Edit, Remove)
    addBox(boxData) {
        if (!this.state.boxes) this.state.boxes = [];
        
        let newId = parseInt(boxData.id);
        if (isNaN(newId) || newId <= 0) {
            const maxId = this.state.boxes.reduce((max, b) => Math.max(max, typeof b.id === 'number' ? b.id : 0), 0);
            newId = maxId + 1;
        }

        const newBox = {
            id: newId,
            name: boxData.name || `Gift Box #${String(newId).padStart(2, '0')}`,
            status: boxData.status || "Available",
            price: parseFloat(boxData.price) || (this.state.currentSeason ? this.state.currentSeason.pricePerBox : 150.00),
            image: boxData.image || "images/Gift Box.jpeg",
            desc: boxData.desc || "Individually numbered, hand-sealed cedar chest containing seasonal micro-batch leaves.",
            booking: null
        };

        const existingIdx = this.state.boxes.findIndex(b => b.id === newId);
        if (existingIdx >= 0) {
            this.state.boxes[existingIdx] = newBox;
        } else {
            this.state.boxes.push(newBox);
            this.state.boxes.sort((a, b) => (typeof a.id === 'number' && typeof b.id === 'number') ? a.id - b.id : 0);
        }

        this.saveState();
        return newBox;
    }

    updateBox(boxId, updatedData) {
        if (!this.state.boxes) return null;
        const boxIndex = this.state.boxes.findIndex(b => b.id === boxId);
        if (boxIndex === -1) return null;

        const currentBox = this.state.boxes[boxIndex];
        this.state.boxes[boxIndex] = {
            ...currentBox,
            name: updatedData.name !== undefined ? updatedData.name : currentBox.name,
            price: updatedData.price !== undefined ? parseFloat(updatedData.price) : currentBox.price,
            status: updatedData.status !== undefined ? updatedData.status : currentBox.status,
            image: updatedData.image !== undefined ? updatedData.image : currentBox.image,
            desc: updatedData.desc !== undefined ? updatedData.desc : currentBox.desc,
            booking: updatedData.status === 'Available' ? null : currentBox.booking
        };

        this.saveState();
        return this.state.boxes[boxIndex];
    }

    deleteBox(boxId) {
        if (!this.state.boxes) return false;
        this.state.boxes = this.state.boxes.filter(b => b.id !== boxId);
        this.saveState();
        return true;
    }

    // Reset Season & Series
    resetSeason(newSeasonName, newPrice = 150.00) {
        const nextSeriesNum = this.state.currentSeason.seriesNumber + 1;
        this.state.currentSeason = {
            name: newSeasonName || DEFAULT_SEASONS[nextSeriesNum % DEFAULT_SEASONS.length] || "Royal Crest Series",
            seriesNumber: nextSeriesNum,
            pricePerBox: parseFloat(newPrice) || 150.00
        };

        // Reset Box Grid to Available and apply new prices
        this.state.boxes = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            name: `Gift Box #${String(i + 1).padStart(2, '0')}`,
            status: "Available",
            price: parseFloat(newPrice) || 150.00,
            booking: null
        }));

        this.saveState();
        return { success: true, newSeason: this.state.currentSeason };
    }

    // Factory Tour Bookings
    bookTour(slotId, customerData) {
        const slotIndex = this.state.tourSlots.findIndex(s => s.id === slotId);
        if (slotIndex === -1) return { success: false, message: "Time slot not found" };

        const slot = this.state.tourSlots[slotIndex];
        if (slot.status !== "Available") {
            return { success: false, message: "This slot is already booked." };
        }

        const dateNow = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        
        const bookingId = `TR-${slotId}-${Date.now().toString().slice(-4)}`;
        const tourBooking = {
            id: bookingId,
            type: 'tour',
            slotId: slot.id,
            timeSlot: slot.timeSlot,
            packageName: customerData.packageName || slot.package,
            customerName: customerData.name,
            email: customerData.email,
            phone: customerData.phone,
            guests: parseInt(customerData.guests) || 1,
            bookingDate: dateNow.toLocaleDateString('en-US', options),
            depositPaid: parseFloat(customerData.deposit) || 50.00,
            totalPrice: parseFloat(customerData.totalPrice) || (parseFloat(customerData.deposit) || 50.00),
            paymentMethod: customerData.paymentMethod || 'card',
            slipImage: customerData.slipImage || '',
            status: customerData.paymentMethod === 'card' ? 'Paid & Confirmed' : 'Pending Verification',
            tourDate: customerData.tourDate || "",
            dietaryNotes: customerData.dietaryNotes || "None",
            transportRequired: customerData.transportRequired || "No"
        };

        // Update slot state
        this.state.tourSlots[slotIndex].status = "Booked";
        this.state.tourSlots[slotIndex].booking = {
            bookingId: bookingId,
            customerName: customerData.name,
            guests: customerData.guests,
            package: tourBooking.packageName
        };

        // Add to global bookings for audit
        this.state.bookings.unshift(tourBooking);

        // Generate Tour Booking Email Log
        this.logMockTourEmail(tourBooking);

        this.saveState();
        return { success: true, booking: tourBooking };
    }

    // Reset Tour slots
    resetTourSlots() {
        this.state.tourSlots = [
            { id: 1, timeSlot: "09:00 AM - 10:00 AM", status: "Available", booking: null, package: "Silver Leaf Tour" },
            { id: 2, timeSlot: "10:15 AM - 11:15 AM", status: "Available", booking: null, package: "Silver Leaf Tour" },
            { id: 3, timeSlot: "11:30 AM - 12:30 PM", status: "Available", booking: null, package: "Golden Sommelier Tour" },
            { id: 4, timeSlot: "01:00 PM - 02:00 PM", status: "Available", booking: null, package: "Golden Sommelier Tour" },
            { id: 5, timeSlot: "02:15 PM - 03:15 PM", status: "Available", booking: null, package: "Imperial Grand Tasting" },
            { id: 6, timeSlot: "03:30 PM - 04:30 PM", status: "Available", booking: null, package: "Imperial Grand Tasting" },
            { id: 7, timeSlot: "04:45 PM - 05:45 PM", status: "Available", booking: null, package: "Silver Leaf Tour" }
        ];
        this.saveState();
    }

    forceResetState() {
        this.initializeDefaultState();
        this.saveState();
    }

    // ─── Database Backup & Disaster Recovery (JSON) ───────────────────────────
    exportDatabaseJson() {
        const deepClonedData = JSON.parse(JSON.stringify({
            currentSeason: this.state.currentSeason || { name: "Royal Emerald Reserve", seriesNumber: 1, pricePerBox: 150.00 },
            boxes: this.state.boxes || [],
            products: this.state.products || [],
            bookings: this.state.bookings || [],
            orders: this.state.orders || [],
            tourSlots: this.state.tourSlots || [],
            announcements: this.state.announcements || [],
            gallery: this.state.gallery || [],
            emailLogs: this.state.emailLogs || [],
            reviews: this.state.reviews || [],
            inquiries: this.state.inquiries || [],
            curationTimeline: this.state.curationTimeline || [],
            activeCurrency: this.state.activeCurrency || 'USD'
        }));

        return {
            backupVersion: "1.83.0",
            application: "Rock One Wild Tea Estate Management Portal",
            estate: "Rock One Wild Tea Sanctuary, Ettampitiya, Sri Lanka",
            exportedAt: new Date().toISOString(),
            exportedAtFormatted: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            schemaVersion: 2,
            statsSummary: {
                totalBoxes: (deepClonedData.boxes || []).length,
                totalProducts: (deepClonedData.products || []).length,
                totalBookings: (deepClonedData.bookings || []).length,
                totalOrders: (deepClonedData.orders || []).length,
                totalTourSlots: (deepClonedData.tourSlots || []).length,
                totalAnnouncements: (deepClonedData.announcements || []).length,
                totalGalleryImages: (deepClonedData.gallery || []).length,
                totalReviews: (deepClonedData.reviews || []).length,
                totalInquiries: (deepClonedData.inquiries || []).length
            },
            data: deepClonedData
        };
    }

    restoreDatabaseJson(backupInput) {
        try {
            let backupObj = backupInput;
            if (typeof backupInput === 'string') {
                backupObj = JSON.parse(backupInput);
            }

            if (!backupObj || typeof backupObj !== 'object') {
                return { success: false, message: 'Invalid backup file format: file must contain valid JSON.' };
            }

            // Support both wrapped backup format (with .data) and raw state export
            const rawPayload = backupObj.data || backupObj;

            if (!rawPayload || typeof rawPayload !== 'object') {
                return { success: false, message: 'Invalid backup structure: dataset missing or corrupted.' };
            }

            const payload = JSON.parse(JSON.stringify(rawPayload));

            // Basic sanity validation
            if (payload.boxes && !Array.isArray(payload.boxes)) {
                return { success: false, message: 'Corrupted backup: boxes must be an array.' };
            }
            if (payload.products && !Array.isArray(payload.products)) {
                return { success: false, message: 'Corrupted backup: products must be an array.' };
            }
            if (payload.bookings && !Array.isArray(payload.bookings)) {
                return { success: false, message: 'Corrupted backup: bookings must be an array.' };
            }

            // Restore state with defaults for any missing properties
            this.state = {
                currentSeason: payload.currentSeason || { name: "Royal Emerald Reserve", seriesNumber: 1, pricePerBox: 150.00 },
                boxes: Array.isArray(payload.boxes) && payload.boxes.length > 0 ? payload.boxes : this.state.boxes,
                products: Array.isArray(payload.products) && payload.products.length > 0 ? payload.products : this.state.products,
                bookings: Array.isArray(payload.bookings) ? payload.bookings : [],
                orders: Array.isArray(payload.orders) ? payload.orders : [],
                tourSlots: Array.isArray(payload.tourSlots) && payload.tourSlots.length > 0 ? payload.tourSlots : this.state.tourSlots,
                announcements: Array.isArray(payload.announcements) ? payload.announcements : [],
                gallery: Array.isArray(payload.gallery) ? payload.gallery : (this.state.gallery || []),
                emailLogs: Array.isArray(payload.emailLogs) ? payload.emailLogs : [],
                reviews: Array.isArray(payload.reviews) ? payload.reviews : (this.state.reviews || []),
                inquiries: Array.isArray(payload.inquiries) ? payload.inquiries : (this.state.inquiries || []),
                curationTimeline: Array.isArray(payload.curationTimeline) ? payload.curationTimeline : (this.state.curationTimeline || []),
                activeCurrency: payload.activeCurrency || this.state.activeCurrency || 'USD'
            };

            this.saveState();

            return {
                success: true,
                summary: {
                    boxesCount: this.state.boxes.length,
                    productsCount: this.state.products.length,
                    bookingsCount: this.state.bookings.length,
                    ordersCount: this.state.orders.length,
                    tourSlotsCount: this.state.tourSlots.length,
                    seasonName: this.state.currentSeason.name
                }
            };
        } catch (err) {
            console.error('Failed to restore database from backup JSON:', err);
            return { success: false, message: 'Parse error: ' + (err.message || 'Malformed JSON file.') };
        }
    }

    // Update reservation booking status (Verification and Releasing)
    updateBookingStatus(bookingId, status) {
        const bookingIndex = this.state.bookings.findIndex(b => b.id === bookingId);
        if (bookingIndex === -1) return false;

        const booking = this.state.bookings[bookingIndex];
        booking.status = status;

        if (status === 'Paid & Confirmed') {
            if (booking.boxId) {
                const boxIndex = this.state.boxes.findIndex(b => b.id === booking.boxId);
                if (boxIndex !== -1) {
                    this.state.boxes[boxIndex].status = 'Booked';
                }
            }
        } else if (status === 'Cancelled') {
            if (booking.boxId) {
                const boxIndex = this.state.boxes.findIndex(b => b.id === booking.boxId);
                if (boxIndex !== -1) {
                    this.state.boxes[boxIndex].status = 'Available';
                    this.state.boxes[boxIndex].booking = null;
                }
            } else if (booking.slotId) {
                const slotIndex = this.state.tourSlots.findIndex(s => s.id === booking.slotId);
                if (slotIndex !== -1) {
                    this.state.tourSlots[slotIndex].status = 'Available';
                    this.state.tourSlots[slotIndex].booking = null;
                }
            }
        } else if (status === 'Completed') {
            // Tour / Order marked as fulfilled & finished
            if (booking.slotId) {
                const slotIndex = this.state.tourSlots.findIndex(s => s.id === booking.slotId);
                if (slotIndex !== -1) {
                    // Release the physical slot back to Available so future guests can book this daily hour
                    this.state.tourSlots[slotIndex].status = 'Available';
                    this.state.tourSlots[slotIndex].booking = null;
                }
            }
        }
        this.saveState();
        return true;
    }

    // Tour Slots Management (Add, Edit, Reset, Delete)
    addTourSlot(slotData) {
        if (!this.state.tourSlots) this.state.tourSlots = [];
        const maxId = this.state.tourSlots.reduce((max, s) => Math.max(max, typeof s.id === 'number' ? s.id : 0), 0);
        const newSlot = {
            id: maxId + 1,
            timeSlot: slotData.timeSlot || slotData.time_slot || "09:00 AM - 10:00 AM",
            time_slot: slotData.timeSlot || slotData.time_slot || "09:00 AM - 10:00 AM",
            package: slotData.package || slotData.name || "Silver Leaf Tour",
            name: slotData.package || slotData.name || "Silver Leaf Tour",
            status: slotData.status || "Available",
            booking: null,
            price: slotData.price || 75.00
        };
        this.state.tourSlots.push(newSlot);
        this.saveState();
        return newSlot;
    }

    updateTourSlot(slotId, updatedData) {
        if (!this.state.tourSlots) return null;
        const idx = this.state.tourSlots.findIndex(s => String(s.id) === String(slotId));
        if (idx === -1) return null;

        const current = this.state.tourSlots[idx];
        const updatedTime = updatedData.timeSlot !== undefined ? updatedData.timeSlot : (current.timeSlot || current.time_slot);
        const updatedPkg = updatedData.package !== undefined ? updatedData.package : (current.package || current.name);
        const updatedStatus = updatedData.status !== undefined ? updatedData.status : current.status;

        this.state.tourSlots[idx] = {
            ...current,
            timeSlot: updatedTime,
            time_slot: updatedTime,
            package: updatedPkg,
            name: updatedPkg,
            status: updatedStatus,
            booking: updatedStatus === 'Available' ? null : current.booking
        };

        this.saveState();
        return this.state.tourSlots[idx];
    }

    resetSingleTourSlot(slotId) {
        if (!this.state.tourSlots) return false;
        const idx = this.state.tourSlots.findIndex(s => String(s.id) === String(slotId));
        if (idx === -1) return false;
        this.state.tourSlots[idx].status = 'Available';
        this.state.tourSlots[idx].booking = null;
        this.saveState();
        return true;
    }

    deleteTourSlot(slotId) {
        if (!this.state.tourSlots) return false;
        this.state.tourSlots = this.state.tourSlots.filter(s => String(s.id) !== String(slotId));
        this.saveState();
        return true;
    }


    // Add new Announcement
    addAnnouncement(announcement) {
        const id = this.state.announcements.length ? Math.max(...this.state.announcements.map(a => a.id)) + 1 : 1;
        const newAnn = {
            id,
            title: announcement.title,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            content: announcement.content,
            tag: announcement.tag || "Update",
            premium: !!announcement.premium,
            image: announcement.image || "images/luxury_tea_announcement.jpg"
        };
        this.state.announcements.unshift(newAnn);
        this.saveState();
        return newAnn;
    }

    // Delete Announcement
    deleteAnnouncement(id) {
        this.state.announcements = this.state.announcements.filter(a => a.id !== id);
        this.saveState();
    }

    // Logging simulated emails
    logMockEmail(booking) {
        const emailContent = `
To: ${booking.email}
Subject: Gift Box Enquiry Received - ${booking.boxName} (${booking.seasonName})

Dear ${booking.customerName},

Thank you for your interest in Rock One Wild Tea. We have received your enquiry regarding:
Product: ${booking.boxName} (Series ${booking.seriesNumber} - ${booking.seasonName})
Enquiry Date: ${booking.bookingDate}
Requested Delivery Date: ${booking.preferredDate || "Not Specified"}

Your Message:
"${booking.message || 'No message provided.'}"

Our concierge team will review your request and get in touch with you via your preferred channel (${booking.socialChannel || 'WhatsApp'}) shortly to confirm final details and availability.

Warm regards,
The Concierge Desk
Rock One Wild Tea
        `.trim();

        this.state.emailLogs.unshift({
            id: `EMAIL-${Date.now().toString().slice(-6)}`,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            to: booking.email,
            subject: `Gift Box Enquiry Received - ${booking.boxName}`,
            body: emailContent
        });
    }

    logMockTourEmail(tourBooking) {
        const emailContent = `
To: ${tourBooking.email}
Subject: Factory Tour Reservation Confirmed - Rock One Wild Tea

Dear ${tourBooking.customerName},

Your booking for an exclusive factory tour has been confirmed.

Tour Package: ${tourBooking.packageName}
Time Slot: ${tourBooking.timeSlot}
Total Guests: ${tourBooking.guests}
Deposit Received: $${tourBooking.depositPaid.toFixed(2)} USD (Secured via Gate Pass Deposit)

We recommend arriving 10 minutes prior to your slot at our grand heritage estate welcome lodge. Please present this confirmation email upon arrival.

We look forward to hosting you in our clouds of green.

With warm regards,
Rock One Wild Tea Tour Coordinators
        `.trim();

        this.state.emailLogs.unshift({
            id: `EMAIL-TOUR-${Date.now().toString().slice(-6)}`,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            to: tourBooking.email,
            subject: `Factory Tour Booking Confirmed - ${tourBooking.timeSlot}`,
            body: emailContent
        });
    }

    // Standard Product Booking Method
    bookProduct(productId, customerData) {
        const product = this.state.products.find(p => p.id === productId);
        if (!product) return { success: false, message: "Product not found" };

        const dateNow = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        // Calculate Expected Delivery Range (3 to 7 days from now)
        const deliveryStart = new Date();
        deliveryStart.setDate(dateNow.getDate() + 3);
        const deliveryEnd = new Date();
        deliveryEnd.setDate(dateNow.getDate() + 7);
        const deliveryRange = `${deliveryStart.toLocaleDateString('en-US', options)} - ${deliveryEnd.toLocaleDateString('en-US', options)}`;

        const bookingId = `PRD-${product.id}-${Date.now().toString().slice(-4)}`;
        
        const newBooking = {
            id: bookingId,
            type: 'product',
            productId: product.id,
            productName: product.name,
            weight: product.weight,
            price: product.price,
            customerName: customerData.name,
            email: customerData.email,
            phone: customerData.phone,
            bookingDate: dateNow.toLocaleDateString('en-US', { ...options, hour: '2-digit', minute: '2-digit' }),
            deliveryRange: deliveryRange,
            preferredDate: customerData.preferredDate || "",
            giftPackaging: !!customerData.giftPackaging,
            giftMessage: customerData.giftMessage || "",
            waxSealColor: customerData.waxSealColor || "Imperial Gold",
            monogramInitials: customerData.monogramInitials || "",
            currency: this.getActiveCurrency(),
            formattedPrice: this.formatCurrency(product.price),
            status: "Pending Verification",
            socialChannel: customerData.socialChannel || "WhatsApp"
        };

        // Add to global bookings list
        this.state.bookings.unshift(newBooking);

        // Generate Automated Email Notification Log
        this.logMockProductEmail(newBooking);

        this.saveState();
        return { success: true, booking: newBooking };
    }

    logMockProductEmail(booking) {
        const emailContent = `
To: ${booking.email}
Subject: Order Confirmed - ${booking.productName} - Rock One Wild Tea

Dear ${booking.customerName},

Thank you for choosing Rock One Wild Tea. We are pleased to confirm your order of:
Product: ${booking.productName} (${booking.weight} Tin)
Unit Value: $${booking.price.toFixed(2)} USD (Direct Invoice Billing)

Expected Handcrafted Delivery Range:
${booking.deliveryRange}

A tea sommelier from our concierge team will reach out to you via ${booking.socialChannel} to coordinate bank transfer proof and shipment processing.

With warm regards,
Rock One Wild Tea Concierge Team
        `.trim();

        this.state.emailLogs.unshift({
            id: `EMAIL-${Date.now().toString().slice(-6)}`,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            to: booking.email,
            subject: `Order Confirmed - ${booking.productName}`,
            body: emailContent
        });
    }

    logMockInquiryEmail(inquiry) {
        const emailContent = `
To: ${inquiry.email}
Cc: axentrat@gmail.com
Subject: Private Reserve Club Allocation Dossier [${inquiry.id}] - Rock One Wild Tea

Dear ${inquiry.fullName},

Thank you for your distinguished application to the Rock One Wild Tea Private Reserve Club.

Inquiry Reference: ${inquiry.id}
Date Registered: ${inquiry.date}
Organization / Cellar: ${inquiry.organization}
Country & Region: ${inquiry.country}
Phone / WhatsApp: ${inquiry.phone}
Preferred Channel: ${inquiry.contactMethod}

Registered Harvest & Reserve Interests:
${inquiry.interests.map(i => `• ${i}`).join('\n')}

Selected Volume & Allocation Tier:
${inquiry.volumeTier}

Special Request / Bespoke Notes:
"${inquiry.notes || 'None specified'}"

Our Master Tea Sommelier & Private Ledger Registrar will review your request and connect with you via ${inquiry.contactMethod} within 24 hours to finalize your allocation certificate.

With distinguished regards,
Rock One Wild Tea Estate Sanctuary
Wallawela, Ettampitiya, Sri Lanka
Direct Desk: +94 77 175 7556 | axentrat@gmail.com
        `.trim();

        this.state.emailLogs.unshift({
            id: `EMAIL-INQ-${Date.now().toString().slice(-6)}`,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            to: `${inquiry.email}, axentrat@gmail.com`,
            subject: `Private Reserve Inquiry Dossier [${inquiry.id}]`,
            body: emailContent
        });
    }

    // ── Cart & Multi-Item Basket Operations ──
    getCart() {
        if (!this.state.cart || !Array.isArray(this.state.cart)) {
            this.state.cart = [];
        }
        return this.state.cart;
    }

    addToCart(itemData, quantity = 1, giftOptions = null) {
        if (!this.state.cart) this.state.cart = [];
        quantity = Math.max(1, parseInt(quantity) || 1);

        // Check if item has custom gift options (monogram, wax seal, custom message)
        const hasCustomGifting = giftOptions && giftOptions.giftPackaging;
        const customKey = hasCustomGifting 
            ? `${itemData.id}_${giftOptions.waxSealColor || 'Gold'}_${giftOptions.monogramInitials || ''}_${giftOptions.giftMessage || ''}`
            : `${itemData.id}_standard`;

        const existingIdx = this.state.cart.findIndex(ci => ci.cartKey === customKey);

        if (existingIdx !== -1) {
            this.state.cart[existingIdx].quantity += quantity;
        } else {
            const cartItem = {
                cartKey: customKey,
                cartId: 'CART_ITEM_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
                id: itemData.id,
                name: itemData.name,
                category: itemData.category || 'Tea Reserve',
                price: parseFloat(itemData.price) || 0,
                weight: itemData.weight || '100g Tin',
                image: itemData.image || 'images/Product.jpeg',
                type: itemData.type || 'product', // 'product' or 'box'
                leafGrade: itemData.leafGrade || '',
                quantity: quantity,
                giftOptions: hasCustomGifting ? {
                    giftPackaging: true,
                    waxSealColor: giftOptions.waxSealColor || 'Imperial Gold',
                    monogramInitials: giftOptions.monogramInitials || '',
                    giftMessage: giftOptions.giftMessage || ''
                } : null
            };
            this.state.cart.push(cartItem);
        }

        this.saveState();
        return { success: true, cart: this.state.cart, totalCount: this.getCartTotalCount() };
    }

    updateCartQuantity(cartKeyOrId, quantity) {
        if (!this.state.cart) return { success: false };
        const idx = this.state.cart.findIndex(ci => ci.cartId === cartKeyOrId || ci.cartKey === cartKeyOrId);
        if (idx === -1) return { success: false };

        quantity = parseInt(quantity);
        if (quantity <= 0) {
            this.state.cart.splice(idx, 1);
        } else {
            this.state.cart[idx].quantity = quantity;
        }

        this.saveState();
        return { success: true, cart: this.state.cart, totalCount: this.getCartTotalCount(), subtotal: this.getCartSubtotal() };
    }

    removeFromCart(cartKeyOrId) {
        if (!this.state.cart) return false;
        this.state.cart = this.state.cart.filter(ci => ci.cartId !== cartKeyOrId && ci.cartKey !== cartKeyOrId);
        this.saveState();
        return true;
    }

    clearCart() {
        this.state.cart = [];
        this.saveState();
        return true;
    }

    getCartSubtotal() {
        if (!this.state.cart || !Array.isArray(this.state.cart)) return 0;
        return this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getCartTotalCount() {
        if (!this.state.cart || !Array.isArray(this.state.cart)) return 0;
        return this.state.cart.reduce((count, item) => count + item.quantity, 0);
    }

    checkoutCart(customerData, paymentMethod = 'online') {
        const cart = this.getCart();
        if (cart.length === 0) return { success: false, message: "Your reserve cart is empty." };

        const totalUSD = this.getCartSubtotal();
        const dateNow = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        const deliveryStart = new Date();
        deliveryStart.setDate(dateNow.getDate() + 3);
        const deliveryEnd = new Date();
        deliveryEnd.setDate(dateNow.getDate() + 7);
        const deliveryRange = `${deliveryStart.toLocaleDateString('en-US', options)} - ${deliveryEnd.toLocaleDateString('en-US', options)}`;

        const orderId = `ORD-CART-${Date.now().toString().slice(-6)}`;
        const activeCurr = this.getActiveCurrency();
        const formattedTotal = this.formatCurrency(totalUSD);

        const itemsBreakdown = cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            formattedPrice: this.formatCurrency(item.price),
            quantity: item.quantity,
            totalPrice: item.price * item.quantity,
            formattedTotalPrice: this.formatCurrency(item.price * item.quantity),
            weight: item.weight,
            image: item.image,
            giftOptions: item.giftOptions
        }));

        const isBank = paymentMethod === 'bank' || paymentMethod === 'both';
        const isOnline = paymentMethod === 'online' || paymentMethod === 'both';

        // 1. Create order record in state.orders
        const newOrder = {
            id: orderId,
            boxName: `Multi-Item Reserve Batch (${cart.length} item${cart.length > 1 ? 's' : ''})`,
            items: itemsBreakdown,
            price: totalUSD,
            currency: activeCurr,
            formattedPrice: formattedTotal,
            customerName: customerData.name,
            email: customerData.email,
            phone: customerData.phone || '',
            address: customerData.address || '',
            country: customerData.country || 'International Delivery',
            createdAt: dateNow.toLocaleDateString('en-US', { ...options, hour: '2-digit', minute: '2-digit' }),
            deliveryRange: deliveryRange,
            paymentMethod: paymentMethod,
            paymentLink: isOnline ? `https://checkout.stripe.com/pay/mock_rockonewildtea_${orderId.toLowerCase()}` : '',
            bankName: "Commercial Bank of Ceylon (Ettampitiya / Bandarawela)",
            accountName: "Rock One Wild Tea (Pvt) Ltd",
            accountNo: "8002345678",
            referenceNote: orderId,
            ownerNote: customerData.notes || "Order placed via Multi-Item Connoisseur Reserve Basket.",
            status: "Order Created"
        };

        if (!this.state.orders) this.state.orders = [];
        this.state.orders.unshift(newOrder);

        // 2. Create linked booking in state.bookings for CRM / Audits
        const newBooking = {
            id: orderId,
            type: 'product',
            productName: `Multi-Item Batch (${cart.reduce((s, c) => s + c.quantity, 0)} items)`,
            items: itemsBreakdown,
            price: totalUSD,
            currency: activeCurr,
            formattedPrice: formattedTotal,
            customerName: customerData.name,
            email: customerData.email,
            phone: customerData.phone || '',
            bookingDate: dateNow.toLocaleDateString('en-US', { ...options, hour: '2-digit', minute: '2-digit' }),
            deliveryRange: deliveryRange,
            address: customerData.address || '',
            status: "Order Created",
            message: customerData.notes || "",
            socialChannel: "Web Basket"
        };

        if (!this.state.bookings) this.state.bookings = [];
        this.state.bookings.unshift(newBooking);

        // 3. Generate mock email notification
        this.logMockCartOrderEmail(newOrder);

        // 4. Empty the cart
        this.clearCart();

        this.saveState();
        return { success: true, order: newOrder, booking: newBooking };
    }

    logMockCartOrderEmail(order) {
        if (!this.state.emailLogs) this.state.emailLogs = [];
        
        const itemsList = (order.items || []).map(it => 
            `  • ${it.quantity}x ${it.name} (${it.weight || 'Tin'}) - ${it.formattedTotalPrice || ('$' + it.totalPrice.toFixed(2))}${it.giftOptions ? ` [Wax Seal: ${it.giftOptions.waxSealColor}, Monogram: ${it.giftOptions.monogramInitials || 'N/A'}]` : ''}`
        ).join('\n');

        const emailContent = `
Dear ${order.customerName},

Thank you for your order with Rock One Wild Tea Estate Sanctuary.
Your multi-item allocation has been reserved with Order ID: ${order.id}.

ORDER SUMMARY:
${itemsList}

Total Amount Due: ${order.formattedPrice || ('$' + order.price.toFixed(2))} USD
Shipping Destination: ${order.address ? `${order.address}, ${order.country}` : order.country}
Estimated Dispatch Range: ${order.deliveryRange}

Payment Mode: ${order.paymentMethod === 'bank' ? 'Bank Cash Deposit' : 'Online Payment Gateway'}
Reference ID: ${order.id}

Our Master Concierge will review your dispatch instructions. For immediate support, reply to this email or reach us on WhatsApp: +94 77 175 7556.

With warm regards,
Rock One Wild Tea Sanctuary Concierge Team
        `.trim();

        this.state.emailLogs.unshift({
            id: `EMAIL-ORD-${Date.now().toString().slice(-6)}`,
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            to: `${order.email}, orders@rockonewildtea.com`,
            subject: `Order Confirmation [${order.id}] — Rock One Wild Tea`,
            body: emailContent
        });
    }

    // Summary statistics for Admin
    getStats() {
        const boxBookings = this.state.bookings.filter(b => b.boxId && !b.type);
        const productBookings = this.state.bookings.filter(b => b.type === 'product');
        const tourBookings = this.state.bookings.filter(b => b.type === 'tour');
        
        const boxSales = boxBookings.reduce((sum, b) => sum + b.price, 0);
        const productSales = productBookings.reduce((sum, b) => sum + b.price, 0);
        const totalDeposits = tourBookings.reduce((sum, b) => sum + b.depositPaid, 0);

        return {
            totalBookingsCount: this.state.bookings.length,
            boxBookingsCount: boxBookings.length,
            totalBoxesCount: this.state.boxes ? this.state.boxes.length : 10,
            productBookingsCount: productBookings.length,
            tourBookingsCount: tourBookings.length,
            inquiriesCount: (this.state.inquiries || []).length,
            availableBoxesCount: this.state.boxes.filter(b => b.status === "Available").length,
            revenue: boxSales + productSales,
            tourRevenue: totalDeposits
        };
    }

    // Synchronize Store state with the Backend SQLite Database in Parallel (Ultra Fast)
    async syncWithBackend() {
        if (typeof TeaFactoryAPI === 'undefined') return;
        try {
            const isOnline = await TeaFactoryAPI.isOnline();
            if (!isOnline) return;

            // Fetch all resources concurrently in 1 parallel batch
            const [prodRes, boxRes, tourRes, revRes, annRes] = await Promise.allSettled([
                TeaFactoryAPI.fetchProducts(),
                TeaFactoryAPI.fetchBoxes(),
                TeaFactoryAPI.fetchTourSlots(),
                TeaFactoryAPI.fetchReviews(),
                TeaFactoryAPI.fetchAnnouncements()
            ]);

            // 1. Sync Products
            if (prodRes.status === 'fulfilled' && Array.isArray(prodRes.value) && prodRes.value.length > 0) {
                this.state.products = prodRes.value;
            }

            // 2. Sync Collector Boxes
            if (boxRes.status === 'fulfilled' && Array.isArray(boxRes.value) && boxRes.value.length > 0) {
                this.state.boxes = boxRes.value.map(b => ({
                    id: b.number,
                    number: b.number,
                    name: b.name,
                    status: b.status.charAt(0).toUpperCase() + b.status.slice(1),
                    price: b.price_usd,
                    allocated_to: b.allocated_to,
                    gold_seal_code: b.gold_seal_code,
                    reserve_flush: b.reserve_flush
                }));
            }

            // 3. Sync Tour Slots
            if (tourRes.status === 'fulfilled' && Array.isArray(tourRes.value) && tourRes.value.length > 0) {
                this.state.tourSlots = tourRes.value.map(s => {
                    const isBooked = (s.booked_seats >= (s.max_capacity || 12)) || s.status === 'Booked' || s.status === 'reserved';
                    const time = s.time_slot || s.timeSlot || s.time || "09:00 AM - 10:00 AM";
                    const pkg = s.name || s.package || "Silver Leaf Tour";
                    return {
                        id: s.id,
                        timeSlot: time,
                        time_slot: time,
                        package: pkg,
                        name: pkg,
                        status: isBooked ? 'Booked' : 'Available',
                        booking: s.booked_seats > 0 ? { customerName: 'Reserved Session', guests: s.booked_seats, package: pkg } : (s.booking || null),
                        tour_date: s.tour_date || 'Daily',
                        price: s.price_usd || s.price || 75.00,
                        max_capacity: s.max_capacity || 12,
                        booked_seats: s.booked_seats || 0
                    };
                });
            }

            // 4. Sync Reviews
            if (revRes.status === 'fulfilled' && revRes.value?.data && Array.isArray(revRes.value.data)) {
                this.state.reviews = revRes.value.data.map(r => ({
                    id: r.id,
                    name: r.author,
                    role: r.role,
                    location: r.location,
                    rating: r.rating,
                    title: r.title,
                    comment: r.content,
                    date: r.date_str
                }));
            }

            // 5. Sync Announcements
            if (annRes.status === 'fulfilled' && Array.isArray(annRes.value) && annRes.value.length > 0) {
                this.state.announcements = annRes.value.map(a => ({
                    id: a.id,
                    tag: a.tag,
                    date: a.date_str,
                    title: a.heading,
                    content: a.content,
                    image: a.image,
                    link: a.link
                }));
            }

            this.saveState();
            console.log('🌿 [Store] Parallel database sync complete.');
        } catch (e) {
            console.warn('🌿 [Store] Sync notice:', e.message);
        }
    }
}

/**
 * REST API Client for Rock One Wild Tea Estate
 * Automatically syncs with backend database at /api/*
 */
const TeaFactoryAPI = {
    baseUrl: (typeof window !== 'undefined' && window.location && window.location.origin) 
        ? (window.location.origin.includes(':3000') || window.location.origin.includes(':5000') || window.location.origin.includes('localhost') 
            ? window.location.origin + '/api' 
            : '/api')
        : '/api',

    async isOnline() {
        try {
            const res = await fetch(`${this.baseUrl}/health`, { method: 'GET', signal: AbortSignal.timeout(2000) });
            const data = await res.json();
            return data && data.status === 'online';
        } catch (e) {
            return false;
        }
    },

    async fetchProducts() {
        try {
            const res = await fetch(`${this.baseUrl}/products`);
            const json = await res.json();
            return json.success ? json.data : null;
        } catch (e) {
            return null;
        }
    },

    async fetchBoxes() {
        try {
            const res = await fetch(`${this.baseUrl}/boxes`);
            const json = await res.json();
            return json.success ? json.data : null;
        } catch (e) {
            return null;
        }
    },

    async fetchTourSlots() {
        try {
            const res = await fetch(`${this.baseUrl}/tours/slots`);
            const json = await res.json();
            return json.success ? json.data : null;
        } catch (e) {
            return null;
        }
    },

    async fetchReviews() {
        try {
            const res = await fetch(`${this.baseUrl}/reviews`);
            const json = await res.json();
            return json.success ? json : null;
        } catch (e) {
            return null;
        }
    },

    async fetchAnnouncements() {
        try {
            const res = await fetch(`${this.baseUrl}/announcements`);
            const json = await res.json();
            return json.success ? json.data : null;
        } catch (e) {
            return null;
        }
    },

    async createOrder(orderPayload) {
        try {
            const res = await fetch(`${this.baseUrl}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload)
            });
            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    },

    async bookTour(bookingPayload) {
        try {
            const res = await fetch(`${this.baseUrl}/tours/book`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingPayload)
            });
            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    },

    async submitInquiry(inquiryPayload) {
        try {
            const res = await fetch(`${this.baseUrl}/inquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inquiryPayload)
            });
            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    },

    async submitReview(reviewPayload) {
        try {
            const res = await fetch(`${this.baseUrl}/reviews`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reviewPayload)
            });
            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    },

    async subscribeNewsletter(email) {
        try {
            const res = await fetch(`${this.baseUrl}/newsletter/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            return await res.json();
        } catch (e) {
            return { success: false, error: e.message };
        }
    }
};

// Export as global so we can access it across modules
if (typeof window !== 'undefined') {
    window.TeaFactoryAPI = TeaFactoryAPI;
    window.TeaFactoryStore = new TeaFactoryStore();
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TeaFactoryStore, TeaFactoryAPI };
}

