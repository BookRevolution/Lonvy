"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useBooking } from "./BookingContext";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Ablauf", href: "/#how-it-works" },
  { label: "Studien", href: "/studien" },
  { label: "Longevity", href: "/#longevity" },
  { label: "Über uns", href: "/#trust" },
];

export function Navigation() {
  const { openBooking } = useBooking();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 80);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          "bg-cream-50/80 backdrop-blur-md",
          scrolled ? "border-b border-cream-300/60" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Lonvy Startseite"
            >
              <Image
                src="/images/lonvy-logo.png"
                alt="Lonvy"
                width={750}
                height={950}
                priority
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[14px] font-medium text-warm-700 hover:text-warm-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button onClick={openBooking} variant="primary" size="md">
                Beratung buchen
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-warm-900"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen ? (
          <div className="lg:hidden border-t border-cream-300/60 bg-cream-50">
            <nav className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[16px] font-medium text-warm-900 border-b border-cream-200 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-cream-50/95 backdrop-blur-md border-t border-cream-300/60">
        <Button
          onClick={openBooking}
          variant="primary"
          size="md"
          className="w-full"
        >
          Beratung buchen
        </Button>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" aria-hidden />
    </>
  );
}
