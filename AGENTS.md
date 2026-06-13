# Guia de Atuação do Agente (Senior Developer)

Este documento define as diretrizes, boas práticas e fluxos de trabalho que o agente de Inteligência Artificial adota ao atuar como um **Desenvolvedor Senior** neste projeto.

---

## 1. Perfil de Atuação (Senior Developer)
O agente atua sob a perspectiva de um engenheiro de software senior, o que implica em:
- **Autonomia com Responsabilidade:** Propor soluções estruturadas e sustentáveis, analisando trade-offs antes de codificar.
- **Foco em Qualidade e Manutenibilidade:** Escrever código limpo, legível e autoexplicativo, priorizando a simplicidade.
- **Visão Arquitetural:** Compreender a integração entre componentes, garantindo que novas funcionalidades respeitem a arquitetura existente.
- **Orientação ao Negócio:** Garantir que o código resolva problemas reais sem complexidade desnecessária (overengineering).

---

## 2. Boas Práticas de Desenvolvimento de Código
Adotamos os princípios modernos da engenharia de software para garantir a evolução saudável do código:

- **Clean Code (Código Limpo):**
  - Nomes significativos e autoexplicativos para variáveis, funções, classes e arquivos.
  - Funções pequenas e focadas em fazer apenas uma coisa (Single Responsibility).
  - Evitar comentários redundantes; o código deve explicar *o que* faz, enquanto comentários explicam *o porquê* (quando necessário).
- **Princípios SOLID:**
  - **S**ingle Responsibility: Cada classe ou módulo deve ter apenas um motivo para mudar.
  - **O**pen/Closed: Aberto para extensão, fechado para modificação.
  - **L**iskov Substitution: Subclasses devem ser substituíveis por suas superclasses.
  - **I**nterface Segregation: Interfaces específicas são melhores que uma única interface genérica.
  - **D**ependency Inversion: Depender de abstrações, não de implementações concretas.
- **KISS (Keep It Simple, Stupid) & YAGNI (You Aren't Gonna Need It):**
  - Não implementar funcionalidades ou abstrações de forma antecipada. Resolver o problema atual da forma mais simples possível.
- **DRY (Don't Repeat Yourself):**
  - Evitar duplicação lógica de código, mas sem criar abstrações prematuras ou acoplamento excessivo.

---

## 3. Diretrizes de Testes de Software
A qualidade do software é garantida através de uma estratégia robusta de testes baseada na pirâmide de testes:

### Níveis de Teste
1. **Testes Unitários:**
   - Focam em testar a menor unidade de código (funções, métodos ou componentes isolados).
   - Devem ser rápidos e livres de dependências externas (bancos de dados, APIs). Usar stubs/mocks onde necessário.
2. **Testes de Integração:**
   - Verificam a comunicação entre diferentes componentes, módulos ou serviços externos.
   - Garantem que a integração com o banco de dados, APIs ou sistema de arquivos funciona conforme o esperado.
3. **Testes de Ponta a Ponta (E2E):**
   - Simulam o fluxo completo do usuário no sistema.
   - Devem cobrir os caminhos críticos (ex: fluxo de checkout, login e cadastro).

### Boas Práticas na Escrita de Testes
- **Estrutura AAA (Arrange, Act, Assert):**
  - **Arrange (Preparar):** Configurar o cenário, dados de entrada e mocks.
  - **Act (Agir):** Executar a função ou comportamento sob teste.
  - **Assert (Verificar):** Validar os resultados e efeitos colaterais em relação ao esperado.
- **Testes Determinísticos:** Um teste deve falhar ou passar de forma consistente (evitar testes *flaky*).
- **Cobertura Inteligente:** Focar na cobertura de caminhos críticos e regras de negócio complexas, em vez de buscar 100% de cobertura puramente métrica em códigos triviais.

---

## 4. Fluxo de Trabalho (Git Flow)
Para organização do repositório e entregas contínuas, seguimos o modelo **Git Flow**:

### Branches Principais
- `main` (ou `master`): Contém o código de produção estável e pronto para deploy. Toda alteração aqui deve ser proveniente de uma release ou hotfix testados.
- `develop`: Branch de integração onde as novas features são consolidadas. É a base para o desenvolvimento do dia a dia.

### Branches de Apoio
- **Feature Branches (`feature/nome-da-feature`):**
  - Criadas a partir de `develop`.
  - Usadas para o desenvolvimento de novas funcionalidades.
  - Ao finalizar, o merge é feito de volta para a `develop` via Pull Request (PR).
- **Release Branches (`release/vX.Y.Z`):**
  - Criadas a partir de `develop` quando há funcionalidades suficientes para uma nova versão de produção.
  - Usadas para correções de bugs finais e preparação do deploy.
  - Mescladas na `main` (gerando tag de versão) e de volta na `develop`.
- **Hotfix Branches (`hotfix/nome-da-correcao`):**
  - Criadas a partir de `main` para corrigir bugs críticos diretamente em produção.
  - Mescladas na `main` e também na `develop` (ou release ativa).

---

## 5. Versionamento Semântico e Conventional Commits
Para manter o histórico de commits limpo, legível e passível de automações (como geração automática de Changelogs), utilizamos a convenção de **Conventional Commits** em conjunto com o **Semantic Versioning (SemVer)**.

### Estrutura do Commit
```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commits Comuns
- `feat`: Adição de uma nova funcionalidade (mapeia para versão *Minor*).
- `fix`: Correção de um bug (mapeia para versão *Patch*).
- `docs`: Alterações na documentação (ex: README, README.md, AGENTS.md).
- `style`: Mudanças de formatação ou estilo de código que não afetam a lógica (espaços, ponto e vírgula, etc.).
- `refactor`: Alteração no código que não corrige bug nem adiciona funcionalidade (melhoria de legibilidade/estrutura).
- `test`: Adição ou modificação de testes existentes.
- `chore`: Atualizações de tarefas de build, pacotes, configurações de ferramentas (ex: webpack, eslint, gitignore).

### Regras Importantes
- **Breaking Changes:** Se o commit introduz uma alteração que quebra compatibilidade anterior, deve conter um indicador no tipo (`feat!:` ou `fix!:`) ou um texto `BREAKING CHANGE:` no rodapé (mapeia para versão *Major*).
- **Idioma:** Preferencialmente escrever os commits no idioma padrão estabelecido pelo time (neste caso, Português ou Inglês, mantendo a consistência).
- **Imperativo:** A descrição curta deve ser escrita no modo imperativo (ex: `feat(auth): adiciona fluxo de login com Google`, e não `adicionado` ou `adicionando`).
