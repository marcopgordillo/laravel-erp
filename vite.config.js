import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../public',
    emptyOutDir: false,
  },
  root: './client',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  }
})
