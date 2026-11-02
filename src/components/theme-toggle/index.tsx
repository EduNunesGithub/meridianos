import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";

import type { Theme } from "@/lib/theme";

import { useTheme } from "@/hooks/use-theme";

type ThemeToggleProps = {
  compact?: boolean;
};

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  function handleValueChange(value: Theme[]) {
    const [nextTheme] = value;
    if (nextTheme) {
      setTheme(nextTheme);
    }
  }

  return (
    <ToggleGroup
      aria-label="Tema"
      className="flex h-10 items-center gap-1 rounded-full border border-line bg-surface p-1"
      onValueChange={handleValueChange}
      value={[theme]}
    >
      <Toggle
        aria-label="Dia"
        className={twMerge(
          "flex h-full cursor-pointer items-center justify-center gap-2 rounded-full bg-chip-active px-3 type-control text-chip-active-ink transition-colors duration-250 dark:bg-transparent dark:text-ink-3 dark:hover:text-ink",
          compact && "aspect-square px-0",
        )}
        value="light"
      >
        <Sun aria-hidden className="size-4" />
        {!compact && "Dia"}
      </Toggle>
      <Toggle
        aria-label="Noite"
        className={twMerge(
          "flex h-full cursor-pointer items-center justify-center gap-2 rounded-full px-3 type-control text-ink-3 transition-colors duration-250 hover:text-ink dark:bg-chip-active dark:text-chip-active-ink dark:hover:text-chip-active-ink",
          compact && "aspect-square px-0",
        )}
        value="dark"
      >
        <Moon aria-hidden className="size-4" />
        {!compact && "Noite"}
      </Toggle>
    </ToggleGroup>
  );
}
