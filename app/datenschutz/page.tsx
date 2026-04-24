import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Informationen zum Datenschutz nach DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <SiteShell>
        <div className="bg-cream-50 py-24 md:py-32">
          <Container size="narrow">
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-700">
              Rechtliches
            </span>
            <h1 className="mt-5 text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-warm-900 font-serif">
              Datenschutz
            </h1>

            <div className="mt-12 md:mt-16 flex flex-col gap-12">
              <Block title="Verantwortlicher">
                <p>WVA Business GmbH</p>
                <p>Heinrich Pevny Gasse 2/6, A-2460 Bruckneudorf, Österreich</p>
                <p className="mt-2">
                  Kontakt:{" "}
                  <a href="mailto:info@lonvy.at" className="underline">
                    info@lonvy.at
                  </a>
                  {" · "}
                  <a href="tel:+436607380058" className="underline">
                    +43 660 7380058
                  </a>
                </p>
              </Block>

              <Block title="Erhebung und Verarbeitung personenbezogener Daten">
                <p>
                  Wir erheben nur die Daten, die Sie uns aktiv über unser
                  Kontaktformular oder per E-Mail übermitteln. Dazu gehören Name,
                  Telefonnummer, ggf. Fachrichtung und der gewählte
                  Rückrufzeitpunkt.
                </p>
                <p>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                  (Vertragsanbahnung) bzw. lit. f DSGVO (berechtigtes Interesse
                  an der Beantwortung Ihrer Anfrage).
                </p>
              </Block>

              <Block title="Speicherdauer">
                <p>
                  Ihre Daten werden gelöscht, sobald der Zweck der Verarbeitung
                  entfällt, spätestens jedoch nach Ablauf gesetzlicher
                  Aufbewahrungsfristen.
                </p>
              </Block>

              <Block title="Ihre Rechte">
                <p>
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                  Einschränkung der Verarbeitung, Datenübertragbarkeit und
                  Widerspruch. Anfragen richten Sie bitte an info@lonvy.at.
                </p>
                <p>
                  Sie haben ebenfalls das Recht, sich bei der zuständigen
                  Aufsichtsbehörde zu beschweren.
                </p>
              </Block>

              <Block title="Cookies und Tracking">
                <p>
                  Diese Website nutzt ausschließlich technisch notwendige
                  Cookies. Es werden keine Tracking- oder
                  Marketing-Cookies gesetzt.
                </p>
              </Block>

              <Block title="Hosting und technische Dienste">
                <p>
                  Diese Website wird bei [Hoster] gehostet. Zum Zweck des
                  Aufrufs werden technische Zugriffsdaten (z.B. IP-Adresse) im
                  Server-Log gespeichert und nach kurzer Zeit gelöscht.
                </p>
              </Block>
            </div>

            <p className="mt-12 text-[13px] text-warm-500 italic">
              Diese Datenschutzerklärung wird laufend auf Basis der
              tatsächlich eingesetzten Dienste aktualisiert (Rücksprache mit
              Datenschutzbeauftragten empfohlen).
            </p>
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
    <section>
      <h2 className="text-[15px] font-medium uppercase tracking-[0.12em] text-warm-500 mb-4">
        {title}
      </h2>
      <div className="text-[16px] leading-[1.7] text-warm-900 flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
}
