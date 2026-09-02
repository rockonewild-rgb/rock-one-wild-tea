/**
 * Rock One Wild Tea - Multi-Language (i18n) Localization Engine
 * Supported Languages: English (en), Sinhala (si), Tamil (ta), Japanese (ja), Chinese (zh), Arabic (ar)
 */

(function(window) {
    'use strict';

    const LANGUAGES = {
        en: { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', dir: 'ltr' },
        si: { code: 'si', name: 'Sinhala', native: 'සිංහල', flag: '🇱🇰', dir: 'ltr' },
        ta: { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇱🇰', dir: 'ltr' },
        ja: { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵', dir: 'ltr' },
        zh: { code: 'zh', name: 'Chinese', native: '简体中文', flag: '🇨🇳', dir: 'ltr' },
        ar: { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇦🇪', dir: 'rtl' }
    };

    const TRANSLATIONS = {
        en: {
            // Navigation
            nav_home: "Home",
            nav_about: "About Us",
            nav_bulletins: "Bulletins",
            nav_gifts: "Gift Catalog",
            nav_products: "Products",
            nav_tours: "Factory Tours",
            nav_gallery: "Gallery",
            nav_order: "My Order",
            nav_concierge: "Concierge Desk",

            // Brand
            brand_name: "ROCK ONE WILD TEA",
            brand_tagline: "CEYLON ARTISANAL ESTATE",

            // Hero Section
            hero_tag: "Single Estate High-Altitude Harvest",
            hero_title: "Pure Mountain Ceylon Artisan Teas",
            hero_subtitle: "Hand-crafted micro-batches harvested at 1,200m+ peak elevation in the mist-veiled sanctuary of Ettampitiya, Sri Lanka.",
            btn_explore_harvest: "Explore Tea Catalog",
            btn_book_tour: "Book Estate Tour",
            btn_reserve_box: "Reserve Numbered Chest",

            // Quick Stats Strip
            stat_elevation: "1,240m+",
            stat_elevation_label: "Highland Terroir",
            stat_harvest: "Micro-Batch",
            stat_harvest_label: "Unblended Single Harvest",
            stat_rating: "4.98 ★",
            stat_rating_label: "Connoisseur Rating",
            stat_artisan: "100%",
            stat_artisan_label: "Single-Estate Pure",

            // Products Section
            section_catalog_tag: "Private Harvest Allocation",
            section_catalog_title: "Single-Estate Tea Collection",
            section_catalog_sub: "Experience our handcrafted whole-leaf loose teas, plucked at dawn and gently rolled by artisanal tea masters.",
            filter_all: "All Teas",
            filter_black: "Black Tea",
            filter_white: "White Tea",
            filter_green: "Green Tea",
            filter_oolong: "Oolong Tea",
            btn_order_now: "Order Leaf",
            btn_view_dossier: "Sommelier Dossier",
            tasting_profile_label: "Tasting Profile:",

            // Gift Boxes Section
            section_gifts_tag: "Numbered Heritage Chests",
            section_gifts_title: "Limited Edition Collector Series",
            section_gifts_sub: "Hand-crafted from aged Ceylon teakwood, each chest is sealed with molten wax and numbered individually for global collectors.",
            gift_scarcity_note: "Only 3 numbered chests remaining in this season's series.",
            btn_inquire_box: "Inquire Chest Allocation",

            // Tours Section
            section_tours_tag: "Sanctuary Experience",
            section_tours_title: "Estate Guided Tours & Tasting Rituals",
            section_tours_sub: "Walk through high-altitude tea bushes, witness traditional artisanal rolling, and enjoy an exclusive masterclass with our sommelier.",
            btn_book_slot: "Reserve Slot",
            tour_deposit_label: "Slot Deposit",

            // Brewing Ritual Section
            section_brewing_tag: "Precision Steeping",
            section_brewing_title: "Sommelier's Brewing Ritual & Live Timer",
            section_brewing_sub: "Calibrated water temperatures, leaf ratios, and interactive steep chime for pure extraction.",
            btn_start_steep: "Start Steep",
            btn_pause_steep: "Pause",
            btn_resume_steep: "Resume",
            btn_reset_steep: "Reset",

            // Bespoke Presentation
            bespoke_title: "Add Bespoke Gift Packaging & Presentation",
            bespoke_complimentary: "Complimentary",
            bespoke_wax_label: "Artisan Wax Seal Color",
            bespoke_monogram_label: "Brass Monogram Plate Engraving",
            bespoke_monogram_hint: "(Optional • Up to 4 Initials)",
            bespoke_note_label: "Hand-Calligraphed Sommelier Note",
            bespoke_preview_crest: "ROCK ONE WILD TEA • SANCTUARY",

            // AI Sommelier Chatbot
            chatbot_title: "AI Tea Sommelier & Concierge",
            chatbot_subtitle: "Ask about rare harvests, private chests, steeping rituals & estate tours",
            chatbot_input_placeholder: "Ask anything about teas, tours, orders...",
            chatbot_welcome: "Greetings! Welcome to **Rock One Wild Tea Estate**. I am your **AI Tea Sommelier & Concierge**.\n\nPlease select any inquiry topic below for instant answers, or type your own question:",

            // Footer
            footer_about_title: "Rock One Wild Tea",
            footer_about_text: "High-altitude artisanal tea sanctuary located in Ettampitiya, Sri Lanka. Dedicated to single-estate unblended tea craft.",
            footer_quick_links: "Explore Sanctuary",
            footer_contact_title: "Concierge & Inquiries",
            footer_rights: "All Rights Reserved. Single-Estate Ceylon Artisanal Reserve.",

            // Common UI
            common_close: "Close",
            common_submit: "Submit",
            common_cancel: "Cancel",
            common_confirm: "Confirm",
            common_currency: "Currency",
            common_language: "Language",
            common_price: "Price",
            common_status: "Status",

            // Dynamic Catalog & Product Cards
            catalog_title: "The Product Catalog",
            catalog_subtitle: "Select from our artisanal standard tins harvested from our high-elevation organic slopes.",
            filter_green_white: "Green & White Tea",
            filter_oolongs: "Oolongs",
            filter_collector: "Collector Chests",
            btn_estate_lookbook: "Estate Lookbook (PDF)",
            placeholder_search_reserves: "Search reserves...",
            catalog_no_reserves: "No tea reserves matching your filters were found.",
            stock_available: "Available",
            stock_limited: "Limited Stock",
            stock_in_stock: "In Stock",
            stock_sold_out: "Sold Out",
            leaf_grade_default: "Single-Estate Reserve",
            stat_water_temp: "Water Temp",
            stat_steep_duration: "Steep Duration",
            stat_leaf_ratio: "Leaf Ratio",
            stat_serving_vessel: "Serving Vessel",
            stat_aroma: "Aroma",
            btn_tasting_radar: "Tasting Radar & Steep Timer",
            btn_add_to_bag: "Add to Bag",
            btn_quick_order: "Quick Order",
            btn_enquire_now: "Enquire Now",
            btn_inquire_again: "Inquire Again",
            status_available: "Available",
            status_reserved: "Reserved",
            status_pending: "Enquiry Pending",
            status_booked: "Reserved",
            price_enquiry_only: "Enquiry Only",
            box_seal_note: "Individually numbered wood chest seal.",
            collector_no_boxes: "No matching collector boxes found.",

            // Sommelier Tasting Radar & Connoisseur Modal
            dossier_modal_badge: "Artisanal Sommelier Dossier",
            dossier_sensory_title: "Sensory Flavour Profile",
            dossier_terroir_title: "Highland Terroir & Provenance",
            dossier_steep_title: "Precision Sommelier Steeping Guide",
            radar_floral: "Floral",
            radar_malty: "Malty",
            radar_sweetness: "Sweetness",
            radar_astringency: "Astringency",
            radar_body: "Body",
            radar_aroma: "Aroma",
            dossier_origin: "Origin",
            dossier_elevation: "Elevation",
            dossier_harvest_type: "Harvest Type",
            dossier_grade: "Leaf Grade",
            dossier_weight: "Net Weight",
            dossier_steep_temp: "Water Temp",
            dossier_steep_time: "Steep Duration",
            dossier_steep_ratio: "Leaf Ratio",
            dossier_steep_vessel: "Best Vessel",
            btn_start_steep_timer: "Start Live Steep Timer",
            btn_pause_steep_timer: "Pause Timer",
            btn_resume_steep_timer: "Resume Timer",
            btn_reset_steep_timer: "Reset Timer",
            timer_standby: "STANDBY",
            timer_steeping: "STEEPING IN PROGRESS...",
            timer_complete: "STEEP COMPLETE! ENJOY YOUR TEA",

            // Brewing Ritual & Live Timer Guide
            brew_section_tag: "Precision Steeping",
            brew_section_title: "Sommelier's Brewing Ritual & Live Timer",
            brew_section_sub: "Unlock the pure essence of our high-altitude leaves with calibrated water temperatures, leaf ratios, and our interactive live countdown chime.",
            brew_tab_black: "Black Tea Reserve",
            brew_tab_white: "White Silver Tips",
            brew_tab_green: "Organic Emerald Green",
            brew_vessel_porcelain: "Porcelain / Clay",
            brew_vessel_glass: "Glass / White Ceramic",
            brew_vessel_celadon: "Glass / Celadon Cup",

            // Gift Catalog & Series Selector
            gift_catalog_tag: "Limited Edition Release",
            gift_catalog_title: "The Gift Catalog",
            gift_catalog_sub: "Reserve an individually numbered, handcrafted cedar wood chest containing single-estate premium harvests.",
            season_branding_badge: "Series Release",
            season_branding_sub: "Select a box number from 1 to 10 below to secure your numbered luxury tea chest. Once booked, it instantly locks for other collectors.",

            // Tours
            tours_header_tag: "Sanctuary Experience",
            tours_header_title: "Estate Guided Tours & Tasting Rituals",
            tours_header_sub: "Walk through high-altitude tea bushes, witness traditional artisanal rolling, and enjoy an exclusive masterclass with our sommelier.",
            tour_morning_title: "Morning Plucking & Dew Harvest",
            tour_morning_desc: "Walk with master pluckers at dawn on our highest slopes and learn two-leaves-and-a-bud selection.",
            tour_factory_title: "Artisanal Factory & Micro-Batch Rolling",
            tour_factory_desc: "Experience hand-rolling tables, calibrated wood-fired drying, and private cupping in our tasting room.",
            tour_sunset_title: "Highland Sunset & Sommelier Cupping",
            tour_sunset_desc: "An exclusive twilight 5-tea sensory masterclass paired with local botanical treats overlooking the valley.",
            tour_duration_label: "Duration",
            tour_capacity_label: "Max Capacity",
            tour_deposit_card_label: "Booking Deposit",
            tour_slots_card_label: "Daily Slots",

            // Cart / Reserve Bag Drawer
            cart_drawer_title: "Your Reserve Bag",
            cart_drawer_subtitle: "Handcrafted high-altitude allocations reserved for direct estate dispatch.",
            cart_qty: "Qty",
            cart_weight_label: "Weight",
            cart_subtotal_label: "Subtotal",
            cart_shipping_disclaimer: "Complimentary luxury estate packaging. Dispatch coordination via personal concierge.",
            btn_proceed_checkout: "Proceed to Allocation Checkout",
            cart_empty_title: "Your Reserve Bag is Empty",
            cart_empty_sub: "Explore our single-estate tea catalog and select your desired artisanal loose-leaf tins or numbered gift chests.",
            btn_browse_catalog: "Browse Tea Catalog",
            btn_clear_cart: "Clear Reserve Bag",
            cart_checkout_title: "Connoisseur Dispatch Checkout",
            cart_name_label: "Full Name *",
            cart_email_label: "Email Address *",
            cart_phone_label: "WhatsApp / Contact Phone *",
            cart_country_label: "Destination Country",
            cart_address_label: "Courier Delivery Address",
            cart_pay_mode_label: "Preferred Payment Mode",
            cart_pay_both: "Both Options Available (Online + Bank Slip)",
            cart_pay_online: "Online Payment (Cards / Gateway)",
            cart_pay_bank: "Bank Cash Deposit (Slip Upload)",
            cart_notes_label: "Special Courier Instructions",
            cart_notes_placeholder: "Optional delivery instructions or notes for concierge...",
            btn_place_order: "Place Reserve Order"
        },

        si: {
            // Navigation
            nav_home: "මුල් පිටුව",
            nav_about: "අප ගැන",
            nav_bulletins: "නිවේදන",
            nav_gifts: "තෑගි එකතුව",
            nav_products: "තේ එකතුව",
            nav_tours: "වතු චාරිකා",
            nav_gallery: "ඡායාරූප",
            nav_order: "මගේ ඇණවුම",
            nav_concierge: "සේවා කවුළුව",

            // Brand
            brand_name: "රොක් වන් වයිල්ඩ් ටී",
            brand_tagline: "ශ්‍රී ලංකා උසස් තේ අස්වැන්න",

            // Hero Section
            hero_tag: "කඳුකර උසස් තනි වතු තේ අස්වැන්න",
            hero_title: "සුවිශේෂී පිරිසිදු ලංකා කඳුකර තේ",
            hero_subtitle: "ශ්‍රී ලංකාවේ ඇට්ටම්පිටිය මීදුම් සපිරි කඳුකරයේ මීටර් 1,200කට වඩා ඉහළින් අතින් නෙලන ලද අසමසම තේ.",
            btn_explore_harvest: "තේ එකතුව බලන්න",
            btn_book_tour: "චාරිකාවක් වෙන්කරන්න",
            btn_reserve_box: "තෑගි පෙට්ටියක් වෙන්කරන්න",

            // Quick Stats Strip
            stat_elevation: "1,240m+",
            stat_elevation_label: "කඳුකර භූමිය",
            stat_harvest: "කුඩා අස්වැන්න",
            stat_harvest_label: "නොකැළැල් පිරිසිදු තේ",
            stat_rating: "4.98 ★",
            stat_rating_label: "පාරිභෝගික ඇගයීම",
            stat_artisan: "100%",
            stat_artisan_label: "පිරිසිදු තනි වතු තේ",

            // Products Section
            section_catalog_tag: "විශේෂිත තේ වෙන්කිරීම්",
            section_catalog_title: "සුවිශේෂී තනි වතු තේ එකතුව",
            section_catalog_sub: "උදෑසන අලුයම අතින් නෙලන ලද සම්පූර්ණ තේ කොළ මගින් නිපදවන සුවිශේෂී තේ වර්ග අත්විඳින්න.",
            filter_all: "සියලුම තේ",
            filter_black: "කළු තේ (Black)",
            filter_white: "සුදු තේ (White)",
            filter_green: "කොළ තේ (Green)",
            filter_oolong: "ඌලොන්ග් තේ",
            btn_order_now: "තේ ඇණවුම් කරන්න",
            btn_view_dossier: "විස්තර පත්‍රිකාව",
            tasting_profile_label: "රස පැතිකඩ:",

            // Gift Boxes Section
            section_gifts_tag: "අංකනය කළ තේක්ක පෙට්ටි",
            section_gifts_title: "සීමිත සංස්කරණ එකතුකරන්නන්ගේ පෙට්ටි",
            section_gifts_sub: "පැරණි ලංකා තේක්ක ලීයෙන් නිමවා, විශේෂ සීල් තබා අංකනය කරන ලද සුවිශේෂී තෑගි පෙට්ටි.",
            gift_scarcity_note: "මෙම වාරයේ ඉතිරිව ඇත්තේ පෙට්ටි 3ක් පමණි.",
            btn_inquire_box: "පෙට්ටියක් විමසන්න",

            // Tours Section
            section_tours_tag: "වතුයාය අත්දැකීම",
            section_tours_title: "කර්මාන්තශාලා චාරිකා සහ තේ රසබැලීම",
            section_tours_sub: "උස් කඳුකර තේ යායන් මැදින් ඇවිද ගොස් පාරම්පරික තේ නිපදවීම දැකබලා ගන්න.",
            btn_book_slot: "වේලාවක් වෙන්කරන්න",
            tour_deposit_label: "අත්තිකාරම් මුදල",

            // Brewing Ritual Section
            section_brewing_tag: "නියමිත වේලාවට තැම්බීම",
            section_brewing_title: "තේ පිළියෙල කිරීමේ මගපෙන්වීම",
            section_brewing_sub: "නියමිත උෂ්ණත්වය සහ කාල ගණකය සමඟ පිරිසිදු තේ රසය ලබා ගන්න.",
            btn_start_steep: "ආරම්භ කරන්න",
            btn_pause_steep: "නවත්වන්න",
            btn_resume_steep: "නැවත අරඹන්න",
            btn_reset_steep: "යළි සකසන්න",

            // Bespoke Presentation
            bespoke_title: "විශේෂිත තෑගි ඇසුරුම සහ සීල් තැබීම එක්කරන්න",
            bespoke_complimentary: "නොමිලේ",
            bespoke_wax_label: "අලංකාර සීල් වර්ණය",
            bespoke_monogram_label: "පිත්තල නාම ඵලකය (Monogram)",
            bespoke_monogram_hint: "(විකල්ප • අකුරු 4 දක්වා)",
            bespoke_note_label: "අතින් ලියන ලද සුබපැතුම් සටහන",
            bespoke_preview_crest: "රොක් වන් වයිල්ඩ් ටී • ශ්‍රී ලංකා",

            // AI Sommelier Chatbot
            chatbot_title: "AI තේ උපදේශක හා සේවා කවුළුව",
            chatbot_subtitle: "තේ වර්ග, චාරිකා සහ ඇණවුම් ගැන ඕනෑම දෙයක් අසන්න",
            chatbot_input_placeholder: "තේ වර්ග, චාරිකා හෝ ඇණවුම් ගැන අසන්න...",
            chatbot_welcome: "ආයුබෝවන්! **රොක් වන් වයිල්ඩ් ටී** වතුයායට සාදරයෙන් පිළිගනිමු. මම ඔබේ **AI තේ උපදේශක** වෙමි.\n\nකරුණාකර පහත මාතෘකාවක් තෝරන්න හෝ ඔබේ ප්‍රශ්නය යොමු කරන්න:",

            // Footer
            footer_about_title: "රොක් වන් වයිල්ඩ් ටී",
            footer_about_text: "ශ්‍රී ලංකාවේ ඇට්ටම්පිටිය කඳුකරයේ පිහිටි අසමසම තනි වතු තේ නිෂ්පාදනාගාරය.",
            footer_quick_links: "වෙබ් අඩවි සබැඳි",
            footer_contact_title: "සම්බන්ධීකරණය",
            footer_rights: "සියලුම හිමිකම් ඇවිරිණි. ශ්‍රී ලංකා උසස් තේ එකතුව.",

            // Common UI
            common_close: "වසන්න",
            common_submit: "යොමු කරන්න",
            common_cancel: "අවලංගු කරන්න",
            common_confirm: "තහවුරු කරන්න",
            common_currency: "මුදල් ඒකකය",
            common_language: "භාෂාව",
            common_price: "මිල",
            common_status: "තත්වය",

            // Dynamic Catalog & Product Cards
            catalog_title: "තේ එකතු නාමාවලිය",
            catalog_subtitle: "අපගේ උස් කඳුකර කාබනික බෑවුම්වලින් නෙලාගත් සුවිශේෂී තේ වර්ග තෝරාගන්න.",
            filter_green_white: "කොළ සහ සුදු තේ",
            filter_oolongs: "ඌලොන්ග් තේ",
            filter_collector: "එකතුකරන්නන්ගේ පෙට්ටි",
            btn_estate_lookbook: "වතුයාය විස්තර පත්‍රිකාව (PDF)",
            placeholder_search_reserves: "තේ වර්ග සොයන්න...",
            catalog_no_reserves: "සොයන ලද නිර්ණායකවලට ගැළපෙන තේ වර්ග හමු නොවීය.",
            stock_available: "ඇත",
            stock_limited: "සීමිත තොග",
            stock_in_stock: "තොග ඇත",
            stock_sold_out: "අවසන් වී ඇත",
            leaf_grade_default: "උසස් තනි වතු තේ",
            stat_water_temp: "ජල උෂ්ණත්වය",
            stat_steep_duration: "තැම්බීමේ කාලය",
            stat_leaf_ratio: "තේ කොළ ප්‍රමාණය",
            stat_serving_vessel: "භාවිතා කළ යුතු බඳුන",
            stat_aroma: "සුවඳ",
            btn_tasting_radar: "රස පැතිකඩ සහ කාල ගණකය",
            btn_add_to_bag: "මල්ලට එක්කරන්න",
            btn_quick_order: "ක්ෂණික ඇණවුම",
            btn_enquire_now: "විමසන්න",
            btn_inquire_again: "යළි විමසන්න",
            status_available: "ඇත",
            status_reserved: "වෙන් කර ඇත",
            status_pending: "විමසීම් බලාපොරොත්තුවෙන්",
            status_booked: "වෙන් කර ඇත",
            price_enquiry_only: "මිල විමසන්න",
            box_seal_note: "තනි අංකනය කරන ලද තේක්ක පෙට්ටි මුද්‍රාව.",
            collector_no_boxes: "ගැළපෙන පෙට්ටි හමු නොවීය.",

            // Sommelier Tasting Radar & Connoisseur Modal
            dossier_modal_badge: "තේ විශේෂඥ විස්තර පත්‍රිකාව",
            dossier_sensory_title: "රස සහ සුවඳ පැතිකඩ",
            dossier_terroir_title: "කඳුකර භූමි ප්‍රභවය",
            dossier_steep_title: "තේ පිළියෙල කිරීමේ මගපෙන්වීම",
            radar_floral: "මල් සුවඳ",
            radar_malty: "මෝල්ට් රසය",
            radar_sweetness: "පැණි රසය",
            radar_astringency: "කහට ගතිය",
            radar_body: "ඝනත්වය",
            radar_aroma: "සුවඳ",
            dossier_origin: "ප්‍රභවය",
            dossier_elevation: "මුහුදු මට්ටමේ සිට උස",
            dossier_harvest_type: "අස්වනු වර්ගය",
            dossier_grade: "තේ වර්ගීකරණය",
            dossier_weight: "ශුද්ධ බර",
            dossier_steep_temp: "ජල උෂ්ණත්වය",
            dossier_steep_time: "තැම්බීමේ කාලය",
            dossier_steep_ratio: "තේ කොළ ප්‍රමාණය",
            dossier_steep_vessel: "සුදුසු බඳුන",
            btn_start_steep_timer: "කාල ගණකය අරඹන්න",
            btn_pause_steep_timer: "නවත්වන්න",
            btn_resume_steep_timer: "යළි අරඹන්න",
            btn_reset_steep_timer: "යළි සකසන්න",
            timer_standby: "සූදානම්",
            timer_steeping: "තැම්බෙමින් පවතී...",
            timer_complete: "තැම්බීම අවසන්! රසවිඳින්න",

            // Brewing Ritual & Live Timer Guide
            brew_section_tag: "නියමිත වේලාවට තැම්බීම",
            brew_section_title: "තේ පිළියෙල කිරීමේ මගපෙන්වීම",
            brew_section_sub: "නියමිත උෂ්ණත්වය සහ කාල ගණකය සමඟ පිරිසිදු තේ රසය ලබා ගන්න.",
            brew_tab_black: "කළු තේ එකතුව",
            brew_tab_white: "සුදු සිල්වර් ටිප්ස්",
            brew_tab_green: "කාබනික කොළ තේ",
            brew_vessel_porcelain: "පෝසිලේන් / මැටි",
            brew_vessel_glass: "වීදුරු / සුදු පිඟන්",
            brew_vessel_celadon: "වීදුරු / සෙලඩොන් කෝප්ප",

            // Gift Catalog & Series Selector
            gift_catalog_tag: "සීමිත නිකුතුව",
            gift_catalog_title: "තෑගි නාමාවලිය",
            gift_catalog_sub: "උසස් තනි වතු තේ අඩංගු අංකනය කරන ලද සුවිශේෂී තේක්ක පෙට්ටි වෙන්කරවා ගන්න.",
            season_branding_badge: "මාලා නිකුතුව",
            season_branding_sub: "ඔබගේ අංකනය කරන ලද තෑගි පෙට්ටිය වෙන්කරවා ගැනීමට 1 සිට 10 දක්වා අංකයක් තෝරන්න.",

            // Tours
            tours_header_tag: "වතුයාය අත්දැකීම",
            tours_header_title: "කර්මාන්තශාලා චාරිකා සහ තේ රසබැලීම",
            tours_header_sub: "උස් කඳුකර තේ යායන් මැදින් ඇවිද ගොස් පාරම්පරික තේ නිපදවීම දැකබලා ගන්න.",
            tour_morning_title: "අලුයම තේ නෙලීමේ චාරිකාව",
            tour_morning_desc: "අපගේ ඉහළම බෑවුම්වල පිනි විසිරුණු අලුයම තේ දළු නෙලීම අත්විඳින්න.",
            tour_factory_title: "කර්මාන්තශාලා තේ නිපදවීම",
            tour_factory_desc: "පාරම්පරික ක්‍රමයට තේ කොළ ඇඹරීම සහ වියළීම දැකබලා ගන්න.",
            tour_sunset_title: "සැඳෑ තේ රසබැලීමේ අත්දැකීම",
            tour_sunset_desc: "කඳුකර හිරු බැසයන සුන්දරත්වය සමඟ විශේෂඥයා සමඟ තේ වර්ග 5ක් රසබලන්න.",
            tour_duration_label: "කාලසීමාව",
            tour_capacity_label: "උපරිම සහභාගීත්වය",
            tour_deposit_card_label: "වෙන්කිරීමේ අත්තිකාරම",
            tour_slots_card_label: "දෛනික වේලාවන්",

            // Cart / Reserve Bag Drawer
            cart_drawer_title: "ඔබේ වෙන්කිරීම් මල්ල",
            cart_drawer_subtitle: "වතුයායෙන් සෘජුවම ලබාදෙන උසස් තේ වෙන්කිරීම්.",
            cart_qty: "ප්‍රමාණය",
            cart_weight_label: "බර",
            cart_subtotal_label: "මුළු එකතුව",
            cart_shipping_disclaimer: "විශේෂිත ඇසුරුම් සහ බෙදාහැරීම සේවා කවුළුව මගින් සම්බන්ධීකරණය කෙරේ.",
            btn_proceed_checkout: "ඇණවුම සම්පූර්ණ කරන්න",
            cart_empty_title: "ඔබේ වෙන්කිරීම් මල්ල හිස්ය",
            cart_empty_sub: "අපගේ තේ එකතුව පරීක්ෂා කර ඔබ කැමති තේ වර්ග මල්ලට එක්කරගන්න.",
            btn_browse_catalog: "තේ එකතුව බලන්න",
            btn_clear_cart: "මල්ල හිස් කරන්න",
            cart_checkout_title: "ඇණවුම් තොරතුරු",
            cart_name_label: "සම්පූර්ණ නම *",
            cart_email_label: "විද්‍යුත් තැපෑල *",
            cart_phone_label: "WhatsApp / දුරකථන අංකය *",
            cart_country_label: "රට",
            cart_address_label: "බෙදාහැරීමේ ලිපිනය",
            cart_pay_mode_label: "ගෙවීම් ක්‍රමය",
            cart_pay_both: "ක්‍රම දෙකම (Online + බැංකු තැන්පතු)",
            cart_pay_online: "Online ගෙවීම් (Cards / Gateway)",
            cart_pay_bank: "බැංකු තැන්පතු (Slip Upload)",
            cart_notes_label: "විශේෂ උපදෙස්",
            cart_notes_placeholder: "බෙදාහැරීම පිළිබඳ විශේෂ සටහන්...",
            btn_place_order: "ඇණවුම තහවුරු කරන්න"
        },

        ta: {
            // Navigation
            nav_home: "முகப்பு",
            nav_about: "எங்களைப் பற்றி",
            nav_bulletins: "அறிவிப்புகள்",
            nav_gifts: "பரிசுத் தொகுப்பு",
            nav_products: "தேயிலை",
            nav_tours: "தோட்ட உலா",
            nav_gallery: "படத்தொகுப்பு",
            nav_order: "எனது பதிவு",
            nav_concierge: "உதவி மையம்",

            // Brand
            brand_name: "ராக் ஒன் வைல்ட் டீ",
            brand_tagline: "இலங்கை உயர்தர தேயிலை தோட்டம்",

            // Hero Section
            hero_tag: "உயர்மலை தனித் தோட்டத் தேயிலை",
            hero_title: "தூய இலங்கை மலைநாட்டு தேயிலை",
            hero_subtitle: "இலங்கையின் எட்டம்பிட்டியில் 1,200 மீற்றர் உயரத்தில் பனி படர்ந்த மலைகளில் கைவினைஞர்களால் தயாரிக்கப்படும் தேயிலை.",
            btn_explore_harvest: "தேயிலை பட்டியல்",
            btn_book_tour: "சுற்றுலா பதிவு",
            btn_reserve_box: "பரிசுப் பெட்டி பதிவு",

            // Quick Stats Strip
            stat_elevation: "1,240m+",
            stat_elevation_label: "மலைநாட்டு தோட்டம்",
            stat_harvest: "சிறிய தொகுப்பு",
            stat_harvest_label: "தூய தனித் தோட்டம்",
            stat_rating: "4.98 ★",
            stat_rating_label: "வாடிக்கையாளர் மதிப்பு",
            stat_artisan: "100%",
            stat_artisan_label: "தூய இயற்கை தேயிலை",

            // Products Section
            section_catalog_tag: "தனித்துவ ஒதுக்கீடு",
            section_catalog_title: "தனித் தோட்ட தேயிலை தொகுப்பு",
            section_catalog_sub: "அதிகாலையில் கையால் பறிக்கப்பட்டு பாரம்பரிய முறையில் தயாரிக்கப்படும் முழு இலை தேயிலை.",
            filter_all: "அனைத்து தேயிலை",
            filter_black: "கருப்பு தேநீர்",
            filter_white: "வெள்ளை தேநீர்",
            filter_green: "பச்சை தேநீர்",
            filter_oolong: "ஊலாங் தேநீர்",
            btn_order_now: "பதிவு செய்க",
            btn_view_dossier: "விவரக் குறிப்பு",
            tasting_profile_label: "சுவை விவரம்:",

            // Gift Boxes Section
            section_gifts_tag: "எண்ணிடப்பட்ட தேக்கு மரப் பெட்டிகள்",
            section_gifts_title: "வரம்புக்குட்பட்ட சிறப்பு பரிசுப் பெட்டிகள்",
            section_gifts_sub: "பழைய இலங்கை தேக்கு மரத்தால் தயாரிக்கப்பட்டு மெழுகு முத்திரையிடப்பட்ட சேகரிப்பாளர் பெட்டிகள்.",
            gift_scarcity_note: "இந்த பருவத்தில் 3 பெட்டிகள் மட்டுமே எஞ்சியுள்ளன.",
            btn_inquire_box: "பெட்டி விவரம் பெறுக",

            // Tours Section
            section_tours_tag: "தோட்ட அனுபவம்",
            section_tours_title: "தொழிற்சாலை சுற்றுலா & தேநீர் சுவைத்தல்",
            section_tours_sub: "உயர்மலை தேயிலை தோட்டங்களை பார்வையிட்டு பாரம்பரிய தேயிலை தயாரிப்பை அனுபவியுங்கள்.",
            btn_book_slot: "நேரத்தை பதிவு செய்",
            tour_deposit_label: "முன்பணம்",

            // Brewing Ritual Section
            section_brewing_tag: "துல்லியமான காய்ச்சுதல்",
            section_brewing_title: "தேநீர் தயாரிக்கும் முறை & நேரக்காட்டி",
            section_brewing_sub: "சரியான வெப்பநிலை மற்றும் நேரத்துடன் தேநீரின் முழுமையான சுவையை அனுபவியுங்கள்.",
            btn_start_steep: "தொடங்கு",
            btn_pause_steep: "நிறுத்து",
            btn_resume_steep: "மீண்டும் தொடங்கு",
            btn_reset_steep: "மீளமை",

            // Bespoke Presentation
            bespoke_title: "சிறப்பு பரிசு அலங்காரம் மற்றும் முத்திரை",
            bespoke_complimentary: "இலவசம்",
            bespoke_wax_label: "மெழுகு முத்திரை நிறம்",
            bespoke_monogram_label: "பித்தளை பெயர் பொறிப்பு",
            bespoke_monogram_hint: "(விருப்பத்திற்குரியது • 4 எழுத்துக்கள் வரை)",
            bespoke_note_label: "கையால் எழுதப்பட்ட வாழ்த்து அட்டை",
            bespoke_preview_crest: "ராக் ஒன் வைல்ட் டீ • இலங்கை",

            // AI Sommelier Chatbot
            chatbot_title: "AI தேநீர் ஆலோசகர் மையம்",
            chatbot_subtitle: "தேயிலை, சுற்றுலா மற்றும் முன்பதிவுகள் பற்றி கேளுங்கள்",
            chatbot_input_placeholder: "தேநீர் அல்லது சுற்றுலா பற்றி கேளுங்கள்...",
            chatbot_welcome: "வணக்கம்! **ராக் ஒன் வைல்ட் டீ** தோட்டத்திற்கு வரவேற்கிறோம். நான் உங்கள் **AI தேநீர் ஆலோசகர்**.\n\nகீழே உள்ள தலைப்பை தேர்வு செய்யவும் அல்லது உங்கள் கேள்வியை கேளுங்கள்:",

            // Footer
            footer_about_title: "ராக் ஒன் வைல்ட் டீ",
            footer_about_text: "இலங்கையின் எட்டம்பிட்டியில் அமைந்துள்ள உயர்தர தனித் தோட்ட தேயிலை உற்பத்தி நிலையம்.",
            footer_quick_links: "விரைவு இணைப்புகள்",
            footer_contact_title: "தொடர்புகளுக்கு",
            footer_rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. இலங்கை உயர்தர தேயிலை.",

            // Common UI
            common_close: "மூடு",
            common_submit: "சமர்ப்பி",
            common_cancel: "ரத்து செய்",
            common_confirm: "உறுதி செய்",
            common_currency: "நாணயம்",
            common_language: "மொழி",
            common_price: "விலை",
            common_status: "நிலை",

            // Dynamic Catalog & Product Cards
            catalog_title: "தேயிலை பட்டியல்",
            catalog_subtitle: "உயர்மலை இயற்கை தோட்டங்களிலிருந்து பறிக்கப்பட்ட உயர்தர தேயிலைகள்.",
            filter_green_white: "பச்சை & வெள்ளை தேநீர்",
            filter_oolongs: "ஊலாங் தேநீர்",
            filter_collector: "பரிசுப் பெட்டிகள்",
            btn_estate_lookbook: "தோட்ட விவரக் குறிப்பு (PDF)",
            placeholder_search_reserves: "தேயிலை தேடுக...",
            catalog_no_reserves: "பொருத்தமான தேயிலை வகைகள் கிடைக்கவில்லை.",
            stock_available: "உள்ளது",
            stock_limited: "குறைந்த அளவு",
            stock_in_stock: "இருப்பில் உள்ளது",
            stock_sold_out: "விற்றுத் தீர்ந்தது",
            leaf_grade_default: "உயர்தர தனித் தோட்டத் தேயிலை",
            stat_water_temp: "நீர் வெப்பநிலை",
            stat_steep_duration: "காய்ச்சும் நேரம்",
            stat_leaf_ratio: "தேயிலை அளவு",
            stat_serving_vessel: "பரிமாறும் பாத்திரம்",
            stat_aroma: "நறுமணம்",
            btn_tasting_radar: "சுவை வரைபடம் & நேரக்காட்டி",
            btn_add_to_bag: "பையில் சேர்க்க",
            btn_quick_order: "உடனடி பதிவு",
            btn_enquire_now: "விசாரி",
            btn_inquire_again: "மீண்டும் விசாரி",
            status_available: "உள்ளது",
            status_reserved: "பதிவு செய்யப்பட்டது",
            status_pending: "விசாரணையில் உள்ளது",
            status_booked: "பதிவு செய்யப்பட்டது",
            price_enquiry_only: "விசாரணைக்கு மட்டும்",
            box_seal_note: "எண்ணிடப்பட்ட தேக்கு மரப் பெட்டி முத்திரை.",
            collector_no_boxes: "பொருத்தமான பெட்டிகள் இல்லை.",

            // Sommelier Tasting Radar & Connoisseur Modal
            dossier_modal_badge: "தேநீர் நிபுணர் விவரக் குறிப்பு",
            dossier_sensory_title: "சுவை மற்றும் நறுமண விவரம்",
            dossier_terroir_title: "தோட்ட நிலப்பரப்பு தோற்றம்",
            dossier_steep_title: "தேநீர் தயாரிக்கும் முறை",
            radar_floral: "மலர் மணம்",
            radar_malty: "மால்ட் சுவை",
            radar_sweetness: "இனிப்பு",
            radar_astringency: "துவர்ப்பு",
            radar_body: "அடர்த்தி",
            radar_aroma: "நறுமணம்",
            dossier_origin: "தோற்றம்",
            dossier_elevation: "உயரம்",
            dossier_harvest_type: "அறுவடை வகை",
            dossier_grade: "தேயிலை தரம்",
            dossier_weight: "நிகர எடை",
            dossier_steep_temp: "நீர் வெப்பநிலை",
            dossier_steep_time: "காய்ச்சும் நேரம்",
            dossier_steep_ratio: "தேயிலை அளவு",
            dossier_steep_vessel: "சிறந்த பாத்திரம்",
            btn_start_steep_timer: "நேரக்காட்டியை தொடங்கு",
            btn_pause_steep_timer: "நிறுத்து",
            btn_resume_steep_timer: "தொடங்கு",
            btn_reset_steep_timer: "மீளமை",
            timer_standby: "தயார்",
            timer_steeping: "காய்ச்சப்படுகிறது...",
            timer_complete: "தயாராகிவிட்டது! சுவையுங்கள்",

            // Brewing Ritual & Live Timer Guide
            brew_section_tag: "துல்லியமான காய்ச்சுதல்",
            brew_section_title: "தேநீர் தயாரிக்கும் முறை & நேரக்காட்டி",
            brew_section_sub: "சரியான வெப்பநிலை மற்றும் நேரத்துடன் தேநீரின் முழுமையான சுவையை அனுபவியுங்கள்.",
            brew_tab_black: "கருப்பு தேநீர் தொகுப்பு",
            brew_tab_white: "வெள்ளை சில்வர் டிப்ஸ்",
            brew_tab_green: "இயற்கை பச்சை தேநீர்",
            brew_vessel_porcelain: "பீங்கான் / களிமண்",
            brew_vessel_glass: "கண்ணாடி / வெள்ளை பீங்கான்",
            brew_vessel_celadon: "கண்ணாடி / செலாடன் கிண்ணம்",

            // Gift Catalog & Series Selector
            gift_catalog_tag: "சிறப்பு வெளியீடு",
            gift_catalog_title: "பரிசுப் பெட்டிகள் பட்டியல்",
            gift_catalog_sub: "உயர்தர தேயிலை அடங்கிய எண்ணிடப்பட்ட தேக்கு மரப் பெட்டிகளை பதிவு செய்யுங்கள்.",
            season_branding_badge: "தொடர் வெளியீடு",
            season_branding_sub: "உங்கள் பரிசுப் பெட்டியைப் பெற 1 முதல் 10 வரை ஒரு எண்ணைத் தேர்ந்தெடுக்கவும்.",

            // Tours
            tours_header_tag: "தோட்ட அனுபவம்",
            tours_header_title: "தொழிற்சாலை சுற்றுலா & தேநீர் சுவைத்தல்",
            tours_header_sub: "உயர்மலை தேயிலை தோட்டங்களை பார்வையிட்டு பாரம்பரிய தேயிலை தயாரிப்பை அனுபவியுங்கள்.",
            tour_morning_title: "காலை தேயிலை பறிக்கும் நிகழ்வு",
            tour_morning_desc: "அதிகாலையில் பனி படர்ந்த மலைகளில் தேயிலை பறிப்பதை அனுபவியுங்கள்.",
            tour_factory_title: "தொழிற்சாலை தயாரிப்பு முறை",
            tour_factory_desc: "பாரம்பரிய முறையில் தேயிலை உருட்டுதல் மற்றும் உலர்த்துதல் நிகழ்வை பார்வையிடுங்கள்.",
            tour_sunset_title: "மாலை தேநீர் சுவைக்கும் நிகழ்வு",
            tour_sunset_desc: "மலைகளின் அழகை ரசித்தவாறு 5 வகையான பிரத்யேக தேநீர்களை சுவைத்து மகிழுங்கள்.",
            tour_duration_label: "கால அளவு",
            tour_capacity_label: "அதிகபட்ச நபர்கள்",
            tour_deposit_card_label: "முன்பதிவு தொகை",
            tour_slots_card_label: "தினசரி நேரம்",

            // Cart / Reserve Bag Drawer
            cart_drawer_title: "உங்கள் பதிவுப் பை",
            cart_drawer_subtitle: "தோட்டத்திலிருந்து நேரடியாக அனுப்பப்படும் பிரத்யேக தேயிலை.",
            cart_qty: "அளவு",
            cart_weight_label: "எடை",
            cart_subtotal_label: "மொத்தத் தொகை",
            cart_shipping_disclaimer: "சிறப்பு அலங்கார பெட்டி மற்றும் விநியோகம் உதவி மையம் மூலம் ஒருங்கிணைக்கப்படும்.",
            btn_proceed_checkout: "பதிவை முடிக்க",
            cart_empty_title: "உங்கள் பதிவுப் பை காலியாக உள்ளது",
            cart_empty_sub: "தேயிலை பட்டியலை பார்த்து உங்களுக்கு பிடித்த தேயிலையை பையில் சேர்க்கவும்.",
            btn_browse_catalog: "தேயிலை பட்டியலை பார்க்க",
            btn_clear_cart: "பையை காலியாக்கு",
            cart_checkout_title: "பதிவு விவரங்கள்",
            cart_name_label: "முழுப் பெயர் *",
            cart_email_label: "மின்னஞ்சல் *",
            cart_phone_label: "WhatsApp / தொலைபேசி எண் *",
            cart_country_label: "நாடு",
            cart_address_label: "விநியோக முகவரி",
            cart_pay_mode_label: "பணம் செலுத்தும் முறை",
            cart_pay_both: "இரண்டு முறைகளும் (Online + வங்கி வைப்பு)",
            cart_pay_online: "ஆன்லைன் கட்டணம் (Cards / Gateway)",
            cart_pay_bank: "வங்கி வைப்பு (சீட்டு பதிவேற்றம்)",
            cart_notes_label: "சிறப்பு குறிப்புகள்",
            cart_notes_placeholder: "விநியோகம் தொடர்பான குறிப்புகள்...",
            btn_place_order: "பதிவை உறுதி செய்"
        },

        ja: {
            // Navigation
            nav_home: "ホーム",
            nav_about: "当園について",
            nav_bulletins: "会報・お知らせ",
            nav_gifts: "木箱ギフト",
            nav_products: "茶葉コレクション",
            nav_tours: "茶園見学ツアー",
            nav_gallery: "ギャラリー",
            nav_order: "注文照会",
            nav_concierge: "コンシェルジュ",

            // Brand
            brand_name: "ロック・ワン・ワイルドティー",
            brand_tagline: "スリランカ極上単一茶園",

            // Hero Section
            hero_tag: "標高1,200m超 単一茶園の極上収穫",
            hero_title: "雲上のセイロン極上クラフトティー",
            hero_subtitle: "スリランカ・エッタンピティヤの霧深きサンクチュアリで手摘みされた、純粋無垢なシングルエステート・マイクロバッチ。",
            btn_explore_harvest: "茶葉コレクションを見る",
            btn_book_tour: "茶園ツアーを予約",
            btn_reserve_box: "シリアル刻印木箱を予約",

            // Quick Stats Strip
            stat_elevation: "1,240m+",
            stat_elevation_label: "高山テロワール",
            stat_harvest: "マイクロバッチ",
            stat_harvest_label: "無ブレンド単一収穫",
            stat_rating: "4.98 ★",
            stat_rating_label: "愛好家評価",
            stat_artisan: "100%",
            stat_artisan_label: "単一茶園純正品",

            // Products Section
            section_catalog_tag: "限定プライベート収穫",
            section_catalog_title: "単一茶園プレミアムコレクション",
            section_catalog_sub: "夜明け前に手摘みされ、茶師の手揉みによって生まれた芳醇なホールリーフをご堪能ください。",
            filter_all: "すべて",
            filter_black: "ブラックティー",
            filter_white: "ホワイトティー (白茶)",
            filter_green: "グリーンティー (緑茶)",
            filter_oolong: "ウーロン茶",
            btn_order_now: "茶葉を注文",
            btn_view_dossier: "テイスティング詳細",
            tasting_profile_label: "風味プロファイル:",

            // Gift Boxes Section
            section_gifts_tag: "シリアル刻印チークウッド木箱",
            section_gifts_title: "限定コレクターズチェスト",
            section_gifts_sub: "伝統のセイロンチーク木箱に職人の封蝋シーリングと個別シリアルナンバーを刻んだ限定品。",
            gift_scarcity_note: "今シーズンの割り当ては残り3個のみです。",
            btn_inquire_box: "木箱の割り当てを問い合わせる",

            // Tours Section
            section_tours_tag: "茶園体験",
            section_tours_title: "茶園見学ツアー＆テイスティング",
            section_tours_sub: "高地茶園を散策し、伝統の製茶工程を見学後、専属ソムリエとの特別試飲をお楽しみいただけます。",
            btn_book_slot: "日時を予約",
            tour_deposit_label: "予約保証金",

            // Brewing Ritual Section
            section_brewing_tag: "極上の抽出",
            section_brewing_title: "ソムリエの抽出ガイド＆タイマー",
            section_brewing_sub: "正確な湯温と茶葉比率、専用カウントダウンで豊かなアロマを最大限に引き出します。",
            btn_start_steep: "抽出開始",
            btn_pause_steep: "一時停止",
            btn_resume_steep: "再開",
            btn_reset_steep: "リセット",

            // Bespoke Presentation
            bespoke_title: "特製ギフト包装・封蝋シーリングの追加",
            bespoke_complimentary: "無料サービス",
            bespoke_wax_label: "シーリングワックスの色",
            bespoke_monogram_label: "真鍮プレートのイニシャル刻印",
            bespoke_monogram_hint: "(任意 • 最大4文字)",
            bespoke_note_label: "カリグラフィー手書きメッセージ",
            bespoke_preview_crest: "ROCK ONE WILD TEA • SANCTUARY",

            // AI Sommelier Chatbot
            chatbot_title: "AIティーソムリエ＆コンシェルジュ",
            chatbot_subtitle: "茶葉、木箱ギフト、抽出方法、見学ツアーについてお答えします",
            chatbot_input_placeholder: "茶葉やツアーについて質問を入力...",
            chatbot_welcome: "ご来訪ありがとうございます。**ロック・ワン・ワイルドティー茶園**へようこそ。私は**AIティーソムリエ**です。\n\n以下のトピックを選択いただくか、直接ご質問をご入力ください：",

            // Footer
            footer_about_title: "ロック・ワン・ワイルドティー",
            footer_about_text: "スリランカのエッタンピティヤ高山に佇む、最高級シングルエステート紅茶の聖地。",
            footer_quick_links: "クイックリンク",
            footer_contact_title: "コンシェルジュデスク",
            footer_rights: "All Rights Reserved. Ceylon Artisanal Tea Reserve.",

            // Common UI
            common_close: "閉じる",
            common_submit: "送信する",
            common_cancel: "キャンセル",
            common_confirm: "確認",
            common_currency: "通貨",
            common_language: "言語",
            common_price: "価格",
            common_status: "状態",

            // Dynamic Catalog & Product Cards
            catalog_title: "茶葉カタログ",
            catalog_subtitle: "標高1,200m以上の有機茶園で手摘みされた、極上のシングルエステート銘茶。",
            filter_green_white: "緑茶＆白茶",
            filter_oolongs: "烏龍茶",
            filter_collector: "コレクター木箱",
            btn_estate_lookbook: "茶園ルックブック (PDF)",
            placeholder_search_reserves: "茶葉を検索...",
            catalog_no_reserves: "該当する銘茶が見つかりませんでした。",
            stock_available: "在庫あり",
            stock_limited: "残りわずか",
            stock_in_stock: "入荷済み",
            stock_sold_out: "完売",
            leaf_grade_default: "単一茶園特選等級",
            stat_water_temp: "湯温",
            stat_steep_duration: "抽出時間",
            stat_leaf_ratio: "茶葉比率",
            stat_serving_vessel: "推奨茶器",
            stat_aroma: "アロマ",
            btn_tasting_radar: "テイスティング評価＆タイマー",
            btn_add_to_bag: "バッグに追加",
            btn_quick_order: "スピード注文",
            btn_enquire_now: "問い合わせる",
            btn_inquire_again: "再度問い合わせる",
            status_available: "受付中",
            status_reserved: "予約済み",
            status_pending: "確認待ち",
            status_booked: "予約済み",
            price_enquiry_only: "お問い合わせ限定",
            box_seal_note: "シリアルナンバー刻印木箱。",
            collector_no_boxes: "該当する木箱が見つかりませんでした。",

            // Sommelier Tasting Radar & Connoisseur Modal
            dossier_modal_badge: "茶師ソムリエ鑑定カルテ",
            dossier_sensory_title: "風味・アロマレーダー",
            dossier_terroir_title: "高山テロワールと茶園原産地",
            dossier_steep_title: "ソムリエ推奨・精密抽出ガイド",
            radar_floral: "フローラル",
            radar_malty: "モルティ",
            radar_sweetness: "甘み",
            radar_astringency: "渋み",
            radar_body: "コク",
            radar_aroma: "香り",
            dossier_origin: "原産地",
            dossier_elevation: "標高",
            dossier_harvest_type: "収穫方法",
            dossier_grade: "茶葉等級",
            dossier_weight: "内容量",
            dossier_steep_temp: "湯温",
            dossier_steep_time: "抽出時間",
            dossier_steep_ratio: "茶葉比率",
            dossier_steep_vessel: "最適茶器",
            btn_start_steep_timer: "抽出タイマーを開始",
            btn_pause_steep_timer: "一時停止",
            btn_resume_steep_timer: "再開",
            btn_reset_steep_timer: "リセット",
            timer_standby: "スタンバイ",
            timer_steeping: "抽出中...",
            timer_complete: "抽出完了！お楽しみください",

            // Brewing Ritual & Live Timer Guide
            brew_section_tag: "極上の抽出",
            brew_section_title: "ソムリエの抽出ガイド＆タイマー",
            brew_section_sub: "正確な湯温と茶葉比率、専用カウントダウンで豊かなアロマを最大限に引き出します。",
            brew_tab_black: "ブラックティー銘茶",
            brew_tab_white: "ホワイト・シルバーティップス",
            brew_tab_green: "オーガニック・エメラルドグリーン",
            brew_vessel_porcelain: "磁器・陶器",
            brew_vessel_glass: "耐熱ガラス・白磁",
            brew_vessel_celadon: "耐熱ガラス・青磁",

            // Gift Catalog & Series Selector
            gift_catalog_tag: "限定リリース",
            gift_catalog_title: "木箱ギフトカタログ",
            gift_catalog_sub: "極上の単一茶園茶葉を納めた、職人手作りのシリアル刻印木箱を予約いただけます。",
            season_branding_badge: "シリーズリリース",
            season_branding_sub: "ご希望の木箱番号（1〜10）を選択して、限定チェストを確保してください。",

            // Tours
            tours_header_tag: "茶園体験",
            tours_header_title: "茶園見学ツアー＆テイスティング",
            tours_header_sub: "高地茶園を散策し、伝統の製茶工程を見学後、専属ソムリエとの特別試飲をお楽しみいただけます。",
            tour_morning_title: "朝露の手摘み体験ツアー",
            tour_morning_desc: "朝霧のなか茶師とともに最上部斜面を歩き、一芯二葉の摘み取りを体験します。",
            tour_factory_title: "職人製茶＆手揉みマスタークラス",
            tour_factory_desc: "手揉み工程と薪火乾燥を見学し、プライベートカッピングルームで試飲します。",
            tour_sunset_title: "夕暮れの高山サンセット試飲会",
            tour_sunset_desc: "渓谷の絶景を望みながら、5種類の厳選茶葉と特製スイーツのマリアージュを堪能。",
            tour_duration_label: "所要時間",
            tour_capacity_label: "定員",
            tour_deposit_card_label: "予約保証金",
            tour_slots_card_label: "開催枠",

            // Cart / Reserve Bag Drawer
            cart_drawer_title: "リザーブバッグ",
            cart_drawer_subtitle: "茶園から直送される限定収穫の茶葉コレクション。",
            cart_qty: "数量",
            cart_weight_label: "内容量",
            cart_subtotal_label: "小計",
            cart_shipping_disclaimer: "特製ラグジュアリー包装無料。専任コンシェルジュが発送を手配します。",
            btn_proceed_checkout: "ご注文手続きへ進む",
            cart_empty_title: "リザーブバッグは空です",
            cart_empty_sub: "茶葉コレクションをご覧いただき、お好みの茶葉や木箱をお選びください。",
            btn_browse_catalog: "茶葉カタログを見る",
            btn_clear_cart: "バッグを空にする",
            cart_checkout_title: "ご注文情報入力",
            cart_name_label: "お名前 *",
            cart_email_label: "メールアドレス *",
            cart_phone_label: "お電話番号 / WhatsApp *",
            cart_country_label: "お届け先の国",
            cart_address_label: "配送先ご住所",
            cart_pay_mode_label: "お支払い方法",
            cart_pay_both: "両方利用可能（オンライン決済＋銀行振込）",
            cart_pay_online: "オンライン決済（カード / ゲートウェイ）",
            cart_pay_bank: "銀行振込（振込明細アップロード）",
            cart_notes_label: "配送に関するご要望",
            cart_notes_placeholder: "コンシェルジュへのメッセージや配送希望日時など...",
            btn_place_order: "注文を確定する"
        },

        zh: {
            // Navigation
            nav_home: "首页",
            nav_about: "关于我们",
            nav_bulletins: "庄园公报",
            nav_gifts: "木盒礼赞",
            nav_products: "名茶甄选",
            nav_tours: "庄园之旅",
            nav_gallery: "画廊",
            nav_order: "订单查询",
            nav_concierge: "贵宾礼宾台",

            // Brand
            brand_name: "磐石野生原叶茶",
            brand_tagline: "斯里兰卡高山手工庄园",

            // Hero Section
            hero_tag: "海拔1200米以上单一眼叶珍藏",
            hero_title: "纯正斯里兰卡高山手工茶",
            hero_subtitle: "产自斯里兰卡埃坦皮蒂亚常年云雾缭绕的高山茶园，由大师手工少量古法精制。",
            btn_explore_harvest: "探索茶品系列",
            btn_book_tour: "预约庄园之旅",
            btn_reserve_box: "预订编号收藏木盒",

            // Quick Stats Strip
            stat_elevation: "1,240m+",
            stat_elevation_label: "高山风土",
            stat_harvest: "微量采摘",
            stat_harvest_label: "纯单一庄园无拼配",
            stat_rating: "4.98 ★",
            stat_rating_label: "鉴赏家好评",
            stat_artisan: "100%",
            stat_artisan_label: "纯正单一茶园",

            // Products Section
            section_catalog_tag: "私人收成配额",
            section_catalog_title: "单一庄园顶级茶品系列",
            section_catalog_sub: "清晨手工初采嫩芽，经传统手法轻柔揉捻，品味大自然的馥郁甘甜。",
            filter_all: "全部茶品",
            filter_black: "红茶系列",
            filter_white: "白茶银针",
            filter_green: "高山绿茶",
            filter_oolong: "岩香乌龙",
            btn_order_now: "立即订购",
            btn_view_dossier: "品鉴档案",
            tasting_profile_label: "风味特征:",

            // Gift Boxes Section
            section_gifts_tag: "独立编号柚木茶盒",
            section_gifts_title: "限量版收藏家珍藏系列",
            section_gifts_sub: "采用锡兰陈年柚木纯手工制作，经熔蜡火漆封印，配专属独立编号。",
            gift_scarcity_note: "本季珍藏仅剩最后 3 盒配额。",
            btn_inquire_box: "咨询收藏木盒",

            // Tours Section
            section_tours_tag: "庄园朝圣体验",
            section_tours_title: "茶园探秘与大师品茗礼仪",
            section_tours_sub: "漫步高山茶垄，探访传统制茶车间，与品茶大师共赴私享品鉴会。",
            btn_book_slot: "预约时段",
            tour_deposit_label: "预约席位定金",

            // Brewing Ritual Section
            section_brewing_tag: "精准冲泡",
            section_brewing_title: "侍茶师冲泡礼仪与即时计时",
            section_brewing_sub: "精准校准水温与叶水比例，伴随提示音萃取纯净茶汤甘露。",
            btn_start_steep: "开始冲泡",
            btn_pause_steep: "暂停",
            btn_resume_steep: "继续",
            btn_reset_steep: "重置",

            // Bespoke Presentation
            bespoke_title: "定制礼品包装与火漆封印",
            bespoke_complimentary: "尊享礼遇",
            bespoke_wax_label: "手工火漆印章颜色",
            bespoke_monogram_label: "黄铜铭牌姓名首字母刻印",
            bespoke_monogram_hint: "(可选 • 最多4个大写字母)",
            bespoke_note_label: "手写书法祝福卡片",
            bespoke_preview_crest: "ROCK ONE WILD TEA • SANCTUARY",

            // AI Sommelier Chatbot
            chatbot_title: "AI 侍茶大师与贵宾礼宾台",
            chatbot_subtitle: "随时咨询珍稀好茶、庄园见学与冲泡艺术",
            chatbot_input_placeholder: "输入关于茶品、庄园或订单的问题...",
            chatbot_welcome: "您好！欢迎莅临 **磐石野生原叶茶庄园**。我是您的 **AI 侍茶大师**。\n\n请点击下方主题或直接输入您的问题：",

            // Footer
            footer_about_title: "磐石野生原叶茶",
            footer_about_text: "位于斯里兰卡埃坦皮蒂亚的高山手作茶圣地，专注单一庄园原叶茶。",
            footer_quick_links: "快捷导航",
            footer_contact_title: "礼宾与订购",
            footer_rights: "版权所有。斯里兰卡单一茶园原叶典藏。",

            // Common UI
            common_close: "关闭",
            common_submit: "提交",
            common_cancel: "取消",
            common_confirm: "确认",
            common_currency: "币种",
            common_language: "语言",
            common_price: "价格",
            common_status: "状态",

            // Dynamic Catalog & Product Cards
            catalog_title: "名茶甄选目录",
            catalog_subtitle: "精选采自高海拔有机斜坡的纯正单一庄园手工原叶茶。",
            filter_green_white: "绿茶与白茶",
            filter_oolongs: "乌龙茶系列",
            filter_collector: "收藏家木盒",
            btn_estate_lookbook: "庄园典藏册 (PDF)",
            placeholder_search_reserves: "搜索名茶珍藏...",
            catalog_no_reserves: "未找到匹配筛选条件的名茶珍藏。",
            stock_available: "有现货",
            stock_limited: "限量供应",
            stock_in_stock: "现货充足",
            stock_sold_out: "已售罄",
            leaf_grade_default: "单一茶园特级典藏",
            stat_water_temp: "适宜水温",
            stat_steep_duration: "冲泡时间",
            stat_leaf_ratio: "茶水比",
            stat_serving_vessel: "推荐茶具",
            stat_aroma: "香气指数",
            btn_tasting_radar: "风味雷达与冲泡计时",
            btn_add_to_bag: "加入选购袋",
            btn_quick_order: "快速预订",
            btn_enquire_now: "咨询预订",
            btn_inquire_again: "再次咨询",
            status_available: "可预订",
            status_reserved: "已预订",
            status_pending: "咨询中",
            status_booked: "已预订",
            price_enquiry_only: "询价预订",
            box_seal_note: "独立编号柚木茶盒火漆封印。",
            collector_no_boxes: "未找到匹配的木盒。",

            // Sommelier Tasting Radar & Connoisseur Modal
            dossier_modal_badge: "侍茶大师品鉴档案",
            dossier_sensory_title: "感官风味雷达图",
            dossier_terroir_title: "高山风土与原产地",
            dossier_steep_title: "侍茶师精准冲泡指南",
            radar_floral: "花香",
            radar_malty: "麦香",
            radar_sweetness: "甘甜",
            radar_astringency: "茶涩",
            radar_body: "醇厚",
            radar_aroma: "香气",
            dossier_origin: "产区",
            dossier_elevation: "海拔",
            dossier_harvest_type: "采摘类型",
            dossier_grade: "茶叶等级",
            dossier_weight: "净含量",
            dossier_steep_temp: "适宜水温",
            dossier_steep_time: "冲泡时间",
            dossier_steep_ratio: "茶水比",
            dossier_steep_vessel: "推荐茶器",
            btn_start_steep_timer: "启动冲泡计时器",
            btn_pause_steep_timer: "暂停计时",
            btn_resume_steep_timer: "继续计时",
            btn_reset_steep_timer: "重置计时",
            timer_standby: "待机",
            timer_steeping: "正在精准冲泡中...",
            timer_complete: "冲泡完成！请品茗",

            // Brewing Ritual & Live Timer Guide
            brew_section_tag: "精准冲泡",
            brew_section_title: "侍茶师冲泡礼仪与即时计时",
            brew_section_sub: "精准校准水温与叶水比例，伴随提示音萃取纯净茶汤甘露。",
            brew_tab_black: "高山红茶珍藏",
            brew_tab_white: "银针白茶",
            brew_tab_green: "有机翡翠绿茶",
            brew_vessel_porcelain: "白瓷 / 紫砂",
            brew_vessel_glass: "耐热玻璃 / 盖碗",
            brew_vessel_celadon: "青瓷品茗杯",

            // Gift Catalog & Series Selector
            gift_catalog_tag: "限量发行",
            gift_catalog_title: "木盒礼赞目录",
            gift_catalog_sub: "预订手工制作的独立编号柚木茶盒，内装单一庄园顶级收获。",
            season_branding_badge: "系列发行",
            season_branding_sub: "在下方选择 1 到 10 之间的茶盒编号锁定您的专属茶盒。一旦选定即刻为其他藏家锁定。",

            // Tours
            tours_header_tag: "庄园朝圣体验",
            tours_header_title: "茶园探秘与大师品茗礼仪",
            tours_header_sub: "漫步高山茶垄，探访传统制茶车间，与品茶大师共赴私享品鉴会。",
            tour_morning_title: "清晨采茶与朝露体验",
            tour_morning_desc: "破晓时分与采茶大师共攀高山茶垄，体验一芽二叶的严格初采。",
            tour_factory_title: "手工古法揉捻与工坊参访",
            tour_factory_desc: "见证木桌手工揉捻与木炭恒温干燥，并在品茗室体验杯测。",
            tour_sunset_title: "高山日落与五款名茶品鉴",
            tour_sunset_desc: "暮色中俯瞰山谷云海，品鉴五款稀世好茶并搭配当地精致茶点。",
            tour_duration_label: "活动时长",
            tour_capacity_label: "每组人数",
            tour_deposit_card_label: "席位定金",
            tour_slots_card_label: "每日场次",

            // Cart / Reserve Bag Drawer
            cart_drawer_title: "您的选购珍藏袋",
            cart_drawer_subtitle: "由高山庄园直接配额直邮的手工原叶典藏。",
            cart_qty: "数量",
            cart_weight_label: "重量",
            cart_subtotal_label: "商品小计",
            cart_shipping_disclaimer: "尊享庄园定制奢华包装。由专属礼宾团队协调直邮配送。",
            btn_proceed_checkout: "前往结算中心",
            cart_empty_title: "您的选购袋暂无商品",
            cart_empty_sub: "欢迎探索我们的单一茶园产品目录，挑选心仪的原叶茶罐或编号茶盒。",
            btn_browse_catalog: "浏览名茶目录",
            btn_clear_cart: "清空选购袋",
            cart_checkout_title: "订购与配送信息",
            cart_name_label: "贵宾姓名 *",
            cart_email_label: "电子邮箱 *",
            cart_phone_label: "联系电话 / WhatsApp *",
            cart_country_label: "目的国家/地区",
            cart_address_label: "配送详细地址",
            cart_pay_mode_label: "首选支付方式",
            cart_pay_both: "支持双通道（在线网关 + 银行转账）",
            cart_pay_online: "在线安全支付（信用卡 / 网关）",
            cart_pay_bank: "银行现金转账（上传回执单）",
            cart_notes_label: "配送特殊要求",
            cart_notes_placeholder: "如指定配送时间或给礼宾团队的备注...",
            btn_place_order: "确认提交订单"
        },

        ar: {
            // Navigation
            nav_home: "الرئيسية",
            nav_about: "من نحن",
            nav_bulletins: "النشرات",
            nav_gifts: "صناديق الهدايا",
            nav_products: "تشكيلة الشاي",
            nav_tours: "جولات المصنع",
            nav_gallery: "معرض الصور",
            nav_order: "طلبي",
            nav_concierge: "مكتب الكونسيرج",

            // Brand
            brand_name: "روك ون وايلد تي",
            brand_tagline: "مزارع الشاي السيلاني الحرفي الفاخر",

            // Hero Section
            hero_tag: "حصاد مزارع المرتفعات النقية بأعلى قمم سريلانكا",
            hero_title: "شاي سيلاني جبلي حرفي نقي وفاخر",
            hero_subtitle: "شاي يدوي يُقطف بعناية على ارتفاع يتجاوز 1,200 متر في مرتفعات إيتامبيتيا الساحرة بسريلانكا.",
            btn_explore_harvest: "استكشف كتالوج الشاي",
            btn_book_tour: "احجز جولة في المزرعة",
            btn_reserve_box: "احجز صندوق الخشب المرقم",

            // Quick Stats Strip
            stat_elevation: "+1,240م",
            stat_elevation_label: "مرتفعات نقية",
            stat_harvest: "دفعات نادرة",
            stat_harvest_label: "مزرعة فردية غير مخلوطة",
            stat_rating: "4.98 ★",
            stat_rating_label: "تقييم المتذوقين",
            stat_artisan: "100%",
            stat_artisan_label: "نقي وحرفي فاخر",

            // Products Section
            section_catalog_tag: "حصص الحصاد الخاص",
            section_catalog_title: "مجموعة الشاي من مزرعة فردية",
            section_catalog_sub: "استمتع بأوراق الشاي الكاملة المقطوفة فجراً والمصنوعة يدوياً بأعلى معايير الحرفية السيلانية.",
            filter_all: "كل الأنواع",
            filter_black: "الشاي الأسود",
            filter_white: "الشاي الأبيض (سيلفر تيبس)",
            filter_green: "الشاي الأخضر الجبلي",
            filter_oolong: "شاي الأولونغ",
            btn_order_now: "اطلب الشاي",
            btn_view_dossier: "ملف التذوق",
            tasting_profile_label: "نكهات التذوق:",

            // Gift Boxes Section
            section_gifts_tag: "صناديق خشب الساج المرقمة",
            section_gifts_title: "إصدارات حصرية لهواة الجمع والمقتنين",
            section_gifts_sub: "صُنعت يدويًا من خشب الساج السيلاني العتيق، مع ختم شمعي ملكي وأرقام تسلسلية حصرية.",
            gift_scarcity_note: "لم يتبق سوى 3 صناديق مرقمة فقط لهذا الموسم.",
            btn_inquire_box: "استفسر عن حصة الصندوق",

            // Tours Section
            section_tours_tag: "تجربة المزرعة الفاخرة",
            section_tours_title: "جولات المصنع وجلسات تذوق الشاي",
            section_tours_sub: "تجوّل بين مزارع المرتفعات واشهد صناعة الشاي الحرفية واستمتع بجلسة تذوق خاصة مع خبير الشاي.",
            btn_book_slot: "احجز موعداً",
            tour_deposit_label: "عربون الحجز",

            // Brewing Ritual Section
            section_brewing_tag: "دقة التحضير",
            section_brewing_title: "دليل وعداد تحضير الشاي المثالي",
            section_brewing_sub: "درجات حرارة مضبوطة ونسب أوراق دقيقة مع عداد وقت لاستخلاص النكهة المثالية.",
            btn_start_steep: "بدء التخمير",
            btn_pause_steep: "إيقاف مؤقت",
            btn_resume_steep: "استئناف",
            btn_reset_steep: "إعادة ضبط",

            // Bespoke Presentation
            bespoke_title: "إضافة تغليف هدايا مخصص مع ختم شمعي ملكي",
            bespoke_complimentary: "خدمة مجانية",
            bespoke_wax_label: "لون الختم الشمعي الملكي",
            bespoke_monogram_label: "نقش الأحرف الأولى على لوحة النحاس",
            bespoke_monogram_hint: "(اختياري • حتى 4 أحرف)",
            bespoke_note_label: "بطاقة إهداء بخط يدوي فاخر",
            bespoke_preview_crest: "ROCK ONE WILD TEA • SANCTUARY",

            // AI Sommelier Chatbot
            chatbot_title: "خبير الشاي الذكي ومكتب الكونسيرج",
            chatbot_subtitle: "اسأل عن أنواع الشاي النادرة والجولات وطرق التحضير",
            chatbot_input_placeholder: "اكتب سؤالك عن الشاي أو الجولات أو الطلبات...",
            chatbot_welcome: "مرحباً بكم في **مزارع روك ون وايلد تي** السيلانية. أنا **خبير الشاي الذكي ومسؤول الكونسيرج**.\n\nيرجى اختيار موضوع من القائمة أدناه أو كتابة استفساركم مباشرة:",

            // Footer
            footer_about_title: "روك ون وايلد تي",
            footer_about_text: "مزرعة الشاي السيلاني الحرفي بمقاطعة إيتامبيتيا بسريلانكا. متخصصة في أرقى أنواع الشاي النقي.",
            footer_quick_links: "روابط سريعة",
            footer_contact_title: "الكونسيرج والطلبات",
            footer_rights: "جميع الحقوق محفوظة. شاي سيلاني حرفي فاخر.",

            // Common UI
            common_close: "إغلاق",
            common_submit: "إرسال",
            common_cancel: "إلغاء",
            common_confirm: "تأكيد",
            common_currency: "العملة",
            common_language: "اللغة",
            common_price: "السعر",
            common_status: "الحالة",

            // Dynamic Catalog & Product Cards
            catalog_title: "كتالوج الشاي الفاخر",
            catalog_subtitle: "اختر من تشكيلة الشاي الحرفي النقي المقطوف من سفوح مزارعنا العضوية الشاهقة.",
            filter_green_white: "الشاي الأخضر والأبيض",
            filter_oolongs: "شاي الأولونغ",
            filter_collector: "صناديق المقتنين",
            btn_estate_lookbook: "كتالوج المزرعة (PDF)",
            placeholder_search_reserves: "ابحث في أنواع الشاي...",
            catalog_no_reserves: "لم يتم العثور على أنواع شاي مطابقة لبحثك.",
            stock_available: "متوفر",
            stock_limited: "كمية محدودة",
            stock_in_stock: "متوفر بالمخزون",
            stock_sold_out: "نفدت الكمية",
            leaf_grade_default: "شاي نقي من مزرعة فردية",
            stat_water_temp: "حرارة الماء",
            stat_steep_duration: "مدة التخمير",
            stat_leaf_ratio: "نسبة الأوراق",
            stat_serving_vessel: "إناء التقديم",
            stat_aroma: "النقاء العطري",
            btn_tasting_radar: "مخطط النكهات وعداد التحضير",
            btn_add_to_bag: "أضف إلى السلة",
            btn_quick_order: "طلب سريع",
            btn_enquire_now: "استفسر الآن",
            btn_inquire_again: "استفسر مجدداً",
            status_available: "متاح",
            status_reserved: "محجوز",
            status_pending: "قيد المراجعة",
            status_booked: "محجوز",
            price_enquiry_only: "للاستفسار فقط",
            box_seal_note: "ختم الصندوق الخشبي المرقم فردياً.",
            collector_no_boxes: "لم يتم العثور على صناديق مطابقة.",

            // Sommelier Tasting Radar & Connoisseur Modal
            dossier_modal_badge: "ملف التذوق من خبير الشاي",
            dossier_sensory_title: "مخطط النكهات والحواس",
            dossier_terroir_title: "طبيعة المرتفعات ومصدر الشاي",
            dossier_steep_title: "دليل التحضير الدقيق",
            radar_floral: "زهري",
            radar_malty: "مالتي",
            radar_sweetness: "حلاوة",
            radar_astringency: "مرارة خفيفة",
            radar_body: "قوام الشاي",
            radar_aroma: "الرائحة العطرية",
            dossier_origin: "المصدر",
            dossier_elevation: "الارتفاع",
            dossier_harvest_type: "نوع الحصاد",
            dossier_grade: "درجة الورقة",
            dossier_weight: "الوزن الصافي",
            dossier_steep_temp: "حرارة الماء",
            dossier_steep_time: "مدة التخمير",
            dossier_steep_ratio: "نسبة الأوراق",
            dossier_steep_vessel: "الإناء الأنسب",
            btn_start_steep_timer: "بدء عداد التخمير",
            btn_pause_steep_timer: "إيقاف مؤقت",
            btn_resume_steep_timer: "استئناف",
            btn_reset_steep_timer: "إعادة ضبط",
            timer_standby: "جاهز",
            timer_steeping: "جاري التخمير بدقة...",
            timer_complete: "اكتمل التخمير! استمتع بالشاي",

            // Brewing Ritual & Live Timer Guide
            brew_section_tag: "دقة التحضير",
            brew_section_title: "دليل وعداد تحضير الشاي المثالي",
            brew_section_sub: "درجات حرارة مضبوطة ونسب أوراق دقيقة مع عداد وقت لاستخلاص النكهة المثالية.",
            brew_tab_black: "الشاي الأسود الفاخر",
            brew_tab_white: "الشاي الأبيض (سيلفر تيبس)",
            brew_tab_green: "الشاي الأخضر العضوي",
            brew_vessel_porcelain: "بورسلين / فخار",
            brew_vessel_glass: "زجاج / سيراميك أبيض",
            brew_vessel_celadon: "زجاج / كوب سيلادون",

            // Gift Catalog & Series Selector
            gift_catalog_tag: "إصدار محدود",
            gift_catalog_title: "كتالوج صناديق الهدايا",
            gift_catalog_sub: "احجز صندوق خشب الأرز المرقم يدوياً والمحتوي على أفخر محاصيل المزرعة النقية.",
            season_branding_badge: "إصدار السلسلة",
            season_branding_sub: "اختر رقم الصندوق من 1 إلى 10 أدناه لحجز صندوق الشاي الفاخر المرقم.",

            // Tours
            tours_header_tag: "تجربة المزرعة الفاخرة",
            tours_header_title: "جولات المصنع وجلسات تذوق الشاي",
            tours_header_sub: "تجوّل بين مزارع المرتفعات واشهد صناعة الشاي الحرفية واستمتع بجلسة تذوق خاصة مع خبير الشاي.",
            tour_morning_title: "قطاف الفجر وحصاد الندى",
            tour_morning_desc: "رافق خبراء القطاف عند الفجر على أعلى قمم مزارعنا وتعلّم فن اختيار الورقتين والبرعم.",
            tour_factory_title: "المصنع الحرفي والدوران اليدوي",
            tour_factory_desc: "شاهد طاولات لف الشاي يدوياً والتجفيف بخشب الغابات وجلسات التذوق الخاصة.",
            tour_sunset_title: "غروب المرتفعات وتذوق الشاي الفاخر",
            tour_sunset_desc: "جلسة تذوق حصرية لـ 5 أنواع شاي نادرة مع حلويات محلية بإطلالة ساحرة على الوادي.",
            tour_duration_label: "المدة",
            tour_capacity_label: "السعة القصوى",
            tour_deposit_card_label: "عربون الحجز",
            tour_slots_card_label: "المواعيد اليومية",

            // Cart / Reserve Bag Drawer
            cart_drawer_title: "سلة الحجز الخاصة بك",
            cart_drawer_subtitle: "حصص شاي حرفي نادر محجوزة للشحن المباشر من المزرعة.",
            cart_qty: "الكمية",
            cart_weight_label: "الوزن",
            cart_subtotal_label: "المجموع الفرعي",
            cart_shipping_disclaimer: "تغليف هدايا ملكي مجاني. يتم ترتيب الشحن عبر كونسيرج المزرعة الخاص.",
            btn_proceed_checkout: "متابعة إتمام الطلب",
            cart_empty_title: "سلة الحجز فارغة",
            cart_empty_sub: "استكشف كتالوج الشاي الفاخر واختر علب الشاي الحرفي أو صناديق الهدايا المرقمة.",
            btn_browse_catalog: "تصفح كتالوج الشاي",
            btn_clear_cart: "إفراغ السلة",
            cart_checkout_title: "معلومات الشحن والطلب",
            cart_name_label: "الاسم الكامل *",
            cart_email_label: "البريد الإلكتروني *",
            cart_phone_label: "رقم الهاتف / واتساب *",
            cart_country_label: "دولة الشحن",
            cart_address_label: "عنوان التوصيل بالتفصيل",
            cart_pay_mode_label: "طريقة الدفع المفضلة",
            cart_pay_both: "الخياران متاحان (دفع إلكتروني + تحويل بنكي)",
            cart_pay_online: "دفع إلكتروني فوري (بطاقات / بوابة دفع)",
            cart_pay_bank: "إيداع بنكي نقدي (رفع إيصال التحويل)",
            cart_notes_label: "تعليمات خاصة للشحن",
            cart_notes_placeholder: "ملاحظات للتوصيل أو للكونسيرج...",
            btn_place_order: "تأكيد وإرسال الطلب"
        }
    };

    // ── Dedicated Multilingual AI Sommelier Chatbot Knowledge Base ──
    const CHATBOT_I18N = {
        en: {
            config: {
                title: "AI Tea Sommelier & Concierge",
                subtitle: "Estate FAQ & Collector Assistant",
                placeholder: "Ask anything about teas, tours, orders...",
                greeting: "Greetings! Welcome to **Rock One Wild Tea Estate**. I am your **AI Tea Sommelier & Concierge**.\n\nPlease select any inquiry topic below for instant answers, or type your own question:",
                menuTitle: "Select an Inquiry Topic:",
                allTopicsTitle: "All Inquiry Topics",
                relatedTitle: "Related Inquiries:",
                viewAll: "View All Topics",
                fallback: "Thank you for your inquiry! Our master tea sommelier is available to assist you with bespoke requests, vintage harvests, or private estate tours.",
                lookbookResponse: "You can view and download our complete **2026 Estate Lookbook & Wholesale Technical Dossier (PDF)** right now, featuring terroir topography profiles, harvest grade matrices, bespoke gift chest customization, and international freight certifications.",
                btnOpenLookbook: "📖 Open Estate Lookbook (PDF)",
                btnTradeDesk: "💬 WhatsApp Trade Desk",
                btnWhatsappDesk: "Chat on WhatsApp Desk",
                btnExploreCatalog: "Explore Catalog"
            },
            topics: [
                {
                    id: "gift-boxes",
                    category: "COLLECTION",
                    iconKey: "gift",
                    question: "How do I reserve numbered Gift Boxes (Series 01–10)?",
                    answer: "Our numbered **Collector Gift Boxes (Series 01–10)** are handcrafted in artisanal teak wood chests with 100g of Golden Tips wild tea. You can reserve directly from the **Gift Catalog** by selecting an available numbered box, or instantly via our direct WhatsApp concierge desk.",
                    actions: [
                        { label: "View Gift Catalog", tab: "gifts" },
                        { label: "Reserve on WhatsApp", href: "https://wa.me/94771757556?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20numbered%20Gift%20Box." }
                    ],
                    followUps: [1, 2, 3]
                },
                {
                    id: "terroir",
                    category: "ORIGIN",
                    iconKey: "leaf",
                    question: "What makes Rock One Wild Tea unique & single-estate?",
                    answer: "Rock One Wild Tea is single-estate Ceylon tea nurtured on 1,200m+ high-elevation slopes in Wallawela, Ettampitiya. We hand-pluck tender two-leaves-and-a-bud and process in small batches using traditional orthodox techniques with zero chemical additives.",
                    actions: [
                        { label: "Explore Product Catalog", tab: "catalog" }
                    ],
                    followUps: [5, 6, 0]
                },
                {
                    id: "factory-tours",
                    category: "EXPERIENCE",
                    iconKey: "compass",
                    question: "How do I book a private estate factory tour & tasting session?",
                    answer: "We offer private estate tours including **Morning Mist Plucking**, **Afternoon Orthodox Processing**, and **Sunset Sommelier Tasting**. Visit our **Factory Tours** page to select your preferred date and time slot.",
                    actions: [
                        { label: "Book a Tour Slot", tab: "tours" }
                    ],
                    followUps: [7, 3, 0]
                },
                {
                    id: "payment",
                    category: "PAYMENT",
                    iconKey: "card",
                    question: "What payment methods & bank transfer options are accepted?",
                    answer: "We accept **Direct Bank Transfers** with deposit slip verification (Commercial Bank, Sampath Bank, Bank of Ceylon), credit/debit cards, and cash on estate arrival. Deposit slips can be uploaded directly during booking checkout.",
                    actions: [
                        { label: "Order Online", tab: "catalog" }
                    ],
                    followUps: [4, 0, 9]
                },
                {
                    id: "shipping",
                    category: "DELIVERY",
                    iconKey: "package",
                    question: "What are the domestic & international shipping options?",
                    answer: "We provide islandwide delivery across Sri Lanka (2–3 business days) and **Worldwide Express Courier Shipping** (DHL / FedEx) to UK, Europe, USA, UAE, Japan, and Singapore in airtight luxury tins.",
                    actions: [
                        { label: "Contact Shipping Desk", href: "https://wa.me/94771757556?text=Hello%2C%20I%20have%20an%20international%20shipping%20inquiry." }
                    ],
                    followUps: [0, 3, 9]
                },
                {
                    id: "brewing",
                    category: "RITUAL",
                    iconKey: "cup",
                    question: "What is the recommended brewing temperature & steeping time?",
                    answer: "For **White & Green Teas**, use 80°C–85°C spring water and steep for 2–3 minutes. For **Orthodox Black Teas**, use 95°C spring water and steep for 3–4 minutes for deep golden amber liquor.",
                    actions: [
                        { label: "View Brewing Guide", tab: "home" }
                    ],
                    followUps: [6, 1, 0]
                },
                {
                    id: "varieties",
                    category: "TEAS",
                    iconKey: "layers",
                    question: "What artisanal tea varieties are available to purchase?",
                    answer: "We craft small batches of **Imperial Golden Needle**, **Cloud Mist Silver Tips**, **Wild Forest Emerald Green**, and **Smoked Amber Oolong**. Each harvest is unblended single-estate private reserve.",
                    actions: [
                        { label: "View Tea Catalog", tab: "catalog" }
                    ],
                    followUps: [0, 5, 1]
                },
                {
                    id: "location",
                    category: "ESTATE",
                    iconKey: "pin",
                    question: "Where is the estate located and how can I visit?",
                    answer: "Our sanctuary is located at **No: 54 Gannilawattha, Wallawela, Ettampitiya, Sri Lanka**, at 1,200m+ elevation. You can view our interactive estate map or contact our concierge for driving directions.",
                    actions: [
                        { label: "View Estate Map", tab: "home" },
                        { label: "Get Directions on WhatsApp", href: "https://wa.me/94771757556?text=Hello%2C%20please%20send%20estate%20location%20directions." }
                    ],
                    followUps: [2, 9, 0]
                },
                {
                    id: "reviews",
                    category: "COMMUNITY",
                    iconKey: "star",
                    question: "How do I submit a verified customer rating or review?",
                    answer: "You can rate your tasting experience with 1–5 gold stars and share your connoisseur tasting notes by clicking **'Rate Your Experience'** in the Connoisseur Reviews section on our home page.",
                    actions: [
                        { label: "Write a Review", tab: "home" }
                    ],
                    followUps: [0, 2, 9]
                },
                {
                    id: "contact",
                    category: "CONCIERGE",
                    iconKey: "phone",
                    question: "How can I speak directly with the master tea maker?",
                    answer: "You can reach our Master Tea Concierge directly by phone at **+94 77 175 7556** / **+94 (11) 234-5678**, email at **axentrat@gmail.com**, or directly via WhatsApp.",
                    actions: [
                        { label: "Open WhatsApp Chat", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%20Concierge." }
                    ],
                    followUps: [0, 2, 4]
                }
            ]
        },

        si: {
            config: {
                title: "AI තේ උපදේශක සහ සේවා සහායක",
                subtitle: "වතුයාය තොරතුරු සහ උපදෙස් සහායක",
                placeholder: "තේ වර්ග, චාරිකා, ඇණවුම් ගැන ඕනෑම දෙයක් අසන්න...",
                greeting: "ආයුබෝවන්! **රොක් වන් වයිල්ඩ් ටී වතුයායට** සාදරයෙන් පිළිගනිමු. මම ඔබේ **AI තේ උපදේශක සහ සේවා සහායක** වෙමි.\n\nක්ෂණික පිළිතුරු සඳහා පහතින් මාතෘකාවක් තෝරන්න, නැතහොත් ඔබේ පැනය මෙහි සටහන් කරන්න:",
                menuTitle: "විමසීම් මාතෘකාවක් තෝරන්න:",
                allTopicsTitle: "සියලුම විමසීම් මාතෘකා",
                relatedTitle: "අදාළ විමසීම්:",
                viewAll: "සියලුම මාතෘකා බලන්න",
                fallback: "ඔබගේ විමසීමට ස්තූතියි! විශේෂිත තේ ඇණවුම්, අස්වනු විස්තර හෝ පෞද්ගලික වතු චාරිකා සඳහා අපගේ ප්‍රධාන තේ විශේෂඥ සහාය ලබාගත හැක.",
                lookbookResponse: "අපගේ **2026 වතුයාය නාමාවලිය සහ තොග වෙළඳ තාක්ෂණික වාර්තාව (PDF)** මෙතැනින් ලබාගත හැක.",
                btnOpenLookbook: "📖 වතුයාය නාමාවලිය (PDF)",
                btnTradeDesk: "💬 WhatsApp වෙළඳ කවුළුව",
                btnWhatsappDesk: "WhatsApp සේවා කවුළුව",
                btnExploreCatalog: "තේ එකතුව බලන්න"
            },
            topics: [
                {
                    id: "gift-boxes",
                    category: "තෑගි එකතුව",
                    iconKey: "gift",
                    question: "අංකනය කළ තෑගි පෙට්ටි (Series 01–10) වෙන්කරගන්නේ කෙසේද?",
                    answer: "අපගේ අංකනය කරන ලද **එකතුකරන්නන්ගේ තෑගි පෙට්ටි (Series 01–10)** පාරම්පරික තේක්ක ලීයෙන් නිමවා ඇති අතර ගෝල්ඩන් ටිප්ස් තේ 100g අඩංගු වේ. **තෑගි එකතුවෙන්** අංකයක් තෝරා හෝ WhatsApp සේවා කවුළුව හරහා ක්ෂණිකව වෙන්කරවා ගත හැක.",
                    actions: [
                        { label: "තෑගි එකතුව බලන්න", tab: "gifts" },
                        { label: "WhatsApp මගින් විමසන්න", href: "https://wa.me/94771757556?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20numbered%20Gift%20Box." }
                    ],
                    followUps: [1, 2, 3]
                },
                {
                    id: "terroir",
                    category: "වතුයාය",
                    iconKey: "leaf",
                    question: "රොක් වන් වයිල්ඩ් ටී සුවිශේෂී තනි වතු තේ වන්නේ ඇයි?",
                    answer: "රොක් වන් වයිල්ඩ් ටී ශ්‍රී ලංකාවේ ඇට්ටම්පිටිය, වල්ලවෙල මීටර් 1,200කට වඩා උස් කඳුකරයේ ස්වභාවිකව වැවෙන තනි වතු තේ අස්වැන්නකි. කිසිදු රසායනික ද්‍රව්‍යයකින් තොරව කුඩා කණ්ඩායම් වශයෙන් සාම්ප්‍රදායිකව නිපදවනු ලැබේ.",
                    actions: [
                        { label: "තේ එකතුව බලන්න", tab: "catalog" }
                    ],
                    followUps: [5, 6, 0]
                },
                {
                    id: "factory-tours",
                    category: "චාරිකා",
                    iconKey: "compass",
                    question: "පෞද්ගලික කර්මාන්තශාලා චාරිකාවක් සහ තේ රස බැලීමක් වෙන්කරගන්නේ කෙසේද?",
                    answer: "අපි **උදෑසන තේ නෙලීම**, **සාම්ප්‍රදායික තේ නිපදවීම**, සහ **සන්ධ්‍යා තේ රස බැලීම** ඇතුළු චාරිකා පිරිනමන්නෙමු. ඔබ කැමති වේලාව තෝරාගැනීමට **වතු චාරිකා** පිටුවට පිවිසෙන්න.",
                    actions: [
                        { label: "වේලාවක් වෙන්කරන්න", tab: "tours" }
                    ],
                    followUps: [7, 3, 0]
                },
                {
                    id: "payment",
                    category: "ගෙවීම්",
                    iconKey: "card",
                    question: "පිළිගන්නා ගෙවීම් ක්‍රම සහ බැංකු තැන්පතු විකල්ප මොනවාද?",
                    answer: "අපි **සෘජු බැංකු තැන්පතු** (කොමර්ෂල් බැංකුව, සම්පත් බැංකුව, ලංකා බැංකුව), ක්‍රෙඩිට්/ඩෙබිට් කාඩ්පත් පිළිගන්නෙමු. ඇණවුම් කිරීමේදී තැන්පතු රිසිට්පත කෙලින්ම අප්ලෝඩ් කළ හැක.",
                    actions: [
                        { label: "තේ ඇණවුම් කරන්න", tab: "catalog" }
                    ],
                    followUps: [4, 0, 9]
                },
                {
                    id: "shipping",
                    category: "ප්‍රවාහනය",
                    iconKey: "package",
                    question: "දේශීය සහ ජාත්‍යන්තර ප්‍රවාහන පහසුකම් මොනවාද?",
                    answer: "අපි ශ්‍රී ලංකාව පුරා දින 2-3ක් ඇතුළත බෙදාහැරීම සහ එක්සත් රාජධානිය, යුරෝපය, ඇමරිකාව, එක්සත් අරාබි එමීර් රාජ්‍යය, ජපානය සහ සිංගප්පූරුව වෙත **DHL / FedEx ජාත්‍යන්තර කූරියර් සේවාව** සපයන්නෙමු.",
                    actions: [
                        { label: "ප්‍රවාහන සේවය අමතන්න", href: "https://wa.me/94771757556?text=Hello%2C%20I%20have%20an%20international%20shipping%20inquiry." }
                    ],
                    followUps: [0, 3, 9]
                },
                {
                    id: "brewing",
                    category: "තැම්බීම",
                    iconKey: "cup",
                    question: "නිර්දේශිත තේ තැම්බීමේ උෂ්ණත්වය සහ කාලය කුමක්ද?",
                    answer: "සුදු සහ කොළ තේ සඳහා 80°C–85°C ජලය විනාඩි 2–3ක් ද, කළු තේ සඳහා 95°C ජලය විනාඩි 3–4ක් ද තැම්බීම වඩාත් සුදුසුය.",
                    actions: [
                        { label: "තැම්බීමේ උපදෙස් බලන්න", tab: "home" }
                    ],
                    followUps: [6, 1, 0]
                },
                {
                    id: "varieties",
                    category: "තේ වර්ග",
                    iconKey: "layers",
                    question: "මිලදී ගැනීමට ඇති තේ වර්ග මොනවාද?",
                    answer: "අප සතුව **ගෝල්ඩන් නීඩ්ල්**, **සිල්වර් ටිප්ස්**, **එමරල්ඩ් ග්‍රීන්**, සහ **ඇම්බර් ඌලොන්ග්** තේ වර්ග සීමිත ප්‍රමාණවලින් ඇත. සෑම එකක්ම පිරිසිදු තනි වතු තේ වේ.",
                    actions: [
                        { label: "තේ නාමාවලිය බලන්න", tab: "catalog" }
                    ],
                    followUps: [0, 5, 1]
                },
                {
                    id: "location",
                    category: "ස්ථානය",
                    iconKey: "pin",
                    question: "වතුයාය පිහිටා ඇත්තේ කොහේද? අපට පැමිණිය හැක්කේ කෙසේද?",
                    answer: "අපගේ තේ වතුයාය **අංක 54, ගන්නිලවත්ත, වල්ලවෙල, ඇට්ටම්පිටිය, ශ්‍රී ලංකාව** (මීටර් 1,200+ උසින්) පිහිටා ඇත. සිතියම බැලීමට හෝ මගපෙන්වීම් සඳහා WhatsApp මගින් සම්බන්ධ වන්න.",
                    actions: [
                        { label: "වතු සිතියම බලන්න", tab: "home" },
                        { label: "WhatsApp මගින් මගපෙන්වීම්", href: "https://wa.me/94771757556?text=Hello%2C%20please%20send%20estate%20location%20directions." }
                    ],
                    followUps: [2, 9, 0]
                },
                {
                    id: "reviews",
                    category: "ඇගයීම්",
                    iconKey: "star",
                    question: "පාරිභෝගික ඇගයීමක් හෝ අදහස් දැක්වීමක් කරන්නේ කෙසේද?",
                    answer: "මුල් පිටුවේ ඇති 'ඔබේ අත්දැකීම ඇගයීමට ලක්කරන්න' බොත්තම ක්ලික් කර ඔබට තරු 1 සිට 5 දක්වා ඇගයීමක් සහ රස සටහන් එක්කළ හැක.",
                    actions: [
                        { label: "ඇගයීමක් ලියන්න", tab: "home" }
                    ],
                    followUps: [0, 2, 9]
                },
                {
                    id: "contact",
                    category: "සේවා කවුළුව",
                    iconKey: "phone",
                    question: "ප්‍රධාන තේ විශේෂඥයා සමග සෘජුව සම්බන්ධ වන්නේ කෙසේද?",
                    answer: "අපගේ ප්‍රධාන තේ සේවා කවුළුව **+94 77 175 7556**, විද්‍යුත් තැපෑල **axentrat@gmail.com** හෝ WhatsApp මගින් සෘජුවම සම්බන්ධ කරගත හැක.",
                    actions: [
                        { label: "WhatsApp විවෘත කරන්න", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%20Concierge." }
                    ],
                    followUps: [0, 2, 4]
                }
            ]
        },

        ta: {
            config: {
                title: "AI தேயிலை வழிகாட்டி & உதவி மையம்",
                subtitle: "தோட்டத் தகவல்கள் & வழிகாட்டி",
                placeholder: "தேயிலை, சுற்றுலா, பதிவுகள் பற்றி எதையும் கேளுங்கள்...",
                greeting: "வணக்கம்! **ராக் ஒன் வைல்ட் டீ எஸ்டேட்டிற்கு** தங்களை அன்புடன் வரவேற்கிறோம். நான் உங்கள் **AI தேயிலை வழிகாட்டி மற்றும் உதவி உதவியாளர்** ஆவேன்.\n\nஉடனடி பதில்களுக்கு கீழே உள்ள தலைப்பைத் தேர்ந்தெடுக்கவும் அல்லது உங்கள் கேள்வியைத் தட்டச்சு செய்யவும்:",
                menuTitle: "ஒரு தலைப்பைத் தேர்ந்தெடுக்கவும்:",
                allTopicsTitle: "அனைத்து தலைப்புகள்",
                relatedTitle: "தொடர்புடைய வினவல்கள்:",
                viewAll: "அனைத்து தலைப்புகளையும் காண்க",
                fallback: "உங்கள் விசாரணைக்கு நன்றி! சிறப்பு தேயிலை பதிவுகள் அல்லது தனிப்பட்ட தோட்ட சுற்றுலாக்களுக்கு எமது முதன்மை தேயிலை வழிகாட்டியை தொடர்பு கொள்ளலாம்.",
                lookbookResponse: "எங்கள் **2026 எஸ்டேட் லுக்புக் & மொத்த விற்பனை விவரக் குறிப்பை (PDF)** இங்கிருந்து பதிவிறக்கம் செய்யலாம்.",
                btnOpenLookbook: "📖 எஸ்டேட் லுக்புக் (PDF)",
                btnTradeDesk: "💬 WhatsApp வர்த்தக மையம்",
                btnWhatsappDesk: "WhatsApp உதவி மையம்",
                btnExploreCatalog: "தேயிலை பட்டியல் காண்க"
            },
            topics: [
                {
                    id: "gift-boxes",
                    category: "பரிசுத் தொகுப்பு",
                    iconKey: "gift",
                    question: "எண்ணிடப்பட்ட பரிசுப் பெட்டிகளை (Series 01–10) எவ்வாறு பதிவு செய்வது?",
                    answer: "எங்களின் **சேகரிப்பாளர் பரிசுப் பெட்டிகள் (Series 01–10)** பாரம்பரிய தேக்கு மரப் பெட்டிகளில் 100g கோல்டன் டிப்ஸ் தேயிலையுடன் தயாரிக்கப்படுகின்றன. **பரிசுத் தொகுப்பு** பக்கத்தில் பெட்டியைத் தேர்வு செய்து அல்லது WhatsApp மூலம் நேரடியாகப் பதிவு செய்யலாம்.",
                    actions: [
                        { label: "பரிசுத் தொகுப்பு காண்க", tab: "gifts" },
                        { label: "WhatsApp இல் பதிவு செய்", href: "https://wa.me/94771757556?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20numbered%20Gift%20Box." }
                    ],
                    followUps: [1, 2, 3]
                },
                {
                    id: "terroir",
                    category: "தோட்டம்",
                    iconKey: "leaf",
                    question: "ராக் ஒன் வைல்ட் டீ ஏன் தனித்துவமானது?",
                    answer: "ராக் ஒன் வைல்ட் டீ இலங்கையின் எட்டம்பிட்டியில் 1,200 மீற்றருக்கும் அதிகமான உயர்மலை சரிவுகளில் இயற்கை முறையில் வளர்க்கப்படும் ஒற்றைத் தோட்டத் தேயிலையாகும். எந்த இரசாயனமும் இன்றி பாரம்பரிய முறையில் தயாரிக்கப்படுகிறது.",
                    actions: [
                        { label: "தேயிலை பட்டியல் காண்க", tab: "catalog" }
                    ],
                    followUps: [5, 6, 0]
                },
                {
                    id: "factory-tours",
                    category: "சுற்றுலா",
                    iconKey: "compass",
                    question: "தனிப்பட்ட தொழிற்சாலை சுற்றுலாவை எவ்வாறு பதிவு செய்வது?",
                    answer: "நாங்கள் **காலை தேயிலை பறித்தல்**, **பாரம்பரிய செயலாக்கம்**, மற்றும் **மாலை தேநீர் சுவைத்தல்** சுற்றுலாகளை வழங்குகிறோம். **சுற்றுலா** பக்கத்திற்குச் சென்று உங்கள் நேரத்தை பதிவு செய்யலாம்.",
                    actions: [
                        { label: "நேரத்தை பதிவு செய்", tab: "tours" }
                    ],
                    followUps: [7, 3, 0]
                },
                {
                    id: "payment",
                    category: "கட்டணம்",
                    iconKey: "card",
                    question: "ஏற்றுக்கொள்ளப்படும் கட்டண முறைகள் மற்றும் வங்கி பரிமாற்றங்கள் எவை?",
                    answer: "நாங்கள் **வங்கி வைப்புத்தொகை** (கொமர்ஷல் வங்கி, சம்பத் வங்கி, லங்கா வங்கி), கிரெடிட்/டெபிட் கார்டுகளை ஏற்றுக்கொள்கிறோம். பதிவு செய்யும் போது ரசீதை பதிவேற்றலாம்.",
                    actions: [
                        { label: "தேயிலை பதிவு செய்க", tab: "catalog" }
                    ],
                    followUps: [4, 0, 9]
                },
                {
                    id: "shipping",
                    category: "விநியோகம்",
                    iconKey: "package",
                    question: "உள்நாட்டு மற்றும் சர்வதேச விநியோக வசதிகள் என்ன?",
                    answer: "இலங்கை முழுவதும் (2–3 நாட்கள்) மற்றும் இங்கிலாந்து, ஐரோப்பா, அமெரிக்கா, ஐக்கிய அரபு எமிரேட்ஸ், ஜப்பான், சிங்கப்பூருக்கு **DHL / FedEx சர்வதேச கூரியர்** மூலம் அனுப்பி வைக்கிறோம்.",
                    actions: [
                        { label: "விநியோக உதவி மையம்", href: "https://wa.me/94771757556?text=Hello%2C%20I%20have%20an%20international%20shipping%20inquiry." }
                    ],
                    followUps: [0, 3, 9]
                },
                {
                    id: "brewing",
                    category: "செய்முறை",
                    iconKey: "cup",
                    question: "தேநீர் தயாரிக்க பரிந்துரைக்கப்படும் வெப்பநிலை மற்றும் நேரம் என்ன?",
                    answer: "வெள்ளை மற்றும் பச்சை தேநீருக்கு 80°C–85°C நீரில் 2–3 நிமிடங்கள், கருப்பு தேநீருக்கு 95°C நீரில் 3–4 நிமிடங்கள் ஊறவைக்கவும்.",
                    actions: [
                        { label: "செய்முறை வழிகாட்டி", tab: "home" }
                    ],
                    followUps: [6, 1, 0]
                },
                {
                    id: "varieties",
                    category: "வகைகள்",
                    iconKey: "layers",
                    question: "வாங்கக்கூடிய சிறப்பு தேயிலை வகைகள் எவை?",
                    answer: "எங்களிடம் **இம்பீரியல் கோல்டன் நீடில்**, **சில்வர் டிப்ஸ்**, **எமரால்டு க்ரீன்**, மற்றும் **அம்பர் ஊலாங்** ஆகிய பிரீமியம் தேயிலை வகைகள் உள்ளன.",
                    actions: [
                        { label: "தேயிலை பட்டியல்", tab: "catalog" }
                    ],
                    followUps: [0, 5, 1]
                },
                {
                    id: "location",
                    category: "அமைவிடம்",
                    iconKey: "pin",
                    question: "தேயிலை தோட்டம் எங்குள்ளது? நாங்கள் எவ்வாறு வரலாம்?",
                    answer: "எமது தோட்டம் **எண்: 54 கன்னிலவத்த, வல்லவெல, எட்டம்பிட்டியை, இலங்கை** இல் 1,200 மீற்றர் உயரத்தில் அமைந்துள்ளது. வழிகாட்டலுக்கு WhatsApp ஐப் பயன்படுத்தலாம்.",
                    actions: [
                        { label: "தோட்ட வரைபடம் காண்க", tab: "home" },
                        { label: "WhatsApp வழிகாட்டல்", href: "https://wa.me/94771757556?text=Hello%2C%20please%20send%20estate%20location%20directions." }
                    ],
                    followUps: [2, 9, 0]
                },
                {
                    id: "reviews",
                    category: "மதிப்பீடு",
                    iconKey: "star",
                    question: "வாடிக்கையாளர் மதிப்பீட்டை எவ்வாறு சமர்ப்பிப்பது?",
                    answer: "முகப்பு பக்கத்தில் உள்ள 'மதிப்பீடு செய்க' பொத்தானைக் கிளிக் செய்து 1–5 நட்சத்திர மதிப்பீடுகளையும் குறிப்புகளையும் பகிரலாம்.",
                    actions: [
                        { label: "மதிப்பீடு செய்க", tab: "home" }
                    ],
                    followUps: [0, 2, 9]
                },
                {
                    id: "contact",
                    category: "உதவி மையம்",
                    iconKey: "phone",
                    question: "முதன்மை தேயிலை தயாரிப்பாளரை எவ்வாறு தொடர்புகொள்வது?",
                    answer: "எமது உதவி மையத்தை **+94 77 175 7556** தொலைபேசி, **axentrat@gmail.com** மின்னஞ்சல் அல்லது WhatsApp மூலம் நேரடியாகத் தொடர்பு கொள்ளலாம்.",
                    actions: [
                        { label: "WhatsApp தொடர்பு", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%20Concierge." }
                    ],
                    followUps: [0, 2, 4]
                }
            ]
        },

        ja: {
            config: {
                title: "AI ティー・ソムリエ＆コンシェルジュ",
                subtitle: "茶園FAQ＆コレクター・アシスタント",
                placeholder: "茶葉、ツアー、ご注文について何でもご質問ください...",
                greeting: "ご来訪ありがとうございます。**ロック・ワン・ワイルド・ティー・エステート**へようこそ。私は貴方の専属**AIティー・ソムリエ＆コンシェルジュ**です。\n\nご質問のトピックを選択するか、直接ご質問を入力してください：",
                menuTitle: "お問い合わせトピックを選択：",
                allTopicsTitle: "すべてのお問い合わせトピック",
                relatedTitle: "関連するご質問：",
                viewAll: "すべてのトピックを表示",
                fallback: "お問い合わせありがとうございます。特別限定茶葉やプライベート茶園ツアーについて、当エステートのマスターソムリエが個別にお答えいたします。",
                lookbookResponse: "当茶園の**2026年公式ルックブック＆B2B技術仕様書（PDF）**をダウンロードしてご覧いただけます。",
                btnOpenLookbook: "📖 公式ルックブック（PDF）",
                btnTradeDesk: "💬 WhatsAppトレードデスク",
                btnWhatsappDesk: "WhatsAppで相談する",
                btnExploreCatalog: "茶葉カタログを見る"
            },
            topics: [
                {
                    id: "gift-boxes",
                    category: "ギフト",
                    iconKey: "gift",
                    question: "木箱ギフトセット（Series 01–10）の予約方法は？",
                    answer: "当園の**限定ナンバー入り木箱ギフト（Series 01〜10）**は、手作りのチーク無垢材のチェストに100gの希少なゴールデン・チップス野生茶葉を封入しております。**木箱ギフト**ページからお好きな番号を選択するか、公式WhatsAppコンシェルジュより直接ご予約いただけます。",
                    actions: [
                        { label: "木箱ギフトを見る", tab: "gifts" },
                        { label: "WhatsAppで予約する", href: "https://wa.me/94771757556?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20numbered%20Gift%20Box." }
                    ],
                    followUps: [1, 2, 3]
                },
                {
                    id: "terroir",
                    category: "茶園産地",
                    iconKey: "leaf",
                    question: "ロック・ワン野生茶のシングルエステートとしての特徴は？",
                    answer: "当園の茶葉はスリランカ・エッതംピティヤの標高1,200m以上の高地霧深き斜面で栽培された正真正銘のシングルエステート（単一農園）茶です。無農薬で手摘みされた一芯二葉を伝統製法で小ロット生産しています。",
                    actions: [
                        { label: "茶葉カタログを見る", tab: "catalog" }
                    ],
                    followUps: [5, 6, 0]
                },
                {
                    id: "factory-tours",
                    category: "茶園見学",
                    iconKey: "compass",
                    question: "プライベート茶園ツアー＆テイスティングの予約方法は？",
                    answer: "当エステートでは「朝露の茶摘み体験」「職人による伝統製法見学」「夕暮れのマスターテイスティング」をご用意しております。**茶園見学ツアー**ページよりご希望の日時をお選びいただけます。",
                    actions: [
                        { label: "ツアーを予約する", tab: "tours" }
                    ],
                    followUps: [7, 3, 0]
                },
                {
                    id: "payment",
                    category: "決済方法",
                    iconKey: "card",
                    question: "利用可能な支払い方法と銀行振込について教えてください。",
                    answer: "クレジットカード決済、**銀行直接振込**（振込明細スリップのオンライン提出に対応）、および現地決済に対応しております。ご注文時に受領証スリップを簡単にアップロードいただけます。",
                    actions: [
                        { label: "オンラインで注文", tab: "catalog" }
                    ],
                    followUps: [4, 0, 9]
                },
                {
                    id: "shipping",
                    category: "国際配送",
                    iconKey: "package",
                    question: "日本国内および国際配送のオプションについて",
                    answer: "スリランカ国内配送（2〜3営業日）のほか、日本、アメリカ、イギリス、EU、UAE、シンガポールへの**DHL/FedEx国際特急航空便**に対応しております。気密性の高い高級缶でお届けします。",
                    actions: [
                        { label: "配送デスクに問い合わせ", href: "https://wa.me/94771757556?text=Hello%2C%20I%20have%20an%20international%20shipping%20inquiry." }
                    ],
                    followUps: [0, 3, 9]
                },
                {
                    id: "brewing",
                    category: "美味しい淹れ方",
                    iconKey: "cup",
                    question: "最適な湯温と抽出時間（美味しい淹れ方）は？",
                    answer: "白茶・緑茶は80°C〜85°Cの軟水で2〜3分間。オーソドックス紅茶は95°Cの熱湯で3〜4分間じっくり蒸らすことで、黄金色の芳醇な香りと深いコクが引き出されます。",
                    actions: [
                        { label: "抽出ガイドを見る", tab: "home" }
                    ],
                    followUps: [6, 1, 0]
                },
                {
                    id: "varieties",
                    category: "銘柄一覧",
                    iconKey: "layers",
                    question: "購入可能な希少茶葉のラインナップは？",
                    answer: "「インペリアル・ゴールデンニードル」「クラウドミスト・シルバーチップス」「エメラルド・グリーン」「スモークド・アンバー・ウーロン」などの極上マイクロバッチ茶葉を取り揃えております。",
                    actions: [
                        { label: "茶葉一覧を見る", tab: "catalog" }
                    ],
                    followUps: [0, 5, 1]
                },
                {
                    id: "location",
                    category: "所在地",
                    iconKey: "pin",
                    question: "茶園の所在地と訪問アクセス方法は？",
                    answer: "当園はスリランカ・エッതംピティヤの標高1,200m（No: 54 Gannilawattha, Wallawela, Ettampitiya）に位置します。インタラクティブ地図の閲覧や、WhatsAppによる送迎・道案内をご利用いただけます。",
                    actions: [
                        { label: "農園マップを見る", tab: "home" },
                        { label: "WhatsAppで道案内", href: "https://wa.me/94771757556?text=Hello%2C%20please%20send%20estate%20location%20directions." }
                    ],
                    followUps: [2, 9, 0]
                },
                {
                    id: "reviews",
                    category: "評価・レビュー",
                    iconKey: "star",
                    question: "テイスティング評価・レビューの投稿方法は？",
                    answer: "ホームページの「お客様の声・評価」セクションにある「体験を評価する」ボタンより、1〜5つ星の評価とテイスティングコメントをご投稿いただけます。",
                    actions: [
                        { label: "レビューを投稿", tab: "home" }
                    ],
                    followUps: [0, 2, 9]
                },
                {
                    id: "contact",
                    category: "コンシェルジュ",
                    iconKey: "phone",
                    question: "マスター・ティーメーカーに直接問い合わせるには？",
                    answer: "専属コンシェルジュデスクへのお電話（**+94 77 175 7556**）、Eメール（**axentrat@gmail.com**）、または公式WhatsAppより直接お問い合わせいただけます。",
                    actions: [
                        { label: "WhatsAppを開く", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%20Concierge." }
                    ],
                    followUps: [0, 2, 4]
                }
            ]
        },

        zh: {
            config: {
                title: "AI 侍茶师与庄园礼宾管家",
                subtitle: "庄园问答与收藏家助手",
                placeholder: "询问关于名茶、庄园之旅、订单的任何问题...",
                greeting: "尊贵的贵宾，您好！欢迎莅临**岩一古树野生茶庄园**。我是您的**AI侍茶师与庄园礼宾管家**。\n\n请在下方选择您感兴趣的咨询主题，或直接输入您的问题：",
                menuTitle: "请选择咨询主题：",
                allTopicsTitle: "全部咨询主题",
                relatedTitle: "相关问题推荐：",
                viewAll: "查看全部主题",
                fallback: "感谢您的垂询！如需定制专属私藏、特级年份茶品或私人庄园鉴赏之旅，我们的首席侍茶大师将随时为您提供专属服务。",
                lookbookResponse: "您可以立即查阅并下载我们的**2026年庄园画册与大宗批发技术白皮书（PDF）**。",
                btnOpenLookbook: "📖 庄园画册与白皮书 (PDF)",
                btnTradeDesk: "💬 WhatsApp 贸易专席",
                btnWhatsappDesk: "WhatsApp 礼宾咨询",
                btnExploreCatalog: "浏览名茶甄选"
            },
            topics: [
                {
                    id: "gift-boxes",
                    category: "木盒礼赞",
                    iconKey: "gift",
                    question: "如何预订编号珍藏木盒礼赞（Series 01–10）？",
                    answer: "我们的**限量编号珍藏木盒礼赞（第01–10号）**采用手工柚木茶匣精制，内封100克金尖古树野生茶。您可直接在**木盒礼赞目录**中选择可用编号，或通过WhatsApp礼宾专席即时预订。",
                    actions: [
                        { label: "查阅木盒礼赞", tab: "gifts" },
                        { label: "WhatsApp礼宾预订", href: "https://wa.me/94771757556?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20numbered%20Gift%20Box." }
                    ],
                    followUps: [1, 2, 3]
                },
                {
                    id: "terroir",
                    category: "庄园风土",
                    iconKey: "leaf",
                    question: "岩一野生茶作为单一庄园有机茶有何独特之处？",
                    answer: "岩一野生茶是产自斯里兰卡埃坦皮蒂亚海拔1200米以上云雾山坡的单一庄园名茶。我们坚持人工采摘一芽二叶，采用传统正统制茶工艺小批量精制，纯天然无任何添加。",
                    actions: [
                        { label: "浏览名茶甄选", tab: "catalog" }
                    ],
                    followUps: [5, 6, 0]
                },
                {
                    id: "factory-tours",
                    category: "庄园研学",
                    iconKey: "compass",
                    question: "如何预约私人庄园制茶研学之旅与品鉴会？",
                    answer: "我们提供**清晨朝雾采茶**、**传统手工制茶**以及**夕阳品鉴大师课**。欢迎访问**庄园之旅**页面选择您心仪的日期与时段。",
                    actions: [
                        { label: "预约研学席位", tab: "tours" }
                    ],
                    followUps: [7, 3, 0]
                },
                {
                    id: "payment",
                    category: "支付方式",
                    iconKey: "card",
                    question: "庄园支持哪些支付方式与银行转账选项？",
                    answer: "我们支持**主流信用卡/借记卡**、**银行直接转账汇款**（支持在线上传银行水单/回执凭证）。您在下单或预订结算时可直接上传付款水单。",
                    actions: [
                        { label: "在线选购茶品", tab: "catalog" }
                    ],
                    followUps: [4, 0, 9]
                },
                {
                    id: "shipping",
                    category: "全球配送",
                    iconKey: "package",
                    question: "国内与全球跨国配送时效与方式？",
                    answer: "我们提供斯里兰卡全境极速送达（2-3个工作日），并支持通过**DHL / FedEx 全球特快专递**直邮中国、美国、英国、欧洲、阿联酋、日本及新加坡，采用特制避光密封茶罐锁鲜。",
                    actions: [
                        { label: "联系国际物流专席", href: "https://wa.me/94771757556?text=Hello%2C%20I%20have%20an%20international%20shipping%20inquiry." }
                    ],
                    followUps: [0, 3, 9]
                },
                {
                    id: "brewing",
                    category: "品鉴之道",
                    iconKey: "cup",
                    question: "各种名茶的最佳冲泡水温与浸润时间？",
                    answer: "白茶与绿茶建议使用80°C–85°C山泉水冲泡2–3分钟；正统工艺红茶建议使用95°C沸水冲泡3–4分钟，即可析出通透瑰丽的琥珀金汤与馥郁花果香。",
                    actions: [
                        { label: "查阅侍茶冲泡指南", tab: "home" }
                    ],
                    followUps: [6, 1, 0]
                },
                {
                    id: "varieties",
                    category: "茶品目录",
                    iconKey: "layers",
                    question: "庄园目前有哪些珍稀手作茶品可供选购？",
                    answer: "我们限量制作**帝国金针 (Golden Needle)**、**云雾白毫银针 (Silver Tips)**、**高山翡翠绿茶 (Emerald Green)** 以及 **烟熏琥珀乌龙 (Amber Oolong)**，均属于不拼配的单一庄园典藏私享茶。",
                    actions: [
                        { label: "浏览名茶名录", tab: "catalog" }
                    ],
                    followUps: [0, 5, 1]
                },
                {
                    id: "location",
                    category: "地理位置",
                    iconKey: "pin",
                    question: "庄园具体地理位置在哪里，如何前往参观？",
                    answer: "庄园坐落于**斯里兰卡埃坦皮蒂亚加尼拉瓦塔54号（No: 54 Gannilawattha, Wallawela, Ettampitiya）**，海拔1200米以上。您可查看互动地图或联系礼宾部获取路线导航。",
                    actions: [
                        { label: "查阅庄园地图", tab: "home" },
                        { label: "WhatsApp获取导航", href: "https://wa.me/94771757556?text=Hello%2C%20please%20send%20estate%20location%20directions." }
                    ],
                    followUps: [2, 9, 0]
                },
                {
                    id: "reviews",
                    category: "品鉴评价",
                    iconKey: "star",
                    question: "如何提交品鉴评价与星级反馈？",
                    answer: "您可在庄园首页的“品鉴家评鉴”专区点击“评价您的体验”，为所品尝的茶品打出1–5星好评并分享您的品鉴手记。",
                    actions: [
                        { label: "撰写品鉴评价", tab: "home" }
                    ],
                    followUps: [0, 2, 9]
                },
                {
                    id: "contact",
                    category: "礼宾专席",
                    iconKey: "phone",
                    question: "如何直接联系庄园首席侍茶大师与总监？",
                    answer: "您可通过专属热线 **+94 77 175 7556** / **+94 (11) 234-5678**、官方电邮 **axentrat@gmail.com** 或直接在 WhatsApp 上向礼宾大师咨询。",
                    actions: [
                        { label: "开启WhatsApp咨询", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%20Concierge." }
                    ],
                    followUps: [0, 2, 4]
                }
            ]
        },

        ar: {
            config: {
                title: "خبير الشاي الذكي ومكتب الكونسيرج",
                subtitle: "دليل المزرعة ومساعد كبار العملاء",
                placeholder: "اسأل عن أنواع الشاي، الجولات، أو الطلبات...",
                greeting: "مرحباً بكم في **مزرعة روك ون وايلد تي**! أنا **مستشارك وخبير الشاي الذكي (AI Sommelier)**.\n\nيرجى اختيار أحد موضوعات الاستفسار أدناه للحصول على إجابة فورية، أو كتابة سؤالك مباشرة:",
                menuTitle: "اختر موضوع الاستفسار:",
                allTopicsTitle: "جميع الموضوعات",
                relatedTitle: "استفسارات ذات صلة:",
                viewAll: "عرض كافة الموضوعات",
                fallback: "شكراً لاستفسارك! خبير الشاي لدينا جاهز لمساعدتك في الطلبات الخاصة أو جولات المزرعة الخاصة.",
                lookbookResponse: "يمكنك الاطلاع على **كتالوج المزرعة ودليل المواصفات لعام 2026 (PDF)** وتنزيله مباشرة.",
                btnOpenLookbook: "📖 فتح كتالوج المزرعة (PDF)",
                btnTradeDesk: "💬 مكتب المبيعات عبر واتساب",
                btnWhatsappDesk: "محادثة عبر واتساب",
                btnExploreCatalog: "استعراض كتالوج الشاي"
            },
            topics: [
                {
                    id: "gift-boxes",
                    category: "صناديق الهدايا",
                    iconKey: "gift",
                    question: "كيف يمكنني حجز صناديق الهدايا الخشبية المرقمة (الإصدار 01–10)؟",
                    answer: "صناديق **الهدايا الخشبية المرقمة (الإصدار 01–10)** مصنوعة يدوياً من خشب الساج الفاخر وتحتوي على 100 غرام من شاي جولدن تيبس البري. يمكنك الحجز مباشرة من **صناديق الهدايا** أو عبر واتساب.",
                    actions: [
                        { label: "عرض صناديق الهدايا", tab: "gifts" },
                        { label: "الحجز عبر واتساب", href: "https://wa.me/94771757556?text=Hello%2C%20I%20would%20like%20to%20reserve%20a%20numbered%20Gift%20Box." }
                    ],
                    followUps: [1, 2, 3]
                },
                {
                    id: "terroir",
                    category: "أصل الشاي",
                    iconKey: "leaf",
                    question: "ما الذي يجعل شاي روك ون البري فريداً ومن مزرعة واحدة؟",
                    answer: "ينمو شاي روك ون البري في سريلانكا على ارتفاع يتجاوز 1,200 متر في إيتامبيتيا. يتم قطف أوراق الشاي يدوياً وتصنيعها بدفعات صغيرة دون أي إضافات كيميائية.",
                    actions: [
                        { label: "استعراض تشكيلة الشاي", tab: "catalog" }
                    ],
                    followUps: [5, 6, 0]
                },
                {
                    id: "factory-tours",
                    category: "جولات المزرعة",
                    iconKey: "compass",
                    question: "كيف أحجز جولة خاصة في مصنع المزرعة وجلسة تذوق؟",
                    answer: "نقدم جولات تشمل **قطف الشاي الصباحي**، **التصنيع اليدوي التقليدي**، و**تذوق الغروب مع خبير الشاي**. تفضل بزيارة صفحة **جولات المصنع** لاختيار الموعد المناسب.",
                    actions: [
                        { label: "حجز موعد جولة", tab: "tours" }
                    ],
                    followUps: [7, 3, 0]
                },
                {
                    id: "payment",
                    category: "طرق الدفع",
                    iconKey: "card",
                    question: "ما هي طرق الدفع والتحويل المصرفي المقبولة؟",
                    answer: "نقبل **التحويلات المصرفية المباشرة** مع إمكانية رفع إيصال الإيداع، وكذلك البطاقات الائتمانية والدفع عند الوصول إلى المزرعة.",
                    actions: [
                        { label: "الطلب أونلاين", tab: "catalog" }
                    ],
                    followUps: [4, 0, 9]
                },
                {
                    id: "shipping",
                    category: "الشحن والتوصيل",
                    iconKey: "package",
                    question: "ما هي خيارات الشحن المحلي والدولي المتاحة؟",
                    answer: "نوفر التوصيل المحلي داخل سريلانكا وشحناً دولياً سريعاً عبر **DHL / FedEx** إلى دول الخليج العربي، أوروبا، أمريكا، واليابان في عبوات محكمة وفاخرة.",
                    actions: [
                        { label: "التواصل مع مكتب الشحن", href: "https://wa.me/94771757556?text=Hello%2C%20I%20have%20an%20international%20shipping%20inquiry." }
                    ],
                    followUps: [0, 3, 9]
                },
                {
                    id: "brewing",
                    category: "طريقة التحضير",
                    iconKey: "cup",
                    question: "ما هي درجة الحرارة ومدة التحضير الموصى بها للشاي؟",
                    answer: "للشاي الأبيض والأخضر: ماء بدرجة 80°C–85°C لمدة 2–3 دقائق. للشاي الأسود الأرثوذكسي: ماء بدرجة 95°C لمدة 3–4 دقائق.",
                    actions: [
                        { label: "دليل التحضير", tab: "home" }
                    ],
                    followUps: [6, 1, 0]
                },
                {
                    id: "varieties",
                    category: "أصناف الشاي",
                    iconKey: "layers",
                    question: "ما هي أصناف الشاي الفاخرة المتاحة للشراء؟",
                    answer: "ننتج دفعات محدودة من **جولدن نيدل**، **سيلفر تيبس**، **إميرالد الأخضر**، و**أولونغ العنبر**. جميعها شاي بيور من مزرعة واحدة.",
                    actions: [
                        { label: "عرض قائمة الشاي", tab: "catalog" }
                    ],
                    followUps: [0, 5, 1]
                },
                {
                    id: "location",
                    category: "الموقع",
                    iconKey: "pin",
                    question: "أين تقع المزرعة وكيف يمكنني زيارتها؟",
                    answer: "تقع المزرعة في **إيتامبيتيا، سريلانكا** على ارتفاع 1,200+ متر. يمكنك استعراض الخريطة أو التواصل مع الكونسيرج للحصول على تفاصيل الطريق.",
                    actions: [
                        { label: "عرض خريطة المزرعة", tab: "home" },
                        { label: "إرشادات الطريق عبر واتساب", href: "https://wa.me/94771757556?text=Hello%2C%20please%20send%20estate%20location%20directions." }
                    ],
                    followUps: [2, 9, 0]
                },
                {
                    id: "reviews",
                    category: "التقييمات",
                    iconKey: "star",
                    question: "كيف أقدم تقييماً أو مراجعة لتجربة تذوق الشاي؟",
                    answer: "يمكنك تقييم التجربة من 1 إلى 5 نجوم وكتابة انطباعاتك بالنقر على زر 'تقييم تجربتك' في الصفحة الرئيسية.",
                    actions: [
                        { label: "كتابة تقييم", tab: "home" }
                    ],
                    followUps: [0, 2, 9]
                },
                {
                    id: "contact",
                    category: "الكونسيرج",
                    iconKey: "phone",
                    question: "كيف أتواصل مباشرة مع خبير صناعة الشاي في المزرعة؟",
                    answer: "يمكنك التواصل مع مكتب الكونسيرج عبر الهاتف **+94 77 175 7556** أو البريد الإلكتروني **axentrat@gmail.com** أو مباشرة عبر الواتساب.",
                    actions: [
                        { label: "محادثة عبر واتساب", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%20Concierge." }
                    ],
                    followUps: [0, 2, 4]
                }
            ]
        }
    };

    class I18nEngine {
        constructor() {
            this.storageKey = 'tea_factory_active_lang';
            this.activeLang = this.loadActiveLanguage();
        }

        loadActiveLanguage() {
            try {
                const saved = localStorage.getItem(this.storageKey);
                if (saved && LANGUAGES[saved.toLowerCase()]) {
                    return saved.toLowerCase();
                }
            } catch (e) {}
            return 'en';
        }

        getLanguages() {
            return LANGUAGES;
        }

        getActiveLanguage() {
            return this.activeLang || 'en';
        }

        getActiveLanguageMeta() {
            return LANGUAGES[this.getActiveLanguage()] || LANGUAGES.en;
        }

        setActiveLanguage(langCode) {
            const code = (langCode || '').toLowerCase();
            if (LANGUAGES[code]) {
                this.activeLang = code;
                try {
                    localStorage.setItem(this.storageKey, code);
                } catch (e) {}

                // Update document attributes for accessibility & RTL
                const meta = LANGUAGES[code];
                document.documentElement.lang = code;
                document.documentElement.dir = meta.dir || 'ltr';

                if (meta.dir === 'rtl') {
                    document.body.classList.add('rtl-layout');
                } else {
                    document.body.classList.remove('rtl-layout');
                }

                // Translate all static DOM elements
                this.translateDOM();
                return true;
            }
            return false;
        }

        getChatbotConfig(lang) {
            const l = (lang || this.getActiveLanguage() || 'en').toLowerCase();
            return (CHATBOT_I18N[l] && CHATBOT_I18N[l].config) ? CHATBOT_I18N[l].config : CHATBOT_I18N.en.config;
        }

        getFaqTopics(lang) {
            const l = (lang || this.getActiveLanguage() || 'en').toLowerCase();
            return (CHATBOT_I18N[l] && CHATBOT_I18N[l].topics) ? CHATBOT_I18N[l].topics : CHATBOT_I18N.en.topics;
        }

        matchChatbotTopicIndex(query) {
            const q = (query || '').toLowerCase().trim();
            if (!q) return -1;

            // 0: Gift boxes & Collector Chests
            if (/gift|box|series|chest|wooden|wood|teak|තෑගි|පෙට්ටි|පෙට්ටිය|பரிசு|பெட்டி|木箱|ギフト|木盒|礼盒|صندوق|صناديق|هدية|هدايا/.test(q)) return 0;
            // 2: Factory tours & tasting sessions (high specificity)
            if (/tour|visit|slot|timing|plucking|processing|tasting|cupping|චාරිකා|නැරඹුම්|නෙලීම|රසබැලීම|சுற்றுலா|பயணம்|பறித்தல்|சுவைத்தல்|ツアー|見学|体験|茶摘み|テイスティング|旅游|参观|采茶|研学|品鉴|جولة|جولات|زيارة|زيارات|تذوق|قطف/.test(q)) return 2;
            // 3: Payment & bank transfer
            if (/pay|bank|slip|card|credit|debit|transfer|deposit|account|ගෙවීම්|බැංකු|තැන්පතු|රිසිට්|ரசீது|வங்கி|கட்டணம்|支払い|振込|決済|口座|支付|银行|转账|水单|دفع|تحويل|مصرف|إيداع|بطاقة/.test(q)) return 3;
            // 4: Delivery & shipping
            if (/ship|deliver|international|courier|dhl|fedex|airtight|freight|බෙදාහැරීම්|ප්‍රවාහන|කූරියර්|විநியோகம்|அனுப்புதல்|கூரியர்|配送|送料|航空便|お届け|快递|直邮|物流|شحن|توصيل|بريد/.test(q)) return 4;
            // 5: Brewing & temperature
            if (/brew|temp|steep|water|ratio|vessel|infus|how to make|තැම්බීම|උෂ්ණත්වය|ජලය|කාලය|ஊறவைத்தல்|வெப்பநிலை|செய்முறை|淹れ方|温度|抽出|お湯|冲泡|水温|时间|茶具|تحضير|حرارة|درجة|غلي/.test(q)) return 5;
            // 7: Location & address
            if (/where|location|address|map|ettampitiya|direction|drive|road|reach|කොහේද|ලිපිනය|ඇට්ටම්පිටිය|මගපෙන්වීම|එන්නේ|எங்கே|முகவரி|அமைவிடம்|எட்டம்பிட்டியை|場所|住所|行き方|アクセス|地図|地址|位置|怎么去|导航|地图|موقع|عنوان|أين|طريق|خريطة/.test(q)) return 7;
            // 8: Reviews & feedback
            if (/review|rating|feedback|star|rate|opinion|score|comment|ඇගයීම්|අදහස්|තරු|විචාර|மதிப்பீடு|கருத்து|நட்சத்திரம்|評価|レビュー|星|感想|评价|星级|反馈|点评|تقييم|مراجعة|نجوم|رأي/.test(q)) return 8;
            // 9: Contact & concierge
            if (/contact|phone|email|whatsapp|call|number|talk|speak|help|assist|concierge|ඇමතුම්|දුරකථන|විද්‍යුත්|සම්බන්ධ|තොරතුරු|தொடர்பு|தொலைபேசி|மின்னஞ்சல்|உதவி|連絡|電話|メール|問い合わせ|コンシェルジュ|联系|电话|电邮|人工|客服|管家|اتصال|هاتف|ايميل|مساعدة|خدمة/.test(q)) return 9;
            // 1: Terroir / origin / single-estate
            if (/unique|wild|terroir|origin|slope|mountain|highland|elevation|harvest|single-estate|ගුණාංග|උසස්|කඳුකර|ස්වභාවික|තනි වතු|தோட்டம்|இயற்கை|உயர்மலை|ஒற்றைத் தோட்டம்|産地|標高|シングルエステート|风土|海拔|单一庄园|ارتفاع|طبيعي|عضوي/.test(q)) return 1;
            // 6: Artisanal varieties / products
            if (/variet|needle|tips|emerald|amber|oolong|green|black|white|tea|price|cost|buy|order|catalog|තේ|මිල|වර්ග|සුදු|කළු|කොළ|ඇණවුම්|தேயிலை|விலை|வகைகள்|பதிவு|お茶|価格|茶葉|銘柄|購入|茶|价格|名茶|金针|银针|乌龙|选购|شاي|سعر|أصناف|أخضر|أسود|شراء/.test(q)) return 6;

            return -1;
        }

        t(key, fallback = '') {
            const lang = this.getActiveLanguage();
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
                return TRANSLATIONS[lang][key];
            }
            if (TRANSLATIONS.en && TRANSLATIONS.en[key] !== undefined) {
                return TRANSLATIONS.en[key];
            }
            return fallback || key;
        }

        translateDOM(root = document) {
            // 1. Text elements with data-i18n
            const elements = root.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (key) {
                    const translation = this.t(key);
                    if (translation) {
                        el.innerText = translation;
                    }
                }
            });

            // 2. Placeholder attributes with data-i18n-placeholder
            const placeholderEls = root.querySelectorAll('[data-i18n-placeholder]');
            placeholderEls.forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (key) {
                    const translation = this.t(key);
                    if (translation) {
                        el.setAttribute('placeholder', translation);
                    }
                }
            });

            // 3. Title attributes with data-i18n-title
            const titleEls = root.querySelectorAll('[data-i18n-title]');
            titleEls.forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                if (key) {
                    const translation = this.t(key);
                    if (translation) {
                        el.setAttribute('title', translation);
                    }
                }
            });
        }
    }

    // Global Instance
    window.TeaFactoryI18n = new I18nEngine();

})(typeof window !== 'undefined' ? window : global);
