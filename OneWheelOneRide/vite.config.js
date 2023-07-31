import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/OneWheelOneRide-Front",
  plugins: [react()],
  resolve: {
    alias: {
      '~/boostrap': path.resolve(__dirname, './src/bootstrap'),
    }
  }
})
