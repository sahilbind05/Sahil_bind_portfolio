"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

/** Shared easing + variants so every section animates consistently. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stagger index — adds a small incremental delay. */
  delay?: number;
  as?: "div" | "li" | "span";
}

/**
 * Fade-and-rise wrapper that triggers once when scrolled into view.
 * Respects the user's reduced-motion preference via framer-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...(props as object)}
    >
      {children}
    </motion.div>
  );
}
