import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog-affiliation.com',
  base: '/Blog-perso/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
