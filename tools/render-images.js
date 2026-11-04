// Renders og.jpg (1200×630) and apple-touch-icon.png (180×180) from tools/og.html.
// From the repo root:  python3 -m http.server 4173 &  then  node tools/render-images.js
const { chromium } = require('playwright');
const base = process.env.BASE || 'http://localhost:4173';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1300, height: 1000 } });
  await page.goto(`${base}/tools/og.html`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await (await page.$('#og')).screenshot({ path: 'og.jpg', type: 'jpeg', quality: 88 });
  await (await page.$('#icon')).screenshot({ path: 'apple-touch-icon.png' });
  await browser.close();
  console.log('wrote og.jpg, apple-touch-icon.png');
})();
