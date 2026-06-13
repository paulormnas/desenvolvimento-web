---
layout: section
---

# Boas Práticas para o Deploy
## Como garantir que seu app rode com qualidade

---

# Boas Práticas de Deploy Frontend

Fazer o deploy não é só copiar e colar arquivos. Alguns cuidados são fundamentais:

<div class="grid grid-cols-2 gap-4 mt-8">
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-green-400 font-bold">1. Variáveis de Ambiente (.env)</h3>
    <ul class="text-sm mt-2 text-slate-300">
      <li>Nunca exponha chaves secretas no Frontend!</li>
      <li>Use variáveis de ambiente para definir URLs de API que mudam entre <i>Local</i> e <i>Produção</i>.</li>
    </ul>
  </div>
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-purple-400 font-bold">2. Otimização de Build</h3>
    <ul class="text-sm mt-2 text-slate-300">
      <li>Sempre envie para produção a versão "minificada" (menor tamanho de arquivo).</li>
      <li>No Vite, isso é feito pelo comando <code class="text-slate-900 bg-slate-200 px-1 rounded">vite build</code>.</li>
    </ul>
  </div>
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-yellow-400 font-bold">3. Cache e CDN</h3>
    <ul class="text-sm mt-2 text-slate-300">
      <li>Distribua os arquivos globalmente em uma CDN (Content Delivery Network).</li>
      <li>Configure caches adequados (Cache-Control) para não quebrar a aplicação ao atualizar.</li>
    </ul>
  </div>
  <div class="bg-slate-800 text-white p-4 rounded-lg border border-slate-600">
    <h3 class="text-red-400 font-bold">4. Evitar Deploys Manuais</h3>
    <ul class="text-sm mt-2 text-slate-300">
      <li>Evite o processo de "Build local > FTP > Arrastar para o servidor".</li>
      <li>Automatize tudo! Use <b>CI/CD</b>.</li>
    </ul>
  </div>
</div>
