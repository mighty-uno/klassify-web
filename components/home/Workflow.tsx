import { School, CalendarClock, BellRing } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const steps = [
  {
    icon: School,
    step: "Step 1",
    title: "Connect your school",
    description:
      "Onboard classes, staff and students once. SkooBee imports your existing structure so day one feels familiar."
  },
  {
    icon: CalendarClock,
    step: "Step 2",
    title: "SkooBee runs the day",
    description:
      "Attendance is captured in seconds, fees are collected and tracked, results and reports are generated automatically."
  },
  {
    icon: BellRing,
    step: "Step 3",
    title: "Everyone stays informed",
    description:
      "Leadership, teachers and parents get real-time, role-appropriate updates — no chasing, no follow-up calls."
  }
];


export function Workflow() {
  return (
    <section id="how" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="05" title="How it works" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            From day one to running on autopilot.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-[52px] hidden border-t-2 border-dashed border-line md:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative flex h-full flex-col gap-4 rounded-2xl border border-line bg-canvas p-7">
                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-card">
                  <step.icon size={22} />
                </div>
                <p className="label-mono uppercase text-primary">{step.step}</p>
                <h3 className="text-lg font-bold tracking-tight text-ink">{step.title}</h3>
                <p className="text-sm leading-6 text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
