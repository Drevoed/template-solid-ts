/// <reference types="vitest" />

import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    solid(),
    tsconfigPaths(),
    optimizeCssModules(),
    tailwindcss(),
  ],

  server: {
    port: 1420,
    strictPort: true,
  },
  test: {
    setupFiles: 'setupVitest.ts',
    includeSource: ['src/**/*.{ts,tsx}'],
    isolate: false,
  },
  preview: {
    port: 1420,
    //https: true,
  },
  build: {
    target: 'es2022',
  },
}));
