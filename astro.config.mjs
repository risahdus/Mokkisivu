import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Pakotetaan Vercel-funktio käyttämään Node 20:tä, jotta vältytään Node 18 -virheeltä
    runtime: 'nodejs24.x'
  }),
});