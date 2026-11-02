import type { Country } from "@/data/countries";

import { CountryCard } from "@/components/home-page/country-index/country-grid/country-card";

type CountryGridProps = {
  countries: Country[];
};

export function CountryGrid({ countries }: CountryGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <li key={country.isoCode}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
}
