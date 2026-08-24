import Image from "next/image";
import { Building2, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { siteConfig } from "@/lib/site";

const highlights = [
  {
    icon: Building2,
    title: "A product studio, not a big vendor",
    description:
      "We build focused software for Indian schools — small, senior teams that actually talk to you."
  },
  {
    icon: Sparkles,
    title: "Design-led and dependable",
    description:
      "Every feature is designed to reduce friction, so adoption is easy and daily work stays calm."
  },
  {
    icon: ShieldCheck,
    title: "Careful with school data",
    description:
      "Education data is handled with the care and security practices schools deserve."
  }
];

export function BuiltByVidhiworks() {
  return (
    <section id="vidhiworks" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-center gap-5 text-center">
            <SectionLabel index="09" title="Built by Vidhiworks" />
            <Image
              src={siteConfig.companyLogo}
              alt="Vidhiworks logo"
              width={220}
              height={48}
              className="h-12 w-auto"
            />
            <h2 className="mt-1 max-w-2xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
              SkooBee is built by Vidhiworks.
            </h2>
            <p className="max-w-2xl text-[17px] leading-relaxed text-muted">
              {siteConfig.companyDescription}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="card flex h-full flex-col gap-4 p-7 transition-shadow duration-300 hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F6F54]/10 text-[#1F6F54]">
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
