"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { TypewriterHeadline } from "@/components/TypewriterHeadline";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-night pb-20 pt-[72px] text-white md:pb-28">
      <motion.div
        aria-hidden
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-1/3 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="container-page relative flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2"
        >
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-accent" />
          <span className="label-mono text-white">AI School OS</span>
          <Sparkles size={13} className="text-accent" />
        </motion.div>

        <TypewriterHeadline className="max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-[-2px] sm:text-5xl md:text-[64px] min-h-[5.3em] sm:min-h-[4.24em] lg:min-h-[3.18em]" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="max-w-[560px] text-[17px] leading-relaxed text-muted-3"
        >
          Klassify is the AI-powered school OS that automates attendance,
          billing, and report cards — saving hours for teachers and admin, while
          giving parents daily, real-time insights into their child&apos;s
          progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link href="/contact" className="btn-primary">
            Book a demo
            <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Talk to our team
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mt-10 w-full max-w-[1120px]"
        >
          <motion.div
            style={{ y: imageY }}
            className="overflow-hidden rounded-[20px] border border-white/25 bg-white shadow-hero"
          >
            <div className="flex items-center gap-2 bg-[#f3f3f7] px-6 py-3.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
            </div>
            <Image
              src="/dashboard.png"
              alt="Klassify school ERP dashboard preview"
              width={1440}
              height={1377}
              priority
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
