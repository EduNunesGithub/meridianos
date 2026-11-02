import type { MotionProps } from "motion/react";

import { useHydrated } from "@tanstack/react-router";

import { useMotionToken } from "@/hooks/use-motion-token";
import { revealVariants, revealViewport, transitions } from "@/lib/motion";

export function useRevealOnEnter() {
  const isHydrated = useHydrated();
  const variants = useMotionToken(revealVariants);

  return {
    initial: isHydrated ? "hidden" : false,
    transition: transitions.reveal,
    variants,
    viewport: revealViewport,
    whileInView: "visible",
  } satisfies MotionProps;
}
