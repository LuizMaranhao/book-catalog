import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione esta linha com o nome EXATO do seu repositório no GitHub
  base: '/NOME_DO_SEU_REPOSITORIO/', 
})
