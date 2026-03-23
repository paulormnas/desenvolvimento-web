---
transition: slide-up
---

# 9. O que é o DOM?

**DOM (Document Object Model)** é a representação do seu HTML como uma árvore de objetos que o JavaScript pode manipular.

### Selecionando Elementos
Antigamente usávamos muitos IDs, hoje as APIs modernas facilitam tudo:

- `document.querySelector(".classe")`: Seleciona o primeiro elemento que bate com o seletor CSS.
- `document.querySelectorAll(".classe")`: Seleciona todos e retorna uma lista.
- `document.getElementById("meu-id")`: Seleção rápida por ID.

```javascript
const titulo = document.querySelector("h1");
const botoes = document.querySelectorAll(".btn-primary");
```
