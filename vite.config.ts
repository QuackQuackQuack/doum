import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  define: {
    global: {},
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
    dts(),
  ]
})