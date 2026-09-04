import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/ap-biology-progress-tracker-light/',  // 👈 IMPORTANT

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
