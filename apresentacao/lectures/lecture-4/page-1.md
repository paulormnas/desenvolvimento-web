---
transition: slide-up
---

# 7. Layouts Modernos (Substituindo Floats e Tabelas)

Antigamente o design web dependia de adaptações problemáticas.
A nova era do CSS foca nas soluções nativas **Flexbox** (Pense em 1 dimensão) e **CSS Grid** (Pense em 2 dimensões).

### Flexbox (Flexible Box Layout)

Desenvolvido para organizar o espaço e alinhar os elementos dentro de um container, de forma "flexível".

- **Flex Container:** O elemento pai onde você declara `display: flex;`.
- **Flex Items:** Os filhos diretos, que são transformados em elementos maleáveis.

```css
.container {
  display: flex; /* Transforma o comportamento tradicional */
  flex-direction: row; /* Define se fluem em linha ou coluna */
  justify-content: center; /* Alinhamento ao redor/no centro */
}
```
