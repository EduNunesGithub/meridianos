# Meridianos

Aplicação web em [TanStack Start](https://tanstack.com/start), com React, TypeScript, Vite e Tailwind CSS.

## Pré-requisitos

- Node.js 22.13 ou mais novo.
- pnpm 10.28. Com o Corepack: `corepack enable`.

## Instalação

```sh
pnpm install
```

## Desenvolvimento

```sh
pnpm dev
```

A aplicação abre em <http://localhost:3000>.

## Produção local

```sh
pnpm build
pnpm preview
```

O build fica em `dist/`, e a prévia de produção abre em <http://localhost:3000>.

## Checagens

```sh
pnpm check
```

Roda formato (Prettier), lint (ESLint), tipos (TypeScript) e build. Separadamente: `pnpm format:check`, `pnpm lint`, `pnpm typecheck` e `pnpm build`. Para formatar: `pnpm format`.

## Acessos de teste

Nenhum: a aplicação ainda não tem autenticação.

## Agentes de IA

O repositório usa uma pipeline de agentes para o Claude Code e o Codex. As instruções começam em `AGENTS.md`, e o uso está em `pipeline/README.md`.
