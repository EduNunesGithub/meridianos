export type Theme = "dark" | "light";

const darkClassName = "dark";
const darkSchemeQuery = "(prefers-color-scheme: dark)";
const themeStorageKey = "meridiano-theme";

export const themeScript = `(() => {
  const root = document.documentElement;
  try {
    const stored = localStorage.getItem("${themeStorageKey}");
    const isDark = stored ? stored === "dark" : matchMedia("${darkSchemeQuery}").matches;
    root.classList.toggle("${darkClassName}", isDark);
  } catch {
    root.classList.toggle("${darkClassName}", matchMedia("${darkSchemeQuery}").matches);
  }
})();`;

export function getServerTheme(): Theme {
  return "light";
}

export function getTheme(): Theme {
  return document.documentElement.classList.contains(darkClassName)
    ? "dark"
    : "light";
}

export function setTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    return;
  }
}

export function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["class"] });

  const systemScheme = matchMedia(darkSchemeQuery);
  const followSystem = () => {
    if (!readStoredTheme()) {
      applyTheme(systemScheme.matches ? "dark" : "light");
    }
  };
  systemScheme.addEventListener("change", followSystem);

  return () => {
    observer.disconnect();
    systemScheme.removeEventListener("change", followSystem);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle(darkClassName, theme === "dark");
}

function readStoredTheme() {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
}
