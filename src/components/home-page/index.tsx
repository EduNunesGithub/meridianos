import { useState } from "react";

import type { RegionFilter } from "@/data/regions";

import { CountryIndex } from "@/components/home-page/country-index";
import { CountryList } from "@/components/home-page/country-list";
import { FilterBar } from "@/components/home-page/filter-bar";
import { Hero } from "@/components/home-page/hero";
import { Masthead } from "@/components/home-page/masthead";
import { MobileHeader } from "@/components/home-page/mobile-header";
import { MobileHero } from "@/components/home-page/mobile-hero";
import { PageTurn } from "@/components/home-page/page-turn";
import { SearchDock } from "@/components/home-page/search-dock";
import { SiteFooter } from "@/components/home-page/site-footer";
import { countries } from "@/data/countries";

export function HomePage() {
  const [region, setRegion] = useState<RegionFilter>("all");
  const visibleCountries =
    region === "all"
      ? countries
      : countries.filter((country) => country.region === region);

  return (
    <>
      <Masthead />
      <MobileHeader />
      <main className="flex flex-col gap-6 pt-6 md:gap-0 md:pt-0">
        <Hero />
        <MobileHero />
        <FilterBar
          onRegionChange={setRegion}
          region={region}
          visibleCount={visibleCountries.length}
        />
        <CountryIndex countries={visibleCountries} />
        <CountryList
          countries={visibleCountries}
          onRegionChange={setRegion}
          region={region}
        />
        <PageTurn />
      </main>
      <SiteFooter />
      <SearchDock />
    </>
  );
}
