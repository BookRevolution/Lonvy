export interface Specialty {
  id: string;
  name: string;
  description: string;
}

export interface Ingredient {
  id: string;
  name: string;
  form: string;
  color: string;
  tags: string[];
  foci: string[];
}

export const SPECIALTIES: Specialty[] = [
  { id: "ortho", name: "Orthomolekular", description: "Mikronährstoff-Therapie, Deficits" },
  { id: "gyn", name: "Gynäkologie", description: "Zyklus, Kinderwunsch, Menopause" },
  { id: "sport", name: "Sportmedizin", description: "Regeneration, Leistung" },
  { id: "derma", name: "Dermatologie", description: "Haut, Haar, Kollagen" },
  { id: "func", name: "Funktionelle Medizin", description: "Darm, Mitochondrien, Stress" },
  { id: "endo", name: "Endokrinologie", description: "Schilddrüse, Hormone" },
];

export const INDICATIONS: Record<string, string[]> = {
  ortho: ["Müdigkeit", "Immundefizit", "Eisenmangel", "Stress", "Osteoporose"],
  gyn: ["Kinderwunsch", "PMS", "Menopause", "Endometriose", "Schwangerschaft"],
  sport: ["Regeneration", "Ausdauer", "Muskelaufbau", "Gelenke", "Sehnen"],
  derma: ["Kollagen", "Akne", "Haarausfall", "Anti-Aging", "Neurodermitis"],
  func: ["Darmgesundheit", "Mitochondrien", "Stress/Burnout", "Entgiftung", "Schlaf"],
  endo: ["Schilddrüse", "Insulinresistenz", "Nebenniere", "Testosteron", "Östrogen"],
};

export const FOCI: string[] = [
  "Entzündung senken",
  "Energie & Mitochondrien",
  "Immunmodulation",
  "Antioxidativ",
  "Hormonbalance",
  "Darmachse",
  "Schlafqualität",
  "Kognition",
  "Gelenkgesundheit",
  "Regeneration",
];

export const INGREDIENTS: Ingredient[] = [
  { id: "mg", name: "Magnesium-Bisglycinat", form: "400 mg", color: "#8ea89f", tags: ["ortho", "sport", "func"], foci: ["Schlafqualität", "Regeneration", "Entzündung senken"] },
  { id: "d3", name: "Vitamin D3 + K2", form: "2000 IE", color: "#d49a52", tags: ["ortho", "gyn", "derma", "endo"], foci: ["Immunmodulation", "Hormonbalance"] },
  { id: "omega", name: "Omega-3 EPA/DHA", form: "1500 mg", color: "#c6a869", tags: ["ortho", "derma", "func", "sport"], foci: ["Entzündung senken", "Kognition", "Regeneration"] },
  { id: "b", name: "B-Komplex aktiviert", form: "methyl.", color: "#b8693f", tags: ["ortho", "func", "gyn"], foci: ["Energie & Mitochondrien", "Kognition"] },
  { id: "q10", name: "Ubiquinol Q10", form: "100 mg", color: "#d17c4d", tags: ["sport", "func", "endo"], foci: ["Energie & Mitochondrien", "Antioxidativ"] },
  { id: "zn", name: "Zink-Bisglycinat", form: "15 mg", color: "#a08b6a", tags: ["ortho", "derma", "gyn"], foci: ["Immunmodulation"] },
  { id: "se", name: "Selen-Methionin", form: "200 µg", color: "#7a6d52", tags: ["endo", "ortho"], foci: ["Hormonbalance", "Antioxidativ"] },
  { id: "fe", name: "Eisen-Bisglycinat", form: "20 mg", color: "#8c3a2a", tags: ["gyn", "ortho", "sport"], foci: ["Energie & Mitochondrien"] },
  { id: "coll", name: "Kollagen-Peptide Typ I", form: "10 g", color: "#c9b08e", tags: ["derma", "sport"], foci: ["Gelenkgesundheit"] },
  { id: "cur", name: "Curcumin (Meriva®)", form: "500 mg", color: "#c87a2f", tags: ["sport", "func", "derma"], foci: ["Entzündung senken", "Antioxidativ"] },
  { id: "ash", name: "Ashwagandha KSM-66", form: "600 mg", color: "#7a8a6f", tags: ["func", "endo", "gyn"], foci: ["Hormonbalance", "Schlafqualität"] },
  { id: "pro", name: "Probiotikum 20 Mrd.", form: "5 Stämme", color: "#9fae84", tags: ["func", "derma", "gyn"], foci: ["Darmachse", "Immunmodulation"] },
  { id: "lact", name: "L-Carnitin", form: "1000 mg", color: "#d6be7d", tags: ["sport", "endo"], foci: ["Energie & Mitochondrien"] },
  { id: "glut", name: "L-Glutamin", form: "3000 mg", color: "#b7bfa0", tags: ["sport", "func"], foci: ["Darmachse", "Regeneration"] },
  { id: "hya", name: "Hyaluronsäure low-mw", form: "120 mg", color: "#cba675", tags: ["derma", "sport"], foci: ["Gelenkgesundheit"] },
  { id: "folat", name: "Methylfolat", form: "400 µg", color: "#8fa876", tags: ["gyn", "ortho"], foci: ["Kognition"] },
  { id: "inos", name: "Inositol", form: "2000 mg", color: "#aa9e7a", tags: ["gyn", "endo"], foci: ["Hormonbalance"] },
  { id: "rhod", name: "Rhodiola Rosea", form: "300 mg", color: "#8e6a4a", tags: ["sport", "func"], foci: ["Energie & Mitochondrien"] },
];

export const AUTO_FOCI: Record<string, string[]> = {
  ortho: ["Energie & Mitochondrien", "Antioxidativ"],
  gyn: ["Hormonbalance", "Entzündung senken"],
  sport: ["Regeneration", "Energie & Mitochondrien"],
  derma: ["Antioxidativ", "Gelenkgesundheit"],
  func: ["Energie & Mitochondrien", "Darmachse"],
  endo: ["Hormonbalance", "Antioxidativ"],
};

export const BASE_PRICE = 28;

export const GENDER_LABELS: Record<string, string> = {
  all: "Alle",
  f: "Weiblich",
  m: "Männlich",
};

export function scoreIngredients(
  specialty: string,
  focus: Set<string>,
): Ingredient[] {
  const scored = INGREDIENTS.map((ing) => {
    let s = 0;
    if (ing.tags.includes(specialty)) s += 3;
    ing.foci.forEach((f) => {
      if (focus.has(f)) s += 2;
    });
    return { ing, s };
  }).sort((a, b) => b.s - a.s);

  let picked = scored.filter((x) => x.s > 0).slice(0, 7).map((x) => x.ing);
  if (picked.length < 5) picked = scored.slice(0, 5).map((x) => x.ing);
  return picked;
}
