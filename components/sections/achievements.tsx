"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Rocket,
  Sparkles,
  Layers,
  Users,
  Award,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { useCountUp } from "@/lib/use-count-up";
import {
  achievementStats,
  achievementHighlights,
  type Achievement,
} from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Rocket,
  Sparkles,
  Layers,
  Users,
  Award,
};

export function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Impact"
          description="Consistent practice and shipped projects — the numbers behind the work."
        />

        {/* Animated stat counters */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievementStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Highlight list */}
        <Reveal className="mt-10">
          <div className="glass-card grid gap-4 p-6 sm:grid-cols-2">
            {achievementHighlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: Achievement; index: number }) {
  const { ref, value } = useCountUp(stat.value);
  const Icon = iconMap[stat.icon] ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card glow-border p-6 text-center transition-transform duration-300 hover:-translate-y-1.5"
    >
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
        <Icon className="h-6 w-6" />
      </span>
      <div className="mt-4 text-4xl font-bold tracking-tight">
        <span ref={ref} className="gradient-text">
          {value}
        </span>
        {stat.suffix && <span className="gradient-text">{stat.suffix}</span>}
      </div>
      <div className="mt-1 text-sm font-medium text-foreground">
        {stat.label}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {stat.description}
      </p>
    </motion.div>
  );
}
