import { BookingProvider } from "./BookingContext";
import { Navigation } from "./Navigation";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <Navigation />
      <main className="flex-1">{children}</main>
    </BookingProvider>
  );
}
