import type { ReactNode } from "react";

import { HeadContent, Scripts } from "@tanstack/react-router";

type RootDocumentProps = {
  children: ReactNode;
};

export function RootDocument({ children }: RootDocumentProps) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
