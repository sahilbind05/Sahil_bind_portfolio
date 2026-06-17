/**
 * Subtle floating gradient orbs + dotted grid backdrop fixed behind all content.
 * Pure CSS animation (no JS) so it stays cheap and respects reduced-motion.
 * Green is kept low and balanced against cyan to avoid an overpowering glow.
 */
export function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dotted grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Top vignette / base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Floating blurred orbs — restrained opacity, emerald balanced with cyan */}
      <div className="absolute -left-32 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[140px] animate-float" />
      <div
        className="absolute right-[-12%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[140px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[28%] h-[30rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[140px] animate-float"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
