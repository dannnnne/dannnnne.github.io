import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ 이거로 바꿔!
  plugins: [react()],
});
