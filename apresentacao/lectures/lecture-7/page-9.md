---
layout: default
---

# JSX: JavaScript XML

O "açúcar sintático" que amamos (ou estranhamos no começo).

JSX permite escrever código que se parece com HTML dentro do JavaScript.

```jsx {all|1|3-6|all}
const element = <h1>Olá, Mundo!</h1>;

function MyButton() {
  const label = "Clique aqui";
  return <button className="btn">{label}</button>;
}
```

<div class="mt-4 grid grid-cols-2 gap-4 text-xs">
  <div class="p-2 bg-green-500/10 rounded">
    <b>Por que usar?</b><br>
    - Mais legível.<br>
    - Erros de compilação ajudam no debug.<br>
    - Lógica e UI ficam no mesmo arquivo.
  </div>
  <div class="p-2 bg-yellow-500/10 rounded">
    <b>Importante:</b><br>
    - Atributos usam camelCase (<i>className</i> em vez de <i>class</i>).<br>
    - Variáveis JS entram entre chaves <code>{ }</code>.
  </div>
</div>
