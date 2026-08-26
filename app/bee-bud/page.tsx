import type { Metadata } from "next";
import { BeeBudForm } from "@/components/BeeBudForm";
import { HiveStage } from "@/components/partner/HiveStage";
import { Deal } from "@/components/partner/Deal";
import { Benefits } from "@/components/partner/Benefits";
import { Steps } from "@/components/partner/Steps";
import { FAQ } from "@/components/partner/FAQ";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the Bee-Bud Program — SkooBee Partner Program",
  description:
    "SkooBee's partner program for freelancers and resellers. Join Bee-Bud and earn a honey drop every month on every school you bring into the hive — with onboarding, training, and support handled by us.",
  alternates: {
    canonical: `${siteConfig.url}/bee-bud`
  }
};

export default function BeeBudPage() {
  return (
    <>
      <HiveStage />

      <Deal />
      <Benefits />
      <Steps />
      <FAQ />

      <section id="apply" className="section-pad bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="label-mono flex items-center gap-2.5 uppercase text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                05 / Join Bee-Bud
              </p>
              <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
                Ready to grow with the hive?
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">
                Tell us a little about yourself and we&apos;ll welcome you to
                Bee-Bud. No fees, no commitments — just a clear plan to start
                receiving your honey drop every month.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card mt-10 p-8 md:p-10">
                <BeeBudForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
