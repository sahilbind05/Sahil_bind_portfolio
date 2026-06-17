"use client";

import { motion } from "framer-motion";

/**
 * Premium glassmorphism "AI core" orb — the hero's focal background element.
 *
 * A large glowing sphere built from layered radial gradients (emerald + cyan),
 * wrapped by several slow concentric rings and a few orbiting particles. It is
 * positioned to the top-right so only part of it sits behind the code card; the
 * majority stays visible. Glow is kept elegant (not neon) and opacity restrained
 * so hero text and the card remain perfectly readable.
 */
export function AIOrb() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute h-[500px] w-[500px] sm:h-[560px] sm:w-[560px] lg:h-[600px] lg:w-[600px]"
      style={{ right: "-120px", top: "45%", translateY: "-50%" }}
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Wide ambient glow — layered radial gradients for depth */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.20),rgba(6,182,212,0.14)_42%,transparent_68%)] blur-3xl" />
      <div className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.16),transparent_60%)] blur-2xl" />

      {/* Concentric energy rings — different speeds + directions */}
      <Ring inset="2%" duration={48} reverse className="border-primary/10" />
      <Ring inset="11%" duration={34} className="border-accent/15" />
      <Ring
        inset="20%"
        duration={26}
        reverse
        className="border-primary/15 [transform:rotateX(64deg)]"
      />
      <Ring inset="29%" duration={20} className="border-accent/20" />

      {/* Glass sphere with gentle pulse */}
      <motion.div
        className="absolute inset-[30%] rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[inset_0_1px_40px_rgba(255,255,255,0.06),0_0_60px_rgba(34,197,94,0.10)]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Inner neural core — emerald + cyan poles */}
        <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_34%_30%,rgba(34,197,94,0.42),transparent_55%),radial-gradient(circle_at_72%_74%,rgba(6,182,212,0.40),transparent_55%)]" />
        {/* Bright pulsing center */}
        <motion.div
          className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22),rgba(34,197,94,0.18)_45%,transparent_70%)] blur-sm"
          animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.92, 1.08, 0.92] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Glossy reflection highlight */}
        <div className="absolute left-[18%] top-[14%] h-1/4 w-1/4 rounded-full bg-white/20 blur-md" />
      </motion.div>

      {/* Orbiting particles */}
      <Orbit duration={22} className="">
        <Particle className="left-1/2 top-[6%] bg-primary/80 shadow-[0_0_10px_2px_rgba(34,197,94,0.45)]" />
      </Orbit>
      <Orbit duration={16} reverse className="[transform:rotateX(64deg)]">
        <Particle className="bottom-[8%] left-1/2 bg-accent/80 shadow-[0_0_10px_2px_rgba(6,182,212,0.45)]" />
      </Orbit>
      <Orbit duration={30} className="[transform:rotateZ(40deg)]">
        <Particle className="left-[8%] top-1/2 bg-accent/70 shadow-[0_0_8px_2px_rgba(6,182,212,0.4)]" />
      </Orbit>
    </motion.div>
  );
}

function Ring({
  inset,
  duration,
  reverse,
  className,
}: {
  inset: string;
  duration: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ inset }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div className={`h-full w-full rounded-full border ${className ?? ""}`} />
    </motion.div>
  );
}

function Orbit({
  children,
  duration,
  reverse,
  className,
}: {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute inset-[8%] ${className ?? ""}`}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

function Particle({ className }: { className?: string }) {
  return (
    <span
      className={`absolute h-2 w-2 -translate-x-1/2 rounded-full ${className ?? ""}`}
    />
  );
}
