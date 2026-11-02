# 2026-11-02: transições com a duração padrão de 150ms

Causa: pipeline (armadilha ausente: UI-5 não avisava que as utilidades `transition-*` do Tailwind têm duração padrão de 150ms)

Efeito: na tela inicial, todas as transições saíram com 150ms, valor fora de UI-5 que não aparece no código. A revisão pegou o problema.

Correção: as transições ganharam `duration-*` em múltiplo de 250ms; `conhecimento/interface.md › Duração padrão das transições do Tailwind` registra a armadilha.
