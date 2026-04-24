import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    n: "01",
    title: "Erstgespräch",
    body: "Wir analysieren gemeinsam Ihre Praxis: welche Behandlungen dominieren, welche Patientengruppen Sie betreuen, welche Lücken Sie sehen. Kostenfrei und unverbindlich.",
  },
  {
    n: "02",
    title: "Rezeptur-Vorschlag",
    body: "Auf Basis des Gesprächs erstellen wir eine Liste möglicher Präparate, welche Wirkstoffe medizinisch Sinn ergeben, welche Kombinationen zu Ihren Patienten passen.",
  },
  {
    n: "03",
    title: "Individuelle Abstimmung",
    body: "Sie entscheiden, welche Produkte in Ihre Linie gehen und welche Inhaltsstoffe bleiben oder wegfallen. Nichts wird ohne Ihre Freigabe entwickelt.",
  },
  {
    n: "04",
    title: "Finale Rezeptur",
    body: "Wir entwickeln die fertigen Rezepturen: studienbasiert, mit geprüften Rohstoffen und in passender Dosierung.",
  },
  {
    n: "05",
    title: "Produktion & Auslieferung",
    body: "Produktion in Europa. Verpackung mit Ihrem Praxis-Logo. Auf Wunsch mit Patientenfolder, Schulungsmaterial und Verkaufsunterstützung.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" background="cream-100">
      <Container>
        <SectionHeader
          eyebrow="Der Ablauf"
          title="Gemeinsam bauen wir Ihre Supplement-Linie."
          lead="In fünf Schritten vom Erstgespräch bis zur fertigen Produktlinie: transparent, strukturiert und immer mit Ihnen am Steuer."
        />

        <div className="mt-16 md:mt-24 mx-auto max-w-[820px]">
          <ol className="relative flex flex-col">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <li key={step.n} className="relative pl-20 md:pl-28 pb-12 md:pb-14 last:pb-0">
                  {/* Vertical dotted line */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-[22px] md:left-[30px] top-[56px] md:top-[68px] bottom-0 w-0 border-l-[1.5px] border-dashed border-gold-400"
                    />
                  )}

                  {/* Number badge */}
                  <div className="absolute left-0 top-0 w-[44px] h-[44px] md:w-[60px] md:h-[60px] rounded-full bg-cream-50 border-[1.5px] border-gold-500 flex items-center justify-center">
                    <span className="font-serif text-[18px] md:text-[22px] text-gold-800 leading-none">
                      {step.n}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-3">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="hidden md:block h-px w-[28px] bg-gold-500" />
                      <h3 className="text-[22px] md:text-[26px] leading-[1.2] font-serif font-medium text-warm-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[16px] md:text-[17px] leading-[1.65] text-warm-700 max-w-[560px]">
                      {step.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
