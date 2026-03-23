---
transition: slide-up
---

# 11. Fazendo Requisições (Fetch API)

Páginas modernas raramente trabalham sozinhas. Elas buscam dados de APIs.

- **`fetch()`**: Retorna uma **Promise** (um valor que estará disponível no futuro).
- **`async/await`**: A forma mais legível de trabalhar com código assíncrono.

```javascript
async function buscarDados() {
  try {
    const resposta = await fetch("https://api.github.com/users/paulormnas");
    const dados = await resposta.json();
    console.log(`Nome no GitHub: ${dados.name}`);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

buscarDados();
```
