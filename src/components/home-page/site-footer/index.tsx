export function SiteFooter() {
  return (
    <footer className="hidden bg-mat md:block">
      <div className="mx-auto flex w-full max-w-360 flex-col gap-8 px-10 pt-12 pb-8 xl:px-20">
        <div className="flex items-end justify-between gap-8">
          <span className="type-footer-wordmark text-ink">Meridiano</span>
          <p className="max-w-90 type-body">
            Um atlas de bolso para curiosos. Dados do REST Countries, bandeiras
            em domínio público e muita vontade de conhecer o mundo.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-line pt-4 text-ink-3">
          <span className="type-label">© 2026 Meridiano</span>
          <span className="type-label">Dados · restcountries.com</span>
          <span className="type-label">Atualizado em 01.11.2026</span>
          <span className="type-label">↑ Voltar ao topo</span>
        </div>
      </div>
    </footer>
  );
}
