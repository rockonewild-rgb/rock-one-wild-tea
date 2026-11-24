const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildBanners() {
    console.log('Building banners...');
    await buildToursBanner();

async function buildToursBanner() {
    // In luxury_tea_tour.jpg:
    // Extract real wood texture from the sign edge
    const cleanWood = await sharp('images/luxury_tea_tour.jpg')
        .extract({ left: 665, top: 345, width: 14, height: 48 })
        .resize(172, 48, { fit: 'fill' })
        .blur(0.8)
        .toBuffer();

    const textSvg = `
    <svg width="172" height="48">
      <text x="86" y="18" font-family="'Plus Jakarta Sans', Arial, serif" font-size="10" font-weight="800" fill="#edd78c" text-anchor="middle" letter-spacing="1.2">ROCK ONE</text>
      <text x="86" y="32" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="9.5" font-weight="700" fill="#dfbf6c" text-anchor="middle" letter-spacing="0.8">WILD TEA FACTORY</text>
      <text x="86" y="43" font-family="Arial, sans-serif" font-size="7" font-weight="600" fill="#bfa157" text-anchor="middle" letter-spacing="1">UVA MEDIUM • 1,240M</text>
    </svg>
    `;

    // Clock tower EST 1890 replacement
    const towerWood = await sharp('images/luxury_tea_tour.jpg')
        .extract({ left: 655, top: 300, width: 10, height: 18 })
        .resize(46, 18, { fit: 'fill' })
        .toBuffer();

    const towerText = `
    <svg width="46" height="18">
      <text x="23" y="13" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="7.5" font-weight="800" fill="#c4a86b" text-anchor="middle" letter-spacing="0.5">ESTD</text>
    </svg>
    `;

    await sharp('images/luxury_tea_tour.jpg')
        .composite([
            { input: cleanWood, left: 678, top: 345, blend: 'over' },
            { input: Buffer.from(textSvg), left: 678, top: 345, blend: 'over' },
            { input: towerWood, left: 668, top: 302, blend: 'over' },
            { input: Buffer.from(towerText), left: 668, top: 302, blend: 'over' }
        ])
        .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
        .toFile('images/hero_banner_tours.jpg');
    console.log('✓ Created natural seamless images/hero_banner_tours.jpg');
}

    // 2. Announcements Banner: 1200x670 luxury_tea_announcement.jpg (already 16:9 widescreen perfection)
    await sharp('images/luxury_tea_announcement.jpg')
        .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
        .toFile('images/hero_banner_announcements.jpg');
    console.log('✓ Created images/hero_banner_announcements.jpg');

    // 3. Gallery Banner: luxury_tea_estate.jpg (panoramic 1200x670 high altitude Ceylon estate)
    await sharp('images/luxury_tea_estate.jpg')
        .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
        .toFile('images/hero_banner_gallery.jpg');
    console.log('✓ Created images/hero_banner_gallery.jpg');

    // 4. Order / Concierge Banner:
    // hero_slide_8.jpg is 1920x1080 showing the official ROW Rock One Wild Tea teak presentation chest on luxury marble.
    // Let's create an ultra-luxurious 16:9 banner with a warm soft vignette and subtle concierge dispatch tone.
    await sharp('images/hero_slide_8.jpg')
        .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
        .toFile('images/hero_banner_order.jpg');
    console.log('✓ Created images/hero_banner_order.jpg');

    // 5. Enquiry / Private Reserve Banner:
    // For Enquiry Desk / Direct Concierge:
    // Let's create an elegant banner using hero_banner_shop or luxury_tea_announcement or hero_slide_8
    // Let's check hero_slide_3.jpg or hero_slide_4.jpg or create hero_banner_enquiry.jpg
    await sharp('images/hero_banner_shop.jpg')
        .modulate({ brightness: 0.95, saturation: 1.05 })
        .toFile('images/hero_banner_enquiry.jpg');
    console.log('✓ Created images/hero_banner_enquiry.jpg');

    console.log('All banners built successfully!');
}

buildBanners().catch(console.error);
