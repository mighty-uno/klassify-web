import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-night px-8 py-16 text-center text-white md:px-16 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[-160px] h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[260px] w-[260px] rounded-full bg-accent/15 blur-[100px]"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-extrabold tracking-[-1.8px] md:text-[44px] md:leading-[1.08]">
                Ready to run your school with less friction?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-muted-3">
                Bring every admin workflow into one clear, dependable system.
                Tell us about your school and the Klassify team will get back to
                you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Book a demo
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
