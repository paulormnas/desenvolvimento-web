---
transition: slide-up
---

# 2. Variáveis e Constantes

No JavaScript moderno, usamos três palavras-chave para declarar recipientes de dados:

- **`const`**: Para valores que não mudam (constantes). **Sempre prefira `const`**.
- **`let`**: Para valores que podem ser reatribuídos. Possui escopo de bloco `{}`.
- **`var`**: A forma antiga. Evite usar pois possui comportamentos confusos de escopo (hoisting).

```javascript
const nome = "Dev Web";
let contador = 0;

contador = contador + 1; // Permitido
// nome = "Novo Nome";   // Erro! Constantes não podem ser alteradas.

if (true) {
  let escopoLocal = "Visível apenas aqui dentro";
}
// console.log(escopoLocal); // Erro! escopoLocal não está definido aqui fora.
```
