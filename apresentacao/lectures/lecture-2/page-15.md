---
layout: default
---

# Recebendo Dados: `<form>` 📥

<div>
A tag <code>&lt;form&gt;</code> (formulário) é usada quando precisamos que o HTML <strong>colete informações úteis do nosso usuário</strong>, seja para realizar um login e senha no sistema, enviar uma mensagem com reclamações ou realizar uma simples pesquisa.
<br>
</div>

<v-clicks>

Tudo o que constar como um "campo" na tela para o usuário interagir, preencher ou selecionar para enviar para os servidores deve ficar sempre encaixando entre as tags de `<form>` e `</form>`.

</v-clicks>

<v-click>

```html
<section>
    <h2>Entre na sua Conta:</h2>

    <form action="login.js" method="POST">
        <!-- Os campos de preenchimento virão espalhados aqui dentro! -->
        
        <button type="submit">Entrar no Sistema</button>
    </form>
</section>
```

</v-click>
