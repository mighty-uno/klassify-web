"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const fieldClass =
  "w-full rounded-[10px] border border-line bg-canvas px-3.5 py-3 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-muted-2 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(74,58,255,0.12)]";

type Status = { type: "success" | "error"; message: string } | null;

export function ContactForm() {
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
      const payload = Object.fromEntries(data.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
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
          "Thank you! Your enquiry has been sent. The SkooBee team will get back to you soon."
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your enquiry. Please try again or email us directly."
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="full-name" className="text-sm font-semibold text-ink">
            Full name <span className="text-accent">*</span>
          </label>
          <input
            id="full-name"
            name="name"
            type="text"
            placeholder="e.g. Ananya Iyer"
            required
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile" className="text-sm font-semibold text-ink">
            Mobile number <span className="text-accent">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="e.g. 9876543210"
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]{10}"
            title="Enter a 10-digit mobile number"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          Email Id <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="e.g. principal@yourschool.in"
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="school-name" className="text-sm font-semibold text-ink">
          School name
        </label>
        <input
          id="school-name"
          name="school"
          type="text"
          placeholder="e.g. Sunrise Public School"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="school-address"
          className="text-sm font-semibold text-ink"
        >
          School address
        </label>
        <textarea
          id="school-address"
          name="address"
          placeholder="Street, area, city, state"
          rows={3}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-primary mt-2 w-full disabled:opacity-70"
      >
        {sending ? "Sending..." : "Submit"}
        {!sending && <ArrowRight size={16} />}
      </button>

      {status && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-[10px] border px-4 py-3.5 text-sm leading-6 ${
            status.type === "success"
              ? "border-[#bfe6d1] bg-[#e8f7ef] text-success"
              : "border-[#f6d3c8] bg-[#fdf0ec] text-[#b3421f]"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
