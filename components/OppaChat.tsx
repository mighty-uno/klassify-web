"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Send, Sparkles } from "lucide-react";

const QUESTION = "Explain photosynthesis from Chapter 3, in simple words.";
const ANSWER =
  "Sure! In Chapter 3, photosynthesis is how plants make their own food using sunlight, water and carbon dioxide. Here are the key steps from your textbook...";

const TYPE_MS = 18;

export function OppaChat() {
  const [started, setStarted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [typed, setTyped] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const questionTimer = setTimeout(() => setShowAnswer(true), 900);
    return () => clearTimeout(questionTimer);
  }, [started]);

  useEffect(() => {
    if (!showAnswer) return;
    if (typed.length < ANSWER.length) {
      const timer = setTimeout(() => {
        setTyped(ANSWER.slice(0, typed.length + 1));
      }, TYPE_MS);
      return () => clearTimeout(timer);
    }
  }, [showAnswer, typed]);

  const done = typed.length === ANSWER.length;

  return (
    <div
      ref={ref}
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-lift"
    >
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-5 py-3.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
          <Sparkles size={16} />
        </span>
        <div className="flex-1">
          <p className="text-sm font-bold text-ink">Oppa — Learning Assistant</p>
          <p className="text-xs text-muted-2">Answers drawn from your books</p>
        </div>
        <span className="label-mono inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          Online
        </span>
      </div>

      <div className="flex min-h-[300px] flex-col gap-4 p-5">
        <AnimatePresence>
          {started && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-white"
            >
              {QUESTION}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex max-w-[90%] items-start gap-2.5 self-start"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen size={15} />
              </span>
              <div>
                <div className="rounded-2xl rounded-bl-md bg-canvas px-4 py-3 text-sm leading-6 text-ink">
                  {typed}
                  <span
                    aria-hidden
                    className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.12em] bg-primary"
                    style={{ animation: "cursor-blink 1s steps(2) infinite" }}
                  />
                </div>
                <AnimatePresence>
                  {done && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[11px] text-muted-2"
                    >
                      <BookOpen size={11} />
                      Sources · Class 7 · Science · Ch. 3
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-line bg-white px-5 py-3.5">
        <div className="flex items-center gap-2.5 rounded-[10px] border border-line bg-canvas px-4 py-2.5">
          <span className="flex-1 text-sm text-muted-2">
            Ask Oppa anything about your books...
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <Send size={13} />
          </span>
        </div>
      </div>
    </div>
  );
}
