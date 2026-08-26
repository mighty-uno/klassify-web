"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const faqs = [
  {
    question: "What does it cost to join Bee-Bud?",
    answer:
      "Nothing. Joining is free — there are no fees or commitments. You apply, we review, and if there's a fit, we get you flying."
  },
  {
    question: "Who can apply?",
    answer:
      "We welcome individual freelancers and resellers / IT distributors who work with schools — anywhere in India."
  },
  {
    question: "Do I need a sales background?",
    answer:
      "No. If you understand schools and can build relationships, we'll handle the rest. You get a training kit, demo access, and the SkooBee team behind every deal."
  },
  {
    question: "How do payments work?",
    answer:
      "Bee-Buds earn recurring honey on the schools they bring in — month after month, while those schools use SkooBee. Exact honey rates are shared after you apply, so every Bee-Bud starts with a clear plan."
  },
  {
    question: "Is my region exclusive?",
    answer:
      "Territories are claim-based. Build your portfolio of schools and you can grow into exclusive ownership of your region."
  },
  {
    question: "Is there a complex program to learn?",
    answer:
      "No. There are no tiers or complex structures — it's one simple model. Bring schools into the hive and receive a honey drop every month, while those schools use SkooBee."
  },
  {
    question: "What support will I get?",
    answer:
      "SkooBee handles onboarding, training, and school support. You get a partner dashboard, co-branded marketing assets, and priority support as you grow."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="bee-bud-faq" className="section-pad bg-canvas">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="04" title="Bee-Bud FAQ" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Questions from the swarm.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-ink">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted-2 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
