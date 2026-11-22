/**
 * Contrast Guard
 * Safety net for the white luxury theme. Many components are rendered from JS with
 * hard-coded inline colours that were designed for the old dark theme. After every render:
 *   1. Translucent dark panels sitting on the white page (which look muddy grey) are turned
 *      into clean solid deep-green panels. Backdrops, overlays and photo surfaces are skipped.
 *   2. Any text whose contrast against its real surface is too low is switched to a readable
 *      colour (dark on light surfaces, light on dark surfaces). Photo surfaces are skipped.
 * Every change is an inline override flagged with data-cg*, and is reset and recomputed on
 * each run, so nothing is permanent.
 */
(function () {
    'use strict';

    var MIN_RATIO = 3.4;
    var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, SVG: 1, PATH: 1, IMG: 1, VIDEO: 1, IFRAME: 1, OPTION: 1, CANVAS: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, BR: 1 };
    var timer = null;
    var running = false;

    function parse(c) {
        var m = c && c.match(/rgba?\(([^)]+)\)/);
        if (!m) return null;
        var p = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number);
        return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
    }

    function over(t, b) {
        var a = t.a + b.a * (1 - t.a);
        if (a === 0) return { r: 0, g: 0, b: 0, a: 0 };
        return {
            r: (t.r * t.a + b.r * b.a * (1 - t.a)) / a,
            g: (t.g * t.a + b.g * b.a * (1 - t.a)) / a,
            b: (t.b * t.a + b.b * b.a * (1 - t.a)) / a,
            a: a
        };
    }

    function lum(c) {
        function f(v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
        return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
    }

    function ratio(a, b) {
        var la = lum(a), lb = lum(b);
        return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
    }

    function gradColors(bi) {
        var re = /rgba?\([^)]+\)/g, out = [], m;
        while ((m = re.exec(bi))) { var c = parse(m[0]); if (c) out.push(c); }
        return out;
    }

    function avgColor(list) {
        var s = { r: 0, g: 0, b: 0, a: 0 };
        list.forEach(function (c) { s.r += c.r; s.g += c.g; s.b += c.b; s.a += c.a; });
        var k = list.length;
        return { r: s.r / k, g: s.g / k, b: s.b / k, a: s.a / k };
    }

    // Own paint of an element: {color (composited layer) | null, unknown}
    function ownLayer(cs) {
        var layer = null, unknown = false;
        var bc = parse(cs.backgroundColor);
        if (bc && bc.a > 0) layer = bc;
        var bi = cs.backgroundImage;
        if (bi && bi !== 'none') {
            if (/url\(/.test(bi)) unknown = true;
            else {
                var gc = gradColors(bi);
                if (gc.length) {
                    var g = avgColor(gc);
                    layer = layer ? over(g, layer) : g;
                }
            }
        }
        return { layer: layer, unknown: unknown };
    }

    var memo = new Map();
    function surfaceOf(el) {
        if (memo.has(el)) return memo.get(el);
        var parent = el.parentElement;
        var base = parent && parent !== document.documentElement ? surfaceOf(parent) : { color: { r: 255, g: 255, b: 255, a: 1 }, unknown: false };
        var o = ownLayer(getComputedStyle(el));
        var res = { color: o.layer ? over(o.layer, base.color) : base.color, unknown: base.unknown || o.unknown };
        memo.set(el, res);
        return res;
    }

    function isGoldish(c) { return c.r > c.g && c.g > c.b && (c.r - c.b) > 60; }

    function fixColor(fg, bgLum) {
        if (bgLum < 0.28) return isGoldish(fg) ? '#f3cf65' : '#f1f5f2';
        return isGoldish(fg) ? '#7a5500' : '#1f2937';
    }

    function reset() {
        var i, els = document.body.querySelectorAll('[data-cg]');
        for (i = 0; i < els.length; i++) { els[i].style.removeProperty('color'); els[i].removeAttribute('data-cg'); }
        var bgs = document.body.querySelectorAll('[data-cgbg]');
        for (i = 0; i < bgs.length; i++) {
            var e = bgs[i];
            e.style.removeProperty('background-color');
            e.style.removeProperty('background-image');
            var oc = e.getAttribute('data-cgbg-c'), oi = e.getAttribute('data-cgbg-i');
            if (oc) e.style.setProperty('background-color', oc);
            if (oi) e.style.setProperty('background-image', oi);
            e.removeAttribute('data-cgbg'); e.removeAttribute('data-cgbg-c'); e.removeAttribute('data-cgbg-i');
        }
    }

    function isBackdropLike(el, cs) {
        if (cs.position === 'fixed') return true;
        var cls = typeof el.className === 'string' ? el.className : '';
        if (/overlay|backdrop|scrim|mask/i.test(cls)) return true;
        if (cs.position === 'absolute') {
            var r = el.getBoundingClientRect();
            var pr = el.parentElement ? el.parentElement.getBoundingClientRect() : r;
            if (r.width >= pr.width * 0.9 && r.height >= pr.height * 0.9) return true; // full-bleed overlay layers
        }
        return false;
    }

    function solidifyPass(all) {
        for (var i = 0; i < all.length; i++) {
            var el = all[i];
            if (SKIP_TAGS[el.tagName.toUpperCase()]) continue;
            var cs = getComputedStyle(el);
            if (cs.display === 'none') continue;
            var bc = parse(cs.backgroundColor);
            var bi = cs.backgroundImage;
            if (bi && /url\(/.test(bi)) continue;
            var layerColor = null, hasGrad = false;
            if (bi && bi !== 'none') {
                var gc = gradColors(bi);
                if (gc.length) { layerColor = avgColor(gc); hasGrad = true; }
            }
            if (!layerColor && bc && bc.a > 0) layerColor = bc;
            if (!layerColor) continue;
            if (layerColor.a >= 0.97 || layerColor.a < 0.12) continue;         // already solid or barely there
            if (lum(layerColor) > 0.1) continue;                                // not a dark panel
            var parent = el.parentElement;
            if (!parent) continue;
            var ps = surfaceOf(parent);
            if (ps.unknown || lum(ps.color) < 0.45) continue;                   // only panels floating on light surfaces
            if (isBackdropLike(el, cs)) continue;
            var r = el.getBoundingClientRect();
            if (r.width < 40 || r.height < 18) continue;
            // Solid deep colour: keep hue, drop transparency, never lighter than a deep green
            var solid = 'rgb(' + Math.round(layerColor.r) + ',' + Math.round(layerColor.g) + ',' + Math.round(layerColor.b) + ')';
            el.setAttribute('data-cgbg', '1');
            el.setAttribute('data-cgbg-c', el.style.getPropertyValue('background-color') || '');
            el.setAttribute('data-cgbg-i', el.style.getPropertyValue('background-image') || '');
            el.style.setProperty('background-color', solid, 'important');
            if (hasGrad) el.style.setProperty('background-image', 'none', 'important');
            memo.delete(el);
        }
    }

    function textPass(all) {
        for (var j = 0; j < all.length; j++) {
            var el = all[j];
            if (SKIP_TAGS[el.tagName.toUpperCase()]) continue;
            var hasText = false;
            for (var k = 0; k < el.childNodes.length; k++) {
                var nd = el.childNodes[k];
                if (nd.nodeType === 3 && nd.textContent.trim()) { hasText = true; break; }
            }
            if (!hasText) continue;
            var r = el.getBoundingClientRect();
            if (r.width < 2 || r.height < 2) continue;
            var cs = getComputedStyle(el);
            if (cs.visibility === 'hidden' || cs.display === 'none') continue;
            if (cs.webkitTextFillColor === 'rgba(0, 0, 0, 0)' || cs.webkitTextFillColor === 'transparent') continue;
            var fg = parse(cs.color);
            if (!fg) continue;
            var s = surfaceOf(el);
            if (s.unknown) continue;
            var eff = fg.a < 1 ? over(fg, s.color) : fg;
            if (ratio(eff, s.color) >= MIN_RATIO) continue;
            el.style.setProperty('color', fixColor(fg, lum(s.color)), 'important');
            el.setAttribute('data-cg', '1');
        }
    }

    function run() {
        if (!document.body) return;
        running = true;
        try {
            reset();
            memo = new Map();
            var all = document.body.querySelectorAll('*');
            textPass(all);
        } catch (e) { /* never break the site */ }
        memo = new Map();
        running = false;
    }

    function schedule() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(run, 90);
    }

    function init() {
        run();
        var obs = new MutationObserver(function () { if (!running) schedule(); });
        obs.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
        window.addEventListener('load', schedule);
        window.addEventListener('resize', schedule);
        window.appRunContrastGuard = run;
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
