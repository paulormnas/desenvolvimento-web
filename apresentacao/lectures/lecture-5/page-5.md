---
transition: slide-up
---

# 10. Tópicos Avançados (Metodologias)

Como criar nomes de `.classes` CSS em um projeto gigantesco sem colisões que quebrem a folha de estilo inteira, evitando dores de cabeça e manutenções complexas? Usamos metodologias (convenções) lógicas de organização:

### Padrão BEM (Block, Element, Modifier)

Uma nomenclatura visual muito lógica e pragmática dividindo os componentes na tela de front-end.

`<Bloco>`_`<Elemento>`--`<Modificador>`

```html
<!-- Componente do Menu Nav (Bloco) -->
<nav class="menu">
  <!-- Pedaço intrínseco de dentro dele (Elemento) ! -->
  <a href="#" class="menu__link">Home</a>
  <!-- Variação/Estado de alteração do item de dentro (Modificador) -->
  <a href="#" class="menu__link menu__link--ativo">Blog</a>
</nav>
```
