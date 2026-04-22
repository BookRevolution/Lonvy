import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const max =
    size === "narrow"
      ? "max-w-[720px]"
      : size === "wide"
      ? "max-w-[1440px]"
      : "max-w-[1280px]";

  return (
    <div className={cn("mx-auto w-full px-6 md:px-8", max, className)}>
      {children}
    </div>
  );
}
