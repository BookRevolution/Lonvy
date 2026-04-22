import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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
  openGraph: {
    title: "Lonvy — White-Label-Supplemente für Ärzte & Praxen",
    description:
      "Personalisierte Nahrungsergänzung unter Ihrer Praxis-Marke. Wissenschaftlich fundiert, in Europa produziert, individuell entwickelt.",
    locale: "de_DE",
    type: "website",
  },
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
      </body>
    </html>
  );
}
