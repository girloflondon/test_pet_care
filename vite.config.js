import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/load-content": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/load-content/, ''),
      },
      "/save-content": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/save-content/, ''),
      },
      "/load-links": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/save-link": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
  },
  base: "/test_pet_care/",
});
