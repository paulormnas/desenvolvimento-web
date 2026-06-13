---
layout: section
---

# Introdução ao CI/CD
## Automação e Entrega Contínua

---

# O que é CI/CD?

**CI/CD** é um método para entregar aplicações com frequência aos clientes, introduzindo automação nas etapas de desenvolvimento do app.

- **CI (Continuous Integration - Integração Contínua):**
  - Toda vez que um desenvolvedor faz um *commit* ou abre um *Pull Request*, uma esteira automatizada roda.
  - O código é validado, *linters* (ex: ESLint) são executados e os **testes** são rodados para garantir que não houve regressão ou quebra.

- **CD (Continuous Deployment - Implantação Contínua):**
  - Se a etapa de CI passar (tudo verde), o código é automaticamente construído (`build`) e implantado (`deploy`) em produção, sem intervenção manual.

---

# O Ciclo Ideal no Frontend

<div class="mt-6 bg-slate-800 text-white p-6 rounded-lg border border-green-500 text-center">
  <p class="text-green-300 font-bold text-xl mb-4">Como as peças se encaixam:</p>
  <p class="text-lg text-slate-200">
    <i>Commit no GitHub</i> ➡️ <i>Roda Testes</i> ➡️ <i>Roda Build</i> ➡️ <i>Arquivos vão para a nuvem!</i> 🚀
  </p>
</div>
