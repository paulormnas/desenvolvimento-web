# 📘 Lista de Exercícios de HTML - Aula 2 (Semântica, Formulários, Tabelas e Mídias)

### Orientação

Resolva todos os exercícios de forma incremental utilizando o mesmo arquivo HTML. Ao final da lista, a sua página HTML deve conter as soluções para todos os exercícios de forma organizada. Lembre-se de sempre testar a página no navegador!

# Exercícios

## 1. Estrutura Semântica Básica

Crie um novo arquivo HTML chamado `index.html` contendo a estrutura inicial básica do HTML5.  
Dentro do `<body>`, utilize as tags semânticas `<header>`, `<main>` e `<footer>` para delimitar adequadamente o cabeçalho, o conteúdo principal e o rodapé da sua página. Insira um conteúdo fictício simples (como títulos ou parágrafos) em cada uma dessas áreas para visualizá-las provisoriamente.

---

## 2. Menu de Navegação e Âncoras

Dentro da tag `<header>` do exercício anterior, crie um menu de navegação utilizando a tag `<nav>`.  
Adicione links (`<a>`) simulando um direcionamento para outras páginas do site (ex: Início, Sobre, Contato).
Acesse o seu `<footer/>` e adicione um atributo `id` (ex: `id="rodape"`). Em seguida, crie um link no topo da página funcionando como uma **âncora interna** para que, quando o usuário clicar, ele seja rolado diretamente para o final da página.

---

## 3. Artigos e Seções

Dentro do bloco `<main>`, organize o conteúdo criando duas seções distintas com a tag `<section>`.
Escolha um tema que você goste (ex: jogos, receitas, literatura) e, em uma das seções, insira duas publicações usando a tag `<article>`. Cada artigo deve conter, no mínimo, um título (`<h2>` ou `<h3>`) e um pequeno texto de introdução em um parágrafo (`<p>`).

---

## 4. Conteúdo Adicional (Aside)

Ainda explorando a semântica, experimente adicionar a tag `<aside>`.  
Ela pode ser posicionada ao longo do conteúdo do seu `<main>`. Insira nela elementos que sejam complementares, porém de importância secundária em relação aos artigos criados, como por exemplo uma pequena lista `<ul>` de "Notícias Relacionadas" ou uma breve nota do editor.

---

## 5. Formulário Simples (Newsletter)

Em uma nova seção (use `<section>`), adicione um título e estruture o seu primeiro formulário web (`<form>`) voltado para assinaturas de boletins (Newsletter). Inclua:

- Um campo para o usuário preencher o Nome (`<input type="text">`).
- Um campo para o e-mail (`<input type="email">`).
- Um botão de envio para submeter os dados (`<button type="submit">`).
Para melhorar a acessibilidade, utilize a tag `<label>` e interligue seu atributo `for` ao atributo `id` equivalente de cada campo de entrada.

---

## 6. Formulário Avançado (Fale Conosco)

Aprimore o formulário construído adicionando mais opções, tornando-o um cenário de "Fale Conosco" mais complexo. Adicione:

- Um menu suspenso de "Assuntos" utilizando a tag `<select>` preenchida com várias opções (`<option>`).
- Uma área de texto amigável e expansível para que a pessoa escreva a mensagem (`<textarea>`).
Não esqueça de adicionar os atributos `name`, `id` e `required` (para torná-los de preenchimento obrigatório) nestes novos campos.

---

## 7. Tabela de Dados Simples

Logo após o formulário, monte a sua primeira tabela (`<table>`). Ela servirá para exibir uma lista das suas três músicas, filmes ou livros favoritos.  
Preste atenção na sequência correta: utilize `<tr>` para gerar cada linha horizontal, o `<th>` para criar os nomes dos cabeçalhos das colunas (ex: Título, Autor, Ano de Lançamento) e a tag `<td>` para preencher os dados correspondentes em si.

---

## 8. Tabela com Estrutura Semântica Melhorada

Refatore a tabela do exercício anterior (ou melhor, crie uma tabela em um contexto financeiro rápido, como uma lista de "Despesas do Mês").  
Adote a recomendação moderna do HTML dividindo explicitamente a tabela com `<thead>` (englobando as `<th>`), um `<tbody>` longo (para armazenar os itens listados internamente e dinamicamente) e um robusto `<tfoot>` (exibindo um rodapé com "Valor Total" dos gastos).

---

## 9. Mídias Nativas: Áudio e Vídeo

No final do bloco `<main>`, crie uma nova área dedicada a mídias e aproveite o poder do HTML5 rodando arquivos variados sem a necessidade de plugins.

- Inclua a tag `<audio>` equipada com o atributo vital `controls`. Informe no `src` onde há um arquivo de áudio de teste local (sinta-se à vontade para baixar algum se não possuir).
- Da mesma forma, adicione e configure a tag `<video>` com `controls`. Teste adicionar alguns comportamentos adicionais ao vídeo como os atributos `width` (para delimitar largura), `muted` (sem som por padrão) e `poster` (adicionando o caminho de uma imagem estática que age como capa/thumbnail do vídeo).

---

## 10. O Portal Mágico do Iframe

Abaixo dos elementos de áudio e vídeo anteriores, declare o uso de tags corporativas `<iframe>`. Este será o seu portal para recursos complexos providenciados por tecnologias alheias (Embeds).
Utilize os menus de "Compartilhar > Incorporar" diretamente das plataformas originais e anexe à sua página as seguintes aplicações:

1. Um vídeo divertido do YouTube que você goste.
2. Um mini mapa interativo de rotas do Google Maps, já aberto, apontando para o seu ponto turístico favorito no mundo.
