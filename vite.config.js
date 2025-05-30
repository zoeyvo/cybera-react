import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cyberia/', // Set to your repo name if your repo is github.com/zoeyvo/cyberia
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
