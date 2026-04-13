import { defineConfig } from 'vite';

export default defineConfig({
  // Set base to './' to allow the build to work from a local file directory
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  }
});
