import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // TODO: Check sass/vite documentation regarding multiple times import.
        additionalData: `@use "./src/assets/sass/index.scss" as *;`,
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
  base: '/portfolio-app/',
})
