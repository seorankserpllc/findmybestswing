import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { guideRoutes, renderGuideRoute, validateGuideLinks } from '../dist-ssr/entry-server.js';

validateGuideLinks();
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
for (const route of guideRoutes) {
  const { html, meta } = renderGuideRoute(route);
  const canonical = `https://findmybestswing.com${meta.canonicalPath}`;
  let document = template.replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
    .replace(/<title>.*?<\/title>/, () => `<title>${escape(meta.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, () => `<link rel="canonical" href="${canonical}" />`);
  for (const [attribute, key, value] of [
    ['name', 'description', meta.description], ['name', 'twitter:title', meta.title],
    ['name', 'twitter:description', meta.description], ['property', 'og:title', meta.title],
    ['property', 'og:description', meta.description], ['property', 'og:url', canonical],
    ['property', 'og:type', meta.type ?? 'website'],
  ]) {
    document = document.replace(new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*\\/?>`), () => `<meta ${attribute}="${key}" content="${escape(value)}" />`);
  }
  if (!document.includes('<h1') || (route !== '/guides' && !document.includes('data-guide-schema='))) throw new Error(`Incomplete initial HTML: ${route}`);
  const directory = join('dist', route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), document);
}
console.log(`Prerendered ${guideRoutes.length} guide routes with content, links, metadata and article schema.`);
