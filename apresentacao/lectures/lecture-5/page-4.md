---
transition: slide-up
---

# 10. Variáveis CSS (Custom Properties)

Variáveis ou Propriedades Customizadas definem localmente o armazenamento de valores para reuso dinâmico, facilitando MUITO o processo de criação visual (Imagine que você decida mudar a cor *Tema* do seu cliente do verde para o vermelho em 300 componentes diferentes do nada).

```css
/* Escopo principal */
:root {
  --cor-primaria: #0d6efd;
  --espaçamento-base: 1.5rem;
  --sombra-card: 0 4px 6px rgba(0,0,0,0.1);
}

.botao {
  /* Chamamos via "var(chave)" */
  background: var(--cor-primaria);
  padding: var(--espaçamento-base);
  box-shadow: var(--sombra-card);
}
```

Isso garante uma forma brutal de gerenciar **Sistemas de Cores Complexos** e criação de **"Modo Escuro (Dark mode) "** na internet super simplificado, recriando as definições!
