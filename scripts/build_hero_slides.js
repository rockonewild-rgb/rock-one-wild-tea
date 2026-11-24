const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const slides = [
  { name: 'hero_slide_1.jpg', src: 'images/1 (1).jpeg', position: 'center' },
  { name: 'hero_slide_2.jpg', src: 'images/1 (2).jpeg', position: 'center' },
  { name: 'hero_slide_3.jpg', src: 'images/1 (5).jpeg', position: 'center' },
  { name: 'hero_slide_4.jpg', src: 'images/1 (10).jpeg', position: 'center' },
  { name: 'hero_slide_5.jpg', src: 'images/1 (12).jpeg', position: 'center' },
  { name: 'hero_slide_6.jpg', src: 'images/1 (16).jpeg', position: 'center' },
  { name: 'hero_slide_7.jpg', src: 'images/1 (14).jpeg', position: 'center' },
  { name: 'hero_slide_8.jpg', src: 'images/Gift Box.jpeg', position: 'center' }
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

  // Direct 1920x1080 edge-to-edge sharp cover crop — ZERO blur, crystal clarity
  await sharp(srcPath)
    .resize(1920, 1080, { fit: 'cover', position: slide.position || 'center' })
    .jpeg({ quality: 94, mozjpeg: true })
    .toFile(outPath);

  console.log(`Saved ${slide.name} (1920x1080 100% sharp edge-to-edge, zero blur)`);
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
