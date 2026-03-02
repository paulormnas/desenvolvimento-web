---
transition: slide-up
---

# 1. Formas de Inclusão do CSS

Como conectar suas regras de estilo ao documento HTML?

- **Inline:** Usando o atributo `style` diretamente na tag. (Não recomendado para manutenção).

  ```html
  <p style="color: red;">Texto vermelho</p>
  ```

- **Interno:** Usando a tag `<style>` dentro da seção `<head>`.
- **Externo:** Criando um arquivo `.css` separado e importando no HTML. **(Melhor prática!)**

  ```html
  <link rel="stylesheet" href="style.css">
  ```
