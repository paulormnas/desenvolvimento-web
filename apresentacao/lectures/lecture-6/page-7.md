---
transition: slide-up
---

# 7. Laços de Repetição (for)

Usados para repetir um bloco de código um número determinado de vezes.

- **`for` tradicional**: Útil quando sabemos exatamente quantas vezes repetir.
- **`for...of`**: Perfeito para percorrer elementos de um array.

```javascript
// For tradicional
for (let i = 0; i < 5; i++) {
  console.log(`Contagem: ${i}`);
}

// For...of (mais comum no dia a dia)
const frutas = ["Maçã", "Banana", "Uva"];
for (const fruta of frutas) {
  console.log(fruta);
}
```
