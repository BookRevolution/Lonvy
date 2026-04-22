import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Konfigurator } from "@/components/konfigurator/Konfigurator";

export const metadata: Metadata = {
  title: "Praxis-Konfigurator",
  description:
    "Stellen Sie Ihre individuelle Supplement-Linie in wenigen Minuten zusammen. Wählen Sie Fachrichtung, Patientenprofil und Schwerpunkte — wir formulieren eine Rezeptur, die zu Ihrer Praxis passt.",
  alternates: { canonical: "/konfigurator" },
};

export default function KonfiguratorPage() {
  return (
    <>
      <SiteShell>
        {/* Intro */}
        <section className="bg-cream-100 pt-16 pb-10 md:pt-24 md:pb-14">
          <Container>
            <div className="max-w-[820px]">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-800">
                Praxis-Konfigurator
              </span>
              <h1 className="mt-5 font-serif font-light text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.025em] text-warm-900">
                Ihre Rezeptur —{" "}
                <em className="italic text-warm-700">live konfiguriert.</em>
              </h1>
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-warm-700 max-w-[680px]">
                Fünf Schritte. Von der Fachrichtung bis zum fertigen Etikett.
                Unsere Formulierer arbeiten mit Ihnen live an einer Rezeptur,
                die genau zu Ihrer Praxis passt — mit Ihrem Logo, Ihrem
                Produktnamen, Ihrer Handschrift.
              </p>
              <p className="mt-4 text-[13px] leading-[1.6] text-warm-500 italic max-w-[680px]">
                Die hier gezeigte Rezeptur ist eine Vorschau und ersetzt keine
                individuelle ärztliche Beratung. Alle Preise netto, zzgl.
                MwSt., Mindestabnahme 50 Dosen.
              </p>
            </div>
          </Container>
        </section>

        {/* Konfigurator */}
        <Konfigurator />
      </SiteShell>
      <Footer />
    </>
  );
}
