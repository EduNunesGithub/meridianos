import { Button } from "@base-ui/react/button";
import { ArrowDownUp, ChevronDown } from "lucide-react";

import type { RegionFilter as RegionFilterValue } from "@/data/regions";

import { RegionFilter } from "@/components/home-page/region-filter";
import { totalCountries } from "@/data/regions";

type FilterBarProps = {
  onRegionChange: (value: RegionFilterValue) => void;
  region: RegionFilterValue;
  visibleCount: number;
};

export function FilterBar({
  onRegionChange,
  region,
  visibleCount,
}: FilterBarProps) {
  return (
    <div className="mx-auto hidden w-full max-w-360 px-10 md:block xl:px-20">
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-line-strong py-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="type-label text-ink-3">Regiões</span>
          <RegionFilter
            className="flex-wrap"
            onChange={onRegionChange}
            value={region}
          />
        </div>
        <div className="flex items-center gap-5">
          <span aria-live="polite" className="type-label text-ink-3">
            Mostrando {visibleCount} de {totalCountries}
          </span>
          <Button className="flex h-10 cursor-pointer items-center gap-2 rounded-full border border-line px-4 type-control text-ink transition-colors duration-250 hover:border-line-strong">
            <ArrowDownUp aria-hidden className="size-4" />
            Curadoria da edição
            <ChevronDown aria-hidden className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
