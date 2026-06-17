"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeWindow } from "@/components/code-window";
import { LeetCode } from "@/components/icons/leetcode";
import { AIOrb } from "@/components/ai-orb";
import { ParticleNetwork } from "@/components/particle-network";
import { siteConfig } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  // Cursor parallax — normalized [-0.5, 0.5] pointer offset, spring-smoothed.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 120, damping: 20, mass: 0.4 });

  // Visual layers move by different amounts for a sense of depth.
  const cardX = useTransform(sx, (v) => v * 26);
  const cardY = useTransform(sy, (v) => v * 26);
  const orbX = useTransform(sx, (v) => v * -48);
  const orbY = useTransform(sy, (v) => v * -48);

  function handlePointer(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function resetPointer() {
    px.set(0);
    py.set(0);
  }

  return (
    <section
      id="hero"
      onMouseMove={handlePointer}
      onMouseLeave={resetPointer}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-20"
    >
      {/* Animated particle network (desktop + reduced-motion aware) */}
      <ParticleNetwork />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <Badge variant="default" className="gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground"
          >
            <span className="font-medium text-foreground">
              {siteConfig.tagline}
            </span>{" "}
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={siteConfig.resumeUrl} download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Find me on</span>
            <div className="h-px w-8 bg-border" />
            <div className="flex items-center gap-2">
              {[
                { href: siteConfig.social.github, label: "GitHub", Icon: Github },
                {
                  href: siteConfig.social.linkedin,
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                {
                  href: siteConfig.social.leetcode,
                  label: "LeetCode",
                  Icon: LeetCode,
                },
                {
                  href: `mailto:${siteConfig.email}`,
                  label: "Email",
                  Icon: Mail,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* AI orb — top-right focal element, parallaxing opposite the cursor (z-1) */}
          <motion.div
            style={{ x: orbX, y: orbY }}
            className="pointer-events-none absolute inset-0 z-[1]"
          >
            <AIOrb />
          </motion.div>

          {/* Code card leans gently toward the cursor (z-10; chips inside are z-20) */}
          <motion.div style={{ x: cardX, y: cardY }} className="relative z-10">
            <CodeWindow />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
