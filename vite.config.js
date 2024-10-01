import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        nav: "https://microfrontend-nav.netlify.app/assets/remoteEntry.js",
        main: "https://microfrontend-main.netlify.app/assets/remoteEntry.js",
        footer: "https://microfrontend-footer.netlify.app/assets/remoteEntry.js"
      },
      shared: ['react', 'react-dom']
    })
  ],
  preview: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  base: '/' 
})