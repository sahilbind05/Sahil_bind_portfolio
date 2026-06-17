"use client";

import * as React from "react";

/**
 * Lightweight animated particle network for the hero background.
 *
 * Canvas 2D (no WebGL) so it stays cheap and battery-friendly. Nodes drift
 * slowly, connect with faint lines when near, and gently lean toward the
 * cursor. Rendered only on larger screens and disabled for reduced-motion
 * users — mobile falls back to the static gradient orbs.
 */
export function ParticleNetwork() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const el = canvas; // non-null capture for use inside nested closures

    // Respect user + device constraints.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    if (reduceMotion || isSmall) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context; // non-null capture for use inside nested closures

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    // Emerald + cyan, kept low-opacity.
    const COLORS = [
      "34, 197, 94", // emerald
      "6, 182, 212", // cyan
    ];

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      c: string;
    };
    let nodes: Node[] = [];

    const pointer = { x: -9999, y: -9999, active: false };

    function resize() {
      const parent = el.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      el.width = width * dpr;
      el.height = height * dpr;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale node count to area, capped for performance.
      const count = Math.min(70, Math.floor((width * height) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    const MAX_DIST = 130;

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Gentle drift.
        n.x += n.vx;
        n.y += n.vy;

        // Soft cursor attraction.
        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 200 * 200 && d2 > 1) {
            const f = 0.0006;
            n.vx += dx * f;
            n.vy += dy * f;
          }
        }

        // Damping keeps velocities calm.
        n.vx *= 0.99;
        n.vy *= 0.99;

        // Wrap around edges.
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        // Node dot.
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${n.c}, 0.7)`;
        ctx.fill();

        // Connections.
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${n.c}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    let raf = 0;
    resize();
    step();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  );
}
