---
layout: two-cols
transition: slide-up
---

# JavaScript (JS)

## O Comportamento

<div class="mt-8 text-lg">

<img src="/lectures/lecture-0/javascript.png" class="h-16 mb-4" />

O JavaScript traz **vida** e **interatividade** à página.

Ele permite que a página responda a ações do usuário:

- Clicar em botões
- Enviar formulários
- Atualizar dados sem recarregar
- Animações complexas

</div>

::right::

<div class="ml-8 mt-16 p-6 rounded-xl bg-gray-900 shadow-2xl">

```js
// Exemplo de JavaScript
function exibirMensagem() {
  alert("Olá! Você clicou no botão.");
}

// Seleciona o botão e adiciona um "ouvinte" de clique
const botao = document.querySelector("button");

botao.addEventListener("click", exibirMensagem);
```

</div>
