import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Adicione esta linha exatamente assim:
  base: '/book-catalog/', 
})
