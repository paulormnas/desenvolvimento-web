---
layout: default
---

# Identificadores Únicos: O atributo `id` 🆔

<div>
Até agora, as tags HTML eram como as paredes de uma casa. O atributo <code>id</code> é como dar um <strong>nome único</strong> a um cômodo para encontrá-lo  mais fácil depois.
<br>
</div>

<v-clicks>

**Regra Absoluta:** Um `id` deve ser **ÚNICO** na sua página inteira. Você nunca pode ter dois elementos diferentes usando o mesmo `id`. Não use espaços no valor do `id`!

Para usar, basta adicionar `id="nome_que_voce_quiser"` dentro da tag de abertura.

</v-clicks>

<v-click>

```html
<section id="sobre-nos">
    <h2>Sobre a Nossa Empresa</h2>
    <p>Somos apaixonados por tecnologia desde 1999.</p>
</section>

<section id="contato">
    <h2>Fale Conosco</h2>
    <p>Envie um e-mail para: atendimento@empresa.com</p>
</section>
```

</v-click>
