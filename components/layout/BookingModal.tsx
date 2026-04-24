"use client";

import { useEffect, useRef, useState, useId } from "react";
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

  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);

  const titleId = useId();
  const descId = useId();
  const slotsLabelId = useId();
  const nameId = useId();
  const phoneId = useId();
  const specialtyId = useId();

  // Body scroll lock + restore focus on close
  useEffect(() => {
    if (open) {
      previousActiveRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      // Move focus into the modal on next tick
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      const previous = previousActiveRef.current;
      if (previous && typeof previous.focus === "function") {
        previous.focus();
      }
      const timeoutId = window.setTimeout(() => {
        setStep("form");
        setSelectedSlot(null);
        setForm({ name: "", phone: "", specialty: "" });
      }, 300);
      return () => window.clearTimeout(timeoutId);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC close + simple focus-trap
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const modal = modalRef.current;
      if (!modal) return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !form.name || !form.phone) return;

    const subject = `Erstgesprächs-Anfrage: ${form.name}`;
    const bodyLines = [
      `Hallo Lonvy-Team,`,
      ``,
      `ich möchte ein kostenloses Erstgespräch vereinbaren.`,
      ``,
      `Name:               ${form.name}`,
      `Telefon:            ${form.phone}`,
      `Rückrufzeitpunkt:   ${selectedSlot}`,
      `Fachrichtung:       ${form.specialty || "—"}`,
      ``,
      `Vielen Dank und beste Grüße`,
      form.name,
    ];
    const body = bodyLines.join("\n");
    const href = `mailto:info@lonvy.at?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStep("done");
  };

  const canSubmit = Boolean(selectedSlot && form.name && form.phone);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-warm-900/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={cn(
          "relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto",
          "bg-cream-50 rounded-[24px] shadow-[0_24px_64px_rgba(42,37,32,0.2)]",
          "p-8 md:p-10",
        )}
        style={{ overscrollBehavior: "contain" }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-3 rounded-full hover:bg-cream-200 transition-colors min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
          aria-label="Dialog schließen"
        >
          <X size={20} className="text-warm-700" aria-hidden />
        </button>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            <div>
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-gold-800">
                Kostenlos & unverbindlich
              </span>
              <h2
                id={titleId}
                className="mt-2 text-[28px] leading-[1.1] text-warm-900"
              >
                Erstgespräch vereinbaren
              </h2>
              <p
                id={descId}
                className="mt-3 text-[15px] leading-[1.55] text-warm-700"
              >
                Wählen Sie einen Rückrufzeitpunkt und hinterlassen Sie Ihre
                Kontaktdaten. Wir melden uns direkt bei Ihnen.
              </p>
            </div>

            {/* Time slots as radio group */}
            <fieldset className="border-0 p-0 m-0">
              <legend
                id={slotsLabelId}
                className="block text-[13px] font-medium text-warm-700 mb-3 px-0"
              >
                Gewünschter Rückrufzeitpunkt
                <span className="text-gold-800" aria-hidden>
                  {" *"}
                </span>
                <span className="sr-only"> (Pflichtfeld)</span>
              </legend>
              <div
                role="radiogroup"
                aria-labelledby={slotsLabelId}
                className="grid grid-cols-2 md:grid-cols-4 gap-2"
              >
                {timeSlots.map((slot) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      type="button"
                      key={slot}
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={
                        isSelected || (selectedSlot === null && slot === timeSlots[0])
                          ? 0
                          : -1
                      }
                      onClick={() => setSelectedSlot(slot)}
                      className={cn(
                        "px-3 py-3.5 min-h-[44px] text-[13px] rounded-lg border-[1.5px] transition-colors",
                        isSelected
                          ? "border-gold-500 bg-gold-400/20 text-warm-900"
                          : "border-cream-300 bg-cream-50 text-warm-700 hover:border-warm-500",
                      )}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field
                id={nameId}
                name="name"
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                autoComplete="name"
                spellCheck={false}
                required
              />
              <Field
                id={phoneId}
                name="phone"
                label="Telefon"
                type="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                autoComplete="tel"
                spellCheck={false}
                required
              />
            </div>

            <div>
              <label
                htmlFor={specialtyId}
                className="block text-[13px] font-medium text-warm-700 mb-2"
              >
                Fachrichtung (optional)
              </label>
              <select
                id={specialtyId}
                name="specialty"
                value={form.specialty}
                onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                autoComplete="off"
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
                !canSubmit && "opacity-50 cursor-not-allowed hover:translate-y-0",
              )}
            >
              Anfrage senden
            </Button>

            <p className="text-[12px] text-warm-500 text-center leading-[1.5]">
              Mit Absenden öffnet sich Ihr Mailprogramm mit einer vorbereiteten
              Nachricht an{" "}
              <a
                href="mailto:info@lonvy.at"
                className="underline hover:text-warm-900"
              >
                info@lonvy.at
              </a>
              . Es gilt unsere{" "}
              <a href="/datenschutz" className="underline hover:text-warm-900">
                Datenschutzerklärung
              </a>
              .
            </p>
          </form>
        ) : (
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center text-center gap-5 py-6"
          >
            <div
              className="w-16 h-16 rounded-full bg-gold-400/30 flex items-center justify-center"
              aria-hidden
            >
              <Check size={28} className="text-gold-800" />
            </div>
            <h2 id={titleId} className="text-[26px] text-warm-900">
              Fast geschafft!
            </h2>
            <p className="text-[15px] leading-[1.55] text-warm-700 max-w-[420px]">
              Ihr Mailprogramm hat sich geöffnet. Bitte senden Sie die
              vorbereitete Nachricht an{" "}
              <a
                href="mailto:info@lonvy.at"
                className="underline hover:text-warm-900"
              >
                info@lonvy.at
              </a>{" "}
              ab. Wir melden uns im gewünschten Zeitfenster direkt bei Ihnen.
            </p>
            <Button
              onClick={onClose}
              variant="secondary"
              size="md"
              className="mt-4"
            >
              Schließen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  inputMode,
  spellCheck,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric" | "url" | "search";
  spellCheck?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[13px] font-medium text-warm-700 mb-2"
      >
        {label}
        {required ? (
          <>
            <span className="text-gold-800" aria-hidden>
              {" *"}
            </span>
            <span className="sr-only"> (Pflichtfeld)</span>
          </>
        ) : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        spellCheck={spellCheck}
        className="w-full px-4 py-3.5 text-[15px] rounded-lg border-[1.5px] border-cream-300 bg-cream-50 text-warm-900 focus:border-gold-500 focus:outline-none transition-colors"
      />
    </div>
  );
}
