---
layout: section
---

# Ambientes de Desenvolvimento
## O ciclo de vida do software

---

# O Ciclo de Desenvolvimento de Software

Antes de falarmos sobre como publicar uma aplicação, é importante entender os **ambientes** pelos quais o código passa antes de chegar ao usuário final. Geralmente, dividimos esse ciclo em três etapas principais:

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-blue-400 font-bold text-lg mb-2">1. Dev (Desenvolvimento)</h3>
    <ul class="text-sm mt-2 text-slate-300">
      <li>A máquina local de cada programador.</li>
      <li>É o ambiente onde o código é escrito e testado inicialmente (ex: <code class="text-slate-900 bg-slate-200 px-1 rounded">npm run dev</code> no <code class="text-slate-900 bg-slate-200 px-1 rounded">localhost</code>).</li>
      <li>Muitos bugs são encontrados e corrigidos rapidamente aqui.</li>
    </ul>
  </div>
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-yellow-400 font-bold text-lg mb-2">2. Staging / Homologação</h3>
    <ul class="text-sm mt-2 text-slate-300">
      <li>Um ambiente idêntico à produção, mas fechado ao público.</li>
      <li>Usado para testes finais, QA (Quality Assurance) e aprovação pelo cliente.</li>
      <li>Garante que as integrações externas e banco de dados funcionam como esperado na nuvem.</li>
    </ul>
  </div>
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-green-400 font-bold text-lg mb-2">3. Prod (Produção)</h3>
    <ul class="text-sm mt-2 text-slate-300">
      <li>O ambiente final, ao vivo para os usuários.</li>
      <li>Onde a estabilidade, segurança e performance são críticas.</li>
      <li>Nenhum código com erro conhecido ou não-testado deve chegar aqui.</li>
    </ul>
  </div>
</div>
