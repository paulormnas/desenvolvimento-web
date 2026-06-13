export const templates = [
  {
    id: "button",
    title: "1. Botão de Ação Moderno (CustomButton)",
    description: "Um botão customizado com efeitos hover de gradiente, micro-animações de pulso, suporte a ícone e estado de carregamento desabilitado.",
    specification: `# Especificação: Botão de Ação Moderno (CustomButton)

## Objetivo
Criar um componente de botão premium, altamente interativo e com feedback visual imediato para ações assíncronas (como loading).

## Requisitos Visuais e Design
- **Estilo:** Gradiente moderno (fundo violáceo/índigo com transição para ciano no hover).
- **Feedback:** Sombra interna no clique, animação de pulso no hover, e spinner circular suave no estado "loading".
- **Acessibilidade:** Deve conter 'aria-disabled' quando em estado de carregamento ou desabilitado.

## Regras de Negócio e Comportamento
- Receber propriedades: \`label\`, \`onClick\`, \`isLoading\`, \`disabled\`, e \`variant\` (primary, secondary).
- Se \`isLoading\` for verdadeiro, o clique não deve disparar a ação \`onClick\`.
- O spinner deve substituir o texto (ou ficar ao lado) durante o carregamento.

## Estrutura de Testes (Conforme AGENTS.md - Padrão AAA)
- **Caso 1:** Deve renderizar o texto correto (label).
- **Caso 2:** Deve disparar o evento de clique (onClick) quando ativo.
- **Caso 3:** Não deve disparar o evento de clique quando \`isLoading\` for verdadeiro.`,
    
    code: `import React from 'react';
import './CustomButton.css';

/**
 * CustomButton - Componente de botão altamente interativo
 * Segue as diretrizes de código limpo e responsabilidade única.
 */
export default function CustomButton({
  label,
  onClick,
  isLoading = false,
  disabled = false,
  variant = 'primary',
  children
}) {
  const isButtonDisabled = disabled || isLoading;

  const handleClick = (event) => {
    if (isButtonDisabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={\`custom-btn custom-btn-\${variant} \${isLoading ? 'custom-btn-loading' : ''}\`}
      onClick={handleClick}
      disabled={isButtonDisabled}
      aria-busy={isLoading}
      aria-disabled={isButtonDisabled}
    >
      {isLoading ? (
        <span className="btn-spinner" data-testid="btn-spinner"></span>
      ) : null}
      <span className="btn-text">{children || label}</span>
    </button>
  );
}`,
    css: `.custom-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.custom-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.custom-btn:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
}

.custom-btn:disabled {
  background: #334155;
  color: #94a3b8;
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.7;
}

.custom-btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  box-shadow: none;
}

.custom-btn-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
}

/* Spinner animado */
.btn-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: btn-spin 0.6s linear infinite;
}

@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}`,
    test: `import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton';

describe('CustomButton Component', () => {
  it('deve renderizar o texto correto do label (Arrange, Act, Assert)', () => {
    // Arrange (Preparar)
    const labelText = 'Enviar Dados';
    
    // Act (Agir)
    render(<CustomButton label={labelText} />);
    const button = screen.getByRole('button');
    
    // Assert (Verificar)
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(labelText);
  });

  it('deve disparar o evento onClick quando clicado e ativo', () => {
    // Arrange
    const handleClick = vi.fn();
    render(<CustomButton label="Clique-me" onClick={handleClick} />);
    const button = screen.getByRole('button');
    
    // Act
    fireEvent.click(button);
    
    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('não deve disparar onClick quando o botão estiver em estado de loading', () => {
    // Arrange
    const handleClick = vi.fn();
    render(<CustomButton label="Salvar" onClick={handleClick} isLoading={true} />);
    const button = screen.getByRole('button');
    
    // Act
    fireEvent.click(button);
    
    // Assert
    expect(handleClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(screen.getByTestId('btn-spinner')).toBeInTheDocument();
  });
});`
  },
  {
    id: "login",
    title: "2. Form de Login com Feedback (LoginForm)",
    description: "Um formulário de login com micro-interações, validação de campos cliente-side em tempo real, estados visuais dinâmicos e suporte a feedback de erro/sucesso.",
    specification: `# Especificação: Card de Login Moderno (LoginForm)

## Objetivo
Criar um formulário de login moderno, seguro e responsivo, oferecendo validações imediatas e feedback de erro claro para o usuário.

## Requisitos de Design
- **Visual:** Estilo Glassmorphism (painel translúcido, bordas brilhantes, desfoque de fundo).
- **Entradas (Inputs):** Foco animado com bordas coloridas gradientes e labels flutuantes.
- **Transições:** Mensagens de erro que surgem com animação suave de fade-in e balanço lateral.

## Regras de Negócio
- O campo Email deve conter um formato de email válido.
- O campo Senha deve possuir pelo menos 6 caracteres.
- Disparar a função \`onSubmit({ email, password })\` somente se todos os campos forem válidos.
- Exibir loading no botão durante o envio.

## Estrutura de Testes (Conforme AGENTS.md)
- **Caso 1:** Deve inicializar com campos vazios e botão desabilitado.
- **Caso 2:** Deve mostrar erros de validação ao inserir e-mail inválido e senha curta.
- **Caso 3:** Deve disparar \`onSubmit\` com os dados corretos ao preencher tudo corretamente.`,
    
    code: `import React, { useState } from 'react';
import './LoginForm.css';

export default function LoginForm({ onSubmit, isLoading = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (val) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!val) return 'O e-mail é obrigatório';
    if (!emailRegex.test(val)) return 'Insira um e-mail válido';
    return '';
  };

  const validatePassword = (val) => {
    if (!val) return 'A senha é obrigatória';
    if (val.length < 6) return 'A senha deve ter pelo menos 6 caracteres';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);

    setEmailError(eErr);
    setPasswordError(pErr);

    if (!eErr && !pErr && onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <div className="login-card">
      <h2>Acessar Plataforma</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(validateEmail(e.target.value));
            }}
            className={emailError ? 'input-error' : ''}
            placeholder="seu-email@dominio.com"
            disabled={isLoading}
          />
          {emailError && <span className="error-msg">{emailError}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) setPasswordError(validatePassword(e.target.value));
            }}
            className={passwordError ? 'input-error' : ''}
            placeholder="••••••••"
            disabled={isLoading}
          />
          {passwordError && <span className="error-msg">{passwordError}</span>}
        </div>

        <button type="submit" className="btn-submit" disabled={isLoading}>
          {isLoading ? 'Conectando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}`,
    css: `.login-card {
  padding: 2.5rem;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  font-family: 'Inter', sans-serif;
}

.login-card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.form-group {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #f8fafc;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  background: rgba(30, 41, 59, 0.8);
}

.form-group input.input-error {
  border-color: #ef4444;
}

.error-msg {
  font-size: 0.75rem;
  color: #f87171;
  margin-top: 0.35rem;
  animation: shake 0.3s ease-in-out;
}

.btn-submit {
  width: 100%;
  padding: 0.85rem;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  filter: brightness(1.1);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}`,
    test: `import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  it('deve inicializar com campos vazios e sem erro', () => {
    // Arrange & Act
    render(<LoginForm onSubmit={vi.fn()} />);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);

    // Assert
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(screen.queryByText(/insira um e-mail válido/i)).not.toBeInTheDocument();
  });

  it('deve exibir erros de validação ao submeter dados inválidos', () => {
    // Arrange
    render(<LoginForm onSubmit={vi.fn()} />);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitBtn = screen.getByRole('button', { name: /entrar/i });

    // Act - Preenche com valores inválidos e clica em enviar
    fireEvent.change(emailInput, { target: { value: 'emailinvalido' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(submitBtn);

    // Assert
    expect(screen.getByText(/insira um e-mail válido/i)).toBeInTheDocument();
    expect(screen.getByText(/a senha deve ter pelo menos 6 caracteres/i)).toBeInTheDocument();
  });

  it('deve disparar onSubmit com os dados corretos se a validação passar', () => {
    // Arrange
    const handleSubmit = vi.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitBtn = screen.getByRole('button', { name: /entrar/i });

    // Act - Preenche corretamente e submete
    fireEvent.change(emailInput, { target: { value: 'dev@senior.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaSegura123' } });
    fireEvent.click(submitBtn);

    // Assert
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'dev@senior.com',
      password: 'senhaSegura123'
    });
  });
});`
  },
  {
    id: "todos",
    title: "3. Board de Tarefas com LocalStorage (CacheBoard)",
    description: "Um mini gerenciador de tarefas com cache persistente em LocalStorage, simulando um repositório assíncrono com loading states e tratamento de concorrência.",
    specification: `# Especificação: Quadro de Tarefas com Persistência (CacheBoard)

## Objetivo
Criar um painel de tarefas de alto desempenho que persiste os dados localmente, garantindo funcionamento offline e sincronização rápida.

## Requisitos de UI/UX
- **Visual:** Layout flexível em colunas, cards arrastáveis ou com botões de movimentação rápidos.
- **Estados Vazios:** Exibir uma ilustração animada e mensagem de encorajamento quando não houver tarefas.

## Regras de Negócio
- Carregar dados salvos no LocalStorage sob a chave \`sdd_playground_tasks\` no carregamento.
- Permitir adição de novas tarefas (mínimo de 3 caracteres de texto).
- Permitir remover e marcar tarefas como concluídas.
- Persistir no LocalStorage sempre que a lista de tarefas mudar.

## Estrutura de Testes (Conforme AGENTS.md)
- **Caso 1:** Deve carregar dados salvos do LocalStorage na inicialização.
- **Caso 2:** Deve adicionar uma nova tarefa válida à lista e salvar no LocalStorage.
- **Caso 3:** Não deve aceitar tarefas com menos de 3 caracteres.`,
    
    code: `import React, { useState, useEffect } from 'react';
import './CacheBoard.css';

const LOCAL_STORAGE_KEY = 'sdd_playground_tasks';

export default function CacheBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [error, setError] = useState('');

  // Carrega do LocalStorage na montagem (Arrange)
  useEffect(() => {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      try {
        setTasks(JSON.parse(cached));
      } catch (e) {
        console.error('Falha ao parsear tarefas do cache', e);
      }
    }
  }, []);

  // Salva no LocalStorage sempre que as tarefas mudam
  const saveToCache = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTasks));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const cleanText = newTaskText.trim();

    if (cleanText.length < 3) {
      setError('A tarefa deve conter no mínimo 3 caracteres');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      text: cleanText,
      completed: false
    };

    const updated = [...tasks, newTask];
    saveToCache(updated);
    setNewTaskText('');
    setError('');
  };

  const handleToggleTask = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveToCache(updated);
  };

  const handleDeleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    saveToCache(updated);
  };

  return (
    <div className="board-container">
      <h3>Quadro de Tarefas Célere</h3>
      
      <form onSubmit={handleAddTask} className="add-task-form">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Estudar testes unitários..."
          className={error ? 'input-err' : ''}
        />
        <button type="submit">Adicionar</button>
      </form>
      {error && <p className="error-text">{error}</p>}

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">Nenhuma tarefa pendente. Comece criando uma!</div>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={\`task-item \${task.completed ? 'completed' : ''}\`}>
              <span onClick={() => handleToggleTask(task.id)} className="task-text">
                {task.text}
              </span>
              <button onClick={() => handleDeleteTask(task.id)} className="btn-delete" aria-label="Excluir">
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`,
    css: `.board-container {
  padding: 1.5rem;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
  color: #f1f5f9;
  font-family: 'Inter', sans-serif;
}

.board-container h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #38bdf8;
}

.add-task-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.add-task-form input {
  flex: 1;
  padding: 0.6rem 0.8rem;
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #fff;
  outline: none;
}

.add-task-form input:focus {
  border-color: #38bdf8;
}

.add-task-form input.input-err {
  border-color: #ef4444;
}

.add-task-form button {
  padding: 0.6rem 1rem;
  background: #38bdf8;
  border: none;
  border-radius: 6px;
  color: #0f172a;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}

.add-task-form button:hover {
  opacity: 0.9;
}

.error-text {
  color: #f87171;
  font-size: 0.75rem;
  margin: 0.25rem 0 0.75rem 0;
  text-align: left;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  max-height: 250px;
  overflow-y: auto;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  transition: all 0.2s;
}

.task-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.task-item.completed .task-text {
  text-decoration: line-through;
  color: #64748b;
}

.task-text {
  flex: 1;
  cursor: pointer;
  text-align: left;
  font-size: 0.9rem;
}

.btn-delete {
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.2rem 0.4rem;
}

.btn-delete:hover {
  color: #ef4444;
}

.empty-state {
  padding: 1.5rem;
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
  font-style: italic;
  border: 1px dashed rgba(255, 255, 255, 0.05);
  border-radius: 6px;
}`,
    test: `import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CacheBoard from './CacheBoard';

describe('CacheBoard Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve iniciar exibindo o estado vazio se não houver tarefas no localStorage', () => {
    // Arrange & Act
    render(<CacheBoard />);
    
    // Assert
    expect(screen.getByText(/Nenhuma tarefa pendente/i)).toBeInTheDocument();
  });

  it('deve adicionar uma tarefa válida e salvá-la no localStorage', () => {
    // Arrange
    render(<CacheBoard />);
    const input = screen.getByPlaceholderText(/Estudar testes/i);
    const addButton = screen.getByRole('button', { name: /adicionar/i });

    // Act
    fireEvent.change(input, { target: { value: 'Completar Aula 8' } });
    fireEvent.click(addButton);

    // Assert
    expect(screen.getByText('Completar Aula 8')).toBeInTheDocument();
    expect(localStorage.getItem('sdd_playground_tasks')).toContain('Completar Aula 8');
  });

  it('não deve aceitar tarefas com menos de 3 caracteres e mostrar erro', () => {
    // Arrange
    render(<CacheBoard />);
    const input = screen.getByPlaceholderText(/Estudar testes/i);
    const addButton = screen.getByRole('button', { name: /adicionar/i });

    // Act
    fireEvent.change(input, { target: { value: 'Ir' } });
    fireEvent.click(addButton);

    // Assert
    expect(screen.getByText(/mínimo de 3 caracteres/i)).toBeInTheDocument();
    expect(screen.queryByText('Ir')).not.toBeInTheDocument();
  });
});`
  }
];
