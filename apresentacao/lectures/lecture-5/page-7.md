---
transition: slide-up
---

# Tailwind CSS: Uma Filosofia Diferente (Utility-first)

Esqueça o paradigma antigo (escrever HTML, buscar classe "X" num arquivo CSS e ler 1500 linhas preenchendo as configurações). Essa é a força do **Utility-First** com TailwindCSS. A semântica cede espaço para uma construção altamente utilitária!

O Tailwind dispõe de uma coleção extensa de `classes em miniaturas que fazem apenas uma coisa isoladamente`.

```html
<!-- Botão roxo em Tailwind = padding-left/right(px-4), cima/baixo(py-2)
arredondado(rounded-lg), cor(bg-purple-600) -> hover: sombra e escurece... -->
<button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
  Sou um Botão Diferente
</button>
```

* **Você nunca sai do arquivo HTML** para dar "estilo". As classes se misturam e definem diretamente o design na tag.
* Durante o *build*, o Tailwind remove todas as classes não usadas e seu CSS gerado não pesará quase nada, ficando perfeitamente otimizado.
