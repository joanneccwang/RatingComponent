import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `@import "@/index.scss";`,
      },
    },
  },
});
