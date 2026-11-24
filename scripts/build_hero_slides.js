const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const slides = [
  { name: 'hero_slide_1.jpg', src: 'images/1 (1).jpeg', fit: 'cover' },
  { name: 'hero_slide_2.jpg', src: 'images/1 (2).jpeg', fit: 'feather' },
  { name: 'hero_slide_3.jpg', src: 'images/1 (5).jpeg', fit: 'feather' },
  { name: 'hero_slide_4.jpg', src: 'images/1 (10).jpeg', fit: 'feather' },
  { name: 'hero_slide_5.jpg', src: 'images/1 (12).jpeg', fit: 'feather' },
  { name: 'hero_slide_6.jpg', src: 'images/1 (16).jpeg', fit: 'feather' },
  { name: 'hero_slide_7.jpg', src: 'images/1 (14).jpeg', fit: 'feather' },
  { name: 'hero_slide_8.jpg', src: 'images/Gift Box.jpeg', fit: 'cover' }
];

async function generateSlide(slide) {
  const srcPath = path.join(__dirname, '..', slide.src);
  const outPath = path.join(__dirname, '..', 'images', slide.name);

  if (!fs.existsSync(srcPath)) {
    console.error('Missing source:', srcPath);
    return;
  }

  const meta = await sharp(srcPath).metadata();
  console.log(`Processing ${slide.name} from ${slide.src} (${meta.width}x${meta.height})...`);

  if (slide.fit === 'cover' && (meta.width / meta.height) >= 1.25) {
    // Landscape photo: crop to 1920x1080 with center focus
    await sharp(srcPath)
      .resize(1920, 1080, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(outPath);
    console.log(`Saved ${slide.name} (direct 16:9 landscape)`);
  } else {
    // Portrait photo: uncropped full-height sharp subject centered + smooth feathered edges + atmospheric bokeh background
    const targetHeight = 1080;
    const fgWidth = Math.round(meta.width * (targetHeight / meta.height));
    const feather = 80; // 80px smooth gradient fade on left and right edges

    const svgMask = `
      <svg width="${fgWidth}" height="${targetHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="white" stop-opacity="0" />
            <stop offset="${((feather / fgWidth) * 100).toFixed(2)}%" stop-color="white" stop-opacity="1" />
            <stop offset="${(((fgWidth - feather) / fgWidth) * 100).toFixed(2)}%" stop-color="white" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#featherGrad)" />
      </svg>
    `;

    const maskPng = await sharp(Buffer.from(svgMask)).png().toBuffer();

    const fg = await sharp(srcPath)
      .resize(fgWidth, targetHeight, { fit: 'inside' })
      .ensureAlpha()
      .composite([{ input: maskPng, blend: 'dest-in' }])
      .png()
      .toBuffer();

    const bg = await sharp(srcPath)
      .resize(1920, 1080, { fit: 'cover', position: 'center' })
      .blur(35)
      .modulate({ brightness: 0.72, saturation: 1.15 })
      .toBuffer();

    const left = Math.round((1920 - fgWidth) / 2);

    await sharp(bg)
      .composite([{ input: fg, left, top: 0 }])
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(outPath);

    console.log(`Saved ${slide.name} (1920x1080 seamless feathered widescreen composite, fg width ${fgWidth}px)`);
  }
}

async function main() {
  for (const s of slides) {
    await generateSlide(s);
  }
  console.log('All 8 widescreen hero slides generated successfully.');
}

main().catch(err => {
  console.error('Error generating slides:', err);
  process.exit(1);
});
