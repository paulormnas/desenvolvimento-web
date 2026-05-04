---
layout: default
---

# React Hooks: useEffect

Lidando com "Efeitos Colaterais".

Use o `useEffect` para ações que acontecem fora do fluxo de renderização (chamadas de API, timers, etc).

```jsx {all|1|4-6|all}
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("O componente foi montado!");
  }, []); // Array de dependências vazio = executa apenas uma vez

  return <div>Olhe o console!</div>;
}
```

<div class="mt-4 grid grid-cols-2 gap-4 text-xs">
  <div class="p-2 bg-yellow-500/10 rounded">
    <b>Sem array:</b> Executa em toda renderização.
  </div>
  <div class="p-2 bg-green-500/10 rounded">
    <b>Com variáveis no array:</b> Executa quando elas mudarem.
  </div>
</div>
