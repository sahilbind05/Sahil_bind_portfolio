"use client";

import {
  Globe,
  Sparkles,
  LayoutDashboard,
  Flame,
  Binary,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { aboutHighlights, siteConfig } from "@/lib/data";

const highlightIcons: Record<string, LucideIcon> = {
  "Web Development": Globe,
  "AI Integrations": Sparkles,
  "React.js": LayoutDashboard,
  Firebase: Flame,
  "Problem Solving (DSA)": Binary,
  "Responsive UI": Smartphone,
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          description="Web development, AI integrations, and problem-solving — turning ideas into responsive, real-world products."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal className="space-y-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a Computer Science undergraduate passionate about{" "}
              <span className="font-medium text-foreground">
                web development
              </span>
              ,{" "}
              <span className="font-medium text-foreground">
                AI integrations
              </span>
              , and problem-solving. I build responsive web applications with
              React, Firebase, and modern AI APIs like Google Gemini and Groq.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I enjoy turning ideas into real, deployed products while
              continuously strengthening my Data Structures &amp; Algorithms and
              software engineering skills.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Explore my code →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {aboutHighlights.map((highlight) => {
                const Icon = highlightIcons[highlight] ?? Sparkles;
                return (
                  <div
                    key={highlight}
                    className="glass-card glow-border flex items-center gap-3 p-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium leading-tight text-foreground">
                      {highlight}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
