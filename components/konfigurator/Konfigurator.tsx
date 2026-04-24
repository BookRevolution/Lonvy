"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ArrowRight, ArrowLeft, FileText, Mail } from "lucide-react";
import {
  AUTO_FOCI,
  BASE_PRICE,
  FOCI,
  GENDER_LABELS,
  INDICATIONS,
  SPECIALTIES,
  scoreIngredients,
  type Ingredient,
} from "@/lib/konfigurator-data";
import { cn } from "@/lib/cn";
import { BottlePreview } from "./BottlePreview";
import { DatasheetModal } from "./DatasheetModal";

type Gender = "all" | "f" | "m";
type LabelFont = "serif" | "sans" | "mono";

const TOTAL_STEPS = 5;

export function Konfigurator() {
  const [step, setStep] = useState(1);
  const [specialty, setSpecialty] = useState("func");
  const [ageMin, setAgeMin] = useState(35);
  const [ageMax, setAgeMax] = useState(55);
  const [gender, setGender] = useState<Gender>("all");
  const [indication, setIndication] = useState<string | null>(null);
  const [focus, setFocus] = useState<Set<string>>(
    new Set(AUTO_FOCI.func),
  );
  const [ingredientsOff, setIngredientsOff] = useState<Set<string>>(new Set());
  const [praxisName, setPraxisName] = useState("Dr. med. Lara Vadlau");
  const [praxisSub, setPraxisSub] = useState(
    "Privatpraxis für funktionelle Medizin",
  );
  const [productName, setProductName] = useState("VITAL · 01");
  const [labelFont, setLabelFont] = useState<LabelFont>("serif");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string | null>(null);
  const [datasheetOpen, setDatasheetOpen] = useState(false);

  const logoInputRef = useRef<HTMLInputElement | null>(null);

  const ageMinId = useId();
  const ageMaxId = useId();
  const praxisId = useId();
  const praxisSubId = useId();
  const productId = useId();

  const allIngredients = useMemo(
    () => scoreIngredients(specialty, focus),
    [specialty, focus],
  );
  const activeIngredients = useMemo(
    () => allIngredients.filter((i) => !ingredientsOff.has(i.id)),
    [allIngredients, ingredientsOff],
  );

  const specialtyObj = useMemo(
    () => SPECIALTIES.find((s) => s.id === specialty),
    [specialty],
  );

  const price = useMemo(
    () => BASE_PRICE + activeIngredients.length * 2.4 + focus.size * 1.2,
    [activeIngredients, focus],
  );

  // When specialty changes, reset indication and auto-adjust focus
  useEffect(() => {
    setIndication(null);
    setFocus(new Set(AUTO_FOCI[specialty] ?? []));
    setIngredientsOff(new Set());
  }, [specialty]);

  // Keep age range sorted on input
  const handleAgeMin = (value: number) => {
    setAgeMin(Math.min(value, ageMax));
    if (value > ageMax) setAgeMax(value);
  };
  const handleAgeMax = (value: number) => {
    setAgeMax(Math.max(value, ageMin));
    if (value < ageMin) setAgeMin(value);
  };

  const toggleFocus = (f: string) => {
    setFocus((prev) => {
      const next = new Set(prev);
      if (next.has(f)) next.delete(f);
      else if (next.size < 3) next.add(f);
      return next;
    });
  };

  const toggleIngredient = (id: string) => {
    setIngredientsOff((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleLogoChange = useCallback((file: File | undefined | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (typeof ev.target?.result === "string") {
        setLogoDataUrl(ev.target.result);
        setLogoFileName(file.name);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const goStep = (n: number) => {
    if (n < 1 || n > TOTAL_STEPS) return;
    setStep(n);
  };

  const progressPct = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,380px)_minmax(420px,1fr)_minmax(300px,360px)] gap-0 bg-cream-50 border-t border-cream-300/60">
        {/* LEFT PANEL - STEPPER */}
        <aside className="border-b lg:border-b-0 lg:border-r border-cream-300/60 overflow-y-auto px-6 md:px-8 py-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-warm-500">
            <span aria-hidden className="h-px w-5 bg-warm-500" />
            <span>
              Schritt <span className="tabular-nums">{step}</span> von{" "}
              {TOTAL_STEPS}
            </span>
          </div>
          <h1 className="mt-4 font-serif font-light text-[34px] md:text-[40px] leading-[1.02] tracking-[-0.03em] text-warm-900">
            Ihre Supplement-Linie,{" "}
            <em className="italic text-gold-800">in wenigen Minuten.</em>
          </h1>
          <p className="mt-4 text-[14px] md:text-[15px] leading-[1.6] text-warm-700 max-w-[340px]">
            Wählen Sie Fachrichtung, Patientenprofil und Schwerpunkte, wir
            formulieren live eine Rezeptur, die zu Ihrer Praxis passt. Mit
            Ihrem Logo, auf Wunsch als White-Label.
          </p>

          <ol className="mt-8 flex flex-col">
            {/* Step 1 — Specialty */}
            <StepCard
              n={1}
              currentStep={step}
              title="Fachrichtung"
              meta="wählen"
              onJump={goStep}
            >
              <div className="grid grid-cols-2 gap-2">
                {SPECIALTIES.map((s) => {
                  const selected = specialty === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSpecialty(s.id)}
                      aria-pressed={selected}
                      className={cn(
                        "relative text-left border rounded-xl p-3 transition-all min-h-[64px] flex flex-col gap-1",
                        selected
                          ? "border-warm-900 bg-cream-100"
                          : "border-cream-300 bg-cream-50 hover:border-warm-500 hover:-translate-y-px",
                      )}
                    >
                      {selected ? (
                        <span
                          className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gold-700 flex items-center justify-center"
                          aria-hidden
                        >
                          <Check size={10} className="text-cream-50" strokeWidth={3} />
                        </span>
                      ) : null}
                      <span className="text-[13px] font-medium text-warm-900">
                        {s.name}
                      </span>
                      <span className="text-[11px] leading-[1.3] text-warm-500">
                        {s.description}
                      </span>
                    </button>
                  );
                })}
              </div>
              <StepNav onNext={() => goStep(2)} />
            </StepCard>

            {/* Step 2 — Patient profile */}
            <StepCard
              n={2}
              currentStep={step}
              title="Patientenprofil"
              meta="Alter · Geschlecht · Indikation"
              onJump={goStep}
            >
              {/* Age range */}
              <div>
                <div className="flex items-center justify-between text-[12px] text-warm-700">
                  <span>Altersspanne</span>
                  <span className="tabular-nums font-medium text-warm-900">
                    {ageMin}–{ageMax} Jahre
                  </span>
                </div>
                <label htmlFor={ageMinId} className="sr-only">
                  Mindestalter
                </label>
                <input
                  id={ageMinId}
                  type="range"
                  min={18}
                  max={80}
                  value={ageMin}
                  onChange={(e) => handleAgeMin(Number(e.target.value))}
                  className="w-full mt-2 accent-gold-700"
                />
                <label htmlFor={ageMaxId} className="sr-only">
                  Höchstalter
                </label>
                <input
                  id={ageMaxId}
                  type="range"
                  min={18}
                  max={80}
                  value={ageMax}
                  onChange={(e) => handleAgeMax(Number(e.target.value))}
                  className="w-full mt-1 accent-gold-700"
                />
              </div>

              <EyebrowLabel>Geschlecht</EyebrowLabel>
              <div className="flex flex-wrap gap-2">
                {(["all", "f", "m"] as Gender[]).map((g) => (
                  <ChipButton
                    key={g}
                    active={gender === g}
                    onClick={() => setGender(g)}
                  >
                    {GENDER_LABELS[g]}
                  </ChipButton>
                ))}
              </div>

              <EyebrowLabel>Hauptindikation</EyebrowLabel>
              <div className="flex flex-wrap gap-2">
                {(INDICATIONS[specialty] ?? []).map((ind) => (
                  <ChipButton
                    key={ind}
                    active={indication === ind}
                    onClick={() => setIndication(indication === ind ? null : ind)}
                  >
                    {ind}
                  </ChipButton>
                ))}
              </div>

              <StepNav
                onPrev={() => goStep(1)}
                onNext={() => goStep(3)}
              />
            </StepCard>

            {/* Step 3 — Focus */}
            <StepCard
              n={3}
              currentStep={step}
              title="Therapeutische Schwerpunkte"
              meta="max. 3"
              onJump={goStep}
            >
              <div className="flex flex-wrap gap-2">
                {FOCI.map((f) => (
                  <ChipButton
                    key={f}
                    active={focus.has(f)}
                    onClick={() => toggleFocus(f)}
                    disabled={!focus.has(f) && focus.size >= 3}
                  >
                    {f}
                  </ChipButton>
                ))}
              </div>
              <StepNav
                onPrev={() => goStep(2)}
                onNext={() => goStep(4)}
                nextLabel="Rezeptur ansehen"
              />
            </StepCard>

            {/* Step 4 — Ingredients */}
            <StepCard
              n={4}
              currentStep={step}
              title="Wirkstoff-Zusammensetzung"
              meta="live angepasst"
              onJump={goStep}
            >
              <p className="text-[12px] text-warm-500 leading-[1.5]">
                Unser Formulierer schlägt Wirkstoffe auf Basis Ihrer Auswahl
                vor. Deaktivieren Sie, was nicht passt.
              </p>
              <ul className="flex flex-col gap-2">
                {allIngredients.map((ing) => {
                  const off = ingredientsOff.has(ing.id);
                  return (
                    <li
                      key={ing.id}
                      className={cn(
                        "grid grid-cols-[1fr_auto] items-center gap-3 px-3 py-2.5 border rounded-lg bg-cream-50",
                        off ? "opacity-50 border-cream-300" : "border-cream-300",
                      )}
                    >
                      <div className="min-w-0">
                        <div className="text-[13px] font-medium text-warm-900 truncate">
                          {ing.name}
                        </div>
                        <div className="text-[11px] text-warm-500 truncate">
                          {ing.form} · {ing.foci.slice(0, 2).join(" · ")}
                        </div>
                        <div className="h-[3px] mt-1.5 bg-cream-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-[width] duration-300"
                            style={{
                              width: off ? "20%" : "80%",
                              background: ing.color,
                            }}
                            aria-hidden
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleIngredient(ing.id)}
                        aria-pressed={!off}
                        aria-label={`${ing.name} ${off ? "aktivieren" : "deaktivieren"}`}
                        className={cn(
                          "w-9 h-9 rounded-lg border flex items-center justify-center transition-colors",
                          off
                            ? "border-cream-300 bg-cream-50 text-warm-500 hover:border-warm-500"
                            : "border-warm-900 bg-warm-900 text-cream-50 hover:bg-gold-800 hover:border-gold-800",
                        )}
                      >
                        {off ? "+" : <Check size={14} strokeWidth={3} aria-hidden />}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <StepNav
                onPrev={() => goStep(3)}
                onNext={() => goStep(5)}
                nextLabel="Etikett entwerfen"
              />
            </StepCard>

            {/* Step 5 — Label */}
            <StepCard
              n={5}
              currentStep={step}
              title="Praxis-Etikett"
              meta="Live-Vorschau"
              onJump={goStep}
            >
              <FieldText
                id={praxisId}
                label="Praxisname"
                value={praxisName}
                onChange={setPraxisName}
                placeholder="Dr. med. Vorname Nachname"
              />
              <FieldText
                id={praxisSubId}
                label="Unterzeile (optional)"
                value={praxisSub}
                onChange={setPraxisSub}
                placeholder="z. B. Fachrichtung"
              />
              <FieldText
                id={productId}
                label="Produktname"
                value={productName}
                onChange={setProductName}
                placeholder="z. B. VITAL · 01"
              />

              <div>
                <span className="block text-[10.5px] uppercase tracking-[0.16em] text-warm-500 mb-2">
                  Praxislogo
                </span>
                <label
                  htmlFor="logoInput"
                  className={cn(
                    "block text-center cursor-pointer rounded-lg px-4 py-4 text-[12px] transition-colors",
                    logoDataUrl
                      ? "border border-solid border-gold-700 text-warm-900 bg-cream-100"
                      : "border border-dashed border-cream-300 text-warm-500 bg-cream-50/50 hover:border-gold-700 hover:text-warm-900",
                  )}
                >
                  {logoDataUrl ? (
                    <span className="inline-flex items-center gap-2">
                      <Check size={14} className="text-gold-800" aria-hidden />
                      {logoFileName ?? "Logo geladen"}
                    </span>
                  ) : (
                    "Logo hochladen · SVG/PNG"
                  )}
                  <input
                    ref={logoInputRef}
                    id="logoInput"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => handleLogoChange(e.target.files?.[0])}
                  />
                </label>
              </div>

              <div>
                <span className="block text-[10.5px] uppercase tracking-[0.16em] text-warm-500 mb-2">
                  Schriftart Etikett
                </span>
                <div className="flex gap-2">
                  {(["serif", "sans", "mono"] as LabelFont[]).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setLabelFont(f)}
                      aria-pressed={labelFont === f}
                      className={cn(
                        "flex-1 border rounded-lg py-2.5 text-[14px] transition-colors",
                        labelFont === f
                          ? "border-warm-900 bg-cream-100 text-warm-900"
                          : "border-cream-300 bg-cream-50 text-warm-700 hover:border-warm-500",
                        f === "serif" && "font-serif font-light",
                        f === "sans" && "font-sans font-medium",
                        f === "mono" && "font-mono uppercase text-[12px] tracking-wider",
                      )}
                    >
                      {f === "mono" ? "LONVY" : "Lonvy"}
                    </button>
                  ))}
                </div>
              </div>

              <StepNav
                onPrev={() => goStep(4)}
                onNext={() => setDatasheetOpen(true)}
                nextLabel="Fertigstellen"
                finalStep
              />
            </StepCard>
          </ol>
        </aside>

        {/* CENTER STAGE - BOTTLE PREVIEW */}
        <main className="relative min-h-[400px] lg:min-h-0 lg:h-auto bg-gradient-to-b from-cream-100/50 to-cream-50">
          <div className="absolute top-5 left-5 flex flex-col gap-2 z-[1] pointer-events-none">
            <Badge>Charge #LV-2604-A</Badge>
            <Badge color="terracotta">GMP Deutschland</Badge>
            <Badge color="amber">Live-Vorschau</Badge>
          </div>
          <div className="hidden md:block absolute top-5 right-5 max-w-[240px] text-right font-serif italic font-light text-[15px] leading-[1.3] text-warm-700 z-[1] pointer-events-none">
            „Kuratiert statt konfektioniert,<br />
            Ihre Praxis, Ihre Rezeptur."
          </div>
          <BottlePreview
            praxisName={praxisName}
            praxisSub={praxisSub}
            productName={productName}
            specialtyLabel={(specialtyObj?.name ?? "").toUpperCase()}
            labelFont={labelFont}
            logoDataUrl={logoDataUrl}
          />
        </main>

        {/* RIGHT PANEL - SUMMARY */}
        <aside className="border-t lg:border-t-0 lg:border-l border-cream-300/60 overflow-y-auto px-6 md:px-7 py-10 bg-gradient-to-b from-cream-100/40 to-cream-50">
          <h2 className="font-serif font-light text-[24px] leading-none tracking-[-0.02em] text-warm-900">
            {productName || "Ihre Rezeptur"}
          </h2>
          <p className="mt-1 text-[12px] text-warm-500">
            <span className="font-medium text-warm-900 tabular-nums">
              {activeIngredients.length}
            </span>{" "}
            Wirkstoffe ·{" "}
            <span className="font-medium text-warm-900">30</span> Tage
            Versorgung
          </p>

          {/* Price card */}
          <div className="mt-5 border border-cream-300 rounded-[14px] p-4 bg-gradient-to-b from-cream-50 to-cream-100/60">
            <div className="text-[10.5px] uppercase tracking-[0.2em] text-warm-500">
              Stückpreis · MOQ 50 Dosen
            </div>
            <div className="font-serif font-light text-[40px] leading-none tracking-[-0.02em] text-warm-900 mt-1.5 tabular-nums">
              €{price.toFixed(2).replace(".", ",")}
              <span className="font-sans text-[13px] font-normal text-warm-500 ml-2">
                / Dose
              </span>
            </div>
            <div className="text-[11px] text-warm-500 mt-1.5 leading-[1.5]">
              Inklusive Etikettendruck &amp; Praxislogo · netto zzgl. MwSt.
            </div>
          </div>

          {/* Profile card */}
          <div className="mt-4 border border-cream-300 rounded-[14px] p-4 bg-cream-50">
            <div className="text-[10.5px] uppercase tracking-[0.2em] text-warm-500 mb-2">
              Profil
            </div>
            <SumRow label="Fachrichtung" value={specialtyObj?.name ?? "—"} />
            <SumRow label="Patientenalter" value={`${ageMin}–${ageMax} Jahre`} />
            <SumRow label="Geschlecht" value={GENDER_LABELS[gender]} />
            <SumRow label="Indikation" value={indication ?? "—"} />
            <SumRow
              label="Schwerpunkte"
              value={[...focus].join(", ") || "—"}
            />
          </div>

          {/* Active ingredients chips */}
          <div className="mt-4 border border-cream-300 rounded-[14px] p-4 bg-cream-50">
            <div className="text-[10.5px] uppercase tracking-[0.2em] text-warm-500 mb-2">
              Wirkstoffe (aktiv)
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {activeIngredients.map((i) => (
                <span
                  key={i.id}
                  className="text-[10.5px] px-2 py-1 rounded-full bg-cream-200 text-warm-700 border"
                  style={{ borderColor: i.color + "55" }}
                >
                  {i.name}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <button
            type="button"
            onClick={() => setDatasheetOpen(true)}
            className="w-full mt-4 px-4 py-3.5 rounded-xl border border-warm-900 bg-warm-900 text-cream-50 text-[13px] flex items-center justify-center gap-2 hover:bg-gold-800 hover:border-gold-800 transition-colors"
          >
            <FileText size={14} aria-hidden />
            Datenblatt als PDF generieren
          </button>
          <a
            href={`mailto:info@lonvy.at?subject=Angebot%20${encodeURIComponent(productName)}&body=${encodeURIComponent(
              `Guten Tag,\n\nich interessiere mich für ein Angebot zu folgender Rezeptur:\n\nProdukt: ${productName}\nPraxis: ${praxisName}\nFachrichtung: ${specialtyObj?.name}\nZielgruppe: ${ageMin}-${ageMax} Jahre\nWirkstoffe: ${activeIngredients.map((i) => i.name).join(", ")}\n\nBitte um Rückmeldung.`,
            )}`}
            className="w-full mt-2 px-4 py-3.5 rounded-xl border border-warm-900 bg-transparent text-warm-900 text-[13px] flex items-center justify-center gap-2 hover:bg-cream-100 transition-colors"
          >
            <Mail size={14} aria-hidden />
            Angebot per E-Mail anfragen
          </a>
        </aside>
      </div>

      {/* Bottom progress bar */}
      <div
        className="sticky bottom-0 z-20 border-t border-cream-300/60 bg-cream-50/95 backdrop-blur-md px-6 md:px-8 py-3 flex items-center justify-between gap-4 flex-wrap text-[11.5px] text-warm-500"
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="tabular-nums font-medium text-warm-900">
            {progressPct}%
          </span>
          <div className="w-40 md:w-60 h-1 bg-cream-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold-700 transition-[width] duration-500"
              style={{ width: `${progressPct}%` }}
              aria-hidden
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-5 text-warm-700">
          <TrustItem>GMP-zertifiziert</TrustItem>
          <TrustItem>Studien-hinterlegt</TrustItem>
          <TrustItem>Herstellung in DE</TrustItem>
          <TrustItem>Reinheitsanalyse pro Charge</TrustItem>
        </div>
      </div>

      <DatasheetModal
        open={datasheetOpen}
        onClose={() => setDatasheetOpen(false)}
        productName={productName}
        praxisName={praxisName}
        specialty={specialtyObj}
        ageMin={ageMin}
        ageMax={ageMax}
        focus={[...focus]}
        ingredients={activeIngredients}
      />
    </>
  );
}

/* --- Helpers --- */

function StepCard({
  n,
  currentStep,
  title,
  meta,
  onJump,
  children,
}: {
  n: number;
  currentStep: number;
  title: string;
  meta?: string;
  onJump: (n: number) => void;
  children: React.ReactNode;
}) {
  const isActive = currentStep === n;
  const isDone = currentStep > n;
  return (
    <li
      className={cn(
        "relative border-t border-cream-300 py-4 pl-10",
        n === TOTAL_STEPS && "border-b",
      )}
    >
      <button
        type="button"
        onClick={() => onJump(n)}
        className={cn(
          "absolute left-0 top-5 w-[22px] h-[22px] rounded-full border flex items-center justify-center text-[10px] tabular-nums transition-all",
          isActive &&
            "bg-warm-900 text-cream-50 border-warm-900 shadow-[0_0_0_4px_rgba(42,37,32,0.15)]",
          isDone && !isActive && "bg-gold-700 text-cream-50 border-gold-700",
          !isActive && !isDone && "bg-cream-50 text-warm-500 border-cream-300",
        )}
        aria-label={`Schritt ${n}: ${title}`}
        aria-current={isActive ? "step" : undefined}
      >
        {isDone && !isActive ? <Check size={11} strokeWidth={3} /> : n}
      </button>
      <button
        type="button"
        onClick={() => onJump(n)}
        className="w-full text-left flex items-baseline justify-between gap-3"
      >
        <span className="text-[14px] font-medium tracking-[-0.01em] text-warm-900">
          {title}
        </span>
        {meta ? (
          <span className="text-[11px] text-warm-500">{meta}</span>
        ) : null}
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity,margin] duration-300",
          isActive ? "max-h-[900px] opacity-100 mt-4" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </li>
  );
}

function StepNav({
  onPrev,
  onNext,
  nextLabel = "Weiter",
  finalStep = false,
}: {
  onPrev?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  finalStep?: boolean;
}) {
  return (
    <div className="flex justify-between gap-3 mt-2">
      {onPrev ? (
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 text-[12.5px] px-4 py-2 border border-cream-300 bg-cream-50 text-warm-900 rounded-full hover:border-warm-900 transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Zurück
        </button>
      ) : (
        <span />
      )}
      {onNext ? (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 text-[12.5px] px-4 py-2 border border-warm-900 bg-warm-900 text-cream-50 rounded-full hover:bg-gold-800 hover:border-gold-800 transition-colors"
        >
          {finalStep ? <Check size={14} aria-hidden /> : null}
          {nextLabel}
          {!finalStep ? <ArrowRight size={14} aria-hidden /> : null}
        </button>
      ) : null}
    </div>
  );
}

function ChipButton({
  active,
  onClick,
  disabled,
  children,
}: {
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={cn(
        "text-[11.5px] px-3 py-2 rounded-full border transition-colors",
        active
          ? "bg-warm-900 text-cream-50 border-warm-900"
          : "bg-cream-50 text-warm-700 border-cream-300 hover:border-warm-500 hover:text-warm-900",
        disabled && "opacity-40 cursor-not-allowed hover:border-cream-300",
      )}
    >
      {children}
    </button>
  );
}

function EyebrowLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] text-warm-500 mt-2">
      <span aria-hidden className="h-px w-4 bg-warm-500" />
      {children}
    </div>
  );
}

