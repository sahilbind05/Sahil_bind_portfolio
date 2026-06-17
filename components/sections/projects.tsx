"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="A selection of web apps I've designed, built, and deployed — from AI-powered platforms to responsive dashboards."
        />

        <div className="mt-14 grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card glow-border group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 lg:grid lg:grid-cols-2"
    >
      {/* Preview image */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.featured && (
          <Badge
            variant="accent"
            className="absolute left-4 top-4 gap-1 border-accent/40 bg-background/70 backdrop-blur"
          >
            <Star className="h-3 w-3 fill-current" /> Featured
          </Badge>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.features && (
          <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <Button asChild size="sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <ExternalLink />
              </a>
            </Button>
          )}
          <Button asChild size="sm" variant="outline">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
