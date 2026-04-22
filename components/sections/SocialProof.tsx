import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SocialProof() {
  return (
    <Section id="social-proof" background="cream-50">
      <Container>
        <div className="max-w-[780px] mx-auto text-center">
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-700">
            Aus der Praxis
          </span>
          <h2 className="mt-5 text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.015em] text-warm-900 font-serif">
            Entwickelt mit Ärzten. Für Ärzte.
          </h2>
        </div>

        {/* Testimonial */}
        <figure className="mt-20 md:mt-24 max-w-[720px] mx-auto relative">
          <span
            aria-hidden
            className="absolute -top-6 -left-2 md:-top-10 md:-left-8 font-serif italic text-gold-400 select-none pointer-events-none leading-none"
            style={{ fontSize: "120px" }}
          >
            “
          </span>
          <span
            aria-hidden
            className="absolute -bottom-14 -right-2 md:-bottom-16 md:-right-4 font-serif italic text-gold-400 select-none pointer-events-none leading-none"
            style={{ fontSize: "120px" }}
          >
            ”
          </span>

          <blockquote className="relative">
            <p className="italic font-serif text-[22px] md:text-[26px] leading-[1.5] text-warm-900 text-center">
              Was uns überzeugt hat, ist die konsequente Individualisierung. Die
              Rezepturen sind nicht generisch, sondern auf unsere Patientengruppen
              zugeschnitten — wissenschaftlich solide und praktisch einsetzbar.
              Wir prüfen aktuell die Erweiterung unserer Produktlinie.
            </p>
          </blockquote>

          <figcaption className="mt-10 flex flex-col items-center gap-4">
            <span aria-hidden className="h-[2px] w-[60px] bg-gold-500" />
            <div className="text-center">
              <p className="text-[18px] md:text-[20px] font-serif font-medium text-warm-900">
                Univ.-Prof. Dr. Edvin Turkof
              </p>
              <p className="mt-1 text-[14px] md:text-[15px] text-warm-500">
                Ärztlicher Leiter, Centrum Aestheticum Wien
              </p>
            </div>
          </figcaption>
        </figure>

        {/* Neutral note */}
        <div className="mt-28 md:mt-32 max-w-[600px] mx-auto flex flex-col items-center gap-6">
          <span aria-hidden className="h-px w-[200px] bg-cream-300" />
          <p className="text-[15px] md:text-[16px] leading-[1.6] text-warm-500 text-center">
            Aktuell im Aufbau unserer Partnerpraxis-Community — Gespräche mit
            weiteren Ärztinnen und Ärzten aus Schönheitschirurgie, ästhetischer
            Medizin und Longevity-Medizin laufen.
          </p>
        </div>
      </Container>
    </Section>
  );
}
