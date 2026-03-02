# 📘 Resolução da Lista de Exercícios 1

Abaixo estão as soluções sugeridas para os exercícios práticos propostos. Para visualizar os resultados, salve o código de cada exercício em um arquivo `.html` separado e abra no seu navegador.

---

## 1. Criar Estrutura Básica de Página

Crie um arquivo `index.html` e insira o seguinte código:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu Primeiro HTML</title>
</head>
<body>
    <h1>Olá, meu nome é Estudante!</h1>
</body>
</html>
```

---

## 2. Lista de Interesses

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minhas Listas</title>
</head>
<body>
    <h2>Meus Interesses Pessoais</h2>
    <ol>
        <li>Programação</li>
        <li>Séries e Filmes</li>
        <li>Música</li>
    </ol>

    <h2>Minhas Comidas Favoritas</h2>
    <ul>
        <li>Pizza</li>
        <li>Hambúrguer</li>
        <li>Sushi</li>
    </ul>
</body>
</html>
```

---

## 3. Inserir Imagem e Legenda

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Imagem com Legenda</title>
</head>
<body>
    <img src="https://via.placeholder.com/300" alt="Exemplo de imagem de placeholder">
    <p>
        <span style="color: blue;">Esta é uma legenda</span> para a imagem acima, com destaque usando a tag span.
    </p>
</body>
</html>
```

---

## 4. Links Internos e Externos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Links</title>
</head>
<body>
    <h2>Links Externos e Internos</h2>
    <p>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">Acesse a documentação do MDN Web Docs</a>
    </p>

    <p>
        Para pular diretamente para a seção final, 
        <a href="#secao-final">clique aqui</a>.
    </p>

    <!-- Simulação de espaço para permitir rolagem de página -->
    <div style="height: 1000px;">
        <p>Role a página para baixo...</p>
    </div>

    <!-- O id '#secao-final' é usado como âncora para o link interno -->
    <h2 id="secao-final">Você chegou à seção final!</h2>
</body>
</html>
```

---

## 5. Criar uma Seção com Títulos Hierárquicos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Hierarquia de Títulos</title>
</head>
<body>
    <h2>Meu Hobby Favorito: Fotografia</h2>
    <p>A fotografia é a minha forma preferida de registrar momentos.</p>

    <h3>Tipos de Câmera</h3>
    <p>O equipamento pode variar desde uma câmera DSLR profissional até a câmera do celular.</p>

    <h3>Estilos de Fotografia</h3>
    <p>Eu gosto bastante de fotos de paisagem e retratos de animais.</p>
</body>
</html>
```

---

## 6. Pesquisar e Usar 3 Tags Novas

Neste exemplo, foram utilizadas as tags `<details>`, `<summary>` e `<kbd>`.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Novas Tags</title>
</head>
<body>
    <h2>Demonstração de Novas Tags</h2>

    <!-- <details> e <summary> criam um widget sanfona -->
    <details>
        <summary>Clique aqui para ver mais detalhes</summary>
        <p>A tag <code>&lt;details&gt;</code> funciona como uma seção que o usuário pode abrir e fechar. A tag <code>&lt;summary&gt;</code> define o rótulo clicável para essa seção.</p>
    </details>

    <br>

    <!-- <kbd> é usada para denotar entrada pelo teclado -->
    <p>
        Para salvar um documento de texto em seu computador habitualmente usamos <kbd>Ctrl</kbd> + <kbd>S</kbd>.
    </p>
</body>
</html>
```

---

## 7. Criar um Mini Portfólio

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Mini Portfólio</title>
</head>
<body>
    <h1>Meu Mini Portfólio</h1>
    
    <img src="https://via.placeholder.com/150" alt="Avatar do meu perfil">
    
    <h2>Minhas Habilidades</h2>
    <ul>
        <li>HTML Básico</li>
        <li>Lógica de Programação</li>
        <li>Comunicação</li>
    </ul>

    <h2>Meus Projetos</h2>
    <p>Acesse meu perfil para ver meus repositórios:</p>
    <a href="https://github.com" target="_blank">Perfil no GitHub</a>
</body>
</html>
```

---

## 8. Primeira Página Estilizada (Sem CSS!)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Estilos em HTML</title>
</head>
<body>
    <h2>Alterando o Estilo do Texto Somente com Tags HTML</h2>
    <p>
        Este é um texto comum, mas <strong>esta palavra possui peso (negrito)</strong>.
    </p>
    <p>
        Podemos usar a tag em para dar <em>ênfase (itálico)</em> ou a tag mark para <mark>destacar partes do texto</mark>.
    </p>
    <p>
        Existem também as tags para deixar o texto <small>um pouco menor</small> ou indicar <del>que algo foi excluído do documento</del>.
    </p>
</body>
</html>
```

---

## 9. Criar um Menu Simples

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Navegação</title>
</head>
<body>
    <h1>Menu de Navegação Inicial</h1>
    
    <nav>
        <ul>
            <li><a href="https://www.google.com" target="_blank">Google</a></li>
            <li><a href="https://g1.globo.com" target="_blank">Notícias (G1)</a></li>
            <li><a href="https://www.w3schools.com" target="_blank">W3Schools</a></li>
        </ul>
    </nav>
    
    <p>Bem-vindo à página com navegação acima!</p>
</body>
</html>
```

---

## 10. Criar um Artigo Simples

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Artigo HTML</title>
</head>
<body>
    <header>
        <h1>Meu Blog Especial</h1>
        <p>Trazendo dicas e novidades semanais.</p>
    </header>

    <main>
        <section>
            <h2>Últimos Artigos</h2>
            
            <article>
                <h3>Entendendo o HTML Semântico</h3>
                <p>O HTML semântico dá significado à estrutura da sua página web, o que melhora bastante a otimização de motores de busca e acessibilidade.</p>
            </article>

            <article>
                <h3>Próximos Passos: O CSS</h3>
                <p>Após dominar as tags fundamentais do HTML, o segundo passo é estilizar todas essas informações e embelezar o site através do CSS.</p>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Blog Pessoal. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```
