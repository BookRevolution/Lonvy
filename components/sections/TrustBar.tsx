import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";

export function TrustBar() {
  return (
    <section id="trust" className="w-full bg-cream-100 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Portrait */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <Portrait
              size={220}
              src="/images/lara-portrait.webp"
              alt="Dr. med. univ. Lara Vadlau"
              priority
              className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-9 flex flex-col gap-6">
            <div>
              <h2 className="text-[26px] md:text-[32px] leading-[1.15] text-warm-900 font-serif font-medium">
                Dr. med. univ. Lara Vadlau
              </h2>
              <p className="mt-3 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.08em] text-gold-800">
                Ärztin · Olympiasiegerin · Longevity-Autorin · Mitgründerin
              </p>
            </div>

            <blockquote className="relative max-w-[640px]">
              <span
                className="absolute -top-4 -left-3 md:-top-6 md:-left-4 font-serif italic text-gold-400 select-none pointer-events-none"
                style={{ fontSize: "80px", lineHeight: 1 }}
                aria-hidden
              >
                “
              </span>
              <p className="relative italic font-serif text-[20px] md:text-[24px] leading-[1.5] text-warm-900">
                Premium-Supplemente müssen zwei Dinge leisten: wissenschaftlich
                belastbar sein — und zur Praxis passen, in der sie zum Einsatz
                kommen. Dafür steht Lonvy.
              </p>
            </blockquote>

            <div className="mt-4 md:mt-6 pt-6 border-t border-cream-300/70">
              <p className="text-[15px] md:text-[16px] leading-[1.6] text-warm-700 max-w-[620px]">
                In ärztlicher Partnerschaft mit dem{" "}
                <a
                  href="https://www.centrum-aestheticum.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-900 underline underline-offset-4 decoration-gold-500 hover:decoration-gold-600"
                >
                  Centrum Aestheticum Wien
                </a>
                , unter der Leitung von Univ.-Prof. Dr. Edvin Turkof.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
