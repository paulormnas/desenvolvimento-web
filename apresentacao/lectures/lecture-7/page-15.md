---
layout: default
---

# Navegação com React Router

Mantendo a experiência SPA com múltiplas "páginas".

O `react-router-dom` permite que você altere a URL e o conteúdo sem recarregar o navegador.

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

<div class="mt-4 text-xs bg-red-500/10 p-2 rounded">
  <b>Importante:</b> Use <code>&lt;Link&gt;</code> em vez de <code>&lt;a&gt;</code> para evitar recarregamento.
</div>
