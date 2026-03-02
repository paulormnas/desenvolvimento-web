---
transition: slide-up
---

# 2. Especificidade e Pseudo-classes

A Cascata (Cascade) decide qual estilo vence quando há conflitos.
**Regra geral:** `ID > Classe > Elemento`.

### Pseudo-classes

Alteram o estilo baseado em estados e interações do usuário.

- `:hover` - Quando o mouse passa sobre o elemento.
- `:active` - Quando o elemento está sendo clicado.
- `:focus` - Quando o elemento recebe foco (ex: inputs de formulário).
- `:nth-child(n)` - Seleciona elementos baseado na sua posição.

```css
button:hover {
  background-color: darkblue;
}
```
