import { createRootRoute } from "@tanstack/react-router";

import { RootDocument } from "@/components/root-document";
import appCss from "@/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    links: [{ href: appCss, rel: "stylesheet" }],
    meta: [
      { charSet: "utf-8" },
      { content: "width=device-width, initial-scale=1", name: "viewport" },
      { title: "Meridianos" },
    ],
  }),
  shellComponent: RootDocument,
});
