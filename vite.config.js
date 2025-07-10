import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig({
    base: '/sixCities/',
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react()
    ],
    server: {
        open: true,
        port: 3000,
    },
     build: {
        outDir: 'dist',
    },
    test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',}
});
