import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/assets': '/src/assets', // Adjust the alias path based on your project structure
    },
  },
  esbuild: {
    loader: {
      '.svg': 'file', // Set the loader for SVG files
    },
  },
})
