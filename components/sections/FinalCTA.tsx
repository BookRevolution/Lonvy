import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BookingCTA } from "@/components/ui/BookingCTA";

export function FinalCTA() {
  return (
    <Section id="final-cta" background="cream-100">
      <Container>
        <div className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-8">
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-800">
            Ihr Erstgespräch
          </span>

          <h2 className="text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-warm-900 font-serif">
            Zeit für Ihre eigene Supplement-Linie?
          </h2>

          <p className="text-[17px] md:text-[18px] leading-[1.6] text-warm-700 max-w-[560px]">
            Im Erstgespräch klären wir, welche Produkte für Ihre Praxis Sinn
            ergeben und wie die Zusammenarbeit aussehen könnte. Kostenfrei und
            unverbindlich.
          </p>

          <div className="mt-4 flex flex-col items-center gap-5">
            <BookingCTA size="lg" />
            <a
              href="mailto:kontakt@lonvy.de"
              className="text-[15px] text-warm-500 hover:text-warm-900 transition-colors underline-offset-4 hover:underline"
            >
              oder direkt per E-Mail: kontakt@lonvy.de
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
