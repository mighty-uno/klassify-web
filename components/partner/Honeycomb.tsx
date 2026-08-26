"use client";

import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

const R = 34;
const DX = Math.sqrt(3) * R;
const DY = 1.5 * R;

const HEX = [
  "M 0 -34",
  "L 29.44 -17",
  "L 29.44 17",
  "L 0 34",
  "L -29.44 17",
  "L -29.44 -17",
  "Z"
].join(" ");

const ROWS = [
  { y: 0, xs: [-DX, 0, DX] },
  { y: DY, xs: [-1.5 * DX, -0.5 * DX, 0.5 * DX, 1.5 * DX] },
  { y: 2 * DY, xs: [-DX, 0, DX] },
  { y: 3 * DY, xs: [-0.5 * DX, 0.5 * DX] }
];

const CELLS = ROWS.flatMap((row) => row.xs.map((x) => ({ x, y: row.y })));

function HexCell({
  x,
  y,
  start,
  progress
}: {
  x: number;
  y: number;
  start: number;
  progress: MotionValue<number>;
}) {
  const lit = useTransform(progress, [start, start + 0.085], [0, 1]);

  return (
    <g transform={`translate(${x.toFixed(2)} ${y.toFixed(2)})`}>
      <path
        d={HEX}
        fill="rgba(255,201,60,0.07)"
        stroke="rgba(255,201,60,0.3)"
        strokeWidth={1.5}
      />
      <motion.path
        d={HEX}
        fill="url(#honeyGrad)"
        stroke="#4a3a12"
        strokeWidth={1.5}
        strokeLinejoin="round"
        style={{ opacity: lit }}
      />
      <motion.path
        d="M -14 -10 Q 0 -20 14 -10 Q 6 2 -14 -10"
        fill="rgba(255,255,255,0.35)"
        style={{ opacity: lit }}
      />
    </g>
  );
}

export function Honeycomb({ progress }: { progress: MotionValue<number> }) {
  return (
    <svg
      viewBox="-130 -50 260 250"
      className="h-auto w-full max-w-[430px]"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="honeyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="100%" stopColor="#f6a821" />
        </linearGradient>
      </defs>
      {CELLS.map((cell, i) => (
        <HexCell
          key={i}
          x={cell.x}
          y={cell.y}
          start={i / CELLS.length}
          progress={progress}
        />
      ))}
    </svg>
  );
}
