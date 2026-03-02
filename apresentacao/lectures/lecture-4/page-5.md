---
transition: slide-up
---

# 8. Media Queries (@media)

São **perguntas/condições** criadas que o navegador tenta responder sobre o ambiente (resolução / tamanho de tela).
Se a condição for verdadeira, entra numa nova dimensão de estilos (modificando, sobreescrevendo outras regras css).
Desta forma conseguimos criar **Breakpoints** (Pontos de Quebra).

```css
/* Essa é a folha normal para mobile e telas pequenas (Mobile First) */
.coluna { width: 100%; }

/* Regra disparada SOMENTE QUANDO a tela possuir MAIS que 768px */
@media screen and (min-width: 768px) {
  .coluna { width: 50%; }
}

@media screen and (min-width: 1024px) {
  /* Em telas gigantes passa a ser 3 colunas */
  .coluna { width: 33.33%; }
}
```
