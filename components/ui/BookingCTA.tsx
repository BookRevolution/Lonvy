"use client";

import { useBooking } from "@/components/layout/BookingContext";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary";

interface BookingCTAProps {
  children?: React.ReactNode;
  size?: "md" | "lg";
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}

export function BookingCTA({
  children = "Kostenloses Erstgespräch vereinbaren",
  size = "lg",
  variant = "primary",
  withArrow = true,
  className,
}: BookingCTAProps) {
  const { openBooking } = useBooking();

  return (
    <Button
      onClick={openBooking}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
      {withArrow ? <ArrowRight size={18} /> : null}
    </Button>
  );
}
