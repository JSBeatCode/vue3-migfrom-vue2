import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: '@vue/compat', // 핵심 설정
      'shared-lib': path.resolve(__dirname, './shared-lib-module/shared-lib.esm.js') // 공유 라이브러리 경로,
    }
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false
  }
})