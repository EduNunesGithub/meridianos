import { EditionLabel } from "@/components/edition-label";
import { ThemeToggle } from "@/components/theme-toggle";

export function Masthead() {
  return (
    <header className="hidden border-b border-line md:block">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between gap-6 px-10 py-3 xl:px-20">
        <div className="flex items-center gap-3">
          <span className="type-wordmark text-ink">Meridiano</span>
          <span aria-hidden className="h-5 w-px bg-line" />
          <span className="type-label text-ink-3">
            Atlas de bandeiras
            <br />& lugares
          </span>
        </div>
        <p className="hidden type-label text-ink-2 lg:block">
          Nº 01 · Novembro de 2026 · 250 países e territórios
        </p>
        <div className="flex items-center gap-3">
          <EditionLabel />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
