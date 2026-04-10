# Soluções dos Exercícios - Aula 6: JavaScript, DOM e Web APIs

Este arquivo contém as soluções sugeridas para a lista de exercícios da Aula 6.

---

### Variáveis e Tipos de Dados

**1. Declaração Segura**
```javascript
const PI = 3.14159;
let raio = 5; // Pode ser alterado depois
```

**2. Identificação de Tipos**
- `a`: `"string"`
- `b`: `"number"`
- `c`: `"boolean"`
- `d`: `"object"`

**3. Template Literals**
```javascript
const nome = "João";
const sobrenome = "Silva";
const nomeCompleto = `${nome} ${sobrenome}`;
```

**4. Arrays**
```javascript
const frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Morango"); // Adiciona ao final
```

---

### Operadores e Comparações

**5. Igualdade Estrita**
A diferença é que o `==` (comparação abstrata) realiza a conversão de tipos antes de comparar, enquanto o `===` (comparação estrita) verifica tanto o valor quanto o tipo.
Exemplo:
```javascript
5 == "5"   // true (o JS converte a string para número)
5 === "5"  // false (os tipos são diferentes: number vs string)
```
**Por que preferir `===`?** Para evitar comportamentos inesperados causados pela coerção automática de tipos, tornando o código mais previsível e seguro.

**6. Lógica de Cinema**
```javascript
const podeEntrar = idade >= 18 && temIngresso;
```

**7. Resto da Divisão**
```javascript
const ehPar = n % 2 === 0;
```

---

### Estruturas de Controle

**8. Classificação de Notas**
```javascript
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
```

**9. Switch Case**
```javascript
switch (diaDaSemana) {
    case "Sábado":
    case "Domingo":
        console.log("Final de semana");
        break;
    default:
        console.log("Dia de semana");
}
```

**10. Contagem Regressiva**
```javascript
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
```

**11. Percorrendo Arrays**
```javascript
const cores = ["Azul", "Verde", "Vermelho"];
for (const cor of cores) {
    console.log(cor);
}
```

**12. Busca com While**
```javascript
let numero = 0;
while (numero <= 0.8) {
    numero = Math.random();
    console.log(numero);
}
```

---

### Funções

**13. Função de Soma**
```javascript
function somar(a, b) {
    return a + b;
}
```

**14. Arrow Function**
```javascript
const somar = (a, b) => a + b;
```

---

### DOM (Document Object Model)

**15. Seleção de Elementos**
```javascript
const titulo = document.querySelector("#titulo-principal");
```

**16. Alteração de Conteúdo**
```javascript
const paragrafo = document.querySelector("p");
paragrafo.innerText = "Texto alterado com sucesso!";
```

**17. Estilização Dinâmica**
```javascript
const caixa = document.querySelector(".caixa");
caixa.style.backgroundColor = "blue";
caixa.style.color = "white";
```

**18. Interatividade**
```javascript
const botao = document.getElementById("meu-botao");
botao.addEventListener("click", () => {
    alert("Clicou!");
});
```

---

### Assincronismo e APIs

**19. Async/Await**
```javascript
async function getUser() {
    try {
        const response = await fetch("https://api.github.com/users/github");
        const data = await response.json();
        console.log(data.login);
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
    }
}
```

**20. JSON**
```javascript
const jsonString = '{"id": 1, "status": "ativo"}';
const objeto = JSON.parse(jsonString);
console.log(objeto.status); // Acessa o valor "ativo"
```
