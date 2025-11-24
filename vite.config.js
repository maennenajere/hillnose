import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
})