import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/APBEAHS/',  // 👈 IMPORTANT

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
