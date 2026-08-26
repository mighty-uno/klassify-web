import { Check, Droplet } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const model = [
  "A honey drop lands in your account every month",
  "Keep earning while schools keep using SkooBee",
  "No fees, no quotas, no complex tiers"
];

export function Deal() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="01" title="The deal" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            One simple deal.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            You bring schools into the hive. While those schools use SkooBee,
            you receive a honey drop every month. No tiers, no complex programs
            — just recurring income that grows as your hive grows.
          </p>
        </Reveal>

        <div className="mt-14 flex justify-center">
          <Reveal className="w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-canvas p-8 md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffc93c]/15 blur-3xl"
              />

              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#e0a91f]/30 bg-[#ffc93c]/15 text-[#b07d0e]">
                      <Droplet size={22} />
                    </span>
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-ink">
                        The honey drop
                      </h3>
                      <p className="label-mono uppercase text-muted-2">
                        Every month, for every school you bring
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {model.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#d99a08]" />
                        <span className="text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-4 md:items-end md:pt-1">
                  <p className="text-[15px] font-semibold text-primary">
                    Start receiving honey drops
                  </p>
                  <p className="max-w-[220px] text-sm leading-6 text-muted-2">
                    Exact honey rates are shared after you apply — every Bee-Bud
                    starts with a clear plan.
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
