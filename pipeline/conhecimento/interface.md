# Interface

> Para: todos os papéis · Leia quando: arquivo `.tsx`, `.jsx` ou de estilos, ou arquivo com texto exibido ao usuário, ícone ou animação.

## Fontes

- Estilos globais, tema e tipografia (UI-6): `src/styles/app.css`, carregado em `src/routes/__root.tsx`.

## Regras

### UI-1: Primitivo de interface usa Base UI sempre que a biblioteca tem um componente equivalente, inclusive para controle nativo como botão.

- Por quê: comportamento e acessibilidade iguais em toda a interface.

### UI-2: Transição de componente Base UI usa primeiro os mecanismos documentados da biblioteca; os demais movimentos usam Motion quando compatível.

- Por quê: preservar o ciclo de vida dos componentes e evitar duas soluções concorrentes de animação.
- Como: na integração, preserve foco, eventos e montagem e desmontagem; respeite a preferência por movimento reduzido.

### UI-3: Medida fixa de layout, espaçamento, raio e comprimento de sombra é múltiplo de 4px.

- Por quê: escala visual consistente, mesmo quando o design recebido usa outra.
- Escopo: a tipografia segue UI-6.
- Exceção: caso técnico pontual, como borda fina, decidido por necessidade e justificado nas `Decisões` do relato e na entrega.

### UI-4: Opacidade de cor é múltiplo de 0,1 (10%).

- Por quê: escala de transparência previsível.

### UI-5: Duração e atraso são múltiplos de 0,25s (250ms), incluindo zero.

- Por quê: ritmo consistente entre transições, animações e demais temporizações.

### UI-6: Tipografia é definida na fonte global de estilos ou no tema, por elemento semântico ou classe de contexto, com os tokens oficiais de tamanho do Tailwind e as alturas de linha deles.

- Por quê: ajuste global num lugar só e texto previsível.
- Como:
  - Sem tamanho avulso, altura de linha manual nem sobrescrita local de tamanho ou de altura de linha.
  - Espaçamento entre letras usa os tokens oficiais `tracking-*` do Tailwind; nunca `letter-spacing` avulso.
- Fonte: a fonte global de estilos ou tema, em `Fontes`; a configuração segue a versão instalada.

### UI-7: Espaço entre elementos usa `gap` no contêiner.

- Por quê: separação explícita e fácil de depurar.
- Como: não use margem nem `space-*` para separar elementos; `padding` é o espaço interno.

### UI-8: Classes Tailwind ficam inline no `className`, inclusive dentro de `twMerge` e das expressões que ramificam a aparência, sempre que possível.

- Por quê: o autocomplete do Tailwind funciona, e a aparência fica visível junto do elemento que ela estiliza.

### UI-9: Ícone da interface vem de `lucide-react`.

- Por quê: linguagem visual única, sem redesenhar símbolos que a biblioteca já oferece.

### UI-10: Classes de mais de uma parte (condicionais, props ou variáveis) se combinam com `twMerge`; nunca com template literal, `+` ou `join`.

- Por quê: conflito entre utilidades resolvido de forma previsível e uma só forma de compor classes.

### UI-11: Texto exibido ao usuário em português do Brasil.

- Por quê: a interface fala o idioma de quem a usa.
- Escopo: rótulos, mensagens (inclusive de validação e de erro), texto alternativo e atributos de acessibilidade como `alt` e `aria-label`, título e metadados da página.

## Padrões

### Tema diurno e noturno

- Exemplar: `src/lib/theme.ts`, `src/hooks/use-theme/index.ts`, `src/components/root-document/index.tsx` e `src/components/theme-toggle/index.tsx`
- Como:
  - Os tokens de cor são variáveis CSS em `:root` (claro) e `.dark` (escuro) no `app.css`, expostas ao Tailwind por `@theme inline`. A variante escura é `@custom-variant dark` pela classe `dark` no `<html>`.
  - A preferência (`light`, `dark` ou `system`) mora no cookie `meridiano-theme`. É lida por uma função de `createIsomorphicFn`, que usa `getCookie` no servidor e `document.cookie` no cliente, e gravada por uma `createClientOnlyFn`, sem server function.
  - O `beforeLoad` da rota raiz põe `themePreference` no contexto. O hook `useTheme` lê esse contexto, deriva o tema resolvido com `prefers-color-scheme` e, ao trocar, grava o cookie e chama `router.invalidate` filtrado na raiz.
  - O `RootDocument` controla a classe `dark` do `<html>`. Só com `system` ele emite um `ScriptOnce`, que resolve `prefers-color-scheme` antes da pintura.
  - A aparência que depende do tema resolvido usa só `dark:`. O estado de um controle (como a opção ativa do seletor) usa o atributo de estado do Base UI, como `data-pressed:`, nunca `dark:`.
- Por quê: com o cookie, o servidor já renderiza o tema certo, e o HTML não diverge do cliente na hidratação. Sem o script, `system` mostraria o tema errado por um instante.
- Anterior: tema no `localStorage`, aplicado só por script inline, com a classe do `<html>` como fonte de verdade vigiada por `MutationObserver`.

### Estilos de texto por utilitário de contexto

- Exemplar: `src/styles/app.css`
- Como: cada estilo de texto do design (família, tamanho, peso, tracking) é um `@utility type-<contexto>` no `app.css` e entra no `className` como `type-<contexto>`, junto com a cor.
- Por quê: UI-6 pede a tipografia num lugar só; sem um nome por contexto, cada componente montaria a sua combinação de tamanho e tracking.

## Armadilhas

### Duração padrão das transições do Tailwind

- Atenção: as utilidades `transition`, `transition-colors`, `transition-shadow` e as demais usam `--default-transition-duration`, que é 150ms no Tailwind. Esse valor fere UI-5 e não aparece no código. Toda transição leva um `duration-*` com valor múltiplo de 250ms.
