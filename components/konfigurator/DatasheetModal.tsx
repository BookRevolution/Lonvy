"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Ingredient, Specialty } from "@/lib/konfigurator-data";

interface DatasheetModalProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  praxisName: string;
  specialty: Specialty | undefined;
  ageMin: number;
  ageMax: number;
  focus: string[];
  ingredients: Ingredient[];
}

export function DatasheetModal({
  open,
  onClose,
  productName,
  praxisName,
  specialty,
  ageMin,
  ageMax,
  focus,
  ingredients,
}: DatasheetModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, onClose]);

  if (!open) return null;

  const today = new Date().toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="datasheet-title"
    >
      <div
        className="absolute inset-0 bg-warm-900/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div
        className="relative w-full max-w-[640px] max-h-[88vh] overflow-y-auto bg-cream-50 rounded-[4px] shadow-2xl p-8 md:p-12"
        style={{ overscrollBehavior: "contain" }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-3 rounded-full hover:bg-cream-200 transition-colors min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
          aria-label="Datenblatt schließen"
        >
          <X size={20} className="text-warm-700" aria-hidden />
        </button>

        {/* Head */}
        <div className="flex justify-between items-start border-b border-cream-300 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-1">
              <span className="font-serif text-[22px] tracking-[0.2em] font-medium text-warm-900">
                LONVY
              </span>
              <span className="w-[5px] h-[5px] rounded-full bg-gold-600 mt-2" aria-hidden />
            </div>
            <h2
              id="datasheet-title"
              className="mt-2 font-serif font-light text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.02em] text-warm-900"
            >
              {productName || "VITAL · 01"}
            </h2>
            <p className="text-[12px] text-warm-500 mt-1">{praxisName}</p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.14em] text-warm-500 text-right leading-tight">
            Datenblatt
            <br />
            Charge #LV-2604-A
            <br />
            <span>{today}</span>
          </div>
        </div>

        {/* Blurb */}
        <p className="font-serif text-[15px] leading-[1.55] text-warm-700 mb-6">
          Eine auf{" "}
          <em className="italic text-warm-900">
            {specialty?.name ?? "funktionelle Medizin"}
          </em>{" "}
          zugeschnittene Rezeptur für {ageMin}–{ageMax}-Jährige.
          {focus.length > 0 && (
            <>
              {" "}
              Schwerpunkt:{" "}
              <span className="text-warm-900">{focus.join(", ")}</span>.
            </>
          )}
        </p>

        {/* Ingredient grid */}
        <div className="grid grid-cols-[2fr_1fr_1fr] border border-cream-300 rounded-md overflow-hidden text-[12px]">
          <div className="px-3 py-2 bg-cream-200 text-[10.5px] uppercase tracking-[0.14em] text-warm-500 font-medium">
            Wirkstoff
          </div>
          <div className="px-3 py-2 bg-cream-200 text-[10.5px] uppercase tracking-[0.14em] text-warm-500 font-medium text-right">
            Form
          </div>
          <div className="px-3 py-2 bg-cream-200 text-[10.5px] uppercase tracking-[0.14em] text-warm-500 font-medium text-right">
            Tagesdosis
          </div>

          {ingredients.map((ing) => (
            <div key={ing.id} className="contents">
              <div className="px-3 py-2 border-t border-cream-300">
                <b className="text-warm-900 font-medium">{ing.name}</b>
                <br />
                <span className="text-[10.5px] text-warm-500">
                  {ing.foci.slice(0, 2).join(" · ")}
                </span>
              </div>
              <div className="px-3 py-2 border-t border-cream-300 text-right font-mono tabular-nums text-warm-700">
                Kapsel
              </div>
              <div className="px-3 py-2 border-t border-cream-300 text-right font-mono tabular-nums text-warm-900 font-medium">
                {ing.form}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-[10.5px] text-warm-500 mt-4 leading-[1.6]">
          <div className="flex justify-between mb-2">
            <span>
              <b className="text-warm-900">Reinheit</b> · HPLC-validiert,
              Schwermetalle &lt; Nachweisgrenze
            </span>
            <span>
              <b className="text-warm-900">MHD</b> · 24 Monate ab Produktion
            </span>
          </div>
          Die hier gezeigte Zusammensetzung ist eine ärztliche Empfehlung und
          ersetzt keine individuelle Diagnose. Studienreferenzen pro Wirkstoff
          auf Anfrage erhältlich. Hergestellt in Deutschland nach
          GMP-Standards. Lonvy GmbH.
        </div>
      </div>
    </div>
  );
}
