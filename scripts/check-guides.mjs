import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { guideAuditData, validateGuideLinks, carryGap, ballReplacementCost } from '../dist-ssr/entry-server.js';

validateGuideLinks();
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const titles = new Set();
let contextualLinks = 0;
for (const guide of guideAuditData) {
  const html = await readFile(`dist/guides/${guide.slug}/index.html`, 'utf8');
  const canonical = `https://findmybestswing.com/guides/${guide.slug}`;
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, guide.slug);
  assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Missing or duplicate title: ${guide.slug}`);
  titles.add(title);
  assert.ok(html.includes('<meta name="description" content="'));
  assert.ok(html.includes(`property="og:url" content="${canonical}"`));
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
  const schemaScripts = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  assert.equal(schemaScripts.length, 1);
  const graph = JSON.parse(schemaScripts[0][1])['@graph'];
  const article = graph.find(item => item['@type'] === 'Article');
  assert.equal(article.headline, guide.title);
  assert.equal(article.url, canonical);
  assert.equal(article.dateModified, guide.updatedDateIso ?? guide.reviewedDateIso ?? guide.publishedDateIso ?? '2026-09-28');
  assert.deepEqual(graph.find(item => item['@type'] === 'FAQPage').mainEntity.map(item => item.name), guide.faqs.map(faq => faq.question));
  const articleHtml = html.match(/<article\b[\s\S]*?<\/article>/)?.[0] ?? '';
  const guideLinks = [...articleHtml.matchAll(/href="(\/guides\/[^"#]+)"/g)];
  assert.ok(guideLinks.length > 0, `No contextual guide links: ${guide.slug}`);
  contextualLinks += guideLinks.length;
  for (const link of guideLinks) assert.ok(guideAuditData.some(target => `/guides/${target.slug}` === link[1]));
  assert.ok(!/href="(?:\/|https:\/\/findmybestswing\.com)[^"]*#/.test(html));
  for (const anchor of html.matchAll(/<a\b[^>]*href="(https:\/\/(?:www\.)?amazon\.com[^\"]*)"[^>]*>/g)) {
    assert.match(anchor[1], /^https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]{10}\?tag=findmybestswing-20$/);
    assert.match(anchor[0], /rel="[^"]*nofollow[^\"]*sponsored/);
  }
  for (const option of guide.purchaseOptions ?? []) {
    const destination = `https://www.amazon.com/dp/${option.asin}?tag=findmybestswing-20`;
    assert.equal(articleHtml.includes(`href="${destination}"`), option.amazonStatus === 'verified', `Listing gate failed: ${option.asin}`);
  }
}
const componentPath = 'src/components/Common/AmazonAvailabilityButton.tsx';
async function checkSource(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name).replaceAll('\\', '/');
    if (entry.isDirectory()) await checkSource(path);
    else if (/\.tsx?$/.test(path)) {
      const source = await readFile(path, 'utf8');
      if (path !== componentPath && path !== 'src/utils/amazonLinks.ts') {
        assert.ok(!source.includes('getAmazonUrl'), `Amazon URL generation outside guarded component: ${path}`);
        assert.ok(!/https?:\/\/(?:www\.)?(?:amazon\.[a-z.]+|amzn\.to)\//i.test(source), `Direct commercial URL: ${path}`);
      }
    }
  }
}
await checkSource('src');
for (const [longer, shorter, result] of [['150', '135', 15], ['100.2', '90.1', 10.1], ['100', '100', 0], ['90', '100', -10], ['', '100', null], ['0', '100', null], ['401', '100', null], ['NaN', '100', null]]) {
  assert.equal(carryGap(longer, shorter), result);
}
for (const [price, balls, rounds, expected] of [
  ['24', '2', '10', 40], ['48', '2', '10', 80], ['24', '0.5', '4', 4], ['24', '0', '10', 0],
  ['', '2', '10', null], ['0', '2', '10', null], ['24', '-1', '10', null],
  ['24', '2', '1.5', null], ['24', '2', '366', null], ['Infinity', '2', '10', null],
  ['1001', '2', '10', null], ['24', '37', '10', null], ['0.001', '2', '10', null],
]) assert.equal(ballReplacementCost(price, balls, rounds), expected);
const ballHtml = await readFile('dist/guides/golf-ball-compression-chart-velocity-guide/index.html', 'utf8');
assert.ok(ballHtml.includes('ball-cost-heading') && ballHtml.includes('delivered dozen price ÷ 12'));
assert.ok(ballHtml.includes('<noscript>'));
console.log(`PASS: ${guideAuditData.length} guide documents, ${contextualLinks} contextual links, metadata/schema, Amazon gates, carry-gap and ball-cost edge cases.`);
