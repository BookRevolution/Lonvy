import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "link";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type Props = LinkProps | ButtonProps;

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out focus-visible:outline-offset-4";

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-[15px] rounded-lg",
  lg: "px-8 py-4 text-base rounded-lg",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-warm-900 hover:bg-gold-600 hover:-translate-y-[1px] shadow-[0_1px_0_0_rgba(42,37,32,0.08)]",
  secondary:
    "bg-transparent text-warm-900 border-[1.5px] border-warm-900 hover:bg-warm-900 hover:text-cream-50",
  link: "text-gold-700 hover:text-gold-600 px-0 py-0 underline-offset-4 hover:underline",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    baseClasses,
    variant !== "link" && sizeClasses[size],
    variantClasses[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonProps).type ?? "button"}
      onClick={(props as ButtonProps).onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
