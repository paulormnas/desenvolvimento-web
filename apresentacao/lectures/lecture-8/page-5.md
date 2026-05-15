---
layout: section
---

# O Ecossistema de Ferramentas
## Como incorporar IA no seu Workflow

---

# IDEs Focadas em IA

Existem duas abordagens principais nas ferramentas atuais: **Extensões** para editores existentes e **IDEs Nativas ("AI-First")**.

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-blue-500">
    <h3 class="text-xl font-bold text-blue-300 mb-2">VS Code + Copilot</h3>
    <ul class="text-sm text-slate-200">
      <li><strong>Categoria:</strong> Extensão.</li>
      <li>O GitHub Copilot (baseado no OpenAI Codex) foi pioneiro no autocomplete avançado.</li>
      <li>Permite abrir um chat lateral para perguntar sobre o código.</li>
      <li><strong>Ponto Forte:</strong> Você continua usando o VS Code que já conhece.</li>
    </ul>
  </div>
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-green-500">
    <h3 class="text-xl font-bold text-green-300 mb-2">Cursor</h3>
    <ul class="text-sm text-slate-200">
      <li><strong>Categoria:</strong> IDE Nativa (Fork do VS Code).</li>
      <li>Construído do zero para integrar IA. Possui um recurso poderoso chamado "Composer" (Cmd+I) que pode editar múltiplos arquivos de uma vez.</li>
      <li>Excelente compreensão do contexto do projeto inteiro.</li>
      <li><strong>Ponto Forte:</strong> Experiência incrivelmente fluida para SDD e refatoração em massa.</li>
    </ul>
  </div>
</div>

---

# Ferramentas Agênticas: Antigravity e Claude Code

Enquanto as IDEs focam na "edição auxiliada", existem ferramentas projetadas para serem **Agentes Autônomos**.

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-orange-500">
    <h3 class="text-xl font-bold text-orange-300 mb-2">Claude Code</h3>
    <ul class="text-sm text-slate-200">
      <li>Agente via CLI (Linha de Comando) criado pela Anthropic.</li>
      <li>Você executa no terminal e ele interage com seu projeto.</li>
      <li>Excelente para tarefas em background, executar scripts, criar arquivos, fazer commits.</li>
    </ul>
  </div>
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-purple-500">
    <h3 class="text-xl font-bold text-purple-300 mb-2">Antigravity</h3>
    <ul class="text-sm text-slate-200">
      <li>Agente de IA avançado que atua diretamente no seu ambiente de desenvolvimento.</li>
      <li>Pode ler arquivos, buscar na web, rodar comandos de terminal e escrever código.</li>
      <li><strong>Diferencial:</strong> Suporte a "Skills" (Habilidades personalizadas) e profunda integração para Pair Programming autônomo.</li>
      <li><em>(Esta é a ferramenta que usaremos nas aulas práticas!)</em></li>
    </ul>
  </div>
</div>
