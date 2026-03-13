---
transition: slide-up
---

# 8. O Princípio Mobile First

É uma estratégia crucial que virou o novo padrão com as restrições e tráfego maior em celulares.

- Projete primeiro para o ambiente **móvel/menor/celular**. Este é o CSS *Padrão* Base, que fica livre de amarras na folha.
- Em seguida, estenda as regras com os limites via **Media Queries `min-width`** sempre que houver espaço extra para preencher (Desktop).

**Vantagem do Mobile First:**
A maioria das experiências no Desktop requer de forma complexa o CSS em duas dimensões (Grid e colunas elaboradas em tela solta), onde Mobile é um modelo contínuo (Uma torre central).

É muito mais simples escrever CSS de forma fluida a partir de uma "Caixa Vertical única" e dividí-la quanto "haver mais espaço disponível de largura", do que criar o sistema com colunas gigantes complexas e derepente quebrar blocos forçadamente em "mobile view" tirando colunas flutuantes através de `max-width` e afins.
