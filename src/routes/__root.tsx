import { createRootRoute } from "@tanstack/react-router";

import { RootDocument } from "@/components/root-document";
import { getThemePreference } from "@/lib/theme";
import appCss from "@/styles/app.css?url";

const fontsHref =
  "https://fonts.googleapis.com/css2?family=DM+Mono&family=Instrument+Sans:wght@400..700&family=Instrument+Serif:ital@0;1&display=swap";

export const Route = createRootRoute({
  beforeLoad: () => ({ themePreference: getThemePreference() }),
  head: () => ({
    links: [
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      {
        crossOrigin: "anonymous",
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
      },
      { href: fontsHref, rel: "stylesheet" },
      { href: appCss, rel: "stylesheet" },
    ],
    meta: [
      { charSet: "utf-8" },
      { content: "width=device-width, initial-scale=1", name: "viewport" },
      { title: "Meridiano — Atlas de bandeiras & lugares" },
      {
        content:
          "Folheie 250 países e territórios como quem folheia uma revista de viagem: bandeiras, capitais, línguas, moedas e fronteiras.",
        name: "description",
      },
    ],
  }),
  shellComponent: RootDocument,
});
