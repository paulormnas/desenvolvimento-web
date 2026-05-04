---
layout: default
---

# O Poder da Componentização

Pensar em interfaces como um conjunto de peças.

Imagine um site como um conjunto de peças de **LEGO**.

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="bg-gray-100/50 p-4 rounded border border-gray-200 text-center shadow-sm">
    <div class="text-2xl mb-2">🧩</div>
    <h4 class="text-sm font-bold">Independência</h4>
    <p class="text-xs opacity-70">Cada componente tem sua própria lógica e estilo.</p>
  </div>
  <div class="bg-gray-100/50 p-4 rounded border border-gray-200 text-center shadow-sm">
    <div class="text-2xl mb-2">♻️</div>
    <h4 class="text-sm font-bold">Reutilização</h4>
    <p class="text-xs opacity-70">Use o mesmo botão ou card em várias partes do site.</p>
  </div>
  <div class="bg-gray-100/50 p-4 rounded border border-gray-200 text-center shadow-sm">
    <div class="text-2xl mb-2">🏗️</div>
    <h4 class="text-sm font-bold">Manutenção</h4>
    <p class="text-xs opacity-70">Mude um componente em um lugar e todos se atualizam.</p>
  </div>
</div>

<div class="mt-8 p-4 bg-blue-500/10 rounded-lg">
  <code class="text-xs">
    &lt;Header /&gt;<br>
    &lt;Sidebar /&gt;<br>
    &lt;MainContent&gt;<br>
    &nbsp;&nbsp;&lt;UserList /&gt;<br>
    &lt;/MainContent&gt;<br>
    &lt;Footer /&gt;
  </code>
</div>
