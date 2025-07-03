// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    output: 'static',
  vite: {
      plugins: [tailwindcss()],
      resolve: {
          alias: {
              '@': path.resolve('./src'),
          },
      },
  },

  integrations: [react()]
});