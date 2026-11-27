const fs = require('fs');
const path = require('path');
const convert = require('heic-convert');
const sharp = require('sharp');

const tourDir = path.join(__dirname, '..', 'images', 'Tour');
const outDir = path.join(tourDir, 'web');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

async function processAll() {
    const files = fs.readdirSync(tourDir);
    console.log(`Found ${files.length} items in ${tourDir}`);

    // Filter duplicates with " (1)"
    const uniqueFiles = files.filter(f => !f.includes(' (1)') && !fs.statSync(path.join(tourDir, f)).isDirectory());
    console.log(`Processing ${uniqueFiles.length} unique files...`);

    const manifest = [];

    for (let i = 0; i < uniqueFiles.length; i++) {
        const file = uniqueFiles[i];
        const ext = path.extname(file).toLowerCase();
        const baseName = path.basename(file, ext).replace(/\.JPG$/i, '');
        const fullPath = path.join(tourDir, file);

        if (ext === '.mp4') {
            console.log(`[${i+1}/${uniqueFiles.length}] Video found: ${file}`);
            manifest.push({
                original: file,
                type: 'video',
                webPath: `images/Tour/${file}`
            });
            continue;
        }

        try {
            console.log(`[${i+1}/${uniqueFiles.length}] Converting ${file}...`);
            let imgBuffer;

            if (ext === '.heic') {
                const rawBuffer = fs.readFileSync(fullPath);
                imgBuffer = await convert({
                    buffer: rawBuffer,
                    format: 'JPEG',
                    quality: 0.90
                });
            } else {
                imgBuffer = fs.readFileSync(fullPath);
            }

            // Convert to webp with sharp and resize to max 1920 width/height
            const webpName = `${baseName}.webp`;
            const jpgName = `${baseName}.jpg`;
            const webpPath = path.join(outDir, webpName);
            const jpgPath = path.join(outDir, jpgName);

            const sharpImg = sharp(imgBuffer).rotate(); // auto-rotate according to EXIF
            const meta = await sharpImg.metadata();

            // Resize max 1920
            await sharp(imgBuffer)
                .rotate()
                .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
                .webp({ quality: 82 })
                .toFile(webpPath);

            await sharp(imgBuffer)
                .rotate()
                .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
                .jpeg({ quality: 84, mozjpeg: true })
                .toFile(jpgPath);

            console.log(`  -> Saved ${webpName} (${meta.width}x${meta.height})`);
            manifest.push({
                original: file,
                type: 'image',
                webp: `images/Tour/web/${webpName}`,
                jpg: `images/Tour/web/${jpgName}`,
                width: meta.width,
                height: meta.height,
                orientation: meta.width >= meta.height ? 'landscape' : 'portrait'
            });
        } catch (err) {
            console.error(`  Error processing ${file}:`, err.message);
        }
    }

    fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`\nSuccessfully processed ${manifest.length} items. Manifest saved to images/Tour/web/manifest.json`);
}

processAll().catch(console.error);
