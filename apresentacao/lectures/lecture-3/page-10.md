---
transition: slide-up
---

# 6. Position (O fluxo tradicional)

A propriedade `position` permite mover elementos para fora de seu fluxo normal no documento.

- `static` (padrão): Segue o fluxo natural.
- `relative`: É movido usando `top`, `bottom`, `left`, `right`, mas ***em relação a sua posição original***.
- `absolute`: O elemento sai do fluxo. Ele é posicionado relativo ao seu ancestral mais próximo que **também tenha posição definida**.
- `fixed`: Igual ao absolute, mas sempre relativo à tela (Viewport). O elemento fica fixo mesmo com a rolagem.
- `sticky`: Flui normalmente, porém "cola" na tela ao chegar num limite de rolagem estipulado (ótimo para headers).

O eixo de profundidade é controlado pela propriedade `z-index`. (Lembre-se: `z-index` maior fica na frente!).
