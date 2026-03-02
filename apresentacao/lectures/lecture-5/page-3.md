---
transition: slide-up
---

# 9. Animações Keyframes Completas (@keyframes)

Com a propriedade `animation`, a gente vai além das interações de `:hover`, criando nossos próprios movimentos, *quadro a quadro*, mesmo sem a interação do usuário.

```css
@keyframes pulsarVermelho {
  0% { transform: scale(1); background: darkred; }
  50% { transform: scale(1.1); background: #ff0000; }
  100% { transform: scale(1); background: darkred;}
}

.alerta-emergencia {
  /* Animação - Duração, Quantidade Repetição (infinita), 
  Alternar/Retroceder sentido da cena ou resetar loop */
  animation: pulsarVermelho 2s infinite ease-in-out; 
}
```
