---
transition: slide-up
---

# 13. JavaScript vs TypeScript

**TypeScript** é um "supeconjunto" do JavaScript que adiciona **Tipagem Estática**.

| Característica | JavaScript | TypeScript |
| :--- | :--- | :--- |
| **Tipagem** | Dinâmica (variável muda de tipo) | Estática (você define o tipo) |
| **Erros** | Descobertos ao rodar (Runtime) | Descobertos ao escrever (Compile-time) |
| **Produtividade** | Rápido para protótipos | Melhor para projetos grandes |

```typescript
// Em TypeScript
function somar(a: number, b: number): number {
  return a + b;
}

somar(5, "10"); // O editor te avisa do erro na hora!
```
