import { ArrowRight } from "lucide-react";

import { featuredCountry, getFlagSource } from "@/data/countries";

export function FlagOfTheDay() {
  return (
    <aside className="flex w-full flex-col gap-3 lg:w-90 lg:shrink-0">
      <div className="flex items-center justify-between">
        <span className="type-label text-accent">✦ Bandeira do dia</span>
        <span className="type-label text-ink-3">{featuredCountry.date}</span>
      </div>
      <div className="flex h-85 flex-col justify-between bg-mat mat-glow px-4 py-3 text-ink-3">
        <div className="flex items-start justify-between">
          <span className="type-label">{featuredCountry.isoCode}</span>
          <span className="type-label">{featuredCountry.shape}</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            alt=""
            className="h-52 w-auto"
            src={getFlagSource(featuredCountry.flagCode)}
          />
        </div>
        <div className="flex items-start justify-between">
          <span className="type-label">{featuredCountry.proportion}</span>
          <span className="type-coordinates">
            {featuredCountry.coordinates}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-3">
          <h2 className="type-display-lg text-ink">{featuredCountry.name}</h2>
          <span className="type-body text-ink-3" lang="ne">
            {featuredCountry.nativeName}
          </span>
        </div>
        <p className="type-body">{featuredCountry.description}</p>
        <span className="flex items-center gap-2 type-control font-semibold text-accent">
          Abrir a ficha do {featuredCountry.name}
          <ArrowRight aria-hidden className="size-4" />
        </span>
      </div>
    </aside>
  );
}
