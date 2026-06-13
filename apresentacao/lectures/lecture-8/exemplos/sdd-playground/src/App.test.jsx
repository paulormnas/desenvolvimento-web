import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('SDD Playground App (Conformidade com AGENTS.md)', () => {
  it('deve renderizar o título e o estado inicial corretamente (Arrange, Act, Assert)', () => {
    // Arrange (Preparar)
    render(<App />);

    // Act (Agir)
    const headerTitle = screen.getByRole('heading', { name: /sdd playground/i });
    const rulesCardTitle = screen.getByText(/Regras de Atuação do Agente/i);
    const specEditorTitle = screen.getByText(/Especificação de Funcionalidade/i);
    const runButton = screen.getByRole('button', { name: /Executar Agente de IA/i });

    // Assert (Verificar)
    expect(headerTitle).toBeInTheDocument();
    expect(rulesCardTitle).toBeInTheDocument();
    expect(specEditorTitle).toBeInTheDocument();
    expect(runButton).toBeInTheDocument();
    expect(runButton).not.toBeDisabled();
  });

  it('deve permitir trocar de template de especificação', () => {
    // Arrange
    render(<App />);
    const select = screen.getByLabelText(/selecione um template/i);

    // Act
    fireEvent.change(select, { target: { value: 'login' } });

    // Assert
    expect(select.value).toBe('login');
    const textarea = screen.getByLabelText(/especifique as regras/i);
    expect(textarea.value).toContain('LoginForm');
  });

  it('deve iniciar a simulação do agente quando o botão de execução for clicado', async () => {
    // Arrange
    render(<App />);
    const runButton = screen.getByRole('button', { name: /Executar Agente de IA/i });

    // Act
    fireEvent.click(runButton);

    // Assert
    expect(runButton).toBeDisabled();
    expect(screen.getByText(/Agente Operando.../i)).toBeInTheDocument();
    
    // Aguarda e verifica se o estado cognitivo muda para a primeira etapa (Percepção)
    await waitFor(() => {
      expect(screen.getByText(/Leitura de Contexto/i)).toBeInTheDocument();
    });
  });
});
