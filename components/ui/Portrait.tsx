import Image from "next/image";
import { cn } from "@/lib/cn";

interface PortraitProps {
  size?: number;
  className?: string;
  /** When a real photo is available, pass src; otherwise placeholder renders */
  src?: string;
  alt?: string;
  initials?: string;
  ring?: boolean;
  priority?: boolean;
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
  priority = false,
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
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" aria-label={alt}>
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
