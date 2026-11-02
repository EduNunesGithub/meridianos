import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Monitor, Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";

import type { ThemePreference } from "@/lib/theme";

import { useTheme } from "@/hooks/use-theme";

type ThemeToggleProps = {
  compact?: boolean;
};

const themeOptions = [
  { icon: Sun, label: "Dia", value: "light" },
  { icon: Moon, label: "Noite", value: "dark" },
  { icon: Monitor, label: "Sistema", value: "system" },
] as const;

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { setThemePreference, themePreference } = useTheme();

  function handleValueChange(value: ThemePreference[]) {
    const [nextPreference] = value;
    if (nextPreference) {
      void setThemePreference(nextPreference);
    }
  }

  return (
    <ToggleGroup
      aria-label="Tema"
      className="flex h-10 items-center gap-1 rounded-full border border-line bg-surface p-1"
      onValueChange={handleValueChange}
      value={[themePreference]}
    >
      {themeOptions.map(({ icon: Icon, label, value }) => (
        <Toggle
          aria-label={label}
          className={twMerge(
            "flex h-full cursor-pointer items-center justify-center gap-2 rounded-full px-3 type-control text-ink-3 transition-colors duration-250 not-data-pressed:hover:text-ink data-pressed:bg-chip-active data-pressed:text-chip-active-ink",
            compact && "aspect-square px-0",
          )}
          key={value}
          value={value}
        >
          <Icon aria-hidden className="size-4" />
          {!compact && label}
        </Toggle>
      ))}
    </ToggleGroup>
  );
}
