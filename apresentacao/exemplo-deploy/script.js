/* ==========================================================================
   Script Customizado - Interatividade e Simulador de Deploy
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  initDeploySimulator();
});

/* --------------------------------------------------------------------------
   1. Accordion do Cronograma
   -------------------------------------------------------------------------- */
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      const isActive = item.classList.contains('active');

      // Fechar todos os outros items (opcional, mas recomendado para accordion)
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      // Alternar o item atual
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
        // Configura max-height dinamicamente baseado no scrollHeight
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. Simulador de Esteira de CI/CD (Deploy)
   -------------------------------------------------------------------------- */
function initDeploySimulator() {
  const startBtn = document.getElementById('start-deploy-btn');
  const clearBtn = document.getElementById('clear-terminal-btn');
  const terminalLog = document.getElementById('terminal-log');
  const currentStepText = document.getElementById('current-step');
  const overallStatusBadge = document.getElementById('overall-status');
  const urlContainer = document.getElementById('url-container');
  const deployedUrl = document.getElementById('deployed-url');

  let isRunning = false;

  // Logs a serem exibidos passo a passo durante a simulação
  const deploySteps = [
    { text: '$ git status', type: 'muted', delay: 400, stepName: 'Verificando Git' },
    { text: 'On branch main\nYour branch is up to date with \'origin/main\'.\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n\tmodified:   index.html\n\tmodified:   style.css', type: 'info', delay: 800, stepName: 'Verificando Git' },
    { text: '$ git add . && git commit -m "feat: design premium da página de apresentação"', type: 'muted', delay: 600, stepName: 'Commitando Código' },
    { text: '[main 9cf4a2b] feat: design premium da página de apresentação\n 2 files changed, 45 insertions(+), 12 deletions(-)', type: 'info', delay: 700, stepName: 'Commitando Código' },
    { text: '$ git push origin main', type: 'muted', delay: 500, stepName: 'Enviando ao GitHub' },
    { text: 'Enumerating objects: 7, done.\nCounting objects: 100% (7/7), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (4/4), done.\nWriting objects: 100% (4/4), 485 bytes | 485.00 KiB/s, done.\nTo github.com:paulormnas/desenvolvimento-web.git\n   a4b5d2e..9cf4a2b  main -> main', type: 'info', delay: 1000, stepName: 'Enviando ao GitHub' },
    { text: '⚙️ GitHub Webhook disparado. Plataforma de Cloud conectada com sucesso.', type: 'success', delay: 600, stepName: 'Webhook Detectado' },
    { text: '🚀 Iniciando esteira de CI/CD (Ambiente: Production)...', type: 'warning', delay: 500, stepName: 'Inicializando CI/CD' },
    { text: '📦 Instalando dependências do projeto...', type: 'info', delay: 400, stepName: 'Preparando Ambiente' },
    { text: 'npm warn deprecated core-js-pure@3.31.0: core-js-pure is no longer maintained\nadded 148 packages, and audited 149 packages in 3s\nfound 0 vulnerabilities', type: 'muted', delay: 900, stepName: 'Instalando Pacotes' },
    { text: '🔍 Executando verificação de código (ESLint)...', type: 'info', delay: 500, stepName: 'Executando Linters' },
    { text: '✔ Nenhuma falha de lint encontrada na raiz.', type: 'success', delay: 600, stepName: 'Executando Linters' },
    { text: '🛡️ Rodando auditoria de segurança dos pacotes...', type: 'info', delay: 400, stepName: 'Auditoria de Segurança' },
    { text: 'audit CI: 0 vulnerabilidades de alta prioridade encontradas.\nResultado: SEGURO (Aprovado nas diretrizes de Segurança Cibernética).', type: 'success', delay: 800, stepName: 'Auditoria de Segurança' },
    { text: '⚡ Iniciando compilação do projeto (npm run build)...', type: 'warning', delay: 500, stepName: 'Executando Build' },
    { text: '> static-deploy-example@1.0.0 build\n> build-optimizer --minify', type: 'muted', delay: 600, stepName: 'Executando Build' },
    { text: '✓ 3 arquivos otimizados e minificados gerados com sucesso:\n  - dist/index.html (12.4 kB) - compressed Gzip (4.8 kB)\n  - dist/style.css (8.1 kB) - compressed Gzip (2.4 kB)\n  - dist/script.js (3.2 kB) - compressed Gzip (1.1 kB)\nBuild concluído em 1.48s.', type: 'info', delay: 1100, stepName: 'Executando Build' },
    { text: '☁️ Enviando pacote de arquivos estáticos para CDN Edge Global...', type: 'warning', delay: 600, stepName: 'Uploading CDN' },
    { text: '✓ Cache invalidado nas 32 regiões CDN.\n✓ Certificado SSL/TLS auto-renovado (Let\'s Encrypt).\n✓ Configuração de cabeçalhos de segurança (HSTS, CSP, X-Frame-Options) aplicada.', type: 'success', delay: 900, stepName: 'Configurando CDN' },
    { text: '🎉 Implantação de Produção concluída com sucesso!', type: 'success', delay: 400, stepName: 'Sucesso' }
  ];

  // Iniciar deploy ao clicar no botão
  startBtn.addEventListener('click', async () => {
    if (isRunning) return;

    isRunning = true;
    startBtn.disabled = true;
    startBtn.classList.add('disabled');
    urlContainer.classList.add('hidden');
    
    // Atualizar estados da UI
    overallStatusBadge.textContent = 'Executando';
    overallStatusBadge.className = 'status-badge running';
    
    // Limpar terminal antes do deploy
    clearTerminal();
    
    // Executar passos asincronamente
    for (const step of deploySteps) {
      currentStepText.textContent = step.stepName;
      await printLogLine(step.text, step.type, step.delay);
    }
    
    // Fim da execução - Sucesso
    currentStepText.textContent = 'Concluído';
    overallStatusBadge.textContent = 'Sucesso';
    overallStatusBadge.className = 'status-badge success';
    
    // Gerar URL e exibir
    const hash = Math.random().toString(36).substring(2, 8);
    const mockUrl = `https://apresentacao-cybersec-${hash}.vercel.app`;
    deployedUrl.href = mockUrl;
    deployedUrl.innerHTML = `${mockUrl} <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
    urlContainer.classList.remove('hidden');

    isRunning = false;
    startBtn.disabled = false;
    startBtn.classList.remove('disabled');
  });

  // Limpar terminal
  clearBtn.addEventListener('click', () => {
    if (isRunning) return; // Não limpa enquanto roda
    clearTerminal();
    appendInitialLine();
  });

  // Auxiliares
  function clearTerminal() {
    terminalLog.innerHTML = '';
  }

  function appendInitialLine() {
    const line = document.createElement('div');
    line.className = 'log-line text-muted';
    line.textContent = '$ system_status --check';
    
    const secondLine = document.createElement('div');
    secondLine.className = 'log-line text-success';
    secondLine.textContent = 'Esteira de CI/CD pronta para execução. Aguardando commit ou ação manual...';
    
    terminalLog.appendChild(line);
    terminalLog.appendChild(secondLine);
  }

  // Imprime linha com delay e efeito de digitação/carregamento
  function printLogLine(text, type, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        // Remove cursor existente se houver
        const oldCursor = terminalLog.querySelector('.terminal-cursor');
        if (oldCursor) oldCursor.remove();

        const line = document.createElement('div');
        line.className = `log-line text-${type}`;
        
        // Substitui quebras de linha para formatação adequada de blocos no console
        line.innerHTML = text.replace(/\n/g, '<br>');
        
        // Adiciona o cursor piscando ao final da nova linha
        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        line.appendChild(cursor);
        
        terminalLog.appendChild(line);
        
        // Rola o console para o final
        terminalLog.scrollTop = terminalLog.scrollHeight;
        
        resolve();
      }, delay);
    });
  }
}
