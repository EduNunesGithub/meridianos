import type { Region } from "@/data/regions";

export type Country = {
  capital: string;
  coordinates: string;
  flagCode: string;
  isoCode: string;
  name: string;
  population: number;
  proportion: string;
  region: Region;
  subregion: string;
};

export const countries: Country[] = [
  {
    capital: "Brasília",
    coordinates: "15°47′S 47°52′O",
    flagCode: "br",
    isoCode: "BRA",
    name: "Brasil",
    population: 212_559_409,
    proportion: "7:10",
    region: "americas",
    subregion: "América do Sul",
  },
  {
    capital: "Tóquio",
    coordinates: "35°41′N 139°41′L",
    flagCode: "jp",
    isoCode: "JPN",
    name: "Japão",
    population: 125_836_021,
    proportion: "2:3",
    region: "asia",
    subregion: "Ásia Oriental",
  },
  {
    capital: "Reykjavík",
    coordinates: "64°08′N 21°56′O",
    flagCode: "is",
    isoCode: "ISL",
    name: "Islândia",
    population: 366_425,
    proportion: "18:25",
    region: "europe",
    subregion: "Europa Setentrional",
  },
  {
    capital: "Rabat",
    coordinates: "34°01′N 6°50′O",
    flagCode: "ma",
    isoCode: "MAR",
    name: "Marrocos",
    population: 36_910_558,
    proportion: "2:3",
    region: "africa",
    subregion: "África do Norte",
  },
  {
    capital: "Wellington",
    coordinates: "41°17′S 174°46′L",
    flagCode: "nz",
    isoCode: "NZL",
    name: "Nova Zelândia",
    population: 5_084_300,
    proportion: "1:2",
    region: "oceania",
    subregion: "Australásia",
  },
  {
    capital: "Lima",
    coordinates: "12°03′S 77°03′O",
    flagCode: "pe",
    isoCode: "PER",
    name: "Peru",
    population: 32_971_846,
    proportion: "2:3",
    region: "americas",
    subregion: "América do Sul",
  },
  {
    capital: "Thimphu",
    coordinates: "27°28′N 89°38′L",
    flagCode: "bt",
    isoCode: "BTN",
    name: "Butão",
    population: 771_612,
    proportion: "2:3",
    region: "asia",
    subregion: "Ásia Meridional",
  },
  {
    capital: "Nairóbi",
    coordinates: "1°17′S 36°49′L",
    flagCode: "ke",
    isoCode: "KEN",
    name: "Quênia",
    population: 53_771_300,
    proportion: "2:3",
    region: "africa",
    subregion: "África Oriental",
  },
  {
    capital: "Lisboa",
    coordinates: "38°43′N 9°08′O",
    flagCode: "pt",
    isoCode: "PRT",
    name: "Portugal",
    population: 10_305_564,
    proportion: "2:3",
    region: "europe",
    subregion: "Europa Meridional",
  },
  {
    capital: "Cidade do México",
    coordinates: "19°26′N 99°08′O",
    flagCode: "mx",
    isoCode: "MEX",
    name: "México",
    population: 128_932_753,
    proportion: "4:7",
    region: "americas",
    subregion: "América do Norte",
  },
  {
    capital: "Tarawa do Sul",
    coordinates: "1°28′N 173°02′L",
    flagCode: "ki",
    isoCode: "KIR",
    name: "Quiribati",
    population: 119_446,
    proportion: "1:2",
    region: "oceania",
    subregion: "Micronésia",
  },
  {
    capital: "Victoria",
    coordinates: "4°37′S 55°27′L",
    flagCode: "sc",
    isoCode: "SYC",
    name: "Seychelles",
    population: 98_462,
    proportion: "1:2",
    region: "africa",
    subregion: "África Oriental",
  },
];

export const featuredCountry = {
  coordinates: "27°42′N 85°19′L",
  date: "01 · 11 · 2026",
  description:
    "A única bandeira nacional que não é um retângulo. Os dois triângulos sobrepostos evocam os picos do Himalaia — e a lua e o sol, o desejo de que o país dure tanto quanto eles.",
  flagCode: "np",
  isoCode: "NPL",
  name: "Nepal",
  nativeName: "नेपाल",
  proportion: "≈ 1 : 1,22",
  shape: "Duas flâmulas",
  shortDescription: "A única bandeira nacional que não é retangular.",
};

export function getFlagSource(flagCode: string) {
  return `/flags/${flagCode}.png`;
}
