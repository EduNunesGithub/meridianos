const fullFormatter = new Intl.NumberFormat("pt-BR");

const millionsFormatter = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 1,
  minimumFractionDigits: 1,
});

const thousandsFormatter = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 0,
});

export function formatPopulation(population: number) {
  return fullFormatter.format(population);
}

export function formatPopulationShort(population: number) {
  if (population >= 1_000_000) {
    return `${millionsFormatter.format(population / 1_000_000)} mi hab.`;
  }

  return `${thousandsFormatter.format(population / 1_000)} mil hab.`;
}
