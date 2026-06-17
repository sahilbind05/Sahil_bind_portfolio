"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Journey"
          title="My Path So Far"
          description="From first lines of code to building scalable, AI-powered systems."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10">
            {timeline.map((item, i) => (
              <TimelineRow key={item.title} item={item} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  item,
  index,
}: {
  item: { title: string; description: string };
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative pl-12 md:w-1/2 md:pl-0 ${
        isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
      }`}
    >
      {/* Node */}
      <span
        className={`absolute left-4 top-1.5 z-10 -translate-x-1/2 md:left-auto ${
          isLeft ? "md:-right-2.5 md:translate-x-0" : "md:-left-2.5"
        }`}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-background ring-2 ring-primary/60">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-accent" />
        </span>
      </span>

      <div className="glass-card glow-border p-5 transition-transform duration-300 hover:-translate-y-1">
        <span className="font-mono text-xs text-primary">
          Step {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
