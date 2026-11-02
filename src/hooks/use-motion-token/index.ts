import { useReducedMotionConfig } from "motion/react";

import type { MotionToken } from "@/lib/motion";

export function useMotionToken<Value>(token: MotionToken<Value>) {
  const shouldReduceMotion = useReducedMotionConfig();

  return shouldReduceMotion ? token.reduced : token.full;
}
