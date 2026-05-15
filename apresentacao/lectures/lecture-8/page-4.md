---
layout: section
---

# Técnicas de Desenvolvimento
## Como estruturamos o desenvolvimento (com e sem IA)

---

# TDD e DDD: A Fundação

Antes de falar de desenvolvimento agêntico, precisamos relembrar como estruturamos o código.

### TDD (Test-Driven Development)
Desenvolvimento Orientado a Testes. Você primeiro escreve o teste unitário (que inicialmente vai falhar), depois escreve o código mínimo para o teste passar, e por fim refatora.
- **Por que é útil com IA?** A IA é ótima em escrever código para fazer um teste passar! Isso garante que a IA não quebre regras de negócio (alucinação).

### DDD (Domain-Driven Design)
Design Orientado a Domínio. É focar a modelagem do software nas regras do negócio ("O Domínio") e usar uma linguagem ubíqua (linguagem comum entre devs e especialistas do negócio).
- **Por que é útil com IA?** Modelos de linguagem entendem *muito* bem regras descritas em linguagem natural (humana). Quanto melhor seu DDD, melhor a IA vai codificar seu sistema.

---

# SDD (Spec-Driven Development)

Com o avanço das ferramentas de IA, está surgindo o **Desenvolvimento Orientado a Especificação (SDD)**.

No SDD, a sua principal tarefa como desenvolvedor não é escrever o código em si, mas sim **escrever as regras e a especificação (o "Prompt")** de forma tão clara e detalhada que um Agente de IA possa implementar o código de forma determinística e precisa.

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-sm font-bold text-slate-300">Em vez de focar no "Como":</h3>
    <pre class="text-xs bg-black text-slate-300 p-2 mt-2 rounded"><code>function sum(a, b) {
  return a + b;
}</code></pre>
  </div>
  <div class="bg-indigo-900 text-white p-4 rounded-lg border border-indigo-500">
    <h3 class="text-sm font-bold text-indigo-300">Focamos no "O Que":</h3>
    <pre class="text-xs bg-black text-indigo-200 p-2 mt-2 rounded border border-indigo-700"><code># Funcionalidade: Carrinho
Crie um componente de carrinho que:
- Recebe uma lista de itens.
- Soma o valor total (usando useMemo).
- Mostre um botão "Finalizar" se total > 0.
</code></pre>
  </div>
</div>

---

# Exemplo prático de fluxo com SDD

Como um desenvolvedor usa o SDD na prática no dia a dia:

1. **Definição da Tarefa:** O Dev abre o arquivo `tarefa-auth.md` e detalha em Markdown como a tela de Login deve funcionar, onde ficarão os arquivos, e as regras de negócio.
2. **Contexto:** O Dev orienta a IA para seguir a arquitetura definida (ex: "Siga o padrão da nossa aula 7, usando React Hooks").
3. **Execução:** O Dev pede ao **Agente de IA (ex: Antigravity)**: *"Implemente o que está descrito em tarefa-auth.md"*.
4. **Trabalho do Agente:** O agente lê o `.md`, cria o arquivo `Login.jsx`, adiciona o estilo, cria os testes e avisa: *"Finalizado"*.
5. **Revisão:** O Dev analisa o código gerado, testa a interface e aprova. Se algo estiver errado, em vez de alterar o código, ele **ajusta a especificação (o .md)** e pede para o agente refazer (evitando inconsistências entre código e documentação).
