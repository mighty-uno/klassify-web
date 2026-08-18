"use client";

import { motion } from "framer-motion";

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <motion.h1
      aria-label={text}
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } }
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }
            }
          }}
        >
          {word}
          {"\u00A0"}
        </motion.span>
      ))}
    </motion.h1>
  );
}
