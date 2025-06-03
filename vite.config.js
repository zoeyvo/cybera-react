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
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          
          // Organize by file type
          if (/\.(png|jpe?g|gif|svg|ico|webp|avif)$/i.test(assetInfo.name)) {
            extType = 'images';
          } else if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            extType = 'fonts';
          } else if (/\.(mp3|wav|ogg|m4a|aac)$/i.test(assetInfo.name)) {
            extType = 'audio';
          } else if (/\.(cur|ico)$/i.test(assetInfo.name)) {
            extType = 'cursors';
          }
          
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});