import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react'; // ✅ This must be here
import 'dotenv/config';


export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind(), react()], // ✅ Make sure react() is called
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
  build: {
    assets: 'assets',
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
        'c158ae91-0070-43de-a9b8-71ffc9dbc12c-00-19r3rsbpd3z2p.spock.replit.dev',
      ]
    }
  }
});
