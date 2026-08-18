import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const testimonials = [
  {
    quote:
      "Our office team used to spend the whole first period chasing attendance registers. Now it is done before the second bell rings.",
    name: "R. Menon",
    role: "Principal, CBSE school, Kochi"
  },
  {
    quote:
      "The voice roll call genuinely takes three seconds. I have 30 extra minutes every morning to actually prepare my lessons.",
    name: "A. Sharma",
    role: "Class teacher, Grade 6, Jaipur"
  },
  {
    quote:
      "Fee reminders go out automatically and the ledger reconciles itself. Parents are calmer and so is our accounts desk.",
    name: "K. Verma",
    role: "School accountant, Pune"
  },
  {
    quote:
      "I get a message the moment my daughter reaches school, and her report card tells me exactly where she needs help.",
    name: "P. Nair",
    role: "Parent, Bengaluru"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="06" title="Loved by schools" />
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Trusted by the people who run schools.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="card flex h-full flex-col gap-5 p-8">
                <Quote size={26} className="text-primary/40" />
                <blockquote className="text-[17px] leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto border-t border-line pt-4">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
