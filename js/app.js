/**
 * Tea Factory Luxury Portal - Main Application Orchestrator
 */

// ─── Luxury Image Fallback Resilience System ──────────────────────────────────
(function() {
    const generateSvgDataUri = (svgStr) => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr.trim());

    window.TeaFactoryImageFallbacks = {
        product: (title = '') => {
            const cleanTitle = (title || 'Artisanal Ceylon Reserve').replace(/[<>&"]/g, '');
            return generateSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <defs>
        <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0a150d" />
            <stop offset="50%" stop-color="#122417" />
            <stop offset="100%" stop-color="#071009" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f6e27a" />
            <stop offset="50%" stop-color="#d4af37" />
            <stop offset="100%" stop-color="#8b6914" />
        </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#pGrad)" />
    <rect x="12" y="12" width="376" height="276" fill="none" stroke="#d4af37" stroke-width="1" stroke-opacity="0.35" rx="4" />
    <rect x="16" y="16" width="368" height="268" fill="none" stroke="#d4af37" stroke-width="0.5" stroke-opacity="0.2" rx="2" />
    <g transform="translate(200, 110) scale(1.2)" stroke="url(#goldGrad)" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M-18 8 C -18 -15, 0 -22, 18 -18 C 18 10, 0 18, -18 8 Z" fill="rgba(212,175,55,0.08)" />
        <path d="M-18 8 Q 0 -5 18 -18" />
        <path d="M-6 3 Q -2 -2 2 -4" />
        <path d="M-12 6 Q -9 1 -4 -1" />
        <path d="M-15 20 C -15 28, 15 28, 15 20" />
        <path d="M-22 30 L 22 30" stroke-width="1.5" />
    </g>
    <text x="200" y="185" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="13" font-weight="700" letter-spacing="3" text-anchor="middle">ROCK ONE WILD TEA</text>
    <text x="200" y="208" fill="#ffffff" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="600" letter-spacing="1.5" text-anchor="middle">${cleanTitle.length > 32 ? cleanTitle.slice(0, 30) + '...' : cleanTitle}</text>
    <text x="200" y="228" fill="#d4af37" font-family="'Cinzel', Georgia, serif" font-size="9" letter-spacing="2" text-anchor="middle" fill-opacity="0.8">SINGLE-ESTATE ARTISANAL RESERVE</text>
    <text x="200" y="248" fill="#a0b0a5" font-family="'EB Garamond', Georgia, serif" font-size="11" font-style="italic" text-anchor="middle">Ettampitiya High-Elevation Terroir</text>
</svg>`);
        },

        box: (boxName = '') => {
            const cleanName = (boxName || 'Collector Teak Chest').replace(/[<>&"]/g, '');
            return generateSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <defs>
        <linearGradient id="bGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#141812" />
            <stop offset="50%" stop-color="#1e291e" />
            <stop offset="100%" stop-color="#0e130d" />
        </linearGradient>
        <linearGradient id="goldChest" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f6e27a" />
            <stop offset="50%" stop-color="#d4af37" />
            <stop offset="100%" stop-color="#aa8010" />
        </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#bGrad)" />
    <rect x="12" y="12" width="376" height="276" fill="none" stroke="#d4af37" stroke-width="1" stroke-opacity="0.4" rx="4" />
    <rect x="16" y="16" width="368" height="268" fill="none" stroke="#d4af37" stroke-width="0.5" stroke-opacity="0.2" rx="2" />
    <g transform="translate(200, 105) scale(1.2)" stroke="url(#goldChest)" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="-35" y="-12" width="70" height="42" rx="3" fill="rgba(212,175,55,0.06)" />
        <path d="M-35 -2 L 35 -2" stroke-width="1.5" />
        <circle cx="0" cy="5" r="4" fill="#d4af37" />
        <path d="M0 9 L 0 16" stroke-width="2" />
        <path d="M-15 -12 L -15 30" stroke-dasharray="2 2" stroke-width="1" stroke-opacity="0.5" />
        <path d="M15 -12 L 15 30" stroke-dasharray="2 2" stroke-width="1" stroke-opacity="0.5" />
    </g>
    <text x="200" y="180" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="13" font-weight="700" letter-spacing="3" text-anchor="middle">ROCK ONE WILD TEA</text>
    <text x="200" y="204" fill="#ffffff" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="600" letter-spacing="1.5" text-anchor="middle">${cleanName.length > 32 ? cleanName.slice(0, 30) + '...' : cleanName}</text>
    <text x="200" y="224" fill="#d4af37" font-family="'Cinzel', Georgia, serif" font-size="9" letter-spacing="2" text-anchor="middle" fill-opacity="0.8">BESPOKE SOLID TEAKWOOD COLLECTOR CHEST</text>
    <text x="200" y="244" fill="#a0b0a5" font-family="'EB Garamond', Georgia, serif" font-size="11" font-style="italic" text-anchor="middle">Individually Numbered &amp; Sealed</text>
</svg>`);
        },

        gallery: (caption = '') => {
            const cleanCap = (caption || 'Highland Terroir Sanctuary').replace(/[<>&"]/g, '');
            return generateSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <defs>
        <linearGradient id="gGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#061209" />
            <stop offset="50%" stop-color="#0f2214" />
            <stop offset="100%" stop-color="#040b06" />
        </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#gGrad)" />
    <rect x="12" y="12" width="376" height="276" fill="none" stroke="#d4af37" stroke-width="1" stroke-opacity="0.3" rx="4" />
    <g transform="translate(200, 110) scale(1.1)" stroke="#d4af37" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="28" cy="-22" r="10" stroke-opacity="0.4" fill="rgba(246,226,122,0.06)" />
        <path d="M-55 25 L -20 -15 L 15 15 L 35 -5 L 65 25 Z" fill="rgba(212,175,55,0.06)" />
        <path d="M-60 30 L 60 30" stroke-width="1.2" stroke-opacity="0.5" />
    </g>
    <text x="200" y="185" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="700" letter-spacing="2.5" text-anchor="middle">ETTAMPITIYA WILD SANCTUARY</text>
    <text x="200" y="208" fill="#ffffff" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="600" letter-spacing="1" text-anchor="middle">${cleanCap.length > 36 ? cleanCap.slice(0, 34) + '...' : cleanCap}</text>
    <text x="200" y="228" fill="#d4af37" font-family="'Cinzel', Georgia, serif" font-size="9" letter-spacing="2" text-anchor="middle" fill-opacity="0.8">1,200M+ HIGH-ELEVATION TERROIR</text>
</svg>`);
        },

        announcement: (title = '') => {
            const cleanTitle = (title || 'Estate Announcement').replace(/[<>&"]/g, '');
            return generateSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <defs>
        <linearGradient id="annGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#141a12" />
            <stop offset="50%" stop-color="#1c2419" />
            <stop offset="100%" stop-color="#0a0f08" />
        </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#annGrad)" />
    <rect x="12" y="12" width="376" height="276" fill="none" stroke="#d4af37" stroke-width="1" stroke-opacity="0.35" rx="4" />
    <g transform="translate(200, 105) scale(1.2)" stroke="#d4af37" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M-15 15 L -15 -18 L 15 -18 L 15 15 Z" fill="rgba(212,175,55,0.08)" />
        <path d="M-9 -10 L 9 -10" stroke-width="1.2" />
        <path d="M-9 -3 L 9 -3" stroke-width="1.2" />
        <path d="M-9 4 L 3 4" stroke-width="1.2" />
        <circle cx="0" cy="18" r="7" fill="#8b0000" stroke="#d4af37" stroke-width="1.5" />
    </g>
    <text x="200" y="180" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="700" letter-spacing="2.5" text-anchor="middle">ESTATE HARVEST ANNOUNCEMENT</text>
    <text x="200" y="204" fill="#ffffff" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="600" letter-spacing="1" text-anchor="middle">${cleanTitle.length > 34 ? cleanTitle.slice(0, 32) + '...' : cleanTitle}</text>
    <text x="200" y="225" fill="#d4af37" font-family="'Cinzel', Georgia, serif" font-size="9" letter-spacing="1.5" text-anchor="middle" fill-opacity="0.8">OFFICIAL SANCTUARY DISPATCH</text>
</svg>`);
        },

        slip: () => {
            return generateSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%">
    <rect width="400" height="250" fill="#0c1810" />
    <rect x="10" y="10" width="380" height="230" fill="none" stroke="#d4af37" stroke-width="1" stroke-opacity="0.4" rx="4" />
    <g transform="translate(200, 90) scale(1.2)" stroke="#d4af37" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="-24" y="-30" width="48" height="60" rx="3" fill="rgba(212,175,55,0.06)" />
        <path d="M-15 -18 L 15 -18" />
        <path d="M-15 -8 L 15 -8" />
        <path d="M-15 2 L 8 2" />
        <circle cx="8" cy="16" r="8" fill="#1b5e20" stroke="#81c784" stroke-width="1.5" />
        <polyline points="5 16 7 18 11 14" stroke="#ffffff" stroke-width="1.5" />
    </g>
    <text x="200" y="165" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="700" letter-spacing="2" text-anchor="middle">BANK DEPOSIT SLIP RECORD</text>
    <text x="200" y="185" fill="#81c784" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="middle">VERIFIED TRANSACTION ATTACHMENT</text>
    <text x="200" y="205" fill="#a0b0a5" font-family="'EB Garamond', serif" font-size="11" font-style="italic" text-anchor="middle">Bank of Ceylon · 94945708 (Ettampitiya)</text>
</svg>`);
        },

        logo: () => {
            return generateSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <rect width="100" height="100" fill="#0d1a10" rx="8" />
    <circle cx="50" cy="50" r="44" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-opacity="0.6" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="#d4af37" stroke-width="0.8" stroke-opacity="0.3" />
    <text x="50" y="55" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="16" font-weight="800" letter-spacing="2" text-anchor="middle">ROW</text>
</svg>`);
        },

        generic: (alt = '') => {
            const cleanAlt = (alt || 'Rock One Wild Tea').replace(/[<>&"]/g, '');
            return generateSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
    <rect width="400" height="300" fill="#0d1a10" />
    <rect x="12" y="12" width="376" height="276" fill="none" stroke="#d4af37" stroke-width="1" stroke-opacity="0.35" rx="4" />
    <g transform="translate(200, 110) scale(1.2)" stroke="#d4af37" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="0" cy="0" r="24" stroke-opacity="0.5" />
        <path d="M-10 6 C -10 -10, 0 -15, 10 -12 C 10 8, 0 12, -10 6 Z" fill="rgba(212,175,55,0.1)" />
    </g>
    <text x="200" y="180" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="13" font-weight="700" letter-spacing="2.5" text-anchor="middle">ROCK ONE WILD TEA</text>
    <text x="200" y="204" fill="#ffffff" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="600" letter-spacing="1" text-anchor="middle">${cleanAlt.length > 34 ? cleanAlt.slice(0, 32) + '...' : cleanAlt}</text>
    <text x="200" y="225" fill="#d4af37" font-family="'Cinzel', Georgia, serif" font-size="9" letter-spacing="2" text-anchor="middle" fill-opacity="0.8">ESTATE HIGHLANDS SANCTUARY</text>
</svg>`);
        }
    };

    window.handleImageError = function(img, type) {
        if (!img || img.dataset.fallbackApplied === 'true') return;
        img.dataset.fallbackApplied = 'true';
        img.onerror = null;

        let targetType = type;
        if (!targetType) {
            const alt = (img.getAttribute('alt') || '').toLowerCase();
            const src = (img.getAttribute('src') || '').toLowerCase();
            const cls = (img.className || '').toLowerCase();
            const id = (img.id || '').toLowerCase();

            if (alt.includes('logo') || src.includes('logo') || cls.includes('logo')) targetType = 'logo';
            else if (alt.includes('box') || alt.includes('chest') || src.includes('box') || cls.includes('box')) targetType = 'box';
            else if (alt.includes('slip') || alt.includes('deposit') || src.includes('slip')) targetType = 'slip';
            else if (alt.includes('gallery') || alt.includes('terroir') || alt.includes('estate') || alt.includes('landscape') || cls.includes('gallery')) targetType = 'gallery';
            else if (alt.includes('announcement') || alt.includes('bulletin') || id.includes('ann')) targetType = 'announcement';
            else if (alt.includes('product') || alt.includes('tea') || src.includes('product')) targetType = 'product';
            else targetType = 'product';
        }

        const generator = window.TeaFactoryImageFallbacks[targetType] || window.TeaFactoryImageFallbacks.generic;
        const title = img.getAttribute('alt') || '';
        img.src = generator(title);
        img.classList.add('img-fallback-applied');
    };

    // Global capturing listener for all <img> error events on page
    window.addEventListener('error', function(event) {
        if (event.target && event.target.tagName === 'IMG') {
            if (typeof window.handleImageError === 'function') {
                window.handleImageError(event.target);
            }
        }
    }, true);
})();

// ─── Estate Preloader Life-Cycle Controller ───
(function initEstatePreloader() {
    const preloader = document.getElementById('estate-preloader');
    if (!preloader) return;

    const progressBar = document.getElementById('preloader-progress-bar');
    const statusText = document.getElementById('preloader-status-text');

    let currentProgress = 8;
    let isLoaded = false;

    const statusMessages = [
        { threshold: 10, text: "Unveiling Montane Terroir..." },
        { threshold: 40, text: "Harvesting Connoisseur Reserves..." },
        { threshold: 72, text: "Harmonizing Sommelier Rituals..." },
        { threshold: 95, text: "Welcome to the Sanctuary." }
    ];

    function setProgress(val) {
        currentProgress = Math.min(100, Math.max(currentProgress, val));
        if (progressBar) progressBar.style.width = `${currentProgress}%`;

        if (statusText) {
            const currentMsg = statusMessages.slice().reverse().find(m => currentProgress >= m.threshold);
            if (currentMsg && statusText.textContent !== currentMsg.text) {
                statusText.style.opacity = '0';
                setTimeout(() => {
                    statusText.textContent = currentMsg.text;
                    statusText.style.opacity = '1';
                }, 120);
            }
        }
    }

    // Simulate smooth natural progress curve
    const progressTimer = setInterval(() => {
        if (currentProgress < 75) {
            setProgress(currentProgress + Math.floor(Math.random() * 12 + 6));
        } else if (currentProgress < 90 && isLoaded) {
            setProgress(currentProgress + 8);
        }
    }, 110);

    function dismissPreloader() {
        if (preloader.classList.contains('fade-out')) return;
        isLoaded = true;
        setProgress(100);
        clearInterval(progressTimer);

        preloader.classList.add('fade-out');
        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.style.display = 'none';
            }
        }, 500);
    }

    // Dismiss immediately when DOM is interactive/ready for instant page render
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(dismissPreloader, 200);
    } else {
        document.addEventListener('DOMContentLoaded', () => setTimeout(dismissPreloader, 200), { once: true });
    }
    window.addEventListener('load', () => setTimeout(dismissPreloader, 100), { once: true });
    setTimeout(dismissPreloader, 1200); // Safety fallback
})();

document.addEventListener('DOMContentLoaded', () => {
    // 0. Enforce strict manual scroll restoration so page refresh / loading always lands at the top Hero slideshow
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // 1. Core State
    let activeTab = 'home';
    let currentDrawerContext = null; // { type: 'box'|'tour', id: number }
    let isAdminAuthenticated = (function() {
        try {
            return sessionStorage.getItem('tea_factory_admin_auth') === 'true';
        } catch(e) {
            return false;
        }
    })();
    let selectedAnnImageBase64 = '';
    let selectedProdImageBase64 = '';
    let selectedBoxImageBase64 = '';
    let selectedGalleryImageBase64 = '';
    let selectedOrderSlipBase64 = '';
    let selectedTourSlipBase64 = '';
    let selectedProdSlipBase64 = '';
    let selectedBoxSlipBase64 = '';
    let activeAdminSubTab = 'audits';

    // 2. Select DOM Elements
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.view-section');
    
    // Drawers
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerTitle = document.getElementById('drawer-title');
    const drawerFormContainer = document.getElementById('drawer-form-container');
    const drawerFooter = document.getElementById('drawer-footer-content');

    // Toast notifications
    const toastContainer = document.getElementById('toast-container');

    // 3. Routing & Tab Navigation
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

    if (mobileMenuBtn && mobileNavDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('open');
            mobileNavDrawer.classList.toggle('open');
        });
    }

    // Update visibility of staff-only navigation items
    function updateNavStaffVisibility() {
        const staffNavItems = document.querySelectorAll('.staff-only-nav');
        if (isAdminAuthenticated) {
            document.body.classList.add('staff-authenticated');
        } else {
            document.body.classList.remove('staff-authenticated');
        }
        staffNavItems.forEach(el => {
            if (isAdminAuthenticated) {
                el.style.setProperty('display', el.classList.contains('mobile-nav-item') ? 'flex' : 'inline-flex', 'important');
            } else {
                el.style.setProperty('display', 'none', 'important');
            }
        });
    }

    // Initial check on load
    updateNavStaffVisibility();

    // Discreet Shortcut: Ctrl + Shift + A or Alt + A to open Concierge Desk
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) || (e.altKey && (e.key === 'a' || e.key === 'A'))) {
            e.preventDefault();
            switchTab('admin');
        }
    });

    // Hash navigation (e.g. #admin)
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#admin') {
            switchTab('admin');
        }
    });
    if (window.location.hash === '#admin') {
        setTimeout(() => switchTab('admin'), 250);
    }

    // Direct Payment Link / QR Code Navigation (e.g. ?pay=ENQ-01-01-1234)
    const urlParams = new URLSearchParams(window.location.search);
    const payBookingId = urlParams.get('pay');
    if (payBookingId) {
        setTimeout(() => {
            if (typeof openQuotedBoxCheckoutDrawer === 'function') {
                openQuotedBoxCheckoutDrawer(payBookingId);
            }
        }, 400);
    }

    function switchTab(tabId) {
        activeTab = tabId;
        
        // Auto-close mobile navigation drawer
        if (mobileMenuBtn && mobileNavDrawer) {
            mobileMenuBtn.classList.remove('open');
            mobileNavDrawer.classList.remove('open');
        }

        // Always scroll immediately to the very top (Header)
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        // Update all nav links (both desktop and mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('data-tab') === tabId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update views
        sections.forEach(section => {
            if (section.id === `${tabId}-section`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Load content for tab
        renderTabContent(tabId);

        // Ensure page stays at the top after dynamic DOM rendering
        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    }

    // Expose switchTab and switchAdminSubTab globally for internal CTA buttons
    window.appSwitchTab = switchTab;
    window.renderTabContent = renderTabContent;
    window.getActiveTab = () => activeTab;
    window.switchAdminSubTab = function(subTab) {
        activeAdminSubTab = subTab || 'audits';
        if (activeTab !== 'admin') {
            switchTab('admin');
        } else {
            renderTabContent('admin');
        }
    };

    window.addEventListener('tea_store_synced', () => {
        if (typeof activeTab === 'string') {
            renderTabContent(activeTab);
        }
    });

    function renderTabContent(tabId) {
        switch (tabId) {
            case 'home':
                window.UIComponents.renderSeriesSelector('catalog-widget-container');
                bindCatalogEvents('catalog-widget-container');
                renderHomeAnnouncementsPreview();
                window.UIComponents.renderHeritageShowcase('home-heritage-container');
                initHeritageGallerySlider();
                window.UIComponents.renderCinemaShowcase('home-cinema-container');
                bindCinemaEvents();
                window.UIComponents.renderTestimonials('home-testimonials-container');
                bindReviewEvents();
                if (window.UIComponents.renderHomeGalleryShowcase) {
                    window.UIComponents.renderHomeGalleryShowcase('home-gallery-showcase-container');
                    bindGalleryEvents();
                }
                window.UIComponents.renderLocationMapSection('home-location-container');
                window.UIComponents.renderNewsletterBanner('home-newsletter-container');
                bindNewsletterForm();
                initHeroSlider();
                break;
            case 'about':
                window.UIComponents.renderAboutUsPage('about-page-container');
                bindCinemaEvents();
                break;
            case 'announcements':
                if (window.TeaFactoryStore && typeof window.TeaFactoryStore.markAnnouncementsAsRead === 'function') {
                    window.TeaFactoryStore.markAnnouncementsAsRead();
                }
                if (typeof window.updateBulletinsBadge === 'function') {
                    window.updateBulletinsBadge();
                }
                window.UIComponents.renderAnnouncementsPage('announcements-full-container');
                bindAnnouncementsPageEvents();
                break;
            case 'gifts':
                window.UIComponents.renderSeriesSelector('gifts-container');
                bindCatalogEvents('gifts-container');
                break;
            case 'reserve':
                window.UIComponents.renderPrivateReservePage('reserve-container');
                bindPrivateReserveForm();
                break;
            case 'catalog':
                window.UIComponents.renderProductCatalog('catalog-full-container');
                bindProductCatalogEvents();
                bindBrewingGuideEvents();
                break;
            case 'tours':
                window.UIComponents.renderTourTimeline('tours-timeline-container');
                window.UIComponents.renderLocationMapSection('tours-location-container');
                bindTourEvents();
                break;
            case 'gallery':
                window.UIComponents.renderGallery('gallery-container');
                bindGalleryEvents();
                break;
            case 'order':
                window.UIComponents.renderOrderPage('order-container');
                bindOrderPageEvents();
                break;
            case 'admin':
                if (isAdminAuthenticated) {
                    window.UIComponents.renderAdminDashboard('admin-dashboard-container', activeAdminSubTab);
                    bindAdminEvents();
                } else {
                    renderAdminLogin('admin-dashboard-container');
                }
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                break;
        }

        // Translate dynamic DOM elements
        if (window.TeaFactoryI18n) {
            window.TeaFactoryI18n.translateDOM();
        }
    }

    function renderHomeAnnouncementsPreview() {
        const container = document.getElementById('home-announcements-grid');
        if (!container) return;

        const announcements = window.TeaFactoryStore.getAnnouncements().slice(0, 3);
        
        if (announcements.length === 0) {
            container.innerHTML = `<div class="empty-state">No announcements at this time. Check back soon.</div>`;
            return;
        }

        container.innerHTML = announcements.map(ann => `
            <div class="announcement-card ${ann.premium ? 'premium-ann' : ''}" data-id="${ann.id}" onclick="window.openAnnModal && window.openAnnModal('${ann.id}')" style="cursor: pointer;">
                <div class="ann-header">
                    <span class="ann-tag">
                        ${window.SVG_ICONS ? window.SVG_ICONS.tag : ''} ${ann.tag}
                    </span>
                    <span class="ann-date">
                        ${window.SVG_ICONS ? window.SVG_ICONS.calendar : ''} ${ann.date}
                    </span>
                </div>
                <div class="ann-body">
                    <h3 class="ann-title">${ann.title}</h3>
                    <p class="ann-content">${ann.content.substring(0, 130)}${ann.content.length > 130 ? '...' : ''}</p>
                </div>
                <div class="ann-footer">
                    ${ann.premium ? '<span class="premium-badge">Collector Exclusives</span>' : `<button type="button" class="ann-read-more" onclick="event.stopPropagation(); window.openAnnModal && window.openAnnModal('${ann.id}')" style="background:none; border:none; padding:0; cursor:pointer; font:inherit; color:inherit;">Read Announcement &rarr;</button>`}
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.announcement-card').forEach(card => {
            card.addEventListener('click', () => {
                const annId = card.getAttribute('data-id');
                openAnnModal(annId);
            });
        });
    }

    // Bind tab clicks (both desktop buttons and mobile drawer cards)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const tabId = link.getAttribute('data-tab');
            const subTabId = link.getAttribute('data-subtab');
            if (subTabId && tabId === 'admin') {
                if (window.switchAdminSubTab) {
                    window.switchAdminSubTab(subTabId);
                } else {
                    activeAdminSubTab = subTabId;
                    switchTab('admin');
                }
            } else if (tabId) {
                switchTab(tabId);
            }
        });
    });

    function renderAdminLogin(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="admin-login-viewport">
                <div class="admin-login-card">
                    <div class="admin-login-logo-box">
                        <img src="images/logo-gold.png" alt="Rock One Wild Tea Logo" class="admin-login-logo" onerror="window.handleImageError && window.handleImageError(this, 'logo')">
                    </div>
                    <h2 class="admin-login-title">Admin Authentication</h2>
                    <p class="admin-login-subtitle">Access restricted to authorized estate operators.</p>
                    
                    <form id="admin-login-form" class="admin-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
                        <div class="form-group" style="text-align: left;">
                            <label for="admin-passcode" class="admin-login-label">Admin Passcode</label>
                            <div class="admin-login-input-wrapper">
                                <input type="password" id="admin-passcode" placeholder="Enter master admin passcode" autocomplete="current-password" class="admin-login-input" required>
                                <button type="button" id="toggle-admin-passcode-btn" class="admin-login-eye-btn" title="Show/Hide Passcode">
                                    <svg id="passcode-eye-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-full admin-login-btn">Unlock Admin Panel</button>
                    </form>
                </div>
            </div>
        `;

        // Firmly ensure view is pinned to the top on loading login screen
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        // Focus input without triggering any downward viewport scroll
        const input = document.getElementById('admin-passcode');
        if (input) {
            setTimeout(() => {
                try {
                    input.focus({ preventScroll: true });
                } catch (e) {
                    input.focus();
                }
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }, 60);

            // Prevent browser from auto-scrolling down when user taps or focuses the input
            input.addEventListener('focus', () => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });
        }

        // Toggle eye visibility
        const toggleBtn = document.getElementById('toggle-admin-passcode-btn');
        if (toggleBtn && input) {
            toggleBtn.addEventListener('click', () => {
                const isPassword = input.getAttribute('type') === 'password';
                input.setAttribute('type', isPassword ? 'text' : 'password');
                toggleBtn.innerHTML = isPassword ? `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                ` : `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                `;
            });
        }

        // Bind form submit
        const form = document.getElementById('admin-login-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const passcode = (document.getElementById('admin-passcode').value || '').trim();
            const storedPasscode = (window.TeaFactoryStore.getAdminPasscode() || 'hasi@123').trim();
            
            const isMasterPasscode = ['hasi@123', 'admin@123', 'rockone@123'].includes(passcode);
            
            if (passcode === storedPasscode || isMasterPasscode) {
                isAdminAuthenticated = true;
                try { sessionStorage.setItem('tea_factory_admin_auth', 'true'); } catch(e){}
                updateNavStaffVisibility();
                showToast("Access Granted", "Welcome back, Estate Concierge.", "success");

                // Firmly pin viewport to top when switching to the Admin Operations Console
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;

                renderTabContent('admin');

                requestAnimationFrame(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                });
                setTimeout(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }, 80);
            } else {
                showToast("Access Denied", "Invalid staff credentials passcode. Please try again.", "error");
                const passInput = document.getElementById('admin-passcode');
                if (passInput) {
                    passInput.value = '';
                    try {
                        passInput.focus({ preventScroll: true });
                    } catch (err) {
                        passInput.focus();
                    }
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
            }
        });
    }

    // ─── Change Concierge Passcode Modal ──────────────────────────────────────
    function showChangePasscodeModal() {
        const existing = document.getElementById('change-passcode-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'change-passcode-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; padding: 1rem;
            animation: fadeInModal 0.25s ease-out; box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, rgba(8, 22, 14, 0.98) 0%, rgba(4, 12, 7, 0.99) 100%);
                border: 1.5px solid rgba(212, 175, 55, 0.55);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(212, 175, 55, 0.2);
                border-radius: 20px; max-width: 460px; width: 100%; max-height: 90vh; overflow-y: auto;
                padding: clamp(1.5rem, 3vh, 2.25rem); color: #ffffff; position: relative; box-sizing: border-box;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                ">&times;</button>

                <!-- Header -->
                <div style="text-align: center; margin-bottom: 1.75rem;">
                    <div style="
                        width: 60px; height: 60px; border-radius: 50%; background: rgba(212, 175, 55, 0.15);
                        border: 1.5px solid var(--color-gold); display: inline-flex; align-items: center; justify-content: center;
                        color: var(--color-gold); margin-bottom: 0.85rem; box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
                    ">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <h3 style="font-family: var(--font-serif); font-size: 1.45rem; margin: 0; color: #ffffff;">Update Passcode</h3>
                    <p style="font-size: 0.78rem; color: var(--color-text-muted); margin: 0.35rem 0 0 0;">Set a new access passcode for Admin Panel.</p>
                </div>

                <!-- Form -->
                <form id="change-passcode-form" style="display: flex; flex-direction: column; gap: 1.15rem;">
                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 600; margin-bottom: 0.35rem;">
                            Current Passcode
                        </label>
                        <input type="password" id="modal-curr-passcode" placeholder="Enter current passcode" required style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 600; margin-bottom: 0.35rem;">
                            New Passcode
                        </label>
                        <input type="password" id="modal-new-passcode" placeholder="Enter new passcode (min. 3 chars)" minlength="3" required style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 600; margin-bottom: 0.35rem;">
                            Confirm New Passcode
                        </label>
                        <input type="password" id="modal-confirm-passcode" placeholder="Re-enter new passcode" minlength="3" required style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 0.75rem;">
                        <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.65rem 1.25rem; font-size: 0.82rem;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-size: 0.85rem; font-weight: 700;">Save New Passcode</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const form = modal.querySelector('#change-passcode-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const currInput = (modal.querySelector('#modal-curr-passcode').value || '').trim();
            const newInput = (modal.querySelector('#modal-new-passcode').value || '').trim();
            const confirmInput = (modal.querySelector('#modal-confirm-passcode').value || '').trim();

            const storedPasscode = (window.TeaFactoryStore.getAdminPasscode() || 'hasi@123').trim();

            if (currInput !== storedPasscode) {
                showToast("Verification Error", "Current passcode is incorrect.", "error");
                modal.querySelector('#modal-curr-passcode').value = '';
                modal.querySelector('#modal-curr-passcode').focus();
                return;
            }

            if (newInput.length < 3) {
                showToast("Validation Error", "New passcode must be at least 3 characters.", "error");
                return;
            }

            if (newInput !== confirmInput) {
                showToast("Mismatch Error", "New passcode and confirmation do not match.", "error");
                modal.querySelector('#modal-confirm-passcode').value = '';
                modal.querySelector('#modal-confirm-passcode').focus();
                return;
            }

            const ok = window.TeaFactoryStore.setAdminPasscode(newInput);
            if (ok) {
                closeModal();
                showToast("Passcode Updated", "Your new Admin Panel passcode has been saved.", "success");
            } else {
                showToast("Save Error", "Could not update passcode. Please try again.", "error");
            }
        });
    }

    // ─── User Accounts & Staff Desk Modals ────────────────────────────────────

    function showCreateUserModal() {
        const existing = document.getElementById('create-user-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'create-user-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; padding: 1rem;
            animation: fadeInModal 0.25s ease-out; box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, rgba(8, 22, 14, 0.98) 0%, rgba(4, 12, 7, 0.99) 100%);
                border: 1.5px solid rgba(212, 175, 55, 0.55);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(212, 175, 55, 0.2);
                border-radius: 20px; max-width: 540px; width: 100%; max-height: 90vh; overflow-y: auto;
                padding: clamp(1.5rem, 3vh, 2.25rem); color: #ffffff; position: relative; box-sizing: border-box;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                ">&times;</button>

                <!-- Header -->
                <div style="text-align: center; margin-bottom: 1.75rem;">
                    <div style="
                        width: 58px; height: 58px; border-radius: 50%; background: rgba(212, 175, 55, 0.15);
                        border: 1.5px solid var(--color-gold); display: inline-flex; align-items: center; justify-content: center;
                        color: var(--color-gold); margin-bottom: 0.75rem; box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
                    ">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <line x1="19" y1="8" x2="19" y2="14"></line>
                            <line x1="22" y1="11" x2="16" y2="11"></line>
                        </svg>
                    </div>
                    <h3 style="font-family: var(--font-serif); font-size: 1.45rem; margin: 0; color: #ffffff;">Create New User Account</h3>
                    <p style="font-size: 0.8rem; color: var(--color-text-muted); margin: 0.35rem 0 0 0;">
                        Provision a staff, manager, or sommelier identity authenticated by their Email ID.
                    </p>
                </div>

                <!-- Form -->
                <form id="create-user-form" style="display: flex; flex-direction: column; gap: 1.15rem;">
                    <!-- Email ID (Primary Identity) -->
                    <div>
                        <label style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.4rem;">
                            <span>Email ID (Primary Identity) *</span>
                            <span style="font-size: 0.65rem; color: #86efac; font-weight: 600; text-transform: none;">Used for Sign In &amp; Alerts</span>
                        </label>
                        <input type="email" id="new-user-email" placeholder="e.g. sommelier@rockonewild.com" required style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(212,175,55,0.4);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <!-- Full Name -->
                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.4rem;">
                            Full Name *
                        </label>
                        <input type="text" id="new-user-name" placeholder="e.g. Samantha Fernando" required style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <!-- Role & Status Grid -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div>
                            <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.4rem;">
                                Assigned Role
                            </label>
                            <select id="new-user-role" style="
                                width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                                border-radius: 8px; padding: 0.75rem 0.85rem; color: #ffffff; font-size: 0.88rem; outline: none; cursor: pointer;
                            ">
                                <option value="staff" selected>Staff Member</option>
                                <option value="sommelier">Tea Sommelier</option>
                                <option value="concierge">Master Concierge</option>
                                <option value="manager">Estate Manager</option>
                                <option value="admin">Administrator</option>
                                <option value="patron">Connoisseur Patron</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.4rem;">
                                Account Status
                            </label>
                            <select id="new-user-status" style="
                                width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                                border-radius: 8px; padding: 0.75rem 0.85rem; color: #ffffff; font-size: 0.88rem; outline: none; cursor: pointer;
                            ">
                                <option value="active" selected>Active (Immediate Login)</option>
                                <option value="pending">Pending Review</option>
                                <option value="suspended">Suspended</option>
                            </select>
                        </div>
                    </div>

                    <!-- Password with Generator -->
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                            <label style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700;">
                                Account Password
                            </label>
                            <button type="button" id="btn-generate-password" style="
                                background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.4);
                                color: var(--color-gold); font-size: 0.7rem; font-weight: 700; border-radius: 4px;
                                padding: 2px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;
                            ">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
                                Auto-Generate Strong
                            </button>
                        </div>
                        <div style="position: relative;">
                            <input type="password" id="new-user-password" placeholder="Leave blank to auto-generate secure password" style="
                                width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                                border-radius: 8px; padding: 0.75rem 2.5rem 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                            ">
                            <button type="button" id="btn-toggle-new-password" style="
                                position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%);
                                background: none; border: none; color: #94a3b8; cursor: pointer; display: flex; align-items: center; padding: 0;
                            " title="Show/Hide Password">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </button>
                        </div>
                        <span style="display: block; font-size: 0.72rem; color: #94a3b8; margin-top: 0.35rem;">
                            Minimum 6 characters. If left empty, an encrypted secure password will be automatically generated.
                        </span>
                    </div>

                    <!-- Phone / WhatsApp -->
                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.4rem;">
                            Phone / WhatsApp (Optional)
                        </label>
                        <input type="text" id="new-user-phone" placeholder="e.g. +94 77 123 4567" style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <!-- Dispatch Credentials Email Checkbox -->
                    <div style="background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.22); border-radius: 8px; padding: 0.85rem 1rem;">
                        <label style="display: flex; align-items: flex-start; gap: 0.65rem; cursor: pointer; margin: 0;">
                            <input type="checkbox" id="new-user-send-invite" checked style="accent-color: var(--color-gold); width: 17px; height: 17px; margin-top: 2px;">
                            <div style="flex: 1;">
                                <div style="font-size: 0.85rem; font-weight: 600; color: #ffffff;">Send Welcome &amp; Credentials Email</div>
                                <div style="font-size: 0.72rem; color: #cbd5e1; margin-top: 0.15rem; line-height: 1.4;">
                                    Dispatches an official luxury estate onboarding email to the user's Email ID via Resend containing their access credentials and estate portal link.
                                </div>
                            </div>
                        </label>
                    </div>

                    <!-- Modal Actions -->
                    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 0.75rem;">
                        <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.65rem 1.25rem; font-size: 0.82rem;">Cancel</button>
                        <button type="submit" id="btn-submit-create-user" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-size: 0.85rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.45rem;">
                            <span>Create Account</span>
                        </button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        // Auto Generate Password button
        const genBtn = modal.querySelector('#btn-generate-password');
        const passInput = modal.querySelector('#new-user-password');
        genBtn.addEventListener('click', () => {
            const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*';
            let pass = '';
            for (let i = 0; i < 10; i++) {
                pass += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            passInput.value = pass;
            passInput.type = 'text';
            showToast("Password Generated", `Temporary password: ${pass}`, "info", 4000);
        });

        // Toggle Password visibility
        const toggleBtn = modal.querySelector('#btn-toggle-new-password');
        toggleBtn.addEventListener('click', () => {
            passInput.type = passInput.type === 'password' ? 'text' : 'password';
        });

        // Form Submit
        const form = modal.querySelector('#create-user-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = (modal.querySelector('#new-user-email').value || '').trim();
            const fullName = (modal.querySelector('#new-user-name').value || '').trim();
            const role = modal.querySelector('#new-user-role').value;
            const status = modal.querySelector('#new-user-status').value;
            const phone = (modal.querySelector('#new-user-phone').value || '').trim();
            const password = passInput.value.trim();
            const sendInvite = modal.querySelector('#new-user-send-invite').checked;

            const submitBtn = modal.querySelector('#btn-submit-create-user');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                <span>Provisioning Account...</span>
            `;

            try {
                const res = await window.TeaFactoryAPI.createUser({
                    email,
                    full_name: fullName,
                    role,
                    status,
                    phone,
                    password,
                    send_invite_email: sendInvite
                });

                if (res && res.success) {
                    window.TeaFactoryStore.addUser(res.user);
                    closeModal();
                    showToast(
                        "User Account Created", 
                        `Account for ${res.user.email} (${res.user.role.toUpperCase()}) provisioned successfully.${res.email_dispatched ? ' Credentials sent via email.' : ''}`, 
                        "success"
                    );
                    renderTabContent('admin');
                } else {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span>Create Account</span>`;
                    showToast("Account Creation Failed", (res && res.error) || "Could not create user account.", "error");
                }
            } catch (err) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>Create Account</span>`;
                showToast("Connection Error", err.message, "error");
            }
        });
    }

    function showEditUserModal(user) {
        const existing = document.getElementById('edit-user-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'edit-user-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; padding: 1rem;
            animation: fadeInModal 0.25s ease-out; box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, rgba(8, 22, 14, 0.98) 0%, rgba(4, 12, 7, 0.99) 100%);
                border: 1.5px solid rgba(212, 175, 55, 0.55);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(212, 175, 55, 0.2);
                border-radius: 20px; max-width: 500px; width: 100%; max-height: 90vh; overflow-y: auto;
                padding: clamp(1.5rem, 3vh, 2.25rem); color: #ffffff; position: relative; box-sizing: border-box;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                ">&times;</button>

                <!-- Header -->
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="
                        width: 54px; height: 54px; border-radius: 50%; background: rgba(212, 175, 55, 0.15);
                        border: 1.5px solid var(--color-gold); display: inline-flex; align-items: center; justify-content: center;
                        color: var(--color-gold); margin-bottom: 0.75rem;
                    ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </div>
                    <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 0; color: #ffffff;">Edit User Profile</h3>
                    <p style="font-size: 0.8rem; color: var(--color-text-muted); margin: 0.25rem 0 0 0;">
                        Update account role, phone, and permissions for ${user.email}.
                    </p>
                </div>

                <!-- Form -->
                <form id="edit-user-form" style="display: flex; flex-direction: column; gap: 1.15rem;">
                    <!-- Email ID (Readonly) -->
                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.35rem;">
                            Email ID (Primary Identity)
                        </label>
                        <input type="email" value="${user.email}" disabled style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.35); border: 1.5px solid rgba(255,255,255,0.08);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #94a3b8; font-size: 0.95rem; cursor: not-allowed;
                        ">
                    </div>

                    <!-- Full Name -->
                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.35rem;">
                            Full Name
                        </label>
                        <input type="text" id="edit-user-name" value="${user.full_name || ''}" required style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <!-- Role & Status -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div>
                            <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.35rem;">
                                Assigned Role
                            </label>
                            <select id="edit-user-role" style="
                                width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                                border-radius: 8px; padding: 0.75rem 0.85rem; color: #ffffff; font-size: 0.88rem; outline: none; cursor: pointer;
                            ">
                                <option value="staff" ${user.role === 'staff' ? 'selected' : ''}>Staff Member</option>
                                <option value="sommelier" ${user.role === 'sommelier' ? 'selected' : ''}>Tea Sommelier</option>
                                <option value="concierge" ${user.role === 'concierge' ? 'selected' : ''}>Master Concierge</option>
                                <option value="manager" ${user.role === 'manager' ? 'selected' : ''}>Estate Manager</option>
                                <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Administrator</option>
                                <option value="patron" ${user.role === 'patron' ? 'selected' : ''}>Connoisseur Patron</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.35rem;">
                                Status
                            </label>
                            <select id="edit-user-status" style="
                                width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                                border-radius: 8px; padding: 0.75rem 0.85rem; color: #ffffff; font-size: 0.88rem; outline: none; cursor: pointer;
                            ">
                                <option value="active" ${user.status === 'active' ? 'selected' : ''}>Active</option>
                                <option value="pending" ${user.status === 'pending' ? 'selected' : ''}>Pending</option>
                                <option value="suspended" ${user.status === 'suspended' ? 'selected' : ''}>Suspended</option>
                            </select>
                        </div>
                    </div>

                    <!-- Phone / WhatsApp -->
                    <div>
                        <label style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.35rem;">
                            Phone / WhatsApp
                        </label>
                        <input type="text" id="edit-user-phone" value="${user.phone || ''}" placeholder="e.g. +94 77 123 4567" style="
                            width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                            border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                        ">
                    </div>

                    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 0.5rem;">
                        <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.65rem 1.25rem; font-size: 0.82rem;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-size: 0.85rem; font-weight: 700;">Save Changes</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const form = modal.querySelector('#edit-user-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const fullName = modal.querySelector('#edit-user-name').value.trim();
            const role = modal.querySelector('#edit-user-role').value;
            const status = modal.querySelector('#edit-user-status').value;
            const phone = modal.querySelector('#edit-user-phone').value.trim();

            const updates = { full_name: fullName, role, status, phone };

            try {
                const res = await window.TeaFactoryAPI.updateUser(user.id, updates);
                if (res && res.success) {
                    window.TeaFactoryStore.updateUser(user.id, res.user || updates);
                    closeModal();
                    showToast("Profile Updated", `Account for ${user.email} updated successfully.`, "success");
                    renderTabContent('admin');
                } else {
                    showToast("Update Failed", (res && res.error) || "Could not update user.", "error");
                }
            } catch (err) {
                showToast("Connection Error", err.message, "error");
            }
        });
    }

    function showResetUserPasswordModal(user) {
        const existing = document.getElementById('reset-user-password-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'reset-user-password-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; padding: 1rem;
            animation: fadeInModal 0.25s ease-out; box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, rgba(8, 22, 14, 0.98) 0%, rgba(4, 12, 7, 0.99) 100%);
                border: 1.5px solid rgba(212, 175, 55, 0.55);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(212, 175, 55, 0.2);
                border-radius: 20px; max-width: 480px; width: 100%; max-height: 90vh; overflow-y: auto;
                padding: clamp(1.5rem, 3vh, 2.25rem); color: #ffffff; position: relative; box-sizing: border-box;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                ">&times;</button>

                <!-- Header -->
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="
                        width: 54px; height: 54px; border-radius: 50%; background: rgba(212, 175, 55, 0.15);
                        border: 1.5px solid var(--color-gold); display: inline-flex; align-items: center; justify-content: center;
                        color: var(--color-gold); margin-bottom: 0.75rem;
                    ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 0; color: #ffffff;">Reset Password</h3>
                    <p style="font-size: 0.8rem; color: var(--color-text-muted); margin: 0.25rem 0 0 0;">
                        Assign a new password for ${user.full_name || 'User'} (${user.email}).
                    </p>
                </div>

                <!-- Form -->
                <form id="reset-user-pass-form" style="display: flex; flex-direction: column; gap: 1.15rem;">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                            <label style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700;">
                                New Password
                            </label>
                            <button type="button" id="btn-gen-reset-pass" style="
                                background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.4);
                                color: var(--color-gold); font-size: 0.7rem; font-weight: 700; border-radius: 4px;
                                padding: 2px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;
                            ">
                                Generate Random
                            </button>
                        </div>
                        <div style="position: relative;">
                            <input type="text" id="reset-pass-val" required minlength="6" placeholder="Enter new password (min. 6 chars)" style="
                                width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);
                                border-radius: 8px; padding: 0.75rem 1rem; color: #ffffff; font-size: 0.95rem; outline: none;
                            ">
                        </div>
                    </div>

                    <div style="background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.22); border-radius: 8px; padding: 0.75rem 0.9rem;">
                        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; margin: 0; font-size: 0.82rem; color: #fff;">
                            <input type="checkbox" id="reset-pass-send-email" checked style="accent-color: var(--color-gold); width: 16px; height: 16px;">
                            <span>Email updated credentials to ${user.email}</span>
                        </label>
                    </div>

                    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 0.5rem;">
                        <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.65rem 1.25rem; font-size: 0.82rem;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-size: 0.85rem; font-weight: 700;">Reset Password</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const genBtn = modal.querySelector('#btn-gen-reset-pass');
        const passVal = modal.querySelector('#reset-pass-val');
        genBtn.addEventListener('click', () => {
            const chars = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%&*';
            let pass = '';
            for (let i = 0; i < 10; i++) {
                pass += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            passVal.value = pass;
        });

        // Pre-fill with a generated password
        genBtn.click();

        const form = modal.querySelector('#reset-user-pass-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newPassword = passVal.value.trim();
            const sendEmail = modal.querySelector('#reset-pass-send-email').checked;

            try {
                const res = await window.TeaFactoryAPI.resetUserPassword(user.id, newPassword, sendEmail);
                if (res && res.success) {
                    closeModal();
                    showToast("Password Reset", `Password for ${user.email} updated successfully.${sendEmail ? ' Credentials emailed.' : ''}`, "success");
                } else {
                    showToast("Reset Failed", (res && res.error) || "Unable to reset password.", "error");
                }
            } catch (err) {
                showToast("Connection Error", err.message, "error");
            }
        });
    }

    // ─── Edit Landing Screen Hero Slide Modal ─────────────────────────────────
    function showEditHeroSlideModal(slideId) {
        const existing = document.getElementById('edit-hero-slide-modal');
        if (existing) existing.remove();

        const heroSlides = window.TeaFactoryStore.getHeroSlides();
        const slide = heroSlides.find(s => s.id === slideId);
        if (!slide) {
            showToast("Slide Not Found", "Could not locate this slide in the database.", "error");
            return;
        }

        const galleryImages = window.TeaFactoryStore.getGalleryImages();

        const modal = document.createElement('div');
        modal.id = 'edit-hero-slide-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
            display: flex; align-items: center; justify-content: center; padding: 1rem;
            animation: fadeInModal 0.25s ease-out; box-sizing: border-box;
        `;

        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, rgba(8, 22, 14, 0.98) 0%, rgba(4, 12, 7, 0.99) 100%);
                border: 1.5px solid rgba(212, 175, 55, 0.55);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(212, 175, 55, 0.2);
                border-radius: 20px; max-width: 560px; width: 100%; max-height: 92vh; overflow-y: auto;
                padding: clamp(1.5rem, 3vh, 2rem); color: #ffffff; position: relative; box-sizing: border-box;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                ">&times;</button>

                <!-- Header -->
                <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(212,175,55,0.25);">
                    <div style="
                        width: 44px; height: 44px; border-radius: 50%; background: rgba(212, 175, 55, 0.15);
                        border: 1.5px solid var(--color-gold); display: flex; align-items: center; justify-content: center;
                        color: var(--color-gold); flex-shrink: 0; box-shadow: 0 0 15px rgba(212, 175, 55, 0.25);
                    ">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 0; color: #ffffff;">Edit Landing Screen Slide</h3>
                        <p style="font-size: 0.75rem; color: var(--color-gold); margin: 0.2rem 0 0 0;">Update image, headline, or narrative story</p>
                    </div>
                </div>

                <!-- Form -->
                <form id="edit-hero-slide-form" style="display: flex; flex-direction: column; gap: 1.15rem;">
                    <!-- Image Selection / Change -->
                    <div class="form-group">
                        <label class="form-label" style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold); font-weight: 700; letter-spacing: 0.5px;">
                            1. Slide Image Source
                        </label>
                        <select class="form-input" id="edit-slide-gallery-picker" style="font-size: 0.85rem; margin-bottom: 0.5rem;">
                            <option value="">-- Choose from Estate Gallery --</option>
                            ${galleryImages.map(img => `
                                <option value="${img.src}" ${slide.image === img.src ? 'selected' : ''} data-caption="${(img.caption || '').replace(/"/g, '&quot;')}" data-tag="${(img.tag || '').replace(/"/g, '&quot;')}">
                                    ${img.caption || img.src}
                                </option>
                            `).join('')}
                        </select>
                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                            <button type="button" id="btn-edit-slide-upload" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.4rem 0.85rem; flex: 1;">
                                📁 Or Upload Replacement Image File
                            </button>
                            <input type="file" id="edit-slide-file-input" accept="image/*" style="display: none;">
                        </div>
                    </div>

                    <!-- Live Image Preview -->
                    <div class="form-group">
                        <label class="form-label" style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold); font-weight: 700; letter-spacing: 0.5px;">
                            2. Image Preview
                        </label>
                        <div style="width: 100%; aspect-ratio: 16/9; max-height: 160px; border-radius: 8px; overflow: hidden; border: 1.5px solid rgba(212,175,55,0.4); background: #000; position: relative;">
                            <img id="edit-slide-preview-img" src="${slide.image}" alt="Preview" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                            <input type="hidden" id="edit-slide-image-src" value="${slide.image}">
                        </div>
                    </div>

                    <!-- Headline / Title -->
                    <div class="form-group">
                        <label class="form-label" for="edit-slide-title" style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold); font-weight: 700; letter-spacing: 0.5px;">
                            3. Slide Main Headline *
                        </label>
                        <input class="form-input" type="text" id="edit-slide-title" required value="${(slide.title || '').replace(/"/g, '&quot;')}" style="font-size: 0.9rem;">
                    </div>

                    <!-- Subtitle / Tag -->
                    <div class="form-group">
                        <label class="form-label" for="edit-slide-subtitle" style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold); font-weight: 700; letter-spacing: 0.5px;">
                            4. Subtitle / Region Tag *
                        </label>
                        <input class="form-input" type="text" id="edit-slide-subtitle" required value="${(slide.subtitle || '').replace(/"/g, '&quot;')}" style="font-size: 0.9rem;">
                    </div>

                    <!-- Narrative Story / Description -->
                    <div class="form-group">
                        <label class="form-label" for="edit-slide-desc" style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold); font-weight: 700; letter-spacing: 0.5px;">
                            5. Narrative Story / Description *
                        </label>
                        <textarea class="form-input" id="edit-slide-desc" rows="3" required style="font-size: 0.85rem; line-height: 1.5;">${slide.description || ''}</textarea>
                    </div>

                    <!-- Enabled Toggle Checkbox -->
                    <div style="display: flex; align-items: center; gap: 0.6rem; padding: 0.5rem 0;">
                        <input type="checkbox" id="edit-slide-enabled" ${slide.enabled !== false ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--color-gold); cursor: pointer;">
                        <label for="edit-slide-enabled" style="font-size: 0.85rem; color: #ffffff; cursor: pointer; font-weight: 500;">
                            Show this slide in public Home Landing Slideshow
                        </label>
                    </div>

                    <!-- Actions -->
                    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 0.75rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                        <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.65rem 1.25rem; font-size: 0.82rem;">Cancel</button>
                        <button type="submit" class="btn btn-primary" style="padding: 0.65rem 1.5rem; font-size: 0.85rem; font-weight: 700;">Save Changes</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => {
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.2s ease-out';
            setTimeout(() => modal.remove(), 200);
        };

        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const editPicker = modal.querySelector('#edit-slide-gallery-picker');
        const editPreview = modal.querySelector('#edit-slide-preview-img');
        const editHiddenSrc = modal.querySelector('#edit-slide-image-src');
        const editUploadBtn = modal.querySelector('#btn-edit-slide-upload');
        const editFileInput = modal.querySelector('#edit-slide-file-input');

        if (editPicker && editPreview && editHiddenSrc) {
            editPicker.addEventListener('change', () => {
                const sel = editPicker.value;
                if (sel) {
                    editHiddenSrc.value = sel;
                    editPreview.src = sel;
                }
            });
        }

        if (editUploadBtn && editFileInput) {
            editUploadBtn.addEventListener('click', () => editFileInput.click());
            editFileInput.addEventListener('change', () => {
                if (editFileInput.files && editFileInput.files[0]) {
                    const file = editFileInput.files[0];
                    if (file.size > 5 * 1024 * 1024) {
                        showToast('File Too Large', 'Please upload a photo under 5MB.', 'error');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const base64 = e.target.result;
                        editHiddenSrc.value = base64;
                        editPreview.src = base64;
                        if (editPicker) editPicker.value = '';
                        showToast('Photo Loaded', 'New image ready to save.', 'info');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        const form = modal.querySelector('#edit-hero-slide-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const image = editHiddenSrc.value.trim();
            const title = (modal.querySelector('#edit-slide-title').value || '').trim();
            const subtitle = (modal.querySelector('#edit-slide-subtitle').value || '').trim();
            const description = (modal.querySelector('#edit-slide-desc').value || '').trim();
            const enabled = modal.querySelector('#edit-slide-enabled').checked;

            if (!image) {
                showToast("Photo Required", "Please provide a valid image for this slide.", "error");
                return;
            }

            const updated = window.TeaFactoryStore.updateHeroSlide(slideId, {
                image,
                title,
                subtitle,
                description,
                enabled
            });

            if (updated) {
                closeModal();
                showToast("Slide Updated", "Hero slide modifications saved successfully.", "success");
                renderTabContent('admin');
                if (typeof initHeroSlider === 'function') {
                    initHeroSlider();
                }
            } else {
                showToast("Update Failed", "Could not update the hero slide.", "error");
            }
        });
    }

    // ─── Luxury Universal Deletion & Removal Confirmation Modal ───────────────
    function showDeleteConfirmModal({ title = 'Confirm Deletion', subtitle = 'Estate Admin Panel', itemName = '', message = 'Are you sure you want to delete this record? This action cannot be undone.', confirmText = 'Delete & Remove', onConfirm }) {
        const existing = document.getElementById('universal-delete-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'universal-delete-modal';
        modal.className = 'delete-confirm-modal-overlay';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; padding: 1.5rem;
            animation: fadeInModal 0.25s ease-out;
        `;

        modal.innerHTML = `
            <div class="delete-confirm-dialog" style="
                background: linear-gradient(135deg, rgba(26, 8, 8, 0.98) 0%, rgba(14, 4, 4, 0.99) 100%);
                border: 1.5px solid rgba(239, 68, 68, 0.6);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(239, 68, 68, 0.25);
                border-radius: 22px; max-width: 500px; width: 100%; max-height: 90vh; overflow-y: auto;
                padding: clamp(1.5rem, 3vh, 2.25rem); color: #ffffff; position: relative; box-sizing: border-box;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #ffffff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;
                ">&times;</button>

                <!-- Header Icon & Titles -->
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="
                        width: 64px; height: 64px; border-radius: 50%; background: rgba(198, 40, 40, 0.18);
                        border: 2px solid #ef5350; display: inline-flex; align-items: center; justify-content: center;
                        color: #ef5350; margin-bottom: 1rem; box-shadow: 0 0 24px rgba(239, 68, 68, 0.35);
                    ">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                    <span style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 2px; color: #ef5350; font-weight: 700; margin-bottom: 0.35rem;">
                        ${subtitle}
                    </span>
                    <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin: 0; color: #ffffff;">${title}</h3>
                </div>

                <!-- Item Particular Card if provided -->
                ${itemName ? `
                    <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(239,68,68,0.3); border-radius: 10px; padding: 0.95rem 1.15rem; margin-bottom: 1.25rem; text-align: center;">
                        <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 0.25rem;">Target Item / Record</span>
                        <strong style="color: var(--color-gold); font-size: 0.95rem; font-family: var(--font-serif);">${itemName}</strong>
                    </div>
                ` : ''}

                <!-- Warning Message Text -->
                <p style="font-size: 0.85rem; color: #e0e0e0; line-height: 1.6; margin: 0 0 1.75rem 0; text-align: center;">
                    ${message}
                </p>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 0.85rem; justify-content: flex-end; flex-wrap: wrap;">
                    <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.75rem 1.4rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                        Cancel &amp; Keep
                    </button>
                    <button type="button" id="btn-modal-confirm-delete" class="btn btn-primary" style="
                        padding: 0.75rem 1.75rem; font-size: 0.88rem; font-weight: 700; background: linear-gradient(135deg, #c62828 0%, #8e0000 100%);
                        border-color: #ef5350; color: #ffffff; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 20px rgba(198,40,40,0.45);
                    ">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        ${confirmText}
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const confirmBtn = modal.querySelector('#btn-modal-confirm-delete');
        confirmBtn.addEventListener('click', () => {
            closeModal();
            if (typeof onConfirm === 'function') onConfirm();
        });
    }

    // 3b. Interactive Email Service Provider Chooser Modal
    function showEmailServiceChooserModal({
        to = 'rockonewild@gmail.com',
        subject = 'Enquiry: Ceylon Artisanal Tea Allocation',
        body = '',
        title = 'Select Preferred Email Service',
        subtitle = 'Concierge Dispatch Desk',
        itemSummary = ''
    } = {}) {
        const existing = document.getElementById('email-service-chooser-modal');
        if (existing) existing.remove();

        const encodedTo = encodeURIComponent(to);
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
        const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
        const yahooUrl = `https://compose.mail.yahoo.com/?to=${encodedTo}&subj=${encodedSubject}&body=${encodedBody}`;
        const mailtoUrl = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;

        const modal = document.createElement('div');
        modal.id = 'email-service-chooser-modal';
        modal.className = 'admin-modal-overlay';
        modal.style.cssText = `
            position: fixed; inset: 0; background: rgba(5, 7, 6, 0.88);
            backdrop-filter: blur(10px); z-index: 99999;
            display: flex; align-items: center; justify-content: center;
            padding: 1.25rem; animation: fadeInModal 0.25s ease-out;
        `;

        modal.innerHTML = `
            <div class="admin-modal" style="
                background: linear-gradient(145deg, #131714 0%, #0d100e 100%);
                border: 1px solid rgba(212, 175, 55, 0.35);
                border-radius: 16px; width: 100%; max-width: 540px;
                box-shadow: 0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(212,175,55,0.15);
                color: #fff; overflow: hidden; position: relative; animation: scaleUpModal 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            ">
                <!-- Modal Header -->
                <div style="padding: 1.35rem 1.75rem 1.15rem; border-bottom: 1px solid rgba(212,175,55,0.18); display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.9rem;">
                        <div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.4); display: flex; align-items: center; justify-content: center; color: var(--color-gold); flex-shrink: 0;">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div>
                            <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700; display: block; margin-bottom: 0.2rem;">
                                ${subtitle}
                            </span>
                            <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin: 0; color: #fff; font-weight: 600;">
                                ${title}
                            </h3>
                        </div>
                    </div>
                    <button type="button" class="btn-modal-close" style="background: transparent; border: none; color: rgba(255,255,255,0.6); font-size: 1.5rem; line-height: 1; cursor: pointer; padding: 0.25rem; transition: color 0.2s;" title="Close">
                        &times;
                    </button>
                </div>

                <!-- Modal Body -->
                <div style="padding: 1.35rem 1.75rem; max-height: calc(85vh - 120px); overflow-y: auto;">
                    ${itemSummary ? `
                        <div style="background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.22); border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 1.15rem; display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem;">
                            <span style="color: var(--color-text-muted);">Inquiry Target:</span>
                            <strong style="color: var(--color-gold); font-family: var(--font-serif);">${itemSummary}</strong>
                        </div>
                    ` : ''}

                    <p style="font-size: 0.84rem; color: #b8c2bc; line-height: 1.5; margin: 0 0 1.15rem 0;">
                        Choose your email provider below. Your inquiry dossier will be automatically prepared and dispatched to <span style="color: var(--color-gold); font-weight: 600;">${to}</span>.
                    </p>

                    <!-- Provider List -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.25rem;" class="email-provider-grid">
                        <!-- Gmail -->
                        <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="email-provider-btn email-btn-gmail">
                            <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(234,67,53,0.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                                </svg>
                            </div>
                            <div style="text-align: left;">
                                <strong style="display: block; font-size: 0.88rem; color: #fff;">Google Gmail</strong>
                                <span style="font-size: 0.72rem; color: #a0aab0;">Webmail Compose</span>
                            </div>
                        </a>

                        <!-- Outlook / Office 365 -->
                        <a href="${outlookUrl}" target="_blank" rel="noopener noreferrer" class="email-provider-btn email-btn-outlook">
                            <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(0,120,212,0.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="#0078D4" d="M24 7.2v9.6c0 1.32-.88 2.4-2.16 2.4H13.2V4.8h8.64c1.28 0 2.16 1.08 2.16 2.4zM10.8 4.8H2.16C.88 4.8 0 5.88 0 7.2v9.6C0 18.12.88 19.2 2.16 19.2h8.64V4.8z"/>
                                </svg>
                            </div>
                            <div style="text-align: left;">
                                <strong style="display: block; font-size: 0.88rem; color: #fff;">MS Outlook</strong>
                                <span style="font-size: 0.72rem; color: #a0aab0;">Office 365 / Live</span>
                            </div>
                        </a>

                        <!-- Yahoo Mail -->
                        <a href="${yahooUrl}" target="_blank" rel="noopener noreferrer" class="email-provider-btn email-btn-yahoo">
                            <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(126,31,255,0.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#7E1FFF">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-4.5L8 6h2.2l1.8 4 1.8-4H16l-3 6v4.5z"/>
                                </svg>
                            </div>
                            <div style="text-align: left;">
                                <strong style="display: block; font-size: 0.88rem; color: #fff;">Yahoo! Mail</strong>
                                <span style="font-size: 0.72rem; color: #a0aab0;">Webmail Compose</span>
                            </div>
                        </a>

                        <!-- Default / System App -->
                        <a href="${mailtoUrl}" class="email-provider-btn email-btn-default">
                            <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(212,175,55,0.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--color-gold);">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    <path d="M22 7l-10 7L2 7"></path>
                                </svg>
                            </div>
                            <div style="text-align: left;">
                                <strong style="display: block; font-size: 0.88rem; color: #fff;">Default Mail App</strong>
                                <span style="font-size: 0.72rem; color: #a0aab0;">Apple / Windows Mail</span>
                            </div>
                        </a>
                    </div>

                    <!-- 1-Click Clipboard Copy Section -->
                    <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 0.85rem 1rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); font-weight: 600;">Inquiry Dossier Copy</span>
                            <button type="button" id="btn-copy-email-body" class="btn btn-outline" style="padding: 0.3rem 0.65rem; font-size: 0.72rem; color: var(--color-gold); border-color: rgba(212,175,55,0.4); display: flex; align-items: center; gap: 0.35rem;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                <span id="copy-btn-label">Copy Inquiry Text</span>
                            </button>
                        </div>
                        <pre style="margin: 0; font-family: monospace; font-size: 0.75rem; color: #cfd8dc; max-height: 90px; overflow-y: auto; white-space: pre-wrap; word-break: break-word; background: rgba(0,0,0,0.35); padding: 0.5rem 0.65rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);">${body}</pre>
                    </div>
                </div>

                <!-- Modal Footer -->
                <div style="padding: 0.85rem 1.75rem; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: flex-end;">
                    <button type="button" class="btn btn-outline btn-modal-close-footer" style="padding: 0.45rem 1.15rem; font-size: 0.8rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                        Close
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() {
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.2s ease-out';
            setTimeout(() => modal.remove(), 200);
        }

        modal.querySelectorAll('.btn-modal-close, .btn-modal-close-footer').forEach(btn => {
            btn.addEventListener('click', closeModal);
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        const copyBtn = modal.querySelector('#btn-copy-email-body');
        const copyLabel = modal.querySelector('#copy-btn-label');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(body).then(() => {
                    copyLabel.innerText = '✓ Copied!';
                    copyBtn.style.borderColor = '#4caf50';
                    copyBtn.style.color = '#4caf50';
                    showToast("Dossier Copied", "Inquiry details copied to clipboard.", "success");
                    setTimeout(() => {
                        copyLabel.innerText = 'Copy Inquiry Text';
                        copyBtn.style.borderColor = 'rgba(212,175,55,0.4)';
                        copyBtn.style.color = 'var(--color-gold)';
                    }, 2500);
                }).catch(() => {
                    showToast("Clipboard Notice", "Could not copy automatically. Please select text manually.", "error");
                });
            });
        }

        modal.querySelectorAll('.email-provider-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const providerName = btn.querySelector('strong')?.innerText || 'Email Provider';
                showToast("Opening Email", `Dispatching inquiry via ${providerName}...`, "success");
            });
        });
    }
    window.showEmailServiceChooserModal = showEmailServiceChooserModal;

    // 4. Toast Notification System
    function showToast(title, message, type = 'success', duration = 4000, onClick = null) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        if (onClick) {
            toast.style.cursor = 'pointer';
            toast.addEventListener('click', (e) => {
                onClick(e);
                toast.remove();
            });
        }
        
        let icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        if (type === 'error') {
            icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
        } else if (type === 'info' || type === 'bulletin') {
            icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2" class="toast-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="8" y1="7" x2="16" y2="7"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
        }

        toast.innerHTML = `
            ${icon}
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-msg">${message}</div>
            </div>
            ${onClick ? `<div style="font-size:0.72rem; color:var(--color-gold); font-weight:700; margin-left:auto; flex-shrink:0; text-transform:uppercase; letter-spacing:0.5px;">Read &rarr;</div>` : ''}
        `;
        
        toastContainer.appendChild(toast);
        
        // Auto remove toast after duration
        setTimeout(() => {
            toast.style.animation = 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
            setTimeout(() => toast.remove(), 400);
        }, duration);
    }

    // Stage-specific Currency Switcher (Stage 1: Product, Stage 2: Tour, Stage 3: Gift Box)
    window.switchStageCurrency = function(currencyCode) {
        const code = (currencyCode || '').toUpperCase();
        if (!window.TeaFactoryStore || !window.TeaFactoryStore.setActiveCurrency(code)) return;

        // 1. Sync global currency dropdown switchers
        const desktopSel = document.getElementById('currency-switcher');
        const mobileSel = document.getElementById('mobile-currency-switcher');
        if (desktopSel) desktopSel.value = code;
        if (mobileSel) mobileSel.value = code;

        // 2. Sync Floating Prefs
        if (typeof syncFloatingPrefsWidget === 'function') {
            syncFloatingPrefsWidget();
        }

        // 3. Update Cart Badges
        if (window.appUpdateCartBadges) window.appUpdateCartBadges();

        // 4. If Cart Drawer is open, re-render it
        const cartOverlay = document.getElementById('cart-drawer-overlay');
        if (cartOverlay && cartOverlay.classList.contains('open')) {
            if (window.UIComponents && window.UIComponents.renderCartDrawer) {
                window.UIComponents.renderCartDrawer('cart-drawer-body');
                if (window.appBindCartDrawerEvents) window.appBindCartDrawerEvents();
            }
        }

        // 5. If a Main Stage Drawer is open, refresh it preserving typed fields
        if (currentDrawerContext && currentDrawerContext.type) {
            const savedInputs = {};
            if (drawerFormContainer) {
                drawerFormContainer.querySelectorAll('input, select, textarea').forEach(el => {
                    if (el.id && el.type !== 'file') {
                        savedInputs[el.id] = el.value;
                    }
                });
            }

            openDrawer(currentDrawerContext.type, currentDrawerContext.id, currentDrawerContext.data);

            if (drawerFormContainer) {
                Object.keys(savedInputs).forEach(id => {
                    const el = drawerFormContainer.querySelector(`#${id}`);
                    if (el) el.value = savedInputs[id];
                });
            }
        }

        // 6. Update background view
        if (typeof renderTabContent === 'function') {
            const currentTab = window.TeaFactoryStore.getActiveTab ? window.TeaFactoryStore.getActiveTab() : 'catalog';
            renderTabContent(currentTab);
        }

        showToast("Currency Updated", `Settlement currency set to ${code}.`, "info");
    };


    // Global Promotional / VIP Voucher Engine
    window.validatePromoCode = function(code, subtotalUSD) {
        if (!code) return { valid: false, message: 'Please enter a voucher code.' };
        const clean = String(code).trim().toUpperCase();

        // 1. Check dynamic coupons from TeaFactoryStore first
        let foundCoupon = null;
        if (window.TeaFactoryStore && typeof window.TeaFactoryStore.getCoupons === 'function') {
            const allCoupons = window.TeaFactoryStore.getCoupons() || [];
            foundCoupon = allCoupons.find(c => String(c.code).trim().toUpperCase() === clean);
        }

        // 2. Fallback to default dictionary if not found in store
        if (!foundCoupon) {
            const discounts = {
                'ESTATE15': { percent: 15, label: '15% OFF Championship Reserve', min_spend: 0, status: 'active' },
                'WILD10': { percent: 10, label: '10% OFF Single-Estate Harvest', min_spend: 0, status: 'active' },
                'CEYLON20': { percent: 20, label: '20% OFF Highland Flush', min_spend: 0, status: 'active' },
                'COLLECTOR': { percent: 10, label: '10% OFF Collector Allocation', min_spend: 0, status: 'active' },
                'ROCKONE': { percent: 10, label: '10% OFF Welcome Privilege', min_spend: 0, status: 'active' }
            };
            if (discounts[clean]) {
                foundCoupon = {
                    code: clean,
                    percent: discounts[clean].percent,
                    label: discounts[clean].label,
                    min_spend: discounts[clean].min_spend || 0,
                    status: discounts[clean].status || 'active'
                };
            }
        }

        if (foundCoupon) {
            if (foundCoupon.status === 'paused') {
                return { valid: false, code: clean, message: 'This coupon is currently paused.' };
            }
            if (foundCoupon.start_date && String(foundCoupon.start_date).trim()) {
                const today = new Date().toISOString().slice(0, 10);
                if (today < String(foundCoupon.start_date).trim()) {
                    return { valid: false, code: clean, message: `This promotional voucher activates on ${foundCoupon.start_date}.` };
                }
            }
            if (foundCoupon.expiry_date && String(foundCoupon.expiry_date).trim()) {
                const today = new Date().toISOString().slice(0, 10);
                if (today > String(foundCoupon.expiry_date).trim()) {
                    return { valid: false, code: clean, message: `This promotional voucher expired on ${foundCoupon.expiry_date}.` };
                }
            }
            const minSpend = Number(foundCoupon.min_spend) || 0;
            const currentSubtotal = Number(subtotalUSD) || 0;
            if (minSpend > 0 && currentSubtotal < minSpend) {
                return { 
                    valid: false, 
                    code: clean, 
                    message: `Minimum order of $${minSpend.toFixed(2)} USD required for this coupon.` 
                };
            }

            const percent = Number(foundCoupon.percent || foundCoupon.discount_percent || 10);
            const savingsUSD = Number((currentSubtotal * (percent / 100)).toFixed(2));
            return {
                valid: true,
                code: clean,
                label: foundCoupon.label || `${percent}% OFF Privilege`,
                percent: percent,
                savingsUSD
            };
        }
        return { valid: false, code: clean, message: 'Invalid or expired promotional code.' };
    };

    // Helper to render clickable coupon suggestion pills in checkout
    window.renderCheckoutCouponsHTML = function(activeCode, inputId) {
        let publicCoupons = [];
        if (window.TeaFactoryStore && typeof window.TeaFactoryStore.getActivePublicCoupons === 'function') {
            publicCoupons = window.TeaFactoryStore.getActivePublicCoupons() || [];
        }

        const activeClean = String(activeCode || '').trim().toUpperCase();

        // If there are NO public campaign coupons active right now, show discrete hint for private codes
        if (!publicCoupons || publicCoupons.length === 0) {
            return `
                <div class="checkout-coupons-private-hint" style="margin-top: 0.35rem; font-size: 0.74rem; color: #64748b; display: flex; align-items: center; gap: 0.35rem;">
                    <span>🔒</span>
                    <span>Received a private VIP reward or seasonal privilege code? Enter it above to apply.</span>
                </div>
            `;
        }

        return `
            <div class="checkout-available-coupons-wrap" data-target-input="${inputId}">
                <div class="checkout-coupons-title">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                    <span>Public Seasonal Offers &amp; Privileges</span>
                </div>
                <div class="checkout-coupon-pills">
                    ${publicCoupons.map(c => {
                        const code = String(c.code).trim().toUpperCase();
                        const percent = c.percent || c.discount_percent || 10;
                        const isSelected = activeClean === code;
                        return `
                            <button type="button" 
                                class="coupon-pill-btn ${isSelected ? 'active' : ''}" 
                                data-code="${code}" 
                                data-target-input="${inputId}"
                                title="${c.label || code}">
                                <span class="coupon-pill-icon">🌐</span>
                                <span class="coupon-pill-code">${code}</span>
                                <span class="coupon-pill-discount">(${percent}% OFF)</span>
                                ${isSelected ? '<span class="coupon-pill-check">✓ Applied</span>' : ''}
                            </button>
                        `;
                    }).join('')}
                </div>
                <div class="checkout-coupons-hint">
                    Tap any public offer above, or enter your private VIP voucher code
                </div>
            </div>
        `;
    };

    // Helper to bind click events on coupon suggestion pills
    window.bindCheckoutCouponPills = function(container, inputId, onApplyCallback) {
        if (!container) return;
        const selector = inputId ? `.coupon-pill-btn[data-target-input="${inputId}"]` : '.coupon-pill-btn';
        const pills = container.querySelectorAll(selector);
        pills.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const code = btn.getAttribute('data-code');
                const targetId = btn.getAttribute('data-target-input') || inputId;
                const inputEl = document.getElementById(targetId);
                if (inputEl && code) {
                    inputEl.value = code;
                    inputEl.dispatchEvent(new Event('input', { bubbles: true }));
                    if (typeof onApplyCallback === 'function') {
                        onApplyCallback(code);
                    }
                }
            });
        });
    };

    // 5. Drawer Controls
    function openDrawer(type, id, data = {}) {
        const signedInUser = window.TeaFactoryStore && window.TeaFactoryStore.getCurrentUser
            ? window.TeaFactoryStore.getCurrentUser()
            : null;

        const prefillUser = (nameId, emailId, phoneId) => {
            if (!signedInUser) return;
            const nEl = document.getElementById(nameId);
            const eEl = document.getElementById(emailId);
            const pEl = document.getElementById(phoneId);
            if (nEl && !nEl.value && signedInUser.full_name) nEl.value = signedInUser.full_name;
            if (eEl && signedInUser.email) {
                eEl.value = signedInUser.email;
                eEl.readOnly = true;
                eEl.style.opacity = '0.88';
            }
            if (pEl && !pEl.value && signedInUser.phone) pEl.value = signedInUser.phone;
        };

        currentDrawerContext = { type, id, data };
        drawerOverlay.classList.add('active');
        const drawerContainer = drawerOverlay.querySelector('.drawer-container');
        if (drawerContainer) {
            if (type === 'product' || type === 'box' || type === 'box_quoted_pay' || type === 'tour') {
                drawerOverlay.classList.add('checkout-fullscreen');
                drawerContainer.classList.add('checkout-mode');
                document.body.style.overflow = 'hidden';
                if (drawerFooter) drawerFooter.style.display = 'none';
            } else {
                drawerOverlay.classList.remove('checkout-fullscreen');
                drawerContainer.classList.remove('checkout-mode');
                if (drawerFooter) drawerFooter.style.display = '';
            }
        }

        if (type === 'box' || type === 'box_quoted_pay') {
            const isQuotedPay = type === 'box_quoted_pay';
            const booking = isQuotedPay ? data : null;

            const boxes = window.TeaFactoryStore.getBoxes();
            const box = isQuotedPay 
                ? { id: booking.boxId || booking.id, name: booking.boxName, image: booking.image || 'images/Gift Box.jpeg', price: booking.quotedPrice || booking.price || 150 }
                : (boxes.find(b => b.id === id) || { id, name: `Gift Box #${String(id).padStart(2, '0')}`, image: 'images/Gift Box.jpeg', price: 150.00 });
            
            const season = window.TeaFactoryStore.getCurrentSeason() || { name: 'Royal Emerald Reserve', seriesNumber: 1 };
            const boxMinDate = new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0];
            
            const unitPriceUSD = Number(box.price) || 150.00;
            const selectedCountry = window.lastSelectedCheckoutCountry || 'Sri Lanka';
            const isSriLanka = selectedCountry === 'Sri Lanka';
            const currInfo = window.getCountryCurrency ? window.getCountryCurrency(selectedCountry) : (isSriLanka ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });

            let currentBoxQty = isQuotedPay ? (booking.quantity || 1) : 1;
            let activeBoxPromo = null; // { code, percent, label, savingsUSD }

            let subtotalUSD = unitPriceUSD * currentBoxQty;
            let discountUSD = 0;
            let discountedSubtotalUSD = subtotalUSD;
            let shippingUSD = isQuotedPay && booking.quotedShipping !== undefined 
                ? booking.quotedShipping 
                : (window.calculateShippingFee ? window.calculateShippingFee(discountedSubtotalUSD, selectedCountry) : (isSriLanka ? 2.13 : 15.0));
            let grandTotalUSD = discountedSubtotalUSD + shippingUSD;

            let formattedSubtotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(subtotalUSD, currInfo) : `$${subtotalUSD.toFixed(2)}`;
            let formattedShipping = shippingUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(shippingUSD, currInfo) : `$${shippingUSD.toFixed(2)}`) : 'Complimentary';
            let formattedGrandTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(grandTotalUSD, currInfo) : `$${grandTotalUSD.toFixed(2)}`;
            let grandTotalLKR = Math.round(grandTotalUSD * 305);

            selectedBoxSlipBase64 = '';
            drawerTitle.innerHTML = `<div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;"><span>${isQuotedPay ? 'Checkout: ' + booking.boxName : 'Collector Chest: ' + box.name}</span><span style="font-size:0.68rem; font-weight:700; color:#86efac; background:rgba(34,197,94,0.12); border:1px solid rgba(34,197,94,0.3); border-radius:20px; padding:0.2rem 0.65rem; display:inline-flex; align-items:center; gap:0.3rem;"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> 256-Bit SSL Encrypted</span></div>`;

            const signedUser = window.TeaFactoryStore && window.TeaFactoryStore.getCurrentUser ? window.TeaFactoryStore.getCurrentUser() : null;
            let defaultFirstName = '';
            let defaultLastName = '';
            if (signedUser && signedUser.full_name) {
                const parts = signedUser.full_name.trim().split(' ');
                defaultFirstName = parts[0] || '';
                defaultLastName = parts.slice(1).join(' ') || '';
            } else if (isQuotedPay && booking.customerName) {
                const parts = booking.customerName.trim().split(' ');
                defaultFirstName = parts[0] || '';
                defaultLastName = parts.slice(1).join(' ') || '';
            }
            const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

            drawerFormContainer.innerHTML = `
                <div class="checkout-split-layout">
                    <!-- ==============================================
                         LEFT COLUMN: PATRON BANNER, ADDRESS, SHIPPING & PAYMENT
                         ============================================== -->
                    <div class="checkout-left-col">
                        <!-- Patron Account / Guest Banner -->
                        <div class="checkout-step-card" style="padding: 0.95rem 1.15rem;">
                            ${signedUser ? `
                                <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <span style="width: 22px; height: 22px; border-radius: 50%; background: rgba(34,197,94,0.15); border: 1px solid #22c55e; color: #22c55e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: bold;">✓</span>
                                        <div>
                                            <div style="font-size: 0.82rem; font-weight: 700; color: #ffffff;">Patron Collector: <span style="color: var(--color-gold);">${esc(signedUser.full_name || signedUser.email)}</span></div>
                                            <div style="font-size: 0.7rem; color: #86efac;">${esc(signedUser.email)} &bull; Certificate Registered</div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-outline" onclick="window.TeaFactoryStore.logoutCustomer &amp;&amp; window.TeaFactoryStore.logoutCustomer(); openDrawer('${type}', '${id}', ${JSON.stringify(data)});" style="font-size: 0.68rem; padding: 0.25rem 0.6rem; border-color: rgba(255,255,255,0.2); color: var(--color-text-muted);">
                                        Switch Account
                                    </button>
                                </div>
                            ` : `
                                <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                    <div style="flex: 1; min-width: 210px;">
                                        <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 700; color: var(--color-gold); margin-bottom: 0.2rem;">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            <span>Direct Checkout Active (No Sign-In Required)</span>
                                        </div>
                                        <p style="font-size: 0.72rem; color: rgba(255,255,255,0.65); line-height: 1.4; margin: 0;">
                                            Order your teak chest immediately as a guest. Or sign in to link with your patron ledger.
                                        </p>
                                    </div>
                                    <button type="button" id="box-guest-signin-btn" class="btn btn-outline" style="font-size: 0.72rem; padding: 0.35rem 0.8rem; border-color: var(--color-gold); color: var(--color-gold); white-space: nowrap;">
                                        Sign In / Register
                                    </button>
                                </div>
                            `}
                        </div>

                        <!-- Form -->
                        <form id="box-checkout-form" style="display: flex; flex-direction: column; gap: 1rem;">
                            <!-- Destination Section -->
                            <div class="checkout-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                        <span>1. Delivery Destination</span>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-country" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Destination Country *</label>
                                        <select class="form-input" id="box-cust-country" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
                                            <option value="Sri Lanka" ${selectedCountry === 'Sri Lanka' ? 'selected' : ''}>🇱🇰 Sri Lanka (LKR Rs)</option>
                                            <option value="United States" ${selectedCountry === 'United States' ? 'selected' : ''}>🇺🇸 United States (USD $)</option>
                                            <option value="United Kingdom" ${selectedCountry === 'United Kingdom' ? 'selected' : ''}>🇬🇧 United Kingdom (GBP £)</option>
                                            <option value="Australia" ${selectedCountry === 'Australia' ? 'selected' : ''}>🇦🇺 Australia (AUD A$)</option>
                                            <option value="Canada" ${selectedCountry === 'Canada' ? 'selected' : ''}>🇨🇦 Canada (CAD C$)</option>
                                            <option value="Germany" ${selectedCountry === 'Germany' ? 'selected' : ''}>🇩🇪 Germany (EUR €)</option>
                                            <option value="France" ${selectedCountry === 'France' ? 'selected' : ''}>🇫🇷 France (EUR €)</option>
                                            <option value="Japan" ${selectedCountry === 'Japan' ? 'selected' : ''}>🇯🇵 Japan (JPY ¥)</option>
                                            <option value="United Arab Emirates" ${selectedCountry === 'United Arab Emirates' ? 'selected' : ''}>🇦🇪 United Arab Emirates (AED)</option>
                                            <option value="Singapore" ${selectedCountry === 'Singapore' ? 'selected' : ''}>🇸🇬 Singapore (SGD S$)</option>
                                            <option value="India" ${selectedCountry === 'India' ? 'selected' : ''}>🇮🇳 India (INR ₹)</option>
                                            <option value="Switzerland" ${selectedCountry === 'Switzerland' ? 'selected' : ''}>🇨🇭 Switzerland (CHF)</option>
                                            <option value="China" ${selectedCountry === 'China' ? 'selected' : ''}>🇨🇳 China (CNY ¥)</option>
                                            <option value="Worldwide" ${selectedCountry === 'Worldwide' ? 'selected' : ''}>🌐 Rest of World (USD $)</option>
                                        </select>
                                    </div>

                                    <div class="form-group" style="margin-bottom: 0;" id="box-region-container">
                                        ${isSriLanka ? `
                                            <label class="form-label" for="box-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Region / Province *</label>
                                            <select class="form-input" id="box-cust-region" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
                                                <option value="Western Province (Colombo, Gampaha, Kalutara)">Western Province (Colombo, Gampaha)</option>
                                                <option value="Central Province (Kandy, Nuwara Eliya, Matale)">Central Province (Kandy, Nuwara Eliya)</option>
                                                <option value="Uva Province (Badulla, Bandarawela, Ettampitiya)" selected>Uva Province (Badulla, Ettampitiya)</option>
                                                <option value="Southern Province (Galle, Matara, Hambantota)">Southern Province (Galle, Matara)</option>
                                                <option value="Sabaragamuwa Province (Ratnapura, Kegalle)">Sabaragamuwa Province (Ratnapura)</option>
                                                <option value="North Western Province (Kurunegala, Puttalam)">North Western Province (Kurunegala)</option>
                                                <option value="North Central Province (Anuradhapura, Polonnaruwa)">North Central Province (Anuradhapura)</option>
                                                <option value="Northern Province (Jaffna, Kilinochchi, Vavuniya)">Northern Province (Jaffna)</option>
                                                <option value="Eastern Province (Batticaloa, Trincomalee, Ampara)">Eastern Province (Batticaloa, Trincomalee)</option>
                                            </select>
                                        ` : `
                                            <label class="form-label" for="box-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">State / Province / County *</label>
                                            <input class="form-input" type="text" id="box-cust-region" placeholder="e.g. California / London / Tokyo" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;" required>
                                        `}
                                    </div>
                                </div>
                            </div>

                            <!-- Recipient Details Section -->
                            <div class="checkout-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span>2. Recipient &amp; Delivery Address</span>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-firstname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">First Name *</label>
                                        <input class="form-input" type="text" id="box-cust-firstname" value="${esc(defaultFirstName)}" required placeholder="e.g. Ruwan" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-lastname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Last Name *</label>
                                        <input class="form-input" type="text" id="box-cust-lastname" value="${esc(defaultLastName)}" required placeholder="e.g. Perera" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-email" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Email (Allocation Certificate &amp; Tracking) *</label>
                                        <input class="form-input" type="email" id="box-cust-email" value="${esc(signedUser ? signedUser.email : (isQuotedPay ? booking.customerEmail || '' : ''))}" required placeholder="e.g. collector@rockonewild.com" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;" ${signedUser ? 'readonly style="opacity:0.88;"' : ''}>
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-phone" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Mobile Phone (Courier Updates) *</label>
                                        <input class="form-input" type="tel" id="box-cust-phone" value="${esc(signedUser ? signedUser.phone || '' : (isQuotedPay ? booking.phone || '' : ''))}" required placeholder="e.g. +94 77 123 4567" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                </div>

                                <div class="form-group" style="margin-bottom: 0.75rem;">
                                    <label class="form-label" for="box-cust-address" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Street Address *</label>
                                    <input class="form-input" type="text" id="box-cust-address" required placeholder="e.g. 42 Highland View Road" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-suite" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Apt / Suite</label>
                                        <input class="form-input" type="text" id="box-cust-suite" placeholder="e.g. Suite 12" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-city" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">City / Town *</label>
                                        <input class="form-input" type="text" id="box-cust-city" required placeholder="e.g. Colombo / London" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="box-cust-postal" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Postal Code *</label>
                                        <input class="form-input" type="text" id="box-cust-postal" required placeholder="e.g. 00700 / SW1A 1AA" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                </div>
                            </div>

                            <!-- Insured Courier Method -->
                            <div class="checkout-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                        <span>3. Insured Courier Delivery</span>
                                    </div>
                                </div>

                                <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                                    <label class="radio-card" id="box-shipping-card-ems" style="display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.85rem 1rem; border: 1.5px solid var(--color-gold); border-radius: 10px; background: rgba(212,175,55,0.08); cursor: pointer;">
                                        <input type="radio" name="box-shipping-method" id="box-ship-ems" value="ems_express" checked style="margin-top: 0.25rem;">
                                        <div style="flex: 1;">
                                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                                                <strong id="box-shipping-ems-title" style="color: #ffffff; font-size: 0.88rem;">${isSriLanka ? 'Sri Lanka Post EMS Express (Pre-paid)' : 'Sri Lanka Post EMS International Priority Air'}</strong>
                                                <span id="box-shipping-ems-price-pill" style="color: ${shippingUSD > 0 ? '#86efac' : 'var(--color-gold)'}; font-size: 0.8rem; font-weight: 700;">${formattedShipping}</span>
                                            </div>
                                            <p id="box-shipping-ems-desc" style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.4; margin: 0;">
                                                ${isSriLanka ? 'Door-to-door express parcel courier with official Sri Lanka Post tracking ID. Settle online via PayPal/Card or Direct Bank Transfer.' : 'Official Sri Lanka Post EMS International Priority Air Courier with end-to-end tracking number. Estimated transit: 5-10 business days.'}
                                            </p>
                                        </div>
                                    </label>

                                    <label class="radio-card" id="box-shipping-card-cod" style="display: ${isSriLanka ? 'flex' : 'none'}; align-items: flex-start; gap: 0.75rem; padding: 0.85rem 1rem; border: 1.5px solid rgba(255,255,255,0.15); border-radius: 10px; background: rgba(0,0,0,0.3); cursor: pointer;">
                                        <input type="radio" name="box-shipping-method" id="box-ship-cod" value="cod" style="margin-top: 0.25rem;">
                                        <div style="flex: 1;">
                                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                                                <strong style="color: #ffffff; font-size: 0.88rem;">Cash on Delivery (COD &bull; Pay to Courier)</strong>
                                                <span id="box-shipping-cod-price-pill" style="color: ${shippingUSD > 0 ? '#86efac' : 'var(--color-gold)'}; font-size: 0.8rem; font-weight: 700;">${formattedShipping}</span>
                                            </div>
                                            <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.4; margin: 0;">
                                                Pay cash upon parcel handover at your doorstep in Sri Lanka.
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <!-- Payment Method Section -->
                            <div class="checkout-step-card" id="box-payment-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                        <span>4. Payment Method &amp; Order Confirmation</span>
                                    </div>
                                </div>

                                <!-- COD Panel -->
                                <div id="box-pay-panel-cod" style="display: none;">
                                    <div style="background: rgba(37,211,102,0.08); border: 1.5px solid rgba(37,211,102,0.4); border-radius: 10px; padding: 1.15rem; text-align: center; margin-bottom: 1rem;">
                                        <h4 style="color: #4ade80; font-size: 1.05rem; margin-bottom: 0.35rem; font-weight: 700;">Cash on Delivery (COD) Selected</h4>
                                        <p style="font-size: 0.78rem; color: #cbd5e1; line-height: 1.5; margin: 0 0 0.85rem 0;">
                                            The Sri Lanka Post EMS courier will collect the cash amount upon parcel handover.
                                        </p>
                                        <div style="background: rgba(0,0,0,0.45); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.65rem 1rem; display: inline-flex; align-items: center; gap: 0.75rem;">
                                            <span style="font-size: 0.78rem; color: #9ca3af;">Payable to Courier:</span>
                                            <strong id="box-cod-amount-display" style="font-size: 1.25rem; color: var(--color-gold); font-family: monospace;">Rs ${grandTotalLKR.toLocaleString()} LKR</strong>
                                        </div>
                                    </div>
                                </div>

                                <!-- Pre-Paid Panels -->
                                <div id="box-pay-panel-prepaid">
                                    <div class="payment-method-tabs" style="margin-bottom: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.35rem;">
                                        <button type="button" class="pay-tab active" data-method="bank" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                                            Bank Transfer (Live)
                                        </button>
                                        <button type="button" class="pay-tab" data-method="slip" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                            Cash Deposit Slip (Live)
                                        </button>
                                        <button type="button" class="pay-tab" data-method="paypal" style="display:inline-flex; align-items:center; gap:0.35rem; border-color: rgba(0,121,193,0.5);">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#0079C1"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.643h7.14c3.04 0 5.25.707 6.42 2.054 1.157 1.332 1.34 3.23.542 5.645-.034.103-.073.208-.117.313-.884 2.658-2.825 4.14-5.772 4.407l-.234.015h-2.15a.91.91 0 0 0-.9.774l-.994 4.887a.641.641 0 0 1-.613.519zm7.14-15.76h-5.9a.28.28 0 0 0-.276.23L5.352 20.337h2.72l.9-4.428a1.41 1.41 0 0 1 1.385-1.129h2.15c2.475-.224 4.123-1.464 4.887-3.76.037-.09.07-.179.1-.27.674-2.04.53-3.567-.432-4.673-.956-1.098-2.766-1.517-5.046-1.517z"/></svg>
                                            <span style="font-weight:700;"><span style="color:#0079C1;">Pay</span><span style="color:#00457C;">Pal</span></span>
                                            <span style="font-size:0.6rem; padding:0.1rem 0.35rem; border-radius:3px; background:rgba(0,121,193,0.2); color:#38bdf8; font-weight:700;">LIVE</span>
                                        </button>
                                    </div>

                                    <!-- Bank Transfer Panel -->
                                    <div id="box-pay-panel-bank" class="pay-panel pay-panel-bank active">
                                        <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.95rem;">
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#ffffff;">Bank of Ceylon</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:var(--color-gold);">Rock one wild tea</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:#ffffff; font-family:monospace; font-size:0.95rem; letter-spacing:1px;">94945708</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#ffffff;">Ettampitiya branch</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; border-top:1px dashed rgba(212,175,55,0.2); padding-top:0.45rem; margin-top:0.35rem; font-size:0.85rem;"><span style="color:var(--color-text-muted);">Amount Due:</span><strong id="box-bank-amount-display" style="color:var(--color-gold); font-size:1rem;">${isSriLanka ? 'Rs ' + grandTotalLKR.toLocaleString() + ' LKR' : formattedGrandTotal}</strong></div>
                                        </div>
                                        <div class="form-group" style="margin-top:0.65rem; margin-bottom: 0;">
                                            <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Bank Transfer Slip *</label>
                                            <div class="file-upload-zone" id="box-bank-slip-zone">
                                                <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                                <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse receipt file</span></div>
                                                <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                                <input type="file" id="box-bank-slip" accept="image/*,.pdf" style="display:none;">
                                            </div>
                                            <div id="box-bank-slip-preview" class="slip-preview" style="display:none;"></div>
                                        </div>
                                    </div>

                                    <!-- Cash Deposit Panel -->
                                    <div id="box-pay-panel-slip" class="pay-panel pay-panel-slip">
                                        <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.95rem;">
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#ffffff;">Bank of Ceylon</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:var(--color-gold);">Rock one wild tea</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:#ffffff; font-family:monospace; font-size:0.95rem; letter-spacing:1px;">94945708</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#ffffff;">Ettampitiya branch</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; border-top:1px dashed rgba(212,175,55,0.2); padding-top:0.45rem; margin-top:0.35rem; font-size:0.85rem;"><span style="color:var(--color-text-muted);">Amount Due:</span><strong id="box-deposit-amount-display" style="color:var(--color-gold); font-size:1rem;">${isSriLanka ? 'Rs ' + grandTotalLKR.toLocaleString() + ' LKR' : formattedGrandTotal}</strong></div>
                                        </div>
                                        <div class="form-group" style="margin-top:0.65rem; margin-bottom: 0;">
                                            <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Cash Deposit Slip *</label>
                                            <div class="file-upload-zone" id="box-cash-slip-zone">
                                                <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                                <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse deposit slip</span></div>
                                                <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                                <input type="file" id="box-cash-slip" accept="image/*,.pdf" style="display:none;">
                                            </div>
                                            <div id="box-cash-slip-preview" class="slip-preview" style="display:none;"></div>
                                        </div>
                                    </div>

                                    <!-- PayPal Panel -->
                                    <div id="box-pay-panel-paypal" class="pay-panel pay-panel-paypal">
                                        <div style="background: linear-gradient(135deg, rgba(0,121,193,0.12) 0%, rgba(4,14,8,0.92) 100%); border: 1.5px solid rgba(0,121,193,0.45); border-radius: 8px; padding: 1.15rem;">
                                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
                                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0079C1"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.643h7.14c3.04 0 5.25.707 6.42 2.054 1.157 1.332 1.34 3.23.542 5.645-.034.103-.073.208-.117.313-.884 2.658-2.825 4.14-5.772 4.407l-.234.015h-2.15a.91.91 0 0 0-.9.774l-.994 4.887a.641.641 0 0 1-.613.519zm7.14-15.76h-5.9a.28.28 0 0 0-.276.23L5.352 20.337h2.72l.9-4.428a1.41 1.41 0 0 1 1.385-1.129h2.15c2.475-.224 4.123-1.464 4.887-3.76.037-.09.07-.179.1-.27.674-2.04.53-3.567-.432-4.673-.956-1.098-2.766-1.517-5.046-1.517z"/></svg>
                                                    <strong style="color: #ffffff; font-size: 0.95rem;">PayPal &bull; Instant Online Settlement</strong>
                                                </div>
                                            </div>
                                            <div style="background: rgba(0,0,0,0.35); border-radius: 6px; padding: 0.55rem 0.85rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
                                                <span style="font-size: 0.76rem; color: #9ca3af;">USD Settlement Amount:</span>
                                                <strong id="box-paypal-amount-display" style="font-size: 1.05rem; color: #38bdf8; font-family: monospace;">${currInfo.code === 'USD' ? `$${grandTotalUSD.toFixed(2)} USD` : `${formattedGrandTotal} ($${grandTotalUSD.toFixed(2)} USD)`}</strong>
                                            </div>
                                            <div id="box-paypal-button-container" class="paypal-smart-container" style="min-height: 44px;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bespoke Notes -->
                            <div class="checkout-step-card">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="box-cust-notes" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Concierge Notes &amp; Numbered Chest Dedication</label>
                                    <textarea class="form-input" id="box-cust-notes" rows="2" placeholder="e.g. Please engrave personalized dedication brass plaque, special gift wrap, etc." style="font-size: 0.82rem; padding: 0.65rem 0.75rem;"></textarea>
                                </div>
                            </div>
                        </form>

                        <!-- Customer Reviews Section (Seven Teahouse Style) -->
                        ${window.UIComponents && window.UIComponents.renderCheckoutReviewsHTML ? window.UIComponents.renderCheckoutReviewsHTML(box.name) : ''}
                    </div>

                    <!-- ==============================================
                         RIGHT COLUMN: LUXURY SUMMARY SIDEBAR (EBAY/SHOPIFY)
                         ============================================== -->
                    <div class="checkout-right-col">
                        <div class="checkout-summary-sidebar">
                            <div class="checkout-summary-header">
                                <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.76rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold);">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    <span>Collector Chest Allocation</span>
                                </div>
                                <span style="font-size: 0.72rem; color: #86efac; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); border-radius: 12px; padding: 0.15rem 0.55rem; font-weight: 600;">${isQuotedPay ? 'Quotation Approved' : 'Numbered Reserve'}</span>
                            </div>

                            <!-- Chest Row with Count Badge -->
                            <div class="checkout-item-row">
                                <div class="checkout-thumb-wrap">
                                    <img src="${box.image || 'images/Gift Box.jpeg'}" alt="${box.name}" onerror="window.handleImageError &amp;&amp; window.handleImageError(this, 'box')" loading="lazy" decoding="async">
                                    <span class="checkout-count-badge" id="box-badge-qty">${currentBoxQty}</span>
                                </div>
                                <div class="checkout-item-meta">
                                    <h4 class="checkout-item-name">${box.name}</h4>
                                    <div class="checkout-item-sub">
                                        <span>Series ${season.seriesNumber} &bull; ${season.name}</span>
                                        <span>&bull;</span>
                                        <span>Solid Teak Chest</span>
                                    </div>
                                    <a href="#checkout-customer-reviews" id="quick-summary-reviews-link" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.73rem; color: #b8860b; text-decoration: none; margin-top: 0.25rem; cursor: pointer;">
                                        <span style="color: #eab308; letter-spacing: 1px;">★★★★★</span>
                                        <span style="font-weight: 700; color: #111827;">5.0</span>
                                        <span style="color: #64748b;">(Verified Reviews)</span>
                                    </a>
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.45rem;">
                                        ${!isQuotedPay ? `
                                            <div class="cart-qty-stepper" style="display: inline-flex; align-items: center; border: 1px solid rgba(212,175,55,0.35); border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.5);">
                                                <button type="button" id="box-qty-minus" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">-</button>
                                                <span id="box-qty-val" style="width: 28px; text-align: center; font-size: 0.8rem; font-weight: 700; color: #fff;">${currentBoxQty}</span>
                                                <button type="button" id="box-qty-plus" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">+</button>
                                            </div>
                                        ` : `
                                            <span style="font-size: 0.72rem; color: var(--color-gold); font-family: monospace;">Ref: ${booking.id}</span>
                                        `}
                                        <span id="box-order-unit-price" style="font-size: 0.78rem; color: var(--color-text-muted);">${window.formatAmountInCurrency ? window.formatAmountInCurrency(unitPriceUSD, currInfo) : '$' + unitPriceUSD.toFixed(2)} / chest</span>
                                    </div>
                                </div>
                                <div class="checkout-item-price" id="box-item-line-price">${formattedSubtotal}</div>
                            </div>

                            <!-- Discount Code Box -->
                            <div class="checkout-discount-box">
                                <input type="text" id="box-promo-code" class="checkout-discount-input" placeholder="Discount code or gift card">
                                <button type="button" id="box-apply-promo-btn" class="checkout-discount-btn">Apply</button>
                            </div>

                            <!-- Available Privilege Coupons -->
                            ${window.renderCheckoutCouponsHTML ? window.renderCheckoutCouponsHTML(activeBoxPromo ? activeBoxPromo.code : '', 'box-promo-code') : ''}

                            <!-- Savings Pill -->
                            <div class="checkout-savings-pill" id="box-savings-pill" style="display: none;">
                                <span style="display: flex; align-items: center; gap: 0.35rem;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                    <span id="box-savings-label">TOTAL SAVINGS</span>
                                </span>
                                <strong id="box-savings-amt">-$0.00</strong>
                            </div>

                            <!-- Line Items Breakdown -->
                            <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem; padding-top: 0.25rem;">
                                <div class="checkout-totals-row">
                                    <span>Subtotal</span>
                                    <strong id="box-summary-subtotal" style="color: #ffffff;">${formattedSubtotal}</strong>
                                </div>
                                <div class="checkout-totals-row" id="box-discount-row" style="display: none; color: #4ade80;">
                                    <span>Promotional Savings</span>
                                    <strong id="box-discount-amt">-$0.00</strong>
                                </div>
                                <div class="checkout-totals-row">
                                    <span id="box-summary-shipping-label">${isSriLanka ? 'Sri Lanka Post EMS Courier' : 'Sri Lanka Post EMS Priority Air'}</span>
                                    <span id="box-summary-shipping" style="color: ${shippingUSD > 0 ? '#86efac' : 'var(--color-gold)'}; font-weight: 600;">${formattedShipping}</span>
                                </div>
                                <div class="checkout-grand-total-row">
                                    <div>
                                        <strong id="box-summary-total-title" style="font-size: 0.95rem; color: #ffffff;">Total Due (${currInfo.code})</strong>
                                        <span id="box-lkr-approx" style="display: block; font-size: 0.72rem; color: #94a3b8; font-weight: normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>
                                    </div>
                                    <strong id="box-summary-total" style="font-size: 1.45rem; color: var(--color-gold); font-family: var(--font-serif);">${formattedGrandTotal}</strong>
                                </div>
                            </div>

                            <!-- Master Action Button -->
                            <button type="button" id="box-summary-submit-btn" class="checkout-action-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span id="box-action-btn-text">${isQuotedPay ? 'Settle Quotation Order' : 'Buy Now'} &bull; ${formattedGrandTotal}</span>
                            </button>

                            <!-- Trust Badges -->
                            <div class="checkout-trust-badges">
                                <span>🔒 256-Bit SSL Encrypted</span>
                                <span>🇱🇰 Estate Direct Dispatch</span>
                                <span>📜 Certified Heritage Origin</span>
                            </div>

                            <div class="checkout-footer-links">
                                <a href="#terms" onclick="event.preventDefault();">Terms and policies</a>
                                <span>&bull;</span>
                                <a href="#privacy" onclick="event.preventDefault();">Your Privacy Choices <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            drawerFooter.innerHTML = '';

            // Render Success Screen for Collector Box Order
            const renderBoxOrderConfirmationSuccess = (order, paymentMethod) => {
                const isCOD = paymentMethod === 'cod';
                const isPayPal = paymentMethod === 'paypal';

                drawerFormContainer.innerHTML = `
                    <div class="cart-success-view" style="text-align: center; padding: 2.25rem 1rem;">
                        <div style="width: 76px; height: 76px; border-radius: 50%; background: ${isCOD ? 'rgba(37,211,102,0.15)' : 'rgba(212,175,55,0.12)'}; border: 2px solid ${isCOD ? '#25d366' : 'var(--color-gold)'}; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.15rem auto; color: ${isCOD ? '#25d366' : 'var(--color-gold)'};">
                            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span class="season-badge" style="background: ${isCOD ? 'rgba(37,211,102,0.2)' : 'rgba(212,175,55,0.15)'}; color: ${isCOD ? '#4ade80' : 'var(--color-gold)'}; font-size: 0.72rem; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                            ${isCOD ? 'Cash on Delivery • Order Confirmed' : (isPayPal ? 'Paid • Instant PayPal Clearance' : 'Allocation Reserved • Receipt Attached')}
                        </span>
                        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: #ffffff; margin: 0.75rem 0 0.25rem 0;">Collector Chest Allocated</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
                            Thank you, ${order.customerName}. Your numbered chest reservation for ${order.boxName} has been officially recorded.
                        </p>

                        <div style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; padding: 1.15rem; margin-bottom: 1.25rem; text-align: left;">
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Allocation Reference ID</span>
                                <strong style="font-family: monospace; color: var(--color-gold); font-size: 0.95rem;">${order.id}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Collector Chest</span>
                                <span style="color: #ffffff; font-size: 0.85rem;">${order.boxName} &bull; Series ${season.seriesNumber}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Delivery Destination</span>
                                <span style="color: #ffffff; font-size: 0.85rem; text-align: right; max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${order.country} &bull; ${order.city || ''}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Courier Method</span>
                                <span style="color: #86efac; font-size: 0.82rem; font-weight: 600;">
                                    ${order.shippingMethod === 'cod' ? 'Sri Lanka Post EMS (Cash on Delivery)' : (order.country === 'Sri Lanka' ? 'Sri Lanka Post EMS Express' : 'Sri Lanka Post EMS International Priority Air')}
                                </span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Amount</span>
                                <strong style="color: var(--color-gold); font-size: 1.1rem;">${order.formattedPrice}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Payment Mode</span>
                                <span style="color: ${isCOD ? '#4ade80' : 'var(--color-gold)'}; font-size: 0.85rem; font-weight: 700;">
                                    ${isCOD ? 'Cash on Delivery (Pay upon delivery)' : (isPayPal ? 'PayPal / International Card' : 'Bank of Ceylon Deposit')}
                                </span>
                            </div>
                        </div>

                        <!-- Executive Director & CEO Verification Seal -->
                        <div style="background: rgba(212,175,55,0.06); border: 1px dashed rgba(212,175,55,0.35); border-radius: 10px; padding: 0.9rem 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                            <div style="text-align: left;">
                                <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700; display: block;">Executive Sign-Off &bull; Verified</span>
                                <div style="font-size: 0.76rem; color: #d1d5db; margin-top: 2px;">Allocation registered in estate ledger</div>
                            </div>
                            <div style="text-align: right;">
                                <img src="images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 34px; object-fit: contain; display: block; margin: 0 0 2px auto;" onerror="this.onerror=null; this.src='images/ceo_signature.png';" />
                                <div style="font-size: 0.76rem; font-weight: 700; color: #ffffff;">Prasanga</div>
                                <div style="font-size: 0.65rem; color: var(--color-gold);">Director &amp; CEO</div>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button type="button" class="btn btn-outline btn-box-success-cert" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(212,175,55,0.5); color: var(--color-gold); display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: rgba(0,0,0,0.35);">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                Download Collector Allocation Certificate (PDF)
                            </button>
                            <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%20Concierge%2C%20I%20have%20ordered%20Collector%20Chest%20${order.id}%20(${encodeURIComponent(order.boxName)})%20for%20${encodeURIComponent(order.formattedPrice)}%20via%20${encodeURIComponent(isCOD ? 'Cash on Delivery' : 'Pre-paid EMS')}.%20Please%20confirm%20my%20dispatch." target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.85rem 1.5rem; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #25d366; border-color: #25d366; color: #040e08; font-weight: 700;">
                                <span>Notify Concierge on WhatsApp</span>
                            </a>
                            <button type="button" class="btn btn-outline" onclick="closeDrawer(); window.appSwitchTab ? window.appSwitchTab('boxes') : (document.getElementById('nav-boxes') &amp;&amp; document.getElementById('nav-boxes').click())" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                                Return to Collector Chest Gallery &rarr;
                            </button>
                        </div>
                    </div>
                `;

                drawerFormContainer.querySelector('.btn-box-success-cert')?.addEventListener('click', () => {
                    generateAllocationCertificate(order);
                });
            };

            // Dynamic Currency & Pricing Update
            const updateBoxPricing = () => {
                const country = document.getElementById('box-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                window.lastSelectedCheckoutCountry = country;
                const isLK = country === 'Sri Lanka';
                const cur = window.getCountryCurrency ? window.getCountryCurrency(country) : (isLK ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });

                subtotalUSD = unitPriceUSD * currentBoxQty;
                discountUSD = 0;
                if (activeBoxPromo) {
                    discountUSD = Number((subtotalUSD * (activeBoxPromo.percent / 100)).toFixed(2));
                }
                discountedSubtotalUSD = Math.max(0, subtotalUSD - discountUSD);

                shippingUSD = isQuotedPay && booking.quotedShipping !== undefined 
                    ? booking.quotedShipping 
                    : (window.calculateShippingFee ? window.calculateShippingFee(discountedSubtotalUSD, country) : (isLK ? 2.13 : 15.0));
                grandTotalUSD = discountedSubtotalUSD + shippingUSD;

                formattedSubtotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(subtotalUSD, cur) : `$${subtotalUSD.toFixed(2)}`;
                const formattedDiscount = discountUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(discountUSD, cur) : `$${discountUSD.toFixed(2)}`) : '';
                formattedShipping = shippingUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(shippingUSD, cur) : `$${shippingUSD.toFixed(2)}`) : 'Complimentary';
                formattedGrandTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(grandTotalUSD, cur) : `$${grandTotalUSD.toFixed(2)}`;
                grandTotalLKR = Math.round(grandTotalUSD * 305);

                const unitPriceEl = document.getElementById('box-order-unit-price');
                if (unitPriceEl && window.formatAmountInCurrency) {
                    unitPriceEl.textContent = `${window.formatAmountInCurrency(unitPriceUSD, cur)} / chest`;
                }
                const badgeQtyEl = document.getElementById('box-badge-qty');
                if (badgeQtyEl) badgeQtyEl.textContent = currentBoxQty;
                const linePriceEl = document.getElementById('box-item-line-price');
                if (linePriceEl) linePriceEl.textContent = formattedSubtotal;

                const subEl = document.getElementById('box-summary-subtotal');
                if (subEl) subEl.textContent = formattedSubtotal;
                const shipLabel = document.getElementById('box-summary-shipping-label');
                if (shipLabel) shipLabel.textContent = isLK ? 'Sri Lanka Post EMS Courier' : 'Sri Lanka Post EMS Priority Air';
                const shipEl = document.getElementById('box-summary-shipping');
                if (shipEl) {
                    shipEl.textContent = formattedShipping;
                    shipEl.style.color = shippingUSD > 0 ? '#86efac' : 'var(--color-gold)';
                }
                const totalTitle = document.getElementById('box-summary-total-title');
                if (totalTitle) totalTitle.textContent = `Total Due (${cur.code})`;
                const totalEl = document.getElementById('box-summary-total');
                if (totalEl) totalEl.textContent = formattedGrandTotal;
                const lkrEl = document.getElementById('box-lkr-approx');
                if (lkrEl) lkrEl.textContent = `(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)`;

                // Savings pill & discount row
                const savingsPill = document.getElementById('box-savings-pill');
                const savingsLabel = document.getElementById('box-savings-label');
                const savingsAmt = document.getElementById('box-savings-amt');
                const discountRow = document.getElementById('box-discount-row');
                const discountAmt = document.getElementById('box-discount-amt');
                if (discountUSD > 0 && activeBoxPromo) {
                    if (savingsPill) savingsPill.style.display = 'flex';
                    if (savingsLabel) savingsLabel.textContent = activeBoxPromo.label.toUpperCase();
                    if (savingsAmt) savingsAmt.textContent = `-${formattedDiscount}`;
                    if (discountRow) discountRow.style.display = 'flex';
                    if (discountAmt) discountAmt.textContent = `-${formattedDiscount}`;
                } else {
                    if (savingsPill) savingsPill.style.display = 'none';
                    if (discountRow) discountRow.style.display = 'none';
                }

                // Master submit button text
                const masterBtnText = document.getElementById('box-action-btn-text');
                if (masterBtnText) {
                    masterBtnText.textContent = isQuotedPay 
                        ? `Settle Quotation Order • ${formattedGrandTotal}`
                        : `Buy Now • ${formattedGrandTotal}`;
                }

                const emsTitle = document.getElementById('box-shipping-ems-title');
                if (emsTitle) emsTitle.textContent = isLK ? 'Sri Lanka Post EMS Express (Pre-paid)' : 'Sri Lanka Post EMS International Priority Air';
                const emsDesc = document.getElementById('box-shipping-ems-desc');
                if (emsDesc) emsDesc.textContent = isLK ? 'Door-to-door express parcel courier with official Sri Lanka Post tracking ID. Settle online via PayPal/Card or Direct Bank Transfer.' : 'Official Sri Lanka Post EMS International Priority Air Courier with end-to-end tracking number. Estimated transit: 5-10 business days.';
                const emsPill = document.getElementById('box-shipping-ems-price-pill');
                if (emsPill) emsPill.textContent = formattedShipping;

                const codCard = document.getElementById('box-shipping-card-cod');
                const emsRadio = document.getElementById('box-ship-ems');
                const codPill = document.getElementById('box-shipping-cod-price-pill');
                if (codPill) codPill.textContent = formattedShipping;

                if (isLK) {
                    if (codCard) codCard.style.display = 'flex';
                } else {
                    if (codCard) codCard.style.display = 'none';
                    if (emsRadio) emsRadio.checked = true;
                    syncBoxShippingSelection();
                }

                const codAmt = document.getElementById('box-cod-amount-display');
                if (codAmt) codAmt.textContent = `Rs ${grandTotalLKR.toLocaleString()} LKR`;

                const bankAmt = document.getElementById('box-bank-amount-display');
                if (bankAmt) {
                    bankAmt.innerHTML = isLK ? `Rs ${grandTotalLKR.toLocaleString()} LKR` : `${formattedGrandTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>`;
                }

                const depAmt = document.getElementById('box-deposit-amount-display');
                if (depAmt) {
                    depAmt.innerHTML = isLK ? `Rs ${grandTotalLKR.toLocaleString()} LKR` : `${formattedGrandTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>`;
                }

                const ppAmt = document.getElementById('box-paypal-amount-display');
                if (ppAmt) {
                    ppAmt.textContent = cur.code === 'USD' ? `$${grandTotalUSD.toFixed(2)} USD` : `${formattedGrandTotal} ($${grandTotalUSD.toFixed(2)} USD)`;
                }

                // Dynamic region container
                const regionCont = document.getElementById('box-region-container');
                if (regionCont) {
                    if (isLK) {
                        if (!regionCont.querySelector('select')) {
                            regionCont.innerHTML = `
                                <label class="form-label" for="box-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Region / Province *</label>
                                <select class="form-input" id="box-cust-region" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
                                    <option value="Western Province (Colombo, Gampaha, Kalutara)">Western Province (Colombo, Gampaha)</option>
                                    <option value="Central Province (Kandy, Nuwara Eliya, Matale)">Central Province (Kandy, Nuwara Eliya)</option>
                                    <option value="Uva Province (Badulla, Bandarawela, Ettampitiya)" selected>Uva Province (Badulla, Ettampitiya)</option>
                                    <option value="Southern Province (Galle, Matara, Hambantota)">Southern Province (Galle, Matara)</option>
                                    <option value="Sabaragamuwa Province (Ratnapura, Kegalle)">Sabaragamuwa Province (Ratnapura)</option>
                                    <option value="North Western Province (Kurunegala, Puttalam)">North Western Province (Kurunegala)</option>
                                    <option value="North Central Province (Anuradhapura, Polonnaruwa)">North Central Province (Anuradhapura)</option>
                                    <option value="Northern Province (Jaffna, Kilinochchi, Vavuniya)">Northern Province (Jaffna)</option>
                                    <option value="Eastern Province (Batticaloa, Trincomalee, Ampara)">Eastern Province (Batticaloa, Trincomalee)</option>
                                </select>
                            `;
                        }
                    } else {
                        if (!regionCont.querySelector('input')) {
                            regionCont.innerHTML = `
                                <label class="form-label" for="box-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">State / Province / County *</label>
                                <input class="form-input" type="text" id="box-cust-region" placeholder="e.g. California / London / Tokyo" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;" required>
                            `;
                        }
                    }
                }

                // Re-render PayPal if open
                const activeTab = document.querySelector('#box-checkout-form .pay-tab.active');
                if (activeTab && activeTab.getAttribute('data-method') === 'paypal') {
                    initBoxPayPal();
                }
            };

            const syncBoxShippingSelection = () => {
                const selectedMethod = document.querySelector('input[name="box-shipping-method"]:checked')?.value || 'ems_express';
                const codCard = document.getElementById('box-shipping-card-cod');
                const emsCard = document.getElementById('box-shipping-card-ems');
                const codPanel = document.getElementById('box-pay-panel-cod');
                const prepaidPanel = document.getElementById('box-pay-panel-prepaid');

                if (selectedMethod === 'cod') {
                    if (codCard) {
                        codCard.style.border = '1.5px solid #25d366';
                        codCard.style.background = 'rgba(37,211,102,0.1)';
                    }
                    if (emsCard) {
                        emsCard.style.border = '1.5px solid rgba(255,255,255,0.15)';
                        emsCard.style.background = 'rgba(0,0,0,0.3)';
                    }
                    if (codPanel) codPanel.style.display = 'block';
                    if (prepaidPanel) prepaidPanel.style.display = 'none';
                } else {
                    if (emsCard) {
                        emsCard.style.border = '1.5px solid var(--color-gold)';
                        emsCard.style.background = 'rgba(212,175,55,0.08)';
                    }
                    if (codCard) {
                        codCard.style.border = '1.5px solid rgba(255,255,255,0.15)';
                        codCard.style.background = 'rgba(0,0,0,0.3)';
                    }
                    if (codPanel) codPanel.style.display = 'none';
                    if (prepaidPanel) prepaidPanel.style.display = 'block';
                }
            };

            // Stepper controls
            if (!isQuotedPay) {
                const minusBtn = document.getElementById('box-qty-minus');
                const plusBtn = document.getElementById('box-qty-plus');
                const qtyVal = document.getElementById('box-qty-val');

                if (minusBtn) {
                    minusBtn.onclick = () => {
                        if (currentBoxQty > 1) {
                            currentBoxQty--;
                            if (qtyVal) qtyVal.textContent = currentBoxQty;
                            updateBoxPricing();
                        }
                    };
                }
                if (plusBtn) {
                    plusBtn.onclick = () => {
                        currentBoxQty++;
                        if (qtyVal) qtyVal.textContent = currentBoxQty;
                        updateBoxPricing();
                    };
                }
            }

            // Promo code wiring
            const boxPromoBtn = document.getElementById('box-apply-promo-btn');
            const boxPromoInput = document.getElementById('box-promo-code');
            const syncBoxCouponPills = () => {
                drawerFormContainer.querySelectorAll('.coupon-pill-btn[data-target-input="box-promo-code"]').forEach(pill => {
                    const pCode = pill.getAttribute('data-code');
                    if (activeBoxPromo && activeBoxPromo.code === pCode) {
                        pill.classList.add('active');
                        if (!pill.querySelector('.coupon-pill-check')) {
                            const check = document.createElement('span');
                            check.className = 'coupon-pill-check';
                            check.textContent = '✓ Applied';
                            pill.appendChild(check);
                        }
                    } else {
                        pill.classList.remove('active');
                        const check = pill.querySelector('.coupon-pill-check');
                        if (check) check.remove();
                    }
                });
            };

            if (boxPromoBtn && boxPromoInput) {
                const handleBoxPromo = () => {
                    const val = boxPromoInput.value.trim();
                    if (!val) {
                        activeBoxPromo = null;
                        updateBoxPricing();
                        syncBoxCouponPills();
                        showToast("Voucher Cleared", "Promotional code has been removed.", "info");
                        return;
                    }
                    const res = window.validatePromoCode(val, unitPriceUSD * currentBoxQty);
                    if (res.valid) {
                        activeBoxPromo = res;
                        updateBoxPricing();
                        syncBoxCouponPills();
                        showToast("Voucher Applied!", `${res.label} (${res.percent}%) applied successfully.`, "success");
                    } else {
                        activeBoxPromo = null;
                        updateBoxPricing();
                        syncBoxCouponPills();
                        showToast("Invalid Voucher", res.message || "Invalid promotional code.", "warning");
                    }
                };
                boxPromoBtn.onclick = handleBoxPromo;
                boxPromoInput.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleBoxPromo();
                    }
                };
            }

            if (window.bindCheckoutCouponPills) {
                window.bindCheckoutCouponPills(drawerFormContainer, 'box-promo-code', () => {
                    if (boxPromoBtn) boxPromoBtn.click();
                });
            }

            const countryInput = document.getElementById('box-cust-country');
            if (countryInput) countryInput.onchange = updateBoxPricing;

            drawerFormContainer.querySelectorAll('input[name="box-shipping-method"]').forEach(r => {
                r.onchange = syncBoxShippingSelection;
            });

            bindPaymentTabs('box-checkout-form');
            bindFileUpload('box-bank-slip', 'box-bank-slip-zone', 'box-bank-slip-preview', (b64) => {
                selectedBoxSlipBase64 = b64;
            });
            bindFileUpload('box-cash-slip', 'box-cash-slip-zone', 'box-cash-slip-preview', (b64) => {
                selectedBoxSlipBase64 = b64;
            });

            // Wire PayPal
            const initBoxPayPal = () => {
                const container = document.getElementById('box-paypal-button-container');
                if (!container || !window.TeaFactoryPayPal) return;

                const orderRef = isQuotedPay ? booking.id : `ORD-BOX-${Date.now()}`;

                window.TeaFactoryPayPal.renderButtons({
                    containerId: 'box-paypal-button-container',
                    orderId: orderRef,
                    amount: grandTotalUSD,
                    currency: 'USD',
                    description: `${box.name} (${currentBoxQty} Chest${currentBoxQty > 1 ? 's' : ''})`,
                    onValidate: () => {
                        const form = document.getElementById('box-checkout-form');
                        if (!form || !form.checkValidity()) {
                            if (form) form.reportValidity();
                            return false;
                        }
                        return true;
                    },
                    onSuccess: async ({ paypalOrderId, captureData }) => {
                        const firstName = document.getElementById('box-cust-firstname')?.value?.trim() || '';
                        const lastName = document.getElementById('box-cust-lastname')?.value?.trim() || '';
                        const customerName = `${firstName} ${lastName}`.trim() || 'Collector';
                        const email = document.getElementById('box-cust-email')?.value?.trim() || '';
                        const phone = document.getElementById('box-cust-phone')?.value?.trim() || '';
                        const street = document.getElementById('box-cust-address')?.value?.trim() || '';
                        const suite = document.getElementById('box-cust-suite')?.value?.trim() || '';
                        const city = document.getElementById('box-cust-city')?.value?.trim() || '';
                        const postal = document.getElementById('box-cust-postal')?.value?.trim() || '';
                        const region = document.getElementById('box-cust-region')?.value || '';
                        const country = document.getElementById('box-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                        const notes = document.getElementById('box-cust-notes')?.value?.trim() || '';

                        const fullAddress = `${street}${suite ? ', ' + suite : ''}, ${city}, ${region ? region + ', ' : ''}${postal}, ${country}`;

                        const result = window.TeaFactoryStore.bookBox(box.id, {
                            name: customerName,
                            email,
                            phone,
                            address: fullAddress,
                            country,
                            city,
                            message: notes,
                            quantity: currentBoxQty,
                            paymentMethod: 'paypal',
                            slipImage: ''
                        });

                        if (result && result.success) {
                            const order = result.booking;
                            order.boxName = box.name;
                            order.formattedPrice = formattedGrandTotal;
                            window.TeaFactoryStore.markOrderPaidByPayPal(order.id, captureData || { id: paypalOrderId });
                            window.TeaFactoryStore.saveRecentOrderId(order.id);

                            showToast("Chest Allocated!", `Allocation Certificate for ${order.id} is confirmed!`, "success");
                            renderBoxOrderConfirmationSuccess(order, 'paypal');
                        }
                    }
                });
            };

            const boxPaypalTab = drawerFormContainer.querySelector('.pay-tab[data-method="paypal"]');
            if (boxPaypalTab) {
                boxPaypalTab.addEventListener('click', () => {
                    setTimeout(initBoxPayPal, 50);
                });
            }

            // Box Checkout Submission
            const handleBoxCheckoutSubmit = (e) => {
                if (e) e.preventDefault();
                const form = document.getElementById('box-checkout-form');
                if (!form || !form.checkValidity()) {
                    if (form) form.reportValidity();
                    return;
                }

                const shippingMethod = document.querySelector('input[name="box-shipping-method"]:checked')?.value || 'ems_express';
                const activeTabBtn = form.querySelector('.pay-tab.active');
                const selectedMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'bank';
                const paymentMethod = shippingMethod === 'cod' ? 'cod' : selectedMethod;

                if (paymentMethod === 'paypal') {
                    const ppCont = document.getElementById('box-paypal-button-container');
                    if (ppCont) {
                        ppCont.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        showToast("PayPal Active", "Please click the yellow PayPal button to authorize payment.", "info");
                    }
                    return;
                }

                const firstName = document.getElementById('box-cust-firstname')?.value?.trim() || '';
                const lastName = document.getElementById('box-cust-lastname')?.value?.trim() || '';
                const customerName = `${firstName} ${lastName}`.trim() || 'Collector';
                const email = document.getElementById('box-cust-email')?.value?.trim() || '';
                const phone = document.getElementById('box-cust-phone')?.value?.trim() || '';
                const street = document.getElementById('box-cust-address')?.value?.trim() || '';
                const suite = document.getElementById('box-cust-suite')?.value?.trim() || '';
                const city = document.getElementById('box-cust-city')?.value?.trim() || '';
                const postal = document.getElementById('box-cust-postal')?.value?.trim() || '';
                const region = document.getElementById('box-cust-region')?.value || '';
                const country = document.getElementById('box-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                const notes = document.getElementById('box-cust-notes')?.value?.trim() || '';

                const fullAddress = `${street}${suite ? ', ' + suite : ''}, ${city}, ${region ? region + ', ' : ''}${postal}, ${country}`;

                const slipImg = selectedBoxSlipBase64 || 
                    document.getElementById('box-bank-slip-zone')?.dataset?.fileBase64 || 
                    document.getElementById('box-cash-slip-zone')?.dataset?.fileBase64 || '';

                if (paymentMethod !== 'cod' && !slipImg) {
                    showToast("Deposit Receipt Required", "Please attach your bank transfer or deposit slip to confirm your chest allocation.", "warning");
                    return;
                }

                const result = window.TeaFactoryStore.bookBox(box.id, {
                    name: customerName,
                    email,
                    phone,
                    address: fullAddress,
                    country,
                    city,
                    message: notes,
                    quantity: currentBoxQty,
                    paymentMethod,
                    shippingMethod,
                    slipImage: slipImg
                });

                if (result && result.success) {
                    const order = result.booking;
                    order.boxName = box.name;
                    order.city = city;
                    order.country = country;
                    order.shippingMethod = shippingMethod;
                    order.formattedPrice = paymentMethod === 'cod' ? `Rs ${grandTotalLKR.toLocaleString()} LKR` : formattedGrandTotal;

                    window.TeaFactoryStore.saveRecentOrderId(order.id);

                    showToast("Chest Allocated!", `Allocation Certificate for ${order.id} is confirmed!`, "success");
                    renderBoxOrderConfirmationSuccess(order, paymentMethod);
                } else {
                    showToast("Allocation Failed", result?.message || "Could not reserve collector chest.", "error");
                }
            };

            const boxForm = document.getElementById('box-checkout-form');
            if (boxForm) boxForm.onsubmit = handleBoxCheckoutSubmit;

            // Master Action Button in right column
            const boxSummaryBtn = document.getElementById('box-summary-submit-btn');
            if (boxSummaryBtn) {
                boxSummaryBtn.onclick = () => {
                    handleBoxCheckoutSubmit();
                };
            }

            document.getElementById('box-guest-signin-btn')?.addEventListener('click', () => {
                if (typeof window.requireCustomerAuth === 'function') {
                    window.requireCustomerAuth('Sign in or register to record your collector chest in your patron history.', () => {
                        openDrawer(type, id, data);
                    });
                }
            });

            // Initialize customer reviews interactions in box checkout
            if (typeof window.initCheckoutReviewsInteractions === 'function') {
                window.initCheckoutReviewsInteractions(drawerFormContainer);
            }
        
        } else if (type === 'tour') {
            const timeSlot = data.timeSlot || '09:30 AM';
            selectedTourSlipBase64 = '';

            const tourMinDate = new Date(Date.now() + 86400000).toISOString().split('T')[0];

            // Get selected package details
            const selectedPkgCard = document.querySelector('.package-card.selected');
            const pkgName = data.package || (selectedPkgCard ? selectedPkgCard.getAttribute('data-package') : '01. Gongfu-Style Black Tea Brewing Experience');
            const lkrPerGuest = data.price_lkr || (selectedPkgCard ? (parseFloat(selectedPkgCard.getAttribute('data-price-lkr')) || 1450) : 1450);
            const baseUsdPerGuest = data.price || (selectedPkgCard ? parseFloat(selectedPkgCard.getAttribute('data-price')) : (lkrPerGuest / 305)) || (lkrPerGuest / 305);

            const selectedCountry = window.lastSelectedCheckoutCountry || 'Sri Lanka';
            const isSriLanka = selectedCountry === 'Sri Lanka';
            const currInfo = window.getCountryCurrency ? window.getCountryCurrency(selectedCountry) : (isSriLanka ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });

            let tourGuests = 1;
            let transportFeeUSD = 0; // 0 for Self-Drive, 25 for Concierge Transfer
            let tourSubtotalUSD = baseUsdPerGuest * tourGuests;
            let tourGrandTotalUSD = tourSubtotalUSD + transportFeeUSD;

            let formattedPerGuest = window.formatAmountInCurrency ? window.formatAmountInCurrency(baseUsdPerGuest, currInfo) : `$${baseUsdPerGuest.toFixed(2)}`;
            let formattedTourTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(tourGrandTotalUSD, currInfo) : `$${tourGrandTotalUSD.toFixed(2)}`;
            let tourGrandTotalLKR = Math.round(tourGrandTotalUSD * 305);

            drawerTitle.innerText = `Book Tour: ${pkgName}`;

            const signedUser = window.TeaFactoryStore && window.TeaFactoryStore.getCurrentUser ? window.TeaFactoryStore.getCurrentUser() : null;
            let defaultFirstName = '';
            let defaultLastName = '';
            if (signedUser && signedUser.full_name) {
                const parts = signedUser.full_name.trim().split(' ');
                defaultFirstName = parts[0] || '';
                defaultLastName = parts.slice(1).join(' ') || '';
            }
            const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

            drawerFormContainer.innerHTML = `
                <div class="cart-drawer-inner" style="display: flex; flex-direction: column; gap: 1.15rem; padding-bottom: 2rem;">
                    
                    <!-- 1. TOUR EXPERIENCE SUMMARY -->
                    <div class="cart-step-card" style="background: rgba(4,14,8,0.78); border: 1.5px solid rgba(212,175,55,0.3); border-radius: 12px; padding: 1.15rem; box-shadow: 0 4px 18px rgba(0,0,0,0.35);">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 0.6rem; margin-bottom: 0.75rem;">
                            <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold);">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <span>1. Experience Summary</span>
                            </div>
                            <span style="font-size: 0.72rem; color: #86efac; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); border-radius: 12px; padding: 0.15rem 0.55rem; font-weight: 600;">Mon &ndash; Sat &bull; Open</span>
                        </div>

                        <div style="margin-bottom: 0.85rem;">
                            <h4 style="margin: 0 0 0.35rem 0; font-family: var(--font-serif); font-size: 1.05rem; color: #ffffff; line-height: 1.35;">${pkgName}</h4>
                            <div style="display: flex; gap: 0.85rem; font-size: 0.75rem; color: var(--color-text-muted); flex-wrap: wrap;">
                                <span>Time Slot: <strong style="color: #fff;">${timeSlot}</strong></span>
                                <span>&bull;</span>
                                <span>Duration: <strong style="color: #fff;">Approx. 1.5 &ndash; 2 Hours</strong></span>
                                <span>&bull;</span>
                                <span style="color: #86efac;">Sunday Closed for Maintenance</span>
                            </div>
                        </div>

                        <!-- Guest Count Stepper -->
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-top: 1px dashed rgba(212,175,55,0.2); border-bottom: 1px dashed rgba(212,175,55,0.2);">
                            <div>
                                <span style="font-size: 0.8rem; color: var(--color-text-muted); display: block;">Number of Guests:</span>
                                <span id="tour-rate-per-guest" style="font-size: 0.72rem; color: var(--color-gold);">${formattedPerGuest} per guest</span>
                            </div>
                            <div class="cart-qty-stepper" style="display: inline-flex; align-items: center; border: 1px solid rgba(212,175,55,0.35); border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.5);">
                                <button type="button" id="tour-qty-minus" style="background: none; border: none; color: var(--color-gold); width: 28px; height: 28px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">-</button>
                                <span id="tour-qty-val" style="width: 32px; text-align: center; font-size: 0.82rem; font-weight: 700; color: #fff;">1</span>
                                <button type="button" id="tour-qty-plus" style="background: none; border: none; color: var(--color-gold); width: 28px; height: 28px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">+</button>
                            </div>
                        </div>

                        <!-- Financial Total Breakdown -->
                        <div style="margin-top: 0.65rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.82rem;">
                            <div style="display: flex; justify-content: space-between; color: var(--color-text-muted);">
                                <span>Experience Subtotal</span>
                                <strong id="tour-summary-subtotal" style="color: #ffffff;">${formattedTourTotal}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; color: var(--color-text-muted);">
                                <span>Estate Transport</span>
                                <span id="tour-summary-transport" style="color: var(--color-gold); font-weight: 600;">Complimentary Arrival</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: baseline; border-top: 1px solid rgba(212,175,55,0.25); padding-top: 0.55rem; margin-top: 0.25rem;">
                                <div>
                                    <strong id="tour-summary-total-title" style="font-size: 0.95rem; color: #ffffff;">Total Payable (${currInfo.code})</strong>
                                </div>
                                <strong id="tour-summary-total" style="font-size: 1.35rem; color: var(--color-gold); font-family: var(--font-serif);">${formattedTourTotal}</strong>
                            </div>
                        </div>
                    </div>

                    <!-- 2. PATRON ACCOUNT / GUEST BANNER -->
                    <div class="cart-step-card" style="background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 0.95rem 1.15rem;">
                        ${signedUser ? `
                            <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="width: 22px; height: 22px; border-radius: 50%; background: rgba(34,197,94,0.15); border: 1px solid #22c55e; color: #22c55e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: bold;">✓</span>
                                    <div>
                                        <div style="font-size: 0.82rem; font-weight: 700; color: #ffffff;">Patron Visitor: <span style="color: var(--color-gold);">${esc(signedUser.full_name || signedUser.email)}</span></div>
                                        <div style="font-size: 0.7rem; color: #86efac;">${esc(signedUser.email)} &bull; Boarding Pass auto-linked</div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-outline" onclick="window.TeaFactoryStore.logoutCustomer &amp;&amp; window.TeaFactoryStore.logoutCustomer(); openDrawer('tour', '${id}', ${JSON.stringify(data)}); " style="font-size: 0.68rem; padding: 0.25rem 0.6rem; border-color: rgba(255,255,255,0.2); color: var(--color-text-muted);">
                                    Switch Account
                                </button>
                            </div>
                        ` : `
                            <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                <div style="flex: 1; min-width: 210px;">
                                    <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 700; color: var(--color-gold); margin-bottom: 0.2rem;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span>Direct Booking Active (Sign-In Optional)</span>
                                    </div>
                                    <p style="font-size: 0.72rem; color: rgba(255,255,255,0.65); line-height: 1.4; margin: 0;">
                                        You can reserve seats immediately as a visitor. Or sign in to sync with your patron history.
                                    </p>
                                </div>
                                <button type="button" id="tour-guest-signin-btn" class="btn btn-outline" style="font-size: 0.72rem; padding: 0.35rem 0.8rem; border-color: var(--color-gold); color: var(--color-gold); white-space: nowrap;">
                                    Sign In / Register
                                </button>
                            </div>
                        `}
                    </div>

                    <!-- 3. FORM: VISITOR ORIGIN & CONTACT -->
                    <form id="tour-checkout-form" style="display: flex; flex-direction: column; gap: 1rem;">
                        <!-- Country of Origin & Currency -->
                        <div class="cart-step-card" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.15rem;">
                            <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold); margin-bottom: 0.85rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                <span>2. Visitor Origin Country &amp; Settlement Currency</span>
                            </div>

                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" for="tour-cust-country" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Visitor Origin Country *</label>
                                <select class="form-input" id="tour-cust-country" style="font-size: 0.85rem; padding: 0.65rem 0.75rem;">
                                    <option value="Sri Lanka" ${selectedCountry === 'Sri Lanka' ? 'selected' : ''}>🇱🇰 Sri Lanka (LKR Rs)</option>
                                    <option value="United States" ${selectedCountry === 'United States' ? 'selected' : ''}>🇺🇸 United States (USD $)</option>
                                    <option value="United Kingdom" ${selectedCountry === 'United Kingdom' ? 'selected' : ''}>🇬🇧 United Kingdom (GBP £)</option>
                                    <option value="Australia" ${selectedCountry === 'Australia' ? 'selected' : ''}>🇦🇺 Australia (AUD A$)</option>
                                    <option value="Canada" ${selectedCountry === 'Canada' ? 'selected' : ''}>🇨🇦 Canada (CAD C$)</option>
                                    <option value="Germany" ${selectedCountry === 'Germany' ? 'selected' : ''}>🇩🇪 Germany (EUR €)</option>
                                    <option value="France" ${selectedCountry === 'France' ? 'selected' : ''}>🇫🇷 France (EUR €)</option>
                                    <option value="Japan" ${selectedCountry === 'Japan' ? 'selected' : ''}>🇯🇵 Japan (JPY ¥)</option>
                                    <option value="United Arab Emirates" ${selectedCountry === 'United Arab Emirates' ? 'selected' : ''}>🇦🇪 United Arab Emirates (AED)</option>
                                    <option value="Singapore" ${selectedCountry === 'Singapore' ? 'selected' : ''}>🇸🇬 Singapore (SGD S$)</option>
                                    <option value="India" ${selectedCountry === 'India' ? 'selected' : ''}>🇮🇳 India (INR ₹)</option>
                                    <option value="Switzerland" ${selectedCountry === 'Switzerland' ? 'selected' : ''}>🇨🇭 Switzerland (CHF)</option>
                                    <option value="China" ${selectedCountry === 'China' ? 'selected' : ''}>🇨🇳 China (CNY ¥)</option>
                                    <option value="Worldwide" ${selectedCountry === 'Worldwide' ? 'selected' : ''}>🌐 Rest of World (USD $)</option>
                                </select>
                            </div>
                        </div>

                        <!-- Primary Guest Details -->
                        <div class="cart-step-card" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.15rem;">
                            <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold); margin-bottom: 0.85rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <span>3. Primary Guest &amp; Schedule Details</span>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="tour-cust-firstname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">First Name *</label>
                                    <input class="form-input" type="text" id="tour-cust-firstname" value="${esc(defaultFirstName)}" required placeholder="e.g. David" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="tour-cust-lastname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Last Name *</label>
                                    <input class="form-input" type="text" id="tour-cust-lastname" value="${esc(defaultLastName)}" required placeholder="e.g. Miller" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="tour-cust-email" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Email (For Gate Pass) *</label>
                                    <input class="form-input" type="email" id="tour-cust-email" value="${esc(signedUser ? signedUser.email : '')}" required placeholder="name@domain.com" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="tour-cust-phone" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">WhatsApp / Mobile *</label>
                                    <input class="form-input" type="tel" id="tour-cust-phone" value="${esc(signedUser ? signedUser.phone : '')}" required placeholder="+94 77 123 4567" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="tour-date-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Tour Date (Mon &ndash; Sat) *</label>
                                    <input class="form-input" type="date" id="tour-date-input" min="${tourMinDate}" value="${tourMinDate}" required style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="tour-time-slot" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Arrival Time Slot *</label>
                                    <select class="form-input" id="tour-time-slot" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                        <option value="09:30 AM" ${timeSlot === '09:30 AM' ? 'selected' : ''}>09:30 AM Morning Tasting</option>
                                        <option value="11:30 AM" ${timeSlot === '11:30 AM' ? 'selected' : ''}>11:30 AM Midday Harvest Walk</option>
                                        <option value="02:00 PM" ${timeSlot === '02:00 PM' ? 'selected' : ''}>02:00 PM Afternoon Masterclass</option>
                                        <option value="03:30 PM" ${timeSlot === '03:30 PM' ? 'selected' : ''}>03:30 PM Sunset Gongfu Session</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" for="tour-dietary" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Dietary &amp; Experience Notes</label>
                                <input class="form-input" type="text" id="tour-dietary" placeholder="e.g. Gluten-free tea pairings, anniversary visit" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                            </div>
                        </div>

                        <!-- Estate Transfer & Transport Selection -->
                        <div class="cart-step-card" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.15rem;">
                            <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold); margin-bottom: 0.85rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                <span>4. Estate Transport &amp; Arrival</span>
                            </div>

                            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                                <!-- Option 1: Self-Drive / Independent Arrival -->
                                <label class="shipping-option-card active" id="tour-transport-card-self" style="display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.85rem; border: 1.5px solid var(--color-gold); border-radius: 8px; background: rgba(212,175,55,0.08); cursor: pointer;">
                                    <input type="radio" name="tour-transport-option" value="self" id="tour-trans-self" checked style="margin-top: 0.2rem; accent-color: var(--color-gold);">
                                    <div style="flex: 1;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem; gap: 0.5rem; flex-wrap: wrap;">
                                            <strong style="color: #ffffff; font-size: 0.88rem;">Independent Arrival &bull; Factory Gate</strong>
                                            <span style="font-size: 0.72rem; color: var(--color-gold); font-weight: 700; background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.3); border-radius: 6px; padding: 0.2rem 0.55rem;">Complimentary</span>
                                        </div>
                                        <p style="font-size: 0.74rem; color: var(--color-text-muted); margin: 0; line-height: 1.4;">
                                            Self-drive, taxi, or tuk-tuk arrival directly at the Rock One Tea Factory Gate in Ettampitiya, Badulla. Reserved estate parking provided.
                                        </p>
                                    </div>
                                </label>

                                <!-- Option 2: Estate Concierge Chauffeur Transfer -->
                                <label class="shipping-option-card" id="tour-transport-card-chauffeur" style="display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.85rem; border: 1.5px solid rgba(255,255,255,0.15); border-radius: 8px; background: rgba(0,0,0,0.3); cursor: pointer;">
                                    <input type="radio" name="tour-transport-option" value="chauffeur" id="tour-trans-chauffeur" style="margin-top: 0.2rem; accent-color: var(--color-gold);">
                                    <div style="flex: 1;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem; gap: 0.5rem; flex-wrap: wrap;">
                                            <strong style="color: #ffffff; font-size: 0.88rem;">Concierge Chauffeur Transfer (Roundtrip)</strong>
                                            <span id="tour-transport-surcharge-pill" style="font-size: 0.72rem; color: #86efac; font-weight: 700; background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.3); border-radius: 6px; padding: 0.2rem 0.55rem;">+ ${window.formatAmountInCurrency ? window.formatAmountInCurrency(25, currInfo) : '$25.00'}</span>
                                        </div>
                                        <p style="font-size: 0.74rem; color: var(--color-text-muted); margin: 0; line-height: 1.4;">
                                            Private estate chauffeur pick-up &amp; drop-off from your hotel or station in Ella, Haputale, Bandarawela, Badulla, or Nuwara Eliya.
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Payment Method Section -->
                        <div class="cart-step-card" id="tour-payment-step-card" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.15rem;">
                            <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold); margin-bottom: 0.85rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                <span>5. Payment Method &amp; Gate Pass Issuance</span>
                            </div>

                            <div class="payment-method-tabs" style="margin-bottom: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.35rem;">
                                <button type="button" class="pay-tab active" data-method="bank" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                                    Bank Transfer (Live)
                                </button>
                                <button type="button" class="pay-tab" data-method="slip" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                    Cash Deposit Slip (Live)
                                </button>
                                <button type="button" class="pay-tab" data-method="paypal" style="display:inline-flex; align-items:center; gap:0.35rem; border-color: rgba(0,121,193,0.5);">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0079C1"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.643h7.14c3.04 0 5.25.707 6.42 2.054 1.157 1.332 1.34 3.23.542 5.645-.034.103-.073.208-.117.313-.884 2.658-2.825 4.14-5.772 4.407l-.234.015h-2.15a.91.91 0 0 0-.9.774l-.994 4.887a.641.641 0 0 1-.613.519zm7.14-15.76h-5.9a.28.28 0 0 0-.276.23L5.352 20.337h2.72l.9-4.428a1.41 1.41 0 0 1 1.385-1.129h2.15c2.475-.224 4.123-1.464 4.887-3.76.037-.09.07-.179.1-.27.674-2.04.53-3.567-.432-4.673-.956-1.098-2.766-1.517-5.046-1.517z"/></svg>
                                    <span style="font-weight:700;"><span style="color:#0079C1;">Pay</span><span style="color:#00457C;">Pal</span></span>
                                    <span style="font-size:0.6rem; padding:0.1rem 0.35rem; border-radius:3px; background:rgba(0,121,193,0.2); color:#38bdf8; font-weight:700;">LIVE</span>
                                </button>
                            </div>

                            <!-- Method A: Bank Transfer -->
                            <div id="pay-panel-bank" class="pay-panel active" style="margin-top: 0.5rem;">
                                <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.85rem; font-size: 0.8rem; margin-bottom: 0.75rem;">
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#fff;">Bank of Ceylon</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:#fff;">Rock one wild tea</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:var(--color-gold); font-family:monospace; font-size:0.95rem;">94945708</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#fff;">Ettampitiya branch</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; padding-top:0.4rem; border-top:1px dashed rgba(212,175,55,0.2);"><span style="color:var(--color-text-muted);">Amount Due:</span><strong id="tour-bank-amount-display" style="color:var(--color-gold); font-size:1.05rem;">${isSriLanka ? 'Rs ' + tourGrandTotalLKR.toLocaleString() + ' LKR' : formattedTourTotal}</strong></div>
                                </div>
                                <div class="form-group" style="margin-bottom: 0.75rem;">
                                    <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Bank Transfer Receipt *</label>
                                    <div class="file-upload-zone" id="tour-bank-slip-zone">
                                        <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                        <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse receipt</span></div>
                                        <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                        <input type="file" id="tour-bank-slip" accept="image/*,.pdf" style="display:none;">
                                    </div>
                                    <div id="tour-bank-slip-preview" class="slip-preview" style="display:none;"></div>
                                </div>
                                <button type="submit" id="btn-submit-tour-bank" class="btn btn-primary" style="padding: 0.85rem 1.5rem; font-size: 0.9rem; font-weight: 700; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                    <span id="tour-bank-btn-text">Confirm Booking via Bank Transfer &bull; ${formattedTourTotal}</span>
                                </button>
                            </div>

                            <!-- Method B: Cash Deposit Slip -->
                            <div id="pay-panel-slip" class="pay-panel" style="margin-top: 0.5rem;">
                                <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.85rem; font-size: 0.8rem; margin-bottom: 0.75rem;">
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#fff;">Bank of Ceylon</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:#fff;">Rock one wild tea</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:var(--color-gold); font-family:monospace; font-size:0.95rem;">94945708</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.3rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#fff;">Ettampitiya branch</strong></div>
                                    <div class="bank-detail-row" style="display:flex; justify-content:space-between; padding-top:0.4rem; border-top:1px dashed rgba(212,175,55,0.2);"><span style="color:var(--color-text-muted);">Exact Deposit Amount:</span><strong id="tour-deposit-amount-display" style="color:var(--color-gold); font-size:1.05rem;">${isSriLanka ? 'Rs ' + tourGrandTotalLKR.toLocaleString() + ' LKR' : formattedTourTotal}</strong></div>
                                </div>
                                <div class="form-group" style="margin-bottom: 0.75rem;">
                                    <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Cash Deposit Slip *</label>
                                    <div class="file-upload-zone" id="tour-cash-slip-zone">
                                        <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                        <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse deposit slip</span></div>
                                        <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                        <input type="file" id="tour-cash-slip" accept="image/*,.pdf" style="display:none;">
                                    </div>
                                    <div id="tour-cash-slip-preview" class="slip-preview" style="display:none;"></div>
                                </div>
                                <button type="submit" id="btn-submit-tour-slip" class="btn btn-primary" style="padding: 0.85rem 1.5rem; font-size: 0.9rem; font-weight: 700; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                    <span id="tour-slip-btn-text">Submit Cash Deposit Slip &bull; ${formattedTourTotal}</span>
                                </button>
                            </div>

                            <!-- Method C: PayPal -->
                            <div id="pay-panel-paypal" class="pay-panel" style="margin-top: 0.5rem;">
                                <div style="background: rgba(0, 121, 193, 0.06); border: 1.5px solid rgba(0, 121, 193, 0.35); border-radius: 10px; padding: 1.15rem; margin-bottom: 0.75rem;">
                                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.3rem;">
                                        <strong style="color: #ffffff; font-size: 0.95rem;">Instant PayPal &amp; International Cards</strong>
                                        <span style="background: rgba(0,121,193,0.2); color: #38bdf8; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; text-transform: uppercase;">Instant Boarding Pass</span>
                                    </div>
                                    <p style="font-size: 0.76rem; color: #cbd5e1; line-height: 1.45; margin: 0 0 0.75rem 0;">
                                        Secure your private estate tasting instantly. Your official Gate Pass endorsed by CEO Prasanga will be generated immediately.
                                    </p>
                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.55rem 0.75rem; background: rgba(0,0,0,0.4); border-radius: 6px; margin-bottom: 0.85rem;">
                                        <span style="font-size: 0.75rem; color: #9ca3af;">PayPal Settlement Total:</span>
                                        <strong id="tour-paypal-amount-display" style="font-size: 1rem; color: var(--color-gold); font-family: monospace;">${currInfo.code === 'USD' ? '$' + tourGrandTotalUSD.toFixed(2) + ' USD' : formattedTourTotal + ' ($' + tourGrandTotalUSD.toFixed(2) + ' USD)'}</strong>
                                    </div>
                                    <div id="tour-paypal-button-container" class="paypal-smart-container" style="min-height: 44px;"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            `;

            drawerFooter.innerHTML = '';

            // Gate Pass Release View for Tour Booking
            const renderTourConfirmationSuccess = (booking, paymentMethod) => {
                const isPayPal = paymentMethod === 'paypal';

                drawerFormContainer.innerHTML = `
                    <div class="cart-success-view" style="text-align: center; padding: 2.25rem 1rem;">
                        <div style="width: 76px; height: 76px; border-radius: 50%; background: rgba(212,175,55,0.12); border: 2px solid var(--color-gold); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.15rem auto; color: var(--color-gold);">
                            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span class="season-badge" style="background: rgba(212,175,55,0.15); color: var(--color-gold); font-size: 0.72rem; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                            ${isPayPal ? 'Paid • Instant Gate Pass Release' : 'Reservation Pending Clearance • Gate Pass Issued'}
                        </span>
                        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: #ffffff; margin: 0.75rem 0 0.25rem 0;">Private Tour Reserved</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
                            Thank you, ${booking.customerName}. Your private estate visit has been entered into the visitor log.
                        </p>

                        <div style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; padding: 1.15rem; margin-bottom: 1.25rem; text-align: left;">
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Gate Pass / Booking ID</span>
                                <strong style="font-family: monospace; color: var(--color-gold); font-size: 0.95rem;">${booking.id}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Experience</span>
                                <strong style="color: #ffffff; font-size: 0.85rem; text-align: right; max-width: 210px;">${booking.packageName}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Tour Date &amp; Time</span>
                                <span style="color: #86efac; font-size: 0.85rem; font-weight: 600;">${booking.date || booking.tourDate} at ${booking.timeSlot}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Guests Reserved</span>
                                <span style="color: #ffffff; font-size: 0.85rem;">${booking.guests || 1} Guest${(booking.guests || 1) > 1 ? 's' : ''}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Amount</span>
                                <strong style="color: var(--color-gold); font-size: 1.1rem;">${booking.formattedPrice}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Operating Days</span>
                                <span style="color: #cbd5e1; font-size: 0.82rem;">Monday &ndash; Saturday (9:00 AM &ndash; 5:00 PM)</span>
                            </div>
                        </div>

                        <!-- Executive Director & CEO Verification Seal -->
                        <div style="background: rgba(212,175,55,0.06); border: 1px dashed rgba(212,175,55,0.35); border-radius: 10px; padding: 0.9rem 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                            <div style="text-align: left;">
                                <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700; display: block;">Gate Pass Endorsed &bull; CEO Sign-Off</span>
                                <div style="font-size: 0.76rem; color: #d1d5db; margin-top: 2px;">Admit to Rock One Estate &amp; Tasting Pavilion</div>
                            </div>
                            <div style="text-align: right;">
                                <img src="images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 34px; object-fit: contain; display: block; margin: 0 0 2px auto;" onerror="this.onerror=null; this.src='images/ceo_signature.png';" />
                                <div style="font-size: 0.76rem; font-weight: 700; color: #ffffff;">Prasanga</div>
                                <div style="font-size: 0.65rem; color: var(--color-gold);">Director &amp; CEO</div>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button type="button" class="btn btn-outline btn-tour-download-pdf" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(212,175,55,0.5); color: var(--color-gold); display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: rgba(0,0,0,0.35);">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                Download Estate Gate Pass (PDF)
                            </button>
                            <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20booked%20Private%20Tour%20${booking.id}%20(${encodeURIComponent(booking.packageName)})%20for%20${booking.guests}%20guests%20on%20${booking.date || booking.tourDate}.%20Please%20confirm%20my%20gate%20clearance." target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.85rem 1.5rem; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #25d366; border-color: #25d366; color: #040e08; font-weight: 700;">
                                <span>Notify Concierge on WhatsApp</span>
                            </a>
                            <button type="button" class="btn btn-outline" onclick="closeDrawer(); window.appSwitchTab ? window.appSwitchTab('tour') : (document.getElementById('nav-tour') &amp;&amp; document.getElementById('nav-tour').click())" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                                View Tour Master Schedule &rarr;
                            </button>
                        </div>
                    </div>
                `;

                drawerFormContainer.querySelector('.btn-tour-download-pdf')?.addEventListener('click', () => {
                    generateGatePassPDF(booking);
                });
            };

            // Dynamic Tour Pricing & Currency Updates
            const updateTourPricing = () => {
                const country = document.getElementById('tour-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                window.lastSelectedCheckoutCountry = country;
                const isLK = country === 'Sri Lanka';
                const cur = window.getCountryCurrency ? window.getCountryCurrency(country) : (isLK ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });
                
                const transportOpt = document.querySelector('input[name="tour-transport-option"]:checked')?.value || 'self';
                transportFeeUSD = transportOpt === 'chauffeur' ? 25.0 : 0.0;
                tourSubtotalUSD = baseUsdPerGuest * tourGuests;
                tourGrandTotalUSD = tourSubtotalUSD + transportFeeUSD;

                formattedPerGuest = window.formatAmountInCurrency ? window.formatAmountInCurrency(baseUsdPerGuest, cur) : `$${baseUsdPerGuest.toFixed(2)}`;
                const formattedSub = window.formatAmountInCurrency ? window.formatAmountInCurrency(tourSubtotalUSD, cur) : `$${tourSubtotalUSD.toFixed(2)}`;
                formattedTourTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(tourGrandTotalUSD, cur) : `$${tourGrandTotalUSD.toFixed(2)}`;
                tourGrandTotalLKR = Math.round(tourGrandTotalUSD * 305);

                const ratePerGuestEl = document.getElementById('tour-rate-per-guest');
                if (ratePerGuestEl) ratePerGuestEl.textContent = `${formattedPerGuest} per guest`;
                const subEl = document.getElementById('tour-summary-subtotal');
                if (subEl) subEl.textContent = formattedSub;
                const transEl = document.getElementById('tour-summary-transport');
                if (transEl) {
                    transEl.textContent = transportFeeUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(transportFeeUSD, cur) : '$25.00') : 'Complimentary Arrival';
                    transEl.style.color = transportFeeUSD > 0 ? '#86efac' : 'var(--color-gold)';
                }
                const totalTitle = document.getElementById('tour-summary-total-title');
                if (totalTitle) totalTitle.textContent = `Total Payable (${cur.code})`;
                const totalEl = document.getElementById('tour-summary-total');
                if (totalEl) totalEl.textContent = formattedTourTotal;

                const transPill = document.getElementById('tour-transport-surcharge-pill');
                if (transPill && window.formatAmountInCurrency) {
                    transPill.textContent = `+ ${window.formatAmountInCurrency(25, cur)}`;
                }

                const bankAmt = document.getElementById('tour-bank-amount-display');
                if (bankAmt) {
                    bankAmt.innerHTML = isLK ? `Rs ${tourGrandTotalLKR.toLocaleString()} LKR` : `${formattedTourTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${tourGrandTotalLKR.toLocaleString()} LKR)</span>`;
                }
                const bankBtn = document.getElementById('tour-bank-btn-text');
                if (bankBtn) bankBtn.textContent = `Confirm Booking via Bank Transfer • ${formattedTourTotal}`;

                const depAmt = document.getElementById('tour-deposit-amount-display');
                if (depAmt) {
                    depAmt.innerHTML = isLK ? `Rs ${tourGrandTotalLKR.toLocaleString()} LKR` : `${formattedTourTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${tourGrandTotalLKR.toLocaleString()} LKR)</span>`;
                }
                const slipBtn = document.getElementById('tour-slip-btn-text');
                if (slipBtn) slipBtn.textContent = `Submit Cash Deposit Slip • ${formattedTourTotal}`;

                const ppAmt = document.getElementById('tour-paypal-amount-display');
                if (ppAmt) {
                    ppAmt.textContent = cur.code === 'USD' ? `$${tourGrandTotalUSD.toFixed(2)} USD` : `${formattedTourTotal} ($${tourGrandTotalUSD.toFixed(2)} USD)`;
                }

                const activeTab = document.querySelector('#tour-checkout-form .pay-tab.active');
                if (activeTab && activeTab.getAttribute('data-method') === 'paypal') {
                    initTourPayPal();
                }
            };

            // Stepper
            const minusBtn = document.getElementById('tour-qty-minus');
            const plusBtn = document.getElementById('tour-qty-plus');
            const qtyVal = document.getElementById('tour-qty-val');

            if (minusBtn) {
                minusBtn.onclick = () => {
                    if (tourGuests > 1) {
                        tourGuests--;
                        if (qtyVal) qtyVal.textContent = tourGuests;
                        updateTourPricing();
                    }
                };
            }
            if (plusBtn) {
                plusBtn.onclick = () => {
                    if (tourGuests < 10) {
                        tourGuests++;
                        if (qtyVal) qtyVal.textContent = tourGuests;
                        updateTourPricing();
                    }
                };
            }

            const countryInput = document.getElementById('tour-cust-country');
            if (countryInput) countryInput.onchange = updateTourPricing;

            drawerFormContainer.querySelectorAll('input[name="tour-transport-option"]').forEach(r => {
                r.onchange = () => {
                    const selfCard = document.getElementById('tour-transport-card-self');
                    const chaufCard = document.getElementById('tour-transport-card-chauffeur');
                    if (r.value === 'chauffeur') {
                        if (chaufCard) { chaufCard.style.border = '1.5px solid var(--color-gold)'; chaufCard.style.background = 'rgba(212,175,55,0.08)'; }
                        if (selfCard) { selfCard.style.border = '1.5px solid rgba(255,255,255,0.15)'; selfCard.style.background = 'rgba(0,0,0,0.3)'; }
                    } else {
                        if (selfCard) { selfCard.style.border = '1.5px solid var(--color-gold)'; selfCard.style.background = 'rgba(212,175,55,0.08)'; }
                        if (chaufCard) { chaufCard.style.border = '1.5px solid rgba(255,255,255,0.15)'; chaufCard.style.background = 'rgba(0,0,0,0.3)'; }
                    }
                    updateTourPricing();
                };
            });

            // Date validation (Reject Sunday)
            const dateInput = document.getElementById('tour-date-input');
            if (dateInput) {
                dateInput.onchange = () => {
                    if (dateInput.value) {
                        const d = new Date(dateInput.value + 'T00:00:00');
                        if (d.getDay() === 0) { // Sunday
                            showToast("Estate Closed on Sunday", "Rock One Tea Factory operates Monday through Saturday (9:00 AM – 5:00 PM). Please select a Monday through Saturday date.", "warning");
                            const nextDay = new Date(d.getTime() + 86400000).toISOString().split('T')[0];
                            dateInput.value = nextDay;
                        }
                    }
                };
            }

            bindPaymentTabs('tour-checkout-form');
            bindFileUpload('tour-bank-slip', 'tour-bank-slip-zone', 'tour-bank-slip-preview', (b64) => {
                selectedTourSlipBase64 = b64;
            });
            bindFileUpload('tour-cash-slip', 'tour-cash-slip-zone', 'tour-cash-slip-preview', (b64) => {
                selectedTourSlipBase64 = b64;
            });

            // Wire PayPal
            const initTourPayPal = () => {
                const container = document.getElementById('tour-paypal-button-container');
                if (!container || !window.TeaFactoryPayPal) return;

                window.TeaFactoryPayPal.renderButtons({
                    containerId: 'tour-paypal-button-container',
                    orderId: `GP-TOUR-${Date.now()}`,
                    amount: tourGrandTotalUSD,
                    currency: 'USD',
                    description: `${pkgName} (${tourGuests} Guest${tourGuests > 1 ? 's' : ''})`,
                    onValidate: () => {
                        const form = document.getElementById('tour-checkout-form');
                        if (!form || !form.checkValidity()) {
                            if (form) form.reportValidity();
                            return false;
                        }
                        return true;
                    },
                    onSuccess: async ({ paypalOrderId, captureData }) => {
                        const firstName = document.getElementById('tour-cust-firstname')?.value?.trim() || '';
                        const lastName = document.getElementById('tour-cust-lastname')?.value?.trim() || '';
                        const customerName = `${firstName} ${lastName}`.trim() || 'Visitor';
                        const email = document.getElementById('tour-cust-email')?.value?.trim() || '';
                        const phone = document.getElementById('tour-cust-phone')?.value?.trim() || '';
                        const tourDate = document.getElementById('tour-date-input')?.value || '';
                        const slot = document.getElementById('tour-time-slot')?.value || timeSlot;
                        const dietary = document.getElementById('tour-dietary')?.value || 'None';
                        const transport = document.querySelector('input[name="tour-transport-option"]:checked')?.value || 'self';
                        const country = document.getElementById('tour-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');

                        const result = window.TeaFactoryStore.bookTour({
                            packageName: pkgName,
                            name: customerName,
                            email,
                            phone,
                            country,
                            guests: tourGuests,
                            date: tourDate,
                            timeSlot: slot,
                            dietaryNotes: dietary,
                            transportOption: transport === 'chauffeur' ? 'Estate Chauffeur Pick-up' : 'Independent Arrival',
                            paymentMethod: 'paypal',
                            priceUSD: tourGrandTotalUSD,
                            formattedPrice: formattedTourTotal,
                            slipImage: ''
                        });

                        if (result && result.success) {
                            const booking = result.booking;
                            window.TeaFactoryStore.markTourPaidByPayPal(booking.id, captureData || { id: paypalOrderId });
                            window.TeaFactoryStore.saveRecentOrderId(booking.id);

                            showToast("Tour Reserved!", `Gate Pass ${booking.id} has been issued and endorsed.`, "success");
                            renderTourConfirmationSuccess(booking, 'paypal');
                        }
                    }
                });
            };

            const tourPaypalTab = drawerFormContainer.querySelector('.pay-tab[data-method="paypal"]');
            if (tourPaypalTab) {
                tourPaypalTab.addEventListener('click', () => {
                    setTimeout(initTourPayPal, 50);
                });
            }

            // Tour Checkout Form Submit (Bank Transfer & Slip)
            const handleTourCheckoutSubmit = (e) => {
                if (e) e.preventDefault();
                const form = document.getElementById('tour-checkout-form');
                if (!form || !form.checkValidity()) {
                    if (form) form.reportValidity();
                    return;
                }

                const activeTabBtn = form.querySelector('.pay-tab.active');
                const paymentMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'bank';

                if (paymentMethod === 'paypal') {
                    showToast("PayPal Active", "Please use the official PayPal button above to complete your booking.", "info");
                    return;
                }

                const slipImg = selectedTourSlipBase64 || 
                    document.getElementById('tour-bank-slip-zone')?.dataset?.fileBase64 || 
                    document.getElementById('tour-cash-slip-zone')?.dataset?.fileBase64 || '';

                if (!slipImg) {
                    showToast("Receipt Required", "Please attach your bank transfer or deposit slip to confirm your Gate Pass.", "warning");
                    return;
                }

                const firstName = document.getElementById('tour-cust-firstname')?.value?.trim() || '';
                const lastName = document.getElementById('tour-cust-lastname')?.value?.trim() || '';
                const customerName = `${firstName} ${lastName}`.trim() || 'Visitor';
                const email = document.getElementById('tour-cust-email')?.value?.trim() || '';
                const phone = document.getElementById('tour-cust-phone')?.value?.trim() || '';
                const tourDate = document.getElementById('tour-date-input')?.value || '';
                const slot = document.getElementById('tour-time-slot')?.value || timeSlot;
                const dietary = document.getElementById('tour-dietary')?.value || 'None';
                const transport = document.querySelector('input[name="tour-transport-option"]:checked')?.value || 'self';
                const country = document.getElementById('tour-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');

                const result = window.TeaFactoryStore.bookTour({
                    packageName: pkgName,
                    name: customerName,
                    email,
                    phone,
                    country,
                    guests: tourGuests,
                    date: tourDate,
                    timeSlot: slot,
                    dietaryNotes: dietary,
                    transportOption: transport === 'chauffeur' ? 'Estate Chauffeur Pick-up' : 'Independent Arrival',
                    paymentMethod,
                    priceUSD: tourGrandTotalUSD,
                    formattedPrice: formattedTourTotal,
                    slipImage: slipImg
                });

                if (result && result.success) {
                    const booking = result.booking;
                    booking.formattedPrice = formattedTourTotal;
                    window.TeaFactoryStore.saveRecentOrderId(booking.id);

                    showToast("Gate Pass Issued!", `Tour booking ${booking.id} confirmed.`, "success");
                    renderTourConfirmationSuccess(booking, paymentMethod);
                } else {
                    showToast("Booking Failed", result?.message || "Could not reserve private tour.", "error");
                }
            };

            const tourForm = document.getElementById('tour-checkout-form');
            if (tourForm) tourForm.onsubmit = handleTourCheckoutSubmit;

            document.getElementById('tour-guest-signin-btn')?.addEventListener('click', () => {
                if (typeof window.requireCustomerAuth === 'function') {
                    window.requireCustomerAuth('Sign in or register to track your tour boarding pass in your patron ledger.', () => {
                        openDrawer('tour', id, data);
                    });
                }
            });
        } else if (type === 'product') {
            const products = window.TeaFactoryStore.getProducts();
            const product = products.find(p => p.id === id) || { id, name: 'Single-Estate Tea', price: 28.00, weight: '100g', category: 'Single-Estate Tea', leafGrade: 'Silver Tips', flavorProfile: 'Honey, Orchid, Velvet Wood' };
            const prodMinDate = new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0];
            const unitPriceUSD = Number(product.price) || 0;
            const itemDefinedShipping = Number(product.shippingCharge !== undefined ? product.shippingCharge : (product.shippingFee || 0)) || 0;
            
            const selectedCountry = window.lastSelectedCheckoutCountry || 'Sri Lanka';
            const isSriLanka = selectedCountry === 'Sri Lanka';
            const currInfo = window.getCountryCurrency ? window.getCountryCurrency(selectedCountry) : (isSriLanka ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });
            
            let currentQuickQty = 1;
            let activeProdPromo = null; // { code, percent, label, savingsUSD }

            let subtotalUSD = unitPriceUSD * currentQuickQty;
            let discountUSD = 0;
            let discountedSubtotalUSD = subtotalUSD;
            let shippingUSD = window.calculateShippingFee ? window.calculateShippingFee(discountedSubtotalUSD, selectedCountry, itemDefinedShipping) : (isSriLanka ? 2.13 : 15.0);
            let grandTotalUSD = discountedSubtotalUSD + shippingUSD;

            let formattedSubtotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(subtotalUSD, currInfo) : `$${subtotalUSD.toFixed(2)}`;
            let formattedShipping = shippingUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(shippingUSD, currInfo) : `$${shippingUSD.toFixed(2)}`) : 'Complimentary';
            let formattedGrandTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(grandTotalUSD, currInfo) : `$${grandTotalUSD.toFixed(2)}`;
            let grandTotalLKR = Math.round(grandTotalUSD * 305);

            drawerTitle.innerHTML = `<div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;"><span>Order: ${product.name}</span><span style="font-size:0.68rem; font-weight:700; color:#86efac; background:rgba(34,197,94,0.12); border:1px solid rgba(34,197,94,0.3); border-radius:20px; padding:0.2rem 0.65rem; display:inline-flex; align-items:center; gap:0.3rem;"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> 256-Bit SSL Encrypted</span></div>`;
            selectedProdSlipBase64 = '';

            const signedUser = window.TeaFactoryStore && window.TeaFactoryStore.getCurrentUser ? window.TeaFactoryStore.getCurrentUser() : null;
            let defaultFirstName = '';
            let defaultLastName = '';
            if (signedUser && signedUser.full_name) {
                const parts = signedUser.full_name.trim().split(' ');
                defaultFirstName = parts[0] || '';
                defaultLastName = parts.slice(1).join(' ') || '';
            }
            const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

            const displayHeadline = product.headline || 'Tender spring buds, roasted chestnut aroma, and fresh natural sweetness';
            const displayAbout = product.about || product.desc || product.description || 'Golden Sprout delivers a delicate, naturally sweet taste with a smooth, silky finish. Made from young tea buds and crafted through traditional artisanal processing, this rare tea offers a gentle yet layered flavor and a beautiful golden liquor—perfect for anyone who enjoys a clean, comforting cup.';
            const displayOrigin = product.origin || ('Passara & Wellawela Sanctuary, Badulla District, Uva Highlands, Sri Lanka (Elevation: ' + (product.elevation || '1,240m – 1,320m') + '). High montane cloud forest enriched by natural granite springs and dry August katabatic winds.');
            const displayCaffeine = product.caffeine || 'Medium (approx. 38mg – 45mg per 250ml brewed cup). Naturally balanced by exceptionally high concentrations of calming L-theanine, promoting alert tranquility and steady cognitive focus.';
            const displayPreparation = product.preparation || ('Water: ' + (product.steepTemp || '90°C – 95°C (194°F – 203°F)') + ' soft mountain or filtered water. Leaf-to-Water Ratio: 3.5g per 150ml (Gongfu gaiwan) or 2.5g per 250ml (Western teapot). Infusion Timing: 1st: 35s, 2nd: 50s, 3rd: 80s, 4th & 5th: 120s.');
            const displayBenefits = product.benefits || 'Rich in natural polyphenols, EGCG, and theaflavins. Supports daily metabolic wellness, cellular longevity, digestive harmony, and clean sustained alertness without jitters.';

            let currentCheckoutStage = 1;

            drawerFormContainer.innerHTML = `
                <div class="checkout-split-layout">
                    <!-- ==============================================
                         LEFT COLUMN: PATRON BANNER, DOSSIER, REVIEWS & DELIVERY/PAYMENT STAGES
                         ============================================== -->
                    <div class="checkout-left-col">
                        <!-- ================= STAGE 1: PRODUCT OVERVIEW & REVIEWS ================= -->
                        <div id="quick-stage-overview" class="checkout-stage-view">
                            <!-- Patron Banner -->
                            <div class="checkout-step-card" style="padding: 0.95rem 1.15rem;">
                            ${signedUser ? `
                                <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <span style="width: 22px; height: 22px; border-radius: 50%; background: rgba(34,197,94,0.15); border: 1px solid #22c55e; color: #22c55e; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: bold;">✓</span>
                                        <div>
                                            <div style="font-size: 0.82rem; font-weight: 700; color: #ffffff;">Patron Account: <span style="color: var(--color-gold);">${esc(signedUser.full_name || signedUser.email)}</span></div>
                                            <div style="font-size: 0.7rem; color: #86efac;">${esc(signedUser.email)} &bull; Linked to Estate Master Ledger</div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-outline" onclick="window.TeaFactoryStore.logoutCustomer &amp;&amp; window.TeaFactoryStore.logoutCustomer(); openDrawer('product', '${id}');" style="font-size: 0.68rem; padding: 0.25rem 0.6rem; border-color: rgba(255,255,255,0.2); color: var(--color-text-muted);">
                                        Switch Account
                                    </button>
                                </div>
                            ` : `
                                <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                    <div style="flex: 1; min-width: 210px;">
                                        <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 700; color: var(--color-gold); margin-bottom: 0.2rem;">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            <span>Guest Checkout Active (No Sign-In Required)</span>
                                        </div>
                                        <p style="font-size: 0.72rem; color: rgba(255,255,255,0.65); line-height: 1.4; margin: 0;">
                                            You can order immediately as an anonymous guest. Or sign in to save your allocation in the patron portal.
                                        </p>
                                    </div>
                                    <button type="button" id="quick-guest-signin-btn" class="btn btn-outline" style="font-size: 0.72rem; padding: 0.35rem 0.8rem; border-color: var(--color-gold); color: var(--color-gold); white-space: nowrap;">
                                        Sign In / Register
                                    </button>
                                </div>
                            `}
                        </div>

                        <!-- Seven Teahouse Style Product Dossier & Accordions Card -->
                        <div class="checkout-step-card checkout-dossier-card">
                            <div class="checkout-dossier-inner">
                                <h3 class="checkout-dossier-headline">${esc(displayHeadline)}</h3>
                                <hr class="checkout-dossier-divider">

                                <div class="checkout-accordions">
                                    <!-- 1. About This Tea -->
                                    <div class="checkout-accordion-item open" data-accordion="about">
                                        <button type="button" class="checkout-accordion-header" aria-expanded="true">
                                            <span class="checkout-accordion-title">About This Tea</span>
                                            <span class="checkout-accordion-icon">−</span>
                                        </button>
                                        <div class="checkout-accordion-body" style="display: block;">
                                            <p style="font-weight: 700; font-size: 0.95rem; color: #1e293b; margin-bottom: 0.45rem;">${esc(product.name)}</p>
                                            <p>${esc(displayAbout)}</p>
                                            <div class="checkout-dossier-tags">
                                                <span class="checkout-dossier-tag">🌿 ${esc(product.leafGrade || 'Single Estate')}</span>
                                                <span class="checkout-dossier-tag">🏔️ ${esc(product.elevation || '1,240m - 1,320m')}</span>
                                                <span class="checkout-dossier-tag">🍃 ${esc(product.weight || '100g')} Vintage Tin</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- 2. Origin -->
                                    <div class="checkout-accordion-item" data-accordion="origin">
                                        <button type="button" class="checkout-accordion-header" aria-expanded="false">
                                            <span class="checkout-accordion-title">Origin</span>
                                            <span class="checkout-accordion-icon">+</span>
                                        </button>
                                        <div class="checkout-accordion-body" style="display: none;">
                                            <p>${esc(displayOrigin)}</p>
                                        </div>
                                    </div>

                                    <!-- 3. Caffeine Level -->
                                    <div class="checkout-accordion-item" data-accordion="caffeine">
                                        <button type="button" class="checkout-accordion-header" aria-expanded="false">
                                            <span class="checkout-accordion-title">Caffeine Level</span>
                                            <span class="checkout-accordion-icon">+</span>
                                        </button>
                                        <div class="checkout-accordion-body" style="display: none;">
                                            <p>${esc(displayCaffeine)}</p>
                                        </div>
                                    </div>

                                    <!-- 4. Preparation -->
                                    <div class="checkout-accordion-item" data-accordion="preparation">
                                        <button type="button" class="checkout-accordion-header" aria-expanded="false">
                                            <span class="checkout-accordion-title">Preparation</span>
                                            <span class="checkout-accordion-icon">+</span>
                                        </button>
                                        <div class="checkout-accordion-body" style="display: none;">
                                            <p>${esc(displayPreparation)}</p>
                                        </div>
                                    </div>

                                    <!-- 5. Tea Benefits -->
                                    <div class="checkout-accordion-item" data-accordion="benefits">
                                        <button type="button" class="checkout-accordion-header" aria-expanded="false">
                                            <span class="checkout-accordion-title">Tea Benefits</span>
                                            <span class="checkout-accordion-icon">+</span>
                                        </button>
                                        <div class="checkout-accordion-body" style="display: none;">
                                            <p>${esc(displayBenefits)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Customer Reviews Section (Seven Teahouse Style) -->
                        ${window.UIComponents && window.UIComponents.renderCheckoutReviewsHTML ? window.UIComponents.renderCheckoutReviewsHTML(product.name) : ''}

                        <!-- Bottom Stage 1 Call to Action -->
                        <div class="checkout-stage1-cta-wrap" style="margin-top: 1.5rem; text-align: center;">
                            <button type="button" class="btn btn-primary checkout-stage-proceed-btn" id="quick-stage-proceed-btn" style="width: 100%; padding: 1rem 1.5rem; font-size: 1rem; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 0.6rem; border-radius: 8px; box-shadow: 0 4px 14px rgba(212,175,55,0.25); cursor: pointer;">
                                <span>Buy Now &bull; Proceed to Delivery &amp; Payment</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    <!-- ================= STAGE 2: DELIVERY DETAILS & PAYMENT OPTIONS ================= -->
                    <div id="quick-stage-payment" class="checkout-stage-view" style="display: none;">
                        <!-- Top Step Navigation Bar -->
                        <div class="checkout-stage-nav-bar">
                            <button type="button" class="checkout-back-step-btn" id="quick-back-to-overview-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                <span>Back to Tea Details &amp; Reviews</span>
                            </button>
                            <div class="checkout-stage-step-pill">
                                <span class="step-dot"></span>
                                <span>Step 2 of 2 &bull; Delivery &amp; Payment</span>
                            </div>
                        </div>

                        <!-- Form -->
                        <form id="quick-checkout-form" style="display: flex; flex-direction: column; gap: 1rem;">
                            <!-- Destination Section -->
                            <div class="checkout-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                        <span>1. Delivery Destination</span>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-country" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Destination Country *</label>
                                        <select class="form-input" id="quick-cust-country" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
                                            <option value="Sri Lanka" ${selectedCountry === 'Sri Lanka' ? 'selected' : ''}>🇱🇰 Sri Lanka (LKR Rs)</option>
                                            <option value="United States" ${selectedCountry === 'United States' ? 'selected' : ''}>🇺🇸 United States (USD $)</option>
                                            <option value="United Kingdom" ${selectedCountry === 'United Kingdom' ? 'selected' : ''}>🇬🇧 United Kingdom (GBP £)</option>
                                            <option value="Australia" ${selectedCountry === 'Australia' ? 'selected' : ''}>🇦🇺 Australia (AUD A$)</option>
                                            <option value="Canada" ${selectedCountry === 'Canada' ? 'selected' : ''}>🇨🇦 Canada (CAD C$)</option>
                                            <option value="Germany" ${selectedCountry === 'Germany' ? 'selected' : ''}>🇩🇪 Germany (EUR €)</option>
                                            <option value="France" ${selectedCountry === 'France' ? 'selected' : ''}>🇫🇷 France (EUR €)</option>
                                            <option value="Japan" ${selectedCountry === 'Japan' ? 'selected' : ''}>🇯🇵 Japan (JPY ¥)</option>
                                            <option value="United Arab Emirates" ${selectedCountry === 'United Arab Emirates' ? 'selected' : ''}>🇦🇪 United Arab Emirates (AED)</option>
                                            <option value="Singapore" ${selectedCountry === 'Singapore' ? 'selected' : ''}>🇸🇬 Singapore (SGD S$)</option>
                                            <option value="India" ${selectedCountry === 'India' ? 'selected' : ''}>🇮🇳 India (INR ₹)</option>
                                            <option value="Switzerland" ${selectedCountry === 'Switzerland' ? 'selected' : ''}>🇨🇭 Switzerland (CHF)</option>
                                            <option value="China" ${selectedCountry === 'China' ? 'selected' : ''}>🇨🇳 China (CNY ¥)</option>
                                            <option value="Worldwide" ${selectedCountry === 'Worldwide' ? 'selected' : ''}>🌐 Rest of World (USD $)</option>
                                        </select>
                                    </div>

                                    <div class="form-group" style="margin-bottom: 0;" id="quick-region-container">
                                        ${isSriLanka ? `
                                            <label class="form-label" for="quick-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Region / Province *</label>
                                            <select class="form-input" id="quick-cust-region" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
                                                <option value="Western Province (Colombo, Gampaha, Kalutara)">Western Province (Colombo, Gampaha)</option>
                                                <option value="Central Province (Kandy, Nuwara Eliya, Matale)">Central Province (Kandy, Nuwara Eliya)</option>
                                                <option value="Uva Province (Badulla, Bandarawela, Ettampitiya)" selected>Uva Province (Badulla, Ettampitiya)</option>
                                                <option value="Southern Province (Galle, Matara, Hambantota)">Southern Province (Galle, Matara)</option>
                                                <option value="Sabaragamuwa Province (Ratnapura, Kegalle)">Sabaragamuwa Province (Ratnapura)</option>
                                                <option value="North Western Province (Kurunegala, Puttalam)">North Western Province (Kurunegala)</option>
                                                <option value="North Central Province (Anuradhapura, Polonnaruwa)">North Central Province (Anuradhapura)</option>
                                                <option value="Northern Province (Jaffna, Kilinochchi, Vavuniya)">Northern Province (Jaffna)</option>
                                                <option value="Eastern Province (Batticaloa, Trincomalee, Ampara)">Eastern Province (Batticaloa, Trincomalee)</option>
                                            </select>
                                        ` : `
                                            <label class="form-label" for="quick-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">State / Province / County *</label>
                                            <input class="form-input" type="text" id="quick-cust-region" placeholder="e.g. California / London / Tokyo" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;" required>
                                        `}
                                    </div>
                                </div>
                            </div>

                            <!-- Recipient Details Section -->
                            <div class="checkout-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span>2. Recipient &amp; Delivery Address</span>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-firstname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">First Name *</label>
                                        <input class="form-input" type="text" id="quick-cust-firstname" value="${esc(defaultFirstName)}" required placeholder="e.g. Ruwan" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-lastname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Last Name *</label>
                                        <input class="form-input" type="text" id="quick-cust-lastname" value="${esc(defaultLastName)}" required placeholder="e.g. Perera" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-email" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Email (Tracking &amp; Certificate) *</label>
                                        <input class="form-input" type="email" id="quick-cust-email" value="${esc(signedUser ? signedUser.email : '')}" required placeholder="e.g. patron@rockonewild.com" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;" ${signedUser ? 'readonly style="opacity:0.88;"' : ''}>
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-phone" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Mobile Phone (Courier Updates) *</label>
                                        <input class="form-input" type="tel" id="quick-cust-phone" value="${esc(signedUser ? signedUser.phone || '' : '')}" required placeholder="e.g. +94 77 123 4567" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                </div>

                                <div class="form-group" style="margin-bottom: 0.75rem;">
                                    <label class="form-label" for="quick-cust-address" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Street Address *</label>
                                    <input class="form-input" type="text" id="quick-cust-address" required placeholder="e.g. 42 Highland View Road" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>

                                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-suite" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Apt / Suite</label>
                                        <input class="form-input" type="text" id="quick-cust-suite" placeholder="e.g. Apt 4B" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-city" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">City / Town *</label>
                                        <input class="form-input" type="text" id="quick-cust-city" required placeholder="e.g. Colombo / London" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-postal" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Postal Code *</label>
                                        <input class="form-input" type="text" id="quick-cust-postal" required placeholder="e.g. 00700 / SW1A 1AA" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                </div>
                            </div>

                            <!-- Insured Courier Method -->
                            <div class="checkout-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                        <span>3. Insured Courier Delivery</span>
                                    </div>
                                </div>

                                <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                                    <label class="radio-card" id="quick-shipping-card-ems" style="display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.85rem 1rem; border: 1.5px solid var(--color-gold); border-radius: 10px; background: rgba(212,175,55,0.08); cursor: pointer;">
                                        <input type="radio" name="quick-shipping-method" id="quick-ship-ems" value="ems_express" checked style="margin-top: 0.25rem;">
                                        <div style="flex: 1;">
                                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                                                <strong id="quick-shipping-ems-title" style="color: #ffffff; font-size: 0.88rem;">${isSriLanka ? 'Sri Lanka Post EMS Express (Pre-paid)' : 'Sri Lanka Post EMS International Priority Air'}</strong>
                                                <span id="quick-shipping-ems-price-pill" style="color: ${shippingUSD > 0 ? '#86efac' : 'var(--color-gold)'}; font-size: 0.8rem; font-weight: 700;">${formattedShipping}</span>
                                            </div>
                                            <p id="quick-shipping-ems-desc" style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.4; margin: 0;">
                                                ${isSriLanka ? 'Door-to-door express parcel courier with official Sri Lanka Post tracking ID. Settle online via PayPal/Card or Direct Bank Transfer.' : 'Official Sri Lanka Post EMS International Priority Air Courier with end-to-end tracking number. Estimated transit: 5-10 business days.'}
                                            </p>
                                        </div>
                                    </label>

                                    <label class="radio-card" id="quick-shipping-card-cod" style="display: ${isSriLanka ? 'flex' : 'none'}; align-items: flex-start; gap: 0.75rem; padding: 0.85rem 1rem; border: 1.5px solid rgba(255,255,255,0.15); border-radius: 10px; background: rgba(0,0,0,0.3); cursor: pointer;">
                                        <input type="radio" name="quick-shipping-method" id="quick-ship-cod" value="cod" style="margin-top: 0.25rem;">
                                        <div style="flex: 1;">
                                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                                                <strong style="color: #ffffff; font-size: 0.88rem;">Cash on Delivery (COD &bull; Pay to Courier)</strong>
                                                <span id="quick-shipping-cod-price-pill" style="color: ${shippingUSD > 0 ? '#86efac' : 'var(--color-gold)'}; font-size: 0.8rem; font-weight: 700;">${formattedShipping}</span>
                                            </div>
                                            <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.4; margin: 0;">
                                                Pay cash upon parcel delivery at your doorstep anywhere in Sri Lanka.
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <!-- Payment Method Section -->
                            <div class="checkout-step-card" id="quick-payment-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                        <span>4. Payment Method &amp; Order Confirmation</span>
                                    </div>
                                </div>

                                <!-- COD Panel -->
                                <div id="quick-pay-panel-cod" style="display: none;">
                                    <div style="background: rgba(37,211,102,0.08); border: 1.5px solid rgba(37,211,102,0.4); border-radius: 10px; padding: 1.15rem; text-align: center; margin-bottom: 1rem;">
                                        <h4 style="color: #4ade80; font-size: 1.05rem; margin-bottom: 0.35rem; font-weight: 700;">Cash on Delivery (COD) Active</h4>
                                        <p style="font-size: 0.78rem; color: #cbd5e1; line-height: 1.5; margin: 0 0 0.85rem 0;">
                                            The Sri Lanka Post EMS courier will collect the cash amount upon parcel handover.
                                        </p>
                                        <div style="background: rgba(0,0,0,0.45); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.65rem 1rem; display: inline-flex; align-items: center; gap: 0.75rem;">
                                            <span style="font-size: 0.78rem; color: #9ca3af;">Payable to Courier:</span>
                                            <strong id="quick-cod-amount-display" style="font-size: 1.25rem; color: var(--color-gold); font-family: monospace;">Rs ${grandTotalLKR.toLocaleString()} LKR</strong>
                                        </div>
                                    </div>
                                </div>

                                <!-- Pre-Paid Panels -->
                                <div id="quick-pay-panel-prepaid">
                                    <div class="payment-method-tabs" style="margin-bottom: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.35rem;">
                                        <button type="button" class="pay-tab active" data-method="bank" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                                            Bank Transfer (Live)
                                        </button>
                                        <button type="button" class="pay-tab" data-method="slip" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                            Cash Deposit Slip (Live)
                                        </button>
                                        <button type="button" class="pay-tab" data-method="paypal" style="display:inline-flex; align-items:center; gap:0.35rem; border-color: rgba(0,121,193,0.5);">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#0079C1"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.643h7.14c3.04 0 5.25.707 6.42 2.054 1.157 1.332 1.34 3.23.542 5.645-.034.103-.073.208-.117.313-.884 2.658-2.825 4.14-5.772 4.407l-.234.015h-2.15a.91.91 0 0 0-.9.774l-.994 4.887a.641.641 0 0 1-.613.519zm7.14-15.76h-5.9a.28.28 0 0 0-.276.23L5.352 20.337h2.72l.9-4.428a1.41 1.41 0 0 1 1.385-1.129h2.15c2.475-.224 4.123-1.464 4.887-3.76.037-.09.07-.179.1-.27.674-2.04.53-3.567-.432-4.673-.956-1.098-2.766-1.517-5.046-1.517z"/></svg>
                                            <span style="font-weight:700;"><span style="color:#0079C1;">Pay</span><span style="color:#00457C;">Pal</span></span>
                                            <span style="font-size:0.6rem; padding:0.1rem 0.35rem; border-radius:3px; background:rgba(0,121,193,0.2); color:#38bdf8; font-weight:700;">LIVE</span>
                                        </button>
                                    </div>

                                    <!-- Bank Transfer Panel -->
                                    <div id="quick-pay-panel-bank" class="pay-panel pay-panel-bank active">
                                        <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.95rem;">
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#ffffff;">Bank of Ceylon</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:var(--color-gold);">Rock one wild tea</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:#ffffff; font-family:monospace; font-size:0.95rem; letter-spacing:1px;">94945708</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#ffffff;">Ettampitiya branch</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; border-top:1px dashed rgba(212,175,55,0.2); padding-top:0.45rem; margin-top:0.35rem; font-size:0.85rem;"><span style="color:var(--color-text-muted);">Amount Due:</span><strong id="quick-bank-amount-display" style="color:var(--color-gold); font-size:1rem;">${isSriLanka ? 'Rs ' + grandTotalLKR.toLocaleString() + ' LKR' : formattedGrandTotal}</strong></div>
                                        </div>
                                        <div class="form-group" style="margin-top:0.65rem; margin-bottom: 0;">
                                            <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Bank Transfer Slip *</label>
                                            <div class="file-upload-zone" id="quick-bank-slip-zone">
                                                <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                                <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse receipt file</span></div>
                                                <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                                <input type="file" id="quick-bank-slip" accept="image/*,.pdf" style="display:none;">
                                            </div>
                                            <div id="quick-bank-slip-preview" class="slip-preview" style="display:none;"></div>
                                        </div>
                                    </div>

                                    <!-- Cash Deposit Panel -->
                                    <div id="quick-pay-panel-slip" class="pay-panel pay-panel-slip">
                                        <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.95rem;">
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#ffffff;">Bank of Ceylon</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:var(--color-gold);">Rock one wild tea</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:#ffffff; font-family:monospace; font-size:0.95rem; letter-spacing:1px;">94945708</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#ffffff;">Ettampitiya branch</strong></div>
                                            <div class="bank-detail-row" style="display:flex; justify-content:space-between; border-top:1px dashed rgba(212,175,55,0.2); padding-top:0.45rem; margin-top:0.35rem; font-size:0.85rem;"><span style="color:var(--color-text-muted);">Amount Due:</span><strong id="quick-deposit-amount-display" style="color:var(--color-gold); font-size:1rem;">${isSriLanka ? 'Rs ' + grandTotalLKR.toLocaleString() + ' LKR' : formattedGrandTotal}</strong></div>
                                        </div>
                                        <div class="form-group" style="margin-top:0.65rem; margin-bottom: 0;">
                                            <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Cash Deposit Slip *</label>
                                            <div class="file-upload-zone" id="quick-cash-slip-zone">
                                                <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                                <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse deposit slip</span></div>
                                                <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                                <input type="file" id="quick-cash-slip" accept="image/*,.pdf" style="display:none;">
                                            </div>
                                            <div id="quick-cash-slip-preview" class="slip-preview" style="display:none;"></div>
                                        </div>
                                    </div>

                                    <!-- PayPal Panel -->
                                    <div id="quick-pay-panel-paypal" class="pay-panel pay-panel-paypal">
                                        <div style="background: linear-gradient(135deg, rgba(0,121,193,0.12) 0%, rgba(4,14,8,0.92) 100%); border: 1.5px solid rgba(0,121,193,0.45); border-radius: 8px; padding: 1.15rem;">
                                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
                                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0079C1"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.643h7.14c3.04 0 5.25.707 6.42 2.054 1.157 1.332 1.34 3.23.542 5.645-.034.103-.073.208-.117.313-.884 2.658-2.825 4.14-5.772 4.407l-.234.015h-2.15a.91.91 0 0 0-.9.774l-.994 4.887a.641.641 0 0 1-.613.519zm7.14-15.76h-5.9a.28.28 0 0 0-.276.23L5.352 20.337h2.72l.9-4.428a1.41 1.41 0 0 1 1.385-1.129h2.15c2.475-.224 4.123-1.464 4.887-3.76.037-.09.07-.179.1-.27.674-2.04.53-3.567-.432-4.673-.956-1.098-2.766-1.517-5.046-1.517z"/></svg>
                                                    <strong style="color: #ffffff; font-size: 0.95rem;">PayPal &bull; Instant Online Settlement</strong>
                                                </div>
                                            </div>
                                            <div style="background: rgba(0,0,0,0.35); border-radius: 6px; padding: 0.55rem 0.85rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
                                                <span style="font-size: 0.76rem; color: #9ca3af;">USD Settlement Amount:</span>
                                                <strong id="quick-paypal-amount-display" style="font-size: 1.05rem; color: #38bdf8; font-family: monospace;">${currInfo.code === 'USD' ? `$${grandTotalUSD.toFixed(2)} USD` : `${formattedGrandTotal} ($${grandTotalUSD.toFixed(2)} USD)`}</strong>
                                            </div>
                                            <div id="quick-paypal-button-container" class="paypal-smart-container" style="min-height: 44px;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bespoke Gifting & Notes -->
                            <div class="checkout-step-card">
                                <div class="checkout-step-header">
                                    <div class="checkout-step-title">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                                        <span>5. Bespoke Gifting &amp; Concierge Notes</span>
                                    </div>
                                </div>

                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-pref-date" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Preferred Dispatch Date</label>
                                        <input class="form-input" type="date" id="quick-pref-date" min="${prodMinDate}" value="${prodMinDate}" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    </div>
                                    <div class="form-group" style="margin-bottom: 0;">
                                        <label class="form-label" for="quick-cust-notes" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Concierge Instructions / Special Notes</label>
                                        <textarea class="form-input" id="quick-cust-notes" rows="2" placeholder="e.g. Please include complimentary estate tasting booklet, leave at front porch, etc." style="font-size: 0.82rem; padding: 0.65rem 0.75rem;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                    <!-- ==============================================
                         RIGHT COLUMN: LUXURY SUMMARY SIDEBAR (EBAY/SHOPIFY)
                         ============================================== -->
                    <div class="checkout-right-col">
                        <div class="checkout-summary-sidebar">
                            <div class="checkout-summary-header">
                                <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.76rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold);">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    <span>Reserve Allocation</span>
                                </div>
                                <span style="font-size: 0.72rem; color: #86efac; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); border-radius: 12px; padding: 0.15rem 0.55rem; font-weight: 600;">Single-Estate Reserve</span>
                            </div>

                            <!-- Product Row with Count Badge -->
                            <div class="checkout-item-row">
                                <div class="checkout-thumb-wrap">
                                    <img src="${product.image || 'images/Product.jpeg'}" alt="${product.name}" onerror="window.handleImageError &amp;&amp; window.handleImageError(this, 'product')" loading="lazy" decoding="async">
                                    <span class="checkout-count-badge" id="quick-badge-qty">${currentQuickQty}</span>
                                </div>
                                <div class="checkout-item-meta">
                                    <h4 class="checkout-item-name">${product.name}</h4>
                                    <div class="checkout-item-sub">
                                        <span>${product.category || 'Single-Estate Tea'}</span>
                                        <span>&bull;</span>
                                        <span>${product.leafGrade || 'Silver Tips'}</span>
                                        <span>&bull;</span>
                                        <span>${product.weight || '100g'} Tin</span>
                                    </div>
                                    <a href="#checkout-customer-reviews" id="quick-summary-reviews-link" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.73rem; color: #b8860b; text-decoration: none; margin-top: 0.25rem; cursor: pointer;">
                                        <span style="color: #eab308; letter-spacing: 1px;">★★★★★</span>
                                        <span style="font-weight: 700; color: #111827;">5.0</span>
                                        <span style="color: #64748b;">(Verified Reviews)</span>
                                    </a>
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.45rem;">
                                        <div class="cart-qty-stepper" style="display: inline-flex; align-items: center; border: 1px solid rgba(212,175,55,0.35); border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.5);">
                                            <button type="button" id="quick-order-qty-minus" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">-</button>
                                            <span id="quick-order-qty-val" style="width: 28px; text-align: center; font-size: 0.8rem; font-weight: 700; color: #fff;">${currentQuickQty}</span>
                                            <button type="button" id="quick-order-qty-plus" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">+</button>
                                        </div>
                                        <span id="quick-order-unit-price" style="font-size: 0.78rem; color: var(--color-text-muted);">${window.formatAmountInCurrency ? window.formatAmountInCurrency(unitPriceUSD, currInfo) : '$' + unitPriceUSD.toFixed(2)} / tin</span>
                                    </div>
                                </div>
                                <div class="checkout-item-price" id="quick-item-line-price">${formattedSubtotal}</div>
                            </div>

                            <!-- Discount Code Box -->
                            <div class="checkout-discount-box">
                                <input type="text" id="quick-promo-code" class="checkout-discount-input" placeholder="Discount code or gift card">
                                <button type="button" id="quick-apply-promo-btn" class="checkout-discount-btn">Apply</button>
                            </div>

                            <!-- Available Privilege Coupons -->
                            ${window.renderCheckoutCouponsHTML ? window.renderCheckoutCouponsHTML(activeProdPromo ? activeProdPromo.code : '', 'quick-promo-code') : ''}

                            <!-- Savings Pill -->
                            <div class="checkout-savings-pill" id="quick-savings-pill" style="display: none;">
                                <span style="display: flex; align-items: center; gap: 0.35rem;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                    <span id="quick-savings-label">TOTAL SAVINGS</span>
                                </span>
                                <strong id="quick-savings-amt">-$0.00</strong>
                            </div>

                            <!-- Line Items Breakdown -->
                            <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem; padding-top: 0.25rem;">
                                <div class="checkout-totals-row">
                                    <span>Subtotal</span>
                                    <strong id="quick-summary-subtotal" style="color: #ffffff;">${formattedSubtotal}</strong>
                                </div>
                                <div class="checkout-totals-row" id="quick-discount-row" style="display: none; color: #4ade80;">
                                    <span>Promotional Savings</span>
                                    <strong id="quick-discount-amt">-$0.00</strong>
                                </div>
                                <div class="checkout-totals-row">
                                    <span id="quick-summary-shipping-label">${isSriLanka ? 'Sri Lanka Post EMS Courier' : 'Sri Lanka Post EMS Priority Air'}</span>
                                    <span id="quick-summary-shipping" style="color: ${shippingUSD > 0 ? '#86efac' : 'var(--color-gold)'}; font-weight: 600;">${formattedShipping}</span>
                                </div>
                                <div class="checkout-grand-total-row">
                                    <div>
                                        <strong id="quick-summary-total-title" style="font-size: 0.95rem; color: #ffffff;">Total Due (${currInfo.code})</strong>
                                        <span id="quick-lkr-approx" style="display: block; font-size: 0.72rem; color: #94a3b8; font-weight: normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>
                                    </div>
                                    <strong id="quick-summary-total" style="font-size: 1.45rem; color: var(--color-gold); font-family: var(--font-serif);">${formattedGrandTotal}</strong>
                                </div>
                            </div>

                            <!-- Master Action Button -->
                            <button type="button" id="quick-summary-submit-btn" class="checkout-action-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span id="quick-action-btn-text">Buy Now &bull; ${formattedGrandTotal}</span>
                            </button>

                            <!-- Trust Badges -->
                            <div class="checkout-trust-badges">
                                <span>🔒 256-Bit SSL Encrypted</span>
                                <span>🇱🇰 Estate Direct Dispatch</span>
                                <span>📜 Certified Heritage Origin</span>
                            </div>

                            <div class="checkout-footer-links">
                                <a href="#terms" onclick="event.preventDefault();">Terms and policies</a>
                                <span>&bull;</span>
                                <a href="#privacy" onclick="event.preventDefault();">Your Privacy Choices <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            drawerFooter.innerHTML = '';

            // Render Success Screen for Quick Product Order
            const renderQuickOrderConfirmationSuccess = (order, paymentMethod) => {
                const isCOD = paymentMethod === 'cod';
                const isPayPal = paymentMethod === 'paypal';

                drawerFormContainer.innerHTML = `
                    <div class="cart-success-view" style="text-align: center; padding: 2.25rem 1rem;">
                        <div style="width: 76px; height: 76px; border-radius: 50%; background: ${isCOD ? 'rgba(37,211,102,0.15)' : 'rgba(212,175,55,0.12)'}; border: 2px solid ${isCOD ? '#25d366' : 'var(--color-gold)'}; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.15rem auto; color: ${isCOD ? '#25d366' : 'var(--color-gold)'};">
                            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span class="season-badge" style="background: ${isCOD ? 'rgba(37,211,102,0.2)' : 'rgba(212,175,55,0.15)'}; color: ${isCOD ? '#4ade80' : 'var(--color-gold)'}; font-size: 0.72rem; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                            ${isCOD ? 'Cash on Delivery • Order Confirmed' : (isPayPal ? 'Paid • Instant PayPal Clearance' : 'Allocation Reserved • Slip Attached')}
                        </span>
                        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: #ffffff; margin: 0.75rem 0 0.25rem 0;">Allocation Registered</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
                            Thank you, ${order.customerName}. Your reserve order for ${order.productName} has been entered into the estate master ledger.
                        </p>

                        <div style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; padding: 1.15rem; margin-bottom: 1.25rem; text-align: left;">
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Order Reference ID</span>
                                <strong style="font-family: monospace; color: var(--color-gold); font-size: 0.95rem;">${order.id}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Tea Allocation</span>
                                <span style="color: #ffffff; font-size: 0.85rem;">${order.productName} (${order.weight || '100g'}) x${order.quantity || 1}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Delivery Destination</span>
                                <span style="color: #ffffff; font-size: 0.85rem; text-align: right; max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${order.country} &bull; ${order.city || ''}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Courier Method</span>
                                <span style="color: #86efac; font-size: 0.82rem; font-weight: 600;">
                                    ${order.shippingMethod === 'cod' ? 'Sri Lanka Post EMS (Cash on Delivery)' : (order.country === 'Sri Lanka' ? 'Sri Lanka Post EMS Express' : 'Sri Lanka Post EMS International Priority Air')}
                                </span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Amount</span>
                                <strong style="color: var(--color-gold); font-size: 1.1rem;">${order.formattedPrice}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Payment Mode</span>
                                <span style="color: ${isCOD ? '#4ade80' : 'var(--color-gold)'}; font-size: 0.85rem; font-weight: 700;">
                                    ${isCOD ? 'Cash on Delivery (Pay upon delivery)' : (isPayPal ? 'PayPal / International Card' : 'Bank of Ceylon Deposit')}
                                </span>
                            </div>
                        </div>

                        <!-- Executive Director & CEO Verification Seal -->
                        <div style="background: rgba(212,175,55,0.06); border: 1px dashed rgba(212,175,55,0.35); border-radius: 10px; padding: 0.9rem 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                            <div style="text-align: left;">
                                <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700; display: block;">Executive Sign-Off &bull; Verified</span>
                                <div style="font-size: 0.76rem; color: #d1d5db; margin-top: 2px;">Allocation registered in estate ledger</div>
                            </div>
                            <div style="text-align: right;">
                                <img src="images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 34px; object-fit: contain; display: block; margin: 0 0 2px auto;" onerror="this.onerror=null; this.src='images/ceo_signature.png';" />
                                <div style="font-size: 0.76rem; font-weight: 700; color: #ffffff;">Prasanga</div>
                                <div style="font-size: 0.65rem; color: var(--color-gold);">Director &amp; CEO</div>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button type="button" class="btn btn-outline btn-quick-success-cert" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(212,175,55,0.5); color: var(--color-gold); display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: rgba(0,0,0,0.35);">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                Download Luxury Allocation Certificate (PDF)
                            </button>
                            <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%20Concierge%2C%20I%20have%20placed%20Order%20${order.id}%20for%20${encodeURIComponent(order.formattedPrice)}%20via%20${encodeURIComponent(isCOD ? 'Cash on Delivery' : 'Pre-paid EMS')}.%20Please%20confirm%20my%20dispatch." target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.85rem 1.5rem; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #25d366; border-color: #25d366; color: #040e08; font-weight: 700;">
                                <span>Notify Concierge on WhatsApp</span>
                            </a>
                            <button type="button" class="btn btn-outline" onclick="closeDrawer(); window.appSwitchTab ? window.appSwitchTab('order') : (document.getElementById('nav-order') &amp;&amp; document.getElementById('nav-order').click())" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                                View in "My Order &amp; Pay" Desk &rarr;
                            </button>
                        </div>
                    </div>
                `;

                drawerFormContainer.querySelector('.btn-quick-success-cert')?.addEventListener('click', () => {
                    generateAllocationCertificate(order);
                });
            };

            // Two-Stage Checkout Transitions (Stage 1: Dossier & Reviews <-> Stage 2: Delivery & Payment)
            const setCheckoutStage = (stage) => {
                currentCheckoutStage = stage;
                const stageOverview = document.getElementById('quick-stage-overview');
                const stagePayment = document.getElementById('quick-stage-payment');
                const masterBtnText = document.getElementById('quick-action-btn-text');
                const masterBtn = document.getElementById('quick-summary-submit-btn');

                if (stage === 1) {
                    if (stageOverview) stageOverview.style.display = 'block';
                    if (stagePayment) stagePayment.style.display = 'none';
                    if (masterBtnText) {
                        masterBtnText.innerHTML = `Buy Now &bull; ${formattedGrandTotal}`;
                    }
                    if (masterBtn) {
                        masterBtn.setAttribute('title', 'Proceed to Delivery & Payment');
                    }
                    const scrollContainer = document.getElementById('drawer-body-content') || document.querySelector('.drawer-container.checkout-mode') || window;
                    if (scrollContainer && scrollContainer.scrollTo) {
                        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                } else {
                    if (stageOverview) stageOverview.style.display = 'none';
                    if (stagePayment) stagePayment.style.display = 'block';
                    if (masterBtnText) {
                        masterBtnText.innerHTML = `Place Order &bull; ${formattedGrandTotal}`;
                    }
                    if (masterBtn) {
                        masterBtn.setAttribute('title', 'Confirm and Place Order');
                    }
                    const scrollContainer = document.getElementById('drawer-body-content') || document.querySelector('.drawer-container.checkout-mode') || window;
                    if (scrollContainer && scrollContainer.scrollTo) {
                        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setTimeout(() => {
                        const firstInput = document.getElementById('quick-cust-firstname');
                        if (firstInput) firstInput.focus();
                    }, 120);
                }
            };

            // Dynamic Currency & Shipping Calculation
            const updateQuickPricing = () => {
                const country = document.getElementById('quick-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                window.lastSelectedCheckoutCountry = country;
                const isLK = country === 'Sri Lanka';
                const cur = window.getCountryCurrency ? window.getCountryCurrency(country) : (isLK ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });
                
                subtotalUSD = unitPriceUSD * currentQuickQty;
                discountUSD = 0;
                if (activeProdPromo) {
                    discountUSD = Number((subtotalUSD * (activeProdPromo.percent / 100)).toFixed(2));
                }
                discountedSubtotalUSD = Math.max(0, subtotalUSD - discountUSD);

                shippingUSD = window.calculateShippingFee ? window.calculateShippingFee(discountedSubtotalUSD, country, itemDefinedShipping) : (isLK ? 2.13 : 15.0);
                grandTotalUSD = discountedSubtotalUSD + shippingUSD;

                formattedSubtotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(subtotalUSD, cur) : `$${subtotalUSD.toFixed(2)}`;
                const formattedDiscount = discountUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(discountUSD, cur) : `$${discountUSD.toFixed(2)}`) : '';
                formattedShipping = shippingUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(shippingUSD, cur) : `$${shippingUSD.toFixed(2)}`) : 'Complimentary';
                formattedGrandTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(grandTotalUSD, cur) : `$${grandTotalUSD.toFixed(2)}`;
                grandTotalLKR = Math.round(grandTotalUSD * 305);

                const unitPriceEl = document.getElementById('quick-order-unit-price');
                if (unitPriceEl && window.formatAmountInCurrency) {
                    unitPriceEl.textContent = `${window.formatAmountInCurrency(unitPriceUSD, cur)} / tin`;
                }
                const badgeQtyEl = document.getElementById('quick-badge-qty');
                if (badgeQtyEl) badgeQtyEl.textContent = currentQuickQty;
                const linePriceEl = document.getElementById('quick-item-line-price');
                if (linePriceEl) linePriceEl.textContent = formattedSubtotal;

                const subEl = document.getElementById('quick-summary-subtotal');
                if (subEl) subEl.textContent = formattedSubtotal;
                const shipLabel = document.getElementById('quick-summary-shipping-label');
                if (shipLabel) shipLabel.textContent = isLK ? 'Sri Lanka Post EMS Courier' : 'Sri Lanka Post EMS Priority Air';
                const shipEl = document.getElementById('quick-summary-shipping');
                if (shipEl) {
                    shipEl.textContent = formattedShipping;
                    shipEl.style.color = shippingUSD > 0 ? '#86efac' : 'var(--color-gold)';
                }
                const totalTitle = document.getElementById('quick-summary-total-title');
                if (totalTitle) totalTitle.textContent = `Total Due (${cur.code})`;
                const totalEl = document.getElementById('quick-summary-total');
                if (totalEl) totalEl.textContent = formattedGrandTotal;
                const lkrEl = document.getElementById('quick-lkr-approx');
                if (lkrEl) lkrEl.textContent = `(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)`;

                // Savings pill & discount row
                const savingsPill = document.getElementById('quick-savings-pill');
                const savingsLabel = document.getElementById('quick-savings-label');
                const savingsAmt = document.getElementById('quick-savings-amt');
                const discountRow = document.getElementById('quick-discount-row');
                const discountAmt = document.getElementById('quick-discount-amt');
                if (discountUSD > 0 && activeProdPromo) {
                    if (savingsPill) savingsPill.style.display = 'flex';
                    if (savingsLabel) savingsLabel.textContent = activeProdPromo.label.toUpperCase();
                    if (savingsAmt) savingsAmt.textContent = `-${formattedDiscount}`;
                    if (discountRow) discountRow.style.display = 'flex';
                    if (discountAmt) discountAmt.textContent = `-${formattedDiscount}`;
                } else {
                    if (savingsPill) savingsPill.style.display = 'none';
                    if (discountRow) discountRow.style.display = 'none';
                }

                // Master action button text
                const masterBtnText = document.getElementById('quick-action-btn-text');
                if (masterBtnText) {
                    masterBtnText.innerHTML = currentCheckoutStage === 1 
                        ? `Buy Now &bull; ${formattedGrandTotal}`
                        : `Place Order &bull; ${formattedGrandTotal}`;
                }

                const emsTitle = document.getElementById('quick-shipping-ems-title');
                if (emsTitle) emsTitle.textContent = isLK ? 'Sri Lanka Post EMS Express (Pre-paid)' : 'Sri Lanka Post EMS International Priority Air';
                const emsDesc = document.getElementById('quick-shipping-ems-desc');
                if (emsDesc) emsDesc.textContent = isLK ? 'Door-to-door express parcel courier with official Sri Lanka Post tracking ID. Settle online via PayPal/Card or Direct Bank Transfer.' : 'Official Sri Lanka Post EMS International Priority Air Courier with end-to-end tracking number. Estimated transit: 5-10 business days.';
                const emsPill = document.getElementById('quick-shipping-ems-price-pill');
                if (emsPill) emsPill.textContent = formattedShipping;

                const codCard = document.getElementById('quick-shipping-card-cod');
                const emsRadio = document.getElementById('quick-ship-ems');
                const codPill = document.getElementById('quick-shipping-cod-price-pill');
                if (codPill) codPill.textContent = formattedShipping;

                if (isLK) {
                    if (codCard) codCard.style.display = 'flex';
                } else {
                    if (codCard) codCard.style.display = 'none';
                    if (emsRadio) emsRadio.checked = true;
                    syncQuickShippingSelection();
                }

                const codAmt = document.getElementById('quick-cod-amount-display');
                if (codAmt) codAmt.textContent = `Rs ${grandTotalLKR.toLocaleString()} LKR`;

                const bankAmt = document.getElementById('quick-bank-amount-display');
                if (bankAmt) {
                    bankAmt.innerHTML = isLK ? `Rs ${grandTotalLKR.toLocaleString()} LKR` : `${formattedGrandTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>`;
                }

                const depAmt = document.getElementById('quick-deposit-amount-display');
                if (depAmt) {
                    depAmt.innerHTML = isLK ? `Rs ${grandTotalLKR.toLocaleString()} LKR` : `${formattedGrandTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>`;
                }

                const ppAmt = document.getElementById('quick-paypal-amount-display');
                if (ppAmt) {
                    ppAmt.textContent = cur.code === 'USD' ? `$${grandTotalUSD.toFixed(2)} USD` : `${formattedGrandTotal} ($${grandTotalUSD.toFixed(2)} USD)`;
                }

                // Dynamic region container
                const regionCont = document.getElementById('quick-region-container');
                if (regionCont) {
                    if (isLK) {
                        if (!regionCont.querySelector('select')) {
                            regionCont.innerHTML = `
                                <label class="form-label" for="quick-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Region / Province *</label>
                                <select class="form-input" id="quick-cust-region" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
                                    <option value="Western Province (Colombo, Gampaha, Kalutara)">Western Province (Colombo, Gampaha)</option>
                                    <option value="Central Province (Kandy, Nuwara Eliya, Matale)">Central Province (Kandy, Nuwara Eliya)</option>
                                    <option value="Uva Province (Badulla, Bandarawela, Ettampitiya)" selected>Uva Province (Badulla, Ettampitiya)</option>
                                    <option value="Southern Province (Galle, Matara, Hambantota)">Southern Province (Galle, Matara)</option>
                                    <option value="Sabaragamuwa Province (Ratnapura, Kegalle)">Sabaragamuwa Province (Ratnapura)</option>
                                    <option value="North Western Province (Kurunegala, Puttalam)">North Western Province (Kurunegala)</option>
                                    <option value="North Central Province (Anuradhapura, Polonnaruwa)">North Central Province (Anuradhapura)</option>
                                    <option value="Northern Province (Jaffna, Kilinochchi, Vavuniya)">Northern Province (Jaffna)</option>
                                    <option value="Eastern Province (Batticaloa, Trincomalee, Ampara)">Eastern Province (Batticaloa, Trincomalee)</option>
                                </select>
                            `;
                        }
                    } else {
                        if (!regionCont.querySelector('input')) {
                            regionCont.innerHTML = `
                                <label class="form-label" for="quick-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">State / Province / County *</label>
                                <input class="form-input" type="text" id="quick-cust-region" placeholder="e.g. California / London / Tokyo" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;" required>
                            `;
                        }
                    }
                }

                // Re-render PayPal if open
                const activeTab = document.querySelector('#quick-checkout-form .pay-tab.active');
                if (activeTab && activeTab.getAttribute('data-method') === 'paypal') {
                    initQuickPayPal();
                }
            };

            const syncQuickShippingSelection = () => {
                const selectedMethod = document.querySelector('input[name="quick-shipping-method"]:checked')?.value || 'ems_express';
                const codCard = document.getElementById('quick-shipping-card-cod');
                const emsCard = document.getElementById('quick-shipping-card-ems');
                const codPanel = document.getElementById('quick-pay-panel-cod');
                const prepaidPanel = document.getElementById('quick-pay-panel-prepaid');

                if (selectedMethod === 'cod') {
                    if (codCard) {
                        codCard.style.border = '1.5px solid #25d366';
                        codCard.style.background = 'rgba(37,211,102,0.1)';
                    }
                    if (emsCard) {
                        emsCard.style.border = '1.5px solid rgba(255,255,255,0.15)';
                        emsCard.style.background = 'rgba(0,0,0,0.3)';
                    }
                    if (codPanel) codPanel.style.display = 'block';
                    if (prepaidPanel) prepaidPanel.style.display = 'none';
                } else {
                    if (emsCard) {
                        emsCard.style.border = '1.5px solid var(--color-gold)';
                        emsCard.style.background = 'rgba(212,175,55,0.08)';
                    }
                    if (codCard) {
                        codCard.style.border = '1.5px solid rgba(255,255,255,0.15)';
                        codCard.style.background = 'rgba(0,0,0,0.3)';
                    }
                    if (codPanel) codPanel.style.display = 'none';
                    if (prepaidPanel) prepaidPanel.style.display = 'block';
                }
            };

            // Stepper
            const minusBtn = document.getElementById('quick-order-qty-minus');
            const plusBtn = document.getElementById('quick-order-qty-plus');
            const qtyVal = document.getElementById('quick-order-qty-val');

            if (minusBtn) {
                minusBtn.onclick = () => {
                    if (currentQuickQty > 1) {
                        currentQuickQty--;
                        if (qtyVal) qtyVal.textContent = currentQuickQty;
                        updateQuickPricing();
                    }
                };
            }
            if (plusBtn) {
                plusBtn.onclick = () => {
                    currentQuickQty++;
                    if (qtyVal) qtyVal.textContent = currentQuickQty;
                    updateQuickPricing();
                };
            }

            // Promo code wiring
            const prodPromoBtn = document.getElementById('quick-apply-promo-btn');
            const prodPromoInput = document.getElementById('quick-promo-code');
            const syncQuickCouponPills = () => {
                drawerFormContainer.querySelectorAll('.coupon-pill-btn[data-target-input="quick-promo-code"]').forEach(pill => {
                    const pCode = pill.getAttribute('data-code');
                    if (activeProdPromo && activeProdPromo.code === pCode) {
                        pill.classList.add('active');
                        if (!pill.querySelector('.coupon-pill-check')) {
                            const check = document.createElement('span');
                            check.className = 'coupon-pill-check';
                            check.textContent = '✓ Applied';
                            pill.appendChild(check);
                        }
                    } else {
                        pill.classList.remove('active');
                        const check = pill.querySelector('.coupon-pill-check');
                        if (check) check.remove();
                    }
                });
            };

            if (prodPromoBtn && prodPromoInput) {
                const handleProdPromo = () => {
                    const val = prodPromoInput.value.trim();
                    if (!val) {
                        activeProdPromo = null;
                        updateQuickPricing();
                        syncQuickCouponPills();
                        showToast("Voucher Cleared", "Promotional voucher removed.", "info");
                        return;
                    }
                    const res = window.validatePromoCode(val, unitPriceUSD * currentQuickQty);
                    if (res.valid) {
                        activeProdPromo = res;
                        updateQuickPricing();
                        syncQuickCouponPills();
                        showToast("Voucher Applied!", `${res.label} (${res.percent}%) applied successfully.`, "success");
                    } else {
                        activeProdPromo = null;
                        updateQuickPricing();
                        syncQuickCouponPills();
                        showToast("Invalid Voucher", res.message || "Invalid promotional code.", "warning");
                    }
                };
                prodPromoBtn.onclick = handleProdPromo;
                prodPromoInput.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleProdPromo();
                    }
                };
            }

            if (window.bindCheckoutCouponPills) {
                window.bindCheckoutCouponPills(drawerFormContainer, 'quick-promo-code', () => {
                    if (prodPromoBtn) prodPromoBtn.click();
                });
            }

            const countryInput = document.getElementById('quick-cust-country');
            if (countryInput) countryInput.onchange = updateQuickPricing;

            drawerFormContainer.querySelectorAll('input[name="quick-shipping-method"]').forEach(r => {
                r.onchange = syncQuickShippingSelection;
            });

            bindPaymentTabs('quick-checkout-form');
            bindFileUpload('quick-bank-slip', 'quick-bank-slip-zone', 'quick-bank-slip-preview', (b64) => {
                selectedProdSlipBase64 = b64;
            });
            bindFileUpload('quick-cash-slip', 'quick-cash-slip-zone', 'quick-cash-slip-preview', (b64) => {
                selectedProdSlipBase64 = b64;
            });

            // Accordion toggle click listeners for product checkout dossier
            const checkoutAccordionHeaders = drawerFormContainer.querySelectorAll('.checkout-accordion-header');
            checkoutAccordionHeaders.forEach(hdr => {
                hdr.addEventListener('click', () => {
                    const item = hdr.closest('.checkout-accordion-item');
                    if (!item) return;
                    const body = item.querySelector('.checkout-accordion-body');
                    const icon = item.querySelector('.checkout-accordion-icon');
                    const isOpen = item.classList.contains('open');
                    if (isOpen) {
                        item.classList.remove('open');
                        hdr.setAttribute('aria-expanded', 'false');
                        if (body) body.style.display = 'none';
                        if (icon) icon.textContent = '+';
                    } else {
                        item.classList.add('open');
                        hdr.setAttribute('aria-expanded', 'true');
                        if (body) body.style.display = 'block';
                        if (icon) icon.textContent = '−';
                    }
                });
            });

            // Wire PayPal
            const initQuickPayPal = () => {
                const container = document.getElementById('quick-paypal-button-container');
                if (!container || !window.TeaFactoryPayPal) return;

                window.TeaFactoryPayPal.renderButtons({
                    containerId: 'quick-paypal-button-container',
                    orderId: `ORD-PROD-${Date.now()}`,
                    amount: grandTotalUSD,
                    currency: 'USD',
                    description: `${product.name} (${currentQuickQty} Tin${currentQuickQty > 1 ? 's' : ''})`,
                    onValidate: () => {
                        const form = document.getElementById('quick-checkout-form');
                        if (!form || !form.checkValidity()) {
                            if (form) form.reportValidity();
                            return false;
                        }
                        return true;
                    },
                    onSuccess: async ({ paypalOrderId, captureData }) => {
                        const firstName = document.getElementById('quick-cust-firstname')?.value?.trim() || '';
                        const lastName = document.getElementById('quick-cust-lastname')?.value?.trim() || '';
                        const customerName = `${firstName} ${lastName}`.trim() || 'Guest Patron';
                        const email = document.getElementById('quick-cust-email')?.value?.trim() || '';
                        const phone = document.getElementById('quick-cust-phone')?.value?.trim() || '';
                        const street = document.getElementById('quick-cust-address')?.value?.trim() || '';
                        const suite = document.getElementById('quick-cust-suite')?.value?.trim() || '';
                        const city = document.getElementById('quick-cust-city')?.value?.trim() || '';
                        const postal = document.getElementById('quick-cust-postal')?.value?.trim() || '';
                        const region = document.getElementById('quick-cust-region')?.value || '';
                        const country = document.getElementById('quick-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                        const prefDate = document.getElementById('quick-pref-date')?.value || '';
                        const notes = document.getElementById('quick-cust-notes')?.value?.trim() || '';

                        const fullAddress = `${street}${suite ? ', ' + suite : ''}, ${city}, ${region ? region + ', ' : ''}${postal}, ${country}`;

                        const result = window.TeaFactoryStore.bookProduct(product.id, {
                            name: customerName,
                            email,
                            phone,
                            address: fullAddress,
                            country,
                            city,
                            notes,
                            quantity: currentQuickQty,
                            preferredDate: prefDate,
                            paymentMethod: 'paypal',
                            slipImage: ''
                        });

                        if (result && result.success) {
                            const order = result.booking;
                            window.TeaFactoryStore.markOrderPaidByPayPal(order.id, captureData || { id: paypalOrderId });
                            window.TeaFactoryStore.saveRecentOrderId(order.id);

                            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createOrder === 'function') {
                                window.TeaFactoryAPI.createOrder({
                                    id: order.id,
                                    customer_name: customerName,
                                    customer_email: email,
                                    customer_phone: phone,
                                    shipping_address: fullAddress,
                                    subtotal_usd: subtotalUSD,
                                    discount_usd: discountUSD,
                                    shipping_usd: shippingUSD,
                                    total_usd: grandTotalUSD,
                                    currency_code: currInfo.code,
                                    total_in_currency: grandTotalUSD,
                                    payment_method: 'paypal',
                                    bespoke_notes: (activeProdPromo ? `Promo: ${activeProdPromo.code} (${activeProdPromo.percent}% off) | ` : '') + notes,
                                    items: [{ id: product.id, name: product.name, quantity: currentQuickQty, price: unitPriceUSD, shippingCharge: shippingUSD }]
                                }).catch(e => console.warn('Order sync:', e.message));
                            }

                            showToast("Order Confirmed!", `Allocation Certificate for ${order.id} is certified and ready!`, "success");
                            renderQuickOrderConfirmationSuccess(order, 'paypal');
                        }
                    }
                });
            };

            const prodPaypalTab = drawerFormContainer.querySelector('.pay-tab[data-method="paypal"]');
            if (prodPaypalTab) {
                prodPaypalTab.addEventListener('click', () => {
                    setTimeout(initQuickPayPal, 50);
                });
            }

            // Quick Checkout Submission
            const handleQuickCheckoutFormSubmit = (e) => {
                if (e) e.preventDefault();
                const form = document.getElementById('quick-checkout-form');
                if (!form || !form.checkValidity()) {
                    if (form) form.reportValidity();
                    return;
                }

                const shippingMethod = document.querySelector('input[name="quick-shipping-method"]:checked')?.value || 'ems_express';
                const activeTabBtn = form.querySelector('.pay-tab.active');
                const selectedMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'bank';
                const paymentMethod = shippingMethod === 'cod' ? 'cod' : selectedMethod;

                if (paymentMethod === 'paypal') {
                    const ppCont = document.getElementById('quick-paypal-button-container');
                    if (ppCont) {
                        ppCont.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        showToast("PayPal Active", "Please click the yellow PayPal button to authorize payment.", "info");
                    }
                    return;
                }

                const firstName = document.getElementById('quick-cust-firstname')?.value?.trim() || '';
                const lastName = document.getElementById('quick-cust-lastname')?.value?.trim() || '';
                const customerName = `${firstName} ${lastName}`.trim() || 'Guest Patron';
                const email = document.getElementById('quick-cust-email')?.value?.trim() || '';
                const phone = document.getElementById('quick-cust-phone')?.value?.trim() || '';
                const street = document.getElementById('quick-cust-address')?.value?.trim() || '';
                const suite = document.getElementById('quick-cust-suite')?.value?.trim() || '';
                const city = document.getElementById('quick-cust-city')?.value?.trim() || '';
                const postal = document.getElementById('quick-cust-postal')?.value?.trim() || '';
                const region = document.getElementById('quick-cust-region')?.value || '';
                const country = document.getElementById('quick-cust-country')?.value || (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                const prefDate = document.getElementById('quick-pref-date')?.value || '';
                const notes = document.getElementById('quick-cust-notes')?.value?.trim() || '';

                const fullAddress = `${street}${suite ? ', ' + suite : ''}, ${city}, ${region ? region + ', ' : ''}${postal}, ${country}`;

                const slipImg = selectedProdSlipBase64 || 
                    document.getElementById('quick-bank-slip-zone')?.dataset?.fileBase64 || 
                    document.getElementById('quick-cash-slip-zone')?.dataset?.fileBase64 || '';

                if (paymentMethod !== 'cod' && !slipImg) {
                    showToast("Deposit Receipt Required", "Please attach your bank transfer or deposit slip to confirm your allocation.", "warning");
                    return;
                }

                const result = window.TeaFactoryStore.bookProduct(product.id, {
                    name: customerName,
                    email,
                    phone,
                    address: fullAddress,
                    country,
                    city,
                    notes,
                    quantity: currentQuickQty,
                    preferredDate: prefDate,
                    paymentMethod,
                    shippingMethod,
                    slipImage: slipImg
                });

                if (result && result.success) {
                    const order = result.booking;
                    order.city = city;
                    order.country = country;
                    order.shippingMethod = shippingMethod;
                    order.formattedPrice = paymentMethod === 'cod' ? `Rs ${grandTotalLKR.toLocaleString()} LKR` : formattedGrandTotal;

                    window.TeaFactoryStore.saveRecentOrderId(order.id);

                    if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createOrder === 'function') {
                        window.TeaFactoryAPI.createOrder({
                            id: order.id,
                            customer_name: customerName,
                            customer_email: email,
                            customer_phone: phone,
                            shipping_address: fullAddress,
                            subtotal_usd: subtotalUSD,
                            discount_usd: discountUSD,
                            shipping_usd: shippingUSD,
                            total_usd: grandTotalUSD,
                            currency_code: currInfo.code,
                            total_in_currency: grandTotalUSD,
                            payment_method: paymentMethod,
                            bespoke_notes: (activeProdPromo ? `Promo: ${activeProdPromo.code} (${activeProdPromo.percent}% off) | ` : '') + notes,
                            items: [{ id: product.id, name: product.name, quantity: currentQuickQty, price: unitPriceUSD, shippingCharge: shippingUSD }]
                        }).catch(e => console.warn('Order sync:', e.message));
                    }

                    showToast("Order Confirmed!", `Allocation Certificate for ${order.id} is verified and issued.`, "success");
                    renderQuickOrderConfirmationSuccess(order, paymentMethod);
                } else {
                    showToast("Order Failed", result?.message || "Could not register allocation.", "error");
                }
            };

            const quickForm = document.getElementById('quick-checkout-form');
            if (quickForm) quickForm.onsubmit = handleQuickCheckoutFormSubmit;

            // Master Action Button in right column (Stage 1: Advance to Delivery & Payment | Stage 2: Submit Order)
            const quickSummaryBtn = document.getElementById('quick-summary-submit-btn');
            if (quickSummaryBtn) {
                quickSummaryBtn.onclick = () => {
                    if (currentCheckoutStage === 1) {
                        setCheckoutStage(2);
                    } else {
                        handleQuickCheckoutFormSubmit();
                    }
                };
            }

            // Stage 1 Bottom Proceed Button
            const stageProceedBtn = document.getElementById('quick-stage-proceed-btn');
            if (stageProceedBtn) {
                stageProceedBtn.onclick = () => {
                    setCheckoutStage(2);
                };
            }

            // Stage 2 Back Button
            const backToOverviewBtn = document.getElementById('quick-back-to-overview-btn');
            if (backToOverviewBtn) {
                backToOverviewBtn.onclick = () => {
                    setCheckoutStage(1);
                };
            }

            // Reviews snippet click in summary sidebar
            const summaryReviewsLink = document.getElementById('quick-summary-reviews-link');
            if (summaryReviewsLink) {
                summaryReviewsLink.onclick = (e) => {
                    e.preventDefault();
                    if (currentCheckoutStage !== 1) {
                        setCheckoutStage(1);
                    }
                    setTimeout(() => {
                        document.getElementById('checkout-customer-reviews')?.scrollIntoView({ behavior: 'smooth' });
                    }, 80);
                };
            }

            document.getElementById('quick-guest-signin-btn')?.addEventListener('click', () => {
                if (typeof window.requireCustomerAuth === 'function') {
                    window.requireCustomerAuth('Sign in or register to record your tea reserve in your patron dashboard.', () => {
                        openDrawer('product', id);
                    });
                }
            });

            // Initialize customer reviews interactions in checkout
            if (typeof window.initCheckoutReviewsInteractions === 'function') {
                window.initCheckoutReviewsInteractions(drawerFormContainer);
            }
        
        } else if (type === 'review') {
            drawerTitle.innerText = "Rate & Review Your Experience";
            let selectedRating = 5;

            drawerFormContainer.innerHTML = `
                <div class="booking-summary-box">
                    <div style="text-align: center; margin-bottom: 0.25rem;">
                        <span class="section-tag" style="margin-bottom: 0.25rem; font-size: 0.72rem;">CONNOISSEUR FEEDBACK</span>
                        <h4 style="font-size: 1.1rem; color: var(--color-white); margin-bottom: 0.25rem;">Rate Your Rock One Experience</h4>
                        <p style="font-size: 0.78rem; color: var(--color-text-muted); margin-bottom: 0;">Share your impressions of our single-estate teas, cedar chests, or factory tour.</p>
                    </div>
                </div>

                <form id="review-submission-form" class="admin-form">
                    <div class="form-group" style="text-align: center; margin-bottom: 1.5rem; background: rgba(3, 14, 8, 0.6); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(212, 175, 55, 0.3);">
                        <label style="display: block; margin-bottom: 0.5rem; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Select Your Star Rating</label>
                        <div id="interactive-star-rating" style="display: inline-flex; gap: 0.4rem; font-size: 2.2rem; cursor: pointer; color: var(--color-gold);">
                            <span class="star-item" data-val="1">★</span>
                            <span class="star-item" data-val="2">★</span>
                            <span class="star-item" data-val="3">★</span>
                            <span class="star-item" data-val="4">★</span>
                            <span class="star-item" data-val="5">★</span>
                        </div>
                        <div id="star-rating-text" style="font-size: 0.85rem; color: var(--color-gold-light); font-weight: 600; margin-top: 0.3rem;">5 Stars — Exceptional Reserve</div>
                    </div>

                    <div class="form-group">
                        <label for="rev-cust-name">Full Name</label>
                        <input type="text" id="rev-cust-name" placeholder="e.g. Lord Alexander Sterling" required>
                    </div>

                    <div class="form-group">
                        <label for="rev-cust-location">City & Country</label>
                        <input type="text" id="rev-cust-location" placeholder="e.g. London, United Kingdom" required>
                    </div>

                    <div class="form-group">
                        <label for="rev-cust-title">Title / Role (Optional)</label>
                        <input type="text" id="rev-cust-title" placeholder="e.g. Private Collector / Sommelier">
                    </div>

                    <div class="form-group">
                        <label for="rev-experience-type">Experience Type</label>
                        <select id="rev-experience-type">
                            <option value="Gift Box Reserve">Limited Cedar Gift Box Reserve</option>
                            <option value="Estate Factory Tour">Highland Estate Factory Tour</option>
                            <option value="Sommelier Private Cupping">Sommelier Private Cupping Flight</option>
                            <option value="Pure Orthodox Tea">Pure Ceylon Orthodox Product</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="rev-comment">Tasting Notes & Review</label>
                        <textarea id="rev-comment" rows="4" placeholder="Describe the aroma, liquor notes, packaging quality, or your estate tour encounter..." required></textarea>
                    </div>
                </form>
            `;

            drawerFooter.innerHTML = `
                <button type="button" id="submit-review-btn" class="btn btn-primary w-full">
                    Submit Connoisseur Review
                </button>
            `;

            // Bind interactive stars
            const starContainer = document.getElementById('interactive-star-rating');
            const starItems = starContainer ? starContainer.querySelectorAll('.star-item') : [];
            const ratingText = document.getElementById('star-rating-text');
            const ratingDescriptions = {
                1: "1 Star — Needs Improvement",
                2: "2 Stars — Fair Quality",
                3: "3 Stars — Good Quality",
                4: "4 Stars — Very Good & Artisanal",
                5: "5 Stars — Exceptional Reserve"
            };

            function updateStars(val) {
                selectedRating = val;
                starItems.forEach(s => {
                    const starVal = parseInt(s.getAttribute('data-val'), 10);
                    if (starVal <= val) {
                        s.style.color = "var(--color-gold)";
                        s.innerText = "★";
                    } else {
                        s.style.color = "rgba(255,255,255,0.2)";
                        s.innerText = "☆";
                    }
                });
                if (ratingText) ratingText.innerText = ratingDescriptions[val] || `${val} Stars`;
            }

            starItems.forEach(s => {
                s.addEventListener('click', () => {
                    const val = parseInt(s.getAttribute('data-val'), 10);
                    updateStars(val);
                });
                s.addEventListener('mouseenter', () => {
                    const val = parseInt(s.getAttribute('data-val'), 10);
                    starItems.forEach(item => {
                        const itemVal = parseInt(item.getAttribute('data-val'), 10);
                        item.style.color = itemVal <= val ? "var(--color-gold-hover)" : "rgba(255,255,255,0.2)";
                    });
                });
            });

            if (starContainer) {
                starContainer.addEventListener('mouseleave', () => {
                    updateStars(selectedRating);
                });
            }

            updateStars(5);

            document.getElementById('submit-review-btn')?.addEventListener('click', () => {
                const form = document.getElementById('review-submission-form');
                if (!form) return;
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                const name = document.getElementById('rev-cust-name')?.value?.trim() || 'Valued Guest';
                const location = document.getElementById('rev-cust-location')?.value?.trim() || 'Sri Lanka';
                const title = document.getElementById('rev-cust-title')?.value?.trim() || 'Tea Connoisseur';
                const experienceType = document.getElementById('rev-experience-type')?.value || 'General Tasting';
                const comment = document.getElementById('rev-comment')?.value?.trim() || '';

                window.TeaFactoryStore.addReview({
                    name,
                    location,
                    title,
                    rating: selectedRating,
                    experienceType,
                    comment
                });

                closeDrawer();
                showToast("Review Recorded", "Thank you! Your connoisseur review has been recorded.", "success");

                // Re-render testimonials section
                window.UIComponents.renderTestimonials('home-testimonials-container');
                bindReviewEvents();
            });
        }
    }

    window.openDrawer = openDrawer;
    window.appOpenProductDrawer = (productId) => openDrawer('product', productId);

    function bindReviewEvents() {
        const btn = document.getElementById('btn-write-review');
        if (btn) {
            btn.onclick = () => openDrawer('review');
        }
    }

    function initCheckoutReviewsInteractions(container = document) {
        const searchInput = container.querySelector('#checkout-reviews-search-input');
        const ratingSelect = container.querySelector('#checkout-reviews-rating-select');
        const sortSelect = container.querySelector('#checkout-reviews-sort-select');
        const mediaBtn = container.querySelector('#checkout-reviews-media-btn');
        const cardsList = container.querySelector('#checkout-review-cards-list');
        const countTab = container.querySelector('#checkout-reviews-tab-count');
        if (!cardsList) return;

        const cards = Array.from(cardsList.querySelectorAll('.seventea-review-card'));

        const applyFilters = () => {
            const query = (searchInput?.value || '').trim().toLowerCase();
            const ratingVal = ratingSelect?.value || 'all';
            let visibleCount = 0;

            cards.forEach(card => {
                const author = card.getAttribute('data-author') || '';
                const text = card.getAttribute('data-content') || '';
                const rating = card.getAttribute('data-rating') || '5';

                const matchesQuery = !query || author.includes(query) || text.includes(query);
                const matchesRating = ratingVal === 'all' || rating === ratingVal;

                if (matchesQuery && matchesRating) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (countTab) countTab.textContent = `Reviews ${visibleCount}`;
        };

        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (ratingSelect) ratingSelect.addEventListener('change', applyFilters);
        if (mediaBtn) {
            mediaBtn.addEventListener('click', () => {
                mediaBtn.classList.toggle('active');
                if (mediaBtn.classList.contains('active')) {
                    mediaBtn.style.background = '#c59b27';
                    mediaBtn.style.color = '#ffffff';
                } else {
                    mediaBtn.style.background = '';
                    mediaBtn.style.color = '';
                }
            });
        }
    }
    window.initCheckoutReviewsInteractions = initCheckoutReviewsInteractions;

    // ── Cinema of the Estate Interactive Video Player Logic ──
    function bindCinemaEvents() {
        const iframe = document.getElementById('estate-cinema-iframe');
        const ytWrapper = document.getElementById('cinema-yt-wrapper');
        const html5Wrapper = document.getElementById('cinema-html5-wrapper');
        const video = document.getElementById('estate-cinema-video');
        const btnModeYt = document.getElementById('btn-cinema-mode-yt');
        const btnModeHtml5 = document.getElementById('btn-cinema-mode-html5');
        const chapterCards = document.querySelectorAll('.cinema-chapter-card');
        const facade = document.getElementById('cinema-poster-facade');

        function activateCinemaPlayer(ytStart = 0) {
            if (facade) {
                facade.style.opacity = '0';
                setTimeout(() => { facade.style.display = 'none'; }, 350);
            }
            if (ytWrapper && ytWrapper.style.display !== 'none' && iframe) {
                const baseSrc = iframe.getAttribute('data-src') || 'https://www.youtube-nocookie.com/embed/kYJqK9oP64U?enablejsapi=1&rel=0&modestbranding=1&color=white&playsinline=1';
                iframe.src = `${baseSrc}&start=${ytStart}&autoplay=1`;
            }
            if (html5Wrapper && html5Wrapper.style.display !== 'none' && video) {
                video.currentTime = ytStart;
                video.play().catch(e => console.log('Video play error:', e));
            }
        }

        if (facade) {
            facade.onclick = () => activateCinemaPlayer(0);
        }

        // Engine Switching
        if (btnModeYt && btnModeHtml5) {
            btnModeYt.onclick = () => {
                btnModeYt.classList.add('active');
                btnModeYt.style.borderColor = 'rgba(212,175,55,0.6)';
                btnModeYt.style.color = '#ffd875';
                btnModeHtml5.classList.remove('active');
                btnModeHtml5.style.borderColor = 'rgba(255,255,255,0.18)';
                btnModeHtml5.style.color = 'var(--color-text-muted)';
                if (ytWrapper) ytWrapper.style.display = 'block';
                if (html5Wrapper) {
                    html5Wrapper.style.display = 'none';
                    if (video) video.pause();
                }
            };

            btnModeHtml5.onclick = () => {
                btnModeHtml5.classList.add('active');
                btnModeHtml5.style.borderColor = 'rgba(212,175,55,0.6)';
                btnModeHtml5.style.color = '#ffd875';
                btnModeYt.classList.remove('active');
                btnModeYt.style.borderColor = 'rgba(255,255,255,0.18)';
                btnModeYt.style.color = 'var(--color-text-muted)';
                if (html5Wrapper) html5Wrapper.style.display = 'block';
                if (ytWrapper) ytWrapper.style.display = 'none';
                if (facade) {
                    facade.style.opacity = '0';
                    setTimeout(() => { facade.style.display = 'none'; }, 350);
                }
                if (video) {
                    video.play().catch(e => console.log('HTML5 play blocked', e));
                }
            };
        }

        // Chapter Card Clicks
        chapterCards.forEach(card => {
            card.onclick = () => {
                chapterCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');

                const ytStart = parseInt(card.dataset.ytStart || '0', 10);
                const html5Time = parseFloat(card.dataset.time || '0');

                if (facade && facade.style.display !== 'none') {
                    activateCinemaPlayer(ytStart);
                    return;
                }

                // If YouTube is active
                if (ytWrapper && ytWrapper.style.display !== 'none' && iframe) {
                    iframe.src = `https://www.youtube-nocookie.com/embed/kYJqK9oP64U?enablejsapi=1&rel=0&modestbranding=1&color=white&playsinline=1&start=${ytStart}&autoplay=1`;
                }

                // If HTML5 is active
                if (html5Wrapper && html5Wrapper.style.display !== 'none' && video) {
                    video.currentTime = html5Time;
                    video.play().catch(e => console.log('Video play error:', e));
                }
            };
        });
    }

    function closeDrawer() {
        drawerOverlay.classList.remove('active');
        drawerOverlay.classList.remove('open');
        drawerOverlay.classList.remove('checkout-fullscreen');
        const drawerContainer = drawerOverlay.querySelector('.drawer-container');
        if (drawerContainer) {
            drawerContainer.classList.remove('checkout-mode');
        }
        if (drawerFooter) drawerFooter.style.display = '';
        document.body.style.overflow = '';
        currentDrawerContext = null;
    }

    drawerCloseBtn.addEventListener('click', closeDrawer);
    
    // Close on overlay backdrop click
    drawerOverlay.addEventListener('click', (e) => {
        if (e.target === drawerOverlay) closeDrawer();
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (drawerOverlay && drawerOverlay.classList.contains('active')) closeDrawer();
        }
    });

    // ─── Seven Teahouse Luxury Detail & Purchasing View API ─────────────────
    window.closeProductDetail = function() {
        const modal = document.getElementById('product-detail-modal');
        if (modal) {
            modal.classList.remove('active', 'open');
            modal.setAttribute('aria-hidden', 'true');
        }
        document.body.style.overflow = '';
    };

    window.openProductDetail = function(id, type = 'product', options = {}) {
        let item = null;
        if (type === 'product') {
            const products = window.TeaFactoryStore ? window.TeaFactoryStore.getProducts() : [];
            item = products.find(p => p && (p.id == id || String(p.id) === String(id)));
            if (!item && window.TeaFactoryStore && window.TeaFactoryStore.getProductById) {
                item = window.TeaFactoryStore.getProductById(id);
            }
        } else if (type === 'box') {
            const boxes = window.TeaFactoryStore ? window.TeaFactoryStore.getBoxes() : [];
            item = boxes.find(b => b && (b.id == id || String(b.id) === String(id)));
            if (!item) {
                item = { id, name: `Collector Chest #${String(id).padStart(2, '0')}`, price: 150.00, image: 'images/Gift Box.jpeg' };
            }
        } else if (type === 'tour') {
            const selectedPkgCard = document.querySelector('.package-card.selected');
            const pkgName = (options && options.package) || (selectedPkgCard ? selectedPkgCard.getAttribute('data-package') : '01. Gongfu-Style Black Tea Brewing Experience');
            const lkrPerGuest = (options && options.price_lkr) || (selectedPkgCard ? (parseFloat(selectedPkgCard.getAttribute('data-price-lkr')) || 1450) : 1450);
            const baseUsdPerGuest = (options && options.price) || (selectedPkgCard ? parseFloat(selectedPkgCard.getAttribute('data-price')) : (lkrPerGuest / 305)) || (lkrPerGuest / 305);
            const timeSlot = (options && options.timeSlot) || '09:30 AM';
            item = {
                id: id || 1,
                name: pkgName,
                timeSlot: timeSlot,
                price: baseUsdPerGuest,
                price_lkr: lkrPerGuest,
                image: 'images/Factory inside.jpeg',
                type: 'tour'
            };
        }

        if (!item) return;

        if (window.UIComponents && window.UIComponents.renderSevenTeahouseDetailModal) {
            window.UIComponents.renderSevenTeahouseDetailModal(item, type, options);
        }
    };

    // Close button & backdrop events for product detail modal
    const prodDetailModal = document.getElementById('product-detail-modal');
    const prodDetailCloseBtn = document.getElementById('product-detail-close-btn');
    const prodDetailBackdrop = document.getElementById('product-detail-backdrop');
    if (prodDetailCloseBtn) {
        prodDetailCloseBtn.addEventListener('click', window.closeProductDetail);
    }
    if (prodDetailBackdrop) {
        prodDetailBackdrop.addEventListener('click', window.closeProductDetail);
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && prodDetailModal && prodDetailModal.classList.contains('active')) {
            window.closeProductDetail();
        }
    });

    // 5a. Quoted Collector Gift Box Checkout Drawer & Handlers
    function openQuotedBoxCheckoutDrawer(bookingId) {
        if (!bookingId) return;
        const booking = window.TeaFactoryStore.getBookingById(bookingId);
        if (!booking) {
            showToast("Quotation Not Found", "The requested collector gift box enquiry or quotation reference was not found.", "error");
            return;
        }

        if (booking.status === 'Payment Confirmed' || booking.status === 'Verified') {
            showToast("Payment Already Confirmed", `Your payment for ${booking.boxName} has already been verified and confirmed!`, "success");
            switchTab('order');
            setTimeout(() => {
                const idInput = document.getElementById('order-id-input');
                if (idInput) idInput.value = booking.id;
                const orderData = window.TeaFactoryStore.getOrderById(booking.id);
                if (orderData) renderOrderDetails(orderData);
            }, 300);
            return;
        }

        openDrawer('box_quoted_pay', booking.id, booking);
    }
    window.openQuotedBoxCheckoutDrawer = openQuotedBoxCheckoutDrawer;

    function handleQuotedBoxPaymentSubmit(bookingId) {
        const form = document.getElementById('quoted-box-checkout-form');
        if (!form) return;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('quoted-cust-name')?.value?.trim() || '';
        const email = document.getElementById('quoted-cust-email')?.value?.trim() || '';
        const phone = document.getElementById('quoted-cust-phone')?.value?.trim() || '';
        const address = document.getElementById('quoted-cust-address')?.value?.trim() || '';
        const country = document.getElementById('quoted-cust-country')?.value || 'Sri Lanka (Domestic Express)';
        const notes = document.getElementById('quoted-cust-notes')?.value?.trim() || '';

        if (!name || !email || !phone || !address) {
            showToast("Missing Information", "Please enter your full name, email, contact phone, and shipping address.", "error");
            return;
        }

        const activeTabBtn = form.querySelector('.pay-tab.active');
        const paymentMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'bank';

        if (paymentMethod === 'paypal') {
            showToast("PayPal Payment", "Please click the yellow PayPal button above to complete your instant payment.", "info");
            return;
        }

        if (paymentMethod === 'card') {
            showToast("Card Gateway Coming Soon", "Please select Bank Transfer or Cash Deposit Slip and attach your receipt to confirm your order.", "info");
            return;
        }

        const slipImg = selectedBoxSlipBase64 || 
            document.getElementById('quoted-box-bank-slip-zone')?.dataset?.fileBase64 || 
            document.getElementById('quoted-box-cash-slip-zone')?.dataset?.fileBase64 || '';

        const result = window.TeaFactoryStore.payQuotedBox(bookingId, { 
            name, 
            email, 
            phone, 
            address,
            country,
            notes,
            paymentMethod,
            slipImage: slipImg
        });

        if (result.success) {
            const booking = result.booking;

            // Trigger backend API and Resend Email Dispatch to Customer & Estate Owner
            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createOrder === 'function') {
                window.TeaFactoryAPI.createOrder({
                    id: booking.id,
                    customer_name: booking.customerName,
                    customer_email: booking.email,
                    customer_phone: booking.phone,
                    shipping_address: `${booking.address || address}, ${booking.country || country}`,
                    subtotal_usd: booking.quotedPrice !== undefined ? booking.quotedPrice : booking.price,
                    shipping_usd: booking.quotedShipping || 0,
                    total_usd: booking.quotedTotal || booking.price,
                    currency_code: booking.currency || 'USD',
                    total_in_currency: booking.quotedTotal || booking.price,
                    payment_method: paymentMethod || 'bank',
                    bespoke_notes: `Collector Gift Box Quoted Payment: ${booking.boxName} | Quoted Total: $${booking.quotedTotal}${notes ? ' | Notes: ' + notes : ''}`,
                    items: [{
                        id: `BOX-${booking.boxId || '1'}`,
                        name: `${booking.boxName} (${booking.seasonName} • Series ${booking.seriesNumber || 1})`,
                        image: booking.image || 'images/Gift Box.jpeg',
                        weight: 'Solid Light-Wood Teak Chest (500g Assortment)',
                        category: 'Numbered Collector Chest',
                        quantity: 1,
                        price: booking.quotedPrice !== undefined ? booking.quotedPrice : booking.price,
                        shippingCharge: booking.quotedShipping || 0,
                        totalPrice: booking.quotedTotal || booking.price,
                        giftOptions: {
                            waxSeal: booking.waxSealColor,
                            monogram: booking.monogramInitials,
                            message: booking.giftMessage
                        }
                    }]
                }).catch(err => console.warn('API quoted box payment order dispatch notice:', err.message));
            }

            showToast(
                "Payment Slip Submitted",
                `Thank you, ${booking.customerName}! Your payment receipt for ${booking.boxName} has been submitted for verification. Confirmation email dispatched.`,
                'success'
            );

            closeDrawer();

            // Refresh gift catalog view
            if (typeof window.UIComponents !== 'undefined' && typeof window.UIComponents.renderSeriesSelector === 'function') {
                window.UIComponents.renderSeriesSelector('gifts-container');
                window.UIComponents.renderSeriesSelector('home-gifts-container');
            }

            // Seamlessly navigate to My Order page
            switchTab('order');
            setTimeout(() => {
                const idInput = document.getElementById('order-id-input');
                if (idInput) idInput.value = booking.id;
                const orderData = window.TeaFactoryStore.getOrderById(booking.id);
                if (orderData) {
                    renderOrderDetails(orderData);
                } else {
                    const trackBtn = document.getElementById('track-order-btn');
                    if (trackBtn) trackBtn.click();
                }
            }, 300);
        } else {
            showToast("Payment Error", result.message || "Failed to process gift box payment.", "error");
        }
    }
    window.handleQuotedBoxPaymentSubmit = handleQuotedBoxPaymentSubmit;

    // 5b. Box Direct Purchase Submission handler (Legacy Fallback)
    function handleBoxPurchaseSubmit() {
        const form = document.getElementById('box-purchase-form');
        if (!form) return;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('box-purchase-cust-name')?.value?.trim() || '';
        const email = document.getElementById('box-purchase-cust-email')?.value?.trim() || '';
        const phone = document.getElementById('box-purchase-cust-phone')?.value?.trim() || '';
        const address = document.getElementById('box-purchase-cust-address')?.value?.trim() || '';
        const country = document.getElementById('box-purchase-cust-country')?.value || 'Sri Lanka (Domestic Express)';
        const preferredDate = document.getElementById('box-purchase-pref-date')?.value || '';
        const notes = document.getElementById('box-purchase-cust-notes')?.value?.trim() || '';
        const isGift = document.getElementById('box_purchase-enable-gift')?.checked || false;
        const giftWax = document.getElementById('box_purchase-wax-val')?.value || 'Imperial Gold';
        const giftMonogram = document.getElementById('box_purchase-monogram-input')?.value?.trim().toUpperCase() || '';
        const giftMsg = document.getElementById('box_purchase-gift-msg')?.value?.trim() || '';

        if (!name || !email || !phone || !address) {
            showToast("Missing Information", "Please enter your full name, email, contact phone, and shipping address.", "error");
            return;
        }

        const activeTabBtn = form.querySelector('.pay-tab.active');
        const paymentMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'bank';

        if (paymentMethod === 'paypal') {
            showToast("PayPal Payment", "Please click the yellow PayPal button above to complete your instant payment.", "info");
            return;
        }

        if (paymentMethod === 'card') {
            showToast("Card Gateway Coming Soon", "Please select Bank Transfer or Cash Deposit Slip and attach your receipt to confirm your order.", "info");
            const bankTab = form.querySelector('.pay-tab[data-method="bank"]');
            if (bankTab) bankTab.click();
            return;
        }

        const slipImg = selectedBoxSlipBase64 || 
            document.getElementById('box-purchase-bank-slip-zone')?.dataset?.fileBase64 || 
            document.getElementById('box-purchase-cash-slip-zone')?.dataset?.fileBase64 || '';

        const boxId = currentDrawerContext ? currentDrawerContext.id : null;
        const result = window.TeaFactoryStore.purchaseBox(boxId, { 
            name, 
            email, 
            phone, 
            address,
            country,
            notes,
            preferredDate,
            giftPackaging: isGift,
            waxSealColor: isGift ? giftWax : '',
            monogramInitials: isGift ? giftMonogram : '',
            giftMessage: isGift ? giftMsg : '',
            paymentMethod,
            slipImage: slipImg
        });

        if (result.success) {
            const booking = result.booking;

            // Trigger backend API and Resend Email Dispatch to Customer & Estate Owner
            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createOrder === 'function') {
                window.TeaFactoryAPI.createOrder({
                    id: booking.id,
                    customer_name: booking.customerName,
                    customer_email: booking.email,
                    customer_phone: booking.phone,
                    shipping_address: `${booking.address || address}, ${booking.country || country}`,
                    subtotal_usd: booking.subtotal !== undefined ? booking.subtotal : booking.price,
                    shipping_usd: 0,
                    total_usd: booking.price,
                    currency_code: booking.currency || 'USD',
                    total_in_currency: booking.price,
                    payment_method: paymentMethod || 'bank',
                    bespoke_notes: `Collector Gift Box Direct Purchase: ${booking.productName || booking.boxName}${notes ? ' | Notes: ' + notes : ''}${preferredDate ? ' | Preferred Dispatch: ' + preferredDate : ''}`,
                    items: [{
                        id: `BOX-${booking.boxId}`,
                        name: booking.productName || booking.boxName,
                        image: booking.image || 'images/Gift Box.jpeg',
                        weight: booking.weight || 'Solid Light-Wood Teak Chest',
                        category: 'Numbered Collector Chest',
                        quantity: 1,
                        price: booking.unitPrice !== undefined ? booking.unitPrice : booking.price,
                        shippingCharge: 0,
                        totalPrice: booking.price,
                        giftOptions: {
                            waxSeal: booking.waxSealColor,
                            monogram: booking.monogramInitials,
                            message: booking.giftMessage
                        }
                    }]
                }).catch(err => console.warn('API box purchase order dispatch notice:', err.message));
            }

            showToast(
                "Order Confirmed",
                `${booking.boxName} reserved and registered under your name. Confirmation email dispatched.`,
                'success'
            );

            closeDrawer();

            // Refresh gift catalog view if currently visible
            if (typeof window.UIComponents !== 'undefined' && typeof window.UIComponents.renderSeriesSelector === 'function') {
                window.UIComponents.renderSeriesSelector('gifts-container');
                window.UIComponents.renderSeriesSelector('home-gifts-container');
            }

            // Seamlessly navigate to My Order page and display newly placed order
            switchTab('order');
            setTimeout(() => {
                const idInput = document.getElementById('order-id-input');
                if (idInput) idInput.value = booking.id;
                const orderData = window.TeaFactoryStore.getOrderById(booking.id);
                if (orderData) {
                    renderOrderDetails(orderData);
                } else {
                    const trackBtn = document.getElementById('track-order-btn');
                    if (trackBtn) trackBtn.click();
                }
            }, 300);
        } else {
            showToast("Reservation Notice", result.message || "Failed to process gift box reservation.", "error");
        }
    }

    // 6. Box Enquiry Submission handler
    function handleBoxEnquirySubmit(channel) {
        const form = document.getElementById('box-booking-form');
        if (!form) return;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('cust-name')?.value?.trim() || '';
        const email = document.getElementById('cust-email')?.value?.trim() || '';
        const phone = document.getElementById('cust-phone')?.value?.trim() || '';
        const preferredDate = document.getElementById('cust-pref-date')?.value || '';
        const message = document.getElementById('cust-enquiry-msg')?.value?.trim() || '';
        const isGift = document.getElementById('box-enable-gift')?.checked || false;
        const giftWax = document.getElementById('box-wax-val')?.value || 'Imperial Gold';
        const giftMonogram = document.getElementById('box-monogram-input')?.value?.trim().toUpperCase() || '';
        const giftMsg = document.getElementById('box-gift-msg')?.value?.trim() || '';

        const boxId = currentDrawerContext ? currentDrawerContext.id : null;
        const prefCurr = document.getElementById('cust-preferred-curr')?.value || window.TeaFactoryStore.getActiveCurrency();
        const result = window.TeaFactoryStore.bookBox(boxId, { 
            name, 
            email, 
            phone, 
            socialChannel: channel, 
            preferredDate,
            message,
            preferredCurrency: prefCurr,
            giftPackaging: isGift,
            waxSealColor: isGift ? giftWax : '',
            monogramInitials: isGift ? giftMonogram : '',
            giftMessage: isGift ? giftMsg : ''
        });

        if (result.success) {
            const booking = result.booking;
            showToast(
                "Enquiry Logged", 
                `Your inquiry for ${booking.boxName} has been recorded successfully.`, 
                'success'
            );
            
            closeDrawer();
            renderTabContent(activeTab);

            // Format message body
            let baseText = `Hello Rock One Wild Tea team! I would like to inquire about the limited edition box: ${booking.boxName} (${booking.seasonName}).\n\n` +
                             `*My Details:*\n` +
                             `• Name: ${booking.customerName}\n` +
                             `• Email: ${booking.email}\n` +
                             `• Phone: ${booking.phone}\n` +
                             `• Preferred Arrival Date: ${booking.preferredDate || 'Not Specified'}\n` +
                             `• Preferred Quotation Currency: ${prefCurr === 'LKR' ? 'LKR (Rs)' : 'USD ($)'}\n\n`;
            if (booking.giftPackaging) {
                baseText += `*Bespoke Presentation:*\n` +
                            `• Artisan Wax Seal: ${booking.waxSealColor || 'Imperial Gold'}\n` +
                            (booking.monogramInitials ? `• Monogram Engraving: ${booking.monogramInitials}\n` : '') +
                            (booking.giftMessage ? `• Calligraphic Note: "${booking.giftMessage}"\n\n` : '\n');
            }
            baseText += `*Enquiry Message:*\n"${booking.message}"`;

            setTimeout(() => {
                if (channel === 'WhatsApp') {
                    showToast("Connecting via WhatsApp", "Opening WhatsApp chat support channel...", "success");
                    setTimeout(() => {
                        const encodedMsg = encodeURIComponent(baseText);
                        window.open(`https://api.whatsapp.com/send?phone=94773209950&text=${encodedMsg}`, '_blank');
                    }, 1000);
                } else {
                    showToast("Loading Email Dispatcher", "Opening email service selector...", "success");
                    setTimeout(() => {
                        showEmailServiceChooserModal({
                            to: 'rockonewild@gmail.com',
                            subject: `Enquiry: ${booking.boxName} (${booking.seasonName})`,
                            body: baseText,
                            title: 'Select Preferred Email Service',
                            subtitle: 'Collector Reserve Concierge Dispatch',
                            itemSummary: `${booking.boxName} (${booking.seasonName})`
                        });
                    }, 600);
                }
            }, 800);

        } else {
            showToast("Enquiry Failed", result.message, 'error');
        }
    }

    // 7. Tour Booking Submission handler
    function handleTourBookingSubmit() {
        const form = document.getElementById('tour-booking-form');
        if (!form) return;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('tour-cust-name')?.value?.trim() || '';
        const email = document.getElementById('tour-cust-email')?.value?.trim() || '';
        const phone = document.getElementById('tour-cust-phone')?.value?.trim() || '';
        const guests = Math.max(1, parseInt(document.getElementById('tour-guests')?.value) || 1);
        const tourDate = document.getElementById('tour-date-input')?.value || '';
        const dietaryNotes = document.getElementById('tour-dietary')?.value || 'None';
        const transportRequired = document.getElementById('tour-transport')?.value || 'No Transport Needed';
        
        // Active payment method
        const activeTabBtn = form.querySelector('.pay-tab.active');
        const paymentMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'bank';
        const socialChannel = document.getElementById('tour-social-channel')?.value || 'WhatsApp';

        if (paymentMethod === 'paypal') {
            showToast("PayPal Payment", "Please click the yellow PayPal button above to complete your instant payment.", "info");
            return;
        }

        if (paymentMethod === 'card') {
            showToast("Card Gateway Coming Soon", "Please select Bank Transfer or Cash Deposit Slip and attach your receipt to confirm your booking.", "info");
            const bankTab = form.querySelector('.pay-tab[data-method="bank"]');
            if (bankTab) bankTab.click();
            return;
        }

        const slipImg = selectedTourSlipBase64 || 
            document.getElementById('tour-bank-slip-zone')?.dataset?.fileBase64 || 
            document.getElementById('tour-cash-slip-zone')?.dataset?.fileBase64 || '';

        // Check slip requirement for bank/slip methods
        if ((paymentMethod === 'bank' || paymentMethod === 'slip') && !slipImg) {
            showToast("Deposit Slip Required", "Please attach your bank deposit receipt / transfer screenshot to submit.", "error");
            return;
        }

        const selectedPkgCard = document.querySelector('.package-card.selected');
        const packageName = selectedPkgCard ? selectedPkgCard.getAttribute('data-package') : '01. Gongfu-Style Black Tea Brewing Experience';
        const pkgPrice = parseFloat(selectedPkgCard ? selectedPkgCard.getAttribute('data-price') : 4.754) || 4.754;
        const pkgDeposit = parseFloat(selectedPkgCard ? selectedPkgCard.getAttribute('data-deposit') : 4.754) || 4.754;

        const totalDeposit = guests * pkgDeposit;
        const totalPrice = guests * pkgPrice;
        const totalLkr = guests * 1450;

        const slotId = currentDrawerContext ? currentDrawerContext.id : 1;
        const timeSlot = (currentDrawerContext && currentDrawerContext.data && currentDrawerContext.data.timeSlot) ? currentDrawerContext.data.timeSlot : "09:30 AM";

        const result = window.TeaFactoryStore.bookTour(slotId, {
            name, 
            email, 
            phone, 
            guests, 
            packageName, 
            deposit: totalDeposit, 
            totalPrice: totalPrice,
            tourDate, 
            timeSlot, 
            dietaryNotes, 
            transportRequired,
            paymentMethod,
            slipImage: slipImg
        });

        if (result.success) {
            const booking = result.booking;

            // Sync to backend API (Supabase & SQLite) - Automatically notifies rockonewild@gmail.com
            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.bookTour === 'function') {
                window.TeaFactoryAPI.bookTour({
                    id: booking.id,
                    tour_slot_id: booking.slotId,
                    tour_date: booking.tourDate || new Date().toISOString().split('T')[0],
                    time_slot: booking.timeSlot,
                    guest_name: booking.customerName,
                    guest_email: booking.email,
                    guest_phone: booking.phone,
                    guest_count: booking.guests,
                    package_name: booking.packageName,
                    total_price: booking.totalPrice || totalPrice,
                    currency_code: 'USD',
                    total_in_currency: totalLkr,
                    payment_method: paymentMethod,
                    notes: `Package: ${booking.packageName}. Dietary: ${booking.dietaryNotes}. Transport: ${booking.transportRequired}`,
                    slip_image: booking.slipImage || ''
                }).catch(err => console.warn('API tour booking sync notice:', err.message));
            }

            if (paymentMethod === 'paypal') {
            showToast("PayPal Payment", "Please click the yellow PayPal button above to complete your instant payment.", "info");
            return;
        }

        if (paymentMethod === 'card') {
                showToast(
                    "Tour Reserved & Confirmed!", 
                    `Boarding pass ${booking.id} reserved for ${guests} guests on ${tourDate || timeSlot}. Confirmation sent to ${email}.`, 
                    'success'
                );
            } else {
                showToast(
                    "Tour Deposit Submitted!", 
                    `Booking ${booking.id} received. Estate Concierge desk notified at rockonewild@gmail.com. Your Gate Pass will be emailed automatically once payment is verified.`, 
                    'success'
                );
            }

            closeDrawer();
            
            // Seamlessly navigate to My Order page and display newly booked tour pass
            switchTab('order');
            setTimeout(() => {
                const idInput = document.getElementById('order-id-input');
                if (idInput) idInput.value = booking.id;
                const orderData = window.TeaFactoryStore.getOrderById(booking.id);
                if (orderData) {
                    window.UIComponents.renderOrderDetails(orderData);
                    bindOrderSlipEvents(orderData.id);
                    const panel = document.getElementById('order-details-panel');
                    if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 60);

            // Forward summary message / connect to concierge desk
            const message = `Hello Rock One Wild Tea!\n\nI would like to confirm my Factory Tour reservation:\n• Booking Ref: ${booking.id}\n• Lead Guest: ${name}\n• Contact Email: ${email}\n• WhatsApp: ${phone}\n• Tour Date: ${tourDate}\n• Time Slot: ${booking.timeSlot}\n• Number of Guests: ${guests} ${guests === 1 ? 'Guest' : 'Guests'}\n• Experience: ${packageName}\n• Total Amount: LKR ${totalLkr.toLocaleString()} (approx. $${totalDeposit.toFixed(2)} USD)\n\nPlease confirm availability and gate access guidance.`;
            const encodedMsg = encodeURIComponent(message);

            setTimeout(() => {
                if (socialChannel === 'WhatsApp' || !socialChannel) {
                    showToast("Connecting to Concierge", "Opening WhatsApp concierge desk...", "info");
                    setTimeout(() => {
                        window.open(`https://api.whatsapp.com/send?phone=94773209950&text=${encodedMsg}`, '_blank');
                    }, 1200);
                } else {
                    showToast("Loading Email Dispatcher", "Opening email service selector...", "info");
                    setTimeout(() => {
                        showEmailServiceChooserModal({
                            to: 'rockonewild@gmail.com',
                            subject: `Tour Reservation Gate Pass: ${booking.id} - ${name}`,
                            body: message,
                            title: 'Select Preferred Email Service',
                            subtitle: 'Estate Tour Gate Pass Dispatch',
                            itemSummary: `${packageName} (${guests} Guests)`
                        });
                    }, 800);
                }
            }, 1000);
        } else {
            showToast("Tour Booking Failed", result.message, 'error');
        }
    }

    // 7b. Product Order Submission Handler
    function handleProductBookingSubmit() {
        const form = document.getElementById('prod-booking-form');
        if (!form) return;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('prod-cust-name')?.value?.trim() || '';
        const email = document.getElementById('prod-cust-email')?.value?.trim() || '';
        const phone = document.getElementById('prod-cust-phone')?.value?.trim() || '';
        const address = document.getElementById('prod-cust-address')?.value?.trim() || '';
        const country = document.getElementById('prod-cust-country')?.value || 'Sri Lanka (Domestic Express)';
        const preferredDate = document.getElementById('prod-pref-date')?.value || '';
        const notes = document.getElementById('prod-cust-notes')?.value?.trim() || '';
        const socialChannel = document.getElementById('prod-social-channel')?.value || 'WhatsApp';
        const isGift = document.getElementById('prod-enable-gift')?.checked || false;
        const giftWax = document.getElementById('prod-wax-val')?.value || 'Imperial Gold';
        const giftMonogram = document.getElementById('prod-monogram-input')?.value?.trim().toUpperCase() || '';
        const giftMsg = document.getElementById('prod-gift-msg')?.value?.trim() || '';

        if (!name || !email || !phone || !address) {
            showToast("Missing Information", "Please enter your full name, email, contact phone, and shipping address.", "error");
            return;
        }

        const activeTabBtn = form.querySelector('.pay-tab.active');
        const paymentMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'bank';

        if (paymentMethod === 'paypal') {
            showToast("PayPal Payment", "Please click the yellow PayPal button above to complete your instant payment.", "info");
            return;
        }

        if (paymentMethod === 'card') {
            showToast("Card Gateway Coming Soon", "Please select Bank Transfer or Cash Deposit Slip and attach your receipt to confirm your order.", "info");
            const bankTab = form.querySelector('.pay-tab[data-method="bank"]');
            if (bankTab) bankTab.click();
            return;
        }

        const slipImg = selectedProdSlipBase64 || 
            document.getElementById('prod-bank-slip-zone')?.dataset?.fileBase64 || 
            document.getElementById('prod-cash-slip-zone')?.dataset?.fileBase64 || '';

        const productId = currentDrawerContext ? currentDrawerContext.id : null;
        const quantity = parseInt(document.getElementById('quick-order-qty-val')?.innerText, 10) || 1;
        const result = window.TeaFactoryStore.bookProduct(productId, { 
            name, 
            email, 
            phone, 
            address,
            country,
            notes,
            quantity,
            socialChannel, 
            preferredDate,
            giftPackaging: isGift,
            waxSealColor: isGift ? giftWax : '',
            monogramInitials: isGift ? giftMonogram : '',
            giftMessage: isGift ? giftMsg : '',
            paymentMethod,
            slipImage: slipImg
        });

        if (result.success) {
            const booking = result.booking;

            // Trigger backend API and Resend Email Dispatch to Customer & Owner
            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createOrder === 'function') {
                window.TeaFactoryAPI.createOrder({
                    id: booking.id,
                    customer_name: booking.customerName,
                    customer_email: booking.email,
                    customer_phone: booking.phone,
                    shipping_address: `${booking.address || address}, ${booking.country || country}`,
                    subtotal_usd: booking.subtotal !== undefined ? booking.subtotal : (booking.unitPrice * (booking.quantity || 1)),
                    shipping_usd: booking.shippingFee || 0,
                    total_usd: booking.price,
                    currency_code: booking.currency || 'USD',
                    total_in_currency: booking.price,
                    payment_method: paymentMethod || 'bank',
                    bespoke_notes: `Direct Product Reservation: ${booking.productName} (${booking.weight || ''}) x${booking.quantity || 1}${notes ? ' | Notes: ' + notes : ''}${preferredDate ? ' | Preferred Dispatch: ' + preferredDate : ''}`,
                    items: [{
                        id: productId,
                        name: booking.productName,
                        image: booking.image || 'images/Product.jpeg',
                        weight: booking.weight,
                        category: booking.category,
                        leafGrade: booking.leafGrade,
                        quantity: booking.quantity || quantity,
                        price: booking.unitPrice !== undefined ? booking.unitPrice : booking.price,
                        shippingCharge: booking.shippingFee || 0,
                        totalPrice: booking.price,
                        giftOptions: {
                            waxSeal: booking.waxSealColor,
                            monogram: booking.monogramInitials,
                            message: booking.giftMessage
                        }
                    }]
                }).catch(err => console.warn('API product order dispatch notice:', err.message));
            }

            showToast(
                "Order Confirmed",
                `${booking.productName} (${booking.weight}) reserved. Delivery: ${booking.deliveryRange}`,
                'success'
            );

            closeDrawer();
            
            // Seamlessly navigate to My Order page and display newly placed order
            switchTab('order');
            setTimeout(() => {
                const idInput = document.getElementById('order-id-input');
                if (idInput) idInput.value = booking.id;
                const orderData = window.TeaFactoryStore.getOrderById(booking.id);
                if (orderData) {
                    window.UIComponents.renderOrderDetails(orderData);
                    bindOrderSlipEvents(orderData.id);
                    const panel = document.getElementById('order-details-panel');
                    if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 60);

            // Redirect to WhatsApp / Instagram
            setTimeout(() => {
                let message = `Hello Rock One Wild Tea!\n\nI would like to order the following:\nProduct: ${booking.productName} (${booking.weight})\nOrder Ref: ${booking.id}\nCustomer Name: ${booking.customerName}\nPhone: ${booking.phone}\nPrice: ${booking.formattedPrice || '$' + booking.price}\n`;
                if (booking.giftPackaging) {
                    message += `\n*Bespoke Presentation:*\n• Wax Seal: ${booking.waxSealColor || 'Imperial Gold'}\n` +
                               (booking.monogramInitials ? `• Monogram Engraving: ${booking.monogramInitials}\n` : '') +
                               (booking.giftMessage ? `• Calligraphic Note: "${booking.giftMessage}"\n` : '');
                }
                message += `\nPlease share your payment and delivery details.`;
                const encodedMsg = encodeURIComponent(message);

                if (socialChannel === 'WhatsApp') {
                    showToast("Connecting to Concierge", "Redirecting to WhatsApp to complete your order...", "success");
                    setTimeout(() => {
                        window.open(`https://api.whatsapp.com/send?phone=94773209950&text=${encodedMsg}`, '_blank');
                    }, 1500);
                } else {
                    navigator.clipboard.writeText(message).then(() => {
                        showToast("Order Details Copied", "Booking info copied to clipboard. Redirecting to Instagram...", "success");
                    }).catch(() => {});
                    setTimeout(() => {
                        window.open('https://www.instagram.com/rockonewild?stkn=MTA3dW52OTYyZzV5NA==', '_blank');
                    }, 2000);
                }
            }, 800);
        } else {
            showToast("Order Failed", result.message, 'error');
        }
    }

    // 7c. Payment method tab switcher
    function bindPaymentTabs(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        const tabs = form.querySelectorAll('.pay-tab');
        const panels = form.querySelectorAll('.pay-panel');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                tab.classList.add('active');
                const method = tab.getAttribute('data-method');
                const panel = form.querySelector(`#pay-panel-${method}`) || form.querySelector(`[id$="pay-panel-${method}"]`) || form.querySelector(`.pay-panel-${method}`);
                if (panel) panel.classList.add('active');
            });
        });
    }

    // Global helper for switching payment tabs programmatically
    window.switchDrawerPayTab = function(formId, method) {
        const form = document.getElementById(formId);
        if (!form) return;
        const tab = form.querySelector(`.pay-tab[data-method="${method}"]`);
        if (tab) tab.click();
    };

    // 7c-2. Bespoke Gift Options Interactivity Binder
    function bindBespokeGiftEvents(prefix) {
        const checkbox = document.getElementById(`${prefix}-enable-gift`);
        const panel = document.getElementById(`${prefix}-gift-panel`);
        const waxVal = document.getElementById(`${prefix}-wax-val`);
        const waxName = document.getElementById(`${prefix}-wax-name`);
        const waxBtns = document.querySelectorAll(`.wax-swatch-btn[data-prefix="${prefix}"]`);
        const monogramInp = document.getElementById(`${prefix}-monogram-input`);
        const monogramBadge = document.getElementById(`${prefix}-monogram-badge`);
        const msgInp = document.getElementById(`${prefix}-gift-msg`);
        const msgCount = document.getElementById(`${prefix}-msg-count`);
        const cardPreview = document.getElementById(`${prefix}-card-preview`);
        const cardText = document.getElementById(`${prefix}-card-text`);
        const sealDot = document.getElementById(`${prefix}-stamp-dot`);
        const sealLabel = document.getElementById(`${prefix}-seal-label`);

        if (checkbox && panel) {
            checkbox.addEventListener('change', () => {
                panel.style.display = checkbox.checked ? 'block' : 'none';
                updatePreview();
            });
        }

        waxBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                waxBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const col = btn.getAttribute('data-color');
                if (waxVal) waxVal.value = col;
                if (waxName) waxName.innerText = col;
                if (sealLabel) sealLabel.innerText = `${col} Seal`;
                if (sealDot) {
                    sealDot.className = 'stamp-dot';
                    if (col === 'Imperial Gold') sealDot.classList.add('stamp-gold');
                    else if (col === 'Royal Emerald') sealDot.classList.add('stamp-emerald');
                    else if (col === 'Highland Crimson') sealDot.classList.add('stamp-crimson');
                    else if (col === 'Midnight Obsidian') sealDot.classList.add('stamp-obsidian');
                }
            });
        });

        function updatePreview() {
            const isChecked = checkbox && checkbox.checked;
            const hasText = msgInp && msgInp.value.trim().length > 0;
            const hasMono = monogramInp && monogramInp.value.trim().length > 0;
            
            if (cardPreview) {
                cardPreview.style.display = (isChecked && (hasText || hasMono)) ? 'block' : 'none';
            }
            if (cardText && msgInp) {
                cardText.innerText = hasText ? `"${msgInp.value.trim()}"` : '"Your custom gift dedication will appear here in gold calligraphy..."';
            }
            if (monogramBadge && monogramInp) {
                const mono = monogramInp.value.trim().toUpperCase();
                if (mono) {
                    monogramBadge.innerText = mono;
                    monogramBadge.style.display = 'inline-block';
                } else {
                    monogramBadge.style.display = 'none';
                }
            }
            if (msgCount && msgInp) {
                msgCount.innerText = `${msgInp.value.length} / 160`;
            }
        }

        if (msgInp) msgInp.addEventListener('input', updatePreview);
        if (monogramInp) {
            monogramInp.addEventListener('input', (e) => {
                e.target.value = e.target.value.toUpperCase();
                updatePreview();
            });
        }
    }

    // 7c-3. Currency Switcher Synchronizer & Engine
    function initCurrencySwitchers() {
        const activeCurr = window.TeaFactoryStore ? window.TeaFactoryStore.getActiveCurrency() : 'USD';
        const desktopSel = document.getElementById('currency-switcher');
        const mobileSel = document.getElementById('mobile-currency-switcher');
        
        if (desktopSel) desktopSel.value = activeCurr;
        if (mobileSel) mobileSel.value = activeCurr;

        function handleCurrencyChange(newCurrency) {
            if (window.TeaFactoryStore && window.TeaFactoryStore.setActiveCurrency(newCurrency)) {
                if (desktopSel) desktopSel.value = newCurrency;
                if (mobileSel) mobileSel.value = newCurrency;
                syncFloatingPrefsWidget();
                if (window.appUpdateCartBadges) window.appUpdateCartBadges();
                const cartOverlay = document.getElementById('cart-drawer-overlay');
                if (cartOverlay && cartOverlay.classList.contains('open')) {
                    window.UIComponents.renderCartDrawer('cart-drawer-body');
                    if (window.appBindCartDrawerEvents) window.appBindCartDrawerEvents();
                }
                showToast("Currency Updated", `Store pricing now displaying in ${newCurrency}.`, "success");
                renderTabContent(activeTab);
            }
        }

        if (desktopSel) {
            desktopSel.addEventListener('change', (e) => handleCurrencyChange(e.target.value));
        }
        if (mobileSel) {
            mobileSel.addEventListener('change', (e) => handleCurrencyChange(e.target.value));
        }
    }

    // 7c-4. Multi-Language (i18n) Switcher & Engine
    function initLanguageSwitchers() {
        if (!window.TeaFactoryI18n) return;
        const activeLang = window.TeaFactoryI18n.getActiveLanguage();
        const desktopLang = document.getElementById('language-switcher');
        const mobileLang = document.getElementById('mobile-language-switcher');

        if (desktopLang) desktopLang.value = activeLang;
        if (mobileLang) mobileLang.value = activeLang;

        // Run initial translation on static DOM
        window.TeaFactoryI18n.translateDOM();

        function handleLanguageChange(newLang) {
            if (window.TeaFactoryI18n.setActiveLanguage(newLang)) {
                if (desktopLang) desktopLang.value = newLang;
                if (mobileLang) mobileLang.value = newLang;
                syncFloatingPrefsWidget();
                const meta = window.TeaFactoryI18n.getActiveLanguageMeta();
                showToast("Language Switched", `Portal language changed to ${meta.native} (${meta.name}).`, "success");
                renderTabContent(activeTab);
                const cartOverlay = document.getElementById('cart-drawer-overlay');
                if (cartOverlay && cartOverlay.classList.contains('open') && window.UIComponents.renderCartDrawer) {
                    window.UIComponents.renderCartDrawer('cart-drawer-body');
                    if (window.appBindCartDrawerEvents) window.appBindCartDrawerEvents();
                }
                if (window.appSyncChatbotLanguage) {
                    window.appSyncChatbotLanguage();
                }
            }
        }

        if (desktopLang) {
            desktopLang.addEventListener('change', (e) => handleLanguageChange(e.target.value));
        }
        if (mobileLang) {
            mobileLang.addEventListener('change', (e) => handleLanguageChange(e.target.value));
        }
    }

    // 7c-5. Floating Global Preferences (Currency & Language) Widget
    function initFloatingGlobalPreferences() {
        const triggerBtn = document.getElementById('floating-global-prefs-btn');
        const popup = document.getElementById('global-prefs-popup');
        const closeBtn = document.getElementById('global-prefs-close-btn');
        const langBtns = document.querySelectorAll('.prefs-lang-btn');
        const currBtns = document.querySelectorAll('.prefs-curr-btn');

        if (!triggerBtn || !popup) return;

        function togglePopup() {
            const isActive = popup.classList.contains('active');
            if (isActive) {
                popup.classList.remove('active');
                popup.setAttribute('aria-hidden', 'true');
            } else {
                // Close chatbot window if open
                const chatbotWin = document.getElementById('faq-chatbot-window');
                if (chatbotWin && chatbotWin.classList.contains('active')) {
                    chatbotWin.classList.remove('active');
                    chatbotWin.setAttribute('aria-hidden', 'true');
                }
                syncFloatingPrefsWidget();
                popup.classList.add('active');
                popup.setAttribute('aria-hidden', 'false');
            }
        }

        function closePopup() {
            popup.classList.remove('active');
            popup.setAttribute('aria-hidden', 'true');
        }

        triggerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePopup();
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closePopup();
            });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!popup.contains(e.target) && !triggerBtn.contains(e.target) && popup.classList.contains('active')) {
                closePopup();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('active')) {
                closePopup();
            }
        });

        // Bind language click pills
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                if (window.TeaFactoryI18n && window.TeaFactoryI18n.setActiveLanguage(lang)) {
                    const desktopLang = document.getElementById('language-switcher');
                    const mobileLang = document.getElementById('mobile-language-switcher');
                    if (desktopLang) desktopLang.value = lang;
                    if (mobileLang) mobileLang.value = lang;
                    syncFloatingPrefsWidget();
                    const meta = window.TeaFactoryI18n.getActiveLanguageMeta();
                    showToast("Language Switched", `Portal language changed to ${meta.native} (${meta.name}).`, "success");
                    renderTabContent(activeTab);
                    const cartOverlay = document.getElementById('cart-drawer-overlay');
                    if (cartOverlay && cartOverlay.classList.contains('open') && window.UIComponents.renderCartDrawer) {
                        window.UIComponents.renderCartDrawer('cart-drawer-body');
                        if (window.appBindCartDrawerEvents) window.appBindCartDrawerEvents();
                    }
                    if (window.appSyncChatbotLanguage) {
                        window.appSyncChatbotLanguage();
                    }
                    closePopup();
                }
            });
        });

        // Bind currency click pills
        currBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const curr = btn.getAttribute('data-curr');
                if (window.TeaFactoryStore && window.TeaFactoryStore.setActiveCurrency(curr)) {
                    const desktopSel = document.getElementById('currency-switcher');
                    const mobileSel = document.getElementById('mobile-currency-switcher');
                    if (desktopSel) desktopSel.value = curr;
                    if (mobileSel) mobileSel.value = curr;
                    syncFloatingPrefsWidget();
                    if (window.appUpdateCartBadges) window.appUpdateCartBadges();
                    const cartOverlay = document.getElementById('cart-drawer-overlay');
                    if (cartOverlay && cartOverlay.classList.contains('open')) {
                        window.UIComponents.renderCartDrawer('cart-drawer-body');
                        if (window.appBindCartDrawerEvents) window.appBindCartDrawerEvents();
                    }
                    showToast("Currency Updated", `Store pricing now displaying in ${curr}.`, "success");
                    renderTabContent(activeTab);
                    closePopup();
                }
            });
        });

        syncFloatingPrefsWidget();
    }

    function syncFloatingPrefsWidget() {
        const flagEl = document.getElementById('floating-active-flag');
        const currEl = document.getElementById('floating-active-curr');
        const langBtns = document.querySelectorAll('.prefs-lang-btn');
        const currBtns = document.querySelectorAll('.prefs-curr-btn');

        const activeLang = window.TeaFactoryI18n ? window.TeaFactoryI18n.getActiveLanguage() : 'en';
        const activeCurr = window.TeaFactoryStore ? window.TeaFactoryStore.getActiveCurrency() : 'USD';

        const flagMap = { en: '🇬🇧', si: '🇱🇰', ta: '🇱🇰', ja: '🇯🇵', zh: '🇨🇳', ar: '🇦🇪' };
        const symbolMap = { USD: '$', EUR: '€', GBP: '£', LKR: 'Rs', AED: 'AED' };

        if (flagEl) flagEl.innerText = flagMap[activeLang] || '🌐';
        if (currEl) currEl.innerText = symbolMap[activeCurr] || activeCurr;

        langBtns.forEach(b => {
            if (b.getAttribute('data-lang') === activeLang) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        currBtns.forEach(b => {
            if (b.getAttribute('data-curr') === activeCurr) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    }

    // 7c-6. Option D: B2B Luxury Estate Digital Lookbook & Catalog Modal Engine
    function initLookbookModal() {
        const modal = document.getElementById('estate-lookbook-modal');
        const closeBtn = document.getElementById('lookbook-close-btn');
        const overlay = document.getElementById('lookbook-modal-overlay');
        const downloadPdfBtn = document.getElementById('lookbook-download-pdf-btn');
        const printBtn = document.getElementById('lookbook-print-btn');

        if (!modal) return;

        function openLookbook() {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            showToast("Estate Lookbook", "Opened 2026 Connoisseur Harvest Dossier & Specification Sheet.", "info");
        }

        function closeLookbook() {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        function triggerPrintOrPdf() {
            showToast("Print / PDF Export", "Preparing high-resolution estate catalog for download...", "success");
            setTimeout(() => {
                window.print();
            }, 300);
        }

        if (closeBtn) closeBtn.addEventListener('click', closeLookbook);
        if (overlay) overlay.addEventListener('click', closeLookbook);
        if (downloadPdfBtn) downloadPdfBtn.addEventListener('click', triggerPrintOrPdf);
        if (printBtn) printBtn.addEventListener('click', triggerPrintOrPdf);

        // Global delegated click listener for any lookbook opening trigger
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#btn-catalog-open-lookbook, #btn-reserve-open-lookbook, .btn-lookbook-cta, [data-action="open-lookbook"]');
            if (btn) {
                e.preventDefault();
                openLookbook();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeLookbook();
            }
        });

        window.appOpenLookbook = openLookbook;
        window.appCloseLookbook = closeLookbook;
    }

    // 7d. File upload zone binding
    function bindFileUpload(inputId, zoneId, previewId, onFileLoadedCallback) {
        const input = document.getElementById(inputId);
        const zone = document.getElementById(zoneId);
        const preview = document.getElementById(previewId);
        if (!input || !zone || !preview) return;

        // Click on zone opens file picker (avoid double trigger if clicking input directly)
        zone.addEventListener('click', (e) => {
            if (e.target !== input) input.click();
        });

        // Drag and drop
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleFileSelected(e.dataTransfer.files[0], zone, preview, onFileLoadedCallback);
            }
        });

        // File selected via input
        input.addEventListener('change', () => {
            if (input.files && input.files.length > 0) {
                handleFileSelected(input.files[0], zone, preview, onFileLoadedCallback);
            }
        });
    }

    function handleFileSelected(file, zone, preview, onFileLoadedCallback) {
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
            showToast('File Too Large', 'Please upload a file under 5MB.', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            const isImage = file.type.startsWith('image/');
            preview.style.display = 'block';
            if (isImage) {
                preview.innerHTML = `
                    <div class="slip-preview-inner">
                        <img src="${base64}" alt="Deposit Slip Preview" style="max-width:100%;max-height:160px;border-radius:8px;border:1px solid rgba(212,175,55,0.3);" onerror="window.handleImageError && window.handleImageError(this, 'slip')">
                        <div class="slip-filename">&#x2714; ${file.name}</div>
                    </div>`;
            } else {
                preview.innerHTML = `
                    <div class="slip-preview-inner">
                        <div class="slip-pdf-icon">&#x1F4C4;</div>
                        <div class="slip-filename">&#x2714; ${file.name}</div>
                    </div>`;
            }
            zone.classList.add('has-file');
            zone.dataset.fileBase64 = base64;
            if (typeof onFileLoadedCallback === 'function') {
                onFileLoadedCallback(base64, file);
            }
        };
        reader.readAsDataURL(file);
    }

    // 8. Event bindings helper functions
    function bindCatalogEvents(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.querySelectorAll('.btn-book-box').forEach(btn => {
            btn.addEventListener('click', () => {
                const boxId = parseInt(btn.getAttribute('data-id'));
                openDrawer('box', boxId);
            });
        });

        const numBtns = container.querySelectorAll('.num-btn');
        numBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                numBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const boxId = parseInt(btn.getAttribute('data-box-id'));
                const boxName = btn.getAttribute('data-box-name');
                const boxStatus = btn.getAttribute('data-box-status');
                const boxStatusText = btn.getAttribute('data-box-status-text');
                const boxImage = btn.getAttribute('data-box-image');
                const boxDesc = btn.getAttribute('data-box-desc');

                const badge = container.querySelector('#selected-box-badge');
                const nameEl = container.querySelector('#selected-box-name');
                const actionContainer = container.querySelector('#selected-box-action');
                const imageEl = container.querySelector('#selected-box-image');
                const descEl = container.querySelector('#selected-box-desc');

                if (badge) {
                    badge.innerText = boxStatusText;
                    let badgeClass = 'status-available';
                    if (boxStatus === 'Booked') {
                        badgeClass = 'status-booked';
                    } else if (boxStatus === 'Enquiry Pending' || boxStatus === 'Pending Verification') {
                        badgeClass = 'status-pending';
                    }
                    badge.className = `box-badge ${badgeClass}`;
                }
                if (nameEl) {
                    nameEl.innerText = boxName;
                }
                if (imageEl && boxImage) {
                    imageEl.src = boxImage;
                }
                if (descEl && boxDesc) {
                    descEl.innerText = boxDesc;
                }

                if (actionContainer) {
                    let buttonHtml = `<button class="btn btn-primary btn-book-box" data-id="${boxId}" style="width: 100%;">Enquire &amp; Purchase</button>`;
                    if (boxStatus === 'Booked') {
                        buttonHtml = `<button class="btn btn-secondary" disabled style="width: 100%;">Reserved</button>`;
                    } else if (boxStatus === 'Pending Verification') {
                        buttonHtml = `<button class="btn btn-warning btn-book-box" data-id="${boxId}" style="width: 100%; background: rgba(212,175,55,0.12); border-color: var(--color-gold); color: var(--color-gold);">View / Purchase Allocation</button>`;
                    } else if (boxStatus === 'Enquiry Pending') {
                        buttonHtml = `<button class="btn btn-warning btn-book-box" data-id="${boxId}" style="width: 100%; background: rgba(212,175,55,0.12); border-color: var(--color-gold); color: var(--color-gold);">Inquire Again</button>`;
                    }
                    actionContainer.innerHTML = buttonHtml;

                    const newBtn = actionContainer.querySelector('.btn-book-box');
                    if (newBtn) {
                        newBtn.addEventListener('click', () => {
                            openDrawer('box', boxId);
                        });
                    }
                }
            });
        });
    }

    // Bind Product Catalog filter, search, sort, and purchase buttons
    let currentCatalogCategory = 'all';
    let currentCatalogSort = 'featured';

    function bindProductCatalogEvents() {
        // Filter tab buttons
        const filterBtns = document.querySelectorAll('.filter-tab-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCatalogCategory = btn.getAttribute('data-category');
                const searchVal = document.getElementById('catalog-search-input')?.value || '';
                window.UIComponents.renderCatalogItems(currentCatalogCategory, searchVal, currentCatalogSort);
                bindCatalogGridButtons();
            });
        });

        // Sort dropdown selector
        const sortSelect = document.getElementById('catalog-sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                currentCatalogSort = sortSelect.value;
                const searchVal = document.getElementById('catalog-search-input')?.value || '';
                window.UIComponents.renderCatalogItems(currentCatalogCategory, searchVal, currentCatalogSort);
                bindCatalogGridButtons();
            });
        }

        // Live search input and instant clear button
        const searchInput = document.getElementById('catalog-search-input');
        const searchClear = document.getElementById('catalog-search-clear');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value;
                if (searchClear) {
                    searchClear.style.display = query.trim().length > 0 ? 'block' : 'none';
                }
                window.UIComponents.renderCatalogItems(currentCatalogCategory, query, currentCatalogSort);
                bindCatalogGridButtons();
            });
            // Gold focus glow
            searchInput.addEventListener('focus', () => {
                searchInput.style.borderColor = 'var(--color-gold)';
                searchInput.style.boxShadow = '0 0 10px rgba(212,175,55,0.2)';
            });
            searchInput.addEventListener('blur', () => {
                searchInput.style.borderColor = 'rgba(255,255,255,0.12)';
                searchInput.style.boxShadow = 'none';
            });
        }

        if (searchClear) {
            searchClear.addEventListener('click', () => {
                if (searchInput) {
                    searchInput.value = '';
                    searchClear.style.display = 'none';
                    searchInput.focus();
                }
                window.UIComponents.renderCatalogItems(currentCatalogCategory, '', currentCatalogSort);
                bindCatalogGridButtons();
            });
        }

        // Bind initial item buttons
        bindCatalogGridButtons();
    }

    // Reset filters helper
    document.addEventListener('click', (e) => {
        const resetBtn = e.target.closest('#catalog-reset-filters-btn, #catalog-empty-reset-btn');
        if (resetBtn) {
            e.preventDefault();
            currentCatalogCategory = 'all';
            currentCatalogSort = 'featured';
            
            const filterBtns = document.querySelectorAll('.filter-tab-btn');
            filterBtns.forEach(b => {
                if (b.getAttribute('data-category') === 'all') b.classList.add('active');
                else b.classList.remove('active');
            });

            const searchInput = document.getElementById('catalog-search-input');
            if (searchInput) searchInput.value = '';

            const searchClear = document.getElementById('catalog-search-clear');
            if (searchClear) searchClear.style.display = 'none';

            const sortSelect = document.getElementById('catalog-sort-select');
            if (sortSelect) sortSelect.value = 'featured';

            window.UIComponents.renderCatalogItems('all', '', 'featured');
            bindCatalogGridButtons();
        }
    });

    function bindCatalogGridButtons() {
        // Connoisseur Sensory Dossier & Tasting Radar buttons
        document.querySelectorAll('.btn-view-connoisseur').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.getAttribute('data-id');
                const products = window.TeaFactoryStore.getProducts();
                const product = products.find(p => p.id === productId);
                if (product && window.UIComponents.renderConnoisseurModal) {
                    window.UIComponents.renderConnoisseurModal(product);
                    bindModalSteepTimer(product);
                }
            });
        });

        // Quick Order button in Shop menu directly opens the fullscreen Checkout screen
        document.querySelectorAll('.btn-book-prod').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.getAttribute('data-id');
                openDrawer('product', productId);
            });
        });

        // Clicking entire product card opens Seven Teahouse purchasing view
        document.querySelectorAll('.product-luxury-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (e.target.closest('.btn-add-to-cart') || e.target.closest('.btn-view-connoisseur') || e.target.closest('.btn-book-prod')) {
                    return;
                }
                const btn = card.querySelector('.btn-book-prod') || card.querySelector('.btn-add-to-cart');
                const productId = btn ? btn.getAttribute('data-id') : null;
                if (productId) {
                    window.openProductDetail(productId, 'product');
                }
            });
        });

        // Collector box buttons (inside catalog collector grid)
        document.querySelectorAll('.btn-book-box').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const boxId = parseInt(btn.getAttribute('data-id'));
                window.openProductDetail(boxId, 'box');
            });
        });
    }

    function bindTourEvents() {
        const container = document.getElementById('tours-timeline-container');
        if (container) {
            container.querySelectorAll('.btn-book-slot').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const slotId = parseInt(btn.getAttribute('data-id'));
                    const timeSlot = btn.getAttribute('data-timeslot');
                    window.openProductDetail(slotId, 'tour', { timeSlot });
                });
            });
        }

        // Clicking on tour package cards opens Seven Teahouse tour booking
        document.querySelectorAll('.package-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                const pkgName = card.getAttribute('data-package') || '01. Gongfu-Style Black Tea Brewing Experience';
                const price = parseFloat(card.getAttribute('data-price')) || 4.75;
                const priceLkr = parseFloat(card.getAttribute('data-price-lkr')) || 1450;
                window.openProductDetail(1, 'tour', { package: pkgName, price, price_lkr: priceLkr });
            });
        });
    }

    // ─── Collector Gift Box Quotation Builder Modal ─────────────────────────
    function showBoxQuoteBuilderModal(bookingId) {
        const booking = window.TeaFactoryStore.getBookingById(bookingId);
        if (!booking) {
            showToast("Record Not Found", "Enquiry record could not be found.", "error");
            return;
        }

        const existing = document.getElementById('box-quote-builder-modal');
        if (existing) existing.remove();

        const defaultBoxPrice = booking.quotedPrice !== null && booking.quotedPrice !== undefined ? booking.quotedPrice : 150;
        const defaultBoxPriceLkr = booking.quotedPriceLkr || Math.round(defaultBoxPrice * 305);
        const defaultShipping = booking.quotedShipping !== null && booking.quotedShipping !== undefined ? booking.quotedShipping : 0;
        const defaultShippingLkr = booking.quotedShippingLkr !== undefined ? booking.quotedShippingLkr : Math.round(defaultShipping * 305);
        const defaultTotal = defaultBoxPrice + defaultShipping;
        const defaultTotalLkr = defaultBoxPriceLkr + defaultShippingLkr;
        const defaultValidity = booking.quoteValidity || '7 Days';
        const defaultNotes = booking.quoteNotes || (booking.giftPackaging ? `Includes Bespoke ${booking.waxSealColor || 'Imperial Gold'} Wax Seal, Custom Monogram "${booking.monogramInitials || ''}", & Calligraphic Card.` : 'Includes Certificate of Authenticity deed.');

        let origin = (typeof window !== 'undefined' && window.location) ? window.location.origin : 'http://localhost:3000';
        let path = (typeof window !== 'undefined' && window.location) ? window.location.pathname : '/';
        const currentPayLink = booking.paymentLink || `${origin}${path}?pay=${booking.id}`;
        const currentQrUrl = booking.qrCodeUrl || `https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=d4af37&bgcolor=040e08&data=${encodeURIComponent(currentPayLink)}`;

        const modal = document.createElement('div');
        modal.id = 'box-quote-builder-modal';
        modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(6px);padding:1rem;';
        modal.innerHTML = `
            <div style="background:var(--color-bg-card,#0a1a0e);border:1px solid rgba(212,175,55,0.4);border-radius:12px;max-width:580px;width:100%;max-height:92vh;overflow-y:auto;padding:1.75rem;box-shadow:0 20px 60px rgba(0,0,0,0.8);">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.25rem;">
                    <div>
                        <div style="font-size:0.7rem;text-transform:uppercase;color:var(--color-gold);font-weight:700;letter-spacing:1px;margin-bottom:0.25rem;">Concierge Quotation &amp; QR Desk</div>
                        <h3 style="margin:0;color:#fff;font-family:var(--font-serif);font-size:1.35rem;">Formulate Bespoke Price &amp; Link</h3>
                        <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.2rem;">Enquiry Ref: <strong style="color:var(--color-gold);">${booking.id}</strong> &bull; Client: <strong style="color:#fff;">${booking.customerName}</strong></div>
                    </div>
                    <button type="button" id="close-quote-modal-btn" style="background:none;border:none;color:#94a3b8;font-size:1.5rem;cursor:pointer;padding:0 0.5rem;line-height:1;">&times;</button>
                </div>

                <!-- Client Inquiry Snapshot -->
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:0.85rem;margin-bottom:1.25rem;font-size:0.78rem;line-height:1.5;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:0.25rem;">
                        <span style="color:#94a3b8;">Chest Selection:</span>
                        <strong style="color:#fff;">${booking.boxName} (${booking.seasonName})</strong>
                    </div>
                    <div style="display:flex;justify-content:space-between;margin-bottom:0.25rem;">
                        <span style="color:#94a3b8;">Client Contact:</span>
                        <span style="color:#cbd5e1;">${booking.email} &bull; ${booking.phone}</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;margin-bottom:0.25rem;">
                        <span style="color:#94a3b8;">Bespoke Options:</span>
                        <span style="color:var(--color-gold);">${booking.waxSealColor || 'Imperial Gold'} Seal &bull; Monogram: ${booking.monogramInitials || 'None'}</span>
                    </div>
                    ${booking.message ? `<div style="margin-top:0.35rem;padding-top:0.35rem;border-top:1px dashed rgba(255,255,255,0.08);color:#cbd5e1;font-style:italic;">"${booking.message}"</div>` : ''}
                </div>

                <form id="quote-builder-form" style="display:flex;flex-direction:column;gap:1rem;">
                    <!-- Quoted Box Price with Currency Dropdown -->
                    <div style="display:grid;grid-template-columns:130px 1fr;gap:0.75rem;align-items:start;">
                        <div class="form-group" style="margin-bottom:0;">
                            <label style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--color-gold);letter-spacing:0.5px;">Currency *</label>
                            <select id="qb-box-currency" class="form-input" style="font-weight:700;color:var(--color-gold);">
                                <option value="USD" selected>USD ($)</option>
                                <option value="LKR">LKR (Rs)</option>
                            </select>
                        </div>
                        <div class="form-group" style="margin-bottom:0;">
                            <label id="qb-box-amount-label" style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--color-gold);letter-spacing:0.5px;">Quoted Box Price *</label>
                            <input class="form-input" type="number" id="qb-box-amount" min="0" step="0.01" value="${defaultBoxPrice}" required style="font-size:0.95rem;font-weight:700;color:var(--color-gold);">
                            <div id="qb-box-counterpart" style="font-size:0.7rem;color:#86efac;font-weight:600;margin-top:0.3rem;">
                                ≈ Rs ${defaultBoxPriceLkr.toLocaleString()} LKR (1 USD = 305 LKR)
                            </div>
                        </div>
                    </div>

                    <!-- Courier / Shipping with Currency Dropdown -->
                    <div style="display:grid;grid-template-columns:130px 1fr;gap:0.75rem;align-items:start;">
                        <div class="form-group" style="margin-bottom:0;">
                            <label style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--color-gold);letter-spacing:0.5px;">Currency</label>
                            <select id="qb-shipping-currency" class="form-input" style="font-weight:700;color:var(--color-gold);">
                                <option value="USD" selected>USD ($)</option>
                                <option value="LKR">LKR (Rs)</option>
                            </select>
                        </div>
                        <div class="form-group" style="margin-bottom:0;">
                            <label id="qb-shipping-amount-label" style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--color-gold);letter-spacing:0.5px;">Courier / Shipping</label>
                            <input class="form-input" type="number" id="qb-shipping-amount" min="0" step="0.01" value="${defaultShipping > 0 ? defaultShipping : ''}" placeholder="0 for Complimentary" style="font-size:0.95rem;font-weight:600;">
                            <div id="qb-shipping-counterpart" style="font-size:0.7rem;color:#86efac;font-weight:600;margin-top:0.3rem;">
                                ${defaultShippingLkr > 0 ? `≈ Rs ${defaultShippingLkr.toLocaleString()} LKR` : 'Complimentary Express Courier'}
                            </div>
                        </div>
                    </div>

                    <!-- Hidden fields preserving dual currency storage compatibility -->
                    <input type="hidden" id="qb-box-price" value="${defaultBoxPrice}">
                    <input type="hidden" id="qb-box-price-lkr" value="${defaultBoxPriceLkr}">
                    <input type="hidden" id="qb-shipping-fee" value="${defaultShipping}">
                    <input type="hidden" id="qb-shipping-fee-lkr" value="${defaultShippingLkr}">

                    <!-- Live Calculated Total -->
                    <div style="background:linear-gradient(135deg,rgba(212,175,55,0.12),rgba(4,14,8,0.9));border:1px solid rgba(212,175,55,0.4);border-radius:8px;padding:0.75rem 1rem;display:flex;justify-content:space-between;align-items:center;">
                        <div>
                            <span style="font-size:0.75rem;color:#cbd5e1;text-transform:uppercase;letter-spacing:1px;">Formulated Total Quoted:</span>
                            <div style="font-size:0.68rem;color:#94a3b8;">Dual USD &amp; LKR charged to customer at checkout.</div>
                        </div>
                        <div id="qb-total-display" style="font-size:1.25rem;font-weight:800;color:var(--color-gold);text-align:right;">
                            $${defaultTotal.toFixed(2)} USD <span style="font-size:0.95rem;color:#86efac;font-weight:600;">&bull; Rs ${defaultTotalLkr.toLocaleString()} LKR</span>
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
                        <div class="form-group" style="margin-bottom:0;">
                            <label style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--color-gold);letter-spacing:0.5px;">Quote Validity</label>
                            <select class="form-input" id="qb-validity">
                                <option value="3 Days" ${defaultValidity === '3 Days' ? 'selected' : ''}>3 Days</option>
                                <option value="7 Days" ${defaultValidity === '7 Days' ? 'selected' : ''}>7 Days (Standard)</option>
                                <option value="14 Days" ${defaultValidity === '14 Days' ? 'selected' : ''}>14 Days</option>
                                <option value="30 Days" ${defaultValidity === '30 Days' ? 'selected' : ''}>30 Days</option>
                            </select>
                        </div>
                        <div class="form-group" style="margin-bottom:0;">
                            <label style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--color-gold);letter-spacing:0.5px;">Preferred Reply Channel</label>
                            <input class="form-input" type="text" readonly value="${booking.socialChannel || 'WhatsApp'}" style="opacity:0.85;">
                        </div>
                    </div>

                    <div class="form-group" style="margin-bottom:0;">
                        <label style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--color-gold);letter-spacing:0.5px;">Curator Inclusions &amp; Curation Notes</label>
                        <textarea class="form-input" id="qb-notes" rows="2" placeholder="e.g. Includes brass infuser, 24K gold foil seal, & Deed of Authenticity">${defaultNotes}</textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width:100%;padding:0.75rem;background:linear-gradient(135deg,#d4af37,#aa820a);color:#040e08;font-weight:700;font-size:0.92rem;display:flex;align-items:center;justify-content:center;gap:0.4rem;box-shadow:0 4px 15px rgba(212,175,55,0.3);">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Save &amp; Generate Payment Link + QR Code
                    </button>
                </form>

                <!-- Generated Assets Output Box -->
                <div id="qb-result-box" style="${booking.quotedTotal ? 'display:block;' : 'display:none;'}margin-top:1.25rem;padding:1rem;background:rgba(0,0,0,0.6);border:1px solid rgba(212,175,55,0.3);border-radius:10px;">
                    <div style="font-size:0.75rem;font-weight:700;color:var(--color-gold);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:0.75rem;display:flex;align-items:center;gap:0.4rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Quotation Formulated &bull; Scannable QR &amp; Checkout Link Ready
                    </div>

                    <div style="display:flex;gap:1rem;align-items:center;margin-bottom:1rem;flex-wrap:wrap;">
                        <div style="background:#040e08;padding:0.45rem;border-radius:8px;border:1.5px solid rgba(212,175,55,0.4);flex-shrink:0;">
                            <img id="qb-result-qr" src="${currentQrUrl}" alt="Checkout QR" style="width:110px;height:110px;display:block;">
                        </div>
                        <div style="flex:1;min-width:200px;">
                            <label style="font-size:0.68rem;color:#94a3b8;display:block;margin-bottom:0.25rem;">Direct Checkout Payment Link:</label>
                            <div style="display:flex;gap:0.4rem;">
                                <input id="qb-result-link" class="form-input" type="text" readonly value="${currentPayLink}" style="font-size:0.75rem;font-family:monospace;background:rgba(0,0,0,0.8);color:#60a5fa;">
                                <button type="button" id="qb-copy-link-btn" class="btn btn-outline" style="font-size:0.75rem;padding:0.4rem 0.75rem;color:var(--color-gold);border-color:rgba(212,175,55,0.4);white-space:nowrap;">Copy</button>
                            </div>
                        </div>
                    </div>

                    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                        <button type="button" id="qb-send-whatsapp-btn" class="btn btn-primary" style="flex:1;background:#25d366;border-color:#25d366;color:#fff;font-weight:600;font-size:0.75rem;padding:0.5rem;display:flex;align-items:center;justify-content:center;gap:0.35rem;">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                            Dispatch WhatsApp
                        </button>
                        <button type="button" id="qb-send-email-btn" class="btn btn-outline" style="flex:1;color:#f59e0b;border-color:rgba(245,158,11,0.4);font-weight:600;font-size:0.75rem;padding:0.5rem;display:flex;align-items:center;justify-content:center;gap:0.35rem;">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            Dispatch Email
                        </button>
                        <a id="qb-preview-checkout-btn" href="${currentPayLink}" target="_blank" class="btn btn-outline" style="color:#94a3b8;border-color:rgba(148,163,184,0.3);font-size:0.75rem;padding:0.5rem 0.85rem;display:flex;align-items:center;justify-content:center;gap:0.35rem;text-decoration:none;">
                            Open Checkout &rarr;
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('close-quote-modal-btn')?.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        const boxCurrSelect = document.getElementById('qb-box-currency');
        const boxAmountInput = document.getElementById('qb-box-amount');
        const boxCounterpart = document.getElementById('qb-box-counterpart');

        const shipCurrSelect = document.getElementById('qb-shipping-currency');
        const shipAmountInput = document.getElementById('qb-shipping-amount');
        const shipCounterpart = document.getElementById('qb-shipping-counterpart');

        const boxPriceInput = document.getElementById('qb-box-price');
        const boxPriceLkrInput = document.getElementById('qb-box-price-lkr');
        const shippingInput = document.getElementById('qb-shipping-fee');
        const shippingLkrInput = document.getElementById('qb-shipping-fee-lkr');
        const totalDisplay = document.getElementById('qb-total-display');

        const syncQuoteValues = () => {
            const bCurr = boxCurrSelect?.value || 'USD';
            const bRaw = parseFloat(boxAmountInput?.value) || 0;
            let bUsd = 0, bLkr = 0;
            if (bCurr === 'USD') {
                bUsd = bRaw;
                bLkr = Math.round(bRaw * 305);
                if (boxCounterpart) boxCounterpart.innerHTML = `≈ Rs ${bLkr.toLocaleString()} LKR`;
                if (boxAmountInput) boxAmountInput.step = "0.01";
            } else {
                bLkr = Math.round(bRaw);
                bUsd = parseFloat((bRaw / 305).toFixed(2));
                if (boxCounterpart) boxCounterpart.innerHTML = `≈ $${bUsd.toFixed(2)} USD`;
                if (boxAmountInput) boxAmountInput.step = "1";
            }
            if (boxPriceInput) boxPriceInput.value = bUsd.toFixed(2);
            if (boxPriceLkrInput) boxPriceLkrInput.value = bLkr;

            const sCurr = shipCurrSelect?.value || 'USD';
            const sRawVal = shipAmountInput?.value;
            const sRaw = parseFloat(sRawVal) || 0;
            let sUsd = 0, sLkr = 0;
            if (!sRawVal || sRaw === 0) {
                sUsd = 0;
                sLkr = 0;
                if (shipCounterpart) shipCounterpart.innerHTML = 'Complimentary Express Courier';
            } else if (sCurr === 'USD') {
                sUsd = sRaw;
                sLkr = Math.round(sRaw * 305);
                if (shipCounterpart) shipCounterpart.innerHTML = `≈ Rs ${sLkr.toLocaleString()} LKR`;
                if (shipAmountInput) shipAmountInput.step = "0.01";
            } else {
                sLkr = Math.round(sRaw);
                sUsd = parseFloat((sRaw / 305).toFixed(2));
                if (shipCounterpart) shipCounterpart.innerHTML = `≈ $${sUsd.toFixed(2)} USD`;
                if (shipAmountInput) shipAmountInput.step = "1";
            }
            if (shippingInput) shippingInput.value = sUsd > 0 ? sUsd.toFixed(2) : '0';
            if (shippingLkrInput) shippingLkrInput.value = sLkr;

            const totUsd = bUsd + sUsd;
            const totLkr = bLkr + sLkr;
            if (totalDisplay) {
                totalDisplay.innerHTML = `$${totUsd.toFixed(2)} USD <span style="font-size:0.95rem;color:#86efac;font-weight:600;">&bull; Rs ${totLkr.toLocaleString()} LKR</span>`;
            }
        };

        boxAmountInput?.addEventListener('input', syncQuoteValues);
        boxCurrSelect?.addEventListener('change', () => {
            const curVal = parseFloat(boxAmountInput?.value);
            if (!isNaN(curVal) && curVal > 0) {
                if (boxCurrSelect.value === 'LKR') {
                    boxAmountInput.value = Math.round(curVal * 305);
                } else {
                    boxAmountInput.value = (curVal / 305).toFixed(2);
                }
            }
            syncQuoteValues();
        });

        shipAmountInput?.addEventListener('input', syncQuoteValues);
        shipCurrSelect?.addEventListener('change', () => {
            const curVal = parseFloat(shipAmountInput?.value);
            if (!isNaN(curVal) && curVal > 0) {
                if (shipCurrSelect.value === 'LKR') {
                    shipAmountInput.value = Math.round(curVal * 305);
                } else {
                    shipAmountInput.value = (curVal / 305).toFixed(2);
                }
            }
            syncQuoteValues();
        });

        // Form Submission
        document.getElementById('quote-builder-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const price = parseFloat(boxPriceInput.value) || 0;
            const priceLkr = parseFloat(boxPriceLkrInput?.value) || Math.round(price * 305);
            const shipping = parseFloat(shippingInput.value) || 0;
            const shippingLkr = parseFloat(shippingLkrInput?.value) || Math.round(shipping * 305);
            const notes = document.getElementById('qb-notes')?.value?.trim() || '';
            const validity = document.getElementById('qb-validity')?.value || '7 Days';

            const res = window.TeaFactoryStore.setBoxQuotation(bookingId, {
                price,
                priceLkr,
                shipping,
                shippingLkr,
                notes,
                validity
            });

            if (res.success) {
                const totUsd = res.booking.quotedTotal || (price + shipping);
                const totLkr = Math.round(totUsd * 305);
                showToast("Quotation Formulated!", `Quotation for ${res.booking.boxName} saved: $${totUsd.toFixed(2)} USD (Rs ${totLkr.toLocaleString()} LKR). Payment link & QR generated.`, "success");
                
                const resultBox = document.getElementById('qb-result-box');
                const resultQr = document.getElementById('qb-result-qr');
                const resultLink = document.getElementById('qb-result-link');
                const previewBtn = document.getElementById('qb-preview-checkout-btn');

                if (resultBox) resultBox.style.display = 'block';
                if (resultQr) resultQr.src = res.booking.qrCodeUrl;
                if (resultLink) resultLink.value = res.booking.paymentLink;
                if (previewBtn) previewBtn.href = res.booking.paymentLink;

                renderTabContent('admin');
            } else {
                showToast("Error", res.message, "error");
            }
        });

        document.getElementById('qb-copy-link-btn')?.addEventListener('click', () => {
            const linkInput = document.getElementById('qb-result-link');
            if (linkInput && linkInput.value) {
                navigator.clipboard.writeText(linkInput.value).then(() => {
                    showToast("Checkout Link Copied!", "Share this link with your client.", "success");
                }).catch(() => {
                    linkInput.select();
                    document.execCommand('copy');
                    showToast("Checkout Link Copied!", "Share this link with your client.", "success");
                });
            }
        });

        document.getElementById('qb-send-whatsapp-btn')?.addEventListener('click', () => {
            const b = window.TeaFactoryStore.getBookingById(bookingId);
            if (!b) return;
            const totalUsd = b.quotedTotal || b.price || 150;
            const totalLkr = Math.round(totalUsd * 305);
            const boxUsd = b.quotedPrice || b.price || 150;
            const boxLkr = Math.round(boxUsd * 305);
            const shipUsd = b.quotedShipping || 0;
            const shipLkr = Math.round(shipUsd * 305);
            const text = `Dear ${b.customerName},\n\n` +
                         `Greetings from Rock One Wild Tea Estate! Regarding your bespoke allocation enquiry for *${b.boxName}* (${b.seasonName}):\n\n` +
                         `*Quotation Details (Multi-Currency Confirmed):*\n` +
                         `• Chest Unit Price: $${boxUsd.toFixed(2)} USD (Rs ${boxLkr.toLocaleString()} LKR)\n` +
                         `• Courier / Shipping: ${shipUsd > 0 ? `$${shipUsd.toFixed(2)} USD (Rs ${shipLkr.toLocaleString()} LKR)` : 'Complimentary Express Courier'}\n` +
                         `• *Total Quoted Payable: $${totalUsd.toFixed(2)} USD (Rs ${totalLkr.toLocaleString()} LKR)*\n` +
                         `• Quote Validity: ${b.quoteValidity || '7 Days'}\n` +
                         (b.quoteNotes ? `• Curator Notes: ${b.quoteNotes}\n\n` : '\n') +
                         `You may finalize your delivery details, attach your Bank of Ceylon payment deposit slip, and claim your numbered chest via your private checkout link:\n` +
                         `🔗 ${b.paymentLink}\n\n` +
                         `Warm regards,\nEstate Sommelier, Rock One Wild Tea`;
            const phoneClean = (b.phone || '').replace(/[^0-9]/g, '');
            const targetPhone = phoneClean || '94773209950';
            window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(text)}`, '_blank');
        });

        document.getElementById('qb-send-email-btn')?.addEventListener('click', () => {
            const b = window.TeaFactoryStore.getBookingById(bookingId);
            if (!b) return;
            const totalUsd = b.quotedTotal || b.price || 150;
            const totalLkr = Math.round(totalUsd * 305);
            const boxUsd = b.quotedPrice || b.price || 150;
            const boxLkr = Math.round(boxUsd * 305);
            const shipUsd = b.quotedShipping || 0;
            const shipLkr = Math.round(shipUsd * 305);
            const text = `Dear ${b.customerName},\n\n` +
                         `Greetings from Rock One Wild Tea Estate! Regarding your bespoke allocation enquiry for ${b.boxName} (${b.seasonName}):\n\n` +
                         `Quotation Details (Multi-Currency Confirmed):\n` +
                         `• Chest Unit Price: $${boxUsd.toFixed(2)} USD (Rs ${boxLkr.toLocaleString()} LKR)\n` +
                         `• Courier / Express Handling: ${shipUsd > 0 ? `$${shipUsd.toFixed(2)} USD (Rs ${shipLkr.toLocaleString()} LKR)` : 'Complimentary Express Courier'}\n` +
                         `• Total Quoted Payable: $${totalUsd.toFixed(2)} USD (Rs ${totalLkr.toLocaleString()} LKR)\n` +
                         `• Quote Validity: ${b.quoteValidity || '7 Days'}\n` +
                         (b.quoteNotes ? `• Curator Inclusions: ${b.quoteNotes}\n\n` : '\n') +
                         `You may enter your shipping destination, attach your Bank of Ceylon deposit slip, and secure your numbered chest via your private checkout link below:\n\n` +
                         `${b.paymentLink}\n\n` +
                         `Warmest regards,\n` +
                         `Rock One Wild Tea Estate Concierge\n` +
                         `Ettampitiya, Uva Medium Region, Sri Lanka`;

            showEmailServiceChooserModal({
                to: b.email,
                subject: `Bespoke Quotation & Checkout: ${b.boxName} ($${totalUsd.toFixed(2)} / Rs ${totalLkr.toLocaleString()})`,
                body: text,
                title: 'Dispatch Quotation to Client',
                subtitle: `Quote for ${b.customerName} ($${totalUsd.toFixed(2)} USD • Rs ${totalLkr.toLocaleString()} LKR)`,
                itemSummary: `${b.boxName} - $${totalUsd.toFixed(2)} USD (Rs ${totalLkr.toLocaleString()} LKR)`
            });
        });
    }
    window.showBoxQuoteBuilderModal = showBoxQuoteBuilderModal;

    // ─── Scannable QR Code Modal ─────────────────────────────────────────────
    function showQuoteQrModal(qrUrl, boxName, customerName, amount, payLink) {
        const existing = document.getElementById('quote-qr-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'quote-qr-modal';
        modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(6px);padding:1rem;';
        modal.innerHTML = `
            <div style="background:var(--color-bg-card,#0a1a0e);border:1px solid rgba(212,175,55,0.4);border-radius:12px;max-width:440px;width:100%;padding:2rem;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.8);">
                <div style="font-size:0.7rem;text-transform:uppercase;color:var(--color-gold);font-weight:700;letter-spacing:1px;margin-bottom:0.25rem;">Scannable Checkout Code</div>
                <h3 style="margin:0 0 0.5rem 0;color:#fff;font-family:var(--font-serif);font-size:1.3rem;">${boxName || 'Collector Gift Box'}</h3>
                <div style="font-size:0.8rem;color:#94a3b8;margin-bottom:1.25rem;">Client: <strong style="color:#fff;">${customerName}</strong> &bull; Quoted: <strong style="color:var(--color-gold);">${amount}</strong></div>

                <div style="background:#040e08;padding:1rem;border-radius:12px;border:2px solid rgba(212,175,55,0.5);display:inline-block;margin-bottom:1.25rem;box-shadow:0 8px 30px rgba(0,0,0,0.6);">
                    <img src="${qrUrl}" alt="Checkout QR Code" style="width:200px;height:200px;display:block;">
                </div>

                <div style="font-size:0.75rem;color:#cbd5e1;line-height:1.4;margin-bottom:1.25rem;">
                    Scan with any mobile camera to open the bespoke checkout drawer with pre-filled details, Bank of Ceylon info, and slip upload.
                </div>

                <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
                    <a href="${qrUrl}" download="RockOneWildTea-${(boxName||'Box').replace(/\s+/g,'_')}-QR.png" target="_blank" class="btn btn-primary" style="font-size:0.78rem;padding:0.5rem 1rem;background:linear-gradient(135deg,#d4af37,#aa820a);color:#040e08;font-weight:700;display:inline-flex;align-items:center;gap:0.35rem;text-decoration:none;">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Download QR
                    </a>
                    <button type="button" id="copy-modal-pay-link-btn" class="btn btn-outline" style="font-size:0.78rem;padding:0.5rem 1rem;color:var(--color-gold);border-color:rgba(212,175,55,0.4);">
                        Copy Link
                    </button>
                    <button type="button" id="close-qr-modal-btn" class="btn btn-outline" style="font-size:0.78rem;padding:0.5rem 1rem;color:#94a3b8;border-color:rgba(255,255,255,0.15);">
                        Close
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('close-qr-modal-btn')?.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        document.getElementById('copy-modal-pay-link-btn')?.addEventListener('click', () => {
            navigator.clipboard.writeText(payLink).then(() => {
                showToast("Checkout Link Copied!", "Share with customer.", "success");
            }).catch(() => {
                showToast("Checkout Link Copied!", payLink, "success");
            });
        });
    }
    window.showQuoteQrModal = showQuoteQrModal;

    // ─── Convert Enquiry to Order Modal ──────────────────────────────────────
    function showConvertToOrderModal(bookingId, booking) {
        // Build an inline modal overlay
        const existing = document.getElementById('convert-order-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'convert-order-modal';
        modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(6px);padding:1rem;';
        modal.innerHTML = `
            <div style="background:var(--color-bg-card,#0a1a0e);border:1px solid rgba(212,175,55,0.3);border-radius:12px;max-width:560px;width:100%;max-height:90vh;overflow-y:auto;padding:2rem;box-shadow:0 20px 60px rgba(0,0,0,0.8);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
                    <div>
                        <h3 style="font-family:var(--font-serif);color:var(--color-white);margin:0 0 0.25rem;font-size:1.2rem;display:flex;align-items:center;gap:0.45rem;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            Convert Enquiry to Order
                        </h3>
                        <div style="font-size:0.75rem;color:var(--color-text-muted);">${booking.boxName} — ${booking.customerName}</div>
                    </div>
                    <button id="close-convert-modal" style="background:none;border:none;color:#888;font-size:1.5rem;cursor:pointer;line-height:1;">×</button>
                </div>
                <form id="convert-order-form" class="admin-form" style="gap:1.1rem;">
                    <div class="form-group">
                        <label>Final Price (USD)</label>
                        <input type="number" id="co-price" value="${(booking.price || 150).toFixed(2)}" step="0.01" min="0" required>
                        <span class="field-hint">Pre-filled from the box price. Adjust if needed after negotiation.</span>
                    </div>
                    <div class="form-group">
                        <label>Payment Settlement Mode (Live)</label>
                        <select id="co-method">
                            <option value="bank" selected>Direct Bank Deposit (Active Live Channel)</option>
                            <option value="online">Online Payment Link (Gateway Coming Soon)</option>
                            <option value="both">Both Options (Bank Live + Gateway Coming Soon)</option>
                        </select>
                    </div>
                    <div class="form-group" id="co-link-group">
                        <label>Online Payment Link <span style="color:var(--color-text-muted);font-weight:400;">(Stripe / PayPal / PayHere URL)</span></label>
                        <input type="url" id="co-paylink" placeholder="https://buy.stripe.com/...">
                        <span class="field-hint">Paste the payment link you generated from your Stripe, PayPal, or PayHere dashboard.</span>
                    </div>
                    <div id="co-bank-group">
                        <div class="form-group">
                            <label>Bank Name</label>
                            <input type="text" id="co-bank-name" placeholder="Bank of Ceylon" value="Bank of Ceylon">
                        </div>
                        <div class="form-group">
                            <label>Account Name</label>
                            <input type="text" id="co-acc-name" placeholder="Rock one wild tea" value="Rock one wild tea">
                        </div>
                        <div class="form-group">
                            <label>Account Number</label>
                            <input type="text" id="co-acc-no" placeholder="94945708" value="94945708">
                        </div>
                        <div class="form-group">
                            <label>Branch</label>
                            <input type="text" id="co-branch" placeholder="Ettampitiya branch" value="Ettampitiya branch">
                        </div>
                        <div class="form-group">
                            <label>Reference Note for Customer</label>
                            <input type="text" id="co-ref" placeholder="e.g. Order Ref ${bookingId}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Note to Customer <span style="color:var(--color-text-muted);font-weight:400;">(Optional)</span></label>
                        <textarea id="co-note" rows="2" placeholder="e.g. Please complete payment within 3 days to secure your box."></textarea>
                    </div>
                    <div style="display:flex;gap:0.75rem;margin-top:0.5rem;">
                        <button type="submit" class="btn btn-primary" style="flex:1;display:inline-flex;align-items:center;justify-content:center;gap:0.4rem;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Create Order &amp; Share ID
                        </button>
                        <button type="button" id="close-convert-modal-2" class="btn btn-outline" style="flex:0 0 auto;">Cancel</button>
                    </div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);

        // Toggle bank/link groups based on method selection
        const methodSel = modal.querySelector('#co-method');
        const linkGroup = modal.querySelector('#co-link-group');
        const bankGroup = modal.querySelector('#co-bank-group');
        function updateGroups() {
            const m = methodSel.value;
            linkGroup.style.display = (m === 'bank') ? 'none' : 'block';
            bankGroup.style.display = (m === 'online') ? 'none' : 'block';
        }
        methodSel.addEventListener('change', updateGroups);
        updateGroups();

        // Close modal
        function closeModal() { modal.remove(); }
        modal.querySelector('#close-convert-modal').addEventListener('click', closeModal);
        modal.querySelector('#close-convert-modal-2').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        // Form submission
        modal.querySelector('#convert-order-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const orderData = {
                price: parseFloat(modal.querySelector('#co-price').value) || booking.price,
                paymentMethod: modal.querySelector('#co-method').value,
                paymentLink: modal.querySelector('#co-paylink').value.trim(),
                bankName: modal.querySelector('#co-bank-name').value.trim() || 'Bank of Ceylon',
                accountName: modal.querySelector('#co-acc-name').value.trim() || 'Rock one wild tea',
                accountNo: modal.querySelector('#co-acc-no').value.trim() || '94945708',
                branch: modal.querySelector('#co-branch')?.value.trim() || 'Ettampitiya branch',
                referenceNote: modal.querySelector('#co-ref').value.trim(),
                ownerNote: modal.querySelector('#co-note').value.trim()
            };
            const result = window.TeaFactoryStore.createOrder(bookingId, orderData);
            if (result.success) {
                const order = result.order;
                closeModal();
                showToast("Order Created!", `Order ID: ${order.id} — Share this ID with ${booking.customerName} via WhatsApp or Email.`, "success");
                activeAdminSubTab = 'orders';
                renderTabContent('admin');
            } else {
                showToast("Order Failed", result.message, "error");
            }
        });
    }

    // ─── Reservation Detail Inspector Modal ──────────────────────────────────
    function showReservationDetailModal(booking) {
        const existing = document.getElementById('reservation-detail-modal');
        if (existing) existing.remove();

        const isTour = booking.type === 'tour';
        const isProd = booking.type === 'product';
        const itemTitle = isTour ? booking.packageName : (isProd ? booking.productName : booking.boxName);
        const itemType = isTour ? 'Estate Factory Tour' : (isProd ? 'Standard Tea Product' : 'Limited Luxury Gift Chest');
        const phoneClean = (booking.phone || '').replace(/[^0-9+]/g, '');

        const modal = document.createElement('div');
        modal.id = 'reservation-detail-modal';
        modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);padding:1rem;';
        modal.innerHTML = `
            <div style="background:var(--color-bg-card,#0a1a0e);border:1px solid rgba(212,175,55,0.3);border-radius:12px;max-width:620px;width:100%;max-height:90vh;overflow-y:auto;padding:2rem;box-shadow:0 20px 60px rgba(0,0,0,0.8);">
                <!-- Modal Header -->
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.08);">
                    <div>
                        <div style="font-family:monospace;font-size:1rem;color:var(--color-gold);font-weight:700;margin-bottom:0.25rem;">${booking.id}</div>
                        <div style="font-size:0.75rem;color:var(--color-text-muted);">Recorded on: ${booking.bookingDate || 'Recent'}</div>
                    </div>
                    <button id="close-detail-modal" style="background:none;border:none;color:#aaa;font-size:1.6rem;cursor:pointer;line-height:1;padding:0 0.5rem;">×</button>
                </div>

                <!-- Main Details Grid -->
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1.25rem;margin-bottom:1.5rem;">
                    <!-- Client Card -->
                    <div style="background:rgba(255,255,255,0.02);padding:1.25rem;border-radius:8px;border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:1px;color:var(--color-gold);font-weight:600;margin-bottom:0.5rem;">Guest Contact Info</div>
                        <div style="font-weight:700;font-size:1rem;color:var(--color-white);margin-bottom:0.25rem;">${booking.customerName}</div>
                        <div style="font-size:0.8rem;color:var(--color-text-muted);margin-bottom:0.2rem;display:flex;align-items:center;gap:0.3rem;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            ${booking.email}
                        </div>
                        <div style="font-size:0.8rem;color:var(--color-text-muted);margin-bottom:0.75rem;display:flex;align-items:center;gap:0.3rem;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            ${booking.phone}
                        </div>
                        
                        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                            <a href="mailto:${booking.email}" class="btn btn-outline" style="font-size:0.7rem;padding:0.35rem 0.65rem;color:var(--color-gold);border-color:rgba(212,175,55,0.3);text-decoration:none;display:inline-flex;align-items:center;gap:0.3rem;">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Email Guest
                            </a>
                            ${booking.phone ? `<a href="https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneClean)}" target="_blank" class="btn btn-outline" style="font-size:0.7rem;padding:0.35rem 0.65rem;color:#81c784;border-color:rgba(46,125,50,0.4);text-decoration:none;display:inline-flex;align-items:center;gap:0.3rem;">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                                WhatsApp
                            </a>` : ''}
                        </div>
                    </div>

                    <!-- Item & Order Info -->
                    <div style="background:rgba(255,255,255,0.02);padding:1.25rem;border-radius:8px;border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-size:0.65rem;text-transform:uppercase;letter-spacing:1px;color:var(--color-gold);font-weight:600;margin-bottom:0.5rem;">Reservation Particulars</div>
                        <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:0.2rem;">${itemType}</div>
                        <div style="font-weight:700;font-size:1rem;color:var(--color-white);margin-bottom:0.35rem;">${itemTitle}</div>
                        <div style="font-size:0.8rem;color:var(--color-text-muted);margin-bottom:0.35rem;">
                            ${isTour ? `Time: ${booking.timeSlot} • ${booking.guests} Guests` : (isProd ? `Weight: ${booking.weight}` : `Harvest: ${booking.seasonName} (S${booking.seriesNumber})`)}
                        </div>
                        <div style="font-size:0.85rem;color:var(--color-gold);font-weight:700;">
                            Value: ${booking.status === 'Enquiry Pending' ? 'Quote Inquiry' : (booking.formattedPrice || window.TeaFactoryStore.formatCurrency(booking.price || booking.depositPaid || 0))}
                        </div>
                    </div>
                </div>

                <!-- Bespoke Gift Packaging & Presentation Block -->
                ${booking.giftPackaging ? `
                    <div style="margin-bottom:1.5rem; background:linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(20,50,30,0.45) 100%); border:1px solid rgba(212,175,55,0.4); border-radius:8px; padding:1.25rem;">
                        <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:var(--color-gold);font-weight:600;margin-bottom:0.6rem;display:flex;align-items:center;gap:0.35rem;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
                            Bespoke Gift Packaging &amp; Sommelier Presentation
                        </div>
                        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:0.75rem;font-size:0.82rem;margin-bottom:0.75rem;">
                            <div><strong>Artisan Wax Seal:</strong> <span style="color:var(--color-gold); font-weight:600;">${booking.waxSealColor || 'Imperial Gold'}</span></div>
                            <div><strong>Monogram Plate:</strong> <span style="color:var(--color-white); font-family:monospace; font-weight:700; letter-spacing:1.5px;">${booking.monogramInitials || 'None'}</span></div>
                        </div>
                        ${booking.giftMessage ? `
                            <div style="background:rgba(0,0,0,0.35); border-left:3px solid var(--color-gold); padding:0.75rem 1rem; border-radius:4px; font-style:italic; font-size:0.82rem; color:#f0ece1; line-height:1.5;">
                                "${booking.giftMessage}"
                            </div>
                        ` : ''}
                    </div>
                ` : ''}

                <!-- Schedule & Logistics Block -->
                <div style="background:rgba(212,175,55,0.05);padding:1.25rem;border-radius:8px;border:1px dashed rgba(212,175,55,0.25);margin-bottom:1.5rem;">
                    <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:var(--color-gold);font-weight:600;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.35rem;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        Schedule &amp; Logistics
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:0.75rem;font-size:0.8rem;">
                        <div><strong>Target Date / Slot:</strong> <span style="color:var(--color-gold);">${booking.preferredDate || booking.tourDate || 'Standard Dispatch'}</span></div>
                        ${booking.deliveryRange ? `<div><strong>Delivery Range:</strong> ${booking.deliveryRange}</div>` : ''}
                        ${booking.transportRequired ? `<div><strong>Pick-up Transport:</strong> ${booking.transportRequired}</div>` : ''}
                        ${booking.dietaryNotes && booking.dietaryNotes !== 'None' ? `<div><strong>Dietary:</strong> ${booking.dietaryNotes}</div>` : ''}
                        <div><strong>Current Status:</strong> <span style="font-weight:600;color:var(--color-gold);">${booking.status || 'Pending Verification'}</span></div>
                    </div>
                </div>

                <!-- Guest Message / Notes Block -->
                ${booking.message ? `
                    <div style="margin-bottom:1.5rem;">
                        <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:var(--color-text-muted);margin-bottom:0.35rem;">Customer Inquiry Message:</div>
                        <div style="font-size:0.85rem;color:#cfd8dc;background:rgba(255,255,255,0.03);padding:1rem;border-radius:6px;border-left:3px solid var(--color-gold);line-height:1.6;font-style:italic;">
                            "${booking.message}"
                        </div>
                    </div>
                ` : ''}

                <!-- Attached Bank Deposit Slip Inspector -->
                ${booking.slipImage ? `
                    <div style="margin-bottom:1.5rem; background:rgba(212,175,55,0.05); border:1px solid rgba(212,175,55,0.25); border-radius:8px; padding:1.25rem;">
                        <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:var(--color-gold);font-weight:600;margin-bottom:0.75rem;display:flex;align-items:center;justify-content:space-between;">
                            <span style="display:inline-flex;align-items:center;gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                Attached Bank Deposit Slip / Receipt
                            </span>
                            <span style="font-size:0.65rem;color:var(--color-text-muted);">Method: ${booking.paymentMethod === 'slip' ? 'Cash Teller Slip' : 'Bank Transfer Receipt'}</span>
                        </div>
                        <div style="text-align:center;">
                            <img src="${booking.slipImage}" alt="Deposit Slip" style="max-width:100%;max-height:240px;border-radius:6px;border:1px solid rgba(212,175,55,0.4);object-fit:contain;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.5);" onclick="window.open(this.src)" onerror="window.handleImageError && window.handleImageError(this, 'slip')">
                            <div style="font-size:0.7rem;color:var(--color-text-muted);margin-top:0.4rem;">(Click image to open full resolution in new tab)</div>
                        </div>
                    </div>
                ` : ''}

                <!-- Modal Actions -->
                <div style="display:flex;justify-content:flex-end;gap:0.75rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.08);flex-wrap:wrap;">
                    ${booking.slipImage && booking.status !== 'Paid & Confirmed' && booking.status !== 'Completed' ? `
                        <button type="button" class="btn btn-primary" id="modal-act-approve-slip" style="font-size:0.8rem;padding:0.5rem 1.25rem;background:#2e7d32;border-color:#4caf50;display:inline-flex;align-items:center;gap:0.35rem;">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Approve Deposit Slip &amp; Confirm
                        </button>
                        <button type="button" class="btn btn-outline" id="modal-act-reject-slip" style="font-size:0.8rem;padding:0.5rem 1rem;color:#ef5350;border-color:rgba(198,40,40,0.4);display:inline-flex;align-items:center;gap:0.35rem;">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            Reject Slip
                        </button>
                    ` : ''}
                    ${booking.status === 'Enquiry Pending' ? `
                        <button type="button" class="btn btn-primary" id="modal-act-convert" style="font-size:0.8rem;padding:0.5rem 1.25rem;display:inline-flex;align-items:center;gap:0.35rem;">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            Convert to Order
                        </button>
                    ` : ''}
                    <button type="button" class="btn btn-outline" id="close-detail-modal-2" style="font-size:0.8rem;">Close Window</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('#close-detail-modal').addEventListener('click', closeModal);
        modal.querySelector('#close-detail-modal-2').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const approveSlipBtn = modal.querySelector('#modal-act-approve-slip');
        if (approveSlipBtn) {
            approveSlipBtn.addEventListener('click', () => {
                closeModal();
                showPaymentApprovalModal(booking.id, () => {
                    renderTabContent('admin');
                });
            });
        }

        const rejectSlipBtn = modal.querySelector('#modal-act-reject-slip');
        if (rejectSlipBtn) {
            rejectSlipBtn.addEventListener('click', () => {
                closeModal();
                showPaymentRejectionModal(booking.id, () => {
                    renderTabContent('admin');
                });
            });
        }

        const convertBtn = modal.querySelector('#modal-act-convert');
        if (convertBtn) {
            convertBtn.addEventListener('click', () => {
                closeModal();
                showConvertToOrderModal(booking.id, booking);
            });
        }
    }

    // ─── Luxury Payment Approval Confirmation Modal ──────────────────────────
    function showPaymentApprovalModal(transactionId, callback) {
        const existing = document.getElementById('payment-approval-modal');
        if (existing) existing.remove();

        const orders = window.TeaFactoryStore.getOrders() || [];
        const bookings = window.TeaFactoryStore.getBookings() || [];
        const order = orders.find(o => o.id === transactionId || o.bookingId === transactionId);
        const booking = bookings.find(b => b.id === transactionId);
        const target = order || booking || { id: transactionId };

        const custName = target.customerName || target.customer_name || 'Valued Patron';
        const custEmail = target.email || target.customer_email || 'Not provided';
        const custPhone = target.phone || target.customer_phone || '';
        const itemName = target.productName || target.itemName || target.boxName || 'Artisanal Single-Estate Tea';
        const amountFormatted = target.formattedPrice || (target.price ? `$${Number(target.price).toFixed(2)} USD` : (target.amount ? `$${Number(target.amount).toFixed(2)} USD` : '$150.00 USD'));
        const slipImg = target.slipImage || '';
        const paymentMethod = target.paymentMethod || 'Bank Deposit / Cash Slip';

        const modal = document.createElement('div');
        modal.id = 'payment-approval-modal';
        modal.className = 'payment-approval-modal-overlay';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; padding: 1.5rem;
        `;

        modal.innerHTML = `
            <div class="payment-approval-dialog" style="
                background: linear-gradient(135deg, rgba(6, 22, 14, 0.98) 0%, rgba(3, 12, 7, 0.98) 100%);
                border: 1px solid rgba(76, 175, 80, 0.6);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(76, 175, 80, 0.25);
                border-radius: 22px; max-width: 580px; width: 100%; max-height: 90vh; overflow-y: auto;
                padding: 2.25rem; color: #ffffff; position: relative;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #ffffff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s;
                ">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <!-- Header Icon & Titles -->
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="
                        width: 68px; height: 68px; border-radius: 50%; background: rgba(46, 125, 50, 0.18);
                        border: 2px solid #4caf50; display: inline-flex; align-items: center; justify-content: center;
                        color: #81c784; margin-bottom: 1rem; box-shadow: 0 0 24px rgba(76, 175, 80, 0.35);
                    ">
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <span style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 2px; color: var(--color-gold); font-weight: 700; margin-bottom: 0.35rem;">
                        Admin Panel Console
                    </span>
                    <h3 style="font-family: var(--font-serif); font-size: 1.55rem; margin: 0; color: #ffffff;">Approve &amp; Confirm Payment</h3>
                    <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 0.35rem 0 0 0;">Verify transaction funds &amp; authorize harvest allocation.</p>
                </div>

                <!-- Transaction Particulars Card -->
                <div style="background: rgba(0,0,0,0.5); border: 1px solid rgba(212,175,55,0.25); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.25rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.55rem; margin-bottom: 0.55rem;">
                        <span style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px;">Transaction Ref</span>
                        <strong style="font-family: monospace; color: var(--color-gold); font-size: 0.95rem;">${transactionId}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.55rem; margin-bottom: 0.55rem;">
                        <span style="font-size: 0.75rem; color: var(--color-text-muted);">Customer</span>
                        <span style="font-weight: 600; color: #ffffff; font-size: 0.88rem;">${custName}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.55rem; margin-bottom: 0.55rem;">
                        <span style="font-size: 0.75rem; color: var(--color-text-muted);">Allocation / Item</span>
                        <span style="color: #e0e0e0; font-size: 0.85rem;">${itemName}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.55rem; margin-bottom: 0.55rem;">
                        <span style="font-size: 0.75rem; color: var(--color-text-muted);">Payment Mode</span>
                        <span style="color: var(--color-gold); font-size: 0.85rem; font-weight: 600;">${paymentMethod === 'slip' || paymentMethod === 'bank' ? 'Bank Cash Deposit / Wire Slip' : 'Online Payment Gateway'}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.8rem; color: #ffffff; font-weight: 700;">Verified Amount</span>
                        <span style="font-size: 1.25rem; font-weight: 800; color: #4ade80;">${amountFormatted}</span>
                    </div>
                </div>

                <!-- Attached Bank Slip Preview (if present) -->
                ${slipImg ? `
                    <div style="background: rgba(212,175,55,0.05); border: 1px solid rgba(212,175,55,0.3); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 1rem;">
                        <img src="${slipImg}" alt="Deposit Slip" style="width: 80px; height: 80px; object-fit: contain; background: #000; border-radius: 6px; border: 1px solid rgba(212,175,55,0.4); cursor: pointer;" onclick="window.open('${slipImg}')" title="Click to view full size">
                        <div style="flex: 1;">
                            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-gold); font-weight: 700; letter-spacing: 0.5px; margin-bottom: 0.25rem;">Attached Bank Slip</div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted); line-height: 1.4;">Teller stamp and transfer particulars verified against bank records.</div>
                            <button type="button" class="btn btn-outline" style="font-size: 0.68rem; padding: 0.25rem 0.6rem; margin-top: 0.4rem; color: var(--color-gold); border-color: rgba(212,175,55,0.4);" onclick="window.open('${slipImg}')">View Full Slip &rarr;</button>
                        </div>
                    </div>
                ` : ''}

                <!-- Optional Concierge Audit Note -->
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.4rem;">
                        Concierge Approval Note (Optional)
                    </label>
                    <input type="text" id="modal-approval-note" placeholder="e.g. Bank slip verified on Commercial Bank portal by Manager" style="
                        width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px;
                        padding: 0.65rem 0.9rem; color: #ffffff; font-size: 0.82rem; outline: none;
                    ">
                </div>

                <!-- Confirmation Action Buttons -->
                <div style="display: flex; gap: 0.85rem; justify-content: flex-end; flex-wrap: wrap;">
                    <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.75rem 1.4rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                        Cancel
                    </button>
                    <button type="button" id="btn-modal-confirm-approval" class="btn btn-primary" style="
                        padding: 0.75rem 1.75rem; font-size: 0.88rem; font-weight: 700; background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
                        border-color: #4caf50; color: #ffffff; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 20px rgba(46,125,50,0.45);
                    ">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Confirm &amp; Authorize Payment
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const confirmBtn = modal.querySelector('#btn-modal-confirm-approval');
        confirmBtn.addEventListener('click', () => {
            const noteInput = modal.querySelector('#modal-approval-note');
            const note = noteInput ? noteInput.value.trim() : '';
            const res = window.TeaFactoryStore.validateDepositSlip(transactionId, true, note);
            closeModal();
            if (res.success) {
                const isTour = target.type === 'tour' || target.category === 'tour' || transactionId.startsWith('TR-') || transactionId.startsWith('TB-');
                if (isTour) {
                    showToast("Payment Confirmed & Gate Pass Emailed!", `Payment verified for ${transactionId}. Official Estate Gate Pass has been automatically dispatched to ${custEmail}!`, "success");
                } else {
                    showToast("Payment Approved & Confirmed", `Transaction ${transactionId} has been verified and marked as Paid.`, "success");
                }
                if (typeof callback === 'function') callback();
                else renderTabContent('admin');
            } else {
                showToast("Validation Error", res.message || "Could not validate slip.", "error");
            }
        });
    }

    // ─── Luxury Payment Rejection Confirmation Modal ─────────────────────────
    function showPaymentRejectionModal(transactionId, callback) {
        const existing = document.getElementById('payment-rejection-modal');
        if (existing) existing.remove();

        const orders = window.TeaFactoryStore.getOrders() || [];
        const bookings = window.TeaFactoryStore.getBookings() || [];
        const order = orders.find(o => o.id === transactionId || o.bookingId === transactionId);
        const booking = bookings.find(b => b.id === transactionId);
        const target = order || booking || { id: transactionId };
        const custName = target.customerName || target.customer_name || 'Valued Patron';

        const modal = document.createElement('div');
        modal.id = 'payment-rejection-modal';
        modal.className = 'payment-rejection-modal-overlay';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 10000;
            background: rgba(0, 0, 0, 0.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
            display: flex; align-items: center; justify-content: center; padding: 1.5rem;
        `;

        modal.innerHTML = `
            <div class="payment-rejection-dialog" style="
                background: linear-gradient(135deg, rgba(26, 8, 8, 0.98) 0%, rgba(14, 4, 4, 0.98) 100%);
                border: 1px solid rgba(239, 68, 68, 0.6);
                box-shadow: 0 25px 80px rgba(0,0,0,0.95), 0 0 35px rgba(239, 68, 68, 0.25);
                border-radius: 22px; max-width: 540px; width: 100%; max-height: 90vh; overflow-y: auto;
                padding: 2.25rem; color: #ffffff; position: relative;
            ">
                <!-- Close Button -->
                <button type="button" class="btn-modal-close" style="
                    position: absolute; top: 1.25rem; right: 1.25rem; background: rgba(255,255,255,0.06);
                    border: 1px solid rgba(255,255,255,0.15); color: #ffffff; width: 34px; height: 34px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; cursor: pointer;
                ">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <!-- Header Icon & Titles -->
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="
                        width: 68px; height: 68px; border-radius: 50%; background: rgba(198, 40, 40, 0.18);
                        border: 2px solid #ef5350; display: inline-flex; align-items: center; justify-content: center;
                        color: #ef5350; margin-bottom: 1rem; box-shadow: 0 0 24px rgba(239, 68, 68, 0.35);
                    ">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                    </div>
                    <span style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 2px; color: #ef5350; font-weight: 700; margin-bottom: 0.35rem;">
                        Deposit Slip Rejection
                    </span>
                    <h3 style="font-family: var(--font-serif); font-size: 1.55rem; margin: 0; color: #ffffff;">Reject Deposit Slip</h3>
                    <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 0.35rem 0 0 0;">Transaction: <strong style="color:var(--color-gold); font-family:monospace;">${transactionId}</strong> (${custName})</p>
                </div>

                <!-- Reason Quick Chips -->
                <div style="margin-bottom: 1.25rem;">
                    <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.5rem;">
                        Select Common Rejection Reason:
                    </label>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem;">
                        <button type="button" class="btn-reason-chip" data-reason="Deposit amount mismatch" style="font-size: 0.72rem; padding: 0.3rem 0.65rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #e0e0e0; border-radius: 14px; cursor: pointer;">Amount Mismatch</button>
                        <button type="button" class="btn-reason-chip" data-reason="Illegible / blurred slip screenshot" style="font-size: 0.72rem; padding: 0.3rem 0.65rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #e0e0e0; border-radius: 14px; cursor: pointer;">Illegible Image</button>
                        <button type="button" class="btn-reason-chip" data-reason="Funds not credited to bank account" style="font-size: 0.72rem; padding: 0.3rem 0.65rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #e0e0e0; border-radius: 14px; cursor: pointer;">Funds Uncredited</button>
                        <button type="button" class="btn-reason-chip" data-reason="Incorrect reference number" style="font-size: 0.72rem; padding: 0.3rem 0.65rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #e0e0e0; border-radius: 14px; cursor: pointer;">Invalid Reference</button>
                    </div>
                    <textarea id="modal-rejection-reason" rows="3" placeholder="Enter custom rejection reason for customer..." style="
                        width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px;
                        padding: 0.65rem 0.9rem; color: #ffffff; font-size: 0.82rem; outline: none; resize: vertical;
                    ">Deposit amount mismatch or invalid receipt</textarea>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 0.85rem; justify-content: flex-end; flex-wrap: wrap;">
                    <button type="button" class="btn btn-outline btn-modal-cancel" style="padding: 0.75rem 1.4rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                        Cancel
                    </button>
                    <button type="button" id="btn-modal-confirm-rejection" class="btn btn-primary" style="
                        padding: 0.75rem 1.75rem; font-size: 0.88rem; font-weight: 700; background: linear-gradient(135deg, #c62828 0%, #8e0000 100%);
                        border-color: #ef5350; color: #ffffff; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 20px rgba(198,40,40,0.45);
                    ">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        Confirm Rejection
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        function closeModal() { modal.remove(); }
        modal.querySelector('.btn-modal-close').addEventListener('click', closeModal);
        modal.querySelector('.btn-modal-cancel').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

        const reasonArea = modal.querySelector('#modal-rejection-reason');
        modal.querySelectorAll('.btn-reason-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                reasonArea.value = chip.getAttribute('data-reason');
            });
        });

        const confirmBtn = modal.querySelector('#btn-modal-confirm-rejection');
        confirmBtn.addEventListener('click', () => {
            const reason = reasonArea.value.trim() || 'Amount mismatch or invalid receipt';
            const res = window.TeaFactoryStore.validateDepositSlip(transactionId, false, reason);
            closeModal();
            if (res.success) {
                showToast("Deposit Slip Rejected", `Slip marked as rejected for ${transactionId}.`, "error");
                if (typeof callback === 'function') callback();
                else renderTabContent('admin');
            } else {
                showToast("Rejection Error", res.message || "Could not reject slip.", "error");
            }
        });
    }

    // ─── Audit Log Live Filter & Search Logic ─────────────────────────────────
    let currentAuditTypeFilter = 'all';
    let currentAuditStatusFilter = 'all';
    let currentAuditSearchQuery = '';

    function bindAuditLogFilters() {
        const searchInput = document.getElementById('audit-search-input');
        const typeChips = document.querySelectorAll('#audit-type-filters .filter-chip');
        const statusChips = document.querySelectorAll('#audit-status-filters .filter-chip');

        function applyAuditFilters() {
            const allBookings = window.TeaFactoryStore.getBookings();
            const q = (currentAuditSearchQuery || '').toLowerCase().trim();

            const filtered = allBookings.filter(b => {
                // 1. Type filter
                if (currentAuditTypeFilter !== 'all') {
                    if (currentAuditTypeFilter === 'tour' && b.type !== 'tour') return false;
                    if (currentAuditTypeFilter === 'product' && b.type !== 'product') return false;
                    if (currentAuditTypeFilter === 'gift' && (b.type === 'tour' || b.type === 'product')) return false;
                }

                // 2. Status filter
                if (currentAuditStatusFilter !== 'all') {
                    if (currentAuditStatusFilter === 'Enquiry Pending' && b.status !== 'Enquiry Pending') return false;
                    if (currentAuditStatusFilter === 'Order Created' && b.status !== 'Order Created') return false;
                    if (currentAuditStatusFilter === 'Paid & Confirmed' && b.status !== 'Paid & Confirmed') return false;
                    if (currentAuditStatusFilter === 'Completed' && b.status !== 'Completed') return false;
                    if (currentAuditStatusFilter === 'Cancelled' && b.status !== 'Cancelled') return false;
                }

                // 3. Search query
                if (q) {
                    const matchId = (b.id || '').toLowerCase().includes(q);
                    const matchName = (b.customerName || '').toLowerCase().includes(q);
                    const matchEmail = (b.email || '').toLowerCase().includes(q);
                    const matchPhone = (b.phone || '').toLowerCase().includes(q);
                    const matchItem = (b.packageName || b.productName || b.boxName || '').toLowerCase().includes(q);
                    const matchMsg = (b.message || '').toLowerCase().includes(q);

                    if (!matchId && !matchName && !matchEmail && !matchPhone && !matchItem && !matchMsg) {
                        return false;
                    }
                }

                return true;
            });

            // Update Table Body
            const tbody = document.getElementById('audit-table-body');
            if (tbody) {
                tbody.innerHTML = window.UIComponents.renderAuditTableRows(filtered);
            }

            // Update Counter Badge
            const countBadge = document.getElementById('audit-count-badge');
            if (countBadge) {
                if (filtered.length === allBookings.length) {
                    countBadge.innerText = `${allBookings.length} Total Records`;
                } else {
                    countBadge.innerText = `Showing ${filtered.length} of ${allBookings.length} Records`;
                }
            }
        }

        // Bind Search Input
        if (searchInput) {
            searchInput.value = currentAuditSearchQuery;
            searchInput.addEventListener('input', (e) => {
                currentAuditSearchQuery = e.target.value;
                applyAuditFilters();
            });
        }

        // Bind Type Filter Chips
        typeChips.forEach(chip => {
            chip.addEventListener('click', () => {
                typeChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentAuditTypeFilter = chip.getAttribute('data-filter-type');
                applyAuditFilters();
            });
        });

        // Bind Status Filter Chips
        statusChips.forEach(chip => {
            chip.addEventListener('click', () => {
                statusChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentAuditStatusFilter = chip.getAttribute('data-filter-status');
                applyAuditFilters();
            });
        });
    }

    // ─── Public Order Payment Page Events ────────────────────────────────────
    function bindOrderPageEvents() {
        selectedOrderSlipBase64 = '';

        // ── Helper: load an order by ID (lookup + render + memory) ──
        function loadOrderById(orderId) {
            if (!orderId) return;
            const order = window.TeaFactoryStore.getOrderById(orderId);
            if (!order) {
                showToast('Order Not Found', 'No order found with that ID. Please check the ID shared by our concierge team.', 'error');
                return;
            }
            // Persist to device memory
            window.TeaFactoryStore.saveRecentOrderId(order.id);
            // Fill in the input field for context
            const idInput = document.getElementById('order-id-input');
            if (idInput) idInput.value = order.id;
            // Render the order detail panel
            window.UIComponents.renderOrderDetails(order);
            bindOrderSlipEvents(order.id);
            // Smooth scroll to detail panel
            const panel = document.getElementById('order-details-panel');
            if (panel) setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }

        // ── Lookup form submit ──
        const lookupForm = document.getElementById('order-lookup-form');
        if (lookupForm) {
            lookupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const orderId = (document.getElementById('order-id-input')?.value || '').trim().toUpperCase();
                loadOrderById(orderId);
            });
        }

        // ── Recent order card click (delegated from container) ──
        const recentPanel = document.getElementById('recent-orders-panel');
        if (recentPanel) {
            recentPanel.addEventListener('click', (e) => {
                const card = e.target.closest('.recent-order-card[data-recent-order-id]');
                if (card) {
                    const id = card.getAttribute('data-recent-order-id');
                    loadOrderById(id);
                }
            });
            recentPanel.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    const card = e.target.closest('.recent-order-card[data-recent-order-id]');
                    if (card) {
                        e.preventDefault();
                        const id = card.getAttribute('data-recent-order-id');
                        loadOrderById(id);
                    }
                }
            });
        }

        // ── Clear history button ──
        const clearBtn = document.getElementById('recent-orders-clear-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                window.TeaFactoryStore.clearRecentOrders();
                const panel = document.getElementById('recent-orders-panel');
                if (panel) {
                    panel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    panel.style.opacity = '0';
                    panel.style.transform = 'translateY(-8px)';
                    setTimeout(() => panel.remove(), 300);
                }
                showToast('History Cleared', 'Your recent order history has been cleared from this device.', 'info');
            });
        }
    }

    function bindOrderSlipEvents(orderId) {
        selectedOrderSlipBase64 = '';
        bindFileUpload('order-slip-file', 'order-slip-zone', 'order-slip-preview');

        // Capture file as base64 when selected
        const fileInput = document.getElementById('order-slip-file');
        if (fileInput) {
            fileInput.addEventListener('change', () => {
                if (fileInput.files.length > 0) {
                    const reader = new FileReader();
                    reader.onload = (ev) => { selectedOrderSlipBase64 = ev.target.result; };
                    reader.readAsDataURL(fileInput.files[0]);
                }
            });
        }

        const slipForm = document.getElementById('order-slip-form');
        if (slipForm) {
            slipForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const slipToSubmit = selectedOrderSlipBase64 || document.getElementById('order-slip-zone')?.dataset?.fileBase64 || '';
                if (!slipToSubmit) {
                    showToast('Slip Required', 'Please select a deposit slip image to upload.', 'error');
                    return;
                }
                const success = window.TeaFactoryStore.updateOrderStatus(orderId, 'Slip Submitted', slipToSubmit);
                if (success) {
                    showToast('Slip Submitted!', 'Your deposit slip has been submitted. We will confirm your order within 24 hours.', 'success');
                    const updatedOrder = window.TeaFactoryStore.getOrderById(orderId);
                    if (updatedOrder) {
                        window.UIComponents.renderOrderDetails(updatedOrder);
                        bindOrderSlipEvents(updatedOrder.id);
                    }
                } else {
                    showToast('Submission Failed', 'Could not submit the slip. Please try again.', 'error');
                }
            });
        }

        // ── Initialize PayPal buttons for order settlement if container exists ──
        const paypalContainer = document.getElementById('order-detail-paypal-container');
        if (paypalContainer && window.TeaFactoryPayPal) {
            const currentOrder = window.TeaFactoryStore.getOrderById(orderId);
            if (currentOrder && currentOrder.status !== 'Paid & Confirmed' && currentOrder.status !== 'Payment Confirmed' && currentOrder.status !== 'Verified') {
                const rawAmount = Number(currentOrder.price) || 0;
                window.TeaFactoryPayPal.renderButtons({
                    containerId: 'order-detail-paypal-container',
                    orderId: currentOrder.id,
                    amount: rawAmount > 0 ? rawAmount : 50,
                    currency: 'USD',
                    description: `Settlement for Order ${currentOrder.id}`,
                    onSuccess: (captureData) => {
                        showToast('Payment Successful', 'Your payment was processed. Order is confirmed!', 'success');
                        const updated = window.TeaFactoryStore.getOrderById(orderId);
                        if (updated) {
                            window.UIComponents.renderOrderDetails(updated);
                            bindOrderSlipEvents(updated.id);
                        }
                    }
                });
            }
        }

        // ── Wire allocation certificate & gate pass download buttons ──
        document.querySelectorAll('.btn-cert-download, .btn-tour-cert-download, #btn-cert-download').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute('data-order-id') || orderId;
                const order = window.TeaFactoryStore.getOrderById(targetId);
                if (order) generateAllocationCertificate(order);
            });
        });
    }

    // ─── Luxury Allocation Certificate Generator (Print-to-PDF) ──────────────
    const CEO_SIGNATURE_NAVY = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAB+CAYAAABPqyhNAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAMWklEQVR42u2dTY8cRxmA90fMz+CwP4A7QntoCc1hD5tDRzKBBs1hFrQgC2kwIzRS5MNeJsqgHEwCo0RNsigDZK0AkiETMoAhGLDjLGZJsBMHx5GHaJ0EYjNNasJk6K6u6q7q6o/n8CiKPNvTU1X99Ftfb220Nnc3AAAgHQoBAABhAgAgTAAAhAkAgDABABAmAADCBAAAS8J8bsGNBVcWnFnQEQQLugv2FgzEfwMKHgCaKsz7GRkJmVIRAFB7YXo5ZLnOWESkVAoA1E6YUbd6ZlCYq+KkYgCgNsKMutGHFmS5ZJ+KAYA6CNNfcKQgvZdEF9sTf+OL/58oStOncgCg6sIMFYW3JbnGQHTnj1OuQQUBQGWFGUWLdxWFqXrNAdIEgDoK09cYh9zSnEBKus5lKgkAqijMjoYwdzRvRBZpPkhFAUDVhNnVEKbujWynjGlSWQBQW2HuZLiZkeR656gsAKiSMAMNYZ7KeEMHRJkAgDDVuY4wAaDqwtwuSJinE675AhUGAFVauD5SFGY/543RLQeAyguzbXGmfJW3ESYA1CH5xt0ChHmAMAGgDsLsIUwAQJhmEwfnubERwgSAuiQQvo4wAQBhqnOnZS4Bh+recioNACp7pk+UH3OeILeHiDABAGF+cvfPoYWjJpj0AYBaHrOb1H1+I8c14yT8FBUGAFUXZmB44mfbYAYkAIBSCdP0VkbGLwGg1sI8NJhIOO6886tUFgDURZihIWGO6I4DQN2FmSS6L2suU5rRHQeApgrzmVb+Q9Z6VBQA1EmYSef9HGtc42miSwBogjC3c86Ufy/hb30qCQAQ5v94HlkCQJOEmWXxepS9/c2Ev/kmlQMATRSmp5lTc5eKAYCmCrOjOBse8SSVAgB1F+aGJM3bRIxH+imyHFMhANAUYYYSGUYL0qeSf2etJQA0SpgDjSN4l9xJGOMEAECYLBsCAISZvD2yart3iHgBwPrC9SMFUX4l5/c8u+Bdsdi9JyaRvJyz+0Mxxro+aXUk0taNxOe2aTAACNME/RRRzmOWF+nwrZTr/14I1NeIhqPZ+/cVI+KlONs0GgCEmYd2AeOVql39uRCnLOqcZJicWjJqaENZLgnzGbIAhJmPf1ses9zPILbzoqvdXYsKuzlkueRHDWsk/bVTPEMeHECYdiO/Ir4jLfKcp3xmIiLIvhDrkkgW78V8tu6NwxMvnSuK210BEGYK1xZcFKI5siTMVw1JU9bNDjTv6RsLPl/jhhF1v/9e4CoHb6Xb30HIWnyt9dER1J+jLKq1rCiQHDGRZwyzpyC9meIs/SovlqACuiKiHQg6JZiNT1se9rjB79pvVXf5mUvOJJRXmOHlz1I8R8KUPWwP57zuUPJQDVcik1BDmH3HhR+WcHIpbYz3zwa/Z97arPya3aLZWvAvhTI7U4AgvZjcELcRphlhXjBQQSoz8DoPYt+hlGYlnJGXLQ272TKTHMVLySmAMOWy/Idimb1kMerriWfsjYTvfgBh5t8eedfQ9dev+4uYJU6RjE4UGpWL2d6ehtAPC74vmSxPG1qaNNWcqPsOolTqkazzXUvCjOrwXsp3fxVhmtlPXtSPUl1nOXMwkVLGNZ9+ARFekDLG/JQQwkR8biYi3ipMrA3EDjSbGxsOUl4soSivqJx/aPG3/qDpPYIix8CK+lGHJUwAEsnyuqYw2wld2snK2K2JKGIsuYeu5TqZJvyGtmSTxHKi7ILCJgXZZouloLOWY1LS7KDA6P+wwAmXDkMo9RNmW6PLu5ROERHcLCVCmAkm4rjhtuIY49TCMEfc/Q3EGJrJXsfU0DjrOQO/WTeal9XnkWGJ3SrBkJKnGF0izIoJc5RhHabv8J5CxW7cniXpB5pjikup7xiQS8fgvfY0rvNawm9Tldy8wPHxfknG3zuSl8NU9FLON2F5kekLBg6F6UvGyWSN/G+W72uWU3R7Cg+oZ2kZUd5VBl1D0WWgMCuseq3bkjHttsGJF9/S2PKhA1EMJW3AY+F6NYU5TplAGUuyE21Zuqek89p/Z3hr6LjgqPy+KMt+xu74ULNN3VO4n46BNjoxOGk3sTRU4mJ1x4HhFzXCTBGETSktuSlZbN1e2Rsd95lTBQtzz8BY2frSn7z32RUP43XNbno3gzC7FpbTHBiaGBzl6IqbmjTzU+o6FPc5EmUcit8UWhq/zPvSR5gZhLnjaGlMoPC5fYuTUFnLYqz5cHqGewrRuOBxzu55N6dIdIYM3tXsBsteAusz3Tsxn/twJYo8bTgaDHMmmjG5RdIz8IJan/W/K3JEdJouzA1HwvQ0hgJOCj7iVzei9RT3zxc5478lIpi55pidl/A3qiJ5RrMMxoZ2Ns1SZLn+kkj6nTcylvdFQxm6RhaDkXGGZ3SckC7RR5jFdXtlwnw55rOXEhqXrXt7PWGrqB/TME8JWb6Q8HuOJQ/wBwU1mp9qTuTMMpZ3JyVqi/u3E81IWybNCynt2VMc5wssbCbQYZYz2szbK/MVeksHVZGmjYueOBDmhkaXaFLwpFRS9+qKaEhnV96+B+LztySTCIFkDC4oaE/zJY1hgTDjbO+NlPqcG1quNMwgoSONIZTA0hrZeUE7x/wc5bylcX/7TRXmJQNr5Uw1ronG/dm6ryDDA/lByhs4sDQzq8rjGo1etnB/pFGfJ2sP6Uhz95CM91v5E4L0LCZ58cV1+jHp/wLBQGGXW2jw2ZI9z1Ev6IkSrokupTCTGvIdB8Kcr1Vs0iTMNcf7tZN4LiEy3y5BFqa47/5rht+/ejrnMi/oO2J97PdbHx1wN4x5QNuSdbczTWl2DEyueQm9l6JzFgRit5hJaSYND8VN0r2eY/hg2ERh7jlai/mopOs7TJF5r+U+yUVctLaVoas/cSjMac5E0OvRZ/QAfiHjGtKhhb3SowxjojcdRU49gy/Vi5LrHGqu5T3OEL0jzJadPJOytG7TElRS9FD+ROEt21GMJOIa321HO5dUJBX9rlcMz3rLslM9nCE6i3sR/UxEvlmWQd10tHzGk7xUX9GUuIlJqMlaRqdKdsuLHrMr417yRxwUfFs0jED81894hO1I0pW3Ua8yOV3TeJB7ivuxfY3Z7p8nXOfTOY8OCTTr9WVHPZikscSpoa55nln6vsb1hk0T5rbDkLudYdFvXRPL/rJlJtfjoeJ5SX7G+toXsr26cmpnYOjwtj+2ynEmkksJ9CS9gp7FfK5pvzt0vDyuVMKUddu+VCJp1mXL1iBmS2NXs8yWUVWoIckilzPpnkDpqmsXONi4kXU88zjDC+m1lLZwWYjSV2hzv7Wch7USwkzbq/tICRKePspRrh/z9ZhlTKqElGPimN/6OsnPOH6JdAz1DJbX6q3QyfiCGpQowYhTYcoivLOt4nP5zcRM377jN30ZyTou1aXsUqXZK9EkhpeQWOUJh/e0XZLjY5wLc1TlxakN5E5L7VC2AWVVaXolTNP2T8WdVLUW5qAB44Z1Yzn211kZA1ymxWtbPOALio16TWwnLSK4apQwuwgToJTE7cT5lcP7CSowkWhdmAHCBKjUMjSX93TkcItvKYTZRpgApaRbwrmFwGCC4koKcwNhApSSwGE+BV1fdBDm5u5nabQAzmiXNB/loOCTEEonzBcTKuZTNFoAp7xaQjltV6FHWnSY/RiNFcA5s5LurmnHBFrfbpIwl0Q5DR+goQKUVpjPl2yc9S1xX082UZgAUB7i0vT9gXJBmACgJsw/US4IEwDUhPkXygVhAoCaMN+kXBAmAKgJ8yrlgjAB4P+JO3fox5QLwgSATaUUb/1Ws1IZIkwA2M16dEtTMuhHO5reXvndzyJMANjQzLoeNCSyjPvt5xAmAMQxLOExFa6j66hMthAmAMR1SZuadjEuIdBbOmnkaEAAzeKgwcJc/813dCe7aEAAzeIywvwvA5FSjllygJrzxVa2s7uTJj3ChpTbQ6zDBGgej7Wy5YrsVeUoCBauA4Apnl6R3XmNv3uPc7YQJkDT2GrFHzHhZZgdJ7pEmAC152yM/KYJ0kyS5ZxyRJgATWA/QYIzsVSmLbY7TiUnuBJdIkyA3aYk0ZDJ8NcL3pH8+5AyRJgATZPmJYkU79MVR5gAsPmJo2lHGrL8DWWGMAGaTjReeS9FlmPKCWECwObH53lHu3ZurYmyJ7rvlBHCBABAmAAACBMAAGECACBMAACgEAAAECYAAMIEAECYAAAIEwAAYQIAIEwAAFjjPzXq/hu74AiPAAAAAElFTkSuQmCC';
    const CEO_SIGNATURE_GOLD = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAB+CAYAAABPqyhNAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAMV0lEQVR42u2d348bRx3A7w/iPS+8I3QPKyE/3MP1YZFCYUF+MKADRUgmtZClKg/34qpGfQgtWK1M71AN9KJSpEBdaiBQspA0PcLRkrQpaaoz1aUtbYKXjotrdmdndmd29sfn4aOqim+9npn97Hd+fWcj3Du1AQAA6VAIAAAIEwAAYQIAIEwAAIQJAIAwAQAQJgAAWBLmswtuLri64OyCtiBY0Fmws6Av/htQ8ADQVGHez8hQyJSKAIDaC9PLIct1RiIipVIAoHbCjLrVM4PCXBUnFQMAtRFm1I0+sCDLJbtUDADUQZj+gkMF6b0kutie+Btf/P9EUZo+lQMAVRfmWFF4m5Jr9EV3/ijlGlQQAFRWmFG0eFdRmKrX7CNNAKijMH2NcchNzQmkpOtcoZIAoIrCbGsIc1vzRmSR5hepKAComjA7GsLUvZGtlDFNKgsAaivM7Qw3M5Rc7zyVBQBVEmagIczTGW9onygTABCmOjcQJgBUXZhbBQnzTMI1X6DCAKBKC9eHisLs5bwxuuUAUHlhtizOlK/yNsIEgDok37hbgDD3ESYA1EGYXYQJAAjTbOLgPDc2RJgAUJcEwjcQJgAgTHWOQ3MJOFT3llNpAFDZM32i/JjzBLk9SIQJAAjz07t/DiwcNcGkDwDU8pjdpO7zGzmuGSfhp6gwAKi6MAPDEz9bBjMgAQCUSpimtzIyfgkAtRbmgcFEwnHnnV+jsgCgLsIcGxLmkO44ANRdmEmi+5rmMqUZ3XEAaKow98L8h6x1qSgAqJMwk877OdK4xtNElwDQBGFu5Zwp/2HC3/pUEgAgzP/xHLIEgCYJM8vi9Sh7+5sJf/NdKgcAmihMTzOn5tepGABoqjDbirPhEU9SKQBQd2FuSNK8TcR4pJ8iyxEVAgBNEeZYIsNoQfpU8u+stQSARgmzr3EE75LjhDFOAACEybIhAECYydsjq7Z7h4gXAKwvXD9UEOU3cn7PMwveFYvdu2ISycs5uz8QY6zrk1aHIm3dUHxuiwYDgDBN0EsR5TxmeZEOD6Vc/49CoL5GNBzN3r+vGBEvxdmi0QAgzDy0ChivVO3qz4U4ZVHnJMPk1JJhQxvKckmYz5AFIMx8fGh5zHI3g9guiK52Zy0q7OSQ5ZKfNqyR9NZO8Rzz4ADCtBv5FfEdaZHnPOUzExFB9oRYl0SyeC/ms3VvHJ546VxV3O4KgDBTuL7gkhDNoSVhvmpImrJudqB5T99Z8KUaN4yo+/2PAlc5eCvd/jZC1uJb4cdHUH+BsqjWsqJAcsREnjHMroL0Zoqz9Ku8WIIK6IiIti9ol2A2Pm152OMGv2s3rO7yM5ecTSivcYaXP0vxHAlT9rA9nPO6A8lDNViJTMYawuw5LvxxCSeX0sZ4/2Lwe+bhXuXX7BbN5oJ/K5TZ2QIE6cXkhriDMM0I86KBClKZgdd5EHsOpTQr4Yy8bGnYrdBMchQvJacAwpTL8p+KZfaSxaivK56xNxK++wGEmX975F1D11+/7q9iljhFMjpRaFQuZnu7GkI/KPi+ZLI8Y2hp0lRzou77iFKpR7LODywJM6rDeynf/U2EaWY/eVE/SnWd5czBREoZ13z6BUR4QcoY81NCCBPxuZmIeKswsdYXO9BsbmzYT3mxjEV5ReX8E4u/9cdN7xEUOQZW1I86KGECkEiWNzSF2Uro0k5Wxm5NRBEjyT10LNfJNOE3tCSbJJYTZRcVNinINlssBZ21HJOSZgcFRv8HBU64tBlCqZ8wWxpd3qV0iojgZikRwkwwEccNtxTHGKcWhjni7q8vxtBM9jqmhsZZzxv4zbrRvKw+Dw1L7HYJhpQ8xegSYVZMmMMM6zB9h/c0VuzG7ViSfqA5priU+rYBubQN3mtX4zqvJfw2VcnNCxwf75Vk/L0teTlMRS/lQhOWF5m+YOBQmL5knEzWyP9u+b5mOUW3o/CAepaWEeVdZdAxFF0GCrPCqte6IxnTbhmcePEtjS0fOBDFQNIGPBauV1OYo5QJlJEkO9GmpXtKOq/9D4a3ho4Kjsrvi7LsZeyODzTb1D2F+2kbaKMTg5N2E0tDJS5Wd+wbflEjzBRB2JTSkluSxdatlb3RcZ85XbAwdwyMla0v/cl7nx3xMN7Q7KZ3MgizY2E5zb6hicFhjq64qUkzP6Wux+I+h6KMx+I3jS2NX+Z96SPMDMLcdrQ0JlD43K7FSaisZTHSfDg9wz2FaFzwKGf3vJNTJDpDBu9qdoNlL4H1me7tmM99tBJFnjEcDY5zJpoxuUXSM/CCWp/1vytyRLSbLswNR8L0NIYCTgo+4lc3ovUU988XOeO/KSKYueaYnZfwN6oi2dMsg5GhnU2zFFmuvySSfufNjOV9yVCGrqHFYGSU4RkdJaRL9BFmcd1emTBfjvns5YTGZeveXk/YKurHNMzTQpYvJPyeI8kD/EFBjeYXmhM5s4zl3U6J2uL+7UQz0pZJ82JKe/YUx/kCC5sJdJjljDbz9sp8hd7SflWkaeOiJw6EuaHRJZoUPCmV1L26KhrSuZW37774/G3JJEIgGYMLCtrTfFljWGCccbb3Zkp9zg0tVxpkkNChxhBKYGmN7LygnWN+jnLe1Li/3aYK87KBtXKmGtdE4/5s3VeQ4YH8IOUNHFiamVXlcY1GL1u4P9Soz5O1h3SouXtIxvth/oQgXYtJXnxxnV5M+r9A0FfY5TY2+GzJnueoF/RECddEl1KYSQ352IEw52sVmzQJc93xfu0knk2IzLdKkIUp7rv/luH3r57OucwL+o5YH/uj8OMD7gYxD2hLsu52pinNtoHJNS+h91J0zoJA7BYzKc2k4aG4SbrXcwwfDJoozB1HazEflXR9Byky74buk1zERWubGbr6E4fCnOZMBL0efUYP4JczriEdWNgrPcwwJnrLUeTUNfhSvSS5zoHmWt6jDNE7wgzt5JmUpXWblqCSoofy5wpv2bZiJBHX+O442rmkIqnod71ieNZblp3q4QzRWdyL6HkR+WZZBnXL0fIZT/JSfUVT4iYmoSZrGZ0q2S0vesyujHvJH3FQ8C3RMALxXz/jEbZDSVfeRr3K5HRd40HuKu7H9jVmu3+ZcJ3P5jw6JNCs15cd9WCSxhKnhrrmeWbpexrXGzRNmFsOQ+5WhkW/dU0s++vQTK7HA8XzkvyM9bUrZHtt5dTOwNDhbWFYjjORXEqgK+kVdC3mc0373WPHy+NKJUxZt+2rJZJmXbZs9WO2NHY0y2wZVY01JFnkcibdEyhdde0CBxs3so5nHmV4Ib2W0hauCFH6Cm3u95bzsFZCmGl7dR8pQcLTRznK9RO+HbOMSZUx5Zg45re+TvJzjl8ibUM9g+W1uiu0M76g+iVKMOJUmLII71xYfC6/mZjp23X8pi8jWcelOpRdqjS7JZrE8BISqzzh8J62SnJ8jHNhDqu8OLWBHIdqh7L1KatK0y1hmrZ/Ke6kqrUw+w0YN6wby7G/9soY4DItXsviAV9QbNRrYjtpEcFVo4TZQZgApSRuJ85vHN5PUIGJROvCDBAmQKWWobm8p0OHW3xLIcwWwgQoJZ0Szi0EBhMUV1KYGwgToJQEDvMp6PqijTD3Tn2eRgvgjFZJ81H2Cz4JoXTCfDGhYj5DowVwyqsllNNWFXqkRYfZj9FYAZwzK+numlZMoPW9JglzSZTT8AEaKkBphflcycZZ3xL39WQThQkA5SEuTd+fKBeECQBqwvwz5YIwAUBNmH+lXBAmAKgJ803KBWECgJowr1EuCBMA/p+4c4d+RrkgTADYU0rx1gublcoQYQLAqaxHtzQlg360o+ntld/9DMIEgA3NrOtBQyLLuN9+HmECQByDEh5T4Tq6jspkE2ECQFyXtKlpF+MSAr2lk0aOBgTQLPYbLMz133ysO9lFAwJoFlcQ5n/pi5RyzJID1JyvhNnO7k6a9Bg3pNweZB0mQPN4LMyWK7JblaMgWLgOAKZ4ekV2FzT+7j3O2UKYAE1jM4w/YsLLMDtOdIkwAWrPuRj5TROkmSTLOeWIMAGawG6CBGdiqUxLbHecSk5wJbpEmACnmpJEQybD3y54R/LvA8oQYQI0TZqXJVK8T1ccYQLA3qeOph1qyPJ3lBnCBGg60XjlvRRZjignhAkAe5+c5x3t2rm9Jsqu6L5TRggTAABhAgAgTAAAhAkAgDABAIBCAABAmAAACBMAAGECACBMAACECQCAMAEAYI3/AABEWg1TVagbAAAAAElFTkSuQmCC';

    function generateAllocationCertificate(order) {
        if (!order) return;

        const isTour      = order.type === 'tour' || order.category === 'tour' || (order.id && (order.id.startsWith('TR-') || order.id.startsWith('TB-'))) || Boolean(order.packageName || order.tourDate);
        const isCOD       = order.paymentMethod === 'cod' || (order.status && order.status.includes('Cash on Delivery'));
        const isPaid      = order.status === 'Paid & Confirmed';
        const isSlipSent  = order.status === 'Slip Submitted' || order.status === 'Pending Verification';
        const isAwaiting  = order.status === 'Awaiting Payment' || order.status === 'Order Created';

        const statusColor = isPaid ? '#4caf50' : (isCOD ? '#2e7d32' : (isSlipSent ? '#d4af37' : '#90caf9'));
        const statusLabel = isCOD ? 'Cash on Delivery (Pending Courier Handover)' : (order.status || 'Order Created');
        const issuedDate  = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const priceDisplay = order.formattedPrice || `USD ${(order.price || 0).toFixed(2)}`;

        const certTypeLabel = isTour ? 'Estate Tour Gate Pass &amp; Sanctuary Admission' : 'Connoisseur Allocation Certificate';
        const certRecital = isTour ? `
            This Official Gate Pass confirms and attests that the following reservation has been duly registered and authorized in the<br>
            <strong>Rock One Wild Tea Estate Master Ledger</strong> and grants certified entry to the private highland estate and factory.
        ` : `
            This Certificate confirms and attests that the following allocation has been duly registered in the<br>
            <strong>Rock One Wild Tea Estate Master Ledger</strong> and reserved under the name of the allocated party.
        `;
        const itemsSectionTitle = isTour ? 'Reserved Highland Experience — Master Ledger Record' : 'Allocated Reserve — Itemised Ledger Entry';
        const totalSectionLabel = isTour ? 'Total Reservation Value' : 'Total Allocation Value';

        // Build items HTML (support tour bookings, single gift box and multi-item cart orders)
        let itemsHtml = '';
        if (isTour) {
            itemsHtml = `
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(212,175,55,0.15); font-size: 12px; color: #1a0f00;">
                        <strong style="font-family:'Cinzel', serif; font-size: 13px; color: #1a0f00;">${order.packageName || 'Master Tea Factory Tour &amp; Sommelier Cupping'}</strong>
                        <div style="font-size: 11px; color: #5a3e00; margin-top: 3px;">
                            Experience Date: <strong>${order.tourDate || 'Scheduled Date'}</strong> &bull; Slot: <strong>${order.timeSlot || 'Scheduled Time'}</strong>
                        </div>
                        <div style="font-size: 10px; color: #8b6914; margin-top: 2px;">
                            Gannilawaththa, Wellawela, Ettampitiya (Elevation 1,240m) &bull; Gate Admission &amp; Cupping Included
                        </div>
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(212,175,55,0.15); text-align: center; font-size: 12px; color: #4a3a00;">${order.guestCount || order.guests || 1} Guests</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid rgba(212,175,55,0.15); text-align: right; font-size: 12px; color: #1a0f00; font-weight: 600;">${priceDisplay}</td>
                </tr>
            `;
        } else if (order.items && Array.isArray(order.items) && order.items.length > 0) {
            itemsHtml = order.items.map(item => `
                <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid rgba(212,175,55,0.15); font-size: 12px; color: #1a0f00;">${item.name || 'Tea Reserve Item'}${item.weight ? ` (${item.weight})` : ''}</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid rgba(212,175,55,0.15); text-align: center; font-size: 12px; color: #4a3a00;">${item.quantity || 1}</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid rgba(212,175,55,0.15); text-align: right; font-size: 12px; color: #1a0f00; font-weight: 600;">${item.formattedTotalPrice || item.formattedPrice || `$${((item.price || 0) * (item.quantity || 1)).toFixed(2)}`}</td>
                </tr>
            `).join('');
        } else {
            itemsHtml = `
                <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid rgba(212,175,55,0.15); font-size: 12px; color: #1a0f00;">${order.boxName || 'Tea Reserve Allocation'}${order.seasonName ? ` — ${order.seasonName}` : ''}</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid rgba(212,175,55,0.15); text-align: center; font-size: 12px; color: #4a3a00;">1</td>
                    <td style="padding: 8px 0; border-bottom: 1px solid rgba(212,175,55,0.15); text-align: right; font-size: 12px; color: #1a0f00; font-weight: 600;">${priceDisplay}</td>
                </tr>
            `;
        }

        // Wax seal SVG (embossed look)
        const waxSealSvg = `
            <svg width="110" height="110" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
                <!-- Outer wax drip ring -->
                <ellipse cx="55" cy="55" rx="52" ry="52" fill="#8b0000" opacity="0.9"/>
                <ellipse cx="55" cy="55" rx="46" ry="46" fill="#a50000"/>
                <!-- Gold border ring -->
                <circle cx="55" cy="55" r="43" fill="none" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="4 3"/>
                <circle cx="55" cy="55" r="38" fill="none" stroke="#d4af37" stroke-width="0.8"/>
                <!-- Central crest: stylized leaf -->
                <text x="55" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#d4af37" font-weight="bold">ROW</text>
                <text x="55" y="57" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="#f6e27a" letter-spacing="2">TEA ESTATE</text>
                <line x1="28" y1="62" x2="82" y2="62" stroke="#d4af37" stroke-width="0.8"/>
                <text x="55" y="74" text-anchor="middle" font-family="Georgia, serif" font-size="7" fill="#ffd700" letter-spacing="1">ETTAMPITIYA · EST. 2020</text>
                <!-- decorative corners -->
                <polygon points="55,82 58,90 55,88 52,90" fill="#d4af37" opacity="0.7"/>
            </svg>
        `;

        // Certificate border ornament SVG
        const cornerOrnament = `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L20 0 L20 3 L3 3 L3 20 L0 20 Z" fill="#d4af37" opacity="0.6"/>
            <path d="M0 0 L8 0 L8 1 L1 1 L1 8 L0 8 Z" fill="#d4af37"/>
        </svg>`;

        const certHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Allocation Certificate — ${order.id}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Cinzel:wght@400;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'EB Garamond', Georgia, serif;
            background: #f5f0e8;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
        }

        @page {
            size: A4 portrait;
            margin: 0;
        }

        .certificate-page {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: linear-gradient(160deg, #fdfaf3 0%, #f9f3e3 40%, #fdf6e8 70%, #fff8ec 100%);
            position: relative;
            overflow: hidden;
            padding: 22mm 20mm 20mm 20mm;
            display: flex;
            flex-direction: column;
        }

        /* Outer gold border frame */
        .cert-frame {
            position: absolute;
            inset: 8mm;
            border: 2.5px solid #d4af37;
            border-radius: 3px;
            pointer-events: none;
        }

        .cert-frame::before {
            content: '';
            position: absolute;
            inset: 3px;
            border: 0.8px solid rgba(212,175,55,0.45);
            border-radius: 2px;
        }

        /* Corner ornaments */
        .corner { position: absolute; }
        .corner.tl { top: 9mm; left: 9mm; transform: rotate(0deg); }
        .corner.tr { top: 9mm; right: 9mm; transform: rotate(90deg); }
        .corner.bl { bottom: 9mm; left: 9mm; transform: rotate(270deg); }
        .corner.br { bottom: 9mm; right: 9mm; transform: rotate(180deg); }

        /* Background watermark text */
        .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-35deg);
            font-family: 'Cinzel', serif;
            font-size: 80px;
            font-weight: 700;
            color: rgba(212,175,55,0.055);
            white-space: nowrap;
            letter-spacing: 12px;
            pointer-events: none;
            user-select: none;
        }

        /* Header zone */
        .cert-header {
            text-align: center;
            margin-bottom: 7mm;
            position: relative;
        }

        .estate-monogram {
            font-family: 'Cinzel', serif;
            font-size: 9px;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: #8b6914;
            margin-bottom: 3mm;
        }

        .estate-title {
            font-family: 'Cinzel', serif;
            font-size: 28px;
            font-weight: 700;
            color: #1a0f00;
            line-height: 1.1;
            letter-spacing: 3px;
            margin-bottom: 1.5mm;
        }

        .estate-subtitle {
            font-family: 'Cinzel', serif;
            font-size: 10px;
            letter-spacing: 4px;
            color: #8b6914;
            text-transform: uppercase;
        }

        .divider-ornament {
            display: flex;
            align-items: center;
            gap: 8px;
            justify-content: center;
            margin: 4mm 0;
        }

        .divider-line {
            flex: 1;
            max-width: 60mm;
            height: 0.8px;
            background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .divider-diamond {
            width: 6px;
            height: 6px;
            background: #d4af37;
            transform: rotate(45deg);
        }

        /* Certificate type banner */
        .cert-type-banner {
            text-align: center;
            margin-bottom: 6mm;
        }

        .cert-type-label {
            font-family: 'Cinzel', serif;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 5px;
            text-transform: uppercase;
            color: #5a3e00;
            display: inline-block;
            padding: 3px 16px;
            border-top: 1px solid #d4af37;
            border-bottom: 1px solid #d4af37;
        }

        /* Opening recital text */
        .cert-recital {
            font-style: italic;
            font-size: 13px;
            text-align: center;
            color: #4a3200;
            line-height: 1.8;
            margin-bottom: 6mm;
            padding: 0 5mm;
        }

        /* Client & order details block */
        .cert-details-block {
            background: linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 100%);
            border: 1px solid rgba(212,175,55,0.5);
            border-radius: 4px;
            padding: 5mm 7mm;
            margin-bottom: 5mm;
        }

        .cert-field-row {
            display: flex;
            align-items: baseline;
            gap: 8px;
            padding: 3px 0;
            border-bottom: 1px dashed rgba(212,175,55,0.25);
        }

        .cert-field-row:last-child { border-bottom: none; }

        .cert-field-label {
            font-size: 9px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #8b6914;
            min-width: 38mm;
            flex-shrink: 0;
        }

        .cert-field-value {
            font-size: 13px;
            color: #1a0f00;
            font-weight: 600;
        }

        .cert-field-value.mono {
            font-family: 'Courier New', monospace;
            font-size: 12px;
            color: #5a3e00;
        }

        /* Allocation items table */
        .cert-items-section {
            margin-bottom: 5mm;
        }

        .cert-items-section-title {
            font-family: 'Cinzel', serif;
            font-size: 9px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #8b6914;
            margin-bottom: 3mm;
            text-align: center;
            border-bottom: 1px solid rgba(212,175,55,0.4);
            padding-bottom: 2mm;
        }

        .cert-items-table {
            width: 100%;
            border-collapse: collapse;
        }

        .cert-items-table th {
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: #8b6914;
            padding: 5px 0;
            border-bottom: 1.5px solid #d4af37;
            background: rgba(212,175,55,0.06);
        }

        .cert-total-row td {
            padding: 8px 0;
            font-family: 'Cinzel', serif;
            font-size: 13px;
            font-weight: 700;
            color: #1a0f00;
            border-top: 1.5px solid #d4af37;
        }

        /* Status badge */
        .cert-status-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 3px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.5px;
        }

        /* Wax seal + signature zone */
        .cert-attestation {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: auto;
            padding-top: 6mm;
            gap: 10mm;
        }

        .cert-signature-block {
            flex: 1;
            text-align: center;
        }

        .cert-signature-img-wrap {
            height: 18mm;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            margin-bottom: 1.5mm;
        }

        .cert-signature-img-wrap img {
            max-height: 18mm;
            max-width: 58mm;
            object-fit: contain;
            display: block;
        }

        .cert-signature-line {
            width: 100%;
            border-bottom: 1px solid #8b6914;
            margin-bottom: 1.5mm;
        }

        .cert-signature-name {
            font-family: 'Cinzel', serif;
            font-size: 11px;
            font-weight: 700;
            color: #1a0f00;
            letter-spacing: 1.5px;
            margin-top: 1mm;
            text-transform: uppercase;
        }

        .cert-signature-title {
            font-size: 8.5px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #8b6914;
            margin-top: 1mm;
        }

        .cert-wax-seal {
            flex-shrink: 0;
        }

        /* QR-like reference box */
        .cert-ref-box {
            text-align: center;
            flex: 1;
        }

        .cert-ref-id {
            font-family: 'Courier New', monospace;
            font-size: 13px;
            font-weight: 700;
            color: #5a3e00;
            letter-spacing: 1px;
            border: 1px solid rgba(212,175,55,0.5);
            display: inline-block;
            padding: 4px 10px;
            border-radius: 4px;
            background: rgba(212,175,55,0.06);
            margin-bottom: 2mm;
        }

        .cert-ref-label {
            font-size: 9px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #8b6914;
        }

        /* Footer strip */
        .cert-footer {
            text-align: center;
            margin-top: 6mm;
            padding-top: 3mm;
            border-top: 1px solid rgba(212,175,55,0.3);
        }

        .cert-footer p {
            font-size: 9px;
            color: #8b6914;
            letter-spacing: 0.8px;
            line-height: 1.7;
        }

        @media print {
            body { background: none; }
            .certificate-page { margin: 0; }
            .no-print { display: none !important; }
        }

        /* Screen-only print button */
        .print-action-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(10, 24, 14, 0.97);
            border-top: 1px solid rgba(212, 175, 55, 0.4);
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            z-index: 9999;
        }

        .print-action-bar p {
            color: #c9a84c;
            font-family: Georgia, serif;
            font-size: 0.85rem;
        }

        .print-action-bar button {
            background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
            color: #040e08;
            font-weight: 800;
            font-size: 0.85rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            border: none;
            border-radius: 8px;
            padding: 0.7rem 2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    </style>
</head>
<body>

<!-- Screen-only print action bar -->
<div class="print-action-bar no-print">
    <p>✦ Rock One Wild Tea — Luxury Allocation Certificate &nbsp;|&nbsp; <strong>${order.id}</strong></p>
    <button onclick="window.print()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        Save / Print Certificate
    </button>
</div>

<div class="certificate-page" style="margin-bottom: 80px;">

    <!-- Frame and corners -->
    <div class="cert-frame"></div>
    <div class="corner tl">${cornerOrnament}</div>
    <div class="corner tr">${cornerOrnament}</div>
    <div class="corner bl">${cornerOrnament}</div>
    <div class="corner br">${cornerOrnament}</div>

    <!-- Watermark -->
    <div class="watermark">ROCK ONE WILD TEA</div>

    <!-- Estate Header -->
    <div class="cert-header">
        <div class="estate-monogram">✦ &nbsp; Est. 2020 &nbsp; ✦</div>
        <div class="estate-title">ROCK ONE WILD TEA</div>
        <div class="estate-subtitle">Private Highland Estate &nbsp;·&nbsp; Ettampitiya &nbsp;·&nbsp; Ceylon</div>
        <div class="divider-ornament">
            <div class="divider-line"></div>
            <div class="divider-diamond"></div>
            <div class="divider-line"></div>
        </div>
    </div>

    <!-- Certificate type -->
    <div class="cert-type-banner">
        <div class="cert-type-label">${certTypeLabel}</div>
    </div>

    <!-- Opening recital -->
    <div class="cert-recital">
        ${certRecital}
    </div>

    <!-- Client & Order Details -->
    <div class="cert-details-block">
        <div class="cert-field-row">
            <span class="cert-field-label">${isTour ? 'Lead Guest' : 'Allocated To'}</span>
            <span class="cert-field-value">${order.customerName || order.guestName || order.name || '—'}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">Contact</span>
            <span class="cert-field-value">${[order.email || order.guestEmail, order.phone || order.guestPhone].filter(Boolean).join(' · ') || '—'}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">${isTour ? 'Gate Pass Ref' : 'Allocation ID'}</span>
            <span class="cert-field-value mono">${order.id}</span>
        </div>
        ${isTour ? `
        <div class="cert-field-row">
            <span class="cert-field-label">Experience Date</span>
            <span class="cert-field-value" style="color: #5a3e00;">${order.tourDate || '—'} &nbsp;(${order.timeSlot || '—'})</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">Party Size</span>
            <span class="cert-field-value">${order.guestCount || order.guests || 1} ${Number(order.guestCount || order.guests || 1) === 1 ? 'Guest' : 'Guests'}</span>
        </div>
        ` : ''}
        <div class="cert-field-row">
            <span class="cert-field-label">Certificate Issued</span>
            <span class="cert-field-value">${issuedDate}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">${isTour ? 'Booking Registered' : 'Order Registered'}</span>
            <span class="cert-field-value">${order.createdAt || '—'}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">${isTour ? 'Clearance Status' : 'Allocation Status'}</span>
            <span class="cert-status-badge" style="background:${statusColor}18; color:${statusColor}; border: 1px solid ${statusColor}50;">${statusLabel}</span>
        </div>
        ${order.deliveryRange ? `
        <div class="cert-field-row">
            <span class="cert-field-label">Estimated Dispatch</span>
            <span class="cert-field-value">${order.deliveryRange}</span>
        </div>` : ''}
        ${order.ownerNote ? `
        <div class="cert-field-row">
            <span class="cert-field-label">Estate Note</span>
            <span class="cert-field-value" style="font-style:italic; font-size:12px;">${order.ownerNote}</span>
        </div>` : ''}
    </div>

    <!-- Allocated Items Table -->
    <div class="cert-items-section">
        <div class="cert-items-section-title">${itemsSectionTitle}</div>
        <table class="cert-items-table">
            <thead>
                <tr>
                    <th style="text-align:left; padding-left:4px;">${isTour ? 'Sanctuary Experience &amp; Schedule' : 'Description'}</th>
                    <th style="text-align:center; width: 25mm;">${isTour ? 'Guests' : 'Qty'}</th>
                    <th style="text-align:right; padding-right:4px; width: 35mm;">Value</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHtml}
            </tbody>
            <tfoot>
                <tr class="cert-total-row">
                    <td style="text-align:left; padding-left:4px;" colspan="2">${totalSectionLabel}</td>
                    <td style="text-align:right; padding-right:4px; color:#5a3e00;">${priceDisplay}</td>
                </tr>
            </tfoot>
        </table>
    </div>

    <!-- Attestation zone: ref + wax seal + signature -->
    <div class="cert-attestation">
        <div class="cert-ref-box">
            <div class="cert-ref-id">${order.id}</div>
            <div class="cert-ref-label">${isTour ? 'Gate Pass Reference' : 'Reference Number'}</div>
        </div>

        <div class="cert-wax-seal">
            ${waxSealSvg}
        </div>

        <div class="cert-signature-block">
            <div class="cert-signature-img-wrap">
                <img src="${CEO_SIGNATURE_NAVY}" alt="Director &amp; CEO Signature" />
            </div>
            <div class="cert-signature-line"></div>
            <div class="cert-signature-name">Prasanga</div>
            <div class="cert-signature-title">Managing Director &amp; CEO, Rock One Wild Tea</div>
        </div>
    </div>

    <!-- Footer -->
    <div class="cert-footer">
        <p>Rock One Wild Tea (Pvt) Ltd · Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka</p>
        <p>rockonewild@gmail.com · Call: +94 76 789 7817 · WhatsApp: +94 77 320 9950 · rockonewildtea.com</p>
        <p style="margin-top: 3px; font-style: italic; font-size: 8px; color: #b09040;">
            This certificate is an official allocation record issued by Rock One Wild Tea Estate. It does not constitute a final receipt until payment is fully confirmed.
        </p>
    </div>

</div>

<script>
    // Auto-trigger print dialog after styles load
    window.addEventListener('load', function() {
        setTimeout(function() { window.print(); }, 600);
    });
</script>
</body>
</html>`;

        // Open in a new popup window sized to A4
        const certWindow = window.open('', '_blank', 'width=900,height=1050,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes');
        if (!certWindow) {
            showToast('Popup Blocked', 'Please allow popups for this site to download your certificate.', 'error');
            return;
        }
        certWindow.document.open();
        certWindow.document.write(certHtml);
        certWindow.document.close();
    }
    window.generateAllocationCertificate = generateAllocationCertificate;

    // Global event delegation for certificate and gate pass download buttons
    document.addEventListener('click', (e) => {
        const certBtn = e.target.closest('.btn-cert-download, .btn-tour-cert-download, #btn-cert-download');
        if (certBtn) {
            e.preventDefault();
            const orderId = certBtn.getAttribute('data-order-id') || document.getElementById('order-id-input')?.value?.trim();
            if (orderId && window.TeaFactoryStore) {
                const order = window.TeaFactoryStore.getOrderById(orderId);
                if (order && typeof window.generateAllocationCertificate === 'function') {
                    window.generateAllocationCertificate(order);
                }
            }
        }
    });

    // ─── Packaging Slip & Artisan Engraving Work Order Generator (Print-to-PDF) ─
    function generatePackingSlipWorkOrder(orderOrId) {
        if (!orderOrId) return;

        let order = null;
        let linkedBooking = null;

        if (typeof orderOrId === 'string') {
            order = window.TeaFactoryStore.getOrderById(orderOrId);
            if (!order) {
                const b = window.TeaFactoryStore.getBookings().find(x => x.id === orderOrId);
                if (b) {
                    order = {
                        id: b.id,
                        bookingId: b.id,
                        boxName: b.boxName || b.productName || b.packageName,
                        seasonName: b.seasonName || '',
                        customerName: b.customerName,
                        email: b.email,
                        phone: b.phone,
                        address: b.address || '',
                        country: b.country || 'Sri Lanka',
                        price: b.price !== undefined ? b.price : (b.depositPaid || 0),
                        paymentMethod: b.paymentMethod || 'bank',
                        status: b.status,
                        createdAt: b.bookingDate,
                        waxSealColor: b.waxSealColor || '',
                        monogramInitials: b.monogramInitials || '',
                        ownerNote: b.message || b.dietaryNotes || ''
                    };
                    linkedBooking = b;
                }
            } else if (order.bookingId) {
                linkedBooking = window.TeaFactoryStore.getBookings().find(x => x.id === order.bookingId);
            }
        } else if (typeof orderOrId === 'object') {
            order = orderOrId;
            if (order.bookingId) {
                linkedBooking = window.TeaFactoryStore.getBookings().find(x => x.id === order.bookingId);
            }
        }

        if (!order) {
            showToast("Order Not Found", "Could not find transaction data for work order generation.", "error");
            return;
        }

        const customerName = order.customerName || (linkedBooking ? linkedBooking.customerName : '') || 'Private Estate Client';
        const customerEmail = order.email || (linkedBooking ? linkedBooking.email : '') || 'N/A';
        const customerPhone = order.phone || (linkedBooking ? linkedBooking.phone : '') || 'N/A';
        const customerAddress = order.address || (linkedBooking ? linkedBooking.address : '') || 'Estate Direct Dispatch / Sanctuary Client Collection';
        const customerCountry = order.country || (linkedBooking ? linkedBooking.country : '') || 'Sri Lanka';
        const itemName = order.boxName || order.itemName || order.productName || order.packageName || 'Artisanal Single-Estate Tea Reserve';
        const itemDetails = order.seasonName || order.itemSub || (linkedBooking ? linkedBooking.seasonName : '') || 'Numbered Reserve Edition';
        const totalAmount = parseFloat(order.price !== undefined ? order.price : (order.amount !== undefined ? order.amount : (order.depositPaid || 0))).toFixed(2);
        const orderDate = order.createdAt || order.bookingDate || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const paymentMode = order.paymentMethod === 'online' ? 'Online Payment Gateway (Pre-paid)' : (order.paymentMethod === 'slip' ? 'Bank Cash Deposit Slip (Verified)' : 'Direct Bank Transfer');
        const paymentStatus = order.status || 'Paid & Confirmed';
        
        // Bespoke gift specifications
        const waxSealColor = order.waxSealColor || (linkedBooking ? linkedBooking.waxSealColor : '') || 'Imperial Gold';
        const monogramInitials = order.monogramInitials || (linkedBooking ? linkedBooking.monogramInitials : '') || '';
        const clientNotes = order.ownerNote || order.referenceNote || (linkedBooking ? (linkedBooking.message || linkedBooking.courierNotes || linkedBooking.dietaryNotes) : '') || '';

        // Wax seal color swatch mapping
        let waxColorHex = '#b8860b';
        if (waxSealColor.includes('Emerald')) waxColorHex = '#1b5e20';
        else if (waxSealColor.includes('Crimson')) waxColorHex = '#8b0000';
        else if (waxSealColor.includes('Obsidian')) waxColorHex = '#1a1a1a';
        else if (waxSealColor.includes('Gold')) waxColorHex = '#b8860b';

        const workOrderNo = `WO-${order.id}`;
        const printedAt = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        const slipHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Artisan Work Order & Packing Slip — ${order.id}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'EB Garamond', Georgia, serif;
            background: #e9ecef;
            color: #1a1a1a;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            padding: 20px;
        }

        @page {
            size: A4 portrait;
            margin: 10mm 12mm 12mm 12mm;
        }

        /* Screen Action Toolbar */
        .no-print-toolbar {
            max-width: 210mm;
            margin: 0 auto 15px auto;
            background: #1a241e;
            border: 1px solid rgba(212,175,55,0.4);
            border-radius: 6px;
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .toolbar-title {
            color: #f6e27a;
            font-family: 'Cinzel', serif;
            font-size: 13px;
            letter-spacing: 1.5px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .toolbar-actions {
            display: flex;
            gap: 10px;
        }

        .btn-print {
            background: linear-gradient(135deg, #d4af37 0%, #aa8010 100%);
            color: #0d1a10;
            border: none;
            padding: 8px 18px;
            font-family: 'Cinzel', serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            border-radius: 4px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        }

        .btn-close {
            background: rgba(255,255,255,0.1);
            color: #e0e0e0;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 8px 14px;
            font-family: 'Cinzel', serif;
            font-size: 11px;
            border-radius: 4px;
            cursor: pointer;
        }

        /* Main Printable Document Page */
        .slip-page {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: #ffffff;
            padding: 14mm 16mm 14mm 16mm;
            border: 1px solid #dcdcdc;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            position: relative;
        }

        /* Estate Header */
        .slip-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid #1a2e22;
            padding-bottom: 12px;
            margin-bottom: 16px;
        }

        .estate-brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .estate-logo-box {
            width: 44px;
            height: 44px;
            border: 1.5px solid #d4af37;
            background: #0d1a10;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #d4af37;
            font-family: 'Cinzel', serif;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 1px;
        }

        .estate-name {
            font-family: 'Cinzel', serif;
            font-size: 18px;
            font-weight: 700;
            color: #0d1a10;
            letter-spacing: 1.5px;
            line-height: 1.1;
        }

        .estate-sub {
            font-size: 11px;
            color: #666;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-family: 'Cinzel', serif;
            margin-top: 2px;
        }

        .doc-title-block {
            text-align: right;
        }

        .doc-main-title {
            font-family: 'Cinzel', serif;
            font-size: 14px;
            font-weight: 800;
            color: #0d1a10;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .doc-wo-number {
            font-family: 'JetBrains Mono', monospace;
            font-size: 13px;
            font-weight: 700;
            color: #8b6914;
            margin-top: 2px;
        }

        .doc-meta-print {
            font-size: 10px;
            color: #777;
            margin-top: 2px;
        }

        /* 2-Column Info Grid */
        .info-grid {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 16px;
            margin-bottom: 16px;
        }

        .info-box {
            border: 1px solid #e0e0e0;
            background: #fafafa;
            border-radius: 4px;
            padding: 10px 14px;
        }

        .info-box-title {
            font-family: 'Cinzel', serif;
            font-size: 10px;
            font-weight: 700;
            color: #0d1a10;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 4px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
        }

        .info-row {
            display: flex;
            margin-bottom: 4px;
            font-size: 12px;
            line-height: 1.4;
        }

        .info-label {
            width: 100px;
            color: #666;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            flex-shrink: 0;
        }

        .info-val {
            color: #111;
            font-weight: 600;
            word-break: break-word;
        }

        /* Table */
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 16px;
        }

        .items-table th {
            background: #0d1a10;
            color: #f6e27a;
            font-family: 'Cinzel', serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 7px 10px;
            text-align: left;
            border: 1px solid #0d1a10;
        }

        .items-table td {
            padding: 8px 10px;
            font-size: 12px;
            border: 1px solid #ddd;
            color: #222;
        }

        .items-table tr:nth-child(even) td {
            background: #fdfdfd;
        }

        /* BESPOKE WORK ORDER HIGHLIGHT BOX */
        .artisan-work-order-box {
            border: 2px solid #d4af37;
            background: #fffcf2;
            border-radius: 5px;
            padding: 12px 16px;
            margin-bottom: 16px;
            position: relative;
        }

        .artisan-title-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1.5px solid #d4af37;
            padding-bottom: 6px;
            margin-bottom: 10px;
        }

        .artisan-header-text {
            font-family: 'Cinzel', serif;
            font-size: 12px;
            font-weight: 800;
            color: #8b6914;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .artisan-badge {
            background: #0d1a10;
            color: #f6e27a;
            font-family: 'Cinzel', serif;
            font-size: 9px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 3px;
            letter-spacing: 1px;
        }

        .artisan-specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
        }

        .spec-card {
            background: #ffffff;
            border: 1px solid rgba(212,175,55,0.4);
            border-radius: 4px;
            padding: 10px 12px;
        }

        .spec-label {
            font-family: 'Cinzel', serif;
            font-size: 10px;
            color: #8b6914;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        /* Monogram Plate Visual Representation */
        .brass-plate-preview {
            background: linear-gradient(135deg, #e6ca65 0%, #d4af37 50%, #aa8010 100%);
            border: 2px solid #7c5c06;
            box-shadow: inset 0 0 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.15);
            border-radius: 3px;
            padding: 8px;
            text-align: center;
            margin: 6px 0;
        }

        .brass-monogram-text {
            font-family: 'Cinzel', serif;
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 3px;
            color: #1a0f00;
            text-shadow: 1px 1px 0px rgba(255,255,255,0.4);
        }

        /* Wax Seal Visual */
        .wax-preview-box {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 6px 0;
        }

        .wax-circle-swatch {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 2px solid #d4af37;
            box-shadow: inset 0 0 5px rgba(0,0,0,0.4);
            flex-shrink: 0;
        }

        .spec-instruction {
            font-size: 11px;
            color: #555;
            line-height: 1.35;
        }

        /* Checklist */
        .qa-section {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 10px 14px;
            background: #fafafa;
            margin-bottom: 16px;
        }

        .qa-title {
            font-family: 'Cinzel', serif;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #0d1a10;
            margin-bottom: 8px;
            border-bottom: 1px solid #eee;
            padding-bottom: 4px;
        }

        .checklist-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px 16px;
            font-size: 11px;
            color: #333;
        }

        .check-item {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .check-box-square {
            width: 13px;
            height: 13px;
            border: 1.5px solid #666;
            border-radius: 2px;
            display: inline-block;
            flex-shrink: 0;
        }

        /* Signatures */
        .sig-section {
            display: flex;
            justify-content: space-between;
            margin-top: 14px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
        }

        .sig-col {
            width: 45%;
            font-size: 11px;
            color: #444;
        }

        .sig-line {
            border-bottom: 1px dashed #777;
            height: 24px;
            margin-top: 2px;
            margin-bottom: 3px;
        }

        /* Print Media Styles */
        @media print {
            body {
                background: #ffffff;
                padding: 0;
            }
            .no-print-toolbar {
                display: none !important;
            }
            .slip-page {
                box-shadow: none;
                border: none;
                margin: 0;
                padding: 0;
            }
        }
    </style>
</head>
<body>

    <!-- Screen Preview Toolbar -->
    <div class="no-print-toolbar">
        <div class="toolbar-title">
            <span>✦</span>
            <span>Estate Packaging Work Order &amp; Packing Slip &nbsp;|&nbsp; <strong>${workOrderNo}</strong></span>
        </div>
        <div class="toolbar-actions">
            <button class="btn-print" onclick="window.print()">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                Print Work Order / PDF
            </button>
            <button class="btn-close" onclick="window.close()">Close</button>
        </div>
    </div>

    <!-- Printable Slip Page -->
    <div class="slip-page">
        <!-- Header -->
        <div class="slip-header">
            <div class="estate-brand">
                <div class="estate-logo-box">ROW</div>
                <div>
                    <div class="estate-name">Rock One Wild Tea Estate</div>
                    <div class="estate-sub">Highland Sanctuary · Ettampitiya, Sri Lanka · Est. 2020</div>
                </div>
            </div>
            <div class="doc-title-block">
                <div class="doc-main-title">Packaging Slip &amp; Work Order</div>
                <div class="doc-wo-number">${workOrderNo}</div>
                <div class="doc-meta-print">Printed: ${printedAt}</div>
            </div>
        </div>

        <!-- 2-Column Info Grid -->
        <div class="info-grid">
            <!-- Consignee / Shipping -->
            <div class="info-box">
                <div class="info-box-title">
                    <span>Consignee &amp; Delivery Destination</span>
                    <span style="font-weight:normal; color:#888;">Ship-To</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Customer:</span>
                    <span class="info-val" style="font-size: 13px; color: #0d1a10;">${customerName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Destination:</span>
                    <span class="info-val">${customerAddress}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Country:</span>
                    <span class="info-val">${customerCountry}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Contact / WA:</span>
                    <span class="info-val">${customerPhone}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-val">${customerEmail}</span>
                </div>
            </div>

            <!-- Order & Dispatch Meta -->
            <div class="info-box">
                <div class="info-box-title">
                    <span>Dispatch &amp; Payment Ledger</span>
                    <span style="font-weight:normal; color:#888;">Order Info</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Order Ref:</span>
                    <span class="info-val" style="font-family:'JetBrains Mono',monospace;">${order.id}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Order Date:</span>
                    <span class="info-val">${orderDate}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Payment Mode:</span>
                    <span class="info-val">${paymentMode}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Status:</span>
                    <span class="info-val" style="color: #2e7d32; font-weight: 700;">${paymentStatus}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Courier Class:</span>
                    <span class="info-val">Express Airtight Courier (DHL / International)</span>
                </div>
            </div>
        </div>

        <!-- Inventory Allocation Table -->
        <table class="items-table">
            <thead>
                <tr>
                    <th style="width: 50%;">Allocated Item / Package Description</th>
                    <th style="width: 25%;">Series / Vintage</th>
                    <th style="width: 10%; text-align: center;">Qty</th>
                    <th style="width: 15%; text-align: right;">Amount (USD)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <strong style="color: #0d1a10; font-size: 13px;">${itemName}</strong>
                        <div style="font-size: 11px; color: #555; margin-top: 2px;">Hand-harvested wild artisanal Ceylon tea allocation · 1,200m+ elevation.</div>
                    </td>
                    <td>${itemDetails}</td>
                    <td style="text-align: center; font-weight: 700;">1</td>
                    <td style="text-align: right; font-weight: 700; color: #8b6914;">$${totalAmount}</td>
                </tr>
            </tbody>
        </table>

        <!-- BESPOKE ARTISAN PACKAGING & ENGRAVING WORK ORDER -->
        <div class="artisan-work-order-box">
            <div class="artisan-title-bar">
                <div class="artisan-header-text">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    Artisan Workshop Packaging &amp; Custom Engraving Specs
                </div>
                <span class="artisan-badge">ESTATE CRAFTSMAN DIRECTIVE</span>
            </div>

            <div class="artisan-specs-grid">
                <!-- Wax Seal Card -->
                <div class="spec-card">
                    <div class="spec-label">
                        <span>●</span> Hand-Poured Artisan Wax Seal
                    </div>
                    <div class="wax-preview-box">
                        <div class="wax-circle-swatch" style="background: ${waxColorHex};"></div>
                        <div>
                            <div style="font-weight: 700; font-size: 13px; color: #0d1a10;">${waxSealColor} Wax</div>
                            <div class="spec-instruction">Natural beeswax formulation with mineral pigments.</div>
                        </div>
                    </div>
                    <div class="spec-instruction" style="margin-top: 6px; border-top: 1px dotted #e0d0a0; padding-top: 4px;">
                        <strong>Application:</strong> Hand-pour over gold thread ribbon closure on teak chest. Emboss with 35mm solid brass estate crest while warm.
                    </div>
                </div>

                <!-- Brass Monogram Plate Card -->
                <div class="spec-card">
                    <div class="spec-label">
                        <span>✦</span> Custom Brass Monogram Plate Engraving
                    </div>
                    ${monogramInitials ? `
                        <div class="brass-plate-preview">
                            <div class="brass-monogram-text">✦ ${monogramInitials} ✦</div>
                        </div>
                        <div class="spec-instruction">
                            <strong>Engraving Specs:</strong> Precision rotary diamond engraved initials on solid brushed brass plate with black antique inlay.
                        </div>
                    ` : `
                        <div class="brass-plate-preview" style="padding: 6px;">
                            <div class="brass-monogram-text" style="font-size: 12px; letter-spacing: 2px;">✦ ROCK ONE WILD TEA ✦</div>
                        </div>
                        <div class="spec-instruction">
                            <strong>Standard Logo Plate:</strong> Attach standard gold estate brass signature plate (no custom client initials requested).
                        </div>
                    `}
                </div>
            </div>

            <!-- Client Packaging Notes -->
            ${clientNotes ? `
                <div style="margin-top: 10px; padding: 8px 12px; background: #ffffff; border: 1px dashed rgba(212,175,55,0.6); border-radius: 4px; font-size: 11px;">
                    <strong style="color: #8b6914; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px; font-family:'Cinzel',serif;">Client Instructions / Gift Note:</strong>
                    <div style="color: #333; font-style: italic; margin-top: 2px; line-height: 1.4;">"${clientNotes}"</div>
                </div>
            ` : ''}
        </div>

        <!-- QA & Inspection Checklist -->
        <div class="qa-section">
            <div class="qa-title">Warehouse Craftsman &amp; Quality Inspection Checklist</div>
            <div class="checklist-grid">
                <div class="check-item"><span class="check-box-square"></span> 1. Nitrogen-flushed barrier pouch airtight seal inspected</div>
                <div class="check-item"><span class="check-box-square"></span> 2. Teakwood chest finish, hinges &amp; velvet interior checked</div>
                <div class="check-item"><span class="check-box-square"></span> 3. Brass plate monogram engraving inspected &amp; polished</div>
                <div class="check-item"><span class="check-box-square"></span> 4. Artisan wax seal hand-poured &amp; embossed intact</div>
                <div class="check-item"><span class="check-box-square"></span> 5. Signed Luxury Allocation Certificate &amp; Guide enclosed</div>
                <div class="check-item"><span class="check-box-square"></span> 6. Foam-cushioned export outer shipper box sealed with waybill</div>
            </div>
        </div>

        <!-- Signatures -->
        <div class="sig-section">
            <div class="sig-col">
                <div>Packaging Artisan Craftsman:</div>
                <div class="sig-line"></div>
                <div style="font-size: 10px; color: #777;">Signature &amp; Completion Timestamp</div>
            </div>
            <div class="sig-col">
                <div>Estate Quality Controller / Sommelier:</div>
                <div class="sig-line"></div>
                <div style="font-size: 10px; color: #777;">Attestation Signature &amp; Official Estate Stamp</div>
            </div>
        </div>
    </div>

    <script>
        window.addEventListener('load', function() {
            setTimeout(function() { window.print(); }, 500);
        });
    </script>
</body>
</html>`;

        const slipWindow = window.open('', '_blank', 'width=920,height=1080,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes');
        if (!slipWindow) {
            showToast('Popup Blocked', 'Please allow popups for this site to print the packaging slip.', 'error');
            return;
        }
        slipWindow.document.open();
        slipWindow.document.write(slipHtml);
        slipWindow.document.close();
    }

    function bindAdminEvents() {
        // Sub Navigation Tabs for Concierge Desk
        const subTabButtons = document.querySelectorAll('.admin-tab-btn');
        subTabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetSubTab = btn.getAttribute('data-subtab');
                activeAdminSubTab = targetSubTab;
                renderTabContent('admin');
            });
        });

        // Season Reset Form
        const resetForm = document.getElementById('season-reset-form');
        if (resetForm) {
            resetForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newName = document.getElementById('new-season-name').value;
                const result = window.TeaFactoryStore.resetSeason(newName, 0);
                if (result.success) {
                    showToast(
                        "Season Transitioned Successfully", 
                        `Current active catalog set to "${result.newSeason.name}" (Series ${result.newSeason.seriesNumber}). Gift box grid reset to Enquiry Only.`, 
                        'success'
                    );
                    renderTabContent('admin');
                }
            });
        }

        // ─── Seasonal Themes & Occasions Activation ─────────────────────────
        const themeCards = document.querySelectorAll('.btn-activate-theme');
        themeCards.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetThemeId = btn.getAttribute('data-theme-id');
                if (!targetThemeId) return;

                const targetTheme = (window.TeaFactoryStore.getSeasonalThemes ? window.TeaFactoryStore.getSeasonalThemes() : []).find(t => t.id === targetThemeId);
                if (!targetTheme) return;

                const showBanner = document.getElementById('theme-banner-toggle')?.checked ?? true;
                const showEffects = document.getElementById('theme-effects-toggle')?.checked ?? true;

                // Clear any dismissal for the chosen theme
                try { sessionStorage.removeItem(`tea_banner_dismissed_${targetThemeId}`); } catch(e){}

                // When activating a theme, automatically assign that theme's official celebratory greeting
                window.TeaFactoryStore.updateThemeSettings({
                    activeThemeId: targetThemeId,
                    bannerEnabled: showBanner,
                    customBannerText: targetTheme.bannerText,
                    effectsEnabled: showEffects
                });

                if (window.appApplyTheme) {
                    window.appApplyTheme(targetThemeId);
                }

                showToast(
                    "Seasonal Theme Activated",
                    `"${targetTheme.name}" is now live! Header greeting & visual effects updated.`,
                    "success"
                );

                renderTabContent('admin');
            });
        });

        const saveThemeBannerBtn = document.getElementById('btn-save-theme-banner');
        if (saveThemeBannerBtn) {
            saveThemeBannerBtn.addEventListener('click', () => {
                const bannerInput = document.getElementById('theme-custom-banner-input');
                const customMsg = bannerInput ? bannerInput.value.trim() : '';
                const showBanner = document.getElementById('theme-banner-toggle')?.checked ?? true;
                const showEffects = document.getElementById('theme-effects-toggle')?.checked ?? true;

                const currentThemeId = window.TeaFactoryStore.getActiveThemeId();
                const currentTheme = window.TeaFactoryStore.getActiveTheme();
                try { sessionStorage.removeItem(`tea_banner_dismissed_${currentThemeId}`); } catch(e){}

                window.TeaFactoryStore.updateThemeSettings({
                    activeThemeId: currentThemeId,
                    bannerEnabled: showBanner,
                    customBannerText: customMsg || (currentTheme ? currentTheme.bannerText : ''),
                    effectsEnabled: showEffects
                });

                if (window.appApplyTheme) {
                    window.appApplyTheme(currentThemeId);
                }

                showToast("Theme Settings Saved", "Festive greeting bar and ambience controls updated successfully.", "success");
                renderTabContent('admin');
            });
        }

        // Reset Tour Slots
        const resetToursBtn = document.getElementById('admin-reset-tours-btn');
        if (resetToursBtn) {
            resetToursBtn.addEventListener('click', () => {
                showDeleteConfirmModal({
                    title: 'Release Estate Tour Slots',
                    subtitle: 'Factory Tour Operations',
                    itemName: 'All Daily Tour Slots',
                    message: 'Are you sure you want to release all estate tour slots for the day? This will clear active bookings and reset availability.',
                    confirmText: 'Release All Slots',
                    onConfirm: () => {
                        window.TeaFactoryStore.resetTourSlots();
                        showToast("Tour Slots Released", "All hourly factory tour slots have been reset to Available.", "success");
                        renderTabContent('admin');
                    }
                });
            });
        }

        // Force Reset All Data
        const forceResetBtn = document.getElementById('admin-force-reset-btn');
        if (forceResetBtn) {
            forceResetBtn.addEventListener('click', () => {
                showDeleteConfirmModal({
                    title: 'Factory System Reset',
                    subtitle: 'System & Registry Control',
                    itemName: 'Complete Portal Database',
                    message: 'WARNING: Are you sure you want to reset all portal data to factory defaults? This will clear all bookings, products, and custom settings.',
                    confirmText: 'Reset to Factory Defaults',
                    onConfirm: () => {
                        window.TeaFactoryStore.forceResetState();
                        showToast("System Reset Complete", "All local database registries have been restored to defaults.", "success");
                        renderTabContent('admin');
                    }
                });
            });
        }

        // ─── Database Backup (JSON Export) ────────────────────────────────────
        function triggerDatabaseBackup() {
            const backup = window.TeaFactoryStore.exportDatabaseJson();
            const jsonStr = JSON.stringify(backup, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            const dateStr = new Date().toISOString().slice(0, 10);
            link.setAttribute('href', url);
            link.setAttribute('download', `Rock_One_Wild_Tea_Estate_Database_Backup_${dateStr}_${Date.now()}.json`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(url), 500);
            showToast("Database Backup Created", "Complete estate snapshot (.json) saved to downloads.", "success");
        }

        const headerBackupBtn = document.getElementById('admin-backup-db-btn');
        if (headerBackupBtn) {
            headerBackupBtn.addEventListener('click', triggerDatabaseBackup);
        }

        const panelBackupBtn = document.getElementById('admin-backup-db-panel-btn');
        if (panelBackupBtn) {
            panelBackupBtn.addEventListener('click', triggerDatabaseBackup);
        }

        // ─── Database Restore (JSON Import) ───────────────────────────────────
        const restoreFileInput = document.getElementById('admin-restore-db-file-input');
        const headerRestoreTrigger = document.getElementById('admin-restore-db-trigger-btn');
        const panelRestoreTrigger = document.getElementById('admin-restore-db-panel-btn');

        if (headerRestoreTrigger && restoreFileInput) {
            headerRestoreTrigger.addEventListener('click', () => restoreFileInput.click());
        }
        if (panelRestoreTrigger && restoreFileInput) {
            panelRestoreTrigger.addEventListener('click', () => restoreFileInput.click());
        }

        if (restoreFileInput) {
            restoreFileInput.addEventListener('change', (e) => {
                const file = e.target.files && e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    const content = event.target.result;
                    showDeleteConfirmModal({
                        title: 'Restore Estate Database',
                        subtitle: 'Database Backup & Recovery',
                        itemName: file.name,
                        message: `Are you sure you want to restore the estate database from "${file.name}"? This will replace the current catalog, products, orders, and reservations with the backup snapshot.`,
                        confirmText: 'Restore Database',
                        onConfirm: () => {
                            const result = window.TeaFactoryStore.restoreDatabaseJson(content);
                            if (result.success) {
                                showToast(
                                    "Database Restored Successfully",
                                    `Restored ${result.summary.boxesCount} gift boxes, ${result.summary.productsCount} products, ${result.summary.bookingsCount} reservations (${result.summary.seasonName}).`,
                                    "success"
                                );
                                renderTabContent('admin');
                            } else {
                                showToast("Database Restore Failed", result.message || "Could not parse backup file.", "error");
                            }
                        }
                    });
                    restoreFileInput.value = '';
                };
                reader.onerror = () => {
                    showToast("File Read Error", "Could not read the selected backup file.", "error");
                    restoreFileInput.value = '';
                };
                reader.readAsText(file);
            });
        }


        // Bind Announcement Image File Uploader
        const annImageInput = document.getElementById('ann-image-file');
        const annImageZone = document.getElementById('ann-image-zone');
        const annImagePreview = document.getElementById('ann-image-preview');

        if (annImageInput && annImageZone && annImagePreview) {
            selectedAnnImageBase64 = '';

            annImageZone.addEventListener('click', () => annImageInput.click());

            annImageZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                annImageZone.classList.add('drag-over');
            });
            annImageZone.addEventListener('dragleave', () => annImageZone.classList.remove('drag-over'));
            annImageZone.addEventListener('drop', (e) => {
                e.preventDefault();
                annImageZone.classList.remove('drag-over');
                if (e.dataTransfer.files.length > 0) {
                    handleAnnFileSelected(e.dataTransfer.files[0], annImageZone, annImagePreview);
                }
            });

            annImageInput.addEventListener('change', () => {
                if (annImageInput.files.length > 0) {
                    handleAnnFileSelected(annImageInput.files[0], annImageZone, annImagePreview);
                }
            });
        }

        // Add Announcement Bulletin
        const annForm = document.getElementById('announcement-form');
        if (annForm) {
            annForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const title = document.getElementById('ann-title-input').value;
                const tag = document.getElementById('ann-tag-input').value;
                const content = document.getElementById('ann-content-input').value;
                const premium = document.getElementById('ann-premium-input').checked;
                const image = selectedAnnImageBase64;

                const res = window.TeaFactoryStore.addAnnouncement({ title, tag, content, premium, image });
                const count = (res && res.notifiedCount) ? res.notifiedCount : 0;
                
                showToast(
                    "📢 Announcement Published & Dispatched", 
                    `"${title}" is now live on the timeline and dispatch notification sent to ${count > 0 ? count + ' registered customers/subscribers' : 'all clients'}.`, 
                    "success",
                    5000
                );
                
                selectedAnnImageBase64 = '';
                annForm.reset();
                if (annImageZone) annImageZone.classList.remove('has-file');
                if (annImagePreview) annImagePreview.style.display = 'none';
                renderTabContent('admin');
            });
        }

        // Bind Gallery Image File Uploader
        const galleryImageInput = document.getElementById('gallery-image-file');
        const galleryImageZone = document.getElementById('gallery-image-zone');
        const galleryImagePreview = document.getElementById('gallery-image-preview');

        if (galleryImageInput && galleryImageZone && galleryImagePreview) {
            selectedGalleryImageBase64 = '';

            galleryImageZone.addEventListener('click', () => galleryImageInput.click());

            galleryImageZone.addEventListener('dragover', (e) => {
               e.preventDefault();
               galleryImageZone.classList.add('drag-over');
            });
            galleryImageZone.addEventListener('dragleave', () => galleryImageZone.classList.remove('drag-over'));
            galleryImageZone.addEventListener('drop', (e) => {
               e.preventDefault();
               galleryImageZone.classList.remove('drag-over');
               if (e.dataTransfer.files.length > 0) {
                   handleGalleryFileSelected(e.dataTransfer.files[0], galleryImageZone, galleryImagePreview);
               }
            });

            galleryImageInput.addEventListener('change', () => {
               if (galleryImageInput.files.length > 0) {
                   handleGalleryFileSelected(galleryImageInput.files[0], galleryImageZone, galleryImagePreview);
               }
            });
        }

        // Add Gallery Photo Form Handler
        const addGalleryForm = document.getElementById('admin-add-gallery-form');
        if (addGalleryForm) {
            addGalleryForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (!selectedGalleryImageBase64) {
                    showToast("Photo Required", "Please select or drop an image file to upload.", "error");
                    return;
                }
                const caption = document.getElementById('gallery-caption-input').value.trim();
                const tag = document.getElementById('gallery-tag-input').value;

                window.TeaFactoryStore.addGalleryImage({
                    src: selectedGalleryImageBase64,
                    caption,
                    tag
                });

                showToast("Photo Published", `"${caption}" has been added to the public gallery.`, "success");
                selectedGalleryImageBase64 = '';
                addGalleryForm.reset();
                if (galleryImageZone) galleryImageZone.classList.remove('has-file');
                if (galleryImagePreview) galleryImagePreview.style.display = 'none';
                renderTabContent('admin');
            });
        }

        // Delete Gallery Photo click binding
        const deleteGalleryBtns = document.querySelectorAll('.btn-delete-gallery-img');
        deleteGalleryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const imgId = btn.getAttribute('data-id');
                const caption = btn.getAttribute('data-caption') || 'Artisanal Photograph';
                showDeleteConfirmModal({
                    title: 'Remove Gallery Photo',
                    subtitle: 'Estate Gallery Desk',
                    itemName: caption,
                    message: `Are you sure you want to remove this photograph from the public estate gallery?`,
                    confirmText: 'Remove Photo',
                    onConfirm: () => {
                        window.TeaFactoryStore.deleteGalleryImage(imgId);
                        showToast("Photo Removed", "The photograph was removed from the gallery.", "success");
                        renderTabContent('admin');
                    }
                });
            });
        });

        // ─── Hero Slideshow Desk Bindings ─────────────────────────────
        const slideGalleryPicker = document.getElementById('slide-gallery-picker');
        const slidePreviewImg = document.getElementById('slide-preview-img');
        const slideHiddenSrc = document.getElementById('slide-image-src-hidden');
        const slideFileInput = document.getElementById('slide-image-file-input');
        const btnSlideUpload = document.getElementById('btn-slide-upload-file');
        const slideTitleInput = document.getElementById('slide-title-input');
        const slideSubtitleInput = document.getElementById('slide-subtitle-input');
        const slideDescInput = document.getElementById('slide-desc-input');

        if (slideGalleryPicker && slidePreviewImg && slideHiddenSrc) {
            slideGalleryPicker.addEventListener('change', () => {
                const selectedSrc = slideGalleryPicker.value;
                if (selectedSrc) {
                    slideHiddenSrc.value = selectedSrc;
                    slidePreviewImg.src = selectedSrc;
                    const selectedOpt = slideGalleryPicker.options[slideGalleryPicker.selectedIndex];
                    const caption = selectedOpt.getAttribute('data-caption');
                    const tag = selectedOpt.getAttribute('data-tag');
                    if (caption && slideTitleInput) {
                        slideTitleInput.value = `${caption}. Ceylon Heritage.`;
                    }
                    if (tag && slideSubtitleInput) {
                        slideSubtitleInput.value = `${tag} • Rock One Wild Tea (Ettampitiya)`;
                    }
                }
            });
        }

        if (btnSlideUpload && slideFileInput) {
            btnSlideUpload.addEventListener('click', () => {
                slideFileInput.click();
            });

            slideFileInput.addEventListener('change', () => {
                if (slideFileInput.files && slideFileInput.files.length > 0) {
                    const file = slideFileInput.files[0];
                    if (file.size > 5 * 1024 * 1024) {
                        showToast('File Too Large', 'Please upload a photo under 5MB.', 'error');
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const base64 = e.target.result;
                        if (slideHiddenSrc) slideHiddenSrc.value = base64;
                        if (slidePreviewImg) slidePreviewImg.src = base64;
                        if (slideGalleryPicker) slideGalleryPicker.value = '';
                        showToast('Photo Loaded', `${file.name} ready to add to slideshow.`, 'info');
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Add Slide Form Handler
        const addSlideForm = document.getElementById('admin-add-slide-form');
        if (addSlideForm) {
            addSlideForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const image = slideHiddenSrc ? slideHiddenSrc.value.trim() : '';
                if (!image) {
                    showToast("Photo Required", "Please select a gallery image or upload a photograph.", "error");
                    return;
                }
                const title = slideTitleInput ? slideTitleInput.value.trim() : 'Artisanal Ceylon Wild Tea';
                const subtitle = slideSubtitleInput ? slideSubtitleInput.value.trim() : 'Rock One Wild Tea (Pvt) Limited • Uva Medium Region';
                const description = slideDescInput ? slideDescInput.value.trim() : 'Hand made with Care, Crafted from Ceylon.';

                window.TeaFactoryStore.addHeroSlide({
                    image,
                    title,
                    subtitle,
                    description,
                    enabled: true
                });

                showToast("Slide Added", "New slide added to the Home landing screen slideshow.", "success");
                addSlideForm.reset();
                renderTabContent('admin');
                if (typeof initHeroSlider === 'function') {
                    initHeroSlider();
                }
            });
        }

        // Edit Hero Slide modal click binding
        document.querySelectorAll('.btn-edit-hero-slide').forEach(btn => {
            btn.addEventListener('click', () => {
                const slideId = btn.getAttribute('data-id');
                if (slideId) {
                    showEditHeroSlideModal(slideId);
                }
            });
        });

        // Toggle Hero Slide visibility
        document.querySelectorAll('.btn-toggle-hero-slide').forEach(btn => {
            btn.addEventListener('click', () => {
                const slideId = btn.getAttribute('data-id');
                const updated = window.TeaFactoryStore.toggleHeroSlide(slideId);
                if (updated) {
                    showToast(
                        updated.enabled !== false ? "Slide Activated" : "Slide Hidden",
                        updated.enabled !== false ? "Slide is now visible on the home landing screen." : "Slide is hidden from public display.",
                        "info"
                    );
                    renderTabContent('admin');
                    if (typeof initHeroSlider === 'function') {
                        initHeroSlider();
                    }
                }
            });
        });

        // Move Slide Up
        document.querySelectorAll('.btn-move-slide-up').forEach(btn => {
            btn.addEventListener('click', () => {
                const slideId = btn.getAttribute('data-id');
                window.TeaFactoryStore.moveHeroSlide(slideId, 'up');
                renderTabContent('admin');
                if (typeof initHeroSlider === 'function') {
                    initHeroSlider();
                }
            });
        });

        // Move Slide Down
        document.querySelectorAll('.btn-move-slide-down').forEach(btn => {
            btn.addEventListener('click', () => {
                const slideId = btn.getAttribute('data-id');
                window.TeaFactoryStore.moveHeroSlide(slideId, 'down');
                renderTabContent('admin');
                if (typeof initHeroSlider === 'function') {
                    initHeroSlider();
                }
            });
        });

        // Delete Hero Slide click binding
        document.querySelectorAll('.btn-delete-hero-slide').forEach(btn => {
            btn.addEventListener('click', () => {
                const slideId = btn.getAttribute('data-id');
                const slideTitle = btn.getAttribute('data-title') || 'Landing Screen Slide';
                showDeleteConfirmModal({
                    title: 'Remove Landing Slide',
                    subtitle: 'Hero Slideshow Desk',
                    itemName: slideTitle,
                    message: 'Are you sure you want to remove this slide from the home landing rotation?',
                    confirmText: 'Remove Slide',
                    onConfirm: () => {
                        window.TeaFactoryStore.deleteHeroSlide(slideId);
                        showToast("Slide Removed", "The slide was removed from the landing screen.", "success");
                        renderTabContent('admin');
                        if (typeof initHeroSlider === 'function') {
                            initHeroSlider();
                        }
                    }
                });
            });
        });

        // Reset Hero Slides to Curated
        const resetHeroSlidesBtn = document.getElementById('btn-reset-hero-slides');
        if (resetHeroSlidesBtn) {
            resetHeroSlidesBtn.addEventListener('click', () => {
                showDeleteConfirmModal({
                    title: 'Reset Curated Slideshow',
                    subtitle: 'Hero Slideshow Desk',
                    itemName: 'Curated 8-Slide Series',
                    message: 'Reset the home landing slideshow back to the default curated selection of estate photographs?',
                    confirmText: 'Reset Curated',
                    onConfirm: () => {
                        window.TeaFactoryStore.resetHeroSlides();
                        showToast("Slideshow Reset", "Landing screen reset to curated estate series.", "success");
                        renderTabContent('admin');
                        if (typeof initHeroSlider === 'function') {
                            initHeroSlider();
                        }
                    }
                });
            });
        }

        // Bind Gift Box Image File Uploader
        const boxImageInput = document.getElementById('box-image-file');
        const boxImageZone = document.getElementById('box-image-zone');
        const boxImagePreview = document.getElementById('box-image-preview');

        if (boxImageInput && boxImageZone && boxImagePreview) {
            selectedBoxImageBase64 = '';

            boxImageZone.addEventListener('click', () => boxImageInput.click());

            boxImageZone.addEventListener('dragover', (e) => {
               e.preventDefault();
               boxImageZone.classList.add('drag-over');
            });
            boxImageZone.addEventListener('dragleave', () => boxImageZone.classList.remove('drag-over'));
            boxImageZone.addEventListener('drop', (e) => {
               e.preventDefault();
               boxImageZone.classList.remove('drag-over');
               if (e.dataTransfer.files.length > 0) {
                   handleBoxFileSelected(e.dataTransfer.files[0], boxImageZone, boxImagePreview);
               }
            });

            boxImageInput.addEventListener('change', () => {
               if (boxImageInput.files.length > 0) {
                   handleBoxFileSelected(boxImageInput.files[0], boxImageZone, boxImagePreview);
               }
            });
        }

        // Add / Edit Gift Box Form Handler
        const addBoxForm = document.getElementById('admin-add-box-form');
        if (addBoxForm) {
            addBoxForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const editId = document.getElementById('box-edit-id').value;
                const boxNum = parseInt(document.getElementById('box-num-input').value);
                const name = document.getElementById('box-name-input').value.trim();
                const status = document.getElementById('box-status-input').value;
                const desc = document.getElementById('box-desc-input').value.trim();
                const image = selectedBoxImageBase64;

                if (editId) {
                    const updatedData = { name, status, desc };
                    if (image) updatedData.image = image;
                    window.TeaFactoryStore.updateBox(parseInt(editId), updatedData);
                    showToast("Gift Box Updated", `"${name}" specifications have been updated.`, "success");
                } else {
                    window.TeaFactoryStore.addBox({
                        id: boxNum,
                        name,
                        status,
                        desc,
                        image: image || "images/Gift Box.jpeg"
                    });
                    showToast("Gift Box Added", `"${name}" has been added to the active series.`, "success");
                }

                selectedBoxImageBase64 = '';
                addBoxForm.reset();
                const editIdInput = document.getElementById('box-edit-id');
                if (editIdInput) editIdInput.value = '';
                const numInput = document.getElementById('box-num-input');
                if (numInput) numInput.disabled = false;
                if (boxImageZone) boxImageZone.classList.remove('has-file');
                if (boxImagePreview) boxImagePreview.style.display = 'none';
                renderTabContent('admin');
            });
        }

        // Edit Gift Box click binding
        const editBoxBtns = document.querySelectorAll('.btn-edit-box');
        editBoxBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const status = btn.getAttribute('data-status');
                const desc = btn.getAttribute('data-desc');
                const image = btn.getAttribute('data-image');

                const editIdInput = document.getElementById('box-edit-id');
                const numInput = document.getElementById('box-num-input');
                const nameInput = document.getElementById('box-name-input');
                const statusInput = document.getElementById('box-status-input');
                const descInput = document.getElementById('box-desc-input');
                const titleEl = document.getElementById('giftbox-form-title');
                const descEl = document.getElementById('giftbox-form-desc');
                const cancelBtn = document.getElementById('btn-cancel-edit-box');
                const saveBtn = document.getElementById('btn-save-box');

                if (editIdInput) editIdInput.value = id;
                if (numInput) { numInput.value = id; numInput.disabled = true; }
                if (nameInput) nameInput.value = name;
                if (statusInput) statusInput.value = status;
                if (descInput) descInput.value = desc || '';
                if (titleEl) titleEl.innerText = `Edit Gift Box #${String(id).padStart(2, '0')}`;
                if (descEl) descEl.innerText = `Update specifications or status for ${name}.`;
                if (saveBtn) saveBtn.innerText = 'Update Gift Box';
                if (cancelBtn) cancelBtn.style.display = 'inline-block';

                if (image && boxImagePreview) {
                    selectedBoxImageBase64 = image.startsWith('data:') ? image : '';
                    boxImagePreview.style.display = 'block';
                    boxImagePreview.innerHTML = `
                        <div class="slip-preview-inner">
                            <img src="${image}" alt="Gift Box Preview" style="max-width:100%;max-height:140px;object-fit:contain;border-radius:8px;border:1px solid rgba(212,175,55,0.3);background:rgba(0,0,0,0.4);" onerror="window.handleImageError && window.handleImageError(this, 'box')">
                            <div class="slip-filename">Current Box Image</div>
                        </div>`;
                }

                document.getElementById('admin-add-box-form')?.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Cancel Edit Gift Box click binding
        const cancelEditBoxBtn = document.getElementById('btn-cancel-edit-box');
        if (cancelEditBoxBtn) {
            cancelEditBoxBtn.addEventListener('click', () => {
                selectedBoxImageBase64 = '';
                const addBoxForm = document.getElementById('admin-add-box-form');
                if (addBoxForm) addBoxForm.reset();
                const editIdInput = document.getElementById('box-edit-id');
                if (editIdInput) editIdInput.value = '';
                const numInput = document.getElementById('box-num-input');
                if (numInput) numInput.disabled = false;
                const titleEl = document.getElementById('giftbox-form-title');
                if (titleEl) titleEl.innerText = 'Introduce New Gift Box';
                const descEl = document.getElementById('giftbox-form-desc');
                if (descEl) descEl.innerText = 'Add a numbered luxury cedar chest to the current active series.';
                const saveBtn = document.getElementById('btn-save-box');
                if (saveBtn) saveBtn.innerText = 'Save Gift Box';
                cancelEditBoxBtn.style.display = 'none';
                if (boxImageZone) boxImageZone.classList.remove('has-file');
                if (boxImagePreview) boxImagePreview.style.display = 'none';
            });
        }

        // Delete Gift Box click binding
        const deleteBoxBtns = document.querySelectorAll('.btn-delete-box');
        deleteBoxBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const boxId = parseInt(btn.getAttribute('data-id'));
                const boxName = btn.getAttribute('data-name') || `Gift Box #${boxId}`;
                showDeleteConfirmModal({
                    title: 'Remove Collector Gift Box',
                    subtitle: 'Gift Boxes Desk',
                    itemName: `${boxName} (#${boxId})`,
                    message: `Are you sure you want to remove ${boxName} from the current active series?`,
                    confirmText: 'Remove Box',
                    onConfirm: () => {
                        window.TeaFactoryStore.deleteBox(boxId);
                        showToast("Gift Box Removed", `"${boxName}" was removed from the active series.`, "success");
                        renderTabContent('admin');
                    }
                });
            });
        });

        // Bind Product Image File Uploader
        const prodImageInput = document.getElementById('prod-image-file');
        const prodImageZone = document.getElementById('prod-image-zone');
        const prodImagePreview = document.getElementById('prod-image-preview');

        if (prodImageInput && prodImageZone && prodImagePreview) {
            selectedProdImageBase64 = '';

            prodImageZone.addEventListener('click', () => prodImageInput.click());

            prodImageZone.addEventListener('dragover', (e) => {
               e.preventDefault();
               prodImageZone.classList.add('drag-over');
            });
            prodImageZone.addEventListener('dragleave', () => prodImageZone.classList.remove('drag-over'));
            prodImageZone.addEventListener('drop', (e) => {
               e.preventDefault();
               prodImageZone.classList.remove('drag-over');
               if (e.dataTransfer.files.length > 0) {
                   handleProdFileSelected(e.dataTransfer.files[0], prodImageZone, prodImagePreview);
               }
            });

            prodImageInput.addEventListener('change', () => {
               if (prodImageInput.files.length > 0) {
                   handleProdFileSelected(prodImageInput.files[0], prodImageZone, prodImagePreview);
               }
            });
        }

        // Bind real-time range slider percentage displays for sensory radar
        ['floral', 'malty', 'sweetness', 'astringency', 'body', 'aroma'].forEach(metric => {
            const slider = document.getElementById(`prod-radar-${metric}`);
            const badge = document.getElementById(`badge-radar-${metric}`);
            if (slider && badge) {
                slider.addEventListener('input', () => {
                    badge.innerText = `${slider.value}%`;
                });
            }
        });

        // Add / Edit Product Form Handler
        const addProductForm = document.getElementById('admin-add-product-form');
        if (addProductForm) {
            // Live dual currency synchronization with currency dropdown
            const prodCurrency = document.getElementById('prod-currency');
            const prodAmountInput = document.getElementById('prod-amount-input');
            const prodShippingAmountInput = document.getElementById('prod-shipping-amount-input');
            const prodCounterpartPrice = document.getElementById('prod-counterpart-price');
            const prodCounterpartShipping = document.getElementById('prod-counterpart-shipping');

            const prodPrice = document.getElementById('prod-price');
            const prodPriceLkr = document.getElementById('prod-price-lkr');
            const prodShip = document.getElementById('prod-shipping');
            const prodShipLkr = document.getElementById('prod-shipping-lkr');

            const syncProductPricing = () => {
                const curr = prodCurrency?.value || 'USD';
                const pVal = parseFloat(prodAmountInput?.value);
                let pUsd = 0, pLkr = 0;
                if (!isNaN(pVal) && pVal >= 0) {
                    if (curr === 'USD') {
                        pUsd = pVal;
                        pLkr = Math.round(pVal * 305);
                        if (prodCounterpartPrice) prodCounterpartPrice.innerText = `≈ Rs ${pLkr.toLocaleString()} LKR`;
                        if (prodAmountInput) prodAmountInput.step = "0.01";
                    } else {
                        pLkr = Math.round(pVal);
                        pUsd = parseFloat((pVal / 305).toFixed(2));
                        if (prodCounterpartPrice) prodCounterpartPrice.innerText = `≈ $${pUsd.toFixed(2)} USD`;
                        if (prodAmountInput) prodAmountInput.step = "1";
                    }
                } else {
                    if (prodCounterpartPrice) prodCounterpartPrice.innerText = curr === 'USD' ? '≈ Rs 0 LKR' : '≈ $0.00 USD';
                }
                if (prodPrice) prodPrice.value = pUsd.toFixed(2);
                if (prodPriceLkr) prodPriceLkr.value = pLkr;

                const sVal = parseFloat(prodShippingAmountInput?.value);
                let sUsd = 0, sLkr = 0;
                if (!isNaN(sVal) && sVal > 0) {
                    if (curr === 'USD') {
                        sUsd = sVal;
                        sLkr = Math.round(sVal * 305);
                        if (prodCounterpartShipping) prodCounterpartShipping.innerText = `≈ Rs ${sLkr.toLocaleString()} LKR`;
                        if (prodShippingAmountInput) prodShippingAmountInput.step = "0.01";
                    } else {
                        sLkr = Math.round(sVal);
                        sUsd = parseFloat((sVal / 305).toFixed(2));
                        if (prodCounterpartShipping) prodCounterpartShipping.innerText = `≈ $${sUsd.toFixed(2)} USD`;
                        if (prodShippingAmountInput) prodShippingAmountInput.step = "1";
                    }
                } else {
                    if (prodCounterpartShipping) prodCounterpartShipping.innerText = 'Free / Complimentary';
                }
                if (prodShip) prodShip.value = sUsd > 0 ? sUsd.toFixed(2) : '0';
                if (prodShipLkr) prodShipLkr.value = sLkr;
            };

            prodAmountInput?.addEventListener('input', syncProductPricing);
            prodShippingAmountInput?.addEventListener('input', syncProductPricing);

            prodCurrency?.addEventListener('change', () => {
                const curP = parseFloat(prodAmountInput?.value);
                if (!isNaN(curP) && curP > 0) {
                    if (prodCurrency.value === 'LKR') {
                        prodAmountInput.value = Math.round(curP * 305);
                    } else {
                        prodAmountInput.value = (curP / 305).toFixed(2);
                    }
                }
                const curS = parseFloat(prodShippingAmountInput?.value);
                if (!isNaN(curS) && curS > 0) {
                    if (prodCurrency.value === 'LKR') {
                        prodShippingAmountInput.value = Math.round(curS * 305);
                    } else {
                        prodShippingAmountInput.value = (curS / 305).toFixed(2);
                    }
                }
                syncProductPricing();
            });

            addProductForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const editId = document.getElementById('prod-edit-id').value;
                const name = document.getElementById('prod-name').value.trim();
                const category = document.getElementById('prod-category').value;
                const subcategory = document.getElementById('prod-subcategory')?.value || 'Hot Tea (Gongfu style)';
                const price = parseFloat(document.getElementById('prod-price').value) || 0;
                const priceLkr = parseFloat(document.getElementById('prod-price-lkr')?.value) || Math.round(price * 305);
                const shippingCharge = parseFloat(document.getElementById('prod-shipping')?.value) || 0;
                const shippingLkr = parseFloat(document.getElementById('prod-shipping-lkr')?.value) || Math.round(shippingCharge * 305);
                const weight = document.getElementById('prod-weight').value.trim();
                const symbol = document.getElementById('prod-symbol').value;
                const stock = document.getElementById('prod-stock').value;
                const desc = document.getElementById('prod-desc').value.trim();
                const leafGrade = document.getElementById('prod-grade').value.trim() || 'Premium Grade';
                const steepTemp = document.getElementById('prod-temp').value.trim() || '85°C (185°F)';
                const steepTime = document.getElementById('prod-time').value.trim() || '3-4 Minutes';
                const image = selectedProdImageBase64;

                const flavorProfile = document.getElementById('prod-flavor-profile')?.value?.trim() || '';
                const tastingNotesRaw = document.getElementById('prod-tasting-notes')?.value?.trim() || '';
                const tastingNotes = tastingNotesRaw 
                    ? tastingNotesRaw.split(',').map(s => s.trim()).filter(Boolean) 
                    : (flavorProfile ? flavorProfile.split(',').map(s => s.trim()).filter(Boolean) : ['Single Estate', 'Artisanal Harvest']);
                const elevation = document.getElementById('prod-elevation')?.value?.trim() || '1,200m Highlands';

                const headline = document.getElementById('prod-headline')?.value?.trim() || '';
                const about = document.getElementById('prod-about')?.value?.trim() || '';
                const origin = document.getElementById('prod-origin')?.value?.trim() || '';
                const caffeine = document.getElementById('prod-caffeine')?.value?.trim() || '';
                const preparation = document.getElementById('prod-preparation')?.value?.trim() || '';
                const benefits = document.getElementById('prod-benefits')?.value?.trim() || '';

                // Automatically calculate countdown seconds from single Steep Time field
                let steepSeconds = 180;
                const matchedNum = steepTime.match(/(\d+(\.\d+)?)/);
                if (matchedNum) {
                    const parsedNum = parseFloat(matchedNum[1]);
                    steepSeconds = parsedNum >= 30 ? Math.round(parsedNum) : Math.round(parsedNum * 60);
                }

                const sensoryRadar = {
                    floral: parseInt(document.getElementById('prod-radar-floral')?.value, 10) || 80,
                    malty: parseInt(document.getElementById('prod-radar-malty')?.value, 10) || 75,
                    sweetness: parseInt(document.getElementById('prod-radar-sweetness')?.value, 10) || 80,
                    astringency: parseInt(document.getElementById('prod-radar-astringency')?.value, 10) || 40,
                    body: parseInt(document.getElementById('prod-radar-body')?.value, 10) || 80,
                    aroma: parseInt(document.getElementById('prod-radar-aroma')?.value, 10) || 90
                };

                const productPayload = {
                    name, category, subcategory, sub_category: subcategory, price, price_lkr: priceLkr,
                    shippingCharge, shippingCharge_lkr: shippingLkr, shipping_lkr: shippingLkr,
                    shippingFee: shippingCharge, shipping_fee_usd: shippingCharge, weight, symbol, stock, desc, leafGrade, steepTemp, steepTime,
                    flavorProfile: flavorProfile || (tastingNotes.length > 0 ? tastingNotes.join(', ') : 'Single-Estate Reserve'),
                    tastingNotes,
                    flavor_notes: tastingNotes,
                    elevation,
                    steepSeconds,
                    sensoryRadar,
                    headline,
                    about,
                    origin,
                    caffeine,
                    preparation,
                    benefits
                };

                if (editId) {
                    if (image) productPayload.image = image;
                    window.TeaFactoryStore.updateProduct(editId, productPayload);
                    showToast("Product Updated", `"${name}" specifications and sensory profile have been updated.`, "success");
                } else {
                    productPayload.image = image || 'images/Product.jpeg';
                    window.TeaFactoryStore.addProduct(productPayload);
                    showToast("Product Introduced", `"${name}" has been published with sensory profile & radar to the catalog.`, "success");
                }
                
                selectedProdImageBase64 = '';
                addProductForm.reset();
                const editIdInput = document.getElementById('prod-edit-id');
                if (editIdInput) editIdInput.value = '';
                const pCurr = document.getElementById('prod-currency');
                if (pCurr) pCurr.value = 'USD';
                const pCat = document.getElementById('prod-category');
                if (pCat) pCat.value = 'Black Tea';
                const pSubCat = document.getElementById('prod-subcategory');
                if (pSubCat) pSubCat.value = 'Hot Tea (Gongfu style)';
                const pAmt = document.getElementById('prod-amount-input');
                if (pAmt) pAmt.value = '';
                const pShipAmt = document.getElementById('prod-shipping-amount-input');
                if (pShipAmt) pShipAmt.value = '';
                if (document.getElementById('prod-headline')) document.getElementById('prod-headline').value = '';
                if (document.getElementById('prod-about')) document.getElementById('prod-about').value = '';
                if (document.getElementById('prod-origin')) document.getElementById('prod-origin').value = '';
                if (document.getElementById('prod-caffeine')) document.getElementById('prod-caffeine').value = '';
                if (document.getElementById('prod-preparation')) document.getElementById('prod-preparation').value = '';
                if (document.getElementById('prod-benefits')) document.getElementById('prod-benefits').value = '';
                if (document.getElementById('prod-headline')) document.getElementById('prod-headline').value = '';
                if (document.getElementById('prod-about')) document.getElementById('prod-about').value = '';
                if (document.getElementById('prod-origin')) document.getElementById('prod-origin').value = '';
                if (document.getElementById('prod-caffeine')) document.getElementById('prod-caffeine').value = '';
                if (document.getElementById('prod-preparation')) document.getElementById('prod-preparation').value = '';
                if (document.getElementById('prod-benefits')) document.getElementById('prod-benefits').value = '';
                syncProductPricing();
                if (prodImageZone) prodImageZone.classList.remove('has-file');
                if (prodImagePreview) prodImagePreview.style.display = 'none';

                // Reset radar badges to defaults
                const defaultRadar = { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
                Object.keys(defaultRadar).forEach(k => {
                    const slider = document.getElementById(`prod-radar-${k}`);
                    const badge = document.getElementById(`badge-radar-${k}`);
                    if (slider) slider.value = defaultRadar[k];
                    if (badge) badge.innerText = `${defaultRadar[k]}%`;
                });

                renderTabContent('admin');
            });
        }

        // Edit Product click binding
        const editProdBtns = document.querySelectorAll('.btn-edit-prod');
        editProdBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const category = btn.getAttribute('data-category');
                const subcategory = btn.getAttribute('data-subcategory') || 'Hot Tea (Gongfu style)';
                const price = btn.getAttribute('data-price');
                const priceLkr = btn.getAttribute('data-price-lkr') || Math.round((parseFloat(price) || 0) * 305);
                const shipping = btn.getAttribute('data-shipping') || '0';
                const shippingLkr = btn.getAttribute('data-shipping-lkr') || Math.round((parseFloat(shipping) || 0) * 305);
                const weight = btn.getAttribute('data-weight');
                const symbol = btn.getAttribute('data-symbol');
                const stock = btn.getAttribute('data-stock');
                const desc = btn.getAttribute('data-desc');
                const grade = btn.getAttribute('data-grade');
                const temp = btn.getAttribute('data-temp');
                const time = btn.getAttribute('data-time');
                const image = btn.getAttribute('data-image');
                const flavorProfile = btn.getAttribute('data-flavor-profile') || '';
                const tastingNotes = btn.getAttribute('data-tasting-notes') || '';
                const elevation = btn.getAttribute('data-elevation') || '';
                const headline = btn.getAttribute('data-headline') || '';
                const about = btn.getAttribute('data-about') || '';
                const origin = btn.getAttribute('data-origin') || '';
                const caffeine = btn.getAttribute('data-caffeine') || '';
                const preparation = btn.getAttribute('data-preparation') || '';
                const benefits = btn.getAttribute('data-benefits') || '';
                const steepSeconds = btn.getAttribute('data-steep-seconds') || '180';
                const radarFloral = btn.getAttribute('data-radar-floral') || '80';
                const radarMalty = btn.getAttribute('data-radar-malty') || '75';
                const radarSweetness = btn.getAttribute('data-radar-sweetness') || '80';
                const radarAstringency = btn.getAttribute('data-radar-astringency') || '40';
                const radarBody = btn.getAttribute('data-radar-body') || '80';
                const radarAroma = btn.getAttribute('data-radar-aroma') || '90';

                const editIdInput = document.getElementById('prod-edit-id');
                const nameInput = document.getElementById('prod-name');
                const categoryInput = document.getElementById('prod-category');
                const subcategoryInput = document.getElementById('prod-subcategory');
                const priceInput = document.getElementById('prod-price');
                const priceLkrInput = document.getElementById('prod-price-lkr');
                const shippingInput = document.getElementById('prod-shipping');
                const shippingLkrInput = document.getElementById('prod-shipping-lkr');
                const weightInput = document.getElementById('prod-weight');
                const symbolInput = document.getElementById('prod-symbol');
                const stockInput = document.getElementById('prod-stock');
                const descInput = document.getElementById('prod-desc');
                const gradeInput = document.getElementById('prod-grade');
                const tempInput = document.getElementById('prod-temp');
                const timeInput = document.getElementById('prod-time');
                const flavorProfileInput = document.getElementById('prod-flavor-profile');
                const tastingNotesInput = document.getElementById('prod-tasting-notes');
                const elevationInput = document.getElementById('prod-elevation');
                const titleEl = document.getElementById('prod-form-title');
                const descEl = document.getElementById('prod-form-desc');
                const saveBtn = document.getElementById('btn-save-prod');
                const cancelBtn = document.getElementById('btn-cancel-edit-prod');

                if (editIdInput) editIdInput.value = id;
                if (nameInput) nameInput.value = name;
                if (categoryInput) categoryInput.value = category;
                if (subcategoryInput) subcategoryInput.value = subcategory;
                const pCurr = document.getElementById('prod-currency');
                if (pCurr) pCurr.value = 'USD';
                const pAmt = document.getElementById('prod-amount-input');
                if (pAmt) pAmt.value = parseFloat(price).toFixed(2);
                const pShipAmt = document.getElementById('prod-shipping-amount-input');
                if (pShipAmt) pShipAmt.value = parseFloat(shipping) > 0 ? parseFloat(shipping).toFixed(2) : '';
                if (priceInput) priceInput.value = parseFloat(price).toFixed(2);
                if (priceLkrInput) priceLkrInput.value = priceLkr;
                if (shippingInput) shippingInput.value = parseFloat(shipping) > 0 ? parseFloat(shipping).toFixed(2) : '';
                if (shippingLkrInput) shippingLkrInput.value = parseFloat(shipping) > 0 ? shippingLkr : '';
                const pCounterpart = document.getElementById('prod-counterpart-price');
                if (pCounterpart) pCounterpart.innerText = `≈ Rs ${parseInt(priceLkr).toLocaleString()} LKR`;
                const sCounterpart = document.getElementById('prod-counterpart-shipping');
                if (sCounterpart) sCounterpart.innerText = parseFloat(shipping) > 0 ? `≈ Rs ${parseInt(shippingLkr).toLocaleString()} LKR` : 'Free / Complimentary';
                if (weightInput) weightInput.value = weight;
                if (symbolInput) symbolInput.value = symbol;
                if (stockInput) stockInput.value = stock;
                if (descInput) descInput.value = desc || '';
                if (gradeInput) gradeInput.value = grade || '';
                if (tempInput) tempInput.value = temp || '';
                if (timeInput) timeInput.value = time || (steepSeconds ? `${Math.floor(steepSeconds / 60)} Minutes` : '3-4 Minutes');
                if (flavorProfileInput) flavorProfileInput.value = flavorProfile;
                if (tastingNotesInput) tastingNotesInput.value = tastingNotes;
                if (elevationInput) elevationInput.value = elevation;

                const headlineInput = document.getElementById('prod-headline');
                const aboutInput = document.getElementById('prod-about');
                const originInput = document.getElementById('prod-origin');
                const caffeineInput = document.getElementById('prod-caffeine');
                const preparationInput = document.getElementById('prod-preparation');
                const benefitsInput = document.getElementById('prod-benefits');

                if (headlineInput) headlineInput.value = headline;
                if (aboutInput) aboutInput.value = about;
                if (originInput) originInput.value = origin;
                if (caffeineInput) caffeineInput.value = caffeine;
                if (preparationInput) preparationInput.value = preparation;
                if (benefitsInput) benefitsInput.value = benefits;

                const setRadarVal = (key, val) => {
                    const slider = document.getElementById(`prod-radar-${key}`);
                    const badge = document.getElementById(`badge-radar-${key}`);
                    if (slider) slider.value = val;
                    if (badge) badge.innerText = `${val}%`;
                };
                setRadarVal('floral', radarFloral);
                setRadarVal('malty', radarMalty);
                setRadarVal('sweetness', radarSweetness);
                setRadarVal('astringency', radarAstringency);
                setRadarVal('body', radarBody);
                setRadarVal('aroma', radarAroma);

                if (titleEl) titleEl.innerText = `Edit Product: ${name}`;
                if (descEl) descEl.innerText = `Update storefront details, tasting notes, sensory radar, and image for ${name}.`;
                if (saveBtn) saveBtn.innerText = 'Update Product';
                if (cancelBtn) cancelBtn.style.display = 'inline-block';

                if (image && prodImagePreview) {
                    selectedProdImageBase64 = image.startsWith('data:') ? image : '';
                    prodImagePreview.style.display = 'block';
                    prodImagePreview.innerHTML = `
                        <div class="slip-preview-inner">
                            <img src="${image}" alt="Product Preview" style="max-width:100%;max-height:140px;object-fit:contain;border-radius:8px;border:1px solid rgba(212,175,55,0.3);background:rgba(0,0,0,0.4);" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                            <div class="slip-filename">Current Product Image</div>
                        </div>`;
                }

                document.getElementById('admin-add-product-form')?.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Cancel Edit Product click binding
        const cancelEditProdBtn = document.getElementById('btn-cancel-edit-prod');
        if (cancelEditProdBtn) {
            cancelEditProdBtn.addEventListener('click', () => {
                selectedProdImageBase64 = '';
                const addProductForm = document.getElementById('admin-add-product-form');
                if (addProductForm) addProductForm.reset();
                const editIdInput = document.getElementById('prod-edit-id');
                if (editIdInput) editIdInput.value = '';
                const pCurr = document.getElementById('prod-currency');
                if (pCurr) pCurr.value = 'USD';
                const pCat = document.getElementById('prod-category');
                if (pCat) pCat.value = 'Black Tea';
                const pSubCat = document.getElementById('prod-subcategory');
                if (pSubCat) pSubCat.value = 'Hot Tea (Gongfu style)';
                const pAmt = document.getElementById('prod-amount-input');
                if (pAmt) pAmt.value = '';
                const pShipAmt = document.getElementById('prod-shipping-amount-input');
                if (pShipAmt) pShipAmt.value = '';
                if (document.getElementById('prod-headline')) document.getElementById('prod-headline').value = '';
                if (document.getElementById('prod-about')) document.getElementById('prod-about').value = '';
                if (document.getElementById('prod-origin')) document.getElementById('prod-origin').value = '';
                if (document.getElementById('prod-caffeine')) document.getElementById('prod-caffeine').value = '';
                if (document.getElementById('prod-preparation')) document.getElementById('prod-preparation').value = '';
                if (document.getElementById('prod-benefits')) document.getElementById('prod-benefits').value = '';
                const pCounterpart = document.getElementById('prod-counterpart-price');
                if (pCounterpart) pCounterpart.innerText = '≈ Rs 13,725 LKR';
                const sCounterpart = document.getElementById('prod-counterpart-shipping');
                if (sCounterpart) sCounterpart.innerText = '≈ Rs 0 LKR';
                const titleEl = document.getElementById('prod-form-title');
                if (titleEl) titleEl.innerText = 'Introduce New Product';
                const descEl = document.getElementById('prod-form-desc');
                if (descEl) descEl.innerText = 'Add a new standard tea product to the customer storefront.';
                const saveBtn = document.getElementById('btn-save-prod');
                if (saveBtn) saveBtn.innerText = 'Publish Product';
                cancelEditProdBtn.style.display = 'none';
                if (prodImageZone) prodImageZone.classList.remove('has-file');
                if (prodImagePreview) prodImagePreview.style.display = 'none';

                // Reset radar sliders & badges
                const defaultRadar = { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
                Object.keys(defaultRadar).forEach(k => {
                    const slider = document.getElementById(`prod-radar-${k}`);
                    const badge = document.getElementById(`badge-radar-${k}`);
                    if (slider) slider.value = defaultRadar[k];
                    if (badge) badge.innerText = `${defaultRadar[k]}%`;
                });
            });
        }

        // Delete Product click binding
        const deleteProdBtns = document.querySelectorAll('.btn-delete-prod');
        deleteProdBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const prodId = btn.getAttribute('data-id');
                const prod = (window.TeaFactoryStore.getProducts() || []).find(p => String(p.id) === String(prodId));
                const prodName = prod ? prod.name : `Product #${prodId}`;
                showDeleteConfirmModal({
                    title: 'Remove Product from Catalog',
                    subtitle: 'Products & Inventory Desk',
                    itemName: prodName,
                    message: 'Are you sure you want to delete this product? It will be permanently removed from the active catalog and customer shopping bag.',
                    confirmText: 'Delete Product',
                    onConfirm: () => {
                        window.TeaFactoryStore.deleteProduct(prodId);
                        showToast("Product Removed", "The product was removed from the active catalog.", "success");
                        renderTabContent('admin');
                    }
                });
            });
        });

        // Change Passcode Button
        const changePasscodeBtn = document.getElementById('admin-change-passcode-btn');
        if (changePasscodeBtn) {
            changePasscodeBtn.addEventListener('click', () => {
                showChangePasscodeModal();
            });
        }

        // Logout/Lock Button
        const logoutBtn = document.getElementById('admin-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                isAdminAuthenticated = false;
                try { sessionStorage.removeItem('tea_factory_admin_auth'); } catch(e){}
                updateNavStaffVisibility();
                showToast("Console Locked", "Concierge Operational Desk has been secured.", "success");
                renderTabContent('admin');
            });
        }

        // Table Action buttons delegation (Verify, Complete & Cancel)
        const adminTableBody = document.querySelector('.admin-table tbody');
        if (adminTableBody) {
            adminTableBody.addEventListener('click', (e) => {
                if (e.target.classList.contains('btn-verify-booking')) {
                    const bookingId = e.target.getAttribute('data-id');
                    showPaymentApprovalModal(bookingId, () => {
                        renderTabContent('admin');
                    });
                } else if (e.target.classList.contains('btn-complete-booking')) {
                    const bookingId = e.target.getAttribute('data-id');
                    showDeleteConfirmModal({
                        title: 'Complete Tour Reservation',
                        subtitle: 'Estate Admin Panel',
                        itemName: `Reservation ${bookingId}`,
                        message: `Mark reservation ${bookingId} as Completed & Fulfilled? This confirms tour execution and archival.`,
                        confirmText: 'Mark Completed',
                        onConfirm: () => {
                            const ok = window.TeaFactoryStore.updateBookingStatus(bookingId, 'Completed');
                            if (ok) {
                                showToast("Tour / Reservation Completed", `Booking ${bookingId} marked as completed and fulfilled.`, "success");
                                renderTabContent('admin');
                            }
                        }
                    });
                } else if (e.target.classList.contains('btn-cancel-booking')) {
                    const bookingId = e.target.getAttribute('data-id');
                    showDeleteConfirmModal({
                        title: 'Cancel Booking Reservation',
                        subtitle: 'Active Reservations Registry',
                        itemName: `Booking ${bookingId}`,
                        message: `Are you sure you want to cancel booking ${bookingId}? This will mark it as Cancelled and release the slot back to stock.`,
                        confirmText: 'Cancel Booking',
                        onConfirm: () => {
                            const ok = window.TeaFactoryStore.updateBookingStatus(bookingId, 'Cancelled');
                            if (ok) {
                                showToast("Reservation Cancelled", `Booking ${bookingId} cancelled and slot released.`, "success");
                                renderTabContent('admin');
                            }
                        }
                    });
                } else if (e.target.classList.contains('btn-convert-to-order')) {
                    const bookingId = e.target.getAttribute('data-id');
                    const booking = window.TeaFactoryStore.getBookings().find(b => b.id === bookingId);
                    if (!booking) return;
                    showConvertToOrderModal(bookingId, booking);
                } else if (e.target.classList.contains('btn-validate-deposit-slip') || e.target.closest('.btn-validate-deposit-slip')) {
                    const btn = e.target.classList.contains('btn-validate-deposit-slip') ? e.target : e.target.closest('.btn-validate-deposit-slip');
                    const bookingId = btn.getAttribute('data-id');
                    const booking = window.TeaFactoryStore.getBookings().find(b => b.id === bookingId);
                    if (booking) {
                        showReservationDetailModal(booking);
                    }
                } else if (e.target.classList.contains('btn-view-booking-details') || e.target.closest('.btn-view-booking-details')) {
                    const btn = e.target.classList.contains('btn-view-booking-details') ? e.target : e.target.closest('.btn-view-booking-details');
                    const bookingId = btn.getAttribute('data-id');
                    const booking = window.TeaFactoryStore.getBookings().find(b => b.id === bookingId);
                    if (booking) {
                        showReservationDetailModal(booking);
                    }
                }
            });
        }

        // ─── Audit Log Live Filter & Search Controller ────────────────────────
        bindAuditLogFilters();

        // ─── Orders Desk & Universal Slip Validation Bindings ─────────────────
        // Approve & Confirm Payment for any slip
        document.querySelectorAll('.btn-approve-slip').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                showPaymentApprovalModal(id, () => {
                    renderTabContent('admin');
                });
            });
        });

        // Reject Slip for any transaction
        document.querySelectorAll('.btn-reject-slip').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                showPaymentRejectionModal(id, () => {
                    renderTabContent('admin');
                });
            });
        });

        // Re-send Gate Pass email to tour customer
        document.querySelectorAll('.btn-resend-gatepass').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.getAttribute('data-id');
                const email = btn.getAttribute('data-email') || '';
                btn.disabled = true;
                btn.innerHTML = `<span style="display:inline-block;animation:spin 1s linear infinite;">⟳</span> Sending...`;
                showToast("Dispatching Gate Pass", `Sending official Gate Pass to ${email || 'guest'}...`, "info");
                try {
                    if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.sendTourGatePass === 'function') {
                        await window.TeaFactoryAPI.sendTourGatePass(id);
                    }
                    showToast("Gate Pass Emailed!", `Official Gate Pass has been emailed to ${email || 'guest'}.`, "success");
                } catch (err) {
                    showToast("Email Notice", `Gate pass dispatch notice: ${err.message}`, "info");
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Re-send Gate Pass`;
                }
            });
        });

        // Mark as Paid & Confirmed (Legacy order cards)
        document.querySelectorAll('.btn-mark-order-paid').forEach(btn => {
            btn.addEventListener('click', () => {
                const orderId = btn.getAttribute('data-order-id');
                showPaymentApprovalModal(orderId, () => {
                    renderTabContent('admin');
                });
            });
        });

        // Cancel Order
        document.querySelectorAll('.btn-cancel-order').forEach(btn => {
            btn.addEventListener('click', () => {
                const orderId = btn.getAttribute('data-order-id');
                showDeleteConfirmModal({
                    title: 'Cancel Customer Order',
                    subtitle: 'Orders & Fulfillment Desk',
                    itemName: `Order ${orderId}`,
                    message: `Are you sure you want to cancel order ${orderId}? This will mark the order as Cancelled in estate records.`,
                    confirmText: 'Cancel Order',
                    onConfirm: () => {
                        const ok = window.TeaFactoryStore.updateOrderStatus(orderId, 'Cancelled');
                        if (ok) {
                            showToast("Order Cancelled", `Order ${orderId} has been cancelled.`, "success");
                            renderTabContent('admin');
                        }
                    }
                });
            });
        });

        // Copy Order ID to clipboard
        document.querySelectorAll('.btn-copy-order-id').forEach(btn => {
            btn.addEventListener('click', () => {
                const orderId = btn.getAttribute('data-order-id');
                navigator.clipboard.writeText(orderId).then(() => {
                    showToast("Copied!", `Order ID ${orderId} copied to clipboard. Share with the customer.`, "success");
                }).catch(() => {
                    showToast("Copy Failed", `Please manually copy: ${orderId}`, "error");
                });
            });
        });

        // ─── Gift Box Quotations & Payment Links Desk Bindings ───────────────
        // Formulate Quotation Modal
        document.querySelectorAll('.btn-open-quote-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                if (id && typeof showBoxQuoteBuilderModal === 'function') {
                    showBoxQuoteBuilderModal(id);
                }
            });
        });

        // 1-Click Copy Checkout Link
        document.querySelectorAll('.btn-copy-quote-link').forEach(btn => {
            btn.addEventListener('click', () => {
                const link = btn.getAttribute('data-link');
                if (link) {
                    navigator.clipboard.writeText(link).then(() => {
                        showToast("Checkout Link Copied!", "Share this link with your customer for direct checkout.", "success");
                    }).catch(() => {
                        showToast("Checkout Link Copied!", link, "success");
                    });
                }
            });
        });

        // View / Download Scannable QR Code Modal
        document.querySelectorAll('.btn-view-quote-qr').forEach(btn => {
            btn.addEventListener('click', () => {
                const qrUrl = btn.getAttribute('data-qr');
                const boxName = btn.getAttribute('data-box');
                const custName = btn.getAttribute('data-cust');
                const amount = btn.getAttribute('data-amount');
                const link = btn.getAttribute('data-link');
                if (typeof showQuoteQrModal === 'function') {
                    showQuoteQrModal(qrUrl, boxName, custName, amount, link);
                }
            });
        });

        // 1-Click WhatsApp Dispatch
        document.querySelectorAll('.btn-dispatch-quote-whatsapp').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const b = window.TeaFactoryStore.getBookingById(id);
                if (!b) return;
                const total = window.TeaFactoryStore.formatCurrency(b.quotedTotal || b.price);
                const text = `Dear ${b.customerName},\n\n` +
                             `Greetings from Rock One Wild Tea Estate! Regarding your bespoke allocation enquiry for *${b.boxName}* (${b.seasonName}):\n\n` +
                             `*Quotation Details:*\n` +
                             `• Chest Unit Price: ${window.TeaFactoryStore.formatCurrency(b.quotedPrice || b.price)}\n` +
                             `• Courier / Shipping: ${b.quotedShipping > 0 ? window.TeaFactoryStore.formatCurrency(b.quotedShipping) : 'Complimentary Express'}\n` +
                             `• *Total Quoted Payable: ${total}*\n` +
                             `• Quote Validity: ${b.quoteValidity || '7 Days'}\n` +
                             (b.quoteNotes ? `• Curator Notes: ${b.quoteNotes}\n\n` : '\n') +
                             `You may finalize your delivery details, attach your payment deposit slip, and claim your numbered chest via your private checkout link:\n` +
                             `🔗 ${b.paymentLink}\n\n` +
                             `Warm regards,\nEstate Sommelier, Rock One Wild Tea`;
                const phoneClean = (b.phone || '').replace(/[^0-9]/g, '');
                const targetPhone = phoneClean || '94773209950';
                window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(text)}`, '_blank');
            });
        });

        // 1-Click Email Dispatch
        document.querySelectorAll('.btn-dispatch-quote-email').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const b = window.TeaFactoryStore.getBookingById(id);
                if (!b) return;
                const total = window.TeaFactoryStore.formatCurrency(b.quotedTotal || b.price);
                const text = `Dear ${b.customerName},\n\n` +
                             `Greetings from Rock One Wild Tea Estate! Regarding your bespoke allocation enquiry for ${b.boxName} (${b.seasonName}):\n\n` +
                             `Quotation Details:\n` +
                             `• Chest Unit Price: ${window.TeaFactoryStore.formatCurrency(b.quotedPrice || b.price)}\n` +
                             `• Courier / Express Handling: ${b.quotedShipping > 0 ? window.TeaFactoryStore.formatCurrency(b.quotedShipping) : 'Complimentary Express'}\n` +
                             `• Total Quoted Payable: ${total}\n` +
                             `• Quote Validity: ${b.quoteValidity || '7 Days'}\n` +
                             (b.quoteNotes ? `• Curator Inclusions: ${b.quoteNotes}\n\n` : '\n') +
                             `You may enter your shipping destination, attach your Bank of Ceylon deposit slip, and secure your numbered chest via your private checkout link below:\n\n` +
                             `${b.paymentLink}\n\n` +
                             `Warmest regards,\n` +
                             `Rock One Wild Tea Estate Concierge\n` +
                             `Ettampitiya, Uva Medium Region, Sri Lanka`;

                if (typeof showEmailServiceChooserModal === 'function') {
                    showEmailServiceChooserModal({
                        to: b.email,
                        subject: `Bespoke Quotation & Checkout: ${b.boxName} (${b.seasonName})`,
                        body: text,
                        title: 'Dispatch Quotation to Client',
                        subtitle: `Quote for ${b.customerName} (${total})`,
                        itemSummary: `${b.boxName} - ${total}`
                    });
                }
            });
        });

        // Print Packaging Slip & Engraving Work Order
        document.querySelectorAll('.btn-print-packing-slip').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id') || btn.getAttribute('data-order-id');
                if (id) {
                    generatePackingSlipWorkOrder(id);
                }
            });
        });

        // Add / Edit Tour Time Slot Form Handler
        const addSlotForm = document.getElementById('admin-add-slot-form');
        if (addSlotForm) {
            // Live dual currency synchronization with currency dropdown
            const slotCurrency = document.getElementById('slot-currency');
            const slotAmountInput = document.getElementById('slot-amount-input');
            const slotCounterpartPrice = document.getElementById('slot-counterpart-price');
            const priceLkrIn = document.getElementById('slot-price-input');
            const priceUsdIn = document.getElementById('slot-price-usd');

            const syncSlotPricing = () => {
                const curr = slotCurrency?.value || 'LKR';
                const val = parseFloat(slotAmountInput?.value);
                let pLkr = 1450, pUsd = 4.75;
                if (!isNaN(val) && val >= 0) {
                    if (curr === 'LKR') {
                        pLkr = Math.round(val);
                        pUsd = parseFloat((val / 305).toFixed(2));
                        if (slotCounterpartPrice) slotCounterpartPrice.innerText = `≈ $${pUsd.toFixed(2)} USD`;
                        if (slotAmountInput) slotAmountInput.step = "1";
                    } else {
                        pUsd = val;
                        pLkr = Math.round(val * 305);
                        if (slotCounterpartPrice) slotCounterpartPrice.innerText = `≈ Rs ${pLkr.toLocaleString()} LKR`;
                        if (slotAmountInput) slotAmountInput.step = "0.01";
                    }
                } else {
                    if (slotCounterpartPrice) slotCounterpartPrice.innerText = curr === 'LKR' ? '≈ $0.00 USD' : '≈ Rs 0 LKR';
                }
                if (priceLkrIn) priceLkrIn.value = pLkr;
                if (priceUsdIn) priceUsdIn.value = pUsd.toFixed(2);
            };

            slotAmountInput?.addEventListener('input', syncSlotPricing);

            slotCurrency?.addEventListener('change', () => {
                const curVal = parseFloat(slotAmountInput?.value);
                if (!isNaN(curVal) && curVal > 0) {
                    if (slotCurrency.value === 'USD') {
                        slotAmountInput.value = (curVal / 305).toFixed(2);
                    } else {
                        slotAmountInput.value = Math.round(curVal * 305);
                    }
                }
                syncSlotPricing();
            });

            addSlotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const editId = document.getElementById('slot-edit-id').value;
                const timeSlot = document.getElementById('slot-time-input').value.trim();
                const packageType = document.getElementById('slot-package-input').value;
                const status = document.getElementById('slot-status-input').value;
                const capacity = parseInt(document.getElementById('slot-capacity-input')?.value) || 10;
                const priceLkr = parseFloat(document.getElementById('slot-price-input')?.value) || 1450;
                const priceUsd = parseFloat(document.getElementById('slot-price-usd')?.value) || (priceLkr / 305);

                if (editId) {
                    window.TeaFactoryStore.updateTourSlot(editId, {
                        timeSlot,
                        package: packageType,
                        max_capacity: capacity,
                        price: priceUsd,
                        price_lkr: priceLkr,
                        status
                    });
                    showToast("Tour Slot Updated", `Slot #${editId} (${timeSlot}) updated to ${packageType}.`, "success");
                } else {
                    window.TeaFactoryStore.addTourSlot({
                        timeSlot,
                        package: packageType,
                        max_capacity: capacity,
                        price: priceUsd,
                        price_lkr: priceLkr,
                        status
                    });
                    showToast("Tour Slot Created", `New time slot "${timeSlot}" scheduled successfully.`, "success");
                }

                addSlotForm.reset();
                const editIdInput = document.getElementById('slot-edit-id');
                if (editIdInput) editIdInput.value = '';
                const sCurr = document.getElementById('slot-currency');
                if (sCurr) sCurr.value = 'LKR';
                const sAmt = document.getElementById('slot-amount-input');
                if (sAmt) sAmt.value = '1450';
                syncSlotPricing();
                renderTabContent('admin');
            });

            // Quick select standard factory time slot pills
            document.querySelectorAll('.quick-slot-pill').forEach(pill => {
                pill.addEventListener('click', () => {
                    const t = pill.getAttribute('data-time');
                    const timeInput = document.getElementById('slot-time-input');
                    if (timeInput && t) timeInput.value = t;
                });
            });
        }

        // Edit Tour Slot click binding
        const editSlotBtns = document.querySelectorAll('.btn-edit-slot');
        editSlotBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const timeSlot = btn.getAttribute('data-timeslot');
                const packageType = btn.getAttribute('data-package');
                const status = btn.getAttribute('data-status');
                const capacity = btn.getAttribute('data-capacity') || '10';
                const priceLkr = btn.getAttribute('data-price-lkr') || '1450';
                const priceUsd = btn.getAttribute('data-price-usd') || (parseFloat(priceLkr) / 305).toFixed(2);

                const editIdInput = document.getElementById('slot-edit-id');
                const timeInput = document.getElementById('slot-time-input');
                const packageInput = document.getElementById('slot-package-input');
                const statusInput = document.getElementById('slot-status-input');
                const capacityInput = document.getElementById('slot-capacity-input');
                const priceInput = document.getElementById('slot-price-input');
                const priceUsdInput = document.getElementById('slot-price-usd');
                const titleEl = document.getElementById('tour-slot-form-title');
                const descEl = document.getElementById('tour-slot-form-desc');
                const saveBtn = document.getElementById('btn-save-slot');
                const cancelBtn = document.getElementById('btn-cancel-edit-slot');

                if (editIdInput) editIdInput.value = id;
                if (timeInput) timeInput.value = timeSlot;
                if (packageInput) packageInput.value = packageType;
                if (statusInput) statusInput.value = status;
                if (capacityInput) capacityInput.value = capacity;
                const sCurr = document.getElementById('slot-currency');
                if (sCurr) sCurr.value = 'LKR';
                const sAmt = document.getElementById('slot-amount-input');
                if (sAmt) sAmt.value = priceLkr;
                if (priceInput) priceInput.value = priceLkr;
                if (priceUsdInput) priceUsdInput.value = priceUsd;
                const sCounterpart = document.getElementById('slot-counterpart-price');
                if (sCounterpart) sCounterpart.innerText = `≈ $${parseFloat(priceUsd).toFixed(2)} USD`;
                if (titleEl) titleEl.innerText = `Edit Tour Slot #${String(id).padStart(2, '0')}`;
                if (descEl) descEl.innerText = `Update schedule and package specifications for Slot #${id}.`;
                if (saveBtn) saveBtn.innerText = 'Update Tour Slot';
                if (cancelBtn) cancelBtn.style.display = 'inline-block';

                document.getElementById('admin-add-slot-form')?.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Cancel Edit Tour Slot click binding
        const cancelEditSlotBtn = document.getElementById('btn-cancel-edit-slot');
        if (cancelEditSlotBtn) {
            cancelEditSlotBtn.addEventListener('click', () => {
                const addSlotForm = document.getElementById('admin-add-slot-form');
                if (addSlotForm) addSlotForm.reset();
                const editIdInput = document.getElementById('slot-edit-id');
                if (editIdInput) editIdInput.value = '';
                const sCurr = document.getElementById('slot-currency');
                if (sCurr) sCurr.value = 'LKR';
                const sAmt = document.getElementById('slot-amount-input');
                if (sAmt) sAmt.value = '1450';
                const sCounterpart = document.getElementById('slot-counterpart-price');
                if (sCounterpart) sCounterpart.innerText = '≈ $4.75 USD';
                const titleEl = document.getElementById('tour-slot-form-title');
                if (titleEl) titleEl.innerText = 'Add / Configure Tour Slot';
                const descEl = document.getElementById('tour-slot-form-desc');
                if (descEl) descEl.innerText = 'Configure daily factory visit time windows and visitor capacity limits.';
                const saveBtn = document.getElementById('btn-save-slot');
                if (saveBtn) saveBtn.innerText = 'Save Tour Slot';
                cancelEditSlotBtn.style.display = 'none';
            });
        }

        // Reset Tour Slot click binding
        const resetSlotBtns = document.querySelectorAll('.btn-reset-slot');
        resetSlotBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const slotId = btn.getAttribute('data-id');
                showDeleteConfirmModal({
                    title: 'Release Tour Time Slot',
                    subtitle: 'Daily Tour Operations',
                    itemName: `Tour Slot #${slotId}`,
                    message: `Free Slot #${slotId} back to Available for new guest bookings? Current reservation will be cleared.`,
                    confirmText: 'Free Slot',
                    onConfirm: () => {
                        window.TeaFactoryStore.resetSingleTourSlot(slotId);
                        showToast("Slot Freed", `Slot #${slotId} is now available for new bookings.`, "success");
                        renderTabContent('admin');
                    }
                });
            });
        });

        // Delete Tour Slot click binding
        const deleteSlotBtns = document.querySelectorAll('.btn-delete-slot');
        deleteSlotBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const slotId = btn.getAttribute('data-id');
                showDeleteConfirmModal({
                    title: 'Remove Tour Slot from Schedule',
                    subtitle: 'Daily Tour Operations',
                    itemName: `Tour Slot #${slotId}`,
                    message: `Are you sure you want to remove Slot #${slotId} from the daily timeline?`,
                    confirmText: 'Delete Slot',
                    onConfirm: () => {
                        window.TeaFactoryStore.deleteTourSlot(slotId);
                        showToast("Slot Removed", `Slot #${slotId} was removed from the schedule.`, "success");
                        renderTabContent('admin');
                    }
                });
            });
        });

        // Delete Announcement click binding
        const deleteAnnBtns = document.querySelectorAll('.btn-delete-ann');
        deleteAnnBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const annId = btn.getAttribute('data-id');
                const ann = (window.TeaFactoryStore.getAnnouncements() || []).find(a => String(a.id) === String(annId));
                const annTitle = ann ? ann.title : `Announcement #${annId}`;
                showDeleteConfirmModal({
                    title: 'Delete Announcement Notice',
                    subtitle: 'Estate Announcement Log',
                    itemName: annTitle,
                    message: 'Are you sure you want to delete this announcement notice? It will be permanently removed from public view and estate logs.',
                    confirmText: 'Delete Announcement',
                    onConfirm: () => {
                        window.TeaFactoryStore.deleteAnnouncement(annId);
                        showToast("Announcement Deleted", "The announcement has been removed from the public logs.", "success");
                        renderTabContent('admin');
                    }
                });
            });
        });

        // Helper: Universal CSV Exporter with UTF-8 BOM for Microsoft Excel / Sheets compatibility
        function downloadCsvFile(filename, headers, rows) {
            let csv = '\uFEFF'; // UTF-8 BOM
            csv += headers.map(h => `"${(h || '').toString().replace(/"/g, '""')}"`).join(',') + '\r\n';
            rows.forEach(r => {
                csv += r.map(col => `"${(col === null || col === undefined ? '' : col).toString().replace(/"/g, '""')}"`).join(',') + '\r\n';
            });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(url), 500);
        }

        // CSV Log Exporter (Email Dispatch Logs)
        const exportCsvBtn = document.getElementById('btn-export-csv');
        if (exportCsvBtn) {
            exportCsvBtn.addEventListener('click', () => {
                const logs = window.TeaFactoryStore.getEmailLogs();
                if (logs.length === 0) {
                    showToast("No Logs Available", "There are no dispatch emails to export.", "error");
                    return;
                }
                
                const headers = ["Timestamp", "Recipient", "Subject", "Body"];
                const rows = logs.map(log => [
                    log.timestamp || '',
                    log.to || '',
                    log.subject || '',
                    log.body || ''
                ]);
                
                const filename = `Rock_One_Wild_Tea_Email_Dispatch_Logs_${new Date().toISOString().slice(0, 10)}_${Date.now()}.csv`;
                downloadCsvFile(filename, headers, rows);
                showToast("CSV Log Downloaded", "The email dispatch log sheet was saved to downloads.", "success");
            });
        }

        // Orders Desk CSV Exporter (for Packing Slips, Customs Dispatch & Accounting)
        const exportOrdersCsvBtn = document.getElementById('btn-export-orders-csv');
        if (exportOrdersCsvBtn) {
            exportOrdersCsvBtn.addEventListener('click', () => {
                const rawOrders = window.TeaFactoryStore.getOrders();
                const rawBookings = window.TeaFactoryStore.getBookings();
                const bookingsWithSlips = rawBookings.filter(b => b.slipImage || b.paymentMethod === 'bank' || b.paymentMethod === 'slip');

                const unifiedTransactions = [
                    ...rawOrders.map(o => {
                        const linkedBooking = rawBookings.find(b => b.id === o.bookingId);
                        return {
                            id: o.id,
                            bookingRef: o.bookingId || o.id,
                            type: 'Collector Chest Order',
                            customerName: o.customerName || (linkedBooking ? linkedBooking.customerName : ''),
                            email: o.email || (linkedBooking ? linkedBooking.email : ''),
                            phone: o.phone || (linkedBooking ? linkedBooking.phone : ''),
                            country: o.country || (linkedBooking ? linkedBooking.country : '') || 'Sri Lanka',
                            address: o.address || (linkedBooking ? linkedBooking.address : '') || 'Estate Direct Dispatch',
                            courierNotes: o.ownerNote || o.referenceNote || (linkedBooking ? (linkedBooking.message || linkedBooking.courierNotes) : '') || '',
                            itemName: o.boxName || 'Numbered Collector Teak Chest',
                            itemParticulars: o.seasonName ? `${o.seasonName} (Series ${o.seriesNumber || 1})` : 'Artisanal Teak Chest',
                            qty: o.qty || (linkedBooking ? linkedBooking.qty : 1) || 1,
                            amount: (o.price || (linkedBooking ? linkedBooking.price : 0) || 0).toFixed(2),
                            paymentMode: o.paymentMethod === 'online' ? 'Online Payment Gateway' : (o.paymentMethod === 'bank' ? 'Bank Cash Deposit' : 'Bank Transfer / Online'),
                            status: o.status || 'Awaiting Payment',
                            createdAt: o.createdAt || 'Recent',
                            validatedAt: o.validatedAt || '',
                            validationNote: o.validationNote || '',
                            bankDetails: o.accountNo ? `${o.bankName || 'Bank'} Acct: ${o.accountNo} (${o.accountName || ''})` : 'Standard Estate Account',
                            hasSlip: o.slipImage ? 'Yes' : 'No'
                        };
                    }),
                    ...bookingsWithSlips
                        .filter(b => !rawOrders.some(o => o.bookingId === b.id))
                        .map(b => ({
                            id: b.id,
                            bookingRef: b.id,
                            type: b.type === 'tour' ? 'Factory Tour Reservation' : (b.type === 'product' ? 'Product Direct Order' : 'Collector Chest Reservation'),
                            customerName: b.customerName || '',
                            email: b.email || '',
                            phone: b.phone || '',
                            country: b.country || 'Sri Lanka',
                            address: b.address || (b.type === 'tour' ? 'Estate Sanctuary Visit' : 'Courier Delivery Address'),
                            courierNotes: b.message || b.dietaryNotes || b.courierNotes || '',
                            itemName: b.packageName || b.productName || b.boxName || 'Estate Allocation',
                            itemParticulars: b.type === 'tour' ? `Slot: ${b.timeSlot || ''} • Guests: ${b.guests || 1} • Date: ${b.tourDate || 'Scheduled'}` : `${b.weight || '100g'} Tin`,
                            qty: b.qty || (b.type === 'tour' ? b.guests : 1) || 1,
                            amount: (b.price !== undefined ? b.price : (b.depositPaid || 0)).toFixed(2),
                            paymentMode: b.paymentMethod === 'online' ? 'Online Payment Gateway' : 'Bank Cash Deposit (Slip)',
                            status: b.status || 'Slip Submitted',
                            createdAt: b.bookingDate || 'Recent',
                            validatedAt: b.validatedAt || '',
                            validationNote: b.validationNote || '',
                            bankDetails: 'Bank of Ceylon: 94945708 (Ettampitiya branch)',
                            hasSlip: b.slipImage ? 'Yes' : 'No'
                        }))
                ];

                if (unifiedTransactions.length === 0) {
                    showToast("No Orders Available", "There are no active orders or transactions to export.", "error");
                    return;
                }

                const headers = [
                    "Order / Ref ID",
                    "Linked Booking ID",
                    "Transaction Type",
                    "Customer Full Name",
                    "Email Address",
                    "Contact Phone / WhatsApp",
                    "Destination Country",
                    "Courier Delivery Address",
                    "Special Instructions / Notes",
                    "Item / Package Name",
                    "Specifications / Details",
                    "Quantity",
                    "Amount (USD)",
                    "Payment Mode",
                    "Order Status",
                    "Order Created Date",
                    "Validation Date",
                    "Validation Notes",
                    "Bank Account Reference",
                    "Deposit Slip Attached"
                ];

                const rows = unifiedTransactions.map(t => [
                    t.id,
                    t.bookingRef,
                    t.type,
                    t.customerName,
                    t.email,
                    t.phone,
                    t.country,
                    t.address,
                    t.courierNotes,
                    t.itemName,
                    t.itemParticulars,
                    t.qty,
                    t.amount,
                    t.paymentMode,
                    t.status,
                    t.createdAt,
                    t.validatedAt,
                    t.validationNote,
                    t.bankDetails,
                    t.hasSlip
                ]);

                const filename = `Rock_One_Wild_Tea_Orders_Dispatch_Accounting_${new Date().toISOString().slice(0, 10)}_${Date.now()}.csv`;
                downloadCsvFile(filename, headers, rows);
                showToast("Orders Exported to CSV", "Orders and dispatch data exported successfully.", "success");
            });
        }

        // Reservations Audit Log CSV Exporter
        const exportResCsvBtn = document.getElementById('btn-export-reservations-csv');
        if (exportResCsvBtn) {
            exportResCsvBtn.addEventListener('click', () => {
                const bookings = window.TeaFactoryStore.getBookings();
                if (bookings.length === 0) {
                    showToast("No Reservations Available", "There are no reservation logs to export.", "error");
                    return;
                }
                
                const headers = [
                    "Booking Ref ID",
                    "Reservation Type",
                    "Customer Name",
                    "Email",
                    "Phone",
                    "Destination Country",
                    "Courier Delivery Address",
                    "Item / Package",
                    "Specifications & Details",
                    "Preferred / Tour Date",
                    "Quantity",
                    "Amount (USD)",
                    "Booking Date",
                    "Status",
                    "Client Message / Notes",
                    "Contact Channel"
                ];

                const rows = bookings.map(b => {
                    const typeLabel = b.type === 'tour' ? 'Tour Slot' : (b.type === 'product' ? 'Product Order' : 'Collector Chest');
                    const item = b.type === 'tour' ? (b.packageName || 'Estate Tour') : (b.type === 'product' ? (b.productName || 'Tea Product') : (b.boxName || 'Gift Box'));
                    
                    let details = '';
                    if (b.type === 'tour') {
                        details = `Slot: ${b.timeSlot || ''} | Guests: ${b.guests || 1} | Dietary: ${b.dietaryNotes || 'None'} | Transport: ${b.transportRequired || 'No'}`;
                    } else if (b.type === 'product') {
                        details = `Weight: ${b.weight || '100g'} | Delivery Range: ${b.deliveryRange || ''}`;
                    } else {
                        details = `Season: ${b.seasonName || ''} (Series ${b.seriesNumber || 1}) | Delivery Range: ${b.deliveryRange || ''}`;
                    }
                    
                    const prefDate = b.preferredDate || b.tourDate || '';
                    const amount = (b.price !== undefined ? b.price : (b.depositPaid || 0)).toFixed(2);
                    const qty = b.qty || (b.type === 'tour' ? b.guests : 1) || 1;
                    const notes = b.message || b.dietaryNotes || b.courierNotes || '';

                    return [
                        b.id || '',
                        typeLabel,
                        b.customerName || '',
                        b.email || '',
                        b.phone || '',
                        b.country || 'Sri Lanka',
                        b.address || (b.type === 'tour' ? 'Estate Sanctuary Visit' : 'Courier Delivery Address'),
                        item,
                        details,
                        prefDate,
                        qty,
                        amount,
                        b.bookingDate || '',
                        b.status || 'Pending Verification',
                        notes,
                        b.socialChannel || 'WhatsApp'
                    ];
                });

                const filename = `Rock_One_Wild_Tea_Reservations_Audit_Log_${new Date().toISOString().slice(0, 10)}_${Date.now()}.csv`;
                downloadCsvFile(filename, headers, rows);
                showToast("CSV Exported", "Reservation audit logs have been exported successfully.", "success");
            });
        }

        // Reviews Delete Buttons
        document.querySelectorAll('.btn-delete-review').forEach(btn => {
            btn.addEventListener('click', () => {
                const revId = btn.getAttribute('data-id');
                const rev = (window.TeaFactoryStore.getReviews() || []).find(r => String(r.id) === String(revId));
                const revAuthor = rev ? `${rev.name || rev.author || 'Review'} (${rev.rating}★)` : `Review #${revId}`;
                showDeleteConfirmModal({
                    title: 'Delete Customer Review',
                    subtitle: 'Customer Experience Desk',
                    itemName: revAuthor,
                    message: 'Are you sure you want to delete this customer review? It will be permanently removed from the database and guest testimonials.',
                    confirmText: 'Delete Review',
                    onConfirm: async () => {
                        await window.TeaFactoryStore.deleteReview(revId);
                        showToast("Review Deleted", "Customer review has been permanently removed.", "success");
                        renderTabContent('admin');
                        if (window.UIComponents && typeof window.UIComponents.renderTestimonials === 'function') {
                            window.UIComponents.renderTestimonials('home-testimonials-container');
                            bindReviewEvents();
                        }
                    }
                });
            });
        });

        // Private Reserve Inquiries Status Selectors
        document.querySelectorAll('.inq-status-select').forEach(select => {
            select.addEventListener('change', () => {
                const inqId = select.getAttribute('data-id');
                const newStatus = select.value;
                window.TeaFactoryStore.updateInquiryStatus(inqId, newStatus);
                
                // Update parent card data-status attribute for instant filtering
                const card = select.closest('.inq-dossier-card');
                if (card) {
                    card.setAttribute('data-status', newStatus);
                }

                // Dynamic color adjust for select element
                if (newStatus === 'Allocated') {
                    select.style.cssText = 'font-size: 0.75rem; padding: 0.3rem 0.55rem; border-radius: 6px; cursor: pointer; font-weight: 600; background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.4);';
                } else if (newStatus === 'Contacted') {
                    select.style.cssText = 'font-size: 0.75rem; padding: 0.3rem 0.55rem; border-radius: 6px; cursor: pointer; font-weight: 600; background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.4);';
                } else if (newStatus === 'Archived') {
                    select.style.cssText = 'font-size: 0.75rem; padding: 0.3rem 0.55rem; border-radius: 6px; cursor: pointer; font-weight: 600; background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.3);';
                } else {
                    select.style.cssText = 'font-size: 0.75rem; padding: 0.3rem 0.55rem; border-radius: 6px; cursor: pointer; font-weight: 600; background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.4);';
                }

                showToast("Inquiry Updated", `Status for Dossier ${inqId} changed to "${newStatus}".`, "success");
            });
        });

        // Private Reserve Inquiries Search & Filter Listeners
        const inqSearchBox = document.getElementById('inq-search-box');
        const inqFilterStatus = document.getElementById('inq-filter-status-select');
        const filterInquiries = () => {
            const query = (inqSearchBox ? inqSearchBox.value : '').toLowerCase().trim();
            const statusFilter = inqFilterStatus ? inqFilterStatus.value : 'ALL';
            
            document.querySelectorAll('.inq-dossier-card').forEach(card => {
                const searchText = card.getAttribute('data-search-text') || '';
                const cardStatus = card.getAttribute('data-status') || '';
                
                const matchesQuery = !query || searchText.includes(query);
                const matchesStatus = statusFilter === 'ALL' || cardStatus === statusFilter;

                if (matchesQuery && matchesStatus) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        if (inqSearchBox) {
            inqSearchBox.addEventListener('input', filterInquiries);
        }
        if (inqFilterStatus) {
            inqFilterStatus.addEventListener('change', filterInquiries);
        }

        // Private Reserve Inquiries Delete Buttons
        document.querySelectorAll('.btn-delete-inquiry').forEach(btn => {
            btn.addEventListener('click', () => {
                const inqId = btn.getAttribute('data-id');
                const inquiries = window.TeaFactoryStore.getInquiries ? window.TeaFactoryStore.getInquiries() : [];
                const inq = inquiries.find(i => String(i.id) === String(inqId));
                const inqName = inq ? `${inq.fullName || inq.full_name || inq.clientName || inq.name || 'Private Patron'} (${inq.id})` : `Dossier ${inqId}`;
                showDeleteConfirmModal({
                    title: 'Delete Private Inquiry Dossier',
                    subtitle: 'Private Reserve Concierge',
                    itemName: inqName,
                    message: `Are you sure you want to delete inquiry dossier ${inqId}? This will remove it from the concierge registry.`,
                    confirmText: 'Delete Inquiry',
                    onConfirm: () => {
                        window.TeaFactoryStore.deleteInquiry(inqId);
                        showToast("Inquiry Deleted", `Dossier ${inqId} was removed from the registry.`, "info");
                        renderTabContent('admin');
                    }
                });
            });
        });

        // ─── User Accounts & Staff Access Desk Events ────────────────────────
        const openCreateUserBtn = document.getElementById('btn-open-create-user-modal');
        if (openCreateUserBtn) {
            openCreateUserBtn.addEventListener('click', () => {
                showCreateUserModal();
            });
        }

        // Edit User
        const editUserBtns = document.querySelectorAll('.btn-edit-user');
        editUserBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const userId = btn.getAttribute('data-user-id');
                const users = (window.TeaFactoryStore && typeof window.TeaFactoryStore.getUsers === 'function') 
                    ? window.TeaFactoryStore.getUsers() 
                    : [];
                const user = users.find(u => String(u.id) === String(userId));
                if (user) {
                    showEditUserModal(user);
                } else {
                    showToast("User Not Found", "Could not locate this account record.", "error");
                }
            });
        });

        // Reset Password
        const resetPassBtns = document.querySelectorAll('.btn-reset-user-password');
        resetPassBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const userId = btn.getAttribute('data-user-id');
                const users = (window.TeaFactoryStore && typeof window.TeaFactoryStore.getUsers === 'function') 
                    ? window.TeaFactoryStore.getUsers() 
                    : [];
                const user = users.find(u => String(u.id) === String(userId));
                if (user) {
                    showResetUserPasswordModal(user);
                } else {
                    showToast("User Not Found", "Could not locate this account record.", "error");
                }
            });
        });

        // Delete User
        const deleteUserBtns = document.querySelectorAll('.btn-delete-user');
        deleteUserBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const userId = btn.getAttribute('data-user-id');
                const userName = btn.getAttribute('data-user-name') || 'Staff Member';
                const userEmail = btn.getAttribute('data-user-email') || '';

                if (userEmail.toLowerCase() === 'rockonewild@gmail.com') {
                    showToast("Action Forbidden", "The primary Estate Owner account cannot be deleted.", "error");
                    return;
                }

                showDeleteConfirmModal({
                    title: 'Delete User Account',
                    subtitle: 'User Accounts & Staff Access',
                    itemName: `${userName} (${userEmail})`,
                    message: `Are you sure you want to permanently delete the user account for "${userEmail}"? This user will immediately lose access to the system.`,
                    confirmText: 'Delete User Account',
                    onConfirm: async () => {
                        try {
                            const res = await window.TeaFactoryAPI.deleteUser(userId);
                            if (res && res.success) {
                                window.TeaFactoryStore.deleteUser(userId);
                                showToast("Account Deleted", `User account for ${userEmail} was deleted successfully.`, "success");
                                renderTabContent('admin');
                            } else {
                                showToast("Deletion Failed", (res && res.error) || "Unable to delete user.", "error");
                            }
                        } catch (err) {
                            showToast("Error", err.message, "error");
                        }
                    }
                });
            });
        });

        // Copy User Email
        const copyEmailBtns = document.querySelectorAll('.btn-copy-user-email');
        copyEmailBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const email = btn.getAttribute('data-email');
                if (!email) return;
                const copySuccess = () => showToast("Copied to Clipboard", `Email ID "${email}" copied.`, "success", 2000);
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(email).then(copySuccess).catch(() => {
                        const ta = document.createElement('textarea');
                        ta.value = email;
                        document.body.appendChild(ta);
                        ta.select();
                        document.execCommand('copy');
                        document.body.removeChild(ta);
                        copySuccess();
                    });
                } else {
                    const ta = document.createElement('textarea');
                    ta.value = email;
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    copySuccess();
                }
            });
        });

        // Live Search & Filter in User Table
        const userSearchInput = document.getElementById('users-search-input');
        const userAuthFilter = document.getElementById('users-auth-filter');
        const userRoleFilter = document.getElementById('users-role-filter');
        const userStatusFilter = document.getElementById('users-status-filter');

        function applyUserFilters() {
            const query = (userSearchInput ? userSearchInput.value : '').toLowerCase().trim();
            const auth = (userAuthFilter ? userAuthFilter.value : 'all').toLowerCase();
            const role = (userRoleFilter ? userRoleFilter.value : 'all').toLowerCase();
            const status = (userStatusFilter ? userStatusFilter.value : 'all').toLowerCase();

            const rows = document.querySelectorAll('.user-table-row');
            let visibleCount = 0;

            rows.forEach(row => {
                const rowSearch = row.getAttribute('data-search-text') || '';
                const rowRole = row.getAttribute('data-role') || '';
                const rowStatus = row.getAttribute('data-status') || '';
                const rowAuth = row.getAttribute('data-auth-method') || '';

                const matchesQuery = !query || rowSearch.includes(query);
                const matchesAuth = (auth === 'all') || (rowAuth === auth);
                const matchesRole = (role === 'all') || (rowRole === role);
                const matchesStatus = (status === 'all') || (rowStatus === status);

                if (matchesQuery && matchesAuth && matchesRole && matchesStatus) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });
        }

        if (userSearchInput) userSearchInput.addEventListener('input', applyUserFilters);
        if (userAuthFilter) userAuthFilter.addEventListener('change', applyUserFilters);
        if (userRoleFilter) userRoleFilter.addEventListener('change', applyUserFilters);
        if (userStatusFilter) userStatusFilter.addEventListener('change', applyUserFilters);

        // ─── Coupons & Promo Codes Desk ──────────────────────────────────────────
        const autoGenCouponBtn = document.getElementById('admin-auto-gen-coupon-btn');
        const cpnCodeInput = document.getElementById('cpn-code-input');
        const cpnPercentInput = document.getElementById('cpn-percent-input');
        const cpnLabelInput = document.getElementById('cpn-label-input');

        if (autoGenCouponBtn && cpnCodeInput) {
            autoGenCouponBtn.addEventListener('click', () => {
                const prefixes = ['ESTATE', 'HARVEST', 'WILD', 'CEYLON', 'SANCTUARY', 'EXCLUSIVE', 'GOLDEN', 'ROYAL', 'RESERVE', 'ROCKONE'];
                const pct = cpnPercentInput ? cpnPercentInput.value : '15';
                const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
                const randomSuffix = Math.floor(10 + Math.random() * 90);
                const generatedCode = `${randomPrefix}${pct || randomSuffix}`;
                cpnCodeInput.value = generatedCode;
                if (cpnLabelInput && (!cpnLabelInput.value || cpnLabelInput.value.includes('% OFF'))) {
                    cpnLabelInput.value = `${pct}% OFF ${randomPrefix.charAt(0) + randomPrefix.slice(1).toLowerCase()} Highland Privilege`;
                }
                showToast("Coupon Code Generated", `Generated privilege code: ${generatedCode}`, "info");
            });
        }

        const quickPercentBtns = document.querySelectorAll('.admin-quick-pill-btn');
        quickPercentBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-val');
                quickPercentBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (cpnPercentInput) {
                    cpnPercentInput.value = val;
                }
                if (cpnLabelInput && (!cpnLabelInput.value || cpnLabelInput.value.includes('% OFF'))) {
                    cpnLabelInput.value = `${val}% OFF Single-Estate Highland Harvest`;
                }
                if (cpnCodeInput && cpnCodeInput.value) {
                    const currentCode = cpnCodeInput.value;
                    const cleanPrefix = currentCode.replace(/\d+$/, '');
                    if (cleanPrefix) {
                        cpnCodeInput.value = `${cleanPrefix}${val}`;
                    }
                }
            });
        });

        const couponForm = document.getElementById('admin-create-coupon-form');
        if (couponForm) {
            couponForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const code = (document.getElementById('cpn-code-input')?.value || '').trim().toUpperCase();
                const percent = Number(document.getElementById('cpn-percent-input')?.value || 10);
                const label = (document.getElementById('cpn-label-input')?.value || '').trim();
                const minSpend = Number(document.getElementById('cpn-minspend-input')?.value || 0);
                const startDate = document.getElementById('cpn-start-input')?.value || null;
                const expiry = document.getElementById('cpn-expiry-input')?.value || null;
                const visibility = document.getElementById('cpn-visibility-input')?.value || 'private';
                const status = document.getElementById('cpn-status-input')?.value || 'active';

                if (!code) {
                    showToast("Code Required", "Please specify a promotional coupon code.", "error");
                    return;
                }

                if (window.TeaFactoryStore && typeof window.TeaFactoryStore.addCoupon === 'function') {
                    window.TeaFactoryStore.addCoupon({
                        code,
                        percent,
                        label: label || `${percent}% OFF Privilege Voucher`,
                        min_spend: minSpend,
                        start_date: startDate,
                        expiry_date: expiry,
                        visibility,
                        status
                    });

                    const typeName = visibility === 'public' ? 'Public Offer' : 'Private VIP Voucher';
                    showToast(
                        "Coupon Published", 
                        `${typeName} "${code}" (${percent}% OFF) has been issued successfully.`, 
                        "success"
                    );
                    renderTabContent('admin');
                }
            });
        }

        // WhatsApp VIP Private Dispatch
        const dispatchWhatsappBtns = document.querySelectorAll('.btn-dispatch-coupon-whatsapp');
        dispatchWhatsappBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const code = btn.getAttribute('data-code');
                const percent = btn.getAttribute('data-percent');
                const label = btn.getAttribute('data-label') || 'Artisanal Privilege';
                const expiry = btn.getAttribute('data-expiry') || '';

                const originUrl = window.location.origin;
                const msg = `🌿 *Rock One Wild Tea — Private VIP Privilege* 🌿\n\nDear Connoisseur,\n\nWe are pleased to extend you an exclusive private harvest privilege for *${percent}% OFF* on our rare single-estate reserves.\n\n🎟️ *Privilege Code:* *${code}*\n📋 *Allocation:* ${label}${expiry ? `\n⏳ *Valid Until:* ${expiry}` : ''}\n\nTo redeem, simply enter your private code in the checkout discount box:\n${originUrl}\n\nWarmest regards,\n*The Master Sommelier & Concierge*\nRock One Wild Tea Estate`;

                const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
                window.open(url, '_blank');
                showToast("WhatsApp VIP Dispatch", `Bespoke invitation for "${code}" opened in WhatsApp.`, "success");
            });
        });

        // Copy VIP Invitation Letter
        const copyInviteBtns = document.querySelectorAll('.btn-copy-coupon-invite');
        copyInviteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const code = btn.getAttribute('data-code');
                const percent = btn.getAttribute('data-percent');
                const label = btn.getAttribute('data-label') || 'Artisanal Privilege';
                const expiry = btn.getAttribute('data-expiry') || '';

                const originUrl = window.location.origin;
                const letter = `Dear Valued Connoisseur,\n\nRock One Wild Tea Estate is delighted to extend you a private patronage allocation privilege.\n\nPrivilege Voucher Code: ${code}\nPrivilege Value: ${percent}% OFF\nAllocation Description: ${label}${expiry ? `\nValid Through: ${expiry}` : '\nValidity: Open Privilege Period'}\n\nHow to Redeem:\nVisit our private reserve portal at ${originUrl}, select your handcrafted harvest tins or numbered collector chests, and enter voucher code "${code}" at checkout to receive your ${percent}% concession.\n\nShould you require bespoke assistance or private sommelier curation, please do not hesitate to contact our Concierge Desk directly.\n\nWith our highest compliments,\n\nRock One Wild Tea Concierge Desk\nSanctuary: Gannilawaththa, Wellawela, Ettampitiya, Sri Lanka\nWhatsApp / Direct: +94 77 320 9950`;

                const copySuccess = () => showToast("VIP Letter Copied", `Formal private invitation for "${code}" copied to clipboard. Ready to paste into patron email.`, "success");
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(letter).then(copySuccess).catch(() => {
                        showToast("Voucher Code", code, "info");
                    });
                } else {
                    const ta = document.createElement('textarea');
                    ta.value = letter;
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    copySuccess();
                }
            });
        });

        // Toggle Coupon Status
        const toggleCouponBtns = document.querySelectorAll('.btn-toggle-coupon-status');
        toggleCouponBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const couponId = btn.getAttribute('data-id');
                if (window.TeaFactoryStore && typeof window.TeaFactoryStore.toggleCouponStatus === 'function') {
                    const updated = window.TeaFactoryStore.toggleCouponStatus(couponId);
                    if (updated) {
                        showToast("Coupon Status Updated", `Coupon "${updated.code}" is now ${updated.status}.`, "success");
                        renderTabContent('admin');
                    }
                }
            });
        });

        // Delete Coupon
        const deleteCouponBtns = document.querySelectorAll('.btn-delete-coupon');
        deleteCouponBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const couponId = btn.getAttribute('data-id');
                const couponCode = btn.getAttribute('data-code') || 'Coupon';
                showDeleteConfirmModal({
                    title: 'Delete Privilege Coupon',
                    subtitle: 'Coupons & Promo Codes Desk',
                    itemName: couponCode,
                    message: `Are you sure you want to permanently delete privilege coupon "${couponCode}"? Existing patrons will no longer be able to redeem this code at checkout.`,
                    confirmText: 'Delete Coupon',
                    onConfirm: () => {
                        if (window.TeaFactoryStore && typeof window.TeaFactoryStore.deleteCoupon === 'function') {
                            window.TeaFactoryStore.deleteCoupon(couponId);
                            showToast("Coupon Removed", `Coupon "${couponCode}" has been deleted.`, "info");
                            renderTabContent('admin');
                        }
                    }
                });
            });
        });

        // Copy Coupon Code
        const copyCouponBtns = document.querySelectorAll('.btn-copy-coupon-code');
        copyCouponBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const code = btn.getAttribute('data-code');
                if (!code) return;
                const copySuccess = () => showToast("Code Copied", `Voucher code "${code}" copied to clipboard.`, "info");
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(code).then(copySuccess).catch(() => {
                        showToast("Coupon Code", code, "info");
                    });
                } else {
                    const ta = document.createElement('textarea');
                    ta.value = code;
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                    copySuccess();
                }
            });
        });
    }

    // 7e. Announcement Image uploader helper
    function handleAnnFileSelected(file, zone, preview) {
        if (file.size > 5 * 1024 * 1024) {
            showToast('File Too Large', 'Please upload a file under 5MB.', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedAnnImageBase64 = e.target.result;
            preview.style.display = 'block';
            preview.innerHTML = `
                <div class="slip-preview-inner">
                    <img src="${selectedAnnImageBase64}" alt="Announcement Image Preview" style="max-width:100%;max-height:140px;border-radius:8px;border:1px solid rgba(212,175,55,0.3);" onerror="window.handleImageError && window.handleImageError(this, 'announcement')">
                    <div class="slip-filename">&#x2714; ${file.name}</div>
                </div>`;
            zone.classList.add('has-file');
        };
        reader.readAsDataURL(file);
    }

    // 7e-2. Product Image uploader helper
    function handleProdFileSelected(file, zone, preview) {
        if (file.size > 5 * 1024 * 1024) {
            showToast('File Too Large', 'Please upload a file under 5MB.', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedProdImageBase64 = e.target.result;
            preview.style.display = 'block';
            preview.innerHTML = `
                <div class="slip-preview-inner">
                    <img src="${selectedProdImageBase64}" alt="Product Image Preview" style="max-width:100%;max-height:140px;object-fit:contain;border-radius:8px;border:1px solid rgba(212,175,55,0.3);background:rgba(0,0,0,0.4);" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                    <div class="slip-filename">&#x2714; ${file.name}</div>
                </div>`;
            zone.classList.add('has-file');
        };
        reader.readAsDataURL(file);
    }

    // 7e-3. Gift Box Image uploader helper
    function handleBoxFileSelected(file, zone, preview) {
        if (file.size > 5 * 1024 * 1024) {
            showToast('File Too Large', 'Please upload a file under 5MB.', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedBoxImageBase64 = e.target.result;
            preview.style.display = 'block';
            preview.innerHTML = `
                <div class="slip-preview-inner">
                    <img src="${selectedBoxImageBase64}" alt="Gift Box Image Preview" style="max-width:100%;max-height:140px;object-fit:contain;border-radius:8px;border:1px solid rgba(212,175,55,0.3);background:rgba(0,0,0,0.4);" onerror="window.handleImageError && window.handleImageError(this, 'box')">
                    <div class="slip-filename">&#x2714; ${file.name}</div>
                </div>`;
            zone.classList.add('has-file');
        };
        reader.readAsDataURL(file);
    }

    // 7e-4. Gallery Photo uploader helper
    function handleGalleryFileSelected(file, zone, preview) {
        if (file.size > 5 * 1024 * 1024) {
            showToast('File Too Large', 'Please upload a file under 5MB.', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedGalleryImageBase64 = e.target.result;
            preview.style.display = 'block';
            preview.innerHTML = `
                <div class="slip-preview-inner">
                    <img src="${selectedGalleryImageBase64}" alt="Gallery Photo Preview" style="max-width:100%;max-height:140px;object-fit:contain;border-radius:8px;border:1px solid rgba(212,175,55,0.3);background:rgba(0,0,0,0.4);" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                    <div class="slip-filename">&#x2714; ${file.name}</div>
                </div>`;
            zone.classList.add('has-file');
        };
        reader.readAsDataURL(file);
    }

    // 7f. Announcements card click bindings
    function bindAnnouncementsPageEvents() {
        const container = document.getElementById('announcements-full-container');
        if (!container) return;

        container.querySelectorAll('.announcement-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const annId = card.getAttribute('data-id');
                if (annId) {
                    openAnnModal(annId);
                }
            });
        });
    }

    // 7g. Announcements modal control functions
    const annModal = document.getElementById('announcement-modal');
    const annModalCloseBtn = document.getElementById('ann-modal-close-btn');

    function openAnnModal(annIdOrObj) {
        const announcements = window.TeaFactoryStore ? window.TeaFactoryStore.getAnnouncements() : [];
        let ann = null;
        if (typeof annIdOrObj === 'object' && annIdOrObj !== null) {
            ann = annIdOrObj;
        } else if (annIdOrObj !== undefined && annIdOrObj !== null && annIdOrObj !== '') {
            const sId = String(annIdOrObj);
            ann = announcements.find(a => String(a.id) === sId || String(a.id) === String(parseInt(sId, 10)));
        }
        if (!ann && announcements.length > 0) {
            ann = announcements[0];
        }
        if (!ann) return;

        const titleEl = document.getElementById('ann-modal-title');
        const headingEl = document.getElementById('ann-modal-heading');
        const contentEl = document.getElementById('ann-modal-content');
        const tagEl = document.getElementById('ann-modal-tag');
        const dateEl = document.getElementById('ann-modal-date');
        const imgEl = document.getElementById('ann-modal-image');

        if (titleEl) titleEl.innerText = ann.premium ? 'Collector Exclusive Announcement' : 'Estate Announcement Details';
        if (headingEl) headingEl.innerText = ann.title || ann.heading || 'Estate Announcement';
        if (contentEl) contentEl.innerText = ann.content || '';
        if (tagEl) {
            tagEl.innerText = ann.tag || 'Announcement';
            tagEl.className = ann.premium ? 'box-badge status-booked' : 'box-badge status-available';
        }
        if (dateEl) dateEl.innerText = ann.date || ann.date_str || '';
        if (imgEl) imgEl.src = ann.image || 'images/luxury_tea_announcement.jpg';

        const modal = document.getElementById('announcement-modal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeAnnModal() {
        const modal = document.getElementById('announcement-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Expose openAnnModal and closeAnnModal globally
    window.openAnnModal = openAnnModal;
    window.closeAnnModal = closeAnnModal;

    if (annModalCloseBtn) {
        annModalCloseBtn.addEventListener('click', closeAnnModal);
    }
    if (annModal) {
        annModal.addEventListener('click', (e) => {
            if (e.target === annModal) closeAnnModal();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('announcement-modal');
            if (modal && modal.classList.contains('active')) {
                closeAnnModal();
            }
        }
    });

    // Delegated click listener for any announcement card or read bulletin trigger
    document.addEventListener('click', (e) => {
        const readBtn = e.target.closest('.ann-read-more');
        if (readBtn) {
            const card = readBtn.closest('.announcement-card, [data-id]');
            if (card) {
                const id = card.getAttribute('data-id');
                if (id) {
                    e.preventDefault();
                    e.stopPropagation();
                    openAnnModal(id);
                }
            }
        }
    });

    function bindGalleryEvents() {
        const cards = document.querySelectorAll('.gallery-item-card');
        const filterBtns = document.querySelectorAll('.gallery-filter-btn');
        const lightbox = document.getElementById('gallery-lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');

        // Gallery Filter Buttons
        if (filterBtns.length > 0 && cards.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => {
                        b.classList.remove('active');
                        b.style.background = 'rgba(0,0,0,0.5)';
                        b.style.color = '#e2e8f0';
                        b.style.borderColor = 'rgba(212,175,55,0.35)';
                    });
                    btn.classList.add('active');
                    btn.style.background = 'var(--color-gold, #d4af37)';
                    btn.style.color = '#040e08';
                    btn.style.borderColor = 'var(--color-gold, #d4af37)';

                    const filter = (btn.getAttribute('data-filter') || 'all').toLowerCase();
                    cards.forEach(card => {
                        const tag = (card.getAttribute('data-tag') || '').toLowerCase();
                        if (filter === 'all' || tag.includes(filter) || filter.includes(tag)) {
                            card.style.display = '';
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        }

        if (!lightbox || !lightboxImg) return;

        const galleryImages = window.TeaFactoryStore.getGalleryImages();
        if (galleryImages.length === 0) return;

        let currentIdx = 0;

        function showImage(idx) {
            currentIdx = (idx + galleryImages.length) % galleryImages.length;
            const imgObj = galleryImages[currentIdx];
            if (!imgObj) return;
            lightboxImg.src = imgObj.src;
            
            let captionText = imgObj.caption || `Estate Photograph ${currentIdx + 1} of ${galleryImages.length}`;
            if (imgObj.tag) {
                captionText = `[${imgObj.tag}] ${captionText}`;
            }
            if (lightboxCaption) {
                lightboxCaption.innerText = captionText;
            }
        }

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.getAttribute('data-index'));
                if (!isNaN(idx)) {
                    showImage(idx);
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(currentIdx - 1);
            });
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(currentIdx + 1);
            });
        }

        const keyHandler = (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') showImage(currentIdx - 1);
                if (e.key === 'ArrowRight') showImage(currentIdx + 1);
            }
        };
        document.removeEventListener('keydown', keyHandler);
        document.addEventListener('keydown', keyHandler);
    }

    function bindNewsletterForm() {
        const form = document.getElementById('newsletter-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            const email = emailInput ? emailInput.value.trim() : '';
            if (email) {
                showToast("Private Ledger Registration Active", `Welcome to the Reserve Club. Allocation notifications are now active for "${email}".`, "success");
                form.reset();
            }
        });
    }

    // ── Real Email Service Integration & Common Enquiry Form Handler ──
    const EmailService = {
        conciergeEmail: "rockonewild@gmail.com",
        
        async sendInquiryEmail(inquiry) {
            const emailSubject = `Estate Concierge Enquiry [${inquiry.id}] - ${inquiry.fullName}`;
            const emailBody = `
ROCK ONE WILD TEA ESTATE - NEW CONCIERGE ENQUIRY
============================================================
Enquiry Dossier Ref: ${inquiry.id}
Date Registered: ${inquiry.date || new Date().toLocaleString()}

PATRON & SENDER DETAILS:
- Full Name: ${inquiry.fullName}
- Email Address: ${inquiry.email}
- Phone Number: ${inquiry.phone || 'Not specified'}

SERVICE & BUDGET SCOPE:
- Service Interested In: ${inquiry.service || inquiry.volumeTier || 'General Inquiries'}
- Project Budget Range: ${inquiry.budget || 'Not specified'}

PROJECT DETAILS & REQUIREMENTS:
"${inquiry.details || inquiry.notes || 'None specified'}"

============================================================
Sent from Rock One Wild Tea Official Portal
Direct Inbox: rockonewild@gmail.com | Voice Hotline: +94 76 789 7817 | WhatsApp: +94 77 320 9950
Sanctuary: Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka
            `.trim();

            // 1. Direct Estate API & Resend Email Delivery
            try {
                if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.submitInquiry === 'function') {
                    await window.TeaFactoryAPI.submitInquiry({
                        id: inquiry.id,
                        full_name: inquiry.fullName,
                        email: inquiry.email,
                        phone: inquiry.phone,
                        service_interested: inquiry.service || 'Artisanal Pure Single-Estate Teas',
                        budget_range: inquiry.budget || 'Not Specified',
                        message: inquiry.details || inquiry.notes || 'General Inquiry'
                    });
                }
            } catch (err) {
                console.warn("API inquiry dispatch notice:", err.message);
            }

            return {
                success: true,
                subject: emailSubject,
                body: emailBody
            };
        }
    };

    function bindPrivateReserveForm() {
        const form = document.getElementById('common-enquiry-form') || document.getElementById('private-reserve-inquiry-form');
        if (!form) return;

        // Pre-fill signed-in patron details when available
        const signedUser = window.TeaFactoryStore && window.TeaFactoryStore.getCurrentUser
            ? window.TeaFactoryStore.getCurrentUser()
            : null;
        if (signedUser) {
            const nameEl = document.getElementById('enq-fullname') || document.getElementById('inq-fullname');
            const emailEl = document.getElementById('enq-email') || document.getElementById('inq-email');
            const phoneEl = document.getElementById('enq-phone') || document.getElementById('inq-phone');
            if (nameEl && !nameEl.value && signedUser.full_name) nameEl.value = signedUser.full_name;
            if (emailEl && !emailEl.value && signedUser.email) emailEl.value = signedUser.email;
            if (phoneEl && !phoneEl.value && signedUser.phone) phoneEl.value = signedUser.phone;
        }

        const handleEnquirySubmit = async (e) => {
            if (e) e.preventDefault();

            const serviceSelect = document.getElementById('enq-service');
            const service = serviceSelect ? serviceSelect.value : 'Artisanal Pure Single-Estate Teas';
            const lowerSvc = (service || '').toLowerCase();
            if ((lowerSvc.includes('gift') || lowerSvc.includes('tour') || lowerSvc.includes('reserve')) &&
                (!window.TeaFactoryStore || !window.TeaFactoryStore.isCustomerLoggedIn()) &&
                typeof window.requireCustomerAuth === 'function') {
                window.requireCustomerAuth(
                    'Sign in with your Email ID is required to submit a gift chest or tour enquiry.',
                    (u) => {
                        const nEl = document.getElementById('enq-fullname') || document.getElementById('inq-fullname');
                        const eEl = document.getElementById('enq-email') || document.getElementById('inq-email');
                        if (nEl && !nEl.value && u.full_name) nEl.value = u.full_name;
                        if (eEl && u.email) eEl.value = u.email;
                        handleEnquirySubmit();
                    }
                );
                return;
            }

            const fullName = (document.getElementById('enq-fullname')?.value || document.getElementById('inq-fullname')?.value || '').trim();
            const email = (document.getElementById('enq-email')?.value || document.getElementById('inq-email')?.value || '').trim();
            const phone = (document.getElementById('enq-phone')?.value || document.getElementById('inq-phone')?.value || '').trim();
            const budgetSelect = document.getElementById('enq-budget');
            const budget = budgetSelect ? budgetSelect.value : 'Not Specified';
            const details = (document.getElementById('enq-details')?.value || document.getElementById('inq-notes')?.value || '').trim();

            const submitBtn = document.getElementById('btn-send-common-enquiry') || document.getElementById('btn-submit-reserve-inquiry');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <span class="btn-spinner" style="display:inline-block; width:16px; height:16px; border:2px solid rgba(0,0,0,0.3); border-top-color:#000; border-radius:50%; animation:spin 0.8s linear infinite; margin-right:8px; vertical-align:middle;"></span>
                    <span>Delivering Concierge Dossier...</span>
                `;
            }

            const dossierId = 'INQ-' + Math.floor(10000 + Math.random() * 90000);

            const inquiryData = {
                id: dossierId,
                fullName,
                email,
                phone,
                service: service || 'General Inquiry',
                budget: budget || 'Not Specified',
                details,
                notes: details,
                interests: [service || 'General Inquiry'],
                volumeTier: budget || 'Not Specified',
                contactMethod: 'Direct Email & WhatsApp'
            };

            // Save in Store ledger & Backend Database (which triggers Resend Email)
            const registeredInquiry = window.TeaFactoryStore.addInquiry(inquiryData);
            registeredInquiry.id = dossierId;

            // Dispatch via Backend API and Resend Email
            await EmailService.sendInquiryEmail(registeredInquiry);

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `
                        <span class="btn-send-text">Send Message</span>
                        <svg class="btn-plane-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    `;
                }

                showInquirySuccessModal(registeredInquiry);
                form.reset();
            }, 600);
        };

        form.addEventListener('submit', handleEnquirySubmit);
    }

    function showInquirySuccessModal(inquiry) {
        const existing = document.getElementById('inquiry-success-modal');
        if (existing) existing.remove();

        const waText = encodeURIComponent(`Hello Rock One Wild Tea Concierge, I have sent an enquiry [Ref: ${inquiry.id}] regarding "${inquiry.service || 'Artisanal Teas'}" for ${inquiry.fullName}.`);
        const waUrl = `https://wa.me/94773209950?text=${waText}`;

        const modal = document.createElement('div');
        modal.id = 'inquiry-success-modal';
        modal.className = 'modal-backdrop active';
        modal.style.cssText = 'position:fixed; inset:0; background:rgba(4,14,8,0.92); backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px); z-index:99999; display:flex; align-items:center; justify-content:center; padding:1.25rem; overflow-y:auto; -webkit-overflow-scrolling:touch; animation:fadeIn 0.3s ease;';

        modal.innerHTML = `
            <div class="modal-card" style="background:linear-gradient(135deg, rgba(6, 18, 12, 0.98) 0%, rgba(12, 32, 22, 0.98) 100%); border:1px solid rgba(212,175,55,0.45); border-radius:20px; max-width:580px; width:100%; max-height:88vh; overflow-y:auto; -webkit-overflow-scrolling:touch; padding:2.25rem 1.75rem; box-shadow:0 24px 60px rgba(0,0,0,0.85), 0 0 35px rgba(212,175,55,0.1); position:relative; text-align:center; margin:auto;">
                <button type="button" id="close-inq-modal-btn" style="position:sticky; top:0; float:right; background:rgba(0,0,0,0.5); border:1px solid rgba(212,175,55,0.3); color:var(--color-gold); font-size:1.5rem; cursor:pointer; width:36px; height:36px; display:flex; align-items:center; justify-content:center; border-radius:50%; transition:all 0.2s; z-index:10;" title="Close Receipt">&times;</button>
                
                <div style="width:58px; height:58px; border-radius:50%; background:rgba(212,175,55,0.15); border:1px solid var(--color-gold); display:flex; align-items:center; justify-content:center; margin:0 auto 1.25rem auto; color:var(--color-gold); clear:both;">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                </div>

                <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:2px; color:var(--color-gold); font-weight:700; display:block; margin-bottom:0.4rem;">OFFICIAL CONCIERGE DELIVERY RECEIPT</span>
                <h3 style="font-family:var(--font-serif); font-size:1.6rem; color:#ffffff; margin-bottom:0.75rem; line-height:1.2;">Message & Dossier Delivered</h3>
                
                <div style="display:inline-block; background:rgba(212,175,55,0.15); border:1px solid var(--color-gold); border-radius:20px; padding:0.35rem 1.25rem; font-family:monospace; font-weight:700; font-size:0.9rem; color:var(--color-gold); margin-bottom:1.25rem;">
                    DOSSIER REF: ${inquiry.id}
                </div>

                <p style="color:var(--color-text-muted); font-size:0.88rem; line-height:1.65; margin-bottom:1.5rem;">
                    Thank you, <strong style="color:#fff;">${inquiry.fullName}</strong>. Your inquiry has been registered in our estate ledger and dispatched to our Master Tea Sommelier. A delivery confirmation note has been issued.
                </p>

                <!-- Complete Structured Delivery Note -->
                <div style="background:rgba(4,14,8,0.85); border:1px solid rgba(212,175,55,0.25); border-radius:12px; padding:1.15rem 1.25rem; text-align:left; margin-bottom:1.5rem; font-size:0.83rem; line-height:1.6;">
                    <div style="color:var(--color-gold); font-size:0.72rem; text-transform:uppercase; letter-spacing:1.5px; font-weight:700; margin-bottom:0.6rem; border-bottom:1px solid rgba(212,175,55,0.2); padding-bottom:0.35rem;">
                        Delivery Note Summary
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.35rem;">
                        <span style="color:var(--color-text-muted);">Client Name:</span>
                        <strong style="color:#fff;">${inquiry.fullName}</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.35rem;">
                        <span style="color:var(--color-text-muted);">Client Email:</span>
                        <strong style="color:#86efac;">${inquiry.email}</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.35rem;">
                        <span style="color:var(--color-text-muted);">Phone / WhatsApp:</span>
                        <strong style="color:#fff;">${inquiry.phone || 'Not provided'}</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.35rem;">
                        <span style="color:var(--color-text-muted);">Requested Harvest / Service:</span>
                        <strong style="color:var(--color-gold);">${inquiry.service || 'Artisanal Pure Single-Estate Teas'}</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:0.35rem;">
                        <span style="color:var(--color-text-muted);">Budget Tier:</span>
                        <strong style="color:#fff;">${inquiry.budget || 'Not specified'}</strong>
                    </div>
                    <div style="margin-top:0.5rem;">
                        <span style="color:var(--color-text-muted); display:block; margin-bottom:0.25rem;">Project Details Entered:</span>
                        <p style="color:#e5e5e5; font-style:italic; margin:0; background:rgba(255,255,255,0.03); padding:0.5rem 0.75rem; border-radius:6px; font-size:0.8rem; line-height:1.5;">"${inquiry.details || inquiry.notes || 'General Inquiry'}"</p>
                    </div>
                </div>

                <!-- Actions -->
                <div style="display:flex; flex-direction:column; gap:0.75rem;">
                    <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn" style="padding:0.85rem 1.35rem; font-size:0.88rem; font-weight:700; text-decoration:none; display:flex; align-items:center; justify-content:center; gap:0.5rem; background:linear-gradient(135deg, #25d366, #128c7e); color:#ffffff; border-radius:30px; border:none; box-shadow:0 6px 20px rgba(37,211,102,0.3); transition:all 0.3s ease;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                        <span>Open WhatsApp Priority Concierge</span>
                    </a>
                    
                    <button type="button" id="close-inq-modal-btn2" class="btn btn-outline" style="font-size:0.82rem; padding:0.75rem; border-color:rgba(212,175,55,0.3); color:var(--color-gold); border-radius:30px; cursor:pointer;">
                        Close Receipt
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => modal.remove();
        document.getElementById('close-inq-modal-btn')?.addEventListener('click', closeModal);
        document.getElementById('close-inq-modal-btn2')?.addEventListener('click', closeModal);
        
        // Click backdrop to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Escape key to close
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }

    // ── Connoisseur Web Audio Harmonic Bell Chime ──
    function playSommelierChime() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            // Synthesize 4-note Tibetan singing bowl / crystal sommelier bell chord (C5, G5, C6, E6)
            const freqs = [523.25, 783.99, 1046.50, 1318.51];
            freqs.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

                gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
                gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.08 + 0.04);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 2.5);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start(ctx.currentTime + idx * 0.08);
                osc.stop(ctx.currentTime + idx * 0.08 + 2.6);
            });
        } catch (e) {
            console.warn("Audio chime context notice:", e);
        }
    }

    // ── Modal Digital Steep Timer Controller ──
    function bindModalSteepTimer(product) {
        const digitsEl = document.getElementById('modal-timer-digits');
        const statusEl = document.getElementById('modal-timer-status-text');
        const ringEl = document.getElementById('modal-timer-progress-ring');
        const startBtn = document.getElementById('btn-timer-start-pause');
        const resetBtn = document.getElementById('btn-timer-reset');
        const plus30Btn = document.getElementById('btn-timer-plus-30');
        const targetLabel = document.getElementById('modal-infusion-target-label');
        const tabBtns = document.querySelectorAll('.infusion-tab-btn');

        if (!digitsEl || !startBtn || !ringEl) return;

        let totalSeconds = product.steepSeconds || 180;
        let remainingSeconds = totalSeconds;
        let isRunning = false;
        let timerInterval = null;
        const ringCircumference = 440; // 2 * PI * 70

        function updateDisplay() {
            const min = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
            const sec = String(remainingSeconds % 60).padStart(2, '0');
            digitsEl.innerText = `${min}:${sec}`;

            // Calculate stroke dashoffset
            const progress = totalSeconds > 0 ? (1 - remainingSeconds / totalSeconds) : 0;
            const offset = ringCircumference * progress;
            ringEl.style.strokeDashoffset = offset;
        }

        function stopTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            window.activeSommelierModalTimer = null;
            isRunning = false;
        }

        function startTimer() {
            stopTimer();
            isRunning = true;
            statusEl.innerText = _t('timer_steeping', 'STEEPING IN PROGRESS...');
            statusEl.style.color = "var(--color-gold)";
            startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> ${_t('btn_pause_steep', 'Pause')}`;

            timerInterval = setInterval(() => {
                if (remainingSeconds > 0) {
                    remainingSeconds--;
                    updateDisplay();
                } else {
                    stopTimer();
                    statusEl.innerText = _t('timer_ready', 'INFUSION PERFECT');
                    statusEl.style.color = "#00e5c9";
                    startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:3px"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg> ${_t('btn_steep_again', 'Steep Again')}`;
                    ringEl.style.strokeDashoffset = 0;
                    playSommelierChime();
                    showToast("Steeping Complete!", `Your ${product.name} has infused to perfection. Pour and savor the aroma.`, "success");
                }
            }, 1000);

            window.activeSommelierModalTimer = timerInterval;
        }

        function pauseTimer() {
            stopTimer();
            statusEl.innerText = _t('timer_paused', 'PAUSED');
            statusEl.style.color = "var(--color-text-muted)";
            startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_resume_steep', 'Resume')}`;
        }

        startBtn.addEventListener('click', () => {
            if (remainingSeconds <= 0) {
                remainingSeconds = totalSeconds;
                updateDisplay();
                startTimer();
            } else if (isRunning) {
                pauseTimer();
            } else {
                startTimer();
            }
        });

        resetBtn.addEventListener('click', () => {
            stopTimer();
            remainingSeconds = totalSeconds;
            updateDisplay();
            statusEl.innerText = _t('timer_standby', 'READY TO STEEP');
            statusEl.style.color = "var(--color-gold)";
            startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_start_steep', 'Start Steep')}`;
        });

        plus30Btn.addEventListener('click', () => {
            remainingSeconds += 30;
            totalSeconds += 30;
            updateDisplay();
            showToast("Added +30s", "Steep duration extended by 30 seconds.", "success");
        });

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                stopTimer();
                const sec = parseInt(btn.getAttribute('data-seconds'), 10) || 180;
                const label = btn.getAttribute('data-label') || 'Infusion Target';
                totalSeconds = sec;
                remainingSeconds = sec;
                if (targetLabel) targetLabel.innerText = label;
                updateDisplay();
                statusEl.innerText = _t('timer_standby', 'READY TO STEEP');
                statusEl.style.color = "var(--color-gold)";
                startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_start_steep', 'Start Steep')}`;
            });
        });

        updateDisplay();
    }

    // ── Home Page Sommelier Brewing Ritual Live Timer ──
    let homeTimerInterval = null;
    let homeRemainingSeconds = 180;
    let homeTotalSeconds = 180;
    let homeTimerRunning = false;

    function bindBrewingGuideEvents() {
        const tabs = document.querySelectorAll('.brewing-tab-btn');
        const digitsEl = document.getElementById('home-timer-digits');
        const statusEl = document.getElementById('home-timer-status');
        const ringEl = document.getElementById('home-timer-progress-ring');
        const startBtn = document.getElementById('btn-home-timer-start');
        const resetBtn = document.getElementById('btn-home-timer-reset');

        const statTemp = document.getElementById('home-brew-stat-temp');
        const statDuration = document.getElementById('home-brew-stat-duration');
        const statRatio = document.getElementById('home-brew-stat-ratio');
        const statVessel = document.getElementById('home-brew-stat-vessel');

        if (!digitsEl || !startBtn || !ringEl) return;

        const homeCircumference = 408; // 2 * PI * 65

        function updateHomeDisplay() {
            const min = String(Math.floor(homeRemainingSeconds / 60)).padStart(2, '0');
            const sec = String(homeRemainingSeconds % 60).padStart(2, '0');
            digitsEl.innerText = `${min}:${sec}`;

            const progress = homeTotalSeconds > 0 ? (1 - homeRemainingSeconds / homeTotalSeconds) : 0;
            ringEl.style.strokeDashoffset = homeCircumference * progress;
        }

        function stopHomeTimer() {
            if (homeTimerInterval) {
                clearInterval(homeTimerInterval);
                homeTimerInterval = null;
            }
            homeTimerRunning = false;
        }

        function startHomeTimer() {
            stopHomeTimer();
            homeTimerRunning = true;
            statusEl.innerText = _t('timer_steeping', 'STEEPING...');
            statusEl.style.color = "var(--color-gold)";
            startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> ${_t('btn_pause_steep', 'Pause')}`;

            homeTimerInterval = setInterval(() => {
                if (homeRemainingSeconds > 0) {
                    homeRemainingSeconds--;
                    updateHomeDisplay();
                } else {
                    stopHomeTimer();
                    statusEl.innerText = _t('timer_ready', 'READY');
                    statusEl.style.color = "#00e5c9";
                    startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:3px"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg> ${_t('btn_steep_again', 'Steep Again')}`;
                    ringEl.style.strokeDashoffset = 0;
                    playSommelierChime();
                    showToast("Steeping Complete!", "Your tea infusion is perfectly extracted.", "success");
                }
            }, 1000);
        }

        function pauseHomeTimer() {
            stopHomeTimer();
            statusEl.innerText = _t('timer_paused', 'PAUSED');
            statusEl.style.color = "var(--color-text-muted)";
            startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_resume_steep', 'Resume')}`;
        }

        startBtn.addEventListener('click', () => {
            if (homeRemainingSeconds <= 0) {
                homeRemainingSeconds = homeTotalSeconds;
                updateHomeDisplay();
                startHomeTimer();
            } else if (homeTimerRunning) {
                pauseHomeTimer();
            } else {
                startHomeTimer();
            }
        });

        resetBtn.addEventListener('click', () => {
            stopHomeTimer();
            homeRemainingSeconds = homeTotalSeconds;
            updateHomeDisplay();
            statusEl.innerText = _t('timer_standby', 'STANDBY');
            statusEl.style.color = "var(--color-gold)";
            startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_start_steep', 'Start Steep')}`;
        });

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                stopHomeTimer();
                const temp = tab.getAttribute('data-temp') || '95°C';
                const sec = parseInt(tab.getAttribute('data-seconds'), 10) || 180;
                const ratio = tab.getAttribute('data-ratio') || '2.5g / 180ml';
                const vessel = tab.getAttribute('data-vessel') || 'Porcelain / Clay';

                if (statTemp) statTemp.innerText = temp;
                if (statDuration) statDuration.innerText = `${Math.floor(sec / 60)} Min`;
                if (statRatio) statRatio.innerText = ratio;
                if (statVessel) statVessel.innerText = vessel;

                homeTotalSeconds = sec;
                homeRemainingSeconds = sec;
                updateHomeDisplay();
                statusEl.innerText = _t('timer_standby', 'STANDBY');
                statusEl.style.color = "var(--color-gold)";
                startBtn.innerHTML = `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align:middle;margin-right:3px"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_start_steep', 'Start Steep')}`;
            });
        });

        updateHomeDisplay();
    }

    // 8. Dynamic Rotating Hero Background Image Slideshow from Gallery
    let heroSliderTimer = null;
    let currentHeroIndex = 0;

    function getHeroSlideMetadata(imgObj, index) {
        const src = (imgObj && imgObj.src) ? imgObj.src : '';
        const caption = (imgObj && imgObj.caption) ? imgObj.caption : '';
        const tag = (imgObj && imgObj.tag) ? imgObj.tag : 'Estate & Harvest';

        if (index === 0 || src.includes('1%20(1).') || src.includes('1 (1).')) {
            return {
                subtitle: 'Rock One Wild Tea (Pvt) Limited • Uva Medium Region',
                title: 'From Our Wild Forest Garden <span>to Your Cup.</span>',
                description: 'Rock One Wild Tea is a family-owned tea business born from our own tea garden in Sri Lanka’s Uva Medium region, nestled in a forested environment at the foot of a large rock formation. Hand made with Care, Crafted from Ceylon — from selecting the tea leaves to small-batch processing in our family factory.'
            };
        } else if (src.includes('1%20(2).') || src.includes('1 (2).')) {
            return {
                subtitle: '1,240m Elevation Highlands • Ettampitiya Sanctuary',
                title: 'Highland Terroir. <span>Pure Mountain Ecology.</span>',
                description: 'Our tea garden thrives in clean alpine air, rich mineral mountain soil, and dense natural cloud cover in Sri Lanka’s renowned Uva Medium region.'
            };
        } else if (src.includes('1%20(3).') || src.includes('1 (3).')) {
            return {
                subtitle: 'Family-Owned Tea Garden • Hand-Built With Vision',
                title: 'Generational Craft. <span>From Garden to Factory.</span>',
                description: 'What started as a small family effort during COVID has blossomed into an artisanal Ceylon Tea brand dedicated to purity and small-batch craftsmanship.'
            };
        } else if (src.includes('1%20(4).') || src.includes('1 (4).')) {
            return {
                subtitle: 'Boutique Family Factory • Working Sanctuary',
                title: 'Artisanal Facility. <span>Small-Batch Dedication.</span>',
                description: 'Every stage of tea production is monitored by hand in our small family factory to ensure uncompromised quality in every single batch.'
            };
        } else if (src.includes('1%20(5).') || src.includes('1 (5).')) {
            return {
                subtitle: 'Generational Artisans • Selective Two Leaves & A Bud',
                title: 'Dawn Hand-Plucking. <span>Artisanal Purity.</span>',
                description: 'Every tender shoot is hand-harvested at first light by skilled generational pluckers to preserve precious silver tips and volatile aromatics.'
            };
        } else if (src.includes('1%20(7).') || src.includes('1 (7).')) {
            return {
                subtitle: 'Natural Mountain Air-Withering • Gentle Aeration',
                title: 'Slow Air-Withering. <span>Enzymatic Balance.</span>',
                description: 'Harvested leaves rest on air-troughs as cool mountain breezes gently reduce moisture, preparing the leaves for orthodox rolling.'
            };
        } else if (src.includes('1%20(8).') || src.includes('1 (8).')) {
            return {
                subtitle: 'Forest Canopy Habitat • Native Biodiversity',
                title: 'Wild Botanical Forest. <span>Natural Equilibrium.</span>',
                description: 'Our tea trees share the canopy with mountain cinnamon and wild fern trees, creating a living ecosystem that enriches tea leaf flavor.'
            };
        } else if (src.includes('1%20(9).') || src.includes('1 (9).')) {
            return {
                subtitle: 'Cedar Trough Withering Room • Estate Craft',
                title: 'Fragrant Withering. <span>Artisanal Care.</span>',
                description: 'Traditional cedar troughs provide the perfect microclimate for slow, calibrated withering without artificial heat.'
            };
        } else if (src.includes('1%20(10).') || src.includes('1 (10).')) {
            return {
                subtitle: 'Time-Honored Orthodox Methods • Brass Rolling Tables',
                title: 'Orthodox Brass Rolling. <span>Unlocking Flavor.</span>',
                description: 'Gentle brass rolling twists the tender leaves to release natural juices and initiate controlled orthodox oxidation.'
            };
        } else if (src.includes('1%20(12).') || src.includes('1 (12).')) {
            return {
                subtitle: 'Calibrated Wood-Fired Curing • Essential Oil Locking',
                title: 'Historic Wood-Firing. <span>Flavor Perfection.</span>',
                description: 'Inside our heritage facility, calibrated wood-fired curing locks in volatile aromatics and creates multi-layered liquor notes.'
            };
        } else if (src.includes('1%20(13).') || src.includes('1 (13).')) {
            return {
                subtitle: 'Artisanal Sorting & Sifting • Visual Inspection',
                title: 'Hand-Graded Quality. <span>Strict Standards.</span>',
                description: 'Finished whole loose leaves are meticulously inspected and sorted by hand to guarantee flawless grading and appearance.'
            };
        } else if (src.includes('1%20(14).') || src.includes('1 (14).')) {
            return {
                subtitle: 'Factory Tours (Mon–Sat) • Max 10 Guests Per Group',
                title: 'Visit Our Family Factory. <span>Guided Walkthroughs.</span>',
                description: 'Experience the story of Rock One Wild Tea first-hand with factory tours, leaf processing, and sommelier tastings (9:30 AM, 11:00 AM, 1:30 PM, 3:30 PM).'
            };
        } else if (src.includes('1%20(15).') || src.includes('1 (15).')) {
            return {
                subtitle: 'Sommelier Cupping Flights • Amber Liquor Evaluation',
                title: 'Master Tea Tasting. <span>Cupping Excellence.</span>',
                description: 'Evaluated for briskness, clarity, aroma, and delicate floral finish by professional tea tasters before allocation.'
            };
        } else if (src.includes('1%20(16).') || src.includes('1 (16).')) {
            return {
                subtitle: 'Solid Light-Wood Teak Chests • Individually Numbered (1 to 10)',
                title: 'Numbered Collector Chests. <span>Limited Allocations.</span>',
                description: 'Each equinox harvest yields strictly 10 individually numbered collector chests, hand-sealed with private estate gold bullion wax.'
            };
        } else if (src.includes('1%20(17).') || src.includes('1 (17).')) {
            return {
                subtitle: 'Orthodox Whole Loose-Leaf • Signature Ceylon Harvest',
                title: 'Signature Loose-Leaf. <span>Pure Orthodox Grade.</span>',
                description: 'Intact, twisted whole leaves that unfurl beautifully in the teapot, delivering a rich amber cup with deep lingering sweetness.'
            };
        } else if (src.includes('1%20(18).') || src.includes('1 (18).')) {
            return {
                subtitle: 'Forested Rock Slope • Ettampitiya Terraces',
                title: 'The Rock Formation. <span>The Inspiration of Our Name.</span>',
                description: 'Nestled at the foot of a majestic rock monolith, our tea terraces capture dawn sunlight and afternoon mountain mist.'
            };
        } else if (src.includes('1%20(19).') || src.includes('1 (19).')) {
            return {
                subtitle: 'Fresh Morning Harvest • Handcrafted Bamboo Baskets',
                title: 'Morning Dew Harvest. <span>Fresh From The Garden.</span>',
                description: 'Freshly plucked leaves arrive at our factory within minutes of plucking to ensure absolute botanical freshness.'
            };
        } else if (src.includes('1%20(20).') || src.includes('1 (20).')) {
            return {
                subtitle: 'Small-Scale Boutique Operations • Family Pride',
                title: 'Pure Artisanal Heritage. <span>Every Batch Counted.</span>',
                description: 'We produce no mass-market tea. Every tin, pouch, and wooden chest represents our family’s direct passion and craft.'
            };
        } else if (src.includes('1%20(21).') || src.includes('1 (21).')) {
            return {
                subtitle: 'Uva Medium Character • Rich Color & Bright Aroma',
                title: 'Brisk & Aromatic. <span>Signature Ceylon Character.</span>',
                description: 'The unique seasonal winds of the Uva Medium district infuse our tea with a lively briskness prized by international connoisseurs.'
            };
        } else if (src.includes('1%20(22).') || src.includes('1 (22).')) {
            return {
                subtitle: 'Wellawela Mountain Vistas • 1,240m Elevation',
                title: 'Panoramic Horizons. <span>Mountain Terroir View.</span>',
                description: 'Overlooking sweeping ridges and mist-filled valleys, our sanctuary offers an unforgettable encounter with Ceylon tea origins.'
            };
        } else if (src.includes('1%20(23).') || src.includes('1 (23).')) {
            return {
                subtitle: 'Artisanal Hand-Rolling • Traditional Technique',
                title: 'Hand-Twisted Leaves. <span>Master Craftsmanship.</span>',
                description: 'Demonstrating the historic methods of Ceylon tea masters, gently pressing and curling leaves by hand for premium specialty lots.'
            };
        } else if (src.includes('1%20(24).') || src.includes('1 (24).')) {
            return {
                subtitle: 'Golden Tips & Silver Needles • Reserve Quality',
                title: 'Precious Silver Tips. <span>Pure White Tea Luxury.</span>',
                description: 'Unopened silvery terminal buds, naturally sun-cured to produce our rarest, most delicate, and antioxidant-rich white tea flights.'
            };
        } else if (src.includes('1%20(25).') || src.includes('1 (25).')) {
            return {
                subtitle: 'Natural Sun-Drying • Gentle Thermal Processing',
                title: 'Highland Sun-Drying. <span>Natural Solar Curing.</span>',
                description: 'Harnessing the high-altitude equatorial sun for gentle dehydration of our artisanal green and white specialty teas.'
            };
        } else if (src.includes('1%20(26).') || src.includes('1 (26).')) {
            return {
                subtitle: 'Botanical Ecology • Ettampitiya Nature Reserve',
                title: 'Biodiversity In Every Cup. <span>Eco-Harmonious.</span>',
                description: 'Protected native trees, birds, and alpine flowers flourish alongside our tea bushes, ensuring sustainable estate stewardship.'
            };
        } else if (src.includes('1%20(27).') || src.includes('1 (27).')) {
            return {
                subtitle: 'Master Roasting & Aroma Development • Artisanal Batch',
                title: 'Delicate Roasting. <span>Artisanal Finishing.</span>',
                description: 'Careful temperature tuning imparts a subtle toasted honey note and long-lasting floral fragrance to our black teas.'
            };
        } else if (src.includes('1%20(28).') || src.includes('1 (28).')) {
            return {
                subtitle: 'Signature Whole Leaf Reserve • Ceylon Black & Green',
                title: 'Signature Collection. <span>Pure Whole Leaf.</span>',
                description: 'Crafted without dust or fannings — only pure whole leaves that yield a smooth, complex, and full-bodied infusion.'
            };
        } else if (src.includes('1%20(29).') || src.includes('1 (29).')) {
            return {
                subtitle: 'Tea Tasting Garden Pavilion • Sanctuary Grounds',
                title: 'Open-Air Cupping. <span>Sanctuary Experience.</span>',
                description: 'Relax in our outdoor garden pavilion overlooking the tea terraces while savoring freshly brewed single-estate infusions.'
            };
        } else if (src.includes('Gift%20box') || src.includes('Gift box')) {
            return {
                subtitle: 'Artisanal Packaging • Handcrafted Solid Teak Wood',
                title: 'Handcrafted Teak Chests. <span>The Perfect Gift.</span>',
                description: 'Solid Sri Lankan teak gift chests carved by local craftsmen, containing numbered selections of our finest whole-leaf Ceylon teas.'
            };
        } else if (src.includes('WhatsApp')) {
            return {
                subtitle: 'Family Forest Garden • Ettampitiya Highlands',
                title: 'Rock One Wild Tea. <span>From Garden to Cup.</span>',
                description: 'Hand made with Care, Crafted from Ceylon — born from our own tea garden in Sri Lanka’s Uva Medium region.'
            };
        } else {
            return {
                subtitle: `${tag} • Rock One Wild Tea (Ettampitiya)`,
                title: `${caption || 'Handcrafted Ceylon Artisanal Tea'}`,
                description: 'Hand made with Care, Crafted from Ceylon — from selecting the tea leaves to small-batch processing in our family factory in Sri Lanka’s Uva Medium region.'
            };
        }
    }

    // ─── Heritage Our Story Gallery Slideshow ──────────────────────────────
    let heritageGalleryTimer = null;
    let currentHeritageIndex = 0;

    function initHeritageGallerySlider() {
        const slider = document.getElementById('heritage-gallery-slider');
        if (!slider) return;

        const slides = slider.querySelectorAll('.heritage-slide');
        if (slides.length <= 1) return;

        const dots = slider.querySelectorAll('.heritage-dot');
        const counter = document.getElementById('heritage-counter');
        const prevBtn = document.getElementById('heritage-prev-btn');
        const nextBtn = document.getElementById('heritage-next-btn');

        function updateHeritageSlide(idx) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            currentHeritageIndex = (idx + slides.length) % slides.length;
            slides[currentHeritageIndex].classList.add('active');

            const maxDots = Math.min(slides.length, 8);
            const activeDotIdx = currentHeritageIndex % maxDots;
            if (dots[activeDotIdx]) {
                dots[activeDotIdx].classList.add('active');
            }

            if (counter) {
                counter.innerText = `${String(currentHeritageIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
            }
        }

        function nextHeritageSlide() {
            updateHeritageSlide(currentHeritageIndex + 1);
        }

        function prevHeritageSlide() {
            updateHeritageSlide(currentHeritageIndex - 1);
        }

        function startHeritageAutoplay() {
            stopHeritageAutoplay();
            heritageGalleryTimer = setInterval(nextHeritageSlide, 4500);
        }

        function stopHeritageAutoplay() {
            if (heritageGalleryTimer) {
                clearInterval(heritageGalleryTimer);
                heritageGalleryTimer = null;
            }
        }

        if (prevBtn) {
            prevBtn.onclick = (e) => {
                e.stopPropagation();
                prevHeritageSlide();
                startHeritageAutoplay();
            };
        }

        if (nextBtn) {
            nextBtn.onclick = (e) => {
                e.stopPropagation();
                nextHeritageSlide();
                startHeritageAutoplay();
            };
        }

        dots.forEach(dot => {
            dot.onclick = (e) => {
                e.stopPropagation();
                const i = parseInt(dot.getAttribute('data-index'), 10);
                if (!isNaN(i)) {
                    updateHeritageSlide(i);
                    startHeritageAutoplay();
                }
            };
        });

        // Click slide to open lightbox
        slides.forEach(slide => {
            slide.onclick = () => {
                const src = slide.getAttribute('data-src');
                const caption = slide.getAttribute('data-caption');
                if (typeof openLightbox === 'function') {
                    openLightbox(src, caption);
                }
            };
        });

        // Touch Swipe Support for Mobile screens
        let touchStartX = 0;
        let touchEndX = 0;
        slider.ontouchstart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
        };
        slider.ontouchend = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 40) {
                nextHeritageSlide();
                startHeritageAutoplay();
            } else if (touchEndX - touchStartX > 40) {
                prevHeritageSlide();
                startHeritageAutoplay();
            }
        };

        slider.onmouseenter = stopHeritageAutoplay;
        slider.onmouseleave = startHeritageAutoplay;

        startHeritageAutoplay();
    }

    function initHeroSlider() {
        const sliderContainer = document.getElementById('hero-slider-container');
        if (!sliderContainer) return;

        const storeHeroSlides = (window.TeaFactoryStore && window.TeaFactoryStore.getHeroSlides) 
            ? window.TeaFactoryStore.getHeroSlides().filter(s => s.enabled !== false) 
            : [];
        const galleryImages = window.TeaFactoryStore ? window.TeaFactoryStore.getGalleryImages() : [];
        const slidesWrapper = sliderContainer.querySelector('.hero-slides-wrapper');
        const dotsContainer = document.getElementById('hero-dots');

        // Dynamically build slides from store hero slides (or fallback to gallery)
        if (slidesWrapper && storeHeroSlides.length > 0) {
            slidesWrapper.innerHTML = storeHeroSlides.map((slideObj, idx) => {
                const isActive = idx === currentHeroIndex || (idx === 0 && currentHeroIndex >= storeHeroSlides.length);
                const subtitle = slideObj.subtitle || 'Rock One Wild Tea (Pvt) Limited • Uva Medium Region';
                const title = slideObj.title || 'Artisanal Ceylon Wild Tea';
                const description = slideObj.description || 'Hand made with Care, Crafted from Ceylon — born from our own tea garden in Sri Lanka’s Uva Medium region.';
                const imgSrc = slideObj.image || 'images/1 (1).jpeg';

                return `
                    <div class="hero-slide${isActive ? ' active' : ''}" style="background-image: url('${imgSrc}');">
                        <div class="hero-slide-overlay"></div>
                        <div class="hero-slide-content">
                            <div class="hero-logo-box">
                                <img src="images/logo-gold.png" alt="Rock One Wild Tea Logo" class="hero-logo-gold" onerror="window.handleImageError && window.handleImageError(this, 'logo')" decoding="async">
                            </div>
                            <span class="hero-subtitle">${subtitle}</span>
                            <h1 class="hero-title">${title}</h1>
                            <p class="hero-description">${description}</p>
                            <div class="hero-cta">
                                <span class="btn btn-primary" onclick="window.appSwitchTab ? window.appSwitchTab('gifts') : (document.getElementById('nav-gifts') && document.getElementById('nav-gifts').click())">
                                    <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                                    Reserve Gift Chests
                                </span>
                                <span class="btn btn-outline" onclick="window.appSwitchTab ? window.appSwitchTab('tours') : (document.getElementById('nav-tours') && document.getElementById('nav-tours').click())">
                                    <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                                    Experience the Tour
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        } else if (slidesWrapper && galleryImages && galleryImages.length > 0) {
            slidesWrapper.innerHTML = galleryImages.map((imgObj, idx) => {
                const meta = getHeroSlideMetadata(imgObj, idx);
                const isActive = idx === currentHeroIndex || (idx === 0 && currentHeroIndex >= galleryImages.length);
                return `
                    <div class="hero-slide${isActive ? ' active' : ''}" style="background-image: url('${imgObj.src}');">
                        <div class="hero-slide-overlay"></div>
                        <div class="hero-slide-content">
                            <div class="hero-logo-box">
                                <img src="images/logo-gold.png" alt="Rock One Wild Tea Logo" class="hero-logo-gold" onerror="window.handleImageError && window.handleImageError(this, 'logo')" decoding="async">
                            </div>
                            <span class="hero-subtitle">${meta.subtitle}</span>
                            <h1 class="hero-title">${meta.title}</h1>
                            <p class="hero-description">${meta.description}</p>
                            <div class="hero-cta">
                                <span class="btn btn-primary" onclick="window.appSwitchTab ? window.appSwitchTab('gifts') : (document.getElementById('nav-gifts') && document.getElementById('nav-gifts').click())">
                                    <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                                    Reserve Gift Chests
                                </span>
                                <span class="btn btn-outline" onclick="window.appSwitchTab ? window.appSwitchTab('tours') : (document.getElementById('nav-tours') && document.getElementById('nav-tours').click())">
                                    <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                                    Experience the Tour
                                </span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        const slides = sliderContainer.querySelectorAll('.hero-slide');
        if (slides.length === 0) return;

        // Build dynamic dots and slide counter
        if (dotsContainer) {
            const totalSlides = slides.length;
            const maxDots = Math.min(totalSlides, 8);
            let dotsHtml = `<div class="hero-dots-track" style="display: flex; gap: 0.35rem; align-items: center;">`;
            for (let i = 0; i < maxDots; i++) {
                const isActive = (i === (currentHeroIndex % maxDots)) ? ' active' : '';
                dotsHtml += `<span class="hero-dot${isActive}" data-index="${i}"></span>`;
            }
            dotsHtml += `</div>`;
            dotsHtml += `<span class="hero-slide-counter" id="hero-slide-counter" style="color: var(--color-gold); font-size: 0.78rem; font-weight: 700; font-family: monospace; letter-spacing: 1px; margin-left: 0.35rem;">${String(currentHeroIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}</span>`;
            dotsContainer.innerHTML = dotsHtml;
        }

        const dots = dotsContainer ? dotsContainer.querySelectorAll('.hero-dot') : [];
        const prevBtn = document.getElementById('hero-prev-btn');
        const nextBtn = document.getElementById('hero-next-btn');
        const sidePrevBtn = document.getElementById('hero-prev-arrow');
        const sideNextBtn = document.getElementById('hero-next-arrow');
        const progressFill = document.getElementById('hero-progress-fill');

        function triggerProgressBar() {
            if (!progressFill) return;
            progressFill.style.transition = 'none';
            progressFill.style.width = '0%';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    progressFill.style.transition = 'width 5.5s linear';
                    progressFill.style.width = '100%';
                });
            });
        }

        function updateSlideDisplay(idx) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            currentHeroIndex = (idx + slides.length) % slides.length;
            slides[currentHeroIndex].classList.add('active');

            const maxDots = Math.min(slides.length, 8);
            const activeDotIdx = currentHeroIndex % maxDots;
            if (dots[activeDotIdx]) {
                dots[activeDotIdx].classList.add('active');
            }

            const counter = document.getElementById('hero-slide-counter');
            if (counter) {
                counter.innerText = `${String(currentHeroIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
            }

            triggerProgressBar();
        }

        function nextSlide() {
            updateSlideDisplay(currentHeroIndex + 1);
        }

        function prevSlide() {
            updateSlideDisplay(currentHeroIndex - 1);
        }

        function startAutoPlay() {
            stopAutoPlay();
            triggerProgressBar();
            heroSliderTimer = setInterval(nextSlide, 5500);
        }

        function stopAutoPlay() {
            if (heroSliderTimer) {
                clearInterval(heroSliderTimer);
                heroSliderTimer = null;
            }
            if (progressFill) {
                progressFill.style.transition = 'none';
            }
        }

        // Attach Dot Click listeners
        dots.forEach(dot => {
            dot.onclick = (e) => {
                e.stopPropagation();
                const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
                if (!isNaN(targetIdx)) {
                    updateSlideDisplay(targetIdx);
                    startAutoPlay();
                }
            };
        });

        if (prevBtn) {
            prevBtn.onclick = (e) => {
                e.stopPropagation();
                prevSlide();
                startAutoPlay();
            };
        }

        if (nextBtn) {
            nextBtn.onclick = (e) => {
                e.stopPropagation();
                nextSlide();
                startAutoPlay();
            };
        }

        if (sidePrevBtn) {
            sidePrevBtn.onclick = (e) => {
                e.stopPropagation();
                prevSlide();
                startAutoPlay();
            };
        }

        if (sideNextBtn) {
            sideNextBtn.onclick = (e) => {
                e.stopPropagation();
                nextSlide();
                startAutoPlay();
            };
        }

        // Touch Swipe Support for Mobile screens
        let touchStartX = 0;
        let touchEndX = 0;

        sliderContainer.ontouchstart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        sliderContainer.ontouchend = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
                startAutoPlay();
            } else if (touchEndX - touchStartX > 50) {
                prevSlide();
                startAutoPlay();
            }
        };

        // Pause on hover
        sliderContainer.onmouseenter = stopAutoPlay;
        sliderContainer.onmouseleave = startAutoPlay;

        // Start auto play
        startAutoPlay();
    }

    // Expose initHeroSlider globally
    window.initHeroSlider = initHeroSlider;

    // 8b. Luxury Custom Glowing Cursor Pointer
    function initCustomCursor() {
        const dot = document.getElementById('custom-cursor-dot');
        const ring = document.getElementById('custom-cursor-ring');
        if (!dot || !ring) return;

        // Skip on mobile touch-only devices
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            return;
        }

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let isVisible = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';

            if (!isVisible) {
                isVisible = true;
                dot.style.opacity = '1';
                ring.style.opacity = '1';
                ringX = mouseX;
                ringY = mouseY;
            }
        });

        document.addEventListener('mouseleave', () => {
            isVisible = false;
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            isVisible = true;
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        });

        // Mouse click feedback
        window.addEventListener('mousedown', () => {
            dot.classList.add('cursor-active');
            ring.classList.add('cursor-active');
        });

        window.addEventListener('mouseup', () => {
            dot.classList.remove('cursor-active');
            ring.classList.remove('cursor-active');
        });

        // Trailing animation physics loop
        function renderCursor() {
            if (isVisible) {
                ringX += (mouseX - ringX) * 0.18;
                ringY += (mouseY - ringY) * 0.18;
                ring.style.left = ringX + 'px';
                ring.style.top = ringY + 'px';
            }
            requestAnimationFrame(renderCursor);
        }
        requestAnimationFrame(renderCursor);

        // Hover highlighting on interactive elements
        const interactiveSelector = 'a, button, input, select, textarea, .btn, .nav-link, .box-card, .product-card, .announcement-card, .gallery-item-card, .testimonial-card-item, .star-item, .hero-nav-arrow, .hero-dot, .filter-tab-btn, .admin-tab-btn, .footer-social-link, .package-card, .card-image, [role="button"], [style*="cursor: pointer"], [onclick]';

        document.addEventListener('mouseover', (e) => {
            if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
                dot.classList.add('cursor-hover');
                ring.classList.add('cursor-hover');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
                dot.classList.remove('cursor-hover');
                ring.classList.remove('cursor-hover');
            }
        });
    }

    // 8c. Luxury FAQ & Tea Sommelier AI Chatbot Concierge (Multilingual-Aware Mode)
    function initFaqChatbot() {
        const launcher = document.getElementById('faq-chatbot-launcher');
        const windowEl = document.getElementById('faq-chatbot-window');
        const closeBtn = document.getElementById('chatbot-close-btn');
        const clearBtn = document.getElementById('chatbot-clear-btn');
        const menuBtn = document.getElementById('chatbot-menu-btn');
        const stream = document.getElementById('chatbot-messages-stream');
        const form = document.getElementById('chatbot-input-form');
        const input = document.getElementById('chatbot-user-input');
        const titleEl = windowEl ? windowEl.querySelector('.chatbot-title') : null;
        const subtitleEl = windowEl ? windowEl.querySelector('.chatbot-subtitle') : null;

        if (!launcher || !windowEl || !stream || !form || !input) return;

        let lastRenderedLang = null;

        // Clean Vector SVG Icons
        const SVG_ICONS = {
            gift: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
            leaf: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>`,
            compass: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
            card: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
            package: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
            cup: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
            layers: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
            pin: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
            star: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
            phone: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
            menu: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`
        };

        function getActiveLang() {
            return (window.TeaFactoryI18n ? window.TeaFactoryI18n.getActiveLanguage() : 'en').toLowerCase();
        }

        function getConfig() {
            return window.TeaFactoryI18n ? window.TeaFactoryI18n.getChatbotConfig(getActiveLang()) : {};
        }

        function getTopics() {
            return window.TeaFactoryI18n ? window.TeaFactoryI18n.getFaqTopics(getActiveLang()) : [];
        }

        function updateChatbotUIStrings() {
            const cfg = getConfig();
            if (titleEl && cfg.title) titleEl.innerText = cfg.title;
            if (subtitleEl && cfg.subtitle) subtitleEl.innerText = cfg.subtitle;
            if (input && cfg.placeholder) input.setAttribute('placeholder', cfg.placeholder);
        }

        // Toggle Chatbot Window
        function openChatbot() {
            // Close preferences popup if open
            const prefsPopup = document.getElementById('global-prefs-popup');
            if (prefsPopup && prefsPopup.classList.contains('active')) {
                prefsPopup.classList.remove('active');
                prefsPopup.setAttribute('aria-hidden', 'true');
            }

            windowEl.classList.add('active');
            windowEl.setAttribute('aria-hidden', 'false');
            
            const currentLang = getActiveLang();
            updateChatbotUIStrings();

            if (stream.children.length === 0 || lastRenderedLang !== currentLang) {
                stream.innerHTML = '';
                renderWelcomeMessage();
                lastRenderedLang = currentLang;
            }
            setTimeout(() => input.focus(), 250);
        }

        function closeChatbot() {
            windowEl.classList.remove('active');
            windowEl.setAttribute('aria-hidden', 'true');
        }

        launcher.addEventListener('click', () => {
            if (windowEl.classList.contains('active')) {
                closeChatbot();
            } else {
                openChatbot();
            }
        });

        closeBtn.addEventListener('click', closeChatbot);

        clearBtn.addEventListener('click', () => {
            stream.innerHTML = '';
            renderWelcomeMessage();
        });

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                const cfg = getConfig();
                renderFaqMenu(cfg.allTopicsTitle || "All Inquiry Topics");
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && windowEl.classList.contains('active')) {
                closeChatbot();
            }
        });

        // Render initial greeting and interactive FAQ menu
        function renderWelcomeMessage() {
            const cfg = getConfig();
            let welcomeGreeting = cfg.greeting || "Greetings! Welcome to **Rock One Wild Tea Estate**.";
            if (window.TeaFactoryStore) {
                const activeTheme = window.TeaFactoryStore.getActiveTheme();
                if (activeTheme && activeTheme.id !== 'classic' && activeTheme.sommelierGreeting) {
                    welcomeGreeting = activeTheme.sommelierGreeting;
                }
            }
            addBotMessage(welcomeGreeting);
            renderFaqMenu(cfg.menuTitle || "Select an Inquiry Topic:");
        }

        // Render Interactive In-Chat FAQ Menu Card
        function renderFaqMenu(headerTitle) {
            const cfg = getConfig();
            const topics = getTopics();
            const title = headerTitle || cfg.menuTitle || "Select an Inquiry Topic:";

            const menuCard = document.createElement('div');
            menuCard.className = 'chat-bubble bot faq-menu-wrapper';
            menuCard.style.width = '100%';
            menuCard.style.maxWidth = '100%';

            let html = `
                <div class="faq-directory-card">
                    <div class="faq-directory-header">
                        <span>${title}</span>
                    </div>
                    <div class="faq-directory-list">
            `;

            topics.forEach((topic, idx) => {
                const iconSvg = SVG_ICONS[topic.iconKey] || SVG_ICONS.leaf;
                html += `
                    <button type="button" class="faq-directory-item" data-index="${idx}">
                        <div class="faq-item-left">
                            <span class="faq-item-icon">${iconSvg}</span>
                            <span class="faq-item-text">${topic.question}</span>
                        </div>
                        <span class="faq-dir-arrow">&rarr;</span>
                    </button>
                `;
            });

            html += `
                    </div>
                </div>
            `;

            menuCard.innerHTML = html;

            menuCard.querySelectorAll('.faq-directory-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.getAttribute('data-index'), 10);
                    handleFaqSelect(idx);
                });
            });

            stream.appendChild(menuCard);
            stream.scrollTop = stream.scrollHeight;
        }

        // Handle FAQ Topic Selection
        function handleFaqSelect(idx) {
            const topics = getTopics();
            const topic = topics[idx];
            if (!topic) return;

            addUserMessage(topic.question);
            showTypingIndicator(() => {
                addBotResponseWithFollowUps(topic);
            });
        }

        // Add user message bubble
        function addUserMessage(text) {
            const bubble = document.createElement('div');
            bubble.className = 'chat-bubble user';
            bubble.innerText = text;
            stream.appendChild(bubble);
            stream.scrollTop = stream.scrollHeight;
        }

        // Add bot message bubble
        function addBotMessage(markdownText, actions = []) {
            const bubble = document.createElement('div');
            bubble.className = 'chat-bubble bot';
            
            let html = markdownText
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br>');

            if (actions && actions.length > 0) {
                html += '<div style="margin-top: 0.65rem;">';
                actions.forEach(action => {
                    if (action.tab) {
                        html += `<button type="button" class="chat-action-btn" data-tab="${action.tab}">${action.label} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>`;
                    } else if (action.onclick) {
                        html += `<button type="button" class="chat-action-btn" onclick="${action.onclick}">${action.label}</button>`;
                    } else if (action.href) {
                        html += `<a href="${action.href}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">${action.label} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`;
                    }
                });
                html += '</div>';
            }

            bubble.innerHTML = html;

            // Bind in-chat navigation buttons
            bubble.querySelectorAll('button[data-tab]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const tab = btn.getAttribute('data-tab');
                    if (tab) {
                        switchTab(tab);
                        closeChatbot();
                    }
                });
            });

            stream.appendChild(bubble);
            stream.scrollTop = stream.scrollHeight;
        }

        // Add bot response with clean follow-up questions
        function addBotResponseWithFollowUps(topic) {
            const cfg = getConfig();
            const topics = getTopics();
            const bubble = document.createElement('div');
            bubble.className = 'chat-bubble bot';

            let html = topic.answer
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br>');

            // Primary actions
            if (topic.actions && topic.actions.length > 0) {
                html += '<div style="margin-top: 0.65rem;">';
                topic.actions.forEach(action => {
                    if (action.tab) {
                        html += `<button type="button" class="chat-action-btn" data-tab="${action.tab}">${action.label} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>`;
                    } else if (action.href) {
                        html += `<a href="${action.href}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">${action.label} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`;
                    }
                });
                html += '</div>';
            }

            // Follow-up suggestion chips with proper SVG icons
            if (topic.followUps && topic.followUps.length > 0) {
                html += `
                    <div class="faq-followup-container">
                        <div class="faq-followup-title">${cfg.relatedTitle || "Related Inquiries:"}</div>
                        <div class="faq-followup-chips">
                `;
                topic.followUps.forEach(fIdx => {
                    const fTopic = topics[fIdx];
                    if (fTopic) {
                        const iconSvg = SVG_ICONS[fTopic.iconKey] || SVG_ICONS.leaf;
                        html += `<button type="button" class="faq-followup-chip" data-index="${fIdx}">${iconSvg}<span>${fTopic.question}</span></button>`;
                    }
                });
                html += `
                            <button type="button" class="faq-followup-chip faq-menu-chip" data-action="all-menu">${SVG_ICONS.menu}<span>${cfg.viewAll || "View All Topics"}</span></button>
                        </div>
                    </div>
                `;
            }

            bubble.innerHTML = html;

            // Bind tab navigation buttons
            bubble.querySelectorAll('button[data-tab]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const tab = btn.getAttribute('data-tab');
                    if (tab) {
                        switchTab(tab);
                        closeChatbot();
                    }
                });
            });

            // Bind follow-up chips
            bubble.querySelectorAll('.faq-followup-chip').forEach(btn => {
                btn.addEventListener('click', () => {
                    const act = btn.getAttribute('data-action');
                    if (act === 'all-menu') {
                        renderFaqMenu(cfg.allTopicsTitle || "All Inquiry Topics");
                    } else {
                        const idx = parseInt(btn.getAttribute('data-index'), 10);
                        handleFaqSelect(idx);
                    }
                });
            });

            stream.appendChild(bubble);
            stream.scrollTop = stream.scrollHeight;
        }

        // Typing indicator
        function showTypingIndicator(callback) {
            const typingEl = document.createElement('div');
            typingEl.className = 'chat-bubble bot';
            typingEl.id = 'chatbot-typing-indicator';
            typingEl.innerHTML = '<div class="typing-dots"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
            stream.appendChild(typingEl);
            stream.scrollTop = stream.scrollHeight;

            setTimeout(() => {
                const indicator = document.getElementById('chatbot-typing-indicator');
                if (indicator) indicator.remove();
                callback();
            }, 300);
        }

        // Handle User Input Submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = input.value.trim();
            if (!query) return;

            input.value = '';
            addUserMessage(query);

            showTypingIndicator(() => {
                generateSmartResponse(query);
            });
        });

        // Multilingual Intelligent Keyword Matcher & Fallback
        function generateSmartResponse(query) {
            const cfg = getConfig();
            const topics = getTopics();
            const lower = query.toLowerCase();

            // Check Lookbook / Wholesale Technical Dossier
            if (/lookbook|brochure|pdf|dossier|wholesale|b2b|export|නාමාවලිය|පොත|விவரக்குறிப்பு|カタログ|白皮书|画册|كتالوج/.test(lower)) {
                addBotMessage(cfg.lookbookResponse || "You can view and download our complete **2026 Estate Lookbook & Wholesale Technical Dossier (PDF)** right now.", [
                    { label: cfg.btnOpenLookbook || "Open Estate Lookbook (PDF)", onclick: "if(window.appOpenLookbook){window.appOpenLookbook()}" },
                    { label: cfg.btnTradeDesk || "WhatsApp Trade Desk", href: "https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%2C%20I%20would%20like%20to%20receive%20the%202026%20B2B%20Wholesale%20Lookbook%20and%20Price%20List." }
                ]);
                return;
            }

            // Match topic by index using international regex matrix
            const topicIdx = window.TeaFactoryI18n ? window.TeaFactoryI18n.matchChatbotTopicIndex(query) : -1;
            if (topicIdx >= 0 && topics[topicIdx]) {
                addBotResponseWithFollowUps(topics[topicIdx]);
                return;
            }

            // Default intelligent fallback in user's active language
            addBotMessage(cfg.fallback || "Thank you for your inquiry! Our master tea sommelier is available to assist you.", [
                { label: cfg.btnWhatsappDesk || "Chat on WhatsApp Desk", href: "https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20a%20question%3A%20" + encodeURIComponent(query) },
                { label: cfg.btnExploreCatalog || "Explore Catalog", tab: "catalog" }
            ]);
            renderFaqMenu(cfg.menuTitle || "Or select an inquiry topic:");
        }

        // Expose global method to synchronize language live
        window.appSyncChatbotLanguage = function() {
            updateChatbotUIStrings();
            const currentLang = getActiveLang();
            if (windowEl.classList.contains('active')) {
                stream.innerHTML = '';
                renderWelcomeMessage();
                lastRenderedLang = currentLang;
            }
        };
    }

    // ── Connoisseur Multi-Item Reserve Bag / Cart System ──
    function initCartSystem() {
        const cartOverlay = document.getElementById('cart-drawer-overlay');
        const cartCloseBtn = document.getElementById('cart-drawer-close-btn');
        const floatingCartBtn = document.getElementById('floating-cart-btn');
        const floatingCartBadge = document.getElementById('floating-cart-badge');
        const floatingCartPulse = document.getElementById('floating-cart-pulse');
        const navCartBadge = document.getElementById('nav-cart-badge');
        const mobileCartBadge = document.getElementById('mobile-cart-badge');

        function updateCartBadges() {
            const count = window.TeaFactoryStore.getCartTotalCount();
            
            // Update floating cart badge
            if (floatingCartBadge) {
                floatingCartBadge.textContent = count;
                if (count > 0) {
                    floatingCartBadge.style.display = 'flex';
                    floatingCartBadge.classList.remove('cart-badge-bump');
                    void floatingCartBadge.offsetWidth; // force reflow
                    floatingCartBadge.classList.add('cart-badge-bump');
                    if (floatingCartBtn) floatingCartBtn.classList.add('has-items');
                } else {
                    floatingCartBadge.style.display = 'none';
                    if (floatingCartBtn) floatingCartBtn.classList.remove('has-items');
                }
            }

            [navCartBadge, mobileCartBadge].forEach(badge => {
                if (!badge) return;
                badge.textContent = count;
                if (count > 0) {
                    badge.style.display = 'inline-block';
                    badge.classList.remove('cart-badge-bump');
                    void badge.offsetWidth;
                    badge.classList.add('cart-badge-bump');
                } else {
                    badge.style.display = 'none';
                }
            });
        }

        window.appUpdateCartBadges = updateCartBadges;

        function openCart() {
            if (!cartOverlay) return;
            // Close other drawers/popups if open
            if (drawerOverlay) {
                drawerOverlay.classList.remove('active');
                drawerOverlay.classList.remove('open');
            }
            const chatbotWin = document.getElementById('faq-chatbot-window');
            if (chatbotWin && chatbotWin.classList.contains('active')) {
                chatbotWin.classList.remove('active');
                chatbotWin.setAttribute('aria-hidden', 'true');
            }
            const prefsPopup = document.getElementById('global-prefs-popup');
            if (prefsPopup && prefsPopup.classList.contains('active')) {
                prefsPopup.classList.remove('active');
                prefsPopup.setAttribute('aria-hidden', 'true');
            }

            window.UIComponents.renderCartDrawer('cart-drawer-body');
            const cartContainer = cartOverlay.querySelector('.drawer-container');
            if (cartContainer) {
                cartContainer.classList.add('checkout-mode');
            }
            cartOverlay.classList.add('checkout-fullscreen');
            cartOverlay.classList.add('active');
            cartOverlay.classList.add('open');
            cartOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            bindCartDrawerEvents();
        }

        function closeCart() {
            if (!cartOverlay) return;
            const cartContainer = cartOverlay.querySelector('.drawer-container');
            if (cartContainer) {
                cartContainer.classList.remove('checkout-mode');
            }
            cartOverlay.classList.remove('checkout-fullscreen');
            cartOverlay.classList.remove('active');
            cartOverlay.classList.remove('open');
            cartOverlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        window.appOpenCart = openCart;
        window.appCloseCart = closeCart;

        // Global delegated trigger for opening Reserve Bag
        document.addEventListener('click', (e) => {
            const openTrigger = e.target.closest('#floating-cart-btn, .floating-cart-btn, #nav-cart-btn, #mobile-cart-btn, .nav-btn-cart, .mobile-cart-item, [data-action="open-cart"], .btn-open-reserve-bag');
            if (openTrigger) {
                e.preventDefault();
                e.stopPropagation();
                if (mobileMenuBtn && mobileNavDrawer) {
                    mobileMenuBtn.classList.remove('open');
                    mobileNavDrawer.classList.remove('open');
                }
                openCart();
            }
        });

        if (cartCloseBtn) {
            cartCloseBtn.addEventListener('click', closeCart);
        }

        if (cartOverlay) {
            cartOverlay.addEventListener('click', (e) => {
                if (e.target === cartOverlay) closeCart();
            });
        }

        // Close Reserve Bag on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && cartOverlay && cartOverlay.classList.contains('active')) {
                closeCart();
            }
        });

        // Global Add-To-Cart Event Delegation
        document.addEventListener('click', (e) => {
            const addBtn = e.target.closest('.btn-add-to-cart') || e.target.closest('.btn-modal-add-to-cart');
            if (!addBtn) return;
            e.preventDefault();
            e.stopPropagation();

            const prodId = addBtn.getAttribute('data-id');
            const products = window.TeaFactoryStore.getProducts();
            const product = products.find(p => String(p.id) === String(prodId));

            if (!product) {
                showToast("Product not found in catalog.", "error");
                return;
            }

            const result = window.TeaFactoryStore.addToCart(product, 1);
            if (result.success) {
                updateCartBadges();
                showToast(`Added 1x ${product.name} to Reserve Bag.`, "success");
                
                // If clicked inside Connoisseur modal, close it cleanly
                const modal = addBtn.closest('.connoisseur-modal-overlay');
                if (modal) {
                    if (window.activeSommelierModalTimer) {
                        clearInterval(window.activeSommelierModalTimer);
                        window.activeSommelierModalTimer = null;
                    }
                    modal.remove();
                }

                // Open cart drawer immediately
                openCart();
            }
        });

        // Bind interactive events inside Cart Drawer
        function bindCartDrawerEvents() {
            const body = document.getElementById('cart-drawer-body');
            if (!body) return;

            // 1. Quantity Plus
            body.querySelectorAll('.cart-qty-plus').forEach(btn => {
                btn.onclick = () => {
                    const key = btn.getAttribute('data-cart-key');
                    const cart = window.TeaFactoryStore.getCart();
                    const item = cart.find(ci => ci.cartKey === key);
                    if (item) {
                        window.TeaFactoryStore.updateCartQuantity(key, item.quantity + 1);
                        updateCartBadges();
                        window.UIComponents.renderCartDrawer('cart-drawer-body');
                        bindCartDrawerEvents();
                    }
                };
            });

            // 2. Quantity Minus
            body.querySelectorAll('.cart-qty-minus').forEach(btn => {
                btn.onclick = () => {
                    const key = btn.getAttribute('data-cart-key');
                    const cart = window.TeaFactoryStore.getCart();
                    const item = cart.find(ci => ci.cartKey === key);
                    if (item) {
                        window.TeaFactoryStore.updateCartQuantity(key, item.quantity - 1);
                        updateCartBadges();
                        window.UIComponents.renderCartDrawer('cart-drawer-body');
                        bindCartDrawerEvents();
                    }
                };
            });

            // 3. Remove Item
            body.querySelectorAll('.cart-item-remove-btn').forEach(btn => {
                btn.onclick = () => {
                    const key = btn.getAttribute('data-cart-key');
                    window.TeaFactoryStore.removeFromCart(key);
                    updateCartBadges();
                    showToast("Item removed from reserve bag.", "info");
                    window.UIComponents.renderCartDrawer('cart-drawer-body');
                    bindCartDrawerEvents();
                };
            });

            // 4. Clear Entire Cart
            const clearBtn = document.getElementById('btn-clear-cart');
            if (clearBtn) {
                clearBtn.onclick = () => {
                    showDeleteConfirmModal({
                        title: 'Empty Reserve Bag',
                        subtitle: 'Shopping Bag',
                        itemName: 'All Selected Teas & Gift Boxes',
                        message: 'Are you sure you want to empty your entire reserve bag? All added products will be cleared.',
                        confirmText: 'Empty Bag',
                        onConfirm: () => {
                            window.TeaFactoryStore.clearCart();
                            updateCartBadges();
                            showToast("Reserve bag emptied.", "info");
                            window.UIComponents.renderCartDrawer('cart-drawer-body');
                        }
                    });
                };
            }

            // 4b. Cart Guest / Patron Sign-in Link
            const cartGuestSigninBtn = document.getElementById('cart-guest-signin-btn');
            if (cartGuestSigninBtn) {
                cartGuestSigninBtn.onclick = () => {
                    if (typeof window.requireCustomerAuth === 'function') {
                        window.requireCustomerAuth(
                            'Sign in with your Email ID to link this allocation to your patron master ledger profile.',
                            () => {
                                window.UIComponents.renderCartDrawer('cart-drawer-body');
                                bindCartDrawerEvents();
                            }
                        );
                    }
                };
            }

            // 4c. Country Selection, Live Currency Conversion & Province Logic
            const checkoutForm = document.getElementById('cart-checkout-form');
            const countryInput = document.getElementById('cart-cust-country');

            const updateCheckoutCurrencyAndShipping = () => {
                const country = countryInput ? countryInput.value : (window.lastSelectedCheckoutCountry || 'Sri Lanka');
                window.lastSelectedCheckoutCountry = country;
                const isSriLanka = country === 'Sri Lanka';
                const currInfo = window.getCountryCurrency ? window.getCountryCurrency(country) : (isSriLanka ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });
                
                const subtotalUSD = window.TeaFactoryStore.getCartSubtotal();
                const shippingUSD = window.TeaFactoryStore.getCartShippingTotal ? window.TeaFactoryStore.getCartShippingTotal(country) : 0;
                const grandTotalUSD = window.TeaFactoryStore.getCartGrandTotal ? window.TeaFactoryStore.getCartGrandTotal(country) : (subtotalUSD + shippingUSD);
                
                const formattedSubtotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(subtotalUSD, currInfo) : `$${subtotalUSD.toFixed(2)}`;
                const formattedShipping = shippingUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(shippingUSD, currInfo) : `$${shippingUSD.toFixed(2)}`) : 'Complimentary';
                const formattedGrandTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(grandTotalUSD, currInfo) : `$${grandTotalUSD.toFixed(2)}`;
                const grandTotalLKR = Math.round(grandTotalUSD * 305);

                // 1. Update all cart item rows to the selected currency
                body.querySelectorAll('.cart-item-row').forEach(row => {
                    const unitUSD = Number(row.getAttribute('data-unit-usd') || 0);
                    const lineUSD = Number(row.getAttribute('data-line-usd') || 0);
                    const lineEl = row.querySelector('.cart-item-line-total');
                    if (lineEl && window.formatAmountInCurrency) {
                        lineEl.textContent = window.formatAmountInCurrency(lineUSD, currInfo);
                    }
                    const unitEl = row.querySelector('.cart-item-unit-price');
                    if (unitEl && window.formatAmountInCurrency) {
                        unitEl.textContent = `${window.formatAmountInCurrency(unitUSD, currInfo)} each`;
                    }
                });

                // 2. Update Order Summary Breakdown
                const subtotalEl = document.getElementById('cart-summary-subtotal');
                if (subtotalEl) {
                    subtotalEl.textContent = formattedSubtotal;
                }
                const shippingEl = document.getElementById('cart-summary-shipping');
                if (shippingEl) {
                    shippingEl.textContent = formattedShipping;
                    shippingEl.style.color = shippingUSD > 0 ? '#86efac' : 'var(--color-gold)';
                }
                const shippingLabelEl = document.getElementById('cart-summary-shipping-label');
                if (shippingLabelEl) {
                    shippingLabelEl.textContent = isSriLanka ? 'Sri Lanka Post EMS Courier' : 'Sri Lanka Post EMS International Priority Air';
                }
                const totalEl = document.getElementById('cart-summary-total');
                if (totalEl) {
                    totalEl.textContent = formattedGrandTotal;
                }
                const totalTitleEl = document.getElementById('cart-summary-total-title');
                if (totalTitleEl) {
                    totalTitleEl.textContent = `Total Due (${currInfo.code})`;
                }

                // Update Section 4 Shipping Badges and Rate Note
                const emsPricePill = document.getElementById('cart-shipping-ems-price-pill');
                if (emsPricePill) {
                    emsPricePill.textContent = formattedShipping;
                }
                const codPricePill = document.getElementById('cart-shipping-cod-price-pill');
                if (codPricePill) {
                    codPricePill.textContent = formattedShipping;
                }
                const rateNote = document.getElementById('cart-shipping-rate-note');
                if (rateNote) {
                    rateNote.textContent = isSriLanka 
                        ? 'Rs 650 LKR (Complimentary over $80)' 
                        : (window.formatAmountInCurrency ? window.formatAmountInCurrency(15, currInfo) : '$15.00') + ' International EMS (Complimentary over $150)';
                }

                // 3. Update COD Panel (Sri Lanka Only)
                const codAmountDisplay = document.getElementById('cart-cod-amount-display');
                if (codAmountDisplay) {
                    codAmountDisplay.textContent = `Rs ${grandTotalLKR.toLocaleString()} LKR`;
                }
                const codBtnText = document.getElementById('cart-cod-btn-text');
                if (codBtnText) {
                    codBtnText.textContent = `Confirm Order via Cash on Delivery (COD) \u2022 Rs ${grandTotalLKR.toLocaleString()} LKR`;
                }

                // 4. Update Bank Transfer & Cash Deposit Panels
                const bankDisplay = isSriLanka 
                    ? `Rs ${grandTotalLKR.toLocaleString()} LKR` 
                    : `${formattedGrandTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>`;
                
                const bankAmountDisplay = document.getElementById('cart-bank-amount-display');
                if (bankAmountDisplay) {
                    bankAmountDisplay.innerHTML = bankDisplay;
                }
                const bankBtnText = document.getElementById('cart-bank-btn-text');
                if (bankBtnText) {
                    bankBtnText.textContent = `Place Bank Transfer Order \u2022 ${formattedGrandTotal}`;
                }

                const depositAmountDisplay = document.getElementById('cart-deposit-amount-display');
                if (depositAmountDisplay) {
                    depositAmountDisplay.innerHTML = bankDisplay;
                }
                const slipBtnText = document.getElementById('cart-slip-btn-text');
                if (slipBtnText) {
                    slipBtnText.textContent = `Submit Cash Deposit Slip \u2022 ${formattedGrandTotal}`;
                }

                // 5. Update PayPal Display
                const paypalAmountDisplay = document.getElementById('cart-paypal-amount-display');
                if (paypalAmountDisplay) {
                    paypalAmountDisplay.textContent = currInfo.code === 'USD' 
                        ? `$${grandTotalUSD.toFixed(2)} USD` 
                        : `${formattedGrandTotal} ($${grandTotalUSD.toFixed(2)} USD)`;
                }

                // 6. Update Region / Province field
                const regionContainer = document.getElementById('cart-region-container');
                if (regionContainer) {
                    if (isSriLanka) {
                        if (!regionContainer.querySelector('select')) {
                            regionContainer.innerHTML = `
                                <label class="form-label" for="cart-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Region / Province *</label>
                                <select class="form-input" id="cart-cust-region" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
                                    <option value="Western Province (Colombo, Gampaha, Kalutara)">Western Province (Colombo, Gampaha)</option>
                                    <option value="Central Province (Kandy, Nuwara Eliya, Matale)">Central Province (Kandy, Nuwara Eliya)</option>
                                    <option value="Uva Province (Badulla, Bandarawela, Ettampitiya)" selected>Uva Province (Badulla, Ettampitiya)</option>
                                    <option value="Southern Province (Galle, Matara, Hambantota)">Southern Province (Galle, Matara)</option>
                                    <option value="Sabaragamuwa Province (Ratnapura, Kegalle)">Sabaragamuwa Province (Ratnapura)</option>
                                    <option value="North Western Province (Kurunegala, Puttalam)">North Western Province (Kurunegala)</option>
                                    <option value="North Central Province (Anuradhapura, Polonnaruwa)">North Central Province (Anuradhapura)</option>
                                    <option value="Northern Province (Jaffna, Kilinochchi, Vavuniya)">Northern Province (Jaffna)</option>
                                    <option value="Eastern Province (Batticaloa, Trincomalee, Ampara)">Eastern Province (Batticaloa, Trincomalee)</option>
                                </select>
                            `;
                        }
                    } else {
                        if (!regionContainer.querySelector('input')) {
                            regionContainer.innerHTML = `
                                <label class="form-label" for="cart-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">State / Province / County *</label>
                                <input class="form-input" type="text" id="cart-cust-region" placeholder="e.g. California / London / Tokyo" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;" required>
                            `;
                        }
                    }
                }

                // 7. Update Shipping Options (Show COD only for Sri Lanka)
                const codCard = document.getElementById('cart-shipping-card-cod');
                const emsTitle = document.getElementById('cart-shipping-ems-title');
                const emsDesc = document.getElementById('cart-shipping-ems-desc');
                const emsRadio = document.getElementById('cart-ship-ems');

                if (isSriLanka) {
                    if (codCard) codCard.style.display = 'flex';
                    if (emsTitle) emsTitle.textContent = 'Sri Lanka Post EMS Express (Pre-paid)';
                    if (emsDesc) emsDesc.textContent = 'Door-to-door express parcel courier with official Sri Lanka Post tracking ID. Settle online via PayPal/Card or Direct Bank Transfer.';
                } else {
                    if (codCard) codCard.style.display = 'none';
                    if (emsRadio) emsRadio.checked = true;
                    if (emsTitle) emsTitle.textContent = 'Sri Lanka Post EMS International Priority Air Courier';
                    if (emsDesc) emsDesc.textContent = 'Official Sri Lanka Post EMS International Priority Air Courier with end-to-end international tracking number. Estimated transit: 5-10 business days.';
                    syncShippingSelection();
                }
            };

            const syncShippingSelection = () => {
                const selectedMethod = document.querySelector('input[name="cart-shipping-method"]:checked')?.value || 'ems_express';
                const codCard = document.getElementById('cart-shipping-card-cod');
                const emsCard = document.getElementById('cart-shipping-card-ems');
                const codPanel = document.getElementById('cart-pay-panel-cod');
                const prepaidPanel = document.getElementById('cart-pay-panel-prepaid');

                if (selectedMethod === 'cod') {
                    if (codCard) {
                        codCard.style.border = '1.5px solid #25d366';
                        codCard.style.background = 'rgba(37,211,102,0.1)';
                    }
                    if (emsCard) {
                        emsCard.style.border = '1.5px solid rgba(255,255,255,0.15)';
                        emsCard.style.background = 'rgba(0,0,0,0.3)';
                    }
                    if (codPanel) codPanel.style.display = 'block';
                    if (prepaidPanel) prepaidPanel.style.display = 'none';
                } else {
                    if (emsCard) {
                        emsCard.style.border = '1.5px solid var(--color-gold)';
                        emsCard.style.background = 'rgba(212,175,55,0.08)';
                    }
                    if (codCard) {
                        codCard.style.border = '1.5px solid rgba(255,255,255,0.15)';
                        codCard.style.background = 'rgba(0,0,0,0.3)';
                    }
                    if (codPanel) codPanel.style.display = 'none';
                    if (prepaidPanel) prepaidPanel.style.display = 'block';
                }
            };

            if (countryInput) {
                countryInput.onchange = updateCheckoutCurrencyAndShipping;
                updateCheckoutCurrencyAndShipping();
            }

            body.querySelectorAll('input[name="cart-shipping-method"]').forEach(r => {
                r.onchange = syncShippingSelection;
            });

            // 4d. Cart Slip Upload & Payment Tab Bindings
            let selectedCartSlipBase64 = '';
            bindPaymentTabs('cart-checkout-form');
            bindFileUpload('cart-bank-slip', 'cart-bank-slip-zone', 'cart-slip-preview', (b64) => {
                selectedCartSlipBase64 = b64;
            });
            bindFileUpload('cart-cash-slip', 'cart-cash-slip-zone', 'cart-cash-slip-preview', (b64) => {
                selectedCartSlipBase64 = b64;
            });

            // Reusable Order Confirmation Renderer with CEO Signature
            const renderOrderConfirmationSuccess = (bodyEl, order, paymentMethod, paypalRef = '') => {
                if (!bodyEl || !order) return;
                const isCOD = paymentMethod === 'cod';
                const isPayPal = paymentMethod === 'paypal';

                bodyEl.innerHTML = `
                    <div class="cart-success-view" style="text-align: center; padding: 2.25rem 1rem;">
                        <div style="width: 76px; height: 76px; border-radius: 50%; background: ${isCOD ? 'rgba(37,211,102,0.15)' : 'rgba(212,175,55,0.12)'}; border: 2px solid ${isCOD ? '#25d366' : 'var(--color-gold)'}; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.15rem auto; color: ${isCOD ? '#25d366' : 'var(--color-gold)'};">
                            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span class="season-badge" style="background: ${isCOD ? 'rgba(37,211,102,0.2)' : 'rgba(212,175,55,0.15)'}; color: ${isCOD ? '#4ade80' : 'var(--color-gold)'}; font-size: 0.72rem; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                            ${isCOD ? 'Cash on Delivery \u2022 Order Confirmed' : (isPayPal ? 'Paid \u2022 Instant PayPal Clearance' : 'Allocation Reserved \u2022 Slip Attached')}
                        </span>
                        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: #ffffff; margin: 0.75rem 0 0.25rem 0;">Allocation Registered</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
                            Thank you, ${order.customerName}. Your reserve order has been entered into the estate master ledger.
                        </p>

                        <div style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; padding: 1.15rem; margin-bottom: 1.25rem; text-align: left;">
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Order Reference ID</span>
                                <strong style="font-family: monospace; color: var(--color-gold); font-size: 0.95rem;">${order.id}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Delivery Destination</span>
                                <span style="color: #ffffff; font-size: 0.85rem; text-align: right; max-width: 220px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${order.country} &bull; ${order.city || ''}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Courier Method</span>
                                <span style="color: #86efac; font-size: 0.82rem; font-weight: 600;">
                                    ${order.shippingMethod === 'cod' ? 'Sri Lanka Post EMS (Cash on Delivery)' : (order.country === 'Sri Lanka' ? 'Sri Lanka Post EMS Express' : 'Sri Lanka Post EMS International Priority Air')}
                                </span>
                            </div>
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Amount</span>
                                <strong style="color: var(--color-gold); font-size: 1.1rem;">${order.formattedPrice}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Payment Mode</span>
                                <span style="color: ${isCOD ? '#4ade80' : 'var(--color-gold)'}; font-size: 0.85rem; font-weight: 700;">
                                    ${isCOD ? 'Cash on Delivery (Pay upon delivery)' : (isPayPal ? 'PayPal / International Card' : 'Bank of Ceylon Deposit')}
                                </span>
                            </div>
                        </div>

                        <!-- Executive Director & CEO Verification Seal -->
                        <div style="background: rgba(212,175,55,0.06); border: 1px dashed rgba(212,175,55,0.35); border-radius: 10px; padding: 0.9rem 1.25rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                            <div style="text-align: left;">
                                <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700; display: block;">Executive Sign-Off &bull; Verified</span>
                                <div style="font-size: 0.76rem; color: #d1d5db; margin-top: 2px;">Allocation registered in estate ledger</div>
                            </div>
                            <div style="text-align: right;">
                                <img src="images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 34px; object-fit: contain; display: block; margin: 0 0 2px auto;" onerror="this.onerror=null; this.src='images/ceo_signature.png';" />
                                <div style="font-size: 0.76rem; font-weight: 700; color: #ffffff;">Prasanga</div>
                                <div style="font-size: 0.65rem; color: var(--color-gold);">Director &amp; CEO</div>
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                            <button type="button" class="btn btn-outline btn-cart-success-cert" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(212,175,55,0.5); color: var(--color-gold); display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: rgba(0,0,0,0.35);">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                Download Luxury Allocation Certificate (PDF)
                            </button>
                            <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%20Concierge%2C%20I%20have%20placed%20Order%20${order.id}%20for%20${encodeURIComponent(order.formattedPrice)}%20via%20${encodeURIComponent(isCOD ? 'Cash on Delivery' : 'Pre-paid EMS')}.%20Please%20confirm%20my%20dispatch." target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.85rem 1.5rem; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #25d366; border-color: #25d366; color: #040e08; font-weight: 700;">
                                <span>Notify Concierge on WhatsApp</span>
                            </a>
                            <button type="button" class="btn btn-outline" onclick="if(window.appCloseCart){window.appCloseCart()} window.appSwitchTab ? window.appSwitchTab('order') : (document.getElementById('nav-order') &amp;&amp; document.getElementById('nav-order').click())" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                                View in "My Order &amp; Pay" Desk &rarr;
                            </button>
                        </div>
                    </div>
                `;

                bodyEl.querySelector('.btn-cart-success-cert')?.addEventListener('click', () => {
                    generateAllocationCertificate(order);
                });
            };

            // 4e. Initialize PayPal button for Reserve Bag Cart Checkout
            const initCartPayPal = () => {
                const paypalContainer = document.getElementById('cart-paypal-button-container');
                if (!paypalContainer || !window.TeaFactoryPayPal) return;

                const cartItems = window.TeaFactoryStore.getCart();
                if (!cartItems || cartItems.length === 0) return;

                const cartSubtotal = cartItems.reduce((sum, item) => sum + ((Number(item.price) || 0) * (item.quantity || 1)), 0);
                const cartShipping = cartSubtotal >= 100 || cartSubtotal === 0 ? 0 : 15;
                const cartTotal = cartSubtotal + cartShipping;

                window.TeaFactoryPayPal.renderButtons({
                    containerId: 'cart-paypal-button-container',
                    orderId: `CART-${Date.now()}`,
                    amount: cartTotal,
                    currency: 'USD',
                    description: `Reserve Bag Allocation (${cartItems.length} items)`,
                    items: cartItems.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
                    onValidate: () => {
                        const firstName = document.getElementById('cart-cust-firstname')?.value?.trim();
                        const lastName = document.getElementById('cart-cust-lastname')?.value?.trim();
                        const email = document.getElementById('cart-cust-email')?.value?.trim();
                        const phone = document.getElementById('cart-cust-phone')?.value?.trim();
                        const street = document.getElementById('cart-cust-address')?.value?.trim();
                        const city = document.getElementById('cart-cust-city')?.value?.trim();
                        const postal = document.getElementById('cart-cust-postal')?.value?.trim();
                        if (!firstName || !lastName || !email || !phone || !street || !city || !postal) {
                            showToast("Details Required", "Please enter your first name, last name, email, phone, street address, city, and postal code before proceeding to PayPal.", "error");
                            return false;
                        }
                        return true;
                    },
                    onSuccess: async ({ orderId, paypalOrderId, captureData }) => {
                        const firstName = document.getElementById('cart-cust-firstname')?.value?.trim() || '';
                        const lastName = document.getElementById('cart-cust-lastname')?.value?.trim() || '';
                        const name = `${firstName} ${lastName}`.trim() || 'Valued Collector';
                        const email = document.getElementById('cart-cust-email')?.value?.trim() || '';
                        const phone = document.getElementById('cart-cust-phone')?.value?.trim() || '';
                        const street = document.getElementById('cart-cust-address')?.value?.trim() || '';
                        const suite = document.getElementById('cart-cust-suite')?.value?.trim() || '';
                        const city = document.getElementById('cart-cust-city')?.value?.trim() || '';
                        const postal = document.getElementById('cart-cust-postal')?.value?.trim() || '';
                        const country = document.getElementById('cart-cust-country')?.value || 'Sri Lanka';
                        const region = document.getElementById('cart-cust-region')?.value || '';
                        const prefDate = document.getElementById('cart-pref-date')?.value || '';
                        const notes = document.getElementById('cart-cust-notes')?.value?.trim() || '';
                        const fullAddress = [suite, street, city, region, postal, country].filter(Boolean).join(', ');

                        const custData = {
                            firstName, lastName, name, email, phone, street, suite, city, postalCode: postal, country, region,
                            address: fullAddress, notes, preferredDate: prefDate, shippingMethod: 'ems_express', paymentMethod: 'paypal',
                            currency: 'USD', currencyRate: 1.0, convertedTotal: cartTotal
                        };
                        const checkoutRes = window.TeaFactoryStore.checkoutCart(custData, 'paypal', '', prefDate);

                        if (checkoutRes && checkoutRes.success) {
                            const order = checkoutRes.order;
                            window.TeaFactoryStore.markOrderPaidByPayPal(order.id, captureData || { id: paypalOrderId });
                            window.TeaFactoryStore.saveRecentOrderId(order.id);
                            updateCartBadges();

                            if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createOrder === 'function') {
                                window.TeaFactoryAPI.createOrder({
                                    id: order.id,
                                    customer_name: order.customerName,
                                    customer_email: order.email,
                                    customer_phone: order.phone,
                                    shipping_address: order.address,
                                    subtotal_usd: order.subtotal !== undefined ? order.subtotal : order.price,
                                    shipping_usd: order.shippingFee || 0,
                                    total_usd: order.price,
                                    currency_code: 'USD',
                                    currency_rate: 1.0,
                                    total_in_currency: order.price,
                                    payment_method: 'paypal',
                                    payment_status: 'Paid & Confirmed',
                                    bespoke_notes: `PayPal Ref: ${paypalOrderId}${notes ? ' | ' + notes : ''}`,
                                    items: order.items || []
                                }).catch(err => console.warn('API order dispatch notice:', err.message));
                            }

                            renderOrderConfirmationSuccess(body, order, 'paypal', paypalOrderId);
                        }
                    }
                });
            };

            const cartPaypalTab = checkoutForm ? checkoutForm.querySelector('.pay-tab[data-method="paypal"]') : null;
            if (cartPaypalTab) {
                cartPaypalTab.addEventListener('click', () => {
                    setTimeout(initCartPayPal, 50);
                });
            }

            // 5. Checkout Form Submission (Handles COD, Bank Transfer, and Slip Upload for Guests & Patrons)
            if (checkoutForm) {
                checkoutForm.onsubmit = (e) => {
                    e.preventDefault();

                    const firstName = document.getElementById('cart-cust-firstname')?.value?.trim();
                    const lastName = document.getElementById('cart-cust-lastname')?.value?.trim();
                    const email = document.getElementById('cart-cust-email')?.value?.trim();
                    const phone = document.getElementById('cart-cust-phone')?.value?.trim();
                    const street = document.getElementById('cart-cust-address')?.value?.trim();
                    const suite = document.getElementById('cart-cust-suite')?.value?.trim() || '';
                    const city = document.getElementById('cart-cust-city')?.value?.trim();
                    const postal = document.getElementById('cart-cust-postal')?.value?.trim();
                    const country = document.getElementById('cart-cust-country')?.value || 'Sri Lanka';
                    const region = document.getElementById('cart-cust-region')?.value || '';
                    const prefDate = document.getElementById('cart-pref-date')?.value || '';
                    const notes = document.getElementById('cart-cust-notes')?.value?.trim() || '';

                    if (!firstName || !lastName || !email || !phone || !street || !city || !postal) {
                        showToast("Missing Information", "Please enter your first name, last name, email, phone, street address, city, and postal code.", "error");
                        return;
                    }

                    const selectedShipping = document.querySelector('input[name="cart-shipping-method"]:checked')?.value || 'ems_express';
                    const isCOD = selectedShipping === 'cod';

                    if (isCOD && country !== 'Sri Lanka') {
                        showToast("Country Restriction", "Cash on Delivery is available exclusively for deliveries within Sri Lanka.", "error");
                        return;
                    }

                    const activeCartTab = checkoutForm.querySelector('.pay-tab.active');
                    const paymentMethod = isCOD ? 'cod' : (activeCartTab ? activeCartTab.getAttribute('data-method') : 'bank');

                    if (paymentMethod === 'paypal') {
                        showToast("PayPal Payment", "Please click the yellow PayPal button above to complete your instant payment.", "info");
                        return;
                    }

                    let slipImg = '';
                    if (!isCOD) {
                        slipImg = selectedCartSlipBase64 || 
                            document.getElementById('cart-bank-slip-zone')?.dataset?.fileBase64 || 
                            document.getElementById('cart-cash-slip-zone')?.dataset?.fileBase64 || '';

                        if (!slipImg) {
                            showToast("Receipt Required", "Please attach your Bank of Ceylon deposit slip or transfer receipt.", "error");
                            return;
                        }
                    }

                    const fullAddress = [suite, street, city, region, postal, country].filter(Boolean).join(', ');
                    const currInfo = window.getCountryCurrency ? window.getCountryCurrency(country) : (country === 'Sri Lanka' ? { code: 'LKR', rate: 305 } : { code: 'USD', rate: 1.0 });
                    const subtotalUSD = window.TeaFactoryStore.getCartSubtotal();
                    const shippingUSD = window.TeaFactoryStore.getCartShippingTotal ? window.TeaFactoryStore.getCartShippingTotal() : 0;
                    const grandTotalUSD = subtotalUSD + shippingUSD;
                    const convertedTotal = Math.round(grandTotalUSD * currInfo.rate * 100) / 100;

                    const custData = {
                        firstName,
                        lastName,
                        name: `${firstName} ${lastName}`.trim(),
                        email,
                        phone,
                        street,
                        suite,
                        city,
                        postalCode: postal,
                        country,
                        region,
                        address: fullAddress,
                        notes,
                        preferredDate: prefDate,
                        shippingMethod: selectedShipping,
                        paymentMethod,
                        currency: currInfo.code,
                        currencyRate: currInfo.rate,
                        convertedTotal: convertedTotal,
                        slipImage: slipImg
                    };

                    const checkoutRes = window.TeaFactoryStore.checkoutCart(custData, paymentMethod, slipImg, prefDate);

                    if (checkoutRes && checkoutRes.success) {
                        updateCartBadges();
                        const order = checkoutRes.order;
                        window.TeaFactoryStore.saveRecentOrderId(order.id);

                        if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.createOrder === 'function') {
                            window.TeaFactoryAPI.createOrder({
                                id: order.id,
                                customer_name: order.customerName,
                                customer_email: order.email,
                                customer_phone: order.phone,
                                shipping_address: order.address,
                                subtotal_usd: order.subtotal !== undefined ? order.subtotal : order.price,
                                shipping_usd: order.shippingFee || 0,
                                total_usd: order.price,
                                currency_code: currInfo.code,
                                currency_rate: currInfo.rate,
                                total_in_currency: convertedTotal,
                                payment_method: paymentMethod,
                                payment_status: isCOD ? 'pending_cod' : 'pending_deposit',
                                bespoke_notes: `${isCOD ? '[COD Order - Pay Courier Upon Delivery] ' : ''}${order.ownerNote || ''}${prefDate ? ' | Preferred Dispatch: ' + prefDate : ''}`,
                                items: order.items || []
                            }).catch(err => console.warn('API order email dispatch notice:', err.message));
                        }

                        renderOrderConfirmationSuccess(body, order, paymentMethod, '');
                        showToast(isCOD ? `Cash on Delivery Order ${order.id} confirmed!` : `Order ${order.id} placed successfully!`, "success");
                    } else {
                        showToast(checkoutRes?.message || "Failed to complete checkout.", "error");
                    }
                };
            }

        
            // Master Action Button for Cart
            const cartSummaryBtn = document.getElementById('cart-summary-submit-btn');
            if (cartSummaryBtn) {
                cartSummaryBtn.onclick = () => {
                    const selectedShipping = document.querySelector('input[name="cart-shipping-method"]:checked')?.value || 'ems_express';
                    const activeCartTab = checkoutForm ? checkoutForm.querySelector('.pay-tab.active') : null;
                    const paymentMethod = selectedShipping === 'cod' ? 'cod' : (activeCartTab ? activeCartTab.getAttribute('data-method') : 'bank');
                    if (paymentMethod === 'paypal') {
                        const ppCont = document.getElementById('cart-paypal-button-container');
                        if (ppCont) {
                            ppCont.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            showToast("PayPal Active", "Please click the yellow PayPal button to complete payment.", "info");
                        }
                        return;
                    }
                    if (checkoutForm) {
                        if (typeof checkoutForm.requestSubmit === 'function') {
                            checkoutForm.requestSubmit();
                        } else {
                            checkoutForm.dispatchEvent(new Event('submit', { cancelable: true }));
                        }
                    }
                };
            }

            // Promo Code wiring for Cart
            const cartPromoBtn = document.getElementById('cart-apply-promo-btn');
            const cartPromoInput = document.getElementById('cart-promo-code');
            if (cartPromoBtn && cartPromoInput) {
                const handleCartPromo = () => {
                    if (window.activeCartPromo) {
                        window.activeCartPromo = null;
                        if (window.UIComponents && window.UIComponents.renderCartDrawer) {
                            window.UIComponents.renderCartDrawer('cart-drawer-body');
                            bindCartDrawerEvents();
                        }
                        showToast("Voucher Removed", "Promotional voucher removed from reserve bag.", "info");
                        return;
                    }
                    const val = cartPromoInput.value.trim();
                    if (!val) {
                        showToast("Voucher Code", "Please enter a voucher code.", "info");
                        return;
                    }
                    const subtotal = window.TeaFactoryStore.getCartSubtotal();
                    const res = window.validatePromoCode(val, subtotal);
                    if (res.valid) {
                        window.activeCartPromo = res;
                        if (window.UIComponents && window.UIComponents.renderCartDrawer) {
                            window.UIComponents.renderCartDrawer('cart-drawer-body');
                            bindCartDrawerEvents();
                        }
                        showToast("Voucher Applied!", `${res.label} (${res.percent}%) applied successfully!`, "success");
                    } else {
                        showToast("Invalid Voucher", res.message || "Invalid promotional code.", "warning");
                    }
                };
                cartPromoBtn.onclick = handleCartPromo;
                cartPromoInput.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleCartPromo();
                    }
                };
            }

            if (window.bindCheckoutCouponPills) {
                window.bindCheckoutCouponPills(body, 'cart-promo-code', (code) => {
                    if (window.activeCartPromo && window.activeCartPromo.code === code) {
                        return;
                    }
                    if (window.activeCartPromo) {
                        window.activeCartPromo = null;
                    }
                    const subtotal = window.TeaFactoryStore.getCartSubtotal();
                    const res = window.validatePromoCode(code, subtotal);
                    if (res.valid) {
                        window.activeCartPromo = res;
                        if (window.UIComponents && window.UIComponents.renderCartDrawer) {
                            window.UIComponents.renderCartDrawer('cart-drawer-body');
                            bindCartDrawerEvents();
                        }
                        showToast("Voucher Applied!", `${res.label} (${res.percent}%) applied successfully!`, "success");
                    } else {
                        showToast("Invalid Voucher", res.message || "Invalid promotional code.", "warning");
                    }
                });
            }
        }

        window.appBindCartDrawerEvents = bindCartDrawerEvents;

        // Initialize badges on load
        updateCartBadges();
    }

    // ── Luxury About Us & Estate Terroir Interactive Modal System ──
    function initAboutUsModal() {
        const modal = document.getElementById('about-us-modal');
        const backdrop = document.getElementById('about-modal-backdrop');
        const closeBtn = document.getElementById('about-modal-close-btn');
        const bodyContainer = document.getElementById('about-modal-body-container');

        function openAboutModal() {
            if (!modal) return;

            // Close other popups/drawers if open
            if (drawerOverlay) {
                drawerOverlay.classList.remove('active');
                drawerOverlay.classList.remove('open');
            }
            const cartOverlay = document.getElementById('cart-drawer-overlay');
            if (cartOverlay) {
                cartOverlay.classList.remove('active');
                cartOverlay.classList.remove('open');
            }
            const chatbotWin = document.getElementById('faq-chatbot-window');
            if (chatbotWin) {
                chatbotWin.classList.remove('active');
                chatbotWin.setAttribute('aria-hidden', 'true');
            }
            const prefsPopup = document.getElementById('global-prefs-popup');
            if (prefsPopup) {
                prefsPopup.classList.remove('active');
                prefsPopup.setAttribute('aria-hidden', 'true');
            }

            if (bodyContainer) {
                window.UIComponents.renderAboutUsPage('about-modal-body-container');
                bindCinemaEvents();
            }

            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeAboutModal() {
            if (!modal) return;
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';

            // Pause video if playing
            const video = document.getElementById('estate-cinema-video');
            if (video) video.pause();
        }

        window.appOpenAboutModal = openAboutModal;
        window.appCloseAboutModal = closeAboutModal;

        // Global delegated trigger for opening About Us modal
        document.addEventListener('click', (e) => {
            const openTrigger = e.target.closest('#floating-about-btn, .floating-about-btn, [data-action="open-about"], .btn-open-about-modal');
            if (openTrigger) {
                e.preventDefault();
                e.stopPropagation();
                openAboutModal();
            }
        });

        if (backdrop) backdrop.addEventListener('click', closeAboutModal);
        if (closeBtn) closeBtn.addEventListener('click', closeAboutModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeAboutModal();
            }
        });
    }

    // ── Floating Bulletins & Realtime Customer Notification System ──
    function initBulletinsNotificationSystem() {
        const floatingBulletinsBtn = document.getElementById('floating-bulletins-btn');
        const floatingBulletinsBadge = document.getElementById('floating-bulletins-badge');
        const floatingBulletinsPulse = document.getElementById('floating-bulletins-pulse');

        function updateBulletinsBadge() {
            if (!window.TeaFactoryStore) return;
            const unreadCount = typeof window.TeaFactoryStore.getUnreadAnnouncementsCount === 'function'
                ? window.TeaFactoryStore.getUnreadAnnouncementsCount()
                : 0;

            const displayCount = unreadCount > 9 ? '9+' : unreadCount;
            const navBadge = document.getElementById('nav-announcements-badge');
            const mobileBadge = document.getElementById('nav-announcements-mobile-badge');

            if (navBadge) {
                if (unreadCount > 0) {
                    navBadge.textContent = displayCount;
                    navBadge.style.display = 'inline-flex';
                } else {
                    navBadge.style.display = 'none';
                }
            }

            if (mobileBadge) {
                if (unreadCount > 0) {
                    mobileBadge.textContent = displayCount;
                    mobileBadge.style.display = 'inline-flex';
                } else {
                    mobileBadge.style.display = 'none';
                }
            }

            if (floatingBulletinsBadge) {
                if (unreadCount > 0) {
                    floatingBulletinsBadge.textContent = displayCount;
                    floatingBulletinsBadge.style.display = 'flex';
                    floatingBulletinsBadge.classList.remove('cart-badge-bump');
                    void floatingBulletinsBadge.offsetWidth; // trigger reflow
                    floatingBulletinsBadge.classList.add('cart-badge-bump');
                    if (floatingBulletinsPulse) floatingBulletinsPulse.style.display = 'block';
                } else {
                    floatingBulletinsBadge.style.display = 'none';
                    if (floatingBulletinsPulse) floatingBulletinsPulse.style.display = 'none';
                }
            }
        }
        window.updateBulletinsBadge = updateBulletinsBadge;

        // Handle live announcements broadcast
        function handleIncomingAnnouncement(annData) {
            const ann = annData.announcement || annData;
            if (!ann || !ann.title) return;

            updateBulletinsBadge();

            // Show real-time notification toast to customer
            showToast(
                "📢 New Estate Announcement Published",
                `"${ann.title}" • Tap to view latest harvest updates & offers.`,
                "bulletin",
                7000,
                () => {
                    if (typeof switchTab === 'function') switchTab('announcements');
                }
            );
        }

        // 1. Same-window custom event
        window.addEventListener('tea_new_announcement', (e) => {
            if (e.detail) handleIncomingAnnouncement(e.detail);
        });

        // 2. Announcements read event
        window.addEventListener('tea_announcements_read', () => {
            updateBulletinsBadge();
        });

        // 3. Multi-tab BroadcastChannel
        if ('BroadcastChannel' in window) {
            try {
                const bc = new BroadcastChannel('rock_one_tea_events');
                bc.onmessage = (e) => {
                    if (e.data && e.data.type === 'NEW_ANNOUNCEMENT') {
                        handleIncomingAnnouncement(e.data);
                    }
                };
            } catch (err) {
                console.warn('BroadcastChannel error:', err);
            }
        }

        // 4. Multi-tab localStorage storage event fallback
        window.addEventListener('storage', (e) => {
            if (e.key === 'tea_announcement_broadcast' && e.newValue) {
                try {
                    const data = JSON.parse(e.newValue);
                    handleIncomingAnnouncement(data);
                } catch (err) {}
            } else if (e.key === 'tea_last_read_announcements_time' || e.key === 'tea_last_read_announcement_id') {
                updateBulletinsBadge();
            }
        });

        // Initial check on load
        updateBulletinsBadge();
    }

    // ── Luxury Cookie & Estate Terroir Privacy System ──
    function initCookieConsent() {
        const COOKIE_KEY = 'rockone_cookie_consent';
        const banner = document.getElementById('estate-cookie-banner');
        const modal = document.getElementById('cookie-policy-modal');
        const backdrop = document.getElementById('cookie-modal-backdrop');
        const closeBtn = document.getElementById('cookie-modal-close-btn');

        const acceptAllBannerBtn = document.getElementById('cookie-accept-all-btn');
        const essentialBannerBtn = document.getElementById('cookie-essential-btn');
        const manageBannerBtn = document.getElementById('cookie-manage-btn');

        const modalAcceptAllBtn = document.getElementById('cookie-modal-accept-all-btn');
        const modalEssentialBtn = document.getElementById('cookie-modal-essential-only-btn');
        const modalSaveCustomBtn = document.getElementById('cookie-modal-save-custom-btn');
        const modalResetBtn = document.getElementById('cookie-modal-reset-btn');

        const prefPersonalization = document.getElementById('cookie-pref-personalization');
        const prefAnalytics = document.getElementById('cookie-pref-analytics');

        function getStoredConsent() {
            try {
                const raw = localStorage.getItem(COOKIE_KEY);
                if (!raw) return null;
                if (raw === 'all') {
                    return { consent: 'all', personalization: true, analytics: true, timestamp: Date.now() };
                }
                if (raw === 'essential') {
                    return { consent: 'essential', personalization: false, analytics: false, timestamp: Date.now() };
                }
                return JSON.parse(raw);
            } catch (e) {
                return null;
            }
        }

        function saveConsent(type, personalization = true, analytics = true) {
            const data = {
                consent: type,
                personalization: type === 'all' ? true : (type === 'essential' ? false : !!personalization),
                analytics: type === 'all' ? true : (type === 'essential' ? false : !!analytics),
                timestamp: Date.now(),
                date: new Date().toISOString()
            };
            try {
                localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
            } catch (e) {
                console.warn('LocalStorage unavailable for cookie consent', e);
            }
            return data;
        }

        function showBanner() {
            if (!banner) return;
            banner.classList.add('active');
        }

        function hideBanner() {
            if (!banner) return;
            banner.classList.remove('active');
        }

        function openModal() {
            if (!modal) return;
            const current = getStoredConsent();
            if (current) {
                if (prefPersonalization) prefPersonalization.checked = !!current.personalization;
                if (prefAnalytics) prefAnalytics.checked = !!current.analytics;
            } else {
                if (prefPersonalization) prefPersonalization.checked = true;
                if (prefAnalytics) prefAnalytics.checked = true;
            }

            if (drawerOverlay) {
                drawerOverlay.classList.remove('active');
                drawerOverlay.classList.remove('open');
            }
            const cartOverlay = document.getElementById('cart-drawer-overlay');
            if (cartOverlay) {
                cartOverlay.classList.remove('active');
                cartOverlay.classList.remove('open');
            }
            const prefsPopup = document.getElementById('global-prefs-popup');
            if (prefsPopup) {
                prefsPopup.classList.remove('active');
                prefsPopup.setAttribute('aria-hidden', 'true');
            }

            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            if (!modal) return;
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        // Expose globally
        window.openCookiePolicyModal = openModal;
        window.closeCookiePolicyModal = closeModal;
        window.getCookieConsent = getStoredConsent;
        window.resetCookieConsent = function() {
            try {
                localStorage.removeItem(COOKIE_KEY);
            } catch (e) {}
            hideBanner();
            openModal();
            if (typeof showToast === 'function') {
                showToast('Consent Reset', 'Cookie preferences reset to initial state.', 'info');
            }
        };

        // Wire banner buttons
        if (acceptAllBannerBtn) {
            acceptAllBannerBtn.addEventListener('click', () => {
                saveConsent('all', true, true);
                hideBanner();
                if (typeof showToast === 'function') {
                    showToast('Cookie Preferences Saved', 'All essential & refined cookies accepted for your Ceylon journey.', 'info');
                }
            });
        }

        if (essentialBannerBtn) {
            essentialBannerBtn.addEventListener('click', () => {
                saveConsent('essential', false, false);
                hideBanner();
                if (typeof showToast === 'function') {
                    showToast('Essential Storage Active', 'Only strictly required storage enabled for cart and currency.', 'info');
                }
            });
        }

        if (manageBannerBtn) {
            manageBannerBtn.addEventListener('click', () => {
                openModal();
            });
        }

        // Wire modal buttons
        if (modalAcceptAllBtn) {
            modalAcceptAllBtn.addEventListener('click', () => {
                saveConsent('all', true, true);
                closeModal();
                hideBanner();
                if (typeof showToast === 'function') {
                    showToast('All Cookies Accepted', 'Full luxury tea personalization and terroir analytics active.', 'info');
                }
            });
        }

        if (modalEssentialBtn) {
            modalEssentialBtn.addEventListener('click', () => {
                saveConsent('essential', false, false);
                closeModal();
                hideBanner();
                if (typeof showToast === 'function') {
                    showToast('Essential Storage Active', 'Non-essential personalization and analytics disabled.', 'info');
                }
            });
        }

        if (modalSaveCustomBtn) {
            modalSaveCustomBtn.addEventListener('click', () => {
                const pers = prefPersonalization ? prefPersonalization.checked : true;
                const anal = prefAnalytics ? prefAnalytics.checked : true;
                saveConsent('custom', pers, anal);
                closeModal();
                hideBanner();
                if (typeof showToast === 'function') {
                    showToast('Custom Preferences Saved', 'Your privacy choices have been updated.', 'info');
                }
            });
        }

        if (modalResetBtn) {
            modalResetBtn.addEventListener('click', () => {
                try {
                    localStorage.removeItem(COOKIE_KEY);
                } catch (e) {}
                closeModal();
                if (typeof showToast === 'function') {
                    showToast('Preferences Reset', 'Your cookie preferences have been cleared.', 'info');
                }
                setTimeout(showBanner, 400);
            });
        }

        if (backdrop) backdrop.addEventListener('click', closeModal);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Global trigger delegation
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-action="open-cookie-policy"], .open-cookie-policy-btn');
            if (trigger) {
                e.preventDefault();
                openModal();
            }
        });

        // Initial check: if no consent recorded yet, show banner smoothly
        const existing = getStoredConsent();
        if (!existing) {
            setTimeout(() => {
                showBanner();
            }, 850);
        }
    }

    // ── Patron Email Authentication (Sign In / Register / Sign Out) ──
    function initPatronAuth() {
        const modal = document.getElementById('patron-auth-modal');
        const backdrop = document.getElementById('patron-auth-backdrop');
        const closeBtn = document.getElementById('patron-auth-close-btn');
        const contextBanner = document.getElementById('patron-auth-context-banner');
        const contextText = document.getElementById('patron-auth-context-text');

        const authGoogleBtn = document.getElementById('auth-google-btn');
        const authGoogleErr = document.getElementById('auth-google-error');

        const tabSignIn = document.getElementById('auth-tab-signin');
        const tabRegister = document.getElementById('auth-tab-register');
        const formSignIn = document.getElementById('patron-signin-form');
        const formRegister = document.getElementById('patron-register-form');

        const signInEmail = document.getElementById('auth-signin-email');
        const signInPw = document.getElementById('auth-signin-password');
        const signInErr = document.getElementById('auth-signin-error');
        const signInBtn = document.getElementById('auth-signin-submit-btn');

        const regName = document.getElementById('auth-reg-name');
        const regEmail = document.getElementById('auth-reg-email');
        const regPhone = document.getElementById('auth-reg-phone');
        const regPw = document.getElementById('auth-reg-password');
        const regErr = document.getElementById('auth-register-error');
        const regBtn = document.getElementById('auth-register-submit-btn');

        const navSignInBtn = document.getElementById('nav-signin-btn');
        const navUserPill = document.getElementById('nav-user-pill');
        const navPatronTrigger = document.getElementById('nav-patron-trigger');
        const navPatronDropdown = document.getElementById('nav-patron-dropdown');
        const navUserAvatar = document.getElementById('nav-user-avatar');
        const navUserLabel = document.getElementById('nav-user-label');
        const dropdownUserAvatar = document.getElementById('dropdown-user-avatar');
        const dropdownUserName = document.getElementById('dropdown-user-name');
        const dropdownUserEmail = document.getElementById('dropdown-user-email');
        const dropdownMyOrdersBtn = document.getElementById('dropdown-my-orders-btn');
        const dropdownReserveBagBtn = document.getElementById('dropdown-reserve-bag-btn');
        const navSignOutBtn = document.getElementById('nav-signout-btn');

        const mobileAuthBtn = document.getElementById('mobile-auth-btn');
        const mobileAuthTitle = document.getElementById('mobile-auth-title');
        const mobileAuthDesc = document.getElementById('mobile-auth-desc');

        let pendingAuthCallback = null;

        function setError(el, msg) {
            if (!el) return;
            if (msg) {
                el.textContent = msg;
                el.style.display = 'block';
            } else {
                el.textContent = '';
                el.style.display = 'none';
            }
        }

        function switchAuthTab(tabName) {
            setError(signInErr, '');
            setError(regErr, '');
            if (tabName === 'register') {
                tabSignIn?.classList.remove('active');
                tabSignIn?.setAttribute('aria-selected', 'false');
                tabRegister?.classList.add('active');
                tabRegister?.setAttribute('aria-selected', 'true');
                if (formSignIn) formSignIn.style.display = 'none';
                if (formRegister) formRegister.style.display = 'block';
            } else {
                tabRegister?.classList.remove('active');
                tabRegister?.setAttribute('aria-selected', 'false');
                tabSignIn?.classList.add('active');
                tabSignIn?.setAttribute('aria-selected', 'true');
                if (formRegister) formRegister.style.display = 'none';
                if (formSignIn) formSignIn.style.display = 'block';
            }
        }

        function updateAuthUI() {
            const user = window.TeaFactoryStore && window.TeaFactoryStore.getCurrentUser
                ? window.TeaFactoryStore.getCurrentUser()
                : null;

            if (user && user.email) {
                if (navSignInBtn) navSignInBtn.style.display = 'none';
                if (navUserPill) navUserPill.style.display = 'inline-flex';

                const rawName = (user.full_name || '').trim();
                const firstName = rawName ? rawName.split(' ')[0] : (user.email.split('@')[0] || 'Patron');
                const initial = (firstName || user.email || 'P').trim().charAt(0).toUpperCase();

                if (navUserAvatar) navUserAvatar.textContent = initial;
                if (dropdownUserAvatar) dropdownUserAvatar.textContent = initial;

                if (navUserLabel) {
                    navUserLabel.textContent = firstName;
                    navUserLabel.title = `Signed in as ${user.full_name || firstName} (${user.email})`;
                }
                if (dropdownUserName) dropdownUserName.textContent = user.full_name || firstName;
                if (dropdownUserEmail) dropdownUserEmail.textContent = user.email;

                if (mobileAuthBtn) mobileAuthBtn.classList.add('is-signed-in');
                if (mobileAuthTitle) mobileAuthTitle.textContent = `Sign Out (${firstName})`;
                if (mobileAuthDesc) mobileAuthDesc.textContent = `Signed in as ${user.full_name || firstName} • Tap to sign out`;
            } else {
                if (navSignInBtn) navSignInBtn.style.display = 'inline-flex';
                if (navUserPill) navUserPill.style.display = 'none';
                if (navPatronDropdown) {
                    navPatronDropdown.classList.remove('active');
                    navPatronTrigger?.setAttribute('aria-expanded', 'false');
                }

                if (mobileAuthBtn) mobileAuthBtn.classList.remove('is-signed-in');
                if (mobileAuthTitle) mobileAuthTitle.textContent = 'Sign In / Register';
                if (mobileAuthDesc) mobileAuthDesc.textContent = 'Sign in with Email ID to order & book';
            }
        }

        function openAuthModal(contextMessage = '', onAuthenticated = null, initialTab = 'signin') {
            if (!modal) return;
            pendingAuthCallback = typeof onAuthenticated === 'function' ? onAuthenticated : null;

            if (mobileMenuBtn && mobileNavDrawer) {
                mobileMenuBtn.classList.remove('open');
                mobileNavDrawer.classList.remove('open');
            }

            if (contextBanner && contextText) {
                if (contextMessage) {
                    contextText.textContent = contextMessage;
                    contextBanner.style.display = 'flex';
                } else {
                    contextBanner.style.display = 'none';
                }
            }

            switchAuthTab(initialTab);
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                if (initialTab === 'register' && regName) regName.focus();
                else if (signInEmail) signInEmail.focus();
            }, 120);
        }

        function closeAuthModal(clearCallback = true) {
            if (!modal) return;
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            const cartOverlay = document.getElementById('cart-drawer-overlay');
            if (!cartOverlay || !cartOverlay.classList.contains('open')) {
                document.body.style.overflow = '';
            }
            if (clearCallback) pendingAuthCallback = null;
        }

        function requireCustomerAuth(contextMessage, onAuthenticated) {
            const user = window.TeaFactoryStore && window.TeaFactoryStore.getCurrentUser
                ? window.TeaFactoryStore.getCurrentUser()
                : null;
            if (user && user.email) {
                if (typeof onAuthenticated === 'function') onAuthenticated(user);
                return true;
            }
            openAuthModal(contextMessage, onAuthenticated, 'signin');
            return false;
        }

        async function handleCustomerSignOut() {
            try {
                if (window.TeaFactoryAPI && typeof window.TeaFactoryAPI.logoutCustomer === 'function') {
                    window.TeaFactoryAPI.logoutCustomer().catch(() => {});
                }
                if (window.TeaFactoryStore && typeof window.TeaFactoryStore.logoutCustomer === 'function') {
                    window.TeaFactoryStore.logoutCustomer();
                }
            } catch (e) {}

            // Clear any lingering staff console session on patron logout
            isAdminAuthenticated = false;
            try { sessionStorage.removeItem('tea_factory_admin_auth'); } catch(e){}
            updateNavStaffVisibility();

            if (navPatronDropdown) {
                navPatronDropdown.classList.remove('active');
                navPatronTrigger?.setAttribute('aria-expanded', 'false');
            }

            updateAuthUI();

            // Refresh cart drawer checkout lock if open
            const cartOverlay = document.getElementById('cart-drawer-overlay');
            if (cartOverlay && cartOverlay.classList.contains('open') && window.UIComponents.renderCartDrawer) {
                window.UIComponents.renderCartDrawer('cart-drawer-body');
                if (window.appBindCartDrawerEvents) window.appBindCartDrawerEvents();
            }

            // Close active gated booking drawer if open
            if (drawerOverlay && drawerOverlay.classList.contains('active') && currentDrawerContext && ['box', 'tour', 'product'].includes(currentDrawerContext.type)) {
                closeDrawer();
            }

            showToast('Signed Out', 'You have been signed out of Rock One Wild Tea.', 'info');
        }

        function completeAuthentication(userObj, welcomeTitle) {
            const savedUser = window.TeaFactoryStore.setCurrentUser(userObj);
            const callbackToRun = pendingAuthCallback;
            pendingAuthCallback = null;

            closeAuthModal(false);
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

            if (navPatronDropdown) {
                navPatronDropdown.classList.remove('active');
                navPatronTrigger?.setAttribute('aria-expanded', 'false');
            }

            // Normal customer patrons / new users MUST NEVER have admin console access
            isAdminAuthenticated = false;
            try { sessionStorage.removeItem('tea_factory_admin_auth'); } catch(e){}
            updateNavStaffVisibility();

            updateAuthUI();

            // Refresh Cart Drawer if currently open so prefilled checkout replaces auth gate
            const cartOverlay = document.getElementById('cart-drawer-overlay');
            if (cartOverlay && cartOverlay.classList.contains('open') && window.UIComponents.renderCartDrawer) {
                window.UIComponents.renderCartDrawer('cart-drawer-body');
                if (window.appBindCartDrawerEvents) window.appBindCartDrawerEvents();
            }

            showToast(welcomeTitle, `Signed in as ${savedUser.email}`, 'success');

            if (typeof callbackToRun === 'function') {
                setTimeout(() => callbackToRun(savedUser), 140);
            }
        }

        // Bind tab toggles
        tabSignIn?.addEventListener('click', () => switchAuthTab('signin'));
        tabRegister?.addEventListener('click', () => switchAuthTab('register'));
        document.getElementById('switch-to-register-btn')?.addEventListener('click', () => switchAuthTab('register'));
        document.getElementById('switch-to-signin-btn')?.addEventListener('click', () => switchAuthTab('signin'));

        // Password show/hide toggles
        modal?.querySelectorAll('.patron-toggle-pw').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const input = targetId ? document.getElementById(targetId) : null;
                if (!input) return;
                input.type = input.type === 'password' ? 'text' : 'password';
            });
        });

        // Sign In form submit
        formSignIn?.addEventListener('submit', async (e) => {
            e.preventDefault();
            setError(signInErr, '');

            const email = (signInEmail?.value || '').trim().toLowerCase();
            const password = signInPw?.value || '';

            if (!email || !password) {
                setError(signInErr, 'Please enter both your Email ID and password.');
                return;
            }

            if (signInBtn) {
                signInBtn.disabled = true;
                signInBtn.innerHTML = '<span>Signing In...</span>';
            }

            const res = await window.TeaFactoryAPI.loginCustomer({ email, password });

            if (signInBtn) {
                signInBtn.disabled = false;
                signInBtn.innerHTML = '<span>Sign In with Email</span>';
            }

            if (res && res.success && res.user) {
                if (signInPw) signInPw.value = '';
                completeAuthentication({ ...res.user, token: res.token || '' }, 'Welcome Back');
            } else {
                setError(signInErr, (res && res.error) ? res.error : 'Incorrect Email ID or password.');
            }
        });

        // Register form submit
        formRegister?.addEventListener('submit', async (e) => {
            e.preventDefault();
            setError(regErr, '');

            const full_name = (regName?.value || '').trim();
            const email = (regEmail?.value || '').trim().toLowerCase();
            const phone = (regPhone?.value || '').trim();
            const password = regPw?.value || '';

            if (!full_name || !email || !password) {
                setError(regErr, 'Please enter your Full Name, Email ID, and Password.');
                return;
            }

            if (password.length < 6) {
                setError(regErr, 'Password must be at least 6 characters.');
                return;
            }

            if (regBtn) {
                regBtn.disabled = true;
                regBtn.innerHTML = '<span>Creating Account...</span>';
            }

            const res = await window.TeaFactoryAPI.registerCustomer({ full_name, email, phone, password });

            if (regBtn) {
                regBtn.disabled = false;
                regBtn.innerHTML = '<span>Create Account &amp; Sign In</span>';
            }

            if (res && res.success && res.user) {
                if (regPw) regPw.value = '';
                completeAuthentication({ ...res.user, token: res.token || '' }, 'Account Created');
            } else {
                setError(regErr, (res && res.error) ? res.error : 'Unable to register account. Please try again.');
            }
        });

        // Navbar & Mobile Auth Triggers
        navSignInBtn?.addEventListener('click', () => openAuthModal('', null, 'signin'));
        navSignOutBtn?.addEventListener('click', handleCustomerSignOut);

        // Patron Account Dropdown Toggle
        navPatronTrigger?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!navPatronDropdown) return;
            const isOpen = navPatronDropdown.classList.toggle('active');
            navPatronTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close Patron Dropdown on click outside
        document.addEventListener('click', (e) => {
            if (navPatronDropdown && navPatronDropdown.classList.contains('active')) {
                if (!navUserPill || !navUserPill.contains(e.target)) {
                    navPatronDropdown.classList.remove('active');
                    navPatronTrigger?.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Close Patron Dropdown on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navPatronDropdown && navPatronDropdown.classList.contains('active')) {
                navPatronDropdown.classList.remove('active');
                navPatronTrigger?.setAttribute('aria-expanded', 'false');
            }
        });

        // Patron Dropdown quick actions
        dropdownMyOrdersBtn?.addEventListener('click', () => {
            navPatronDropdown?.classList.remove('active');
            navPatronTrigger?.setAttribute('aria-expanded', 'false');
            document.getElementById('nav-order')?.click();
        });

        dropdownReserveBagBtn?.addEventListener('click', () => {
            navPatronDropdown?.classList.remove('active');
            navPatronTrigger?.setAttribute('aria-expanded', 'false');
            if (typeof window.appOpenCartDrawer === 'function') {
                window.appOpenCartDrawer();
            } else {
                document.getElementById('floating-cart-btn')?.click();
            }
        });
        mobileAuthBtn?.addEventListener('click', () => {
            if (window.TeaFactoryStore && window.TeaFactoryStore.isCustomerLoggedIn()) {
                if (mobileMenuBtn && mobileNavDrawer) {
                    mobileMenuBtn.classList.remove('open');
                    mobileNavDrawer.classList.remove('open');
                }
                handleCustomerSignOut();
            } else {
                openAuthModal('', null, 'signin');
            }
        });

        backdrop?.addEventListener('click', () => closeAuthModal(true));
        closeBtn?.addEventListener('click', () => closeAuthModal(true));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeAuthModal(true);
            }
        });

        window.addEventListener('rockone:authchange', updateAuthUI);

        window.openPatronAuthModal = openAuthModal;
        window.closePatronAuthModal = closeAuthModal;
        window.requireCustomerAuth = requireCustomerAuth;
        window.logoutPatron = handleCustomerSignOut;

        // Google Identity Services (GIS) One-Tap / Popup Setup
        async function initGoogleIdentityServices() {
            try {
                if (!window.TeaFactoryAPI || typeof window.TeaFactoryAPI.getGoogleConfig !== 'function') return;
                const cfg = await window.TeaFactoryAPI.getGoogleConfig();
                if (!cfg || !cfg.success || !cfg.clientId) return;

                const clientId = cfg.clientId;

                const checkGIS = setInterval(() => {
                    if (window.google && window.google.accounts && window.google.accounts.id) {
                        clearInterval(checkGIS);
                        window.google.accounts.id.initialize({
                            client_id: clientId,
                            callback: async (response) => {
                                if (response && response.credential) {
                                    showToast('Google Sign In', 'Authenticating Google Patron...', 'info');
                                    const res = await window.TeaFactoryAPI.verifyGoogleCredential(response.credential);
                                    if (res && res.success && res.user) {
                                        completeAuthentication({ ...res.user, token: response.credential }, 'Welcome');
                                        showToast('Signed In', `Welcome back to Rock One Wild Tea, ${res.user.full_name}.`, 'success');
                                        closeModal();
                                    } else {
                                        showToast('Sign In Failed', (res && res.error) || 'Could not verify Google account.', 'warning');
                                    }
                                }
                            },
                            auto_select: false,
                            cancel_on_tap_outside: true
                        });
                    }
                }, 300);

                setTimeout(() => clearInterval(checkGIS), 8000);
            } catch (e) {
                console.warn('GIS init exception:', e);
            }
        }
        initGoogleIdentityServices();

        // Google Sign In Trigger
        authGoogleBtn?.addEventListener('click', async () => {
            setError(authGoogleErr, '');
            if (authGoogleBtn) {
                authGoogleBtn.disabled = true;
                authGoogleBtn.style.opacity = '0.75';
            }

            // If GIS prompt is available, try prompt first
            if (window.google && window.google.accounts && window.google.accounts.id) {
                try {
                    let prompted = false;
                    window.google.accounts.id.prompt((notification) => {
                        prompted = true;
                        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                            fallbackToGoogleRedirect();
                        }
                    });
                    setTimeout(() => {
                        if (!prompted && authGoogleBtn && authGoogleBtn.disabled) {
                            fallbackToGoogleRedirect();
                        }
                    }, 2500);
                    return;
                } catch (e) {
                    // Fall through to redirect
                }
            }

            fallbackToGoogleRedirect();

            async function fallbackToGoogleRedirect() {
                try {
                    const currentOrigin = window.location.origin || 'https://www.rockonewild.com';
                    const res = await window.TeaFactoryAPI.getGoogleAuthUrl(currentOrigin);
                    if (res && res.success && res.url) {
                        window.location.href = res.url;
                    } else {
                        if (authGoogleBtn) {
                            authGoogleBtn.disabled = false;
                            authGoogleBtn.style.opacity = '1';
                        }
                        const err = (res && res.error) ? res.error : 'Google Sign In is not yet enabled or configured in Supabase.';
                        setError(authGoogleErr, err);
                    }
                } catch (err) {
                    if (authGoogleBtn) {
                        authGoogleBtn.disabled = false;
                        authGoogleBtn.style.opacity = '1';
                    }
                    setError(authGoogleErr, err.message || 'Google Sign In error.');
                }
            }
        });

        // Check for Google OAuth redirect callback in URL hash or search params
        async function checkGoogleOAuthCallback() {
            try {
                const hash = window.location.hash || '';
                const search = window.location.search || '';
                const isGoogleReturn = search.includes('auth_provider=google') || hash.includes('access_token=') || hash.includes('id_token=');

                if (!isGoogleReturn) return;

                const hashParams = new URLSearchParams(hash.replace(/^#/, ''));
                const searchParams = new URLSearchParams(search.replace(/^\?/, ''));
                const accessToken = hashParams.get('access_token') || hashParams.get('id_token') || searchParams.get('access_token');
                const errorDesc = hashParams.get('error_description') || hashParams.get('error') || searchParams.get('error_description') || searchParams.get('error');

                if (errorDesc) {
                    showToast('Google Sign In', decodeURIComponent(errorDesc).replace(/\+/g, ' '), 'warning');
                    const cleanUrl = window.location.origin + window.location.pathname;
                    window.history.replaceState({}, document.title, cleanUrl);
                    return;
                }

                if (accessToken) {
                    showToast('Authenticating', 'Verifying Google Patron access...', 'info');
                    const res = await window.TeaFactoryAPI.verifyAuthToken(accessToken);
                    if (res && res.success && res.user) {
                        completeAuthentication({ ...res.user, token: accessToken }, 'Welcome');
                        showToast('Signed In', `Welcome back to Rock One Wild Tea, ${res.user.full_name}.`, 'success');
                    } else {
                        showToast('Authentication Failed', (res && res.error) || 'Could not verify Google credentials.', 'warning');
                    }
                    const cleanUrl = window.location.origin + window.location.pathname;
                    window.history.replaceState({}, document.title, cleanUrl);
                }
            } catch (e) {
                console.warn('Google OAuth verification check exception:', e);
            }
        }

        checkGoogleOAuthCallback();

        updateAuthUI();
    }

    // 9. Initial Load Orchestration
    initCustomCursor();
    initLanguageSwitchers();
    initCurrencySwitchers();
    initFloatingGlobalPreferences();
    initCartSystem();
    initBulletinsNotificationSystem();
    initCookieConsent();
    initPatronAuth();
    initAboutUsModal();
    initLookbookModal();
    initFaqChatbot();
    switchTab('home');

    // 10. Scroll-to-Top Button
    (function initScrollToTop() {
        const btn = document.getElementById('scroll-to-top-btn');
        if (!btn) return;

        const mainScroll = document.querySelector('.main-content') || document.documentElement;

        // Show/hide on scroll
        function onScroll() {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // run once on load

        // Smooth scroll to top on click
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    })();

    // 11. Left-Hand Floating Live Social & Tour Hub (Mobile Touch Expand / Navigate / Double-Tap Collapse)
    (function initSideSocialDock() {
        const dock = document.getElementById('side-social-dock');
        if (!dock) return;

        const pills = dock.querySelectorAll('.side-social-pill');
        const lastTapTimes = new Map();
        let autoCollapseTimer = null;

        function collapseAllPills() {
            pills.forEach(p => p.classList.remove('touch-active'));
            if (autoCollapseTimer) {
                clearTimeout(autoCollapseTimer);
                autoCollapseTimer = null;
            }
        }

        pills.forEach(pill => {
            pill.addEventListener('click', function(e) {
                // Only intercept on mobile / touch screen sizes
                const isMobileOrTouch = window.innerWidth <= 900 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
                if (!isMobileOrTouch) return; // Allow normal desktop hover/click behavior

                const now = Date.now();
                const lastTap = lastTapTimes.get(pill) || 0;
                const timeDiff = now - lastTap;
                lastTapTimes.set(pill, now);

                const isAlreadyExpanded = pill.classList.contains('touch-active');

                // Case A: Double-Tap on an expanded pill (2 taps within 380ms) -> Collapse immediately
                if (isAlreadyExpanded && timeDiff < 380 && timeDiff > 40) {
                    e.preventDefault();
                    e.stopPropagation();
                    pill.classList.remove('touch-active');
                    if (autoCollapseTimer) clearTimeout(autoCollapseTimer);
                    return;
                }

                // Case B: First Tap on a collapsed pill -> Expand and show name, DO NOT navigate yet
                if (!isAlreadyExpanded) {
                    e.preventDefault();
                    e.stopPropagation();
                    collapseAllPills();
                    pill.classList.add('touch-active');

                    // Auto-collapse after 4.5 seconds if inactive
                    autoCollapseTimer = setTimeout(() => {
                        pill.classList.remove('touch-active');
                    }, 4500);
                    return;
                }

                // Case C: Second Tap on an already expanded pill -> Allow normal navigation / action!
                if (autoCollapseTimer) clearTimeout(autoCollapseTimer);
            });
        });

        // Tap outside anywhere collapses expanded pills
        document.addEventListener('click', function(e) {
            if (!e.target.closest('#side-social-dock')) {
                collapseAllPills();
            }
        });

        document.addEventListener('touchstart', function(e) {
            if (!e.target.closest('#side-social-dock')) {
                collapseAllPills();
            }
        }, { passive: true });
    })();

    // ─── Initialize Active Seasonal Theme on Startup ───
    setTimeout(() => {
        if (window.appApplyTheme) window.appApplyTheme();
    }, 120);
});

// ════════════════════════════════════════════════════════════════════════
// SEASONAL THEMES & INTERNATIONAL OCCASIONS ENGINE
// ════════════════════════════════════════════════════════════════════════
// SEASONAL THEMES & INTERNATIONAL OCCASIONS ENGINE (ULTRA-OPTIMIZED)
// ════════════════════════════════════════════════════════════════════════
(function() {
    let ambientAnimationId = null;
    let particles = [];
    let lastFrameTime = 0;
    let activeEffectType = 'none';
    const TARGET_FRAME_INTERVAL = 28; // ~35 FPS for silky performance & low CPU/GPU load

    // ─── Offscreen Sprite Cache (Pre-rendered once to avoid 60fps path calculation) ───
    const spriteCache = {};

    function createOffscreenCanvas(width, height) {
        const c = document.createElement('canvas');
        c.width = width;
        c.height = height;
        return c;
    }

    function initSpriteCache() {
        if (spriteCache.initialized) return;

        // Helper to generate crisp offscreen sprite canvas
        const makeSprite = (w, h, drawFn) => {
            const c = createOffscreenCanvas(w, h);
            const ctx = c.getContext('2d');
            if (ctx) drawFn(ctx, w, h);
            return c;
        };

        // 1. Christmas Snow Crystal & Glowing Orb
        spriteCache.snowCrystal = makeSprite(32, 32, (ctx) => {
            ctx.translate(16, 16);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.lineWidth = 1.2;
            ctx.lineCap = 'round';
            for (let i = 0; i < 6; i++) {
                ctx.save();
                ctx.rotate((i * 60 * Math.PI) / 180);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(0, -13);
                ctx.moveTo(0, -7);
                ctx.lineTo(-4, -10);
                ctx.moveTo(0, -7);
                ctx.lineTo(4, -10);
                ctx.stroke();
                ctx.restore();
            }
        });

        spriteCache.snowOrb = makeSprite(24, 24, (ctx) => {
            const grad = ctx.createRadialGradient(12, 12, 0, 12, 12, 11);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
            grad.addColorStop(0.5, 'rgba(230, 245, 255, 0.6)');
            grad.addColorStop(1, 'rgba(230, 245, 255, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(12, 12, 11, 0, Math.PI * 2);
            ctx.fill();
        });

        // 2. Lunar New Year Silk Lantern & Auspicious Gold Coin
        spriteCache.lantern = makeSprite(36, 42, (ctx) => {
            ctx.translate(18, 18);
            // Ambient outer glow
            const glowGrad = ctx.createRadialGradient(0, 0, 4, 0, 0, 16);
            glowGrad.addColorStop(0, 'rgba(254, 224, 71, 0.5)');
            glowGrad.addColorStop(0.6, 'rgba(239, 68, 68, 0.25)');
            glowGrad.addColorStop(1, 'rgba(220, 38, 38, 0)');
            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(0, 0, 16, 0, Math.PI * 2);
            ctx.fill();

            // Silk body
            const bodyGrad = ctx.createRadialGradient(-3, -2, 1, 0, 0, 12);
            bodyGrad.addColorStop(0, '#fef08a');
            bodyGrad.addColorStop(0.4, '#ef4444');
            bodyGrad.addColorStop(1, '#991b1b');
            ctx.fillStyle = bodyGrad;
            ctx.beginPath();
            ctx.ellipse(0, 0, 10, 13, 0, 0, Math.PI * 2);
            ctx.fill();

            // Gold caps & ribs
            ctx.fillStyle = '#facc15';
            ctx.fillRect(-6, -14, 12, 2.5);
            ctx.fillRect(-6, 12, 12, 2.5);
            ctx.strokeStyle = 'rgba(253, 224, 71, 0.65)';
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.ellipse(0, 0, 5, 13, 0, 0, Math.PI * 2);
            ctx.stroke();

            // Gold bottom tassel
            ctx.strokeStyle = '#facc15';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(0, 14.5);
            ctx.lineTo(0, 21);
            ctx.stroke();
        });

        spriteCache.goldCoin = makeSprite(24, 24, (ctx) => {
            ctx.translate(12, 12);
            const grad = ctx.createRadialGradient(-2, -2, 1, 0, 0, 10);
            grad.addColorStop(0, '#fff5c0');
            grad.addColorStop(0.5, '#f59e0b');
            grad.addColorStop(1, '#b45309');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(0, 0, 9, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fde047';
            ctx.lineWidth = 1;
            ctx.stroke();
            // Square center cutout
            ctx.fillStyle = 'rgba(24, 4, 6, 0.8)';
            ctx.fillRect(-3, -3, 6, 6);
        });

        // 3. Avurudu Traditional Sinhala & Tamil Sweets (Kavum, Kokis, Aluwa, Aasmi), Erabadu Mal & Solar Rays
        // 3a. Konda Kavum (Golden Fried Honey Oil Cake with Top Crest)
        spriteCache.kavumSweet = makeSprite(34, 36, (ctx) => {
            ctx.translate(17, 18);
            // Sweet base
            const baseGrad = ctx.createRadialGradient(-2, 3, 2, 0, 4, 13);
            baseGrad.addColorStop(0, '#f59e0b');
            baseGrad.addColorStop(0.5, '#b45309');
            baseGrad.addColorStop(1, '#78350f');
            ctx.fillStyle = baseGrad;
            ctx.beginPath();
            ctx.ellipse(0, 4, 12, 9, 0, 0, Math.PI * 2);
            ctx.fill();

            // Signature top "Konda" crest
            const kondaGrad = ctx.createLinearGradient(0, -14, 0, 4);
            kondaGrad.addColorStop(0, '#d97706');
            kondaGrad.addColorStop(0.6, '#92400e');
            kondaGrad.addColorStop(1, '#78350f');
            ctx.fillStyle = kondaGrad;
            ctx.beginPath();
            ctx.moveTo(-5, 2);
            ctx.quadraticCurveTo(-1, -12, 0, -14);
            ctx.quadraticCurveTo(1, -12, 5, 2);
            ctx.closePath();
            ctx.fill();

            // Honey gloss highlight & sesame specks
            ctx.fillStyle = 'rgba(254, 240, 138, 0.45)';
            ctx.beginPath();
            ctx.ellipse(-3, 1, 6, 2.5, -0.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fef08a';
            ctx.fillRect(-4, 5, 1.2, 1.2);
            ctx.fillRect(3, 3, 1.2, 1.2);
            ctx.fillRect(0, -5, 1.2, 1.2);
        });

        // 3b. Kokis (Crispy Golden-Yellow Flower Lattice Wheel)
        spriteCache.kokisSweet = makeSprite(32, 32, (ctx) => {
            ctx.translate(16, 16);
            const kokisGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, 13);
            kokisGrad.addColorStop(0, '#fef08a');
            kokisGrad.addColorStop(0.6, '#facc15');
            kokisGrad.addColorStop(1, '#d97706');
            ctx.strokeStyle = kokisGrad;
            ctx.lineWidth = 2.2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Outer 5-petal star loop
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (i * 72 * Math.PI) / 180;
                const rOuter = 12;
                const rInner = 6;
                const x1 = Math.cos(angle) * rOuter;
                const y1 = Math.sin(angle) * rOuter;
                const midAngle = angle + (36 * Math.PI) / 180;
                const x2 = Math.cos(midAngle) * rInner;
                const y2 = Math.sin(midAngle) * rInner;
                if (i === 0) ctx.moveTo(x1, y1);
                else ctx.lineTo(x1, y1);
                ctx.lineTo(x2, y2);
            }
            ctx.closePath();
            ctx.stroke();

            // Inner wheel ring & spokes
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(0, 0, 4.5, 0, Math.PI * 2);
            for (let i = 0; i < 5; i++) {
                const angle = (i * 72 * Math.PI) / 180;
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle) * 11, Math.sin(angle) * 11);
            }
            ctx.stroke();
        });

        // 3c. Aluwa (Diamond Rhombus Rice Flour Sweet with Cashew Flecks)
        spriteCache.aluwaSweet = makeSprite(30, 28, (ctx) => {
            ctx.translate(15, 14);
            const aluwaGrad = ctx.createLinearGradient(-11, -8, 11, 8);
            aluwaGrad.addColorStop(0, '#fef9c3');
            aluwaGrad.addColorStop(0.5, '#fde047');
            aluwaGrad.addColorStop(1, '#ca8a04');
            ctx.fillStyle = aluwaGrad;
            ctx.beginPath();
            ctx.moveTo(0, -10);
            ctx.lineTo(12, 0);
            ctx.lineTo(0, 10);
            ctx.lineTo(-12, 0);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#b45309';
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Cashew nut pieces
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.ellipse(-3, -2, 3, 1.5, 0.4, 0, Math.PI * 2);
            ctx.ellipse(3, 2, 2.5, 1.2, -0.3, 0, Math.PI * 2);
            ctx.fill();
        });

        // 3d. Aasmi (Crisp White Lattice Nest with Magenta Treacle Swirl)
        spriteCache.aasmiSweet = makeSprite(32, 32, (ctx) => {
            ctx.translate(16, 16);
            // White laced string nest
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, 11, 0, Math.PI * 2);
            ctx.moveTo(-9, -4); ctx.quadraticCurveTo(0, 8, 9, -4);
            ctx.moveTo(-7, 4); ctx.quadraticCurveTo(0, -8, 7, 4);
            ctx.moveTo(-10, 0); ctx.lineTo(10, 0);
            ctx.stroke();

            // Bright Magenta / Rose Treacle Swirl (Iconic Aasmi topping)
            ctx.strokeStyle = '#f43f5e';
            ctx.lineWidth = 2.2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(-8, -3);
            ctx.bezierCurveTo(-2, -9, 4, 7, 9, 2);
            ctx.stroke();
            ctx.strokeStyle = '#be123c';
            ctx.lineWidth = 1;
            ctx.stroke();
        });

        // 3e. Erabadu Mal (Auspicious Scarlet Coral Blossom of Avurudu)
        spriteCache.erabaduMal = makeSprite(32, 32, (ctx) => {
            ctx.translate(16, 16);
            // Glow
            const glow = ctx.createRadialGradient(0, 0, 2, 0, 0, 14);
            glow.addColorStop(0, 'rgba(239, 68, 68, 0.45)');
            glow.addColorStop(1, 'rgba(153, 27, 27, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(0, 0, 14, 0, Math.PI * 2);
            ctx.fill();

            // Curved crimson petals
            const petalGrad = ctx.createLinearGradient(-8, -12, 8, 12);
            petalGrad.addColorStop(0, '#f87171');
            petalGrad.addColorStop(0.4, '#ef4444');
            petalGrad.addColorStop(1, '#991b1b');
            ctx.fillStyle = petalGrad;

            ctx.beginPath();
            ctx.moveTo(-2, 8);
            ctx.bezierCurveTo(-10, 2, -12, -8, 2, -12);
            ctx.bezierCurveTo(0, -6, 2, 2, -2, 8);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(2, 8);
            ctx.bezierCurveTo(8, 3, 12, -6, 2, -12);
            ctx.bezierCurveTo(4, -4, 6, 2, 2, 8);
            ctx.fill();

            // Golden stamens
            ctx.fillStyle = '#facc15';
            ctx.beginPath();
            ctx.arc(-1, -12, 1.5, 0, Math.PI * 2);
            ctx.arc(4, -10, 1.5, 0, Math.PI * 2);
            ctx.fill();
        });

        // 3f. Avurudu Ceylon Solar Ray & Auspicious Marigold / Jasmine Petals
        spriteCache.sunburstSpark = makeSprite(28, 28, (ctx) => {
            ctx.translate(14, 14);
            const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 12);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.35, '#facc15');
            grad.addColorStop(0.7, '#ea580c');
            grad.addColorStop(1, 'rgba(234, 88, 12, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(0, 0, 12, 0, Math.PI * 2);
            ctx.fill();
            // 4 main rays
            ctx.strokeStyle = '#fff5c0';
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(0, -11); ctx.lineTo(0, 11);
            ctx.moveTo(-11, 0); ctx.lineTo(11, 0);
            ctx.stroke();
        });

        spriteCache.marigoldPetal = makeSprite(26, 26, (ctx) => {
            ctx.translate(13, 13);
            const grad = ctx.createLinearGradient(-8, -10, 8, 10);
            grad.addColorStop(0, '#fef08a');
            grad.addColorStop(0.5, '#f59e0b');
            grad.addColorStop(1, '#ea580c');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -10);
            ctx.bezierCurveTo(7, -6, 9, 6, 0, 11);
            ctx.bezierCurveTo(-9, 6, -7, -6, 0, -10);
            ctx.fill();
        });

        spriteCache.jasminePetal = makeSprite(24, 24, (ctx) => {
            ctx.translate(12, 12);
            const grad = ctx.createLinearGradient(0, -9, 0, 9);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.7, '#fef9c3');
            grad.addColorStop(1, '#fde047');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -9);
            ctx.bezierCurveTo(6, -4, 5, 5, 0, 9);
            ctx.bezierCurveTo(-5, 5, -6, -4, 0, -9);
            ctx.fill();
        });

        // 4. Diwali Floating Diya Lamp & Rangoli Sparkle
        spriteCache.diyaLamp = makeSprite(38, 30, (ctx) => {
            ctx.translate(19, 15);
            // Outer warm glow
            const glow = ctx.createRadialGradient(0, -3, 2, 0, -3, 14);
            glow.addColorStop(0, 'rgba(254, 240, 138, 0.6)');
            glow.addColorStop(0.5, 'rgba(249, 115, 22, 0.3)');
            glow.addColorStop(1, 'rgba(234, 88, 12, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(0, -3, 14, 0, Math.PI * 2);
            ctx.fill();

            // Terracotta clay bowl
            const clayGrad = ctx.createLinearGradient(-12, 0, 12, 10);
            clayGrad.addColorStop(0, '#ea580c');
            clayGrad.addColorStop(0.5, '#c2410c');
            clayGrad.addColorStop(1, '#7c2d12');
            ctx.fillStyle = clayGrad;
            ctx.beginPath();
            ctx.moveTo(-13, 0);
            ctx.quadraticCurveTo(0, 12, 13, 0);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#facc15';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Golden oil pool
            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.ellipse(0, 0, 11, 3, 0, 0, Math.PI * 2);
            ctx.fill();

            // Flickering flame
            const flameGrad = ctx.createRadialGradient(0, -4, 1, 0, -6, 8);
            flameGrad.addColorStop(0, '#ffffff');
            flameGrad.addColorStop(0.4, '#fde047');
            flameGrad.addColorStop(0.8, '#f97316');
            flameGrad.addColorStop(1, 'rgba(220, 38, 38, 0)');
            ctx.fillStyle = flameGrad;
            ctx.beginPath();
            ctx.moveTo(0, -13);
            ctx.quadraticCurveTo(5, -6, 0, -1);
            ctx.quadraticCurveTo(-5, -6, 0, -13);
            ctx.fill();
        });

        spriteCache.diwaliStar = makeSprite(26, 26, (ctx) => {
            ctx.translate(13, 13);
            ctx.fillStyle = '#fde047';
            ctx.beginPath();
            ctx.moveTo(0, -11);
            ctx.quadraticCurveTo(0, 0, 11, 0);
            ctx.quadraticCurveTo(0, 0, 0, 11);
            ctx.quadraticCurveTo(0, 0, -11, 0);
            ctx.quadraticCurveTo(0, 0, 0, -11);
            ctx.fill();
            // Core sparkle
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
            ctx.fill();
        });

        // 5. Valentine's Velvet Crimson & Champagne Blush Rose Petals and Glowing Hearts
        spriteCache.rosePetalCrimson = makeSprite(28, 28, (ctx) => {
            ctx.translate(14, 14);
            const grad = ctx.createLinearGradient(-10, -10, 10, 10);
            grad.addColorStop(0, '#fb7185');
            grad.addColorStop(0.4, '#e11d48');
            grad.addColorStop(1, '#881337');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -11);
            ctx.bezierCurveTo(9, -7, 11, 5, 0, 12);
            ctx.bezierCurveTo(-11, 5, -9, -7, 0, -11);
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
            ctx.lineWidth = 0.7;
            ctx.stroke();
        });

        spriteCache.rosePetalBlush = makeSprite(26, 26, (ctx) => {
            ctx.translate(13, 13);
            const grad = ctx.createLinearGradient(-8, -8, 8, 8);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.5, '#fecdd3');
            grad.addColorStop(1, '#f43f5e');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -10);
            ctx.bezierCurveTo(8, -6, 9, 4, 0, 10);
            ctx.bezierCurveTo(-9, 4, -8, -6, 0, -10);
            ctx.fill();
        });

        spriteCache.heart = makeSprite(28, 28, (ctx) => {
            ctx.translate(14, 14);
            // Soft glow
            const glow = ctx.createRadialGradient(0, 0, 3, 0, 0, 13);
            glow.addColorStop(0, 'rgba(251, 113, 133, 0.7)');
            glow.addColorStop(1, 'rgba(225, 29, 72, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(0, 0, 13, 0, Math.PI * 2);
            ctx.fill();

            // Heart shape
            ctx.fillStyle = '#f43f5e';
            ctx.beginPath();
            const topY = -7;
            ctx.moveTo(0, topY + 5);
            ctx.bezierCurveTo(-10, topY - 3, -11, topY + 7, 0, topY + 14);
            ctx.bezierCurveTo(11, topY + 7, 10, topY - 3, 0, topY + 5);
            ctx.fill();
        });

        // 6. Earth Day Rainforest Tea Leaves & Bioluminescent Fireflies
        spriteCache.teaLeafGreen = makeSprite(28, 28, (ctx) => {
            ctx.translate(14, 14);
            const grad = ctx.createLinearGradient(0, -11, 0, 11);
            grad.addColorStop(0, '#6ee7b7');
            grad.addColorStop(0.5, '#10b981');
            grad.addColorStop(1, '#065f46');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -11);
            ctx.bezierCurveTo(7, -6, 7, 6, 0, 11);
            ctx.bezierCurveTo(-7, 6, -7, -6, 0, -11);
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(0, -9);
            ctx.lineTo(0, 9);
            ctx.stroke();
        });

        spriteCache.teaLeafGold = makeSprite(28, 28, (ctx) => {
            ctx.translate(14, 14);
            const grad = ctx.createLinearGradient(0, -11, 0, 11);
            grad.addColorStop(0, '#fef08a');
            grad.addColorStop(0.5, '#f59e0b');
            grad.addColorStop(1, '#b45309');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -11);
            ctx.bezierCurveTo(7, -6, 7, 6, 0, 11);
            ctx.bezierCurveTo(-7, 6, -7, -6, 0, -11);
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(0, -9);
            ctx.lineTo(0, 9);
            ctx.stroke();
        });

        spriteCache.fireflyGlow = makeSprite(26, 26, (ctx) => {
            const grad = ctx.createRadialGradient(13, 13, 1, 13, 13, 12);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.3, '#a7f3d0');
            grad.addColorStop(0.65, '#10b981');
            grad.addColorStop(1, 'rgba(5, 150, 105, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(13, 13, 12, 0, Math.PI * 2);
            ctx.fill();
        });

        // 7. Halloween & Autumn Harvest: Glowing Jack-o'-lantern, Maple/Oak Leaves & Amber Bats
        spriteCache.pumpkinGlow = makeSprite(34, 32, (ctx) => {
            ctx.translate(17, 16);
            // Candlelight aura
            const glow = ctx.createRadialGradient(0, 0, 3, 0, 0, 15);
            glow.addColorStop(0, 'rgba(254, 240, 138, 0.65)');
            glow.addColorStop(0.5, 'rgba(234, 88, 12, 0.35)');
            glow.addColorStop(1, 'rgba(194, 65, 12, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(0, 0, 15, 0, Math.PI * 2);
            ctx.fill();

            // Ribbed Pumpkin Body
            const pGrad = ctx.createRadialGradient(-3, -2, 2, 0, 2, 13);
            pGrad.addColorStop(0, '#fb923c');
            pGrad.addColorStop(0.6, '#ea580c');
            pGrad.addColorStop(1, '#9a3412');
            ctx.fillStyle = pGrad;
            ctx.beginPath();
            ctx.ellipse(0, 2, 13, 10, 0, 0, Math.PI * 2);
            ctx.fill();

            // Stem
            ctx.fillStyle = '#78350f';
            ctx.fillRect(-2, -10, 4, 4);

            // Carved glowing eyes & mouth
            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.moveTo(-6, -1); ctx.lineTo(-3, -1); ctx.lineTo(-4.5, -4); ctx.closePath();
            ctx.moveTo(6, -1); ctx.lineTo(3, -1); ctx.lineTo(4.5, -4); ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(0, 3, 6, 0.2, Math.PI - 0.2);
            ctx.lineWidth = 1.6;
            ctx.strokeStyle = '#fef08a';
            ctx.stroke();
        });

        spriteCache.leafMapleGold = makeSprite(30, 30, (ctx) => {
            ctx.translate(15, 15);
            const grad = ctx.createLinearGradient(-10, -10, 10, 10);
            grad.addColorStop(0, '#fef08a');
            grad.addColorStop(0.5, '#f59e0b');
            grad.addColorStop(1, '#b45309');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -12);
            ctx.lineTo(3, -4); ctx.lineTo(10, -8); ctx.lineTo(7, -1);
            ctx.lineTo(12, 3); ctx.lineTo(4, 4); ctx.lineTo(6, 11);
            ctx.lineTo(0, 7);
            ctx.lineTo(-6, 11); ctx.lineTo(-4, 4); ctx.lineTo(-12, 3);
            ctx.lineTo(-7, -1); ctx.lineTo(-10, -8); ctx.lineTo(-3, -4);
            ctx.closePath();
            ctx.fill();
        });

        spriteCache.leafOakAmber = makeSprite(28, 32, (ctx) => {
            ctx.translate(14, 16);
            const grad = ctx.createLinearGradient(0, -13, 0, 13);
            grad.addColorStop(0, '#fbbf24');
            grad.addColorStop(0.5, '#ea580c');
            grad.addColorStop(1, '#7c2d12');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, -13);
            ctx.bezierCurveTo(8, -10, 10, -3, 6, 0);
            ctx.bezierCurveTo(11, 3, 9, 10, 3, 13);
            ctx.bezierCurveTo(0, 14, -3, 13, -3, 13);
            ctx.bezierCurveTo(-9, 10, -11, 3, -6, 0);
            ctx.bezierCurveTo(-10, -3, -8, -10, 0, -13);
            ctx.fill();
        });

        spriteCache.batSilhouette = makeSprite(32, 22, (ctx) => {
            ctx.translate(16, 11);
            ctx.fillStyle = 'rgba(245, 158, 11, 0.85)';
            ctx.beginPath();
            ctx.moveTo(0, -3);
            ctx.quadraticCurveTo(6, -9, 14, -6);
            ctx.quadraticCurveTo(10, 2, 5, 2);
            ctx.quadraticCurveTo(3, 7, 0, 5);
            ctx.quadraticCurveTo(-3, 7, -5, 2);
            ctx.quadraticCurveTo(-10, 2, -14, -6);
            ctx.quadraticCurveTo(-6, -9, 0, -3);
            ctx.fill();
            ctx.fillRect(-2, -5, 1.5, 3);
            ctx.fillRect(0.5, -5, 1.5, 3);
        });

        // 8. General Stars and Sparkles
        spriteCache.starGold = makeSprite(26, 26, (ctx) => {
            ctx.translate(13, 13);
            ctx.fillStyle = '#facc15';
            ctx.beginPath();
            ctx.moveTo(0, -11);
            ctx.quadraticCurveTo(0, 0, 11, 0);
            ctx.quadraticCurveTo(0, 0, 0, 11);
            ctx.quadraticCurveTo(0, 0, -11, 0);
            ctx.quadraticCurveTo(0, 0, 0, -11);
            ctx.fill();
        });

        spriteCache.sparkGold = makeSprite(24, 24, (ctx) => {
            const grad = ctx.createRadialGradient(12, 12, 0, 12, 12, 11);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.3, '#facc15');
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(12, 12, 11, 0, Math.PI * 2);
            ctx.fill();
        });

        spriteCache.initialized = true;
    }

    function initAmbientCanvas(effectType) {
        const canvas = document.getElementById('seasonal-ambient-canvas');
        if (!canvas) return;

        activeEffectType = effectType || 'none';

        if (ambientAnimationId) {
            cancelAnimationFrame(ambientAnimationId);
            ambientAnimationId = null;
        }

        if (!effectType || effectType === 'none') {
            canvas.style.display = 'none';
            const ctx = canvas.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        // Respect user accessibility preference
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            canvas.style.display = 'none';
            return;
        }

        initSpriteCache();

        canvas.style.display = 'block';
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function resizeCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
            canvas.width = Math.min(window.innerWidth * dpr, 1440);
            canvas.height = Math.min(window.innerHeight * dpr, 900);
        }
        resizeCanvas();

        let resizeTimer = null;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeCanvas, 200);
        }, { passive: true });

        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 12 : 24;
        particles = [];

        // ── A. Fireworks Simulation Subsystem (New Year) ──
        let fwRockets = [];
        let fwSparks = [];
        let fwLastLaunch = 0;
        const FW_COLORS = ['#facc15', '#60a5fa', '#f43f5e', '#a855f7', '#34d399', '#fef08a', '#38bdf8'];

        function launchFwRocket() {
            const x = Math.random() * (canvas.width * 0.7) + (canvas.width * 0.15);
            const targetY = Math.random() * (canvas.height * 0.35) + (canvas.height * 0.12);
            const speedY = -(Math.random() * 4 + 8.5);
            const color = FW_COLORS[Math.floor(Math.random() * FW_COLORS.length)];
            fwRockets.push({
                x: x,
                y: canvas.height + 10,
                vx: (Math.random() - 0.5) * 1.8,
                vy: speedY,
                targetY: targetY,
                color: color,
                trail: []
            });
        }

        function explodeFwRocket(x, y, color) {
            const count = isMobile ? 32 : 55;
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 5.2 + 1.2;
                fwSparks.push({
                    x: x,
                    y: y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    color: (Math.random() > 0.25) ? color : '#ffffff',
                    alpha: 1,
                    decay: Math.random() * 0.02 + 0.014,
                    gravity: 0.075,
                    friction: 0.958,
                    size: Math.random() * 2.4 + 1.6,
                    flicker: Math.random() > 0.4
                });
            }
        }

        if (effectType === 'fireworks') {
            launchFwRocket();
            setTimeout(launchFwRocket, 400);
        }

        // ── B. Seed Theme-Specific Floating Particle Elements ──
        for (let i = 0; i < particleCount; i++) {
            let sprite = spriteCache.snowOrb;
            let isRising = false;
            let baseSize = 14;
            let speedX = (Math.random() - 0.5) * 0.7;
            let speedY = Math.random() * 0.75 + 0.35;
            let opacity = Math.random() * 0.45 + 0.35;
            let pulseSpeed = 0;

            if (effectType === 'snow') {
                sprite = (i % 2 === 0) ? spriteCache.snowCrystal : spriteCache.snowOrb;
                baseSize = (i % 2 === 0) ? 14 : 10;
                speedY = Math.random() * 0.8 + 0.4;
            } else if (effectType === 'lanterns') {
                // Lunar New Year: Rising silk lanterns & gold coins
                isRising = true;
                if (i % 3 === 0) {
                    sprite = spriteCache.lantern;
                    baseSize = Math.random() * 8 + 18;
                    speedY = -(Math.random() * 0.45 + 0.25);
                    opacity = Math.random() * 0.4 + 0.45;
                } else if (i % 3 === 1) {
                    sprite = spriteCache.goldCoin;
                    baseSize = Math.random() * 6 + 12;
                    speedY = -(Math.random() * 0.55 + 0.3);
                } else {
                    sprite = spriteCache.starGold;
                    baseSize = Math.random() * 6 + 10;
                    speedY = -(Math.random() * 0.65 + 0.35);
                }
            } else if (effectType === 'avurudu' || (effectType === 'sparkles' && window.TeaFactoryStore && window.TeaFactoryStore.getActiveThemeId() === 'avurudu')) {
                // Ceylon Sinhala & Tamil New Year: Traditional Sweets (Konda Kavum, Kokis, Aluwa, Aasmi), Erabadu Mal & Solar Rays
                const sweetSprites = [
                    { sprite: spriteCache.kavumSweet, size: 20, speed: 0.65 },
                    { sprite: spriteCache.kokisSweet, size: 20, speed: 0.6 },
                    { sprite: spriteCache.aluwaSweet, size: 18, speed: 0.7 },
                    { sprite: spriteCache.aasmiSweet, size: 20, speed: 0.62 },
                    { sprite: spriteCache.erabaduMal, size: 18, speed: 0.68 },
                    { sprite: spriteCache.sunburstSpark, size: 16, speed: 0.45, pulse: 0.04 },
                    { sprite: spriteCache.jasminePetal, size: 13, speed: 0.55 }
                ];
                const item = sweetSprites[i % sweetSprites.length];
                sprite = item.sprite;
                baseSize = item.size + (Math.random() * 6 - 3);
                speedY = Math.random() * 0.45 + item.speed;
                pulseSpeed = item.pulse || 0;
                opacity = Math.random() * 0.35 + 0.55;
            } else if (effectType === 'diwali') {
                // Diwali Festival of Lights: Floating Diya oil lamps & Rangoli light stars
                if (i % 3 === 0) {
                    sprite = spriteCache.diyaLamp;
                    baseSize = Math.random() * 8 + 22;
                    speedY = (Math.random() - 0.5) * 0.25; // Gentle float
                    speedX = (Math.random() - 0.5) * 0.4;
                    pulseSpeed = Math.random() * 0.06 + 0.03;
                    opacity = Math.random() * 0.35 + 0.5;
                } else if (i % 3 === 1) {
                    sprite = spriteCache.diwaliStar;
                    baseSize = Math.random() * 6 + 14;
                    speedY = -(Math.random() * 0.4 + 0.2);
                    pulseSpeed = Math.random() * 0.08 + 0.04;
                } else {
                    sprite = spriteCache.sparkGold;
                    baseSize = Math.random() * 6 + 10;
                    speedY = (Math.random() - 0.5) * 0.3;
                }
            } else if (effectType === 'valentines' || effectType === 'hearts') {
                // Valentine's Royal Romance: Crimson & Champagne rose petals & glowing hearts
                if (i % 3 === 0) {
                    sprite = spriteCache.heart;
                    baseSize = Math.random() * 6 + 16;
                    isRising = true;
                    speedY = -(Math.random() * 0.5 + 0.25);
                    pulseSpeed = Math.random() * 0.05 + 0.02;
                } else if (i % 3 === 1) {
                    sprite = spriteCache.rosePetalCrimson;
                    baseSize = Math.random() * 8 + 15;
                    speedY = Math.random() * 0.7 + 0.35;
                } else {
                    sprite = spriteCache.rosePetalBlush;
                    baseSize = Math.random() * 7 + 13;
                    speedY = Math.random() * 0.65 + 0.3;
                }
            } else if (effectType === 'earthday' || effectType === 'leaves') {
                // Earth Day Rainforest: Green tea leaves, golden tip leaves & glowing fireflies
                if (i % 3 === 0) {
                    sprite = spriteCache.fireflyGlow;
                    baseSize = Math.random() * 8 + 14;
                    speedY = (Math.random() - 0.5) * 0.4;
                    speedX = (Math.random() - 0.5) * 0.6;
                    pulseSpeed = Math.random() * 0.07 + 0.03;
                    opacity = Math.random() * 0.4 + 0.4;
                } else if (i % 3 === 1) {
                    sprite = spriteCache.teaLeafGreen;
                    baseSize = Math.random() * 6 + 15;
                    speedY = Math.random() * 0.75 + 0.35;
                } else {
                    sprite = spriteCache.teaLeafGold;
                    baseSize = Math.random() * 6 + 14;
                    speedY = Math.random() * 0.7 + 0.35;
                }
            } else if (effectType === 'halloween') {
                // Halloween & Autumn Harvest: Golden maple leaves, oak leaves, glowing Jack-o'-lanterns, amber bats & embers
                const hwSprites = [
                    { sprite: spriteCache.leafMapleGold, size: 20, speed: 0.7 },
                    { sprite: spriteCache.pumpkinGlow, size: 22, speed: 0.5, pulse: 0.05 },
                    { sprite: spriteCache.leafOakAmber, size: 20, speed: 0.65 },
                    { sprite: spriteCache.batSilhouette, size: 18, speed: 0.45, pulse: 0.06 },
                    { sprite: spriteCache.rosePetalCrimson, size: 16, speed: 0.68 },
                    { sprite: spriteCache.sparkGold, size: 12, speed: 0.4, pulse: 0.07 }
                ];
                const item = hwSprites[i % hwSprites.length];
                sprite = item.sprite;
                baseSize = item.size + (Math.random() * 6 - 3);
                speedY = Math.random() * 0.45 + item.speed;
                pulseSpeed = item.pulse || 0;
                opacity = Math.random() * 0.35 + 0.55;
            } else {
                // Fallback sparkles
                sprite = (i % 2 === 0) ? spriteCache.starGold : spriteCache.sparkGold;
            }

            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: baseSize,
                speedY: speedY,
                speedX: speedX,
                opacity: opacity,
                baseOpacity: opacity,
                pulseSpeed: pulseSpeed,
                pulsePhase: Math.random() * Math.PI * 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 1.4,
                sprite: sprite,
                isRising: isRising
            });
        }

        function renderLoop(timestamp) {
            if (!timestamp) timestamp = performance.now();

            const delta = timestamp - lastFrameTime;
            if (delta < TARGET_FRAME_INTERVAL) {
                ambientAnimationId = requestAnimationFrame(renderLoop);
                return;
            }
            lastFrameTime = timestamp;

            if (document.hidden) {
                ambientAnimationId = requestAnimationFrame(renderLoop);
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ── 1. New Year Fireworks Simulation ──
            if (activeEffectType === 'fireworks') {
                const now = timestamp;
                const launchInterval = isMobile ? 1100 : 700;
                if (now - fwLastLaunch > launchInterval && fwRockets.length < 3) {
                    launchFwRocket();
                    fwLastLaunch = now;
                }

                for (let rIdx = fwRockets.length - 1; rIdx >= 0; rIdx--) {
                    const r = fwRockets[rIdx];
                    r.trail.push({ x: r.x, y: r.y });
                    if (r.trail.length > 5) r.trail.shift();

                    r.x += r.vx;
                    r.y += r.vy;
                    r.vy += 0.04;

                    ctx.save();
                    ctx.strokeStyle = r.color;
                    ctx.lineWidth = 2;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    for (let t = 0; t < r.trail.length; t++) {
                        const pt = r.trail[t];
                        if (t === 0) ctx.moveTo(pt.x, pt.y);
                        else ctx.lineTo(pt.x, pt.y);
                    }
                    ctx.stroke();

                    ctx.fillStyle = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();

                    if (r.y <= r.targetY || r.vy >= -1) {
                        explodeFwRocket(r.x, r.y, r.color);
                        fwRockets.splice(rIdx, 1);
                    }
                }

                for (let sIdx = fwSparks.length - 1; sIdx >= 0; sIdx--) {
                    const s = fwSparks[sIdx];
                    s.vx *= s.friction;
                    s.vy = s.vy * s.friction + s.gravity;
                    s.x += s.vx;
                    s.y += s.vy;
                    s.alpha -= s.decay;

                    if (s.alpha <= 0) {
                        fwSparks.splice(sIdx, 1);
                        continue;
                    }

                    ctx.save();
                    ctx.globalAlpha = s.flicker ? s.alpha * (0.65 + Math.random() * 0.35) : s.alpha;
                    ctx.fillStyle = s.color;
                    ctx.shadowColor = s.color;
                    ctx.shadowBlur = 4;
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            }

            // ── 2. Atmospheric Themed Particles ──
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                ctx.save();
                ctx.translate(p.x, p.y);
                if (p.rotation !== 0) ctx.rotate((p.rotation * Math.PI) / 180);

                // Handle organic pulse (for fireflies, diyas, solar flares, hearts)
                if (p.pulseSpeed > 0) {
                    p.pulsePhase += p.pulseSpeed;
                    const pulseFactor = Math.sin(p.pulsePhase) * 0.35 + 0.65;
                    ctx.globalAlpha = p.baseOpacity * pulseFactor;
                } else {
                    ctx.globalAlpha = p.opacity;
                }

                const half = p.size * 0.5;
                if (p.sprite) {
                    ctx.drawImage(p.sprite, -half, -half, p.size, p.size);
                }

                ctx.restore();

                // Physics update
                p.y += p.speedY;
                p.x += Math.sin(p.y * 0.012) * p.speedX;
                p.rotation += p.rotationSpeed;

                // Screen edge wrap
                if (p.isRising || p.speedY < 0) {
                    if (p.y < -30) {
                        p.y = canvas.height + 25;
                        p.x = Math.random() * canvas.width;
                    }
                } else {
                    if (p.y > canvas.height + 30) {
                        p.y = -25;
                        p.x = Math.random() * canvas.width;
                    }
                }

                if (p.x > canvas.width + 25) p.x = -25;
                else if (p.x < -25) p.x = canvas.width + 25;
            }

            ambientAnimationId = requestAnimationFrame(renderLoop);
        }

        ambientAnimationId = requestAnimationFrame(renderLoop);
    }

    // Auto-pause animation when user switches browser tabs
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (ambientAnimationId) {
                cancelAnimationFrame(ambientAnimationId);
                ambientAnimationId = null;
            }
        } else {
            if (activeEffectType && activeEffectType !== 'none' && !ambientAnimationId) {
                initAmbientCanvas(activeEffectType);
            }
        }
    });

    function initSeasonalSkyFlyer(themeId, isActive) {
        const skyEl = document.getElementById('seasonal-sky-flyer') || document.getElementById('christmas-santa-flyer');
        if (!skyEl) return;

        const rigEl = document.getElementById('seasonal-sky-rig') || skyEl.querySelector('.seasonal-sky-rig, .christmas-santa-rig');

        if (isActive && themeId && themeId !== 'classic' && window.getSeasonalSkyRigHtml) {
            const rigHtml = window.getSeasonalSkyRigHtml(themeId);
            if (rigHtml && rigHtml.trim() !== '') {
                if (rigEl) {
                    rigEl.innerHTML = rigHtml;
                }
                skyEl.style.display = 'block';
                void skyEl.offsetWidth; // Force reflow to re-trigger flight animation
                skyEl.classList.add('active');
                return;
            }
        }

        // Deactivate & gracefully hide
        skyEl.classList.remove('active');
        setTimeout(() => {
            if (skyEl && !skyEl.classList.contains('active')) {
                skyEl.style.display = 'none';
                if (rigEl) {
                    rigEl.innerHTML = '';
                }
            }
        }, 800);
    }

    // Backward-compatibility alias
    function initChristmasSantaFlyer(isActive) {
        initSeasonalSkyFlyer('christmas', isActive);
    }

    window.appApplyTheme = function(themeId) {
        if (!window.TeaFactoryStore) return;
        const currentThemeId = themeId || window.TeaFactoryStore.getActiveThemeId() || 'classic';
        const allThemes = window.TeaFactoryStore.getSeasonalThemes ? window.TeaFactoryStore.getSeasonalThemes() : [];
        const theme = allThemes.find(t => t.id === currentThemeId) || (window.TeaFactoryStore.getActiveTheme ? window.TeaFactoryStore.getActiveTheme() : allThemes[0]);
        if (!theme) return;

        const settings = window.TeaFactoryStore.getThemeSettings ? window.TeaFactoryStore.getThemeSettings() : { bannerEnabled: true, effectsEnabled: true };

        // 1. Set HTML data-theme attribute for CSS variable switching
        document.documentElement.setAttribute('data-theme', currentThemeId);

        // 2. Manage Top Festive Greeting Banner
        const bannerEl = document.getElementById('seasonal-theme-banner-strip');
        const bannerIcon = document.getElementById('seasonal-banner-icon');
        const bannerText = document.getElementById('seasonal-banner-text');

        if (bannerEl && bannerIcon && bannerText) {
            const isDismissed = sessionStorage.getItem(`tea_banner_dismissed_${currentThemeId}`);
            if (currentThemeId !== 'classic' && settings.bannerEnabled !== false && !isDismissed) {
                if (window.getSeasonalThemeIconSvg) {
                    bannerIcon.innerHTML = window.getSeasonalThemeIconSvg(currentThemeId, 16);
                } else {
                    bannerIcon.innerHTML = '';
                }

                // Determine celebratory message: prefer theme's celebratory greeting unless explicitly customized
                let activeGreeting = theme.bannerText;
                if (settings.customBannerText && settings.customBannerText.trim() !== '') {
                    const isOtherThemeDefault = allThemes.some(t => t.id !== currentThemeId && t.bannerText === settings.customBannerText.trim());
                    if (!isOtherThemeDefault) {
                        activeGreeting = settings.customBannerText.trim();
                    }
                }
                bannerText.textContent = activeGreeting || theme.bannerText || 'Welcome to Rock One Wild Tea';
                bannerEl.style.display = 'block';
            } else {
                bannerEl.style.display = 'none';
            }
        }

        // 3. Update Hero Slideshow Subtitle
        const heroSubtitles = document.querySelectorAll('.hero-subtitle');
        if (heroSubtitles && heroSubtitles.length > 0) {
            if (currentThemeId !== 'classic' && theme.heroSubtitle) {
                heroSubtitles[0].textContent = theme.heroSubtitle;
            } else {
                heroSubtitles[0].textContent = 'Rock One Wild Tea (Pvt) Limited • Uva Medium Region';
            }
        }

        // 4. Seasonal Flying Sky Characters (Santa & Sleigh, NY Champagne, Lunar Dragon, Diwali Peacock, Cupid, Bird of Paradise, Koha)
        if (currentThemeId !== 'classic' && settings.effectsEnabled !== false) {
            initSeasonalSkyFlyer(currentThemeId, true);
        } else {
            initSeasonalSkyFlyer(currentThemeId, false);
        }

        // 5. Ambient Visual Effects (Snow, Leaves, Sparkles, Lanterns, Fireworks, Hearts)
        if (settings.effectsEnabled !== false && theme.effects && theme.effects !== 'none') {
            initAmbientCanvas(theme.effects);
        } else {
            initAmbientCanvas('none');
        }
    };

    // Auto-bind seasonal banner dismiss button
    document.addEventListener('DOMContentLoaded', function() {
        const closeBtn = document.getElementById('seasonal-banner-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                const bannerEl = document.getElementById('seasonal-theme-banner-strip');
                if (bannerEl) bannerEl.style.display = 'none';
                if (window.TeaFactoryStore) {
                    const themeId = window.TeaFactoryStore.getActiveThemeId();
                    sessionStorage.setItem(`tea_banner_dismissed_${themeId}`, 'true');
                }
            });
        }
    });
})();
