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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dropdown-menu', '@radix-ui/react-navigation-menu', '@radix-ui/react-tooltip'],
          'supabase': ['@supabase/supabase-js'],
          'icons': ['lucide-react', 'react-icons'],
          'i18n': ['react-i18next', 'i18next'],
        },
      },
    },
  },
})