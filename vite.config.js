import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        nav: process.env.NAV_URL || "http://localhost:4174/assets/remoteEntry.js",
        main: process.env.MAIN_URL || "http://localhost:4175/assets/remoteEntry.js",
        footer: process.env.FOOTER_URL || "http://localhost:4173/assets/remoteEntry.js"
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