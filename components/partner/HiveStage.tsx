"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Bee } from "@/components/partner/Bee";
import { Honeycomb } from "@/components/partner/Honeycomb";

const BEE_COUNT = 24;

function SwarmBee({
  p,
  index,
  count
}: {
  p: MotionValue<number>;
  index: number;
  count: number;
}) {
  const angle = (index / count) * Math.PI * 2;
  const startX = 50 + Math.cos(angle) * 64;
  const startY = 50 + Math.sin(angle) * 62;
  const ring = 22 + (index % 6) * 3.5;
  const endX = 50 + Math.cos(angle) * ring;
  const endY = 40 + Math.sin(angle) * ring;
  const start = (index / count) * 0.78;

  const t = useTransform(p, [start, start + 0.22], [0, 1]);
  const x = useTransform(t, (v) => `${startX + (endX - startX) * v}%`);
  const y = useTransform(t, (v) => `${startY + (endY - startY) * v}%`);
  const opacity = useTransform(t, [0, 0.18], [0, 1]);
  const scale = useTransform(t, [0, 1], [0.5, 1]);

  const delay = (index / count) * 0.6;

  return (
    <motion.div
      style={{ left: x, top: y, opacity, scale }}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="bee-bob"
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${3.5 + (index % 5) * 0.4}s`
        }}
      >
        <Bee className="h-6 w-6 md:h-7 md:w-7" />
      </div>
    </motion.div>
  );
}

function HoneyDrop({ p }: { p: MotionValue<number> }) {
  const dripLength = useTransform(p, [0.78, 1], [0.12, 1]);
  const dripOpacity = useTransform(p, [0.78, 0.9], [0, 1]);
  const dropletOpacity = useTransform(p, [0.88, 1], [0, 1]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-[33.5%] z-20 -translate-x-1/2">
      <motion.div
        style={{ opacity: dripOpacity }}
        className="relative flex flex-col items-center"
      >
        <motion.div
          style={{
            scaleY: dripLength,
            background: "linear-gradient(to bottom, #ffe08a, #f6a821)"
          }}
          className="h-[38px] w-[16px] rounded-t-full rounded-b-[45%] shadow-[0_0_16px_rgba(255,180,0,0.5)] [transform-origin:top]"
        />
        <motion.div
          style={{ opacity: dropletOpacity }}
          className="absolute top-[34px] flex flex-col items-center"
        >
          <span className="drip-fall block h-[12px] w-[12px] rounded-full bg-[#ffc93c] shadow-[0_0_14px_rgba(255,180,0,0.85)]" />
          <span
            className="drip-fall block h-[9px] w-[9px] rounded-full bg-[#ffc93c] shadow-[0_0_12px_rgba(255,180,0,0.75)]"
            style={{ animationDelay: "1.3s" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function HiveStage() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() === true;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const p = useTransform(scrollYProgress, (v) => (reduced ? 1 : v));

  const hiveGlow = useTransform(p, [0.5, 0.95], [0, 0.55]);
  const hintOpacity = useTransform(p, [0, 0.12], [1, 0]);
  const copyOpacity = useTransform(p, [0.93, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-night">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden pt-[72px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-accent/15 blur-[130px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-30 flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2"
        >
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#ffc93c]" />
          <span className="label-mono text-white">Bee-Bud — Partner Program</span>
        </motion.div>

        <div className="relative z-0 mt-4 flex w-full items-center justify-center">
          <motion.div
            aria-hidden
            style={{ opacity: hiveGlow }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffb300]/40 blur-[90px]"
          />
          <Honeycomb progress={p} />
          <HoneyDrop p={p} />
        </div>

        <div className="relative z-30 mt-2 flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.06] tracking-[-2px] text-white sm:text-5xl md:text-6xl">
            A honey drop, every month.
          </h1>
          <p className="max-w-[560px] text-[17px] leading-relaxed text-muted-3">
            Join Bee-Bud. Bring schools into the hive and receive a honey drop
            every month — recurring income that keeps flowing.
          </p>
          <motion.div style={{ opacity: copyOpacity }} className="flex flex-col items-center pb-8">
            <p className="max-w-md text-sm leading-6 text-muted-2">
              No tiers. No complex programs. One simple deal: grow the hive, and
              honey drops for you every month.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1"
        >
          <span className="label-mono uppercase text-muted-3">
            Scroll to grow the hive
          </span>
          <ChevronDown size={16} className="animate-bounce text-[#ffc93c]" />
        </motion.div>

        <SwarmBee p={p} index={0} count={BEE_COUNT} />
        <SwarmBee p={p} index={1} count={BEE_COUNT} />
        <SwarmBee p={p} index={2} count={BEE_COUNT} />
        <SwarmBee p={p} index={3} count={BEE_COUNT} />
        <SwarmBee p={p} index={4} count={BEE_COUNT} />
        <SwarmBee p={p} index={5} count={BEE_COUNT} />
        <SwarmBee p={p} index={6} count={BEE_COUNT} />
        <SwarmBee p={p} index={7} count={BEE_COUNT} />
        <SwarmBee p={p} index={8} count={BEE_COUNT} />
        <SwarmBee p={p} index={9} count={BEE_COUNT} />
        <SwarmBee p={p} index={10} count={BEE_COUNT} />
        <SwarmBee p={p} index={11} count={BEE_COUNT} />
        <SwarmBee p={p} index={12} count={BEE_COUNT} />
        <SwarmBee p={p} index={13} count={BEE_COUNT} />
        <SwarmBee p={p} index={14} count={BEE_COUNT} />
        <SwarmBee p={p} index={15} count={BEE_COUNT} />
        <SwarmBee p={p} index={16} count={BEE_COUNT} />
        <SwarmBee p={p} index={17} count={BEE_COUNT} />
        <SwarmBee p={p} index={18} count={BEE_COUNT} />
        <SwarmBee p={p} index={19} count={BEE_COUNT} />
        <SwarmBee p={p} index={20} count={BEE_COUNT} />
        <SwarmBee p={p} index={21} count={BEE_COUNT} />
        <SwarmBee p={p} index={22} count={BEE_COUNT} />
        <SwarmBee p={p} index={23} count={BEE_COUNT} />
      </div>
    </section>
  );
}
