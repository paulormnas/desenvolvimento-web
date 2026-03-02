---
layout: default
---

# Estrutura Básica: `<head>` 🧠

<div>
A tag <code>&lt;head&gt;</code> é como o cérebro da nossa página web. Ela contém "metadados", informações essenciais para o navegador e motores de busca, mas que <strong>não são exibidas</strong> diretamente na tela para o usuário.
<br>
</div>

<v-clicks>

O que colocamos no `<head>`?

* `<title>`: O texto que aparece na aba do navegador.
* `<meta charset="UTF-8">`: Garante que os acentos (como á, ç, ã) apareçam corretamente.
* `<meta name="viewport" content="...">`: Essencial para o site funcionar bem em celulares (design responsivo).
* Links para arquivos CSS (`<link>`) ou scripts (`<script>`).

</v-clicks>

<v-click>

```html
<head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página Estruturada</title>
</head>
```

</v-click>
