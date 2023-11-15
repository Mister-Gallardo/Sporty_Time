import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  plugins: [
    react(),
    legacy()
  ],
  assetsInclude: ['**/*.md'],
  server: {
    proxy: {
      '/uploads': {
        // target: 'http://localhost:8100',
        target: 'https://playpadel.lakileki.com',
        changeOrigin: true,
      },
      '/api': {
        // target: 'http://localhost:8100',
        target: 'https://playpadel.lakileki.com',
        changeOrigin: true,
      }
    }
  }
})

