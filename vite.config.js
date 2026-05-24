import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './tw-lab5',  
  plugins: [
    tailwindcss(),
  ],
})