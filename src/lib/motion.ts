import type {
  MotionConfigProps,
  MotionProps,
  Transition,
  Variants,
} from "motion/react";

export type MotionToken<Value> = {
  full: Value;
  reduced: Value;
};

type GestureFeedback = Pick<
  MotionProps,
  "transition" | "whileHover" | "whileTap"
>;

const offsets = {
  lift: -4,
  reveal: 16,
};

const restingState = { opacity: 1, scale: 1, y: 0 };

const scales = {
  presence: 0.96,
  press: 0.96,
};

const standardTransition = {
  duration: 0.25,
  ease: "easeOut",
} satisfies Transition;

export const transitions = {
  indicator: { bounce: 0.2, type: "spring", visualDuration: 0.25 },
  presence: {
    ...standardTransition,
    layout: { bounce: 0, type: "spring", visualDuration: 0.5 },
  },
  press: { bounce: 0, type: "spring", visualDuration: 0.25 },
  reveal: { duration: 0.5, ease: "easeOut" },
  standard: standardTransition,
} satisfies Record<string, Transition>;

export const gestureFeedback = {
  button: {
    full: { transition: transitions.press, whileTap: { scale: scales.press } },
    reduced: {},
  },
  card: {
    full: {
      transition: transitions.press,
      whileHover: { y: offsets.lift },
    },
    reduced: {},
  },
} satisfies Record<string, MotionToken<GestureFeedback>>;

export const motionConfig = {
  reducedMotion: "user",
  transition: transitions.standard,
} satisfies MotionConfigProps;

export const presenceVariants = {
  full: {
    hidden: { opacity: 0, scale: scales.presence },
    visible: restingState,
  },
  reduced: { hidden: { opacity: 0 }, visible: restingState },
} satisfies MotionToken<Variants>;

export const revealVariants = {
  full: { hidden: { opacity: 0, y: offsets.reveal }, visible: restingState },
  reduced: { hidden: { opacity: 0 }, visible: restingState },
} satisfies MotionToken<Variants>;

export const revealViewport = { once: true } satisfies MotionProps["viewport"];
