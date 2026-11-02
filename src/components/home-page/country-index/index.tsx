import type { Country } from "@/data/countries";

import { Almanac } from "@/components/home-page/country-index/almanac";
import { CountryGrid } from "@/components/home-page/country-index/country-grid";

type CountryIndexProps = {
  countries: Country[];
};

const leadingCount = 8;

export function CountryIndex({ countries }: CountryIndexProps) {
  const leadingCountries = countries.slice(0, leadingCount);
  const trailingCountries = countries.slice(leadingCount);

  return (
    <section className="mx-auto hidden w-full max-w-360 flex-col gap-8 px-10 md:flex xl:px-20">
      <div className="flex flex-col justify-between gap-4 pt-12 lg:flex-row lg:items-end">
        <div className="flex flex-col gap-2">
          <span className="type-label text-accent">Capítulo I</span>
          <h2 className="type-heading text-ink">Índice de países</h2>
        </div>
        <p className="max-w-90 type-body">
          Uma seleção desta edição — de arquipélagos no Pacífico a reinos no
          Himalaia. Toque numa bandeira para abrir a ficha completa.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <CountryGrid countries={leadingCountries} />
        <Almanac />
        {trailingCountries.length > 0 && (
          <CountryGrid countries={trailingCountries} />
        )}
      </div>
    </section>
  );
}
