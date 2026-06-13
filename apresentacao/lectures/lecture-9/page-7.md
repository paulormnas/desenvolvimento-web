---
layout: section
---

# Hands-on: Deploy na Vercel
## Magia, performance e CI/CD instantâneo

---

# Deploy Automático com Vercel

A Vercel eleva a experiência. O CI/CD já vem pronto e configurado fora da caixa.

**Passo a passo:**
1. Tenha o seu projeto em um repositório no **GitHub**.
2. Acesse `vercel.com` e crie sua conta logando com o GitHub.
3. Clique em **"Add New Project"** e importe o repositório do seu projeto.
4. A Vercel vai reconhecer automaticamente qual framework você usou (Vite, Create React App, Next.js, etc) e preencher os comandos de Build (`npm run build`).
5. (Opcional) Insira as variáveis de ambiente em "Environment Variables" se o seu projeto precisar.
6. Clique em **Deploy**! 🚀

---

# O "Poder" do CI/CD da Vercel
A partir desse momento, **qualquer novo Push ou Merge para a branch principal (`main`/`master`)** no GitHub irá automaticamente iniciar um novo processo de Build e publicar as novidades online em poucos segundos.

**Previews de PRs:** Se você abrir um *Pull Request*, a Vercel criará um deploy temporário com uma URL exclusiva para você testar as mudanças *antes* de irem para produção.
