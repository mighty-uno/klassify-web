import { UserPlus, GraduationCap, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Join Bee-Bud",
    body: "Apply with the short form. We review your application and welcome you to the hive."
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "Learn the hive",
    body: "Quick onboarding, a full product walkthrough, and a sales kit so you can pitch with confidence."
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Receive your honey drop",
    body: "Sell to schools and earn a honey drop every month — recurring income that keeps flowing while they use SkooBee."
  }
];

export function Steps() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="03" title="How it works" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Three steps to your first honey.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative h-full">
                <div className="card h-full p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                      <step.icon size={20} />
                    </span>
                    <span className="font-mono text-sm font-medium text-muted-3">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {step.body}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-5 top-1/2 z-10 hidden h-px w-10 border-t-2 border-dashed border-[#e0a91f]/40 md:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
