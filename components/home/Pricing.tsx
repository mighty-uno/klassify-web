import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const included = [
  "Attendance, fees, results & reports",
  "Real-time dashboards for leadership",
  "Parent mobile portal",
  "Onboarding, training & support"
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="07" title="Pricing" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Simple pricing that scales with your school.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            One plan for the whole school, priced per student. Book a demo and
            we will share a clear quote for your school.
          </p>
        </Reveal>

        <div className="mt-14 flex justify-center">
          <Reveal className="w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-canvas p-8 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
              />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="label-mono uppercase text-primary">
                      SkooBee for Schools
                    </span>
                    <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
                      Per student, per month
                    </h3>
                    <p className="mt-2 text-[15px] leading-6 text-muted">
                      The full operating system for your school — all features,
                      no per-module add-ons. Custom quote based on your
                      school&apos;s size.
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                        <span className="text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-4 md:items-end md:pt-1">
                  <Link href="/contact" className="btn-primary">
                    Book a demo
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-muted transition-colors hover:text-primary"
                  >
                    Request a custom quote →
                  </Link>
                </div>
              </div>

              <div className="relative mt-8 flex items-start gap-3 rounded-2xl border border-accent/25 bg-accent/5 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Sparkles size={17} />
                </span>
                <div>
                  <h4 className="font-bold text-ink">
                    Free for teachers — every day
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Teachers use SkooBee at no cost: mark daily attendance,
                    manage class tasks, and get limited AI assistance each day
                    to keep their workload light.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
