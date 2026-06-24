"use client";

import { GraduationCap, Award, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education, certifications } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Background"
          title="Education & Certifications"
          description="My academic foundation and the certifications backing my skills."
        />

        {/* Education — full width on top */}
        <Reveal className="mt-14 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Education
          </h3>
          {education.map((item) => (
            <div
              key={item.institution}
              className="glass-card glow-border p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-lg font-semibold leading-tight">
                    {item.institution}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.degree}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="font-mono text-primary">{item.period}</span>
                    {item.detail && (
                      <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-muted-foreground">
                        {item.detail}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Certifications — 2-col grid below */}
        <Reveal delay={0.1} className="mt-10 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Certifications
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
            {certifications.map((cert) => {
              const cardClass =
                "glass-card glow-border flex items-start gap-4 p-5 transition-transform duration-300 hover:-translate-y-1";

              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="flex items-center gap-1.5 text-sm font-semibold leading-snug text-foreground">
                      {cert.title}
                      {cert.url && (
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                      )}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </>
              );

              // Clickable verification card when a public link is provided.
              return cert.url ? (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify certificate: ${cert.title}`}
                  className={`group ${cardClass} hover:border-accent/60`}
                >
                  {inner}
                </a>
              ) : (
                <div key={cert.title} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
