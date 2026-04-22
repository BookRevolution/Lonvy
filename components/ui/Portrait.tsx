import { cn } from "@/lib/cn";

interface PortraitProps {
  size?: number;
  className?: string;
  /** When Lara's real photo is available, pass src; otherwise placeholder renders */
  src?: string;
  alt?: string;
  initials?: string;
  ring?: boolean;
}

/**
 * Placeholder-ready portrait component.
 * Shows initials on cream gradient until a real image src is provided.
 */
export function Portrait({
  size = 240,
  className,
  src,
  alt = "Portrait",
  initials = "LV",
  ring = true,
}: PortraitProps) {
  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden shrink-0",
        "bg-gradient-to-br from-cream-200 via-cream-100 to-cream-300",
        ring && "ring-[2px] ring-gold-500 ring-offset-4 ring-offset-cream-50",
        className
      )}
      style={{
        width: size,
        height: size,
        boxShadow: "0 24px 56px -12px rgba(42, 37, 32, 0.18)",
      }}
      aria-label={alt}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-serif text-warm-700/40"
            style={{ fontSize: size * 0.35, letterSpacing: "-0.02em" }}
          >
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
