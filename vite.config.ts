import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'import.meta.env.VITE_APP_LOGO': JSON.stringify(env.VITE_APP_LOGO),
      'import.meta.env.VITE_APP_TITLE': JSON.stringify(env.VITE_APP_TITLE),
      'import.meta.env.VITE_ANALYTICS_ENDPOINT': JSON.stringify(env.VITE_ANALYTICS_ENDPOINT),
      'import.meta.env.VITE_ANALYTICS_WEBSITE_ID': JSON.stringify(env.VITE_ANALYTICS_WEBSITE_ID),
    },
  };
});
