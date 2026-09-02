/**
 * Tea Factory Luxury Portal - Reusable UI Components
 */

const SVG_ICONS = {
    calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    tag: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
    users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    dollar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    box: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`
};

// Multi-Language dynamic translation helper
const _t = (key, fallback) => (window.TeaFactoryI18n ? window.TeaFactoryI18n.t(key, fallback) : (fallback !== undefined ? fallback : key));

const UIComponents = {
    // 1. Render Announcements & Events
    renderAnnouncements(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const announcements = window.TeaFactoryStore.getAnnouncements();
        
        if (announcements.length === 0) {
            container.innerHTML = `<div class="empty-state">No announcements at this time. Check back soon.</div>`;
            return;
        }

        container.innerHTML = announcements.map(ann => `
            <div class="announcement-card ${ann.premium ? 'premium-ann' : ''}" data-id="${ann.id}" style="cursor: pointer;">
                <div class="ann-header">
                    <span class="ann-tag">
                        ${SVG_ICONS.tag} ${ann.tag}
                    </span>
                    <span class="ann-date">
                        ${SVG_ICONS.calendar} ${ann.date}
                    </span>
                </div>
                <div class="ann-body">
                    <h3 class="ann-title">${ann.title}</h3>
                    <p class="ann-content">${ann.content}</p>
                </div>
                <div class="ann-footer">
                    ${ann.premium ? '<span class="premium-badge">Collector Exclusives</span>' : '<span class="ann-read-more">Read Bulletin &rarr;</span>'}
                </div>
            </div>
        `).join('');
    },

    // 1b. Render Dedicated Announcements & Bulletins Page
    renderAnnouncementsPage(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const announcements = window.TeaFactoryStore.getAnnouncements();

        let html = `
            <div class="tour-header-block" style="margin-bottom: 3rem;">
                <span class="section-tag">Estate Happenings</span>
                <h2 class="view-title">Announcements &amp; Bulletins</h2>
                <p class="view-subtitle">Stay informed on our latest organic tea harvest notes, estate events, and exclusive sommelier updates.</p>
            </div>

            <!-- Bulletins Showcase Block -->
            <div class="announcements-showcase-card" style="background-image: linear-gradient(rgba(4, 10, 6, 0.4), rgba(4, 10, 6, 0.9)), url('images/luxury_tea_announcement.jpg');">
                <div class="showcase-content">
                    <span class="season-badge">Master Sommelier Journal</span>
                    <h3 class="showcase-title">Artisanal Harvesting Bulletins</h3>
                    <p class="showcase-desc">Read our master tea maker's notes on weather conditions, seasonal plucking cycles, and flavor profile developments direct from the wild forest slopes.</p>
                </div>
            </div>

            <div class="announcements-grid" style="margin-top: 3rem;">
        `;

        if (announcements.length === 0) {
            html += `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem;">No active bulletins at this time. Check back soon.</div>`;
        } else {
            html += announcements.map(ann => `
                <div class="box-card announcement-card ${ann.premium ? 'premium-ann' : ''}" data-id="${ann.id}" style="cursor: pointer;">
                    <div class="card-image-wrapper">
                        <img src="${ann.image || 'images/luxury_tea_announcement.jpg'}" class="card-image" alt="${ann.title}" onerror="window.handleImageError && window.handleImageError(this, 'announcement')">
                        <div class="card-image-overlay"></div>
                        <span class="box-badge ${ann.premium ? 'status-booked' : 'status-available'}">${ann.tag}</span>
                    </div>
                    <div class="box-inner-content">
                        <div class="box-body">
                            <div class="ann-header" style="margin-bottom: 0.5rem;">
                                <span class="ann-date" style="font-size: 0.7rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 0.3rem;">
                                    ${SVG_ICONS.calendar} ${ann.date}
                                </span>
                            </div>
                            <h4 class="box-title" style="font-size: 1.15rem; margin-top: 0.3rem; margin-bottom: 0.5rem; color: var(--color-white);">${ann.title}</h4>
                            <p class="box-details" style="line-height: 1.6; font-size: 0.8rem; height: 50px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 0;">${ann.content}</p>
                        </div>
                        <div class="box-footer" style="margin-top: 1rem; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.75rem; text-align: right;">
                            <span style="color: var(--color-gold); font-size: 0.75rem; font-weight: 600;">Read Bulletin &rarr;</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        html += `</div>`;
        container.innerHTML = html;
    },

    // 2. Render Full Product Catalog with search/filter controls
    renderProductCatalog(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const products = window.TeaFactoryStore.getProducts();

        let html = `
            <div class="tour-header-block">
                <span class="section-tag">${_t('section_catalog_tag', 'Signature Collections')}</span>
                <h2 class="view-title">${_t('catalog_title', 'The Product Catalog')}</h2>
                <p class="view-subtitle">${_t('catalog_subtitle', 'Select from our artisanal standard tins harvested from our high-elevation organic slopes.')}</p>
            </div>

            <!-- Search, Filter & B2B Lookbook Controls -->
            <div class="catalog-controls-bar" style="margin-bottom: 3rem; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
                <div class="filter-tabs-group" style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
                    <button class="btn btn-outline filter-tab-btn active" data-category="all">${_t('filter_all', 'All Reserves')}</button>
                    <button class="btn btn-outline filter-tab-btn" data-category="Black Tea">${_t('filter_black', 'Black Tea')}</button>
                    <button class="btn btn-outline filter-tab-btn" data-category="Green & White Tea">${_t('filter_green_white', 'Green & White Tea')}</button>
                    <button class="btn btn-outline filter-tab-btn" data-category="Oolongs">${_t('filter_oolongs', 'Oolongs')}</button>
                </div>
                
                <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                    <button type="button" id="btn-catalog-open-lookbook" class="btn btn-primary btn-lookbook-cta" style="font-size: 0.78rem; padding: 0.65rem 1.25rem; display: inline-flex; align-items: center; gap: 0.5rem; border-radius: 20px;">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="12" y1="18" x2="12" y2="12"></line>
                            <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                        <span>${_t('btn_estate_lookbook', 'Estate Lookbook (PDF)')}</span>
                        <span style="background: rgba(0,0,0,0.35); color: var(--color-gold-light); font-size: 0.62rem; font-weight: 700; padding: 0.15rem 0.4rem; border-radius: 4px; border: 1px solid rgba(212,175,55,0.4);">2026</span>
                    </button>

                    <div class="search-input-wrapper" style="position: relative; min-width: 240px;">
                        <input type="text" id="catalog-search-input" placeholder="${_t('placeholder_search_reserves', 'Search reserves...')}" style="width: 100%; padding: 0.65rem 1rem 0.65rem 2.5rem; background: rgba(4,10,6,0.8); border: 1px solid rgba(255,255,255,0.1); color: var(--color-white); outline: none; border-radius: 20px; font-size: 0.82rem; transition: var(--transition-smooth);">
                        <span style="position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%); color: var(--color-text-muted); display: flex; align-items: center;">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Dynamic Catalog Grid Containers -->
            <div id="catalog-items-grid-container">
                <!-- Renders either standard products grid or the collector series grid -->
            </div>

            <!-- Sommelier's Brewing Ritual Guide -->
            <div id="catalog-brewing-container"></div>
        `;

        container.innerHTML = html;
        
        // Render all by default
        this.renderCatalogItems('all', '');
        this.renderBrewingGuide('catalog-brewing-container');
    },

    // Helper for subtle gold live-search keyword highlighting
    highlightText(text, query) {
        if (!text || !query) return text || '';
        const cleanQuery = query.trim();
        if (!cleanQuery) return text;
        const escaped = cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        return String(text).replace(regex, '<mark class="search-match-highlight">$1</mark>');
    },

    renderCatalogItems(categoryFilter = 'all', searchFilter = '') {
        const gridContainer = document.getElementById('catalog-items-grid-container');
        if (!gridContainer) return;

        searchFilter = searchFilter.toLowerCase().trim();

        // If category is "collector", render the 1-10 boxes grid
        if (categoryFilter === 'collector') {
            const boxes = window.TeaFactoryStore.getBoxes();
            // Filter boxes by search if any
            const filteredBoxes = searchFilter ? boxes.filter(b => b.name.toLowerCase().includes(searchFilter)) : boxes;

            if (filteredBoxes.length === 0) {
                gridContainer.innerHTML = `<div class="empty-state" style="text-align: center; padding: 4rem; color: var(--color-text-muted);">${_t('collector_no_boxes', 'No matching collector boxes found.')}</div>`;
                return;
            }

            const season = window.TeaFactoryStore.getCurrentSeason();
            let boxHtml = `
                <div class="season-branding" style="margin-bottom: 2rem; border-left: 2px solid var(--color-gold); padding-left: 1.5rem;">
                    <span class="season-badge">${_t('season_branding_badge', 'Series Release')} ${season.seriesNumber || 1}</span>
                    <h3 class="season-title" style="font-size: 2rem; margin-bottom: 0.5rem;">${season.name}</h3>
                    <p class="season-description" style="font-size: 0.9rem; color: var(--color-text-muted); max-width: 700px;">
                        ${_t('season_branding_sub', 'Select a box number from 1 to 10 below to secure your numbered luxury tea chest. Once booked, it instantly locks for other collectors.')}
                    </p>
                </div>
                <div class="boxes-grid">
            `;

            boxHtml += filteredBoxes.map(box => {
                let statusClass = 'status-available';
                let badgeText = _t('status_available', 'Available');
                let buttonHtml = `<button class="btn btn-primary btn-book-box" data-id="${box.id}">${_t('btn_enquire_now', 'Enquire Now')}</button>`;
                
                if (box.status === 'Booked') {
                    statusClass = 'status-booked';
                    badgeText = _t('status_reserved', 'Reserved');
                    buttonHtml = `<button class="btn btn-secondary" disabled>${_t('status_reserved', 'Reserved')}</button>`;
                } else if (box.status === 'Enquiry Pending') {
                    statusClass = 'status-pending';
                    badgeText = _t('status_pending', 'Enquiry Pending');
                    buttonHtml = `<button class="btn btn-warning btn-book-box" data-id="${box.id}" style="background: rgba(212,175,55,0.12); border-color: var(--color-gold); color: var(--color-gold);">${_t('btn_inquire_again', 'Inquire Again')}</button>`;
                }

                const displayName = this.highlightText(box.name, searchFilter);

                return `
                    <div class="box-card ${statusClass}">
                        <div class="box-inner">
                            <div class="box-header">
                                <span class="box-badge ${statusClass}">${badgeText}</span>
                                <span class="box-price" style="font-size:0.8rem;color:var(--color-gold);">${_t('price_enquiry_only', 'Enquiry Only')}</span>
                            </div>
                            <div class="box-body">
                                <div class="box-number-display">${String(box.id).padStart(2, '0')}</div>
                                <h4 class="box-title">${displayName}</h4>
                                <p class="box-details">${_t('box_seal_note', 'Individually numbered wood chest seal.')}</p>
                            </div>
                            <div class="box-footer">
                                ${buttonHtml}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            boxHtml += `</div>`;
            gridContainer.innerHTML = boxHtml;
            return;
        }

        // Render standard products
        const products = window.TeaFactoryStore.getProducts();
        const filteredProducts = products.filter(p => {
            if (!p) return false;
            const category = p.category || '';
            const name = p.name || '';
            const desc = p.desc || '';
            const leafGrade = p.leafGrade || '';
            const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
            const matchesSearch = !searchFilter || 
                name.toLowerCase().includes(searchFilter) || 
                desc.toLowerCase().includes(searchFilter) ||
                leafGrade.toLowerCase().includes(searchFilter) ||
                (p.tastingNotes && p.tastingNotes.some(t => t.toLowerCase().includes(searchFilter)));
            return matchesCategory && matchesSearch;
        });

        if (filteredProducts.length === 0) {
            gridContainer.innerHTML = `<div class="empty-state" style="text-align: center; padding: 4rem; color: var(--color-text-muted);">${_t('catalog_no_reserves', 'No tea reserves matching your filters were found.')}</div>`;
            return;
        }

        let prodHtml = `<div class="boxes-grid">`;
        prodHtml += filteredProducts.map(p => {
            const tastingChips = (p.tastingNotes || []).slice(0, 3).map(n => 
                `<span class="tasting-chip">${this.highlightText(n, searchFilter)}</span>`
            ).join('');

            const radar = p.sensoryRadar || { floral: 75, malty: 70, sweetness: 75, astringency: 40, body: 75, aroma: 85 };
            const displayName = this.highlightText(p.name, searchFilter);
            const displayDesc = this.highlightText(p.desc, searchFilter);
            const displayGrade = this.highlightText(p.leafGrade || _t('leaf_grade_default', 'Single-Estate Reserve'), searchFilter);

            return `
                <div class="box-card product-connoisseur-card status-available">
                    <div class="card-image-wrapper" style="height: auto !important; aspect-ratio: 4/3; background: rgba(0,0,0,0.35); position: relative;">
                        <img src="${p.image || 'images/Product.jpeg'}" class="card-image" alt="${p.name}" style="object-fit: contain; width: 100%; height: 100%;" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                        <div class="card-image-overlay"></div>
                        <span class="box-badge status-available" style="border-radius: 20px; font-size: 0.72rem;">${p.stock || _t('stock_available', 'Available')}</span>
                        ${p.elevation ? `<span class="elevation-badge">${p.elevation}</span>` : ''}
                    </div>
                    <div class="box-inner-content">
                        <div class="box-body" style="padding-bottom: 0.5rem;">
                            <div class="product-leaf-grade-tag">${displayGrade}</div>
                            <div class="box-title-row" style="margin-bottom: 0.4rem;">
                                <h4 class="box-title" style="font-size: 1.25rem;">${displayName}</h4>
                                <span class="box-price">${window.TeaFactoryStore.formatCurrency(p.price)} <small style="font-size: 0.65rem; color: var(--color-text-muted);">/ ${p.weight}</small></span>
                            </div>
                            <p class="box-details" style="line-height: 1.5; font-size: 0.82rem; height: 60px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; margin-bottom: 0.75rem;">${displayDesc}</p>
                            
                            <!-- Tasting Notes Micro Chips -->
                            <div class="product-tasting-chips-row">
                                ${tastingChips}
                            </div>

                            <!-- Steeping Quick Indicators -->
                            <div class="product-steep-micro-strip">
                                <span title="${_t('stat_water_temp', 'Water Temperature')}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg> ${p.steepTemp || '90°C'}</span>
                                <span title="${_t('stat_steep_duration', 'Steeping Duration')}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${p.steepTime || '3 Min'}</span>
                                <span title="${_t('stat_aroma', 'Aroma Score')}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${_t('stat_aroma', 'Aroma')} ${radar.aroma || 85}%</span>
                            </div>
                        </div>
                        <div class="box-footer" style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <button class="btn btn-outline btn-view-connoisseur" data-id="${p.id}" style="width: 100%; border-color: rgba(212,175,55,0.4); color: var(--color-gold); font-size: 0.78rem; padding: 0.6rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>
                                ${_t('btn_tasting_radar', 'Tasting Radar & Steep Timer')}
                            </button>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                                <button type="button" class="btn btn-primary btn-add-to-cart" data-id="${p.id}" data-type="product" style="font-size: 0.78rem; padding: 0.65rem 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.35rem;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    ${_t('btn_add_to_bag', 'Add to Bag')}
                                </button>
                                <button type="button" class="btn btn-outline btn-book-prod" data-id="${p.id}" style="font-size: 0.78rem; padding: 0.65rem 0.5rem; color: #ffffff; border-color: rgba(255,255,255,0.25);">
                                    ${_t('btn_quick_order', 'Quick Order')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        prodHtml += `</div>`;
        gridContainer.innerHTML = prodHtml;
    },

    // 3. Render 1 to 10 Box Catalog Selector (Minimalist Grid Layout)
    renderSeriesSelector(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const season = window.TeaFactoryStore.getCurrentSeason();
        const boxes = window.TeaFactoryStore.getBoxes();

        // Calculate available boxes count
        const availableCount = boxes.filter(b => b.status === 'Available').length;

        let headerHtml = '';
        if (containerId === 'gifts-container') {
            headerHtml = `
                <div class="tour-header-block" style="margin-bottom: 3rem;">
                    <span class="section-tag">${_t('gift_catalog_tag', 'Limited Edition Release')}</span>
                    <h2 class="view-title">${_t('gift_catalog_title', 'The Gift Catalog')}</h2>
                    <p class="view-subtitle">${_t('gift_catalog_sub', 'Reserve an individually numbered, handcrafted cedar wood chest containing single-estate premium harvests.')}</p>
                </div>
            `;
        }

        // Initially select the first available box or box 1
        const defaultBox = boxes.find(b => b.status === 'Available') || boxes[0];
        let defaultStatusText = _t('status_available', 'Available');
        let defaultBadgeClass = 'status-available';
        let defaultButtonHtml = `<button class="btn btn-primary btn-book-box" data-id="${defaultBox.id}" style="width: 100%;">${_t('btn_enquire_now', 'Enquire Now')}</button>`;

        if (defaultBox.status === 'Booked') {
            defaultStatusText = _t('status_reserved', 'Reserved');
            defaultBadgeClass = 'status-booked';
            defaultButtonHtml = `<button class="btn btn-secondary" disabled style="width: 100%;">${_t('status_reserved', 'Reserved')}</button>`;
        } else if (defaultBox.status === 'Enquiry Pending') {
            defaultStatusText = _t('status_pending', 'Enquiry Pending');
            defaultBadgeClass = 'status-pending';
            defaultButtonHtml = `<button class="btn btn-warning btn-book-box" data-id="${defaultBox.id}" style="width: 100%; background: rgba(212,175,55,0.12); border-color: var(--color-gold); color: var(--color-gold);">${_t('btn_inquire_again', 'Inquire Again')}</button>`;
        }

        let html = headerHtml + `
            <div class="catalog-info-panel" style="margin-bottom: 2.5rem; padding: 2rem 3rem;">
                <div class="season-branding">
                    <span class="season-badge">${_t('season_branding_badge', 'Series Release')} ${season.seriesNumber || 1}</span>
                    <h2 class="season-title" style="font-size: 2.2rem; margin-bottom: 0.5rem;">${season.name}</h2>
                    <p class="season-description">${_t('season_branding_sub', 'Active single-estate series containing handpicked specialty harvests.')}</p>
                </div>
                <div class="status-summary">
                    <div class="summary-metric" style="padding: 1rem 2rem; min-width: 180px;">
                        <span class="metric-value" style="font-size: 2rem;">${availableCount} / ${boxes.length}</span>
                        <span class="metric-label">${_t('status_available', 'Available')}</span>
                    </div>
                </div>
            </div>
            
            <div class="minimal-box-selector-layout">
                <!-- Left Side: Showcase Card -->
                <div class="showcase-card" style="display: flex; flex-direction: column;">
                    <div class="card-image-wrapper" style="position: relative; border-radius: 4px; overflow: hidden; border: var(--border-gold); height: auto !important; aspect-ratio: 4/3;">
                        <img src="${defaultBox.image || 'images/Gift%20Box.jpeg'}" class="card-image" id="selected-box-image" alt="Luxury Tea Chest" style="width: 100%; height: 100%; object-fit: contain; background: rgba(0,0,0,0.25); display: block;" onerror="window.handleImageError && window.handleImageError(this, 'box')">
                        <div class="card-image-overlay"></div>
                        <span id="selected-box-badge" class="box-badge ${defaultBadgeClass}">${defaultStatusText}</span>
                    </div>
                    <div class="showcase-details" style="padding: 1.5rem 0 0 0;">
                        <h4 id="selected-box-name" class="box-title" style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-gold); margin-bottom: 0.5rem;">${defaultBox.name}</h4>
                        <p class="box-details" id="selected-box-desc" style="color: var(--color-text-muted); font-size: 0.85rem; margin-bottom: 1.5rem; line-height: 1.5;">${defaultBox.desc || _t('box_seal_note', 'Individually numbered, hand-sealed cedar chest containing seasonal micro-batch leaves.')}</p>
                        <div id="selected-box-action">
                            ${defaultButtonHtml}
                        </div>
                    </div>
                </div>
                
                <!-- Right Side: Number Selector Matrix -->
                <div class="grid-card">
                    <h4 class="grid-title" style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--color-white);">${_t('season_branding_badge', 'Select Box Number')}</h4>
                    <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">${_t('season_branding_sub', 'Choose an available box slot below to submit an enquiry.')}</p>
                    
                    <div class="num-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(52px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
                        ${boxes.map(box => {
                            let btnClass = 'num-btn-available';
                            let badgeLabel = _t('status_available', 'Available');
                            if (box.status === 'Booked') {
                                btnClass = 'num-btn-booked';
                                badgeLabel = _t('status_reserved', 'Reserved');
                            } else if (box.status === 'Enquiry Pending') {
                                btnClass = 'num-btn-pending';
                                badgeLabel = _t('status_pending', 'Enquiry Pending');
                            }
                            
                            const isActive = box.id === defaultBox.id ? 'active' : '';
                            return `
                                <button class="num-btn ${btnClass} ${isActive}" 
                                        data-box-id="${box.id}" 
                                        data-box-name="${box.name}" 
                                        data-box-status="${box.status}" 
                                        data-box-status-text="${badgeLabel}"
                                        data-box-image="${box.image || 'images/Gift Box.jpeg'}"
                                        data-box-desc="${box.desc || 'Individually numbered, hand-sealed cedar chest containing seasonal micro-batch leaves.'}"
                                        data-box-price="${box.price || 150}"
                                        style="aspect-ratio: 1; border-radius: 4px; font-weight: 600; cursor: pointer; transition: var(--transition-smooth); font-size: 1rem; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: var(--color-text-primary);">
                                    ${String(box.id).padStart(2, '0')}
                                </button>
                            `;
                        }).join('')}
                    </div>
                    
                    <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; font-size: 0.8rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 0.35rem;">
                            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #2e7d32;"></span> ${_t('status_available', 'Available')}
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.35rem;">
                            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #ef6c00;"></span> ${_t('status_pending', 'Enquiry Pending')}
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.35rem;">
                            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #555;"></span> ${_t('status_reserved', 'Reserved')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = html;
    },

    // 3. Render Factory Tour Booking Packages & Timeline
    renderTourTimeline(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const slots = window.TeaFactoryStore.getTourSlots();

        const packages = [
            {
                name: "Silver Leaf Tour",
                price: "75.00",
                deposit: "25.00",
                duration: "60 Mins",
                desc: "Guided garden walk, tea harvesting experience, and fresh brew tasting."
            },
            {
                name: "Golden Sommelier Tour",
                price: "150.00",
                deposit: "50.00",
                duration: "75 Mins",
                desc: "Full factory floor access, private heritage room tasting of 5 reserves, and gourmet pairings."
            },
            {
                name: "Imperial Grand Tasting",
                price: "290.00",
                deposit: "100.00",
                duration: "90 Mins",
                desc: "Exclusive private session with the chief tea maker, custom blend workshop, and rare vintage tastings."
            }
        ];

        let html = `
            <div class="tour-header-block">
                <span class="section-tag">${_t('tours_header_tag', 'Exclusive Experiences')}</span>
                <h2 class="view-title">${_t('tours_header_title', 'Heritage Estate Factory Tours')}</h2>
                <p class="view-subtitle">${_t('tours_header_sub', 'Walk through history. Journey through our organic tea plantation, witness the artisan production, and taste the finest estate reserves.')}</p>
            </div>
            
            <h3 class="subsection-title">1. ${_t('tours_header_title', 'Select Your Estate Experience Package')}</h3>
            <div class="packages-grid">
        `;

        html += packages.map(pkg => `
            <div class="package-card" data-package="${pkg.name}" data-deposit="${pkg.deposit}" data-price="${pkg.price}" style="background-image: url('images/luxury_tea_tour.jpg');">
                <div class="package-header">
                    <h4 class="package-name">${pkg.name}</h4>
                    <span class="package-price">${window.TeaFactoryStore.formatCurrency(parseFloat(pkg.price))} <small>/ guest</small></span>
                </div>
                <p class="package-desc">${pkg.desc}</p>
                <div class="package-meta">
                    <span class="meta-item">${SVG_ICONS.clock} ${pkg.duration} ${_t('tour_duration_label', 'Duration')}</span>
                    <span class="meta-item gold-meta">${SVG_ICONS.dollar} ${window.TeaFactoryStore.formatCurrency(parseFloat(pkg.deposit))} ${_t('tour_deposit_card_label', 'Slot Deposit')}</span>
                </div>
            </div>
        `).join('');

        html += `
            </div>

            <h3 class="subsection-title" style="margin-top: 3rem;">2. ${_t('tour_slots_card_label', 'Daily Tour Slots & Availability Timeline')}</h3>
            <div class="timeline-container">
                <div class="timeline-intro">
                    <p>${_t('tours_header_sub', 'Select an hourly booking slot. Tours operate with limited capacity. A refundable seat deposit secures your slot.')}</p>
                    <div class="timeline-legend">
                        <span class="legend-item"><span class="bullet bullet-avail"></span> ${_t('status_available', 'Available')}</span>
                        <span class="legend-item"><span class="bullet bullet-booked"></span> ${_t('status_reserved', 'Reserved')}</span>
                    </div>
                </div>
                <div class="slots-timeline">
        `;

        html += slots.map((slot, idx) => {
            const isBooked = slot.status === 'Booked';
            const alignClass = idx % 2 === 0 ? 'left-aligned' : 'right-aligned';
            const statusBadge = isBooked 
                ? `<span class="slot-status-badge booked">${_t('status_reserved', 'Reserved')}</span>` 
                : `<span class="slot-status-badge available">${_t('status_available', 'Available')}</span>`;

            return `
                <div class="timeline-item ${alignClass}">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.75rem;">
                            <span class="slot-time" style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 600; color: var(--color-white);">${slot.timeSlot}</span>
                            ${statusBadge}
                        </div>
                        <div style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin-top: 0.75rem;">
                            ${isBooked ? `
                                <div style="color: var(--color-text-muted); font-size: 0.85rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                                    <span style="color: var(--color-gold); display: inline-flex; align-items: center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span> Fully Booked &bull; Private Session
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.6rem;">
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">Estate Sommelier Tour</span>
                                    <span class="slot-pkg-badge" style="color: var(--color-gold); font-size: 0.7rem; text-transform: uppercase; font-weight: 600;">${(slot.booking && slot.booking.package) || slot.package || 'Private Tasting'}</span>
                                </div>
                            ` : `
                                <div style="margin-bottom: 1rem;">Available for heritage factory tour &amp; organic gardens tasting.</div>
                                <button class="btn btn-outline btn-book-slot" data-id="${slot.id}" data-timeslot="${slot.timeSlot}" style="width: 100%; text-align: center;">${_t('btn_book_slot', 'Book Slot')}</button>
                            `}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        html += `
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Add package selection triggers
        const cards = container.querySelectorAll('.package-card');
        cards.forEach((card, idx) => {
            if (idx === 1) card.classList.add('selected'); // default selection is Sommelier
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
    },

    // 4. Render Admin Management Dashboard
    renderAdminDashboard(containerId, activeSubTab = 'audits') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const stats = window.TeaFactoryStore.getStats();
        const bookings = window.TeaFactoryStore.getBookings();
        const emailLogs = window.TeaFactoryStore.getEmailLogs();
        const activeSeason = window.TeaFactoryStore.getCurrentSeason();
        const announcements = window.TeaFactoryStore.getAnnouncements();
        const boxes = window.TeaFactoryStore.getBoxes();
        const tourSlots = window.TeaFactoryStore.getTourSlots();
        const galleryImages = window.TeaFactoryStore.getGalleryImages();

        let html = `
            <div class="admin-header-block" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
                <div>
                    <h2 class="view-title">Estate Concierge Operations</h2>
                    <p class="view-subtitle">Manage premium box reservations, seasonal resets, bulletins, and email monitors.</p>
                </div>
                <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
                    <button id="admin-backup-db-btn" class="btn btn-outline" style="border-color: rgba(212,175,55,0.4); color: var(--color-gold); font-size: 0.75rem; padding: 0.5rem 0.85rem; display: inline-flex; align-items: center; gap: 0.35rem;" title="Download full JSON database snapshot">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Backup Database (JSON)
                    </button>
                    <button id="admin-restore-db-trigger-btn" class="btn btn-outline" style="border-color: rgba(255,255,255,0.2); color: var(--color-text-primary); font-size: 0.75rem; padding: 0.5rem 0.85rem; display: inline-flex; align-items: center; gap: 0.35rem;" title="Restore state from JSON backup file">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Restore Backup
                    </button>
                    <input type="file" id="admin-restore-db-file-input" accept=".json,application/json" style="display: none;">
                    <button id="admin-logout-btn" class="btn btn-outline" style="border-color: rgba(255, 255, 255, 0.15); color: var(--color-text-muted); font-size: 0.75rem; padding: 0.5rem 0.85rem;">
                        <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Lock Operations
                    </button>
                </div>
            </div>

            <!-- KPI Metric Summary Grid (Always visible for CRM context) -->
            <div class="admin-stats-grid">
                <div class="admin-stat-card">
                    <span class="stat-label">Total Revenue</span>
                    <span class="stat-value">$${(stats.revenue + stats.tourRevenue).toFixed(2)}</span>
                    <span class="stat-desc">All orders + Tour Deposits</span>
                </div>
                <div class="admin-stat-card">
                    <span class="stat-label">Collector Box Reserves</span>
                    <span class="stat-value">${stats.boxBookingsCount} / ${stats.totalBoxesCount || 10}</span>
                    <span class="stat-desc">Active: ${activeSeason.name}</span>
                </div>
                <div class="admin-stat-card">
                    <span class="stat-label">Product Orders</span>
                    <span class="stat-value">${stats.productBookingsCount || 0}</span>
                    <span class="stat-desc">Standard tea product orders</span>
                </div>
                <div class="admin-stat-card">
                    <span class="stat-label">Tour Bookings</span>
                    <span class="stat-value">${stats.tourBookingsCount}</span>
                    <span class="stat-desc">Factory visit reservations</span>
                </div>
            </div>

            <!-- Sub Navigation Tabs for Admin Console -->
            <div class="admin-tabs" style="display: flex; gap: 0.75rem; margin-bottom: 2.5rem; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 1.25rem; flex-wrap: wrap;">
                <button class="admin-tab-btn ${activeSubTab === 'audits' ? 'active' : ''}" data-subtab="audits" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Active Reservations Log
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'orders' ? 'active' : ''}" data-subtab="orders" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Orders Desk
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'gallery' ? 'active' : ''}" data-subtab="gallery" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> Gallery Desk
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'tours' ? 'active' : ''}" data-subtab="tours" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg> Tour Slots Desk
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'boxes' ? 'active' : ''}" data-subtab="boxes" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg> Gift Boxes Desk
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'seasons' ? 'active' : ''}" data-subtab="seasons" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> Season Transitions
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'inquiries' ? 'active' : ''}" data-subtab="inquiries" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg> Private Reserve Inquiries (${(window.TeaFactoryStore.getInquiries() || []).length})
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'announcements' ? 'active' : ''}" data-subtab="announcements" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Post Announcement
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'products' ? 'active' : ''}" data-subtab="products" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> Products Desk
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'emails' ? 'active' : ''}" data-subtab="emails" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email Dispatch Monitor
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'reviews' ? 'active' : ''}" data-subtab="reviews" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Reviews & Ratings Desk
                </button>
            </div>

            <!-- Tab Content Panels -->
            <div class="admin-tab-content">
        `;

        if (activeSubTab === 'audits') {
            html += `
                <div class="panel-card" style="margin-bottom: 0;">
                    <!-- Panel Header -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <h3 class="panel-title" style="margin-bottom: 0.25rem;">Active Reservation Audit Log</h3>
                            <p class="panel-desc" style="margin-bottom: 0;">Real-time registry of luxury tea chests reserved, standard tins ordered, and scheduled estate tour bookings.</p>
                        </div>
                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                            <span id="audit-count-badge" class="box-badge status-available" style="font-size: 0.75rem;">
                                ${bookings.length} Total Records
                            </span>
                            <button id="btn-export-reservations-csv" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.5rem 1rem; color: var(--color-gold); border-color: rgba(212,175,55,0.3); display: flex; align-items: center; gap: 0.4rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Export CSV
                            </button>
                        </div>
                    </div>

                    <!-- Audit Filter & Search Toolbar -->
                    <div class="audit-toolbar">
                        <div class="audit-toolbar-top">
                            <div class="audit-search-box">
                                <span class="audit-search-icon">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </span>
                                <input type="text" id="audit-search-input" placeholder="Search by Client name, Ref ID, Email, Phone, or Item...">
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
                            <!-- Type Filters -->
                            <div class="audit-filter-chips" id="audit-type-filters">
                                <span style="font-size: 0.7rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px; margin-right: 0.25rem;">Type:</span>
                                <button class="filter-chip active" data-filter-type="all">All</button>
                                <button class="filter-chip" data-filter-type="gift" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="5"></rect><polyline points="20 12 20 22 4 22 4 12"></polyline><line x1="12" y1="22" x2="12" y2="7"></line></svg>
                                    Collector Chests
                                </button>
                                <button class="filter-chip" data-filter-type="product" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                    Products
                                </button>
                                <button class="filter-chip" data-filter-type="tour" style="display:inline-flex; align-items:center; gap:0.35rem;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>
                                    Tours
                                </button>
                            </div>
                            <!-- Status Filters -->
                            <div class="audit-filter-chips" id="audit-status-filters">
                                <span style="font-size: 0.7rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px; margin-right: 0.25rem;">Status:</span>
                                <button class="filter-chip active" data-filter-status="all">All</button>
                                <button class="filter-chip" data-filter-status="Enquiry Pending">Enquiry Pending</button>
                                <button class="filter-chip" data-filter-status="Order Created">Order Created</button>
                                <button class="filter-chip" data-filter-status="Paid & Confirmed">Paid & Confirmed</button>
                                <button class="filter-chip" data-filter-status="Completed">Completed</button>
                                <button class="filter-chip" data-filter-status="Cancelled">Cancelled</button>
                            </div>
                        </div>
                    </div>

                    <!-- Table Container -->
                    <div class="table-responsive">
                        <table class="admin-table" id="audit-table">
                            <thead>
                                <tr>
                                    <th>Ref ID &amp; Date</th>
                                    <th>Client Profile</th>
                                    <th>Category &amp; Item</th>
                                    <th>Schedule / Arrival</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th style="text-align: right;">Concierge Actions</th>
                                </tr>
                            </thead>
                            <tbody id="audit-table-body">
                                ${window.UIComponents.renderAuditTableRows(bookings)}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'orders') {
            const rawOrders = window.TeaFactoryStore.getOrders();
            const rawBookings = window.TeaFactoryStore.getBookings();
            const bookingsWithSlips = rawBookings.filter(b => b.slipImage || b.paymentMethod === 'bank' || b.paymentMethod === 'slip');

            // Merge orders and bookings with slips into a unified transaction list
            const unifiedTransactions = [
                ...rawOrders.map(o => {
                    const linkedBooking = rawBookings.find(b => b.id === o.bookingId);
                    return {
                        id: o.id,
                        type: 'order',
                        category: 'gift',
                        categoryLabel: 'Gift Chest Order',
                        customerName: o.customerName || (linkedBooking ? linkedBooking.customerName : ''),
                        email: o.email || (linkedBooking ? linkedBooking.email : ''),
                        phone: o.phone || (linkedBooking ? linkedBooking.phone : ''),
                        address: o.address || (linkedBooking ? linkedBooking.address : '') || '',
                        country: o.country || (linkedBooking ? linkedBooking.country : '') || '',
                        itemName: o.boxName,
                        itemSub: o.seasonName,
                        amount: o.price,
                        paymentMethod: o.paymentMethod,
                        paymentLink: o.paymentLink,
                        slipImage: o.slipImage,
                        status: o.status,
                        createdAt: o.createdAt,
                        validatedAt: o.validatedAt,
                        validationNote: o.validationNote,
                        ownerNote: o.ownerNote || (linkedBooking ? linkedBooking.message : ''),
                        bookingId: o.bookingId,
                        waxSealColor: o.waxSealColor || (linkedBooking ? linkedBooking.waxSealColor : '') || 'Imperial Gold',
                        monogramInitials: o.monogramInitials || (linkedBooking ? linkedBooking.monogramInitials : '') || '',
                        giftPackaging: o.giftPackaging || (linkedBooking ? linkedBooking.giftPackaging : true)
                    };
                }),
                ...bookingsWithSlips
                    .filter(b => !rawOrders.some(o => o.bookingId === b.id)) // Avoid duplicates
                    .map(b => ({
                        id: b.id,
                        type: 'booking',
                        category: b.type || 'product',
                        categoryLabel: b.type === 'tour' ? 'Tour Slot Deposit' : (b.type === 'product' ? 'Product Bank Order' : 'Collector Chest Order'),
                        customerName: b.customerName,
                        email: b.email,
                        phone: b.phone,
                        address: b.address || '',
                        country: b.country || '',
                        itemName: b.packageName || b.productName || b.boxName,
                        itemSub: b.type === 'tour' ? `Slot: ${b.timeSlot} • ${b.guests || 1} Guests • Date: ${b.tourDate || 'Scheduled'}` : `${b.weight || '100g'} Tin`,
                        amount: b.price || b.depositPaid || 0,
                        paymentMethod: b.paymentMethod || 'bank',
                        slipImage: b.slipImage,
                        status: b.status,
                        createdAt: b.bookingDate,
                        validatedAt: b.validatedAt,
                        validationNote: b.validationNote,
                        ownerNote: b.message || b.dietaryNotes || '',
                        waxSealColor: b.waxSealColor || (b.giftPackaging ? 'Imperial Gold' : ''),
                        monogramInitials: b.monogramInitials || '',
                        giftPackaging: b.giftPackaging || false
                    }))
            ];

            const pendingReviewCount = unifiedTransactions.filter(t => t.status === 'Slip Submitted' || t.status === 'Pending Verification').length;

            html += `
                <div class="panel-card" style="margin-bottom: 2rem;">
                    <!-- Orders Desk Header -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                        <div>
                            <h3 class="panel-title" style="margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.45rem;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                Orders Desk &amp; Bank Slip Validation
                            </h3>
                            <p class="panel-desc" style="margin-bottom: 0;">Universal validation console for all bank deposit slips, payment gateway receipts, and customer orders.</p>
                        </div>
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
                            <span class="box-badge ${pendingReviewCount > 0 ? 'status-pending' : 'status-available'}" style="font-size: 0.75rem;">
                                ${pendingReviewCount} Slip${pendingReviewCount !== 1 ? 's' : ''} Awaiting Review
                            </span>
                            <span class="box-badge status-available" style="font-size: 0.75rem;">
                                ${unifiedTransactions.length} Total Transactions
                            </span>
                            <button id="btn-export-orders-csv" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.5rem 1rem; color: var(--color-gold); border-color: rgba(212,175,55,0.3); display: flex; align-items: center; gap: 0.4rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Export Orders to CSV
                            </button>
                        </div>
                    </div>

                    ${unifiedTransactions.length === 0 ? `
                        <div style="text-align: center; padding: 3.5rem 1.5rem; color: var(--color-text-muted); border: 1px dashed rgba(255,255,255,0.06); border-radius: 8px;">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.5" style="margin-bottom: 1rem;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            <div style="font-size: 1.1rem; font-weight: 600; color: var(--color-white); margin-bottom: 0.5rem;">No Active Orders or Deposit Slips</div>
                            <div style="font-size: 0.85rem; max-width: 500px; margin: 0 auto; line-height: 1.6;">
                                When customers place tour reservations with bank slips, order products with bank receipts, or when you convert inquiries in the <strong>Active Reservations Log</strong>, they will appear here for validation.
                            </div>
                        </div>
                    ` : `
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            ${unifiedTransactions.map(item => {
                                const isSlipPending = (item.status === 'Slip Submitted' || item.status === 'Pending Verification') && item.slipImage;
                                const isConfirmed = item.status === 'Paid & Confirmed' || item.status === 'Completed';
                                const isRejected = item.status === 'Slip Rejected' || item.status === 'Cancelled';
                                const phoneClean = (item.phone || '').replace(/[^0-9+]/g, '');
                                const hasBespoke = item.waxSealColor || item.monogramInitials;

                                return `
                                    <div style="border: 1px solid ${isSlipPending ? 'rgba(212,175,55,0.5)' : isConfirmed ? 'rgba(46,125,50,0.4)' : isRejected ? 'rgba(198,40,40,0.3)' : 'rgba(255,255,255,0.08)'}; border-radius: 10px; padding: 1.5rem; background: ${isSlipPending ? 'rgba(212,175,55,0.025)' : 'rgba(255,255,255,0.02)'}; ${isRejected ? 'opacity: 0.65;' : ''} box-shadow: ${isSlipPending ? '0 4px 20px rgba(212,175,55,0.08)' : 'none'};">
                                        <!-- Card Header -->
                                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.25rem;">
                                             <div>
                                                <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                                                    <span style="font-family: var(--font-mono, monospace); font-size: 0.95rem; color: var(--color-gold); font-weight: 700;">${item.id}</span>
                                                    <span class="type-pill ${item.category === 'tour' ? 'type-tour' : item.category === 'product' ? 'type-product' : 'type-gift'}">
                                                        ${item.categoryLabel}
                                                    </span>
                                                </div>
                                                <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.3rem;">Logged: ${item.createdAt || 'Recent'}</div>
                                            </div>
                                            
                                            <span style="padding: 0.35rem 0.85rem; border-radius: 20px; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.5px;
                                                background: ${isConfirmed ? 'rgba(46,125,50,0.25)' : isSlipPending ? 'rgba(212,175,55,0.2)' : isRejected ? 'rgba(198,40,40,0.2)' : 'rgba(255,255,255,0.08)'};
                                                color: ${isConfirmed ? '#81c784' : isSlipPending ? 'var(--color-gold)' : isRejected ? '#ef5350' : 'var(--color-text-primary)'};
                                                border: 1px solid ${isConfirmed ? 'rgba(46,125,50,0.5)' : isSlipPending ? 'rgba(212,175,55,0.45)' : isRejected ? 'rgba(198,40,40,0.4)' : 'rgba(255,255,255,0.12)'};">
                                                ${item.status}
                                            </span>
                                        </div>

                                        <!-- Details Grid -->
                                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-bottom: 1.25rem; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.06);">
                                             <div>
                                                <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Guest / Customer</div>
                                                <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-white);">${item.customerName}</div>
                                                <div style="font-size: 0.75rem; color: var(--color-text-muted);"><a href="mailto:${item.email}" style="color:var(--color-text-muted); text-decoration:underline;">${item.email}</a></div>
                                                <div style="font-size: 0.75rem; color: var(--color-text-muted);"><a href="https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneClean)}" target="_blank" style="color:#81c784; text-decoration:none; display:inline-flex; align-items:center; gap:0.25rem;"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg> ${item.phone}</a></div>
                                                ${item.address ? `<div style="font-size: 0.72rem; color: #b0bec5; margin-top: 0.25rem;">📍 ${item.address}${item.country ? `, ${item.country}` : ''}</div>` : ''}
                                            </div>

                                            <div>
                                                <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Reserved Particulars</div>
                                                <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-white);">${item.itemName}</div>
                                                <div style="font-size: 0.75rem; color: var(--color-text-muted);">${item.itemSub}</div>
                                            </div>

                                            <div>
                                                <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Transaction Amount</div>
                                                <div style="font-weight: 700; font-size: 1.2rem; color: var(--color-gold);">$${item.amount.toFixed(2)} USD</div>
                                                <div style="font-size: 0.7rem; color: var(--color-text-muted);">Method: ${item.paymentMethod === 'online' ? 'Gateway' : item.paymentMethod === 'slip' ? 'Cash Slip' : 'Bank Transfer'}</div>
                                            </div>
                                        </div>

                                        <!-- Bespoke Artisan Packaging & Engraving Specs Strip -->
                                        ${hasBespoke ? `
                                            <div style="background: rgba(212,175,55,0.06); border: 1px dashed rgba(212,175,55,0.35); border-radius: 6px; padding: 0.65rem 0.95rem; margin-bottom: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.6rem;">
                                                <div style="display: flex; align-items: center; gap: 0.85rem; flex-wrap: wrap; font-size: 0.75rem;">
                                                    <span style="color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 0.3rem;">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                                        Artisan Packaging Specs:
                                                    </span>
                                                    ${item.waxSealColor ? `
                                                        <span style="display: inline-flex; align-items: center; gap: 0.35rem; color: var(--color-white);">
                                                            <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background: ${item.waxSealColor.includes('Emerald') ? '#2e7d32' : item.waxSealColor.includes('Crimson') ? '#8b0000' : item.waxSealColor.includes('Obsidian') ? '#222' : '#d4af37'}; border: 1px solid rgba(255,255,255,0.4);"></span>
                                                            Wax Seal: <strong style="color:var(--color-gold);">${item.waxSealColor}</strong>
                                                        </span>
                                                    ` : ''}
                                                    ${item.monogramInitials ? `
                                                        <span style="color: var(--color-white); display: inline-flex; align-items: center; gap: 0.35rem;">
                                                            Brass Monogram: <span style="background: rgba(212,175,55,0.18); border: 1px solid rgba(212,175,55,0.45); color: var(--color-gold); padding: 0.1rem 0.45rem; border-radius: 3px; font-family: monospace; font-weight: 700; letter-spacing: 1px;">${item.monogramInitials}</span>
                                                        </span>
                                                    ` : ''}
                                                </div>
                                                <button class="btn btn-outline btn-print-packing-slip" data-id="${item.id}" style="font-size: 0.7rem; padding: 0.3rem 0.7rem; color: var(--color-gold); border-color: rgba(212,175,55,0.4); display: inline-flex; align-items: center; gap: 0.3rem;" title="Print Workshop Packaging Slip &amp; Engraving Work Order">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg> Print Packing Slip
                                                </button>
                                            </div>
                                        ` : ''}

                                        <!-- Attached Deposit Slip Verification Section -->
                                        ${item.slipImage ? `
                                            <div style="background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.3); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem;">
                                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                                                    <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                                        Attached Bank Deposit Slip
                                                    </span>
                                                    ${item.validatedAt ? `
                                                        <span style="font-size: 0.7rem; color: #81c784; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Validated on ${item.validatedAt}</span>
                                                    ` : `
                                                        <span style="font-size: 0.7rem; color: var(--color-gold); font-weight: 600;">Awaiting Concierge Verification</span>
                                                    `}
                                                </div>

                                                <div style="display: flex; gap: 1.25rem; align-items: center; flex-wrap: wrap;">
                                                    <img src="${item.slipImage}" alt="Deposit Slip Preview" style="max-width: 240px; max-height: 160px; border-radius: 6px; border: 1px solid rgba(212,175,55,0.4); object-fit: contain; background: #000; cursor: pointer;" onclick="window.open(this.src)" title="Click to view full size" onerror="window.handleImageError && window.handleImageError(this, 'slip')">
                                                    <div style="flex: 1; min-width: 200px;">
                                                        <div style="font-size: 0.8rem; color: var(--color-text-primary); margin-bottom: 0.5rem; line-height: 1.5;">
                                                            Review the bank teller stamp, account number (0083-1001-5271-8843), and deposit amount of <strong>$${item.amount.toFixed(2)} USD</strong>.
                                                        </div>
                                                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                                            <button class="btn btn-outline" style="font-size: 0.7rem; padding: 0.35rem 0.75rem; color: var(--color-gold); border-color: rgba(212,175,55,0.4); display: inline-flex; align-items: center; gap: 0.25rem;" onclick="window.open('${item.slipImage}')">
                                                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                                Open Full Image
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ` : ''}

                                        <!-- Validation & Processing Actions -->
                                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; padding-top: 0.5rem;">
                                            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                                                <button class="btn-copy-order-id" data-order-id="${item.id}" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: var(--color-gold); padding: 0.35rem 0.75rem; font-size: 0.7rem; border-radius: 4px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
                                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                                    Copy Ref ID
                                                </button>
                                                <a href="https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneClean)}" target="_blank" class="btn-outline" style="font-size: 0.7rem; padding: 0.35rem 0.75rem; color: #81c784; border: 1px solid rgba(46,125,50,0.4); text-decoration: none; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.3rem;">
                                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                                                    WhatsApp Guest
                                                </a>
                                                <button class="btn btn-outline btn-print-packing-slip" data-id="${item.id}" style="font-size: 0.7rem; padding: 0.35rem 0.75rem; color: var(--color-gold); border-color: rgba(212,175,55,0.4); display: inline-flex; align-items: center; gap: 0.3rem;" title="Print Workshop Packaging Slip &amp; Engraving Work Order">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg> Print Packing Slip
                                                </button>
                                            </div>

                                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                                ${!isConfirmed ? `
                                                    <button class="admin-action-btn btn-act-verify btn-approve-slip" data-id="${item.id}" style="padding: 0.5rem 1rem; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 0.35rem;">
                                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Approve &amp; Confirm Payment
                                                    </button>
                                                    <button class="admin-action-btn btn-act-cancel btn-reject-slip" data-id="${item.id}" style="padding: 0.5rem 0.9rem; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 0.35rem;">
                                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                        Reject Slip
                                                    </button>
                                                ` : `
                                                    <span style="font-size: 0.75rem; color: #81c784; font-weight: 700; display: inline-flex; align-items: center; gap: 0.3rem;">
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Payment Verified &amp; Confirmed
                                                    </span>
                                                `}
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `}
                </div>
            `;
        } else if (activeSubTab === 'gallery') {
            html += `
                <div class="admin-columns">
                    <!-- Active Gallery Photos Card -->
                    <div class="panel-card" style="margin-bottom: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h3 class="panel-title" style="margin-bottom: 0.25rem;">Active Gallery Photos</h3>
                                <p class="panel-desc" style="margin-bottom: 0;">Manage photographs displayed on the public Visual Heritage Gallery.</p>
                            </div>
                            <span class="box-badge status-available" style="font-size: 0.75rem;">${galleryImages.length} Photographs</span>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; max-height: 580px; overflow-y: auto; padding-right: 0.5rem;">
                            ${galleryImages.length === 0 ? `
                                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #888;">No gallery photos uploaded yet.</div>
                            ` : galleryImages.map((img, idx) => `
                                <div style="position: relative; border-radius: 6px; overflow: hidden; border: 1px solid rgba(212,175,55,0.25); background: rgba(0,0,0,0.5);">
                                    <img src="${img.src}" alt="${img.caption || 'Gallery Image'}" style="width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block;" loading="lazy" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                                    <div style="padding: 0.6rem 0.75rem; background: rgba(4,10,6,0.95); border-top: 1px solid rgba(255,255,255,0.06);">
                                        <div style="font-size: 0.75rem; font-weight: 600; color: var(--color-white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${img.caption || ''}">${img.caption || `Photo #${idx + 1}`}</div>
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.4rem;">
                                            <span style="font-size: 0.65rem; color: var(--color-gold);">${img.tag || 'Estate'}</span>
                                            <button class="btn-delete-gallery-img" data-id="${img.id}" data-caption="${img.caption || 'this photo'}" style="background: rgba(255,94,94,0.15); border: 1px solid rgba(255,94,94,0.4); color: #ff5e5e; padding: 0.2rem 0.45rem; font-size: 0.65rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.2rem;" title="Delete photo from gallery">
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Upload New Gallery Photo Form Card -->
                    <div class="panel-card" style="margin-bottom: 0;">
                        <h3 class="panel-title">Upload New Gallery Photo</h3>
                        <p class="panel-desc">Add a high-resolution photograph to the live estate gallery.</p>
                        
                        <form id="admin-add-gallery-form" class="admin-form" style="gap: 1.25rem;">
                            <div class="form-group">
                                <label class="form-label">Attach Photo *</label>
                                <div class="file-upload-zone" id="gallery-image-zone">
                                    <div class="file-upload-icon">&#x1F4F7;</div>
                                    <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse photo</span></div>
                                    <div class="file-upload-hint">JPG or PNG &mdash; Max 5MB</div>
                                    <input type="file" id="gallery-image-file" accept="image/*" style="display:none;">
                                </div>
                                <div id="gallery-image-preview" class="slip-preview" style="display:none;"></div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="gallery-caption-input">Photo Caption / Title *</label>
                                <input class="form-input" type="text" id="gallery-caption-input" required placeholder="e.g. Dawn Plucking on High-Altitude Forest Slopes">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="gallery-tag-input">Photo Category / Tag *</label>
                                <select class="form-input" id="gallery-tag-input" required>
                                    <option value="Estate & Harvest">Estate &amp; Harvest</option>
                                    <option value="Factory & Production">Factory &amp; Production</option>
                                    <option value="Packaging & Reserves">Packaging &amp; Reserves</option>
                                    <option value="Tours & Hospitality">Tours &amp; Hospitality</option>
                                </select>
                            </div>
                            
                            <button type="submit" id="btn-save-gallery-img" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%;">
                                Publish to Gallery
                            </button>
                        </form>
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'tours') {
            html += `
                <div class="admin-columns">
                    <!-- Active Tour Slots Table Card -->
                    <div class="panel-card" style="margin-bottom: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h3 class="panel-title" style="margin-bottom: 0.25rem;">Active Tour Time Slots</h3>
                                <p class="panel-desc" style="margin-bottom: 0;">Manage daily factory visit schedule, assigned experiences, and availability.</p>
                            </div>
                            <span class="box-badge status-available" style="font-size: 0.75rem;">${tourSlots.filter(s => s.status === 'Available').length} Available</span>
                        </div>
                        
                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Time Slot Range</th>
                                        <th>Assigned Package</th>
                                        <th>Status</th>
                                        <th>Booked Guest</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${tourSlots.length === 0 ? `
                                        <tr><td colspan="6" class="text-center" style="padding: 2.5rem; color: #888;">No tour time slots configured. Add your first time slot below.</td></tr>
                                    ` : tourSlots.map(slot => `
                                        <tr>
                                            <td class="font-mono text-gold font-bold">#${String(slot.id).padStart(2, '0')}</td>
                                            <td><strong style="color:var(--color-white); font-family:var(--font-serif);">${slot.timeSlot}</strong></td>
                                            <td><span style="font-size:0.8rem; color:var(--color-gold); font-weight:600;">${slot.package || 'Silver Leaf Tour'}</span></td>
                                            <td>
                                                <span class="box-badge ${slot.status === 'Available' ? 'status-available' : 'status-booked'}" style="font-size: 0.65rem;">
                                                    ${slot.status}
                                                </span>
                                            </td>
                                            <td>
                                                ${slot.booking ? `
                                                    <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 600;">${slot.booking.customerName || slot.booking.name || 'Guest'}</div>
                                                    <small style="color: var(--color-text-muted);">${slot.booking.guests || 1} Guests &bull; ${slot.booking.package || slot.package}</small>
                                                ` : `<span style="font-size: 0.75rem; color: var(--color-text-muted);">No Bookings</span>`}
                                            </td>
                                            <td>
                                                <div style="display: flex; gap: 0.4rem; align-items: center;">
                                                    <button class="btn-edit-slot" 
                                                            data-id="${slot.id}" 
                                                            data-timeslot="${slot.timeSlot}" 
                                                            data-package="${slot.package || 'Silver Leaf Tour'}" 
                                                            data-status="${slot.status}" 
                                                            style="background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.4); color: var(--color-gold); padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" 
                                                            title="Edit Time Slot">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        Edit
                                                    </button>
                                                    ${slot.status === 'Booked' ? `
                                                        <button class="btn-reset-slot" data-id="${slot.id}" style="background: rgba(46,125,50,0.15); border: 1px solid rgba(46,125,50,0.3); color: #81c784; padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" title="Free slot for new bookings">
                                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                                                            Free Slot
                                                        </button>
                                                    ` : ''}
                                                    <button class="btn-delete-slot" data-id="${slot.id}" style="background: transparent; border: 1px solid rgba(255,94,94,0.3); color: #ff5e5e; padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" title="Delete Time Slot">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- Add / Edit Tour Slot Form -->
                    <div class="panel-card admin-form-card" style="margin-bottom: 0;">
                        <div class="admin-card-header" style="border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 1rem; margin-bottom: 1.5rem;">
                            <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); margin-bottom: 0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>
                                <span>HOSPITALITY SCHEDULE</span>
                            </div>
                            <h3 class="panel-title" id="tour-slot-form-title" style="margin-bottom: 0.25rem; font-size: 1.35rem;">Introduce New Tour Time Slot</h3>
                            <p class="panel-desc" id="tour-slot-form-desc" style="margin-bottom: 0; font-size: 0.8rem; color: var(--color-text-muted);">Schedule a new visit time window in the factory timeline.</p>
                        </div>
                        
                        <form id="admin-add-slot-form" class="admin-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <input type="hidden" id="slot-edit-id" value="">
                            
                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" for="slot-time-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Time Slot Range *</label>
                                <input class="form-input" type="text" id="slot-time-input" required placeholder="e.g. 05:30 PM - 06:30 PM" value="">
                                <span class="field-hint" style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.2rem; display: block;">Format: HH:MM AM/PM - HH:MM AM/PM (e.g. 09:00 AM - 10:00 AM)</span>
                            </div>
                            
                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" for="slot-package-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Default Experience Package *</label>
                                <select class="form-input" id="slot-package-input" required>
                                    <option value="Silver Leaf Tour">Silver Leaf Tour ($75 / $25 Deposit)</option>
                                    <option value="Golden Sommelier Tour">Golden Sommelier Tour ($150 / $50 Deposit)</option>
                                    <option value="Imperial Grand Tasting">Imperial Grand Tasting ($290 / $100 Deposit)</option>
                                </select>
                            </div>

                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" for="slot-status-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Slot Availability Status *</label>
                                <select class="form-input" id="slot-status-input" required>
                                    <option value="Available">Available (Open for booking)</option>
                                    <option value="Booked">Booked (Reserved)</option>
                                </select>
                            </div>
                            
                            <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem;">
                                <button type="submit" id="btn-save-slot" class="btn btn-primary" style="flex: 1; padding: 0.85rem 1.5rem; font-size: 0.88rem; display: flex; align-items: center; justify-content: center; gap: 0.45rem;">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                    <span>Save Tour Slot</span>
                                </button>
                                <button type="button" id="btn-cancel-edit-slot" class="btn btn-outline" style="display: none; border-color: rgba(255,255,255,0.25); color: var(--color-text-muted); padding: 0.85rem 1.25rem; font-size: 0.85rem;">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'boxes') {
            html += `
                <div class="admin-columns">
                    <!-- Active Gift Boxes Table Card -->
                    <div class="panel-card" style="margin-bottom: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h3 class="panel-title" style="margin-bottom: 0.25rem;">Active Collector Gift Boxes</h3>
                                <p class="panel-desc" style="margin-bottom: 0;">Series ${activeSeason.seriesNumber}: ${activeSeason.name} (${boxes.length} Boxes in Collection)</p>
                            </div>
                            <span class="box-badge status-available" style="font-size: 0.75rem;">${boxes.filter(b => b.status === 'Available').length} Available</span>
                        </div>
                        
                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Box #</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${boxes.length === 0 ? `
                                        <tr><td colspan="6" class="text-center" style="padding: 2.5rem; color: #888;">No gift boxes configured in this series.</td></tr>
                                    ` : boxes.map(box => `
                                        <tr>
                                            <td>
                                                <img src="${box.image || 'images/Gift%20Box.jpeg'}" alt="${box.name}" style="width: 44px; height: 44px; object-fit: contain; border-radius: 4px; border: 1px solid rgba(212,175,55,0.3); background: rgba(0,0,0,0.4); display: block;" onerror="window.handleImageError && window.handleImageError(this, 'box')">
                                            </td>
                                            <td class="font-mono text-gold font-bold" style="font-size: 1.1rem;">#${String(box.id).padStart(2, '0')}</td>
                                            <td>
                                                <strong>${box.name}</strong>
                                                ${box.booking ? `<br><small style="color:var(--color-gold);">Client: ${box.booking.customerName}</small>` : ''}
                                            </td>
                                            <td style="color:var(--color-gold); font-weight: 600;">$${(box.price || activeSeason.pricePerBox || 150).toFixed(2)}</td>
                                            <td>
                                                <span class="box-badge ${box.status === 'Available' ? 'status-available' : (box.status === 'Booked' ? 'status-booked' : 'status-pending')}" style="font-size: 0.65rem;">
                                                    ${box.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div style="display: flex; gap: 0.4rem; align-items: center;">
                                                    <button class="btn-edit-box" data-id="${box.id}" data-name="${box.name}" data-price="${box.price || activeSeason.pricePerBox || 150}" data-status="${box.status}" data-desc="${box.desc || ''}" data-image="${box.image || 'images/Gift Box.jpeg'}" style="background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.4); color: var(--color-gold); padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" title="Edit Gift Box">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        Edit
                                                    </button>
                                                    <button class="btn-delete-box" data-id="${box.id}" data-name="${box.name}" style="background: transparent; border: 1px solid rgba(255,94,94,0.3); color: #ff5e5e; padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" title="Delete Gift Box">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <!-- Add / Edit Gift Box Form -->
                    <div class="panel-card admin-form-card" style="margin-bottom: 0;">
                        <div class="admin-card-header" style="border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 1rem; margin-bottom: 1.5rem;">
                            <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); margin-bottom: 0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
                                <span>COLLECTION INVENTORY</span>
                            </div>
                            <h3 class="panel-title" id="giftbox-form-title" style="margin-bottom: 0.25rem; font-size: 1.35rem;">Introduce New Gift Box</h3>
                            <p class="panel-desc" id="giftbox-form-desc" style="margin-bottom: 0; font-size: 0.8rem; color: var(--color-text-muted);">Add a numbered luxury cedar chest to the current active series.</p>
                        </div>
                        
                        <form id="admin-add-box-form" class="admin-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <input type="hidden" id="box-edit-id" value="">
                            
                            <!-- Row 1: Box # and Box Display Name -->
                            <div class="form-row" style="display: grid; grid-template-columns: 110px 1fr; gap: 1rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="box-num-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); min-height: 1.2rem; display: flex; align-items: center;">Box ID *</label>
                                    <input class="form-input" type="number" id="box-num-input" required min="1" placeholder="e.g. ${boxes.length + 1}" value="${boxes.length + 1}" style="font-family: monospace; font-weight: 700; text-align: center;">
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="box-name-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); min-height: 1.2rem; display: flex; align-items: center;">Box Display Name *</label>
                                    <input class="form-input" type="text" id="box-name-input" required placeholder="e.g. Gift Box #${String(boxes.length + 1).padStart(2, '0')}" value="Gift Box #${String(boxes.length + 1).padStart(2, '0')}">
                                </div>
                            </div>
                            
                            <!-- Row 2: Price and Status -->
                            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="box-price-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); min-height: 1.2rem; display: flex; align-items: center;">Price ($ USD) *</label>
                                    <input class="form-input" type="number" step="0.01" id="box-price-input" required value="${(activeSeason.pricePerBox || 150.00).toFixed(2)}" style="font-weight: 600;">
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="box-status-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); min-height: 1.2rem; display: flex; align-items: center;">Availability Status *</label>
                                    <select class="form-input" id="box-status-input" required>
                                        <option value="Available">Available (Open)</option>
                                        <option value="Enquiry Pending">Enquiry Pending</option>
                                        <option value="Booked">Booked (Reserved)</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Row 3: Image Upload Zone -->
                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Attach Gift Box Image</label>
                                <div class="file-upload-zone" id="box-image-zone" style="padding: 1.25rem 1rem; border-radius: 10px;">
                                    <div class="file-upload-icon" style="font-size: 1.4rem; margin-bottom: 0.35rem;">📷</div>
                                    <div class="file-upload-text" style="font-size: 0.8rem;">Drag &amp; drop or <span class="file-upload-link">browse image</span></div>
                                    <div class="file-upload-hint" style="font-size: 0.7rem; margin-top: 0.25rem; color: var(--color-text-muted);">JPG or PNG &mdash; Max 5MB (Defaults to luxury cedar chest)</div>
                                    <input type="file" id="box-image-file" accept="image/*" style="display:none;">
                                </div>
                                <div id="box-image-preview" class="slip-preview" style="display:none; margin-top: 0.5rem;"></div>
                            </div>

                            <!-- Row 4: Description Textarea -->
                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" for="box-desc-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Description / Micro-batch Details</label>
                                <textarea class="form-input" id="box-desc-input" rows="3" placeholder="Individually numbered, hand-sealed cedar chest containing seasonal micro-batch leaves." style="resize: vertical; line-height: 1.5;">Individually numbered, hand-sealed cedar chest containing seasonal micro-batch leaves.</textarea>
                            </div>
                            
                            <!-- Row 5: Action Buttons -->
                            <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem;">
                                <button type="submit" id="btn-save-box" class="btn btn-primary" style="flex: 1; padding: 0.85rem 1.5rem; font-size: 0.88rem; display: flex; align-items: center; justify-content: center; gap: 0.45rem;">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                    <span>Save Gift Box</span>
                                </button>
                                <button type="button" id="btn-cancel-edit-box" class="btn btn-outline" style="display: none; border-color: rgba(255,255,255,0.25); color: var(--color-text-muted); padding: 0.85rem 1.25rem; font-size: 0.85rem;">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'seasons') {
            html += `
                <div class="panel-card" style="max-width: 600px; margin: 0 auto;">
                    <h3 class="panel-title">Seasonal Reset &amp; Transitions</h3>
                    <p class="panel-desc">Configure the new catalog harvest series, apply bulk starting prices across gift boxes, or reset reservations.</p>
                    
                    <form id="season-reset-form" class="admin-form">
                        <div class="form-group">
                            <label for="new-season-name">New Season / Series Name</label>
                            <input type="text" id="new-season-name" placeholder="e.g. Celestial Autumn Pearl" required>
                            <span class="field-hint">e.g., Celestial Autumn Pearl, Golden Leaf Selection, Imperial Jasmine Blossom</span>
                        </div>
                        <div class="form-group">
                            <label for="new-box-price">Default Batch Box Price (USD) <small style="color: var(--color-gold); font-weight: normal;">&mdash; Bulk Shortcut</small></label>
                            <input type="number" id="new-box-price" value="150.00" min="10" step="0.01" required>
                            <span class="field-hint">Sets this starting price across all gift boxes in the new series. Individual box prices can still be customized in the Gift Boxes Desk anytime.</span>
                        </div>
                        <button type="submit" class="btn btn-primary w-full">Trigger Season Transition</button>
                    </form>

                    <div class="reset-actions" style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.06)">
                        <button id="admin-reset-tours-btn" class="btn btn-outline w-full" style="color: #ff5e5e; border-color: rgba(255,94,94,0.3)">
                            Reset Estate Tour Slots
                        </button>
                        <button id="admin-force-reset-btn" class="btn btn-outline w-full" style="color: #ff9800; border-color: rgba(255,152,0,0.3); margin-top: 1rem;">
                            Force Reset System Data to Defaults
                        </button>
                    </div>
                </div>

                <!-- Dedicated Database Backup & Disaster Recovery Card -->
                <div class="panel-card" style="max-width: 600px; margin: 2rem auto 0 auto; background: rgba(212,175,55,0.03); border: 1px solid rgba(212,175,55,0.25);">
                    <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        <h3 class="panel-title" style="margin-bottom: 0; color: var(--color-gold);">Database Backup &amp; Disaster Recovery</h3>
                    </div>
                    <p class="panel-desc">All estate catalog configurations, orders, reservations, and tour schedules reside in browser storage. Download periodic snapshot backups to safeguard against accidental browser data clearing or device migration.</p>

                    <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem;">
                        <button id="admin-backup-db-panel-btn" class="btn btn-primary w-full" style="display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Backup Estate Database (JSON)
                        </button>
                        <button id="admin-restore-db-panel-btn" class="btn btn-outline w-full" style="display: flex; justify-content: center; align-items: center; gap: 0.5rem; border-color: rgba(212,175,55,0.4); color: var(--color-gold);">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            Restore Database from Backup File
                        </button>
                        <div style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.5; background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06);">
                            <strong style="color: var(--color-white);">Backup Integrity Assurance:</strong> Backups include all catalog items, custom gift box editions, customer reservations, tour slot schedules, published bulletins, photo galleries, and audit logs.
                        </div>
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'announcements') {
            html += `
                <div class="panel-card" style="max-width: 600px; margin: 0 auto;">
                    <h3 class="panel-title">Create Announcement or Event</h3>
                    <p class="panel-desc">Post a bulletin detailing estate harvest notes, updates, or private tasting invitations.</p>
                    
                    <form id="announcement-form" class="admin-form">
                        <div class="form-group">
                            <label for="ann-title-input">Bulletin Title</label>
                            <input type="text" id="ann-title-input" placeholder="e.g. Organic Jasmine Reserve Launch" required>
                        </div>
                        <div class="form-group">
                            <label for="ann-tag-input">Tag</label>
                            <select id="ann-tag-input">
                                <option value="New Release">New Release</option>
                                <option value="Event">Event</option>
                                <option value="Announcement">Announcement</option>
                                <option value="Harvest Update">Harvest Update</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="ann-content-input">Message Details</label>
                            <textarea id="ann-content-input" rows="3" placeholder="Enter bulletin details here..." required></textarea>
                        </div>
                        <div class="form-group inline-checkbox">
                            <input type="checkbox" id="ann-premium-input">
                            <label for="ann-premium-input">Mark as Premium Collector Exclusive</label>
                        </div>
                        <div class="form-group">
                            <label>Attach Feature Image</label>
                            <div class="file-upload-zone" id="ann-image-zone">
                                <div class="file-upload-icon">&#x1F4F7;</div>
                                <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse image</span></div>
                                <div class="file-upload-hint">JPG or PNG &mdash; Max 5MB</div>
                                <input type="file" id="ann-image-file" accept="image/*" style="display:none;">
                            </div>
                            <div id="ann-image-preview" class="slip-preview" style="display:none;"></div>
                        </div>
                        <button type="submit" class="btn btn-outline w-full">Publish Announcement</button>
                    </form>

                    <!-- Existing Announcements List -->
                    <div class="existing-announcements" style="margin-top: 3rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 2rem;">
                        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--color-white); margin-bottom: 1.5rem;">Manage Published Bulletins</h4>
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            ${announcements.map(ann => `
                                <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.02); padding: 1rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.04);">
                                    <div>
                                        <div style="font-weight: 500; color: var(--color-white); font-size: 0.85rem;">${ann.title}</div>
                                        <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.2rem;">${ann.date} | Tag: <span style="color: var(--color-gold);">${ann.tag}</span></div>
                                    </div>
                                    <button class="btn-delete-ann" data-id="${ann.id}" style="background: transparent; border: 1px solid rgba(255,94,94,0.3); color: #ff5e5e; padding: 0.35rem 0.75rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth);">Delete</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'emails') {
            html += `
                <div class="panel-card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <h3 class="panel-title" style="margin-bottom: 0;">Automated Email Dispatch Monitor</h3>
                            <p class="panel-desc" style="margin-bottom: 0;">Real-time terminal view verifying system notification emails sent automatically to customers.</p>
                        </div>
                        <button id="btn-export-csv" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.5rem 1rem; color: var(--color-gold); border-color: rgba(212,175,55,0.3); display: inline-flex; align-items: center; gap: 0.35rem;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Export Logs (CSV)
                        </button>
                    </div>
                    <div class="email-monitor-log font-mono">
                        ${emailLogs.length === 0 ? `
                            <div class="log-entry empty">No emails sent in this session. Book a gift box to trigger.</div>
                        ` : emailLogs.map(log => `
                            <div class="log-entry">
                                <div class="log-meta">
                                    <span class="log-time">[${log.timestamp}]</span>
                                    <span class="log-recipient">To: ${log.to}</span>
                                </div>
                                <div class="log-subject">Subj: ${log.subject}</div>
                                <pre class="log-body">${log.body}</pre>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'products') {
            const products = window.TeaFactoryStore.getProducts();
            html += `
                <div class="admin-columns">
                    <div class="panel-card" style="margin-bottom: 0;">
                        <h3 class="panel-title">Active Products List</h3>
                        <p class="panel-desc">Manage standard tea products displayed in the Product Catalog.</p>
                        
                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name & Grade</th>
                                        <th>Category</th>
                                        <th>Weight</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${products.map(prod => `
                                        <tr>
                                            <td>
                                                <img src="${prod.image || 'images/Product.jpeg'}" alt="${prod.name}" style="width: 44px; height: 44px; object-fit: contain; border-radius: 4px; border: 1px solid rgba(212,175,55,0.3); background: rgba(0,0,0,0.4); display: block;" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                                            </td>
                                            <td><strong>${prod.name}</strong><br><small style="color:var(--color-text-muted);">${prod.leafGrade}</small></td>
                                            <td>${prod.category}</td>
                                            <td>${prod.weight}</td>
                                            <td style="color:var(--color-gold); font-weight: 600;">$${prod.price.toFixed(2)}</td>
                                            <td>
                                                <span class="box-badge ${prod.stock === 'In Stock' ? 'status-available' : 'status-pending'}" style="font-size: 0.65rem;">
                                                    ${prod.stock}
                                                </span>
                                            </td>
                                            <td style="white-space: nowrap;">
                                                <div style="display: flex; gap: 0.4rem; align-items: center;">
                                                    <button class="btn-edit-prod" 
                                                            data-id="${prod.id}" 
                                                            data-name="${prod.name}" 
                                                            data-category="${prod.category}" 
                                                            data-price="${prod.price}" 
                                                            data-weight="${prod.weight}" 
                                                            data-symbol="${prod.symbol || ''}" 
                                                            data-stock="${prod.stock}" 
                                                            data-desc="${prod.desc || ''}" 
                                                            data-grade="${prod.leafGrade || ''}" 
                                                            data-temp="${prod.steepTemp || ''}" 
                                                            data-time="${prod.steepTime || ''}" 
                                                            data-image="${prod.image || 'images/Product.jpeg'}" 
                                                            style="background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.4); color: var(--color-gold); padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" 
                                                            title="Edit Product">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        Edit
                                                    </button>
                                                    <button class="btn-delete-prod" data-id="${prod.id}" data-name="${prod.name}" style="background: transparent; border: 1px solid rgba(255,94,94,0.3); color: #ff5e5e; padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" title="Delete product">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="panel-card admin-form-card" style="margin-bottom: 0;">
                        <div class="admin-card-header" style="border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 1rem; margin-bottom: 1.5rem;">
                            <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); margin-bottom: 0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <span>STOREFRONT CATALOG</span>
                            </div>
                            <h3 class="panel-title" id="prod-form-title" style="margin-bottom: 0.25rem; font-size: 1.35rem;">Introduce New Product</h3>
                            <p class="panel-desc" id="prod-form-desc" style="margin-bottom: 0; font-size: 0.8rem; color: var(--color-text-muted);">Add a new standard tea product to the customer storefront.</p>
                        </div>
                        
                        <form id="admin-add-product-form" class="admin-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <input type="hidden" id="prod-edit-id" value="">
                            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-name" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Product Name *</label>
                                    <input class="form-input" type="text" id="prod-name" required placeholder="e.g. Royal Earl Grey">
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-category" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Category *</label>
                                    <select class="form-input" id="prod-category" required>
                                        <option value="Black Tea">Black Tea</option>
                                        <option value="Green & White Tea">Green & White Tea</option>
                                        <option value="Oolongs">Oolongs</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-price" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Price ($ USD) *</label>
                                    <input class="form-input" type="number" step="0.01" id="prod-price" required placeholder="45.00" style="font-weight: 600;">
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-weight" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Weight (e.g. 100g) *</label>
                                    <input class="form-input" type="text" id="prod-weight" required placeholder="100g">
                                </div>
                            </div>

                            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-symbol" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Icon / Symbol</label>
                                    <select class="form-input" id="prod-symbol">
                                        <option value="">Standard Monogram</option>
                                        <option value="Black Tea">Black Tea Reserve</option>
                                        <option value="Green Tea">Green Tea Reserve</option>
                                        <option value="White Tea">White Tea Reserve</option>
                                        <option value="Oolong Tea">Oolong Tea Reserve</option>
                                    </select>
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-stock" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Stock Status *</label>
                                    <select class="form-input" id="prod-stock" required>
                                        <option value="In Stock">In Stock</option>
                                        <option value="Low Stock">Low Stock</option>
                                        <option value="Rare Reserve">Rare Reserve</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Attach Product Image</label>
                                <div class="file-upload-zone" id="prod-image-zone" style="padding: 1.25rem 1rem; border-radius: 10px;">
                                    <div class="file-upload-icon" style="font-size: 1.4rem; margin-bottom: 0.35rem;">📷</div>
                                    <div class="file-upload-text" style="font-size: 0.8rem;">Drag &amp; drop or <span class="file-upload-link">browse image</span></div>
                                    <div class="file-upload-hint" style="font-size: 0.7rem; margin-top: 0.25rem; color: var(--color-text-muted);">JPG or PNG &mdash; Max 5MB (Defaults to standard luxury tin)</div>
                                    <input type="file" id="prod-image-file" accept="image/*" style="display:none;">
                                </div>
                                <div id="prod-image-preview" class="slip-preview" style="display:none; margin-top: 0.5rem;"></div>
                            </div>

                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" for="prod-desc" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Short Description *</label>
                                <textarea class="form-input" id="prod-desc" required rows="3" placeholder="Describe the character, harvest details, and brewing experience..." style="resize: vertical; line-height: 1.5;"></textarea>
                            </div>

                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" for="prod-grade" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Leaf Grade</label>
                                <input class="form-input" type="text" id="prod-grade" placeholder="e.g. Finest Tippy Flowery Orange Pekoe">
                            </div>

                            <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-temp" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Steep Temp</label>
                                    <input class="form-input" type="text" id="prod-temp" placeholder="e.g. 95°C (203°F)">
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="prod-time" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Steep Time</label>
                                    <input class="form-input" type="text" id="prod-time" placeholder="e.g. 3-5 Minutes">
                                </div>
                            </div>
                            
                            <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem;">
                                <button type="submit" id="btn-save-prod" class="btn btn-primary" style="flex: 1; padding: 0.85rem 1.5rem; font-size: 0.88rem; display: flex; align-items: center; justify-content: center; gap: 0.45rem;">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                    <span>Publish Product</span>
                                </button>
                                <button type="button" id="btn-cancel-edit-prod" class="btn btn-outline" style="display: none; border-color: rgba(255,255,255,0.25); color: var(--color-text-muted); padding: 0.85rem 1.25rem; font-size: 0.85rem;">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        }

        if (activeSubTab === 'reviews') {
            const allReviews = window.TeaFactoryStore ? window.TeaFactoryStore.getReviews() : [];
            const reviewStats = window.TeaFactoryStore ? window.TeaFactoryStore.getReviewStats() : { average: 5.0, count: 5 };

            html += `
                <div class="panel-card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <h3 class="panel-title" style="margin-bottom: 0.25rem;">Customer Reviews & Ratings Management</h3>
                            <p class="panel-desc" style="margin-bottom: 0;">Review feedback and ratings submitted by connoisseurs, sommeliers, and estate tour guests.</p>
                        </div>
                        <div style="display: flex; gap: 1rem; align-items: center;">
                            <div style="background: rgba(4, 14, 8, 0.7); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 8px; padding: 0.45rem 1rem; font-size: 0.85rem; color: var(--color-gold);">
                                Average Score: <strong>${reviewStats.average} / 5.0</strong> (${reviewStats.count} Total)
                            </div>
                        </div>
                    </div>

                    <div class="admin-table-container">
                        <table class="admin-table">
                            <thead>
                                <tr>
                                    <th>Rating</th>
                                    <th>Customer & Location</th>
                                    <th>Experience Type</th>
                                    <th>Tasting Notes / Feedback</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${allReviews.map(r => `
                                    <tr>
                                        <td>
                                            <span style="color: var(--color-gold); font-size: 0.95rem; letter-spacing: 1px;">
                                                ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                                            </span>
                                        </td>
                                        <td>
                                            <strong>${r.name}</strong><br>
                                            <small style="color: var(--color-text-muted);">${r.title ? r.title + ' • ' : ''}${r.location}</small>
                                        </td>
                                        <td>
                                            <span class="box-badge status-available" style="font-size: 0.7rem;">
                                                ${r.experienceType || 'Estate Experience'}
                                            </span>
                                        </td>
                                        <td style="max-width: 320px; font-size: 0.82rem; line-height: 1.5; color: #f1f5f9;">
                                            "${r.comment}"
                                        </td>
                                        <td style="font-size: 0.75rem; color: var(--color-text-muted); white-space: nowrap;">
                                            ${r.date}
                                        </td>
                                        <td>
                                            <button class="btn btn-outline btn-delete-review" data-id="${r.id}" style="padding: 0.3rem 0.65rem; font-size: 0.7rem; color: #ef4444; border-color: rgba(239,68,68,0.3);">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        if (activeSubTab === 'inquiries') {
            const inquiries = window.TeaFactoryStore ? window.TeaFactoryStore.getInquiries() : [];

            html += `
                <div class="panel-card" style="margin-bottom: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <h3 class="panel-title" style="margin-bottom: 0.25rem;">Private Reserve Allocation Inquiries Ledger</h3>
                            <p class="panel-desc" style="margin-bottom: 0;">Review incoming VIP patron applications, volume allocation requests, and dispatch email/WhatsApp responses.</p>
                        </div>
                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                            <span class="box-badge status-available" style="font-size: 0.75rem;">
                                ${inquiries.length} Total Applications
                            </span>
                        </div>
                    </div>

                    <div class="admin-table-container">
                        <table class="admin-table">
                            <thead>
                                <tr>
                                    <th>Dossier Ref</th>
                                    <th>Patron &amp; Organization</th>
                                    <th>Contact Desk</th>
                                    <th>Allocation Tier</th>
                                    <th>Harvest Interests</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${inquiries.length === 0 ? `
                                    <tr>
                                        <td colspan="7" style="text-align: center; color: var(--color-text-muted); padding: 2.5rem;">
                                            No inquiries recorded yet. Applications submitted from the website will appear here in real-time.
                                        </td>
                                    </tr>
                                ` : inquiries.map(inq => {
                                    const waNumber = (inq.phone || '').replace(/[^0-9]/g, '');
                                    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hello ${inq.fullName}, this is the Master Tea Concierge from Rock One Wild Tea Estate regarding your Private Reserve Inquiry dossier [${inq.id}].`)}`;
                                    const mailtoLink = `mailto:${inq.email}?subject=${encodeURIComponent(`Private Reserve Allocation Inquiry [${inq.id}] - Rock One Wild Tea`)}&body=${encodeURIComponent(`Dear ${inq.fullName},\n\nThank you for applying to the Rock One Wild Tea Private Reserve Club [Dossier ${inq.id}].\n\n`)}`;

                                    return `
                                        <tr data-inq-id="${inq.id}">
                                            <td>
                                                <strong style="color: var(--color-gold); font-family: monospace; font-size: 0.88rem;">${inq.id}</strong><br>
                                                <small style="color: var(--color-text-muted);">${inq.date}</small>
                                            </td>
                                            <td>
                                                <strong style="color: var(--color-white); font-size: 0.9rem;">${inq.fullName}</strong><br>
                                                <small style="color: var(--color-gold);">${inq.organization ? inq.organization + ' • ' : ''}${inq.country}</small>
                                            </td>
                                            <td>
                                                <div style="font-size: 0.8rem; line-height: 1.45;">
                                                    <div><a href="${mailtoLink}" style="color: var(--color-white); text-decoration: underline;">${inq.email}</a></div>
                                                    <div><a href="${waLink}" target="_blank" rel="noopener noreferrer" style="color: #25d366; text-decoration: none; font-weight: 500;">${inq.phone}</a></div>
                                                    <small style="color: var(--color-text-muted); font-size: 0.72rem;">Pref: ${inq.contactMethod}</small>
                                                </div>
                                            </td>
                                            <td>
                                                <span style="font-size: 0.76rem; font-weight: 600; color: #fff; background: rgba(255,255,255,0.06); padding: 0.25rem 0.55rem; border-radius: 4px; border: 1px solid rgba(212,175,55,0.3); display: inline-block;">
                                                    ${inq.volumeTier}
                                                </span>
                                            </td>
                                            <td>
                                                <div style="font-size: 0.75rem; color: #e2ede5; max-width: 220px; line-height: 1.35;">
                                                    ${Array.isArray(inq.interests) ? inq.interests.map(i => `<span style="display: block; margin-bottom: 2px;">• ${i}</span>`).join('') : inq.interests}
                                                </div>
                                                ${inq.notes ? `<div style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 4px; font-style: italic;">"${inq.notes.length > 50 ? inq.notes.substring(0, 50) + '...' : inq.notes}"</div>` : ''}
                                            </td>
                                            <td>
                                                <select class="form-input inq-status-select" data-id="${inq.id}" style="font-size: 0.75rem; padding: 0.35rem 0.55rem; background: rgba(0,0,0,0.6); border-radius: 4px; color: var(--color-gold); border-color: rgba(212,175,55,0.4); cursor: pointer;">
                                                    <option value="Pending Concierge Review" ${inq.status === 'Pending Concierge Review' ? 'selected' : ''}>Pending Review</option>
                                                    <option value="Allocated" ${inq.status === 'Allocated' ? 'selected' : ''}>Allocated</option>
                                                    <option value="Contacted" ${inq.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
                                                    <option value="Archived" ${inq.status === 'Archived' ? 'selected' : ''}>Archived</option>
                                                </select>
                                            </td>
                                            <td>
                                                <div style="display: flex; gap: 0.4rem; align-items: center;">
                                                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.7rem; color: #25d366; border-color: rgba(37,211,102,0.4); text-decoration: none;" title="Open WhatsApp Chat">
                                                        WhatsApp
                                                    </a>
                                                    <button class="btn btn-outline btn-delete-inquiry" data-id="${inq.id}" style="padding: 0.3rem 0.6rem; font-size: 0.7rem; color: #ff5e5e; border-color: rgba(255,94,94,0.3); cursor: pointer;" title="Delete Inquiry">
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        html += `
            </div>
        `;

        container.innerHTML = html;

        // Populate current values in season form if in season tab
        if (activeSubTab === 'seasons') {
            const seasonNameInput = document.getElementById('new-season-name');
            const boxPriceInput = document.getElementById('new-box-price');
            if (seasonNameInput) seasonNameInput.value = activeSeason.name;
            if (boxPriceInput) boxPriceInput.value = activeSeason.pricePerBox;
        }
    },

    // 4. Render Gallery Page
    renderGallery(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const galleryImages = window.TeaFactoryStore.getGalleryImages();

        let html = `
            <div class="gallery-header-block" style="margin-bottom: 3rem;">
                <span class="section-tag">Visual Heritage</span>
                <h2 class="view-title">Estate Gallery</h2>
                <p class="view-subtitle">Explore the breathtaking scenery of our wild high-elevation tea plantations, artisanal manufacturing, and luxury packing operations.</p>
            </div>

            <div class="gallery-grid-layout" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 4rem;">
                ${galleryImages.map((imgObj, index) => `
                    <div class="gallery-item-card" data-index="${index}" data-id="${imgObj.id}" style="position: relative; overflow: hidden; border-radius: 6px; border: var(--border-gold); aspect-ratio: 4/3; cursor: pointer; background: #000; transition: var(--transition-smooth);">
                        <img src="${imgObj.src}" alt="${imgObj.caption || 'Estate Scene'}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); display: block;" loading="lazy" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                        <div class="gallery-overlay" style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%); opacity: 0; transition: var(--transition-smooth); display: flex; flex-direction: column; justify-content: flex-end; padding: 1.25rem;">
                            <span style="color: var(--color-gold); font-family: var(--font-serif); font-size: 0.95rem; font-weight: 500; letter-spacing: 0.5px;">${imgObj.caption || 'Estate Photograph'}</span>
                            <span style="color: var(--color-text-muted); font-size: 0.75rem; margin-top: 0.25rem;">${imgObj.tag || 'Estate & Harvest'}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    },

    renderHeritageShowcase(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <!-- Top Heritage Story Showcase -->
            <div class="heritage-container-layout" style="margin-bottom: 3.5rem;">
                <div class="story-section" style="padding-right: 1rem;">
                    <span class="section-tag">THE ETTAMPITIYA TERROIR & HERITAGE</span>
                    <h3 class="home-section-title" style="font-size: 2.2rem; line-height: 1.25; margin-bottom: 1.25rem;">Born from the Wild Misty Slopes of Wallawela</h3>
                    <p class="story-text" style="color: var(--color-text-primary); font-size: 0.98rem; line-height: 1.8; margin-bottom: 1.25rem;">
                        Perched at over 1,200 meters above sea level at <strong>No: 54 Gannilawattha, Wallawela in Ettampitiya</strong>, Rock One Wild Tea represents Ceylon’s purest private-reserve tea enterprise. Unlike commercial monoculture plantations, our tea trees grow wild and unpruned amidst untouched montane forest biodiversity, drawing deep nutrients from centuries-old mineral soils.
                    </p>
                    <p class="story-text" style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.7; margin-bottom: 2rem;">
                        The microclimate of Ettampitiya — characterized by dramatic diurnal temperature swings, morning cloud inversions, and fresh mountain winds — slows leaf growth to concentrate rich amino acids and natural floral honey aromatics found nowhere else in Sri Lanka.
                    </p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <span class="btn btn-primary" onclick="document.getElementById('nav-tours').click()">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                            Book Estate Tour & Tasting
                        </span>
                        <span class="btn btn-outline" onclick="document.getElementById('nav-catalog').click()">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            Explore Pure Reserves
                        </span>
                    </div>
                </div>
                <div class="heritage-visual-wrapper">
                    <img src="images/luxury_tea_estate.jpg" alt="Ceylon Wild Tea Estate Slopes in Wallawela, Ettampitiya" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                    <div class="card-image-overlay"></div>
                </div>
            </div>

            <!-- 3 Core Business Pillars & Terroir Highlights -->
            <div style="margin-bottom: 4rem;">
                <div style="text-align: center; max-width: 650px; margin: 0 auto 2.5rem auto;">
                    <span class="section-tag">WHY ROCK ONE IS DIFFERENT</span>
                    <h4 style="font-size: 1.8rem; font-family: var(--font-serif); color: var(--color-white); margin-bottom: 0.5rem;">The Three Pillars of Our Artisanal Enterprise</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.6;">Our zero-compromise approach to single-estate wild tea crafting from cultivation to collector delivery.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.75rem;">
                    <!-- Pillar 1 -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 2rem;">
                        <div style="margin-bottom: 1rem; color: var(--color-gold);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L5 9h4l-5 7h6l-3 6 10-10h-4l5-6h-4l4-6z"></path></svg>
                        </div>
                        <h5 style="font-size: 1.15rem; color: var(--color-gold); margin-bottom: 0.75rem; font-family: var(--font-serif);">1. 100% Wild Forest Ecology</h5>
                        <p style="font-size: 0.84rem; color: var(--color-text-muted); line-height: 1.7;">
                            Our tea bushes grow as natural arbor trees alongside wild cinnamon, mountain moss, and indigenous ferns. Free from artificial chemical fertilizers and mechanical pruning, each tree drinks from subterranean mountain springs.
                        </p>
                    </div>

                    <!-- Pillar 2 -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 2rem;">
                        <div style="margin-bottom: 1rem; color: var(--color-gold);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a5 5 0 0 1 9.9-1"></path><path d="M18 10a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V7"></path><path d="M12 15v5"></path><path d="M8 20h8"></path></svg>
                        </div>
                        <h5 style="font-size: 1.15rem; color: var(--color-gold); margin-bottom: 0.75rem; font-family: var(--font-serif);">2. Dawn Orthodox Craftsmanship</h5>
                        <p style="font-size: 0.84rem; color: var(--color-text-muted); line-height: 1.7;">
                            Every single leaf is selectively hand-plucked at dawn by generational estate artisans. Leaves are withered naturally on cedar racks and gently rolled to preserve delicate silver tips and golden liquor character.
                        </p>
                    </div>

                    <!-- Pillar 3 -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 2rem;">
                        <div style="margin-bottom: 1rem; color: var(--color-gold);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        </div>
                        <h5 style="font-size: 1.15rem; color: var(--color-gold); margin-bottom: 0.75rem; font-family: var(--font-serif);">3. Strictly Limited Allocations</h5>
                        <p style="font-size: 0.84rem; color: var(--color-text-muted); line-height: 1.7;">
                            We do not mass produce. Each harvest season yields only 10 individually numbered collector cedar chests, hand-sealed with private estate gold stamps and registered in our central allocation ledger.
                        </p>
                    </div>
                </div>
            </div>
        `;
    },

    // ── Dedicated About Us & Estate Terroir Page ──
    renderAboutUsPage(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="about-page-wrapper" style="max-width: 1200px; margin: 0 auto; padding: 1.5rem 0.5rem 4rem 0.5rem;">
                
                <!-- 1. Editorial Hero Header -->
                <div class="about-hero-editorial" style="text-align: center; max-width: 860px; margin: 0 auto 3.5rem auto;">
                    <span class="section-tag" style="font-size: 0.82rem; letter-spacing: 2.5px; color: var(--color-gold); font-weight: 700; display: inline-block; margin-bottom: 0.75rem;">
                        THE ETTAMPITIYA HERITAGE &amp; LIVING PHILOSOPHY
                    </span>
                    <h2 style="font-family: var(--font-serif); font-size: 2.8rem; line-height: 1.2; color: var(--color-white); margin-bottom: 1.25rem;">
                        Where Wild Mountain Nature Meets Centuries of Pure Ceylon Craft
                    </h2>
                    <p style="font-size: 1.02rem; color: var(--color-text-primary); line-height: 1.85; margin-bottom: 1.5rem;">
                        Perched at over <strong>1,200 meters above sea level</strong> in <strong>Wallawela, Ettampitiya</strong>, Rock One Wild Tea was founded to preserve the ancient, uncultivated terroir of Sri Lanka’s central montane rainforests. We reject commercial monoculture plantations to harvest single-estate teas of unparalleled floral purity.
                    </p>

                    <!-- Terroir Core Trust Badges with SVG Icons -->
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.85rem; flex-wrap: wrap;">
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #86efac; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                            100% Pesticide &amp; Glyphosate-Free
                        </span>
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-gold); background: rgba(212, 175, 55, 0.12); border: 1px solid rgba(212, 175, 55, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
                            1,240m+ Cloud Forest Terroir
                        </span>
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #93c5fd; background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            Traditional Orthodox Kiln Firing
                        </span>
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #fbcfe8; background: rgba(244, 114, 182, 0.12); border: 1px solid rgba(244, 114, 182, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                            Strict Dawn Dew Harvesting
                        </span>
                    </div>
                </div>

                <!-- 2. Terroir Metrics Data Grid (6 Infographic Cards with Icons) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; margin-bottom: 4.5rem;">
                    <div class="panel-card" style="padding: 1.5rem 1.25rem; text-align: center; border: 1px solid rgba(212,175,55,0.3); margin-bottom: 0;">
                        <div style="color: var(--color-gold); margin-bottom: 0.5rem;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
                        </div>
                        <strong style="display: block; color: var(--color-white); font-size: 1.15rem; font-family: var(--font-serif);">1,240m</strong>
                        <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px;">Sanctuary Altitude</span>
                    </div>

                    <div class="panel-card" style="padding: 1.5rem 1.25rem; text-align: center; border: 1px solid rgba(212,175,55,0.3); margin-bottom: 0;">
                        <div style="color: #60a5fa; margin-bottom: 0.5rem;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 21.5 12 4.5 4.5 0 0 0 17 7.5c-.3 0-.6 0-.9.1A6 6 0 0 0 5 10a5 5 0 0 0 .5 9.9h14.5z"></path><line x1="8" y1="19" x2="8" y2="21"></line><line x1="12" y1="19" x2="12" y2="21"></line><line x1="16" y1="19" x2="16" y2="21"></line></svg>
                        </div>
                        <strong style="display: block; color: var(--color-white); font-size: 1.15rem; font-family: var(--font-serif);">2,800 mm</strong>
                        <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px;">Mountain Mist Rainfall</span>
                    </div>

                    <div class="panel-card" style="padding: 1.5rem 1.25rem; text-align: center; border: 1px solid rgba(212,175,55,0.3); margin-bottom: 0;">
                        <div style="color: #fb923c; margin-bottom: 0.5rem;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
                        </div>
                        <strong style="display: block; color: var(--color-white); font-size: 1.15rem; font-family: var(--font-serif);">14°C - 24°C</strong>
                        <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px;">Diurnal Fluctuation</span>
                    </div>

                    <div class="panel-card" style="padding: 1.5rem 1.25rem; text-align: center; border: 1px solid rgba(212,175,55,0.3); margin-bottom: 0;">
                        <div style="color: #c084fc; margin-bottom: 0.5rem;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <strong style="display: block; color: var(--color-white); font-size: 1.15rem; font-family: var(--font-serif);">Mineral Granite</strong>
                        <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px;">Ancient Sub-Soil</span>
                    </div>

                    <div class="panel-card" style="padding: 1.5rem 1.25rem; text-align: center; border: 1px solid rgba(212,175,55,0.3); margin-bottom: 0;">
                        <div style="color: #4ade80; margin-bottom: 0.5rem;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"></path><path d="M9 15c-3.5 0-6-2.5-6-6 0-4 4-7 9-7s9 3 9 7c0 3.5-2.5 6-6 6"></path><path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
                        </div>
                        <strong style="display: block; color: var(--color-white); font-size: 1.15rem; font-family: var(--font-serif);">Unpruned Arbor</strong>
                        <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px;">Natural Tree Growth</span>
                    </div>

                    <div class="panel-card" style="padding: 1.5rem 1.25rem; text-align: center; border: 1px solid rgba(212,175,55,0.3); margin-bottom: 0;">
                        <div style="color: var(--color-gold); margin-bottom: 0.5rem;">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                        </div>
                        <strong style="display: block; color: var(--color-white); font-size: 1.15rem; font-family: var(--font-serif);">Single Estate</strong>
                        <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 1px;">No: 54 Wallawela</span>
                    </div>
                </div>

                <!-- 3. Dual-Column Story & Terroir Panorama -->
                <div class="about-story-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; margin-bottom: 5rem;">
                    <div>
                        <span class="section-tag" style="font-size: 0.75rem;">THE UNPRUNED ARBOR PHILOSOPHY</span>
                        <h3 style="font-family: var(--font-serif); font-size: 2.1rem; color: var(--color-white); margin-bottom: 1.25rem; line-height: 1.3;">
                            Why Wild Tea Trees Yield Exceptional Amino Acids
                        </h3>
                        <p style="color: var(--color-text-primary); font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.25rem;">
                            Conventional commercial tea estates aggressively prune bushes every three years and saturate soils with synthetic nitrogen. At Rock One, our Camellia sinensis trees grow <strong>tall and wild</strong> alongside native hardwood trees, wild ferns, and mountain streams.
                        </p>
                        <p style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.75; margin-bottom: 1.5rem;">
                            Deep taproots descend meters into ancient mineral granite strata, absorbing natural subterranean potassium and magnesium. Combined with freezing nighttime mountain winds and morning cloud inversions, leaf growth is naturally slowed — concentrating delicate floral honey notes with zero tannic bitterness.
                        </p>
                        <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--color-gold); padding: 1.15rem 1.35rem; border-radius: 0 10px 10px 0;">
                            <p style="font-style: italic; color: #ffd875; font-size: 0.9rem; margin: 0; line-height: 1.6;">
                                "We don't cultivate tea; we steward a living high-altitude ecosystem and harvest its seasonal whisper."
                            </p>
                            <span style="display: block; font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.4rem;">— The Rock One Estate Founders</span>
                        </div>
                    </div>
                    <div style="position: relative;">
                        <div style="position: relative; border-radius: 16px; overflow: hidden; border: 1.5px solid rgba(212,175,55,0.4); box-shadow: 0 16px 40px rgba(0,0,0,0.7), 0 0 25px rgba(212,175,55,0.15);">
                            <img src="images/luxury_tea_estate.jpg" alt="Misty Slopes of Rock One Wild Tea Estate in Ettampitiya" style="width: 100%; height: auto; display: block; aspect-ratio: 4/3; object-fit: cover;" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1.25rem; background: linear-gradient(0deg, rgba(2, 10, 5, 0.95) 0%, transparent 100%);">
                                <span style="display: block; color: var(--color-white); font-size: 0.9rem; font-weight: 600;">Wallawela High-Altitude Ridge</span>
                                <span style="color: var(--color-gold); font-size: 0.75rem;">1,240m Elevation • Badulla District, Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. Four Core Pillars of Artisanal Mastery -->
                <div style="margin-bottom: 5rem;">
                    <div style="text-align: center; max-width: 680px; margin: 0 auto 3rem auto;">
                        <span class="section-tag">UNCOMPROMISING METHODOLOGY</span>
                        <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-white); margin-bottom: 0.75rem;">
                            The Four Pillars of Our Craft
                        </h3>
                        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
                            Every tin and numbered collector chest represents a single-origin masterpiece perfected by generational artisans.
                        </p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.75rem;">
                        <div class="panel-card" style="padding: 2.25rem 1.75rem;">
                            <div style="color: #4ade80; margin-bottom: 1.2rem;">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8a2.5 2.5 0 0 0-2.5 2.5c0 2 2.5 4.5 2.5 4.5s2.5-2.5 2.5-4.5A2.5 2.5 0 0 0 12 8z"></path></svg>
                            </div>
                            <h4 style="font-size: 1.15rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.75rem;">1. Forest Agro-Ecology</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Tea trees co-exist with wild birds, endemic butterflies, and mountain canopy shade. No artificial irrigation; nourished purely by morning cloud inversions.
                            </p>
                        </div>

                        <div class="panel-card" style="padding: 2.25rem 1.75rem;">
                            <div style="color: #f472b6; margin-bottom: 1.2rem;">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>
                            </div>
                            <h4 style="font-size: 1.15rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.75rem;">2. Dawn Dew Selection</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Harvesting begins strictly at 5:30 AM before sunlight heats the leaf. Only unbroken two-leaves-and-a-bud are gathered in breathable woven bamboo baskets.
                            </p>
                        </div>

                        <div class="panel-card" style="padding: 2.25rem 1.75rem;">
                            <div style="color: #fb923c; margin-bottom: 1.2rem;">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                            </div>
                            <h4 style="font-size: 1.15rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.75rem;">3. Orthodox Wood Curing</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Hand-rolling on seasoned timber tables preserves essential oils. Final curing takes place over slow-burning cinnamon and cedar wood kilns.
                            </p>
                        </div>

                        <div class="panel-card" style="padding: 2.25rem 1.75rem;">
                            <div style="color: var(--color-gold); margin-bottom: 1.2rem;">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                            <h4 style="font-size: 1.15rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.75rem;">4. Numbered Allocations</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Never blended across seasons or estates. Every batch is cataloged in the estate reserve ledger, sealed with hot gold wax, and numbered from Box 1 to 10.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 5. The Master Artisans Behind the Harvest -->
                <div style="margin-bottom: 5rem;">
                    <div style="text-align: center; max-width: 680px; margin: 0 auto 3rem auto;">
                        <span class="section-tag">HUMAN MASTERY</span>
                        <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-white); margin-bottom: 0.75rem;">
                            The Master Artisans of the Highlands
                        </h3>
                        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
                            Generational masters whose hands, palate, and devotion guide each harvest from leaf to cupping cup.
                        </p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div class="panel-card" style="padding: 2rem; border-top: 3px solid var(--color-gold);">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                                <div style="width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, rgba(212,175,55,0.3) 0%, rgba(184,134,11,0.6) 100%); border: 1.5px solid var(--color-gold); display: flex; align-items: center; justify-content: center; color: #ffd875;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                                </div>
                                <div>
                                    <h4 style="margin: 0; color: var(--color-white); font-size: 1.1rem; font-family: var(--font-serif);">Bandara Rathnayake</h4>
                                    <span style="font-size: 0.75rem; color: var(--color-gold); font-weight: 600;">Master Roaster &amp; Kiln Alchemist</span>
                                </div>
                            </div>
                            <p style="font-size: 0.84rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                With 35+ years of orthodox firing mastery, Bandara regulates the wood-kiln draft entirely by scent and tactile warmth, ensuring the wild floral aromatics are locked into the silver tips.
                            </p>
                        </div>

                        <div class="panel-card" style="padding: 2rem; border-top: 3px solid #86efac;">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                                <div style="width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, rgba(34,197,94,0.3) 0%, rgba(20,83,45,0.6) 100%); border: 1.5px solid #86efac; display: flex; align-items: center; justify-content: center; color: #86efac;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </div>
                                <div>
                                    <h4 style="margin: 0; color: var(--color-white); font-size: 1.1rem; font-family: var(--font-serif);">Kalyani Kumari</h4>
                                    <span style="font-size: 0.75rem; color: #86efac; font-weight: 600;">Chief Plucking Curator</span>
                                </div>
                            </div>
                            <p style="font-size: 0.84rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Leading our generational dawn harvesting guild, Kalyani trains our pickers in the delicate pinch-and-release technique that preserves the unopened bud's velvet white down intact.
                            </p>
                        </div>

                        <div class="panel-card" style="padding: 2rem; border-top: 3px solid #93c5fd;">
                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                                <div style="width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, rgba(59,130,246,0.3) 0%, rgba(30,58,138,0.6) 100%); border: 1.5px solid #93c5fd; display: flex; align-items: center; justify-content: center; color: #93c5fd;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                                </div>
                                <div>
                                    <h4 style="margin: 0; color: var(--color-white); font-size: 1.1rem; font-family: var(--font-serif);">Dharmasena Silva</h4>
                                    <span style="font-size: 0.75rem; color: #93c5fd; font-weight: 600;">Chief Sommelier &amp; Cupping Master</span>
                                </div>
                            </div>
                            <p style="font-size: 0.84rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Evaluates every micro-batch liquor clarity, golden amber meniscus, and retronasal aromatics before approving allocations for our sealed collector chests.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 6. Ethical Stewardship & Community Commitment -->
                <div class="estate-cinema-card" style="background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(4, 20, 10, 0.85) 100%); border: 1px solid rgba(212,175,55,0.25); border-radius: 18px; padding: 2.5rem; margin-bottom: 4.5rem;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: center;">
                        <div>
                            <span class="section-tag">ETHICAL STEWARDSHIP</span>
                            <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--color-white); margin-bottom: 0.75rem;">
                                Fair Living Wages &amp; Watershed Protection
                            </h3>
                            <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.75; margin: 0;">
                                We provide <strong>2.5x standard industry wages</strong>, comprehensive family healthcare, and educational scholarships for all artisan families residing on the estate sanctuary. Furthermore, 100% of our mountain watershed is protected under permanent rainforest easement.
                            </p>
                        </div>
                        <div style="display: flex; gap: 1.5rem; justify-content: space-around; flex-wrap: wrap;">
                            <div style="text-align: center;">
                                <div style="font-size: 2.2rem; font-weight: 700; color: var(--color-gold); font-family: var(--font-serif);">2.5x</div>
                                <span style="font-size: 0.75rem; color: var(--color-text-muted);">Living Wage Index</span>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 2.2rem; font-weight: 700; color: #86efac; font-family: var(--font-serif);">100%</div>
                                <span style="font-size: 0.75rem; color: var(--color-text-muted);">Clean Watershed Protected</span>
                            </div>
                            <div style="text-align: center;">
                                <div style="font-size: 2.2rem; font-weight: 700; color: #93c5fd; font-family: var(--font-serif);">0%</div>
                                <span style="font-size: 0.75rem; color: var(--color-text-muted);">Synthetic Additives</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 7. Call to Action Banner -->
                <div style="text-align: center; background: radial-gradient(circle at center, rgba(212, 175, 55, 0.12) 0%, rgba(4, 14, 8, 0.9) 100%); border: 1.5px solid rgba(212,175,55,0.4); border-radius: 20px; padding: 3rem 1.5rem; box-shadow: 0 16px 40px rgba(0,0,0,0.8);">
                    <span class="section-tag" style="font-size: 0.8rem;">AN INVITATION TO THE HIGHLANDS</span>
                    <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-white); margin-bottom: 0.75rem;">
                        Walk the Mist-Shrouded Ridges with Our Masters
                    </h3>
                    <p style="color: var(--color-text-muted); font-size: 0.92rem; max-width: 620px; margin: 0 auto 2rem auto; line-height: 1.7;">
                        Join us at No: 54 Gannilawattha, Wallawela in Ettampitiya for private cupping flights, orthodox rolling workshops, and sunrise terroir treks.
                    </p>
                    <div style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="window.appCloseAboutModal && window.appCloseAboutModal(); document.getElementById('nav-tours').click();" style="padding: 0.85rem 1.75rem; font-size: 0.92rem;">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
                            Book Factory Tour &amp; Tasting
                        </button>
                        <button class="btn btn-outline" onclick="window.appCloseAboutModal && window.appCloseAboutModal(); document.getElementById('nav-catalog').click();" style="padding: 0.85rem 1.75rem; font-size: 0.92rem;">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            Explore Single-Estate Reserves
                        </button>
                    </div>
                </div>

            </div>
        `;
    },

    renderTestimonials(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const reviews = window.TeaFactoryStore ? window.TeaFactoryStore.getReviews() : [];
        const stats = window.TeaFactoryStore ? window.TeaFactoryStore.getReviewStats() : { average: 5.0, count: 5 };

        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1.5rem;">
                <div>
                    <span class="section-tag">CONNOISSEUR RATINGS & SOMMELIER REVIEWS</span>
                    <h3 class="home-section-title" style="margin-bottom: 0.5rem;">Endorsements from Global Connoisseurs</h3>
                    <p class="view-subtitle" style="margin-bottom: 0; max-width: 700px;">Evaluations from verified tea masters, collectors, and sommeliers detailing their encounters with our single-estate wild reserves.</p>
                </div>

                <!-- Rating Stats & Action Pill -->
                <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                    <div style="background: rgba(3, 14, 8, 0.7); border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 12px; padding: 0.75rem 1.25rem; display: flex; align-items: center; gap: 0.85rem; box-shadow: 0 4px 15px rgba(0,0,0,0.35);">
                        <div style="font-size: 1.8rem; font-weight: 800; font-family: var(--font-serif); color: var(--color-gold); line-height: 1;">${stats.average}</div>
                        <div>
                            <div style="color: var(--color-gold); font-size: 0.9rem; letter-spacing: 2px;">★★★★★</div>
                            <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.5px;">${stats.count} Verified Reviews</span>
                        </div>
                    </div>
                    <button id="btn-write-review" class="btn btn-primary" style="padding: 0.75rem 1.4rem; font-size: 0.78rem;">
                        <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        Rate Your Experience
                    </button>
                </div>
            </div>
            
            <div class="testimonials-grid-layout">
                ${reviews.map(rev => `
                    <div class="testimonial-card-item">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                            <div class="stars-rating" style="color: var(--color-gold); letter-spacing: 3px; font-size: 1.1rem;">
                                ${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}
                            </div>
                            <span style="font-size: 0.7rem; color: var(--color-gold-light); background: rgba(212, 175, 55, 0.12); padding: 0.2rem 0.6rem; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.25);">
                                ${rev.experienceType || 'Estate Experience'}
                            </span>
                        </div>
                        <p class="testimonial-quote-text" style="font-style: italic; color: #f1f5f9; line-height: 1.7; margin-bottom: 1.25rem;">
                            "${rev.comment}"
                        </p>
                        <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 0.85rem; display: flex; justify-content: space-between; align-items: flex-end;">
                            <div>
                                <h4 class="testimonial-author-name" style="color: var(--color-white); font-size: 0.95rem; margin-bottom: 0.2rem;">${rev.name}</h4>
                                <p class="testimonial-author-title" style="color: var(--color-gold); font-size: 0.78rem; margin: 0;">${rev.title ? rev.title + ' • ' : ''}${rev.location}</p>
                            </div>
                            <span style="font-size: 0.7rem; color: var(--color-text-muted);">${rev.date}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderNewsletterBanner(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="newsletter-subscription-box private-reserve-home-banner">
                <div class="reserve-badge-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    <span>SINGLE-ESTATE PATRONS &amp; PRIVATE CELLARS</span>
                </div>
                <h3 class="newsletter-box-title">The Private Reserve Club &amp; Allocation Registry</h3>
                <p class="newsletter-box-desc">
                    Join an exclusive global registry of tea connoisseurs receiving guaranteed seasonal allocations of numbered Series 01–10 teak wood chests, unblended first-flush releases, and private estate sommelier cupping invitations.
                </p>

                <!-- 4 Key Privileges Highlight Grid -->
                <div class="reserve-privileges-mini-grid">
                    <div class="privilege-mini-card">
                        <div class="privilege-mini-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                        </div>
                        <div>
                            <strong>Numbered Series 01–10 Chests</strong>
                            <span>Guaranteed priority reservation for each equinox harvest</span>
                        </div>
                    </div>
                    <div class="privilege-mini-card">
                        <div class="privilege-mini-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                        </div>
                        <div>
                            <strong>First-Flush Micro-Batches</strong>
                            <span>Imperial Golden Needle &amp; Silver Tips from 1,200m+ slopes</span>
                        </div>
                    </div>
                    <div class="privilege-mini-card">
                        <div class="privilege-mini-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                        </div>
                        <div>
                            <strong>VIP Sommelier Cupping</strong>
                            <span>Private factory walkthroughs &amp; mountain ridge tasting sessions</span>
                        </div>
                    </div>
                    <div class="privilege-mini-card">
                        <div class="privilege-mini-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <div>
                            <strong>Global White-Glove Freight</strong>
                            <span>Direct DHL/FedEx insured luxury express dispatch</span>
                        </div>
                    </div>
                </div>

                <!-- Dual Action CTAs -->
                <div class="reserve-home-cta-actions">
                    <button type="button" class="btn btn-primary" onclick="if(window.appSwitchTab){window.appSwitchTab('reserve')}else{document.getElementById('nav-reserve').click()}">
                        <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        Apply for Private Reserve Allocation
                    </button>
                    <a href="https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20would%20like%20to%20inquire%20about%20the%20Private%20Reserve%20Club%20allocation." target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="color: #25d366; border-color: rgba(37, 211, 102, 0.4); text-decoration: none;">
                        <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                        Direct WhatsApp Concierge Desk
                    </a>
                </div>
            </div>
        `;
    },

    // 3.8 Render Full Dedicated Common Enquiry & Concierge Page
    renderPrivateReservePage(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="enquiry-page-wrapper">
                <!-- Hero Header -->
                <div class="enquiry-hero-header">
                    <div class="reserve-badge-pill">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>ESTATE CONCIERGE &bull; DIRECT ENQUIRY DESK</span>
                    </div>
                    <h2 class="view-title">Connect with Our Tea Concierge</h2>
                    <p class="view-subtitle" style="max-width: 760px; margin: 0 auto 1.75rem auto;">
                        Have a question about our single-estate harvests, bespoke gift chests, factory tours, or wholesale distribution? Send us your message below and our team will get back to you promptly.
                    </p>
                    <div style="text-align: center; margin-bottom: 2.5rem;">
                        <button type="button" id="btn-reserve-open-lookbook" class="btn btn-outline" style="color: var(--color-gold); border-color: rgba(212,175,55,0.4); font-size: 0.8rem; padding: 0.65rem 1.4rem; border-radius: 20px; display: inline-flex; align-items: center; gap: 0.5rem;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                            <span>Download 2026 Wholesale Estate Lookbook (PDF)</span>
                        </button>
                    </div>
                </div>

                <!-- Common Enquiry Form Card (Matching Design Blueprint) -->
                <div class="common-enquiry-card-container">
                    <form id="common-enquiry-form" class="common-enquiry-form-body">
                        <!-- Row 1: Full Name & Email Address -->
                        <div class="enquiry-form-row">
                            <div class="enquiry-field-group">
                                <label class="enquiry-field-label" for="enq-fullname">Full Name <span class="enquiry-req-star">*</span></label>
                                <input type="text" id="enq-fullname" class="enquiry-text-input" placeholder="John Doe" required>
                            </div>
                            <div class="enquiry-field-group">
                                <label class="enquiry-field-label" for="enq-email">Email Address <span class="enquiry-req-star">*</span></label>
                                <input type="email" id="enq-email" class="enquiry-text-input" placeholder="john@example.com" required>
                            </div>
                        </div>

                        <!-- Row 2: Phone Number & Service Interested In -->
                        <div class="enquiry-form-row">
                            <div class="enquiry-field-group">
                                <label class="enquiry-field-label" for="enq-phone">Phone Number</label>
                                <input type="tel" id="enq-phone" class="enquiry-text-input" placeholder="+1 234 567 890">
                            </div>
                            <div class="enquiry-field-group">
                                <label class="enquiry-field-label" for="enq-service">Service Interested In</label>
                                <div class="enquiry-select-container">
                                    <select id="enq-service" class="enquiry-dropdown-select">
                                        <option value="" disabled selected>Select a service</option>
                                        <option value="Artisanal Pure Single-Estate Teas">Artisanal Pure Single-Estate Teas</option>
                                        <option value="Limited Edition Teak Wood Gift Chests">Limited Edition Teak Wood Gift Chests</option>
                                        <option value="Factory Tour &amp; Sommelier Tasting Session">Factory Tour &amp; Sommelier Tasting Session</option>
                                        <option value="Private Reserve Allocation &amp; Cellars">Private Reserve Allocation &amp; Cellars</option>
                                        <option value="Wholesale, Export &amp; Bulk Distribution">Wholesale, Export &amp; Bulk Distribution</option>
                                        <option value="Bespoke Luxury &amp; Corporate Gifting">Bespoke Luxury &amp; Corporate Gifting</option>
                                        <option value="General Inquiry &amp; Support">General Inquiry &amp; Support</option>
                                    </select>
                                    <span class="enquiry-select-chevron">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Row 3: Project Budget -->
                        <div class="enquiry-form-row full-width-row">
                            <div class="enquiry-field-group">
                                <label class="enquiry-field-label" for="enq-budget">Project Budget</label>
                                <div class="enquiry-select-container">
                                    <select id="enq-budget" class="enquiry-dropdown-select">
                                        <option value="" disabled selected>Select budget range</option>
                                        <option value="Under $250">Under $250</option>
                                        <option value="$250 - $1,000">$250 - $1,000</option>
                                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                                        <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                                        <option value="$10,000+ (Wholesale / Bulk Export)">$10,000+ (Wholesale / Bulk Export)</option>
                                        <option value="Not Specified">Not Specified / General Inquiry</option>
                                    </select>
                                    <span class="enquiry-select-chevron">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Row 4: Project Details * -->
                        <div class="enquiry-form-row full-width-row">
                            <div class="enquiry-field-group">
                                <label class="enquiry-field-label" for="enq-details">Project Details <span class="enquiry-req-star">*</span></label>
                                <textarea id="enq-details" class="enquiry-textarea-input" rows="4" placeholder="Tell us about your project, goals, and timeline..." required></textarea>
                            </div>
                        </div>

                        <!-- Row 5: Send Message Button -->
                        <button type="submit" id="btn-send-common-enquiry" class="enquiry-send-btn">
                            <span class="btn-send-text">Send Message</span>
                            <svg class="btn-plane-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                        </button>
                    </form>
                </div>

                <!-- Direct Concierge Contact Strip Below Card -->
                <div class="enquiry-direct-contact-strip">
                    <div class="direct-contact-item">
                        <div class="contact-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div>
                            <strong>Direct Concierge Email</strong>
                            <a href="mailto:axentrat@gmail.com">axentrat@gmail.com</a>
                        </div>
                    </div>
                    <div class="direct-contact-item">
                        <div class="contact-item-icon" style="color: #25d366;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                        </div>
                        <div>
                            <strong>WhatsApp Priority Line</strong>
                            <a href="https://wa.me/94771757556" target="_blank" rel="noopener noreferrer">+94 77 175 7556</a>
                        </div>
                    </div>
                    <div class="direct-contact-item">
                        <div class="contact-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <strong>Highlands Sanctuary</strong>
                            <span>Wallawela, Ettampitiya, Sri Lanka</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // ── Cinema of the Estate: 4K Terroir & Artisanal Craft Showcase ──
    renderCinemaShowcase(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const posterImg = "images/luxury_tea_estate.jpg";

        const chapters = [
            {
                id: 1,
                time: 0,
                ytStart: 0,
                title: "Montane Mist & Wild Terroir",
                sub: "1,200m+ Cloud Rainforest Sanctuary",
                icon: "🌿",
                desc: "Dawn breaks over Wallawela ridges where wild, uncultivated tea trees thrive in mineral mountain soil."
            },
            {
                id: 2,
                time: 45,
                ytStart: 45,
                title: "Hand-Harvesting & Withering Troughs",
                sub: "Tender Leaf Plucking & Aeration",
                icon: "🍃",
                desc: "Artisan pickers hand-select pristine young buds at peak sunrise dew before oxidation begins."
            },
            {
                id: 3,
                time: 95,
                ytStart: 95,
                title: "Orthodox Rolling & Fermentation",
                sub: "Slow Table Crafting & Leaf Oxidation",
                icon: "🪵",
                desc: "Gentle table rolling preserves essential oils, followed by natural cool-room enzymatic oxidation."
            },
            {
                id: 4,
                time: 180,
                ytStart: 180,
                title: "Wood-Fired Curing & Cupping Flights",
                sub: "Master Connoisseur Tasting Ritual",
                icon: "🫖",
                desc: "Evaluating liquor clarity, golden amber hues, and exquisite natural floral honey aromatic notes."
            }
        ];

        container.innerHTML = `
            <div class="estate-cinema-card" style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(4, 18, 10, 0.9) 100%); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 20px; padding: 3rem 2.5rem; box-shadow: 0 18px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.1); position: relative; overflow: hidden;">
                <!-- Header Lockup -->
                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <span class="section-tag" style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: var(--color-gold); font-weight: 700; display: block; margin-bottom: 0.5rem;">
                            ESTATE CINEMATOGRAPHY • 4K ULTRA HD
                        </span>
                        <h3 class="home-section-title" style="font-size: 2.2rem; line-height: 1.2; margin: 0; color: var(--color-white);">
                            Cinema of the Estate • The Living Terroir
                        </h3>
                        <p style="color: var(--color-text-muted); font-size: 0.92rem; margin-top: 0.5rem; max-width: 680px; line-height: 1.6;">
                            Immerse in the mist-veiled mountain amphitheaters of Ettampitiya (1,200m+), witness the sacred orthodox hand-rolling rituals, and explore the uncultivated wild tea sanctuary.
                        </p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span style="font-size: 0.7rem; color: var(--color-gold); background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.35); padding: 0.35rem 0.75rem; border-radius: 20px; font-weight: 700; letter-spacing: 1px;">
                            4K CINEMATIC MASTER
                        </span>
                    </div>
                </div>

                <!-- Full-Bleed Video Screen Frame -->
                <div class="cinema-player-viewport" style="position: relative; width: 100%; border-radius: 16px; overflow: hidden; background: #010603; border: 1.5px solid rgba(212, 175, 55, 0.4); box-shadow: 0 16px 40px rgba(0,0,0,0.8), 0 0 25px rgba(212, 175, 55, 0.15); margin-bottom: 2rem;">
                    
                    <!-- Engine 1: 4K Ceylon Artisanal Tea Documentary (YouTube 100% Reliable Embed) -->
                    <div id="cinema-yt-wrapper" style="width: 100%; aspect-ratio: 16/9; min-height: 320px; position: relative;">
                        <iframe id="estate-cinema-iframe"
                                src="https://www.youtube-nocookie.com/embed/kYJqK9oP64U?enablejsapi=1&rel=0&modestbranding=1&color=white&playsinline=1"
                                style="width: 100%; height: 100%; min-height: 380px; border: 0; display: block; aspect-ratio: 16/9;"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                title="Rock One Wild Tea Artisanal Estate & Montane Terroir Documentary">
                        </iframe>
                    </div>

                    <!-- Engine 2: HTML5 Video Stream Player (Alternative Direct Engine) -->
                    <div id="cinema-html5-wrapper" style="width: 100%; aspect-ratio: 16/9; display: none; position: relative;">
                        <video id="estate-cinema-video" 
                               poster="${posterImg}" 
                               playsinline 
                               controls
                               preload="metadata"
                               style="width: 100%; height: 100%; aspect-ratio: 16/9; display: block; object-fit: cover;">
                            <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>

                    <!-- Top Bar Stream Engine Selector -->
                    <div style="position: absolute; top: 12px; right: 12px; z-index: 10; display: flex; gap: 0.5rem;">
                        <button id="btn-cinema-mode-yt" class="cinema-mode-btn active" style="background: rgba(4, 14, 8, 0.88); backdrop-filter: blur(8px); border: 1px solid rgba(212,175,55,0.55); color: #ffd875; font-size: 0.72rem; font-weight: 700; padding: 0.35rem 0.75rem; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
                            🎬 4K Documentary
                        </button>
                        <button id="btn-cinema-mode-html5" class="cinema-mode-btn" style="background: rgba(4, 14, 8, 0.88); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.18); color: var(--color-text-muted); font-size: 0.72rem; font-weight: 600; padding: 0.35rem 0.75rem; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
                            🌿 Ambient Stream
                        </button>
                    </div>
                </div>

                <!-- Interactive Process Story Chapters (Jump to scene) -->
                <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <h4 style="font-size: 1.05rem; font-family: var(--font-serif); color: var(--color-white); letter-spacing: 0.5px; margin: 0;">
                            Documentary Chapters & Ritual Timeline
                        </h4>
                        <span style="font-size: 0.7rem; color: var(--color-gold); text-transform: uppercase; letter-spacing: 1px;">
                            Click to Jump to Scene
                        </span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;" class="cinema-chapters-grid">
                        ${chapters.map(ch => `
                            <div class="cinema-chapter-card ${ch.id === 1 ? 'active' : ''}" data-yt-start="${ch.ytStart}" data-time="${ch.time}" style="background: rgba(4, 14, 8, 0.7); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 12px; padding: 1.15rem; cursor: pointer; transition: all 0.25s ease;">
                                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                                    <span style="font-size: 1.2rem;">${ch.icon}</span>
                                    <span style="font-size: 0.68rem; font-weight: 700; color: var(--color-gold); background: rgba(212, 175, 55, 0.15); border: 1px solid rgba(212, 175, 55, 0.3); padding: 0.15rem 0.45rem; border-radius: 4px;">
                                        Chapter 0${ch.id}
                                    </span>
                                </div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.92rem; margin-bottom: 0.25rem;">${ch.title}</strong>
                                <span style="display: block; font-size: 0.72rem; color: #86efac; margin-bottom: 0.5rem;">${ch.sub}</span>
                                <p style="font-size: 0.75rem; color: var(--color-text-muted); line-height: 1.5; margin: 0;">${ch.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderLocationMapSection(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const addressText = "No: 54 Gannilawattha, Wallawela, Ettampitiya, Sri Lanka";
        const mapEmbedUrl = "https://maps.google.com/maps?q=54+Gannilawattha,+Wallawela,+Ettampitiya,+Sri+Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed";
        const googleMapsDirectUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(addressText);
        const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(addressText);

        const nearbyCities = [
            { name: "Bandarawela", type: "Colonial Hill Station", dist: "14 km", time: "25 min drive", routeQuery: "Bandarawela" },
            { name: "Welimada", type: "Highland Valley Hub", dist: "18 km", time: "30 min drive", routeQuery: "Welimada" },
            { name: "Badulla", type: "Provincial Capital", dist: "22 km", time: "38 min drive", routeQuery: "Badulla" },
            { name: "Ella", type: "Global Travel Hub", dist: "24 km", time: "45 min drive", routeQuery: "Ella, Sri Lanka" },
            { name: "Nuwara Eliya", type: "Central Montane Capital", dist: "45 km", time: "1h 15m drive", routeQuery: "Nuwara Eliya" },
            { name: "Colombo (BIA / City)", type: "International Airport", dist: "195 km", time: "4h 30m drive", routeQuery: "Colombo, Sri Lanka" }
        ];

        const nearbyLandmarks = [
            { 
                name: "Nine Arches Bridge", 
                category: "Colonial Viaduct", 
                dist: "26 km", 
                time: "45 min", 
                image: "images/landmark_nine_arches.jpg",
                desc: "Iconic stone railway arch bridge enveloped by mist & emerald tea fields.",
                routeQuery: "Nine Arches Bridge, Demodara" 
            },
            { 
                name: "Little Adam's Peak & Ella Rock", 
                category: "Mountain Hiking", 
                dist: "25 km", 
                time: "45 min", 
                image: "images/landmark_little_adams_peak.jpg",
                desc: "Panoramic sunrise peak trails with sweeping views over the Ella Gap.",
                routeQuery: "Little Adam's Peak, Ella" 
            },
            { 
                name: "Dunhinda Falls", 
                category: "Plume Waterfall (64m)", 
                dist: "26 km", 
                time: "45 min", 
                image: "images/landmark_dunhinda_falls.jpg",
                desc: "Dramatic misty canyon waterfall spray surrounded by virgin cloud forest.",
                routeQuery: "Dunhinda Falls, Badulla" 
            },
            { 
                name: "Ravana Falls & Cave", 
                category: "Natural Cascade", 
                dist: "28 km", 
                time: "50 min", 
                image: "images/landmark_ravana_falls.jpg",
                desc: "Spectacular multi-tiered cascade with historic ancient cave lore.",
                routeQuery: "Ravana Falls, Ella" 
            },
            { 
                name: "Lipton's Seat (Dambatenne)", 
                category: "Historic 360° Viewpoint", 
                dist: "35 km", 
                time: "1h 10m", 
                image: "images/landmark_liptons_seat.jpg",
                desc: "Famous vantage point where Sir Thomas Lipton surveyed Ceylon tea estates.",
                routeQuery: "Lipton's Seat, Haputale" 
            },
            { 
                name: "Hakgala Botanical Gardens", 
                category: "Alpine Cloud Reserve", 
                dist: "38 km", 
                time: "1h 05m", 
                image: "images/landmark_hakgala_gardens.jpg",
                desc: "High-elevation botanical haven of ferns, roses, and montane conifers.",
                routeQuery: "Hakgala Botanical Gardens" 
            }
        ];

        container.innerHTML = `
            <div class="estate-location-card" style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(8, 22, 14, 0.85) 100%); backdrop-filter: blur(24px) saturate(190%); -webkit-backdrop-filter: blur(24px) saturate(190%); border: 1px solid rgba(212, 175, 55, 0.28); border-radius: 20px; padding: 3rem 2.5rem; box-shadow: 0 16px 45px rgba(0, 0, 0, 0.65), 0 0 25px rgba(212, 175, 55, 0.1); position: relative; overflow: hidden;">
                <!-- Ambient Gold Light Flare -->
                <div style="position: absolute; top: -100px; right: -100px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%); pointer-events: none;"></div>

                <!-- Top Grid: Estate Description & Map Embed -->
                <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; align-items: stretch; margin-bottom: 3rem;" class="location-grid-layout">
                    <!-- Left: Estate Info Column -->
                    <div style="display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <span class="section-tag" style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: var(--color-gold); font-weight: 600; margin-bottom: 0.75rem; display: block;">Estate Sanctuary & Terroir</span>
                            <h3 class="home-section-title" style="font-size: 2rem; margin-bottom: 1.25rem; line-height: 1.2;">Visit Our Highlands Sanctuary</h3>
                            <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.7; margin-bottom: 1.75rem;">
                                Perched at over 1,200 meters amidst misty mountain amphitheaters in Wallawela, Ettampitiya, our single-estate sanctuary invites connoisseurs and world travelers for private tea cuppings, orthodox factory tours, and alpine terroir walks.
                            </p>

                            <!-- Address & Hours Detail Box -->
                            <div style="background: rgba(4, 14, 8, 0.75); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 14px; padding: 1.35rem 1.5rem; margin-bottom: 1.75rem; backdrop-filter: blur(12px); box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);">
                                <div style="display: flex; align-items: flex-start; gap: 0.9rem; margin-bottom: 0.9rem;">
                                    <span style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; background: rgba(212, 175, 55, 0.15); color: var(--color-gold); flex-shrink: 0;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </span>
                                    <div>
                                        <span style="display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700;">Estate Geolocation & Address</span>
                                        <strong style="color: var(--color-white); font-size: 0.96rem; line-height: 1.4; display: block; margin-top: 0.25rem;">${addressText}</strong>
                                        <span style="display: block; font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.2rem;">Coordinates: 6.9824° N, 80.9632° E • Elevation: 1,200m+ (6,200 ft)</span>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.9rem; padding-top: 0.85rem; border-top: 1px dashed rgba(255, 255, 255, 0.1);">
                                    <span style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; background: rgba(37, 211, 102, 0.12); color: #4ade80; flex-shrink: 0;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </span>
                                    <div>
                                        <span style="display: block; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted);">Visiting & Tour Hours</span>
                                        <span style="color: var(--color-white); font-size: 0.86rem; font-weight: 600;">Monday – Sunday: 8:30 AM – 5:30 PM (Daily Guided Cuppings)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Direct Navigation Buttons -->
                        <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
                            <a href="${googleMapsDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; min-width: 175px; text-decoration: none; font-size: 0.82rem; padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: center; gap: 0.45rem;">
                                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Open in Google Maps
                            </a>
                            <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex: 1; min-width: 175px; text-decoration: none; font-size: 0.82rem; padding: 0.85rem 1.25rem; color: var(--color-gold); border-color: rgba(212, 175, 55, 0.45); display: flex; align-items: center; justify-content: center; gap: 0.45rem;">
                                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                                Instant GPS Directions
                            </a>
                        </div>
                    </div>

                    <!-- Right: Embedded Interactive Map Frame -->
                    <div style="position: relative; border-radius: 14px; overflow: hidden; border: 1px solid rgba(212, 175, 55, 0.35); box-shadow: 0 14px 35px rgba(0,0,0,0.7), 0 0 20px rgba(212, 175, 55, 0.15); min-height: 360px; display: flex;">
                        <iframe 
                            src="${mapEmbedUrl}" 
                            width="100%" 
                            height="100%" 
                            style="border:0; min-height: 360px; width: 100%; border-radius: 14px; filter: contrast(1.05) saturate(1.15);" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Rock One Wild Tea Estate Location Map">
                        </iframe>
                    </div>
                </div>

                <!-- Middle Section: Top Visited Landmarks Photographic Cards -->
                <div style="border-top: 1px solid rgba(212, 175, 55, 0.2); padding-top: 2.5rem; margin-bottom: 2.5rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
                        <div>
                            <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 2px; color: var(--color-gold); font-weight: 700; display: block; margin-bottom: 0.35rem;">Scenic Montane Circuits</span>
                            <h4 style="font-size: 1.35rem; font-family: var(--font-serif); color: var(--color-white); letter-spacing: 0.5px; margin: 0;">Top Visited Landmarks with Actual Terroir Photos</h4>
                        </div>
                        <span style="font-size: 0.75rem; color: var(--color-text-muted); background: rgba(255,255,255,0.05); padding: 0.35rem 0.85rem; border-radius: 20px; border: 1px solid rgba(212,175,55,0.25);">
                            📍 Wallawela Sanctuary Proximity
                        </span>
                    </div>

                    <!-- 3-Column Photographic Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 1.35rem;" class="landmark-photo-grid">
                        ${nearbyLandmarks.map(place => `
                            <div class="landmark-photo-card" style="background: rgba(4, 14, 8, 0.75); border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column; transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                                <!-- Photo Container -->
                                <div style="position: relative; height: 180px; overflow: hidden; background: #030805;">
                                    <img src="${place.image}" alt="${place.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="landmark-img" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                                    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 45%, rgba(4, 14, 8, 0.95) 100%);"></div>
                                    <div style="position: absolute; top: 10px; right: 10px; background: rgba(4, 14, 8, 0.85); backdrop-filter: blur(8px); border: 1px solid rgba(212, 175, 55, 0.45); color: #ffd875; font-size: 0.72rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.6);">
                                        ${place.dist} • ~${place.time}
                                    </div>
                                    <div style="position: absolute; bottom: 8px; left: 12px;">
                                        <span style="font-size: 0.68rem; color: #86efac; background: rgba(74, 222, 128, 0.18); border: 1px solid rgba(74, 222, 128, 0.35); padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            ${place.category}
                                        </span>
                                    </div>
                                </div>

                                <!-- Card Content -->
                                <div style="padding: 1.15rem 1.25rem; display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1;">
                                    <div>
                                        <h5 style="color: var(--color-white); font-size: 1rem; font-family: var(--font-serif); margin: 0 0 0.4rem 0; letter-spacing: 0.5px;">${place.name}</h5>
                                        <p style="color: var(--color-text-muted); font-size: 0.78rem; line-height: 1.5; margin: 0 0 1rem 0;">${place.desc}</p>
                                    </div>
                                    <a href="https://www.google.com/maps/dir/${encodeURIComponent(place.routeQuery)}/${encodeURIComponent(addressText)}" target="_blank" rel="noopener noreferrer" class="landmark-directions-btn" style="display: flex; align-items: center; justify-content: center; gap: 0.45rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(212,175,55,0.3); color: var(--color-gold); text-decoration: none; padding: 0.55rem 0.9rem; border-radius: 8px; font-size: 0.76rem; font-weight: 600; transition: all 0.25s ease;">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                                        Driving Route to Estate
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Bottom Section: Nearest Main Cities & Hubs Strip -->
                <div style="border-top: 1px solid rgba(212, 175, 55, 0.2); padding-top: 2rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
                        <div style="display: flex; align-items: center; gap: 0.6rem;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            <h4 style="font-size: 1.05rem; font-family: var(--font-serif); color: var(--color-white); letter-spacing: 1px; margin: 0;">Nearest Main Cities & Transit Hubs</h4>
                        </div>
                        <span style="font-size: 0.65rem; color: var(--color-gold); text-transform: uppercase; letter-spacing: 1px;">Direct Access Routes</span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 0.85rem;" class="cities-proximity-grid">
                        ${nearbyCities.map(city => `
                            <div class="proximity-item-card" style="display: flex; align-items: center; justify-content: space-between; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); padding: 0.75rem 1rem; border-radius: 10px; transition: all 0.25s ease;">
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-gold); box-shadow: 0 0 8px var(--color-gold); flex-shrink: 0;"></div>
                                    <div>
                                        <strong style="color: var(--color-white); font-size: 0.88rem; display: block;">${city.name}</strong>
                                        <span style="color: var(--color-text-muted); font-size: 0.7rem;">${city.type}</span>
                                    </div>
                                </div>
                                <div style="text-align: right; display: flex; align-items: center; gap: 0.75rem;">
                                    <div>
                                        <span class="proximity-badge-dist" style="display: inline-block; background: rgba(212, 175, 55, 0.15); color: #ffd875; border: 1px solid rgba(212, 175, 55, 0.35); font-size: 0.72rem; font-weight: 700; padding: 0.18rem 0.5rem; border-radius: 6px;">${city.dist}</span>
                                        <span style="display: block; font-size: 0.62rem; color: var(--color-text-muted); margin-top: 2px;">~${city.time}</span>
                                    </div>
                                    <a href="https://www.google.com/maps/dir/${encodeURIComponent(city.routeQuery)}/${encodeURIComponent(addressText)}" target="_blank" rel="noopener noreferrer" title="Get Driving Route from ${city.name}" class="proximity-route-btn" style="color: var(--color-gold); display: flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 6px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(212, 175, 55, 0.2); text-decoration: none; transition: all 0.2s ease; flex-shrink: 0;">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    // ── Connoisseur Flavor Profile Radar Chart Generator ──
    generateFlavorRadarSVG(radar = {}, size = 280) {
        const dimensions = [
            { key: 'floral', label: 'Floral', val: radar.floral ?? 80 },
            { key: 'malty', label: 'Malty', val: radar.malty ?? 75 },
            { key: 'sweetness', label: 'Sweetness', val: radar.sweetness ?? 80 },
            { key: 'astringency', label: 'Astringency', val: radar.astringency ?? 40 },
            { key: 'body', label: 'Body', val: radar.body ?? 80 },
            { key: 'aroma', label: 'Aroma', val: radar.aroma ?? 90 }
        ];

        const cx = size / 2;
        const cy = size / 2;
        const radius = size * 0.35;
        const numAxes = dimensions.length;
        const angleStep = (Math.PI * 2) / numAxes;
        const startAngle = -Math.PI / 2; // start from top (Floral)

        // Generate concentric grid rings (25%, 50%, 75%, 100%)
        const gridRings = [0.25, 0.5, 0.75, 1.0].map(level => {
            const pts = [];
            for (let i = 0; i < numAxes; i++) {
                const angle = startAngle + i * angleStep;
                const r = radius * level;
                pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
            }
            return `<polygon points="${pts.join(' ')}" fill="none" stroke="rgba(212,175,55,${level === 1.0 ? '0.35' : '0.15'})" stroke-width="1" stroke-dasharray="${level === 1.0 ? 'none' : '3,3'}" />`;
        }).join('');

        // Generate radial axis lines and outer labels
        const axisLines = dimensions.map((dim, i) => {
            const angle = startAngle + i * angleStep;
            const x2 = cx + radius * Math.cos(angle);
            const y2 = cy + radius * Math.sin(angle);
            
            // Label positioning
            const labelR = radius + 26;
            const lx = cx + labelR * Math.cos(angle);
            const ly = cy + labelR * Math.sin(angle);
            
            let textAnchor = 'middle';
            if (Math.cos(angle) > 0.3) textAnchor = 'start';
            else if (Math.cos(angle) < -0.3) textAnchor = 'end';

            return `
                <line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="rgba(212,175,55,0.22)" stroke-width="1" />
                <text x="${lx}" y="${ly + 4}" text-anchor="${textAnchor}" fill="#dcece1" font-size="11" font-weight="600" letter-spacing="0.5px">
                    ${dim.label} <tspan fill="#d4af37" font-weight="700">${dim.val}%</tspan>
                </text>
            `;
        }).join('');

        // Generate data polygon
        const dataPoints = dimensions.map((dim, i) => {
            const angle = startAngle + i * angleStep;
            const r = radius * (Math.max(10, Math.min(100, dim.val)) / 100);
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            return { x, y, val: dim.val, label: dim.label };
        });

        const polygonPoints = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

        // Draw node points
        const nodeCircles = dataPoints.map(p => `
            <circle cx="${p.x}" cy="${p.y}" r="4" fill="#d4af37" stroke="#040e08" stroke-width="2" class="radar-node-circle" />
            <circle cx="${p.x}" cy="${p.y}" r="8" fill="rgba(212,175,55,0.25)" class="radar-node-glow" />
        `).join('');

        return `
            <svg class="connoisseur-flavor-radar" viewBox="0 0 ${size} ${size}" width="100%" height="100%" style="overflow:visible; display:block; margin:0 auto; max-width:${size}px;">
                <defs>
                    <radialGradient id="goldRadarGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#f3e5ab" stop-opacity="0.55" />
                        <stop offset="60%" stop-color="#d4af37" stop-opacity="0.35" />
                        <stop offset="100%" stop-color="#aa820a" stop-opacity="0.12" />
                    </radialGradient>
                    <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                ${gridRings}
                ${axisLines}
                <polygon points="${polygonPoints}" fill="url(#goldRadarGrad)" stroke="#d4af37" stroke-width="2.2" filter="url(#radarGlow)" style="transition: all 0.5s ease;" />
                ${nodeCircles}
            </svg>
        `;
    },

    // ── Connoisseur Tea Dossier & Interactive Steeping Modal ──
    renderConnoisseurModal(product) {
        const existing = document.getElementById('connoisseur-dossier-modal');
        if (existing) existing.remove();

        const radar = product.sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
        const infusions = product.infusions || [
            { round: 1, seconds: product.steepSeconds || 180, label: "1st Infusion (Aroma & Floral)" },
            { round: 2, seconds: (product.steepSeconds || 180) + 30, label: "2nd Infusion (Body & Richness)" },
            { round: 3, seconds: (product.steepSeconds || 180) + 90, label: "3rd Infusion (Sweet Mineral Finish)" }
        ];

        const initialSeconds = infusions[0].seconds;
        const initialMin = String(Math.floor(initialSeconds / 60)).padStart(2, '0');
        const initialSec = String(initialSeconds % 60).padStart(2, '0');

        const modal = document.createElement('div');
        modal.id = 'connoisseur-dossier-modal';
        modal.className = 'modal-backdrop active';
        modal.style.cssText = 'position:fixed; inset:0; background:rgba(2,10,6,0.92); backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px); z-index:99999; display:flex; align-items:center; justify-content:center; padding:1.5rem; animation:fadeIn 0.3s ease;';

        const radarSvg = this.generateFlavorRadarSVG(radar, 270);

        const tastingTags = (product.tastingNotes || ['Wild Orchid', 'Wildflower Honey', 'Warm Malt', 'Sweet Caramel']).map(t => 
            `<span class="dossier-tasting-tag">${t}</span>`
        ).join('');

        modal.innerHTML = `
            <div class="modal-card connoisseur-dossier-card" style="background:linear-gradient(145deg, rgba(6,18,12,0.98) 0%, rgba(12,32,22,0.98) 100%); border:1px solid rgba(212,175,55,0.4); border-radius:20px; max-width:880px; width:100%; padding:2.5rem 2.25rem; box-shadow:0 24px 60px rgba(0,0,0,0.85), 0 0 35px rgba(212,175,55,0.1); position:relative; max-height:90vh; overflow-y:auto;">
                <button type="button" id="close-connoisseur-modal-btn" style="position:absolute; top:1.25rem; right:1.25rem; background:transparent; border:none; color:var(--color-gold); font-size:1.5rem; cursor:pointer; width:36px; height:36px; display:flex; align-items:center; justify-content:center; border-radius:50%; transition:all 0.2s;" title="${_t('common_close', 'Close')}">&times;</button>
                
                <!-- Dossier Header -->
                <div style="text-align:center; margin-bottom:2rem; border-bottom:1px solid rgba(212,175,55,0.2); padding-bottom:1.5rem;">
                    <div style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(212,175,55,0.12); border:1px solid var(--color-gold); border-radius:20px; padding:0.35rem 1.2rem; font-size:0.72rem; text-transform:uppercase; letter-spacing:2px; color:var(--color-gold); font-weight:700; margin-bottom:0.75rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>
                        <span>${_t('dossier_modal_badge', 'CONNOISSEUR SENSORY DOSSIER')}</span>
                    </div>
                    <h2 style="font-family:var(--font-serif); font-size:2rem; color:#ffffff; margin-bottom:0.4rem;">${product.name}</h2>
                    <p style="color:var(--color-text-muted); font-size:0.88rem; max-width:620px; margin:0 auto;">
                        ${product.leafGrade || _t('leaf_grade_default', 'Single-Estate Reserve')} &bull; <strong style="color:var(--color-gold);">${product.elevation || '1,240m Highlands'}</strong> &bull; ${product.harvestSeason || 'Equinox First Flush'}
                    </p>
                </div>

                <!-- 2-Column Sensory & Radar Showcase -->
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:2.25rem; margin-bottom:2.25rem; align-items:center;" class="connoisseur-grid-layout">
                    <!-- Left: Terroir & Sensory Spectrum Bars -->
                    <div>
                        <div style="position:relative; border-radius:12px; overflow:hidden; border:1px solid rgba(212,175,55,0.3); margin-bottom:1.25rem; aspect-ratio:16/9; background:#000;">
                            <img src="${product.image || 'images/Product.jpeg'}" alt="${product.name}" style="width:100%; height:100%; object-fit:contain;" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                            <span style="position:absolute; bottom:0.6rem; left:0.6rem; background:rgba(4,14,8,0.85); border:1px solid var(--color-gold); color:var(--color-gold); font-size:0.7rem; padding:0.25rem 0.65rem; border-radius:12px; font-weight:600;">
                                Batch Ref: ROW-${(product.id || 'P1').toUpperCase()}
                            </span>
                        </div>

                        <h4 style="font-family:var(--font-serif); color:var(--color-gold); font-size:1.1rem; margin-bottom:0.6rem;">${_t('dossier_sensory_title', 'Sommelier Tasting Chords')}</h4>
                        <div style="display:flex; flex-wrap:wrap; gap:0.45rem; margin-bottom:1.25rem;">
                            ${tastingTags}
                        </div>

                        <!-- Sensory Spectrum Horizontal Bars -->
                        <div style="display:flex; flex-direction:column; gap:0.55rem; background:rgba(4,14,8,0.65); border:1px solid rgba(212,175,55,0.2); border-radius:12px; padding:1rem 1.15rem;">
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#dcece1; margin-bottom:0.25rem;">
                                    <span>${_t('radar_aroma', 'Aroma Intensity')}</span>
                                    <strong style="color:var(--color-gold);">${radar.aroma}%</strong>
                                </div>
                                <div style="height:5px; background:rgba(255,255,255,0.08); border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.aroma}%; height:100%; background:linear-gradient(90deg, #aa820a, #d4af37); border-radius:3px;"></div>
                                </div>
                            </div>
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#dcece1; margin-bottom:0.25rem;">
                                    <span>${_t('radar_body', 'Malt & Body Structure')}</span>
                                    <strong style="color:var(--color-gold);">${radar.body}%</strong>
                                </div>
                                <div style="height:5px; background:rgba(255,255,255,0.08); border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.body}%; height:100%; background:linear-gradient(90deg, #aa820a, #d4af37); border-radius:3px;"></div>
                                </div>
                            </div>
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#dcece1; margin-bottom:0.25rem;">
                                    <span>${_t('radar_sweetness', 'Natural Sweetness')}</span>
                                    <strong style="color:var(--color-gold);">${radar.sweetness}%</strong>
                                </div>
                                <div style="height:5px; background:rgba(255,255,255,0.08); border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.sweetness}%; height:100%; background:linear-gradient(90deg, #aa820a, #d4af37); border-radius:3px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Flavor Profile Radar Chart -->
                    <div style="background:rgba(4,14,8,0.7); border:1px solid rgba(212,175,55,0.3); border-radius:16px; padding:1.75rem 1.5rem; text-align:center;">
                        <h4 style="font-family:var(--font-serif); color:#ffffff; font-size:1.15rem; margin-bottom:0.25rem;">${_t('dossier_sensory_title', '6-Point Sensory Radar')}</h4>
                        <p style="color:var(--color-text-muted); font-size:0.78rem; margin-bottom:1.25rem;">${_t('dossier_terroir_title', 'Harmonic balance calibrated by Estate Sommelier')}</p>
                        
                        <div style="max-width:270px; margin:0 auto;">
                            ${radarSvg}
                        </div>
                    </div>
                </div>

                <!-- Bottom: Interactive Live Digital Steep Timer Section -->
                <div class="digital-steep-timer-block" style="background:linear-gradient(135deg, rgba(4,14,8,0.92) 0%, rgba(8,24,14,0.95) 100%); border:1px solid var(--color-gold); border-radius:18px; padding:2rem; box-shadow:0 12px 35px rgba(0,0,0,0.6);">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid rgba(212,175,55,0.2); padding-bottom:1rem;">
                        <div>
                            <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:1.5px; color:var(--color-gold); font-weight:700; display:block; margin-bottom:0.2rem;">${_t('brew_section_tag', 'PRECISION BREWING RITUAL')}</span>
                            <h3 style="font-family:var(--font-serif); color:#ffffff; font-size:1.4rem; margin:0;">${_t('dossier_steep_title', 'Live Sommelier Steep Timer')}</h3>
                        </div>
                        
                        <!-- Infusion Selector Tabs -->
                        <div class="infusion-selector-tabs" style="display:flex; gap:0.4rem; background:rgba(255,255,255,0.04); border:1px solid rgba(212,175,55,0.25); border-radius:30px; padding:0.25rem;">
                            ${infusions.map((inf, idx) => `
                                <button type="button" class="infusion-tab-btn ${idx === 0 ? 'active' : ''}" data-seconds="${inf.seconds}" data-label="${inf.label}" style="padding:0.4rem 0.9rem; font-size:0.75rem; border-radius:20px; border:none; cursor:pointer; transition:all 0.2s;">
                                    ${idx + 1} (${Math.floor(inf.seconds/60)}m)
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Timer Layout: Specs & Circular Clock -->
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center;" class="steep-timer-inner-grid">
                        <!-- Brewing Parameters -->
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                            <div style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.2); border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:var(--color-text-muted); display:block; margin-bottom:0.25rem;">${_t('stat_water_temp', 'Water Temp')}</span>
                                <strong style="font-size:1.15rem; color:var(--color-gold);">${product.steepTemp || '95°C'}</strong>
                            </div>
                            <div style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.2); border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:var(--color-text-muted); display:block; margin-bottom:0.25rem;">${_t('stat_leaf_ratio', 'Leaf Ratio')}</span>
                                <strong style="font-size:1.15rem; color:#ffffff;">${product.leafRatio || '2.5g / 180ml'}</strong>
                            </div>
                            <div style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.2); border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:var(--color-text-muted); display:block; margin-bottom:0.25rem;">${_t('stat_steep_duration', 'Steep Duration')}</span>
                                <strong id="modal-infusion-target-label" style="font-size:0.85rem; color:#dcece1; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">1st (Aroma)</strong>
                            </div>
                            <div style="background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.2); border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:var(--color-text-muted); display:block; margin-bottom:0.25rem;">${_t('stat_serving_vessel', 'Serving Vessel')}</span>
                                <strong style="font-size:0.95rem; color:#ffffff;">${_t('brew_vessel_porcelain', 'Porcelain / Glass')}</strong>
                            </div>
                        </div>

                        <!-- Circular Countdown Ring & Controls -->
                        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
                            <div style="position:relative; width:160px; height:160px; display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem;">
                                <svg width="160" height="160" viewBox="0 0 160 160" style="transform:rotate(-90deg);">
                                    <circle cx="80" cy="80" r="70" stroke="rgba(212,175,55,0.18)" stroke-width="8" fill="none" />
                                    <circle id="modal-timer-progress-ring" cx="80" cy="80" r="70" stroke="#d4af37" stroke-width="8" stroke-dasharray="440" stroke-dashoffset="0" stroke-linecap="round" fill="none" style="transition:stroke-dashoffset 0.8s linear;" />
                                </svg>
                                <div style="position:absolute; text-align:center;">
                                    <span id="modal-timer-digits" style="font-family:monospace; font-size:2.1rem; font-weight:700; color:#ffffff; letter-spacing:1px; display:block; line-height:1;">
                                        ${initialMin}:${initialSec}
                                    </span>
                                    <span id="modal-timer-status-text" style="font-size:0.68rem; text-transform:uppercase; letter-spacing:1.5px; color:var(--color-gold); font-weight:700; margin-top:0.35rem; display:block;">
                                        ${_t('timer_standby', 'READY TO STEEP')}
                                    </span>
                                </div>
                            </div>

                            <!-- Timer Action Buttons -->
                            <div style="display:flex; gap:0.6rem; align-items:center;">
                                <button type="button" id="btn-timer-start-pause" class="btn btn-primary" style="padding:0.65rem 1.4rem; font-size:0.82rem; font-weight:700;">
                                    ▶ ${_t('btn_start_steep', 'Start Steep')}
                                </button>
                                <button type="button" id="btn-timer-plus-30" class="btn btn-outline" style="padding:0.65rem 0.9rem; font-size:0.8rem; border-color:rgba(212,175,55,0.3); color:var(--color-gold);" title="Add 30 Seconds">
                                    +30s
                                </button>
                                <button type="button" id="btn-timer-reset" class="btn btn-outline" style="padding:0.65rem 0.9rem; font-size:0.8rem; border-color:rgba(255,255,255,0.15); color:var(--color-text-muted);" title="${_t('btn_reset_steep', 'Reset Timer')}">
                                    ↺ ${_t('btn_reset_steep', 'Reset')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer Quick Actions -->
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2rem; flex-wrap:wrap; gap:1rem;">
                    <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                        <button type="button" class="btn btn-primary btn-modal-add-to-cart" data-id="${product.id}" style="padding:0.85rem 1.6rem; font-size:0.9rem; display:inline-flex; align-items:center; gap:0.45rem;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            ${_t('btn_add_to_bag', 'Add to Bag')} — ${window.TeaFactoryStore.formatCurrency(product.price)}
                        </button>
                        <button type="button" class="btn btn-outline btn-book-prod" data-id="${product.id}" style="padding:0.85rem 1.4rem; font-size:0.9rem; border-color:rgba(255,255,255,0.25); color:#ffffff;">
                            ${_t('btn_quick_order', 'Quick Order')}
                        </button>
                    </div>
                    <a href="https://wa.me/94771757556?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20am%20interested%20in%20learning%20more%20about%20${encodeURIComponent(product.name)}." target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="color:#25d366; border-color:rgba(37,211,102,0.4); text-decoration:none; display:flex; align-items:center; gap:0.4rem; font-size:0.88rem; padding:0.85rem 1.35rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                        Ask Sommelier on WhatsApp
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const closeModal = () => {
            if (window.activeSommelierModalTimer) {
                clearInterval(window.activeSommelierModalTimer);
                window.activeSommelierModalTimer = null;
            }
            modal.remove();
        };

        document.getElementById('close-connoisseur-modal-btn')?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Bind quick buy button in modal
        modal.querySelector('.btn-book-prod')?.addEventListener('click', () => {
            closeModal();
            if (window.appOpenProductDrawer) {
                window.appOpenProductDrawer(product.id);
            }
        });
    },

    renderBrewingGuide(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="brewing-guide-card">
                <span class="section-tag">${_t('brew_section_tag', 'Precision Steeping')}</span>
                <h3 class="home-section-title" style="margin-bottom: 0.75rem;">${_t('brew_section_title', "Sommelier's Brewing Ritual & Live Timer")}</h3>
                <p class="view-subtitle" style="margin-bottom: 2.25rem; max-width: 650px;">${_t('brew_section_sub', 'Unlock the pure essence of our high-altitude leaves with calibrated water temperatures, leaf ratios, and our interactive live countdown chime.')}</p>
                
                <div class="brewing-ritual-tabs">
                    <button class="brewing-tab-btn active" data-type="black" data-temp="95°C" data-seconds="180" data-ratio="2.5g / 180ml" data-vessel="${_t('brew_vessel_porcelain', 'Porcelain / Clay')}">${_t('brew_tab_black', 'Black Tea Reserve')}</button>
                    <button class="brewing-tab-btn" data-type="white" data-temp="80°C" data-seconds="240" data-ratio="3.0g / 180ml" data-vessel="${_t('brew_vessel_glass', 'Glass / White Ceramic')}">${_t('brew_tab_white', 'White Silver Tips')}</button>
                    <button class="brewing-tab-btn" data-type="green" data-temp="82°C" data-seconds="150" data-ratio="2.0g / 180ml" data-vessel="${_t('brew_vessel_celadon', 'Glass / Celadon Cup')}">${_t('brew_tab_green', 'Organic Emerald Green')}</button>
                </div>
                
                <!-- Home Live Steep Timer & Parameter Grid -->
                <div class="home-brewing-timer-wrapper" style="display:grid; grid-template-columns:1.2fr 1fr; gap:2.5rem; align-items:center; background:rgba(4,14,8,0.7); border:1px solid rgba(212,175,55,0.3); border-radius:18px; padding:2.5rem; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
                    <!-- Left: Brewing Parameters -->
                    <div id="brewing-stats-container">
                        <div class="brewing-stats-grid">
                            <div class="brewing-stat-item">
                                <div class="brewing-stat-value" id="home-brew-stat-temp">95°C</div>
                                <div class="brewing-stat-label">${_t('stat_water_temp', 'Water Temp')}</div>
                            </div>
                            <div class="brewing-stat-item">
                                <div class="brewing-stat-value" id="home-brew-stat-duration">3 Min</div>
                                <div class="brewing-stat-label">${_t('stat_steep_duration', 'Steep Duration')}</div>
                            </div>
                            <div class="brewing-stat-item">
                                <div class="brewing-stat-value" id="home-brew-stat-ratio">2.5g / 180ml</div>
                                <div class="brewing-stat-label">${_t('stat_leaf_ratio', 'Leaf Ratio')}</div>
                            </div>
                            <div class="brewing-stat-item">
                                <div class="brewing-stat-value" id="home-brew-stat-vessel">Porcelain / Clay</div>
                                <div class="brewing-stat-label">${_t('stat_serving_vessel', 'Serving Vessel')}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Home Live Steep Countdown Timer Ring -->
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; border-left:1px solid rgba(212,175,55,0.18); padding-left:1.5rem;" class="home-timer-col">
                        <div style="position:relative; width:150px; height:150px; display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem;">
                            <svg width="150" height="150" viewBox="0 0 150 150" style="transform:rotate(-90deg);">
                                <circle cx="75" cy="75" r="65" stroke="rgba(212,175,55,0.15)" stroke-width="7" fill="none" />
                                <circle id="home-timer-progress-ring" cx="75" cy="75" r="65" stroke="#d4af37" stroke-width="7" stroke-dasharray="408" stroke-dashoffset="0" stroke-linecap="round" fill="none" style="transition:stroke-dashoffset 0.8s linear;" />
                            </svg>
                            <div style="position:absolute; text-align:center;">
                                <span id="home-timer-digits" style="font-family:monospace; font-size:1.9rem; font-weight:700; color:#ffffff; letter-spacing:1px; display:block; line-height:1;">
                                    03:00
                                </span>
                                <span id="home-timer-status" style="font-size:0.65rem; text-transform:uppercase; letter-spacing:1.5px; color:var(--color-gold); font-weight:700; margin-top:0.3rem; display:block;">
                                    ${_t('timer_standby', 'STANDBY')}
                                </span>
                            </div>
                        </div>

                        <!-- Timer Controls -->
                        <div style="display:flex; gap:0.5rem; align-items:center;">
                            <button type="button" id="btn-home-timer-start" class="btn btn-primary" style="padding:0.6rem 1.25rem; font-size:0.8rem; font-weight:700;">
                                ▶ ${_t('btn_start_steep', 'Start Steep')}
                            </button>
                            <button type="button" id="btn-home-timer-reset" class="btn btn-outline" style="padding:0.6rem 0.85rem; font-size:0.78rem; border-color:rgba(255,255,255,0.2); color:var(--color-text-muted);">
                                ↺ ${_t('btn_reset_steep', 'Reset')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // ─── Public Order Payment Page ────────────────────────────────────────────
    renderOrderPage(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Load recent order IDs placed/viewed on this device
        const recentIds = window.TeaFactoryStore.getRecentOrderIds();

        // Build the recent orders panel (only if any exist)
        let recentOrdersHtml = '';
        if (recentIds.length > 0) {
            const recentCards = recentIds.map(id => {
                const order = window.TeaFactoryStore.getOrderById(id);
                if (!order) return '';
                const isPaid      = order.status === 'Paid & Confirmed';
                const isCancelled = order.status === 'Cancelled';
                const isSlip      = order.status === 'Slip Submitted';
                const isAwaiting  = order.status === 'Awaiting Payment' || order.status === 'Order Created';

                const statusDot = isPaid      ? '#81c784'
                                : isCancelled ? '#ef5350'
                                : isSlip      ? '#d4af37'
                                : '#90caf9';

                const statusIcon = isPaid ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
                                 : isSlip ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`
                                 : isCancelled ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
                                 : `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

                const priceDisplay = order.formattedPrice || `$${(order.price || 0).toFixed(2)}`;
                const shortBox = (order.boxName || 'Order').length > 36 ? order.boxName.slice(0, 36) + '…' : (order.boxName || 'Order');

                return `
                    <div class="recent-order-card" data-recent-order-id="${order.id}" role="button" tabindex="0" title="Click to load order ${order.id}">
                        <div class="recent-order-card-header">
                            <span class="recent-order-id-pill">${order.id}</span>
                            <span class="recent-order-status-badge" style="color: ${statusDot}; border-color: ${statusDot}30; background: ${statusDot}15;">
                                ${statusIcon} ${order.status}
                            </span>
                        </div>
                        <div class="recent-order-card-body">
                            <div class="recent-order-customer">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                ${order.customerName || 'Guest'}
                            </div>
                            <div class="recent-order-meta">
                                <span>${shortBox}</span>
                                <strong style="color: var(--color-gold);">${priceDisplay}</strong>
                            </div>
                            <div class="recent-order-date">${order.createdAt || ''}</div>
                        </div>
                        <div class="recent-order-card-footer">
                            <span class="recent-order-load-cta">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                Open Order
                            </span>
                        </div>
                    </div>
                `;
            }).filter(Boolean).join('');

            recentOrdersHtml = `
                <div class="recent-orders-panel" id="recent-orders-panel">
                    <div class="recent-orders-panel-header">
                        <div class="recent-orders-panel-title-row">
                            <div style="display: flex; align-items: center; gap: 0.55rem;">
                                <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%); border: 1px solid rgba(212,175,55,0.35); display: flex; align-items: center; justify-content: center;">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <div>
                                    <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.2px; color: var(--color-gold); font-weight: 700;">Recently Viewed on This Device</div>
                                    <div class="recent-orders-panel-subtitle">${recentIds.length} recent order${recentIds.length !== 1 ? 's' : ''} — click a card to load instantly</div>
                                </div>
                            </div>
                            <button class="recent-orders-clear-btn" id="recent-orders-clear-btn" title="Clear order history from this device">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
                                Clear History
                            </button>
                        </div>
                    </div>
                    <div class="recent-orders-cards-scroll">
                        ${recentCards}
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div style="max-width: 700px; margin: 0 auto; padding: 2rem 0;">
                <div class="tour-header-block" style="margin-bottom: 2.5rem; text-align: center;">
                    <span class="section-tag">Gift Box Purchase</span>
                    <h2 class="view-title">My Order Payment</h2>
                    <p class="view-subtitle">Enter your Order ID shared by the Rock One Wild Tea concierge team to view your order details and complete payment.</p>
                </div>

                ${recentOrdersHtml}

                <!-- Order Lookup Form -->
                <div class="panel-card" style="margin-bottom: 2rem;" id="order-lookup-card">
                    <h3 class="panel-title" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        Look Up Your Order
                    </h3>
                    <p class="panel-desc" style="margin-bottom: 1.5rem;">Your Order ID was shared by our concierge team via WhatsApp or Email (e.g. <span style="font-family: monospace; color: var(--color-gold);">ORD-12345678</span>).</p>
                    <form id="order-lookup-form" class="admin-form" style="flex-direction: row; gap: 0.75rem; align-items: flex-end; flex-wrap: wrap;">
                        <div class="form-group" style="flex: 1; min-width: 220px; margin-bottom: 0;">
                            <label for="order-id-input">Order ID</label>
                            <input type="text" id="order-id-input" placeholder="ORD-12345678" style="font-family: monospace; text-transform: uppercase; font-size: 1rem;" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="padding: 0.75rem 2rem; white-space: nowrap;">View Order →</button>
                    </form>
                </div>

                <!-- Order Details Panel (hidden until lookup) -->
                <div id="order-details-panel" style="display: none;"></div>
            </div>
        `;
    },

    // Renders a found order's details and payment options into the order details panel
    renderOrderDetails(order) {
        const panel = document.getElementById('order-details-panel');
        if (!panel) return;

        // Always show BOTH payment options — clients may prefer online OR bank regardless
        // of what was selected at checkout. Gateway link only renders when paymentLink is set.
        const showOnline = true;
        const showBank   = true;

        const isPaid      = order.status === 'Paid & Confirmed';
        const isCancelled = order.status === 'Cancelled';
        const isSlipSent  = order.status === 'Slip Submitted';

        panel.style.display = 'block';
        panel.innerHTML = `
            <!-- Order Summary Card -->
            <div class="panel-card" style="margin-bottom: 1.5rem; border: 1px solid ${isPaid ? 'rgba(46,125,50,0.4)' : isCancelled ? 'rgba(198,40,40,0.3)' : 'rgba(212,175,55,0.25)'};">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                    <div>
                        <div style="font-family: monospace; font-size: 1rem; color: var(--color-gold); font-weight: 700; margin-bottom: 0.2rem;">${order.id}</div>
                        <div style="font-size: 0.75rem; color: var(--color-text-muted);">Order created: ${order.createdAt}</div>
                    </div>
                    <span style="padding: 0.35rem 0.9rem; border-radius: 20px; font-size: 0.7rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;
                        background: ${isPaid ? 'rgba(46,125,50,0.25)' : isCancelled ? 'rgba(198,40,40,0.2)' : isSlipSent ? 'rgba(212,175,55,0.2)' : 'rgba(255,255,255,0.08)'};
                        color: ${isPaid ? '#81c784' : isCancelled ? '#e57373' : isSlipSent ? 'var(--color-gold)' : 'var(--color-text-primary)'};
                        border: 1px solid ${isPaid ? 'rgba(46,125,50,0.5)' : isCancelled ? 'rgba(198,40,40,0.4)' : isSlipSent ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.12)'};">
                        ${isPaid ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>` : isSlipSent ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>` : ''}${order.status}
                    </span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <div>
                        <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Gift Box</div>
                        <div style="font-weight: 600;">${order.boxName}</div>
                        <div style="font-size: 0.75rem; color: var(--color-text-muted);">${order.seasonName}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Amount Due</div>
                        <div style="font-weight: 700; font-size: 1.3rem; color: var(--color-gold);">$${order.price.toFixed(2)}</div>
                    </div>
                    ${order.ownerNote ? `
                    <div>
                        <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Note from Concierge</div>
                        <div style="font-size: 0.8rem; font-style: italic; color: var(--color-text-primary);">${order.ownerNote}</div>
                    </div>` : ''}
                </div>

                ${isPaid ? `
                    <div style="text-align: center; padding: 1.5rem; background: rgba(46,125,50,0.12); border-radius: 8px; border: 1px solid rgba(46,125,50,0.3);">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#81c784" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 0.5rem;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        <div style="font-weight: 700; color: #81c784; font-size: 1rem; margin-bottom: 0.25rem;">Payment Confirmed!</div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">Your gift box has been reserved. Our concierge team will contact you shortly regarding delivery.</div>
                    </div>
                ` : isCancelled ? `
                    <div style="text-align: center; padding: 1.5rem; background: rgba(198,40,40,0.1); border-radius: 8px; border: 1px solid rgba(198,40,40,0.3);">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#e57373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 0.5rem;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        <div style="font-weight: 700; color: #e57373; font-size: 1rem; margin-bottom: 0.25rem;">Order Cancelled</div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">This order has been cancelled. Please contact our concierge team if you believe this is a mistake.</div>
                    </div>
                ` : isSlipSent ? `
                    <div style="text-align: center; padding: 1.5rem; background: rgba(212,175,55,0.08); border-radius: 8px; border: 1px dashed rgba(212,175,55,0.3);">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 0.5rem;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                        <div style="font-weight: 700; color: var(--color-gold); font-size: 1rem; margin-bottom: 0.25rem;">Slip Submitted — Under Review</div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">We received your deposit slip. Our team will verify and confirm your order within 24 hours.</div>
                    </div>
                ` : `
                    <!-- Payment Options — both always shown -->
                    <h4 style="font-family: var(--font-serif); color: var(--color-white); margin-bottom: 1.25rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.45rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        Complete Your Payment
                    </h4>

                    <!-- Option A: Online Payment -->
                    <div style="margin-bottom: 1.25rem; padding: 1.25rem; background: rgba(46,125,50,0.1); border: 1px solid rgba(46,125,50,0.25); border-radius: 8px;">
                        <div style="font-weight: 700; color: #81c784; margin-bottom: 0.5rem; font-size: 0.9rem;">Option A — Pay Online (Instant)</div>
                        ${order.paymentLink ? `
                            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem;">Click the button below to pay securely via our payment gateway. Your order will be confirmed automatically.</div>
                            <a href="${order.paymentLink}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; font-size: 0.9rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                Pay ${order.formattedPrice || '$' + order.price.toFixed(2)} Online →
                            </a>
                        ` : `
                            <div style="font-size: 0.8rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 0.45rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                Our concierge team will share a personal payment link via WhatsApp or Email shortly.
                            </div>
                        `}
                    </div>

                    <!-- Option B: Bank Cash Deposit + Slip Upload -->
                    <div style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(212,175,55,0.2); border-radius: 8px;">
                        <div style="font-weight: 700; color: var(--color-gold); margin-bottom: 0.75rem; font-size: 0.9rem;">Option B — Bank Cash Deposit &amp; Slip Upload</div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem;">Deposit the exact amount at any branch, then attach and submit your deposit slip image below for instant verification.</div>
                        <div class="bank-details-block" style="margin-bottom: 1.25rem;">
                            <div class="bank-detail-row"><span>Bank:</span><strong>${order.bankName || 'Commercial Bank of Ceylon (Ettampitiya / Bandarawela)'}</strong></div>
                            <div class="bank-detail-row"><span>Account Name:</span><strong>${order.accountName || 'Rock One Wild Tea (Pvt) Ltd'}</strong></div>
                            <div class="bank-detail-row"><span>Account No:</span><strong>${order.accountNo || '8002345678'}</strong></div>
                            ${order.referenceNote ? `<div class="bank-detail-row"><span>Reference:</span><strong>${order.referenceNote}</strong></div>` : `<div class="bank-detail-row"><span>Reference:</span><strong>${order.id}</strong></div>`}
                            <div class="bank-detail-row" style="border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.5rem; margin-top: 0.5rem;">
                                <span>Amount:</span><strong style="color: var(--color-gold);">${order.formattedPrice || '$' + order.price.toFixed(2)}</strong>
                            </div>
                        </div>

                        <!-- Slip Upload Form -->
                        <form id="order-slip-form" class="admin-form" style="gap: 1rem;">
                            <div class="form-group">
                                <label>Attach Your Deposit Slip (Image)</label>
                                <div class="file-upload-zone" id="order-slip-zone">
                                    <div class="file-upload-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                    </div>
                                    <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse file</span></div>
                                    <div class="file-upload-hint">JPG, PNG or PDF — Max 5MB</div>
                                    <input type="file" id="order-slip-file" accept="image/*,.pdf" style="display:none;">
                                </div>
                                <div id="order-slip-preview" class="slip-preview" style="display:none;"></div>
                            </div>
                            <button type="submit" class="btn btn-primary w-full" data-order-id="${order.id}" style="display:inline-flex; align-items:center; justify-content:center; gap:0.5rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                Submit Deposit Slip for Verification
                            </button>
                        </form>
                    </div>
                `}
            </div>

            ${isPaid ? `
            <!-- ── Allocation Certificate Download Strip (only after payment confirmed) ── -->
            <div class="cert-download-strip" id="cert-download-strip" data-order-id="${order.id}">
                <div class="cert-download-strip-left">
                    <div class="cert-download-icon-wrap">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="12" y1="18" x2="12" y2="12"></line>
                            <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                    </div>
                    <div>
                        <div class="cert-download-label">Luxury Allocation Certificate</div>
                        <div class="cert-download-sublabel">Gold estate crest · Wax seal engraving · Official allocation record</div>
                    </div>
                </div>
                <button class="btn-cert-download" id="btn-cert-download" data-order-id="${order.id}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 13 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="13"></line>
                    </svg>
                    Download Certificate (PDF)
                </button>
            </div>
            ` : ''}
        `;
    },

    // ─── Active Reservation Audit Log Table Rows Renderer ─────────────────────
    renderAuditTableRows(bookings) {
        if (!bookings || bookings.length === 0) {
            return `
                <tr>
                    <td colspan="7" class="text-center" style="padding: 3rem 1.5rem; color: var(--color-text-muted);">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 0.5rem;"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                        <div style="font-weight: 600; font-size: 0.95rem; color: var(--color-white); margin-bottom: 0.25rem;">No Records Found</div>
                        <div style="font-size: 0.8rem;">No reservations match the active filter criteria.</div>
                    </td>
                </tr>
            `;
        }

        return bookings.map(b => {
            const initials = (b.customerName || 'Guest')
                .trim()
                .split(/\s+/)
                .map(n => n[0])
                .join('')
                .substring(0, 2)
                .toUpperCase() || 'GT';

            const isTour = b.type === 'tour';
            const isProd = b.type === 'product';

            const itemTitle = isTour ? b.packageName : (isProd ? b.productName : b.boxName);
            const itemSub = isTour 
                ? `Slot: ${b.timeSlot} • ${b.guests || 1} Guest${(b.guests || 1) > 1 ? 's' : ''}`
                : (isProd 
                    ? `${b.weight || '100g'} Tin • Single Estate` 
                    : `${b.seasonName || 'Harvest Series'} (S${b.seriesNumber || 1})`);

            const dateSchedule = b.preferredDate || b.tourDate || (b.bookingDate ? b.bookingDate.split(',')[0] : 'Scheduled');

            let statusPillHtml = '';
            if (b.status === 'Paid & Confirmed') {
                statusPillHtml = `<span class="type-pill type-success-pill" style="display:inline-flex; align-items:center; gap:0.25rem;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Confirmed</span>`;
            } else if (b.status === 'Completed') {
                statusPillHtml = `<span class="type-pill type-success-pill" style="background:rgba(46,125,50,0.3); border-color:#81c784; display:inline-flex; align-items:center; gap:0.25rem;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed</span>`;
            } else if (b.status === 'Enquiry Pending') {
                statusPillHtml = `<span class="type-pill type-pending-pill" style="display:inline-flex; align-items:center; gap:0.25rem;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Enquiry</span>`;
            } else if (b.status === 'Order Created') {
                statusPillHtml = `<span class="type-pill type-order-created" style="display:inline-flex; align-items:center; gap:0.25rem;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Order Created</span>`;
            } else if (b.status === 'Slip Submitted') {
                statusPillHtml = `<span class="type-pill type-pending-pill" style="background:rgba(212,175,55,0.2); color:var(--color-gold); display:inline-flex; align-items:center; gap:0.25rem;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Slip Uploaded</span>`;
            } else if (b.status === 'Cancelled') {
                statusPillHtml = `<span class="type-pill type-error-pill" style="display:inline-flex; align-items:center; gap:0.25rem;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Cancelled</span>`;
            } else {
                statusPillHtml = `<span class="type-pill type-pending-pill" style="display:inline-flex; align-items:center; gap:0.25rem;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Pending</span>`;
            }

            const phoneClean = (b.phone || '').replace(/[^0-9+]/g, '');

            return `
                <tr style="${b.status === 'Cancelled' ? 'opacity: 0.5;' : ''}" data-booking-id="${b.id}">
                    <!-- Ref ID & Timestamp -->
                    <td>
                        <span class="ref-id-badge">${b.id}</span>
                        <div style="font-size: 0.72rem; color: var(--color-text-muted); margin-top: 0.35rem; white-space: nowrap;">
                            ${b.bookingDate || 'Recent'}
                        </div>
                    </td>

                    <!-- Client Profile -->
                    <td>
                        <div class="client-profile-box">
                            <div class="client-avatar">${initials}</div>
                            <div class="client-info-stack">
                                <div class="client-name">${b.customerName}</div>
                                <div class="client-contact-links">
                                    <a href="mailto:${b.email}" title="Send Email" style="display:inline-flex; align-items:center; gap:0.25rem;">
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        ${b.email}
                                    </a>
                                    ${b.phone ? `<span>•</span><a href="https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneClean)}" target="_blank" title="WhatsApp Message" style="display:inline-flex; align-items:center; gap:0.25rem;">
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        ${b.phone}
                                    </a>` : ''}
                                </div>
                            </div>
                        </div>
                    </td>

                    <!-- Category & Item -->
                    <td>
                        <div style="margin-bottom: 0.35rem;">
                            <span class="type-pill ${isTour ? 'type-tour' : (isProd ? 'type-product' : 'type-gift')}" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                ${isTour 
                                    ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg> Tour Slot` 
                                    : (isProd 
                                        ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Tea Product` 
                                        : `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="5"></rect><polyline points="20 12 20 22 4 22 4 12"></polyline><line x1="12" y1="22" x2="12" y2="7"></line></svg> Collector Chest`)}
                            </span>
                        </div>
                        <div style="font-weight: 600; font-size: 0.85rem; color: var(--color-white);">${itemTitle}</div>
                        <div style="font-size: 0.72rem; color: var(--color-text-muted);">${itemSub}</div>
                    </td>

                    <!-- Schedule / Arrival -->
                    <td>
                        <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 600; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.35rem;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            ${dateSchedule}
                        </div>
                        ${b.deliveryRange && !isTour ? `<div style="font-size: 0.7rem; color: var(--color-text-muted);">Delivery: ${b.deliveryRange}</div>` : ''}
                        ${b.giftPackaging ? `
                            <div style="margin-top: 0.25rem;">
                                <span class="type-pill" style="font-size: 0.65rem; background: rgba(212,175,55,0.15); color: var(--color-gold); border: 1px solid rgba(212,175,55,0.35); display: inline-flex; align-items: center; gap: 0.25rem;">
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect></svg>
                                    ${b.waxSealColor || 'Gold Seal'}${b.monogramInitials ? ` • Monogram: ${b.monogramInitials}` : ''}
                                </span>
                            </div>
                        ` : ''}
                        ${b.message ? `<div style="font-size: 0.7rem; color: #b0bec5; font-style: italic; max-width: 170px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 0.2rem;" title="${b.message}">"${b.message}"</div>` : ''}
                    </td>

                    <!-- Amount -->
                    <td>
                        ${b.status === 'Enquiry Pending' 
                            ? `<span style="font-size: 0.75rem; color: var(--color-gold); font-style: italic; background: rgba(212,175,55,0.08); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px dashed rgba(212,175,55,0.3);">Quote Inquiry</span>`
                            : `<span style="font-weight: 700; font-size: 0.95rem; color: var(--color-gold);">${b.formattedPrice || window.TeaFactoryStore.formatCurrency(b.price || b.depositPaid || 0)}</span>`
                        }
                    </td>

                    <!-- Status -->
                    <td>
                        ${statusPillHtml}
                        ${b.slipImage ? `
                            <div style="margin-top:0.3rem;">
                                <span class="type-pill type-pending-pill" style="font-size:0.62rem; background:rgba(212,175,55,0.2); color:var(--color-gold); border-color:rgba(212,175,55,0.45); cursor:pointer; display:inline-flex; align-items:center; gap:0.25rem;" onclick="showReservationDetailModal(window.TeaFactoryStore.getBookings().find(x=>x.id==='${b.id}'))" title="Click to view attached deposit slip">
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                    Slip Attached
                                </span>
                            </div>
                        ` : ''}
                    </td>

                    <!-- Actions Toolbar -->
                    <td>
                        <div class="admin-action-btn-group" style="justify-content: flex-end;">
                            ${b.slipImage && b.status !== 'Paid & Confirmed' && b.status !== 'Completed' && b.status !== 'Cancelled' ? `
                                <button class="admin-action-btn btn-act-verify btn-validate-deposit-slip" data-id="${b.id}" title="Review &amp; Validate Attached Deposit Slip" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> Validate Slip
                                </button>
                            ` : ''}

                            ${b.status === 'Enquiry Pending' ? `
                                <button class="admin-action-btn btn-act-convert btn-convert-to-order" data-id="${b.id}" title="Convert to Payment Order" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Convert
                                </button>
                                <button class="admin-action-btn btn-act-cancel btn-cancel-booking" data-id="${b.id}" title="Cancel Enquiry" style="display:inline-flex; align-items:center; justify-content:center;">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            ` : (!b.status || b.status === 'Pending Verification') ? `
                                ${!b.slipImage ? `
                                    <button class="admin-action-btn btn-act-verify btn-verify-booking" data-id="${b.id}" title="Verify Reservation" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Verify
                                    </button>
                                ` : ''}
                                <button class="admin-action-btn btn-act-cancel btn-cancel-booking" data-id="${b.id}" title="Cancel Reservation" style="display:inline-flex; align-items:center; justify-content:center;">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            ` : (b.status === 'Paid & Confirmed') ? `
                                <button class="admin-action-btn btn-act-complete btn-complete-booking" data-id="${b.id}" title="Mark Tour / Order Fulfilled" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Complete
                                </button>
                                <button class="admin-action-btn btn-act-cancel btn-cancel-booking" data-id="${b.id}" title="Cancel Reservation" style="display:inline-flex; align-items:center; justify-content:center;">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            ` : (b.status === 'Order Created' || b.status === 'Slip Submitted') ? `
                                <button class="admin-action-btn btn-act-convert" onclick="document.querySelector('[data-subtab=orders]').click()" title="View in Orders Desk" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Orders Desk
                                </button>
                            ` : ''}

                            <button class="admin-action-btn btn-act-details btn-print-packing-slip" data-id="${b.id}" title="Print Packaging Slip &amp; Engraving Work Order" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg> Slip
                            </button>

                            <button class="admin-action-btn btn-act-details btn-view-booking-details" data-id="${b.id}" title="View Complete Record" style="display:inline-flex; align-items:center; gap:0.3rem;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> Details
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    },

    // 12. Render Bespoke Gift Packaging & Presentation Accordion Component
    renderBespokeGiftOptions(prefix = 'prod') {
        return `
            <div class="bespoke-gift-accordion" id="${prefix}-gift-accordion">
                <div class="bespoke-gift-toggle-header" id="${prefix}-gift-toggle">
                    <div class="bespoke-toggle-left">
                        <input type="checkbox" id="${prefix}-enable-gift" class="bespoke-gift-checkbox">
                        <label for="${prefix}-enable-gift" class="bespoke-toggle-label">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                            <span style="font-weight: 600; color: var(--color-gold);">Add Bespoke Gift Packaging &amp; Presentation</span>
                        </label>
                    </div>
                    <span class="bespoke-complimentary-tag">Complimentary</span>
                </div>

                <div class="bespoke-gift-content" id="${prefix}-gift-panel" style="display: none;">
                    <!-- Wax Seal Color Selector -->
                    <div class="form-group" style="margin-top: 1rem;">
                        <label style="font-size: 0.76rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>Artisan Wax Seal Color</span>
                            <span id="${prefix}-wax-name" style="color: var(--color-gold-light); font-weight: 600; text-transform: none; font-size: 0.75rem;">Imperial Gold Bullion</span>
                        </label>
                        <div class="wax-seal-swatches" id="${prefix}-wax-swatches">
                            <button type="button" class="wax-swatch-btn active" data-prefix="${prefix}" data-color="Imperial Gold" title="Imperial Gold Bullion">
                                <span class="wax-circle wax-gold"></span>
                                <span class="wax-name-sub">Gold</span>
                            </button>
                            <button type="button" class="wax-swatch-btn" data-prefix="${prefix}" data-color="Royal Emerald" title="Royal Emerald Green">
                                <span class="wax-circle wax-emerald"></span>
                                <span class="wax-name-sub">Emerald</span>
                            </button>
                            <button type="button" class="wax-swatch-btn" data-prefix="${prefix}" data-color="Highland Crimson" title="Highland Crimson Red">
                                <span class="wax-circle wax-crimson"></span>
                                <span class="wax-name-sub">Crimson</span>
                            </button>
                            <button type="button" class="wax-swatch-btn" data-prefix="${prefix}" data-color="Midnight Obsidian" title="Midnight Obsidian Black">
                                <span class="wax-circle wax-obsidian"></span>
                                <span class="wax-name-sub">Obsidian</span>
                            </button>
                        </div>
                        <input type="hidden" id="${prefix}-wax-val" value="Imperial Gold">
                    </div>

                    <!-- Monogram Initials Input -->
                    <div class="form-group" style="margin-top: 1rem;">
                        <label for="${prefix}-monogram-input" style="font-size: 0.78rem;">
                            Brass Monogram Plate Engraving 
                            <small style="color: var(--color-text-muted); font-weight: normal;">(Optional &bull; Up to 4 Initials)</small>
                        </label>
                        <input type="text" id="${prefix}-monogram-input" maxlength="4" placeholder="e.g. R.O.W" style="text-transform: uppercase; letter-spacing: 2.5px; font-family: monospace; font-weight: 700; width: 150px;">
                    </div>

                    <!-- Calligraphic Gift Note Textarea -->
                    <div class="form-group" style="margin-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                            <label for="${prefix}-gift-msg" style="margin-bottom: 0; font-size: 0.78rem;">Hand-Calligraphed Sommelier Note</label>
                            <span id="${prefix}-msg-count" style="font-size: 0.7rem; color: var(--color-text-muted);">0 / 160</span>
                        </div>
                        <textarea id="${prefix}-gift-msg" rows="3" maxlength="160" placeholder="Write your custom gift greeting, celebration wish, or personal note..." style="font-size: 0.85rem; line-height: 1.45;"></textarea>
                    </div>

                    <!-- Live Calligraphic Preview Card -->
                    <div class="gift-calligraphy-preview-card" id="${prefix}-card-preview" style="display: none;">
                        <div class="gift-preview-header">
                            <span class="gift-preview-crest">ROCK ONE WILD TEA &bull; SANCTUARY</span>
                            <div class="gift-preview-monogram" id="${prefix}-monogram-badge"></div>
                        </div>
                        <div class="gift-preview-text" id="${prefix}-card-text">"Your message will appear here in gold calligraphy..."</div>
                        <div class="gift-preview-seal-stamp" id="${prefix}-card-seal">
                            <span class="stamp-dot stamp-gold" id="${prefix}-stamp-dot"></span>
                            <span id="${prefix}-seal-label">Imperial Gold Seal</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // ── Multi-Item Cart Slide-Over Drawer ──
    renderCartDrawer(containerId = 'cart-drawer-body') {
        const container = document.getElementById(containerId);
        if (!container) return;

        const cart = window.TeaFactoryStore.getCart();
        const totalCount = window.TeaFactoryStore.getCartTotalCount();
        const subtotalUSD = window.TeaFactoryStore.getCartSubtotal();
        const formattedSubtotal = window.TeaFactoryStore.formatCurrency(subtotalUSD);

        // Update header count label
        const countLabel = document.getElementById('cart-drawer-count-label');
        if (countLabel) {
            countLabel.textContent = `${totalCount} ${_t('cart_qty', 'item')}${totalCount === 1 ? '' : 's'} ${_t('cart_drawer_title', 'in reserve bag')}`;
        }

        // 1. Empty State
        if (!cart || cart.length === 0) {
            container.innerHTML = `
                <div class="cart-empty-state" style="text-align: center; padding: 4.5rem 1.5rem;">
                    <div class="cart-empty-icon-wrap" style="width: 84px; height: 84px; border-radius: 50%; background: rgba(212,175,55,0.08); border: 1px dashed rgba(212,175,55,0.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; color: var(--color-gold);">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </div>
                    <h4 style="font-family: var(--font-serif); color: #ffffff; font-size: 1.35rem; margin-bottom: 0.5rem; letter-spacing: 0.5px;">${_t('cart_empty_title', 'Your Reserve Bag is Empty')}</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.85rem; max-width: 320px; margin: 0 auto 2rem auto; line-height: 1.55;">
                        ${_t('cart_empty_sub', 'Explore our single-estate montane harvests and collector series chests to assemble your multi-item allocation.')}
                    </p>
                    <button type="button" class="btn btn-primary" onclick="if(window.appCloseCart){window.appCloseCart()}document.getElementById('nav-catalog').click()" style="padding: 0.75rem 2rem; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 0.45rem;">
                        <span>${_t('btn_browse_catalog', 'Explore Storefront Catalog')}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            `;
            return;
        }

        // 2. Items List & In-Drawer Checkout
        const itemsHtml = cart.map(item => {
            const unitPrice = window.TeaFactoryStore.formatCurrency(item.price);
            const lineTotal = window.TeaFactoryStore.formatCurrency(item.price * item.quantity);
            const hasGifting = item.giftOptions && item.giftOptions.giftPackaging;

            return `
                <div class="cart-item-row" data-cart-key="${item.cartKey}" style="display: flex; gap: 1rem; align-items: flex-start; padding: 1.15rem 0; border-bottom: 1px solid rgba(212,175,55,0.12);">
                    <div class="cart-item-img-box" style="width: 68px; height: 68px; border-radius: 10px; overflow: hidden; background: rgba(0,0,0,0.4); border: 1px solid rgba(212,175,55,0.25); flex-shrink: 0; position: relative;">
                        <img src="${item.image || 'images/Product.jpeg'}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain;" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                    </div>
                    
                    <div class="cart-item-info" style="flex: 1; min-width: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                            <div>
                                <h5 style="margin: 0 0 0.2rem 0; font-size: 0.92rem; font-weight: 600; color: #ffffff; line-height: 1.3;">${item.name}</h5>
                                <div style="font-size: 0.72rem; color: var(--color-text-muted); display: flex; align-items: center; gap: 0.4rem;">
                                    <span>${item.category || _t('leaf_grade_default', 'Tea Reserve')}</span>
                                    <span>&bull;</span>
                                    <span>${item.weight || '100g'}</span>
                                </div>
                            </div>
                            <button type="button" class="cart-item-remove-btn" data-cart-key="${item.cartKey}" title="Remove item from bag" style="background: none; border: none; color: rgba(255,255,255,0.4); cursor: pointer; padding: 0.2rem; display: flex; align-items: center; transition: color 0.2s;">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        ${hasGifting ? `
                            <div class="cart-item-gift-badge" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.68rem; color: var(--color-gold); background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.25); border-radius: 4px; padding: 0.15rem 0.45rem; margin-top: 0.4rem;">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                <span>${_t('bespoke_wax_label', 'Wax Seal')}: ${item.giftOptions.waxSealColor}${item.giftOptions.monogramInitials ? ` &bull; ${_t('bespoke_monogram_label', 'Monogram')}: ${item.giftOptions.monogramInitials}` : ''}</span>
                            </div>
                        ` : ''}

                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.65rem;">
                            <!-- Quantity Stepper -->
                            <div class="cart-qty-stepper" style="display: inline-flex; align-items: center; border: 1px solid rgba(212,175,55,0.3); border-radius: 6px; overflow: hidden; background: rgba(4,14,8,0.6);">
                                <button type="button" class="cart-qty-btn cart-qty-minus" data-cart-key="${item.cartKey}" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">-</button>
                                <span class="cart-qty-val" style="width: 28px; text-align: center; font-size: 0.78rem; font-weight: 600; color: #fff;">${item.quantity}</span>
                                <button type="button" class="cart-qty-btn cart-qty-plus" data-cart-key="${item.cartKey}" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">+</button>
                            </div>

                            <div style="text-align: right;">
                                <span style="font-size: 0.92rem; font-weight: 700; color: var(--color-gold);">${lineTotal}</span>
                                ${item.quantity > 1 ? `<div style="font-size: 0.68rem; color: var(--color-text-muted);">${unitPrice} ${_t('cart_qty', 'each')}</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="cart-drawer-inner" style="display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 2rem;">
                
                <!-- Items Scroll Area -->
                <div class="cart-items-list" style="display: flex; flex-direction: column;">
                    ${itemsHtml}
                </div>

                <!-- Price Breakdown Card -->
                <div class="cart-summary-box" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 12px; padding: 1.25rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">
                        <span>${_t('cart_subtotal_label', 'Estimated Allocation Subtotal')}</span>
                        <strong style="color: #fff; font-size: 0.95rem;">${formattedSubtotal}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 0.75rem;">
                        <span>${_t('tour_duration_label', 'Dispatch')}</span>
                        <span style="color: var(--color-gold); font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">${_t('bespoke_complimentary', 'Complimentary Estate Courier')}</span>
                    </div>
                    <div style="border-top: 1px dashed rgba(212,175,55,0.2); padding-top: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 0.95rem; font-weight: 700; color: #fff;">${_t('common_price', 'Total Due')} (${window.TeaFactoryStore.getActiveCurrency()})</span>
                        <span style="font-size: 1.35rem; font-weight: 700; color: var(--color-gold);">${formattedSubtotal}</span>
                    </div>
                </div>

                <!-- Checkout Details Form -->
                <div class="cart-checkout-section" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.25rem;">
                    <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); margin-bottom: 1rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <span>${_t('cart_checkout_title', 'Dispatch & Contact Details')}</span>
                    </div>

                    <form id="cart-checkout-form" style="display: flex; flex-direction: column; gap: 0.85rem;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" for="cart-cust-name" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">${_t('cart_name_label', 'Full Name *')}</label>
                            <input class="form-input" type="text" id="cart-cust-name" required placeholder="e.g. Lady Victoria Montgomery" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" for="cart-cust-email" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">${_t('cart_email_label', 'Email *')}</label>
                                <input class="form-input" type="email" id="cart-cust-email" required placeholder="name@domain.com" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                            </div>
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" for="cart-cust-phone" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">${_t('cart_phone_label', 'Phone / WhatsApp *')}</label>
                                <input class="form-input" type="tel" id="cart-cust-phone" required placeholder="+94 77 123 4567" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                            </div>
                        </div>

                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" for="cart-cust-address" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">${_t('cart_address_label', 'Shipping Address')}</label>
                            <input class="form-input" type="text" id="cart-cust-address" placeholder="Apartment / Suite, Street Address, City" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" for="cart-cust-country" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">${_t('cart_country_label', 'Destination *')}</label>
                                <select class="form-input" id="cart-cust-country" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    <option value="Sri Lanka (Domestic Express)">Sri Lanka (Domestic Express)</option>
                                    <option value="United States (Air Freight)">United States (Air Freight)</option>
                                    <option value="United Kingdom (Air Freight)">United Kingdom (Air Freight)</option>
                                    <option value="United Arab Emirates (Air Freight)">United Arab Emirates (Air Freight)</option>
                                    <option value="Japan (Air Freight)">Japan (Air Freight)</option>
                                    <option value="Germany (Air Freight)">Germany (Air Freight)</option>
                                    <option value="Singapore (Air Freight)">Singapore (Air Freight)</option>
                                    <option value="Australia (Air Freight)">Australia (Air Freight)</option>
                                    <option value="Worldwide International">Worldwide International</option>
                                </select>
                            </div>
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" for="cart-payment-method" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">${_t('cart_pay_mode_label', 'Preferred Payment Mode')}</label>
                                <select class="form-input" id="cart-payment-method" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                    <option value="both" selected>${_t('cart_pay_both', 'Both Options Available (Online + Bank Slip)')}</option>
                                    <option value="online">${_t('cart_pay_online', 'Online Payment (Cards / Gateway)')}</option>
                                    <option value="bank">${_t('cart_pay_bank', 'Bank Cash Deposit (Slip Upload)')}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" for="cart-cust-notes" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">${_t('cart_notes_label', 'Special Courier Instructions')}</label>
                            <textarea class="form-input" id="cart-cust-notes" rows="2" placeholder="${_t('cart_notes_placeholder', 'Optional delivery instructions or notes for concierge...')}" style="font-size: 0.82rem; line-height: 1.4; resize: vertical;"></textarea>
                        </div>

                        <button type="submit" id="btn-submit-cart-order" class="btn btn-primary" style="margin-top: 0.5rem; padding: 0.9rem 1.5rem; font-size: 0.92rem; font-weight: 700; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; box-shadow: 0 4px 18px rgba(212,175,55,0.25);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            <span>${_t('btn_place_order', 'Place Reserve Order')} &bull; ${formattedSubtotal}</span>
                        </button>
                    </form>
                </div>

                <!-- Clear Cart link -->
                <div style="text-align: center; margin-top: -0.5rem;">
                    <button type="button" id="btn-clear-cart" style="background: none; border: none; color: var(--color-text-muted); font-size: 0.75rem; cursor: pointer; text-decoration: underline;">
                        ${_t('btn_clear_cart', 'Empty Entire Reserve Bag')}
                    </button>
                </div>
            </div>
        `;
    }
};

window.UIComponents = UIComponents;
