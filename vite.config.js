import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/members': {
        target: 'http://116.193.222.198:8090',
        changeOrigin: true,
        secure: false
      }
    }
  }
});