# Lista de Exercícios - Aula 6: JavaScript, DOM e Web APIs

Esta lista contém 20 exercícios para praticar os conceitos fundamentais de JavaScript apresentados na Aula 6.

---

### Variáveis e Tipos de Dados

1. **Declaração Segura**: Declare uma constante chamada `PI` com o valor `3.14159` e uma variável `raio` que possa ser alterada posteriormente.
2. **Identificação de Tipos**: Qual será o tipo (`typeof`) das seguintes variáveis?
   - `const a = "10";`
   - `const b = 10;`
   - `const c = true;`
   - `const d = { nome: "JS" };`
3. **Template Literals**: Crie duas variáveis, `nome` e `sobrenome`, e concatene-as em uma terceira variável `nomeCompleto` utilizando **Template Literals** (crases).
4. **Arrays**: Crie um array chamado `frutas` com 3 itens. Adicione uma nova fruta ao final do array utilizando um método de array.

### Operadores e Comparações

5. **Igualdade Estrita**: Explique a diferença entre `==` e `===` com um exemplo prático. Por que devemos preferir o `===`?
6. **Lógica de Cinema**: Escreva uma expressão lógica que retorne `true` apenas se a variável `idade` for maior ou igual a 18 **E** a variável `temIngresso` for verdadeira.
7. **Resto da Divisão**: Como você verificaria se um número armazenado na variável `n` é par utilizando o operador `%`?

### Estruturas de Controle

8. **Classificação de Notas**: Escreva um bloco `if/else if/else` que receba uma nota (0 a 10) e imprima: "Aprovado" (>= 7), "Recuperação" (entre 5 e 6.9) ou "Reprovado" (< 5).
9. **Switch Case**: Crie uma estrutura `switch` que receba o nome de um dia da semana e imprima se é "Dia de semana" ou "Final de semana".
10. **Contagem Regressiva**: Utilize um laço `for` para imprimir no console uma contagem regressiva de 10 até 0.
11. **Percorrendo Arrays**: Dado o array `const cores = ["Azul", "Verde", "Vermelho"]`, utilize o laço `for...of` para imprimir cada cor individualmente.
12. **Busca com While**: Utilize um laço `while` para gerar números aleatórios (`Math.random()`) até que um número maior que 0.8 seja gerado.

### Funções

13. **Função de Soma**: Crie uma função tradicional chamada `somar` que receba dois parâmetros e retorne a soma deles.
14. **Arrow Function**: Converta a função de soma do exercício anterior para o formato de **Arrow Function**. (Exemplo: `const subtrair = (a, b) => a - b;`).

### DOM (Document Object Model)

15. **Seleção de Elementos**: Como você selecionaria um elemento `<h1 id="titulo-principal">` usando `document.querySelector`?
16. **Alteração de Conteúdo**: Escreva o código JavaScript para mudar o texto de um parágrafo (`<p>`) para "Texto alterado com sucesso!".
17. **Estilização Dinâmica**: Selecione um elemento com a classe `.caixa` e mude sua cor de fundo para "blue" e a cor do texto para "white" via JavaScript.
18. **Interatividade**: Crie um script que selecione um botão pelo ID `meu-botao` e, ao ser clicado, exiba um `alert` com a mensagem "Clicou!".

### Assincronismo e APIs

19. **Async/Await**: Escreva uma função assíncrona chamada `getUser` que faça um `fetch` para `https://api.github.com/users/github` e imprima o `login` do usuário no console. (Dica: lembre-se de usar `await response.json()`).
20. **JSON**: Dado o objeto JSON `{"id": 1, "status": "ativo"}`, como você acessaria o valor da propriedade `status` após convertê-lo para um objeto JavaScript?

---

### 🚀 Desafio Extra
Tente resolver os exercícios de DOM e Fetch criando um pequeno arquivo `index.html` e testando o código no Console do Navegador (F12).
