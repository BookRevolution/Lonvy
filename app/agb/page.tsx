import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der WVA Business GmbH (Lonvy) für Leistungen im Bereich White-Label-Nahrungsergänzung gegenüber Unternehmern.",
  alternates: { canonical: "/agb" },
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <>
      <SiteShell>
        <div className="bg-cream-50 py-24 md:py-32">
          <Container size="narrow">
            <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-700">
              Rechtliches
            </span>
            <h1 className="mt-5 text-[40px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-warm-900 font-serif">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="mt-6 text-[15px] leading-[1.7] text-warm-500">
              Stand: 30. April 2026 · Fassung 1.0
            </p>

            <div className="mt-12 md:mt-16 flex flex-col gap-12">
              <Block title="§ 1 Geltungsbereich, Begriffsbestimmungen">
                <p>
                  (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend
                  &bdquo;AGB&ldquo;) gelten für sämtliche Geschäftsbeziehungen
                  zwischen der WVA Business GmbH, Heinrich Pevny Gasse 2/6,
                  A-2320 Mannswörth, FN 591894h (nachfolgend
                  &bdquo;Lonvy&ldquo; oder &bdquo;Auftragnehmerin&ldquo;) und
                  ihren Vertragspartnern (nachfolgend &bdquo;Kunde&ldquo; oder
                  &bdquo;Auftraggeber&ldquo;).
                </p>
                <p>
                  (2) Lonvy erbringt ihre Leistungen ausschließlich gegenüber
                  Unternehmern im Sinne des § 1 UGB sowie gegenüber juristischen
                  Personen des öffentlichen Rechts. Mit Verbrauchern im Sinne
                  des § 1 KSchG werden Verträge nicht geschlossen.
                </p>
                <p>
                  (3) Diese AGB gelten in der bei Vertragsschluss gültigen
                  Fassung als Rahmen für sämtliche künftigen Geschäfte zwischen
                  den Parteien, auch wenn nicht in jedem Einzelfall erneut auf
                  sie Bezug genommen wird.
                </p>
                <p>
                  (4) Abweichende, entgegenstehende oder ergänzende
                  Geschäftsbedingungen des Kunden werden nicht Vertragsbestand­
                  teil, es sei denn, Lonvy stimmt ihrer Geltung ausdrücklich und
                  schriftlich zu. Dies gilt auch dann, wenn Lonvy in Kenntnis
                  entgegenstehender Bedingungen Leistungen vorbehaltlos
                  erbringt.
                </p>
                <p>
                  (5) Im Sinne dieser AGB bedeuten:
                </p>
                <ul className="list-disc pl-6 mt-2 flex flex-col gap-2">
                  <li>
                    <strong>Produkt:</strong> ein vom Kunden in Auftrag gegebenes
                    Nahrungsergänzungsmittel oder vergleichbares Erzeugnis nach
                    individuell abgestimmter Rezeptur.
                  </li>
                  <li>
                    <strong>Rezeptur:</strong> die qualitative und quantitative
                    Zusammensetzung eines Produkts.
                  </li>
                  <li>
                    <strong>White-Label / Private-Label:</strong> Herstellung
                    eines Produkts unter der vom Kunden beigestellten Marke,
                    Praxis- oder Firmenkennzeichnung.
                  </li>
                  <li>
                    <strong>Freigabe:</strong> die schriftliche Erklärung des
                    Kunden, mit der er Rezeptur, Etikett, Verpackungsdesign und
                    sonstige produktbezogene Inhalte verbindlich genehmigt.
                  </li>
                </ul>
              </Block>

              <Block title="§ 2 Vertragsschluss, Angebote">
                <p>
                  (1) Sämtliche Darstellungen auf der Website www.lonvy.at,
                  Produktmuster, Visualisierungen, Beispielrezepturen sowie
                  unverbindliche Erstgespräche stellen kein bindendes Angebot,
                  sondern eine Aufforderung zur Abgabe eines Angebots dar.
                </p>
                <p>
                  (2) Der Vertrag kommt durch ein schriftliches Angebot von
                  Lonvy und dessen schriftliche Annahme durch den Kunden
                  zustande. Einer Annahme genügt auch eine Bestätigung per
                  E-Mail. Mündliche Nebenabreden bestehen nicht; sie bedürfen
                  zu ihrer Wirksamkeit der schriftlichen Bestätigung durch
                  Lonvy.
                </p>
                <p>
                  (3) Angebote von Lonvy sind, sofern nicht ausdrücklich anders
                  gekennzeichnet, freibleibend und für die Dauer von 30 Tagen
                  ab Angebotsdatum gültig.
                </p>
                <p>
                  (4) Vertragssprache ist Deutsch. Vertragstexte werden bei
                  Lonvy gespeichert und sind dem Kunden auf Anfrage zugänglich.
                </p>
              </Block>

              <Block title="§ 3 Leistungsumfang">
                <p>
                  (1) Der konkrete Leistungsumfang ergibt sich aus dem
                  jeweiligen Angebot bzw. der Auftragsbestätigung. Lonvy
                  erbringt nach Auswahl des Kunden insbesondere folgende
                  Leistungen:
                </p>
                <ul className="list-disc pl-6 mt-2 flex flex-col gap-2">
                  <li>
                    Beratung zur Produktstrategie und Erstellung von
                    Rezeptur-Vorschlägen auf Basis des im Erstgespräch
                    erhobenen Bedarfs;
                  </li>
                  <li>
                    Entwicklung von Rezepturen unter Berücksichtigung
                    einschlägiger lebensmittel- und kennzeichnungsrechtlicher
                    Vorgaben;
                  </li>
                  <li>
                    Beauftragung der Produktion bei zertifizierten europäischen
                    Herstellern, Beschaffung der Rohstoffe sowie Organisation
                    der Qualitätssicherung;
                  </li>
                  <li>
                    Gestaltung und Produktion von Verpackung, Etiketten und
                    optional begleitenden Materialien (Patientenfolder,
                    Schulungsunterlagen, digitale Produktseiten) unter Verwendung
                    der vom Kunden beigestellten Marke;
                  </li>
                  <li>
                    Lieferung der fertigen Ware an die vom Kunden bezeichnete
                    Lieferadresse innerhalb der Europäischen Union.
                  </li>
                </ul>
                <p>
                  (2) Lonvy ist berechtigt, einzelne oder sämtliche
                  Vertragsleistungen durch sorgfältig ausgewählte Subunternehmer
                  (insbesondere Lohnhersteller, Druckereien, Logistikdienst­
                  leister) erbringen zu lassen.
                </p>
                <p>
                  (3) Eine medizinische Beratung des Kunden, seiner
                  Patientinnen oder Patienten sowie eine Diagnose- oder
                  Therapieempfehlung ist nicht Bestandteil der Leistungen von
                  Lonvy. Die Auswahl und Empfehlung gegenüber Endverbrauchern
                  erfolgt ausschließlich durch den Kunden in dessen alleiniger
                  fachlicher Verantwortung.
                </p>
                <p>
                  (4) Die in Marketingmaterialien, Visualisierungen und
                  Beispielen dargestellten Produkte und Verpackungen dienen
                  ausschließlich der Veranschaulichung. Maßgeblich für den
                  Vertragsinhalt ist allein die schriftlich freigegebene
                  Spezifikation.
                </p>
              </Block>

              <Block title="§ 4 Mitwirkungspflichten des Kunden">
                <p>
                  (1) Der Kunde stellt Lonvy alle für die Auftragsabwicklung
                  erforderlichen Informationen, Materialien und Freigaben
                  rechtzeitig, vollständig und in technisch geeigneter Form zur
                  Verfügung. Hierzu zählen insbesondere Logos, Markenzeichen,
                  Bildmaterial, Pflichtangaben sowie Rückmeldungen zu
                  vorgelegten Entwürfen.
                </p>
                <p>
                  (2) Der Kunde sichert zu, dass er an den von ihm beigestellten
                  Inhalten (insbesondere Marken, Logos, Texte, Bilder)
                  uneingeschränkt verfügungsberechtigt ist und dass deren
                  Verwendung im Rahmen der vereinbarten Leistungen keine Rechte
                  Dritter verletzt. Er stellt Lonvy von sämtlichen Ansprüchen
                  Dritter frei, die aus einer Verletzung dieser Zusicherung
                  entstehen, einschließlich angemessener Kosten der
                  Rechtsverteidigung.
                </p>
                <p>
                  (3) Vor Produktionsbeginn ist eine schriftliche Freigabe des
                  Kunden zu Rezeptur, Etikett und Verpackungsdesign zwingend
                  erforderlich. Mit der Freigabe übernimmt der Kunde die
                  Verantwortung für die freigegebenen Inhalte. Eine spätere
                  Änderung freigegebener Spezifikationen ist nur im
                  beiderseitigen Einvernehmen und gegen Übernahme der dadurch
                  verursachten Mehrkosten möglich.
                </p>
                <p>
                  (4) Verzögerungen in der Mitwirkung des Kunden verschieben
                  vereinbarte Liefer- und Leistungstermine entsprechend; daraus
                  resultierende Mehraufwände trägt der Kunde.
                </p>
              </Block>

              <Block title="§ 5 Bestellung, Mindestabnahme">
                <p>
                  (1) Bestellungen erfolgen in den im Angebot festgelegten
                  Mindestabnahmemengen je Produktvariante. Die Mindestabnahme
                  beträgt – vorbehaltlich abweichender Vereinbarung im
                  Einzelvertrag – 1.000 Stück je Produktvariante und
                  Produktion.
                </p>
                <p>
                  (2) Auf Wunsch des Kunden gefertigte Produktionsmuster werden,
                  soweit nicht ausdrücklich anders vereinbart, gesondert in
                  Rechnung gestellt.
                </p>
                <p>
                  (3) Storni und Änderungen einer bereits in Produktion
                  befindlichen Bestellung sind nur mit Zustimmung von Lonvy
                  möglich. Bereits angefallene Material-, Druck- und
                  Produktionskosten sind in jedem Fall vom Kunden zu tragen.
                </p>
              </Block>

              <Block title="§ 6 Preise und Zahlung">
                <p>
                  (1) Es gelten die im Angebot bzw. in der Auftragsbestätigung
                  ausgewiesenen Preise. Sämtliche Preise verstehen sich, soweit
                  nicht anders angegeben, in Euro netto zuzüglich der jeweils
                  geltenden gesetzlichen Umsatzsteuer und exklusive Versand-,
                  Verpackungs- und Zollkosten.
                </p>
                <p>
                  (2) Sofern im Einzelvertrag nichts Abweichendes vereinbart
                  ist, sind Rechnungen binnen 14 Tagen ab Rechnungsdatum ohne
                  Abzug zur Zahlung fällig. Lonvy ist berechtigt, bei
                  Erstaufträgen eine Anzahlung in Höhe von bis zu 50 % der
                  Auftragssumme vor Produktionsbeginn zu verlangen.
                </p>
                <p>
                  (3) Bei Zahlungsverzug ist Lonvy berechtigt, Verzugszinsen in
                  gesetzlicher Höhe (§ 456 UGB) sowie eine pauschale
                  Mahnspesenentschädigung gemäß § 458 UGB zu verrechnen. Die
                  Geltendmachung weitergehender Schäden bleibt vorbehalten.
                </p>
                <p>
                  (4) Der Kunde ist zur Aufrechnung nur mit unbestrittenen oder
                  rechtskräftig festgestellten Forderungen berechtigt. Die
                  Geltendmachung eines Zurückbehaltungsrechts ist nur insoweit
                  zulässig, als es auf demselben Vertragsverhältnis beruht.
                </p>
                <p>
                  (5) Bei wesentlicher Verschlechterung der Vermögensverhältnisse
                  des Kunden, insbesondere bei Zahlungsverzug, ist Lonvy
                  berechtigt, noch ausstehende Lieferungen nur gegen Vorkasse
                  oder Sicherheitsleistung auszuführen oder vom Vertrag
                  zurückzutreten.
                </p>
              </Block>

              <Block title="§ 7 Lieferung, Gefahrenübergang, Verpackung">
                <p>
                  (1) Lieferzeiten ergeben sich aus dem Angebot bzw. der
                  Auftragsbestätigung und beginnen frühestens mit Eingang der
                  vollständigen Freigabe und einer etwaigen Anzahlung. Sie
                  stellen, sofern nicht ausdrücklich als Fixtermin bezeichnet,
                  unverbindliche Richtwerte dar.
                </p>
                <p>
                  (2) Sofern nicht anders vereinbart, erfolgt die Lieferung
                  CPT (frachtfrei) gemäß Incoterms 2020 an die vom Kunden
                  bezeichnete Lieferadresse innerhalb der Europäischen Union.
                </p>
                <p>
                  (3) Die Gefahr des zufälligen Untergangs und der zufälligen
                  Verschlechterung der Ware geht mit Übergabe an den ersten
                  Frachtführer auf den Kunden über. Bei Annahmeverzug des
                  Kunden geht die Gefahr mit Eintritt des Verzugs über.
                </p>
                <p>
                  (4) Teillieferungen sind zulässig, soweit sie für den Kunden
                  zumutbar sind.
                </p>
                <p>
                  (5) Höhere Gewalt sowie Ereignisse, die Lonvy oder ihren
                  Vorlieferanten die rechtzeitige Leistung wesentlich
                  erschweren oder unmöglich machen (insbesondere
                  Rohstoffknappheit, Energie- und Versorgungsengpässe,
                  behördliche Maßnahmen, Streik, Pandemie, Krieg), berechtigen
                  Lonvy, die Lieferung um die Dauer der Behinderung zuzüglich
                  einer angemessenen Anlaufzeit zu verschieben. Dauert die
                  Behinderung länger als drei Monate, sind beide Parteien
                  berechtigt, vom betroffenen Vertrag zurückzutreten.
                </p>
              </Block>

              <Block title="§ 8 Eigentumsvorbehalt">
                <p>
                  (1) Die gelieferte Ware bleibt bis zur vollständigen Zahlung
                  sämtlicher aus der Geschäftsverbindung resultierenden
                  Forderungen Eigentum von Lonvy.
                </p>
                <p>
                  (2) Der Kunde ist berechtigt, die Vorbehaltsware im
                  ordentlichen Geschäftsverkehr weiterzuveräußern. Forderungen
                  aus einer solchen Weiterveräußerung tritt der Kunde bereits
                  jetzt in Höhe des mit Lonvy vereinbarten Bruttorechnungs­
                  betrages sicherungshalber an Lonvy ab; Lonvy nimmt diese
                  Abtretung an.
                </p>
                <p>
                  (3) Bei vertragswidrigem Verhalten des Kunden, insbesondere
                  bei Zahlungsverzug, ist Lonvy berechtigt, die Vorbehaltsware
                  zurückzunehmen.
                </p>
              </Block>

              <Block title="§ 9 Untersuchungs- und Rügepflicht, Gewährleistung">
                <p>
                  (1) Der Kunde hat die gelieferte Ware unverzüglich nach Erhalt
                  zu untersuchen und festgestellte Mängel sowie Falsch- oder
                  Mindermengen unverzüglich, spätestens jedoch binnen 7
                  Werktagen nach Erhalt, schriftlich zu rügen (§ 377 UGB).
                  Versteckte Mängel sind unverzüglich nach Entdeckung zu rügen.
                  Unterbleibt die rechtzeitige Rüge, gilt die Ware als
                  genehmigt.
                </p>
                <p>
                  (2) Bei berechtigter und rechtzeitiger Mängelrüge leistet
                  Lonvy nach ihrer Wahl Gewähr durch Verbesserung,
                  Nachlieferung mangelfreier Ware oder angemessenen
                  Preisnachlass. Schlägt die Verbesserung oder Nachlieferung
                  zweimal fehl oder ist sie für den Kunden unzumutbar, kann der
                  Kunde Wandlung oder eine angemessene Preisminderung
                  verlangen.
                </p>
                <p>
                  (3) Die Gewährleistungsfrist für gewerblich gelieferte Ware
                  beträgt zwölf (12) Monate ab Übergabe; § 933b ABGB bleibt
                  unberührt. § 924 ABGB (Vermutung der Mangelhaftigkeit) wird
                  einvernehmlich abbedungen; der Kunde hat im Streitfall den
                  Mangel und dessen Vorhandensein zum Zeitpunkt der Übergabe
                  zu beweisen.
                </p>
                <p>
                  (4) Mängel, die auf einer vom Kunden freigegebenen
                  Spezifikation, auf von ihm beigestellten Materialien oder
                  Inhalten oder auf einer unsachgemäßen Lagerung, Behandlung
                  oder Weiterverarbeitung beruhen, sind von der Gewährleistung
                  ausgenommen.
                </p>
                <p>
                  (5) Bei farblichen, optischen oder haptischen Abweichungen,
                  die im Rahmen der branchenüblichen Toleranzen für Druck,
                  Verpackung und Lebensmittelproduktion liegen, liegt kein
                  Mangel vor.
                </p>
              </Block>

              <Block title="§ 10 Haftung">
                <p>
                  (1) Lonvy haftet dem Kunden bei Vorsatz und grober
                  Fahrlässigkeit nach den gesetzlichen Bestimmungen.
                </p>
                <p>
                  (2) Bei leichter Fahrlässigkeit haftet Lonvy nur für die
                  Verletzung wesentlicher Vertragspflichten (Kardinalpflichten);
                  in diesem Fall ist die Haftung der Höhe nach auf den bei
                  Vertragsschluss vorhersehbaren, vertragstypischen Schaden
                  begrenzt. Die Haftung für leicht fahrlässig verursachte reine
                  Vermögensschäden, entgangenen Gewinn, mittelbare Schäden,
                  Folgeschäden sowie Schäden aus Ansprüchen Dritter ist
                  ausgeschlossen.
                </p>
                <p>
                  (3) Die Haftungsbeschränkungen gemäß Absatz 2 gelten nicht
                  für Schäden aus der Verletzung des Lebens, des Körpers oder
                  der Gesundheit, für Ansprüche nach dem
                  Produkthaftungsgesetz (PHG) sowie für Fälle ausdrücklich
                  übernommener Garantien.
                </p>
                <p>
                  (4) Schadensersatzansprüche des Kunden – mit Ausnahme von
                  Ansprüchen nach dem PHG sowie Ansprüchen aus der Verletzung
                  des Lebens, des Körpers oder der Gesundheit – verjähren in
                  drei Jahren ab Kenntnis von Schaden und Schädiger.
                </p>
                <p>
                  (5) Eine über die vorstehenden Regelungen hinausgehende
                  Haftung ist – soweit gesetzlich zulässig – ausgeschlossen.
                </p>
              </Block>

              <Block title="§ 11 Pflichten des Kunden bei Vertrieb und Bewerbung">
                <p>
                  (1) Der Kunde ist allein dafür verantwortlich, dass der
                  Vertrieb, die Abgabe und die Bewerbung der bestellten
                  Produkte gegenüber Endverbrauchern den jeweils geltenden
                  rechtlichen Anforderungen entsprechen, insbesondere:
                </p>
                <ul className="list-disc pl-6 mt-2 flex flex-col gap-2">
                  <li>
                    der Verordnung (EG) Nr. 1924/2006 über nährwert- und
                    gesundheitsbezogene Angaben (Health-Claims-VO),
                  </li>
                  <li>
                    der Verordnung (EU) Nr. 1169/2011 über die Information der
                    Verbraucher über Lebensmittel (LMIV),
                  </li>
                  <li>
                    dem österreichischen Lebensmittelsicherheits- und
                    Verbraucherschutzgesetz (LMSVG) sowie der österreichischen
                    Nahrungsergänzungsmittelverordnung,
                  </li>
                  <li>
                    den ärzte- und berufsrechtlichen Vorgaben (insbesondere
                    Werbebeschränkungen nach Ärztegesetz und Standesregeln),
                  </li>
                  <li>
                    sowie den allgemeinen Vorschriften des Wettbewerbs- und
                    Heilmittelwerberechts.
                  </li>
                </ul>
                <p>
                  (2) Nahrungsergänzungsmittel sind keine Arzneimittel. Der
                  Kunde verpflichtet sich, gegenüber Endverbrauchern keine
                  krankheitsbezogenen Aussagen oder Heilversprechen zu treffen
                  und insbesondere die durch die Health-Claims-VO zulässigen
                  Angaben nicht zu überschreiten.
                </p>
                <p>
                  (3) Der Kunde stellt Lonvy von allen Ansprüchen Dritter
                  einschließlich behördlicher Sanktionen frei, die aus einer
                  Verletzung der vorstehenden Pflichten resultieren, soweit der
                  Verstoß nicht von Lonvy zu vertreten ist.
                </p>
                <p>
                  (4) Der Kunde wird Lonvy unverzüglich informieren, wenn ihm
                  Reklamationen, Nebenwirkungen oder behördliche Beanstandungen
                  zu einem von Lonvy gelieferten Produkt bekannt werden, und
                  bei einem etwaigen Rückruf nach besten Kräften mitwirken.
                </p>
              </Block>

              <Block title="§ 12 Geistiges Eigentum, Rezepturrechte">
                <p>
                  (1) Sämtliche von Lonvy entwickelten Rezepturen, Konzepte,
                  Spezifikationen und Unterlagen bleiben geistiges Eigentum von
                  Lonvy. Der Kunde erhält daran ein nicht ausschließliches,
                  nicht übertragbares, auf die Dauer der Geschäftsbeziehung
                  befristetes Nutzungsrecht für den Vertrieb der von Lonvy
                  hergestellten Produkte.
                </p>
                <p>
                  (2) Soweit der Kunde eine ausschließliche oder über das
                  Vertragsende hinausgehende Nutzung wünscht, bedarf dies einer
                  gesonderten schriftlichen Vereinbarung gegen angemessenes
                  Entgelt.
                </p>
                <p>
                  (3) Die vom Kunden beigestellten Marken, Logos, Texte und
                  Bilder verbleiben in dessen Eigentum. Der Kunde räumt Lonvy
                  ein einfaches, auf die Erfüllung des Vertrages beschränktes
                  Nutzungsrecht an diesen Inhalten ein.
                </p>
                <p>
                  (4) Lonvy ist berechtigt, den Kunden nach Vertragsschluss in
                  einer Referenzliste namentlich zu nennen, sofern der Kunde
                  dem nicht aus berechtigtem Grund widerspricht.
                </p>
              </Block>

              <Block title="§ 13 Geheimhaltung">
                <p>
                  (1) Die Parteien verpflichten sich, sämtliche im Rahmen der
                  Geschäftsbeziehung erlangten vertraulichen Informationen der
                  jeweils anderen Partei – insbesondere Rezepturen,
                  Geschäftsgeheimnisse, Patientenstrukturdaten, Konditionen –
                  vertraulich zu behandeln, nur zu Zwecken der Vertragserfüllung
                  zu verwenden und Dritten nicht zugänglich zu machen.
                </p>
                <p>
                  (2) Die Verpflichtung gilt für die Dauer von drei (3) Jahren
                  über die Beendigung der Geschäftsbeziehung hinaus, soweit
                  sich nicht aus dem Inhalt der Information eine längere
                  Schutzdauer ergibt.
                </p>
                <p>
                  (3) Ausgenommen sind Informationen, die nachweislich
                  öffentlich bekannt sind, der empfangenden Partei bereits vor
                  der Mitteilung bekannt waren oder aufgrund gesetzlicher oder
                  behördlicher Anordnung offenzulegen sind.
                </p>
              </Block>

              <Block title="§ 14 Vertragsdauer und Kündigung">
                <p>
                  (1) Soweit der Einzelvertrag keine abweichende Regelung
                  enthält, wird das Vertragsverhältnis auf unbestimmte Zeit
                  geschlossen und kann von jeder Partei mit einer Frist von drei
                  (3) Monaten zum Monatsende ordentlich gekündigt werden.
                </p>
                <p>
                  (2) Das Recht zur außerordentlichen Kündigung aus wichtigem
                  Grund bleibt unberührt. Ein wichtiger Grund liegt für Lonvy
                  insbesondere vor bei wiederholtem Zahlungsverzug, bei
                  Eröffnung eines Insolvenzverfahrens über das Vermögen des
                  Kunden oder bei schwerwiegender Verletzung der Pflichten aus
                  § 11 (Vertrieb und Bewerbung).
                </p>
                <p>
                  (3) Bereits verbindlich angenommene Bestellungen sind auch
                  nach Wirksamwerden einer Kündigung noch zu erfüllen und zu
                  bezahlen, soweit dies dem kündigenden Teil nicht aus den die
                  Kündigung tragenden Gründen unzumutbar ist.
                </p>
                <p>
                  (4) Jede Kündigung bedarf der Schriftform; eine Übermittlung
                  per E-Mail ist ausreichend.
                </p>
              </Block>

              <Block title="§ 15 Datenschutz">
                <p>
                  Lonvy verarbeitet personenbezogene Daten des Kunden
                  ausschließlich im Rahmen der gesetzlichen Bestimmungen,
                  insbesondere der Datenschutz-Grundverordnung (DSGVO) und des
                  österreichischen Datenschutzgesetzes (DSG). Einzelheiten
                  ergeben sich aus der{" "}
                  <a href="/datenschutz" className="underline">
                    Datenschutzerklärung
                  </a>
                  .
                </p>
              </Block>

              <Block title="§ 16 Schlussbestimmungen">
                <p>
                  (1) Es gilt österreichisches Recht unter Ausschluss seiner
                  Verweisungsnormen sowie unter ausdrücklichem Ausschluss des
                  UN-Kaufrechts (CISG).
                </p>
                <p>
                  (2) Ausschließlicher Gerichtsstand für sämtliche Streitig­
                  keiten aus oder im Zusammenhang mit dieser Geschäftsbeziehung
                  ist – soweit gesetzlich zulässig – das für 1010 Wien sachlich
                  zuständige Gericht. Lonvy ist berechtigt, den Kunden auch an
                  dessen allgemeinem Gerichtsstand zu klagen.
                </p>
                <p>
                  (3) Erfüllungsort für sämtliche Leistungen ist der Sitz von
                  Lonvy.
                </p>
                <p>
                  (4) Sollten einzelne Bestimmungen dieser AGB ganz oder
                  teilweise unwirksam oder undurchführbar sein oder werden, so
                  wird die Wirksamkeit der übrigen Bestimmungen davon nicht
                  berührt. An die Stelle der unwirksamen oder undurchführbaren
                  Bestimmung tritt eine wirksame Regelung, die dem
                  wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten
                  kommt. Entsprechendes gilt für etwaige Vertragslücken.
                </p>
                <p>
                  (5) Änderungen und Ergänzungen dieser AGB sowie sämtlicher
                  Einzelverträge bedürfen der Schriftform. Dies gilt auch für
                  die Aufhebung des Schriftformerfordernisses selbst.
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
    <section>
      <h2 className="text-[15px] font-medium uppercase tracking-[0.12em] text-warm-500 mb-5">
        {title}
      </h2>
      <div className="text-[16px] leading-[1.7] text-warm-900 flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
}
