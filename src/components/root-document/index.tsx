import type { ReactNode } from "react";

import { HeadContent, ScriptOnce, Scripts } from "@tanstack/react-router";

import { themeScript } from "@/lib/theme";

type RootDocumentProps = {
  children: ReactNode;
};

export function RootDocument({ children }: RootDocumentProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ScriptOnce>{themeScript}</ScriptOnce>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
