---
layout: default
---

# Como o Node.js funciona? (Arquitetura)

O segredo está no **Event Loop** e no **I/O Não Bloqueante**.

<div class="grid grid-cols-2 gap-8 items-center">
  <div>
    <ul class="space-y-4">
      <li><b>Single Threaded:</b> Executa em uma única trilha principal.</li>
      <li><b>Non-blocking:</b> Não espera a conclusão de uma tarefa pesada (como leitura de arquivo) para continuar.</li>
      <li><b>Asíncrono:</b> Utiliza <i>callbacks</i>, <i>promises</i> e <i>async/await</i>.</li>
    </ul>
  </div>
  <div class="bg-white/10 p-6 rounded-xl border border-white/20 text-center">
    <div class="text-4xl mb-4">🔄</div>
    <h3 class="font-bold mb-2">Event Loop</h3>
    <p class="text-xs opacity-80">Gerencia todas as requisições, delegando tarefas pesadas para o sistema operacional e retomando quando prontas.</p>
  </div>
</div>

<div class="mt-8 p-4 bg-yellow-500/10 border-l-4 border-yellow-500">
  <p class="text-sm italic">"O Node.js é como um garçom eficiente que anota os pedidos e os entrega à cozinha, mas não fica parado esperando o prato ficar pronto para atender o próximo cliente."</p>
</div>
