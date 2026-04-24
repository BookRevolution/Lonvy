"use client";

import { cn } from "@/lib/cn";

interface BottlePreviewProps {
  praxisName: string;
  praxisSub: string;
  productName: string;
  specialtyLabel: string;
  labelFont: "serif" | "sans" | "mono";
  logoDataUrl: string | null;
}

/**
 * Elegant SVG-based supplement bottle with a live-editable label.
 * Replaces the original Three.js bottle, lighter, more on-brand.
 */
export function BottlePreview({
  praxisName,
  praxisSub,
  productName,
  specialtyLabel,
  labelFont,
  logoDataUrl,
}: BottlePreviewProps) {
  const fontClass =
    labelFont === "serif"
      ? "font-serif font-light"
      : labelFont === "mono"
      ? "font-mono font-medium tracking-wider"
      : "font-sans font-medium";

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 md:p-12">
      {/* Ambient spot */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 420px at 50% 45%, rgba(212, 180, 122, 0.18), transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Shadow ellipse */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[280px] h-[30px] rounded-[50%]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(42, 37, 32, 0.18), transparent 70%)",
            filter: "blur(6px)",
          }}
        />

        {/* Bottle SVG */}
        <svg
          viewBox="0 0 280 420"
          className="w-[240px] md:w-[280px] h-auto relative drop-shadow-[0_20px_40px_rgba(42,37,32,0.18)]"
          role="img"
          aria-label={`Produktvorschau: ${productName || "Ihre Rezeptur"}`}
        >
          <defs>
            <linearGradient id="bodyGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#f5efe6" />
              <stop offset="35%" stopColor="#fffdf7" />
              <stop offset="65%" stopColor="#f5efe6" />
              <stop offset="100%" stopColor="#d6c8b0" />
            </linearGradient>
            <linearGradient id="lidGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#2a2520" />
              <stop offset="50%" stopColor="#4a4139" />
              <stop offset="100%" stopColor="#2a2520" />
            </linearGradient>
            <linearGradient id="collarGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#8f7340" />
              <stop offset="50%" stopColor="#c9a769" />
              <stop offset="100%" stopColor="#8f7340" />
            </linearGradient>
          </defs>

          {/* Bottle body */}
          <rect
            x="40"
            y="80"
            width="200"
            height="320"
            rx="6"
            fill="url(#bodyGrad)"
            stroke="#d6c8b0"
            strokeWidth="0.5"
          />

          {/* Collar accent */}
          <rect x="40" y="78" width="200" height="6" fill="url(#collarGrad)" />

          {/* Neck */}
          <rect x="88" y="56" width="104" height="22" fill="#f5efe6" />

          {/* Lid */}
          <rect x="80" y="24" width="120" height="36" rx="3" fill="url(#lidGrad)" />
          {/* Lid grooves */}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1={80 + i * 5}
              y1={24}
              x2={80 + i * 5}
              y2={60}
              stroke="#0d0b09"
              strokeWidth="0.4"
              opacity="0.3"
            />
          ))}
          {/* Lid top highlight */}
          <rect x="80" y="24" width="120" height="4" fill="#4a4139" />
        </svg>

        {/* Label — overlaid via absolute positioning so text is real HTML (crisp) */}
        <div
          className="absolute bg-cream-50/95 border border-cream-300 rounded-[3px] shadow-inner overflow-hidden pointer-events-none"
          style={{
            top: "120px",
            left: "54px",
            width: "172px",
            height: "230px",
          }}
        >
          <div className="h-full w-full flex flex-col items-center text-center px-3 py-4">
            {/* LONVY brand strip */}
            <div className="flex items-center gap-1 mb-1">
              <span className="font-serif text-[11px] tracking-[0.28em] text-warm-900 font-medium">
                LONVY
              </span>
              <span className="w-[3px] h-[3px] rounded-full bg-gold-600" aria-hidden />
            </div>
            <span aria-hidden className="w-[60%] h-px bg-cream-300 mb-3" />

            {/* Product name — font varies */}
            <div
              className={cn(
                "text-warm-900 leading-[1.05] tracking-[-0.02em] break-words mb-1",
                fontClass,
                labelFont === "mono" ? "text-[14px]" : "text-[18px]",
              )}
            >
              {productName || "VITAL · 01"}
            </div>

            {/* Specialty */}
            <div className="text-[7px] tracking-[0.2em] uppercase text-gold-800 font-medium mb-3">
              {specialtyLabel}
            </div>

            <span aria-hidden className="w-[40%] h-px bg-cream-300 mb-3" />

            {/* Praxis logo or name */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1">
              {logoDataUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoDataUrl}
                    alt=""
                    className="max-w-[80%] max-h-[50px] object-contain mb-1"
                  />
                  <div className="font-serif text-[10px] text-warm-900 font-medium">
                    {praxisName}
                  </div>
                </>
              ) : (
                <>
                  <div className="font-serif italic text-[13px] text-warm-900 leading-tight">
                    {praxisName || "Ihre Praxis"}
                  </div>
                  {praxisSub ? (
                    <div className="text-[8px] text-warm-500 tracking-wide leading-tight px-2">
                      {praxisSub}
                    </div>
                  ) : null}
                </>
              )}
            </div>

            {/* Footer strip */}
            <div className="w-full pt-2 mt-auto border-t border-cream-300/80 flex justify-between text-[6px] tracking-[0.15em] text-warm-500 font-medium">
              <span>60 KAPSELN</span>
              <span>GMP · DE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
