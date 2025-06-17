import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    server: {
      hmr: {
        port: 5000
      }
    }
  }
});