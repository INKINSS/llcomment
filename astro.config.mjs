// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  devToolbar: { enabled: false },
  integrations: [tailwind(), react()],
  server: {
    host: true,
    port: 4321,
  },
})