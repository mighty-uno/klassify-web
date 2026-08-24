"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const lines = [
  {
    title: "Daily attendance summary prepared",
    detail: "42 present · 3 absent · parents notified"
  },
  {
    title: "Fee follow-up priorities identified",
    detail: "5 families flagged · reminders sent"
  },
  {
    title: "Students needing attention flagged",
    detail: "3 flagged · teacher notes added"
  },
  {
    title: "Report card comments ready",
    detail: "AI comments generated for Class 5"
  }
];

const CYCLE_MS = 1600;

export function AIGeneration() {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setCount((c) => (c >= lines.length ? 0 : c + 1));
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    setProgress(0);
    const start = Date.now();
    const timer = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / CYCLE_MS) * 100);
      setProgress(pct);
    }, 40);
    return () => clearInterval(timer);
  }, [count, inView]);

  const visible = count;
  const isGenerating = visible < lines.length;

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-hero backdrop-blur"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/15 text-accent">
            <Sparkles size={13} />
          </span>
          <span className="label-mono text-white">SkooBee AI</span>
        </div>
        <span className="label-mono inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-accent-light">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {isGenerating ? "Generating" : "Ready"}
        </span>
      </div>

      <div className="h-px w-full bg-white/10">
        <div
          className="h-px bg-accent transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <AnimatePresence initial={false}>
          {lines.slice(0, visible).map((line) => (
            <motion.div
              key={line.title}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4"
            >
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-white">{line.title}</p>
                <p className="mt-0.5 font-mono text-xs text-muted-3">{line.detail}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isGenerating && (
          <motion.div
            key={`typing-${visible}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-3 rounded-xl border border-dashed border-white/15 p-4"
          >
            <span className="flex h-4 w-4 items-center justify-center">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-3" />
            </span>
            <div className="flex-1">
              <div className="h-2.5 w-2/3 animate-pulse rounded bg-white/15" />
              <div className="mt-2 h-2 w-1/3 animate-pulse rounded bg-white/10" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
