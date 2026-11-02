import { ChevronRight } from "lucide-react";

import type { Country } from "@/data/countries";

import { RegionDot } from "@/components/region-dot";
import { getFlagSource } from "@/data/countries";
import { getRegionLabel } from "@/data/regions";
import { formatPopulationShort } from "@/lib/format-population";

type CountryRowProps = {
  country: Country;
};

export function CountryRow({ country }: CountryRowProps) {
  return (
    <article className="flex items-center gap-4 py-3">
      <div className="flex h-18 w-24 shrink-0 items-center justify-center bg-mat mat-glow">
        <img
          alt=""
          className="h-10 w-auto max-w-20 border border-flag-stroke object-contain shadow-flag-sm"
          src={getFlagSource(country.flagCode)}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="flex items-center gap-2 type-label text-ink-3">
          <RegionDot region={country.region} />
          {getRegionLabel(country.region)} · {country.isoCode}
        </span>
        <h3 className="type-display-md text-ink">{country.name}</h3>
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate type-control text-ink-2">
            {country.capital}
          </span>
          <span aria-hidden className="size-1 shrink-0 rounded-full bg-ink-3" />
          <span className="shrink-0 type-count whitespace-nowrap text-ink-3">
            {formatPopulationShort(country.population)}
          </span>
        </span>
      </div>
      <ChevronRight aria-hidden className="size-4 shrink-0 text-ink-3" />
    </article>
  );
}
