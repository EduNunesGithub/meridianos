import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";

import { useMotionToken } from "@/hooks/use-motion-token";
import { gestureFeedback } from "@/lib/motion";

export function SearchDock() {
  const buttonFeedback = useMotionToken(gestureFeedback.button);

  return (
    <div className="fixed inset-x-0 bottom-0 flex items-center gap-2 px-4 pb-3 md:hidden">
      <label className="flex h-10 flex-1 items-center gap-3 rounded-full border border-line bg-surface/90 pr-3 pl-4 shadow-dock backdrop-blur-md focus-within:ring-2 focus-within:ring-accent">
        <Search aria-hidden className="size-4 shrink-0 text-ink" />
        <Input
          aria-label="Procure um país"
          className="min-w-0 flex-1 bg-transparent type-placeholder text-ink outline-none placeholder:text-ink-3"
          placeholder="Procure um país…"
          type="search"
        />
      </label>
      <Button
        aria-label="Filtros"
        className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-chip-active text-chip-active-ink shadow-dock"
        render={<motion.button {...buttonFeedback} />}
      >
        <SlidersHorizontal aria-hidden className="size-4" />
      </Button>
    </div>
  );
}
