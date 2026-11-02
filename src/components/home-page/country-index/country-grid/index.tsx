import type { Country } from "@/data/countries";

import { CountryCard } from "@/components/home-page/country-index/country-grid/country-card";
import { PresenceList } from "@/components/presence-list";
import { PresenceListItem } from "@/components/presence-list/presence-list-item";

type CountryGridProps = {
  countries: Country[];
};

export function CountryGrid({ countries }: CountryGridProps) {
  return (
    <PresenceList className="grid grid-cols-2 gap-x-6 gap-y-10 empty:hidden lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <PresenceListItem key={country.isoCode}>
          <CountryCard country={country} />
        </PresenceListItem>
      ))}
    </PresenceList>
  );
}
