import { createRouter } from "@tanstack/react-router";

import { ErrorPage } from "@/components/error-page";
import { NotFoundPage } from "@/components/not-found-page";
import { routeTree } from "@/routeTree.gen";

export function getRouter() {
  const router = createRouter({
    defaultErrorComponent: ErrorPage,
    defaultNotFoundComponent: NotFoundPage,
    routeTree,
    scrollRestoration: true,
  });

  return router;
}
