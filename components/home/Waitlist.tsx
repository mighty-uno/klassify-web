import { School, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { WaitlistForm } from "@/components/WaitlistForm";

const waitlistPoints = [
  "Early access before the general launch",
  "Free onboarding and training for your school",
  "A say in what we build next"
];

export function Waitlist() {
  return (
    <section id="waitlist" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-night px-8 py-16 text-center text-white md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[-160px] h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-accent/15 blur-[100px]"
            />

            <div className="relative">
              <div className="flex justify-center">
                <span className="label-mono inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-accent-light">
                  <School size={14} />
                  10+ schools already on the waitlist
                </span>
              </div>

              <SectionLabel index="09" title="Join the waitlist" light />

              <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-[-1.8px] md:text-[44px] md:leading-[1.08]">
                Be one of the first schools to run on SkooBee.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-muted-3">
                We are opening SkooBee to a small group of schools first. Join
                the waitlist and we will keep you posted on early access.
              </p>

              <WaitlistForm />

              <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
                {waitlistPoints.map((point) => (
                  <span
                    key={point}
                    className="flex items-center gap-2 text-sm text-muted-3"
                  >
                    <CheckCircle2 size={15} className="shrink-0 text-accent" />
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
