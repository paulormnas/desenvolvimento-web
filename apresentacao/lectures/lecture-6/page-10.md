---
transition: slide-up
---

# 10. Manipulação do DOM e Eventos

Uma vez selecionado, podemos mudar o que quisermos no elemento.

### Alterando Conteúdo e Estilo
```javascript
const titulo = document.querySelector("h1");
titulo.textContent = "Novo Título!"; // Muda apenas texto
titulo.style.color = "red";           // Muda CSS diretamente
```

### Escutando Eventos
A forma mais comum de interagir com o usuário é o `addEventListener`.

```javascript
const botao = document.querySelector("#meu-botao");

botao.addEventListener("click", () => {
  console.log("O botão foi clicado!");
  alert("Olá mundo!");
});
```
