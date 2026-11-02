import {
  rootRouteId,
  useRouteContext,
  useRouter,
} from "@tanstack/react-router";

import type { ThemePreference } from "@/lib/theme";

import { usePrefersDarkScheme } from "@/hooks/use-prefers-dark-scheme";
import { resolveTheme, saveThemePreference } from "@/lib/theme";

export function useTheme() {
  const router = useRouter();
  const { themePreference } = useRouteContext({ from: rootRouteId });
  const prefersDarkScheme = usePrefersDarkScheme();

  function setThemePreference(preference: ThemePreference) {
    saveThemePreference(preference);
    return router.invalidate({
      filter: (match) => match.routeId === rootRouteId,
    });
  }

  return {
    resolvedTheme: resolveTheme(themePreference, prefersDarkScheme),
    setThemePreference,
    themePreference,
  };
}
