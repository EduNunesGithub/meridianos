# Backlog

> Para: orquestrador · Leia quando: ao entender um pedido e ao registrar o que fica para depois.

Nenhuma entrada é escopo de uma tarefa até o humano pedir ou o pedido cobri-la. Critérios e modelo: `guias/escrita.md › Backlog`.

## Achados

### Favicon ausente

- Classe: consistência
- Onde: `public/` e `src/routes/__root.tsx`
- O quê: não existe `favicon.ico` e o `head` da raiz não declara ícone, então todo primeiro carregamento recebe 404 em `/favicon.ico` e o console registra "Failed to load resource".
- Evidência: requisição a `/favicon.ico` no `pnpm preview` responde 404.
- Origem: 2026-11-02, refazer o gerenciador de tema
- Recomendação: adicionar um ícone em `public/` e declará-lo no `head` da rota raiz.

## Propostas

## Pendências
