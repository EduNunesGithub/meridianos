import { ChevronRight } from "lucide-react";

import { featuredCountry, getFlagSource } from "@/data/countries";

export function MobileHero() {
  return (
    <section className="flex flex-col gap-6 px-5 md:hidden">
      <div className="flex flex-col gap-3">
        <span className="type-label text-accent">Nº 01 · Novembro de 2026</span>
        <h1 className="type-headline text-ink">
          O mundo, uma <em className="text-accent">bandeira</em> de cada vez.
        </h1>
      </div>
      <div className="flex items-center gap-4 rounded-sm bg-mat mat-glow p-3 pr-4">
        <div className="flex h-18 w-16 shrink-0 items-center justify-center">
          <img
            alt=""
            className="h-14 w-auto"
            src={getFlagSource(featuredCountry.flagCode)}
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <span className="type-label text-accent">✦ Bandeira do dia</span>
          <h2 className="type-display-md text-ink">{featuredCountry.name}</h2>
          <p className="type-caption">{featuredCountry.shortDescription}</p>
        </div>
        <ChevronRight aria-hidden className="size-4 shrink-0 text-ink-3" />
      </div>
    </section>
  );
}
