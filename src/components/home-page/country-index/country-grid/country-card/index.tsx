import { ArrowUpRight } from "lucide-react";

import type { Country } from "@/data/countries";

import { RegionDot } from "@/components/region-dot";
import { getFlagSource } from "@/data/countries";
import { getRegionLabel } from "@/data/regions";
import { formatPopulation } from "@/lib/format-population";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="group flex flex-col gap-4">
      <div className="flex h-49 flex-col justify-between bg-mat mat-glow px-4 py-3 text-ink-3 transition-colors duration-250 group-hover:bg-mat-hover group-hover:text-ink-2">
        <div className="flex items-center justify-between">
          <span className="type-label">{country.isoCode}</span>
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-colors duration-250 group-hover:text-accent"
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            alt=""
            className="h-26 w-auto max-w-full border border-flag-stroke object-contain shadow-flag transition-shadow duration-250 group-hover:shadow-flag-lifted"
            src={getFlagSource(country.flagCode)}
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="type-label">{country.proportion}</span>
          <span className="type-coordinates">{country.coordinates}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-2">
          <h3 className="type-display-lg text-ink transition-colors duration-250 group-hover:text-accent group-hover:italic">
            {country.name}
          </h3>
          <span className="text-right type-label text-ink-3">
            {country.subregion}
          </span>
        </div>
        <dl className="flex flex-col">
          <div className="flex items-center justify-between border-t border-line py-2">
            <dt className="type-label text-ink-3">Capital</dt>
            <dd className="type-control text-ink">{country.capital}</dd>
          </div>
          <div className="flex items-center justify-between border-t border-line py-2">
            <dt className="type-label text-ink-3">População</dt>
            <dd className="type-control text-ink">
              {formatPopulation(country.population)}
            </dd>
          </div>
          <div className="flex items-center justify-between border-t border-line py-2">
            <dt className="type-label text-ink-3">Região</dt>
            <dd className="flex items-center gap-2 type-control text-ink">
              <RegionDot region={country.region} />
              {getRegionLabel(country.region)}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
