---
layout: section
---

# A Era dos Agentes
## Além dos Chatbots

---

# O que são Agentes de IA?

Um simples chatbot (como a versão web do ChatGPT) recebe texto, processa e devolve texto. Ele está "preso" na tela de chat.

Um **Agente de IA** é um LLM equipado com a capacidade de **tomar decisões, usar ferramentas e agir** de forma autônoma (ou semi-autônoma) em um ambiente (como o seu sistema operacional ou sua IDE).

<div class="grid grid-cols-4 gap-2 mt-6 text-center text-sm">
  <div class="bg-slate-800 text-white p-2 rounded border border-slate-600">
    <div class="text-2xl mb-2">👁️</div>
    <div class="font-bold text-slate-200">Percepção</div>
    <div class="text-xs mt-1 text-slate-300">O agente pode ler arquivos, ver logs do terminal e inspecionar a árvore do projeto.</div>
  </div>
  <div class="bg-slate-800 text-white p-2 rounded border border-slate-600">
    <div class="text-2xl mb-2">🧠</div>
    <div class="font-bold text-slate-200">Raciocínio</div>
    <div class="text-xs mt-1 text-slate-300">O agente analisa o problema, quebra em tarefas menores e planeja uma solução.</div>
  </div>
  <div class="bg-slate-800 text-white p-2 rounded border border-slate-600">
    <div class="text-2xl mb-2">🛠️</div>
    <div class="font-bold text-slate-200">Ação</div>
    <div class="text-xs mt-1 text-slate-300">O agente pode usar ferramentas: criar, editar arquivos, executar comandos no terminal.</div>
  </div>
  <div class="bg-slate-800 text-white p-2 rounded border border-slate-600">
    <div class="text-2xl mb-2">🔄</div>
    <div class="font-bold text-slate-200">Feedback Loop</div>
    <div class="text-xs mt-1 text-slate-300">O agente analisa o resultado da ação (ex: falha num teste) e corrige o próprio erro.</div>
  </div>
</div>

---

# Agentes vs Chatbots no Desenvolvimento

<table class="w-full text-sm">
  <thead>
    <tr class="bg-slate-800 text-white">
      <th class="p-2 text-left w-1/2">Com um Chatbot (ex: ChatGPT)</th>
      <th class="p-2 text-left w-1/2 border-l border-slate-600">Com um Agente (ex: Antigravity)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-gray-700">
      <td class="p-2">1. Você copia o código do seu arquivo.</td>
      <td class="p-2 border-l border-slate-600">1. Você diz "Crie uma tela de login em <code>App.jsx</code>".</td>
    </tr>
    <tr class="border-b border-gray-700">
      <td class="p-2">2. Você cola no chat e pede para modificar.</td>
      <td class="p-2 border-l border-slate-600 text-green-600 dark:text-green-400 font-semibold">2. O agente procura o arquivo sozinho, lê o conteúdo...</td>
    </tr>
    <tr class="border-b border-gray-700">
      <td class="p-2">3. O Chat gera o código novo.</td>
      <td class="p-2 border-l border-slate-600 text-green-600 dark:text-green-400 font-semibold">3. ...faz a edição diretamente no arquivo...</td>
    </tr>
    <tr>
      <td class="p-2">4. Você copia do chat e cola no seu editor.</td>
      <td class="p-2 border-l border-slate-600 text-green-600 dark:text-green-400 font-semibold">4. ...roda o teste ou lint no terminal, e se falhar, ele mesmo arruma!</td>
    </tr>
  </tbody>
</table>

<br/>

<div class="bg-slate-800 text-white p-4 rounded-lg border border-blue-500">
  <p class="text-blue-300 font-bold">O Agente não apenas sugere o código, ele <b>executa a tarefa</b> dentro do seu ambiente.</p>
</div>
