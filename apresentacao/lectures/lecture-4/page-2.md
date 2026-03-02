---
transition: slide-up
---

# 7. Propriedades do Flexbox

O poder real do display flex reside no alinhamento:

- **Direção do Fluxo (`flex-direction`):**
  - O padrão é `row` (linha, lado a lado). Pode ser `column` (empilhado, de cima para baixo).
- **Alinhamento do Eixo Principal (`justify-content`):**
  - Controla os espaços. Valores comuns: `start`, `center`, `end`, `space-between`, `space-evenly`.
- **Alinhamento do Eixo Transversal (`align-items`):**
  - Como comportar o centro. Ex: `center` para centralizar verticalmente.
- **Quebra de linha (`flex-wrap`):**
  - Se faltar espaço horizontal, os itens quebram para a próxima linha natural.`wrap` (permitir quebra), `nowrap` (padrão)
- **Preenchimento dos espacos (`gap`):**
  - Espaço entre as linhas de células. `gap: 20px;` (Não precisa colocar marigns em cada iten!)
