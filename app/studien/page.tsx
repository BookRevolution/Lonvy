import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { studyGroups, totalStudies, type Study } from "@/lib/studies";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Studien & Evidenz",
  description: `${totalStudies} peer-reviewed Studien — die wissenschaftliche Grundlage unserer Wirkstoff-Protokolle. Alle Referenzen mit direkten Links zu den Originalquellen.`,
};

export default function StudienPage() {
  return (
    <>
      <SiteShell>
        {/* Header */}
        <section className="bg-cream-100 pt-20 pb-16 md:pt-32 md:pb-24">
          <Container>
            <div className="max-w-[820px]">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-700">
                Evidenzbasierte Referenzen
              </span>
              <h1 className="mt-5 text-[48px] md:text-[72px] leading-[1.02] tracking-[-0.025em] text-warm-900 font-serif">
                {totalStudies} Studien.
                <br />
                <em className="font-serif text-warm-700">Ein Protokoll.</em>
              </h1>
              <p className="mt-8 text-[18px] md:text-[20px] leading-[1.55] text-warm-700 max-w-[680px]">
                Unsere Rezepturen sind keine Marketing-Konstrukte — sie basieren
                auf peer-reviewed Studien. Hier finden Sie alle Referenzen, die
                den Wirkstoff-Protokollen zugrunde liegen: mit Kernaussagen,
                Studiendesign und direkten Links zu den Originalquellen.
              </p>
              <p className="mt-6 text-[14px] leading-[1.6] text-warm-500 max-w-[680px] italic">
                Zusammenstellung für medizinisches Fachpublikum. Die dargestellten
                Studien dienen der wissenschaftlichen Referenz, nicht als
                Heilversprechen oder Therapieempfehlung.
              </p>
            </div>
          </Container>
        </section>

        {/* Studies by category */}
        <section className="bg-cream-50 pt-8 pb-24 md:pb-32">
          <Container>
            <div className="max-w-[860px] mx-auto flex flex-col gap-20 md:gap-28">
              {studyGroups.map((group, idx) => (
                <div
                  key={group.n}
                  className={cn(
                    "flex flex-col gap-10",
                    idx > 0 && "pt-10 border-t border-cream-300/70",
                  )}
                >
                  {/* Category header */}
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
                    <div className="flex items-baseline gap-5 md:gap-7">
                      <span className="font-serif text-[20px] md:text-[22px] text-gold-700 leading-none">
                        {group.n}
                      </span>
                      <h2 className="text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.015em] text-warm-900 font-serif">
                        {group.category}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 md:pb-2 md:max-w-[360px] md:justify-end">
                      {group.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.1em] text-warm-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Studies */}
                  <div className="flex flex-col gap-5">
                    {group.studies.map((study) => (
                      <StudyCard key={study.ref + study.title} study={study} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Footer note */}
        <section className="bg-cream-100 py-20 md:py-28">
          <Container>
            <div className="max-w-[680px] mx-auto text-center flex flex-col items-center gap-6">
              <span aria-hidden className="h-[2px] w-[60px] bg-gold-500" />
              <p className="text-[16px] md:text-[17px] leading-[1.65] text-warm-700">
                {totalStudies} peer-reviewed Studien · direkte Links zu den
                Originalquellen. Die Referenzliste wird fortlaufend erweitert,
                sobald neue Daten die Protokolle ergänzen oder ersetzen.
              </p>
              <p className="mt-2 text-[14px] leading-[1.6] text-warm-500">
                Newsletter für neue Studien?{" "}
                <a
                  href="mailto:kontakt@lonvy.de?subject=Newsletter%20Studien"
                  className="text-gold-700 underline underline-offset-4 hover:text-gold-600"
                >
                  kontakt@lonvy.de
                </a>
              </p>
            </div>
          </Container>
        </section>
      </SiteShell>
      <Footer />
    </>
  );
}

/* --- Study Card --- */

const evidenceClasses: Record<Study["evidence"], string> = {
  hoch: "bg-gold-400/25 text-gold-700 border-gold-500/40",
  "moderat-hoch": "bg-gold-400/15 text-gold-700 border-gold-500/30",
  moderat: "bg-cream-200 text-warm-700 border-cream-300",
};

const evidenceLabel: Record<Study["evidence"], string> = {
  hoch: "Hoch",
  "moderat-hoch": "Moderat–Hoch",
  moderat: "Moderat",
};

function StudyCard({ study }: { study: Study }) {
  return (
    <a
      href={study.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-cream-100 hover:bg-cream-200/60 transition-colors rounded-2xl p-7 md:p-9 border border-cream-300/50"
    >
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-5">
        <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.1em] text-gold-700">
          {study.ref}
        </span>
        <span
          aria-hidden
          className="hidden md:inline-block w-1 h-1 rounded-full bg-warm-300"
        />
        <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.08em] text-warm-500 px-2 py-1 bg-cream-50 rounded-md border border-cream-300/70">
          {study.type}
        </span>
        <span
          className={cn(
            "text-[11px] md:text-[12px] font-medium uppercase tracking-[0.08em] px-2 py-1 rounded-md border",
            evidenceClasses[study.evidence],
          )}
        >
          Evidenz: {evidenceLabel[study.evidence]}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[19px] md:text-[22px] leading-[1.25] font-serif font-medium text-warm-900 group-hover:text-gold-700 transition-colors">
        {study.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-[15px] md:text-[16px] leading-[1.65] text-warm-700">
        {study.description}
      </p>

      {/* Footer row */}
      <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-cream-300/60">
        <span className="text-[12px] md:text-[13px] italic text-warm-500">
          {study.citation}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.08em] text-gold-700 group-hover:text-gold-600">
          {study.linkLabel}
          <ArrowUpRight size={14} strokeWidth={2} />
        </span>
      </div>
    </a>
  );
}
