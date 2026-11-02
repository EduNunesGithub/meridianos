import { twMerge } from "tailwind-merge";

import type { Region } from "@/data/regions";

type RegionDotProps = {
  className?: string;
  region: Region;
};

export function RegionDot({ className, region }: RegionDotProps) {
  return (
    <span
      aria-hidden
      className={twMerge(
        "size-2 shrink-0 rounded-full",
        region === "africa" && "bg-region-africa",
        region === "americas" && "bg-region-americas",
        region === "asia" && "bg-region-asia",
        region === "europe" && "bg-region-europe",
        region === "oceania" && "bg-region-oceania",
        className,
      )}
    />
  );
}
