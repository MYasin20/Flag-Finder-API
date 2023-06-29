import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/MYasin20/Flag-Finder-API",
  plugins: [react()],
})
