import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, lastUpdated, children }: LegalPageProps) {
  return (
    <section className="bg-canvas pb-24 pt-[72px]">
      <div className="container-page">
        <div className="mt-12 rounded-3xl border border-line bg-white px-6 py-12 md:px-14 md:py-16">
          <p className="label-mono uppercase text-primary">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-[-1.8px] text-ink md:text-[44px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
            {intro}
          </p>
          <p className="mt-6 inline-flex rounded-full border border-line bg-canvas px-4 py-1.5 text-sm text-muted-2">
            Last updated: {lastUpdated}
          </p>

          <div className="prose-legal mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
