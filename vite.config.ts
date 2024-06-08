import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGithubActions = process.env.GITHUB_ACTIONS === true

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGithubActions ? "/youtube-reactjs-mui-page-login/" : "/"
})
