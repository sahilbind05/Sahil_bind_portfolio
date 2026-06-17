"use client";

import * as React from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

/**
 * Counts from 0 → `target` once the element scrolls into view.
 * Returns the live integer value plus the ref to attach.
 */
export function useCountUp(target: number, duration = 1.6) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, target, duration, motionValue]);

  return { ref, value: display };
}
