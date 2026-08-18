import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { AIGeneration } from "@/components/AIGeneration";

export function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden bg-night py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-160px] top-0 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-120px] h-[380px] w-[380px] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-2.5">
              <SectionLabel index="03" title="AI integration" light />
              <span className="label-mono inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent-light">
                <Sparkles size={11} />
                Klassify AI
              </span>
            </div>
            <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-[-1.8px] md:text-[44px] md:leading-[1.08]">
              The quietest member of your admin team.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-3">
              Klassify uses AI to reduce repetitive work, surface useful patterns
              and keep your team one step ahead — without asking staff to change
              how they work. Watch it quietly generate the daily summary while
              your office gets on with the day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Attendance", "Fees", "Results", "Reports"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm text-muted-3"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <AIGeneration />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
