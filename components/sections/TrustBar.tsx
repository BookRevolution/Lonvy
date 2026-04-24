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
                belastbar sein und zur Praxis passen, in der sie zum Einsatz
                kommen. Dafür steht Lonvy.
              </p>
            </blockquote>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div
            className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-cream-50 ring-1 ring-gold-500/30"
            style={{ boxShadow: "0 30px 60px -20px rgba(42, 37, 32, 0.25)" }}
          >
            <video
              src="/videos/lara.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Dr. Lara Vadlau, animierter Titel"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
