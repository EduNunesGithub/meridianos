import { useSyncExternalStore } from "react";

import { darkSchemeQuery } from "@/lib/theme";

export function usePrefersDarkScheme() {
  return useSyncExternalStore(
    subscribeToDarkScheme,
    getPrefersDarkScheme,
    getServerPrefersDarkScheme,
  );
}

function getPrefersDarkScheme() {
  return window.matchMedia(darkSchemeQuery).matches;
}

function getServerPrefersDarkScheme() {
  return false;
}

function subscribeToDarkScheme(onChange: () => void) {
  const darkScheme = window.matchMedia(darkSchemeQuery);
  darkScheme.addEventListener("change", onChange);

  return () => darkScheme.removeEventListener("change", onChange);
}
