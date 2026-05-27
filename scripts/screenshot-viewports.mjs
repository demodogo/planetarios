import { chromium } from 'playwright';

const viewports = [
	{ name: 'mobile-409', width: 409, height: 900 },
	{ name: 'sm-640', width: 640, height: 900 },
	{ name: 'md-768', width: 768, height: 1024 },
	{ name: 'lg-1024', width: 1024, height: 768 },
	{ name: 'xl-1280', width: 1280, height: 900 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
	const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
	await page.goto('http://localhost:3000/modelo', { waitUntil: 'networkidle' });
	await page.screenshot({ path: `C:/Repos/planetarios/scripts/${vp.name}.png`, fullPage: true });
	await page.close();
	console.log(`✓ ${vp.name}`);
}

await browser.close();
