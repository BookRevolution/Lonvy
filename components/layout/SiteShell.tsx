import { BookingProvider } from "./BookingContext";
import { Navigation } from "./Navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-3 focus:bg-gold-500 focus:text-warm-900 focus:rounded-md focus:font-medium focus:shadow-lg"
      >
        Zum Hauptinhalt springen
      </a>
      <Navigation />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
    </BookingProvider>
  );
}
