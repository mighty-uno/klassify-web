"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const faqs = [
  {
    question: "How long does it take to set up Klassify for our school?",
    answer:
      "Most schools go live in under two weeks. Our onboarding team helps import classes, staff and students, and trains your team so day one feels familiar."
  },
  {
    question: "Does the voice attendance work for large classrooms?",
    answer:
      "Yes. Teachers read out names and Klassify captures the roll call in about three seconds per student, flagging absentees and notifying parents instantly — even for full-size classrooms."
  },
  {
    question: "Is our student and parent data secure?",
    answer:
      "Absolutely. Klassify follows standard security practices for education data, including encrypted storage and access controls, so only authorised staff can view records. See our Privacy Policy for full details."
  },
  {
    question: "Will our office staff need to change how they work?",
    answer:
      "No. Klassify is designed around the workflows schools already follow, so teams adopt it quickly. The AI quietly automates the repetitive parts while people keep their familiar routines."
  },
  {
    question: "Can parents use Klassify on their phones?",
    answer:
      "Yes. Parents get a mobile-friendly portal with daily attendance updates, fee status and progress insights — no separate app installation required."
  },
  {
    question: "What does Klassify cost?",
    answer:
      "Pricing is per student, per month and depends on your school's size and selected plan. Book a demo and we'll share a clear quote tailored to your school."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="08" title="FAQ" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Questions, answered.
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
