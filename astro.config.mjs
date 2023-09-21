import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), compress()],
  site: 'https://llambi.github.io',
  base: '/primero-cafe'
});