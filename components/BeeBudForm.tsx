"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const fieldClass =
  "w-full rounded-[10px] border border-line bg-canvas px-3.5 py-3 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-muted-2 focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(74,58,255,0.12)]";

const partnerTypes = [
  "Individual freelancer",
  "Reseller / IT distributor",
  "Other"
];

const qualifications = [
  "Higher Secondary / High School",
  "Graduate",
  "Postgraduate",
  "Diploma / Professional course",
  "Other"
];

type Status = { type: "success" | "error"; message: string } | null;

export function BeeBudForm() {
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

      const response = await fetch("/api/bee-bud", {
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
        message: "You're a Bee-Bud now! We'll reach out with the next steps."
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your application. Please try again or email us directly."
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
          <label htmlFor="bee-bud-name" className="text-sm font-semibold text-ink">
            Full name <span className="text-accent">*</span>
          </label>
          <input
            id="bee-bud-name"
            name="name"
            type="text"
            placeholder="e.g. Ananya Iyer"
            required
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bee-bud-email" className="text-sm font-semibold text-ink">
            Email Id <span className="text-accent">*</span>
          </label>
          <input
            id="bee-bud-email"
            name="email"
            type="email"
            placeholder="e.g. you@company.in"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="bee-bud-company" className="text-sm font-semibold text-ink">
            Company / organisation
          </label>
          <input
            id="bee-bud-company"
            name="company"
            type="text"
            placeholder="e.g. Sunrise IT Solutions"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bee-bud-role" className="text-sm font-semibold text-ink">
            Your role
          </label>
          <input
            id="bee-bud-role"
            name="role"
            type="text"
            placeholder="e.g. Founder, Sales lead"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="bee-bud-qualification" className="text-sm font-semibold text-ink">
            Qualification <span className="text-accent">*</span>
          </label>
          <select
            id="bee-bud-qualification"
            name="qualification"
            required
            defaultValue=""
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="" disabled>
              Select your qualification
            </option>
            {qualifications.map((qualification) => (
              <option key={qualification} value={qualification}>
                {qualification}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bee-bud-region" className="text-sm font-semibold text-ink">
            Region / city <span className="text-accent">*</span>
          </label>
          <input
            id="bee-bud-region"
            name="region"
            type="text"
            placeholder="e.g. Pune, Maharashtra"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="bee-bud-type" className="text-sm font-semibold text-ink">
            Partner type <span className="text-accent">*</span>
          </label>
          <select
            id="bee-bud-type"
            name="partnerType"
            required
            defaultValue=""
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="" disabled>
              Select a type
            </option>
            {partnerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="bee-bud-message" className="text-sm font-semibold text-ink">
          Tell us about your interest
        </label>
        <textarea
          id="bee-bud-message"
          name="message"
          placeholder="A line about your experience with schools or software."
          rows={3}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <p className="text-sm leading-6 text-muted-2">
        Exact honey rates are shared after you apply — every Bee-Bud starts with
        a clear plan.
      </p>

      <button
        type="submit"
        disabled={sending}
        className="btn-primary mt-2 w-full disabled:opacity-70"
      >
        {sending ? "Joining Bee-Bud..." : "Join the Bee-Bud program"}
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
