import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const principles = [
  {
    n: "01",
    title: "Evidenzbasierte Auswahl",
    body: "Inhaltsstoffe werden nur aufgenommen, wenn ausreichend Studiengrundlage vorliegt. Trendzutaten ohne belastbare Datenlage haben bei uns keinen Platz.",
  },
  {
    n: "02",
    title: "Fachliche Gegenprüfung",
    body: "Jede Formulierung durchläuft eine medizinische Plausibilitätsprüfung — auf Dosierung, Kombinationen und Wechselwirkungen.",
  },
  {
    n: "03",
    title: "Laufende Weiterentwicklung",
    body: "Sobald neue Studien die Datenlage verändern, können Rezepturen angepasst und optimiert werden. Wissenschaft bleibt in Bewegung — Ihre Produkte auch.",
  },
];

export function Science() {
  return (
    <Section id="science" background="cream-50">
      <Container>
        <SectionHeader
          eyebrow="Wissenschaft"
          title="Wissenschaft statt Trends."
          lead="Wir nehmen nur Inhaltsstoffe auf, deren Wirkung wissenschaftlich belegt ist. Keine Modezutaten, keine Marketing-Versprechen ohne Datenlage."
        />

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-[1120px] mx-auto">
          {principles.map((p) => (
            <div key={p.n} className="flex flex-col">
              <span aria-hidden className="h-[2px] w-[60px] bg-gold-500 mb-8" />
              <span className="font-serif text-[30px] leading-none text-warm-900 mb-4">
                {p.n}
              </span>
              <h3 className="text-[24px] md:text-[26px] leading-[1.2] font-serif font-medium text-warm-900 mb-5">
                {p.title}
              </h3>
              <p className="text-[16px] leading-[1.7] text-warm-700">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
