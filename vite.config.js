import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'vite-plugin-postcss';

export default defineConfig({
  plugins: [
    react(),
    postcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    },
    strictPort: true,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "credentialless",
    },
  }
})
