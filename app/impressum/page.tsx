import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <SiteShell>
        <div className="bg-cream-50 py-24 md:py-32">
          <Container size="narrow">
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-700">
              Rechtliches
            </span>
            <h1 className="mt-5 text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-warm-900 font-serif">
              Impressum
            </h1>

            <div className="mt-12 md:mt-16 prose-lonvy">
              <Block title="Medieninhaberin & Anbieter">
                <p>WVA Business GmbH</p>
                <p className="mt-4">Heinrich Pevny Gasse 2/6</p>
                <p>A-2460 Bruckneudorf</p>
                <p>Österreich</p>
              </Block>

              <Block title="Kontakt">
                <p>
                  E-Mail:{" "}
                  <a href="mailto:info@lonvy.at" className="underline">
                    info@lonvy.at
                  </a>
                </p>
                <p>
                  Telefon:{" "}
                  <a href="tel:+436607380058" className="underline">
                    +43 660 7380058
                  </a>
                </p>
              </Block>

              <Block title="Vertretungsberechtigte Geschäftsführung">
                <p>[Name Geschäftsführung]</p>
              </Block>

              <Block title="Registereintragung">
                <p>Firmenbuchnummer: FN 591894h</p>
                <p>Firmenbuchgericht: [Landesgericht]</p>
                <p>EUID: ATBRA.591894-000</p>
              </Block>

              <Block title="Umsatzsteuer-Identifikationsnummer">
                <p>UID-Nr.: [ATU ...]</p>
              </Block>

              <Block title="Verantwortlich für den Inhalt">
                <p>[Name], Adresse wie oben</p>
              </Block>

              <Block title="Haftungshinweis">
                <p className="text-[15px] leading-[1.7] text-warm-700">
                  Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte übernehmen wir jedoch keine Gewähr.
                </p>
              </Block>
            </div>
          </Container>
        </div>
      </SiteShell>
      <Footer />
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-[15px] font-medium uppercase tracking-[0.12em] text-warm-500 mb-4">
        {title}
      </h2>
      <div className="text-[16px] leading-[1.7] text-warm-900 flex flex-col gap-1">
        {children}
      </div>
    </section>
  );
}
