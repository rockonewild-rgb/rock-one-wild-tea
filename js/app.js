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
            const cleanTitle = (title || 'Estate Bulletin').replace(/[<>&"]/g, '');
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
    <text x="200" y="180" fill="#f6e27a" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="700" letter-spacing="2.5" text-anchor="middle">ESTATE HARVEST BULLETIN</text>
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
    <text x="200" y="205" fill="#a0b0a5" font-family="'EB Garamond', serif" font-size="11" font-style="italic" text-anchor="middle">Commercial Bank · 0083-1001-5271-8843</text>
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

        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                if (preloader.parentNode) {
                    preloader.style.display = 'none';
                }
            }, 800);
        }, 300);
    }

    // Minimum display duration threshold for luxury feel (~600ms), maximum safety cutoff 2200ms
    const minTimePassed = new Promise(resolve => setTimeout(resolve, 600));
    const domReady = new Promise(resolve => {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            resolve();
        } else {
            window.addEventListener('DOMContentLoaded', resolve, { once: true });
        }
    });

    Promise.all([minTimePassed, domReady]).then(() => {
        if (document.readyState === 'complete') {
            dismissPreloader();
        } else {
            window.addEventListener('load', dismissPreloader, { once: true });
            setTimeout(dismissPreloader, 1800);
        }
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core State
    let activeTab = 'home';
    let currentDrawerContext = null; // { type: 'box'|'tour', id: number }
    let isAdminAuthenticated = false;
    let selectedAnnImageBase64 = '';
    let selectedProdImageBase64 = '';
    let selectedBoxImageBase64 = '';
    let selectedGalleryImageBase64 = '';
    let selectedOrderSlipBase64 = '';
    let selectedTourSlipBase64 = '';
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

    // Expose switchTab globally for internal CTA buttons
    window.appSwitchTab = switchTab;

    function renderTabContent(tabId) {
        switch (tabId) {
            case 'home':
                window.UIComponents.renderSeriesSelector('catalog-widget-container');
                bindCatalogEvents('catalog-widget-container');
                renderHomeAnnouncementsPreview();
                window.UIComponents.renderHeritageShowcase('home-heritage-container');
                window.UIComponents.renderCinemaShowcase('home-cinema-container');
                bindCinemaEvents();
                window.UIComponents.renderTestimonials('home-testimonials-container');
                bindReviewEvents();
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
            <div class="announcement-card ${ann.premium ? 'premium-ann' : ''}" data-id="${ann.id}" style="cursor: pointer;">
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
                    ${ann.premium ? '<span class="premium-badge">Collector Exclusives</span>' : '<span class="ann-read-more">Read Bulletin &rarr;</span>'}
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.announcement-card').forEach(card => {
            card.addEventListener('click', () => {
                const annId = parseInt(card.getAttribute('data-id'), 10);
                openAnnModal(annId);
            });
        });
    }

    // Bind tab clicks (both desktop buttons and mobile drawer cards)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const tabId = link.getAttribute('data-tab');
            if (tabId) {
                switchTab(tabId);
            }
        });
    });

    function renderAdminLogin(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="panel-card" style="max-width: 440px; margin: 4rem auto; text-align: center; border: var(--border-gold); background: rgba(10, 24, 14, 0.85); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); padding: 3.5rem 2.5rem; border-radius: 8px; box-shadow: var(--shadow-luxury);">
                <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem auto; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.5));">
                    <img src="images/logo-gold.png" alt="Rock One Wild Tea Logo" style="width: 100%; height: 100%; object-fit: contain;" onerror="window.handleImageError && window.handleImageError(this, 'logo')">
                </div>
                <h2 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-white); margin-bottom: 0.5rem; letter-spacing: 0.5px;">Concierge Authentication</h2>
                <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 2.5rem; font-weight: 300;">Access restricted to licensed Rock One Wild Tea estate operators.</p>
                <form id="admin-login-form" class="admin-form" style="gap: 1.5rem;">
                    <div class="form-group" style="text-align: left;">
                        <label for="admin-passcode" style="margin-bottom: 0.5rem; display: block; font-size: 0.7rem; letter-spacing: 2px; color: var(--color-text-muted);">Passcode</label>
                        <input type="password" id="admin-passcode" placeholder="••••" style="text-align: center; width: 100%; letter-spacing: 6px; font-size: 1.2rem; background: rgba(4, 10, 6, 0.6); border: 1px solid rgba(212, 175, 55, 0.25);" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-full" style="padding: 0.9rem; font-size: 0.85rem; letter-spacing: 2px;">Unlock Console</button>
                </form>
                <div style="margin-top: 2rem; font-size: 0.7rem; color: var(--color-text-muted); border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 1.5rem;">
                    Console Passcode: <code style="color: var(--color-gold); font-weight: 600; background: rgba(212,175,55,0.1); padding: 0.2rem 0.5rem; border-radius: 2px; font-family: monospace;">admin</code>
                </div>
            </div>
        `;

        // Bind form submit
        const form = document.getElementById('admin-login-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const passcode = document.getElementById('admin-passcode').value;
            if (passcode === 'admin') {
                isAdminAuthenticated = true;
                showToast("Access Granted", "Welcome back, Estate Concierge.", "success");
                renderTabContent('admin');
            } else {
                showToast("Access Denied", "Invalid staff credentials passcode.", "error");
                document.getElementById('admin-passcode').value = '';
            }
        });
    }

    // 4. Toast Notification System
    function showToast(title, message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = type === 'success' ? 
            `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>` : 
            `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

        toast.innerHTML = `
            ${icon}
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-msg">${message}</div>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Remove toast after 4s
        setTimeout(() => {
            toast.style.animation = 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // 5. Drawer Controls
    function openDrawer(type, id, data = {}) {
        currentDrawerContext = { type, id, data };
        drawerOverlay.classList.add('active');

        if (type === 'box') {
            const boxes = window.TeaFactoryStore.getBoxes();
            const box = boxes.find(b => b.id === id);
            const season = window.TeaFactoryStore.getCurrentSeason();

            drawerTitle.innerText = `Inquire: ${box.name}`;

            drawerFormContainer.innerHTML = `
                <div class="booking-summary-box">
                    <div class="summary-row"><span>Selected Item:</span><span>${box.name}</span></div>
                    <div class="summary-row"><span>Series:</span><span>${season.name} (Series ${season.seriesNumber})</span></div>
                    <div class="summary-row total" style="margin-top:0.5rem;border-top:1px solid rgba(255,255,255,0.1);padding-top:0.5rem;"><span>Series Allocation:</span><span>${window.TeaFactoryStore.formatCurrency(box.price || 150.00)}</span></div>
                    <div style="margin-top:0.75rem; padding: 0.5rem; background: rgba(212,175,55,0.08); border: 1px dashed var(--color-gold); border-radius: 4px; font-size: 0.75rem; color: var(--color-gold); font-weight: 500; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        Collector Reserve Scarcity: Only 3 numbered chests remaining in this season's series
                    </div>
                </div>

                <form id="box-booking-form" class="admin-form">
                    <div class="form-group">
                        <label for="cust-name">Full Name</label>
                        <input type="text" id="cust-name" placeholder="Lord Archibald Sterling" required>
                    </div>
                    <div class="form-group">
                        <label for="cust-email">Email Address</label>
                        <input type="email" id="cust-email" placeholder="sterling@heritage.com" required>
                        <span class="field-hint">Enquiry reply and catalog details will be dispatched here.</span>
                    </div>
                    <div class="form-group">
                        <label for="cust-phone">WhatsApp / Phone Number</label>
                        <input type="tel" id="cust-phone" placeholder="+94 77 123 4567" required>
                    </div>
                    <div class="form-group">
                        <label for="cust-pref-date">Preferred Delivery Date</label>
                        <input type="date" id="cust-pref-date" required>
                        <span class="field-hint">Specify your preferred date of arrival (minimum 3 days from today).</span>
                    </div>
                    <div class="form-group">
                        <label for="box-social-channel">Preferred Reply Channel</label>
                        <select id="box-social-channel">
                            <option value="WhatsApp">WhatsApp Message</option>
                            <option value="Email">Email Response</option>
                        </select>
                    </div>

                    <!-- Bespoke Gift Packaging & Presentation Accordion -->
                    ${window.UIComponents.renderBespokeGiftOptions('box')}

                    <div class="form-group" style="margin-top: 1.25rem;">
                        <label for="cust-enquiry-msg">Enquiry Message</label>
                        <textarea id="cust-enquiry-msg" rows="3" required>Hello Rock One Wild Tea team, I would like to inquire about the availability, collection details, and delivery options for ${box.name} of the "${season.name}" series. Please let me know the process to finalize.</textarea>
                    </div>
                </form>
            `;

            drawerFooter.innerHTML = `
                <div style="display: flex; gap: 0.75rem; width: 100%; flex-wrap: wrap;">
                    <button type="button" id="box-enquiry-whatsapp-btn" class="btn btn-primary" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #25d366; border-color: #25d366; color: #fff; font-weight:600;">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                        WhatsApp Inquiry
                    </button>
                    <button type="button" id="box-enquiry-email-btn" class="btn btn-outline" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight:600; color: var(--color-gold); border-color: rgba(212,175,55,0.3)">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Email Inquiry
                    </button>
                </div>
            `;

            bindBespokeGiftEvents('box');
            document.getElementById('box-enquiry-whatsapp-btn').addEventListener('click', () => handleBoxEnquirySubmit('WhatsApp'));
            document.getElementById('box-enquiry-email-btn').addEventListener('click', () => handleBoxEnquirySubmit('Email'));

        } else if (type === 'tour') {
            const timeSlot = data.timeSlot;
            selectedTourSlipBase64 = '';

            // Get selected package details
            const selectedPkgCard = document.querySelector('.package-card.selected');
            const pkgName = selectedPkgCard ? selectedPkgCard.getAttribute('data-package') : 'Golden Sommelier Tour';
            const pkgPrice = parseFloat(selectedPkgCard ? selectedPkgCard.getAttribute('data-price') : 150.00);
            const pkgDeposit = parseFloat(selectedPkgCard ? selectedPkgCard.getAttribute('data-deposit') : 50.00);

            drawerTitle.innerText = `Book Tour: ${pkgName}`;

            drawerFormContainer.innerHTML = `
                <div class="booking-summary-box">
                    <div class="summary-row"><span>Experience:</span><strong style="color:var(--color-gold);">${pkgName}</strong></div>
                    <div class="summary-row"><span>Time Slot:</span><span>${timeSlot}</span></div>
                    <div class="summary-row"><span>Seat Deposit:</span><span>${window.TeaFactoryStore.formatCurrency(pkgDeposit)} / guest</span></div>
                    <div class="summary-row total"><span>Total Payable Now:</span><span id="tour-total-deposit">${window.TeaFactoryStore.formatCurrency(pkgDeposit)}</span></div>
                </div>

                <form id="tour-booking-form" class="admin-form">
                    <div class="form-group">
                        <label for="tour-cust-name">Full Name</label>
                        <input type="text" id="tour-cust-name" placeholder="Lord Archibald Sterling" required>
                    </div>
                    <div class="form-group">
                        <label for="tour-cust-email">Email Address</label>
                        <input type="email" id="tour-cust-email" placeholder="archibald@heritage.com" required>
                        <span class="field-hint">Seat confirmation &amp; boarding pass will be dispatched here.</span>
                    </div>
                    <div class="form-group">
                        <label for="tour-cust-phone">WhatsApp / Contact Number</label>
                        <input type="tel" id="tour-cust-phone" placeholder="+94 77 123 4567" required>
                    </div>
                    <div class="form-group">
                        <label for="tour-date-input">Tour Date</label>
                        <input type="date" id="tour-date-input" required>
                    </div>
                    <div class="form-group">
                        <label for="tour-guests">Number of Guests</label>
                        <input type="number" id="tour-guests" value="1" min="1" max="12" required>
                    </div>
                    <div class="form-group">
                        <label for="tour-dietary">Dietary Preferences / High-Tea Notes</label>
                        <input type="text" id="tour-dietary" placeholder="e.g. Vegetarian, Gluten-Free, None">
                    </div>
                    <div class="form-group">
                        <label for="tour-transport">Estate Transfer Transport</label>
                        <select id="tour-transport">
                            <option value="No">No (Self-driving to Rock One Wild Tea Estate)</option>
                            <option value="Kandy">Yes (Round-trip pick-up from Kandy Hotels)</option>
                            <option value="Nuwara Eliya">Yes (Round-trip pick-up from Nuwara Eliya)</option>
                            <option value="Colombo">Yes (Round-trip pick-up from Colombo Hotels)</option>
                        </select>
                    </div>

                    <!-- Deposit Payment Method Switcher -->
                    <div class="form-group">
                        <label>Deposit Payment Method</label>
                        <div class="payment-method-tabs">
                            <button type="button" class="pay-tab active" data-method="card" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                Card / Gateway
                            </button>
                            <button type="button" class="pay-tab" data-method="bank" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                                Bank Transfer
                            </button>
                            <button type="button" class="pay-tab" data-method="slip" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                Cash Deposit Slip
                            </button>
                        </div>
                    </div>

                    <!-- Method A: Card / Gateway Payment -->
                    <div id="pay-panel-card" class="pay-panel active">
                        <div class="mock-card-notice">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.8" style="flex-shrink:0;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            <div>
                                <div style="font-weight:600;color:var(--color-gold);margin-bottom:0.3rem;">Instant Card &amp; Online Gateway</div>
                                <div style="font-size:0.8rem;color:var(--color-text-muted);">Pay your seat deposit online. Your tour time slot is verified and locked immediately upon submission.</div>
                            </div>
                        </div>
                    </div>

                    <!-- Method B: Direct Bank Transfer with Slip Attachment -->
                    <div id="pay-panel-bank" class="pay-panel">
                        <div class="bank-details-block">
                            <div class="bank-detail-row"><span>Bank Name:</span><strong>Bank of Ceylon</strong></div>
                            <div class="bank-detail-row"><span>Account Name:</span><strong>Rock One Wild Tea (Pvt) Ltd</strong></div>
                            <div class="bank-detail-row"><span>Account No:</span><strong>0083-1001-5271-8843</strong></div>
                            <div class="bank-detail-row"><span>Branch:</span><strong>Kandy Main Branch</strong></div>
                            <div class="bank-detail-row" style="border-top:1px dashed rgba(255,255,255,0.08);padding-top:0.4rem;margin-top:0.4rem;">
                                <span>Deposit Required:</span><strong id="bank-deposit-display" style="color:var(--color-gold);">$${pkgDeposit.toFixed(2)} USD</strong>
                            </div>
                        </div>
                        <span class="field-hint" style="margin-top:0.75rem;display:block;">Transfer the deposit and attach your payment receipt below.</span>
                        <div class="form-group" style="margin-top:1rem;">
                            <label>Upload Bank Transfer Slip / Screenshot</label>
                            <div class="file-upload-zone" id="tour-bank-slip-zone">
                                <div class="file-upload-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                </div>
                                <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse receipt</span></div>
                                <div class="file-upload-hint">JPG, PNG or PDF — Max 5MB</div>
                                <input type="file" id="tour-bank-slip" accept="image/*,.pdf" style="display:none;">
                            </div>
                            <div id="tour-bank-slip-preview" class="slip-preview" style="display:none;"></div>
                        </div>
                    </div>

                    <!-- Method C: Cash Deposit at Bank with Slip Attachment -->
                    <div id="pay-panel-slip" class="pay-panel">
                        <div class="mock-card-notice" style="background:rgba(212,175,55,0.07);border-color:rgba(212,175,55,0.2);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.8" style="flex-shrink:0;"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                            <div>
                                <div style="font-weight:600;color:var(--color-gold);margin-bottom:0.3rem;">Cash Deposit at Bank of Ceylon</div>
                                <div style="font-size:0.8rem;color:var(--color-text-muted);">Deposit the deposit amount at any islandwide branch and attach the bank teller cash slip.</div>
                            </div>
                        </div>
                        <div class="bank-details-block" style="margin-top:1rem;">
                            <div class="bank-detail-row"><span>Account Name:</span><strong>Rock One Wild Tea (Pvt) Ltd</strong></div>
                            <div class="bank-detail-row"><span>Account No:</span><strong>0083-1001-5271-8843</strong></div>
                            <div class="bank-detail-row"><span>Deposit Amount:</span><strong id="cash-deposit-display" style="color:var(--color-gold);">${window.TeaFactoryStore.formatCurrency(pkgDeposit)}</strong></div>
                        </div>
                        <div class="form-group" style="margin-top:1rem;">
                            <label>Upload Cash Deposit Slip</label>
                            <div class="file-upload-zone" id="tour-cash-slip-zone">
                                <div class="file-upload-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                </div>
                                <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse slip</span></div>
                                <div class="file-upload-hint">JPG, PNG or PDF — Max 5MB</div>
                                <input type="file" id="tour-cash-slip" accept="image/*,.pdf" style="display:none;">
                            </div>
                            <div id="tour-cash-slip-preview" class="slip-preview" style="display:none;"></div>
                        </div>
                    </div>
                </form>
            `;

            drawerFooter.innerHTML = `
                <button type="button" id="submit-tour-booking-btn" class="btn btn-primary w-full">
                    Confirm Tour Slots &amp; Submit
                </button>
            `;

            // Live Guest Calculations
            const guestsInput = document.getElementById('tour-guests');
            if (guestsInput) {
                guestsInput.addEventListener('input', () => {
                    const g = Math.max(1, parseInt(guestsInput.value) || 1);
                    const totalP = g * pkgPrice;
                    const totalD = g * pkgDeposit;
                    document.getElementById('summary-guest-count').innerText = g;
                    document.getElementById('summary-total-price').innerText = window.TeaFactoryStore.formatCurrency(totalP);
                    document.getElementById('summary-deposit-due').innerText = window.TeaFactoryStore.formatCurrency(totalD);
                    const totalPayableEl = document.getElementById('tour-total-deposit');
                    if (totalPayableEl) totalPayableEl.innerText = window.TeaFactoryStore.formatCurrency(totalD);
                    const bDisp = document.getElementById('bank-deposit-display');
                    const cDisp = document.getElementById('cash-deposit-display');
                    if (bDisp) bDisp.innerText = window.TeaFactoryStore.formatCurrency(totalD);
                    if (cDisp) cDisp.innerText = window.TeaFactoryStore.formatCurrency(totalD);
                });
            }

            // Bind Payment Tabs & File Dropzones
            bindPaymentTabs('tour-booking-form');
            bindFileUpload('tour-bank-slip', 'tour-bank-slip-zone', 'tour-bank-slip-preview');
            bindFileUpload('tour-cash-slip', 'tour-cash-slip-zone', 'tour-cash-slip-preview');

            // Capture file into selectedTourSlipBase64
            ['tour-bank-slip', 'tour-cash-slip'].forEach(inputId => {
                const inp = document.getElementById(inputId);
                if (inp) {
                    inp.addEventListener('change', () => {
                        if (inp.files.length > 0) {
                            const reader = new FileReader();
                            reader.onload = (ev) => { selectedTourSlipBase64 = ev.target.result; };
                            reader.readAsDataURL(inp.files[0]);
                        }
                    });
                }
            });

            // Bind submit btn
            document.getElementById('submit-tour-booking-btn').addEventListener('click', handleTourBookingSubmit);
        
        } else if (type === 'product') {
            const products = window.TeaFactoryStore.getProducts();
            const product = products.find(p => p.id === id);

            drawerTitle.innerText = `Order: ${product.name}`;

            drawerFormContainer.innerHTML = `
                <div class="booking-summary-box">
                    <div class="summary-row"><span>Product:</span><span>${product.name}</span></div>
                    <div class="summary-row"><span>Leaf Grade:</span><strong style="color: var(--color-gold);">${product.leafGrade}</strong></div>
                    <div class="summary-row"><span>Flavor Profile:</span><span style="font-size: 0.75rem; color: var(--color-text-muted);">${product.flavorProfile}</span></div>
                    <div class="summary-row" style="border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.5rem; margin-top: 0.5rem;">
                        <span style="font-size: 0.7rem; color: var(--color-text-muted);">Sommelier Brewing Guide:</span>
                        <span style="font-size: 0.7rem; color: var(--color-gold); font-weight: 500; display: inline-flex; align-items: center; gap: 0.35rem;">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg> ${product.steepTemp} | 
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${product.steepTime}
                        </span>
                    </div>
                    <div class="summary-row" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.5rem; margin-top: 0.5rem;"><span>Weight:</span><span>${product.weight} Premium Tin</span></div>
                    <div class="summary-row total"><span>Unit Price:</span><span>${window.TeaFactoryStore.formatCurrency(product.price)}</span></div>
                </div>

                <form id="prod-booking-form" class="admin-form">
                    <div class="form-group">
                        <label for="prod-cust-name">Full Name</label>
                        <input type="text" id="prod-cust-name" placeholder="Lady Charlotte Ashworth" required>
                    </div>
                    <div class="form-group">
                        <label for="prod-cust-email">Email Address</label>
                        <input type="email" id="prod-cust-email" placeholder="charlotte@heritage.com" required>
                        <span class="field-hint">Order confirmation will be dispatched here.</span>
                    </div>
                    <div class="form-group">
                        <label for="prod-cust-phone">WhatsApp / Phone Number</label>
                        <input type="tel" id="prod-cust-phone" placeholder="+94 77 123 4567" required>
                    </div>
                    <div class="form-group">
                        <label for="prod-pref-date">Preferred Delivery Date</label>
                        <input type="date" id="prod-pref-date" required>
                        <span class="field-hint">Specify your preferred delivery dispatch date.</span>
                    </div>

                    <!-- Bespoke Gift Packaging & Presentation Accordion -->
                    ${window.UIComponents.renderBespokeGiftOptions('prod')}

                    <div class="form-group" style="margin-top:1.25rem;">
                        <label>Payment Method</label>
                        <div class="payment-method-tabs">
                            <button type="button" class="pay-tab active" data-method="card" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                Card Payment
                            </button>
                            <button type="button" class="pay-tab" data-method="bank" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                                Bank Transfer
                            </button>
                            <button type="button" class="pay-tab" data-method="slip" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                Cash Deposit Slip
                            </button>
                        </div>
                    </div>
                    <div id="pay-panel-card" class="pay-panel active">
                        <div class="mock-card-notice">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.8" style="flex-shrink:0;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            <div>
                                <div style="font-weight:600;color:var(--color-gold);margin-bottom:0.3rem;">Secure Card Payment</div>
                                <div style="font-size:0.8rem;color:var(--color-text-muted);">Card gateway coming soon. You will be redirected to our concierge via WhatsApp or Instagram to finalize.</div>
                            </div>
                        </div>
                        <div class="form-group" style="margin-top:1rem;">
                            <label for="prod-social-channel">Redirect to Concierge via</label>
                            <select id="prod-social-channel">
                                <option value="WhatsApp">WhatsApp Concierge Direct</option>
                                <option value="Instagram">Instagram Direct Message</option>
                            </select>
                        </div>
                    </div>
                    <div id="pay-panel-bank" class="pay-panel">
                        <div class="bank-details-block">
                            <div class="bank-detail-row"><span>Bank Name:</span><strong>Bank of Ceylon</strong></div>
                            <div class="bank-detail-row"><span>Account Name:</span><strong>Rock One Wild Tea (Pvt) Ltd</strong></div>
                            <div class="bank-detail-row"><span>Account No:</span><strong>0083-1001-5271-8843</strong></div>
                            <div class="bank-detail-row"><span>Branch:</span><strong>Kandy Main Branch</strong></div>
                            <div class="bank-detail-row"><span>Amount Due:</span><strong>${window.TeaFactoryStore.formatCurrency(product.price)}</strong></div>
                        </div>
                        <span class="field-hint" style="margin-top:0.75rem;display:block;">After transferring, upload your payment slip below to confirm.</span>
                        <div class="form-group" style="margin-top:1rem;">
                            <label>Upload Bank Transfer Slip</label>
                            <div class="file-upload-zone" id="prod-bank-slip-zone">
                                <div class="file-upload-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                </div>
                                <div class="file-upload-text">Drag & drop or <span class="file-upload-link">browse file</span></div>
                                <div class="file-upload-hint">JPG, PNG or PDF — Max 5MB</div>
                                <input type="file" id="prod-bank-slip" accept="image/*,.pdf" style="display:none;">
                            </div>
                            <div id="prod-slip-preview" class="slip-preview" style="display:none;"></div>
                        </div>
                    </div>
                    <div id="pay-panel-slip" class="pay-panel">
                        <div class="mock-card-notice" style="background:rgba(212,175,55,0.07);border-color:rgba(212,175,55,0.2);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.8" style="flex-shrink:0;"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                            <div>
                                <div style="font-weight:600;color:var(--color-gold);margin-bottom:0.3rem;">Cash Deposit at Bank</div>
                                <div style="font-size:0.8rem;color:var(--color-text-muted);">Deposit the amount at any Bank of Ceylon branch and upload your cash deposit slip for verification.</div>
                            </div>
                        </div>
                        <div class="bank-details-block" style="margin-top:1rem;">
                            <div class="bank-detail-row"><span>Account Name:</span><strong>Rock One Wild Tea (Pvt) Ltd</strong></div>
                            <div class="bank-detail-row"><span>Account No:</span><strong>0083-1001-5271-8843</strong></div>
                            <div class="bank-detail-row"><span>Amount:</span><strong>${window.TeaFactoryStore.formatCurrency(product.price)}</strong></div>
                        </div>
                        <div class="form-group" style="margin-top:1rem;">
                            <label>Upload Cash Deposit Slip</label>
                            <div class="file-upload-zone" id="prod-cash-slip-zone">
                                <div class="file-upload-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                </div>
                                <div class="file-upload-text">Drag & drop or <span class="file-upload-link">browse file</span></div>
                                <div class="file-upload-hint">JPG, PNG or PDF — Max 5MB</div>
                                <input type="file" id="prod-cash-slip" accept="image/*,.pdf" style="display:none;">
                            </div>
                            <div id="prod-cash-slip-preview" class="slip-preview" style="display:none;"></div>
                        </div>
                    </div>
                </form>
            `;

            drawerFooter.innerHTML = `
                <button type="button" id="submit-prod-booking-btn" class="btn btn-primary w-full">
                    Confirm Order & Submit
                </button>
            `;

            bindPaymentTabs('prod-booking-form');
            bindBespokeGiftEvents('prod');
            bindFileUpload('prod-bank-slip', 'prod-bank-slip-zone', 'prod-slip-preview');
            bindFileUpload('prod-cash-slip', 'prod-cash-slip-zone', 'prod-cash-slip-preview');
            document.getElementById('submit-prod-booking-btn').addEventListener('click', handleProductBookingSubmit);
        
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

            document.getElementById('submit-review-btn').addEventListener('click', () => {
                const form = document.getElementById('review-submission-form');
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                const name = document.getElementById('rev-cust-name').value.trim();
                const location = document.getElementById('rev-cust-location').value.trim();
                const title = document.getElementById('rev-cust-title').value.trim();
                const experienceType = document.getElementById('rev-experience-type').value;
                const comment = document.getElementById('rev-comment').value.trim();

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

    function bindReviewEvents() {
        const btn = document.getElementById('btn-write-review');
        if (btn) {
            btn.onclick = () => openDrawer('review');
        }
    }

    // ── Cinema of the Estate Interactive Video Player Logic ──
    function bindCinemaEvents() {
        const iframe = document.getElementById('estate-cinema-iframe');
        const ytWrapper = document.getElementById('cinema-yt-wrapper');
        const html5Wrapper = document.getElementById('cinema-html5-wrapper');
        const video = document.getElementById('estate-cinema-video');
        const btnModeYt = document.getElementById('btn-cinema-mode-yt');
        const btnModeHtml5 = document.getElementById('btn-cinema-mode-html5');
        const chapterCards = document.querySelectorAll('.cinema-chapter-card');

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

    // 6. Box Enquiry Submission handler
    function handleBoxEnquirySubmit(channel) {
        const form = document.getElementById('box-booking-form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('cust-name').value;
        const email = document.getElementById('cust-email').value;
        const phone = document.getElementById('cust-phone').value;
        const preferredDate = document.getElementById('cust-pref-date').value;
        const message = document.getElementById('cust-enquiry-msg').value;
        const isGift = document.getElementById('box-enable-gift')?.checked || false;
        const giftWax = document.getElementById('box-wax-val')?.value || 'Imperial Gold';
        const giftMonogram = document.getElementById('box-monogram-input')?.value.trim().toUpperCase() || '';
        const giftMsg = document.getElementById('box-gift-msg')?.value.trim() || '';

        const boxId = currentDrawerContext.id;
        const result = window.TeaFactoryStore.bookBox(boxId, { 
            name, 
            email, 
            phone, 
            socialChannel: channel, 
            preferredDate,
            message,
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
                             `• Preferred Arrival Date: ${booking.preferredDate || 'Not Specified'}\n\n`;
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
                        window.open(`https://api.whatsapp.com/send?phone=94771757556&text=${encodedMsg}`, '_blank');
                    }, 1200);
                } else {
                    showToast("Creating Email Envelope", "Opening email application...", "success");
                    setTimeout(() => {
                        const subject = encodeURIComponent(`Enquiry: ${booking.boxName} (${booking.seasonName})`);
                        const body = encodeURIComponent(baseText);
                        window.open(`mailto:axentrat@gmail.com?subject=${subject}&body=${body}`, '_self');
                    }, 1200);
                }
            }, 1000);

        } else {
            showToast("Enquiry Failed", result.message, 'error');
        }
    }

    // 7. Tour Booking Submission handler
    function handleTourBookingSubmit() {
        const form = document.getElementById('tour-booking-form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('tour-cust-name').value.trim();
        const email = document.getElementById('tour-cust-email').value.trim();
        const phone = document.getElementById('tour-cust-phone').value.trim();
        const guests = Math.max(1, parseInt(document.getElementById('tour-guests').value) || 1);
        const tourDate = document.getElementById('tour-date-input').value;
        const dietaryNotes = document.getElementById('tour-dietary').value;
        const transportRequired = document.getElementById('tour-transport').value;
        
        // Active payment method
        const activeTabBtn = form.querySelector('.pay-tab.active');
        const paymentMethod = activeTabBtn ? activeTabBtn.getAttribute('data-method') : 'card';
        const socialChannel = document.getElementById('tour-social-channel')?.value || 'WhatsApp';

        // Check slip requirement for bank/slip methods
        if ((paymentMethod === 'bank' || paymentMethod === 'slip') && !selectedTourSlipBase64) {
            showToast("Deposit Slip Required", "Please attach your bank deposit receipt / transfer screenshot to submit.", "error");
            return;
        }

        const selectedPkgCard = document.querySelector('.package-card.selected');
        const packageName = selectedPkgCard ? selectedPkgCard.getAttribute('data-package') : 'Golden Sommelier Tour';
        const pkgPrice = parseFloat(selectedPkgCard ? selectedPkgCard.getAttribute('data-price') : 150.00);
        const pkgDeposit = parseFloat(selectedPkgCard ? selectedPkgCard.getAttribute('data-deposit') : 50.00);

        const totalDeposit = guests * pkgDeposit;
        const totalPrice = guests * pkgPrice;

        const slotId = currentDrawerContext.id;
        const result = window.TeaFactoryStore.bookTour(slotId, {
            name, 
            email, 
            phone, 
            guests, 
            packageName, 
            deposit: totalDeposit, 
            totalPrice: totalPrice,
            tourDate, 
            dietaryNotes, 
            transportRequired,
            paymentMethod,
            slipImage: selectedTourSlipBase64
        });

        if (result.success) {
            const booking = result.booking;
            if (paymentMethod === 'card') {
                showToast(
                    "Tour Reserved & Confirmed!", 
                    `Tour slot reserved for ${guests} guests on ${tourDate || currentDrawerContext.data.timeSlot}.`, 
                    'success'
                );
            } else {
                showToast(
                    "Deposit Slip Submitted!", 
                    `Deposit slip received for ${guests} guests (${currentDrawerContext.data.timeSlot}). Concierge will verify within 24 hours.`, 
                    'success'
                );
            }

            closeDrawer();
            renderTabContent(activeTab);

            // Forward summary message if card/concierge channel requested
            if (paymentMethod === 'card') {
                const message = `Hello Rock One Wild Tea!\n\nI have booked a Factory Tour:\n• Package: ${packageName} (${guests} Guests)\n• Slot: ${booking.timeSlot}\n• Date: ${tourDate}\n• Booking Ref: ${booking.id}\n• Lead Guest: ${name}\n• Phone: ${phone}\n• Deposit Paid: $${totalDeposit.toFixed(2)} USD\n\nPlease send gate pass instructions.`;
                const encodedMsg = encodeURIComponent(message);

                setTimeout(() => {
                    if (socialChannel === 'WhatsApp') {
                        showToast("Connecting to Concierge", "Opening WhatsApp chat support...", "success");
                        setTimeout(() => {
                            window.open(`https://api.whatsapp.com/send?phone=94771757556&text=${encodedMsg}`, '_blank');
                        }, 1200);
                    } else {
                        showToast("Creating Email Envelope", "Opening email application...", "success");
                        setTimeout(() => {
                            const subject = encodeURIComponent(`Tour Reservation Gate Pass: ${booking.id}`);
                            window.open(`mailto:axentrat@gmail.com?subject=${subject}&body=${encodedMsg}`, '_self');
                        }, 1200);
                    }
                }, 1000);
            }
        } else {
            showToast("Tour Booking Failed", result.message, 'error');
        }
    }

    // 7b. Product Order Submission Handler
    function handleProductBookingSubmit() {
        const form = document.getElementById('prod-booking-form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const name = document.getElementById('prod-cust-name').value;
        const email = document.getElementById('prod-cust-email').value;
        const phone = document.getElementById('prod-cust-phone').value;
        const preferredDate = document.getElementById('prod-pref-date').value;
        const socialChannel = document.getElementById('prod-social-channel').value;
        const isGift = document.getElementById('prod-enable-gift')?.checked || false;
        const giftWax = document.getElementById('prod-wax-val')?.value || 'Imperial Gold';
        const giftMonogram = document.getElementById('prod-monogram-input')?.value.trim().toUpperCase() || '';
        const giftMsg = document.getElementById('prod-gift-msg')?.value.trim() || '';

        const productId = currentDrawerContext.id;
        const result = window.TeaFactoryStore.bookProduct(productId, { 
            name, 
            email, 
            phone, 
            socialChannel, 
            preferredDate,
            giftPackaging: isGift,
            waxSealColor: isGift ? giftWax : '',
            monogramInitials: isGift ? giftMonogram : '',
            giftMessage: isGift ? giftMsg : ''
        });

        if (result.success) {
            const booking = result.booking;
            showToast(
                "Order Confirmed",
                `${booking.productName} (${booking.weight}) reserved. Delivery: ${booking.deliveryRange}`,
                'success'
            );

            closeDrawer();
            renderTabContent(activeTab);

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
                        window.open(`https://api.whatsapp.com/send?phone=94770000000&text=${encodedMsg}`, '_blank');
                    }, 1500);
                } else {
                    navigator.clipboard.writeText(message).then(() => {
                        showToast("Order Details Copied", "Booking info copied to clipboard. Redirecting to Instagram...", "success");
                    }).catch(() => {});
                    setTimeout(() => {
                        window.open('https://instagram.com/rock_one_wild_tea', '_blank');
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
                const panel = form.querySelector(`#pay-panel-${method}`);
                if (panel) panel.classList.add('active');
            });
        });
    }

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
    function bindFileUpload(inputId, zoneId, previewId) {
        const input = document.getElementById(inputId);
        const zone = document.getElementById(zoneId);
        const preview = document.getElementById(previewId);
        if (!input || !zone || !preview) return;

        // Click on zone opens file picker
        zone.addEventListener('click', () => input.click());

        // Drag and drop
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            if (e.dataTransfer.files.length > 0) {
                handleFileSelected(e.dataTransfer.files[0], zone, preview);
            }
        });

        // File selected via input
        input.addEventListener('change', () => {
            if (input.files.length > 0) {
                handleFileSelected(input.files[0], zone, preview);
            }
        });
    }

    function handleFileSelected(file, zone, preview) {
        if (file.size > 5 * 1024 * 1024) {
            showToast('File Too Large', 'Please upload a file under 5MB.', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const isImage = file.type.startsWith('image/');
            preview.style.display = 'block';
            if (isImage) {
                preview.innerHTML = `
                    <div class="slip-preview-inner">
                        <img src="${e.target.result}" alt="Deposit Slip Preview" style="max-width:100%;max-height:160px;border-radius:8px;border:1px solid rgba(212,175,55,0.3);" onerror="window.handleImageError && window.handleImageError(this, 'slip')">
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
                    } else if (boxStatus === 'Enquiry Pending') {
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
                    let buttonHtml = `<button class="btn btn-primary btn-book-box" data-id="${boxId}" style="width: 100%;">Enquire Now</button>`;
                    if (boxStatus === 'Booked') {
                        buttonHtml = `<button class="btn btn-secondary" disabled style="width: 100%;">Reserved</button>`;
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

    // Bind Product Catalog filter, search, and purchase buttons
    let currentCatalogCategory = 'all';

    function bindProductCatalogEvents() {
        // Filter tab buttons
        const filterBtns = document.querySelectorAll('.filter-tab-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCatalogCategory = btn.getAttribute('data-category');
                const searchVal = document.getElementById('catalog-search-input')?.value || '';
                window.UIComponents.renderCatalogItems(currentCatalogCategory, searchVal);
                bindCatalogGridButtons();
            });
        });

        // Live search
        const searchInput = document.getElementById('catalog-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                window.UIComponents.renderCatalogItems(currentCatalogCategory, searchInput.value);
                bindCatalogGridButtons();
            });
            // Gold focus glow
            searchInput.addEventListener('focus', () => {
                searchInput.style.borderColor = 'var(--color-gold)';
                searchInput.style.boxShadow = '0 0 10px rgba(212,175,55,0.15)';
            });
            searchInput.addEventListener('blur', () => {
                searchInput.style.borderColor = 'rgba(255,255,255,0.1)';
                searchInput.style.boxShadow = 'none';
            });
        }

        // Bind initial item buttons
        bindCatalogGridButtons();
    }

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

        // Standard product reserve buttons
        document.querySelectorAll('.btn-book-prod').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = btn.getAttribute('data-id');
                openDrawer('product', productId);
            });
        });

        // Collector box buttons (inside catalog collector grid)
        document.querySelectorAll('.btn-book-box').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const boxId = parseInt(btn.getAttribute('data-id'));
                openDrawer('box', boxId);
            });
        });
    }

    function bindTourEvents() {
        const container = document.getElementById('tours-timeline-container');
        if (!container) return;

        container.querySelectorAll('.btn-book-slot').forEach(btn => {
            btn.addEventListener('click', () => {
                const slotId = parseInt(btn.getAttribute('data-id'));
                const timeSlot = btn.getAttribute('data-timeslot');
                openDrawer('tour', slotId, { timeSlot });
            });
        });
    }

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
                        <label>Payment Method to Offer Customer</label>
                        <select id="co-method">
                            <option value="both">Online Payment + Bank Deposit (Both Options)</option>
                            <option value="online">Online Payment Link Only</option>
                            <option value="bank">Bank Deposit Only</option>
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
                            <input type="text" id="co-bank-name" placeholder="e.g. Bank of Ceylon" value="Bank of Ceylon">
                        </div>
                        <div class="form-group">
                            <label>Account Name</label>
                            <input type="text" id="co-acc-name" placeholder="Rock One Wild Tea (Pvt) Ltd" value="Rock One Wild Tea (Pvt) Ltd">
                        </div>
                        <div class="form-group">
                            <label>Account Number</label>
                            <input type="text" id="co-acc-no" placeholder="0083-1001-5271-8843" value="0083-1001-5271-8843">
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
                bankName: modal.querySelector('#co-bank-name').value.trim(),
                accountName: modal.querySelector('#co-acc-name').value.trim(),
                accountNo: modal.querySelector('#co-acc-no').value.trim(),
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
                if (confirm(`Approve deposit slip for ${booking.customerName} (${booking.id}) and confirm payment?`)) {
                    window.TeaFactoryStore.validateDepositSlip(booking.id, true);
                    closeModal();
                    showToast("Deposit Slip Approved", `Payment verified and reservation ${booking.id} confirmed.`, "success");
                    renderTabContent('admin');
                }
            });
        }

        const rejectSlipBtn = modal.querySelector('#modal-act-reject-slip');
        if (rejectSlipBtn) {
            rejectSlipBtn.addEventListener('click', () => {
                const reason = prompt("Enter rejection reason for customer (e.g. 'Amount mismatch' or 'Illegible receipt'):", "Amount mismatch or invalid receipt");
                if (reason !== null) {
                    window.TeaFactoryStore.validateDepositSlip(booking.id, false, reason);
                    closeModal();
                    showToast("Deposit Slip Rejected", `Slip marked as rejected. Status updated for ${booking.id}.`, "error");
                    renderTabContent('admin');
                }
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
                if (!selectedOrderSlipBase64) {
                    showToast('Slip Required', 'Please select a deposit slip image to upload.', 'error');
                    return;
                }
                const success = window.TeaFactoryStore.updateOrderStatus(orderId, 'Slip Submitted', selectedOrderSlipBase64);
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

        // ── Wire allocation certificate download button ──
        const certBtn = document.getElementById('btn-cert-download');
        if (certBtn) {
            certBtn.addEventListener('click', () => {
                const order = window.TeaFactoryStore.getOrderById(orderId);
                if (order) generateAllocationCertificate(order);
            });
        }
    }

    // ─── Luxury Allocation Certificate Generator (Print-to-PDF) ──────────────
    function generateAllocationCertificate(order) {
        if (!order) return;

        const isPaid      = order.status === 'Paid & Confirmed';
        const isSlipSent  = order.status === 'Slip Submitted';
        const isAwaiting  = order.status === 'Awaiting Payment' || order.status === 'Order Created';

        const statusColor = isPaid ? '#4caf50' : isSlipSent ? '#d4af37' : '#90caf9';
        const statusLabel = order.status;
        const issuedDate  = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const priceDisplay = order.formattedPrice || `USD ${(order.price || 0).toFixed(2)}`;

        // Build items HTML (support both single gift box and multi-item cart orders)
        let itemsHtml = '';
        if (order.items && Array.isArray(order.items) && order.items.length > 0) {
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

        .cert-signature-line {
            width: 100%;
            border-bottom: 1px solid #8b6914;
            margin-bottom: 2mm;
        }

        .cert-signature-title {
            font-size: 9px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #8b6914;
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
        <div class="cert-type-label">Connoisseur Allocation Certificate</div>
    </div>

    <!-- Opening recital -->
    <div class="cert-recital">
        This Certificate confirms and attests that the following allocation has been duly registered in the<br>
        <strong>Rock One Wild Tea Estate Master Ledger</strong> and reserved under the name of the allocated party.
    </div>

    <!-- Client & Order Details -->
    <div class="cert-details-block">
        <div class="cert-field-row">
            <span class="cert-field-label">Allocated To</span>
            <span class="cert-field-value">${order.customerName || '—'}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">Contact</span>
            <span class="cert-field-value">${[order.email, order.phone].filter(Boolean).join(' · ') || '—'}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">Allocation ID</span>
            <span class="cert-field-value mono">${order.id}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">Certificate Issued</span>
            <span class="cert-field-value">${issuedDate}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">Order Registered</span>
            <span class="cert-field-value">${order.createdAt || '—'}</span>
        </div>
        <div class="cert-field-row">
            <span class="cert-field-label">Allocation Status</span>
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
        <div class="cert-items-section-title">Allocated Reserve — Itemised Ledger Entry</div>
        <table class="cert-items-table">
            <thead>
                <tr>
                    <th style="text-align:left; padding-left:4px;">Description</th>
                    <th style="text-align:center; width: 25mm;">Qty</th>
                    <th style="text-align:right; padding-right:4px; width: 35mm;">Value</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHtml}
            </tbody>
            <tfoot>
                <tr class="cert-total-row">
                    <td style="text-align:left; padding-left:4px;" colspan="2">Total Allocation Value</td>
                    <td style="text-align:right; padding-right:4px; color:#5a3e00;">${priceDisplay}</td>
                </tr>
            </tfoot>
        </table>
    </div>

    <!-- Attestation zone: ref + wax seal + signature -->
    <div class="cert-attestation">
        <div class="cert-ref-box">
            <div class="cert-ref-id">${order.id}</div>
            <div class="cert-ref-label">Reference Number</div>
        </div>

        <div class="cert-wax-seal">
            ${waxSealSvg}
        </div>

        <div class="cert-signature-block">
            <div style="height: 14mm;"></div>
            <div class="cert-signature-line"></div>
            <div class="cert-signature-title">Estate Director, Rock One Wild Tea</div>
        </div>
    </div>

    <!-- Footer -->
    <div class="cert-footer">
        <p>Rock One Wild Tea (Pvt) Ltd · No: 54 Gannilawattha, Wallawela, Ettampitiya, Sri Lanka</p>
        <p>axentrat@gmail.com · +94 77 175 7556 · rockonewildtea.com</p>
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
                const newPrice = parseFloat(document.getElementById('new-box-price').value);

                const result = window.TeaFactoryStore.resetSeason(newName, newPrice);
                if (result.success) {
                    showToast(
                        "Season Transitioned Successfully", 
                        `Current active catalog set to "${result.newSeason.name}" (Series ${result.newSeason.seriesNumber}). Gift box grid reset.`, 
                        'success'
                    );
                    renderTabContent('admin');
                }
            });
        }

        // Reset Tour Slots
        const resetToursBtn = document.getElementById('admin-reset-tours-btn');
        if (resetToursBtn) {
            resetToursBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to release all estate tour slots for the day? This will clear active bookings.')) {
                    window.TeaFactoryStore.resetTourSlots();
                    showToast("Tour Slots Released", "All hourly factory tour slots have been reset to Available.", "success");
                    renderTabContent('admin');
                }
            });
        }

        // Force Reset All Data
        const forceResetBtn = document.getElementById('admin-force-reset-btn');
        if (forceResetBtn) {
            forceResetBtn.addEventListener('click', () => {
                if (confirm('WARNING: Are you sure you want to reset all portal data to factory defaults? This will clear all bookings, products, and custom settings.')) {
                    window.TeaFactoryStore.forceResetState();
                    showToast("System Reset Complete", "All local database registries have been restored to defaults.", "success");
                    renderTabContent('admin');
                }
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
                    if (confirm(`Are you sure you want to restore the estate database from "${file.name}"?\n\nThis will replace the current catalog, products, orders, and reservations with the backup snapshot.`)) {
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

                window.TeaFactoryStore.addAnnouncement({ title, tag, content, premium, image });
                showToast("Bulletin Published", `"${title}" has been added to our live announcements timeline.`, "success");
                
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
                const caption = btn.getAttribute('data-caption');
                if (confirm(`Are you sure you want to remove "${caption}" from the live gallery?`)) {
                    window.TeaFactoryStore.deleteGalleryImage(imgId);
                    showToast("Photo Removed", "The photograph was removed from the gallery.", "success");
                    renderTabContent('admin');
                }
            });
        });

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
                const price = parseFloat(document.getElementById('box-price-input').value);
                const status = document.getElementById('box-status-input').value;
                const desc = document.getElementById('box-desc-input').value.trim();
                const image = selectedBoxImageBase64;

                if (editId) {
                    const updatedData = { name, price, status, desc };
                    if (image) updatedData.image = image;
                    window.TeaFactoryStore.updateBox(parseInt(editId), updatedData);
                    showToast("Gift Box Updated", `"${name}" specifications have been updated.`, "success");
                } else {
                    window.TeaFactoryStore.addBox({
                        id: boxNum,
                        name,
                        price,
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
                const price = btn.getAttribute('data-price');
                const status = btn.getAttribute('data-status');
                const desc = btn.getAttribute('data-desc');
                const image = btn.getAttribute('data-image');

                const editIdInput = document.getElementById('box-edit-id');
                const numInput = document.getElementById('box-num-input');
                const nameInput = document.getElementById('box-name-input');
                const priceInput = document.getElementById('box-price-input');
                const statusInput = document.getElementById('box-status-input');
                const descInput = document.getElementById('box-desc-input');
                const titleEl = document.getElementById('giftbox-form-title');
                const descEl = document.getElementById('giftbox-form-desc');
                const cancelBtn = document.getElementById('btn-cancel-edit-box');
                const saveBtn = document.getElementById('btn-save-box');

                if (editIdInput) editIdInput.value = id;
                if (numInput) { numInput.value = id; numInput.disabled = true; }
                if (nameInput) nameInput.value = name;
                if (priceInput) priceInput.value = parseFloat(price).toFixed(2);
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
                const boxName = btn.getAttribute('data-name');
                if (confirm(`Are you sure you want to remove ${boxName} (#${boxId}) from this series?`)) {
                    window.TeaFactoryStore.deleteBox(boxId);
                    showToast("Gift Box Removed", `"${boxName}" was removed from the active series.`, "success");
                    renderTabContent('admin');
                }
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

        // Add / Edit Product Form Handler
        const addProductForm = document.getElementById('admin-add-product-form');
        if (addProductForm) {
            addProductForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const editId = document.getElementById('prod-edit-id').value;
                const name = document.getElementById('prod-name').value.trim();
                const category = document.getElementById('prod-category').value;
                const price = parseFloat(document.getElementById('prod-price').value);
                const weight = document.getElementById('prod-weight').value.trim();
                const symbol = document.getElementById('prod-symbol').value;
                const stock = document.getElementById('prod-stock').value;
                const desc = document.getElementById('prod-desc').value.trim();
                const leafGrade = document.getElementById('prod-grade').value.trim() || 'Premium Grade';
                const steepTemp = document.getElementById('prod-temp').value.trim() || '85°C (185°F)';
                const steepTime = document.getElementById('prod-time').value.trim() || '3-4 Minutes';
                const image = selectedProdImageBase64;

                if (editId) {
                    const updatedData = { name, category, price, weight, symbol, stock, desc, leafGrade, steepTemp, steepTime };
                    if (image) updatedData.image = image;
                    window.TeaFactoryStore.updateProduct(editId, updatedData);
                    showToast("Product Updated", `"${name}" specifications have been updated.`, "success");
                } else {
                    window.TeaFactoryStore.addProduct({
                        name, category, price, weight, symbol, stock, desc, leafGrade, steepTemp, steepTime, image: image || 'images/Product.jpeg'
                    });
                    showToast("Product Introduced", `"${name}" has been published to the Product Catalog.`, "success");
                }
                
                selectedProdImageBase64 = '';
                addProductForm.reset();
                const editIdInput = document.getElementById('prod-edit-id');
                if (editIdInput) editIdInput.value = '';
                if (prodImageZone) prodImageZone.classList.remove('has-file');
                if (prodImagePreview) prodImagePreview.style.display = 'none';
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
                const price = btn.getAttribute('data-price');
                const weight = btn.getAttribute('data-weight');
                const symbol = btn.getAttribute('data-symbol');
                const stock = btn.getAttribute('data-stock');
                const desc = btn.getAttribute('data-desc');
                const grade = btn.getAttribute('data-grade');
                const temp = btn.getAttribute('data-temp');
                const time = btn.getAttribute('data-time');
                const image = btn.getAttribute('data-image');

                const editIdInput = document.getElementById('prod-edit-id');
                const nameInput = document.getElementById('prod-name');
                const categoryInput = document.getElementById('prod-category');
                const priceInput = document.getElementById('prod-price');
                const weightInput = document.getElementById('prod-weight');
                const symbolInput = document.getElementById('prod-symbol');
                const stockInput = document.getElementById('prod-stock');
                const descInput = document.getElementById('prod-desc');
                const gradeInput = document.getElementById('prod-grade');
                const tempInput = document.getElementById('prod-temp');
                const timeInput = document.getElementById('prod-time');
                const titleEl = document.getElementById('prod-form-title');
                const descEl = document.getElementById('prod-form-desc');
                const saveBtn = document.getElementById('btn-save-prod');
                const cancelBtn = document.getElementById('btn-cancel-edit-prod');

                if (editIdInput) editIdInput.value = id;
                if (nameInput) nameInput.value = name;
                if (categoryInput) categoryInput.value = category;
                if (priceInput) priceInput.value = parseFloat(price).toFixed(2);
                if (weightInput) weightInput.value = weight;
                if (symbolInput) symbolInput.value = symbol;
                if (stockInput) stockInput.value = stock;
                if (descInput) descInput.value = desc || '';
                if (gradeInput) gradeInput.value = grade || '';
                if (tempInput) tempInput.value = temp || '';
                if (timeInput) timeInput.value = time || '';

                if (titleEl) titleEl.innerText = `Edit Product: ${name}`;
                if (descEl) descEl.innerText = `Update storefront details, tasting notes, and image for ${name}.`;
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
                const titleEl = document.getElementById('prod-form-title');
                if (titleEl) titleEl.innerText = 'Introduce New Product';
                const descEl = document.getElementById('prod-form-desc');
                if (descEl) descEl.innerText = 'Add a new standard tea product to the customer storefront.';
                const saveBtn = document.getElementById('btn-save-prod');
                if (saveBtn) saveBtn.innerText = 'Publish Product';
                cancelEditProdBtn.style.display = 'none';
                if (prodImageZone) prodImageZone.classList.remove('has-file');
                if (prodImagePreview) prodImagePreview.style.display = 'none';
            });
        }

        // Delete Product click binding
        const deleteProdBtns = document.querySelectorAll('.btn-delete-prod');
        deleteProdBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const prodId = btn.getAttribute('data-id');
                if (confirm('Are you sure you want to delete this product from the catalog?')) {
                    window.TeaFactoryStore.deleteProduct(prodId);
                    showToast("Product Removed", "The product was removed from the active catalog.", "success");
                    renderTabContent('admin');
                }
            });
        });

        // Logout/Lock Button
        const logoutBtn = document.getElementById('admin-logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                isAdminAuthenticated = false;
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
                    if (confirm(`Verify payment for reservation ${bookingId}?`)) {
                        const ok = window.TeaFactoryStore.updateBookingStatus(bookingId, 'Paid & Confirmed');
                        if (ok) {
                            showToast("Reservation Verified", `Payment verified for booking ${bookingId}.`, "success");
                            renderTabContent('admin');
                        }
                    }
                } else if (e.target.classList.contains('btn-complete-booking')) {
                    const bookingId = e.target.getAttribute('data-id');
                    if (confirm(`Mark reservation ${bookingId} as Completed & Fulfilled? This confirms tour execution.`)) {
                        const ok = window.TeaFactoryStore.updateBookingStatus(bookingId, 'Completed');
                        if (ok) {
                            showToast("Tour / Reservation Completed", `Booking ${bookingId} marked as completed and fulfilled.`, "success");
                            renderTabContent('admin');
                        }
                    }
                } else if (e.target.classList.contains('btn-cancel-booking')) {
                    const bookingId = e.target.getAttribute('data-id');
                    if (confirm(`Are you sure you want to cancel booking ${bookingId}? This will release the slot back to stock.`)) {
                        const ok = window.TeaFactoryStore.updateBookingStatus(bookingId, 'Cancelled');
                        if (ok) {
                            showToast("Reservation Cancelled", `Booking ${bookingId} cancelled and slot released.`, "success");
                            renderTabContent('admin');
                        }
                    }
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
                if (confirm(`Approve deposit slip for transaction ${id} and confirm payment?`)) {
                    const res = window.TeaFactoryStore.validateDepositSlip(id, true);
                    if (res.success) {
                        showToast("Deposit Slip Approved", `Payment verified & confirmed for ${id}.`, "success");
                        renderTabContent('admin');
                    } else {
                        showToast("Validation Error", res.message || "Could not validate slip.", "error");
                    }
                }
            });
        });

        // Reject Slip for any transaction
        document.querySelectorAll('.btn-reject-slip').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const reason = prompt("Please enter reason for rejecting this deposit slip (e.g. 'Amount mismatch', 'Illegible screenshot'):", "Amount mismatch or invalid receipt");
                if (reason !== null) {
                    const res = window.TeaFactoryStore.validateDepositSlip(id, false, reason);
                    if (res.success) {
                        showToast("Deposit Slip Rejected", `Deposit slip for ${id} was rejected. Customer status updated.`, "error");
                        renderTabContent('admin');
                    } else {
                        showToast("Rejection Error", res.message || "Could not reject slip.", "error");
                    }
                }
            });
        });

        // Mark as Paid & Confirmed (Legacy order cards)
        document.querySelectorAll('.btn-mark-order-paid').forEach(btn => {
            btn.addEventListener('click', () => {
                const orderId = btn.getAttribute('data-order-id');
                if (confirm(`Confirm payment for Order ${orderId}? This will mark the gift box as Reserved.`)) {
                    const ok = window.TeaFactoryStore.updateOrderStatus(orderId, 'Paid & Confirmed');
                    if (ok) {
                        showToast("Payment Confirmed", `Order ${orderId} marked as Paid & Confirmed. Gift box reserved.`, "success");
                        renderTabContent('admin');
                    }
                }
            });
        });

        // Cancel Order
        document.querySelectorAll('.btn-cancel-order').forEach(btn => {
            btn.addEventListener('click', () => {
                const orderId = btn.getAttribute('data-order-id');
                if (confirm(`Cancel order ${orderId}? This will notify the customer the order is cancelled.`)) {
                    const ok = window.TeaFactoryStore.updateOrderStatus(orderId, 'Cancelled');
                    if (ok) {
                        showToast("Order Cancelled", `Order ${orderId} has been cancelled.`, "success");
                        renderTabContent('admin');
                    }
                }
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
            addSlotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const editId = document.getElementById('slot-edit-id').value;
                const timeSlot = document.getElementById('slot-time-input').value.trim();
                const packageType = document.getElementById('slot-package-input').value;
                const status = document.getElementById('slot-status-input').value;

                if (editId) {
                    window.TeaFactoryStore.updateTourSlot(editId, {
                        timeSlot,
                        package: packageType,
                        status
                    });
                    showToast("Tour Slot Updated", `Slot #${editId} (${timeSlot}) has been updated.`, "success");
                } else {
                    window.TeaFactoryStore.addTourSlot({
                        timeSlot,
                        package: packageType,
                        status
                    });
                    showToast("Tour Slot Created", `New time slot "${timeSlot}" scheduled successfully.`, "success");
                }

                addSlotForm.reset();
                const editIdInput = document.getElementById('slot-edit-id');
                if (editIdInput) editIdInput.value = '';
                renderTabContent('admin');
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

                const editIdInput = document.getElementById('slot-edit-id');
                const timeInput = document.getElementById('slot-time-input');
                const packageInput = document.getElementById('slot-package-input');
                const statusInput = document.getElementById('slot-status-input');
                const titleEl = document.getElementById('tour-slot-form-title');
                const descEl = document.getElementById('tour-slot-form-desc');
                const saveBtn = document.getElementById('btn-save-slot');
                const cancelBtn = document.getElementById('btn-cancel-edit-slot');

                if (editIdInput) editIdInput.value = id;
                if (timeInput) timeInput.value = timeSlot;
                if (packageInput) packageInput.value = packageType;
                if (statusInput) statusInput.value = status;
                if (titleEl) titleEl.innerText = `Edit Tour Time Slot #${String(id).padStart(2, '0')}`;
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
                const titleEl = document.getElementById('tour-slot-form-title');
                if (titleEl) titleEl.innerText = 'Introduce New Tour Time Slot';
                const descEl = document.getElementById('tour-slot-form-desc');
                if (descEl) descEl.innerText = 'Schedule a new visit time window in the factory timeline.';
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
                if (confirm(`Free Slot #${slotId} back to Available for new guest bookings?`)) {
                    window.TeaFactoryStore.resetSingleTourSlot(slotId);
                    showToast("Slot Freed", `Slot #${slotId} is now available for new bookings.`, "success");
                    renderTabContent('admin');
                }
            });
        });

        // Delete Tour Slot click binding
        const deleteSlotBtns = document.querySelectorAll('.btn-delete-slot');
        deleteSlotBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const slotId = btn.getAttribute('data-id');
                if (confirm(`Are you sure you want to remove Slot #${slotId} from the daily timeline?`)) {
                    window.TeaFactoryStore.deleteTourSlot(slotId);
                    showToast("Slot Removed", `Slot #${slotId} was removed from the schedule.`, "success");
                    renderTabContent('admin');
                }
            });
        });

        // Delete Announcement click binding
        const deleteAnnBtns = document.querySelectorAll('.btn-delete-ann');
        deleteAnnBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const annId = parseInt(btn.getAttribute('data-id'));
                if (confirm('Are you sure you want to delete this bulletin?')) {
                    window.TeaFactoryStore.deleteAnnouncement(annId);
                    showToast("Announcement Deleted", "The bulletin has been removed from the public logs.", "success");
                    renderTabContent('admin');
                }
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
                            bankDetails: 'Commercial Bank: 0083-1001-5271-8843',
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
                if (confirm("Are you sure you want to delete this customer review?")) {
                    window.TeaFactoryStore.deleteReview(revId);
                    showToast("Review Deleted", "Customer review has been removed.", "success");
                    renderTabContent('admin');
                }
            });
        });

        // Private Reserve Inquiries Status Selectors
        document.querySelectorAll('.inq-status-select').forEach(select => {
            select.addEventListener('change', () => {
                const inqId = select.getAttribute('data-id');
                const newStatus = select.value;
                window.TeaFactoryStore.updateInquiryStatus(inqId, newStatus);
                showToast("Inquiry Updated", `Status for Dossier ${inqId} changed to "${newStatus}".`, "success");
            });
        });

        // Private Reserve Inquiries Delete Buttons
        document.querySelectorAll('.btn-delete-inquiry').forEach(btn => {
            btn.addEventListener('click', () => {
                const inqId = btn.getAttribute('data-id');
                if (confirm(`Are you sure you want to delete inquiry dossier ${inqId}?`)) {
                    window.TeaFactoryStore.deleteInquiry(inqId);
                    showToast("Inquiry Deleted", `Dossier ${inqId} was removed from the registry.`, "info");
                    renderTabContent('admin');
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
            card.addEventListener('click', () => {
                const annId = parseInt(card.getAttribute('data-id'));
                openAnnModal(annId);
            });
        });
    }

    // 7g. Announcements modal control functions
    const annModal = document.getElementById('announcement-modal');
    const annModalCloseBtn = document.getElementById('ann-modal-close-btn');

    function openAnnModal(annIdOrObj) {
        const announcements = window.TeaFactoryStore ? window.TeaFactoryStore.getAnnouncements() : [];
        const annId = typeof annIdOrObj === 'object' && annIdOrObj !== null ? annIdOrObj.id : parseInt(annIdOrObj, 10);
        const ann = typeof annIdOrObj === 'object' && annIdOrObj !== null ? annIdOrObj : announcements.find(a => a.id === annId);
        if (!ann) return;

        const titleEl = document.getElementById('ann-modal-title');
        const headingEl = document.getElementById('ann-modal-heading');
        const contentEl = document.getElementById('ann-modal-content');
        const tagEl = document.getElementById('ann-modal-tag');
        const dateEl = document.getElementById('ann-modal-date');
        const imgEl = document.getElementById('ann-modal-image');

        if (titleEl) titleEl.innerText = ann.premium ? 'Collector Exclusive Bulletin' : 'Estate Bulletin Details';
        if (headingEl) headingEl.innerText = ann.title;
        if (contentEl) contentEl.innerText = ann.content;
        if (tagEl) {
            tagEl.innerText = ann.tag;
            tagEl.className = ann.premium ? 'box-badge status-booked' : 'box-badge status-available';
        }
        if (dateEl) dateEl.innerText = ann.date;
        if (imgEl) imgEl.src = ann.image || 'images/luxury_tea_announcement.jpg';

        if (annModal) {
            annModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeAnnModal() {
        if (annModal) {
            annModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

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
        if (e.key === 'Escape' && annModal && annModal.classList.contains('active')) {
            closeAnnModal();
        }
    });

    function bindGalleryEvents() {
        const cards = document.querySelectorAll('.gallery-item-card');
        const lightbox = document.getElementById('gallery-lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');

        if (!lightbox || !lightboxImg) return;

        const galleryImages = window.TeaFactoryStore.getGalleryImages();
        if (galleryImages.length === 0) return;

        let currentIdx = 0;

        function showImage(idx) {
            currentIdx = (idx + galleryImages.length) % galleryImages.length;
            const imgObj = galleryImages[currentIdx];
            lightboxImg.src = imgObj.src;
            
            let captionText = imgObj.caption || `Estate Photograph ${currentIdx + 1} of ${galleryImages.length}`;
            if (lightboxCaption) {
                lightboxCaption.innerText = captionText;
            }
        }

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.getAttribute('data-index'));
                showImage(idx);
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
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
Direct Inbox: rockonewild@gmail.com | WhatsApp: +94 77 175 7556
Sanctuary: No: 54 Gannilawattha, Wallawela, Ettampitiya, Sri Lanka
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

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const fullName = (document.getElementById('enq-fullname')?.value || document.getElementById('inq-fullname')?.value || '').trim();
            const email = (document.getElementById('enq-email')?.value || document.getElementById('inq-email')?.value || '').trim();
            const phone = (document.getElementById('enq-phone')?.value || document.getElementById('inq-phone')?.value || '').trim();
            const serviceSelect = document.getElementById('enq-service');
            const service = serviceSelect ? serviceSelect.value : 'Artisanal Pure Single-Estate Teas';
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

            const inquiryData = {
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
        });
    }

    function showInquirySuccessModal(inquiry) {
        const existing = document.getElementById('inquiry-success-modal');
        if (existing) existing.remove();

        const waText = encodeURIComponent(`Hello Rock One Wild Tea Concierge, I have sent an enquiry [Ref: ${inquiry.id}] regarding "${inquiry.service || 'Artisanal Teas'}" for ${inquiry.fullName}.`);
        const waUrl = `https://wa.me/94771757556?text=${waText}`;

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
            startBtn.innerHTML = `⏸ ${_t('btn_pause_steep', 'Pause')}`;

            timerInterval = setInterval(() => {
                if (remainingSeconds > 0) {
                    remainingSeconds--;
                    updateDisplay();
                } else {
                    stopTimer();
                    statusEl.innerText = `${_t('timer_ready', 'INFUSION PERFECT')} 🫖`;
                    statusEl.style.color = "#00e5c9";
                    startBtn.innerHTML = `↺ ${_t('btn_steep_again', 'Steep Again')}`;
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
            startBtn.innerHTML = `▶ ${_t('btn_resume_steep', 'Resume')}`;
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
            startBtn.innerHTML = `▶ ${_t('btn_start_steep', 'Start Steep')}`;
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
                startBtn.innerHTML = `▶ ${_t('btn_start_steep', 'Start Steep')}`;
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
            startBtn.innerHTML = `⏸ ${_t('btn_pause_steep', 'Pause')}`;

            homeTimerInterval = setInterval(() => {
                if (homeRemainingSeconds > 0) {
                    homeRemainingSeconds--;
                    updateHomeDisplay();
                } else {
                    stopHomeTimer();
                    statusEl.innerText = `${_t('timer_ready', 'READY')} 🫖`;
                    statusEl.style.color = "#00e5c9";
                    startBtn.innerHTML = `↺ ${_t('btn_steep_again', 'Steep Again')}`;
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
            startBtn.innerHTML = `▶ ${_t('btn_resume_steep', 'Resume')}`;
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
            startBtn.innerHTML = `▶ ${_t('btn_start_steep', 'Start Steep')}`;
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
                startBtn.innerHTML = `▶ ${_t('btn_start_steep', 'Start Steep')}`;
            });
        });

        updateHomeDisplay();
    }

    // 8. Dynamic Rotating Hero Background Image Slideshow
    let heroSliderTimer = null;
    let currentHeroIndex = 0;

    function initHeroSlider() {
        const sliderContainer = document.getElementById('hero-slider-container');
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        const prevBtn = document.getElementById('hero-prev-btn');
        const nextBtn = document.getElementById('hero-next-btn');

        if (!sliderContainer || slides.length === 0) return;

        function goToSlide(idx) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            currentHeroIndex = (idx + slides.length) % slides.length;
            slides[currentHeroIndex].classList.add('active');
            if (dots[currentHeroIndex]) {
                dots[currentHeroIndex].classList.add('active');
            }
        }

        function nextSlide() {
            goToSlide(currentHeroIndex + 1);
        }

        function prevSlide() {
            goToSlide(currentHeroIndex - 1);
        }

        function startAutoPlay() {
            stopAutoPlay();
            heroSliderTimer = setInterval(nextSlide, 6000);
        }

        function stopAutoPlay() {
            if (heroSliderTimer) {
                clearInterval(heroSliderTimer);
                heroSliderTimer = null;
            }
        }

        // Attach Dot Click listeners
        dots.forEach(dot => {
            dot.onclick = (e) => {
                e.stopPropagation();
                const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
                if (!isNaN(targetIdx)) {
                    goToSlide(targetIdx);
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

        // Pause on hover
        sliderContainer.onmouseenter = stopAutoPlay;
        sliderContainer.onmouseleave = startAutoPlay;

        // Start auto play
        startAutoPlay();
    }

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
            addBotMessage(cfg.greeting || "Greetings! Welcome to **Rock One Wild Tea Estate**.");
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
                        html += `<button type="button" class="chat-action-btn" data-tab="${action.tab}">${action.label} &rarr;</button>`;
                    } else if (action.onclick) {
                        html += `<button type="button" class="chat-action-btn" onclick="${action.onclick}">${action.label}</button>`;
                    } else if (action.href) {
                        html += `<a href="${action.href}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">${action.label} ↗</a>`;
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
                        html += `<button type="button" class="chat-action-btn" data-tab="${action.tab}">${action.label} &rarr;</button>`;
                    } else if (action.href) {
                        html += `<a href="${action.href}" target="_blank" rel="noopener noreferrer" class="chat-action-btn">${action.label} ↗</a>`;
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
                    { label: cfg.btnOpenLookbook || "📖 Open Estate Lookbook (PDF)", onclick: "if(window.appOpenLookbook){window.appOpenLookbook()}" },
                    { label: cfg.btnTradeDesk || "💬 WhatsApp Trade Desk", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Estate%2C%20I%20would%20like%20to%20receive%20the%202026%20B2B%20Wholesale%20Lookbook%20and%20Price%20List." }
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
                { label: cfg.btnWhatsappDesk || "Chat on WhatsApp Desk", href: "https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20a%20question%3A%20" + encodeURIComponent(query) },
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
            cartOverlay.classList.add('active');
            cartOverlay.classList.add('open');
            cartOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            bindCartDrawerEvents();
        }

        function closeCart() {
            if (!cartOverlay) return;
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
                    if (confirm("Are you sure you want to empty your entire reserve bag?")) {
                        window.TeaFactoryStore.clearCart();
                        updateCartBadges();
                        showToast("Reserve bag emptied.", "info");
                        window.UIComponents.renderCartDrawer('cart-drawer-body');
                    }
                };
            }

            // 5. Submit Cart Order Checkout
            const checkoutForm = document.getElementById('cart-checkout-form');
            if (checkoutForm) {
                checkoutForm.onsubmit = (e) => {
                    e.preventDefault();

                    const nameInput = document.getElementById('cart-cust-name');
                    const emailInput = document.getElementById('cart-cust-email');
                    const phoneInput = document.getElementById('cart-cust-phone');
                    const addressInput = document.getElementById('cart-cust-address');
                    const countryInput = document.getElementById('cart-cust-country');
                    const payMethodInput = document.getElementById('cart-payment-method');
                    const notesInput = document.getElementById('cart-cust-notes');

                    const name = nameInput ? nameInput.value.trim() : '';
                    const email = emailInput ? emailInput.value.trim() : '';
                    const phone = phoneInput ? phoneInput.value.trim() : '';
                    const address = addressInput ? addressInput.value.trim() : '';
                    const country = countryInput ? countryInput.value : 'International Delivery';
                    const paymentMethod = payMethodInput ? payMethodInput.value : 'online';
                    const notes = notesInput ? notesInput.value.trim() : '';

                    if (!name || !email || !phone) {
                        showToast("Please provide your name, email, and contact phone number.", "error");
                        return;
                    }

                    const custData = { name, email, phone, address, country, notes };
                    const checkoutRes = window.TeaFactoryStore.checkoutCart(custData, paymentMethod);

                    if (checkoutRes.success) {
                        updateCartBadges();
                        const order = checkoutRes.order;

                        // Persist this order ID to device memory for "My Order" quick lookup
                        window.TeaFactoryStore.saveRecentOrderId(order.id);

                        // Display luxury order confirmation view in drawer
                        body.innerHTML = `
                            <div class="cart-success-view" style="text-align: center; padding: 2.5rem 1rem;">
                                <div style="width: 76px; height: 76px; border-radius: 50%; background: rgba(37,211,102,0.12); border: 2px solid #25d366; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; color: #25d366;">
                                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <span class="season-badge" style="background: rgba(212,175,55,0.15); color: var(--color-gold); font-size: 0.72rem; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">Order Confirmed</span>
                                <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: #ffffff; margin: 0.75rem 0 0.25rem 0;">Allocation Reserved</h3>
                                <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">Thank you, ${order.customerName}. Your order has been registered in the estate master ledger.</p>

                                <div style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem; text-align: left;">
                                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                        <span style="font-size: 0.8rem; color: var(--color-text-muted);">Order ID</span>
                                        <strong style="font-family: monospace; color: var(--color-gold); font-size: 0.95rem;">${order.id}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                        <span style="font-size: 0.8rem; color: var(--color-text-muted);">Total Amount</span>
                                        <strong style="color: #ffffff; font-size: 0.95rem;">${order.formattedPrice}</strong>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                                        <span style="font-size: 0.8rem; color: var(--color-text-muted);">Dispatch Range</span>
                                        <span style="color: #ffffff; font-size: 0.85rem;">${order.deliveryRange}</span>
                                    </div>
                                    <div style="display: flex; justify-content: space-between;">
                                        <span style="font-size: 0.8rem; color: var(--color-text-muted);">Payment Mode</span>
                                        <span style="color: var(--color-gold); font-size: 0.85rem; font-weight: 600;">${order.paymentMethod === 'bank' ? 'Bank Cash Deposit' : 'Online Gateway'}</span>
                                    </div>
                                </div>

                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    <a href="https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%20Concierge%2C%20I%20have%20placed%20Order%20${order.id}%20for%20${encodeURIComponent(order.formattedPrice)}.%20Please%20confirm%20my%20dispatch." target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 0.85rem 1.5rem; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #25d366; border-color: #25d366; color: #040e08; font-weight: 700;">
                                        <span>Notify Concierge on WhatsApp</span>
                                    </a>
                                    <button type="button" class="btn btn-outline" onclick="if(window.appCloseCart){window.appCloseCart()}document.getElementById('nav-order').click()" style="padding: 0.8rem; font-size: 0.85rem; border-color: rgba(255,255,255,0.25); color: #fff;">
                                        View in "My Order &amp; Pay" Desk &rarr;
                                    </button>
                                </div>
                            </div>
                        `;

                        showToast(`Order ${order.id} placed successfully!`, "success");
                    } else {
                        showToast(checkoutRes.message || "Failed to complete checkout.", "error");
                    }
                };
            }
        }

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

    // 9. Initial Load Orchestration
    initCustomCursor();
    initLanguageSwitchers();
    initCurrencySwitchers();
    initFloatingGlobalPreferences();
    initCartSystem();
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
});
