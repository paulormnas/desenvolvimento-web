---
transition: slide-up
---

# 3. Box Sizing

O cálculo tradicional das caixas na web causa confusão porque `padding` e `border` são *adicionados* à largura total definida.

**A solução:** A propriedade `box-sizing`.
Com `box-sizing: border-box;`, a largura total permanece a mesma, e o `padding`/`border` são descontados do conteúdo interno.

```css
/* Prática muito comum e recomendada nos projetos modernos */
* {
  box-sizing: border-box;
}

.caixa {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Largura total será de 300px perfeitos */
}
```
