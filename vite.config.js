import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for all built assets
  build: {
    outDir: 'docs', // Output build to docs/ for GitHub Pages
  },
})
