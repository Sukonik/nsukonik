import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Defaults serve from GitHub Pages project URL. For the custom domain (after owner approves DNS),
// build with SITE=https://nsukonik.com BASE=/ (see docs/deploy.md).
const site = process.env.SITE ?? 'https://sukonik.github.io';
const base = process.env.BASE ?? '/nsukonik';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
