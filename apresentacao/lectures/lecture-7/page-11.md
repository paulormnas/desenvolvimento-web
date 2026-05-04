---
layout: default
---

# Como o React é tão rápido? Virtual DOM

Manipular o DOM real do navegador é custoso e lento.

1.  **Cópia em Memória:** O React mantém uma representação leve do DOM (o Virtual DOM).
2.  **Diffing:** Quando algo muda, o React compara o novo Virtual DOM com a versão anterior.
3.  **Reconciliation:** Ele identifica exatamente o que mudou e atualiza **apenas** essas partes no DOM real.

<div class="flex justify-center mt-12">
  <div class="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30 flex items-center gap-8">
    <div class="text-center">
      <div class="text-xs font-bold uppercase mb-2">Mudança de Estado</div>
      <div class="text-2xl">⚡</div>
    </div>
    <div class="text-2xl">➡️</div>
    <div class="text-center">
      <div class="text-xs font-bold uppercase mb-2">Virtual DOM</div>
      <div class="text-2xl">🏗️</div>
    </div>
    <div class="text-2xl">➡️</div>
    <div class="text-center">
      <div class="text-xs font-bold uppercase mb-2">Update Cirúrgico</div>
      <div class="text-2xl">💉</div>
    </div>
  </div>
</div>
