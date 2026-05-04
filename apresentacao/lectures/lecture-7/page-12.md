---
layout: default
---

# React Hooks: useState

Gerenciando dados dinâmicos (Estado).

O **Estado** é a memória do componente. Quando o estado muda, o React atualiza o componente automaticamente.

```jsx {all|1|4|7|10|all}
import { useState } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Aumentar
      </button>
    </div>
  );
}
```

<div class="mt-4 p-2 bg-blue-500/10 rounded text-xs border border-blue-500/30">
  <b>Sintaxe:</b> <code>const [valor, setValor] = useState(valorInicial);</code>
</div>
