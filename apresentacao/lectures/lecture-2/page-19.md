---
layout: default
---

# Linhas (`<tr>`) e Células (`<th>` e `<td>`) 🧮

Dentro da tabela, precisamos de mais três tags vitais:

* `<tr>` *(Table Row)*: Cria uma nova **linha** vazia.
* `<th>` *(Table Header)*: Cria uma célula em negrito (título/cabeçalho) da coluna.
* `<td>` *(Table Data)*: Cria uma célula de coluna com aquele dado normal da linha.

<v-click>

```html
<table>
    <tr>   <!-- Primeira linha (de Títulos) -->
        <th>Nome</th>
        <th>Profissão</th>
    </tr>
    <tr>   <!-- Segunda linha (Dados soltos) -->
        <td>Maria Souza</td>
        <td>Engenheira</td>
    </tr>
    <tr>   <!-- Terceira linha (Dados soltos) -->
        <td>José da Silva</td>
        <td>Cozinheiro</td>
    </tr>
</table>
```

</v-click>
