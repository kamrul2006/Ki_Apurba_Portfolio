import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  optimizeDeps: {
    exclude: ["@emailjs/browser"],
  },
  server: {
    historyApiFallback: true,
    // ----------------This is only for development server
  },
})
