import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const items = [
  "Verpackung mit Ihrem Praxis-Logo",
  "Individuelles Etikett und Produktname",
  "Patientenfolder und Schulungsunterlagen",
  "Verkaufsmaterial für Ihr Team",
  "Digitale Produktseiten mit QR-Code (optional)",
];

export function WhiteLabel() {
  return (
    <Section id="white-label" background="cream-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Product mockup */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
              <Image
                src="/images/white-label-example.webp"
                alt="Beispiel einer White-Label-Produktlinie mit individuellem Praxis-Branding"
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-5 text-center text-[13px] text-warm-500">
              Beispiel-Visualisierung
            </p>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:pl-8">
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-800">
              White-Label-Konzept
            </span>

            <h2 className="mt-4 text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-warm-900 font-serif">
              Ihre Marke.
              <br />
              Ihre Produkte.
              <br />
              Ihre Identität.
            </h2>

            <p className="mt-8 text-[17px] md:text-[18px] leading-[1.6] text-warm-700 max-w-[460px]">
              Private-Label-Nahrungsergänzung unter Ihrer Praxis-Marke. Lonvy
              bleibt im Hintergrund: auf der Verpackung, im Regal Ihrer Praxis
              und in den Unterlagen für Ihre Patientinnen und Patienten steht
              Ihr Name.
            </p>

            <div className="mt-10 md:mt-12">
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-warm-500">
                Was zu Ihrer Linie gehört
              </span>
              <ul className="mt-5 flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[16px] md:text-[17px] leading-[1.5] text-warm-900">
                    <span
                      aria-hidden
                      className="shrink-0 mt-[0.65em] h-px w-6 bg-gold-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-12 italic font-serif text-[20px] md:text-[22px] leading-[1.45] text-warm-900 max-w-[480px] border-l-2 border-gold-500 pl-5">
              Sie positionieren Ihre Praxis als Marke, wir liefern, was dahinter
              steht.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

