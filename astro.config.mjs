import { defineConfig } from 'astro/config';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE, //This works during build
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      host: true,          // listen on all network interfaces
      port: 4321,          // your dev port
      strictPort: true,    // optional: prevents switching ports
      allowedHosts: ['slouchy-burthensome-junie.ngrok-free.dev'], // allow all hosts (including ngrok)
    },
  },

  integrations: [
    react(),
    sitemap(),
  ],
});