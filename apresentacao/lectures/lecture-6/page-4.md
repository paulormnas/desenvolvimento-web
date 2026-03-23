---
transition: slide-up
---

# 4. Operadores

Ferramentas para manipular dados e realizar comparações.

- **Aritméticos**: `+`, `-`, `*`, `/`, `%` (resto), `**` (potência).
- **Comparação**:
  - == e !=: Compara valores (evite: faz conversão automática).
  - === e !==: Compara **valor e tipo** (sempre use estes).
  - &nbsp; >, <, >=, <=.
- **Lógicos**:
  - && (AND): Verdade se ambos forem verdade.
  - || (OR): Verdade se ao menos um for verdade.
  - ! (NOT): Inverte o valor booleano.

```javascript
const idade = 20;
const temIngresso = true;

if (idade >= 18 && temIngresso) {
  console.log("Pode entrar no show!");
}
```
