import { Input } from "@base-ui/react/input";
import { Search } from "lucide-react";

import { FlagOfTheDay } from "@/components/home-page/hero/flag-of-the-day";

const suggestions = ["Islândia", "Butão", "Quiribati", "Peru"];

export function Hero() {
  return (
    <section className="mx-auto hidden w-full max-w-360 flex-col gap-12 px-10 pt-12 pb-14 md:flex lg:flex-row lg:items-end lg:gap-16 xl:px-20">
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-accent" />
          <span className="type-label text-accent">
            Índice geral — folheie o mundo
          </span>
        </div>
        <h1 className="type-headline text-ink">
          O mundo,
          <br />
          uma <em className="text-accent">bandeira</em>
          <br />
          de cada vez.
        </h1>
        <p className="max-w-md type-intro">
          Folheie 250 países e territórios como quem folheia uma revista de
          viagem: bandeiras, capitais, línguas, moedas e as fronteiras que os
          unem.
        </p>
        <div className="flex flex-col gap-3">
          <label className="flex h-10 items-center gap-3 rounded border border-line-strong bg-surface pr-2 pl-4 text-ink-3 focus-within:ring-2 focus-within:ring-accent">
            <Search aria-hidden className="size-4 shrink-0 text-ink" />
            <Input
              aria-label="Procure um país pelo nome"
              className="min-w-0 flex-1 bg-transparent type-placeholder text-ink outline-none placeholder:text-ink-3"
              placeholder="Procure um país pelo nome…"
              type="search"
            />
            <span className="type-label">Atalho</span>
            <kbd className="flex size-6 items-center justify-center rounded border border-line bg-page type-count text-ink-2">
              /
            </kbd>
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <span className="type-label text-ink-3">Experimente</span>
            {suggestions.map((suggestion) => (
              <span className="type-suggestion text-ink-2" key={suggestion}>
                {suggestion}
              </span>
            ))}
          </div>
        </div>
      </div>
      <FlagOfTheDay />
    </section>
  );
}
