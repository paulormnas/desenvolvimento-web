---
transition: slide-up
---

# 7. CSS Grid Layout (Grelha/Grade)

Se Flexbox é incrível para uma linha ou uma coluna, o CSS Grid Layout é para o layout completo de uma página **em duas dimensões (Linhas e Colunas ao mesmo tempo)**.

- **Grid Container:** `display: grid;`.
- Planeja a estrutura em *tracks* (linhas ou colunas virtuais).

```css
.layout {
  display: grid;
  /* Cria 3 colunas iguais. 1fr significa uma "fração do espaço livre" */
  grid-template-columns: 1fr 1fr 1fr;
  /* Cria 2 linhas virtuais */
  grid-template-rows: 100px auto auto;
  gap: 15px;
}
```

Desta forma criamos uma galeria de fotos perfeita sem "matemática de larguras percentuais" mirabolante que acontecia nos métodos antigos.
