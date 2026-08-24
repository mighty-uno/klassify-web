import { Upload, Layers, MessageCircleQuestion, BookOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { OppaChat } from "@/components/OppaChat";

const steps = [
  {
    icon: Upload,
    title: "Upload your books",
    description:
      "Schools and teachers add textbooks, worksheets and lesson notes into a single digital library."
  },
  {
    icon: Layers,
    title: "Oppa learns every page",
    description:
      "SkooBee builds an AI layer over your own content, so answers stay grounded in what you actually teach."
  },
  {
    icon: MessageCircleQuestion,
    title: "Ask anything, any time",
    description:
      "Students and teachers chat naturally with Oppa and get clear, sourced answers from your books."
  }
];

const keywords = [
  "Chat with your books",
  "Your books, your AI tutor",
  "Upload once, ask forever",
  "Digital library, brought to life",
  "Answers grounded in your textbooks",
  "From shelf to study buddy"
];

export function Oppa() {
  return (
    <section id="oppa" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <SectionLabel index="06" title="Oppa · SkooBee AI" />
          <h2 className="mt-5 max-w-2xl text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px] md:leading-[1.08]">
            Turn every book in your school into a teacher.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            Meet <strong className="text-ink">Oppa</strong> — your SkooBee AI learning
            assistant. Schools and teachers upload their books, worksheets and
            lesson material. SkooBee builds an intelligence layer over them, and
            students and teachers start asking questions.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {keywords.map((kw, i) => (
            <Reveal key={kw} delay={i * 0.04}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-3.5 py-1.5 text-sm font-medium text-ink">
                <BookOpen size={13} className="text-primary" />
                {kw}
              </span>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-canvas p-6 transition-shadow duration-300 hover:shadow-lift">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <step.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <OppaChat />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
