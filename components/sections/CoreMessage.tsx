import { Stethoscope, Target, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: Stethoscope,
    label: "Behandlungen",
    title: "Passend zu Ihrem Praxis-Alltag",
    body: "Welche Eingriffe und Therapien dominieren Ihre Praxis? Die Rezepturen unterstützen genau das.",
  },
  {
    icon: Target,
    label: "Spezialisierung",
    title: "Abgestimmt auf Ihr Fachgebiet",
    body: "Schönheitschirurgie, ästhetische Medizin, Gynäkologie, Longevity-Medizin — jedes Feld hat eigene Anforderungen.",
  },
  {
    icon: Users,
    label: "Patientengruppen",
    title: "Für die Menschen, die zu Ihnen kommen",
    body: "Altersgruppen, Beschwerdebilder, Anwendungskontexte — die Formulierungen werden darauf abgestimmt.",
  },
];

export function CoreMessage() {
  return (
    <Section id="core-message" background="cream-50">
      <Container>
        <SectionHeader
          title={
            <>
              Keine Rezeptur von der Stange.
              <br />
              <span className="text-warm-700">
                Ihre Rezepturen — an Ihre Praxis angepasst.
              </span>
            </>
          }
          lead="Wir entwickeln jede Rezeptur individuell: basierend auf Ihren Behandlungen, Ihrer Spezialisierung und den Bedürfnissen Ihrer Patientinnen und Patienten. Sie entscheiden mit, welche Inhaltsstoffe Teil Ihrer Produkte werden."
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map(({ icon: Icon, label, title, body }) => (
            <div
              key={label}
              className="bg-cream-100 rounded-2xl p-8 md:p-10 flex flex-col gap-6"
            >
              <Icon
                size={44}
                strokeWidth={1.5}
                className="text-gold-500"
                aria-hidden
              />
              <div>
                <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-gold-800">
                  {label}
                </span>
                <h3 className="mt-3 text-[22px] leading-[1.2] font-serif font-medium text-warm-900">
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
