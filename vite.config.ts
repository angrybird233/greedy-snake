import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
    port: 8081,
    https: false,
    hmr: true,
    watch: {
      ignored: ['!**/node_modules/your-package-name/**'],
    },
  },
  resolve: {
    alias: [ { find: '@', replacement: __dirname+'/src'} ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  optimizeDeps: {
    dynamicImportVarsOptions: false,
  },
})
