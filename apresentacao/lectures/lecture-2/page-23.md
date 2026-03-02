---
layout: default
---

# Assistindo Vídeos: `<video>` 🎞️

A tag `<video>` funciona como a irmã mais velha do áudio. Ela incorpora arquivos de vídeo `.mp4` ou `.webm` nas suas páginas.

<v-clicks>

Além do clássico `controls`, os vídeos muitas vezes aceitam (e precisam de) outros atributos úteis:

* `width="..."` e `height="..."`: Força uma largura ou altura na tela.
* `autoplay`: Inicia sozinho a reprodução.
* `muted`: Começa o vídeo no mudo (Regra vital: navegadores travam o `autoplay` caso o vídeo *não* conste com o atributo `muted` também).
* `poster="foto.jpg"`: Mostra uma "thumbnail / capa" antes do vídeo carregar.

</v-clicks>

<v-click>

```html
<video src="trailer_do_jogo.mp4" controls width="640" muted poster="capa.jpg">
    <!-- Texto que só aparece se o navegador da pessoa for da idade da pedra -->
    O seu navegador não possui suporte ao player de vídeo.
</video>
```

</v-click>
