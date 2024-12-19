// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercelServerless from '@astrojs/vercel/serverless'


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercelServerless({}),
  devToolbar: {enabled: false},
  integrations: [tailwind(), react()],
  server: {
    host: true,
    port: 4321,
  },
}
);