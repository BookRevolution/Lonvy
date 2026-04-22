import { cn } from "@/lib/cn";

type Background = "cream-50" | "cream-100" | "cream-200";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: Background;
  className?: string;
  /** Compact reduces vertical padding for denser sections (e.g. trust bar) */
  compact?: boolean;
}

const bgMap: Record<Background, string> = {
  "cream-50": "bg-cream-50",
  "cream-100": "bg-cream-100",
  "cream-200": "bg-cream-200",
};

export function Section({
  children,
  id,
  background = "cream-50",
  className,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full",
        bgMap[background],
        compact ? "py-16 md:py-24" : "py-24 md:py-40",
        className
      )}
    >
      {children}
    </section>
  );
}
