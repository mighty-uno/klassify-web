import { Banknote, Map, ShieldCheck, LayoutDashboard } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const benefits = [
  {
    icon: Banknote,
    title: "Recurring honey",
    body: "Earn month after month on every school you bring into the hive. One sale can keep paying you for years."
  },
  {
    icon: ShieldCheck,
    title: "You sell, we do the rest",
    body: "SkooBee handles onboarding, training, and school support. You focus on relationships, not busywork."
  },
  {
    icon: Map,
    title: "Grow your territory",
    body: "Claim your region, build a portfolio of schools, and watch your honey drops grow every month."
  },
  {
    icon: LayoutDashboard,
    title: "Tools to fly with",
    body: "Demo access, a partner dashboard, co-branded assets, and real-time lead tracking keep you in control."
  }
];

export function Benefits() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="02" title="Why Bee-Buds" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Why become a Bee-Bud.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            A low-effort, high-upside way to grow a software business — powered
            by the demand for better school software across India.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.06}>
              <div className="card flex h-full flex-col gap-4 p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e0a91f]/30 bg-[#ffc93c]/10 text-[#b07d0e]">
                  <benefit.icon size={20} />
                </span>
                <h3 className="text-xl font-bold tracking-tight text-ink">
                  {benefit.title}
                </h3>
                <p className="text-[15px] leading-7 text-muted">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
