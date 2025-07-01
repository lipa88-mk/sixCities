import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig({
    base: '',
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
        outDir: 'build',
    },
    test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',}
});
