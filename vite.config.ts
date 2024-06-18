import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import generateFile from 'vite-plugin-generate-file';
// @ts-ignore
import { version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      lodash: 'lodash-es',
    },
  },
  plugins: [
    react(),
    legacy(),
    generateFile([
      {
        type: 'json',
        output: './builds/latest.json',
        data: {
          version,
          url: 'https://app.sportytime.ru/builds/latest.zip',
        },
      },
    ]),
  ],
  assetsInclude: ['**/*.md', 'src/firebase-messaging-sw.ts'],
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:10000',
        target: 'https://dev.sportytime.ru',
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
});
