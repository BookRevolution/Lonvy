import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-[720px]",
        alignClasses,
        className
      )}
    >
      {eyebrow ? (
        <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-gold-800">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.015em] text-warm-900">
        {title}
      </h2>
      {lead ? (
        <p className="text-[17px] md:text-[18px] leading-[1.55] text-warm-700 max-w-[640px]">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
