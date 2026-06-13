---
layout: section
---

# O que é Deploy no Frontend?
## Da sua máquina para o mundo

---

# O que é o Deploy?

O processo de **deploy** (ou implantação) consiste em pegar o código que você desenvolveu e testou na sua máquina local e colocá-lo em um servidor público para que os usuários possam acessá-lo pela internet.

No contexto do **Frontend**, isso geralmente significa:

1. **Build:** Otimizar e "empacotar" o código (HTML, CSS e JavaScript) em arquivos menores e mais rápidos para os navegadores. (Ex: rodar `npm run build` no Vite, React ou Angular).
2. **Hospedagem (Hosting):** Enviar os arquivos gerados (estáticos) para um servidor web que vai servi-los aos clientes.

<div class="mt-8 bg-slate-800 text-white p-4 rounded-lg border border-blue-500">
  <p class="text-blue-300 font-bold mb-2">Por que o Frontend é mais simples?</p>
  <p class="text-sm text-slate-200">Aplicações frontend modernas (SPAs, sites estáticos) após o <i>build</i> resultam em arquivos estáticos puros (HTML/JS/CSS). Não exigem servidores complexos com Node.js ou PHP rodando para renderizar a página; basta um servidor de arquivos estáticos simples (CDN).</p>
</div>
