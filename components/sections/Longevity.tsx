import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fields = [
  {
    title: "Zellgesundheit",
    body: "Mitochondrienfunktion, oxidativer Stress, zelluläre Energieproduktion: Wirkstoffe mit klarer Evidenzlage.",
  },
  {
    title: "Hormonelle Balance",
    body: "Unterstützung bei altersbedingten hormonellen Veränderungen, speziell in der ästhetischen und gynäkologischen Praxis.",
  },
  {
    title: "Regeneration & Vitalität",
    body: "Bewegungsapparat, Schlafqualität, Immunfunktion: Bausteine für langfristige Leistungsfähigkeit.",
  },
];

export function Longevity() {
  return (
    <section id="longevity" className="w-full">
      {/* Part A — Anwendungsfelder */}
      <div className="bg-cream-50 pt-24 md:pt-40 pb-16 md:pb-20">
        <Container>
          <SectionHeader
            eyebrow="Longevity"
            title="Longevity: mehr als ein Trend."
            lead="Gesundes Altern rückt in der modernen Medizin immer stärker in den Fokus. Unsere Longevity-Linien unterstützen Prävention, Zellgesundheit und die Themen, die Ihre Patientinnen und Patienten heute bewegen."
          />

          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-[1120px] mx-auto">
            {fields.map((f) => (
              <div key={f.title} className="flex flex-col">
                <span aria-hidden className="h-[2px] w-[60px] bg-gold-500 mb-6" />
                <h3 className="text-[22px] md:text-[24px] leading-[1.2] font-serif font-medium text-warm-900 mb-4">
                  {f.title}
                </h3>
                <p className="text-[16px] leading-[1.7] text-warm-700">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Part B — Expertise mit Buchcover */}
      <div className="bg-cream-100 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-[1120px] mx-auto">
            {/* Book cover */}
            <div className="lg:col-span-5 flex justify-center">
              <BookCoverDisplay />
            </div>

            {/* Text */}
            <div className="lg:col-span-7 lg:pl-6">
              <p className="italic font-serif text-[24px] md:text-[28px] leading-[1.3] text-warm-900 font-medium max-w-[520px]">
                Longevity ist keine Marketing-Kategorie bei Lonvy: es ist
                fachliche Basis.
              </p>

              <div className="mt-8 flex flex-col gap-5 max-w-[520px]">
                <p className="text-[17px] leading-[1.65] text-warm-700">
                  Dr. med. univ. Lara Vadlau ist Autorin von{" "}
                  <em className="font-serif text-warm-900 not-italic">
                    „Die Alterslüge: Die effektivsten Longevity-Strategien für
                    ein längeres gesundes Leben"
                  </em>{" "}
                  (RBM Publishing).
                </p>
                <p className="text-[17px] leading-[1.65] text-warm-700">
                  Als Ärztin und Olympiasiegerin verbindet sie wissenschaftliche
                  Fundierung mit gelebter Spitzenleistung. Diese Perspektive
                  prägt die Entwicklung unserer Produktlinien.
                </p>
                <Link
                  href="/studien"
                  className="inline-flex items-center gap-2 mt-2 text-[15px] font-medium text-gold-800 hover:text-gold-700 underline underline-offset-4 decoration-gold-500/60 hover:decoration-gold-500 w-fit"
                >
                  Studien zu den Wirkstoff-Protokollen
                  <ArrowUpRight size={16} strokeWidth={2} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function BookCoverDisplay() {
  return (
    <div className="group relative">
      <div
        className="relative transition-transform duration-[400ms] ease-out"
        style={{
          transform: "rotate(-3deg)",
        }}
      >
        <Image
          src="/images/die-alterslue-cover.webp"
          alt="Buchcover Die Alterslüge von Dr. med. univ. Lara Vadlau"
          width={700}
          height={1050}
          className="rounded-[4px] shadow-[0_30px_60px_rgba(42,37,32,0.25)] w-[240px] md:w-[300px] lg:w-[320px] h-auto"
        />
      </div>
      <p className="mt-6 text-center text-[13px] text-warm-500 tracking-wide">
        Erhältlich bei RBM Publishing
      </p>

      <style>{`
        .group:hover > div:first-child {
          transform: rotate(0deg) !important;
        }
      `}</style>
    </div>
  );
}
