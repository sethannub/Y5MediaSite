// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://y5media-site.pages.dev',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  server: { port: 4340 },
  integrations: [
    sitemap({
      filter: (page) => !/\/(privacy|terms|404|hero-slant|hero-cross|hero-wave)$/.test(page.replace(/\/$/, '')),
    }),
  ],
});
