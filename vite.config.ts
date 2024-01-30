import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import generateFile from 'vite-plugin-generate-file'
// @ts-ignore
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  plugins: [
    react(),
    legacy(),
    generateFile([{
      type: 'json',
      output: './builds/latest.json',
      data: {
        version,
        url: "https://sportytime.ru/builds/latest.zip"
      }
    }])
  ],
  assetsInclude: ['**/*.md'],
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:10000',
        target: 'https://dev.sportytime.ru',
        changeOrigin: true,
      }
    }
  }
})

