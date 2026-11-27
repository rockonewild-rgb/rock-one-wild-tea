const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('images/Tour/web/manifest.json'));

let html = `<!DOCTYPE html>
<html>
<head>
    <title>Tour Images Review</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #e2e8f0; padding: 24px; margin: 0; }
        h1 { color: #f59e0b; font-size: 1.6rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-top: 20px; }
        .card { background: #1e293b; border: 1px solid #334155; border-radius: 10px; overflow: hidden; padding: 12px; }
        .card img { width: 100%; height: 200px; object-fit: cover; border-radius: 6px; }
        .card p { font-size: 11px; margin: 8px 0 0 0; color: #94a3b8; line-height: 1.4; }
        .badge { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; background: #d97706; color: #000; margin-bottom: 4px; }
    </style>
</head>
<body>
    <h1>Rock One Wild Tea - Tour Photos Catalog (${manifest.length} items)</h1>
    <p style="color: #94a3b8;">Real estate photos ready for the Tour Experience UI.</p>
    <div class="grid">
`;

manifest.forEach((item, idx) => {
    if (item.type === 'image') {
        const webpRelative = item.webp.replace('images/Tour/web/', '');
        html += `
        <div class="card">
            <span class="badge">#${idx + 1} - ${item.orientation.toUpperCase()}</span>
            <img src="${webpRelative}" alt="${item.original}" loading="lazy">
            <p><strong>${item.original}</strong><br>${item.webp}<br>${item.width} x ${item.height}</p>
        </div>`;
    } else {
        html += `
        <div class="card">
            <span class="badge" style="background:#3b82f6;color:#fff;">VIDEO</span>
            <p style="padding: 20px 0;"><strong>${item.original}</strong><br>${item.webPath}</p>
        </div>`;
    }
});

html += `
    </div>
</body>
</html>`;

fs.writeFileSync('images/Tour/web/gallery_preview.html', html);
console.log('Generated images/Tour/web/gallery_preview.html successfully!');
