import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sirenenouira.github.io',
  base: '/Blog-perso/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
