import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';

export default defineConfig({
  define: {
    'global': {},
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'doum',
      fileName: 'doum',
    },
  },
  plugins: [
    react(),
    svgr(),
    dts(),
  ]
})