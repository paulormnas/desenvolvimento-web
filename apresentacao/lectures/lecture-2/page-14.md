---
layout: default
---

# O Atributo `class`: Grupos de Elementos 👯

<div>
Já vimos que o atributo <code>id</code> deve ser único. Mas e se você quiser identificar <strong>vários</strong> elementos que compartilham algo em comum sem ferir essa regra? Para isso usamos a <code>class</code>.
<br>
</div>

<v-clicks>

Pense na diferença assim:

- **id = número de CNH ou CPF:** Apenas uma pessoa tem.
- **class = Uniforme da mesma escola:** Várias pessoas usam igualzinho!

Este atributo será fundamental logo nas próximas aulas de CSS, pois poderemos criar estilos e dizer "mude a textura e faça a cor de *todos* os elementos com a classe botão ficarem verdes" de uma vez só!

</v-clicks>

<v-click>

```html
<p class="alerta">Cuidado, preencha todos os campos!</p>

<p>Texto normal que não possui nenhuma classe especial.</p>

<p class="alerta">A senha digitada está incorreta.</p>

<!-- Ambos os <p> podem usar a mesmíssima classe "alerta" paralelamente -->
```

</v-click>
