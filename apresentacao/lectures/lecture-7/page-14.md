---
layout: default
---

# Comunicação entre Componentes (Props)

Passando dados de pai para filho.

No React, os dados fluem em uma única direção (Top-Down).

```jsx
// Componente Filho
function UserCard({ name, role }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// Componente Pai
function App() {
  return (
    <UserCard name="Paulo" role="Desenvolvedor" />
  );
}
```

<div class="mt-8 text-sm italic opacity-70">
  "Props são imutáveis. Um componente nunca deve modificar suas próprias props."
</div>
