---
layout: default
---

# Componentes Funcionais

A forma moderna de escrever componentes (usando Funções JS).

```jsx
function Welcome(props) {
  return (
    <div className="card">
      <h1>Olá, {props.name}</h1>
      <p>Bem-vindo ao mundo do React!</p>
    </div>
  );
}

// Para usar:
// <Welcome name="Paulo" />
```

<v-clicks>

- **Simples:** Apenas uma função que retorna HTML (JSX).
- **Hooks:** Permitem adicionar estado e outras funcionalidades.
- **Props:** Forma de passar dados para dentro do componente (como argumentos de função).

</v-clicks>
