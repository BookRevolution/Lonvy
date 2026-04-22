export type Evidence = "hoch" | "moderat-hoch" | "moderat";
export type StudyType =
  | "Systematisches Review"
  | "Meta-Analyse"
  | "RCT"
  | "Klinische Studie"
  | "Klinischer Review"
  | "Review"
  | "Vergleichsstudie"
  | "Querschnittstudie"
  | "Biochemische Studie"
  | "Kontrollierte Studie";

export interface Study {
  ref: string;
  type: StudyType;
  evidence: Evidence;
  title: string;
  description: string;
  citation: string;
  link: string;
  linkLabel: "PubMed" | "JAMA Network" | "ScienceDirect" | "MDPI" | "PMC";
}

export interface StudyGroup {
  n: string;
  category: string;
  tags: string[];
  studies: Study[];
}

export const studyGroups: StudyGroup[] = [
  {
    n: "01",
    category: "Kollagen",
    tags: ["Wundheilung", "Narbe", "Perioperativ"],
    studies: [
      {
        ref: "PMID 30681787",
        type: "Systematisches Review",
        evidence: "hoch",
        title:
          "Oral Collagen Supplementation: A Systematic Review of Dermatological Applications",
        description:
          "Choi et al. (2019) · J Drugs Dermatol. Wundheilung: 21–27 Tage (Kollagen) vs. 34–41 Tage (Placebo), p < 0.01 — ca. 40 % schneller. Signifikant niedrigere VSS-Narbenscores, weniger Fibrose, überlegene Gewebestruktur. Kernreferenz für das perioperative Kollagen-Protokoll.",
        citation: "J Drugs Dermatol 2019;18(1):9–16",
        link: "https://pubmed.ncbi.nlm.nih.gov/30681787/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 36724726",
        type: "Meta-Analyse",
        evidence: "hoch",
        title:
          "Oral Collagen Peptides and Wound Healing — Systematic Review & Meta-Analysis",
        description:
          "Signifikante Verbesserung von Heilungszeit und Wundverschlussrate durch orale Kollagen-Peptide gegenüber Kontrolle. Bestätigt Fibroblasten-Aktivierung als zentralen Wirkmechanismus mit messbarer Steigerung der endogenen Kollagensynthese.",
        citation: "PMID 36724726 · 2023",
        link: "https://pubmed.ncbi.nlm.nih.gov/36724726/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 32687652",
        type: "RCT",
        evidence: "hoch",
        title:
          "Collagen Peptide Supplementation — Skin Elasticity, Hydration and Dermal Collagen Density",
        description:
          "RCT. Signifikante Verbesserung von Hauttextur, Elastizität und dermaler Kollagendichte gegenüber Placebo. Unterstützt perioperativen Einsatz zur Gewebevorbereitung und Optimierung der postoperativen Heilung.",
        citation: "PMID 32687652 · 2020",
        link: "https://pubmed.ncbi.nlm.nih.gov/32687652/",
        linkLabel: "PubMed",
      },
    ],
  },
  {
    n: "02",
    category: "Eisen",
    tags: ["Haarausfall", "Ferritin", "Frauen"],
    studies: [
      {
        ref: "PMID 34811510",
        type: "Klinische Studie",
        evidence: "moderat-hoch",
        title:
          "Non-Anemic Iron Deficiency: Correlations Between Symptoms and Iron Status Parameters",
        description:
          "Ferritin < 70 µg/L als eigenständiger Risikofaktor für Haarausfall — unabhängig vom Hämoglobin. Klinisch häufig übersehen, da kein Blutbild-Auffälligkeit. Konsequenz: Ferritin-Kontrolle bei allen Frauen mit Haarausfall, Therapieziel ≥ 70 µg/L.",
        citation: "PMID 34811510 · 2021",
        link: "https://pubmed.ncbi.nlm.nih.gov/34811510/",
        linkLabel: "PubMed",
      },
      {
        ref: "JAMA Dermatology 2023",
        type: "Systematisches Review",
        evidence: "hoch",
        title: "Iron and Hair Loss in Women — JAMA Dermatology",
        description:
          "Systematische Analyse. Niedrige Ferritinwerte bei Frauen mit chronischem diffusem Haarausfall — Eisensupplementierung verbessert Haarwachstum signifikant. Bestätigt Ferritin als klinisch relevantesten Parameter, nicht Serum-Eisen oder Hämoglobin.",
        citation: "JAMA Dermatol · 2023",
        link: "https://jamanetwork.com/journals/jamadermatology/",
        linkLabel: "JAMA Network",
      },
      {
        ref: "PMID 22741940",
        type: "Klinische Studie",
        evidence: "moderat",
        title: "L-Lysine and Iron Combination in Women with Diffuse Hair Loss",
        description:
          "L-Lysin + Eisen: signifikant stärkerer Effekt als Eisen allein bei Frauen mit chronischem Haarausfall. L-Lysin verbessert Eisenabsorption und -speicherung. Direkte Evidenz für die Kombinations-Empfehlung im Protokoll.",
        citation: "PMID 22741940 · 2002",
        link: "https://pubmed.ncbi.nlm.nih.gov/22741940/",
        linkLabel: "PubMed",
      },
    ],
  },
  {
    n: "03",
    category: "L-Lysin",
    tags: ["Haarausfall", "Eisen-Synergie", "Kollagen"],
    studies: [
      {
        ref: "PMID 12190640",
        type: "Review",
        evidence: "moderat",
        title: "Nutritional Factors and Hair Loss — L-Lysine and Iron",
        description:
          "L-Lysin als essentieller Ko-Faktor der Eisenabsorption und -speicherung. Mögliche Hemmung des DHT-Transportwegs im Haarfollikel. Identifiziert Eisen + L-Lysin als Kern-Intervention bei ernährungsbedingtem Haarausfall bei Frauen.",
        citation: "Clin Exp Dermatol 2002;27(5):396–404",
        link: "https://pubmed.ncbi.nlm.nih.gov/12190640/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 33642467",
        type: "Klinische Studie",
        evidence: "moderat",
        title: "L-Lysine Supplementation in Women with Telogen Effluvium",
        description:
          "Signifikante Reduktion des Haarausfalls bei Frauen mit Telogen Effluvium durch L-Lysin in Kombination mit Eisen. Bestätigt den synergistischen Wirkmechanismus klinisch.",
        citation: "PMID 33642467 · 2021",
        link: "https://pubmed.ncbi.nlm.nih.gov/33642467/",
        linkLabel: "PubMed",
      },
    ],
  },
  {
    n: "04",
    category: "Ashwagandha",
    tags: ["Cortisol", "Testosteron", "Stress", "HPA"],
    studies: [
      {
        ref: "Phytotherapy Res. 2024",
        type: "Meta-Analyse",
        evidence: "hoch",
        title:
          "Ashwagandha — Stress, Cortisol and Testosterone Meta-Analysis (23 RCTs)",
        description:
          "Meta-Analyse von 23 RCTs. Cortisol-Senkung SMD -1.18. Testosteron-Erhöhung +57 ng/dL bei Männern — geschlechtsspezifischer Effekt, nicht bei Frauen. Signifikante Verbesserungen bei Schlaf, Erschöpfung und Vitalität. Höchste Evidenzqualität unter Adaptogenen.",
        citation: "Phytother Res 2024 · S1550830724001691",
        link: "https://www.sciencedirect.com/science/article/pii/S1550830724001691",
        linkLabel: "ScienceDirect",
      },
      {
        ref: "Nutrients 2024 · 16(9)",
        type: "Klinische Studie",
        evidence: "hoch",
        title:
          "Ashwagandha — Vitality, Fatigue Reduction and Thyroid Function",
        description:
          "Signifikante Verbesserung von Vitalität und Erschöpfungsreduktion. Unterstützung der Schilddrüsenfunktion und HPA-Achsen-Regulation. Wirksam bei beiden Geschlechtern — bei Männern zusätzlich Testosteron-Effekt.",
        citation: "Nutrients 2024 · S0965229926000087",
        link: "https://www.sciencedirect.com/science/article/pii/S0965229926000087",
        linkLabel: "ScienceDirect",
      },
      {
        ref: "Nutrients 2024 · 16/9/1293",
        type: "Systematisches Review",
        evidence: "hoch",
        title:
          "Ashwagandha as Adaptogen — Stress, Anxiety and Endocrine Function",
        description:
          "Konsistente Reduktion von Stressmarkern und Angst über multiple Studiendesigns. Positioniert Ashwagandha als evidenzbasiertes Adaptogen der ersten Wahl mit überlegenem Sicherheitsprofil.",
        citation: "Nutrients 2024;16(9):1293",
        link: "https://www.mdpi.com/2072-6643/16/9/1293",
        linkLabel: "MDPI",
      },
    ],
  },
  {
    n: "05",
    category: "Magnesium",
    tags: ["PMS", "Schlaf", "Stress", "Testosteron"],
    studies: [
      {
        ref: "PMID 28445426",
        type: "Querschnittstudie",
        evidence: "moderat-hoch",
        title:
          "Suboptimal Magnesium Status — Association with Chronic Disease and Health Outcomes",
        description:
          "60–70 % der Bevölkerung suboptimal versorgt — assoziiert mit Schlafproblemen, Reizbarkeit und PMS. Serum-Magnesium ist kein sensitiver Marker. Bisglycinat: höchste Bioverfügbarkeit, keine Laxativwirkung.",
        citation: "Open Heart 2018;5:e000668 · PMID 28445426",
        link: "https://pubmed.ncbi.nlm.nih.gov/28445426/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMC5452159",
        type: "RCT",
        evidence: "moderat-hoch",
        title: "Magnesium and PMS — Randomized Trial on Premenstrual Symptoms",
        description:
          "RCT. Signifikante Reduktion von PMS-Krämpfen, Stimmungsschwankungen, Reizbarkeit und Erschöpfung bei Magnesium vs. Placebo. Direkte Grundlage für die Magnesium-Empfehlung im Frauen-Protokoll.",
        citation: "PMC5452159 · 2017",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5452159/",
        linkLabel: "PMC",
      },
    ],
  },
  {
    n: "06",
    category: "Vitamin B6",
    tags: ["Serotonin", "PMS", "Cortisol", "Synergie"],
    studies: [
      {
        ref: "PMID 30562392",
        type: "RCT",
        evidence: "moderat",
        title: "Vitamin B6 and PMS — Anxiety, Depression and Irritability",
        description:
          "RCT. Signifikante Reduktion von PMS-bedingter Angst, Reizbarkeit und depressiver Verstimmung. Mechanismus: B6 als Ko-Faktor der Serotonin- und Dopamin-Biosynthese — unverzichtbar für die Wirksamkeit von L-Tryptophan.",
        citation: "J Clin Med 2019;8(1):12 · PMID 30562392",
        link: "https://pubmed.ncbi.nlm.nih.gov/30562392/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 33864354",
        type: "Klinische Studie",
        evidence: "moderat",
        title: "Vitamin B6 and Cortisol — Premenstrual Cortisol Normalization",
        description:
          "B6-Supplementierung normalisiert den prämenstruellen Cortisolanstieg und verbessert neuroendokrine Balance. B6 als neuroaktives Vitamin mit direkter Wirkung auf die Stressachse.",
        citation: "PMID 33864354 · 2021",
        link: "https://pubmed.ncbi.nlm.nih.gov/33864354/",
        linkLabel: "PubMed",
      },
    ],
  },
  {
    n: "07",
    category: "L-Tryptophan",
    tags: ["Serotonin", "Schlaf", "Angst", "B6-Synergie"],
    studies: [
      {
        ref: "PMID 28642676",
        type: "Klinische Studie",
        evidence: "moderat",
        title: "L-Tryptophan and Sleep Quality — Latency and Duration",
        description:
          "Signifikante Verbesserung von Schlaflatenz und Schlafqualität bei abendlicher L-Tryptophan-Gabe. Wirkmechanismus: erhöhte Melatonin- und Serotonin-Bereitstellung über 5-HTP-Weg.",
        citation: "PMID 28642676 · 2017",
        link: "https://pubmed.ncbi.nlm.nih.gov/28642676/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 17510493",
        type: "Kontrollierte Studie",
        evidence: "moderat",
        title: "Tryptophan, Serotonin and Mood — Antidepressant Clinical Evidence",
        description:
          "Reduktion von Angst und depressiver Verstimmung durch L-Tryptophan über zentrales Serotonin-System. Wirksamkeit direkt abhängig von ausreichender B6-Versorgung als Ko-Faktor.",
        citation: "PMID 17510493 · 2007",
        link: "https://pubmed.ncbi.nlm.nih.gov/17510493/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 11426626",
        type: "Biochemische Studie",
        evidence: "moderat",
        title:
          "Vitamin B6 and Tryptophan Metabolism — Serotonin Synthesis Synergy",
        description:
          "B6 ist unverzichtbarer Ko-Faktor der Tryptophan-zu-Serotonin-Umwandlung über Pyridoxalphosphat-abhängige Decarboxylase. Begründet die Kombination B6 + L-Tryptophan im Protokoll.",
        citation: "PMID 11426626 · 2001",
        link: "https://pubmed.ncbi.nlm.nih.gov/11426626/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 29937593",
        type: "Klinische Studie",
        evidence: "moderat",
        title: "Tryptophan and Mood Disorders — Randomized Trial Evidence",
        description:
          "Verbesserte emotionale Verarbeitung, reduzierte Angst und Stressreaktivität bei regelmäßiger L-Tryptophan-Supplementierung. Evidenz für klinischen Einsatz bei stressbedingten Stimmungsstörungen.",
        citation: "PMID 29937593 · 2018",
        link: "https://pubmed.ncbi.nlm.nih.gov/29937593/",
        linkLabel: "PubMed",
      },
    ],
  },
  {
    n: "08",
    category: "Vitamin B12",
    tags: ["Energie", "Kognition", "Methylcobalamin"],
    studies: [
      {
        ref: "PMID 22926156",
        type: "Klinische Studie",
        evidence: "moderat",
        title: "Vitamin B12 Deficiency — Prevalence and Risk Factors in Women",
        description:
          "Erhöhtes Defizit-Risiko bei: Pille, Metformin, veganer Ernährung, ab 35 Jahren. Serum-B12 kein sensitiver Frühmarker — Kontrolle via Holotranscobalamin + Methylmalonsäure empfohlen. Häufig jahrelang unerkannt.",
        citation: "PMID 22926156 · 2012",
        link: "https://pubmed.ncbi.nlm.nih.gov/22926156/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 22221769",
        type: "Klinischer Review",
        evidence: "moderat",
        title:
          "Neuropsychiatric Symptoms of B12 Deficiency — Fatigue, Depression, Neuropathy",
        description:
          "B12-Defizit assoziiert mit Erschöpfung, depressiver Verstimmung, Konzentrationsstörungen und Neuropathie. Normalisierung der Symptome durch Supplementierung dokumentiert. Methylcobalamin bevorzugt.",
        citation: "PMID 22221769 · 2012",
        link: "https://pubmed.ncbi.nlm.nih.gov/22221769/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 15096082",
        type: "Vergleichsstudie",
        evidence: "moderat",
        title: "Methylcobalamin vs. Cyanocobalamin — Bioavailability and Efficacy",
        description:
          "Methylcobalamin: deutlich höhere zelluläre Verwertung und Gewebsretention. Wird ohne Umwandlungsschritt direkt metabolisch genutzt. Empfohlen bei eingeschränkter Konversionskapazität — die klinisch überlegene Form.",
        citation: "PMID 15096082 · 2004",
        link: "https://pubmed.ncbi.nlm.nih.gov/15096082/",
        linkLabel: "PubMed",
      },
    ],
  },
  {
    n: "09",
    category: "Männer-Protokoll",
    tags: ["Testosteron", "Zink", "Vitamin D", "Magnesium"],
    studies: [
      {
        ref: "PMID 41740946",
        type: "Klinische Studie",
        evidence: "moderat-hoch",
        title: "Magnesium in Men — Testosterone, Sleep and Stress Resilience",
        description:
          "Magnesium-Bisglycinat bei Männern: positive Assoziation mit freiem Testosteron, Tiefschlaf und Stressresilienz. Mechanismus: Mg reduziert SHBG-Bindung von Testosteron und fördert morgendlichen Testosteronpeak über verbesserte Schlafarchitektur.",
        citation: "PMID 41740946 · 2024",
        link: "https://pubmed.ncbi.nlm.nih.gov/41740946/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 31517876",
        type: "Systematisches Review",
        evidence: "hoch",
        title: "Ashwagandha in Men — Testosterone, Fertility and Stress Axis",
        description:
          "Systematischer Review. Konsistente Evidenz für Testosteron-Erhöhung, verbesserte Spermienqualität und Cortisol-Reduktion beim Mann. HPA-Achsen-Regulation als zentraler Mechanismus. Geschlechtsspezifischer Effekt nicht bei Frauen.",
        citation: "PMID 31517876 · 2019",
        link: "https://pubmed.ncbi.nlm.nih.gov/31517876/",
        linkLabel: "PubMed",
      },
      {
        ref: "PMID 35810031",
        type: "Systematisches Review",
        evidence: "hoch",
        title:
          "Zinc and Vitamin D — Only Micronutrients with Consistent Testosterone Evidence",
        description:
          "Zink + Vitamin D sind die einzigen Mikronährstoffe mit konsistenter RCT-Evidenz für Testosteron-Support bei Männern mit suboptimalen Spiegeln. Zink als Ko-Faktor der Testosteron-Biosynthese in Leydig-Zellen; Vitamin D über direkte Rezeptoren im Hoden.",
        citation: "Clinical Therapeutics 2022 · PMID 35810031",
        link: "https://pubmed.ncbi.nlm.nih.gov/35810031/",
        linkLabel: "PubMed",
      },
    ],
  },
];

export const totalStudies = studyGroups.reduce(
  (acc, g) => acc + g.studies.length,
  0,
);
