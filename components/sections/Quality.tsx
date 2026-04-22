import { Factory, ShieldCheck, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const items = [
  {
    icon: Factory,
    title: "Produktion in Europa",
    body: "Herstellung in Europa unter GMP-Standards, mit lückenloser Chargen-Rückverfolgbarkeit.",
  },
  {
    icon: ShieldCheck,
    title: "Geprüfte Rohstoffe",
    body: "Rohstoffe aus geprüften, zertifizierten Quellen. Herkunft und Reinheit sind dokumentiert.",
  },
  {
    icon: RefreshCw,
    title: "Kontinuierliche Optimierung",
    body: "Rezepturen lassen sich an neue Studienlagen oder Patientenbedürfnisse anpassen.",
  },
];

export function Quality() {
  return (
    <Section id="quality" background="cream-50">
      <Container>
        <SectionHeader
          eyebrow="Qualität"
          title="Qualität, die Sie prüfen können."
          lead="Europäische Produktion unter GMP-Standards. Geprüfte Rohstoffe."
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] mx-auto">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-cream-100 rounded-2xl p-8 md:p-10 flex flex-col gap-6"
            >
              <Icon
                size={40}
                strokeWidth={1.5}
                className="text-gold-500"
                aria-hidden
              />
              <div>
                <h3 className="text-[22px] md:text-[24px] leading-[1.2] font-serif font-medium text-warm-900">
                  {title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-warm-700">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
