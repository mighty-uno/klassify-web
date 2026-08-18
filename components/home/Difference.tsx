import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const pillars = [
  {
    number: "01",
    title: "One source of truth for every team",
    description:
      "Everyone works from the same live data — no more duplicate ledgers, spreadsheets or outdated lists."
  },
  {
    number: "02",
    title: "Clear workflows for every role",
    description:
      "Attendance, fees and results each follow a predictable flow, so nothing slips between handoffs."
  },
  {
    number: "03",
    title: "More focus on student outcomes",
    description:
      "When admin runs quietly in the background, teachers and staff can pour their energy into students."
  }
];

export function Difference() {
  return (
    <section id="why" className="section-pad bg-night text-white">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="01" title="The Klassify difference" light />
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-extrabold tracking-[-1.8px] md:text-[44px] md:leading-[1.08]">
            Give every school day back to the people who make it count.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted-3">
            Teachers teach. Office teams support. Klassify keeps attendance,
            billing, results and day-to-day operations moving quietly in the
            background.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-night p-8">
                <span className="font-mono text-sm font-medium text-accent">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{pillar.title}</h3>
                <p className="text-sm leading-6 text-muted-3">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
