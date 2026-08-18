"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type Status = { type: "success" | "error"; message: string } | null;

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus(null);
    setSending(true);

    try {
      const data = new FormData(form);
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries()))
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus({ type: "error", message: result.error ?? "Something went wrong." });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          "You're on the list! We'll reach out with early access details soon."
      });
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        placeholder="principal@yourschool.in"
        required
        aria-label="Email address"
        className="w-full rounded-[10px] border border-white/15 bg-white/10 px-4 py-3 text-[15px] text-white outline-none transition-all duration-200 placeholder:text-muted-3 focus:border-accent focus:bg-white/15 sm:flex-1"
      />
      <button
        type="submit"
        disabled={sending}
        className="btn-primary shrink-0 disabled:opacity-70"
      >
        {sending ? "Joining..." : "Join the waitlist"}
        {!sending && <ArrowRight size={16} />}
      </button>
      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`w-full rounded-[10px] border px-4 py-3 text-sm leading-6 sm:mt-2 ${
            status.type === "success"
              ? "border-[#bfe6d1] bg-[#e8f7ef] text-success"
              : "border-[#f6d3c8] bg-[#fdf0ec] text-[#b3421f]"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
