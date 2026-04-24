import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fields = [
  {
    specialty: "Schönheitschirurgie & ästhetische Medizin",
    items: [
      "Mikronährstoffe mit Bezug zu Haut und Bindegewebe (Kollagen, Hyaluronsäure, Vitamin C, Zink)",
      "Rezepturen zur Begleitung nach Eingriffen",
      "Anti-Oxidanzien-Komplexe mit Bezug zur Hautqualität",
      "Mikronährstoffe für Haar und Nägel",
    ],
  },
  {
    specialty: "Gynäkologie & Frauenheilkunde",
    items: [
      "Mikronährstoffe für Frauen in verschiedenen Lebensphasen",
      "Eisen- und Folsäure-Rezepturen",
      "Mikronährstoffe mit Bezug zum Knochenstoffwechsel (Vitamin D, K2, Kalzium)",
      "Rezepturen für die Menopause-Phase",
    ],
  },
  {
    specialty: "Longevity- und Anti-Aging-Medizin",
    items: [
      "Mitochondrien-Support (CoQ10, PQQ, Acetyl-L-Carnitin)",
      "NAD+-Vorstufen mit Bezug zur zellulären Regeneration",
      "Mikronährstoffe mit Bezug zur kognitiven Funktion (Omega-3, Phospholipide)",
      "Rezepturen mit Bezug zum Immunsystem",
    ],
  },
  {
    specialty: "Allgemein- und Präventionsmedizin",
    items: [
      "Basisversorgung Mikronährstoffe (B-Komplex, D3+K2, Magnesium)",
      "Prä- und Probiotika mit Bezug zur Darmflora",
      "Mikronährstoffe mit Bezug zu Schlaf und Stressregulation",
      "Rezepturen mit Bezug zum Herz-Kreislauf-System",
    ],
  },
];

export function ExampleFormulas() {
  return (
    <Section id="example-formulas" background="cream-50">
      <Container>
        <SectionHeader
          eyebrow="Beispiele"
          title="So könnte Ihre Produktlinie aussehen."
          lead="Die folgenden Beispiele zeigen typische Rezepturen für verschiedene Fachgebiete, sie dienen der Illustration und stellen keine gesundheitsbezogenen Versprechen dar. Jede Praxis erhält am Ende eine eigene, individuell entwickelte Linie."
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1120px] mx-auto">
          {fields.map((field) => (
            <div
              key={field.specialty}
              className="bg-cream-100 rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-[20px] md:text-[22px] leading-[1.25] font-serif font-medium text-warm-900 mb-6">
                {field.specialty}
              </h3>
              <ul className="flex flex-col gap-3">
                {field.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[15px] md:text-[16px] leading-[1.55] text-warm-700"
                  >
                    <span
                      aria-hidden
                      className="shrink-0 mt-[0.6em] h-px w-4 bg-gold-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 md:mt-20 max-w-[720px] mx-auto text-center text-[13px] md:text-[14px] leading-[1.6] text-warm-500 italic">
          Alle genannten Inhaltsstoffe sind Beispiele und werden individuell je
          Rezeptur auf Basis aktueller Studienlage ausgewählt und dosiert. Keine
          dieser Listen ist eine Produktzusage.
        </p>
      </Container>
    </Section>
  );
}
