"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Loader2, CheckCircle2 } from "lucide-react";

import { LeetCode } from "@/components/icons/leetcode";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");

  const channels = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      Icon: Mail,
    },
    {
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      Icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "in/sahilbind",
      href: siteConfig.social.linkedin,
      Icon: Linkedin,
    },
    {
      label: "GitHub",
      value: `@${siteConfig.social.githubUser}`,
      href: siteConfig.social.github,
      Icon: Github,
    },
    {
      label: "LeetCode",
      value: `@${siteConfig.social.leetcodeUser}`,
      href: siteConfig.social.leetcode,
      Icon: LeetCode,
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    // Compose a mailto fallback so the message is never lost without a backend.
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `[Portfolio] ${data.get("subject") ?? ""}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name") ?? ""}\nEmail: ${data.get("email") ?? ""}\n\n${
        data.get("message") ?? ""
      }`
    );

    // Brief delay to surface the loading state, then open the mail client.
    await new Promise((r) => setTimeout(r, 700));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Say Hello"
          title="Get In Touch"
          description="Have an opportunity, a project idea, or just want to connect? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact channels */}
          <Reveal className="space-y-4">
            {channels.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card glow-border flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {label}
                  </div>
                  <div className="text-sm text-muted-foreground">{value}</div>
                </div>
              </a>
            ))}
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-card glow-border space-y-4 p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Recruiter"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    autoComplete="email"
                  />
                </Field>
              </div>

              <Field label="Subject" htmlFor="subject">
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Opportunity at Acme Inc."
                />
              </Field>

              <Field label="Message" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me a bit about the role or project…"
                />
              </Field>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 /> Opening your mail app…
                  </>
                ) : (
                  <>
                    Send Message <Send />
                  </>
                )}
              </Button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-emerald-400"
                >
                  Thanks! Your email draft is ready to send.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
