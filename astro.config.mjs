// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://y5media.net',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  server: { port: 4340 },
  redirects: { '/industries': '/about#industries' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(privacy|terms|404|hero-slant|hero-cross|hero-wave|hero-motion)$/.test(page.replace(/\/$/, '')),
    }),
  ],
});
