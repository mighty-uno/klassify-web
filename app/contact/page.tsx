import type { Metadata } from "next";
import Image from "next/image";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with the SkooBee team. Tell us about your school and we will get back to you.",
  alternates: {
    canonical: `${siteConfig.url}/contact`
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night pb-16 pt-[72px] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
        />
        <div className="container-page relative flex flex-col items-center gap-7 pt-12 text-center">
          <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2">
            <span className="inline-block h-[7px] w-[7px] rounded-full bg-accent" />
            <span className="label-mono text-white">Contact us</span>
          </div>
          <h1 className="max-w-2xl text-balance text-4xl font-extrabold tracking-[-2px] md:text-[56px] md:leading-[1.06]">
            Let&apos;s talk about your school.
          </h1>
          <p className="max-w-[560px] text-[17px] leading-relaxed text-muted-3">
            Tell us a little about your school and the team at SkooBee will get
            back to you.
          </p>
        </div>
      </section>

      <section className="relative -mt-10 pb-20 md:pb-28">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2">
          <div className="card mx-auto w-full max-w-3xl p-8 md:p-10 lg:mx-0">
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              Tell us about your school
            </h2>
            <p className="mt-2 text-[15px] leading-6 text-muted">
              Fields marked with <span className="text-accent">*</span> are required.
            </p>

            <ContactForm />
          </div>

          <div className="flex flex-col gap-8">
            <div className="card overflow-hidden">
              <Image
                src="/assets/web-dashboard.png"
                alt="SkooBee school ERP dashboard preview"
                width={1440}
                height={900}
                className="h-auto w-full"
              />
            </div>

            <div className="card flex flex-col gap-6 p-8">
              <p className="label-mono uppercase text-primary">Get in touch</p>
              <h3 className="text-2xl font-bold tracking-tight text-ink">
                One system. One conversation.
              </h3>
              <p className="text-[15px] leading-6 text-muted">
                Whether you are ready to get started or just exploring, share
                your details and we will reach out with what fits your school.
              </p>
              <p className="text-sm leading-6 text-muted-2">
                SkooBee is built by {siteConfig.companyName}, a product studio
                for Indian schools.
              </p>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-line bg-white text-primary">
                  <Mail size={16} />
                </span>
                <div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[15px] font-semibold text-ink hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-sm text-muted-2">Reach us directly, any time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
