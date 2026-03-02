---
transition: slide-up
---

# 9. Transições CSS (Suavidade Básica)

O estado original era brusco: botões piscarem ao tocar o mouse.
O `transition` anima e suaviza propriedades de estado (como um `:hover` ou adição de `.ativo`) e garante elegância entre fases.

```css
.botao {
  background-color: #3b82f6;
  color: white;
  transition: background-color 0.3s ease-in-out;
  /* 1. Qual propriedade (ou todas 'all'), 2. Tempo de Duração (300ms), 
  3. Curva Bézier de velocidade (Timing function) */
}

.botao:hover {
  background-color: #1d4ed8;
  /* Quando o mouse entra, ele levará 0.3s até chegar nesse tom ciano escuro 
  em vez de ser uma resposta imediata a piscar nos seus olhos. */
}
```
