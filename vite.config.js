import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use process.env.BASE or default to './' for local preview
const base = process.env.BASE || './';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  publicDir: 'public',
  build: {
    outDir: 'docs', // Output build to docs/ for GitHub Pages
    assetsDir: 'assets'
  },
});