import { Button } from "@base-ui/react/button";
import { ArrowDownUp } from "lucide-react";

import type { Country } from "@/data/countries";
import type { RegionFilter as RegionFilterValue } from "@/data/regions";

import { CountryRow } from "@/components/home-page/country-list/country-row";
import { RegionFilter } from "@/components/home-page/region-filter";
import { totalCountries } from "@/data/regions";

type CountryListProps = {
  countries: Country[];
  onRegionChange: (value: RegionFilterValue) => void;
  region: RegionFilterValue;
};

export function CountryList({
  countries,
  onRegionChange,
  region,
}: CountryListProps) {
  return (
    <section className="flex flex-col gap-6 md:hidden">
      <div className="flex flex-col gap-3">
        <span className="px-5 type-label text-ink-3">Regiões</span>
        <RegionFilter
          className="scrollbar-none overflow-x-auto px-5"
          onChange={onRegionChange}
          value={region}
        />
      </div>
      <div className="flex flex-col gap-6 px-5">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span aria-live="polite" className="type-label text-ink-3">
              {countries.length} de {totalCountries} · Curadoria
            </span>
            <h2 className="type-display-lg text-ink">Índice de países</h2>
          </div>
          <Button
            aria-label="Ordenar"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-line text-ink"
          >
            <ArrowDownUp aria-hidden className="size-4" />
          </Button>
        </div>
        <ul className="flex flex-col border-t border-line">
          {countries.map((country) => (
            <li className="border-b border-line" key={country.isoCode}>
              <CountryRow country={country} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
