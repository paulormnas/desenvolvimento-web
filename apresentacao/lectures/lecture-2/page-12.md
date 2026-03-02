---
layout: default
---

# Âncoras: Criando Links Internos com `id` 🔗

<div>
O verdadeiro poder do <code>id</code> é quando o combinamos com a tag de link (<code>&lt;a&gt;</code>). Nós podemos criar links que, ao invés de levar para outra página web, <strong>rolam a página direto para o elemento com aquele <code>id</code></strong>.
<br>
</div>

<v-clicks>

Você coloca o símbolo da cerquilha (`#`) antes do nome do `id` no atributo `href`.

</v-clicks>

<v-click>

```html
<!-- O Link no topo da página -->
<a href="#contato">Pular para a seção de Contato</a>


<!-- Muitas de linhas de código ou texto aqui... --><br/>
<!-- ... -->


<!-- O destino final que será focado na tela ao clicar -->
<section id="contato">
    <h2>Fale Conosco</h2>
    <p>Deixe o seu feedback!</p>
</section>
```

</v-click>
