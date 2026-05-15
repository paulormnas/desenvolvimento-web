---
layout: section
---

# Desenvolvimento com IA e LLMs
## O que é e como funciona

---

# O que é o Desenvolvimento com IA?

Desenvolver com IA não significa que "o robô faz tudo e o programador perde o emprego". Pelo contrário, é uma parceria ("Pair Programming").

- A IA atua como um assistente supercapacitado (Copilot) ou um membro da equipe (Agente).
- O desenvolvedor assume o papel de **Arquiteto** e **Revisor**.
- As ferramentas auxiliam na criação de testes, refatoração de código, explicação de bugs e geração de *boilerplate* (código repetitivo).

<br/>

**Exemplo no Frontend:**
Em vez de criar o HTML, CSS e o componente React de um botão "do zero", você descreve: *"Crie um botão verde, arredondado, que dispara uma função de clique e tem estado de loading".* A IA gera o código, e você revisa e integra.

---

# O que são LLMs?

Para entender as ferramentas de IA, precisamos entender seu motor: os **LLMs (Large Language Models ou Modelos de Linguagem de Grande Escala)**.

- **Exemplos conhecidos:** GPT-5 (OpenAI), Claude 4.7 Sonnet (Anthropic), Gemini 3.1 Pro (Google).
- **Como funcionam?** São redes neurais gigantescas treinadas em imensas quantidades de texto (incluindo bilhões de linhas de código).
- **A Mágica:** Eles preveem a próxima palavra (ou token) com base no contexto anterior. Devido à sua escala, desenvolvem habilidades de raciocínio, lógica e interpretação de código incrivelmente avançadas.

<div class="bg-slate-800 text-white p-4 rounded-lg border border-yellow-500 mt-4">
  <p class="text-yellow-300 text-sm"><b>Importante:</b> LLMs não "copiam e colam" código de um banco de dados. Eles <i>geram</i> código novo, probabilístico, baseado nos padrões que aprenderam durante o treinamento.</p>
</div>

---

# Como os LLMs são usados no desenvolvimento?

Os LLMs atuam em diferentes etapas do fluxo de desenvolvimento:

1. **Autocomplete / Geração de Código:** Escrevem as próximas linhas enquanto você digita.
2. **Chat contextualizado:** Você pergunta sobre um arquivo ou um trecho de código específico (Ex: "Como otimizar este UseEffect?").
3. **Análise de Erros e Debugging:** Você cola o erro do terminal, e o LLM explica o que está acontecendo e como resolver.
4. **Geração de Testes Unitários:** O LLM analisa a função e cria todos os casos de teste (sucesso e falha).
5. **Automação Agêntica:** (Abordaremos na próxima seção).
