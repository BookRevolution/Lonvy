"use client";

import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const timeSlots = [
  "Mo · 10:00",
  "Mo · 14:00",
  "Di · 09:30",
  "Di · 16:00",
  "Mi · 11:00",
  "Do · 14:30",
  "Fr · 10:00",
  "Fr · 15:00",
];

const specialties = [
  "Schönheitschirurgie / Ästhetische Medizin",
  "Gynäkologie / Frauenheilkunde",
  "Longevity- / Anti-Aging-Medizin",
  "Allgemeinmedizin / Prävention",
  "Andere",
];

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"form" | "done">("form");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", specialty: "" });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset on close
      setTimeout(() => {
        setStep("form");
        setSelectedSlot(null);
        setForm({ name: "", phone: "", specialty: "" });
      }, 300);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
  };

  const canSubmit = selectedSlot && form.name && form.phone;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-warm-900/40 backdrop-blur-sm animate-[fade_200ms_ease-out]"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto",
          "bg-cream-50 rounded-[24px] shadow-[0_24px_64px_rgba(42,37,32,0.2)]",
          "p-8 md:p-10"
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-cream-200 transition-colors"
          aria-label="Schließen"
        >
          <X size={20} className="text-warm-700" />
        </button>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-gold-700">
                Kostenlos & unverbindlich
              </span>
              <h2
                id="booking-title"
                className="mt-2 text-[28px] leading-[1.1] text-warm-900"
              >
                Erstgespräch vereinbaren
              </h2>
              <p className="mt-3 text-[15px] leading-[1.55] text-warm-700">
                Wählen Sie einen Rückrufzeitpunkt und hinterlassen Sie Ihre
                Kontaktdaten. Wir melden uns direkt bei Ihnen.
              </p>
            </div>

            <div>
              <label className="block text-[13px] font-medium text-warm-700 mb-3">
                Gewünschter Rückrufzeitpunkt
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={cn(
                      "px-3 py-2.5 text-[13px] rounded-lg border-[1.5px] transition-all",
                      selectedSlot === slot
                        ? "border-gold-500 bg-gold-400/20 text-warm-900"
                        : "border-cream-300 bg-cream-50 text-warm-700 hover:border-warm-500"
                    )}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Telefon"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                required
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-warm-700 mb-2">
                Fachrichtung (optional)
              </label>
              <select
                value={form.specialty}
                onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                className="w-full px-4 py-3.5 text-[15px] rounded-lg border-[1.5px] border-cream-300 bg-cream-50 text-warm-900 focus:border-gold-500 focus:outline-none transition-colors"
              >
                <option value="">Bitte wählen …</option>
                {specialties.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className={cn(
                "w-full mt-2",
                !canSubmit && "opacity-50 cursor-not-allowed hover:translate-y-0"
              )}
            >
              Anfrage senden
            </Button>

            <p className="text-[12px] text-warm-500 text-center leading-[1.5]">
              Mit Absenden stimmen Sie unserer{" "}
              <a href="/datenschutz" className="underline hover:text-warm-900">
                Datenschutzerklärung
              </a>{" "}
              zu. (Dummy-Formular · wird später an echte Terminbuchung angebunden)
            </p>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center gap-5 py-6">
            <div className="w-16 h-16 rounded-full bg-gold-400/30 flex items-center justify-center">
              <Check size={28} className="text-gold-700" />
            </div>
            <h2 className="text-[26px] text-warm-900">Vielen Dank!</h2>
            <p className="text-[15px] leading-[1.55] text-warm-700 max-w-[380px]">
              Wir haben Ihre Anfrage erhalten und melden uns im gewünschten
              Zeitfenster direkt bei Ihnen.
            </p>
            <Button onClick={onClose} variant="secondary" size="md" className="mt-4">
              Schließen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-warm-700 mb-2">
        {label}
        {required ? <span className="text-gold-600"> *</span> : null}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3.5 text-[15px] rounded-lg border-[1.5px] border-cream-300 bg-cream-50 text-warm-900 focus:border-gold-500 focus:outline-none transition-colors"
      />
    </div>
  );
}
