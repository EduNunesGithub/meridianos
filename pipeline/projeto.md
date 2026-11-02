# Projeto

> Para: orquestrador e revisor · Leia quando: o orquestrador, em toda tarefa; o revisor, as seções `Checagens` e `Rodar`.

Fatos conferidos deste projeto que o código não mostra. Critérios: `guias/escrita.md › Projeto`.

## Adoção

- Estado: adotado.

## Idioma

- Mensagens de commit: Conventional Commits, com a descrição em português do Brasil.
- Código e documentação: COD-12. Interface: UI-11.

## Checagens

### Completas

- Pipeline: a conferência de `guias/escrita.md › Conferência`, quando a tarefa muda `pipeline/`, `AGENTS.md`, `.claude/` ou `.codex/`.
- Aplicação: `pnpm check`, que roda em sequência `pnpm format:check`, `pnpm lint`, `pnpm typecheck` e `pnpm build`.
- Diff: `git status --short --untracked-files=all` e `git diff --check`, incluindo os arquivos novos na leitura.

### Com escopo

- Formato: `pnpm exec prettier --check <arquivos>`.
- Lint: `pnpm exec eslint <arquivos>`.
- Tipos: `pnpm typecheck`, que confere o projeto inteiro; o TypeScript não tem checagem por arquivo com a configuração do projeto.

### Pré-requisitos

- Node.js `>=22.13.0` e pnpm `10.28.0`, conforme `package.json`.
- Dependências instaladas: `pnpm install`.
- `pnpm typecheck` depende de `src/routeTree.gen.ts` atualizado: depois de criar, renomear ou apagar rota, rode `pnpm build` ou `pnpm dev` antes.

### Marcadores de supressão

- ESLint: `eslint-disable`, `eslint-disable-line` e `eslint-disable-next-line`.
- TypeScript: `@ts-ignore`, `@ts-expect-error` e `@ts-nocheck`.
- Prettier: `prettier-ignore`.
- Não contam: as diretivas que o TanStack Router gera em `src/routeTree.gen.ts`.

## Rodar

- Desenvolvimento: `pnpm dev`, em `http://localhost:3000`.
- Produção local: `pnpm build` e, depois, `pnpm preview`, em `http://localhost:3000`.
- Rotas: `/`. Endereço inexistente responde 404 com a página de não encontrado.
- Acessos de teste: nenhum; a aplicação não tem autenticação.
- Hospedagem de produção: não definida.

## Paralelismo

- Limite: até 10 missões ao mesmo tempo, reduzido à capacidade da ferramenta ou da conta.
- Recursos exclusivos:
  - instalação de dependências: `node_modules/`, `package.json` e `pnpm-lock.yaml`;
  - build: `dist/`;
  - porta `3000`, de `pnpm dev` e `pnpm preview`;
  - `src/routeTree.gen.ts`, reescrito por `pnpm dev` e `pnpm build`.
- Agregadores:
  - `src/routes/__root.tsx`;
  - `src/router.tsx`;
  - `src/styles/app.css`.

## Arquivos protegidos

Cada item tem a regra `ask` correspondente em `.claude/settings.json`: `Edit(/<arquivo>)` para arquivo e `Edit(/<pasta>/**)` para pasta.

- Instruções e ferramentas de agente: `AGENTS.md`, `CLAUDE.md`, `.claude/` e `.codex/`.
- Processo da pipeline: `pipeline/README.md`, `pipeline/guias/`, `pipeline/papeis/` e `pipeline/projeto.md`.
- Conhecimento que governa a leitura e as dependências: `pipeline/conhecimento/indice.md` e `pipeline/conhecimento/stack.md`.
- Repositório: `.gitattributes` e `.gitignore`.
- Dependências e comandos: `package.json` e `pnpm-lock.yaml`.
- Checagens: `eslint.config.mjs`, `prettier.config.mjs` e `.prettierignore`.
- Framework e tipos: `vite.config.ts` e `tsconfig.json`.

Configuração protegida é a que define checagens, framework, tipos, dependências e comandos, infraestrutura e dados, hooks e integração contínua. Ao criá-la ou adotá-la, registre aqui o caminho real e, na mesma entrega, a regra `ask` correspondente, antes de delegar mudanças nela.

## Ambiente

- Ferramentas de agente: Claude Code, com as definições em `.claude/agents/`, e Codex, com as de `.codex/agents/`. As duas pastas têm os mesmos agentes.
- Disponibilidade dos modelos na conta do humano: não conferida. Indisponibilidade real é declarada, sem troca silenciosa de agente.
- As definições de `.claude/agents/` só carregam numa sessão aberta depois que o repositório as tem.
