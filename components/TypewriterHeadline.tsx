"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Hours saved for staff. Real-time insights for parents. Clear outcomes for students.",
  "Less administration. More time for learning.",
  "Attendance, fees and reports — running quietly in the background.",
  "School operations, made calmer."
];

const TYPE_MS = 34;
const DELETE_MS = 16;
const PAUSE_MS = 2000;
const PAUSE_EMPTY_MS = 500;

export function TypewriterHeadline({ className }: { className?: string }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), PAUSE_MS);
    } else if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      timer = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? DELETE_MS : TYPE_MS
      );
    }

    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex]);

  return (
    <h1 className={className}>
      <span className="sr-only">
        Hours saved for staff. Real-time insights for parents. Clear outcomes for
        students.
      </span>
      <span aria-hidden>{text}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.88em] w-[3px] translate-y-[0.08em] rounded-full bg-accent"
        style={{ animation: "cursor-blink 1s steps(2) infinite" }}
      />
    </h1>
  );
}
