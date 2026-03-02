---
transition: slide-up
---

# 9. Transformações (2D e 3D)

O `transform` manipula caixas visualmente como transladar, escalar ou rodar, de forma altamente performática (rodando na GPU gráfica, fora do re-cálculo central).

* **Translate** `translate()`, movimenta usando coordenadas nos eixos (X,Y) baseadas em porcentagem do elemento pai ou unidade fixa: `transform: translateX(50px)`.
* **Scale** aumenta ou diminui o elemento: `transform: scale(1.5)`. Encolher ou inflar é mais fluido e elegante que tentar forçar o `width` ou `height` para animar o tamanho.
* **Rotate** rotaciona elementos nos ângulos: `transform: rotate(45deg);`
* **Skew** desvia e enviesa o elemento (usado muito para criar fundos inclinados em designs de cabeçalhos).
