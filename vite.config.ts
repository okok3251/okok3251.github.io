import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Vite는 프로젝트 루트부터의 절대 경로를 인식
    }
  },
  build: {
    // __dirname은 vite.config.ts가 위치한 디렉터리(frontend/)를 의미
    //outDir: path.resolve(__dirname, '../backend/static'),
    emptyOutDir: true, // 기존 파일 지우기
  },
  server: {
    host : '172.22.22.30',
    port: 3000,
  }
})