import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // <<<<<<<<<< VERY IMPORTANT for Netlify (relative paths)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
