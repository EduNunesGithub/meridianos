import { Button } from "@base-ui/react/button";
import { ArrowDown } from "lucide-react";

export function PageTurn() {
  return (
    <div className="flex flex-col items-center gap-3 px-5 pt-6 pb-24 md:pt-12 md:pb-16">
      <Button className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-line-strong px-5 type-control font-semibold text-ink transition-colors duration-250 hover:bg-ink hover:text-page md:w-auto">
        Virar a página
        <ArrowDown aria-hidden className="size-4" />
      </Button>
      <span className="hidden type-label text-ink-3 md:block">
        Mais 12 países · Página 1 de 21
      </span>
    </div>
  );
}
