---
layout: section
---

# Hands-on: Deploy no GitHub Pages
## Publicando seu site grátis com o Github

---

# Deploy usando GitHub Pages

O GitHub Pages é uma maneira fácil de servir um site diretamente do seu repositório do GitHub. Ele só suporta arquivos estáticos (HTML/CSS/JS).

**Passo a passo com Vite:**
1. No seu `vite.config.js`, defina a `base` com o nome do seu repositório:
   ```js
   export default defineConfig({
     base: '/nome-do-repositorio/',
   })
   ```
2. Instale o pacote `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
---

# Deploy usando GitHub Pages (Cont.)

3. Adicione um script no `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
4. Gere o build e rode o deploy:
   ```bash
   npm run build && npm run deploy
   ```
5. No GitHub, vá nas opções do repositório (`Settings > Pages`) e verifique se a source está apontando para o branch `gh-pages`.
