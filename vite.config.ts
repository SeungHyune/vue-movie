import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '~', replacement: '/src' }]
  },
  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/_variables.scss";'
      }
    }
  }
});
