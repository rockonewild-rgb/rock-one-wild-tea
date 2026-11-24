const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const slides = [
  {
    name: 'hero_slide_1.jpg',
    src: 'images/1 (1).jpeg',
    position: 'center',
    desc: 'Slide 1: Organic Homemade Tea Experience / Wild Garden Entrance'
  },
  {
    name: 'hero_slide_2.jpg',
    src: 'images/hero_banner_about.jpg',
    position: 'center',
    desc: 'Slide 2: Wild Arbor Garden Mountain Foothill Heritage'
  },
  {
    name: 'hero_slide_3.jpg',
    src: 'images/luxury_tea_estate.jpg',
    position: 'center',
    desc: 'Slide 3: Dawn Hand-Plucking Artisanal Purity'
  },
  {
    name: 'hero_slide_4.jpg',
    src: 'images/luxury_tea_tour.jpg',
    position: 'center',
    desc: 'Slide 4: Orthodox Rolling Traditional Family Craft'
  },
  {
    name: 'hero_slide_5.jpg',
    src: 'images/luxury_tea_announcement.jpg',
    position: 'center',
    desc: 'Slide 5: Historic Wood-Firing Flavor Perfection'
  },
  {
    name: 'hero_slide_6.jpg',
    src: 'images/hero_banner_shop.jpg',
    position: 'center',
    desc: 'Slide 6: Numbered Collector Chests Limited Allocations'
  },
  {
    name: 'hero_slide_7.jpg',
    src: 'images/hero_banner_tours.jpg',
    position: 'center',
    desc: 'Slide 7: Visit Our Family Factory Artisanal Tea Tasting'
  },
  {
    name: 'hero_slide_8.jpg',
    src: 'images/Gift Box.jpeg',
    position: 'center',
    desc: 'Slide 8: Artisanal Packaging The Perfect Gift'
  }
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

  // Sharp Lanczos3 high-definition 1920x1080 edge-to-edge widescreen with subtle detail sharpening
  await sharp(srcPath)
    .resize(1920, 1080, {
      fit: 'cover',
      position: slide.position || 'center',
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 1.0, m1: 1.2, m2: 0.5 })
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(outPath);

  const outMeta = await sharp(outPath).metadata();
  const outStat = fs.statSync(outPath);
  console.log(`Saved ${slide.name}: ${outMeta.width}x${outMeta.height} (${(outStat.size / 1024).toFixed(1)} KB) - 100% full screen, razor sharp`);
}

async function main() {
  for (const s of slides) {
    await generateSlide(s);
  }
  console.log('All 8 widescreen hero slides rebuilt with crystal-clear 1080p full-screen quality.');
}

main().catch(err => {
  console.error('Error generating slides:', err);
  process.exit(1);
});
