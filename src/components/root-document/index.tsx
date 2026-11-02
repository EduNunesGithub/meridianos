import type { ReactNode } from "react";

import { HeadContent, ScriptOnce, Scripts } from "@tanstack/react-router";

import { useTheme } from "@/hooks/use-theme";
import { darkClassName, systemThemeScript } from "@/lib/theme";

type RootDocumentProps = {
  children: ReactNode;
};

export function RootDocument({ children }: RootDocumentProps) {
  const { resolvedTheme, themePreference } = useTheme();

  return (
    <html
      className={resolvedTheme === "dark" ? darkClassName : undefined}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        {themePreference === "system" && (
          <ScriptOnce>{systemThemeScript}</ScriptOnce>
        )}
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
