"use client";

import { motion } from "framer-motion";

/**
 * Coding-themed hero illustration: a faux editor window with syntax-highlighted
 * code plus floating glassmorphism tech chips. Built in JSX so it stays crisp
 * on every screen. Enhanced with a reflection sheen, layered premium shadows,
 * and a faint cyan border glow.
 */
export function CodeWindow() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Soft ambient glow behind the window — balanced emerald + cyan, low opacity */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/15 to-accent/20 opacity-50 blur-2xl" />

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50 backdrop-blur-xl transition-colors duration-500 hover:border-accent/30">
        {/* Faint cyan border glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_0_1px_rgba(6,182,212,0.25),0_0_30px_rgba(6,182,212,0.12)] transition-opacity duration-500 group-hover:opacity-100" />

        {/* Reflection sheen sweeping across the glass */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Title bar */}
        <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            developer.ts
          </span>
        </div>

        {/* Code body */}
        <pre className="relative overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            <Line>
              <K>const</K> <V>developer</V> <P>=</P> {"{"}
            </Line>
            <Line indent={1}>
              <Prop>name</Prop>: <S>&apos;Sahil Bind&apos;</S>,
            </Line>
            <Line indent={1}>
              <Prop>role</Prop>: <S>&apos;React + AI Developer&apos;</S>,
            </Line>
            <Line indent={1}>
              <Prop>stack</Prop>: [<S>&apos;React&apos;</S>,{" "}
              <S>&apos;Firebase&apos;</S>, <S>&apos;Gemini&apos;</S>],
            </Line>
            <Line indent={1}>
              <Prop>focus</Prop>: <S>&apos;AI-powered web apps&apos;</S>,
            </Line>
            <Line indent={1}>
              <Fn>ship</Fn>: <K>async</K> () <P>=&gt;</P> {"{"}
            </Line>
            <Line indent={2}>
              <K>return</K> <S>&apos;great products&apos;</S>;
            </Line>
            <Line indent={1}>{"}"},</Line>
            <Line>{"};"}</Line>
          </code>
        </pre>
      </div>

      {/* Floating glass tech chips */}
      <FloatingChip className="-left-7 top-8" delay={0} drift={-6}>
        <Dot className="bg-accent" /> React
      </FloatingChip>
      <FloatingChip className="-right-6 top-20" delay={1.2} drift={6}>
        <Dot className="bg-primary" /> Firebase
      </FloatingChip>
      <FloatingChip className="-right-4 bottom-16" delay={0.8} drift={-5}>
        <Dot className="bg-accent" /> Gemini
      </FloatingChip>
      <FloatingChip className="-bottom-4 left-10" delay={0.4} drift={5}>
        <Dot className="bg-primary" /> Java
      </FloatingChip>
    </div>
  );
}

function Dot({ className }: { className?: string }) {
  return <span className={`h-1.5 w-1.5 rounded-full ${className}`} />;
}

function FloatingChip({
  children,
  className,
  delay,
  drift,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  drift: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, drift, 0], rotate: [0, drift > 0 ? 2 : -2, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -2 }}
      className={`absolute z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 font-mono text-xs text-foreground shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-300 hover:border-accent/40 hover:text-accent sm:flex ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* Tiny syntax-highlight helpers */
const Line = ({
  children,
  indent = 0,
}: {
  children: React.ReactNode;
  indent?: number;
}) => (
  <div style={{ paddingLeft: `${indent * 1.25}rem` }} className="text-slate-300">
    {children}
  </div>
);
const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-accent">{children}</span>
);
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sky-300">{children}</span>
);
const Prop = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-300">{children}</span>
);
const Fn = ({ children }: { children: React.ReactNode }) => (
  <span className="text-yellow-300">{children}</span>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <span className="text-slate-400">{children}</span>
);
