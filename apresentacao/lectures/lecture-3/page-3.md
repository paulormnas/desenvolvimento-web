---
transition: slide-up
---

# 2. Seletores CSS e Cascata

O CSS usa seletores para "encontrar" os elementos corretos e aplicar os estilos.

- **Elemento (Tag):** Seleciona todas as tags correspondentes. `p { color: gray; }`
- **Classe:** Usa o prefixo `.` e pode ser aplicada a vários elementos. `.destaque { font-weight: bold; }`
- **ID:** Usa o prefixo `#` e deve ser **único** na página. `#cabecalho { background: black; }`
- **Universal:** O seletor `*` aplica a tudo. `* { margin: 0; }`

### Combinadores

- Descendente (espaço): `div p` (Todos os `<p>` dentro de `<div>`)
- Filho direto (`>`): `div > p` (Apenas os `<p>` que são filhos diretos de `<div>`)
