---
transition: slide-up
---

# 5. Estruturas Condicionais (if/else)

Permitem que o código tome caminhos diferentes baseados em condições booleanas.

- **`if`**: Executa o bloco se a condição for verdadeira.
- **`else if`**: Testa uma nova condição se a anterior for falsa.
- **`else`**: Executa se nenhuma condição anterior for verdadeira.

```javascript
const hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
```
