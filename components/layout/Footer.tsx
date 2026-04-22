import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-300/60 pt-20 pb-12 mt-0">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block" aria-label="Lonvy Startseite">
              <Image
                src="/images/lonvy-logo.png"
                alt="Lonvy"
                width={750}
                height={950}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-6 text-[14px] leading-[1.55] text-warm-700 max-w-[260px]">
              Premium-Supplemente & Longevity-Lösungen für Ihre Praxis.
            </p>
            <p className="mt-6 text-[13px] leading-[1.6] text-warm-500">
              kontakt@lonvy.de
              <br />
              +XX XXX XXXXXXX
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-[12px] uppercase tracking-[0.12em] font-medium text-warm-500 mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/#how-it-works">Ablauf</FooterLink>
              <FooterLink href="/#longevity">Longevity</FooterLink>
              <FooterLink href="/#trust">Über uns</FooterLink>
            </ul>
          </div>

          {/* Aktuelles */}
          <div>
            <h3 className="font-sans text-[12px] uppercase tracking-[0.12em] font-medium text-warm-500 mb-5">
              Aktuelles
            </h3>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/studien">Studien & Forschung</FooterLink>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-sans text-[12px] uppercase tracking-[0.12em] font-medium text-warm-500 mb-5">
              Rechtliches
            </h3>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/impressum">Impressum</FooterLink>
              <FooterLink href="/datenschutz">Datenschutz</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream-300/60">
          <p className="text-[12px] text-warm-500">
            © {new Date().getFullYear()} Lonvy GmbH · Alle Rechte vorbehalten
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] text-warm-900 hover:text-gold-700 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
