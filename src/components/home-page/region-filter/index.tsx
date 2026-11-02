import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { twMerge } from "tailwind-merge";

import type { RegionFilter as RegionFilterValue } from "@/data/regions";

import { RegionDot } from "@/components/region-dot";
import { regions, totalCountries } from "@/data/regions";

type RegionFilterProps = {
  className?: string;
  onChange: (value: RegionFilterValue) => void;
  value: RegionFilterValue;
};

const options = [
  { count: totalCountries, id: "all", label: "Todas" },
  ...regions,
] as const;

export function RegionFilter({
  className,
  onChange,
  value,
}: RegionFilterProps) {
  function handleValueChange(nextValue: RegionFilterValue[]) {
    const [selected] = nextValue;
    if (selected) {
      onChange(selected);
    }
  }

  return (
    <ToggleGroup
      aria-label="Filtrar por região"
      className={twMerge("flex items-center gap-2", className)}
      onValueChange={handleValueChange}
      value={[value]}
    >
      {options.map((option) => (
        <Toggle
          className="group flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-line px-4 type-control text-ink transition-colors duration-250 hover:border-line-strong data-pressed:border-chip-active data-pressed:bg-chip-active data-pressed:text-chip-active-ink"
          key={option.id}
          value={option.id}
        >
          {option.id !== "all" && <RegionDot region={option.id} />}
          {option.label}
          <span className="type-count text-ink-3 group-data-pressed:text-chip-active-ink/60">
            {option.count}
          </span>
        </Toggle>
      ))}
    </ToggleGroup>
  );
}
