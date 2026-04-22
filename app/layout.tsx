import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lonvy — White-Label-Supplemente für Ärzte & Praxen",
    template: "%s · Lonvy",
  },
  description:
    "Personalisierte Nahrungsergänzung unter Ihrer Praxis-Marke. Wissenschaftlich fundiert, in Europa produziert, individuell entwickelt. Erstgespräch kostenfrei.",
  metadataBase: new URL("https://lonvy.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lonvy — White-Label-Supplemente für Ärzte & Praxen",
    description:
      "Personalisierte Nahrungsergänzung unter Ihrer Praxis-Marke. Wissenschaftlich fundiert, in Europa produziert, individuell entwickelt.",
    locale: "de_DE",
    type: "website",
    url: "https://lonvy.de",
    siteName: "Lonvy",
    images: [
      {
        url: "/images/hero-product.webp",
        width: 1200,
        height: 750,
        alt: "Lonvy Supplement — Premium-Produktlinie für Ärztepraxen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lonvy — White-Label-Supplemente für Ärzte",
    description:
      "Personalisierte Nahrungsergänzung unter Ihrer Praxis-Marke. Wissenschaftlich fundiert, individuell entwickelt.",
    images: ["/images/hero-product.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf6ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-warm-900 antialiased">
        {children}
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
