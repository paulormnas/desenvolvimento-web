---
transition: slide-up
---

# 8. Laços de Repetição (while / do while)

Usados quando não sabemos exatamente o número de repetições, dependendo de uma condição dinâmica.

- **`while`**: Checa a condição **antes** de executar.
- **`do while`**: Executa o código ao menos **uma vez**, e depois checa a condição.

```javascript
let contador = 0;

while (contador < 3) {
  console.log("Repetindo...");
  contador++;
}

do {
  console.log("Executo ao menos uma vez!");
} while (false);
```
