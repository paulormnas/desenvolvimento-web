---
layout: default
---

# Tocando Músicas: `<audio>` 🎵

A tag `<audio>` permite embutir arquivos de som na sua página (como `.mp3` ou `.wav`).

<v-clicks>

Parecido com imagens, a gente diz de onde virá o arquivo pelo atributo `src`. Mas atenção: **nós precisamos adicionar o atributo solitário genérico `controls`**, caso contrário o reprodutor de música ficará rodando "invisível" e o usuário não verá o botão de *Play*!

</v-clicks>

<v-click>

```html
<section>
    <h2>Conheça o novo Podcast de Programação!</h2>
    <p>Ouça o episódio 1 logo abaixo:</p>

    <!-- O controls diz ao Navegador para gerar aqueles botões -->
    <!-- padrões dele de "Play/Pause e controle de Volume" -->
    <audio src="episodio1.mp3" controls></audio>
</section>
```

</v-click>
