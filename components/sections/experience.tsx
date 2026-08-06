"use client";

import { BriefcaseBusiness, ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="What I’ve Built"
          description="A snapshot of my hands-on experience building responsive products and shipping real-world web apps."
        />

        <div className="mt-14 space-y-5">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.06}>
              <div className="glass-card glow-border p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {item.company}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                    <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground">
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
