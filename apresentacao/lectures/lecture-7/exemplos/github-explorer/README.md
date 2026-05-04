# Exemplo Aula 7: GitHub Explorer

Este aplicativo demonstra os conceitos fundamentais de React apresentados na Aula 7.

## Conceitos Aplicados:
1. **Hooks**:
   - `useState`: Gerencia o nome de usuário digitado e os dados retornados pela API.
   - `useEffect`: Poderia ser usado para buscar dados iniciais (visto na teoria).
2. **Componentização**:
   - `Header`: Navegação reutilizável.
   - `UserCard`: Exibição de dados recebidos via **props**.
3. **React Router**:
   - Navegação entre as rotas `/` (Início) e `/about` (Sobre).
4. **Axios**:
   - Requisição assíncrona para a API oficial do GitHub.

## Como rodar:

Certifique-se de estar dentro desta pasta (`github-explorer`) no terminal:

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```
