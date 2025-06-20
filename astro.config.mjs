import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node'; // ✅ Added Node adapter

export default defineConfig({
  output: 'server', // ✅ Enable SSR
  adapter: node({ mode: 'standalone' }), // ✅ Use Node adapter
  integrations: [tailwind()],
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  build: {
    assets: 'assets'
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '0.0.0.0',
        '.replit.dev',
        '.spock.replit.dev',
        'c158ae91-0070-43de-a9b8-71ffc9dbc12c-00-19r3rsbpd3z2p.spock.replit.dev'
      ]
    }
  }
});
