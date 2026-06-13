import React, { useState, useEffect } from 'react';
import './App.css';
import { templates } from './mockData';
import SpecEditor from './components/SpecEditor';
import AgentOrchestrator from './components/AgentOrchestrator';
import CodeViewer from './components/CodeViewer';
import TerminalSimulator from './components/TerminalSimulator';
import AgentsRulesCard from './components/AgentsRulesCard';
import confetti from 'canvas-confetti';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [statusText, setStatusText] = useState('Aguardando especificações...');
  const [logs, setLogs] = useState([]);
  const [terminalStatus, setTerminalStatus] = useState('idle'); // idle, running, passed, failed, healing
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  // Atualiza o template ativo quando o editor seleciona outro
  const handleRun = ({ templateId, specText, forceFailure, speed }) => {
    const template = templates.find(t => t.id === templateId);
    if (!template) return;
    
    // Atualiza o template com o texto atualizado pelo usuário
    const activeTemplate = { ...template, specification: specText };
    setSelectedTemplate(activeTemplate);
    
    // Inicia a animação cognitiva do agente
    setIsRunning(true);
    setCurrentStep(1);
    setTerminalStatus('running');
    setLogs([]);
    setStatusText('[Inicializando] Preparando agente...');

    const baseDelay = 1500 / speed;

    // Linha do Tempo da Simulação
    setTimeout(() => {
      // Passo 1: Percepção
      setStatusText('[Percepção] Lendo especificações e mapeando AGENTS.md...');
      setLogs([
        '$ vitest --run',
        'RUN  v25.6.1 /Users/paulo/Workspace/desenvolvimento-web',
        '',
        '[Percepção] Lendo o arquivo de especificações em markdown...',
        `[Percepção] Verificando diretrizes de desenvolvimento em AGENTS.md...`,
        `[Percepção] Perfil detectado: Senior Developer. Diretrizes ativas: Testes AAA, Git Flow e Conventional Commits.`
      ]);
      setCurrentStep(1);

      setTimeout(() => {
        // Passo 2: Raciocínio
        setStatusText('[Raciocínio] Planejando estrutura do componente e casos de teste AAA...');
        setLogs(prev => [
          ...prev,
          '',
          '[Raciocínio] Analisando requisitos funcionais...',
          `[Raciocínio] Domínio identificado: ${activeTemplate.title.split('.')[1]}`,
          '[Raciocínio] Esboçando arquitetura: Componente Funcional React + Estilos Vanilla CSS.',
          '[Raciocínio] Planejando suite de testes unitários baseados na estrutura AAA (Arrange, Act, Assert).'
        ]);
        setCurrentStep(2);

        setTimeout(() => {
          // Passo 3: Ação
          setStatusText('[Ação] Escrevendo arquivos de componente, estilo e testes unitários...');
          setLogs(prev => [
            ...prev,
            '',
            `[Ação] Criando arquivo de componente: src/components/${activeTemplate.id === 'button' ? 'CustomButton' : activeTemplate.id === 'login' ? 'LoginForm' : 'CacheBoard'}.jsx`,
            `[Ação] Criando arquivo de estilos CSS dedicados: src/components/${activeTemplate.id === 'button' ? 'CustomButton' : activeTemplate.id === 'login' ? 'LoginForm' : 'CacheBoard'}.css`,
            `[Ação] Criando arquivo de teste unitário: src/components/${activeTemplate.id === 'button' ? 'CustomButton' : activeTemplate.id === 'login' ? 'LoginForm' : 'CacheBoard'}.test.jsx`
          ]);
          setCurrentStep(3);

          setTimeout(() => {
            // Passo 4: Feedback Loop
            setCurrentStep(4);

            if (!forceFailure) {
              // Fluxo de Sucesso direto
              setStatusText('[Terminal] Executando suite de testes de unidade...');
              setLogs(prev => [
                ...prev,
                '',
                `RUN  src/components/${activeTemplate.id === 'button' ? 'CustomButton' : activeTemplate.id === 'login' ? 'LoginForm' : 'CacheBoard'}.test.jsx`,
                ' ✓ deve renderizar o componente corretamente (Arrange, Act, Assert) (18ms)',
                ' ✓ deve disparar o evento correto ao interagir com o usuário (12ms)',
                ' ✓ deve validar estados e restrições de negócio (15ms)',
                '',
                'Test Files: 1 passed (1 total)',
                'Tests:      3 passed (3 total)',
                'Snapshots:  0 total',
                'Time:       168ms',
                'Status:     PASS'
              ]);
              setTerminalStatus('passed');
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
              setIsRunning(false);
              setStatusText('[Concluído] Código e testes gerados com sucesso!');
            } else {
              // Fluxo de Falha e Auto-Correção (Feedback Loop)
              setStatusText('[Terminal] Executando suite de testes de unidade...');
              setLogs(prev => [
                ...prev,
                '',
                `RUN  src/components/${activeTemplate.id === 'button' ? 'CustomButton' : activeTemplate.id === 'login' ? 'LoginForm' : 'CacheBoard'}.test.jsx`,
                ' ✓ deve renderizar o componente corretamente (18ms)',
                ' ✓ deve disparar o evento correto ao interagir com o usuário (12ms)',
                ' ✕ deve validar estados e restrições de negócio (45ms)',
                '',
                '  → expected event to be blocked, but handler was triggered.',
                '',
                'Test Files: 1 failed (1 total)',
                'Tests:      2 passed, 1 failed (3 total)',
                'Status:     FAIL'
              ]);
              setTerminalStatus('failed');

              // Inicia processo de self-healing
              setTimeout(() => {
                setStatusText('[Auto-Ajuste] Analisando logs de erro e corrigindo o código...');
                setTerminalStatus('healing');
                setLogs(prev => [
                  ...prev,
                  '',
                  '[Feedback Loop] Auto-correção ativada (Self-Healing)...',
                  '[Auto-Ajuste] Analisando logs de exceção do terminal...',
                  '[Auto-Ajuste] Erro identificado no componente principal.',
                  '[Auto-Ajuste] Refatorando tratador de eventos para respeitar restrições de carregamento/validação.',
                  '[Ação] Modificando arquivo do componente para aplicar correção...',
                  '[Terminal] Re-executando testes de unidade...'
                ]);

                setTimeout(() => {
                  setLogs(prev => [
                    ...prev,
                    '',
                    `RUN  src/components/${activeTemplate.id === 'button' ? 'CustomButton' : activeTemplate.id === 'login' ? 'LoginForm' : 'CacheBoard'}.test.jsx`,
                    ' ✓ deve renderizar o componente corretamente (14ms)',
                    ' ✓ deve disparar o evento correto ao interagir com o usuário (10ms)',
                    ' ✓ deve validar estados e restrições de negócio (12ms)',
                    '',
                    'Test Files: 1 passed (1 total)',
                    'Tests:      3 passed (3 total)',
                    'Status:     PASS'
                  ]);
                  setTerminalStatus('passed');
                  confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 }
                  });
                  setIsRunning(false);
                  setStatusText('[Auto-Correção Concluída] Falhas corrigidas com sucesso pelo agente!');
                }, baseDelay * 1.5);

              }, baseDelay * 1.5);
            }

          }, baseDelay);
        }, baseDelay);
      }, baseDelay);
    }, baseDelay);
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-brand">
          <span className="ai-icon">⚙️</span>
          <div>
            <h1>SDD Playground</h1>
            <p className="header-subtitle">Aula 8: Desenvolvimento de Software com Agentes de IA</p>
          </div>
        </div>
        <div className="header-meta">
          <span className="meta-badge git-badge">
            <span className="git-branch-icon">🌿</span> git: develop
          </span>
          <span className="meta-badge commit-badge">
            <span className="commit-icon">✍️</span> commit: feat(lecture-8)
          </span>
        </div>
      </header>

      <main className="container grid-container">
        {/* Coluna Esquerda: Especificação e Regras */}
        <div className="col-left">
          <AgentsRulesCard />
          <SpecEditor
            templates={templates}
            onRun={handleRun}
            isRunning={isRunning}
          />
        </div>

        {/* Coluna Direita: Simulação, Código e Terminal */}
        <div className="col-right">
          <AgentOrchestrator
            currentStep={currentStep}
            statusText={statusText}
          />
          <CodeViewer
            code={selectedTemplate.code}
            css={selectedTemplate.css}
            test={selectedTemplate.test}
          />
          <TerminalSimulator
            logs={logs}
            status={terminalStatus}
          />
        </div>
      </main>
    </div>
  );
}
