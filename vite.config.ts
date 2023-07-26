import { defineConfig } from 'vite';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'doum',
      fileName: 'doum',
    },
  },
  plugins: [
    svgr(),
    dts(),
  ]
})