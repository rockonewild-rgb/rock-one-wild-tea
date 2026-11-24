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
    trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
    // 6-Point Calibrated Sensory Spectrum Vector Icons (Encoding-immune & crisp at all resolutions)
    sensoryFloral: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 12a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-6-2a4 4 0 0 0-4-4 4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4zm12 0a4 4 0 0 0-4-4 4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4z"/></svg>`,
    sensoryMalty: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M7 20l10-10M16 4l-4 4M20 8l-4 4M12 8l-4 4M16 12l-4 4M11 5l-2 2M15 9l-2 2M19 13l-2 2M3 21l3-3"/></svg>`,
    sensorySweetness: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    sensoryAstringency: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M11 20A7 7 0 0 1 4 13c0-4.42 4.58-9 7-9 2.42 0 7 4.58 7 9a7 7 0 0 1-7 7z"/><path d="M11 20V10"/></svg>`,
    sensoryBody: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><path d="M12 3v18M6 8l6-2 6 2M6 8a3 3 0 0 0 6 0M18 8a3 3 0 0 0 6 0M3 21h18"/></svg>`,
    sensoryAroma: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px;display:inline-block;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};

// Global Theme Vector SVG Helper
window.getSeasonalThemeIconSvg = function(themeId, size = 18, extraClass = '') {
    const s = size;
    const cls = extraClass ? ` class="${extraClass}"` : '';
    switch (themeId) {
        case 'christmas':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><polygon points="12 2 15 8 13.5 8 17 14 15 14 19 20 5 20 9 14 7 14 10.5 8 9 8 12 2"></polygon><line x1="12" y1="20" x2="12" y2="23"></line></svg>`;
        case 'newyear':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        case 'lunarnewyear':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><rect x="6" y="5" width="12" height="13" rx="4"></rect><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="8" y1="5" x2="16" y2="5"></line><line x1="8" y1="18" x2="16" y2="18"></line><path d="M9 5C9 10 9 13 9 18"></path><path d="M15 5C15 10 15 13 15 18"></path></svg>`;
        case 'avurudu':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;
        case 'diwali':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><path d="M12 2C12 2 9 6 9 8.5C9 10.16 10.34 11.5 12 11.5C13.66 11.5 15 10.16 15 8.5C15 6 12 2 12 2Z"></path><path d="M3 14C3 18 7 21 12 21C17 21 21 18 21 14H3Z"></path><line x1="2" y1="14" x2="22" y2="14"></line></svg>`;
        case 'valentines':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`;
        case 'earthday':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><path d="M7 20h10"></path><path d="M10 20c0-4 2-7 2-10"></path><path d="M12 10C10.5 7.5 8 6 5 6c0 4 2 7.5 5 8"></path><path d="M12 7c2-2 5-3 7-3 0 3.5-1.5 6-4 7"></path></svg>`;
        case 'halloween':
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><ellipse cx="12" cy="13" rx="9" ry="7"></ellipse><path d="M12 6V3"></path><path d="M9 11l1 1-1 1"></path><path d="M15 11l-1 1 1 1"></path><path d="M9 16c1.5 1 4.5 1 6 0"></path></svg>`;
        case 'classic':
        default:
            return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${cls}><path d="M12 22V12"></path><path d="M12 12C12 7 7 4 2 4C2 9 5 14 12 14"></path><path d="M12 12C12 7 17 4 22 4C22 9 19 14 12 14"></path></svg>`;
    }
};

// Global User Accounts Desk Row Renderer
window.renderUserTableRow = function(u) {
    if (!u) return '';
    const isOwner = (u.email || '').toLowerCase() === 'rockonewild@gmail.com';
    const fullName = u.full_name || u.fullName || u.name || 'Web Patron';
    const initials = fullName.split(' ').filter(Boolean).map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'WP';
    
    // Auth / Login Method
    const isGoogle = (u.auth_provider === 'google' || u.password_hash === 'OAUTH_GOOGLE' || (u.id && String(u.id).startsWith('G-')));
    const authMethod = isGoogle ? 'google' : 'email';
    const authBadge = isGoogle ? `
        <span style="background: rgba(66,133,244,0.15); color: #93c5fd; border: 1px solid rgba(66,133,244,0.35); padding: 0.2rem 0.55rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
            <svg width="12" height="12" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            Google Sign-In
        </span>
    ` : `
        <span style="background: rgba(34,197,94,0.15); color: #86efac; border: 1px solid rgba(34,197,94,0.35); padding: 0.2rem 0.55rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Web Email ID
        </span>
    `;

    // Role styling & icons
    let roleBadge = '';
    const role = (u.role || 'patron').toLowerCase();
    switch (role) {
        case 'admin':
            roleBadge = `<span style="background: rgba(212,175,55,0.15); color: var(--color-gold); border: 1px solid rgba(212,175,55,0.4); padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3 7h7l-5.5 4.5 2 7.5L12 17l-6.5 4 2-7.5L2 9h7z"/></svg>
                ${isOwner ? '👑 Primary Admin' : 'Administrator'}
            </span>`;
            break;
        case 'manager':
            roleBadge = `<span style="background: rgba(59,130,246,0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.4); padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Estate Manager
            </span>`;
            break;
        case 'sommelier':
            roleBadge = `<span style="background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.4); padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>
                Tea Sommelier
            </span>`;
            break;
        case 'concierge':
            roleBadge = `<span style="background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.4); padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                Concierge Desk
            </span>`;
            break;
        case 'patron':
        default:
            roleBadge = `<span style="background: rgba(168,85,247,0.15); color: #c084fc; border: 1px solid rgba(168,85,247,0.4); padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Connoisseur Patron
            </span>`;
            break;
    }

    // Status styling
    const status = (u.status || 'active').toLowerCase();
    let statusPill = '';
    if (status === 'active') {
        statusPill = `<span class="box-badge status-available" style="font-size: 0.7rem; padding: 0.2rem 0.6rem; display: inline-flex; align-items: center; gap: 0.35rem;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #4ade80;"></span> Active
        </span>`;
    } else if (status === 'suspended') {
        statusPill = `<span class="box-badge status-booked" style="font-size: 0.7rem; padding: 0.2rem 0.6rem; display: inline-flex; align-items: center; gap: 0.35rem;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #f87171;"></span> Suspended
        </span>`;
    } else {
        statusPill = `<span class="box-badge status-pending" style="font-size: 0.7rem; padding: 0.2rem 0.6rem; display: inline-flex; align-items: center; gap: 0.35rem;">
            <span style="width: 6px; height: 6px; border-radius: 50%; background: #fbbf24;"></span> Pending
        </span>`;
    }

    // Phone / WhatsApp link
    const cleanPhone = (u.phone || '').replace(/[^0-9]/g, '');
    const phoneDisplay = u.phone ? `
        <div style="display: flex; align-items: center; gap: 0.45rem;">
            <span style="color: #cbd5e1; font-size: 0.82rem;">${u.phone}</span>
            ${cleanPhone ? `
                <a href="https://wa.me/${cleanPhone}" target="_blank" rel="noopener noreferrer" title="Direct WhatsApp Chat" style="color: #25D366; display: inline-flex; align-items: center; background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.3); border-radius: 4px; padding: 2px 5px; font-size: 0.7rem; text-decoration: none;">
                    WA
                </a>
            ` : ''}
        </div>
    ` : `<span style="color: #64748b; font-size: 0.8rem;">—</span>`;

    // Date display
    let dateStr = 'Recent';
    if (u.created_at) {
        try {
            dateStr = new Date(u.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        } catch(e) {
            dateStr = u.created_at;
        }
    }

    const safeSearchText = `${fullName} ${u.email || ''} ${u.phone || ''} ${role} ${status} ${authMethod} ${u.id || ''}`.toLowerCase();

    return `
        <tr class="user-table-row" data-user-id="${u.id}" data-role="${role}" data-status="${status}" data-auth-method="${authMethod}" data-search-text="${safeSearchText}" style="border-bottom: 1px solid rgba(255,255,255,0.06); transition: background 0.2s ease;">
            <!-- User Identity -->
            <td style="padding: 0.95rem 1rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, rgba(212,175,55,0.2), rgba(7,20,13,0.9)); border: 1.5px solid var(--color-gold); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.82rem; color: var(--color-gold); flex-shrink: 0; box-shadow: 0 0 10px rgba(212,175,55,0.15);">
                        ${initials}
                    </div>
                    <div>
                        <div style="font-weight: 600; color: #ffffff; font-size: 0.9rem;">${fullName}</div>
                        <div style="font-family: monospace; font-size: 0.72rem; color: var(--color-text-muted);">${u.id || ''}</div>
                    </div>
                </div>
            </td>

            <!-- Email ID (Primary Identity) -->
            <td style="padding: 0.95rem 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                    <a href="mailto:${u.email}" style="color: var(--color-gold); font-size: 0.86rem; font-weight: 600; text-decoration: none; word-break: break-all;">
                        ${u.email}
                    </a>
                    <button type="button" class="btn-copy-user-email" data-email="${u.email}" title="Copy Email ID" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 2px 6px; color: #cbd5e1; cursor: pointer; display: inline-flex; align-items: center;">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </button>
                    <span style="font-size: 0.65rem; background: rgba(34,197,94,0.15); color: #86efac; border: 1px solid rgba(34,197,94,0.3); border-radius: 3px; padding: 1px 4px; font-weight: 600;">Verified ID</span>
                </div>
            </td>

            <!-- Web Login Method -->
            <td style="padding: 0.95rem 1rem;">
                ${authBadge}
            </td>

            <!-- Role -->
            <td style="padding: 0.95rem 1rem;">
                ${roleBadge}
            </td>

            <!-- Status -->
            <td style="padding: 0.95rem 1rem;">
                ${statusPill}
            </td>

            <!-- Phone / WhatsApp -->
            <td style="padding: 0.95rem 1rem;">
                ${phoneDisplay}
            </td>

            <!-- Created -->
            <td style="padding: 0.95rem 1rem; color: #94a3b8; font-size: 0.78rem;">
                ${dateStr}
            </td>

            <!-- Actions -->
            <td style="padding: 0.95rem 1rem; text-align: right;">
                <div style="display: inline-flex; align-items: center; gap: 0.4rem;">
                    <button type="button" class="btn-edit-user" data-user-id="${u.id}" title="Edit Account Profile" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); color: #e2e8f0; border-radius: 5px; padding: 5px 9px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.75rem;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        <span>Edit</span>
                    </button>
                    <button type="button" class="btn-reset-user-password" data-user-id="${u.id}" title="Reset Password & Email New Credentials" style="background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.35); color: var(--color-gold); border-radius: 5px; padding: 5px 9px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.75rem;">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <span>Key</span>
                    </button>
                    ${isOwner ? '' : `
                        <button type="button" class="btn-delete-user" data-user-id="${u.id}" data-email="${u.email}" title="Delete Account" style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); color: #f87171; border-radius: 5px; padding: 5px 8px; cursor: pointer; display: inline-flex; align-items: center;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    `}
                </div>
            </td>
        </tr>
    `;
};
// Multi-Language dynamic translation helper
const _t = (key, fallback) => (window.TeaFactoryI18n ? window.TeaFactoryI18n.t(key, fallback) : (fallback !== undefined ? fallback : key));

const UIComponents = {
    /**
     * Renders luxury gold 5-star ratings with solid stars and softly dimmed empty stars.
     * Eliminates encoding issues, character corruption, and missing star glyphs.
     */
    renderStars(rating = 5, max = 5) {
        const r = Math.max(0, Math.min(max, Math.round(Number(rating) || 5)));
        let out = '';
        for (let i = 1; i <= max; i++) {
            if (i <= r) {
                out += '<span class="star-glyph filled" style="color: var(--color-gold, #d4af37);">★</span>';
            } else {
                out += '<span class="star-glyph empty" style="color: var(--color-gold, #d4af37); opacity: 0.28;">★</span>';
            }
        }
        return out;
    },
    /**
     * Renders a full-bleed luxury page hero banner matching the Ella Organic Tea Garden reference style.
     */
    renderPageHeroBanner({
        pretitle = "Rock One's Organic",
        title = "Tea Heritage",
        tagline = "Where Virgin Nature Meets Generational Ceylon Tradition",
        image = "images/hero_banner_about.jpg",
        badge = "Authentic Ceylon Organic Estate",
        pillTag = "Our Story",
        sectionHeading = "Rooted in Ceylon's Tea Heritage",
        sectionSubheading = ""
    } = {}) {
        const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
        return `
            <div class="page-hero-banner">
                <div class="page-hero-bg" style="background-image: url('${image}');"></div>
                <div class="page-hero-overlay"></div>
                <div class="page-hero-content">
                    <div class="page-hero-text">
                        ${badge ? `
                            <span class="page-hero-pill-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4C6.2 19 6 17.5 6 16c0-5 4-9 9-9 1.5 0 3 .2 4.4.6C17.6 3.8 14.5 2 12 2z"/></svg>
                                <span>${esc(badge)}</span>
                            </span>
                        ` : ''}
                        <span class="page-hero-pretitle">${esc(pretitle)}</span>
                        <h1 class="page-hero-title">${esc(title)}</h1>
                        <p class="page-hero-tagline">${esc(tagline)}</p>
                    </div>
                </div>
            </div>
            ${(pillTag || sectionHeading) ? `
                <div class="page-intro-header">
                    ${pillTag ? `<span class="page-intro-pill">${esc(pillTag)}</span>` : ''}
                    ${sectionHeading ? `<h2 class="page-intro-heading">${esc(sectionHeading)}</h2>` : ''}
                    ${sectionSubheading ? `<p class="page-intro-subheading">${esc(sectionSubheading)}</p>` : ''}
                </div>
            ` : ''}
        `;
    },

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
            <div class="announcement-card ${ann.premium ? 'premium-ann' : ''}" data-id="${ann.id}" onclick="window.openAnnModal && window.openAnnModal('${ann.id}')" style="cursor: pointer;">
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
                    ${ann.premium ? '<span class="premium-badge">Collector Exclusives</span>' : `<button type="button" class="ann-read-more" onclick="event.stopPropagation(); window.openAnnModal && window.openAnnModal('${ann.id}')" style="background:none; border:none; padding:0; cursor:pointer; font:inherit; color:inherit;">Read Announcement &rarr;</button>`}
                </div>
            </div>
        `).join('');
    },

    // 1b. Render Dedicated Announcements Page
    renderAnnouncementsPage(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const announcements = window.TeaFactoryStore.getAnnouncements();

        let html = UIComponents.renderPageHeroBanner({
            pretitle: "Official Dispatches",
            title: "Estate Bulletins & News",
            tagline: "Seasonal Plucking Updates, Reserve Allocations & Plantation Weather",
            image: "images/hero_banner_announcements.jpg",
            badge: "Live Plantation Ledger • Ettampitiya",
            pillTag: "Estate Happenings",
            sectionHeading: "Artisanal Harvest Announcements & Bulletins",
            sectionSubheading: "Stay informed with direct dispatches from our family estate on rare seasonal flushes, tasting events, and reserve updates."
        }) + `

            <!-- Announcements Showcase Block (Ultra-Luxury Ivory Card with Gold Accent) -->
            <div class="announcements-showcase-card" style="background: #ffffff; border: 1.5px solid #ebd9b8; border-left: 6px solid #b8860b; border-radius: 18px; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04); padding: 3rem 3rem; position: relative; overflow: hidden;">
                <!-- Ambient Subtle Gold Glow Flare -->
                <div style="position: absolute; top: -80px; right: -80px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(184, 134, 11, 0.08) 0%, transparent 70%); pointer-events: none;"></div>
                <!-- Subtle Watermark Seal -->
                <img src="images/logo-gold.png" alt="Rock One Wild Tea Crest" style="position: absolute; right: 2.5rem; top: 50%; transform: translateY(-50%); width: 130px; height: auto; opacity: 0.12; pointer-events: none;" decoding="async">
                
                <div class="showcase-content" style="position: relative; z-index: 2; max-width: 760px;">
                    <span class="season-badge" style="background: #fbf9f5; border: 1.5px solid #b8860b; color: #7a5a06; font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; padding: 0.35rem 0.95rem; border-radius: 30px; display: inline-flex; align-items: center; gap: 0.45rem; box-shadow: 0 2px 6px rgba(184, 134, 11, 0.08);">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        Master Sommelier Journal
                    </span>
                    <h3 class="showcase-title" style="font-family: var(--font-serif); font-size: 2.35rem; color: #111827 !important; font-weight: 800; margin: 0.75rem 0 0.85rem 0; line-height: 1.25; letter-spacing: -0.01em; text-shadow: none !important;">Artisanal Harvest Announcements</h3>
                    <p class="showcase-desc" style="font-size: 1.02rem; color: #374151 !important; line-height: 1.8; max-width: 720px; margin: 0; text-shadow: none !important; font-weight: 450;">Read our master tea maker's notes on weather conditions, seasonal plucking cycles, and flavor profile developments direct from the wild forest slopes.</p>
                </div>
            </div>

            <div class="announcements-grid" style="margin-top: 3rem;">
        `;

        if (announcements.length === 0) {
            html += `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem;">No active announcements at this time. Check back soon.</div>`;
        } else {
            html += announcements.map(ann => `
                <div class="box-card announcement-card ${ann.premium ? 'premium-ann' : ''}" data-id="${ann.id}" onclick="window.openAnnModal && window.openAnnModal('${ann.id}')" style="cursor: pointer;">
                    <div class="card-image-wrapper">
                        <img src="${ann.image || 'images/luxury_tea_announcement.jpg'}" class="card-image" alt="${ann.title}" onerror="window.handleImageError && window.handleImageError(this, 'announcement')" loading="lazy" decoding="async">
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
                            <h4 class="box-title" style="font-size: 1.15rem; margin-top: 0.3rem; margin-bottom: 0.5rem; color: var(--color-text-primary);">${ann.title}</h4>
                            <p class="box-details" style="line-height: 1.6; font-size: 0.8rem; height: 50px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 0;">${ann.content}</p>
                        </div>
                        <div class="box-footer" style="margin-top: 1rem; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.75rem; text-align: right;">
                            <button type="button" class="ann-read-more" onclick="event.stopPropagation(); window.openAnnModal && window.openAnnModal('${ann.id}')" style="background:none; border:none; padding:0; cursor:pointer; font:inherit; color: var(--color-gold); font-size: 0.75rem; font-weight: 600;">Read Announcement &rarr;</button>
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

        const products = window.TeaFactoryStore.getProducts() || [];

        const allCount = products.length;
        const blackCount = products.filter(p => p.category === 'Black Tea').length;
        const whiteCount = products.filter(p => p.category === 'White Tea').length;
        const greenCount = products.filter(p => p.category === 'Green Tea').length;

        let html = UIComponents.renderPageHeroBanner({
            pretitle: "Single-Estate Artisanal",
            title: "Rare Tea Collection",
            tagline: "Hand-Harvested Whole Leaf & Silver Tips from High Montane Slopes",
            image: "images/hero_banner_shop.jpg",
            badge: "100% Organic Ceylon Wild Harvest",
            pillTag: "Pure Ceylon",
            sectionHeading: "Artisanal Tea Collection & Standard Tins",
            sectionSubheading: "Select from our generational artisanal standard tins, hand-plucked at dawn and orthodox wood-fired in our family factory."
        }) + `

            <!-- Search, Filter & B2B Lookbook Controls Bar -->
            <div class="catalog-controls-bar">
                <div class="filter-tabs-group">
                    <button class="btn btn-outline filter-tab-btn active" data-category="all">
                        <span>${_t('filter_all', 'All Reserves')}</span>
                        <span class="filter-tab-count">${allCount}</span>
                    </button>
                    <button class="btn btn-outline filter-tab-btn" data-category="Black Tea">
                        <span>${_t('filter_black', 'Black Tea')}</span>
                        <span class="filter-tab-count">${blackCount}</span>
                    </button>
                    <button class="btn btn-outline filter-tab-btn" data-category="White Tea">
                        <span>${_t('filter_white', 'White Tea')}</span>
                        <span class="filter-tab-count">${whiteCount}</span>
                    </button>
                    <button class="btn btn-outline filter-tab-btn" data-category="Green Tea">
                        <span>${_t('filter_green', 'Green Tea')}</span>
                        <span class="filter-tab-count">${greenCount}</span>
                    </button>
                </div>
                
                <div class="catalog-utility-controls">
                    <!-- Sort Dropdown -->
                    <select id="catalog-sort-select" class="catalog-sort-select" aria-label="${_t('label_sort_catalog', 'Sort tea reserves')}">
                        <option value="featured">${_t('sort_featured', 'Featured Selection')}</option>
                        <option value="price-asc">${_t('sort_price_asc', 'Price: Low to High')}</option>
                        <option value="price-desc">${_t('sort_price_desc', 'Price: High to Low')}</option>
                        <option value="aroma-desc">${_t('sort_aroma', 'Highest Aroma Score')}</option>
                        <option value="grade">${_t('sort_grade', 'Leaf Grade (A-Z)')}</option>
                    </select>

                    <!-- Lookbook CTA Button -->
                    <button type="button" id="btn-catalog-open-lookbook" class="btn btn-primary btn-lookbook-cta">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="12" y1="18" x2="12" y2="12"></line>
                            <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                        <span>${_t('btn_estate_lookbook', 'Estate Lookbook')}</span>
                        <span class="lookbook-year-tag">2026</span>
                    </button>

                    <!-- Search Input with Instant Clear Button -->
                    <div class="search-input-wrapper">
                        <span class="search-input-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </span>
                        <input type="text" id="catalog-search-input" placeholder="${_t('placeholder_search_reserves', 'Search reserves, leaf grades...')}" autocomplete="off">
                        <button type="button" id="catalog-search-clear" class="search-clear-btn" aria-label="Clear Search" style="display: none;">&times;</button>
                    </div>
                </div>
            </div>

            <!-- Live Results Feedback Bar -->
            <div id="catalog-results-summary" class="catalog-results-summary" style="display: none;"></div>

            <!-- Dynamic Catalog Grid Containers -->
            <div id="catalog-items-grid-container">
                <!-- Renders either standard products grid or the collector series grid -->
            </div>

            <!-- Sommelier's Brewing Ritual Guide -->
            <div id="catalog-brewing-container"></div>
        `;

        container.innerHTML = html;
        
        // Render all by default
        this.renderCatalogItems('all', '', 'featured');
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

    renderCatalogItems(categoryFilter = 'all', searchFilter = '', sortBy = 'featured') {
        const gridContainer = document.getElementById('catalog-items-grid-container');
        if (!gridContainer) return;

        searchFilter = (searchFilter || '').toLowerCase().trim();
        const summaryEl = document.getElementById('catalog-results-summary');

        // Standard products filtering and sorting
        const products = window.TeaFactoryStore.getProducts() || [];
        let filteredProducts = products.filter(p => {
            if (!p) return false;
            const category = p.category || '';
            const name = p.name || '';
            const desc = p.desc || '';
            const leafGrade = p.leafGrade || '';
            const elevation = p.elevation || '';
            const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
            const matchesSearch = !searchFilter || 
                name.toLowerCase().includes(searchFilter) || 
                desc.toLowerCase().includes(searchFilter) ||
                leafGrade.toLowerCase().includes(searchFilter) ||
                elevation.toLowerCase().includes(searchFilter) ||
                ((p.subcategory || '').toLowerCase().includes(searchFilter)) ||
                (p.tastingNotes && p.tastingNotes.some(t => t.toLowerCase().includes(searchFilter)));
            return matchesCategory && matchesSearch;
        });

        // Apply Sorting
        if (sortBy === 'price-asc') {
            filteredProducts.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
        } else if (sortBy === 'price-desc') {
            filteredProducts.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
        } else if (sortBy === 'aroma-desc') {
            filteredProducts.sort((a, b) => ((b.sensoryRadar && b.sensoryRadar.aroma) || 0) - ((a.sensoryRadar && a.sensoryRadar.aroma) || 0));
        } else if (sortBy === 'grade') {
            filteredProducts.sort((a, b) => (a.leafGrade || '').localeCompare(b.leafGrade || ''));
        }

        // Update live results summary feedback strip
        if (summaryEl) {
            if (searchFilter || categoryFilter !== 'all' || sortBy !== 'featured') {
                summaryEl.style.display = 'flex';
                summaryEl.innerHTML = `
                    <span>Showing <strong>${filteredProducts.length}</strong> of ${products.length} signature reserves ${searchFilter ? `matching "<em>${searchFilter}</em>"` : ''} ${categoryFilter !== 'all' ? `in <em>${categoryFilter}</em>` : ''}</span>
                    <button type="button" id="catalog-reset-filters-btn" class="catalog-reset-link" style="background:none; border:none; color:var(--color-gold); font-size:0.75rem; text-decoration:underline; cursor:pointer; padding:0; margin-left:auto;">Reset filters</button>
                `;
            } else {
                summaryEl.style.display = 'none';
            }
        }

        if (filteredProducts.length === 0) {
            gridContainer.innerHTML = `
                <div class="empty-state" style="text-align: center; padding: 4rem 1.5rem; background: rgba(14,26,18,0.4); border: 1px dashed rgba(212,175,55,0.25); border-radius: 12px; margin: 1.5rem 0;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.5" style="margin-bottom: 1rem; opacity: 0.85;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                    <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 0.4rem;">${_t('catalog_no_reserves', 'No tea reserves matching your filters were found.')}</h4>
                    <p style="font-size: 0.85rem; color: var(--color-text-muted); max-width: 480px; margin: 0 auto 1.25rem;">Try refining your search keyword, choosing a different category, or resetting all active filters.</p>
                    <button type="button" id="catalog-empty-reset-btn" class="btn btn-outline" style="border-color: var(--color-gold); color: var(--color-gold); font-size: 0.8rem; padding: 0.6rem 1.5rem;">Clear Filters & Show All</button>
                </div>
            `;
            return;
        }

        let prodHtml = `<div class="products-grid">`;
        prodHtml += filteredProducts.map(p => {
            const displayName = this.highlightText(p.name, searchFilter);
            const displayDesc = this.highlightText(p.desc || p.description || '', searchFilter);
            const displayGrade = this.highlightText(p.leafGrade || p.grade || _t('leaf_grade_default', 'Single-Estate Reserve'), searchFilter);
            const shipVal = Number(p.shippingCharge !== undefined ? p.shippingCharge : (p.shippingFee || p.shipping_fee_usd || 0)) || 0;
            const tastingNotesText = p.flavorProfile || (p.tastingNotes && p.tastingNotes.length > 0 ? p.tastingNotes.join(' • ') : 'Single-Estate Ceylon Harvest');
            const displayNotes = this.highlightText(tastingNotesText, searchFilter);
            const displayWeight = p.weight || '100g Vintage Tin';
            const ratingVal = Number(p.rating || (p.brewing_guide && p.brewing_guide.rating)) || 4.9;
            const reviewCount = Number(p.reviewsCount || (p.brewing_guide && p.brewing_guide.reviewsCount)) || 42;

            return `
                <div class="product-luxury-card status-available" data-id="${p.id}">
                    <div class="product-card-visual-box" title="${_t('view_product_detail', 'Click to view details &amp; sensory dossier')}">
                        <img src="${p.image || 'images/Product.jpeg'}" class="product-card-image" alt="${p.name}" onerror="window.handleImageError && window.handleImageError(this, 'product')" loading="lazy" decoding="async">
                        <div class="product-card-overlay"></div>
                        <div class="product-card-badge-cluster">
                            <span class="product-stock-tag ${p.stock === 'Low Stock' ? 'tag-warning' : 'tag-available'}">${p.stock || _t('stock_available', 'In Stock')}</span>
                        </div>
                        <div class="product-weight-chip">${displayWeight}</div>
                        <div class="product-quick-inspect-overlay">
                            <span class="product-inspect-hint">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 6 12 12 16 14"/></svg>
                                <span>${_t('btn_tasting_radar_short', 'Sensory Radar &amp; Steep Timer')}</span>
                            </span>
                        </div>
                    </div>
                    <div class="product-card-content">
                        <div class="product-card-eyebrow">
                            <span class="product-category-crumb">${p.category || 'Pure Ceylon'}</span>
                            <span class="product-eyebrow-sep">&bull;</span>
                            <span class="leaf-grade-badge">${displayGrade}</span>
                        </div>

                        <h3 class="product-card-title" title="${p.name}">${displayName}</h3>

                        <!-- Customer Rating -->
                        <div class="product-rating-row" title="${ratingVal.toFixed(1)} / 5.0 (${reviewCount} ${_t('reviews_label', 'patron reviews')})">
                            <div class="product-stars-group" aria-label="${ratingVal.toFixed(1)} stars">
                                <span class="star-icon">★</span><span class="star-icon">★</span><span class="star-icon">★</span><span class="star-icon">★</span><span class="star-icon">★</span>
                            </div>
                            <span class="product-rating-score">${ratingVal.toFixed(1)}</span>
                            <span class="product-rating-count">(${reviewCount})</span>
                        </div>

                        <div class="product-title-pricing-row">
                            <div class="product-price-block">
                                <span class="product-price-val">${window.TeaFactoryStore.formatCurrency(p.price)}</span>
                                <span class="product-shipping-note">${shipVal > 0 ? `+ ${window.TeaFactoryStore.formatCurrency(shipVal)} shipping` : _t('shipping_free', 'Complimentary Worldwide Shipping')}</span>
                            </div>
                            ${p.elevation ? `<div class="product-elevation-tag" title="Elevation"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg> ${p.elevation}</div>` : ''}
                        </div>

                        <div class="product-flavor-profile-row" title="Signature Tasting Chords">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="flavor-leaf-svg" style="flex-shrink:0; color:#b8860b;"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                            <span class="product-notes-text">${displayNotes}</span>
                        </div>

                        <p class="product-card-description">${displayDesc}</p>

                        <!-- Quick Brewing Indicators Strip -->
                        <div class="product-brewing-specs-row">
                            <div class="spec-cell" title="${_t('stat_water_temp', 'Water Temperature')}">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
                                <span>${p.steepTemp || '90°C'}</span>
                            </div>
                            <div class="spec-cell" title="${_t('stat_steep_duration', 'Steeping Duration')}">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                <span>${p.steepTime || '3 Min'}</span>
                            </div>
                            <div class="spec-cell" title="${_t('stat_format', 'Format')}">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                <span>${displayWeight}</span>
                            </div>
                        </div>

                        <!-- Card Action Buttons (Sensory Radar, Quick Order & Add to Bag) -->
                        <div class="product-card-actions-stack">
                            <button type="button" class="btn btn-outline btn-view-connoisseur" data-id="${p.id}" aria-label="View Sensory Radar &amp; Steep Timer" title="View Sensory Radar &amp; Steep Timer">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="12 6 12 12 16 14"/></svg>
                                <span>${_t('btn_tasting_radar_short', 'Sensory Radar &amp; Steep Timer')}</span>
                            </button>
                            <div class="product-cta-button-group">
                                <button type="button" class="btn btn-outline btn-book-prod" data-id="${p.id}" aria-label="Quick Order" title="Instant Direct Order / Reserve">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                    <span>${_t('btn_quick_order', 'Quick Order')}</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-add-to-cart" data-id="${p.id}" data-type="product" aria-label="Add to Bag" title="Add to Bag">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                    <span>${_t('btn_add_to_bag', 'Add to Bag')}</span>
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
            headerHtml = UIComponents.renderPageHeroBanner({
                pretitle: "Artisanal Teak Wood",
                title: "Collector Gift Chests",
                tagline: "Individually Numbered & Hand-Sealed With Private Estate Wax Deeds",
                image: "images/Gift box 2.jpeg",
                badge: "Strictly Limited to 10 Numbered Chests",
                pillTag: "Numbered Releases",
                sectionHeading: "The Limited Collector Chest Catalog",
                sectionSubheading: "Each seasonal release yields strictly 10 individually numbered presentation chests, hand-crafted from solid Sri Lankan teak."
            });
        }

        // If no collector boxes exist in the database, render elegant empty allocation state
        if (!boxes || boxes.length === 0) {
            container.innerHTML = headerHtml + `
                <div class="empty-collector-chests-view" style="text-align: center; padding: 4.5rem 2rem; background: radial-gradient(circle at 50% 20%, rgba(212,175,55,0.06) 0%, rgba(10,10,10,0.8) 100%); border: 1px dashed rgba(212,175,55,0.25); border-radius: 8px; margin: 2rem 0;">
                    <div style="width: 60px; height: 60px; margin: 0 auto 1.5rem; border-radius: 50%; background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.2); display: flex; align-items: center; justify-content: center; color: var(--color-gold);">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <h3 style="font-family: var(--font-serif); color: var(--color-gold); font-size: 1.6rem; margin-bottom: 0.6rem; letter-spacing: 0.05em;">
                        All Collector Chests Concluded
                    </h3>
                    <p style="color: var(--color-text-muted); max-width: 520px; margin: 0 auto 1.8rem; font-size: 0.88rem; line-height: 1.6;">
                        There are currently no active numbered collector chests allocated for this seasonal release. Our tea sommelier is curating the forthcoming reserve vintage.
                    </p>
                    <a href="#catalog" class="btn btn-outline" style="border-color: var(--color-gold); color: var(--color-gold); padding: 0.75rem 1.75rem; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">
                        Explore Single-Estate Teas
                    </a>
                </div>
            `;
            return;
        }

        // Initially select the first available box or box 1
        const defaultBox = boxes.find(b => b.status === 'Available') || boxes[0];
        let defaultStatusText = 'Available for Allocation';
        let defaultBadgeClass = 'status-available';
        let defaultButtonHtml = `<button class="btn btn-primary btn-book-box" data-id="${defaultBox.id}" style="width: 100%;">${_t('btn_enquire_allocation', 'Enquire for Allocation')}</button>`;

        if (defaultBox.status === 'Booked') {
            defaultStatusText = _t('status_reserved', 'Reserved');
            defaultBadgeClass = 'status-booked';
            defaultButtonHtml = `<button class="btn btn-secondary" disabled style="width: 100%;">${_t('status_reserved', 'Reserved')}</button>`;
        } else if (defaultBox.status === 'Pending Verification') {
            defaultStatusText = 'Order Pending';
            defaultBadgeClass = 'status-pending';
            defaultButtonHtml = `<button class="btn btn-warning btn-book-box" data-id="${defaultBox.id}" style="width: 100%; background: rgba(212,175,55,0.12); border-color: var(--color-gold); color: var(--color-gold);">View Allocation Status</button>`;
        } else if (defaultBox.status === 'Quotation Issued') {
            defaultStatusText = 'Quotation Prepared';
            defaultBadgeClass = 'status-pending';
            defaultButtonHtml = `<button class="btn btn-warning btn-book-box" data-id="${defaultBox.id}" style="width: 100%; background: rgba(212,175,55,0.12); border-color: var(--color-gold); color: var(--color-gold);">Review Quotation / Enquire</button>`;
        } else if (defaultBox.status === 'Enquiry Pending' || defaultBox.status === 'Awaiting Quotation') {
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
                        <img src="${defaultBox.image || 'images/Gift%20Box.jpeg'}" class="card-image" id="selected-box-image" alt="Luxury Tea Chest" style="width: 100%; height: 100%; object-fit: contain; background: rgba(0,0,0,0.25); display: block;" onerror="window.handleImageError && window.handleImageError(this, 'box')" loading="lazy" decoding="async">
                        <div class="card-image-overlay"></div>
                        <span id="selected-box-badge" class="box-badge ${defaultBadgeClass}">${defaultStatusText}</span>
                    </div>
                    <div class="showcase-details" style="padding: 1.5rem 0 0 0;">
                        <h4 id="selected-box-name" class="box-title" style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-gold); margin-bottom: 0.5rem;">${defaultBox.name}</h4>
                        <p class="box-details" id="selected-box-desc" style="color: var(--color-text-muted); font-size: 0.85rem; margin-bottom: 1rem; line-height: 1.5;">${defaultBox.desc || _t('box_seal_note', 'Individually numbered, hand-sealed cedar chest containing seasonal micro-batch leaves.')}</p>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.15rem; padding:0.55rem 0.85rem; background:rgba(212,175,55,0.06); border:1px solid rgba(212,175,55,0.22); border-radius:6px; font-size:0.78rem;">
                            <span style="color:var(--color-text-muted);">Pricing Mode:</span>
                            <strong style="color:var(--color-gold); font-size:0.8rem; display:inline-flex; align-items:center; gap:0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                Price Quoted on Request
                            </strong>
                        </div>
                        <div id="selected-box-action">
                            ${defaultButtonHtml}
                        </div>
                    </div>
                </div>
                
                <!-- Right Side: Number Selector Matrix -->
                <div class="grid-card">
                    <h4 class="grid-title" style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--color-text-primary);">${_t('season_branding_badge', 'Select Box Number')}</h4>
                    <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">${_t('season_branding_sub', 'Choose an available box slot below to submit an enquiry.')}</p>
                    
                    <div class="num-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(52px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
                        ${boxes.map(box => {
                            let btnClass = 'num-btn-available';
                            let badgeLabel = _t('status_available', 'Available');
                            if (box.status === 'Booked') {
                                btnClass = 'num-btn-booked';
                                badgeLabel = _t('status_reserved', 'Reserved');
                            } else if (box.status === 'Pending Verification') {
                                btnClass = 'num-btn-pending';
                                badgeLabel = 'Order Pending';
                            } else if (box.status === 'Quotation Issued') {
                                btnClass = 'num-btn-pending';
                                badgeLabel = 'Quote Prepared';
                            } else if (box.status === 'Enquiry Pending' || box.status === 'Awaiting Quotation') {
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
        const activeCurr = window.TeaFactoryStore.getActiveCurrency();

        // 01. Gongfu-Style Black Tea Brewing Experience
        const gongfuPackage = {
            id: "pkg-gongfu-01",
            number: "01",
            name: "Gongfu-Style Black Tea Brewing Experience",
            tagline: "Handcrafted Ceylon Black Tea from the Uva Medium Region",
            priceUsd: 4.754, // LKR 1450 at 305/USD
            priceLkr: 1450,
            duration: "1.5 – 2.0 Hours",
            maxCapacity: 10,
            image: "images/hero_banner_tours.jpg"
        };

        let html = UIComponents.renderPageHeroBanner({
            pretitle: "Authentic Ceylon",
            title: "Factory Tours & Tastings",
            tagline: "Step Inside Our Living Family Factory & Sommelier Cupping Pavilion",
            image: "images/hero_banner_tours.jpg",
            badge: "Daily Guided Tours • Mon to Sat (Max 10 Guests)",
            pillTag: "Guided Experience",
            sectionHeading: "Daily Estate Walkthroughs & Sensory Tea Tastings",
            sectionSubheading: "Experience the story of Rock One Wild Tea and discover how our handcrafted Ceylon Tea is made in our small family factory."
        }) + `
            <!-- Tour Highlights Key Badges -->
            <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2.5rem;">
                    <span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(212,175,55,0.25); color: #e5e7eb; padding: 0.4rem 0.9rem; border-radius: 20px; font-size: 0.82rem; display: inline-flex; align-items: center; gap: 0.4rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <strong>Monday – Saturday</strong> (Advance Booking)
                    </span>
                    <span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(212,175,55,0.25); color: #e5e7eb; padding: 0.4rem 0.9rem; border-radius: 20px; font-size: 0.82rem; display: inline-flex; align-items: center; gap: 0.4rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <strong>9:00 AM – 5:00 PM</strong>
                    </span>
                    <span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(212,175,55,0.25); color: #e5e7eb; padding: 0.4rem 0.9rem; border-radius: 20px; font-size: 0.82rem; display: inline-flex; align-items: center; gap: 0.4rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <strong>Max 10 Visitors</strong> (No Minimum)
                    </span>
                    <span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(212,175,55,0.25); color: #e5e7eb; padding: 0.4rem 0.9rem; border-radius: 20px; font-size: 0.82rem; display: inline-flex; align-items: center; gap: 0.4rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 10"></polyline></svg>
                        <strong>Duration: ~1.5 – 2 Hours</strong>
                    </span>
                </div>
            </div>

            <!-- Operating Guidelines 4-Card Summary Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 3.5rem;">
                <div style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; padding: 1.25rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
                    <div style="color: #7a5a06; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.4rem;">Operating Days</div>
                    <div style="font-size: 1.05rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 0.25rem;">Monday – Saturday</div>
                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">Available by advance booking. Sunday reserved for family &amp; processing.</div>
                </div>

                <div style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; padding: 1.25rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
                    <div style="color: #7a5a06; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.4rem;">Opening Hours</div>
                    <div style="font-size: 1.05rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 0.25rem;">9:00 AM – 5:00 PM</div>
                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">4 designated daily slots: 9:30 AM, 11:00 AM, 1:30 PM &amp; 3:30 PM.</div>
                </div>

                <div style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; padding: 1.25rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
                    <div style="color: #7a5a06; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.4rem;">Visitor Capacity</div>
                    <div style="font-size: 1.05rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 0.25rem;">Max 10 / No Minimum</div>
                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">Private tours for individuals, couples and small groups are welcome.</div>
                </div>

                <div style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; padding: 1.25rem; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
                    <div style="color: #7a5a06; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.4rem;">Tour Duration</div>
                    <div style="font-size: 1.05rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: 0.25rem;">Approx. 1.5 – 2 Hours</div>
                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">Personalized, unhurried walk through our estate and handcrafted factory.</div>
                </div>
            </div>

            <!-- What the Experience May Include (Walkthrough Highlights) -->
            <div style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 16px; padding: 2.25rem 2rem; margin-bottom: 3.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
                <div style="text-align: center; max-width: 680px; margin: 0 auto 1.75rem auto;">
                    <span style="font-size: 0.75rem; color: #7a5a06; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">Estate Immersion</span>
                    <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: #111827; margin: 0.35rem 0 0.5rem 0;">What You Will Discover on Your Tour</h3>
                    <p style="font-size: 0.88rem; color: #4b5563; line-height: 1.6;">Our guided experience opens the doors to our artisanal family craft and living highland ecosystem.</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
                    <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #fbf9f5; padding: 1rem 1.15rem; border-radius: 10px; border: 1px solid #ebd9b8;">
                        <span style="color: #7a5a06; font-size: 1.1rem; line-height: 1;">✦</span>
                        <div>
                            <strong style="color: var(--color-text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">History of Our Tea Garden</strong>
                            <span style="color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.5;">Learn the origin of our Uva Medium estate, natural forest biome, and landmark rock formation.</span>
                        </div>
                    </div>

                    <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #fbf9f5; padding: 1rem 1.15rem; border-radius: 10px; border: 1px solid #ebd9b8;">
                        <span style="color: #7a5a06; font-size: 1.1rem; line-height: 1;">✦</span>
                        <div>
                            <strong style="color: var(--color-text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">Walk Through Our Family Tea Factory</strong>
                            <span style="color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.5;">Step inside our small-batch processing rooms where the human touch guides every batch.</span>
                        </div>
                    </div>

                    <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #fbf9f5; padding: 1rem 1.15rem; border-radius: 10px; border: 1px solid #ebd9b8;">
                        <span style="color: #7a5a06; font-size: 1.1rem; line-height: 1;">✦</span>
                        <div>
                            <strong style="color: var(--color-text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">Traditional Handcrafted Production</strong>
                            <span style="color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.5;">Understand the delicate techniques of artisan withering, rolling, oxidation, and wood-fired drying.</span>
                        </div>
                    </div>

                    <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #fbf9f5; padding: 1rem 1.15rem; border-radius: 10px; border: 1px solid #ebd9b8;">
                        <span style="color: #7a5a06; font-size: 1.1rem; line-height: 1;">✦</span>
                        <div>
                            <strong style="color: var(--color-text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">Tea Leaf Selection &amp; Processing</strong>
                            <span style="color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.5;">Discover how carefully chosen leaf plucking produces distinctive aromas and tasting profiles.</span>
                        </div>
                    </div>

                    <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #fbf9f5; padding: 1rem 1.15rem; border-radius: 10px; border: 1px solid #ebd9b8;">
                        <span style="color: #7a5a06; font-size: 1.1rem; line-height: 1;">✦</span>
                        <div>
                            <strong style="color: var(--color-text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">Guided Tea Tasting Experience</strong>
                            <span style="color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.5;">Taste and compare our pure Ceylon varieties brewed to perfection.</span>
                        </div>
                    </div>

                    <div style="display: flex; gap: 0.85rem; align-items: flex-start; background: #fbf9f5; padding: 1rem 1.15rem; border-radius: 10px; border: 1px solid #ebd9b8;">
                        <span style="color: #7a5a06; font-size: 1.1rem; line-height: 1;">✦</span>
                        <div>
                            <strong style="color: var(--color-text-primary); font-size: 0.92rem; display: block; margin-bottom: 0.2rem;">Q&amp;A &amp; Natural Surroundings</strong>
                            <span style="color: var(--color-text-muted); font-size: 0.82rem; line-height: 1.5;">Ample time to converse with our tea makers and enjoy the serene mountain sanctuary.</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 01. Gongfu-Style Black Tea Brewing Experience Feature Block -->
            <div id="featured-gongfu-experience" class="package-card selected" data-package="01. Gongfu-Style Black Tea Brewing Experience" data-deposit="2.00" data-price="4.754" style="background: #ffffff; border: 1.5px solid #b8860b; border-radius: 18px; padding: 2.5rem 2.25rem; margin-bottom: 3.5rem; position: relative; overflow: hidden; box-shadow: 0 8px 30px rgba(184,134,11,0.12);">
                <div style="position: absolute; top: 0; right: 0; background: linear-gradient(135deg, #c59b27, #b8860b); color: #111827; font-weight: 800; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1.5px; padding: 0.45rem 1.25rem; border-bottom-left-radius: 14px;">
                    Signature Visitor Experience &bull; 01
                </div>

                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                    <div>
                        <span style="color: #7a5a06; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Experience 01</span>
                        <h3 style="font-family: var(--font-serif); font-size: 2.1rem; color: #111827; margin: 0.25rem 0 0.4rem 0;">
                            Gongfu-Style Black Tea Brewing Experience
                        </h3>
                        <div style="color: #4b5563; font-size: 0.95rem; font-style: italic;">
                            Handcrafted Ceylon Black Tea from the Uva Medium region
                        </div>
                    </div>
                    <div style="background: #fdfbf7; border: 1px solid #ebd9b8; border-radius: 12px; padding: 0.85rem 1.4rem; text-align: right;">
                        <span style="font-size: 0.75rem; color: #6b7280; text-transform: uppercase; display: block;">Per Person Fee</span>
                        <div style="font-size: 1.8rem; font-family: var(--font-serif); font-weight: 700; color: #7a5a06;">
                            ${window.TeaFactoryStore && window.TeaFactoryStore.getActiveCurrency() === 'USD' ? '$4.75' : 'LKR 1,450'}
                        </div>
                        <span style="font-size: 0.75rem; color: #6b7280;">(${window.TeaFactoryStore && window.TeaFactoryStore.getActiveCurrency() === 'USD' ? 'approx. LKR 1,450 / €4.40 EUR' : 'approx. $4.75 USD / €4.40 EUR'})</span>
                    </div>
                </div>

                <!-- Story & Narrative Introduction -->
                <div style="color: #374151; font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.75rem; border-left: 3px solid #b8860b; padding-left: 1.25rem;">
                    <p style="margin: 0 0 0.85rem 0;">
                        Begin your Rock One Wild Tea experience with a traditional <strong>Gongfu-style brewing session</strong> using our handcrafted Ceylon Black Tea from the Uva Medium region.
                    </p>
                    <p style="margin: 0 0 0.85rem 0;">
                        Before brewing, our tea host will introduce you to the story of our tea — where it comes from, how the leaves are selected, and how we carefully transform fresh tea leaves into our handcrafted black tea.
                    </p>
                    <p style="margin: 0; color: #7a5a06; font-weight: 600;">
                        You will then prepare the tea yourself, following the Gongfu-style brewing method.
                    </p>
                </div>

                <!-- What You Will Experience Checklist -->
                <div style="margin-bottom: 2rem;">
                    <h4 style="color: #7a5a06; font-size: 1.05rem; font-family: var(--font-serif); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                        <span>✦</span> What You Will Experience
                    </h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 0.75rem;">
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> A brief introduction to our Uva Medium tea garden
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Learn about the tea leaves used to make our black tea
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Introduction to our handcrafted black tea production process
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Learn how Gongfu-style brewing works
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Measure the tea leaves and prepare your own brew
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Observe how the whole tea leaves gradually open during brewing
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Smell the tea before and after brewing
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Taste the tea through several short infusions
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: #374151;">
                            <span style="color: #b8860b; font-weight: bold;">•</span> Notice how the aroma, flavour and aftertaste develop with each infusion
                        </div>
                    </div>
                </div>

                <!-- Philosophy Box: A Tea Experience, Not Just a Cup of Tea -->
                <div style="background: #fcfaf5; border: 1px dashed #d4af37; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
                    <h5 style="color: #7a5a06; font-size: 0.98rem; font-family: var(--font-serif); margin: 0 0 0.6rem 0;">
                        A Tea Experience, Not Just a Cup of Tea
                    </h5>
                    <p style="color: #4b5563; font-size: 0.88rem; line-height: 1.7; margin: 0 0 0.75rem 0;">
                        Gongfu-style brewing allows you to slow down and pay attention to the tea. Rather than simply drinking one cup, you will experience how the same tea can reveal different aromas, flavours and sensations through multiple infusions.
                    </p>
                    <p style="color: #4b5563; font-size: 0.88rem; line-height: 1.7; margin: 0 0 0.85rem 0;">
                        Our tea host will guide you throughout the session and explain what you are experiencing, while giving you the freedom to discover the character of the tea for yourself.
                    </p>
                    <div style="font-family: var(--font-serif); font-size: 1.05rem; color: #7a5a06; letter-spacing: 1px; text-transform: uppercase; font-weight: 700;">
                        Take your time. Observe. Smell. Taste. Discover.
                    </div>
                </div>

                <!-- Included in Experience & Action Row -->
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap; border-top: 1px solid #e8e4df; padding-top: 1.5rem;">
                    <div>
                        <span style="font-size: 0.78rem; text-transform: uppercase; color: #7a5a06; letter-spacing: 1.5px; font-weight: 700; display: block; margin-bottom: 0.5rem;">
                            Included in the Experience
                        </span>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.6rem 1.25rem; font-size: 0.82rem; color: #374151;">
                            <span><strong style="color:#15803d;">✓</strong> Handcrafted Rock One Wild Tea Black Tea</span>
                            <span><strong style="color:#15803d;">✓</strong> Gongfu-style brewing session</span>
                            <span><strong style="color:#15803d;">✓</strong> Tea host guidance</span>
                            <span><strong style="color:#15803d;">✓</strong> Multiple tea infusions</span>
                            <span><strong style="color:#15803d;">✓</strong> Tea tasting experience</span>
                            <span><strong style="color:#15803d;">✓</strong> Introduction to tea garden &amp; production</span>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary btn-book-slot" data-id="1" data-timeslot="09:30 AM" style="padding: 0.95rem 2rem; font-size: 0.95rem; white-space: nowrap; box-shadow: 0 4px 20px rgba(184,134,11,0.25);">
                            Reserve Gongfu Experience (LKR 1,450)
                        </button>
                    </div>
                </div>
            </div>

            <!-- Available Tour Time Slots Timeline -->
            <div style="margin-top: 3.5rem;">
                <div style="text-align: center; max-width: 720px; margin: 0 auto 2rem auto;">
                    <span class="section-tag" style="background: rgba(212,175,55,0.12); color: var(--color-gold); border: 1px solid rgba(212,175,55,0.3); padding: 0.35rem 1rem; border-radius: 20px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 2px; display: inline-block; margin-bottom: 0.5rem;">
                        Available Tour Time Slots
                    </span>
                    <h3 class="subsection-title" style="font-size: 1.9rem; margin-bottom: 0.5rem;">
                        Daily Tour Time Slots &amp; Availability
                    </h3>
                    <p style="color: var(--color-text-muted); font-size: 0.9rem;">
                        Select your preferred daily time slot. Each session is capped at 10 visitors to preserve intimacy.
                    </p>
                    <div class="timeline-legend" style="margin-top: 1rem; display: flex; justify-content: center; gap: 1.5rem;">
                        <span class="legend-item"><span class="bullet bullet-avail"></span> Available (Advance Booking)</span>
                        <span class="legend-item"><span class="bullet bullet-booked"></span> Fully Booked</span>
                    </div>
                </div>

                <div class="slots-timeline">
        `;

        // Map through slots
        html += slots.map((slot, idx) => {
            const timeStr = slot.timeSlot || slot.time_slot || slot.time || '09:30 AM';
            const pkgName = (slot.booking && slot.booking.package) || slot.package || slot.name || 'Gongfu-Style Black Tea Brewing Experience';
            const isBooked = slot.status === 'Booked' || (slot.booked_seats >= (slot.max_capacity || 10));
            const alignClass = idx % 2 === 0 ? 'left-aligned' : 'right-aligned';
            const statusBadge = isBooked 
                ? `<span class="slot-status-badge booked">${_t('status_reserved', 'Reserved')}</span>` 
                : `<span class="slot-status-badge available">${_t('status_available', 'Available')}</span>`;

            // Sub-descriptions for the 4 slots
            let slotSubtitle = "Factory walkthrough & Gongfu-style black tea brewing session.";
            if (timeStr.includes('09:30') || timeStr.includes('9:30')) {
                slotSubtitle = "Morning Session &bull; Fresh garden mountain air & first leaf harvest walkthrough.";
            } else if (timeStr.includes('11:00')) {
                slotSubtitle = "Midday Session &bull; Orthodox artisan rolling & master tea processing introduction.";
            } else if (timeStr.includes('01:30') || timeStr.includes('1:30')) {
                slotSubtitle = "Afternoon Session &bull; Guided Gongfu brewing and multi-infusion tasting ritual.";
            } else if (timeStr.includes('03:30') || timeStr.includes('3:30')) {
                slotSubtitle = "Late Afternoon Session &bull; Serene highland golden hour cupping & garden walk.";
            }

            return `
                <div class="timeline-item ${alignClass}">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card" style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 14px; padding: 1.5rem; box-shadow: 0 4px 18px rgba(0,0,0,0.04);">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e8e4df; padding-bottom: 0.75rem;">
                            <div>
                                <span class="slot-time" style="font-family: var(--font-serif); font-size: 1.3rem; font-weight: 700; color: #111827;">${timeStr}</span>
                                <span style="display: block; font-size: 0.72rem; color: #7a5a06; text-transform: uppercase; letter-spacing: 1px; margin-top: 0.15rem; font-weight: 600;">Duration: ~1.5 - 2.0 Hours</span>
                            </div>
                            ${statusBadge}
                        </div>
                        <div style="font-size: 0.85rem; color: #4b5563; line-height: 1.6; margin-top: 0.85rem;">
                            ${isBooked ? `
                                <div style="color: #6b7280; font-size: 0.85rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
                                    <span style="color: #b8860b; display: inline-flex; align-items: center;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span> Fully Booked &bull; Private Session
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; border-top: 1px dashed #e8e4df; padding-top: 0.6rem;">
                                    <span style="font-size: 0.75rem; color: #6b7280;">Estate Experience</span>
                                    <span class="slot-pkg-badge" style="color: #7a5a06; font-size: 0.7rem; text-transform: uppercase; font-weight: 600;">${pkgName}</span>
                                </div>
                            ` : `
                                <div style="margin-bottom: 1rem; color: #374151;">${slotSubtitle}</div>
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; background: #fdfbf7; border: 1px solid #ebd9b8; padding: 0.5rem 0.75rem; border-radius: 8px;">
                                    <span style="font-size: 0.78rem; color: #6b7280;">Rate / Guest:</span>
                                    <strong style="color: #7a5a06; font-size: 0.95rem;">LKR 1,450 <span style="font-size:0.75rem; color:#6b7280; font-weight:normal;">($4.75)</span></strong>
                                </div>
                                <button class="btn btn-primary btn-book-slot" data-id="${slot.id}" data-timeslot="${timeStr}" style="width: 100%; text-align: center; font-size: 0.88rem; padding: 0.75rem 1rem;">
                                    Book ${timeStr} Slot
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        html += `
                </div>
            </div>

            <!-- Holidays, Closures & Advance Booking Requirements Notice -->
            <div style="background: #ffffff; border: 1.5px solid #ebd9b8; border-radius: 14px; padding: 1.75rem 2rem; margin-top: 3.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
                <div style="display: flex; gap: 1rem; align-items: flex-start; flex-wrap: wrap;">
                    <div style="background: rgba(184,134,11,0.12); border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #7a5a06;">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
                    <div style="flex: 1; min-width: 260px;">
                        <h4 style="color: #111827; font-family: var(--font-serif); font-size: 1.15rem; margin: 0 0 0.5rem 0; font-weight: 700;">
                            Booking Requirements, Holidays &amp; Closures
                        </h4>
                        <p style="color: #374151; font-size: 0.88rem; line-height: 1.7; margin: 0 0 0.6rem 0;">
                            <strong>Advance booking is required.</strong> Please contact us before your visit to confirm your date, preferred time slot, and number of visitors. For larger groups or customized tea experiences, kindly reach out in advance.
                        </p>
                        <p style="color: #4b5563; font-size: 0.84rem; line-height: 1.6; margin: 0 0 1rem 0;">
                            <em>Notice:</em> The factory may be closed on Sundays, public holidays, and selected days for family or tea-production activities. Please contact us before travelling to confirm availability.
                        </p>
                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                            <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20Factory%20Tour%20and%20Gongfu%20Brewing%20Experience." target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="border-color: #16a34a; color: #16a34a; font-size: 0.82rem; padding: 0.55rem 1.15rem; display: inline-flex; align-items: center; gap: 0.4rem; background: #f0fdf4;">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                                WhatsApp Concierge (+94 77 320 9950)
                            </a>
                            <span style="font-size: 0.8rem; color: #6b7280;">
                                We look forward to welcoming you to Rock One Wild Tea and sharing our tea, our story and our way of life with you.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
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
        const heroSlides = window.TeaFactoryStore.getHeroSlides ? window.TeaFactoryStore.getHeroSlides() : [];
        const activeHeroSlidesCount = heroSlides.filter(s => s && s.enabled !== false).length;
        const activeTheme = window.TeaFactoryStore.getActiveTheme ? window.TeaFactoryStore.getActiveTheme() : { id: 'classic', name: 'Estate Heritage Gold', icon: '🌿' };
        const seasonalThemes = window.TeaFactoryStore.getSeasonalThemes ? window.TeaFactoryStore.getSeasonalThemes() : [];
        const themeSettings = window.TeaFactoryStore.getThemeSettings ? window.TeaFactoryStore.getThemeSettings() : { activeThemeId: 'classic', bannerEnabled: true, customBannerText: '', effectsEnabled: true };
        const giftEnquiries = (bookings || []).filter(b => b.boxId || (b.id && b.id.startsWith('ENQ-')) || b.type === 'box');
        const pendingGiftQuotesCount = giftEnquiries.filter(b => b.status === 'Awaiting Quotation').length;
        const allUsers = (window.TeaFactoryStore && typeof window.TeaFactoryStore.getUsers === 'function') 
            ? window.TeaFactoryStore.getUsers() 
            : [];
        const usersCount = allUsers.length;
        const allCoupons = (window.TeaFactoryStore && typeof window.TeaFactoryStore.getCoupons === 'function')
            ? window.TeaFactoryStore.getCoupons()
            : [];
        const activeCouponsCount = allCoupons.filter(c => c && c.status === 'active').length;

        let html = `
            <div class="admin-dashboard-wrapper">
                <div class="admin-header-block" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem; flex-wrap: wrap;">
                    <div>
                        <h2 class="view-title">Estate Admin Panel</h2>
                        <p class="view-subtitle">Manage collector box reserves, order records, factory tours, seasonal resets, and bulletins.</p>
                    </div>
                    <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
                        <button id="admin-change-passcode-btn" class="btn btn-outline" style="border-color: #d1d5db; color: #1f2937; background: #fdfbf7; font-size: 0.75rem; padding: 0.5rem 0.85rem; display: inline-flex; align-items: center; gap: 0.35rem;" title="Change Admin Panel Passcode">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Change Passcode
                        </button>
                        <button id="admin-backup-db-btn" class="btn btn-outline" style="border-color: #d1d5db; color: #1f2937; background: #fdfbf7; font-size: 0.75rem; padding: 0.5rem 0.85rem; display: inline-flex; align-items: center; gap: 0.35rem;" title="Download full JSON database snapshot">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Backup Database (JSON)
                        </button>
                        <button id="admin-restore-db-trigger-btn" class="btn btn-outline" style="border-color: #d1d5db; color: #1f2937; background: #fdfbf7; font-size: 0.75rem; padding: 0.5rem 0.85rem; display: inline-flex; align-items: center; gap: 0.35rem;" title="Restore state from JSON backup file">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Restore Backup
                        </button>
                        <input type="file" id="admin-restore-db-file-input" accept=".json,application/json" style="display: none;">
                        <button id="admin-logout-btn" class="btn btn-outline" style="border-color: #d1d5db; color: #4b5563; background: #fdfbf7; font-size: 0.75rem; padding: 0.5rem 0.85rem;">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Lock Admin Panel
                        </button>
                    </div>
                </div>

            <!-- KPI Metric Summary Grid (Always visible for CRM context) -->
            <div class="admin-stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
                <div class="admin-stat-card">
                    <span class="stat-label">Total Revenue</span>
                    <span class="stat-value">$${((Number(stats.revenue) || 0) + (Number(stats.tourRevenue) || 0)).toFixed(2)}</span>
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
                <button class="admin-tab-btn ${activeSubTab === 'slides' ? 'active' : ''}" data-subtab="slides" style="display: flex; align-items: center; gap: 0.5rem; ${activeSubTab === 'slides' ? '' : 'border-color: rgba(212,175,55,0.45); background: rgba(212,175,55,0.08);'}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    <span>Hero Slideshow Desk</span>
                    <span class="box-badge ${activeHeroSlidesCount > 0 ? 'status-available' : 'status-booked'}" style="font-size: 0.6rem; padding: 0.1rem 0.35rem; margin-left: 0.2rem;">${activeHeroSlidesCount} Live</span>
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'themes' ? 'active' : ''}" data-subtab="themes" style="display: flex; align-items: center; gap: 0.5rem; ${activeSubTab === 'themes' ? '' : 'border-color: rgba(212,175,55,0.45); background: rgba(212,175,55,0.08);'}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                    <span>Seasonal Themes Desk</span>
                    <span class="box-badge status-available" style="font-size: 0.6rem; padding: 0.15rem 0.45rem; margin-left: 0.2rem; display: inline-flex; align-items: center; gap: 0.35rem;">${window.getSeasonalThemeIconSvg(activeTheme.id, 11)} ${activeTheme.name}</span>
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'audits' ? 'active' : ''}" data-subtab="audits" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Active Reservations Log
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'orders' ? 'active' : ''}" data-subtab="orders" style="display: flex; align-items: center; gap: 0.5rem;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Orders Desk
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'giftquotes' ? 'active' : ''}" data-subtab="giftquotes" style="display: flex; align-items: center; gap: 0.5rem; ${activeSubTab === 'giftquotes' ? '' : (pendingGiftQuotesCount > 0 ? 'border-color: rgba(212,175,55,0.7); background: rgba(212,175,55,0.12);' : '')}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    <span>Gift Box Quotations &amp; Payment Links</span>
                    ${pendingGiftQuotesCount > 0 ? `<span class="box-badge status-pending" style="font-size: 0.6rem; padding: 0.1rem 0.45rem;">${pendingGiftQuotesCount} New</span>` : ''}
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
                <button class="admin-tab-btn ${activeSubTab === 'users' ? 'active' : ''}" data-subtab="users" style="display: flex; align-items: center; gap: 0.5rem; ${activeSubTab === 'users' ? '' : 'border-color: rgba(212,175,55,0.45); background: rgba(212,175,55,0.08);'}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span>User Accounts Desk</span>
                    <span class="box-badge status-available" style="font-size: 0.6rem; padding: 0.1rem 0.45rem; margin-left: 0.2rem;">${usersCount} Accounts</span>
                </button>
                <button class="admin-tab-btn ${activeSubTab === 'coupons' ? 'active' : ''}" data-subtab="coupons" style="display: flex; align-items: center; gap: 0.5rem; ${activeSubTab === 'coupons' ? '' : 'border-color: rgba(212,175,55,0.45); background: rgba(212,175,55,0.08);'}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                    <span>Coupons &amp; Promo Codes</span>
                    <span class="box-badge status-available" style="font-size: 0.6rem; padding: 0.1rem 0.45rem; margin-left: 0.2rem;">${activeCouponsCount} Active</span>
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
                                                ${item.address ? `<div style="font-size: 0.72rem; color: #b0bec5; margin-top: 0.25rem; display: flex; align-items: center; gap: 0.3rem;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${item.address}${item.country ? `, ${item.country}` : ''}</span></div>` : ''}
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
                                                    <img src="${item.slipImage}" alt="Deposit Slip Preview" style="max-width: 240px; max-height: 160px; border-radius: 6px; border: 1px solid rgba(212,175,55,0.4); object-fit: contain; background: #000; cursor: pointer;" onclick="window.open(this.src)" title="Click to view full size" onerror="window.handleImageError && window.handleImageError(this, 'slip')" loading="lazy" decoding="async">
                                                    <div style="flex: 1; min-width: 200px;">
                                                        <div style="font-size: 0.8rem; color: var(--color-text-primary); margin-bottom: 0.5rem; line-height: 1.5;">
                                                            Review the bank teller stamp, account number (94945708), and deposit amount of <strong>$${item.amount.toFixed(2)} USD</strong>.
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
                                                    ${(item.category === 'tour' || item.id.startsWith('TR-') || item.id.startsWith('TB-')) ? `
                                                        <span class="box-badge status-available" style="font-size: 0.68rem; padding: 0.25rem 0.55rem; display:inline-flex; align-items:center; gap:0.25rem;" title="Official Gate Pass automatically dispatched upon approval">
                                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                            Gate Pass Emailed
                                                        </span>
                                                        <button class="btn btn-outline btn-resend-gatepass" data-id="${item.id}" data-email="${item.email}" style="font-size: 0.7rem; padding: 0.35rem 0.75rem; color: #81c784; border-color: rgba(46,125,50,0.4); display: inline-flex; align-items: center; gap: 0.25rem;" title="Re-dispatch Gate Pass email to customer">
                                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                            Re-send Gate Pass
                                                        </button>
                                                    ` : ''}
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
        } else if (activeSubTab === 'giftquotes') {
            const issuedQuotesCount = giftEnquiries.filter(b => b.status === 'Quotation Issued').length;
            const verifiedQuotesCount = giftEnquiries.filter(b => b.status === 'Payment Confirmed' || b.status === 'Verified').length;
            const slipSubmittedQuotesCount = giftEnquiries.filter(b => b.status === 'Pending Verification' || b.status === 'Slip Submitted').length;

            html += `
                <div class="panel-card" style="margin-bottom: 2rem;">
                    <!-- Desk Header -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
                        <div>
                            <h3 class="panel-title" style="margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.5rem;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
                                Collector Gift Box Quotations &amp; Payment Links Desk
                            </h3>
                            <p class="panel-desc" style="margin-bottom: 0;">Review bespoke client inquiries, formulate custom prices &amp; courier fees, generate instant checkout links &amp; scannable QR codes, and dispatch via WhatsApp or Email.</p>
                        </div>
                        <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
                            <span class="box-badge ${pendingGiftQuotesCount > 0 ? 'status-pending' : 'status-available'}" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;">
                                ${pendingGiftQuotesCount} Awaiting Quotation
                            </span>
                            <span class="box-badge" style="font-size: 0.75rem; padding: 0.3rem 0.65rem; background: rgba(59,130,246,0.18); color: #60a5fa; border: 1px solid rgba(59,130,246,0.35);">
                                ${issuedQuotesCount} Quotations Issued
                            </span>
                            <span class="box-badge status-available" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;">
                                ${verifiedQuotesCount + slipSubmittedQuotesCount} Paid / Confirmed
                            </span>
                        </div>
                    </div>

                    ${giftEnquiries.length === 0 ? `
                        <div style="text-align: center; padding: 3.5rem 1.5rem; color: var(--color-text-muted); border: 1px dashed rgba(255,255,255,0.08); border-radius: 8px;">
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="1.5" style="margin-bottom: 1rem;"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line></svg>
                            <div style="font-size: 1.1rem; font-weight: 600; color: #fff; margin-bottom: 0.5rem;">No Collector Gift Box Enquiries Yet</div>
                            <div style="font-size: 0.85rem; max-width: 520px; margin: 0 auto; line-height: 1.6;">
                                When customers inquire about exclusive Collector Gift Boxes via WhatsApp or Email, their bespoke requests will appear here so you can set custom pricing, generate a checkout link &amp; QR code, and send it directly.
                            </div>
                        </div>
                    ` : `
                        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                            ${giftEnquiries.map(b => {
                                const isQuoted = !!(b.quotedTotal || b.quotedPrice || b.status === 'Quotation Issued');
                                const isPendingSlip = b.status === 'Pending Verification' || b.status === 'Slip Submitted';
                                const isConfirmed = b.status === 'Payment Confirmed' || b.status === 'Verified';
                                const isAwaiting = b.status === 'Awaiting Quotation' || !b.status;
                                
                                let origin = (typeof window !== 'undefined' && window.location) ? window.location.origin : '';
                                let path = (typeof window !== 'undefined' && window.location) ? window.location.pathname : '/';
                                const payLink = b.paymentLink || `${origin}${path}?pay=${b.id}`;
                                const qrUrl = b.qrCodeUrl || `https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=d4af37&bgcolor=040e08&data=${encodeURIComponent(payLink)}`;

                                return `
                                    <div class="panel-card" style="margin-bottom: 0; background: #ffffff; border: 1px solid ${isAwaiting ? '#b8860b' : '#e8e4df'}; box-shadow: 0 2px 10px rgba(0,0,0,0.03); border-radius: 10px; padding: 1.25rem; transition: var(--transition-smooth);">
                                        <!-- Top Row: Ref ID, Date, Season, Status Badge -->
                                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; padding-bottom: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.06); margin-bottom: 1rem;">
                                            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                                                <span style="font-family: monospace; font-size: 0.88rem; font-weight: 700; color: var(--color-gold); background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.3); padding: 0.2rem 0.55rem; border-radius: 4px;">
                                                    ${b.id}
                                                </span>
                                                <span style="font-size: 0.75rem; color: #94a3b8;">${b.bookingDate || 'Enquiry Submitted'}</span>
                                                <span class="box-badge status-available" style="font-size: 0.65rem; padding: 0.15rem 0.45rem;">
                                                    ${b.seasonName || 'Private Reserve'} &bull; Series ${b.seriesNumber || 1}
                                                </span>
                                                ${b.preferredCurrency ? `
                                                    <span class="box-badge" style="font-size: 0.65rem; padding: 0.15rem 0.45rem; background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.35); color: var(--color-gold); font-weight: 700;">
                                                        Currency: ${b.preferredCurrency}
                                                    </span>
                                                ` : ''}
                                            </div>
                                            <div>
                                                ${isAwaiting ? `
                                                    <span class="box-badge status-pending" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; background: rgba(212,175,55,0.18); color: var(--color-gold); border: 1px solid rgba(212,175,55,0.4);">
                                                        ⏳ Awaiting Quotation
                                                    </span>
                                                ` : (isPendingSlip ? `
                                                    <span class="box-badge status-pending" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; background: rgba(245,158,11,0.2); color: #fbbf24; border: 1px solid rgba(245,158,11,0.4);">
                                                        📄 Bank Slip Submitted &bull; Pending Verification
                                                    </span>
                                                ` : (isConfirmed ? `
                                                    <span class="box-badge status-available" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; background: rgba(16,185,129,0.2); color: #34d399; border: 1px solid rgba(16,185,129,0.4);">
                                                        ✓ Payment Verified &amp; Confirmed
                                                    </span>
                                                ` : `
                                                    <span class="box-badge" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; background: rgba(59,130,246,0.18); color: #60a5fa; border: 1px solid rgba(59,130,246,0.4);">
                                                        ✉ Quotation Issued &bull; ${window.TeaFactoryStore.formatCurrency(b.quotedTotal || b.price)}
                                                    </span>
                                                `))}
                                            </div>
                                        </div>

                                        <!-- Main Details Grid (3 columns) -->
                                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-bottom: 1.25rem;">
                                            <!-- Col 1: Box & Bespoke Curation -->
                                            <div style="background: rgba(255,255,255,0.02); padding: 0.85rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04);">
                                                <div style="font-size: 0.68rem; font-weight: 700; text-transform: uppercase; color: var(--color-gold); letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                                                    Chest &amp; Bespoke Presentation
                                                </div>
                                                <div style="display: flex; gap: 0.65rem; align-items: center; margin-bottom: 0.6rem;">
                                                    <img src="${b.image || 'images/Gift Box.jpeg'}" alt="${b.boxName}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(212,175,55,0.3);" onerror="window.handleImageError && window.handleImageError(this, 'box')">
                                                    <div>
                                                        <div style="font-weight: 600; color: #fff; font-size: 0.88rem;">${b.boxName}</div>
                                                        <div style="font-size: 0.7rem; color: #94a3b8;">Solid Light-Wood Teak &bull; 500g Assortment</div>
                                                    </div>
                                                </div>
                                                <div style="font-size: 0.75rem; color: #cbd5e1; line-height: 1.5; display: flex; flex-direction: column; gap: 0.25rem;">
                                                    <div><span style="color: #94a3b8;">Artisan Wax Seal:</span> <strong style="color: var(--color-gold);">${b.waxSealColor || 'Imperial Gold'}</strong></div>
                                                    <div><span style="color: #94a3b8;">Monogram Engraving:</span> <strong style="color: #fff;">${b.monogramInitials ? `"${b.monogramInitials}"` : 'None requested'}</strong></div>
                                                    ${b.giftMessage ? `<div><span style="color: #94a3b8;">Gift Note:</span> <em style="color: #e2e8f0;">"${b.giftMessage}"</em></div>` : ''}
                                                    ${b.message ? `<div style="margin-top: 0.4rem; padding-top: 0.4rem; border-top: 1px dashed rgba(255,255,255,0.08);"><span style="color: #94a3b8;">Client Message:</span> <div style="color: #e2e8f0; font-style: italic; margin-top: 0.15rem;">"${b.message}"</div></div>` : ''}
                                                </div>
                                            </div>

                                            <!-- Col 2: Client Contact Details -->
                                            <div style="background: rgba(255,255,255,0.02); padding: 0.85rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04);">
                                                <div style="font-size: 0.68rem; font-weight: 700; text-transform: uppercase; color: var(--color-gold); letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                                                    Client &amp; Destination Details
                                                </div>
                                                <div style="font-size: 0.78rem; line-height: 1.6; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.25rem;">
                                                    <div><span style="color: #94a3b8;">Name:</span> <strong style="color: #fff;">${b.customerName}</strong></div>
                                                    <div><span style="color: #94a3b8;">Email:</span> <a href="mailto:${b.email}" style="color: #60a5fa; text-decoration: none;">${b.email}</a></div>
                                                    <div><span style="color: #94a3b8;">Phone:</span> <strong style="color: #fff;">${b.phone}</strong></div>
                                                    <div><span style="color: #94a3b8;">Preferred Arrival:</span> <span style="color: #fff;">${b.preferredDate || 'Earliest Available'}</span></div>
                                                    <div><span style="color: #94a3b8;">Reply Channel:</span> <span class="box-badge status-available" style="font-size: 0.62rem; padding: 0.1rem 0.4rem;">${b.socialChannel || 'WhatsApp'}</span></div>
                                                    ${b.address ? `<div><span style="color: #94a3b8;">Delivery:</span> <span style="color: #fff;">${b.address}, ${b.country || ''}</span></div>` : ''}
                                                </div>
                                            </div>

                                            <!-- Col 3: Quotation Status & Figures -->
                                            <div style="background: rgba(212,175,55,0.03); padding: 0.85rem; border-radius: 8px; border: 1px solid rgba(212,175,55,0.18);">
                                                <div style="font-size: 0.68rem; font-weight: 700; text-transform: uppercase; color: var(--color-gold); letter-spacing: 0.5px; margin-bottom: 0.5rem;">
                                                    Pricing &amp; Quotation Formulation
                                                </div>
                                                ${isQuoted ? `
                                                    <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.78rem;">
                                                        <div style="display: flex; justify-content: space-between;"><span style="color: #94a3b8;">Box Price:</span> <span style="color: #fff; font-weight: 600;">${window.TeaFactoryStore.formatCurrency(b.quotedPrice || b.price)}</span></div>
                                                        <div style="display: flex; justify-content: space-between;"><span style="color: #94a3b8;">Courier &amp; Handling:</span> <span style="color: #86efac; font-weight: 600;">${b.quotedShipping > 0 ? window.TeaFactoryStore.formatCurrency(b.quotedShipping) : 'Complimentary'}</span></div>
                                                        <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(212,175,55,0.3); padding-top: 0.35rem; margin-top: 0.2rem;">
                                                            <strong style="color: #fff;">Total Quoted:</strong>
                                                            <strong style="color: var(--color-gold); font-size: 1.05rem;">${window.TeaFactoryStore.formatCurrency(b.quotedTotal || b.price)}</strong>
                                                        </div>
                                                        <div style="font-size: 0.7rem; color: #94a3b8; margin-top: 0.2rem;">Validity: <span style="color: #fff;">${b.quoteValidity || '7 Days'}</span> &bull; Quoted: <span style="color: #cbd5e1;">${b.quoteDate || 'Recent'}</span></div>
                                                        ${b.quoteNotes ? `<div style="font-size: 0.7rem; color: #e2e8f0; background: rgba(0,0,0,0.3); padding: 0.35rem 0.5rem; border-radius: 4px; margin-top: 0.2rem;">Curator Note: ${b.quoteNotes}</div>` : ''}
                                                    </div>
                                                ` : `
                                                    <div style="text-align: center; padding: 1rem 0.5rem; color: #94a3b8;">
                                                        <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 600; margin-bottom: 0.3rem;">No Price Formulated Yet</div>
                                                        <div style="font-size: 0.72rem; line-height: 1.4;">Customer is waiting for your bespoke quote. Click the gold button below to formulate the price, generate payment link &amp; QR code.</div>
                                                    </div>
                                                `}
                                            </div>
                                        </div>

                                        <!-- Action Toolbar Footer -->
                                        <div style="display: flex; gap: 0.55rem; flex-wrap: wrap; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
                                            ${isAwaiting ? `
                                                <button class="btn btn-primary btn-open-quote-modal" data-id="${b.id}" style="font-size: 0.78rem; padding: 0.5rem 1rem; background: linear-gradient(135deg, #d4af37, #aa820a); color: #040e08; font-weight: 700; display: inline-flex; align-items: center; gap: 0.4rem; box-shadow: 0 2px 10px rgba(212,175,55,0.25);">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                                    Formulate Quotation &amp; Generate QR
                                                </button>
                                            ` : `
                                                <button class="btn btn-outline btn-open-quote-modal" data-id="${b.id}" style="font-size: 0.72rem; padding: 0.45rem 0.8rem; color: var(--color-gold); border-color: rgba(212,175,55,0.4); display: inline-flex; align-items: center; gap: 0.35rem;">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                    Edit Quote
                                                </button>
                                                <button class="btn btn-outline btn-copy-quote-link" data-link="${payLink}" style="font-size: 0.72rem; padding: 0.45rem 0.8rem; color: #60a5fa; border-color: rgba(96,165,250,0.4); display: inline-flex; align-items: center; gap: 0.35rem;">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                                    Copy Checkout Link
                                                </button>
                                                <button class="btn btn-outline btn-view-quote-qr" data-id="${b.id}" data-box="${b.boxName}" data-cust="${b.customerName}" data-amount="${window.TeaFactoryStore.formatCurrency(b.quotedTotal || b.price)}" data-qr="${qrUrl}" data-link="${payLink}" style="font-size: 0.72rem; padding: 0.45rem 0.8rem; color: #a78bfa; border-color: rgba(167,139,250,0.4); display: inline-flex; align-items: center; gap: 0.35rem;">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                                    View / Download QR
                                                </button>
                                                <button class="btn btn-primary btn-dispatch-quote-whatsapp" data-id="${b.id}" style="font-size: 0.72rem; padding: 0.45rem 0.8rem; background: #25d366; border-color: #25d366; color: #fff; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                                                    WhatsApp Dispatch
                                                </button>
                                                <button class="btn btn-outline btn-dispatch-quote-email" data-id="${b.id}" style="font-size: 0.72rem; padding: 0.45rem 0.8rem; color: #f59e0b; border-color: rgba(245,158,11,0.4); display: inline-flex; align-items: center; gap: 0.35rem;">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                    Email Dispatch
                                                </button>
                                                <a href="${payLink}" target="_blank" class="btn btn-outline" style="font-size: 0.72rem; padding: 0.45rem 0.8rem; color: #94a3b8; border-color: rgba(148,163,184,0.3); display: inline-flex; align-items: center; gap: 0.35rem; text-decoration: none;">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                    Open Checkout
                                                </a>
                                            `}
                                            ${isPendingSlip ? `
                                                <button class="btn btn-primary btn-approve-slip" data-id="${b.id}" style="font-size: 0.72rem; padding: 0.45rem 0.85rem; background: #059669; border-color: #059669; color: #fff; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    Approve Slip &amp; Confirm
                                                </button>
                                            ` : ''}
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
                <!-- Quick Navigation Banner to Hero Slideshow Desk -->
                <div style="background: linear-gradient(135deg, rgba(212,175,55,0.12), rgba(4,14,8,0.85)); border: 1px solid rgba(212,175,55,0.35); border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <span style="font-size: 1.4rem;">🖼️ </span>
                        <div>
                            <div style="font-weight: 700; color: var(--color-gold); font-size: 0.92rem;">Looking to select photos for the Home Landing Screen Slideshow?</div>
                            <div style="font-size: 0.78rem; color: #cbd5e1;">Pick photos from this estate gallery to rotate on the main landing banner.</div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="window.switchAdminSubTab ? window.switchAdminSubTab('slides') : null" style="font-size: 0.75rem; padding: 0.45rem 1rem; display: inline-flex; align-items: center; gap: 0.35rem;">
                        Open Hero Slideshow Desk <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-left:2px"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                </div>

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
        } else if (activeSubTab === 'slides') {
            const heroSlides = window.TeaFactoryStore.getHeroSlides();
            const galleryImages = window.TeaFactoryStore.getGalleryImages();
            const activeCount = heroSlides.filter(s => s.enabled !== false).length;

            html += `
                <div class="admin-columns">
                    <!-- Left: Active Slides in Home Landing Slideshow -->
                    <div class="panel-card" style="margin-bottom: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h3 class="panel-title" style="margin-bottom: 0.25rem;">Landing Screen Hero Slides</h3>
                                <p class="panel-desc" style="margin-bottom: 0;">Configure, reorder, toggle, and manage the rotating slideshow on the Home landing page.</p>
                            </div>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <span class="box-badge status-available" style="font-size: 0.75rem;">${activeCount} Active / ${heroSlides.length} Total</span>
                                <button id="btn-reset-hero-slides" class="btn btn-outline" style="font-size: 0.7rem; padding: 0.35rem 0.75rem; border-color: rgba(255,255,255,0.25); color: #cbd5e1; display: inline-flex; align-items: center; gap: 0.3rem;" title="Reset slideshow to factory curated set">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                                    Reset Curated
                                </button>
                            </div>
                        </div>

                        <!-- Slides List -->
                        <div style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 600px; overflow-y: auto; padding-right: 0.5rem;">
                            ${heroSlides.length === 0 ? `
                                <div style="text-align: center; padding: 3rem; color: #888;">No slides configured. Add a slide using the form on the right or reset to curated defaults.</div>
                            ` : heroSlides.map((slide, idx) => `
                                <div style="display: flex; gap: 0.85rem; align-items: center; background: rgba(3, 12, 7, 0.85); border: 1px solid ${slide.enabled !== false ? 'rgba(212,175,55,0.35)' : 'rgba(255,255,255,0.1)'}; border-radius: 8px; padding: 0.75rem 0.9rem; position: relative; opacity: ${slide.enabled !== false ? '1' : '0.6'}; transition: all 0.25s ease;">
                                    <!-- Slide Number & Reorder Handle -->
                                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 28px;">
                                        <span style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: var(--color-gold);">${String(idx + 1).padStart(2, '0')}</span>
                                        <div style="display: flex; flex-direction: column; gap: 1px; margin-top: 2px;">
                                            <button class="btn-move-slide-up" data-id="${slide.id}" ${idx === 0 ? 'disabled style="opacity:0.25; cursor:not-allowed;"' : 'style="cursor:pointer;"'} style="background: none; border: none; color: #94a3b8; font-size: 0.7rem; padding: 1px;" title="Move Up">▲</button>
                                            <button class="btn-move-slide-down" data-id="${slide.id}" ${idx === heroSlides.length - 1 ? 'disabled style="opacity:0.25; cursor:not-allowed;"' : 'style="cursor:pointer;"'} style="background: none; border: none; color: #94a3b8; font-size: 0.7rem; padding: 1px;" title="Move Down">▼</button>
                                        </div>
                                    </div>

                                    <!-- Thumbnail -->
                                    <div style="width: 75px; height: 55px; border-radius: 6px; overflow: hidden; border: 1px solid rgba(212,175,55,0.3); flex-shrink: 0; background: #000;">
                                        <img src="${slide.image}" alt="${(slide.title || '').replace(/<[^>]*>?/gm, '')}" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                                    </div>

                                    <!-- Slide Info -->
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.2rem;">
                                            <span style="font-size: 0.65rem; text-transform: uppercase; font-weight: 700; color: var(--color-gold); letter-spacing: 0.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 180px;">
                                                ${slide.subtitle || 'Estate Story'}
                                            </span>
                                            <span class="box-badge ${slide.enabled !== false ? 'status-available' : 'status-booked'}" style="font-size: 0.58rem; padding: 0.05rem 0.35rem;">
                                                ${slide.enabled !== false ? 'Active' : 'Hidden'}
                                            </span>
                                        </div>
                                        <div style="font-size: 0.82rem; font-weight: 600; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                            ${(slide.title || 'Slide Headline').replace(/<[^>]*>?/gm, '')}
                                        </div>
                                        <div style="font-size: 0.7rem; color: var(--color-text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 0.1rem;">
                                            ${slide.description || ''}
                                        </div>
                                    </div>

                                    <!-- Slide Actions -->
                                    <div style="display: flex; gap: 0.35rem; align-items: center; flex-shrink: 0;">
                                        <button class="btn-edit-hero-slide" data-id="${slide.id}" style="background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.45); color: var(--color-gold); padding: 0.3rem 0.55rem; font-size: 0.68rem; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;" title="Edit this slide image, headline, and story">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                            Edit
                                        </button>
                                        <button class="btn-toggle-hero-slide" data-id="${slide.id}" style="background: ${slide.enabled !== false ? 'rgba(5, 150, 105, 0.2)' : 'rgba(100, 116, 139, 0.2)'}; border: 1px solid ${slide.enabled !== false ? 'rgba(5, 150, 105, 0.5)' : 'rgba(100, 116, 139, 0.4)'}; color: ${slide.enabled !== false ? '#34d399' : '#94a3b8'}; padding: 0.3rem 0.55rem; font-size: 0.68rem; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;" title="${slide.enabled !== false ? 'Click to hide from home landing screen' : 'Click to show on home landing screen'}">
                                            ${slide.enabled !== false ? '👁️ On' : '🚫 Off'}
                                        </button>
                                        <button class="btn-delete-hero-slide" data-id="${slide.id}" data-title="${(slide.title || 'Slide').replace(/<[^>]*>?/gm, '')}" style="background: rgba(255,94,94,0.15); border: 1px solid rgba(255,94,94,0.4); color: #ff5e5e; padding: 0.3rem 0.5rem; font-size: 0.68rem; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;" title="Remove this slide">
                                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Right: Add New Slide Form -->
                    <div class="panel-card" style="margin-bottom: 0;">
                        <h3 class="panel-title">Add Slide to Hero Slideshow</h3>
                        <p class="panel-desc">Select an image from the Gallery or upload a photo, and customize the headline and narrative story.</p>

                        <form id="admin-add-slide-form" class="admin-form" style="gap: 1.15rem;">
                            <!-- Image Selection Mode: Pick from Gallery or File -->
                            <div class="form-group">
                                <label class="form-label" for="slide-gallery-picker">1. Select Image from Gallery *</label>
                                <select class="form-input" id="slide-gallery-picker" style="font-size: 0.85rem;">
                                    <option value="">-- Choose a photo from Gallery --</option>
                                    ${galleryImages.map(img => `
                                        <option value="${img.src}" data-caption="${img.caption || ''}" data-tag="${img.tag || ''}">${img.caption || img.src}</option>
                                    `).join('')}
                                </select>
                            </div>

                            <!-- Live Selected Image Preview -->
                            <div class="form-group">
                                <label class="form-label">2. Selected Slide Image Preview</label>
                                <div id="slide-selected-image-preview" style="width: 100%; aspect-ratio: 16/9; max-height: 150px; border-radius: 6px; overflow: hidden; border: 1px dashed rgba(212,175,55,0.4); background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; position: relative;">
                                    <img id="slide-preview-img" src="images/1 (1).jpeg" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                                    <input type="hidden" id="slide-image-src-hidden" value="images/1 (1).jpeg">
                                </div>
                                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                                    <button type="button" id="btn-slide-upload-file" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.35rem 0.75rem; flex: 1;">
                                        📁 Or Upload Image File
                                    </button>
                                    <input type="file" id="slide-image-file-input" accept="image/*" style="display:none;">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="slide-title-input">3. Slide Main Headline *</label>
                                <input class="form-input" type="text" id="slide-title-input" required placeholder="e.g. From Our Wild Forest Garden to Your Cup" value="Wild Arbor Tea Garden. Mountain Foothill Heritage.">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="slide-subtitle-input">4. Subtitle / Region Tag *</label>
                                <input class="form-input" type="text" id="slide-subtitle-input" required placeholder="e.g. Rock One Wild Tea (Pvt) Limited • Uva Medium Region" value="Forested Rock Formation Terroir • 1,240m Elevation">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="slide-desc-input">5. Narrative Story / Description *</label>
                                <textarea class="form-input" id="slide-desc-input" rows="3" required placeholder="Describe the origin, hand-craft, or experience depicted in this slide...">Grown naturally amidst virgin mountain forest and ancient flora at the foot of our iconic rock formation in Ettampitiya, free from synthetic chemicals.</textarea>
                            </div>

                            <button type="submit" id="btn-save-hero-slide" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%;">
                                + Add Slide to Hero Slideshow
                            </button>
                        </form>
                    </div>
                </div>
            `;
        } else if (activeSubTab === 'tours') {
            html += `
                <!-- Tour Operations Policy & Schedule Summary -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; margin-bottom: 1.75rem;">
                    <div style="background: rgba(6, 20, 12, 0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 10px; padding: 1rem 1.25rem;">
                        <div style="color: var(--color-gold); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.25rem;">Operating Days</div>
                        <div style="font-size: 0.98rem; font-weight: 600; color: #ffffff;">Monday – Saturday</div>
                        <div style="font-size: 0.75rem; color: #86efac; margin-top: 0.2rem;">Advance booking &bull; Closed Sundays</div>
                    </div>
                    <div style="background: rgba(6, 20, 12, 0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 10px; padding: 1rem 1.25rem;">
                        <div style="color: var(--color-gold); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.25rem;">Daily Schedule</div>
                        <div style="font-size: 0.98rem; font-weight: 600; color: #ffffff;">9:00 AM – 5:00 PM</div>
                        <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.2rem;">4 Designated Slots (~1.5 – 2.0 Hrs)</div>
                    </div>
                    <div style="background: rgba(6, 20, 12, 0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 10px; padding: 1rem 1.25rem;">
                        <div style="color: var(--color-gold); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.25rem;">Visitor Capacity</div>
                        <div style="font-size: 0.98rem; font-weight: 600; color: #ffffff;">Max 10 / Session</div>
                        <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.2rem;">No minimum visitors required</div>
                    </div>
                    <div style="background: rgba(6, 20, 12, 0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 10px; padding: 1rem 1.25rem;">
                        <div style="color: var(--color-gold); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 0.25rem;">Standard Experience</div>
                        <div style="font-size: 0.95rem; font-weight: 600; color: var(--color-gold);">LKR 1,450 / person</div>
                        <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 0.2rem;">01. Gongfu-Style Brewing Experience</div>
                    </div>
                </div>

                <div class="admin-columns">
                    <!-- Active Tour Slots Table Card -->
                    <div class="panel-card" style="margin-bottom: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <h3 class="panel-title" style="margin-bottom: 0.25rem;">Factory Tour Schedule &amp; Slots Desk</h3>
                                <p class="panel-desc" style="margin-bottom: 0;">Manage daily 9:30 AM, 11:00 AM, 1:30 PM &amp; 3:30 PM tour time windows, visitor capacity limits, and assigned guest bookings.</p>
                            </div>
                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <span class="box-badge status-available" style="font-size: 0.75rem;">${tourSlots.filter(s => s.status === 'Available').length} Available Slots</span>
                            </div>
                        </div>
                        
                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Time Slot</th>
                                        <th>Experience Package</th>
                                        <th>Capacity</th>
                                        <th>Rate</th>
                                        <th>Status</th>
                                        <th>Booked Guest / Info</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${tourSlots.length === 0 ? `
                                        <tr><td colspan="8" class="text-center" style="padding: 2.5rem; color: #888;">No tour time slots configured. Add your first time slot below or reset to defaults.</td></tr>
                                    ` : tourSlots.map(slot => {
                                        const timeStr = slot.timeSlot || slot.time_slot || slot.time || '09:30 AM';
                                        const pkgName = slot.package || slot.name || '01. Gongfu-Style Black Tea Brewing Experience';
                                        const maxCap = slot.max_capacity || 10;
                                        const bookedSeats = (slot.booking && slot.booking.guests) || slot.booked_seats || 0;
                                        const isBooked = slot.status === 'Booked' || (bookedSeats >= maxCap);
                                        const statusStr = isBooked ? 'Booked' : 'Available';
                                        const priceLkr = slot.price_lkr || (slot.price ? Math.round(slot.price * 305) : 1450);

                                        return `
                                        <tr>
                                            <td class="font-mono text-gold font-bold">#${String(slot.id).padStart(2, '0')}</td>
                                            <td>
                                                <strong style="color:var(--color-white); font-family:var(--font-serif); font-size: 1.05rem;">${timeStr}</strong>
                                                <small style="display:block; color:var(--color-text-muted); font-size:0.7rem;">~1.5 - 2.0 Hrs</small>
                                            </td>
                                            <td>
                                                <span style="font-size:0.82rem; color:var(--color-gold); font-weight:600; display:block;">${pkgName}</span>
                                                <small style="color: #94a3b8; font-size:0.7rem;">Uva Medium Handcrafted</small>
                                            </td>
                                            <td>
                                                <span style="font-size: 0.8rem; color: ${bookedSeats > 0 ? '#86efac' : '#e2e8f0'}; font-weight: 600;">
                                                    ${bookedSeats} / ${maxCap} Guests
                                                </span>
                                            </td>
                                            <td>
                                                <span style="font-size:0.82rem; color:var(--color-white); font-weight:600;">LKR ${priceLkr.toLocaleString()}</span>
                                                <small style="display:block; color:var(--color-text-muted); font-size:0.7rem;">($${(priceLkr / 305).toFixed(2)})</small>
                                            </td>
                                            <td>
                                                <span class="box-badge ${statusStr === 'Available' ? 'status-available' : 'status-booked'}" style="font-size: 0.65rem;">
                                                    ${statusStr}
                                                </span>
                                            </td>
                                            <td>
                                                ${slot.booking ? `
                                                    <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 600;">${slot.booking.customerName || slot.booking.name || 'Guest'}</div>
                                                    <small style="color: var(--color-text-muted); display:block;">${slot.booking.guests || 1} Guests &bull; Ref: ${slot.booking.bookingId || 'TB-CONFIRMED'}</small>
                                                    ${slot.booking.tourDate ? `<small style="color: #86efac; font-size: 0.68rem;">Date: ${slot.booking.tourDate}</small>` : ''}
                                                ` : `<span style="font-size: 0.75rem; color: var(--color-text-muted);">No Active Booking</span>`}
                                            </td>
                                            <td>
                                                <div style="display: flex; gap: 0.35rem; align-items: center; flex-wrap: wrap;">
                                                    <button class="btn-edit-slot" 
                                                            data-id="${slot.id}" 
                                                            data-timeslot="${timeStr}" 
                                                            data-package="${pkgName}" 
                                                            data-capacity="${maxCap}"
                                                            data-price-lkr="${priceLkr}"
                                                            data-price-usd="${(priceLkr / 305).toFixed(2)}"
                                                            data-status="${statusStr}" 
                                                            style="background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.4); color: var(--color-gold); padding: 0.35rem 0.6rem; font-size: 0.7rem; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;" 
                                                            title="Edit Time Slot">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        Edit
                                                    </button>
                                                    ${statusStr === 'Booked' ? `
                                                        <button class="btn-reset-slot" data-id="${slot.id}" style="background: rgba(46,125,50,0.15); border: 1px solid rgba(46,125,50,0.3); color: #81c784; padding: 0.35rem 0.6rem; font-size: 0.7rem; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;" title="Free slot for new bookings">
                                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                                                            Free
                                                        </button>
                                                    ` : ''}
                                                    <button class="btn-delete-slot" data-id="${slot.id}" style="background: transparent; border: 1px solid rgba(255,94,94,0.3); color: #ff5e5e; padding: 0.35rem 0.6rem; font-size: 0.7rem; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;" title="Delete Time Slot">
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
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
                    
                    <!-- Add / Edit Tour Slot Form Card -->
                    <div class="panel-card admin-form-card" style="margin-bottom: 0;">
                        <div class="admin-card-header" style="border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 1rem; margin-bottom: 1.5rem;">
                            <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); margin-bottom: 0.35rem;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>
                                <span>FACTORY TOUR TIMELINE</span>
                            </div>
                            <h3 class="panel-title" id="tour-slot-form-title" style="margin-bottom: 0.25rem; font-size: 1.35rem;">Add / Configure Tour Slot</h3>
                            <p class="panel-desc" id="tour-slot-form-desc" style="margin-bottom: 0; font-size: 0.8rem; color: var(--color-text-muted);">Configure daily factory visit time windows and visitor capacity limits.</p>
                        </div>
                        
                        <form id="admin-add-slot-form" class="admin-form" style="display: flex; flex-direction: column; gap: 1.15rem;">
                            <input type="hidden" id="slot-edit-id" value="">
                            
                            <!-- Quick-Select Standard Slot Time Pills -->
                            <div>
                                <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); display: block; margin-bottom: 0.4rem;">
                                    Quick Select Standard Factory Slot
                                </label>
                                <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                                    <button type="button" class="quick-slot-pill" data-time="09:30 AM" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(212,175,55,0.3); color: #fff; font-size: 0.75rem; padding: 0.3rem 0.65rem; border-radius: 4px; cursor: pointer;">09:30 AM</button>
                                    <button type="button" class="quick-slot-pill" data-time="11:00 AM" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(212,175,55,0.3); color: #fff; font-size: 0.75rem; padding: 0.3rem 0.65rem; border-radius: 4px; cursor: pointer;">11:00 AM</button>
                                    <button type="button" class="quick-slot-pill" data-time="01:30 PM" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(212,175,55,0.3); color: #fff; font-size: 0.75rem; padding: 0.3rem 0.65rem; border-radius: 4px; cursor: pointer;">01:30 PM</button>
                                    <button type="button" class="quick-slot-pill" data-time="03:30 PM" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(212,175,55,0.3); color: #fff; font-size: 0.75rem; padding: 0.3rem 0.65rem; border-radius: 4px; cursor: pointer;">03:30 PM</button>
                                </div>
                            </div>

                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.4rem;">
                                <label class="form-label" for="slot-time-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Time Slot *</label>
                                <input class="form-input" type="text" id="slot-time-input" required placeholder="e.g. 09:30 AM or 09:30 AM - 11:30 AM" value="09:30 AM">
                                <span class="field-hint" style="font-size: 0.72rem; color: var(--color-text-muted); display: block;">Standard sessions run ~1.5 to 2.0 hours.</span>
                            </div>
                            
                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.4rem;">
                                <label class="form-label" for="slot-package-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Experience Package *</label>
                                <select class="form-input" id="slot-package-input" required>
                                    <option value="01. Gongfu-Style Black Tea Brewing Experience" selected>01. Gongfu-Style Black Tea Brewing Experience (LKR 1,450)</option>
                                    <option value="Private Estate Terroir Tour &amp; Masterclass">Private Estate Terroir Tour &amp; Masterclass (Custom)</option>
                                    <option value="Highland Garden Walk &amp; Artisan Cupping">Highland Garden Walk &amp; Artisan Cupping (VIP)</option>
                                </select>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 140px 1.3fr; gap: 0.85rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.4rem;">
                                    <label class="form-label" for="slot-capacity-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Max Capacity (Guests)</label>
                                    <input class="form-input" type="number" id="slot-capacity-input" min="1" max="50" value="10" required>
                                    <span class="field-hint" style="font-size: 0.7rem; color: var(--color-text-muted);">Default: 10 visitors</span>
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.4rem;">
                                    <label class="form-label" for="slot-currency" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Currency *</label>
                                    <select class="form-input" id="slot-currency" style="font-weight: 700; color: var(--color-gold);">
                                        <option value="LKR" selected>LKR (Rs)</option>
                                        <option value="USD">USD ($)</option>
                                    </select>
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.4rem;">
                                    <label class="form-label" id="slot-amount-label" for="slot-amount-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #86efac;">Fee / Person *</label>
                                    <input class="form-input" type="number" step="1" id="slot-amount-input" min="0" value="1450" required style="font-weight:600;">
                                    <div id="slot-counterpart-price" style="font-size: 0.7rem; color: var(--color-gold); font-weight: 600; min-height: 1rem;">
                                        ≈ $4.75 USD
                                    </div>
                                </div>
                            </div>
                            <!-- Hidden dual currency inputs for tour slots -->
                            <input type="hidden" id="slot-price-input" value="1450">
                            <input type="hidden" id="slot-price-usd" value="4.75">

                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.4rem;">
                                <label class="form-label" for="slot-status-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Slot Availability Status *</label>
                                <select class="form-input" id="slot-status-input" required>
                                    <option value="Available" selected>Available (Open for booking)</option>
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
                                        <th>Pricing / Quotation</th>
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
                                                <img src="${box.image || 'images/Gift%20Box.jpeg'}" alt="${box.name}" style="width: 44px; height: 44px; object-fit: contain; border-radius: 4px; border: 1px solid rgba(212,175,55,0.3); background: rgba(0,0,0,0.4); display: block;" onerror="window.handleImageError && window.handleImageError(this, 'box')" loading="lazy" decoding="async">
                                            </td>
                                            <td class="font-mono text-gold font-bold" style="font-size: 1.1rem;">#${String(box.id).padStart(2, '0')}</td>
                                            <td>
                                                <strong>${box.name}</strong>
                                                ${box.booking ? `<br><small style="color:var(--color-gold);">Client: ${box.booking.customerName}</small>` : ''}
                                            </td>
                                            <td>
                                                ${box.booking && (box.booking.quotedTotal || box.booking.quotedPrice) ? `
                                                    <div style="color:var(--color-gold); font-weight: 700; font-size: 0.85rem;">
                                                        $${parseFloat(box.booking.quotedTotal || box.booking.quotedPrice).toFixed(2)} USD
                                                    </div>
                                                    <small style="color: #86efac; font-weight: 600; font-size: 0.72rem;">
                                                        (Rs ${Math.round(parseFloat(box.booking.quotedTotal || box.booking.quotedPrice) * 305).toLocaleString()} LKR)
                                                    </small>
                                                ` : `
                                                    <span class="box-badge status-pending" style="font-size: 0.65rem; background: rgba(212,175,55,0.12); color: var(--color-gold); border: 1px solid rgba(212,175,55,0.3);">
                                                        Enquiry Only &bull; Quoted on Request
                                                    </span>
                                                `}
                                            </td>
                                            <td>
                                                <span class="box-badge ${box.status === 'Available' ? 'status-available' : (box.status === 'Booked' ? 'status-booked' : 'status-pending')}" style="font-size: 0.65rem;">
                                                    ${box.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div style="display: flex; gap: 0.4rem; align-items: center;">
                                                    <button class="btn-edit-box" data-id="${box.id}" data-name="${box.name}" data-status="${box.status}" data-desc="${box.desc || ''}" data-image="${box.image || 'images/Gift Box.jpeg'}" style="background: rgba(212,175,55,0.12); border: 1px solid rgba(212,175,55,0.4); color: var(--color-gold); padding: 0.35rem 0.65rem; font-size: 0.7rem; border-radius: 3px; cursor: pointer; transition: var(--transition-smooth); display: inline-flex; align-items: center; gap: 0.25rem;" title="Edit Gift Box">
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
                            
                            <!-- Row 1: Box #, Box Display Name, and Availability Status -->
                            <div class="form-row" style="display: grid; grid-template-columns: 110px 1.4fr 1fr; gap: 1rem; align-items: start;">
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="box-num-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); min-height: 1.2rem; display: flex; align-items: center;">Box ID *</label>
                                    <input class="form-input" type="number" id="box-num-input" required min="1" placeholder="e.g. ${boxes.length + 1}" value="${boxes.length + 1}" style="font-family: monospace; font-weight: 700; text-align: center;">
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="box-name-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); min-height: 1.2rem; display: flex; align-items: center;">Box Display Name *</label>
                                    <input class="form-input" type="text" id="box-name-input" required placeholder="e.g. Gift Box #${String(boxes.length + 1).padStart(2, '0')}" value="Gift Box #${String(boxes.length + 1).padStart(2, '0')}">
                                </div>
                                <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                    <label class="form-label" for="box-status-input" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); min-height: 1.2rem; display: flex; align-items: center;">Availability Status *</label>
                                    <select class="form-input" id="box-status-input" required>
                                        <option value="Available">Available (Open for Enquiry)</option>
                                        <option value="Enquiry Pending">Enquiry Pending</option>
                                        <option value="Booked">Booked (Reserved)</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Row 3: Image Upload Zone -->
                            <div class="form-group" style="display: flex; flex-direction: column; gap: 0.45rem;">
                                <label class="form-label" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Attach Gift Box Image</label>
                                <div class="file-upload-zone" id="box-image-zone" style="padding: 1.25rem 1rem; border-radius: 10px;">
                                    <div class="file-upload-icon" style="margin-bottom: 0.35rem; color: var(--color-gold);">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                            <circle cx="12" cy="13" r="4"></circle>
                                        </svg>
                                    </div>
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
                    <p class="panel-desc">Configure the new catalog harvest series or reset reservations.</p>
                    
                    <form id="season-reset-form" class="admin-form">
                        <div class="form-group">
                            <label for="new-season-name">New Season / Series Name</label>
                            <input type="text" id="new-season-name" placeholder="e.g. Celestial Autumn Pearl" required>
                            <span class="field-hint">e.g., Celestial Autumn Pearl, Golden Leaf Selection, Imperial Jasmine Blossom</span>
                        </div>
                        <div style="font-size: 0.75rem; color: #cbd5e1; background: rgba(0,0,0,0.3); border: 1px solid rgba(212,175,55,0.25); padding: 0.85rem; border-radius: 6px; margin-bottom: 0.75rem; line-height: 1.5;">
                            <strong style="color: var(--color-gold); display: block; margin-bottom: 0.25rem;">Bespoke Enquiry Architecture:</strong>
                            All gift boxes in the new series will be introduced as <em>Enquiry Only</em>. Specific chest pricing and courier charges are formulated individually per client in the <strong>Gift Box Quotations &amp; Payment Links Desk</strong>.
                        </div>
                        <input type="hidden" id="new-box-price" value="0">
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
                    <p class="panel-desc">Post an announcement detailing estate harvest notes, updates, or private tasting invitations.</p>
                    
                    <form id="announcement-form" class="admin-form">
                        <div class="form-group">
                            <label for="ann-title-input">Announcement Title</label>
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
                            <textarea id="ann-content-input" rows="3" placeholder="Enter announcement details here..." required></textarea>
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
                        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--color-white); margin-bottom: 1.5rem;">Manage Published Announcements</h4>
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
            const inStockCount = products.filter(p => (p.stock || '').toLowerCase() === 'in stock').length;
            const lowStockCount = products.filter(p => ['low stock', 'rare reserve'].includes((p.stock || '').toLowerCase())).length;
            const blackCount = products.filter(p => (p.category || '').toLowerCase().includes('black')).length;
            const greenCount = products.filter(p => (p.category || '').toLowerCase().includes('green')).length;
            const whiteCount = products.filter(p => (p.category || '').toLowerCase().includes('white')).length;

            html += `
                <div class="products-desk-wrapper">
                    <!-- Desk Header with Stats & Actions -->
                    <div class="products-desk-header">
                        <div>
                            <div class="products-desk-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <span>STOREFRONT PRODUCT DESK</span>
                            </div>
                            <h2 class="products-desk-title">Artisanal Tea Inventory &amp; Catalog Studio</h2>
                            <p class="products-desk-subtitle">
                                Manage your single-estate offerings, dual-currency pricing, inventory levels, high-resolution photography showcase, and sommelier tasting dossiers.
                            </p>
                        </div>
                        
                        <!-- Live Inventory Stats -->
                        <div class="products-stats-bar">
                            <div class="stat-pill">
                                <span class="stat-num">${products.length}</span>
                                <span class="stat-label">Total Teas</span>
                            </div>
                            <div class="stat-pill">
                                <span class="stat-num" style="color: #16a34a;">${inStockCount}</span>
                                <span class="stat-label">In Stock</span>
                            </div>
                            <div class="stat-pill">
                                <span class="stat-num" style="color: #d97706;">${lowStockCount}</span>
                                <span class="stat-label">Low / Reserve</span>
                            </div>
                        </div>
                    </div>

                    <!-- View Switcher Tabs -->
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <div class="products-view-switcher">
                            <button type="button" id="tab-view-catalog" class="products-view-btn active">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                <span>Active Catalog (${products.length})</span>
                            </button>
                            <button type="button" id="tab-view-composer" class="products-view-btn">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                <span>Introduce New Product</span>
                            </button>
                        </div>

                        <div id="quick-composer-launch-wrap">
                            <button type="button" id="btn-quick-add-prod" class="btn btn-primary" style="font-size: 0.8rem; padding: 0.55rem 1.15rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.45rem; box-shadow: 0 4px 15px rgba(212,175,55,0.25);">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                <span>Introduce Tea</span>
                            </button>
                        </div>
                    </div>

                    <!-- VIEW 1: ACTIVE PRODUCTS CATALOG -->
                    <div id="products-catalog-section" class="product-catalog-card">
                        <!-- Toolbar: Search & Category Filter Chips -->
                        <div class="catalog-toolbar">
                            <div class="catalog-search-wrap">
                                <span class="catalog-search-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </span>
                                <input type="text" id="prod-catalog-search" class="catalog-search-input" placeholder="Search products by name, grade, category, notes...">
                            </div>

                            <div class="catalog-filter-group" id="prod-category-filter-chips">
                                <button type="button" class="catalog-filter-chip active" data-filter="all">All (${products.length})</button>
                                <button type="button" class="catalog-filter-chip" data-filter="Black Tea">Black Tea (${blackCount})</button>
                                <button type="button" class="catalog-filter-chip" data-filter="Green Tea">Green Tea (${greenCount})</button>
                                <button type="button" class="catalog-filter-chip" data-filter="White Tea">White Tea (${whiteCount})</button>
                            </div>
                        </div>

                        <!-- Products Table -->
                        <div class="table-responsive" style="border: 1px solid #e8e4df; border-radius: 10px; overflow-x: auto; background: #ffffff;">
                            <table class="modern-product-table" id="admin-products-table" style="width: 100%; min-width: 820px;">
                                <thead>
                                    <tr>
                                        <th style="width: 65px; text-align: center;">Photo</th>
                                        <th style="min-width: 180px;">Product &amp; Harvest Details</th>
                                        <th style="min-width: 140px;">Category &amp; Brewing</th>
                                        <th style="min-width: 100px;">Packaging</th>
                                        <th style="min-width: 125px;">Pricing &amp; Shipping</th>
                                        <th style="min-width: 95px;">Stock</th>
                                        <th style="min-width: 120px; text-align: right;">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${products.map(prod => {
                                        const priceVal = Number(prod.price !== undefined ? prod.price : (prod.price_usd !== undefined ? prod.price_usd : 0)) || 0;
                                        const shippingVal = Number(prod.shippingCharge !== undefined ? prod.shippingCharge : (prod.shippingFee !== undefined ? prod.shippingFee : (prod.shipping_fee_usd || 0))) || 0;
                                        const leafGradeStr = prod.leafGrade || prod.leaf_grade || 'Finest Harvest';
                                        const categoryStr = prod.category || 'Black Tea';
                                        const subcategoryStr = prod.subcategory || prod.sub_category || 'Hot Tea (Gongfu style)';
                                        const weightStr = prod.weight || '100g Vintage Tin';
                                        const stockStr = prod.stock || (prod.stock_quantity > 0 ? 'In Stock' : 'In Stock');
                                        const flavorProfileStr = prod.flavorProfile || prod.flavor_profile || '';
                                        const tastingNotesArr = Array.isArray(prod.tastingNotes) ? prod.tastingNotes : (Array.isArray(prod.flavor_notes) ? prod.flavor_notes : []);
                                        const tastingNotesStr = tastingNotesArr.join(', ');
                                        const radar = prod.sensoryRadar || { floral: 80, malty: 75, sweetness: 80, astringency: 40, body: 80, aroma: 90 };
                                        const steepSeconds = prod.steepSeconds || 180;
                                        const elevationStr = prod.elevation || '1,200m Highlands';

                                        let prodImg = prod.image || prod.image_url || 'images/Product.jpeg';
                                        if (prodImg.includes('silver_tips')) prodImg = 'images/Product.jpeg';
                                        else if (prodImg.includes('black_tea')) prodImg = 'images/luxury_tea_tin.jpg';
                                        else if (prodImg.includes('green_tea')) prodImg = 'images/luxury_tea_chest.jpg';
                                        else if (prodImg.includes('tea_box')) prodImg = 'images/Gift Box.jpeg';

                                        const prodImagesArr = Array.isArray(prod.images) && prod.images.length > 0 ? prod.images : [prodImg];
                                        const prodImagesCount = prodImagesArr.length;

                                        return `
                                        <tr class="prod-table-row" data-name="${(prod.name || '').toLowerCase()}" data-category="${categoryStr}" data-grade="${leafGradeStr.toLowerCase()}" data-flavor="${flavorProfileStr.toLowerCase()}">
                                            <td>
                                                <div style="position: relative; width: 50px; height: 50px; display: inline-block;">
                                                    <img src="${prodImg}" alt="${prod.name}" style="width: 50px; height: 50px; object-fit: contain; border-radius: 8px; border: 1.5px solid rgba(212,175,55,0.4); background: #ffffff; display: block; box-shadow: 0 2px 6px rgba(0,0,0,0.06);" onerror="window.handleImageError && window.handleImageError(this, 'product')" loading="lazy" decoding="async">
                                                    <span style="position: absolute; bottom: -4px; right: -4px; background: ${prodImagesCount > 1 ? '#855b05' : '#4b5563'}; border: 1.5px solid #ffffff; color: #ffffff; font-size: 0.58rem; font-weight: 700; padding: 0.1rem 0.35rem; border-radius: 8px; line-height: 1; display: inline-flex; align-items: center; gap: 0.2rem; box-shadow: 0 2px 5px rgba(0,0,0,0.2);" title="${prodImagesCount} photo(s) in gallery">
                                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                                        <span>${prodImagesCount}</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div style="font-weight: 700; font-size: 0.92rem; color: #111827;">${prod.name}</div>
                                                <div style="display: inline-flex; align-items: center; gap: 0.35rem; margin-top: 2px;">
                                                    <span style="font-size: 0.7rem; font-weight: 600; color: #855b05; background: #fdf6e7; border: 1px solid #e8d7a8; padding: 0.1rem 0.45rem; border-radius: 4px;">${leafGradeStr}</span>
                                                    ${elevationStr ? `<span style="font-size: 0.68rem; color: #64748b;">• ${elevationStr}</span>` : ''}
                                                </div>
                                                ${flavorProfileStr ? `<div style="color: #6b7280; font-size: 0.74rem; font-style: italic; margin-top: 3px;">🫖 ${flavorProfileStr}</div>` : ''}
                                            </td>
                                            <td>
                                                <span style="font-weight: 600; font-size: 0.82rem; color: #111827;">${categoryStr}</span><br>
                                                <span style="font-size: 0.7rem; color: #4b5563; background: #f3f4f6; padding: 0.15rem 0.45rem; border-radius: 4px; display: inline-block; margin-top: 3px;">${subcategoryStr}</span>
                                                <div style="font-size: 0.68rem; color: #64748b; margin-top: 3px;">
                                                    ${prod.steepTemp || '85°C'} • ${prod.steepTime || '3-4 mins'}
                                                </div>
                                            </td>
                                            <td>
                                                <span style="font-size: 0.82rem; font-weight: 600; color: #374151;">${weightStr}</span>
                                                ${prod.symbol ? `<br><small style="font-size: 0.68rem; color: #855b05;">Symbol: ${prod.symbol}</small>` : ''}
                                            </td>
                                            <td>
                                                <div style="font-weight: 700; font-size: 0.92rem; color: #111827;">$${priceVal.toFixed(2)}</div>
                                                <div style="font-size: 0.72rem; color: #64748b;">Rs ${(prod.price_lkr || Math.round(priceVal * 305)).toLocaleString()}</div>
                                                ${shippingVal > 0 ? `<div style="font-size: 0.68rem; color: #15803d; font-weight: 600; margin-top: 2px;">+$${shippingVal.toFixed(2)} ship</div>` : `<div style="font-size: 0.68rem; color: #64748b;">Free delivery</div>`}
                                            </td>
                                            <td>
                                                <span class="box-badge ${stockStr === 'In Stock' ? 'status-available' : (stockStr === 'Rare Reserve' ? 'status-reserve' : 'status-pending')}" style="font-size: 0.68rem; padding: 0.2rem 0.55rem; border-radius: 6px; white-space: nowrap; display: inline-block;">
                                                    ${stockStr}
                                                </span>
                                            </td>
                                            <td style="text-align: right; white-space: nowrap;">
                                                <div style="display: inline-flex; gap: 0.45rem; align-items: center;">
                                                    <button class="btn-edit-prod" 
                                                            data-id="${prod.id}" 
                                                            data-name="${prod.name}" 
                                                            data-category="${categoryStr}" 
                                                            data-subcategory="${subcategoryStr}" 
                                                            data-price="${priceVal}" 
                                                            data-price-lkr="${prod.price_lkr || Math.round(priceVal * 305)}"
                                                            data-shipping="${shippingVal}" 
                                                            data-shipping-lkr="${prod.shippingCharge_lkr !== undefined ? prod.shippingCharge_lkr : Math.round(shippingVal * 305)}"
                                                            data-weight="${weightStr}" 
                                                            data-symbol="${prod.symbol || ''}" 
                                                            data-stock="${stockStr}" 
                                                            data-desc="${(prod.desc || prod.description || '').replace(/"/g, '&quot;')}" 
                                                            data-grade="${leafGradeStr}" 
                                                            data-temp="${prod.steepTemp || prod.steep_temp || ''}" 
                                                            data-time="${prod.steepTime || prod.steep_time || ''}" 
                                                            data-image="${prod.image || prod.image_url || 'images/Product.jpeg'}" 
                                                            data-images="${encodeURIComponent(JSON.stringify(prodImagesArr))}" 
                                                            data-flavor-profile="${flavorProfileStr.replace(/"/g, '&quot;')}" 
                                                            data-tasting-notes="${tastingNotesStr.replace(/"/g, '&quot;')}" 
                                                            data-radar-floral="${radar.floral ?? 80}" 
                                                            data-radar-malty="${radar.malty ?? 75}" 
                                                            data-radar-sweetness="${radar.sweetness ?? 80}" 
                                                            data-radar-astringency="${radar.astringency ?? 40}" 
                                                            data-radar-body="${radar.body ?? 80}" 
                                                            data-radar-aroma="${radar.aroma ?? 90}" 
                                                            data-steep-seconds="${steepSeconds}" 
                                                            data-elevation="${elevationStr.replace(/"/g, '&quot;')}" 
                                                            data-headline="${(prod.headline || '').replace(/"/g, '&quot;')}" 
                                                            data-about="${(prod.about || prod.desc || prod.description || '').replace(/"/g, '&quot;')}" 
                                                            data-origin="${(prod.origin || '').replace(/"/g, '&quot;')}" 
                                                            data-caffeine="${(prod.caffeine || '').replace(/"/g, '&quot;')}" 
                                                            data-preparation="${(prod.preparation || '').replace(/"/g, '&quot;')}" 
                                                            data-benefits="${(prod.benefits || '').replace(/"/g, '&quot;')}" 
                                                            style="background: #fdf6e7; border: 1.5px solid #d4af37; color: #855b05; padding: 0.4rem 0.75rem; font-size: 0.75rem; font-weight: 700; border-radius: 5px; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 0.35rem;" 
                                                            title="Edit Product Details">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        Edit
                                                    </button>
                                                    <button class="btn-delete-prod" data-id="${prod.id}" data-name="${prod.name}" style="background: transparent; border: 1.5px solid #fca5a5; color: #dc2626; padding: 0.4rem 0.75rem; font-size: 0.75rem; font-weight: 600; border-radius: 5px; cursor: pointer; transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 0.35rem;" title="Delete product">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                            <div id="catalog-no-results" style="display: none; padding: 2.5rem; text-align: center; color: #64748b; font-size: 0.9rem;">
                                No tea products found matching your search. Try adjusting keywords or category filters.
                            </div>
                        </div>
                    </div>

                    <!-- VIEW 2: PRODUCT STUDIO COMPOSER -->
                    <div id="products-composer-section" class="product-composer-card" style="display: none;">
                        <!-- Composer Header -->
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1.5px solid #eee9e0; padding-bottom: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #855b05; margin-bottom: 0.35rem;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                    <span>PRODUCT COMPOSER STUDIO</span>
                                </div>
                                <h3 class="panel-title" id="prod-form-title" style="margin-bottom: 0.25rem; font-size: 1.45rem; color: #111827; font-family: var(--font-serif);">Introduce New Product</h3>
                                <p class="panel-desc" id="prod-form-desc" style="margin-bottom: 0; font-size: 0.82rem; color: #64748b;">Add a new standard tea harvest with pricing, gallery, tasting radar, and connoisseur dossiers.</p>
                            </div>
                            <button type="button" id="btn-back-to-catalog" class="btn btn-outline" style="font-size: 0.78rem; padding: 0.5rem 1rem; border-color: #d1d5db; color: #4b5563; display: inline-flex; align-items: center; gap: 0.4rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                                <span>Back to Catalog</span>
                            </button>
                        </div>

                        <!-- Edit Mode Alert Banner -->
                        <div id="composer-edit-banner" class="composer-edit-banner">
                            <div style="display: flex; align-items: center; gap: 0.65rem;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                <span style="font-weight: 600; font-size: 0.85rem;" id="composer-edit-badge-text">Editing Product Specifications</span>
                            </div>
                            <button type="button" id="btn-cancel-edit-banner" style="background: transparent; border: 1px solid #ca8a04; color: #854d0e; font-size: 0.72rem; padding: 0.25rem 0.65rem; border-radius: 4px; cursor: pointer; font-weight: 600;">
                                Discard &amp; Reset
                            </button>
                        </div>

                        <form id="admin-add-product-form" class="admin-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <input type="hidden" id="prod-edit-id" value="">
                            <input type="hidden" id="prod-price" value="45.00">
                            <input type="hidden" id="prod-price-lkr" value="13725">
                            <input type="hidden" id="prod-shipping" value="0.00">
                            <input type="hidden" id="prod-shipping-lkr" value="0">

                            <!-- SECTION 1: Product Identity & Classifications -->
                            <div class="composer-section-card">
                                <div class="composer-section-header">
                                    <h4 class="composer-section-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <span>01. Product Identity &amp; Classification</span>
                                    </h4>
                                    <span class="composer-section-badge">Core Details</span>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.15rem; margin-bottom: 1.15rem;">
                                    <div class="form-group">
                                        <label class="form-label" for="prod-name">Product Name *</label>
                                        <input class="form-input" type="text" id="prod-name" required placeholder="e.g. Royal Earl Grey Reserve">
                                        <span class="field-hint">Primary name displayed on product cards and checkout receipts.</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-grade">Leaf Grade</label>
                                        <input class="form-input" type="text" id="prod-grade" placeholder="e.g. Finest Tippy Flowery Orange Pekoe (FTGFOP1)">
                                        <span class="field-hint">Official orthodox tea leaf grading standard.</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-symbol">Icon / Packaging Monogram</label>
                                        <select class="form-input" id="prod-symbol">
                                            <option value="">Standard Monogram</option>
                                            <option value="Black Tea">Black Tea Reserve</option>
                                            <option value="Green Tea">Green Tea Reserve</option>
                                            <option value="White Tea">White Tea Reserve</option>
                                            <option value="Oolong Tea">Oolong Tea Reserve</option>
                                        </select>
                                        <span class="field-hint">Displayed on seal stamps and collector tin lids.</span>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.15rem; margin-bottom: 1.15rem;">
                                    <div class="form-group">
                                        <label class="form-label" for="prod-category">Category *</label>
                                        <select class="form-input" id="prod-category" required>
                                            <option value="Black Tea" selected>Black Tea</option>
                                            <option value="White Tea">White Tea</option>
                                            <option value="Green Tea">Green Tea</option>
                                            <option value="Oolong Tea">Oolong Tea</option>
                                            <option value="Herbal Infusion">Herbal Infusion</option>
                                            <option value="Specialty Tea">Specialty Tea</option>
                                            <option value="Artisanal Reserve">Artisanal Reserve</option>
                                            <option value="Private Reserve">Private Reserve</option>
                                            <option value="artisan">Artisan Collection</option>
                                            <option value="private_reserve">Private Reserve (Legacy)</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-subcategory">Sub-Category *</label>
                                        <select class="form-input" id="prod-subcategory" required>
                                            <option value="Hot Tea (Gongfu style)" selected>Hot Tea (Gongfu style)</option>
                                            <option value="Ice Tea">Ice Tea</option>
                                            <option value="Cool Tea">Cool Tea</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="prod-desc">Short Description *</label>
                                    <textarea class="form-input" id="prod-desc" required rows="3" placeholder="Describe the character, harvest altitude, processing style, and tea drinking experience..." style="resize: vertical; line-height: 1.5;"></textarea>
                                </div>
                            </div>

                            <!-- SECTION 2: Pricing, Packaging & Stock -->
                            <div class="composer-section-card">
                                <div class="composer-section-header">
                                    <h4 class="composer-section-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                        <span>02. Dual-Currency Pricing, Packaging &amp; Stock</span>
                                    </h4>
                                    <span class="composer-section-badge">Financial &amp; Inventory</span>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.15rem; margin-bottom: 1.15rem;">
                                    <div class="form-group">
                                        <label class="form-label" for="prod-currency">Input Currency</label>
                                        <select class="form-input" id="prod-currency" style="font-weight: 700; color: #855b05;">
                                            <option value="USD" selected>USD ($)</option>
                                            <option value="LKR">LKR (Rs)</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" id="prod-amount-label" for="prod-amount-input">Product Price *</label>
                                        <input class="form-input" type="number" step="0.01" id="prod-amount-input" required placeholder="45.00" style="font-weight: 700;">
                                        <div id="prod-counterpart-price" style="font-size: 0.72rem; color: #16a34a; font-weight: 700; margin-top: 0.25rem;">
                                            ≈ Rs 13,725 LKR
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" id="prod-shipping-label" for="prod-shipping-amount-input">Shipping Charge</label>
                                        <input class="form-input" type="number" step="0.01" min="0" id="prod-shipping-amount-input" placeholder="0.00" style="font-weight: 700;">
                                        <div id="prod-counterpart-shipping" style="font-size: 0.72rem; color: #16a34a; font-weight: 700; margin-top: 0.25rem;">
                                            Free / Complimentary
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-weight">Net Weight / Packaging *</label>
                                        <input class="form-input" type="text" id="prod-weight" required placeholder="100g Vintage Tin">
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.15rem;">
                                    <div class="form-group">
                                        <label class="form-label" for="prod-stock">Stock Availability *</label>
                                        <select class="form-input" id="prod-stock" required>
                                            <option value="In Stock">In Stock (Available for Storefront Orders)</option>
                                            <option value="Low Stock">Low Stock (Limited Reserve)</option>
                                            <option value="Rare Reserve">Rare Reserve (Special Harvest)</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-elevation">Terroir Elevation</label>
                                        <input class="form-input" type="text" id="prod-elevation" placeholder="e.g. 1,240m Montane Ridge">
                                    </div>
                                </div>
                            </div>

                            <!-- SECTION 3: Photography Showcase & Multiple Gallery Images -->
                            <div class="composer-section-card">
                                <div class="composer-section-header">
                                    <h4 class="composer-section-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        <span>03. Product Photography &amp; Multi-Angle Gallery</span>
                                    </h4>
                                    <span id="prod-photos-count-badge" style="font-size: 0.72rem; padding: 0.2rem 0.65rem; border-radius: 12px; background: #fdf6e7; border: 1px solid #e8d7a8; color: #855b05; font-weight: 700;">
                                        0 Photos Attached
                                    </span>
                                </div>
                                <p style="font-size: 0.78rem; color: #64748b; margin: 0 0 1rem 0; line-height: 1.45;">
                                    Attach multiple photos. The designated <strong style="color:#855b05;">★ Main Cover</strong> photo serves as the storefront card and catalog image, while all photos form the interactive 360&deg; gallery inside customer product detail modals.
                                </p>

                                <!-- Drag & Drop / File Upload Zone -->
                                <div class="file-upload-zone" id="prod-image-zone" style="padding: 1.5rem 1rem; border-radius: 10px; cursor: pointer; text-align: center; border: 2px dashed #d4af37; background: #fbfaf7; transition: all 0.2s ease;">
                                    <div class="file-upload-icon" style="margin-bottom: 0.35rem; color: #855b05;">
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                    </div>
                                    <div class="file-upload-text" style="font-size: 0.88rem; font-weight: 600; color: #1f2937;">
                                        Drag &amp; drop multiple photos here, or <span class="file-upload-link" style="color: #855b05; text-decoration: underline;">browse device</span>
                                    </div>
                                    <div class="file-upload-hint" style="font-size: 0.72rem; margin-top: 0.35rem; color: #64748b;">
                                        Supports JPG, PNG, WebP &bull; Select multiple files at once (Up to 5MB each)
                                    </div>
                                    <input type="file" id="prod-image-file" accept="image/*" multiple style="display:none;">
                                </div>

                                <!-- Add by URL / Relative Path -->
                                <div style="display: flex; gap: 0.5rem; align-items: center; background: #ffffff; padding: 0.5rem 0.75rem; border-radius: 8px; border: 1px solid #d1d5db; margin-top: 0.85rem;">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#855b05" stroke-width="2" style="flex-shrink:0;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    <input type="text" id="prod-image-url-input" class="form-input" placeholder="Or paste image URL / relative path (e.g. images/Product.jpeg)" style="padding: 0.45rem 0.65rem; font-size: 0.82rem; flex: 1; border: 1px solid #d1d5db; background:#fbfaf7;">
                                    <button type="button" id="btn-add-prod-image-url" style="background: #fdf6e7; border: 1.5px solid #d4af37; color: #855b05; font-size: 0.75rem; padding: 0.45rem 0.95rem; border-radius: 5px; cursor: pointer; white-space: nowrap; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                                        + Add Photo
                                    </button>
                                </div>

                                <!-- Quick Estate Presets -->
                                <div style="margin-top: 0.85rem;">
                                    <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #855b05; margin-bottom: 0.4rem;">
                                        Quick Estate Photography Presets:
                                    </div>
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;" id="prod-preset-images-bar">
                                        <button type="button" class="btn-preset-prod-img" data-src="images/Product.jpeg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Vintage Tin</button>
                                        <button type="button" class="btn-preset-prod-img" data-src="images/luxury_tea_tin.jpg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Luxury Tin</button>
                                        <button type="button" class="btn-preset-prod-img" data-src="images/luxury_tea_chest.jpg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Teak Chest</button>
                                        <button type="button" class="btn-preset-prod-img" data-src="images/Tea in cup.jpeg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Sommelier Cup</button>
                                        <button type="button" class="btn-preset-prod-img" data-src="images/Tea estate.jpeg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Wild Estate</button>
                                        <button type="button" class="btn-preset-prod-img" data-src="images/Factory inside.jpeg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Orthodox Roller</button>
                                        <button type="button" class="btn-preset-prod-img" data-src="images/Ceylon tea.jpg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Handcrafted Leaves</button>
                                        <button type="button" class="btn-preset-prod-img" data-src="images/Gift Box.jpeg" style="background: #ffffff; border: 1px solid #d1d5db; color: #374151; font-size: 0.72rem; padding: 0.3rem 0.65rem; border-radius: 5px; cursor: pointer; font-weight: 600;">Gift Box</button>
                                    </div>
                                </div>

                                <!-- Dynamic Attached Photos Grid -->
                                <div id="prod-photos-grid-wrapper" style="display: none; flex-direction: column; gap: 0.75rem; margin-top: 1.15rem;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eee9e0; padding-top: 0.75rem;">
                                        <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #855b05;">
                                            Attached Photos (<span id="prod-photos-count-num">0</span>)
                                        </span>
                                        <button type="button" id="btn-clear-all-prod-photos" style="background: transparent; border: 1px solid #fca5a5; color: #dc2626; font-size: 0.72rem; padding: 0.25rem 0.65rem; border-radius: 4px; cursor: pointer; font-weight: 600;">
                                            Clear All Photos
                                        </button>
                                    </div>
                                    <div id="prod-photos-thumbnails-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(135px, 1fr)); gap: 0.85rem;">
                                        <!-- Rendered dynamically -->
                                    </div>
                                </div>

                                <div id="prod-image-preview" style="display:none;"></div>
                            </div>

                            <!-- SECTION 4: Tasting Notes & 6-Point Sensory Radar -->
                            <div class="composer-section-card">
                                <div class="composer-section-header">
                                    <h4 class="composer-section-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>
                                        <span>04. Sommelier Tasting Profile &amp; Sensory Radar Chart</span>
                                    </h4>
                                    <span class="composer-section-badge">Connoisseur Dossier</span>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.15rem; margin-bottom: 1.15rem;">
                                    <div class="form-group">
                                        <label class="form-label" for="prod-flavor-profile">Sensory Flavour Profile *</label>
                                        <input class="form-input" type="text" id="prod-flavor-profile" required placeholder="e.g. Fresh Jasmine, White Peach, Sweet Montane Dew" style="font-weight: 600;">
                                        <span class="field-hint">Primary bouquet chord displayed on product cards and sommelier guide.</span>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-tasting-notes">Sommelier Tasting Chords (Comma-Separated) *</label>
                                        <input class="form-input" type="text" id="prod-tasting-notes" required placeholder="e.g. Wild Orchid, Golden Honey, Warm Cocoa, Montane Mineral">
                                        <span class="field-hint">Rendered as tasting tags on catalog and detail screens.</span>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.15rem; margin-bottom: 1.25rem;">
                                    <div class="form-group">
                                        <label class="form-label" for="prod-temp">Steeping Water Temp</label>
                                        <input class="form-input" type="text" id="prod-temp" placeholder="e.g. 95°C (203°F)">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-time">Steeping Time</label>
                                        <input class="form-input" type="text" id="prod-time" placeholder="e.g. 3-4 Minutes (or 180s)">
                                    </div>
                                </div>

                                <!-- 6-Point Sensory Radar Sliders -->
                                <div style="border-top: 1px solid #eee9e0; padding-top: 1rem;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
                                        <label class="form-label" style="margin-bottom: 0;">6-Point Sensory Radar Calibration (0% - 100%)</label>
                                        <span style="font-size: 0.72rem; color: #64748b;">Calibrates the 360° polygon radar chart</span>
                                    </div>

                                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem;">
                                        <!-- Floral -->
                                        <div class="composer-radar-box">
                                            <div style="display: flex; justify-content: space-between; font-size: 0.76rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem;">
                                                <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryFloral} Floral Intensity</span>
                                                <strong id="badge-radar-floral" style="color: #855b05; font-family: monospace;">80%</strong>
                                            </div>
                                            <input type="range" id="prod-radar-floral" min="0" max="100" value="80" step="1" style="width: 100%; accent-color: #b8860b; cursor: pointer;">
                                        </div>
                                        <!-- Malty -->
                                        <div class="composer-radar-box">
                                            <div style="display: flex; justify-content: space-between; font-size: 0.76rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem;">
                                                <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryMalty} Malty / Roast</span>
                                                <strong id="badge-radar-malty" style="color: #855b05; font-family: monospace;">75%</strong>
                                            </div>
                                            <input type="range" id="prod-radar-malty" min="0" max="100" value="75" step="1" style="width: 100%; accent-color: #b8860b; cursor: pointer;">
                                        </div>
                                        <!-- Sweetness -->
                                        <div class="composer-radar-box">
                                            <div style="display: flex; justify-content: space-between; font-size: 0.76rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem;">
                                                <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensorySweetness} Natural Sweetness</span>
                                                <strong id="badge-radar-sweetness" style="color: #855b05; font-family: monospace;">80%</strong>
                                            </div>
                                            <input type="range" id="prod-radar-sweetness" min="0" max="100" value="80" step="1" style="width: 100%; accent-color: #b8860b; cursor: pointer;">
                                        </div>
                                        <!-- Astringency -->
                                        <div class="composer-radar-box">
                                            <div style="display: flex; justify-content: space-between; font-size: 0.76rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem;">
                                                <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryAstringency} Astringency</span>
                                                <strong id="badge-radar-astringency" style="color: #855b05; font-family: monospace;">40%</strong>
                                            </div>
                                            <input type="range" id="prod-radar-astringency" min="0" max="100" value="40" step="1" style="width: 100%; accent-color: #b8860b; cursor: pointer;">
                                        </div>
                                        <!-- Body -->
                                        <div class="composer-radar-box">
                                            <div style="display: flex; justify-content: space-between; font-size: 0.76rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem;">
                                                <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryBody} Body &amp; Structure</span>
                                                <strong id="badge-radar-body" style="color: #855b05; font-family: monospace;">80%</strong>
                                            </div>
                                            <input type="range" id="prod-radar-body" min="0" max="100" value="80" step="1" style="width: 100%; accent-color: #b8860b; cursor: pointer;">
                                        </div>
                                        <!-- Aroma -->
                                        <div class="composer-radar-box">
                                            <div style="display: flex; justify-content: space-between; font-size: 0.76rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem;">
                                                <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryAroma} Aroma Intensity</span>
                                                <strong id="badge-radar-aroma" style="color: #855b05; font-family: monospace;">90%</strong>
                                            </div>
                                            <input type="range" id="prod-radar-aroma" min="0" max="100" value="90" step="1" style="width: 100%; accent-color: #b8860b; cursor: pointer;">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- SECTION 5: Connoisseur Dossier & Seven Teahouse Accordions -->
                            <div class="composer-section-card">
                                <div class="composer-section-header">
                                    <h4 class="composer-section-title">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                        <span>05. Connoisseur Dossier &amp; Storytelling Accordions</span>
                                    </h4>
                                    <span class="composer-section-badge">Seven Teahouse Style</span>
                                </div>
                                <p style="font-size: 0.78rem; color: #64748b; margin: 0 0 1rem 0; line-height: 1.45;">
                                    Configure the poetic banner headline and the 5 collapsible story accordions displayed on customer product detail screens.
                                </p>

                                <div class="form-group" style="margin-bottom: 1.15rem;">
                                    <label class="form-label" for="prod-headline">Poetic Headline Banner</label>
                                    <input class="form-input" type="text" id="prod-headline" placeholder="e.g. Tender spring buds, roasted chestnut aroma, and fresh natural sweetness" style="font-weight: 500;">
                                    <span class="field-hint">Centered serif headline displayed above the accordions.</span>
                                </div>

                                <div class="form-group" style="margin-bottom: 1.15rem;">
                                    <label class="form-label" for="prod-about">1. About This Tea (Full Story &amp; Craftsmanship)</label>
                                    <textarea class="form-input" id="prod-about" rows="3" placeholder="Detailed story of the plucking season, handcrafted pan-firing, and taste character..." style="resize: vertical; line-height: 1.5;"></textarea>
                                </div>

                                <div class="form-group" style="margin-bottom: 1.15rem;">
                                    <label class="form-label" for="prod-origin">2. Origin &amp; Terroir Details</label>
                                    <textarea class="form-input" id="prod-origin" rows="2" placeholder="e.g. Passara Sanctuary, Badulla District, Uva Highlands, 1,320m Montane Ridge..." style="resize: vertical; line-height: 1.5;"></textarea>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.15rem; margin-bottom: 1.15rem;">
                                    <div class="form-group">
                                        <label class="form-label" for="prod-caffeine">3. Caffeine Level</label>
                                        <input class="form-input" type="text" id="prod-caffeine" placeholder="e.g. Medium (approx. 38mg - 45mg per 250ml cup), high L-theanine">
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="prod-preparation">4. Preparation &amp; Steeping Guide</label>
                                        <input class="form-input" type="text" id="prod-preparation" placeholder="e.g. 90°C - 95°C water, 3.5g per 150ml, 35s - 50s - 80s infusions">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="prod-benefits">5. Tea Benefits &amp; Purity Guarantee</label>
                                    <textarea class="form-input" id="prod-benefits" rows="2" placeholder="e.g. High in polyphenols &amp; L-theanine, promotes focus, sustained antioxidant balance..." style="resize: vertical; line-height: 1.5;"></textarea>
                                </div>
                            </div>

                            <!-- Form Actions Footer -->
                            <div style="display: flex; gap: 1rem; align-items: center; justify-content: flex-end; padding-top: 1rem; border-top: 1.5px solid #eee9e0; flex-wrap: wrap;">
                                <button type="button" id="btn-cancel-edit-prod" class="btn btn-outline" style="border-color: #d1d5db; color: #4b5563; padding: 0.75rem 1.5rem; font-size: 0.85rem; font-weight: 600;">
                                    Cancel &amp; Return
                                </button>
                                <button type="submit" id="btn-save-prod" class="btn btn-primary" style="padding: 0.75rem 2rem; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 15px rgba(212,175,55,0.25);">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                    <span>Publish Product</span>
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
                                ${allReviews && allReviews.length > 0 ? allReviews.map(r => `
                                    <tr>
                                        <td>
                                            <span style="font-size: 0.95rem; letter-spacing: 1px;">
                                                ${this.renderStars(r.rating)}
                                            </span>
                                        </td>
                                        <td>
                                            <strong>${r.name || r.author || 'Guest'}</strong><br>
                                            <small style="color: var(--color-text-muted);">${r.title ? r.title + ' • ' : ''}${r.location || ''}</small>
                                        </td>
                                        <td>
                                            <span class="box-badge status-available" style="font-size: 0.7rem;">
                                                ${r.experienceType || r.role || 'Estate Experience'}
                                            </span>
                                        </td>
                                        <td style="max-width: 320px; font-size: 0.82rem; line-height: 1.5; color: #f1f5f9;">
                                            "${r.comment || r.content || ''}"
                                        </td>
                                        <td style="font-size: 0.75rem; color: var(--color-text-muted); white-space: nowrap;">
                                            ${r.date || r.date_str || ''}
                                        </td>
                                        <td>
                                            <button class="btn btn-outline btn-delete-review" data-id="${r.id}" style="padding: 0.3rem 0.65rem; font-size: 0.7rem; color: #ef4444; border-color: rgba(239,68,68,0.3);">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                `).join('') : `
                                    <tr>
                                        <td colspan="6" style="text-align: center; padding: 3rem 1.5rem; color: var(--color-text-muted);">
                                            No customer reviews found. Verified reviews will appear here once submitted.
                                        </td>
                                    </tr>
                                `}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        if (activeSubTab === 'inquiries') {
            const rawInquiries = window.TeaFactoryStore ? window.TeaFactoryStore.getInquiries() : [];
            
            // Normalize all inquiry items across Supabase and local storage
            const inquiries = rawInquiries.map(inq => {
                const id = inq.id || ('INQ-' + Math.floor(10000 + Math.random() * 90000));
                const fullName = inq.fullName || inq.full_name || inq.name || inq.clientName || 'Anonymous Patron';
                const email = inq.email || 'N/A';
                const phone = inq.phone || '';
                const organization = inq.organization || (inq.service_interested && inq.service_interested !== 'General Inquiry' ? inq.service_interested : '') || 'Private Reserve Patron';
                const country = inq.country || (inq.budget_range && inq.budget_range !== 'Not Specified' ? inq.budget_range : 'Global Connoisseur');
                const volumeTier = inq.volumeTier || inq.budget_range || inq.service_interested || 'Collector Reserve Tier';
                
                let interestsList = [];
                if (Array.isArray(inq.interests)) {
                    interestsList = inq.interests;
                } else if (typeof inq.interests === 'string' && inq.interests.trim()) {
                    interestsList = [inq.interests];
                } else if (inq.service_interested && inq.service_interested !== 'General Inquiry') {
                    interestsList = [inq.service_interested];
                } else {
                    interestsList = ['Numbered Collector Teak Wood Chests (Series 01–10)'];
                }

                const contactMethod = inq.contactMethod || (phone ? 'WhatsApp Priority Desk' : 'Email Concierge');
                const notes = inq.notes || inq.message || '';
                const dateStr = inq.created_at 
                    ? new Date(inq.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                    : (inq.date || 'Recent');
                
                // Normalized status
                let normStatus = inq.status || 'Pending Concierge Review';
                if (normStatus === 'new') normStatus = 'Pending Concierge Review';
                if (normStatus === 'contacted') normStatus = 'Contacted';
                if (normStatus === 'allocated') normStatus = 'Allocated';
                if (normStatus === 'archived') normStatus = 'Archived';

                return {
                    id,
                    fullName,
                    email,
                    phone,
                    organization,
                    country,
                    volumeTier,
                    interests: interestsList,
                    contactMethod,
                    notes,
                    date: dateStr,
                    status: normStatus,
                    raw: inq
                };
            });

            // Calculate KPI statistics
            const totalCount = inquiries.length;
            const pendingCount = inquiries.filter(i => i.status === 'Pending Concierge Review' || i.status === 'new').length;
            const contactedCount = inquiries.filter(i => i.status === 'Contacted').length;
            const allocatedCount = inquiries.filter(i => i.status === 'Allocated').length;
            const archivedCount = inquiries.filter(i => i.status === 'Archived').length;

            html += `
                <div class="panel-card inq-ledger-wrapper" style="margin-bottom: 0; background: #ffffff; border: 1px solid #e8e4df; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border-radius: 12px; padding: 1.75rem;">
                    
                    <!-- Header Section -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1.25rem; border-bottom: 1px solid rgba(212,175,55,0.18); padding-bottom: 1.25rem;">
                        <div>
                            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem;">
                                <span style="color: var(--color-gold); display: flex; align-items: center;">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </span>
                                <h3 class="panel-title" style="margin-bottom: 0; font-family: var(--font-serif, 'Playfair Display', serif); font-size: 1.4rem; color: var(--color-gold); letter-spacing: 0.5px;">
                                    Private Reserve Allocation Inquiries Ledger
                                </h3>
                            </div>
                            <p class="panel-desc" style="margin-bottom: 0; color: #cbd5e1; font-size: 0.88rem; max-width: 650px; line-height: 1.5;">
                                VIP patron applications, bespoke cellar allocation requests, and direct concierge response registry synced live with Supabase.
                            </p>
                        </div>
                        <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
                            <span style="font-size: 0.78rem; font-weight: 700; color: #fff; background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.4); padding: 0.4rem 0.9rem; border-radius: 30px; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 0.4rem;">
                                <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-gold); box-shadow: 0 0 8px var(--color-gold);"></span>
                                ${totalCount} VIP Registrations
                            </span>
                        </div>
                    </div>

                    <!-- KPI Statistics Ribbon -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 1rem; margin-bottom: 1.75rem;">
                        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
                            <div>
                                <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold); font-weight: 600;">Total Inquiries</div>
                                <div style="font-size: 1.4rem; font-weight: 700; color: #ffffff; font-family: monospace;">${totalCount}</div>
                            </div>
                            <span style="color: var(--color-gold); display: flex; align-items: center; opacity: 0.9;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </span>
                        </div>
                        <div style="background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.35); border-radius: 8px; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
                            <div>
                                <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: #facc15; font-weight: 600;">Pending Review</div>
                                <div style="font-size: 1.4rem; font-weight: 700; color: #facc15; font-family: monospace;">${pendingCount}</div>
                            </div>
                            <span style="color: #facc15; display: flex; align-items: center; opacity: 0.9;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </span>
                        </div>
                        <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: 8px; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
                            <div>
                                <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: #60a5fa; font-weight: 600;">Contacted</div>
                                <div style="font-size: 1.4rem; font-weight: 700; color: #60a5fa; font-family: monospace;">${contactedCount}</div>
                            </div>
                            <span style="color: #60a5fa; display: flex; align-items: center; opacity: 0.9;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </span>
                        </div>
                        <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.35); border-radius: 8px; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
                            <div>
                                <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: #4ade80; font-weight: 600;">Allocated</div>
                                <div style="font-size: 1.4rem; font-weight: 700; color: #4ade80; font-family: monospace;">${allocatedCount}</div>
                            </div>
                            <span style="color: #4ade80; display: flex; align-items: center; opacity: 0.9;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                    <path d="M4 22h16"></path>
                                    <path d="M10 14.66V17c0 .55-.45 1-1 1H7v2h10v-2h-2c-.55 0-1-.45-1-1v-2.34c3.48-.68 6.1-3.69 6.1-7.32V4H4v5.34c0 3.63 2.62 6.64 6.1 7.32z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <!-- Search & Filter Controls -->
                    <div style="display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.3); padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                        <div style="position: relative; flex: 1; min-width: 240px;">
                            <input type="text" id="inq-search-box" placeholder="Search patron, dossier ref, email, country..." style="width: 100%; padding: 0.55rem 1rem 0.55rem 2.2rem; background: rgba(10, 24, 16, 0.7); border: 1px solid rgba(212,175,55,0.3); border-radius: 6px; color: #fff; font-size: 0.84rem; outline: none;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.7)" stroke-width="2" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); pointer-events: none;">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                            <span style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Filter:</span>
                            <select id="inq-filter-status-select" style="padding: 0.5rem 0.85rem; background: rgba(10, 24, 16, 0.85); border: 1px solid rgba(212,175,55,0.35); border-radius: 6px; color: var(--color-gold); font-size: 0.82rem; cursor: pointer;">
                                <option value="ALL">All Dossiers (${totalCount})</option>
                                <option value="Pending Concierge Review">Pending Review (${pendingCount})</option>
                                <option value="Contacted">Contacted (${contactedCount})</option>
                                <option value="Allocated">Allocated (${allocatedCount})</option>
                                <option value="Archived">Archived (${archivedCount})</option>
                            </select>
                        </div>
                    </div>

                    <!-- Dossier Cards Grid (Responsive Luxury Cards) -->
                    <div id="inq-cards-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 1.25rem;">
                        ${inquiries.length === 0 ? `
                            <div style="grid-column: 1 / -1; text-align: center; color: var(--color-text-muted); padding: 3.5rem 1.5rem; background: rgba(0,0,0,0.25); border-radius: 8px; border: 1px dashed rgba(212,175,55,0.25);">
                                <div style="margin-bottom: 0.75rem; color: var(--color-gold); display: flex; justify-content: center;">
                                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                    </svg>
                                </div>
                                <h4 style="color: var(--color-gold); font-family: var(--font-serif, serif); font-size: 1.15rem; margin-bottom: 0.4rem;">No Allocation Dossiers Recorded Yet</h4>
                                <p style="font-size: 0.85rem; color: #94a3b8; max-width: 480px; margin: 0 auto;">
                                    When VIP connoisseurs submit reserve inquiries via the Private Reserve Allocation portal, their dossiers will appear here in real time.
                                </p>
                            </div>
                        ` : inquiries.map(inq => {
                            const waNumber = (inq.phone || '').replace(/[^0-9]/g, '');
                            const waLink = waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hello ${inq.fullName}, this is the Master Tea Concierge from Rock One Wild Tea Estate regarding your Private Reserve Inquiry dossier [${inq.id}].`)}` : '#';
                            const mailtoLink = inq.email !== 'N/A' ? `mailto:${inq.email}?subject=${encodeURIComponent(`Private Reserve Allocation Dossier [${inq.id}] - Rock One Wild Tea`)}&body=${encodeURIComponent(`Dear ${inq.fullName},\n\nThank you for registering your allocation request with Rock One Wild Tea Estate (Dossier Reference: ${inq.id}).\n\nWe have received your interest in: ${inq.volumeTier}.\n\nOur Estate Sommelier is preparing your personalized allocation certificate.\n\nWarm regards,\nMaster Tea Concierge\nRock One Wild Tea Estate`)}` : '#';
                            
                            // Initials
                            const initials = (inq.fullName || 'P').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

                            // Status badge colors
                            let statusBadgeStyle = 'background: rgba(234, 179, 8, 0.15); color: #facc15; border: 1px solid rgba(234, 179, 8, 0.4);';
                            if (inq.status === 'Allocated') {
                                statusBadgeStyle = 'background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.4);';
                            } else if (inq.status === 'Contacted') {
                                statusBadgeStyle = 'background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.4);';
                            } else if (inq.status === 'Archived') {
                                statusBadgeStyle = 'background: rgba(148, 163, 184, 0.12); color: #94a3b8; border: 1px solid rgba(148, 163, 184, 0.3);';
                            }

                            return `
                                <div class="inq-dossier-card" data-inq-id="${inq.id}" data-status="${inq.status}" data-search-text="${(inq.fullName + ' ' + inq.id + ' ' + inq.email + ' ' + inq.country + ' ' + inq.organization + ' ' + inq.volumeTier).toLowerCase()}" style="background: rgba(7, 20, 13, 0.75); border: 1px solid rgba(212, 175, 55, 0.22); border-radius: 10px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.25s ease; box-shadow: 0 6px 20px rgba(0,0,0,0.35);">
                                    
                                    <div>
                                        <!-- Top Row: ID, Date & Status -->
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.75rem;">
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <span style="font-family: monospace; font-size: 0.88rem; font-weight: 700; color: var(--color-gold); background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.3); padding: 0.2rem 0.55rem; border-radius: 4px;">
                                                    ${inq.id}
                                                </span>
                                                <span style="font-size: 0.75rem; color: var(--color-text-muted);">
                                                    ${inq.date}
                                                </span>
                                            </div>
                                            <div>
                                                <select class="form-input inq-status-select" data-id="${inq.id}" style="font-size: 0.75rem; padding: 0.3rem 0.55rem; border-radius: 6px; cursor: pointer; font-weight: 600; ${statusBadgeStyle}">
                                                    <option value="Pending Concierge Review" ${inq.status === 'Pending Concierge Review' ? 'selected' : ''}>Pending Review</option>
                                                    <option value="Contacted" ${inq.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
                                                    <option value="Allocated" ${inq.status === 'Allocated' ? 'selected' : ''}>Allocated</option>
                                                    <option value="Archived" ${inq.status === 'Archived' ? 'selected' : ''}>Archived</option>
                                                </select>
                                            </div>
                                        </div>

                                        <!-- Patron Identity Block -->
                                        <div style="display: flex; gap: 0.85rem; align-items: flex-start; margin-bottom: 1rem;">
                                            <div style="width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, rgba(212,175,55,0.25), rgba(7,20,13,0.9)); border: 1.5px solid var(--color-gold); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.95rem; color: var(--color-gold); flex-shrink: 0; box-shadow: 0 0 10px rgba(212,175,55,0.2);">
                                                ${initials}
                                            </div>
                                            <div style="flex: 1; min-width: 0;">
                                                <h4 style="color: #ffffff; font-size: 1.05rem; margin: 0 0 0.2rem 0; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                                                    ${inq.fullName}
                                                </h4>
                                                <div style="font-size: 0.78rem; color: var(--color-gold); display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                                                    <span style="display: inline-flex; align-items: center; gap: 0.25rem;">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-3"></path></svg>
                                                        ${inq.organization}
                                                    </span>
                                                    ${inq.country ? `
                                                        <span style="color: rgba(255,255,255,0.4);">•</span>
                                                        <span style="display: inline-flex; align-items: center; gap: 0.25rem;">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                            ${inq.country}
                                                        </span>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Contact Desks -->
                                        <div style="background: rgba(0,0,0,0.35); border-radius: 6px; padding: 0.65rem 0.85rem; margin-bottom: 0.9rem; font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.35rem; border: 1px solid rgba(255,255,255,0.04);">
                                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                                <span style="color: var(--color-text-muted); font-size: 0.72rem;">Email:</span>
                                                <a href="${mailtoLink}" style="color: #ffffff; text-decoration: underline; font-weight: 500; font-size: 0.8rem; overflow: hidden; text-overflow: ellipsis; max-width: 220px;">
                                                    ${inq.email}
                                                </a>
                                            </div>
                                            ${inq.phone ? `
                                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                                    <span style="color: var(--color-text-muted); font-size: 0.72rem;">WhatsApp:</span>
                                                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" style="color: #25d366; text-decoration: none; font-weight: 600; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.3rem;">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#25d366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                                                        ${inq.phone}
                                                    </a>
                                                </div>
                                            ` : ''}
                                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                                <span style="color: var(--color-text-muted); font-size: 0.72rem;">Desk Channel:</span>
                                                <span style="color: #cbd5e1; font-size: 0.74rem;">${inq.contactMethod}</span>
                                            </div>
                                        </div>

                                        <!-- Allocation Tier & Harvest Request -->
                                        <div style="margin-bottom: 0.85rem;">
                                            <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--color-gold); font-weight: 600; margin-bottom: 0.35rem;">
                                                Allocation Request:
                                            </div>
                                            <div style="background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.25); border-radius: 6px; padding: 0.45rem 0.75rem; color: #fff; font-size: 0.82rem; font-weight: 600; margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.4rem;">
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                                <span>${inq.volumeTier}</span>
                                            </div>
                                            ${inq.interests.length > 0 ? `
                                                <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 0.45rem;">
                                                    ${inq.interests.map(i => `
                                                        <span style="font-size: 0.72rem; color: #e2ede5; background: rgba(255,255,255,0.06); padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);">
                                                            • ${i}
                                                        </span>
                                                    `).join('')}
                                                </div>
                                            ` : ''}
                                        </div>

                                        <!-- Message / Patron Notes -->
                                        ${inq.notes ? `
                                            <div style="background: rgba(0,0,0,0.4); border-left: 3px solid var(--color-gold); border-radius: 0 6px 6px 0; padding: 0.6rem 0.85rem; margin-bottom: 1rem;">
                                                <div style="font-size: 0.7rem; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.2rem; font-weight: 600;">Patron Notes:</div>
                                                <div style="font-size: 0.8rem; color: #f1f5f9; line-height: 1.45; font-style: italic;">
                                                    "${inq.notes}"
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>

                                    <!-- Bottom Action Bar -->
                                    <div style="display: flex; gap: 0.5rem; align-items: center; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 0.85rem; margin-top: 0.5rem; flex-wrap: wrap;">
                                        ${inq.phone ? `
                                            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex: 1; padding: 0.45rem 0.75rem; font-size: 0.75rem; color: #25d366; border-color: rgba(37,211,102,0.4); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.35rem; background: rgba(37,211,102,0.08); border-radius: 6px;" title="Open WhatsApp Chat">
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="#25d366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                                                <span>WhatsApp</span>
                                            </a>
                                        ` : ''}
                                        ${inq.email !== 'N/A' ? `
                                            <a href="${mailtoLink}" class="btn btn-outline" style="flex: 1; padding: 0.45rem 0.75rem; font-size: 0.75rem; color: var(--color-gold); border-color: rgba(212,175,55,0.4); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.35rem; background: rgba(212,175,55,0.08); border-radius: 6px;" title="Send Official Email">
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                <span>Email</span>
                                            </a>
                                        ` : ''}
                                        <button class="btn btn-outline btn-delete-inquiry" data-id="${inq.id}" style="padding: 0.45rem 0.75rem; font-size: 0.75rem; color: #ff5e5e; border-color: rgba(255,94,94,0.3); cursor: pointer; background: rgba(255,94,94,0.06); border-radius: 6px; display: flex; align-items: center; gap: 0.3rem;" title="Delete Inquiry Dossier">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        if (activeSubTab === 'themes') {
            html += `
                <div class="panel-card" style="margin-bottom: 2rem;">
                    <!-- Panel Header -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <span class="section-tag" style="margin-bottom: 0.35rem;">Seasonal Ambience & Global Occasions</span>
                            <h3 class="panel-title" style="margin-bottom: 0.35rem;">Seasonal Themes & Holiday Occasions Desk</h3>
                            <p class="panel-desc" style="margin-bottom: 0;">Switch the entire website's luxury color palette, top festive banner, and ambient atmosphere (snowfall, autumn foliage, celebratory sparkles) for international seasons and cultural holidays with 1-click.</p>
                        </div>
                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                            <span class="box-badge status-available" style="font-size: 0.82rem; padding: 0.35rem 0.85rem; display: inline-flex; align-items: center; gap: 0.5rem;">
                                ${window.getSeasonalThemeIconSvg(activeTheme.id, 15)} Active: <strong>${activeTheme.name}</strong>
                            </span>
                        </div>
                    </div>

                    <!-- Theme Banner & Atmosphere Configuration Bar -->
                    <div style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 14px; padding: 1.5rem; margin-bottom: 2rem;">
                        <h4 style="font-size: 0.95rem; color: #fff; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                            Live Festive Banner & Atmosphere Controls
                        </h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; align-items: flex-end;">
                            <div style="flex: 1;">
                                <label style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--color-text-muted); margin-bottom: 0.4rem;">
                                    Custom Festive Greeting / Announcement Bar Message:
                                </label>
                                <input type="text" id="theme-custom-banner-input" class="form-input" value="${themeSettings.customBannerText || activeTheme.bannerText || ''}" placeholder="Enter custom greeting for visitors..." style="width: 100%; font-size: 0.85rem;">
                            </div>
                            <div style="display: flex; gap: 1.25rem; align-items: center; flex-wrap: wrap;">
                                <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; color: #e2e8f0; cursor: pointer;">
                                    <input type="checkbox" id="theme-banner-toggle" ${themeSettings.bannerEnabled !== false ? 'checked' : ''} style="accent-color: var(--color-gold); width: 16px; height: 16px;">
                                    Show Top Banner
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.82rem; color: #e2e8f0; cursor: pointer;">
                                    <input type="checkbox" id="theme-effects-toggle" ${themeSettings.effectsEnabled !== false ? 'checked' : ''} style="accent-color: var(--color-gold); width: 16px; height: 16px;">
                                    Ambient Particle Atmosphere
                                </label>
                                <button type="button" id="btn-save-theme-banner" class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.82rem; font-weight: 700;">
                                    Save Settings
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Available Themes Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 1.5rem;">
                        ${seasonalThemes.map(t => {
                            const isCurrent = t.id === activeTheme.id;
                            return `
                                <div class="theme-card ${isCurrent ? 'active-theme' : ''}" style="background: #ffffff; border: ${isCurrent ? '2px solid #b8860b' : '1px solid #e8e4df'}; border-radius: 14px; padding: 1.35rem; display: flex; flex-direction: column; justify-content: space-between; position: relative; transition: all 0.3s ease; box-shadow: ${isCurrent ? '0 4px 20px rgba(184,134,11,0.15)' : '0 2px 8px rgba(0,0,0,0.03)'};">
                                    <div>
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                                            <div style="display: flex; align-items: center; gap: 0.65rem;">
                                                <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(184,134,11,0.1); border: 1px solid rgba(184,134,11,0.3); display: flex; align-items: center; justify-content: center; color: #7a5a06; flex-shrink: 0;">
                                                    ${window.getSeasonalThemeIconSvg(t.id, 20)}
                                                </div>
                                                <div>
                                                    <h4 style="font-size: 1.05rem; font-weight: 700; color: #111827; margin: 0;">${t.name}</h4>
                                                    <span style="font-size: 0.7rem; color: var(--color-gold); font-weight: 600;">${t.occasion}</span>
                                                </div>
                                            </div>
                                            <span class="box-badge ${isCurrent ? 'status-available' : 'status-pending'}" style="font-size: 0.65rem; padding: 0.15rem 0.5rem;">
                                                ${isCurrent ? 'ACTIVE NOW' : t.badge}
                                            </span>
                                        </div>

                                        <p style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.45; margin-bottom: 0.85rem;">${t.tagline}</p>

                                        ${t.previewImage ? `
                                            <div style="width: 100%; height: 95px; border-radius: 8px; overflow: hidden; margin-bottom: 0.85rem; border: 1px solid rgba(212,175,55,0.3); position: relative; background: #000;">
                                                <img src="${t.previewImage}" alt="${t.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'">
                                                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 0.25rem 0.5rem; background: linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%); font-size: 0.65rem; color: #fef08a; font-weight: 600;">
                                                    ✨ Curated Festive Visuals Active
                                                </div>
                                            </div>
                                        ` : ''}

                                        <!-- Palette Swatch Circles -->
                                        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 0.55rem 0.85rem; margin-bottom: 1.15rem;">
                                            <span style="font-size: 0.7rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.8px;">Palette:</span>
                                            <div style="display: flex; gap: 0.4rem;">
                                                <span title="Primary Accent" style="width: 18px; height: 18px; border-radius: 50%; background: ${t.primaryColor}; display: inline-block; border: 1px solid rgba(255,255,255,0.3);"></span>
                                                <span title="Light Gold" style="width: 18px; height: 18px; border-radius: 50%; background: ${t.goldLight}; display: inline-block; border: 1px solid rgba(255,255,255,0.3);"></span>
                                                <span title="Secondary Accent" style="width: 18px; height: 18px; border-radius: 50%; background: ${t.accentColor}; display: inline-block; border: 1px solid rgba(255,255,255,0.3);"></span>
                                                <span title="Deep Tint" style="width: 18px; height: 18px; border-radius: 50%; background: ${t.bgDeep}; display: inline-block; border: 1px solid rgba(255,255,255,0.3);"></span>
                                            </div>
                                        </div>
                                        <!-- Theme Celebratory Greeting / Banner Preview -->
                                        <div style="background: rgba(0,0,0,0.35); border-left: 3px solid var(--color-gold); padding: 0.55rem 0.8rem; border-radius: 6px; margin-bottom: 1.15rem; font-size: 0.78rem; color: #fef08a; line-height: 1.45;">
                                            <span style="color: var(--color-text-muted); display: block; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.7px; margin-bottom: 0.25rem; font-weight: 700;">Live Celebratory Greeting:</span>
                                            ${t.bannerText}
                                        </div>
                                    </div>

                                    <div>
                                        <button type="button" class="btn ${isCurrent ? 'btn-secondary' : 'btn-primary'} btn-activate-theme" data-theme-id="${t.id}" style="width: 100%; justify-content: center; padding: 0.65rem 1rem; font-size: 0.82rem; font-weight: 700; ${isCurrent ? 'opacity: 0.75; cursor: default;' : ''}">
                                            ${isCurrent ? '✓ Theme Active' : `Activate ${t.name}`}
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        if (activeSubTab === 'coupons') {
            const allCoupons = (window.TeaFactoryStore && typeof window.TeaFactoryStore.getCoupons === 'function')
                ? window.TeaFactoryStore.getCoupons()
                : [];
            const activeCount = allCoupons.filter(c => c && c.status === 'active').length;
            const maxDiscount = allCoupons.length > 0 ? Math.max(...allCoupons.map(c => Number(c.percent) || 0)) : 0;

            html += `
                <div style="max-width: 1040px; margin: 0 auto;">
                    <!-- Header Summary Stats -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                        <div class="stat-card" style="padding: 1.25rem; background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.8px;">Total Registry Vouchers</div>
                            <div style="font-size: 1.85rem; font-weight: 700; color: #111827; font-family: var(--font-serif); margin-top: 0.25rem;">${allCoupons.length}</div>
                            <div style="font-size: 0.72rem; color: #b8860b; margin-top: 0.2rem;">Single-Estate Privilege Codes</div>
                        </div>
                        <div class="stat-card" style="padding: 1.25rem; background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.8px;">Active Live Coupons</div>
                            <div style="font-size: 1.85rem; font-weight: 700; color: #15803d; font-family: var(--font-serif); margin-top: 0.25rem;">${activeCount}</div>
                            <div style="font-size: 0.72rem; color: #16a34a; margin-top: 0.2rem;">Currently Redeemable by Patrons</div>
                        </div>
                        <div class="stat-card" style="padding: 1.25rem; background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.02);">
                            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.8px;">Maximum Privilege Rate</div>
                            <div style="font-size: 1.85rem; font-weight: 700; color: #b8860b; font-family: var(--font-serif); margin-top: 0.25rem;">${maxDiscount}% OFF</div>
                            <div style="font-size: 0.72rem; color: #64748b; margin-top: 0.2rem;">Peak Connoisseur Savings</div>
                        </div>
                    </div>

                    <!-- Create / Generate Coupon Card -->
                    <div class="admin-coupon-generator-box">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; flex-wrap: wrap;">
                            <div>
                                <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: #111827; margin: 0 0 0.35rem 0;">Generate &amp; Issue New Privilege Coupon</h3>
                                <p style="font-size: 0.82rem; color: #64748b; margin: 0;">Create custom discount codes or auto-generate estate promotional vouchers for patron allocations.</p>
                            </div>
                            <button type="button" id="admin-auto-gen-coupon-btn" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.5rem 0.95rem; display: inline-flex; align-items: center; gap: 0.45rem; border-color: #b8860b; color: #92400e; background: #fffcf4; cursor: pointer;">
                                <span>🎲 Auto-Generate Code</span>
                            </button>
                        </div>

                        <form id="admin-create-coupon-form" class="admin-form">
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-bottom: 1.25rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-code-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Coupon Code *</label>
                                    <input type="text" id="cpn-code-input" placeholder="e.g. ESTATE25 or SPRING15" required style="text-transform: uppercase; font-family: monospace; font-size: 0.95rem; font-weight: 700; letter-spacing: 1px;">
                                    <small style="font-size: 0.7rem; color: #64748b;">Letters &amp; numbers only (automatically capitalized)</small>
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-percent-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Discount Percentage (%) *</label>
                                    <input type="number" id="cpn-percent-input" min="1" max="90" value="15" required style="font-size: 0.95rem; font-weight: 700;">
                                    <div class="admin-coupon-quick-pills">
                                        <span style="font-size: 0.7rem; color: #64748b; margin-right: 0.2rem; align-self: center;">Quick:</span>
                                        <button type="button" class="admin-quick-pill-btn" data-val="10">10%</button>
                                        <button type="button" class="admin-quick-pill-btn active" data-val="15">15%</button>
                                        <button type="button" class="admin-quick-pill-btn" data-val="20">20%</button>
                                        <button type="button" class="admin-quick-pill-btn" data-val="25">25%</button>
                                        <button type="button" class="admin-quick-pill-btn" data-val="30">30%</button>
                                    </div>
                                </div>
                            </div>

                            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-label-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Promotional Label / Description *</label>
                                    <input type="text" id="cpn-label-input" value="15% OFF Single-Estate Highland Harvest" placeholder="e.g. 15% OFF Single-Estate Highland Harvest" required>
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-minspend-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Min Order ($ USD)</label>
                                    <input type="number" id="cpn-minspend-input" min="0" value="0" placeholder="0 for no minimum">
                                </div>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-visibility-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Distribution &amp; Visibility *</label>
                                    <select id="cpn-visibility-input" style="font-size: 0.88rem; font-weight: 600;">
                                        <option value="private" selected>🔒 Private VIP Reward &bull; Sent Privately (Hidden at Checkout)</option>
                                        <option value="public">🌐 Public Campaign &bull; Shown on Checkout Screen (Open Offer)</option>
                                    </select>
                                    <small style="font-size: 0.7rem; color: #64748b;">Private vouchers are hidden from public view; patrons must enter them manually.</small>
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-status-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Initial Status</label>
                                    <select id="cpn-status-input">
                                        <option value="active" selected>Active &bull; Immediately Redeemable</option>
                                        <option value="paused">Paused &bull; Saved but Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.5rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-start-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Start Date (Optional)</label>
                                    <input type="date" id="cpn-start-input">
                                    <small style="font-size: 0.7rem; color: #64748b;">Immediate if empty</small>
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label for="cpn-expiry-input" style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.8px; color: #1e293b;">Expiration Date (Optional)</label>
                                    <input type="date" id="cpn-expiry-input">
                                    <small style="font-size: 0.7rem; color: #64748b;">Automatically expires after this date</small>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary" style="padding: 0.85rem 1.75rem; font-size: 0.92rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, #111827 0%, #1f2937 100%); cursor: pointer;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                <span>Publish &amp; Issue Coupon</span>
                            </button>
                        </form>
                    </div>

                    <!-- Existing Coupons Registry Table -->
                    <div style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 12px; padding: 1.75rem 2rem; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
                            <div>
                                <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #111827; margin: 0 0 0.25rem 0;">Master Coupons &amp; Vouchers Registry</h4>
                                <p style="font-size: 0.8rem; color: #64748b; margin: 0;">Manage public campaigns, dispatch private VIP rewards via WhatsApp &amp; Email, and enforce promotional periods.</p>
                            </div>
                            <span style="font-size: 0.78rem; font-weight: 700; color: #b8860b; background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.3); padding: 0.3rem 0.75rem; border-radius: 20px;">
                                ${allCoupons.length} Vouchers Issued
                            </span>
                        </div>

                        <div class="table-responsive">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Coupon Code</th>
                                        <th>Distribution</th>
                                        <th>Discount</th>
                                        <th>Promotion Period</th>
                                        <th>Status</th>
                                        <th style="text-align: right;">Private Dispatch &amp; Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${allCoupons.length === 0 ? `
                                        <tr>
                                            <td colspan="6" style="text-align: center; padding: 2rem; color: #64748b;">
                                                No coupons created yet. Generate one above to offer discounts.
                                            </td>
                                        </tr>
                                    ` : allCoupons.map(c => {
                                        const isPublic = c.visibility === 'public';
                                        const today = new Date().toISOString().slice(0, 10);
                                        const isUpcoming = c.start_date && today < c.start_date;
                                        const isExpired = c.expiry_date && today > c.expiry_date;
                                        let periodBadge = '<span style="color: #15803d; font-weight: 600;">Active Now</span>';
                                        if (isExpired) {
                                            periodBadge = '<span style="color: #dc2626; font-weight: 600;">Expired</span>';
                                        } else if (isUpcoming) {
                                            periodBadge = `<span style="color: #d97706; font-weight: 600;">Starts ${c.start_date}</span>`;
                                        }

                                        return `
                                        <tr>
                                            <td>
                                                <div class="admin-coupon-code-badge">
                                                    <span>${c.code}</span>
                                                    <button type="button" class="admin-coupon-copy-btn btn-copy-coupon-code" data-code="${c.code}" title="Copy coupon code">
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                                ${isPublic ? `
                                                    <span style="display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.2rem 0.55rem; border-radius: 20px; font-size: 0.72rem; font-weight: 700; background: #ecfdf5; color: #047857; border: 1px solid rgba(16,185,129,0.3);">
                                                        🌐 Public Offer
                                                    </span>
                                                ` : `
                                                    <span style="display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.2rem 0.55rem; border-radius: 20px; font-size: 0.72rem; font-weight: 700; background: #f5f3ff; color: #6d28d9; border: 1px solid rgba(109,40,217,0.25);">
                                                        🔒 Private VIP
                                                    </span>
                                                `}
                                            </td>
                                            <td>
                                                <span class="admin-coupon-percent-badge">${c.percent}% OFF</span>
                                                <div style="font-size: 0.75rem; color: #64748b; margin-top: 2px;">${c.label}</div>
                                            </td>
                                            <td>
                                                <div style="font-size: 0.76rem; color: #1e293b;">
                                                    ${periodBadge}
                                                </div>
                                                <div style="font-size: 0.72rem; color: #64748b; margin-top: 2px;">
                                                    ${c.start_date || c.expiry_date ? `${c.start_date || 'Immediate'} &rarr; ${c.expiry_date || 'No Expiry'}` : 'Open Period'}
                                                    ${c.min_spend > 0 ? ` &bull; Min $${c.min_spend}` : ''}
                                                </div>
                                            </td>
                                            <td>
                                                <span class="box-badge ${c.status === 'active' ? 'status-available' : 'status-booked'}" style="font-size: 0.72rem; padding: 0.2rem 0.6rem;">
                                                    ${c.status === 'active' ? '● Active' : '○ Paused'}
                                                </span>
                                            </td>
                                            <td style="text-align: right;">
                                                <div style="display: inline-flex; align-items: center; gap: 0.35rem; flex-wrap: wrap; justify-content: flex-end;">
                                                    <button type="button" class="btn btn-outline btn-dispatch-coupon-whatsapp" 
                                                        data-code="${c.code}" 
                                                        data-percent="${c.percent}" 
                                                        data-label="${c.label}" 
                                                        data-expiry="${c.expiry_date || ''}"
                                                        style="font-size: 0.72rem; padding: 0.3rem 0.55rem; border-color: #25d366; color: #15803d; background: #f0fdf4; cursor: pointer;"
                                                        title="Send VIP Invitation on WhatsApp">
                                                        📲 WhatsApp
                                                    </button>
                                                    <button type="button" class="btn btn-outline btn-copy-coupon-invite" 
                                                        data-code="${c.code}" 
                                                        data-percent="${c.percent}" 
                                                        data-label="${c.label}" 
                                                        data-expiry="${c.expiry_date || ''}"
                                                        style="font-size: 0.72rem; padding: 0.3rem 0.55rem; border-color: #b8860b; color: #92400e; background: #fffcf4; cursor: pointer;"
                                                        title="Copy VIP Invitation Letter">
                                                        ✉️ VIP Letter
                                                    </button>
                                                    <button type="button" class="btn btn-outline btn-toggle-coupon-status" data-id="${c.id}" style="font-size: 0.72rem; padding: 0.3rem 0.55rem; border-color: ${c.status === 'active' ? '#f59e0b' : '#10b981'}; color: ${c.status === 'active' ? '#b45309' : '#047857'}; background: ${c.status === 'active' ? '#fffbeb' : '#ecfdf5'}; cursor: pointer;">
                                                        ${c.status === 'active' ? 'Pause' : 'Activate'}
                                                    </button>
                                                    <button type="button" class="btn btn-outline btn-delete-coupon" data-id="${c.id}" data-code="${c.code}" style="font-size: 0.72rem; padding: 0.3rem 0.5rem; border-color: rgba(239,68,68,0.4); color: #dc2626; background: #fff5f5; cursor: pointer;">
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
                </div>
            `;
        }

        if (activeSubTab === 'users') {
            const users = (window.TeaFactoryStore && typeof window.TeaFactoryStore.getUsers === 'function')
                ? window.TeaFactoryStore.getUsers()
                : [];
            
            const totalUsers = users.length;
            const emailUsersCount = users.filter(u => u.auth_provider === 'email' || (u.password_hash !== 'OAUTH_GOOGLE' && !(u.id && String(u.id).startsWith('G-')))).length;
            const googleUsersCount = users.filter(u => u.auth_provider === 'google' || u.password_hash === 'OAUTH_GOOGLE' || (u.id && String(u.id).startsWith('G-'))).length;
            const patronUsersCount = users.filter(u => (u.role || '').toLowerCase() === 'patron').length;
            const adminStaffCount = users.filter(u => ['admin', 'manager', 'staff', 'sommelier', 'concierge'].includes((u.role || '').toLowerCase())).length;

            html += `
                <div class="panel-card users-desk-wrapper" style="margin-bottom: 0; background: #ffffff; border: 1px solid #e8e4df; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border-radius: 12px; padding: 1.75rem;">
                    
                    <!-- Header Section -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1.25rem; border-bottom: 1px solid rgba(212,175,55,0.18); padding-bottom: 1.25rem;">
                        <div>
                            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem;">
                                <span style="color: var(--color-gold); display: flex; align-items: center;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </span>
                                <h3 class="panel-title" style="margin-bottom: 0; font-family: var(--font-serif, 'Playfair Display', serif); font-size: 1.45rem; color: var(--color-gold); letter-spacing: 0.5px;">
                                    Web Registered Patrons &amp; User Accounts Desk
                                </h3>
                            </div>
                            <p class="panel-desc" style="margin-bottom: 0; color: #94a3b8; font-size: 0.88rem;">
                                Real-time registry of all patrons and users registered via Web Email ID &amp; Password or Google Sign-In with Turso Cloud database synchronization.
                            </p>
                        </div>
                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                            <button id="btn-open-create-user-modal" class="btn btn-primary" style="font-size: 0.82rem; padding: 0.65rem 1.25rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.45rem; box-shadow: 0 4px 15px rgba(212,175,55,0.25);">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                <span>+ Add User Account</span>
                            </button>
                        </div>
                    </div>

                    <!-- KPI Statistics Row -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 1rem; margin-bottom: 1.75rem;">
                        <div style="background: rgba(0,0,0,0.35); border: 1px solid rgba(212,175,55,0.22); border-radius: 8px; padding: 1rem 1.2rem;">
                            <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--color-text-muted); display: block; margin-bottom: 0.35rem;">Total Accounts</span>
                            <div style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: var(--color-gold); line-height: 1;">${totalUsers}</div>
                            <span style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.35rem; display: block;">Active in Turso Cloud</span>
                        </div>
                        <div style="background: rgba(0,0,0,0.35); border: 1px solid rgba(34,197,94,0.3); border-radius: 8px; padding: 1rem 1.2rem;">
                            <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.8px; color: #86efac; display: block; margin-bottom: 0.35rem;">Web Email Registered</span>
                            <div style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: #4ade80; line-height: 1;">${emailUsersCount}</div>
                            <span style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.35rem; display: block;">Email &amp; Password signups</span>
                        </div>
                        <div style="background: rgba(0,0,0,0.35); border: 1px solid rgba(66,133,244,0.3); border-radius: 8px; padding: 1rem 1.2rem;">
                            <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.8px; color: #93c5fd; display: block; margin-bottom: 0.35rem;">Google Sign-In Patrons</span>
                            <div style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: #60a5fa; line-height: 1;">${googleUsersCount}</div>
                            <span style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.35rem; display: block;">One-Click Google OAuth</span>
                        </div>
                        <div style="background: rgba(0,0,0,0.35); border: 1px solid rgba(212,175,55,0.22); border-radius: 8px; padding: 1rem 1.2rem;">
                            <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.8px; color: var(--color-text-muted); display: block; margin-bottom: 0.35rem;">Admins &amp; Staff</span>
                            <div style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 700; color: #ffd875; line-height: 1;">${adminStaffCount}</div>
                            <span style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.35rem; display: block;">Console &amp; estate access</span>
                        </div>
                    </div>

                    <!-- Filter Toolbar -->
                    <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; background: rgba(0,0,0,0.3); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
                        <div style="display: flex; gap: 0.75rem; align-items: center; flex: 1; min-width: 260px;">
                            <div style="position: relative; flex: 1;">
                                <span style="position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%); color: var(--color-gold); display: flex; align-items: center; pointer-events: none;">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </span>
                                <input type="text" id="users-search-input" placeholder="Search by Email ID, Name, Phone, Login Method, or Role..." style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.55); border: 1px solid rgba(212,175,55,0.3); border-radius: 6px; padding: 0.55rem 0.85rem 0.55rem 2.3rem; color: #fff; font-size: 0.85rem; outline: none;">
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                            <div style="display: flex; align-items: center; gap: 0.4rem;">
                                <label style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.6px;">Login Method:</label>
                                <select id="users-auth-filter" class="form-input" style="font-size: 0.8rem; padding: 0.45rem 0.75rem; border-radius: 6px; background: rgba(0,0,0,0.6); color: #fff; border: 1px solid rgba(212,175,55,0.3); cursor: pointer;">
                                    <option value="all">All Methods</option>
                                    <option value="email">Web Email ID</option>
                                    <option value="google">Google Sign-In</option>
                                </select>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.4rem;">
                                <label style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.6px;">Role:</label>
                                <select id="users-role-filter" class="form-input" style="font-size: 0.8rem; padding: 0.45rem 0.75rem; border-radius: 6px; background: rgba(0,0,0,0.6); color: #fff; border: 1px solid rgba(212,175,55,0.3); cursor: pointer;">
                                    <option value="all">All Roles</option>
                                    <option value="patron">Connoisseur Patron</option>
                                    <option value="admin">Administrator</option>
                                    <option value="manager">Estate Manager</option>
                                    <option value="sommelier">Tea Sommelier</option>
                                    <option value="concierge">Master Concierge</option>
                                    <option value="staff">Staff Member</option>
                                </select>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.4rem;">
                                <label style="font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.6px;">Status:</label>
                                <select id="users-status-filter" class="form-input" style="font-size: 0.8rem; padding: 0.45rem 0.75rem; border-radius: 6px; background: rgba(0,0,0,0.6); color: #fff; border: 1px solid rgba(212,175,55,0.3); cursor: pointer;">
                                    <option value="all">All Statuses</option>
                                    <option value="active">Active</option>
                                    <option value="pending">Pending</option>
                                    <option value="suspended">Suspended</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Accounts Table View -->
                    <div style="overflow-x: auto; border: 1px solid rgba(212,175,55,0.2); border-radius: 8px; background: rgba(5,15,10,0.6);">
                        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
                            <thead>
                                <tr style="background: rgba(212,175,55,0.08); border-bottom: 1px solid rgba(212,175,55,0.25); color: var(--color-gold); text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.8px;">
                                    <th style="padding: 0.85rem 1rem;">User / Patron</th>
                                    <th style="padding: 0.85rem 1rem;">Email ID (Identity)</th>
                                    <th style="padding: 0.85rem 1rem;">Web Login Method</th>
                                    <th style="padding: 0.85rem 1rem;">Role</th>
                                    <th style="padding: 0.85rem 1rem;">Status</th>
                                    <th style="padding: 0.85rem 1rem;">Phone / WhatsApp</th>
                                    <th style="padding: 0.85rem 1rem;">Registered</th>
                                    <th style="padding: 0.85rem 1rem; text-align: right;">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="users-table-tbody">
                                ${users.length === 0 ? `
                                    <tr>
                                        <td colspan="8" style="text-align: center; padding: 2.5rem 1rem; color: var(--color-text-muted);">
                                            No user accounts registered yet. Click "+ Add User Account" to add the first user.
                                        </td>
                                    </tr>
                                ` : users.map(u => window.renderUserTableRow(u)).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        html += `
            </div>
            </div>
        `;

        container.innerHTML = html;

        // Populate current values in season form if in season tab
        if (activeSubTab === 'seasons') {
            const seasonNameInput = document.getElementById('new-season-name');
            if (seasonNameInput) seasonNameInput.value = activeSeason.name;
        }
    },

    // 4. Render Gallery Page
    renderGallery(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const galleryImages = window.TeaFactoryStore.getGalleryImages();
        const totalPhotos = galleryImages.length;
        const estateCount = galleryImages.filter(g => (g.tag || '').includes('Estate') || (g.tag || '').includes('Harvest')).length;
        const packagingCount = galleryImages.filter(g => (g.tag || '').includes('Packaging') || (g.tag || '').includes('Reserve')).length;

        let html = UIComponents.renderPageHeroBanner({
            pretitle: "Living Estate Chronicle",
            title: "Visual Gallery & Terroir",
            tagline: "A Visual Journey Through Our Wild Montane Sanctuary & Generational Artisans",
            image: "images/hero_banner_gallery.jpg",
            badge: "Photographic Archive • Ettampitiya Sanctuary",
            pillTag: "Estate Photography",
            sectionHeading: "Rock One Wild Tea Photographic Chronicle",
            sectionSubheading: "Immerse yourself in authentic visuals from our family tea garden in Ettampitiya (elevation 1,240m), artisanal hand-harvesting, orthodox brass rolling, and wood-fired curing."
        }) + `
            <div class="gallery-header-block" style="margin-bottom: 2.5rem; text-align: center;">
                <!-- Category Filter Pills -->
                <div class="gallery-filter-bar" style="display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                    <button type="button" class="gallery-filter-btn active" data-filter="all" style="padding: 0.5rem 1.1rem; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; background: var(--color-gold); color: #040e08; border: 1px solid var(--color-gold);">
                        All Photos (${totalPhotos})
                    </button>
                    <button type="button" class="gallery-filter-btn" data-filter="Estate & Harvest" style="padding: 0.5rem 1.1rem; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; background: rgba(0,0,0,0.5); color: #e2e8f0; border: 1px solid rgba(212,175,55,0.35);">
                        🌱 Estate &amp; Harvest (${estateCount})
                    </button>
                    <button type="button" class="gallery-filter-btn" data-filter="Packaging & Reserves" style="padding: 0.5rem 1.1rem; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; background: rgba(0,0,0,0.5); color: #e2e8f0; border: 1px solid rgba(212,175,55,0.35);">
                        📦 Teak Chests &amp; Packaging (${packagingCount})
                    </button>
                </div>
            </div>

            <div class="gallery-grid-layout" id="gallery-grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 1.5rem; margin-bottom: 4rem;">
                ${galleryImages.map((imgObj, index) => `
                    <div class="gallery-item-card" data-index="${index}" data-id="${imgObj.id}" data-tag="${imgObj.tag || 'Estate & Harvest'}" style="position: relative; overflow: hidden; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); aspect-ratio: 4/3; cursor: pointer; background: #040e08; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;">
                        <img src="${imgObj.src}" alt="${imgObj.caption || 'Estate Scene'}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); display: block;" loading="lazy" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                        <div class="gallery-overlay" style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,14,8,0.92) 0%, rgba(4,14,8,0.3) 50%, rgba(0,0,0,0) 100%); opacity: 0; transition: opacity 0.3s ease; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.25rem;">
                            <div style="margin-bottom: 0.35rem;">
                                <span style="background: rgba(212,175,55,0.25); color: var(--color-gold); font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 0.2rem 0.55rem; border-radius: 12px; border: 1px solid rgba(212,175,55,0.45); display: inline-block;">
                                    ${imgObj.tag || 'Estate & Harvest'}
                                </span>
                            </div>
                            <span style="color: #ffffff; font-family: var(--font-serif); font-size: 0.95rem; font-weight: 600; line-height: 1.35; letter-spacing: 0.3px;">
                                ${imgObj.caption || 'Estate Photograph'}
                            </span>
                            <span style="color: #a7f3d0; font-size: 0.72rem; margin-top: 0.4rem; display: flex; align-items: center; gap: 0.3rem;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                Click to enlarge in HD Lightbox
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    },

    // 4b. Render Photographic Gallery Highlights Showcase on Home Screen
    renderHomeGalleryShowcase(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const galleryImages = window.TeaFactoryStore ? window.TeaFactoryStore.getGalleryImages() : [];
        if (!galleryImages || galleryImages.length === 0) return;

        // Display curated top highlight images on the home screen
        const highlightImages = galleryImages.slice(0, 8);

        container.innerHTML = `
            <div style="margin-bottom: 2.5rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <span class="section-tag">Visual Terroir &amp; Craft</span>
                    <h3 class="home-section-title" style="margin-bottom: 0.5rem;">Photographic Gallery Highlights</h3>
                    <p style="color: var(--color-text-muted); font-size: 0.92rem; max-width: 650px; margin: 0;">
                        Explore authentic imagery from our family tea garden at Ettampitiya (1,240m elevation), hand-plucking of two leaves and a bud, orthodox artisanal processing, and surrounding landmark waterfalls.
                    </p>
                </div>
                <div>
                    <span class="btn btn-outline" style="font-size: 0.85rem; padding: 0.55rem 1.25rem; display: inline-flex; align-items: center; gap: 0.5rem;" onclick="window.appSwitchTab ? window.appSwitchTab('gallery') : (document.getElementById('nav-gallery') &amp;&amp; document.getElementById('nav-gallery').click())">
                        <svg class="btn-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        Explore All ${galleryImages.length} Photos in Gallery
                    </span>
                </div>
            </div>

            <div class="home-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); gap: 1.35rem; margin-bottom: 2.5rem;">
                ${highlightImages.map((imgObj, idx) => `
                    <div class="gallery-item-card" data-index="${idx}" data-id="${imgObj.id}" data-tag="${imgObj.tag || 'Estate & Harvest'}" style="position: relative; overflow: hidden; border-radius: 10px; border: 1px solid rgba(212,175,55,0.3); aspect-ratio: 4/3; cursor: pointer; background: #040e08; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;">
                        <img src="${imgObj.src}" alt="${imgObj.caption || 'Estate Scene'}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); display: block;" loading="lazy" onerror="window.handleImageError && window.handleImageError(this, 'gallery')">
                        <div class="gallery-overlay" style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(4,14,8,0.92) 0%, rgba(4,14,8,0.25) 50%, rgba(0,0,0,0) 100%); opacity: 0; transition: opacity 0.3s ease; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.15rem;">
                            <span style="background: rgba(212,175,55,0.25); color: var(--color-gold); font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 0.15rem 0.5rem; border-radius: 10px; border: 1px solid rgba(212,175,55,0.45); display: inline-block; align-self: flex-start; margin-bottom: 0.35rem;">
                                ${imgObj.tag || 'Estate & Harvest'}
                            </span>
                            <span style="color: #ffffff; font-family: var(--font-serif); font-size: 0.9rem; font-weight: 600; line-height: 1.35; text-shadow: 0 1px 3px rgba(0,0,0,0.8);">
                                ${imgObj.caption || 'Estate Photograph'}
                            </span>
                            <span style="color: #a7f3d0; font-size: 0.7rem; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.3rem;">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                Click to enlarge in HD Lightbox
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderHeritageShowcase(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const galleryImages = (window.TeaFactoryStore && window.TeaFactoryStore.getGalleryImages) 
            ? window.TeaFactoryStore.getGalleryImages() 
            : [];

        container.innerHTML = `
            <!-- Top Heritage Story Showcase -->
            <div class="heritage-container-layout" style="margin-bottom: 3.5rem;">
                <div class="story-section" style="padding-right: 1rem;">
                    <span class="section-tag" style="color: #7a5a06; font-weight: 700; letter-spacing: 2px;">ROCK ONE WILD TEA (PVT) LIMITED • OUR STORY</span>
                    <h3 class="home-section-title" style="font-size: 2.2rem; line-height: 1.25; margin-bottom: 1.25rem; color: #111827;">From Our Wild Forest Garden to Your Cup</h3>
                    <p class="story-text" style="color: #374151; font-size: 0.98rem; line-height: 1.8; margin-bottom: 1.25rem;">
                        <strong>Rock One Wild Tea</strong> began with a simple family vision during the COVID period. My wife and I developed our own tea garden by hand in Sri Lanka's <strong>Uva Medium region</strong>, surrounded by natural forest and located at the foot of a large rock formation — the inspiration behind our name.
                    </p>
                    <p class="story-text" style="color: #4b5563; font-size: 0.92rem; line-height: 1.7; margin-bottom: 1.5rem;">
                        From the beginning, we chose to work on a small scale, personally caring for the tea garden and producing our tea in our family factory. What started as a small family effort has gradually grown into a boutique Ceylon Tea brand, with a vision of sharing the unique character of our tea and its story with tea lovers around the world.
                    </p>
                    <div style="background: #fbf9f5; border: 1px solid #ebd9b8; border-left: 4px solid #b8860b; padding: 1.1rem 1.35rem; border-radius: 0 12px 12px 0; margin-bottom: 1.75rem; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                        <p style="font-style: italic; color: #7a5a06; font-size: 0.95rem; margin: 0; line-height: 1.6; font-weight: 600;">
                            "Rock One Wild Tea — From the wild, crafted by our hands, to your cup."
                        </p>
                    </div>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <span class="btn btn-primary" onclick="window.appOpenAboutModal ? window.appOpenAboutModal() : (window.appSwitchTab &amp;&amp; window.appSwitchTab('about'))">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            Read Full Company Story
                        </span>
                        <span class="btn btn-outline" onclick="window.appSwitchTab ? window.appSwitchTab('tours') : (document.getElementById('nav-tours') &amp;&amp; document.getElementById('nav-tours').click())">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                            Book Estate Tour
                        </span>
                    </div>
                </div>
                <div class="heritage-visual-wrapper" id="heritage-gallery-slider" title="Click to view full screen in HD Lightbox">
                    <div class="heritage-slides-track" id="heritage-slides-track">
                        ${galleryImages.length === 0 ? `
                            <div class="heritage-slide active" data-index="0" data-src="images/1 (1).jpeg" data-caption="Rock One Wild Tea Estate Garden">
                                <img src="images/1 (1).jpeg" alt="Rock One Wild Tea Estate Garden" class="heritage-slide-img" loading="eager" decoding="async">
                                <div class="heritage-slide-badge" title="Click to view full screen">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                                    <span>Estate &amp; Harvest &bull; Full Screen</span>
                                </div>
                            </div>
                        ` : galleryImages.map((img, idx) => `
                            <div class="heritage-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}" data-src="${img.src}" data-caption="${(img.caption || '').replace(/"/g, '&quot;')}">
                                <img src="${img.src}" alt="${(img.caption || 'Rock One Wild Tea Estate Garden').replace(/"/g, '&quot;')}" class="heritage-slide-img" loading="${idx === 0 ? 'eager' : 'lazy'}" decoding="async">
                                <div class="heritage-slide-badge" title="Click to view full screen">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                                    <span>${(img.tag || 'Estate Terroir')} &bull; Full Screen</span>
                                </div>
                                <div class="heritage-slide-info-bar">
                                    <span class="heritage-slide-caption-text">${(img.caption || 'Rock One Wild Tea Artisanal Estate').replace(/"/g, '&quot;')}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Floating Navigation Controls -->
                    <button class="heritage-slider-btn heritage-prev" id="heritage-prev-btn" aria-label="Previous Gallery Photo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button class="heritage-slider-btn heritage-next" id="heritage-next-btn" aria-label="Next Gallery Photo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    <!-- Interactive Slider Footer -->
                    <div class="heritage-slider-footer">
                        <div class="heritage-dots-bar" id="heritage-dots-bar">
                            ${galleryImages.slice(0, 8).map((_, i) => `<span class="heritage-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
                        </div>
                        <div class="heritage-counter" id="heritage-counter">01 / ${String(galleryImages.length || 1).padStart(2, '0')}</div>
                    </div>
                </div>
            </div>

            <!-- Why Rock One Wild Tea Is Different Section -->
            <div class="why-different-card" style="margin-bottom: 4.5rem; background: #ffffff; border: 1.5px solid #ebd9b8; border-radius: 20px; padding: 3rem 2.25rem; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);">
                <div style="text-align: center; max-width: 860px; margin: 0 auto 3rem auto;">
                    <span class="section-tag" style="font-size: 0.82rem; letter-spacing: 2px;">WHY ROCK ONE WILD TEA IS DIFFERENT</span>
                    <h3 style="font-family: var(--font-serif); font-size: 2.3rem; color: #111827; margin-bottom: 1rem; line-height: 1.25;">
                        Why Rock One Wild Tea Is Different
                    </h3>
                    <p style="color: #374151; font-size: 1.05rem; line-height: 1.85; margin-bottom: 0;">
                        At <strong>Rock One Wild Tea</strong>, our difference is not simply in the tea. It is in the place where it grows, the way we care for our garden, the way we make our tea, and the personal attention we give to every small batch.
                    </p>
                </div>

                <!-- 13 Distinct Pillars of Difference Grid -->
                <div class="why-different-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
                    <!-- 1. A Unique Uva Medium Origin -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid var(--color-gold);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--color-gold); color: var(--color-gold); flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">A Unique Uva Medium Origin</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            Our tea garden is located in Sri Lanka's Uva Medium region, an area known for its distinctive tea-growing character. Our location and natural surroundings give our tea its own identity.
                        </p>
                    </div>

                    <!-- 2. Beside Approximately 300 Acres of Forest -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #4ade80;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(74, 222, 128, 0.15); border: 1px solid #4ade80; color: #4ade80; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L7 10h3l-4 7h12l-4-7h3z"></path><path d="M12 17v5"></path></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Beside Approximately 300 Acres of Forest</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            Our tea garden is located beside approximately 300 acres of forest, surrounded by a naturally rich environment. The clean, fresh air and forest landscape create a unique setting for growing tea. We believe this natural environment contributes to the distinctive character, aroma and taste of our tea.
                        </p>
                    </div>

                    <!-- 3. Naturally Maintained Soil -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #86efac;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(134, 239, 172, 0.15); border: 1px solid #86efac; color: #86efac; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"></path><path d="M12 13a5 5 0 0 0 5-5c0-4-5-6-5-6s-5 2-5 6a5 5 0 0 0 5 5z"></path></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Naturally Maintained Soil</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            We take care to maintain the natural condition of our garden soil. We avoid unnecessary disturbance to the soil and allow natural vegetation to remain where possible. Our approach is to work with the natural environment while caring for the health of our tea plants and the land around them.
                        </p>
                    </div>

                    <!-- 4. A Forest-Connected Tea Garden -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #34d399;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); border: 1px solid #34d399; color: #34d399; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">A Forest-Connected Tea Garden</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            Our garden is closely connected with the surrounding natural environment. We do not fence the garden to keep wildlife away, and we allow smaller natural vegetation to remain where possible. This creates a living environment shared by tea plants and the wildlife around our garden.
                        </p>
                    </div>

                    <!-- 5. Careful Garden Practices -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #22c55e;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #22c55e; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Careful Garden Practices</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            We avoid the use of insecticides and weed killers in our tea garden. Larger weeds are removed by hand rather than using chemical weed control, while smaller vegetation is allowed to remain where appropriate.
                        </p>
                    </div>

                    <!-- 6. Small-Batch Handcrafted Tea -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #93c5fd;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(59, 130, 246, 0.15); border: 1px solid #93c5fd; color: #93c5fd; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Small-Batch Handcrafted Tea</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            We produce our tea in small batches, allowing us to give careful attention to each stage of production. Our black tea is traditionally handcrafted through withering, hand-rolling, oxidation and drying.
                        </p>
                    </div>

                    <!-- 7. Made by Our Family -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #fb923c;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(251, 146, 60, 0.15); border: 1px solid #fb923c; color: #fb923c; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Made by Our Family</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            Rock One Wild Tea is a family-owned tea business. My wife and I are personally involved in the tea garden and our small family factory, from selecting the leaves to processing and packaging the finished tea.
                        </p>
                    </div>

                    <!-- 8. Carefully Selected Tea Leaves -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #a7f3d0;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(167, 243, 208, 0.15); border: 1px solid #a7f3d0; color: #34d399; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Carefully Selected Tea Leaves</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            Different leaf selections can create different aromas, flavours and characters. We carefully select the leaves according to the type of tea we are producing.
                        </p>
                    </div>

                    <!-- 9. Traditional Craftsmanship -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #f97316;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(249, 115, 22, 0.15); border: 1px solid #f97316; color: #f97316; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Traditional Craftsmanship</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            We combine traditional tea-making techniques with careful control of the production process. Our aim is not mass production, but to preserve the character of the tea while giving attention to every small batch.
                        </p>
                    </div>

                    <!-- 10. Quality Over Quantity -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #fbcfe8;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(244, 114, 182, 0.15); border: 1px solid #fbcfe8; color: #fbcfe8; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Quality Over Quantity</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            We intentionally produce in limited quantities. Working on a smaller scale allows us to spend more time caring for the tea, monitoring the process and maintaining consistency.
                        </p>
                    </div>

                    <!-- 11. More Than Just Tea -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #c084fc;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(192, 132, 252, 0.15); border: 1px solid #c084fc; color: #c084fc; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">More Than Just Tea</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            At Rock One Wild Tea, we want visitors to experience more than a cup of tea. Through our tea experiences, guests can discover our garden, learn about traditional tea making, taste our teas and understand the story behind each batch.
                        </p>
                    </div>

                    <!-- 12. Our Specialty Collection -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #38bdf8;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #38bdf8; flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Our Specialty Collection</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            We also create a selection of specialty teas, including handcrafted Black Tea, Golden Curl Black Tea, Pan-Roasted Green Tea, White Peony, Silver Tips and selected tea blends.
                        </p>
                    </div>

                    <!-- 13. Sri Lanka Tea Board Certified -->
                    <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid var(--color-gold);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--color-gold); color: var(--color-gold); flex-shrink: 0;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                            </span>
                            <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Sri Lanka Tea Board Certified</h4>
                        </div>
                        <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                            Rock One Wild Tea (Pvt) Ltd has received approval and certification from the Sri Lanka Tea Board, supporting our commitment to operating as a recognized Sri Lankan tea business.
                        </p>
                    </div>
                </div>

                <!-- Closing Distinction Banner -->
                <div style="background: rgba(212, 175, 55, 0.08); border: 1.5px solid rgba(212, 175, 55, 0.35); border-radius: 16px; padding: 2rem 2.25rem; text-align: center; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);">
                    <span style="display: inline-block; font-size: 1.6rem; margin-bottom: 0.4rem;">❤️</span>
                    <h5 style="font-family: var(--font-serif); font-size: 1.45rem; color: var(--color-gold); margin-bottom: 0.75rem;">Our Difference</h5>
                    <p style="color: var(--color-text-primary); font-size: 1.02rem; line-height: 1.85; max-width: 820px; margin: 0 auto 1.25rem auto;">
                        Our difference is not simply in the tea.<br>
                        It is in the place where it grows, the soil we care for, the natural environment around our garden, the leaves we select, the hands that make the tea, and the family behind every batch.
                    </p>
                    <p style="font-style: italic; color: #ffd875; font-size: 1.15rem; font-family: var(--font-serif); font-weight: 600; margin: 0; letter-spacing: 0.5px;">
                        "Rock One Wild Tea — From our wild forest tea garden to your cup."
                    </p>
                </div>
            </div>
        `;
    },

    // ── Dedicated About Us & Estate Terroir Page ──
    renderAboutUsPage(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const heroBannerHtml = UIComponents.renderPageHeroBanner({
            pretitle: "Rock One's Organic",
            title: "Tea Heritage",
            tagline: "Where Virgin Nature Meets Generational Ceylon Tradition",
            image: "images/hero_banner_about.jpg",
            badge: "Uva Medium Forest Garden • 1,240m Elevation",
            pillTag: "Our Story",
            sectionHeading: "Rooted in Ceylon's Tea Heritage",
            sectionSubheading: "Rock One Wild Tea is a family-owned Ceylon tea business born from our own tea garden in Sri Lanka's Uva Medium region, nestled in a forested environment at the foot of a large rock formation."
        });

        container.innerHTML = heroBannerHtml + `
            <div class="about-page-wrapper" style="max-width: 1200px; margin: 0 auto; padding: 0.5rem 0.5rem 4rem 0.5rem;">
                
                <!-- 1. Editorial Hero Trust Badges -->
                <div class="about-hero-editorial" style="text-align: center; max-width: 880px; margin: 0 auto 3.5rem auto;">
                    <!-- Trust Badges with SVG Icons -->
                    <div style="display: flex; align-items: center; justify-content: center; gap: 0.85rem; flex-wrap: wrap;">
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #86efac; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                            Sri Lanka Tea Board Certified
                        </span>
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--color-gold); background: rgba(212, 175, 55, 0.12); border: 1px solid rgba(212, 175, 55, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
                            Uva Medium Forest Garden
                        </span>
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #93c5fd; background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            Small-Batch Handcrafted
                        </span>
                        <span style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #fbcfe8; background: rgba(244, 114, 182, 0.12); border: 1px solid rgba(244, 114, 182, 0.3); padding: 0.45rem 0.95rem; border-radius: 20px; font-weight: 600;">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                            Family-Owned &amp; Operated
                        </span>
                    </div>
                </div>

                <!-- 2. Our Story Section (Dual-Column Layout) -->
                <div class="about-story-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; margin-bottom: 4.5rem;">
                    <div>
                        <span class="section-tag" style="font-size: 0.75rem;">OUR STORY</span>
                        <h2 style="font-family: var(--font-serif); font-size: 2.1rem; color: var(--color-white); margin-bottom: 1.25rem; line-height: 1.3;">
                            Born at the Foot of the Great Rock
                        </h2>
                        <p style="color: var(--color-text-primary); font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.25rem;">
                            <strong>Rock One Wild Tea</strong> is a family-owned Ceylon Tea business rooted in Sri Lanka's Uva Medium region. Our tea garden is surrounded by a natural forest environment and lies at the foot of a large rock formation — the inspiration behind the name <strong>Rock One Wild Tea</strong>.
                        </p>
                        <p style="color: var(--color-text-primary); font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.25rem;">
                            Our journey began during the COVID period, when my wife and I started developing our tea garden with our own hands. What began as a small family effort has gradually grown into a boutique tea business built around our passion for tea, nature and traditional craftsmanship.
                        </p>
                        <p style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.75; margin-bottom: 1.5rem;">
                            Today, we continue to personally manage our tea garden and produce our teas in our small family factory. From selecting the leaves to processing and packaging, we remain closely involved in every single step.
                        </p>
                        <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--color-gold); padding: 1.15rem 1.35rem; border-radius: 0 10px 10px 0;">
                            <p style="font-style: italic; color: #ffd875; font-size: 0.95rem; margin: 0; line-height: 1.6; font-weight: 500;">
                                "Rock One Wild Tea — From the wild, crafted by our hands, to your cup."
                            </p>
                            <span style="display: block; font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.4rem;">— Rock One Wild Tea (Pvt) Limited</span>
                        </div>
                    </div>
                    <div style="position: relative;">
                        <div style="position: relative; border-radius: 16px; overflow: hidden; border: 1.5px solid rgba(212,175,55,0.4); box-shadow: 0 16px 40px rgba(0,0,0,0.7), 0 0 25px rgba(212,175,55,0.15);">
                            <img src="images/1 (1).jpeg" alt="Rock One Wild Tea Garden - Forested Rock Formation Terroir" style="width: 100%; height: auto; display: block; aspect-ratio: 4/3; object-fit: cover;" onerror="window.handleImageError && window.handleImageError(this, 'gallery')" loading="lazy" decoding="async">
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1.25rem; background: linear-gradient(0deg, rgba(2, 10, 5, 0.95) 0%, transparent 100%);">
                                <span style="display: block; color: var(--color-white); font-size: 0.9rem; font-weight: 600;">Forested Rock Formation Tea Garden</span>
                                <span style="color: var(--color-gold); font-size: 0.75rem;">Uva Medium Region • Hand-Built by Family</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. Why Rock One Wild Tea Is Different (13 Core Distinction Pillars) -->
                <div style="margin-bottom: 4.5rem; background: #ffffff; border: 1.5px solid #ebd9b8; border-radius: 20px; padding: 3rem 2.25rem; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);">
                    <div style="text-align: center; max-width: 860px; margin: 0 auto 3rem auto;">
                        <span class="section-tag" style="font-size: 0.82rem; letter-spacing: 2px;">OUR PHILOSOPHY</span>
                        <h2 style="font-family: var(--font-serif); font-size: 2.3rem; color: #111827; margin-bottom: 0.75rem; line-height: 1.25;">
                            Why Rock One Wild Tea Is Different
                        </h2>
                        <p style="color: #374151; font-size: 1.05rem; line-height: 1.85; margin: 0;">
                            At <strong>Rock One Wild Tea</strong>, our difference is not simply in the tea. It is in the place where it grows, the way we care for our garden, the way we make our tea, and the personal attention we give to every small batch.
                        </p>
                    </div>

                    <div class="why-different-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
                        <!-- 1. A Unique Uva Medium Origin -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid var(--color-gold);">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--color-gold); color: var(--color-gold); flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">A Unique Uva Medium Origin</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Our tea garden is located in Sri Lanka's Uva Medium region, an area known for its distinctive tea-growing character. Our location and natural surroundings give our tea its own identity.
                            </p>
                        </div>

                        <!-- 2. Beside Approximately 300 Acres of Forest -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #4ade80;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(74, 222, 128, 0.15); border: 1px solid #4ade80; color: #4ade80; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L7 10h3l-4 7h12l-4-7h3z"></path><path d="M12 17v5"></path></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Beside Approximately 300 Acres of Forest</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Our tea garden is located beside approximately 300 acres of forest, surrounded by a naturally rich environment. The clean, fresh air and forest landscape create a unique setting for growing tea. We believe this natural environment contributes to the distinctive character, aroma and taste of our tea.
                            </p>
                        </div>

                        <!-- 3. Naturally Maintained Soil -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #86efac;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(134, 239, 172, 0.15); border: 1px solid #86efac; color: #86efac; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"></path><path d="M12 13a5 5 0 0 0 5-5c0-4-5-6-5-6s-5 2-5 6a5 5 0 0 0 5 5z"></path></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Naturally Maintained Soil</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                We take care to maintain the natural condition of our garden soil. We avoid unnecessary disturbance to the soil and allow natural vegetation to remain where possible. Our approach is to work with the natural environment while caring for the health of our tea plants and the land around them.
                            </p>
                        </div>

                        <!-- 4. A Forest-Connected Tea Garden -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #34d399;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); border: 1px solid #34d399; color: #34d399; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">A Forest-Connected Tea Garden</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Our garden is closely connected with the surrounding natural environment. We do not fence the garden to keep wildlife away, and we allow smaller natural vegetation to remain where possible. This creates a living environment shared by tea plants and the wildlife around our garden.
                            </p>
                        </div>

                        <!-- 5. Careful Garden Practices -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #22c55e;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #22c55e; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Careful Garden Practices</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                We avoid the use of insecticides and weed killers in our tea garden. Larger weeds are removed by hand rather than using chemical weed control, while smaller vegetation is allowed to remain where appropriate.
                            </p>
                        </div>

                        <!-- 6. Small-Batch Handcrafted Tea -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #93c5fd;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(59, 130, 246, 0.15); border: 1px solid #93c5fd; color: #93c5fd; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Small-Batch Handcrafted Tea</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                We produce our tea in small batches, allowing us to give careful attention to each stage of production. Our black tea is traditionally handcrafted through withering, hand-rolling, oxidation and drying.
                            </p>
                        </div>

                        <!-- 7. Made by Our Family -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #fb923c;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(251, 146, 60, 0.15); border: 1px solid #fb923c; color: #fb923c; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Made by Our Family</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Rock One Wild Tea is a family-owned tea business. My wife and I are personally involved in the tea garden and our small family factory, from selecting the leaves to processing and packaging the finished tea.
                            </p>
                        </div>

                        <!-- 8. Carefully Selected Tea Leaves -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #a7f3d0;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(167, 243, 208, 0.15); border: 1px solid #a7f3d0; color: #34d399; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Carefully Selected Tea Leaves</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Different leaf selections can create different aromas, flavours and characters. We carefully select the leaves according to the type of tea we are producing.
                            </p>
                        </div>

                        <!-- 9. Traditional Craftsmanship -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #f97316;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(249, 115, 22, 0.15); border: 1px solid #f97316; color: #f97316; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Traditional Craftsmanship</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                We combine traditional tea-making techniques with careful control of the production process. Our aim is not mass production, but to preserve the character of the tea while giving attention to every small batch.
                            </p>
                        </div>

                        <!-- 10. Quality Over Quantity -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #fbcfe8;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(244, 114, 182, 0.15); border: 1px solid #fbcfe8; color: #fbcfe8; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Quality Over Quantity</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                We intentionally produce in limited quantities. Working on a smaller scale allows us to spend more time caring for the tea, monitoring the process and maintaining consistency.
                            </p>
                        </div>

                        <!-- 11. More Than Just Tea -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #c084fc;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(192, 132, 252, 0.15); border: 1px solid #c084fc; color: #c084fc; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">More Than Just Tea</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                At Rock One Wild Tea, we want visitors to experience more than a cup of tea. Through our tea experiences, guests can discover our garden, learn about traditional tea making, taste our teas and understand the story behind each batch.
                            </p>
                        </div>

                        <!-- 12. Our Specialty Collection -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid #38bdf8;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #38bdf8; flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Our Specialty Collection</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                We also create a selection of specialty teas, including handcrafted Black Tea, Golden Curl Black Tea, Pan-Roasted Green Tea, White Peony, Silver Tips and selected tea blends.
                            </p>
                        </div>

                        <!-- 13. Sri Lanka Tea Board Certified -->
                        <div class="panel-card" style="margin-bottom: 0; padding: 1.75rem; border-left: 3px solid var(--color-gold);">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <span style="display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--color-gold); color: var(--color-gold); flex-shrink: 0;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                                </span>
                                <h4 style="font-size: 1.15rem; color: var(--color-white); font-family: var(--font-serif); margin: 0;">Sri Lanka Tea Board Certified</h4>
                            </div>
                            <p style="font-size: 0.86rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
                                Rock One Wild Tea (Pvt) Ltd has received approval and certification from the Sri Lanka Tea Board, supporting our commitment to operating as a recognized Sri Lankan tea business.
                            </p>
                        </div>
                    </div>

                    <!-- Closing Distinction Banner -->
                    <div style="background: rgba(212, 175, 55, 0.08); border: 1.5px solid rgba(212, 175, 55, 0.35); border-radius: 16px; padding: 2rem 2.25rem; text-align: center; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);">
                        <span style="display: inline-block; font-size: 1.6rem; margin-bottom: 0.4rem;">❤️</span>
                        <h5 style="font-family: var(--font-serif); font-size: 1.45rem; color: var(--color-gold); margin-bottom: 0.75rem;">Our Difference</h5>
                        <p style="color: var(--color-text-primary); font-size: 1.02rem; line-height: 1.85; max-width: 820px; margin: 0 auto 1.25rem auto;">
                            Our difference is not simply in the tea.<br>
                            It is in the place where it grows, the soil we care for, the natural environment around our garden, the leaves we select, the hands that make the tea, and the family behind every batch.
                        </p>
                        <p style="font-style: italic; color: #ffd875; font-size: 1.15rem; font-family: var(--font-serif); font-weight: 600; margin: 0; letter-spacing: 0.5px;">
                            "Rock One Wild Tea — From our wild forest tea garden to your cup."
                        </p>
                    </div>
                </div>

                <!-- 4. Vision & Mission (Side-by-Side Luxury Panels) -->
                <div class="vision-mission-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: 1.5rem; margin-bottom: 4.5rem;">
                    <!-- Vision Card -->
                    <div class="panel-card" style="padding: 2.25rem; border-top: 3px solid var(--color-gold); background: linear-gradient(145deg, rgba(212, 175, 55, 0.06) 0%, rgba(5, 20, 10, 0.8) 100%);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 1px solid var(--color-gold); color: var(--color-gold);">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                            </span>
                            <div>
                                <span class="section-tag" style="margin-bottom: 0; font-size: 0.72rem;">OUR PURPOSE</span>
                                <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-white); margin: 0;">Our Vision</h3>
                            </div>
                        </div>
                        <p style="color: var(--color-text-primary); font-size: 0.95rem; line-height: 1.8; margin: 0;">
                            To share the unique character of Sri Lankan Ceylon Tea with tea lovers around the world while preserving the natural identity, craftsmanship and story behind every tea we produce.
                        </p>
                    </div>

                    <!-- Mission Card -->
                    <div class="panel-card" style="padding: 2.25rem; border-top: 3px solid #86efac; background: linear-gradient(145deg, rgba(34, 197, 94, 0.06) 0%, rgba(5, 20, 10, 0.8) 100%);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; border-radius: 50%; background: rgba(34, 197, 94, 0.15); border: 1px solid #86efac; color: #86efac;">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </span>
                            <div>
                                <span class="section-tag" style="margin-bottom: 0; font-size: 0.72rem; color: #86efac;">OUR COMMITMENT</span>
                                <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-white); margin: 0;">Our Mission</h3>
                            </div>
                        </div>
                        <p style="color: var(--color-text-primary); font-size: 0.95rem; line-height: 1.8; margin: 0;">
                            Our mission is to produce high-quality Ceylon Tea in small batches, using careful, hands-on and traditional methods. We focus on quality rather than quantity and aim to create teas that reflect the character of their origin and the care of the people who make them.
                        </p>
                    </div>
                </div>

                <!-- 5. Our Core Values (7 Pillars in Structured Cards) -->
                <div style="margin-bottom: 4.5rem;">
                    <div style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem auto;">
                        <span class="section-tag">GUIDING PRINCIPLES</span>
                        <h3 style="font-family: var(--font-serif); font-size: 2.1rem; color: var(--color-white); margin-bottom: 0.5rem;">
                            Our Values
                        </h3>
                        <p style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.6;">
                            Our daily work and relationships are guided by a few simple, enduring values:
                        </p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
                        <!-- Value 1 -->
                        <div class="panel-card" style="padding: 1.6rem; margin-bottom: 0; border-left: 3px solid var(--color-gold);">
                            <h4 style="font-size: 1.1rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">1. Quality</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.65; margin: 0;">Giving careful attention to every batch of tea.</p>
                        </div>
                        <!-- Value 2 -->
                        <div class="panel-card" style="padding: 1.6rem; margin-bottom: 0; border-left: 3px solid #86efac;">
                            <h4 style="font-size: 1.1rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">2. Authenticity</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.65; margin: 0;">Staying true to our origin, our tea and our story.</p>
                        </div>
                        <!-- Value 3 -->
                        <div class="panel-card" style="padding: 1.6rem; margin-bottom: 0; border-left: 3px solid #93c5fd;">
                            <h4 style="font-size: 1.1rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">3. Craftsmanship</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.65; margin: 0;">Preserving the human touch in tea production.</p>
                        </div>
                        <!-- Value 4 -->
                        <div class="panel-card" style="padding: 1.6rem; margin-bottom: 0; border-left: 3px solid #4ade80;">
                            <h4 style="font-size: 1.1rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">4. Nature</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.65; margin: 0;">Respecting the natural environment surrounding our tea garden.</p>
                        </div>
                        <!-- Value 5 -->
                        <div class="panel-card" style="padding: 1.6rem; margin-bottom: 0; border-left: 3px solid #fb923c;">
                            <h4 style="font-size: 1.1rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">5. Family</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.65; margin: 0;">Keeping our business personal and family-driven.</p>
                        </div>
                        <!-- Value 6 -->
                        <div class="panel-card" style="padding: 1.6rem; margin-bottom: 0; border-left: 3px solid #f472b6;">
                            <h4 style="font-size: 1.1rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">6. Honesty</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.65; margin: 0;">Building our brand on a genuine story and transparent practices.</p>
                        </div>
                        <!-- Value 7 -->
                        <div class="panel-card" style="padding: 1.6rem; margin-bottom: 0; border-left: 3px solid #c084fc;">
                            <h4 style="font-size: 1.1rem; color: var(--color-gold); font-family: var(--font-serif); margin-bottom: 0.4rem;">7. Continuous Improvement</h4>
                            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.65; margin: 0;">Learning and improving our tea-making process with every batch.</p>
                        </div>
                    </div>
                </div>

                <!-- 6. Our Business Activities (7 Operational Pillars) -->
                <div style="margin-bottom: 4.5rem;">
                    <div style="text-align: center; max-width: 680px; margin: 0 auto 2.5rem auto;">
                        <span class="section-tag">ENTERPRISE SCOPE</span>
                        <h3 style="font-family: var(--font-serif); font-size: 2.1rem; color: var(--color-white); margin-bottom: 0.5rem;">
                            Our Business Activities
                        </h3>
                        <p style="color: var(--color-text-muted); font-size: 0.9rem; line-height: 1.6;">
                            From our soil in Uva to international connoisseurs, our operations include:
                        </p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                        <div class="panel-card" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; margin-bottom: 0;">
                            <span style="color: var(--color-gold); font-size: 1.2rem;">🌱</span>
                            <div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.98rem; margin-bottom: 0.25rem;">Garden Cultivation</strong>
                                <span style="font-size: 0.84rem; color: var(--color-text-muted);">Cultivating tea in our own private tea garden in the Uva Medium forest environment.</span>
                            </div>
                        </div>

                        <div class="panel-card" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; margin-bottom: 0;">
                            <span style="color: var(--color-gold); font-size: 1.2rem;">🤲</span>
                            <div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.98rem; margin-bottom: 0.25rem;">Small-Batch Handcrafted Tea</strong>
                                <span style="font-size: 0.84rem; color: var(--color-text-muted);">Producing high-grade handcrafted Ceylon Tea in strictly limited batch sizes.</span>
                            </div>
                        </div>

                        <div class="panel-card" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; margin-bottom: 0;">
                            <span style="color: var(--color-gold); font-size: 1.2rem;">✨</span>
                            <div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.98rem; margin-bottom: 0.25rem;">Specialty &amp; Blended Teas</strong>
                                <span style="font-size: 0.84rem; color: var(--color-text-muted);">Crafting single-origin artisanal teas, silver tips, and exquisite signature blends.</span>
                            </div>
                        </div>

                        <div class="panel-card" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; margin-bottom: 0;">
                            <span style="color: var(--color-gold); font-size: 1.2rem;">📦</span>
                            <div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.98rem; margin-bottom: 0.25rem;">Processing &amp; Packaging</strong>
                                <span style="font-size: 0.84rem; color: var(--color-text-muted);">In-house factory processing and luxury airtight packaging that locks in freshness.</span>
                            </div>
                        </div>

                        <div class="panel-card" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; margin-bottom: 0;">
                            <span style="color: var(--color-gold); font-size: 1.2rem;">🎁</span>
                            <div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.98rem; margin-bottom: 0.25rem;">Premium Gift Collections</strong>
                                <span style="font-size: 0.84rem; color: var(--color-text-muted);">Creating numbered collector chests and luxury gift presentations for tea connoisseurs.</span>
                            </div>
                        </div>

                        <div class="panel-card" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; margin-bottom: 0;">
                            <span style="color: var(--color-gold); font-size: 1.2rem;">🚶</span>
                            <div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.98rem; margin-bottom: 0.25rem;">Tasting &amp; Visitor Experiences</strong>
                                <span style="font-size: 0.84rem; color: var(--color-text-muted);">Developing guided garden walks, factory tours, and sommelier cupping programs.</span>
                            </div>
                        </div>

                        <div class="panel-card" style="display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem; margin-bottom: 0;">
                            <span style="color: var(--color-gold); font-size: 1.2rem;">🌍</span>
                            <div>
                                <strong style="display: block; color: var(--color-white); font-size: 0.98rem; margin-bottom: 0.25rem;">International Markets</strong>
                                <span style="font-size: 0.84rem; color: var(--color-text-muted);">Building global partnerships and export channels to share our Ceylon Tea worldwide.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 7. Our Tea Production Section (Handcrafted Techniques) -->
                <div class="estate-cinema-card" style="background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(4, 20, 10, 0.85) 100%); border: 1px solid rgba(212,175,55,0.3); border-radius: 18px; padding: 2.75rem; margin-bottom: 4.5rem;">
                    <span class="section-tag">HANDCRAFTED METHODOLOGY</span>
                    <h3 style="font-family: var(--font-serif); font-size: 2.1rem; color: var(--color-white); margin-bottom: 1.25rem;">
                        Our Tea Production: Time, Attention &amp; a Human Touch
                    </h3>
                    <p style="color: var(--color-text-primary); font-size: 0.96rem; line-height: 1.85; margin-bottom: 1.25rem;">
                        At <strong>Rock One Wild Tea</strong>, we believe that great tea deserves time, attention and a human touch. We carefully select tea leaves from our garden and process them in our family factory using handcrafted techniques.
                    </p>
                    <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.8; margin-bottom: 1.25rem;">
                        Our black teas are produced through careful withering, hand-rolling, oxidation and drying, while our other specialty teas are processed according to their individual characteristics. We intentionally keep our production small. This allows us to give greater attention to each batch and maintain consistency while exploring the natural character of our tea.
                    </p>
                    <p style="color: #ffd875; font-size: 0.95rem; font-style: italic; line-height: 1.7; margin: 0;">
                        Our goal is not simply to produce tea, but to create a tea experience that connects the drinker with its origin, nature and craftsmanship.
                    </p>
                </div>

                <!-- 8. Experience & Commitment to Quality (Dual Cards) -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 4.5rem;">
                    <!-- Our Experience -->
                    <div class="panel-card" style="padding: 2.25rem; border-top: 3px solid var(--color-gold);">
                        <span class="section-tag" style="font-size: 0.72rem;">HANDS-ON KNOWLEDGE</span>
                        <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-white); margin-bottom: 1rem;">Our Experience</h3>
                        <p style="color: var(--color-text-primary); font-size: 0.92rem; line-height: 1.8; margin-bottom: 1rem;">
                            Our experience has been built through hands-on involvement in every stage of our own tea journey — from caring for the tea plants and selecting leaves to processing, tasting and packaging the finished tea.
                        </p>
                        <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.75; margin: 0;">
                            As a small family producer, we continue to learn through each harvest and each batch, developing our knowledge through practical experience and careful observation of the tea-making process.
                        </p>
                    </div>

                    <!-- Commitment to Quality -->
                    <div class="panel-card" style="padding: 2.25rem; border-top: 3px solid #86efac;">
                        <span class="section-tag" style="font-size: 0.72rem; color: #86efac;">CARE & RESPONSIBILITY</span>
                        <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-white); margin-bottom: 1rem;">Our Commitment to Quality</h3>
                        <p style="color: var(--color-text-primary); font-size: 0.92rem; line-height: 1.8; margin-bottom: 1rem;">
                            Quality begins in the tea garden and continues throughout the production process. We carefully select the leaves used for each tea, pay close attention to processing conditions, and personally monitor our small-batch production.
                        </p>
                        <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.75; margin: 0;">
                            By keeping production limited, we are able to focus closely on the character and quality of each batch. We believe that quality is not only about the finished product — it is also about the care, honesty and responsibility behind every step of its journey.
                        </p>
                    </div>
                </div>

                <!-- 9. Certifications & Recognition Banner -->
                <div class="estate-cinema-card" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(4, 20, 10, 0.9) 100%); border: 1.5px solid var(--color-gold); border-radius: 18px; padding: 2.5rem; margin-bottom: 4.5rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;">
                    <div style="max-width: 700px;">
                        <span class="section-tag" style="color: #86efac;">OFFICIAL RECOGNITION</span>
                        <h3 style="font-family: var(--font-serif); font-size: 1.7rem; color: var(--color-white); margin-bottom: 0.75rem;">
                            Sri Lanka Tea Board Approval &amp; Certification
                        </h3>
                        <p style="color: var(--color-text-primary); font-size: 0.92rem; line-height: 1.75; margin: 0;">
                            <strong>Rock One Wild Tea (Pvt) Ltd</strong> has received official approval and certification from the <strong>Sri Lanka Tea Board</strong>. We are continuing to develop our production, quality systems and international market presence as we grow our family tea business.
                        </p>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); border: 2px solid var(--color-gold); color: var(--color-gold);">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                    </div>
                </div>

                <!-- 10. A Tea Journey from Uva to the World - Call to Action -->
                <div style="text-align: center; background: radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(4, 14, 8, 0.95) 100%); border: 1.5px solid rgba(212,175,55,0.45); border-radius: 20px; padding: 3.5rem 1.5rem; box-shadow: 0 16px 40px rgba(0,0,0,0.8);">
                    <span class="section-tag" style="font-size: 0.8rem;">AN INVITATION TO TEA CONNOISSEURS</span>
                    <h3 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-white); margin-bottom: 1rem;">
                        A Tea Journey from Uva to the World
                    </h3>
                    <p style="color: var(--color-text-primary); font-size: 0.98rem; max-width: 680px; margin: 0 auto 1rem auto; line-height: 1.8;">
                        From a small tea garden in the Uva Medium region to our family factory, every Rock One Wild Tea begins with a real place, real people and a genuine passion for tea.
                    </p>
                    <p style="color: var(--color-text-muted); font-size: 0.92rem; max-width: 650px; margin: 0 auto 1.75rem auto; line-height: 1.7;">
                        We invite tea lovers to discover the character of our teas and experience a little of the landscape, craftsmanship and family story behind every cup.
                    </p>
                    <p style="font-style: italic; color: #ffd875; font-size: 1.05rem; font-family: var(--font-serif); margin-bottom: 2rem;">
                        "Rock One Wild Tea — From the wild, crafted by our hands, to your cup."
                    </p>
                    <div style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="window.appCloseAboutModal &amp;&amp; window.appCloseAboutModal(); window.appSwitchTab ? window.appSwitchTab('tours') : (document.getElementById('nav-tours') &amp;&amp; document.getElementById('nav-tours').click());" style="padding: 0.85rem 1.75rem; font-size: 0.92rem;">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>
                            Book Factory Tour &amp; Experience
                        </button>
                        <button class="btn btn-outline" onclick="window.appCloseAboutModal &amp;&amp; window.appCloseAboutModal(); window.appSwitchTab ? window.appSwitchTab('catalog') : (document.getElementById('nav-catalog') &amp;&amp; document.getElementById('nav-catalog').click());" style="padding: 0.85rem 1.75rem; font-size: 0.92rem;">
                            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            Explore Handcrafted Teas &amp; Gifts
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
        const stats = window.TeaFactoryStore ? window.TeaFactoryStore.getReviewStats() : { average: "0.0", count: 0 };
        const hasReviews = reviews && reviews.length > 0;

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
                        <div style="font-size: 1.8rem; font-weight: 800; font-family: var(--font-serif); color: var(--color-gold); line-height: 1;">${hasReviews ? stats.average : '5.0'}</div>
                        <div>
                            <div style="color: var(--color-gold); font-size: 0.9rem; letter-spacing: 2px;">${this.renderStars(hasReviews ? stats.average : 5)}</div>
                            <span style="font-size: 0.72rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.5px;">${hasReviews ? stats.count : '2,000+'} Verified Reviews</span>
                        </div>
                    </div>
                    <button id="btn-write-review" class="btn btn-primary" style="padding: 0.75rem 1.4rem; font-size: 0.78rem;">
                        <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        Rate Your Experience
                    </button>
                </div>
            </div>
            
            <div class="testimonials-grid-layout">
                ${hasReviews ? reviews.map(rev => `
                    <div class="testimonial-card-item">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                            <div class="stars-rating" style="letter-spacing: 3px; font-size: 1.1rem;">
                                ${this.renderStars(rev.rating)}
                            </div>
                            <span style="font-size: 0.7rem; color: var(--color-gold-light); background: rgba(212, 175, 55, 0.12); padding: 0.2rem 0.6rem; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.25);">
                                ${rev.experienceType || rev.role || 'Estate Experience'}
                            </span>
                        </div>
                        <p class="testimonial-quote-text" style="font-style: italic; color: #f1f5f9; line-height: 1.7; margin-bottom: 1.25rem;">
                            "${rev.comment || rev.content || ''}"
                        </p>
                        <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 0.85rem; display: flex; justify-content: space-between; align-items: flex-end;">
                            <div>
                                <h4 class="testimonial-author-name" style="color: var(--color-white); font-size: 0.95rem; margin-bottom: 0.2rem;">${rev.name || rev.author || 'Guest'}</h4>
                                <p class="testimonial-author-title" style="color: var(--color-gold); font-size: 0.78rem; margin: 0;">${rev.title ? rev.title + ' • ' : ''}${rev.location || ''}</p>
                            </div>
                            <span style="font-size: 0.7rem; color: var(--color-text-muted);">${rev.date || rev.date_str || ''}</span>
                        </div>
                    </div>
                `).join('') : `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: rgba(3, 14, 8, 0.4); border: 1px dashed rgba(212, 175, 55, 0.25); border-radius: 12px;">
                        <p style="color: var(--color-gold); font-size: 1.05rem; margin-bottom: 0.4rem; font-family: var(--font-serif);">No Guest Reviews Published Yet</p>
                        <p style="color: var(--color-text-muted); font-size: 0.85rem; margin: 0;">Be the first connoisseur or estate visitor to submit your rating and tasting impressions.</p>
                    </div>
                `}
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
                    <span>ESTATE MEMBERS &amp; TEA LOVERS</span>
                </div>
                <h3 class="newsletter-box-title">The Rock One Estate Tea Club</h3>
                <p class="newsletter-box-desc">
                    Join our circle of tea lovers to receive seasonal harvest announcements for our numbered Series 01–10 teak wood chests, unblended whole-leaf releases, and private estate cupping invitations.
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
                    <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20would%20like%20to%20inquire%20about%20the%20Private%20Reserve%20Club%20allocation." target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="color: #25d366; border-color: rgba(37, 211, 102, 0.4); text-decoration: none;">
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

        const heroBannerHtml = UIComponents.renderPageHeroBanner({
            pretitle: "Bespoke Concierge",
            title: "Direct Enquiry Desk",
            tagline: "Direct Consultation for Private Allocations, Wholesale & Rare Vintages",
            image: "images/hero_banner_enquiry.jpg",
            badge: "Direct Estate Concierge • Badulla Highlands",
            pillTag: "Enquiry Desk",
            sectionHeading: "Connect with Our Tea Concierge",
            sectionSubheading: "Have a question about our single-estate harvests, bespoke gift chests, factory tours, or wholesale distribution? Send us your message below."
        });

        container.innerHTML = heroBannerHtml + `
            <div class="enquiry-page-wrapper">
                <div class="enquiry-hero-header">
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
                            <a href="mailto:rockonewild@gmail.com">rockonewild@gmail.com</a>
                        </div>
                    </div>
                    <div class="direct-contact-item">
                        <div class="contact-item-icon" style="color: var(--color-gold);">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <strong>Direct Voice Hotline</strong>
                            <a href="tel:+94767897817">+94 76 789 7817</a>
                        </div>
                    </div>
                    <div class="direct-contact-item">
                        <div class="contact-item-icon" style="color: #25d366;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.443-4.436-9.884-9.888-9.884-5.447 0-9.885 4.437-9.889 9.885-.001 2.016.52 3.49 1.37 4.975l-.997 3.641 3.731-.978z"/></svg>
                        </div>
                        <div>
                            <strong>WhatsApp Priority Line</strong>
                            <a href="https://wa.me/94773209950" target="_blank" rel="noopener noreferrer">+94 77 320 9950</a>
                        </div>
                    </div>
                    <div class="direct-contact-item">
                        <div class="contact-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <strong>Highlands Sanctuary</strong>
                            <span>Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // ── Cinema of the Estate: 4K Terroir & Artisanal Craft Showcase (Removed per user request) ──
    renderCinemaShowcase(containerId) {
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = '';
        return;
    },

    renderLocationMapSection(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const addressText = "Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka";
        const mapEmbedUrl = "https://maps.google.com/maps?q=Rock+One+Wild+Tea,+Gannilawaththa,+Wellawela,+Ettampitiya,+Sri+Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed";
        const googleMapsDirectUrl = "https://maps.google.com?ftid=0x3ae4630013bcccbb:0x453d082c477ea3bf";
        const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Rock+One+Wild+Tea+(Pvt)+Limited&destination_place_id=0x3ae4630013bcccbb:0x453d082c477ea3bf";

        const nearbyCities = [
            { name: "Bandarawela", type: "Colonial Hill Station", dist: "14 km", time: "25 min drive", routeQuery: "Bandarawela" },
            { name: "Welimada", type: "Highland Valley Hub", dist: "18 km", time: "30 min drive", routeQuery: "Welimada" },
            { name: "Haputale", type: "Highland Ridge & Tea Country", dist: "23 km", time: "38 min drive", routeQuery: "Haputale, Sri Lanka" },
            { name: "Badulla", type: "Provincial Capital", dist: "22 km", time: "38 min drive", routeQuery: "Badulla" },
            { name: "Ella", type: "Global Travel Hub", dist: "24 km", time: "45 min drive", routeQuery: "Ella, Sri Lanka" },
            { name: "Nuwara Eliya", type: "Central Montane Capital", dist: "45 km", time: "1h 15m drive", routeQuery: "Nuwara Eliya" },
            { name: "Colombo (BIA / City)", type: "International Airport", dist: "195 km", time: "4h 30m drive", routeQuery: "Colombo, Sri Lanka" }
        ];

        const nearbyLandmarks = [
            { 
                id: 1,
                name: "1. Mana Ella Waterfall", 
                altName: "Manawala Ella / Manawela Ella",
                category: "Cascading Waterfall", 
                dist: "15–18 km", 
                time: "35–45 minutes", 
                image: "images/landmark_mana_ella.jpg",
                desc: "Mana Ella, also known as Manawala Ella or Manawela Ella, is a scenic waterfall near Lunuwatta surrounded by lush tea plantations. The waterfall features multiple cascades and is closely connected to the natural landscape and history of the Welimada area. Reaching the waterfall involves a short walk from the nearby road.",
                routeQuery: "Mana Ella Waterfall, Lunuwatta, Sri Lanka",
                mapSearchQuery: "Mana Ella Waterfall, Sri Lanka"
            },
            { 
                id: 2,
                name: "2. Sthreepura Cave", 
                altName: "King Ravana & Princess Sita Legendary Site",
                category: "Natural & Cultural Cave System", 
                dist: "18–20 km", 
                time: "40–50 minutes", 
                image: "images/landmark_sthreepura_cave.jpg",
                desc: "Sthreepura Cave is a fascinating natural and cultural attraction near Welimada. The cave system is associated with local legends connected with King Ravana and Princess Sita. The Uva Paranagama local authority notes that parts of the cave system can be difficult to access because of landslide conditions, so visitors should check local access conditions before travelling.",
                routeQuery: "Sthreepura Cave, Welimada, Sri Lanka",
                mapSearchQuery: "Sthreepura Cave, Welimada"
            },
            { 
                id: 3,
                name: "3. Bomburu Ella Waterfall", 
                altName: "Perawella Falls (50m High)",
                category: "Plume Waterfall (50m)", 
                dist: "20–22 km", 
                time: "40–50 minutes", 
                image: "images/landmark_bomburu_ella.jpg",
                desc: "Also known as Perawella Falls, Bomburu Ella is a spectacular group of cascades located near the boundary of the Badulla and Nuwara Eliya districts. The waterfall is about 50 metres high and is surrounded by forest and highland scenery. The final approach involves a walking trail, making it a good option for visitors who enjoy nature and light trekking.",
                routeQuery: "Bomburu Ella Waterfall, Sri Lanka",
                mapSearchQuery: "Bomburu Ella Waterfall, Sri Lanka"
            },
            { 
                id: 4,
                name: "4. Hakgala Botanic Gardens", 
                altName: "Est. 1861 Montane Flora Haven",
                category: "Historic Botanic Garden", 
                dist: "20–25 km", 
                time: "45–55 minutes", 
                image: "images/landmark_hakgala_gardens.jpg",
                desc: "Hakgala Botanic Gardens is a historic highland garden established in 1861. Located beneath Hakgala Rock, the garden contains extensive collections of flowers, orchids, roses, ferns and other plants, with views toward the surrounding Uva mountains. The gardens are managed by Sri Lanka's Department of National Botanic Gardens and are open throughout the year.",
                routeQuery: "Hakgala Botanical Garden, Sri Lanka",
                mapSearchQuery: "Hakgala Botanical Garden"
            },
            { 
                id: 5,
                name: "5. Seetha Amman Temple", 
                altName: "Ramayana Heritage Site, Seetha Eliya",
                category: "Cultural & Heritage Site", 
                dist: "20–25 km", 
                time: "45–60 minutes", 
                image: "images/landmark_seetha_amman_temple.jpg",
                desc: "Located in the Seetha Eliya area near Nuwara Eliya, Seetha Amman Temple is an important cultural and religious site associated with the Ramayana traditions of Sri Lanka. Its colourful architecture and surrounding mountain landscape make it an interesting stop for visitors exploring the central highlands.",
                routeQuery: "Seetha Amman Temple, Seetha Eliya, Sri Lanka",
                mapSearchQuery: "Seetha Amman Temple, Seetha Eliya"
            },
            { 
                id: 6,
                name: "6. Nine Arch Bridge – Ella", 
                altName: "Colonial Railway Viaduct",
                category: "Historic Railway Viaduct", 
                dist: "20–25 km", 
                time: "45–55 minutes", 
                image: "images/landmark_nine_arches.jpg",
                desc: "One of the most recognisable landmarks in the hill country, Nine Arch Bridge is a historic railway viaduct between Ella and Demodara. The stone-and-brick bridge has nine arches and sits dramatically among dense greenery and tea-country landscapes. It was completed in the early 20th century and remains one of the signature sights around Ella.",
                routeQuery: "Nine Arches Bridge, Demodara, Sri Lanka",
                mapSearchQuery: "Nine Arches Bridge, Demodara"
            },
            { 
                id: 7,
                name: "7. Little Adam's Peak – Ella", 
                altName: "Panoramic Ella Gap Viewpoint",
                category: "Mountain Viewpoint & Trek", 
                dist: "20–25 km", 
                time: "45–55 minutes", 
                image: "images/landmark_little_adams_peak.jpg",
                desc: "Little Adam's Peak is one of Ella's most accessible viewpoints. The relatively short uphill walk leads to wide panoramic views of the surrounding mountains, valleys and tea-covered landscapes. It is a popular choice for visitors looking for a scenic walk without a long mountain trek.",
                routeQuery: "Little Adam's Peak, Ella, Sri Lanka",
                mapSearchQuery: "Little Adam's Peak, Ella"
            },
            { 
                id: 8,
                name: "8. Ravana Falls", 
                altName: "Iconic Multi-Level Mountain Cascade",
                category: "Multi-Tiered Cascade", 
                dist: "22–25 km", 
                time: "50–60 minutes", 
                image: "images/landmark_ravana_falls.jpg",
                desc: "Ravana Falls is one of the best-known waterfalls in the Ella area, located beside the Ella–Wellawaya road. The multi-level cascade becomes particularly impressive when water flow is high, and the surrounding area is closely associated with local Ravana and Ramayana traditions.",
                routeQuery: "Ravana Falls, Ella, Sri Lanka",
                mapSearchQuery: "Ravana Falls, Ella"
            }
        ];

        container.innerHTML = `
            <div class="estate-location-card" style="background: #ffffff; border: 1.5px solid #ebd9b8; border-radius: 20px; padding: 3rem 2.5rem; box-shadow: 0 6px 25px rgba(0, 0, 0, 0.04); position: relative; overflow: hidden;">
                <!-- Ambient Warm Glow Flare -->
                <div style="position: absolute; top: -100px; right: -100px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(184, 134, 11, 0.08) 0%, transparent 70%); pointer-events: none;"></div>

                <!-- Top Grid: Estate Description & Map Embed -->
                <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; align-items: stretch; margin-bottom: 3.5rem;" class="location-grid-layout">
                    <!-- Left: Estate Info Column -->
                    <div style="display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <span class="section-tag" style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: #7a5a06; font-weight: 700; margin-bottom: 0.75rem; display: block;">Estate Sanctuary &amp; Terroir</span>
                            <h3 class="home-section-title" style="font-size: 2.1rem; margin-bottom: 1.25rem; line-height: 1.25; color: #111827;">Visit Our Highlands Sanctuary</h3>
                            <p style="color: #4b5563; font-size: 0.96rem; line-height: 1.8; margin-bottom: 1.75rem;">
                                Perched at over 1,200 meters amidst misty mountain amphitheaters in Wellawela, Ettampitiya, our single-estate sanctuary invites connoisseurs and world travelers for private tea cuppings, orthodox factory tours, and alpine terroir walks.
                            </p>

                            <!-- Address & Hours Detail Box (White Theme Luxury Card) -->
                            <div style="background: #fbf9f5; border: 1.5px solid #ebd9b8; border-radius: 14px; padding: 1.4rem 1.6rem; margin-bottom: 1.75rem; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
                                <div style="display: flex; align-items: flex-start; gap: 0.9rem; margin-bottom: 1rem;">
                                    <span style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(184, 134, 11, 0.12); color: #7a5a06; flex-shrink: 0;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </span>
                                    <div>
                                        <span style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1.5px; color: #7a5a06; font-weight: 700;">Estate Geolocation &amp; Address</span>
                                        <strong style="color: #111827; font-size: 1rem; line-height: 1.4; display: block; margin-top: 0.25rem; font-weight: 700;">${addressText}</strong>
                                        <span style="display: block; font-size: 0.75rem; color: #6b7280; margin-top: 0.25rem;">Coordinates: 6.9824° N, 80.9632° E • Elevation: 1,200m+ (6,200 ft)</span>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.9rem; padding-top: 0.9rem; border-top: 1px solid #ebd9b8;">
                                    <span style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(4, 120, 87, 0.1); color: #047857; flex-shrink: 0;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </span>
                                    <div>
                                        <span style="display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; font-weight: 600;">Visiting &amp; Tour Hours</span>
                                        <span style="color: #111827; font-size: 0.88rem; font-weight: 700;">Monday – Sunday: 8:30 AM – 5:30 PM (Daily Guided Cuppings)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Direct Navigation Buttons -->
                        <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
                            <a href="${googleMapsDirectUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; min-width: 175px; text-decoration: none; font-size: 0.85rem; padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 700;">
                                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Open in Google Maps
                            </a>
                            <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex: 1; min-width: 175px; text-decoration: none; font-size: 0.85rem; padding: 0.85rem 1.25rem; color: #7a5a06; border-color: #b8860b; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 700;">
                                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                                Instant GPS Directions
                            </a>
                        </div>
                    </div>

                    <!-- Right: Embedded Interactive Map Frame -->
                    <div style="position: relative; border-radius: 16px; overflow: hidden; border: 1.5px solid #ebd9b8; box-shadow: 0 6px 20px rgba(0,0,0,0.06); min-height: 380px; display: flex;">
                        <iframe 
                            src="${mapEmbedUrl}" 
                            width="100%" 
                            height="100%" 
                            style="border:0; min-height: 380px; width: 100%; border-radius: 16px; filter: contrast(1.02) saturate(1.1);" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Rock One Wild Tea Estate Location Map">
                        </iframe>
                    </div>
                </div>

                <!-- Middle Section: Tourist Attractions Near Rock One Wild Tea -->
                <div style="border-top: 1px solid #e8e4df; padding-top: 3rem; margin-bottom: 3.5rem;">
                    <div style="margin-bottom: 2.25rem;">
                        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2.5px; color: #7a5a06; font-weight: 700; display: block; margin-bottom: 0.5rem;">Scenic Highlands Surroundings</span>
                        <h4 style="font-size: 1.95rem; font-family: var(--font-serif); color: #111827; letter-spacing: 0.5px; margin: 0 0 0.85rem 0; font-weight: 700;">Tourist Attractions Near Rock One Wild Tea</h4>
                        <p style="color: #4b5563; font-size: 0.98rem; line-height: 1.8; max-width: 980px; margin: 0;">
                            Located in the scenic highlands of Sri Lanka, Rock One Wild Tea is surrounded by waterfalls, mountains, tea-growing landscapes, cultural sites and some of the island's best-known hill-country attractions. After experiencing our handmade tea factory, visitors can easily combine their tea experience with a tour of the beautiful surroundings.
                        </p>
                    </div>

                    <!-- 3/4-Column Photographic Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.6rem;" class="landmark-photo-grid">
                        ${nearbyLandmarks.map(place => `
                            <div class="landmark-photo-card" style="background: #ffffff; border: 1.5px solid #e8e4df; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease; box-shadow: 0 4px 18px rgba(0,0,0,0.04);">
                                <!-- Photo Container -->
                                <div style="position: relative; height: 210px; overflow: hidden; background: #f3eee7; border-bottom: 1px solid #ebd9b8;">
                                    <img src="${place.image}" alt="${place.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); display: block;" class="landmark-img" onerror="window.handleImageError && window.handleImageError(this, 'gallery')" loading="lazy" decoding="async">
                                    <div style="position: absolute; top: 12px; right: 12px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1.5px solid #b8860b; color: #7a5a06; font-size: 0.72rem; font-weight: 800; padding: 0.3rem 0.75rem; border-radius: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                        Approx. ${place.dist} • ~${place.time}
                                    </div>
                                    <div style="position: absolute; bottom: 12px; left: 12px;">
                                        <span style="font-size: 0.68rem; color: #ffffff; background: #047857; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 0.25rem 0.65rem; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.25);">
                                            ${place.category}
                                        </span>
                                    </div>
                                </div>

                                <!-- Card Content -->
                                <div style="padding: 1.4rem; display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; background: #ffffff;">
                                    <div>
                                        <h5 style="color: #111827; font-size: 1.15rem; font-family: var(--font-serif); margin: 0 0 0.5rem 0; letter-spacing: 0.3px; line-height: 1.35; font-weight: 700;">${place.name}</h5>
                                        <p style="color: #4b5563; font-size: 0.88rem; line-height: 1.65; margin: 0 0 1.35rem 0;">${place.desc}</p>
                                    </div>
                                    <div style="display: flex; gap: 0.6rem; align-items: center;">
                                        <a href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("Rock One Wild Tea, Gannilawaththa, Wellawela, Ettampitiya 90140, Sri Lanka")}&destination=${encodeURIComponent(place.routeQuery)}&destination_place_id=0x3ae4630013bcccbb:0x453d082c477ea3bf" target="_blank" rel="noopener noreferrer" class="landmark-directions-btn" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #fbf9f5; border: 1.5px solid #b8860b; color: #7a5a06; text-decoration: none; padding: 0.7rem 0.95rem; border-radius: 10px; font-size: 0.82rem; font-weight: 700; transition: all 0.25s ease;">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                                            View Route in Google Maps
                                        </a>
                                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapSearchQuery)}" target="_blank" rel="noopener noreferrer" title="View ${place.name} on Google Maps" style="display: flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 10px; background: #fbf9f5; border: 1.5px solid #ebd9b8; color: #7a5a06; text-decoration: none; transition: all 0.2s ease; flex-shrink: 0;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Outro Exploration Banner -->
                    <div style="margin-top: 2.25rem; background: #fbf9f5; border: 1.5px solid #ebd9b8; border-radius: 16px; padding: 1.6rem 2rem; display: flex; align-items: center; gap: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,0.03);">
                        <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(184, 134, 11, 0.12); display: flex; align-items: center; justify-content: center; color: #7a5a06; flex-shrink: 0;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                        </div>
                        <div>
                            <h5 style="color: #111827; font-family: var(--font-serif); font-size: 1.15rem; margin: 0 0 0.35rem 0; letter-spacing: 0.3px; font-weight: 700;">Explore the Highlands After Your Tea Experience</h5>
                            <p style="color: #4b5563; font-size: 0.92rem; line-height: 1.7; margin: 0;">
                                A visit to Rock One Wild Tea can easily be combined with a day of exploring the surrounding highlands. Visitors can experience our handmade tea production, enjoy the scenery of the Uva tea country, and continue on to waterfalls, mountain viewpoints, botanical gardens and cultural landmarks.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Bottom Section: Nearest Main Cities & Hubs Strip -->
                <div style="border-top: 1px solid #e8e4df; padding-top: 2.75rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <span style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; background: rgba(184, 134, 11, 0.12); color: #7a5a06;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </span>
                            <h4 style="font-size: 1.35rem; font-family: var(--font-serif); color: #111827; letter-spacing: 0.5px; margin: 0; font-weight: 700;">Nearest Main Cities &amp; Transit Hubs</h4>
                        </div>
                        <span style="font-size: 0.72rem; color: #7a5a06; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; background: #fbf9f5; border: 1px solid #ebd9b8; padding: 0.35rem 0.85rem; border-radius: 20px;">Direct Access Routes</span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem;" class="cities-proximity-grid">
                        ${nearbyCities.map(city => `
                            <div class="proximity-item-card" style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1.5px solid #e8e4df; padding: 0.9rem 1.15rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: all 0.25s ease;">
                                <div style="display: flex; align-items: center; gap: 0.75rem;">
                                    <div style="width: 10px; height: 10px; border-radius: 50%; background: #b8860b; box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.18); flex-shrink: 0;"></div>
                                    <div>
                                        <strong style="color: #111827; font-size: 0.96rem; font-weight: 700; display: block; margin-bottom: 2px;">${city.name}</strong>
                                        <span style="color: #6b7280; font-size: 0.74rem; font-weight: 500;">${city.type}</span>
                                    </div>
                                </div>
                                <div style="text-align: right; display: flex; align-items: center; gap: 0.75rem;">
                                    <div>
                                        <span class="proximity-badge-dist" style="display: inline-block; background: #fbf9f5; color: #7a5a06; border: 1.5px solid #ebd9b8; font-size: 0.78rem; font-weight: 800; padding: 0.25rem 0.6rem; border-radius: 8px;">${city.dist}</span>
                                        <span style="display: block; font-size: 0.7rem; color: #4b5563; font-weight: 600; margin-top: 3px; text-align: right;">~${city.time}</span>
                                    </div>
                                    <a href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(city.routeQuery)}&destination=Rock+One+Wild+Tea+(Pvt)+Limited&destination_place_id=0x3ae4630013bcccbb:0x453d082c477ea3bf" target="_blank" rel="noopener noreferrer" title="Get Driving Route from ${city.name}" class="proximity-route-btn" style="color: #7a5a06; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; background: #fbf9f5; border: 1.5px solid #ebd9b8; text-decoration: none; transition: all 0.2s ease; flex-shrink: 0;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
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
            <div class="modal-card connoisseur-dossier-card" style="background:#ffffff; border:1.5px solid #ebd9b8; border-radius:20px; max-width:880px; width:100%; padding:2.5rem 2.25rem; box-shadow:0 24px 60px rgba(0,0,0,0.15); position:relative; max-height:90vh; overflow-y:auto;">
                <button type="button" id="close-connoisseur-modal-btn" style="position:absolute; top:1.25rem; right:1.25rem; background:transparent; border:none; color:#7a5a06; font-size:1.5rem; cursor:pointer; width:36px; height:36px; display:flex; align-items:center; justify-content:center; border-radius:50%; transition:all 0.2s;" title="${_t('common_close', 'Close')}">&times;</button>
                
                <!-- Dossier Header -->
                <div style="text-align:center; margin-bottom:2rem; border-bottom:1px solid #e8e4df; padding-bottom:1.5rem;">
                    <div style="display:inline-flex; align-items:center; gap:0.5rem; background:#fdfbf7; border:1px solid #ebd9b8; border-radius:20px; padding:0.35rem 1.2rem; font-size:0.72rem; text-transform:uppercase; letter-spacing:2px; color:#7a5a06; font-weight:700; margin-bottom:0.75rem;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 12 12 16 14"></polygon></svg>
                        <span>${_t('dossier_modal_badge', 'CONNOISSEUR SENSORY DOSSIER')}</span>
                    </div>
                    <h2 style="font-family:var(--font-serif); font-size:2rem; color:#111827; margin-bottom:0.4rem;">${product.name}</h2>
                    <p style="color:#6b7280; font-size:0.88rem; max-width:620px; margin:0 auto;">
                        ${product.leafGrade || _t('leaf_grade_default', 'Single-Estate Reserve')} &bull; <strong style="color:#7a5a06;">${product.elevation || '1,240m Highlands'}</strong> &bull; ${product.harvestSeason || 'Equinox First Flush'}
                    </p>
                </div>

                <!-- 2-Column Sensory & Radar Showcase -->
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:2.25rem; margin-bottom:2.25rem; align-items:center;" class="connoisseur-grid-layout">
                    <!-- Left: Terroir & Sensory Spectrum Bars -->
                    <div>
                        <div style="position:relative; border-radius:12px; overflow:hidden; border:1px solid #ebd9b8; margin-bottom:1.25rem; aspect-ratio:16/9; background:#fdfbf7;">
                            <img src="${product.image || 'images/Product.jpeg'}" alt="${product.name}" style="width:100%; height:100%; object-fit:contain;" onerror="window.handleImageError && window.handleImageError(this, 'product')" loading="lazy" decoding="async">
                            <span style="position:absolute; bottom:0.6rem; left:0.6rem; background:rgba(255,255,255,0.92); border:1px solid #ebd9b8; color:#7a5a06; font-size:0.7rem; padding:0.25rem 0.65rem; border-radius:12px; font-weight:600;">
                                Batch Ref: ROW-${(product.id || 'P1').toUpperCase()}
                            </span>
                        </div>

                        <h4 style="font-family:var(--font-serif); color:#7a5a06; font-size:1.1rem; margin-bottom:0.6rem;">${_t('dossier_sensory_title', 'Sommelier Tasting Chords')}</h4>
                        ${product.flavorProfile ? `
                        <div style="font-size:0.84rem; color:#374151; font-style:italic; margin-bottom:0.85rem; border-left:2.5px solid #b8860b; padding-left:0.75rem; line-height:1.45; background:#fdfbf7; padding-top:0.4rem; padding-bottom:0.4rem; border-radius:0 8px 8px 0;">
                            "${product.flavorProfile}"
                        </div>` : ''}
                        <div style="display:flex; flex-wrap:wrap; gap:0.45rem; margin-bottom:1.25rem;">
                            ${tastingTags}
                        </div>

                        <!-- Sensory Spectrum Horizontal Bars (All 6 Calibrated Sommelier Dimensions) -->
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.65rem 0.95rem; background:#fdfbf7; border:1px solid #ebd9b8; border-radius:12px; padding:0.95rem 1.15rem;">
                            <!-- Floral -->
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:#374151; margin-bottom:0.25rem;">
                                    <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryFloral} ${_t('radar_floral', 'Floral Intensity')}</span>
                                    <strong style="color:#7a5a06;">${radar.floral ?? 80}%</strong>
                                </div>
                                <div style="height:5px; background:#e8e4df; border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.floral ?? 80}%; height:100%; background:linear-gradient(90deg, #c59b27, #b8860b); border-radius:3px;"></div>
                                </div>
                            </div>
                            <!-- Malty -->
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:#374151; margin-bottom:0.25rem;">
                                    <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryMalty} ${_t('radar_malty', 'Malty / Roast')}</span>
                                    <strong style="color:#7a5a06;">${radar.malty ?? 75}%</strong>
                                </div>
                                <div style="height:5px; background:#e8e4df; border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.malty ?? 75}%; height:100%; background:linear-gradient(90deg, #c59b27, #b8860b); border-radius:3px;"></div>
                                </div>
                            </div>
                            <!-- Sweetness -->
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:#374151; margin-bottom:0.25rem;">
                                    <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensorySweetness} ${_t('radar_sweetness', 'Natural Sweetness')}</span>
                                    <strong style="color:#7a5a06;">${radar.sweetness ?? 80}%</strong>
                                </div>
                                <div style="height:5px; background:#e8e4df; border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.sweetness ?? 80}%; height:100%; background:linear-gradient(90deg, #c59b27, #b8860b); border-radius:3px;"></div>
                                </div>
                            </div>
                            <!-- Astringency -->
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:#374151; margin-bottom:0.25rem;">
                                    <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryAstringency} ${_t('radar_astringency', 'Astringency')}</span>
                                    <strong style="color:#7a5a06;">${radar.astringency ?? 40}%</strong>
                                </div>
                                <div style="height:5px; background:#e8e4df; border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.astringency ?? 40}%; height:100%; background:linear-gradient(90deg, #c59b27, #b8860b); border-radius:3px;"></div>
                                </div>
                            </div>
                            <!-- Body -->
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:#374151; margin-bottom:0.25rem;">
                                    <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryBody} ${_t('radar_body', 'Body & Structure')}</span>
                                    <strong style="color:#7a5a06;">${radar.body ?? 80}%</strong>
                                </div>
                                <div style="height:5px; background:#e8e4df; border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.body ?? 80}%; height:100%; background:linear-gradient(90deg, #c59b27, #b8860b); border-radius:3px;"></div>
                                </div>
                            </div>
                            <!-- Aroma -->
                            <div class="spectrum-bar-item">
                                <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:#374151; margin-bottom:0.25rem;">
                                    <span style="display:inline-flex; align-items:center; gap:0.3rem;">${SVG_ICONS.sensoryAroma} ${_t('radar_aroma', 'Aroma Intensity')}</span>
                                    <strong style="color:#7a5a06;">${radar.aroma ?? 90}%</strong>
                                </div>
                                <div style="height:5px; background:#e8e4df; border-radius:3px; overflow:hidden;">
                                    <div style="width:${radar.aroma ?? 90}%; height:100%; background:linear-gradient(90deg, #c59b27, #b8860b); border-radius:3px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Flavor Profile Radar Chart -->
                    <div style="background:#fdfbf7; border:1px solid #ebd9b8; border-radius:16px; padding:1.75rem 1.5rem; text-align:center;">
                        <h4 style="font-family:var(--font-serif); color:#111827; font-size:1.15rem; margin-bottom:0.25rem;">${_t('dossier_sensory_title', '6-Point Sensory Radar')}</h4>
                        <p style="color:#6b7280; font-size:0.78rem; margin-bottom:1.25rem;">${_t('dossier_terroir_title', 'Harmonic balance calibrated by Estate Sommelier')}</p>
                        
                        <div style="max-width:270px; margin:0 auto;">
                            ${radarSvg}
                        </div>
                    </div>
                </div>

                <!-- Bottom: Interactive Live Digital Steep Timer Section -->
                <div class="digital-steep-timer-block" style="background:#ffffff; border:1.5px solid #ebd9b8; border-radius:18px; padding:2rem; box-shadow:0 4px 20px rgba(0,0,0,0.04);">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid #e8e4df; padding-bottom:1rem;">
                        <div>
                            <span style="font-size:0.72rem; text-transform:uppercase; letter-spacing:1.5px; color:#7a5a06; font-weight:700; display:block; margin-bottom:0.2rem;">${_t('brew_section_tag', 'PRECISION BREWING RITUAL')}</span>
                            <h3 style="font-family:var(--font-serif); color:#111827; font-size:1.4rem; margin:0;">${_t('dossier_steep_title', 'Live Sommelier Steep Timer')}</h3>
                        </div>
                        
                        <!-- Infusion Selector Tabs -->
                        <div class="infusion-selector-tabs" style="display:flex; gap:0.4rem; background:#fdfbf7; border:1px solid #e8e4df; border-radius:30px; padding:0.25rem;">
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
                            <div style="background:#fdfbf7; border:1px solid #ebd9b8; border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:#6b7280; display:block; margin-bottom:0.25rem;">${_t('stat_water_temp', 'Water Temp')}</span>
                                <strong style="font-size:1.15rem; color:#7a5a06;">${product.steepTemp || '95°C'}</strong>
                            </div>
                            <div style="background:#fdfbf7; border:1px solid #ebd9b8; border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:#6b7280; display:block; margin-bottom:0.25rem;">${_t('stat_leaf_ratio', 'Leaf Ratio')}</span>
                                <strong style="font-size:1.15rem; color:#111827;">${product.leafRatio || '2.5g / 180ml'}</strong>
                            </div>
                            <div style="background:#fdfbf7; border:1px solid #ebd9b8; border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:#6b7280; display:block; margin-bottom:0.25rem;">${_t('stat_steep_duration', 'Steep Duration')}</span>
                                <strong id="modal-infusion-target-label" style="font-size:0.85rem; color:#111827; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">1st (Aroma)</strong>
                            </div>
                            <div style="background:#fdfbf7; border:1px solid #ebd9b8; border-radius:10px; padding:0.9rem; text-align:center;">
                                <span style="font-size:0.7rem; text-transform:uppercase; letter-spacing:1px; color:#6b7280; display:block; margin-bottom:0.25rem;">${_t('stat_serving_vessel', 'Serving Vessel')}</span>
                                <strong style="font-size:0.95rem; color:#111827;">${_t('brew_vessel_porcelain', 'Porcelain / Glass')}</strong>
                            </div>
                        </div>

                        <!-- Circular Countdown Ring & Controls -->
                        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
                            <div style="position:relative; width:160px; height:160px; display:flex; align-items:center; justify-content:center; margin-bottom:1.25rem;">
                                <svg width="160" height="160" viewBox="0 0 160 160" style="transform:rotate(-90deg);">
                                    <circle cx="80" cy="80" r="70" stroke="#f0ece1" stroke-width="8" fill="none" />
                                    <circle id="modal-timer-progress-ring" cx="80" cy="80" r="70" stroke="#b8860b" stroke-width="8" stroke-dasharray="440" stroke-dashoffset="0" stroke-linecap="round" fill="none" style="transition:stroke-dashoffset 0.8s linear;" />
                                </svg>
                                <div style="position:absolute; text-align:center;">
                                    <span id="modal-timer-digits" style="font-family:monospace; font-size:2.1rem; font-weight:700; color:#111827; letter-spacing:1px; display:block; line-height:1;">
                                        ${initialMin}:${initialSec}
                                    </span>
                                    <span id="modal-timer-status-text" style="font-size:0.68rem; text-transform:uppercase; letter-spacing:1.5px; color:#7a5a06; font-weight:700; margin-top:0.35rem; display:block;">
                                        ${_t('timer_standby', 'READY TO STEEP')}
                                    </span>
                                </div>
                            </div>

                            <!-- Timer Action Buttons -->
                            <div style="display:flex; gap:0.6rem; align-items:center;">
                                <button type="button" id="btn-timer-start-pause" class="btn btn-primary" style="padding:0.65rem 1.4rem; font-size:0.82rem; font-weight:700;">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_start_steep', 'Start Steep')}
                                </button>
                                <button type="button" id="btn-timer-plus-30" class="btn btn-outline" style="padding:0.65rem 0.9rem; font-size:0.8rem; border-color:#d1d5db; color:#1f2937; background:#fdfbf7;" title="Add 30 Seconds">
                                    +30s
                                </button>
                                <button type="button" id="btn-timer-reset" class="btn btn-outline" style="padding:0.65rem 0.9rem; font-size:0.8rem; border-color:#d1d5db; color:#4b5563; background:#fdfbf7;" title="${_t('btn_reset_steep', 'Reset Timer')}">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg> ${_t('btn_reset_steep', 'Reset')}
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
                        <button type="button" class="btn btn-outline btn-book-prod" data-id="${product.id}" style="padding:0.85rem 1.4rem; font-size:0.9rem; border-color:#d1d5db; color:#1f2937; background:#fdfbf7;">
                            ${_t('btn_quick_order', 'Quick Order')}
                        </button>
                    </div>
                    <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20am%20interested%20in%20learning%20more%20about%20${encodeURIComponent(product.name)}." target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="color:#16a34a; border-color:#86efac; background:#f0fdf4; text-decoration:none; display:flex; align-items:center; gap:0.4rem; font-size:0.88rem; padding:0.85rem 1.35rem;">
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
            if (window.openProductDetail) {
                window.openProductDetail(product.id, 'product');
            } else if (window.appOpenProductDrawer) {
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
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5,3 19,12 5,21"/></svg> ${_t('btn_start_steep', 'Start Steep')}
                            </button>
                            <button type="button" id="btn-home-timer-reset" class="btn btn-outline" style="padding:0.6rem 0.85rem; font-size:0.78rem; border-color:rgba(255,255,255,0.2); color:var(--color-text-muted);">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3"/></svg> ${_t('btn_reset_steep', 'Reset')}
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
                const isPaid      = order.status === 'Paid & Confirmed' || order.status === 'confirmed';
                const isCancelled = order.status === 'Cancelled';
                const isSlip      = order.status === 'Slip Submitted' || order.status === 'Pending Verification';
                const isAwaiting  = order.status === 'Awaiting Payment' || order.status === 'Order Created';

                const statusDot = isPaid      ? '#81c784'
                                : isCancelled ? '#ef5350'
                                : isSlip      ? '#d4af37'
                                : '#90caf9';

                const statusLabel = isPaid ? (order.isTour ? 'Slip Authorized & Confirmed' : 'Paid & Confirmed')
                                  : isSlip ? (order.isTour ? 'Tour Pending — Slip Uploaded' : 'Slip Submitted')
                                  : isCancelled ? 'Cancelled'
                                  : order.status;

                const statusIcon = isPaid ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
                                 : isSlip ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`
                                 : isCancelled ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
                                 : `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

                const priceDisplay = order.formattedPrice || `$${(order.price || 0).toFixed(2)}`;
                const shortBox = (order.boxName || 'Order').length > 36 ? order.boxName.slice(0, 36) + '...' : (order.boxName || 'Order');

                return `
                    <div class="recent-order-card" data-recent-order-id="${order.id}" role="button" tabindex="0" title="Click to load ${order.isTour ? 'tour booking' : 'order'} ${order.id}">
                        <div class="recent-order-card-header">
                            <span class="recent-order-id-pill">${order.id}</span>
                            <span class="recent-order-status-badge" style="color: ${statusDot}; border-color: ${statusDot}30; background: ${statusDot}15;">
                                ${statusIcon} ${statusLabel}
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
                                ${order.isTour ? 'View Tour Pass' : 'Open Order'}
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
                                    <div class="recent-orders-panel-subtitle">${recentIds.length} recent transaction${recentIds.length !== 1 ? 's' : ''} (Orders &amp; Tour Passes) — click to load</div>
                                </div>
                            </div>
                            <button class="recent-orders-clear-btn" id="recent-orders-clear-btn" title="Clear history from this device">
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

        const heroBannerHtml = UIComponents.renderPageHeroBanner({
            pretitle: "Patron Concierge",
            title: "Order Tracking & Ledger",
            tagline: "Track Express Courier Shipments & Verify Authentic Estate Deeds",
            image: "images/hero_banner_order.jpg",
            badge: "Live Courier Dispatch & Concierge Verification",
            pillTag: "Order Concierge",
            sectionHeading: "Live Consignment & Parcel Tracking",
            sectionSubheading: "Enter your order reference code or tour pass ID to track express courier delivery status, inspect dispatch deeds, and download official receipts."
        });

        container.innerHTML = heroBannerHtml + `
            <div style="max-width: 780px; margin: 0 auto; padding: 0.5rem 0 3rem 0;">
                ${recentOrdersHtml}

                <!-- Order Lookup Form -->
                <div class="panel-card" style="margin-bottom: 2rem;" id="order-lookup-card">
                    <h3 class="panel-title" style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        Look Up Order or Tour Booking Pass
                    </h3>
                    <p class="panel-desc" style="margin-bottom: 1.5rem;">Enter the Reference ID provided upon checkout or in your confirmation email (e.g. <span style="font-family: monospace; color: var(--color-gold);">ORD-88231001</span> or <span style="font-family: monospace; color: var(--color-gold);">TB-MUFD26QL</span>).</p>
                    <form id="order-lookup-form" class="admin-form" style="flex-direction: row; gap: 0.75rem; align-items: flex-end; flex-wrap: wrap;">
                        <div class="form-group" style="flex: 1; min-width: 220px; margin-bottom: 0;">
                            <label for="order-id-input">Reference / Booking ID</label>
                            <input type="text" id="order-id-input" placeholder="ORD-12345678 or TB-XXXXX" style="font-family: monospace; text-transform: uppercase; font-size: 1rem;" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="padding: 0.75rem 2rem; white-space: nowrap;">Look Up Status <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
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

        const isTour      = order.isTour || order.type === 'tour' || String(order.id).startsWith('TR-') || String(order.id).startsWith('TB-');
        const isPaid      = order.status === 'Paid & Confirmed' || order.status === 'confirmed';
        const isCancelled = order.status === 'Cancelled';
        const isSlipSent  = order.status === 'Slip Submitted' || order.status === 'Pending Verification';

        panel.style.display = 'block';

        // ────────────────── A. SPECIALIZED TOUR BOOKING TRACKING ──────────────────
        if (isTour) {
            const guestCount = order.guests || 1;
            const tourDate = order.tourDate || 'Scheduled Date';
            const timeSlot = order.timeSlot || '10:00 AM - 11:30 AM';
            const guestName = order.customerName || 'Valued Guest';
            const statusLabel = isPaid 
                ? 'Slip Authorized & Tour Confirmed' 
                : isSlipSent 
                    ? 'Tour Pending — Slip Under Verification' 
                    : isCancelled 
                        ? 'Reservation Cancelled' 
                        : 'Deposit Slip Required';

            panel.innerHTML = `
                <!-- Tour Booking Pass Card -->
                <div class="panel-card" style="margin-bottom: 1.5rem; border: 1.5px solid ${isPaid ? '#22c55e' : isCancelled ? 'rgba(198,40,40,0.4)' : 'var(--color-gold)'};">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1.25rem;">
                        <div>
                            <span style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700; display: block; margin-bottom: 0.25rem;">
                                Highland Estate &bull; Tour Gate Pass
                            </span>
                            <div style="font-family: monospace; font-size: 1.25rem; color: #ffffff; font-weight: 700; letter-spacing: 0.5px;">${order.id}</div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 0.2rem;">Booked: ${order.createdAt}</div>
                        </div>
                        <span style="padding: 0.45rem 1rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.4rem;
                            background: ${isPaid ? 'rgba(34,197,94,0.18)' : isCancelled ? 'rgba(198,40,40,0.2)' : 'rgba(212,175,55,0.18)'};
                            color: ${isPaid ? '#86efac' : isCancelled ? '#e57373' : 'var(--color-gold)'};
                            border: 1px solid ${isPaid ? 'rgba(34,197,94,0.4)' : isCancelled ? 'rgba(198,40,40,0.4)' : 'rgba(212,175,55,0.4)'};">
                            ${isPaid ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>` : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`}
                            ${statusLabel}
                        </span>
                    </div>

                    <!-- Tour Details Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.06);">
                        <div>
                            <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Experience</div>
                            <div style="font-weight: 600; color: #ffffff;">${order.boxName || 'Highland Estate Factory Tour'}</div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted);">Orthodox Factory &amp; Sommelier Cupping</div>
                        </div>
                        <div>
                            <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Date &amp; Time Slot</div>
                            <div style="font-weight: 700; color: var(--color-gold); font-size: 0.95rem;">${tourDate}</div>
                            <div style="font-size: 0.8rem; color: #86efac; font-weight: 600;">${timeSlot}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Guests Allocated</div>
                            <div style="font-weight: 700; font-size: 1.1rem; color: #ffffff;">${guestCount} ${guestCount === 1 ? 'Guest' : 'Guests'}</div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted);">Lead: ${guestName}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Deposit Paid / Due</div>
                            <div style="font-weight: 700; font-size: 1.1rem; color: var(--color-gold);">${order.formattedPrice || `$${(Number(order.price) || 50).toFixed(2)} USD`}</div>
                        </div>
                    </div>

                    ${isPaid ? `
                        <!-- 🟢 STATE: SLIP AUTHORIZED & TOUR CONFIRMED -->
                        <div style="background: linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(4,28,14,0.85) 100%); border: 1.5px solid #22c55e; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div style="width: 38px; height: 38px; border-radius: 50%; background: rgba(34,197,94,0.25); display: flex; align-items: center; justify-content: center; color: #86efac; flex-shrink: 0;">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <div>
                                    <div style="font-weight: 700; color: #86efac; font-size: 1.05rem;">Deposit Slip Authorized &amp; Active Gate Pass</div>
                                    <div style="font-size: 0.8rem; color: #d1d5db;">${order.validatedAt ? `Authorized on ${order.validatedAt} by Estate Manager` : 'Verified &amp; Authorized by Estate Concierge Desk'}</div>
                                </div>
                            </div>
                            <p style="font-size: 0.85rem; color: #f3f4f6; line-height: 1.6; margin: 0 0 1rem 0;">
                                Your factory tour reservation is officially authorized. Please present this screen or your email boarding pass upon arrival at the estate security gate.
                            </p>
                            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1rem; font-size: 0.8rem; color: #d1d5db; line-height: 1.6;">
                                <strong style="color: var(--color-gold);">Estate Location:</strong> Gannilawaththa, Wellawela, Ettampitiya 90140, Badulla District (Elevation 1,240m)<br>
                                <strong style="color: var(--color-gold);">Arrival Recommendation:</strong> Please arrive 10–15 minutes prior to ${timeSlot}.
                            </div>

                            <!-- Executive Director & CEO Verification Seal & Signature -->
                            <div style="margin-top: 1.25rem; padding: 1.1rem 1.25rem; background: rgba(0,0,0,0.4); border: 1px solid rgba(212,175,55,0.45); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                                <div style="display: flex; align-items: center; gap: 0.85rem;">
                                    <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(212,175,55,0.15); border: 1.5px solid #d4af37; display: flex; align-items: center; justify-content: center; color: #d4af37; flex-shrink: 0;">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                                    </div>
                                    <div>
                                        <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-gold); font-weight: 700;">Security Clearance Attestation</div>
                                        <div style="font-size: 0.88rem; color: #ffffff; font-weight: 600;">Authorized for Highland Estate Admission</div>
                                        <div style="font-size: 0.72rem; color: #9ca3af;">Highland Estate Security Lodge &bull; Gate Pass Verified</div>
                                    </div>
                                </div>
                                <div style="text-align: right; min-width: 140px;">
                                    <div style="font-size: 0.62rem; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af; margin-bottom: 2px;">Authorized Executive</div>
                                    <div style="display: inline-block; text-align: center;">
                                        <img src="images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 38px; object-fit: contain; display: block; margin: 0 auto;" />
                                        <div style="border-top: 1px solid rgba(212,175,55,0.4); padding-top: 2px; margin-top: 2px;">
                                            <div style="font-size: 0.82rem; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">Prasanga</div>
                                            <div style="font-size: 0.68rem; color: var(--color-gold); font-weight: 600;">Director &amp; CEO, Rock One Wild Tea</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-top: 1.25rem;">
                                <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20Authorized%20Tour%20Pass%20${order.id}%20for%20${tourDate}.%20Please%20guide%20our%20chauffeur." target="_blank" style="background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 25px; font-weight: bold; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.5rem;">
                                    Message Concierge on WhatsApp (+94 77 320 9950)
                                </a>
                                <button type="button" class="btn btn-outline btn-tour-cert-download" data-order-id="${order.id}" style="font-size: 0.85rem; padding: 10px 22px; border-radius: 25px; border-color: rgba(212,175,55,0.5); color: var(--color-gold); display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(0,0,0,0.35);">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 13 7 8"></polyline><line x1="12" y1="3" x2="12" y2="13"></line></svg>
                                    Download Gate Pass (PDF)
                                </button>
                            </div>
                        </div>
                    ` : isSlipSent ? `
                        <!-- 🟡 STATE: TOUR PENDING & SLIP SUBMITTED / UNDER REVIEW -->
                        <div style="background: rgba(212,175,55,0.08); border: 1.5px dashed rgba(212,175,55,0.5); border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div style="width: 38px; height: 38px; border-radius: 50%; background: rgba(212,175,55,0.2); display: flex; align-items: center; justify-content: center; color: var(--color-gold); flex-shrink: 0;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <div>
                                    <div style="font-weight: 700; color: var(--color-gold); font-size: 1.05rem;">Tour Booking Pending — Deposit Slip Under Verification</div>
                                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">Slip uploaded &bull; Official Gate Pass will be certified and signed by Director &amp; CEO upon clearance</div>
                                </div>
                            </div>
                            <p style="font-size: 0.85rem; color: #f3f4f6; line-height: 1.6; margin: 0 0 1rem 0;">
                                We have received your bank deposit / transfer slip for <strong>${guestCount} Guests</strong> on <strong>${tourDate} (${timeSlot})</strong>. Our estate manager is reviewing the transaction ledger and will authorize your gate pass within 24 hours.
                            </p>
                            ${order.slipImage ? `
                                <div style="margin: 1rem 0; padding: 0.75rem; background: rgba(0,0,0,0.4); border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; gap: 0.75rem;">
                                    <img src="${order.slipImage}" alt="Uploaded Slip" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(212,175,55,0.3);">
                                    <div style="font-size: 0.8rem; color: #d1d5db;">
                                        <div style="font-weight: 600; color: #ffffff;">Deposit Slip Attached</div>
                                        <div style="font-size: 0.72rem; color: var(--color-text-muted);">Status: Awaiting Concierge Desk Clearance</div>
                                    </div>
                                </div>
                            ` : ''}
                            <div style="text-align: center; margin-top: 1.25rem;">
                                <a href="https://wa.me/94773209950?text=Hello%20Rock%20One%20Wild%20Tea%2C%20I%20have%20submitted%20slip%20for%20Tour%20Booking%20${order.id}%20(${tourDate}).%20Please%20authorize%20my%20pass." target="_blank" style="background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 25px; font-weight: bold; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.5rem;">
                                    Inquire with Concierge on WhatsApp
                                </a>
                            </div>
                        </div>
                    ` : `
                        <!-- ⚪ STATE: PAYMENT REQUIRED FOR TOUR -->
                        <h4 style="font-family: var(--font-serif); color: var(--color-white); margin-bottom: 1rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.45rem;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            Confirm Reservation &amp; Clear Gate Pass
                        </h4>

                        <!-- Option A: Instant PayPal & International Cards -->
                        <div style="margin-bottom: 1.25rem; padding: 1.25rem; background: rgba(0, 112, 186, 0.05); border: 1.5px solid rgba(0, 112, 186, 0.45); border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                                <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0070ba"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.655h6.613c3.082 0 5.488.75 6.073 3.652.31 1.542.022 2.894-.856 4.02-.99 1.267-2.613 1.942-4.83 1.942H9.86l-.995 6.3a.64.64 0 0 1-.633.542l-1.156.016v.006z"/></svg>
                                    Option A: Instant Clearance via PayPal / Cards
                                </div>
                                <span style="background: rgba(0, 112, 186, 0.2); color: #38bdf8; font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; text-transform: uppercase;">
                                    Instant Gate Pass
                                </span>
                            </div>
                            <div style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
                                Pay securely online in USD. Upon successful payment, your official Estate Tour Gate Pass signed by Director &amp; CEO Prasanga will be certified and released immediately.
                            </div>
                            <div id="order-detail-paypal-container" class="paypal-smart-container" style="min-height: 44px;"></div>
                        </div>

                        <!-- Option B: Direct Bank Cash Deposit + Slip Upload -->
                        <div style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(212,175,55,0.03); border: 1.5px solid rgba(212,175,55,0.4); border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                                <div style="font-weight: 700; color: var(--color-gold); font-size: 0.95rem;">
                                    Option B: Direct Bank Deposit &amp; Slip Upload
                                </div>
                                <span style="background: rgba(46,125,50,0.2); color: #81c784; font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; text-transform: uppercase;">
                                    Active Live Method
                                </span>
                            </div>
                            <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem;">
                                Please deposit the deposit amount of <strong>${order.formattedPrice || '$50.00 USD'}</strong> to reserve your slots, then upload your slip below for concierge authorization:
                            </p>
                            <div class="bank-details-block" style="margin-bottom: 1.25rem;">
                                <div class="bank-detail-row"><span>Bank:</span><strong>Bank of Ceylon</strong></div>
                                <div class="bank-detail-row"><span>Account Name:</span><strong>Rock one wild tea</strong></div>
                                <div class="bank-detail-row"><span>Account No:</span><strong>94945708</strong></div>
                                <div class="bank-detail-row"><span>Branch:</span><strong>Ettampitiya branch</strong></div>
                                <div class="bank-detail-row"><span>Reference:</span><strong>${order.id}</strong></div>
                            </div>
                            <form id="order-slip-form" class="admin-form" style="gap: 1rem;">
                                <div class="form-group">
                                    <label>Attach Your Bank Deposit Slip (Image / PDF) *</label>
                                    <div class="file-upload-zone" id="order-slip-zone">
                                        <div class="file-upload-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                        </div>
                                        <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse file</span></div>
                                        <div class="file-upload-hint">JPG, PNG or PDF — Max 5MB</div>
                                        <input type="file" id="order-slip-file" accept="image/*,.pdf" style="display:none;">
                                    </div>
                                    <div id="order-slip-preview" class="slip-preview" style="display:none;"></div>
                                </div>
                                <button type="submit" class="btn btn-primary w-full" data-order-id="${order.id}">
                                    Submit Deposit Slip for Tour Authorization
                                </button>
                            </form>
                        </div>
                    `}
                </div>
            `;
            return;
        }

        // ────────────────── B. PRODUCT / GIFT BOX ORDER VIEW ──────────────────
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
                        <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Tea Reserve</div>
                        <div style="font-weight: 600;">${order.boxName}</div>
                        <div style="font-size: 0.75rem; color: var(--color-text-muted);">${order.seasonName}</div>
                    </div>
                    <div>
                        <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-muted); margin-bottom: 0.3rem;">Amount Due</div>
                        <div style="font-weight: 700; font-size: 1.3rem; color: var(--color-gold);">${order.formattedPrice || `$${(Number(order.price) || 0).toFixed(2)}`}</div>
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
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">Your tea allocation has been reserved. Our concierge team will contact you shortly regarding delivery.</div>
                        <div style="margin-top: 1rem; padding-top: 0.85rem; border-top: 1px dashed rgba(212,175,55,0.3); display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                            <img src="images/ceo_signature_gold.png" alt="Director &amp; CEO Signature" style="height: 34px; object-fit: contain;" />
                            <div style="text-align: left; font-size: 0.78rem;">
                                <div style="font-weight: 700; color: #ffffff;">Prasanga</div>
                                <div style="color: var(--color-gold); font-size: 0.7rem;">Managing Director &amp; CEO, Rock One Wild Tea</div>
                            </div>
                        </div>
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
                    <!-- Payment Options -->
                    <h4 style="font-family: var(--font-serif); color: var(--color-white); margin-bottom: 1.25rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.45rem;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        Payment Methods &amp; Settlement
                    </h4>

                    <!-- Option A: Instant Online Settlement via PayPal & Cards -->
                    <div style="margin-bottom: 1.25rem; padding: 1.25rem; background: rgba(0, 112, 186, 0.05); border: 1.5px solid rgba(0, 112, 186, 0.45); border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                            <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0070ba"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.655h6.613c3.082 0 5.488.75 6.073 3.652.31 1.542.022 2.894-.856 4.02-.99 1.267-2.613 1.942-4.83 1.942H9.86l-.995 6.3a.64.64 0 0 1-.633.542l-1.156.016v.006z"/></svg>
                                Option A: Instant Settlement via PayPal / Cards
                            </div>
                            <span style="background: rgba(0, 112, 186, 0.2); color: #38bdf8; font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(0, 112, 186, 0.4);">
                                Instant Confirmation
                            </span>
                        </div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
                            Settle instantly in USD via PayPal or international cards (Visa, MasterCard, American Express). Your official Allocation Certificate certified by Director &amp; CEO Prasanga will be unlocked immediately.
                        </div>
                        <div id="order-detail-paypal-container" class="paypal-smart-container" style="min-height: 44px;"></div>
                    </div>

                    <!-- Option B: Direct Bank Cash Deposit + Slip Upload (Active Live Channel) -->
                    <div style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(212,175,55,0.03); border: 1.5px solid rgba(212,175,55,0.4); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
                            <div style="font-weight: 700; color: var(--color-gold); font-size: 0.95rem; display: flex; align-items: center; gap: 0.45rem;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
                                Direct Bank Deposit &amp; Slip Upload
                            </div>
                            <span style="background: rgba(46,125,50,0.2); color: #81c784; font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(46,125,50,0.4);">
                                &#x2714; Active Live Method
                            </span>
                        </div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem;">
                            Transfer or deposit the exact invoice amount into our Bank of Ceylon account, then upload your deposit receipt or mobile transfer screenshot below for rapid concierge validation.
                        </div>
                        <div class="bank-details-block" style="margin-bottom: 1.25rem;">
                            <div class="bank-detail-row"><span>Bank:</span><strong>${order.bankName || 'Bank of Ceylon'}</strong></div>
                            <div class="bank-detail-row"><span>Account Name:</span><strong>${order.accountName || 'Rock one wild tea'}</strong></div>
                            <div class="bank-detail-row"><span>Account No:</span><strong>${order.accountNo || '94945708'}</strong></div>
                            <div class="bank-detail-row"><span>Branch:</span><strong>${order.branch || 'Ettampitiya branch'}</strong></div>
                            ${order.referenceNote ? `<div class="bank-detail-row"><span>Reference:</span><strong>${order.referenceNote}</strong></div>` : `<div class="bank-detail-row"><span>Reference:</span><strong>${order.id}</strong></div>`}
                            <div class="bank-detail-row" style="border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 0.5rem; margin-top: 0.5rem;">
                                <span>Amount:</span><strong style="color: var(--color-gold);">${order.formattedPrice || `$${(Number(order.price) || 0).toFixed(2)}`}</strong>
                            </div>
                        </div>

                        <!-- Slip Upload Form -->
                        <form id="order-slip-form" class="admin-form" style="gap: 1rem;">
                            <div class="form-group">
                                <label>Attach Your Bank Deposit Slip (Image / PDF) *</label>
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
                            <button type="submit" class="btn btn-primary w-full" data-order-id="${order.id}" style="display:inline-flex; align-items:center; justify-content:center; gap:0.5rem; box-shadow: 0 4px 18px rgba(212,175,55,0.25);">
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
                        <div class="cert-download-sublabel">Gold estate crest • Wax seal engraving • Official allocation record</div>
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
                                ${isTour ? `
                                    <button class="admin-action-btn btn-resend-gatepass" data-id="${b.id}" data-email="${b.email}" title="Re-dispatch Official Gate Pass Email to Customer" style="display:inline-flex; align-items:center; gap:0.25rem; color:#81c784; border-color:rgba(46,125,50,0.4);">
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Gate Pass
                                    </button>
                                ` : ''}
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
        
        const selectedCountry = window.lastSelectedCheckoutCountry || 'Sri Lanka';
        const isSriLanka = selectedCountry === 'Sri Lanka';
        const currInfo = window.getCountryCurrency ? window.getCountryCurrency(selectedCountry) : (isSriLanka ? { code: 'LKR', symbol: 'Rs ', rate: 305, decimals: 0 } : { code: 'USD', symbol: '$', rate: 1.0, decimals: 2 });
        
        // Calculate promo discount if active
        let promoDiscountUSD = 0;
        let activePromo = window.activeCartPromo || null;
        if (activePromo && activePromo.percent) {
            promoDiscountUSD = Number((subtotalUSD * (activePromo.percent / 100)).toFixed(2));
        }
        const discountedSubtotalUSD = Math.max(0, subtotalUSD - promoDiscountUSD);

        const shippingUSD = window.TeaFactoryStore.getCartShippingTotal ? window.TeaFactoryStore.getCartShippingTotal(selectedCountry) : (window.calculateShippingFee ? window.calculateShippingFee(discountedSubtotalUSD, selectedCountry) : (isSriLanka ? 2.13 : 15.0));
        const grandTotalUSD = discountedSubtotalUSD + shippingUSD;

        const formattedSubtotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(subtotalUSD, currInfo) : `$${subtotalUSD.toFixed(2)}`;
        const formattedDiscount = promoDiscountUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(promoDiscountUSD, currInfo) : `$${promoDiscountUSD.toFixed(2)}`) : '';
        const formattedShipping = shippingUSD > 0 ? (window.formatAmountInCurrency ? window.formatAmountInCurrency(shippingUSD, currInfo) : `$${shippingUSD.toFixed(2)}`) : (window._t ? window._t('bespoke_complimentary', 'Complimentary') : 'Complimentary');
        const formattedGrandTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(grandTotalUSD, currInfo) : `$${grandTotalUSD.toFixed(2)}`;
        const grandTotalLKR = Math.round(grandTotalUSD * 305);
        const bankAmountFormatted = isSriLanka ? `Rs ${grandTotalLKR.toLocaleString()} LKR` : `${formattedGrandTotal} <span style="font-size:0.75rem; color:#cbd5e1; font-weight:normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>`;

        // Update header count label
        const countLabel = document.getElementById('cart-drawer-count-label');
        if (countLabel) {
            countLabel.textContent = `${totalCount} ${window._t ? window._t('cart_qty', 'item') : 'item'}${totalCount === 1 ? '' : 's'} ${window._t ? window._t('cart_drawer_title', 'in reserve bag') : 'in reserve bag'}`;
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
                    <h4 style="font-family: var(--font-serif); color: #ffffff; font-size: 1.35rem; margin-bottom: 0.5rem; letter-spacing: 0.5px;">${window._t ? window._t('cart_empty_title', 'Your Reserve Bag is Empty') : 'Your Reserve Bag is Empty'}</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.85rem; max-width: 320px; margin: 0 auto 2rem auto; line-height: 1.55;">
                        ${window._t ? window._t('cart_empty_sub', 'Explore our single-estate montane harvests and collector series chests to assemble your multi-item allocation.') : 'Explore our single-estate montane harvests and collector series chests to assemble your multi-item allocation.'}
                    </p>
                    <button type="button" class="btn btn-primary" onclick="if(window.appCloseCart){window.appCloseCart()} window.appSwitchTab ? window.appSwitchTab('catalog') : (document.getElementById('nav-catalog') &amp;&amp; document.getElementById('nav-catalog').click());" style="padding: 0.75rem 2rem; font-size: 0.88rem; display: inline-flex; align-items: center; gap: 0.45rem;">
                        <span>${window._t ? window._t('btn_browse_catalog', 'Explore Storefront Catalog') : 'Explore Storefront Catalog'}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            `;
            return;
        }

        // 2. Build Cart Items HTML for Right Column
        const itemsHtml = cart.map(item => {
            const itemPriceUSD = Number(item.price) || 0;
            const itemQty = Number(item.quantity) || 1;
            const itemLineUSD = itemPriceUSD * itemQty;
            const unitPrice = window.formatAmountInCurrency ? window.formatAmountInCurrency(itemPriceUSD, currInfo) : `$${itemPriceUSD.toFixed(2)}`;
            const lineTotal = window.formatAmountInCurrency ? window.formatAmountInCurrency(itemLineUSD, currInfo) : `$${itemLineUSD.toFixed(2)}`;
            const hasGifting = item.giftOptions && item.giftOptions.giftPackaging;

            return `
                <div class="checkout-item-row" data-cart-key="${item.cartKey}" data-unit-usd="${itemPriceUSD}" data-line-usd="${itemLineUSD}">
                    <!-- Thumbnail with Count Badge -->
                    <div class="checkout-thumb-wrap">
                        <img src="${item.image || 'images/Product.jpeg'}" alt="${item.name}" onerror="window.handleImageError &amp;&amp; window.handleImageError(this, 'product')" loading="lazy" decoding="async">
                        <span class="checkout-count-badge">${itemQty}</span>
                    </div>

                    <!-- Meta Details -->
                    <div class="checkout-item-meta">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                            <h5 class="checkout-item-name">${item.name}</h5>
                            <button type="button" class="cart-item-remove-btn" data-cart-key="${item.cartKey}" title="Remove item" style="background: none; border: none; color: rgba(255,255,255,0.35); cursor: pointer; padding: 0.15rem; display: flex; align-items: center; transition: color 0.2s;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>
                        <div class="checkout-item-sub">
                            <span>${item.category || (window._t ? window._t('leaf_grade_default', 'Tea Reserve') : 'Tea Reserve')}</span>
                            <span>&bull;</span>
                            <span>${item.weight || '100g'}</span>
                        </div>
                        <a href="#checkout-customer-reviews" class="cart-summary-reviews-link" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.73rem; color: #b8860b; text-decoration: none; margin-top: 0.2rem; cursor: pointer;">
                            <span style="color: #eab308; letter-spacing: 1px;">★★★★★</span>
                            <span style="font-weight: 700; color: #111827;">5.0</span>
                            <span style="color: #64748b;">(Verified Reviews)</span>
                        </a>

                        ${hasGifting ? `
                            <div style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.68rem; color: var(--color-gold); background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.25); border-radius: 4px; padding: 0.15rem 0.45rem; margin-top: 0.35rem;">
                                <span>Wax: ${item.giftOptions.waxSealColor}${item.giftOptions.monogramInitials ? ` &bull; ${item.giftOptions.monogramInitials}` : ''}</span>
                            </div>
                        ` : ''}

                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                            <div class="cart-qty-stepper" style="display: inline-flex; align-items: center; border: 1px solid rgba(212,175,55,0.3); border-radius: 6px; overflow: hidden; background: rgba(0,0,0,0.5);">
                                <button type="button" class="cart-qty-btn cart-qty-minus" data-cart-key="${item.cartKey}" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">-</button>
                                <span class="cart-qty-val" style="width: 28px; text-align: center; font-size: 0.78rem; font-weight: 600; color: #fff;">${itemQty}</span>
                                <button type="button" class="cart-qty-btn cart-qty-plus" data-cart-key="${item.cartKey}" style="background: none; border: none; color: var(--color-gold); width: 26px; height: 26px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.95rem;">+</button>
                            </div>
                            <span class="checkout-item-price">${lineTotal}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const signedUser = window.TeaFactoryStore.getCurrentUser ? window.TeaFactoryStore.getCurrentUser() : null;
        const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
        let defaultFirstName = '';
        let defaultLastName = '';
        if (signedUser && signedUser.full_name) {
            const parts = signedUser.full_name.trim().split(' ');
            defaultFirstName = parts[0] || '';
            defaultLastName = parts.slice(1).join(' ') || '';
        }
        const cartMinDate = new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0];

        // Seven Teahouse Style Tea Dossier values derived from cart items
        const products = (window.TeaFactoryStore && window.TeaFactoryStore.getProducts) ? window.TeaFactoryStore.getProducts() : [];
        const firstCartItem = cart[0] || {};
        const matchedProd = products.find(p => String(p.id) === String(firstCartItem.id)) || firstCartItem;

        const displayHeadline = matchedProd.headline || (cart.length > 1 ? `Artisanal Reserve Allocation (${cart.length} Handcrafted Selections)` : (matchedProd.name || 'Single-Estate Artisanal Harvest'));
        const displayAbout = matchedProd.about || matchedProd.desc || matchedProd.description || 'Crafted from tender wild tea buds harvested from high-elevation montane cloud forests. Each selection undergoes patient, traditional artisanal rolling and processing, revealing exceptional smoothness, natural honey sweetness, and layered refinement.';
        const displayOrigin = matchedProd.origin || ('Passara & Wellawela Sanctuary, Badulla District, Uva Highlands, Sri Lanka (Elevation: ' + (matchedProd.elevation || '1,240m – 1,320m') + '). High montane cloud forest enriched by natural granite springs and dry August katabatic winds.');
        const displayCaffeine = matchedProd.caffeine || 'Naturally balanced by exceptionally high concentrations of calming L-theanine, promoting alert tranquility and steady cognitive focus.';
        const displayPreparation = matchedProd.preparation || ('Water: ' + (matchedProd.steepTemp || '90°C – 95°C (194°F – 203°F)') + ' soft mountain or filtered water. Leaf-to-Water Ratio: 3.5g per 150ml (Gongfu gaiwan) or 2.5g per 250ml (Western teapot). Infusion Timing: 1st: 35s, 2nd: 50s, 3rd: 80s, 4th & 5th: 120s.');
        const displayBenefits = matchedProd.benefits || 'Rich in natural polyphenols, EGCG, and theaflavins. Supports daily metabolic wellness, cellular longevity, digestive harmony, and clean sustained alertness without jitters.';

        // 3. Render Modern Split Layout with Two-Stage Checkout Experience
        container.innerHTML = `
            <div class="checkout-split-layout">
                <!-- ==============================================
                     LEFT COLUMN: STAGE 1 (OVERVIEW & REVIEWS) & STAGE 2 (DELIVERY & PAYMENT)
                     ============================================== -->
                <div class="checkout-left-col">
                    <!-- ================= STAGE 1: OVERVIEW, TEA DOSSIER & CUSTOMER REVIEWS ================= -->
                    <div id="cart-stage-overview" class="checkout-stage-view">
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
                                    <button type="button" class="btn btn-outline" onclick="window.TeaFactoryStore.logoutCustomer &amp;&amp; window.TeaFactoryStore.logoutCustomer(); window.UIComponents.renderCartDrawer('cart-drawer-body'); window.appBindCartDrawerEvents &amp;&amp; window.appBindCartDrawerEvents();" style="font-size: 0.68rem; padding: 0.25rem 0.6rem; border-color: rgba(255,255,255,0.2); color: var(--color-text-muted);">
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
                                            You can order immediately as an anonymous guest. Or sign in to track your allocation in your patron portal.
                                        </p>
                                    </div>
                                    <button type="button" id="cart-guest-signin-btn" class="btn btn-outline" style="font-size: 0.72rem; padding: 0.35rem 0.8rem; border-color: var(--color-gold); color: var(--color-gold); white-space: nowrap;">
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
                                    <div class="checkout-accordion-item" data-accordion="about">
                                        <button type="button" class="checkout-accordion-header" aria-expanded="false">
                                            <span class="checkout-accordion-title">About This Tea</span>
                                            <span class="checkout-accordion-icon">+</span>
                                        </button>
                                        <div class="checkout-accordion-body" style="display: none;">
                                            <p style="font-weight: 700; font-size: 0.95rem; color: #1e293b; margin-bottom: 0.45rem;">${esc(matchedProd.name || 'Single-Estate Artisanal Harvest')}</p>
                                            <p>${esc(displayAbout)}</p>
                                            <div class="checkout-dossier-tags">
                                                <span class="checkout-dossier-tag">🌿 ${esc(matchedProd.leafGrade || 'Single Estate')}</span>
                                                <span class="checkout-dossier-tag">🏔️ ${esc(matchedProd.elevation || '1,240m - 1,320m')}</span>
                                                <span class="checkout-dossier-tag">🍃 ${totalCount} Reserve Item${totalCount === 1 ? '' : 's'}</span>
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
                        ${window.UIComponents && window.UIComponents.renderCheckoutReviewsHTML ? window.UIComponents.renderCheckoutReviewsHTML(matchedProd.name || 'Single-Estate Artisanal Harvest') : ''}

                        <!-- Bottom Stage 1 Call to Action -->
                        <div class="checkout-stage1-cta-wrap" style="margin-top: 1.5rem; text-align: center;">
                            <button type="button" class="btn btn-primary checkout-stage-proceed-btn" id="cart-stage-proceed-btn" style="width: 100%; padding: 1rem 1.5rem; font-size: 1rem; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; gap: 0.6rem; border-radius: 8px; box-shadow: 0 4px 14px rgba(212,175,55,0.25); cursor: pointer;">
                                <span>Buy Now &bull; Proceed to Delivery &amp; Payment</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    <!-- ================= STAGE 2: DELIVERY DETAILS & PAYMENT OPTIONS ================= -->
                    <div id="cart-stage-payment" class="checkout-stage-view" style="display: none;">
                        <!-- Top Step Navigation Bar -->
                        <div class="checkout-stage-nav-bar">
                            <button type="button" class="checkout-back-step-btn" id="cart-back-to-overview-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                <span>Back to Bag Items &amp; Reviews</span>
                            </button>
                            <div class="checkout-stage-step-pill">
                                <span class="step-dot"></span>
                                <span>Step 2 of 2 &bull; Delivery &amp; Payment</span>
                            </div>
                        </div>

                        <!-- Checkout Form -->
                        <form id="cart-checkout-form" style="display: flex; flex-direction: column; gap: 1rem;">
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
                                    <label class="form-label" for="cart-cust-country" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Destination Country *</label>
                                    <select class="form-input" id="cart-cust-country" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;">
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
                                        <option value="Worldwide" ${selectedCountry === 'Worldwide' ? 'selected' : ''}>🌍 Rest of World (USD $)</option>
                                    </select>
                                </div>

                                <div class="form-group" style="margin-bottom: 0;" id="cart-region-container">
                                    ${isSriLanka ? `
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
                                    ` : `
                                        <label class="form-label" for="cart-cust-region" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">State / Province / County *</label>
                                        <input class="form-input" type="text" id="cart-cust-region" placeholder="e.g. California / London / Tokyo" style="font-size: 0.82rem; padding: 0.65rem 0.75rem;" required>
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
                                    <label class="form-label" for="cart-cust-firstname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">First Name *</label>
                                    <input class="form-input" type="text" id="cart-cust-firstname" value="${esc(defaultFirstName)}" required placeholder="e.g. Ruwan" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="cart-cust-lastname" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Last Name *</label>
                                    <input class="form-input" type="text" id="cart-cust-lastname" value="${esc(defaultLastName)}" required placeholder="e.g. Perera" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="cart-cust-email" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Email Address (Tracking &amp; Certificate) *</label>
                                    <input class="form-input" type="email" id="cart-cust-email" value="${esc(signedUser ? signedUser.email : '')}" required placeholder="e.g. patron@rockonewild.com" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;" ${signedUser ? 'readonly style="opacity:0.88;"' : ''}>
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="cart-cust-phone" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Mobile Phone (Courier Updates) *</label>
                                    <input class="form-input" type="tel" id="cart-cust-phone" value="${esc(signedUser ? signedUser.phone || '' : '')}" required placeholder="e.g. +94 77 123 4567" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                            </div>

                            <div class="form-group" style="margin-bottom: 0.75rem;">
                                <label class="form-label" for="cart-cust-address" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Street Address *</label>
                                <input class="form-input" type="text" id="cart-cust-address" required placeholder="e.g. 42 Highland View Road" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                            </div>

                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="cart-cust-suite" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Apt / Suite</label>
                                    <input class="form-input" type="text" id="cart-cust-suite" placeholder="e.g. Apt 4B" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="cart-cust-city" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">City / Town *</label>
                                    <input class="form-input" type="text" id="cart-cust-city" required placeholder="e.g. Colombo / London" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                                <div class="form-group" style="margin-bottom: 0;">
                                    <label class="form-label" for="cart-cust-postal" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Postal Code *</label>
                                    <input class="form-input" type="text" id="cart-cust-postal" required placeholder="e.g. 00700 / SW1A 1AA" style="font-size: 0.85rem; padding: 0.65rem 0.85rem;">
                                </div>
                            </div>
                        </div>

                        <!-- Insured Shipping Method -->
                        <div class="checkout-step-card">
                            <div class="checkout-step-header">
                                <div class="checkout-step-title">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                    <span>3. Insured Courier Delivery</span>
                                </div>
                            </div>

                            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                                <label class="radio-card" id="cart-shipping-card-ems" style="display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.85rem 1rem; border: 1.5px solid var(--color-gold); border-radius: 10px; background: rgba(212,175,55,0.08); cursor: pointer;">
                                    <input type="radio" name="cart-shipping-method" id="cart-ship-ems" value="ems_express" checked style="margin-top: 0.25rem;">
                                    <div style="flex: 1;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                                            <strong id="cart-shipping-ems-title" style="color: var(--color-text-primary); font-size: 0.88rem;">${isSriLanka ? 'Sri Lanka Post EMS Express (Pre-paid)' : 'Sri Lanka Post EMS International Priority Air'}</strong>
                                            <span id="cart-shipping-ems-price-pill" style="color: ${shippingUSD > 0 ? '#15803d' : 'var(--color-gold)'}; font-size: 0.8rem; font-weight: 700;">${formattedShipping}</span>
                                        </div>
                                        <p id="cart-shipping-ems-desc" style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.4; margin: 0;">
                                            ${isSriLanka ? 'Door-to-door express parcel courier with official Sri Lanka Post tracking ID. Settle online via PayPal/Card or Direct Bank Transfer.' : 'Official Sri Lanka Post EMS International Priority Air Courier with end-to-end tracking number. Estimated transit: 5-10 business days.'}
                                        </p>
                                    </div>
                                </label>

                                <label class="radio-card" id="cart-shipping-card-cod" style="display: ${isSriLanka ? 'flex' : 'none'}; align-items: flex-start; gap: 0.75rem; padding: 0.85rem 1rem; border: 1.5px solid #d1d5db; border-radius: 10px; background: #ffffff; cursor: pointer;">
                                    <input type="radio" name="cart-shipping-method" id="cart-ship-cod" value="cod" style="margin-top: 0.25rem;">
                                    <div style="flex: 1;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                                            <strong style="color: var(--color-text-primary); font-size: 0.88rem;">Cash on Delivery (COD &bull; Pay to Courier)</strong>
                                            <span id="cart-shipping-cod-price-pill" style="color: ${shippingUSD > 0 ? '#15803d' : 'var(--color-gold)'}; font-size: 0.8rem; font-weight: 700;">${formattedShipping}</span>
                                        </div>
                                        <p style="font-size: 0.72rem; color: var(--color-text-muted); line-height: 1.4; margin: 0;">
                                            Pay cash upon parcel delivery at your doorstep anywhere in Sri Lanka.
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <!-- Payment Method Section -->
                        <div class="checkout-step-card" id="cart-payment-step-card">
                            <div class="checkout-step-header">
                                <div class="checkout-step-title">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    <span>4. Payment Method &amp; Order Confirmation</span>
                                </div>
                            </div>

                            <!-- COD Panel -->
                            <div id="cart-pay-panel-cod" style="display: none;">
                                <div style="background: rgba(37,211,102,0.08); border: 1.5px solid rgba(37,211,102,0.4); border-radius: 10px; padding: 1.15rem; text-align: center; margin-bottom: 1rem;">
                                    <h4 style="color: #4ade80; font-size: 1.05rem; margin-bottom: 0.35rem; font-weight: 700;">Cash on Delivery (COD) Active</h4>
                                    <p style="font-size: 0.78rem; color: #cbd5e1; line-height: 1.5; margin: 0 0 0.85rem 0;">
                                        The Sri Lanka Post EMS courier will collect the cash amount upon parcel handover.
                                    </p>
                                    <div style="background: rgba(0,0,0,0.45); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.65rem 1rem; display: inline-flex; align-items: center; gap: 0.75rem;">
                                        <span style="font-size: 0.78rem; color: #9ca3af;">Payable to Courier:</span>
                                        <strong id="cart-cod-amount-display" style="font-size: 1.25rem; color: var(--color-gold); font-family: monospace;">Rs ${grandTotalLKR.toLocaleString()} LKR</strong>
                                    </div>
                                </div>
                            </div>

                            <!-- Pre-Paid Panels -->
                            <div id="cart-pay-panel-prepaid">
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
                                <div id="cart-pay-panel-bank" class="pay-panel pay-panel-bank active">
                                    <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.95rem;">
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#ffffff;">Bank of Ceylon</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:var(--color-gold);">Rock one wild tea</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:#ffffff; font-family:monospace; font-size:0.95rem; letter-spacing:1px;">94945708</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#ffffff;">Ettampitiya branch</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; border-top:1px dashed rgba(212,175,55,0.2); padding-top:0.45rem; margin-top:0.35rem; font-size:0.85rem;"><span style="color:var(--color-text-muted);">Amount Due:</span><strong id="cart-bank-amount-display" style="color:var(--color-gold); font-size:1rem;">${bankAmountFormatted}</strong></div>
                                    </div>
                                    <div class="form-group" style="margin-top:0.65rem; margin-bottom: 0;">
                                        <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Bank Transfer Slip *</label>
                                        <div class="file-upload-zone" id="cart-bank-slip-zone">
                                            <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                            <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse receipt file</span></div>
                                            <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                            <input type="file" id="cart-bank-slip" accept="image/*,.pdf" style="display:none;">
                                        </div>
                                        <div id="cart-slip-preview" class="slip-preview" style="display:none;"></div>
                                    </div>
                                </div>

                                <!-- Cash Deposit Panel -->
                                <div id="cart-pay-panel-slip" class="pay-panel pay-panel-slip">
                                    <div class="bank-details-block" style="background: rgba(4,14,8,0.7); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 0.95rem;">
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Bank Name:</span><strong style="color:#ffffff;">Bank of Ceylon</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Name:</span><strong style="color:var(--color-gold);">Rock one wild tea</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Account Number:</span><strong style="color:#ffffff; font-family:monospace; font-size:0.95rem; letter-spacing:1px;">94945708</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.8rem;"><span style="color:var(--color-text-muted);">Branch:</span><strong style="color:#ffffff;">Ettampitiya branch</strong></div>
                                        <div class="bank-detail-row" style="display:flex; justify-content:space-between; border-top:1px dashed rgba(212,175,55,0.2); padding-top:0.45rem; margin-top:0.35rem; font-size:0.85rem;"><span style="color:var(--color-text-muted);">Amount Due:</span><strong id="cart-deposit-amount-display" style="color:var(--color-gold); font-size:1rem;">${bankAmountFormatted}</strong></div>
                                    </div>
                                    <div class="form-group" style="margin-top:0.65rem; margin-bottom: 0;">
                                        <label style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Upload Cash Deposit Slip *</label>
                                        <div class="file-upload-zone" id="cart-cash-slip-zone">
                                            <div class="file-upload-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div>
                                            <div class="file-upload-text">Drag &amp; drop or <span class="file-upload-link">browse deposit slip</span></div>
                                            <div class="file-upload-hint">JPG, PNG or PDF &bull; Max 5MB</div>
                                            <input type="file" id="cart-cash-slip" accept="image/*,.pdf" style="display:none;">
                                        </div>
                                        <div id="cart-cash-slip-preview" class="slip-preview" style="display:none;"></div>
                                    </div>
                                </div>

                                <!-- PayPal Panel -->
                                <div id="cart-pay-panel-paypal" class="pay-panel pay-panel-paypal">
                                    <div style="background: #fbf9f5; border: 1.5px solid #0079C1; border-radius: 8px; padding: 1.15rem;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0079C1"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.78.78 0 0 1 .77-.643h7.14c3.04 0 5.25.707 6.42 2.054 1.157 1.332 1.34 3.23.542 5.645-.034.103-.073.208-.117.313-.884 2.658-2.825 4.14-5.772 4.407l-.234.015h-2.15a.91.91 0 0 0-.9.774l-.994 4.887a.641.641 0 0 1-.613.519zm7.14-15.76h-5.9a.28.28 0 0 0-.276.23L5.352 20.337h2.72l.9-4.428a1.41 1.41 0 0 1 1.385-1.129h2.15c2.475-.224 4.123-1.464 4.887-3.76.037-.09.07-.179.1-.27.674-2.04.53-3.567-.432-4.673-.956-1.098-2.766-1.517-5.046-1.517z"/></svg>
                                                <strong style="color: var(--color-text-primary); font-size: 0.95rem;">PayPal &bull; Instant Online Settlement</strong>
                                            </div>
                                        </div>
                                        <div style="background: #ffffff; border: 1px solid #e8e4df; border-radius: 6px; padding: 0.55rem 0.85rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; align-items: center;">
                                            <span style="font-size: 0.76rem; color: #4b5563;">USD Settlement Amount:</span>
                                            <strong id="cart-paypal-amount-display" style="font-size: 1.05rem; color: #0284c7; font-family: monospace;">${currInfo.code === 'USD' ? `$${grandTotalUSD.toFixed(2)} USD` : `${formattedGrandTotal} ($${grandTotalUSD.toFixed(2)} USD)`}</strong>
                                        </div>
                                        <div id="cart-paypal-button-container" class="paypal-smart-container" style="min-height: 44px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Bespoke Notes -->
                        <div class="checkout-step-card">
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" for="cart-cust-notes" style="font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-gold);">Concierge Notes &amp; Special Handling</label>
                                <textarea class="form-input" id="cart-cust-notes" rows="2" placeholder="e.g. Please include bespoke wax seal on the Silver Tips tin, gift wrapping instructions, etc." style="font-size: 0.82rem; padding: 0.65rem 0.75rem;"></textarea>
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
                                <span>Reserve Bag Summary</span>
                            </div>
                            <span style="font-size: 0.72rem; color: #86efac; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); border-radius: 12px; padding: 0.15rem 0.55rem; font-weight: 600;">${totalCount} ${totalCount === 1 ? 'item' : 'items'}</span>
                        </div>

                        <!-- Cart Items List with Badge Counts -->
                        <div class="checkout-items-scroll" style="display: flex; flex-direction: column; max-height: 320px; overflow-y: auto;">
                            ${itemsHtml}
                        </div>

                        <!-- Promo Code / Voucher Box -->
                        <div class="checkout-discount-box">
                            <input type="text" id="cart-promo-code" class="checkout-discount-input" placeholder="Discount code or gift card" value="${activePromo ? activePromo.code : ''}" style="background:#ffffff !important; color:#111827 !important; border:1.5px solid #d1d5db !important;">
                            <button type="button" id="cart-apply-promo-btn" class="checkout-discount-btn">${activePromo ? 'Remove' : 'Apply'}</button>
                        </div>

                        <!-- Available Privilege Coupons -->
                        ${window.renderCheckoutCouponsHTML ? window.renderCheckoutCouponsHTML(activePromo ? activePromo.code : '', 'cart-promo-code') : ''}

                        <!-- Savings Pill -->
                        <div class="checkout-savings-pill" id="cart-savings-pill" style="display: ${promoDiscountUSD > 0 ? 'flex' : 'none'};">
                            <span style="display: flex; align-items: center; gap: 0.35rem;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                <span id="cart-savings-label">${activePromo ? activePromo.label.toUpperCase() : 'TOTAL SAVINGS'}</span>
                            </span>
                            <strong id="cart-savings-amt">-${formattedDiscount}</strong>
                        </div>

                        <!-- Line Items Breakdown -->
                        <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem; padding-top: 0.25rem;">
                            <div class="checkout-totals-row">
                                <span>Subtotal</span>
                                <strong id="cart-summary-subtotal" style="color: var(--color-text-primary);">${formattedSubtotal}</strong>
                            </div>
                            <div class="checkout-totals-row" id="cart-discount-row" style="display: ${promoDiscountUSD > 0 ? 'flex' : 'none'}; color: #15803d;">
                                <span>Promotional Savings</span>
                                <strong id="cart-discount-amt">-${formattedDiscount}</strong>
                            </div>
                            <div class="checkout-totals-row">
                                <span id="cart-summary-shipping-label">${isSriLanka ? 'Sri Lanka Post EMS Courier' : 'Sri Lanka Post EMS Priority Air'}</span>
                                <span id="cart-summary-shipping" style="color: ${shippingUSD > 0 ? '#15803d' : 'var(--color-gold)'}; font-weight: 600;">${formattedShipping}</span>
                            </div>
                            <div class="checkout-grand-total-row">
                                <div>
                                    <strong id="cart-summary-total-title" style="font-size: 0.95rem; color: var(--color-text-primary);">Total Due (${currInfo.code})</strong>
                                    <span id="cart-lkr-approx" style="display: block; font-size: 0.72rem; color: #4b5563; font-weight: normal;">(≈ Rs ${grandTotalLKR.toLocaleString()} LKR)</span>
                                </div>
                                <strong id="cart-summary-total" style="font-size: 1.45rem; color: var(--color-gold); font-family: var(--font-serif);">${formattedGrandTotal}</strong>
                            </div>
                        </div>

                        <!-- Master Action Button -->
                        <button type="button" id="cart-summary-submit-btn" class="checkout-action-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span id="cart-action-btn-text">Buy Now &bull; ${formattedGrandTotal}</span>
                        </button>

                        <!-- Trust Badges -->
                        <div class="checkout-trust-badges">
                            <span>🔒 256-Bit SSL Encrypted</span>
                            <span>🇱🇰 Direct Single-Estate Dispatch</span>
                            <span>📜 Heritage Certified</span>
                        </div>

                        <div class="checkout-footer-links">
                            <a href="#terms" onclick="event.preventDefault();">Terms and policies</a>
                            <span>&bull;</span>
                            <a href="#privacy" onclick="event.preventDefault();">Your Privacy Choices <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
                        </div>

                        <!-- Clear cart link -->
                        <div style="text-align: center; margin-top: 0.25rem;">
                            <button type="button" id="btn-clear-cart" style="background: none; border: none; color: var(--color-text-muted); font-size: 0.75rem; cursor: pointer; text-decoration: underline;">
                                ${window._t ? window._t('btn_clear_cart', 'Empty Entire Reserve Bag') : 'Empty Entire Reserve Bag'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // =========================================================================
    // SEVEN TEAHOUSE LUXURY PURCHASING & DETAIL MODAL (SEVENTEAHOUSE.COM PARITY)
    // =========================================================================
    renderSevenTeahouseDetailModal(item, type = 'product', options = {}) {
        const modal = document.getElementById('product-detail-modal');
        const container = document.getElementById('product-detail-body-container');
        const breadcrumbEl = document.getElementById('product-detail-breadcrumb');
        if (!modal || !container) return;

        // 1. Resolve core data
        const isTour = type === 'tour';
        const isBox = type === 'box';
        const isProd = !isTour && !isBox;

        const title = item.name || (isTour ? 'Gongfu-Style Black Tea Brewing Experience' : (isBox ? 'Collector Chest Reserve' : 'Single-Estate Artisanal Tea'));
        const basePrice = Number(item.price !== undefined ? item.price : (item.price_usd !== undefined ? item.price_usd : (item.quotedPrice || 28.00))) || 28.00;
        const baseLKR = Number(item.price_lkr || Math.round(basePrice * 305));
        const originalPrice = (basePrice * 1.176).toFixed(2);
        const shipFee = Number(item.shipping_fee_usd !== undefined ? item.shipping_fee_usd : (item.shippingCharge !== undefined ? item.shippingCharge : (item.shippingFee !== undefined ? item.shippingFee : (item.id === 'prod-rock-one-black-tea' ? 19.0 : 0)))) || 0;
        const netWt = item.weight || item.netWeight || (isProd ? '50g Pack' : '');
        
        let breadcrumbText = 'Shop &bull; Single-Estate Artisanal Harvest';
        if (isTour) breadcrumbText = 'Experiences &bull; Private Sanctuary Gongfu Tasting';
        if (isBox) breadcrumbText = 'Collector Reserve &bull; Handcrafted Teak & Brass Chest';
        if (breadcrumbEl) breadcrumbEl.innerHTML = breadcrumbText;

        // 2. Resolve image gallery (6 to 8 luxury images)
        let primaryImg = item.image || item.image_url || (isTour ? 'images/Factory inside.jpeg' : (isBox ? 'images/Gift Box.jpeg' : 'images/Tea in cup.jpeg'));
        let galleryImages = [];
        if (Array.isArray(item.images) && item.images.length > 0) {
            galleryImages = [...item.images];
            if (isProd) {
                const extraBackups = ['images/Tea in cup.jpeg', 'images/Tea estate.jpeg', 'images/Factory inside.jpeg', 'images/Ceylon tea.jpg'];
                extraBackups.forEach(b => {
                    if (!galleryImages.includes(b) && galleryImages.length < 5) galleryImages.push(b);
                });
            }
        } else if (Array.isArray(item.gallery) && item.gallery.length > 0) {
            galleryImages = [...item.gallery];
        } else if (isTour) {
            galleryImages = [
                'images/Factory inside.jpeg',
                'images/Tea estate.jpeg',
                'images/Tea in cup.jpeg',
                'images/Rock One wild Tea factory.jpeg',
                'images/Ceylon tea.jpg',
                'images/Product.jpeg',
                'images/Gift Box.jpeg'
            ];
        } else if (isBox) {
            galleryImages = [
                'images/Gift Box.jpeg',
                'images/tea box.jpeg',
                'images/Tea in cup.jpeg',
                'images/product.jpeg',
                'images/Factory inside.jpeg',
                'images/Tea estate.jpeg',
                'images/Ceylon tea.jpg'
            ];
        } else {
            galleryImages = [
                primaryImg,
                'images/Tea in cup.jpeg',
                'images/product.jpeg',
                'images/Product.jpeg',
                'images/Gift Box.jpeg',
                'images/Factory inside.jpeg',
                'images/Tea estate.jpeg',
                'images/Ceylon tea.jpg'
            ];
        }
        // Deduplicate
        galleryImages = Array.from(new Set(galleryImages)).filter(Boolean);
        if (galleryImages.length === 0) galleryImages = [primaryImg];

        // 3. Variants setup
        let variants = [];
        if (isProd) {
            if (Array.isArray(item.variants) && item.variants.length > 0) {
                variants = item.variants;
            } else if (item.id === 'prod-rock-one-black-tea') {
                variants = [
                    { id: 'v1', label: '1x 50g Pack ($17.00)', multiplier: 1.0, stock: 50, default: true },
                    { id: 'v2', label: '2x 50g Packs (100g) ($32.00)', multiplier: 1.882, stock: 25 },
                    { id: 'v3', label: '5x 50g Master Pack (250g) ($75.00)', multiplier: 4.412, stock: 12 }
                ];
            } else {
                variants = [
                    { id: 'v1', label: 'Tin - 50g/1.8 oz', multiplier: 1.0, stock: 16, default: true },
                    { id: 'v2', label: 'Reserve Pouch - 100g/3.5 oz', multiplier: 1.85, stock: 11 },
                    { id: 'v3', label: 'Estate Chest - 250g/8.8 oz', multiplier: 4.20, stock: 6 }
                ];
            }
        } else if (isTour) {
            variants = [
                { id: 'v1', label: 'Standard Connoisseur (1.5h)', multiplier: 1.0, stock: 8, default: true },
                { id: 'v2', label: 'Master Sommelier Gongfu (2.5h)', multiplier: 1.65, stock: 5 },
                { id: 'v3', label: 'Sanctuary Terroir Walking Tour (3.5h)', multiplier: 2.30, stock: 4 }
            ];
        } else {
            variants = [
                { id: 'v1', label: 'Handcrafted Teak Chest (Standard)', multiplier: 1.0, stock: 10, default: true },
                { id: 'v2', label: 'Custom Brass Monogrammed Edition', multiplier: 1.25, stock: 5 },
                { id: 'v3', label: 'Grand Master Sommelier Reserve Suite', multiplier: 1.60, stock: 3 }
            ];
        }

        // 4. Descriptions & Accordion Content
        const shortDesc = item.desc || item.description || (isTour 
            ? 'Begin your Rock One Wild Tea journey with a ceremonial Gongfu brewing session using our single-estate handcrafted Ceylon black tea, revealing delicate floral sweetness, velvety mouthfeel, and sustained elegance.'
            : (isBox 
                ? 'An heirloom collector chest crafted from certified sustainable mountain teak with hand-cast brass hardware, wax-sealed vials of single-origin leaves, and a numbered estate provenance certificate.'
                : 'Rare and patiently crafted, this single-estate tea undergoes traditional artisanal processing, revealing a mellow sweetness, silky texture, and remarkable depth across successive infusions.'));

        const quoteBanner = item.headline || (isTour 
            ? 'Handcrafted Gongfu brewing rituals celebrating 1,320m high-elevation Uva terroir'
            : (isBox 
                ? 'Numbered heirloom teak chests housing the pinnacle of our wild harvest'
                : 'Patiently crafted for a smooth, mellow sweetness and lingering floral finish'));

        const accordions = [];

        // 1. Philosophy Accordion (When provided by client)
        if (item.philosophy) {
            accordions.push({
                id: 'philosophy',
                title: 'Our Philosophy',
                open: true,
                content: `
                    <div style="background: rgba(212,175,55,0.06); border-left: 3px solid var(--color-gold); padding: 0.85rem 1rem; border-radius: 4px; margin-bottom: 0.8rem;">
                        <p style="font-style: italic; color: var(--color-gold); font-size: 1.05rem; margin: 0; font-weight: 600;">
                            &ldquo;Small Batches. Personal Care. Exceptional Ceylon Tea.&rdquo;
                        </p>
                    </div>
                    <p style="line-height: 1.7; color: #cbd5e1; margin-bottom: 0.6rem;">
                        We believe that exceptional tea begins with nature and is perfected through craftsmanship.
                    </p>
                    <p style="line-height: 1.7; color: #cbd5e1; margin-bottom: 0.6rem;">
                        Every batch reflects our family’s dedication, respect for our natural surroundings and passion for sharing the distinctive character of Ceylon tea with the world.
                    </p>
                    <p style="font-weight: 600; color: #4ade80; margin: 0; font-size: 0.95rem;">
                        &mdash; From Our Wild Forest Tea Garden to Your Cup.
                    </p>
                `
            });
        }

        // 2. Artisan Specifications Accordion
        if (item.id === 'prod-rock-one-black-tea' || item.cultivar) {
            accordions.push({
                id: 'specs',
                title: 'Artisan Specifications & Terroir',
                open: !item.philosophy,
                content: `
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem 1.25rem; font-size: 0.88rem; line-height: 1.5;">
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Tea Type</span>
                            <strong style="color: #f1f5f9;">Handcrafted Ceylon Black Tea</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Tea Clone / Cultivar</span>
                            <strong style="color: #f1f5f9;">TRI 2025 (Selected Elite Clone)</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Origin</span>
                            <strong style="color: #f1f5f9;">Uva Medium Growing Region, Sri Lanka</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Elevation</span>
                            <strong style="color: #f1f5f9;">Approximately 3,000–5,000 feet</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Tea Garden</span>
                            <strong style="color: #f1f5f9;">Family-Owned Tea Garden</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Growing Environment</span>
                            <strong style="color: #f1f5f9;">Natural Forest-Surrounded Tea Garden</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Processing Method</span>
                            <strong style="color: #f1f5f9;">Traditional Hand-Rolled Black Tea Processing</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Production Style</span>
                            <strong style="color: #f1f5f9;">Artisan Small-Batch / Limited Quantity</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Flavour Profile</span>
                            <strong style="color: #f1f5f9;">Smooth, Naturally Sweet &amp; Delicate Floral</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Aroma</span>
                            <strong style="color: #f1f5f9;">Gentle Floral and Honey-Like Character</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Regional Identity</span>
                            <strong style="color: #f1f5f9;">Distinctive Uva Seasonal Tea-Growing Character</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Recommended Serving</span>
                            <strong style="color: #f1f5f9;">Morning and Afternoon</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Net Weight</span>
                            <strong style="color: #f1f5f9;">50g per Pack</strong>
                        </div>
                        <div style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem;">
                            <span style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; display: block;">Caffeine</span>
                            <strong style="color: #f1f5f9;">Naturally Contains Caffeine</strong>
                        </div>
                    </div>
                `
            });
        }

        // 3. About This Tea Accordion
        accordions.push({
            id: 'about',
            title: isTour ? 'About This Experience' : (isBox ? 'About This Collector Chest' : 'About This Tea'),
            open: accordions.length === 0,
            content: isTour
                ? '<p>Immerse yourself in our private tea sanctuary. Your estate host introduces the biodiverse terroir of our 1,320m mountain ridges, the art of hand plucking, and leads you through multi-step Gongfu infusions in authentic purple clay gaiwans.</p><ul style="padding-left:1.2rem; margin-top:0.5rem; line-height:1.7;"><li>Introduction to Uva Medium wild tea gardens</li><li>Observation of whole-leaf leaf opening under controlled heat</li><li>Tasting across 5 separate infusions with flavor notes journal</li></ul>'
                : (isBox
                    ? '<p>Each collector chest is an individual work of art made from seasoned highland teakwood with hand-burnished solid brass accents. Inside are serialized glass vials preserved under inert nitrogen seal, a numbered estate certificate signed by our Master Tea Maker, and tasting accessories.</p>'
                    : (item.about 
                        ? '<p><strong>' + title + '</strong></p><p>' + item.about + '</p><p>Crafted exclusively from tender shoots plucked during the dry August-September quality season when cool mountain winds concentrate natural sugars, aromatic linalools, and floral antioxidants in every bud.</p>'
                        : '<p><strong>' + title + '</strong></p><p>' + shortDesc + '</p><p>Crafted exclusively from tender shoots plucked during the dry August-September quality season when cool mountain winds concentrate natural sugars, aromatic linalools, and floral antioxidants in every bud.</p>'))
        });

        // 4. Origin & Terroir
        accordions.push({
            id: 'origin',
            title: 'Origin & Terroir',
            open: false,
            content: item.origin 
                ? '<p>' + item.origin + '</p>'
                : '<p><strong>Estate Sanctuary:</strong> Rock One Wild Tea Sanctuary, Passara, Badulla District, Uva Highlands, Sri Lanka.</p><p><strong>Elevation:</strong> 1,240m &ndash; 1,320m above sea level (High Montane Cloud Forest).</p><p><strong>Terroir Dynamics:</strong> Pristine organic soil enriched by centuries of wild montane leaf litter, natural granite springs, and the famous dry-cold August katabatic winds that produce the distinctive Uva seasonal character.</p>'
        });

        // 5. Caffeine Level / Duration
        accordions.push({
            id: 'caffeine',
            title: isTour ? 'Duration & Group Size' : 'Caffeine Level',
            open: false,
            content: isTour
                ? '<p><strong>Duration:</strong> Approximately 1.5 to 2 hours of unhurried ceremonial steeping.</p><p><strong>Group Size:</strong> Intimate private group (maximum 8 guests per session) to ensure personalized master sommelier guidance.</p><p><strong>Sanctuary Schedule:</strong> Monday through Saturday (Closed Sundays for sanctuary biodiversity rest).</p>'
                : (item.caffeine 
                    ? '<p>' + item.caffeine + '</p>'
                    : '<p><strong>Caffeine Classification:</strong> Medium (approx. 38mg &ndash; 45mg per 250ml brewed cup).</p><p>Naturally balanced by exceptionally high concentrations of calming L-theanine, promoting alert tranquility and steady cognitive focus without jittery spikes or crashes.</p>')
        });

        // 6. Preparation & Gongfu Steeping
        accordions.push({
            id: 'preparation',
            title: isTour ? 'Dress Code & Visitor Guidelines' : 'Preparation & Gongfu Steeping',
            open: false,
            content: isTour
                ? '<p><strong>Attire:</strong> Comfortable mountain footwear and light casual attire suitable for cool highland mornings (18&deg;C &ndash; 24&deg;C).</p><p><strong>Photography:</strong> Personal photography of our terraced gardens and ceremonial tables is warmly welcomed.</p><p><strong>Arrival:</strong> Please arrive 10 minutes prior to your reserved slot at the Welcome Pavilion.</p>'
                : (item.preparation 
                    ? '<p>' + item.preparation + '</p>'
                    : '<p><strong>Water Temperature:</strong> 90&deg;C &ndash; 95&deg;C (194&deg;F &ndash; 203&deg;F), soft mountain or filtered water recommended.</p><p><strong>Leaf-to-Water Ratio:</strong> 3.5g per 150ml (Gongfu gaiwan) or 2.5g per 250ml (Western teapot).</p><p><strong>Infusion Timing:</strong></p><ul style="padding-left:1.2rem; line-height:1.7;"><li>1st Infusion: 35 seconds (bright aroma & floral bouquet)</li><li>2nd Infusion: 50 seconds (silky body & caramel notes)</li><li>3rd Infusion: 80 seconds (deep mineral sweetness)</li><li>4th & 5th Infusions: 120 seconds (lingering honey finish)</li></ul>')
        });

        // 7. Tea Benefits
        accordions.push({
            id: 'benefits',
            title: isTour ? 'Inclusions & Take-Home Gifts' : (isBox ? 'Preservation & Storage' : 'Tea Benefits & Freshness Guarantee'),
            open: false,
            content: isTour
                ? "<p>Every guest receives a complimentary commemorative Estate Tasting Cup, a personalized Sommelier Certificate, and a sample tin of the day's featured harvest.</p>"
                : (item.benefits 
                    ? '<p>' + item.benefits + '</p>'
                    : '<p><strong>Antioxidant Richness:</strong> Abundant theaflavins, thearubigins, and polyphenols supporting cardiovascular wellness and cellular rejuvenation.</p><p><strong>Nitrogen Vacuum Seal:</strong> Packed fresh on the estate within 48 hours of sorting to lock in volatile essential oils and pristine garden freshness for up to 24 months.</p>')
        });

        // 5. Construct full Seven Teahouse HTML markup
        container.innerHTML = `
            <div class="seventea-container">
                <!-- TOP BREADCRUMB / BRAND EYEBROW -->
                <div class="seventea-brand-eyebrow">
                    <span>SEVEN TEAHOUSE &bull; ROCK ONE WILD ESTATE</span>
                </div>

                <!-- MAIN TWO-COLUMN SPLIT GRID -->
                <div class="seventea-main-grid">
                    
                    <!-- LEFT COLUMN: HERO IMAGE, THUMBNAILS, QUOTE & ACCORDIONS -->
                    <div class="seventea-left-col">
                        
                        <!-- Hero Image Display -->
                        <div class="seventea-hero-box" id="seventea-hero-box">
                            <img src="${primaryImg}" id="seventea-hero-img" alt="${title}" class="seventea-hero-img" decoding="async">
                            <button type="button" class="seventea-zoom-badge" id="seventea-zoom-badge" aria-label="Zoom Image">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </button>
                        </div>

                        <!-- 6 to 8 Thumbnail Preview Strip -->
                        <div class="seventea-thumb-strip" id="seventea-thumb-strip">
                            ${galleryImages.map((imgSrc, idx) => `
                                <button type="button" class="seventea-thumb-item ${idx === 0 ? 'active' : ''}" data-src="${imgSrc}" aria-label="View photo ${idx + 1}">
                                    <img src="${imgSrc}" alt="Thumbnail ${idx + 1}" onerror="window.handleImageError && window.handleImageError(this, 'product')">
                                </button>
                            `).join('')}
                        </div>

                        <!-- Poetic Sub-Banner Quote -->
                        <div class="seventea-poetic-banner">
                            <h3>${quoteBanner}</h3>
                        </div>

                        <!-- Expandable Collapsible Accordions (Parity with Screenshot 3) -->
                        <div class="seventea-accordions" id="seventea-accordions">
                            ${accordions.map(acc => `
                                <div class="seventea-accordion-item ${acc.open ? 'expanded' : ''}" data-id="${acc.id}">
                                    <button type="button" class="seventea-accordion-header" aria-expanded="${acc.open ? 'true' : 'false'}">
                                        <span class="seventea-accordion-title">${acc.title}</span>
                                        <span class="seventea-accordion-icon">${acc.open ? '&minus;' : '&#43;'}</span>
                                    </button>
                                    <div class="seventea-accordion-body" style="${acc.open ? 'display: block;' : 'display: none;'}">
                                        ${acc.content}
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                    </div>

                    <!-- RIGHT COLUMN: DETAILS, PRICING, VARIANTS, ACTIONS & PERKS -->
                    <div class="seventea-right-col">
                        
                        <!-- Title -->
                        <h1 class="seventea-title">${title}</h1>

                        <!-- Gold Star Rating -->
                        <div class="seventea-rating-row">
                            <span class="seventea-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                            <span class="seventea-rating-val">5.0</span>
                            <span class="seventea-rating-count">(2 reviews)</span>
                        </div>

                        <!-- Strikethrough & Current Price -->
                        <div class="seventea-pricing-row">
                            <span class="seventea-strikethrough-price" id="seventea-orig-price">$${originalPrice}</span>
                            <span class="seventea-current-price" id="seventea-calc-price">$${basePrice.toFixed(2)}</span>
                            <span class="seventea-discount-badge">15% OFF</span>
                        </div>

                        ${isProd ? `
                        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem; margin: 0.45rem 0 0.85rem 0; font-size: 0.82rem;">
                            <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.25); padding: 0.28rem 0.65rem; border-radius: 4px; color: #cbd5e1;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d4af37" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                <span>Shipping: <strong style="color: var(--color-gold);">${shipFee > 0 ? `$${shipFee.toFixed(2)} Flat Worldwide` : 'Complimentary'}</strong></span>
                            </div>
                            ${netWt ? `
                            <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); padding: 0.28rem 0.65rem; border-radius: 4px; color: #cbd5e1;">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                                <span>Weight: <strong style="color: #f1f5f9;">${netWt}</strong></span>
                            </div>
                            ` : ''}
                        </div>
                        ` : ''}

                        <!-- Buy Over Time Financing Note -->
                        <div class="seventea-financing-note">
                            <span class="seventea-fin-icon">&#9889;</span>
                            <span>0% APR Pay over time for orders over $35.00 with <strong>shop</strong></span>
                            <span class="seventea-info-circle">&#9432;</span>
                        </div>

                        <!-- Sensory Short Description -->
                        <p class="seventea-sensory-desc">${shortDesc}</p>

                        <!-- Golden Leaf Award Badge -->
                        <div class="seventea-award-badge">
                            <strong>Golden Leaf Award:</strong> Gold Winner &ndash; Single Origin ${isTour ? 'Visitor Experience' : (isBox ? 'Collector Series' : 'Wild Tea')} Worldwide
                        </div>

                        <!-- Size / Edition Variant Selector -->
                        <div class="seventea-variant-section">
                            <label class="seventea-section-label">${isTour ? 'EXPERIENCE TIER' : (isBox ? 'CHEST EDITION' : 'SIZE')}</label>
                            <div class="seventea-variant-pills" id="seventea-variant-pills">
                                ${variants.map(v => `
                                    <button type="button" 
                                            class="seventea-variant-btn ${v.default ? 'active' : ''}" 
                                            data-vid="${v.id}" 
                                            data-mult="${v.multiplier}" 
                                            data-stock="${v.stock}" 
                                            data-label="${v.label}">
                                        ${v.label}
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Stock Urgency Progress Indicator -->
                        <div class="seventea-stock-urgency">
                            <div class="seventea-stock-label" id="seventea-stock-text">
                                HURRY, ONLY ${variants[0].stock} ITEMS LEFT IN STOCK!
                            </div>
                            <div class="seventea-stock-bar-track">
                                <div class="seventea-stock-bar-fill" id="seventea-stock-bar-fill" style="width: 38%;"></div>
                            </div>
                        </div>

                        <!-- Quantity Counter & Action Buttons Stack -->
                        <div class="seventea-actions-stack">
                            <div class="seventea-cta-row">
                                <!-- Stepper -->
                                <div class="seventea-stepper">
                                    <button type="button" class="seventea-step-btn" id="seventea-qty-minus" aria-label="Decrease Quantity">&minus;</button>
                                    <span class="seventea-step-val" id="seventea-qty-display">1</span>
                                    <button type="button" class="seventea-step-btn" id="seventea-qty-plus" aria-label="Increase Quantity">&#43;</button>
                                </div>

                                <!-- Add to Cart Primary Button -->
                                <button type="button" class="seventea-btn-add" id="seventea-btn-add-cart">
                                    ${isTour ? 'ADD TO RESERVATIONS' : 'ADD TO CART'}
                                </button>
                            </div>

                            <!-- Buy with Shop / Express Checkout Button -->
                            <button type="button" class="seventea-btn-express" id="seventea-btn-express-buy">
                                <span>Buy with</span> <strong style="letter-spacing: -0.5px;">shop</strong>
                            </button>

                            <!-- More Payment Options Link -->
                            <div class="seventea-more-opts-wrap">
                                <button type="button" class="seventea-more-opts-btn" id="seventea-btn-more-payment">
                                    More payment options &bull; Quick Checkout
                                </button>
                            </div>
                        </div>

                        <!-- Fulfillment Perks & Estate Guarantees -->
                        <div class="seventea-perks-list">
                            <div class="seventea-perk-item">
                                <span class="seventea-perk-check">&#10003;</span>
                                <div>
                                    <div class="seventea-perk-title">Pickup available at Rock One Wild Tea Estate</div>
                                    <div class="seventea-perk-sub">Usually ready in 24 hours &bull; <a href="#location-section" onclick="window.closeProductDetail && window.closeProductDetail();" style="color: #b8860b; text-decoration: underline;">View estate information</a></div>
                                </div>
                            </div>
                            <div class="seventea-perk-item">
                                <span class="seventea-perk-check">&#10003;</span>
                                <div>
                                    <div class="seventea-perk-title">Insured Worldwide Express Air Courier</div>
                                    <div class="seventea-perk-sub">Dispatched directly from Sri Lanka with real-time tracking</div>
                                </div>
                            </div>
                        </div>

                        <!-- Share Link -->
                        <div class="seventea-share-row">
                            <button type="button" class="seventea-share-btn" id="seventea-share-btn">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                <span>Share</span>
                            </button>
                        </div>

                    </div>
                </div>

                <!-- BOTTOM: FULL CUSTOMER REVIEWS SECTION (PARITY WITH SCREENSHOT 4) -->
                <div class="seventea-reviews-block">
                    <h2 class="seventea-reviews-header">Customer reviews</h2>
                    
                    <div class="seventea-reviews-summary-grid">
                        <!-- Score Display -->
                        <div class="seventea-review-score-box">
                            <div class="seventea-big-score">
                                <span class="seventea-score-num">5</span>
                                <span class="seventea-score-denom">/ 5</span>
                            </div>
                            <div class="seventea-score-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            <div class="seventea-score-sub">2 verified reviews</div>
                        </div>

                        <!-- 5-Star Breakdown Progress Bars -->
                        <div class="seventea-rating-bars">
                            <div class="seventea-bar-row">
                                <span class="seventea-bar-label">5 &starf;</span>
                                <div class="seventea-bar-track">
                                    <div class="seventea-bar-fill" style="width: 100%;"></div>
                                </div>
                                <span class="seventea-bar-pct">100%</span>
                            </div>
                            <div class="seventea-bar-row">
                                <span class="seventea-bar-label">4 &starf;</span>
                                <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                                <span class="seventea-bar-pct">0%</span>
                            </div>
                            <div class="seventea-bar-row">
                                <span class="seventea-bar-label">3 &starf;</span>
                                <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                                <span class="seventea-bar-pct">0%</span>
                            </div>
                            <div class="seventea-bar-row">
                                <span class="seventea-bar-label">2 &starf;</span>
                                <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                                <span class="seventea-bar-pct">0%</span>
                            </div>
                            <div class="seventea-bar-row">
                                <span class="seventea-bar-label">1 &starf;</span>
                                <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                                <span class="seventea-bar-pct">0%</span>
                            </div>
                        </div>

                        <!-- Write Review Action -->
                        <div class="seventea-write-review-wrap">
                            <button type="button" class="seventea-btn-write-review" onclick="window.showToast ? window.showToast('Patron Review Portal', 'Review submission form opened for verified patrons.', 'info') : alert('Review Portal');">
                                Write a review
                            </button>
                        </div>
                    </div>

                    <!-- Filter Controls Strip -->
                    <div class="seventea-filter-strip">
                        <div class="seventea-filter-tab active">Reviews 2</div>
                        <div class="seventea-filter-tools">
                            <div class="seventea-search-input-wrap">
                                <span>&#128269;</span>
                                <input type="text" placeholder="Search reviews" class="seventea-search-reviews-input">
                            </div>
                            <select class="seventea-filter-select">
                                <option>Most relevant</option>
                                <option>Highest rating</option>
                                <option>Most recent</option>
                            </select>
                            <select class="seventea-filter-select">
                                <option>All ratings</option>
                                <option>5 stars only</option>
                            </select>
                            <button type="button" class="seventea-media-filter-btn">With media</button>
                        </div>
                    </div>

                    <!-- Verified Review Cards -->
                    <div class="seventea-review-cards-list">
                        
                        <!-- Review 1 -->
                        <div class="seventea-review-card">
                            <div class="seventea-card-top">
                                <div class="seventea-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div class="seventea-card-date">2 months ago</div>
                            </div>
                            <div class="seventea-card-author">
                                <strong class="seventea-author-name">K B.</strong>
                                <span class="seventea-verified-badge">&#10003; Verified buyer</span>
                            </div>
                            <p class="seventea-card-text">
                                Exceptional smoothness and natural sweetness. The liquor pours a luminous golden amber with subtle floral nuances. Even after the 4th infusion, the delicate honey sweetness lingers on the palate. One of the finest single-origin teas I have experienced worldwide.
                            </p>
                        </div>

                        <!-- Review 2 -->
                        <div class="seventea-review-card">
                            <div class="seventea-card-top">
                                <div class="seventea-card-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                                <div class="seventea-card-date">3 weeks ago</div>
                            </div>
                            <div class="seventea-card-author">
                                <strong class="seventea-author-name">Eleanor Vance</strong>
                                <span class="seventea-verified-badge">&#10003; Verified buyer</span>
                            </div>
                            <p class="seventea-card-text">
                                Arrived promptly in London directly from the Sri Lanka estate, sealed in a gorgeous luxury tin. The leaf aroma before steeping is heavenly, and the taste is silky and refined without any bitterness. Highest recommendation.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        `;

        // 6. Interactive Event Bindings Inside the Modal
        let currentQty = 1;
        let selectedVariant = variants[0];

        const updatePriceAndStockDisplay = () => {
            const calculatedPrice = (basePrice * selectedVariant.multiplier * currentQty).toFixed(2);
            const calculatedOrig = (basePrice * selectedVariant.multiplier * 1.176 * currentQty).toFixed(2);
            const priceEl = document.getElementById('seventea-calc-price');
            const origEl = document.getElementById('seventea-orig-price');
            const stockTextEl = document.getElementById('seventea-stock-text');
            const stockFillEl = document.getElementById('seventea-stock-bar-fill');
            const qtyDispEl = document.getElementById('seventea-qty-display');

            if (priceEl) priceEl.innerText = `$${calculatedPrice}`;
            if (origEl) origEl.innerText = `$${calculatedOrig}`;
            if (qtyDispEl) qtyDispEl.innerText = currentQty;
            if (stockTextEl) stockTextEl.innerText = `HURRY, ONLY ${selectedVariant.stock} ITEMS LEFT IN STOCK!`;
            if (stockFillEl) {
                const pct = Math.min(100, Math.max(15, (selectedVariant.stock / 25) * 100));
                stockFillEl.style.width = `${pct}%`;
            }
        };

        // Thumbnail switcher
        const thumbs = container.querySelectorAll('.seventea-thumb-item');
        const heroImg = document.getElementById('seventea-hero-img');
        const heroBox = document.getElementById('seventea-hero-box');

        thumbs.forEach(btn => {
            btn.addEventListener('click', () => {
                thumbs.forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                const src = btn.getAttribute('data-src');
                if (heroImg && src) {
                    heroImg.style.opacity = '0.35';
                    heroImg.src = src;
                    setTimeout(() => { heroImg.style.opacity = '1'; }, 100);
                }
            });
        });

        // Interactive Cursor-Follow Magnification (Smooth Mouse Proximity Zoom)
        let isHoverZooming = false;
        if (heroBox && heroImg) {
            heroBox.addEventListener('mouseenter', () => {
                isHoverZooming = true;
                heroImg.style.transition = 'transform 0.12s ease-out';
                heroImg.style.transform = 'scale(2.2)';
            });

            heroBox.addEventListener('mousemove', (e) => {
                if (!isHoverZooming) return;
                const rect = heroBox.getBoundingClientRect();
                const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
                heroImg.style.transformOrigin = `${x}% ${y}%`;
            });

            heroBox.addEventListener('mouseleave', () => {
                isHoverZooming = false;
                heroImg.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
                heroImg.style.transform = 'scale(1)';
                heroImg.style.transformOrigin = 'center center';
            });

            // Touch device panning support
            heroBox.addEventListener('touchmove', (e) => {
                if (!e.touches || e.touches.length === 0) return;
                const touch = e.touches[0];
                const rect = heroBox.getBoundingClientRect();
                const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
                const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
                heroImg.style.transform = 'scale(2.0)';
                heroImg.style.transformOrigin = `${x}% ${y}%`;
            }, { passive: true });

            heroBox.addEventListener('touchend', () => {
                heroImg.style.transition = 'transform 0.3s ease';
                heroImg.style.transform = 'scale(1)';
                heroImg.style.transformOrigin = 'center center';
            });
        }

        // Toggle Zoom Badge
        const zoomBadge = document.getElementById('seventea-zoom-badge');
        if (zoomBadge && heroImg) {
            zoomBadge.addEventListener('click', (e) => {
                e.stopPropagation();
                if (heroImg.style.transform && heroImg.style.transform.includes('2.2')) {
                    heroImg.style.transform = 'scale(1)';
                    heroImg.style.transformOrigin = 'center center';
                } else {
                    heroImg.style.transform = 'scale(2.2)';
                    heroImg.style.transformOrigin = 'center center';
                }
            });
        }

        // Accordion toggles
        const accHeaders = container.querySelectorAll('.seventea-accordion-header');
        accHeaders.forEach(hdr => {
            hdr.addEventListener('click', () => {
                const parent = hdr.closest('.seventea-accordion-item');
                if (!parent) return;
                const isExpanded = parent.classList.contains('expanded');
                const body = parent.querySelector('.seventea-accordion-body');
                const icon = hdr.querySelector('.seventea-accordion-icon');
                
                if (isExpanded) {
                    parent.classList.remove('expanded');
                    hdr.setAttribute('aria-expanded', 'false');
                    if (body) body.style.display = 'none';
                    if (icon) icon.innerHTML = '&#43;';
                } else {
                    parent.classList.add('expanded');
                    hdr.setAttribute('aria-expanded', 'true');
                    if (body) body.style.display = 'block';
                    if (icon) icon.innerHTML = '&minus;';
                }
            });
        });

        // Variant selection
        const variantBtns = container.querySelectorAll('.seventea-variant-btn');
        variantBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                variantBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const vid = btn.getAttribute('data-vid');
                selectedVariant = variants.find(v => v.id === vid) || variants[0];
                updatePriceAndStockDisplay();
            });
        });

        // Quantity Stepper
        const minusBtn = document.getElementById('seventea-qty-minus');
        const plusBtn = document.getElementById('seventea-qty-plus');
        if (minusBtn) {
            minusBtn.addEventListener('click', () => {
                if (currentQty > 1) {
                    currentQty--;
                    updatePriceAndStockDisplay();
                }
            });
        }
        if (plusBtn) {
            plusBtn.addEventListener('click', () => {
                if (currentQty < (selectedVariant.stock || 20)) {
                    currentQty++;
                    updatePriceAndStockDisplay();
                }
            });
        }

        // Add to Cart
        const addCartBtn = document.getElementById('seventea-btn-add-cart');
        if (addCartBtn) {
            addCartBtn.addEventListener('click', () => {
                const finalUnitPrice = basePrice * selectedVariant.multiplier;
                const variantSuffix = selectedVariant.label ? selectedVariant.label.replace(/\s+/g, '_') : 'std';
                const cartItemId = `${item.id || (isTour ? 'tour-gongfu' : (isBox ? 'chest-01' : 'prod-reserve'))}_${variantSuffix}`;

                if (window.TeaFactoryStore && window.TeaFactoryStore.addToCart) {
                    window.TeaFactoryStore.addToCart({
                        id: cartItemId,
                        name: `${title} (${selectedVariant.label})`,
                        price: finalUnitPrice,
                        shippingCharge: shipFee,
                        shipping_fee_usd: shipFee,
                        image: heroImg ? heroImg.src : primaryImg,
                        type: type,
                        weight: selectedVariant.label,
                        category: isTour ? 'Experience' : (isBox ? 'Collector Chest' : 'Single-Estate Tea')
                    }, currentQty);
                }

                // Immediately refresh cart counter badges on navigation and floating dock
                if (window.appUpdateCartBadges) {
                    window.appUpdateCartBadges();
                }

                if (window.showToast) {
                    window.showToast('Added to Reserve Bag', `${currentQty} &times; ${title} (${selectedVariant.label}) added.`, 'success');
                }

                // Open Reserve Bag / Cart Drawer immediately so the customer sees the cart
                if (typeof window.appOpenCart === 'function') {
                    window.appOpenCart();
                } else if (typeof window.openCart === 'function') {
                    window.openCart();
                } else if (typeof window.toggleCartDrawer === 'function') {
                    window.toggleCartDrawer(true);
                }
            });
        }

        // Buy with Shop / Express Checkout
        const expressBuyBtn = document.getElementById('seventea-btn-express-buy');
        const morePaymentBtn = document.getElementById('seventea-btn-more-payment');
        const triggerDirectCheckout = () => {
            window.closeProductDetail();
            if (window.openDrawer) {
                window.openDrawer(type, item.id || (isTour ? 1 : 1), {
                    package: title,
                    timeSlot: options.timeSlot || '09:30 AM',
                    qty: currentQty,
                    variant: selectedVariant.label,
                    price: basePrice * selectedVariant.multiplier,
                    shippingCharge: shipFee,
                    shipping_fee_usd: shipFee
                });
            }
        };

        if (expressBuyBtn) expressBuyBtn.addEventListener('click', triggerDirectCheckout);
        if (morePaymentBtn) morePaymentBtn.addEventListener('click', triggerDirectCheckout);

        // Share button
        const shareBtn = document.getElementById('seventea-share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const url = window.location.href;
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(url).then(() => {
                        if (window.showToast) window.showToast('Link Copied', 'Product link copied to clipboard.', 'success');
                    }).catch(() => {
                        if (window.showToast) window.showToast('Share Link', url, 'info');
                    });
                } else if (window.showToast) {
                    window.showToast('Share Link', url, 'info');
                }
            });
        }

        // 7. Reveal Modal
        modal.classList.add('active', 'open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    },

    renderCheckoutReviewsHTML(itemName = 'Single-Estate Artisanal Harvest') {
        const storeReviews = (window.TeaFactoryStore && window.TeaFactoryStore.getReviews ? window.TeaFactoryStore.getReviews() : []) || [];
        
        // Base verified customer reviews modeled after Seven Teahouse (Screenshot 4)
        const defaultReviews = [
            {
                author: 'K B.',
                badge: 'Verified buyer',
                date: '2 months ago',
                rating: 5,
                content: 'Exceptional smoothness and natural sweetness. The liquor pours a luminous golden amber with subtle floral nuances. Even after the 4th infusion, the delicate honey sweetness lingers on the palate. One of the finest single-origin teas I have experienced worldwide.'
            },
            {
                author: 'Eleanor Vance',
                badge: 'Verified buyer',
                date: '3 weeks ago',
                rating: 5,
                content: 'Arrived promptly in London directly from the Sri Lanka estate, sealed in a gorgeous luxury tin. The leaf aroma before steeping is heavenly, and the taste is silky and refined without any bitterness. Highest recommendation.'
            },
            {
                author: 'Master Sommelier Jean-Luc',
                badge: 'Verified patron',
                date: '1 month ago',
                rating: 5,
                content: 'The high-elevation terroir of Passara and Wellawela comes alive in every steep. A brilliant balance of wild floral notes and malted honey sweetness. Beautifully presented with complete provenance.'
            },
            {
                author: 'Priya Dharmasena',
                badge: 'Verified buyer',
                date: '2 weeks ago',
                rating: 5,
                content: 'Remarkable quality! Fresh, aromatic, and distinctly Ceylon high-grown. Ordering directly from the estate was seamless and parcel tracking was clear throughout.'
            }
        ];

        // Format any user submitted reviews from store
        const formattedStoreReviews = storeReviews.map(r => ({
            author: r.name || r.author || 'Anonymous Patron',
            badge: 'Verified buyer',
            date: r.date || 'Recent order',
            rating: Number(r.rating) || 5,
            content: r.comment || r.content || 'Exceptional single-estate quality and exquisite aroma.'
        }));

        const allReviews = [...formattedStoreReviews, ...defaultReviews];
        const totalCount = allReviews.length;

        const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

        return `
            <div class="checkout-step-card checkout-reviews-card" id="checkout-customer-reviews">
                <div class="checkout-step-header" style="margin-bottom: 1.25rem;">
                    <div class="checkout-step-title">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <span>Customer Reviews &amp; Verified Ratings</span>
                    </div>
                    <span style="font-size: 0.72rem; color: #86efac; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); border-radius: 12px; padding: 0.15rem 0.6rem; font-weight: 600;">
                        100% Verified Connoisseurs
                    </span>
                </div>

                <div class="seventea-reviews-summary-grid">
                    <!-- Big Score Display -->
                    <div class="seventea-review-score-box">
                        <div class="seventea-big-score">
                            <span class="seventea-score-num">5</span>
                            <span class="seventea-score-denom">/ 5</span>
                        </div>
                        <div class="seventea-score-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <div class="seventea-score-sub">${totalCount} verified reviews</div>
                    </div>

                    <!-- 5-Star Breakdown Progress Bars -->
                    <div class="seventea-rating-bars">
                        <div class="seventea-bar-row">
                            <span class="seventea-bar-label">5 &starf;</span>
                            <div class="seventea-bar-track">
                                <div class="seventea-bar-fill" style="width: 100%;"></div>
                            </div>
                            <span class="seventea-bar-pct">100%</span>
                        </div>
                        <div class="seventea-bar-row">
                            <span class="seventea-bar-label">4 &starf;</span>
                            <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                            <span class="seventea-bar-pct">0%</span>
                        </div>
                        <div class="seventea-bar-row">
                            <span class="seventea-bar-label">3 &starf;</span>
                            <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                            <span class="seventea-bar-pct">0%</span>
                        </div>
                        <div class="seventea-bar-row">
                            <span class="seventea-bar-label">2 &starf;</span>
                            <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                            <span class="seventea-bar-pct">0%</span>
                        </div>
                        <div class="seventea-bar-row">
                            <span class="seventea-bar-label">1 &starf;</span>
                            <div class="seventea-bar-track"><div class="seventea-bar-fill" style="width: 0%;"></div></div>
                            <span class="seventea-bar-pct">0%</span>
                        </div>
                    </div>

                    <!-- Write Review Action Button -->
                    <div class="seventea-write-review-wrap">
                        <button type="button" class="seventea-btn-write-review" onclick="window.openDrawer ? window.openDrawer('review') : (window.showToast &amp;&amp; window.showToast('Patron Review', 'Write a review portal', 'info'));">
                            Write a review
                        </button>
                    </div>
                </div>

                <!-- Filter Controls Strip -->
                <div class="seventea-filter-strip">
                    <div class="seventea-filter-tab active" id="checkout-reviews-tab-count">Reviews ${totalCount}</div>
                    <div class="seventea-filter-tools">
                        <div class="seventea-search-input-wrap">
                            <span>&#128269;</span>
                            <input type="text" placeholder="Search reviews" class="seventea-search-reviews-input" id="checkout-reviews-search-input">
                        </div>
                        <select class="seventea-filter-select" id="checkout-reviews-sort-select">
                            <option value="relevant">Most relevant</option>
                            <option value="highest">Highest rating</option>
                            <option value="recent">Most recent</option>
                        </select>
                        <select class="seventea-filter-select" id="checkout-reviews-rating-select">
                            <option value="all">All ratings</option>
                            <option value="5">5 stars only</option>
                        </select>
                        <button type="button" class="seventea-media-filter-btn" id="checkout-reviews-media-btn">With media</button>
                    </div>
                </div>

                <!-- Verified Review Cards List -->
                <div class="seventea-review-cards-list" id="checkout-review-cards-list">
                    ${allReviews.map(r => `
                        <div class="seventea-review-card" data-rating="${r.rating}" data-author="${esc(r.author.toLowerCase())}" data-content="${esc(r.content.toLowerCase())}">
                            <div class="seventea-card-top">
                                <div class="seventea-card-stars">${this.renderStars(r.rating)}</div>
                                <div class="seventea-card-date">${esc(r.date)}</div>
                            </div>
                            <div class="seventea-card-author">
                                <strong class="seventea-author-name">${esc(r.author)}</strong>
                                <span class="seventea-verified-badge">&#10003; ${esc(r.badge || 'Verified buyer')}</span>
                            </div>
                            <p class="seventea-card-text">
                                ${esc(r.content)}
                            </p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },
};

window.UIComponents = UIComponents;

/**
 * Generates custom, theme-specific animated sky characters and celebration rigs
 */
window.getSeasonalSkyRigHtml = function(themeId) {
    if (!themeId || themeId === 'classic') return '';

    if (themeId === 'christmas') {
        return `
            <img src="images/santa_reindeer_team_transparent.png?v=3.1.2" 
                 alt="Santa Claus Flying with 6 Reindeer and Sleigh" 
                 class="theme-sky-img" 
                 loading="eager" 
                 decoding="async">
            <div class="sky-stardust-trail">
                <span class="stardust-sparkle s1">✨</span>
                <span class="stardust-sparkle s2">⭐</span>
                <span class="stardust-sparkle s3">✨</span>
                <span class="stardust-sparkle s4">🌟</span>
            </div>
            <div class="sky-luxury-wish">✨ Merry Christmas & Happy Holidays ✨</div>
        `;
    }

    // All other themes use custom ambient full-screen canvas particle & atmosphere engines (no flying cartoon rigs)
    return '';
};
 
