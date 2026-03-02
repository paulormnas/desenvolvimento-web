---
layout: default
---

# Estruturando com Semântica (`<thead>`, `<tbody>`, `<tfoot>`) 🏗️

As tabelas de relatório também devem seguir as boas práticas semânticas pra separar onde fica o cabeçalho, onde ficam os dados puros do miolo e onde fica um possível rodapé (como um Total ou Somatório).

<v-click>

```html
<table>
    <thead> <!-- O Cabeçalho semântico -->
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>
    
    <tbody> <!-- O "Recheio" de dados da tabela -->
        <tr> 
            <td>Mouse Sem Fio</td> 
            <td>R$ 90,00</td> 
        </tr>
        <tr> 
            <td>Teclado Mecânico</td> 
            <td>R$ 200,00</td> 
        </tr>
    </tbody>

    <tfoot> <!-- O Rodapé da tabela com resultados -->
        <tr>
            <th>Total da Compra</th>
            <td>R$ 290,00</td>
        </tr>
    </tfoot>
</table>
```

</v-click>
