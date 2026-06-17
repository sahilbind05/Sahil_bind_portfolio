import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

import { siteConfig, navLinks } from "@/lib/data";

export function Footer() {
  const year = 2026; // Static to keep SSR/CSR output identical.

  const socials = [
    { href: siteConfig.social.github, label: "GitHub", Icon: Github },
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <footer className="border-t border-white/10 bg-background/60">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="#hero" className="font-mono text-xl font-bold">
              <span className="gradient-text">Sahil Bind</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {siteConfig.role}
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Building responsive web apps and AI-powered platforms with React,
              Firebase, and modern AI APIs.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="mt-4 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <a
              href={siteConfig.resumeUrl}
              download
              className="mt-5 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Download Résumé
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="#hero"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
