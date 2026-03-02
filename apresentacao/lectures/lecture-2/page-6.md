---
layout: default
---

# O Recheio Principal: `<main>` 🥩

<div>
A tag <code>&lt;main&gt;</code> serve para abrigar o <strong>conteúdo principal e exclusivo</strong> daquela página específica.
<br>
</div>

<v-clicks>

Coisas que se repetem em todas as páginas do site (como o logotipo no `<header>`, o menu principal em `<nav>`, ou o `<footer>`) **não devem** estar dentro do `<main>`. Cada página deve ter **apenas um único** `<main>`.

</v-clicks>

<v-click>

```html
<body>
    <header>... logotipo e menu ...</header>

    <main>
        <h1>Notícia de Hoje</h1>
        <p>Este texto é o conteúdo principal desta página de notícia.</p>
        <!-- Outras tags como section ou article vêm aqui dentro! -->
    </main>

    <footer>... rodapé ...</footer>
</body>
```

</v-click>
