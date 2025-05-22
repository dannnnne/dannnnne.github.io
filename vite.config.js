import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dannnnne.github.io/', // ✅ 이건 그대로 둬야 GitHub Pages에서 JS 로드됨
  plugins: [react()],
});
