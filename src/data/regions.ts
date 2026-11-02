export type Region = (typeof regions)[number]["id"];

export type RegionFilter = "all" | Region;

export function getRegionLabel(region: Region) {
  return regions.find(({ id }) => id === region)?.label ?? "";
}

export const regions = [
  { count: 59, id: "africa", label: "África" },
  { count: 56, id: "americas", label: "Américas" },
  { count: 50, id: "asia", label: "Ásia" },
  { count: 53, id: "europe", label: "Europa" },
  { count: 27, id: "oceania", label: "Oceania" },
] as const;

export const totalCountries = 250;
