---
transition: slide-up
---

# 6. Estruturas Condicionais (switch)

Ideal quando temos uma única variável e queremos comparar com múltiplos valores possíveis.

- **`case`**: Define um valor de comparação.
- **`break`**: Para a execução do switch (importante: sem ele, o código "escorrega" para o próximo case).
- **`default`**: Funciona como o `else`.

```javascript
const fruta = "Maçã";

switch (fruta) {
  case "Banana":
    console.log("Rica em potássio!");
    break;
  case "Maçã":
    console.log("Mantenha o médico longe!");
    break;
  default:
    console.log("Fruta desconhecida.");
}
```
