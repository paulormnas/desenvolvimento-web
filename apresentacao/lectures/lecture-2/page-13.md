---
layout: default
---

# Navegando entre Páginas Locais 🧭

<div>
Além de navegar dentro da mesma página com <code>#id</code>, a tag <code>&lt;a&gt;</code> serve criar conexões entre os arquivos HTML independentes do nosso site. Quando seus arquivos estão na mesma pasta do seu computador, basta usar o <strong>nome do outro arquivo</strong> como destino.
<br>
</div>

<div grid="~ cols-2 gap-4" class="mt-6">

<div class="text-sm">
<v-click>

**Arquivo:** `index.html`

```html
<body>
  <header>
    <h1>Minha Empresa</h1>
    <nav>
      <!-- O href aponta para o nome exato do outro arquivo na mesma pasta -->
      <a href="sobre.html">Sobre a Empresa</a>
    </nav>
  </header>
  
  <main>
    <p>Bem-vindo à página inicial da empresa!</p>
  </main>
</body>
```

</v-click>
</div>

<div class="text-sm">
<v-click>

**Arquivo:** `sobre.html`

```html
<body>
  <header>
    <h1>Minha Empresa</h1>
    <nav>
      <!-- E na outra página, você pode botar um link para voltar -->
      <a href="index.html">Voltar para Início</a>
    </nav>
  </header>
  
  <main>
    <h2>Sobre Nós</h2>
    <p>A empresa foi fundada em 2024 pra criar sites incríveis!</p>
  </main>
</body>
```

</v-click>
</div>

</div>
