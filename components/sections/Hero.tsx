import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookingCTA } from "@/components/ui/BookingCTA";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-cream-50 pt-16 pb-20 md:pt-32 md:pb-40"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-800">
              Für Ärzte und Praxen
            </span>

            <h1 className="text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-warm-900 font-serif max-w-[720px]">
              Ihre eigene Supplement-Linie.
              <br />
              Entwickelt mit Ihnen.
              <br />
              Für Ihre Praxis.
            </h1>

            <p className="text-[18px] md:text-[20px] leading-[1.55] text-warm-700 max-w-[540px]">
              Individuelle Rezepturen, wissenschaftlich fundiert, unter Ihrer
              Praxis-Marke. Sie entscheiden mit — wir kümmern uns um Forschung,
              Produktion und Lieferung.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-2">
              <BookingCTA size="lg" />
              <a
                href="mailto:kontakt@lonvy.de"
                className="text-[15px] text-warm-500 hover:text-warm-900 transition-colors underline-offset-4 hover:underline"
              >
                oder kontakt@lonvy.de
              </a>
            </div>
          </div>

          {/* Product hero shot */}
          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[520px] aspect-[16/10] rounded-[24px] overflow-hidden">
              <Image
                src="/images/hero-product.webp"
                alt="Lonvy Supplement — Premium-Produktlinie für Ärztepraxen"
                width={1200}
                height={750}
                priority
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-20 lg:mt-28">
          <div className="flex flex-col items-center gap-2 text-warm-500 animate-[gentle-bounce_2.6s_ease-in-out_infinite]">
            <span className="text-[12px] font-medium uppercase tracking-[0.12em]">
              weiter
            </span>
            <ChevronDown size={18} strokeWidth={1.5} />
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