function FieldText({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10.5px] uppercase tracking-[0.16em] text-warm-500 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 text-[13px] border border-cream-300 rounded-lg bg-cream-50 text-warm-900 focus:border-gold-700 focus:outline-none transition-colors"
      />
    </div>
  );
}

function SumRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center gap-3 py-1.5 border-t border-cream-300/60 first:border-t-0 text-[13px]">
      <span className="text-warm-500 flex-shrink-0">{label}</span>
      <span
        className="text-warm-900 font-medium tabular-nums text-right overflow-hidden text-ellipsis whitespace-nowrap max-w-[60%]"
        title={value}
      >
        {value}
      </span>
    </div>
  );
}

function Badge({
  color = "sage",
  children,
}: {
  color?: "sage" | "terracotta" | "amber";
  children: React.ReactNode;
}) {
  const dotColor =
    color === "terracotta"
      ? "#b8693f"
      : color === "amber"
      ? "#d49a52"
      : "#8f7340";
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-50/80 border border-cream-300/70 backdrop-blur-sm text-[11.5px] text-warm-700">
      <span
        className="w-[6px] h-[6px] rounded-full"
        style={{ background: dotColor }}
        aria-hidden
      />
      {children}
    </div>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <Check size={12} className="text-gold-700" strokeWidth={2.5} aria-hidden />
      {children}
    </span>
  );
}
