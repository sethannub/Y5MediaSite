// Copies the built site into the Y5Leads app for a temporary preview at
// https://leads.y5media.net/preview. Assets go to public/y5media/, pages are
// served by the app's /preview route, so every root link is rewritten:
// asset paths gain /y5media, page links gain /preview.
//
//   npm run build && node scripts/export-preview.mjs ../Y5LeadsCRM/public/y5media

import { cpSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const target = process.argv[2];
if (!target) throw new Error('Give the target folder, e.g. ../Y5LeadsCRM/public/y5media');

const ASSETS = /^\/(_astro|images|fonts|favicon\.ico|favicon\.svg|apple-touch-icon\.png|robots\.txt|sitemap[^/]*\.xml)(\/|$|\?|#)/;
const mapPath = (p) => {
  if (!p.startsWith('/') || p.startsWith('//')) return p;
  if (ASSETS.test(p)) return '/y5media' + p;
  if (p === '/') return '/preview';
  if (p.startsWith('/#') || p.startsWith('/?')) return '/preview' + p.slice(1);
  return '/preview' + p;
};
const rewrite = (text) => text
  .replace(/(\s(?:href|src|action|content)=")(\/[^"]*)"/g, (_, a, p) => `${a}${mapPath(p)}"`)
  .replace(/(content="\d+;url=)(\/[^"]*)"/g, (_, a, p) => `${a}${mapPath(p)}"`)
  .replace(/(srcset=")([^"]*)"/g, (_, a, list) => a + list.split(',').map((s) => s.trim().replace(/^\S+/, mapPath)).join(', ') + '"')
  .replace(/url\((['"]?)(\/[^'")]+)\1\)/g, (_, q, p) => `url(${q}${mapPath(p)}${q})`);

rmSync(target, { recursive: true, force: true });
cpSync('dist', target, { recursive: true });
rmSync(join(target, '_headers'), { force: true });

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
let n = 0;
for (const file of walk(target)) {
  if (!['.html', '.css'].includes(extname(file))) continue;
  writeFileSync(file, rewrite(readFileSync(file, 'utf8')));
  n++;
}
console.log(`Exported to ${target} (${n} files rewritten)`);
