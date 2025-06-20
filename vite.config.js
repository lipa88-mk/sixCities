import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '',
    plugins: [react()],
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
