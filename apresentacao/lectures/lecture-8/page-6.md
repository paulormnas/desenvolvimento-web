---
layout: section
---

# Como os Agentes ententem o seu Projeto?
## Contexto e Protocolos

---

# O Desafio do Contexto

Para que um Agente de IA consiga trabalhar no seu projeto, ele precisa de **Contexto**. 

Se você pedir "Altere a cor do botão", o Agente precisa saber:
1. Em qual arquivo o botão está?
2. Nós usamos CSS puro, Tailwind ou Styled Components?
3. Qual é a paleta de cores oficial do projeto?

O maior desafio das ferramentas de IA é **como alimentar o LLM com o contexto correto**, já que as janelas de contexto (limite de palavras que o modelo consegue processar) são limitadas e cobrar muito contexto fica caro.

---

# MCP (Model Context Protocol)

O **MCP (Model Context Protocol)** é um padrão aberto (open-source) criado para unificar como os modelos de IA se conectam a fontes de dados.

- **O Problema:** Antes, cada agente de IA tinha que ser programado especificamente para ler um banco Postgres, ou o GitHub, ou o Google Drive.
- **A Solução:** O MCP cria um padrão. Você instala um "Servidor MCP" (ex: MCP do Postgres) e qualquer Agente que suporte o padrão MCP consegue conversar com esse banco de dados.
- **Na prática:** Permite que o seu Agente (como o Cursor ou Antigravity) tenha acesso seguro a ferramentas externas locais e remotas para obter informações relevantes para o seu código.

---

# ACP e AGENT.md

### ACP (Agentic Coding Protocol)
Protocolos como o ACP definem como o agente interage com o editor de código e o sistema de arquivos. É o que permite que o agente não só veja o código, mas também aplique *diffs* (alterações), leia logs de erro em tempo real do terminal e entenda onde o cursor do programador está no momento.

### AGENT.md (ou regras personalizadas)
É um arquivo que você coloca na raiz do seu projeto para "ensinar" o agente como ele deve se comportar **naquele repositório específico**.

<pre class="text-xs bg-slate-900 text-slate-200 p-3 mt-2 rounded border border-slate-700"><code># Exemplo de AGENT.md para o nosso curso
- Você é um desenvolvedor Frontend Sênior.
- Sempre utilize React com Functional Components e Hooks.
- Para estilização, utilize sempre Vanilla CSS (não use Tailwind).
- Sempre separe a lógica (JS) da apresentação (HTML) quando possível.
- Antes de commitar, sempre rode `npm run test`.
</code></pre>
<p class="text-sm mt-2">Desta forma, toda vez que o Antigravity ou Cursor for programar para você, ele vai ler essas regras antes de gerar qualquer linha de código!</p>
