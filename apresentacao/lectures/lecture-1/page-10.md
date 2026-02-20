---
layout: two-cols-header
---

# Div vs Span 📦

A diferença entre Bloco e Linha.

::left::

## `<div>` (Bloco)

- Ocupa toda a largura da linha.
- Empurra o próximo elemento.
- Usado para layout.

## `<span>` (Linha)

- Ocupa só o espaço do conteúdo.
- Fica ao lado.
- Usado para destacar texto.

::right::

```html
<!-- Blocos -->
<div style="background: blue;">Bloco 1</div>
<div style="background: red;">Bloco 2</div>

<!-- Linha -->
<p>
  Texto com <span style="color: yellow;">destaque</span>.
</p>
```

<br>

<div style="background: blue; color: white; padding: 5px; margin-bottom: 5px;">Bloco 1</div>
<div style="background: red; color: white; padding: 5px; margin-bottom: 10px;">Bloco 2</div>

<p>Texto com <span style="background: yellow; color: black; padding: 2px;">destaque</span> no meio.</p>
