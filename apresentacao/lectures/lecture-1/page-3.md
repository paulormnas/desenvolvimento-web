---
layout: two-cols-header
---

# Estrutura Básica 🏗️

Todo documento HTML precisa desta estrutura padrão.

::left::

<v-clicks>

- **DOCTYPE:**
  Avisa que é HTML5.
- **html:**
  A raiz do documento.
- **head:**
  Configurações (não visível).
- **body:**
  O que o usuário vê.

</v-clicks>

::right::

```html {all|1|2|3-6|7-10|11}
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
  </head>
  <body>
    <h1>Meu Título</h1>
    <p>Meu parágrafo.</p>
  </body>
</html>
```
