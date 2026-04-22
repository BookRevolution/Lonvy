import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const points = [
  {
    title: "Keine Entwicklungskosten",
    body: "Rezepturentwicklung, Studienprüfung und Qualitätssicherung übernehmen wir vollständig.",
  },
  {
    title: "Keine Lagerhaltung",
    body: "Produktion und Logistik laufen über uns. Sie bekommen, was Sie abverkaufen.",
  },
  {
    title: "Flexible Modelle",
    body: "Abrechnung und Abnahme werden individuell mit Ihnen abgestimmt — passend zu Ihrer Praxisgröße.",
  },
];

export function BusinessModel() {
  return (
    <Section id="business-model" background="cream-100">
      <Container>
        <SectionHeader
          eyebrow="Geschäftsmodell"
          title="Wirtschaftlich sinnvoll — risikoarm strukturiert."
          lead="Ihre Produktlinie generiert zusätzliche Einnahmen, ohne dass Sie Entwicklung, Lager oder Marketing selbst aufbauen müssen. Die Details des Modells besprechen wir individuell im Erstgespräch."
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1120px] mx-auto">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-cream-50 rounded-2xl p-8 md:p-10 flex flex-col gap-4"
            >
              <h3 className="text-[22px] md:text-[24px] leading-[1.2] font-serif font-medium text-warm-900">
                {p.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-warm-700">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
