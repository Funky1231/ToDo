import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  resolve: {
    alias: [ { find: '@', replacement: '/src' } ],
  },
  plugins: [ react() ],
  define: {
    __API__: JSON.stringify('https://1afd-31-146-70-150.ngrok-free.app/'),
  },
});
