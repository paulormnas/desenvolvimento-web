---
layout: default
---

# O Portal Mágico: `<iframe>` 🕳️

A tag `<iframe>` (Inline Frame) é absurdamente poderosa e controversa. Ela permite que você pegue **qualquer site ou parte da internet e incorpore como um "retângulo" na sua própria página**.

<v-clicks>

Isso foi muito mal usado no passado pra gerar pirataria. O uso moderno e ético do iframe hoje é pegar os **Embeds de Empresas**: O **Youtube** te fornece um botão de Compartilhar via iframe, ou o **Google Maps** te dá um iframe para mostrar o endereço da sua loja!

</v-clicks>

<v-click>

### Exemplo: Vídeo do YouTube

Normalmente você só precisa "copiar o código" que a plataforma fornece:

```html
<h2>Como fazer Biscoitos?</h2>

<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video player" frameborder="0">
</iframe>
```

</v-click>
