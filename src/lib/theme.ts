import { createClientOnlyFn, createIsomorphicFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";

export type ThemePreference = (typeof themePreferences)[number];

type ResolvedTheme = "dark" | "light";

export const darkClassName = "dark";

export const darkSchemeQuery = "(prefers-color-scheme: dark)";

export const getThemePreference = createIsomorphicFn()
  .server(() => parseThemePreference(getCookie(themeCookieName)))
  .client(() => parseThemePreference(readDocumentCookie(themeCookieName)));

export const saveThemePreference = createClientOnlyFn(
  (preference: ThemePreference) => {
    document.cookie = `${themeCookieName}=${preference}; Max-Age=${themeCookieMaxAge}; Path=/; SameSite=Lax`;
  },
);

export const systemThemeScript = `(${applySystemTheme.toString()})(${JSON.stringify(darkClassName)}, ${JSON.stringify(darkSchemeQuery)})`;

const themeCookieMaxAge = 60 * 60 * 24 * 365;

const themeCookieName = "meridiano-theme";

const themePreferences = ["light", "dark", "system"] as const;

export function resolveTheme(
  preference: ThemePreference,
  prefersDarkScheme: boolean,
): ResolvedTheme {
  if (preference !== "system") {
    return preference;
  }

  return prefersDarkScheme ? "dark" : "light";
}

function applySystemTheme(className: string, query: string) {
  document.documentElement.classList.toggle(
    className,
    window.matchMedia(query).matches,
  );
}

function parseThemePreference(value: string | undefined): ThemePreference {
  return (
    themePreferences.find((preference) => preference === value) ?? "system"
  );
}

function readDocumentCookie(name: string) {
  const prefix = `${name}=`;

  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(prefix))
    ?.slice(prefix.length);
}
