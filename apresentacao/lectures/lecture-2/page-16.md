---
layout: default
---

# Preenchendo Informações: `<input>` e `<label>` 🏷️

<div>
O <code>&lt;input&gt;</code> é a tag sem fechamento (como a <code>&lt;img&gt;</code>)r onde o usuário vai relamente interagir. Nós sempre agrupamos ela ao lado de um <code>&lt;label&gt;</code>, que é um texto que rotula do que se trata aquele input pra pessoa.
<br>
</div>

<v-clicks>

**Os tipos (`type`) mais essenciais de `<input>`:**

* `type="text"`: O padrão base livre. Para digitar textos soltos (Nome).
* `type="email"`: Garante na validação do sistema que inclua com o caractere `@`.
* `type="password"`: Automagicamente esconde o que está sendo digitado com asteriscos.

</v-clicks>

<v-click>

```html
<form>
    <!-- O for="" do label DEVE ser o mesmíssimo valor do id="" do input! -->
    <label for="campo_nome">Seu Nome:</label>
    <input type="text" id="campo_nome" name="nome">

    <label for="campo_senha">Senha Segura:</label>
    <input type="password" id="campo_senha" name="senha">
    
    <button type="submit">Avançar</button>
</form>
```

</v-click>
