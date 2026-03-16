import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: process.cwd(),
  logLevel: 'info',
  build: {
    sourcemap: true,
    minify: false,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: 'localhost',
    open: true,
  }
})


