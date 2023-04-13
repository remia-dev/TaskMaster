import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";
import { createProxyMiddleware } from 'http-proxy-middleware'

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true,
       
      }

    }
  },
  plugins: [react()],


});
