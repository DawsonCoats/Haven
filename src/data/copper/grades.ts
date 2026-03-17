import { Material } from '../types';

export const copperC110: Material = {
  id: 'cu-c110',
  name: 'C110 Electrolytic Tough Pitch Copper',
  family: 'copper',
  subFamily: 'Pure Copper',
  mechanical: {
    density: 8.94,
    tensileStrength: { min: 221, max: 393, typical: 221 },
    yieldStrength: { min: 69, max: 345, typical: 69 },
    elongation: { min: 6, max: 45, typical: 45 },
    hardness: {
      brinell: { min: 42, max: 100, typical: 42 },
      rockwellB: { min: 10, max: 52, typical: 10 },
    },
    elasticModulus: 117,
    shearModulus: 44,
    poissonRatio: 0.34,
    fatigueStrength: { min: 69, max: 97, typical: 69 },
  },
  thermal: {
    conductivity: 391,
    thermalExpansion: 17.0,
    specificHeat: 385,
    meltingRange: { min: 1065, max: 1083 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Fair weldability — high thermal conductivity requires high heat input (preheat to 200-300°C for sections over 6 mm). TIG or oxy-acetylene welding with deoxidized copper (C122) filler avoids oxygen embrittlement at welds. Resistance welding is difficult due to high conductivity. For most copper applications, silver brazing or soldering is preferred over fusion welding.',
  },
  standards: {
    astm: ['B152', 'B187', 'B272'],
    uns: 'C11000',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    'C110 (Electrolytic Tough Pitch, ETP) is the most widely produced copper alloy, with 99.9% minimum copper content and approximately 200-400 ppm oxygen present as Cu2O. The oxygen is introduced during the electrolytic refining process and remains as finely dispersed cuprous oxide particles. C110 provides the highest electrical conductivity of any widely available engineering material (100% IACS — International Annealed Copper Standard), making it the universal standard for electrical wiring, bus bars, and conductors. Its combination of excellent electrical and thermal conductivity, good corrosion resistance, and exceptional formability makes it the default choice for electrical applications.',
  keyCharacteristics: [
    'Highest electrical conductivity of any widely available engineering material — 100% IACS (58 MS/m)',
    'Excellent thermal conductivity (391 W/m·K) — second only to silver among pure metals',
    'Softens easily — excellent cold formability and drawing characteristics',
    '99.9% Cu minimum with ~250 ppm O (as Cu2O) — "tough pitch" refers to this oxygen content',
    'Non-heat-treatable — strengthened only by cold work',
    'Not suitable for hydrogen-bearing atmospheres (hydrogen embrittlement via Cu2O reduction)',
  ],
  commonApplications: [
    'Electrical wire and cable (building wiring, power cables)',
    'Bus bars and electrical conductors',
    'Transformer windings and motor windings',
    'Electrical contacts and terminals',
    'Heat exchangers and radiators',
    'Roofing and architectural cladding',
    'Plumbing tube and fittings',
  ],
  industries: ['Electrical', 'Construction', 'Electronics', 'HVAC'],
  beginnerNote:
    "C110 is the standard electrical copper — what your house wiring is made from. Its biggest property is electrical conductivity: it conducts electricity better than almost anything else (only silver is better, but silver is too expensive). It's also extremely easy to shape and bend, which is why copper wiring can be pulled through conduit and crimped into terminals. The main limitation: it's soft (can't take high loads), corrodes in certain environments, and costs more than steel or aluminum.",
  expertNote:
    'IACS (International Annealed Copper Standard) definition: C110 annealed = 100% IACS = 58 MS/m resistivity = 1.724 µΩ·cm. The oxygen content (~200-400 ppm as Cu2O) causes hydrogen embrittlement: in reducing hydrogen atmospheres above ~400°C, H2 reduces Cu2O to Cu + H2O(steam), creating internal steam pressure that causes blistering and intergranular cracking — specify C101 (oxygen-free ETP) or C102 (OFHC, oxygen-free high-conductivity) for hydrogen atmosphere service. Thermal conductivity (391 W/m·K) vs aluminum (167 W/m·K) vs steel (50 W/m·K) — copper is ~8× better than steel as heat conductor. Work hardening: 60% cold reduction increases UTS from 221 to 393 MPa with corresponding ductility reduction (45% → 6% elongation). Annealing recovery: fully annealed at 250-650°C; grain growth at 350°C+ for lightly cold-worked material.',
  tempers: [
    {
      designation: 'O60 (Annealed)',
      description:
        'Fully annealed — maximum ductility for wire drawing and forming; as-drawn soft condition',
      tensileStrength: { min: 221, max: 262, typical: 221 },
      yieldStrength: { min: 69, max: 97, typical: 69 },
      elongation: { min: 35, max: 50, typical: 45 },
      hardness: { brinell: 42 },
    },
    {
      designation: 'H04 (1/2 Hard)',
      description:
        'Moderate cold rolling or drawing — balanced strength and formability for bus bar and strip applications',
      tensileStrength: { min: 276, max: 324, typical: 296 },
      yieldStrength: { min: 241, max: 290, typical: 255 },
      elongation: { min: 12, max: 20, typical: 14 },
      hardness: { brinell: 68 },
    },
    {
      designation: 'H08 (Hard)',
      description:
        'Heavy cold working — maximum practical strength for wire and bus bar requiring higher mechanical properties',
      tensileStrength: { min: 345, max: 393, typical: 372 },
      yieldStrength: { min: 310, max: 345, typical: 331 },
      elongation: { min: 6, max: 12, typical: 8 },
      hardness: { brinell: 100 },
    },
  ],
  relatedMaterials: ['cu-c172', 'cu-c260'],
};

export const copperC172: Material = {
  id: 'cu-c172',
  name: 'C172 Beryllium Copper',
  family: 'copper',
  subFamily: 'Beryllium Copper',
  mechanical: {
    density: 8.25,
    tensileStrength: { min: 483, max: 1380, typical: 1310 },
    yieldStrength: { min: 207, max: 1207, typical: 1170 },
    elongation: { min: 2, max: 45, typical: 4 },
    hardness: {
      brinell: { min: 100, max: 400, typical: 390 },
      rockwellC: { min: 15, max: 43, typical: 42 },
    },
    elasticModulus: 128,
    shearModulus: 50,
    poissonRatio: 0.30,
    fatigueStrength: { min: 310, max: 620, typical: 483 },
  },
  thermal: {
    conductivity: 130,
    thermalExpansion: 17.8,
    specificHeat: 418,
    meltingRange: { min: 865, max: 980 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Good',
    heatTreatable: true,
    weldNotes:
      'Fair weldability — beryllium oxide fumes generated during welding, grinding, and machining are highly toxic (carcinogen, causes berylliosis). Strict beryllium work practices required per OSHA 29 CFR 1910.1024. TIG welding in solution-annealed condition is feasible. Most beryllium copper joining is done by brazing or silver soldering to avoid beryllium fume generation.',
  },
  standards: {
    astm: ['B194', 'B196', 'B197'],
    uns: 'C17200',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 5,
  description:
    'C172 beryllium copper (BeCu, 1.8-2.0% Be) is the highest-strength copper alloy, achieving tensile strengths up to 1380 MPa (200 ksi) after precipitation hardening — comparable to many alloy steels. This extraordinary strength is combined with excellent electrical conductivity (20-25% IACS), good corrosion resistance, non-magnetic properties, non-sparking behavior, and resistance to fatigue and stress relaxation. These unique properties make it irreplaceable in precision springs, electrical contacts, and tools used in explosive environments. C172 is also the only commonly used copper alloy that responds significantly to precipitation hardening.',
  keyCharacteristics: [
    'Highest strength copper alloy — up to 1380 MPa UTS after peak aging',
    '20-25% IACS electrical conductivity — much lower than C110 but high for a strong alloy',
    'Precipitation hardening: solution treat + age at 315-345°C provides dramatic strengthening',
    'Non-sparking — safe for tools in explosive and flammable atmospheres',
    'Excellent spring fatigue life and resistance to stress relaxation at elevated temperatures',
    'HAZARD: beryllium is a toxic carcinogen — strict handling/machining protocols required',
  ],
  commonApplications: [
    'Precision springs requiring high fatigue life',
    'Electrical contacts and connectors (spring fingers)',
    'Non-sparking tools for oil and gas industry',
    'Plastic injection mold tooling (mold cores/cavities)',
    'Surgical instruments requiring corrosion resistance',
    'Radar waveguide components',
    'High-reliability switching mechanisms',
  ],
  industries: ['Electronics', 'Oil & Gas', 'Medical', 'Plastics', 'Defense'],
  beginnerNote:
    "C172 beryllium copper is the premium copper alloy — it's as strong as steel but still conducts electricity and resists corrosion like copper. The secret is beryllium: a tiny amount (2%) allows it to be heat-treated to extreme strength, similar to how steel can be heat-treated. It's used for precision springs, electrical contacts, and non-sparking tools (important near explosive atmospheres). IMPORTANT SAFETY NOTE: beryllium dust and fumes are highly toxic — always use proper respiratory protection when machining or grinding this alloy.",
  expertNote:
    'BERYLLIUM HAZARD: OSHA 29 CFR 1910.1024 (2020) sets PEL = 0.2 µg/m³ 8-hr TWA, Action Level = 0.1 µg/m³. Berylliosis (chronic beryllium disease, CBD) is an irreversible pulmonary fibrosis caused by Be dust/fumes. Medical surveillance program required for all workers with potential exposure. Machining: wet operations preferred; dust extraction essential; HEPA filtration; respiratory protection PPE class 3+. Precipitation hardening mechanism: Be dissolves in Cu lattice at 800°C (solution treat), then precipitates as coherent CuBe particles at 315°C (age), creating significant lattice distortion that impedes dislocation motion. Peak-aged (AT/HT) achieves 1380 MPa UTS, 42 HRC. Solution annealed (A) condition: 483 MPa UTS, 100 HBN — suitable for cold forming before final aging. Spring applications: fatigue endurance limit ~483 MPa at 10^8 cycles; stress relaxation resistance superior to all other Cu alloys up to 150°C. Electrical conductivity 20% IACS — significantly lower than C110 (100% IACS) but adequate for contact applications.',
  tempers: [
    {
      designation: 'A (Solution Annealed)',
      description:
        'Solution annealed at 790-815°C — soft condition for cold forming prior to aging; best formability',
      tensileStrength: { min: 448, max: 620, typical: 483 },
      yieldStrength: { min: 186, max: 276, typical: 207 },
      elongation: { min: 30, max: 50, typical: 45 },
      hardness: { brinell: 100 },
    },
    {
      designation: 'AT (Peak Aged)',
      description:
        'Solution annealed then aged at 315-345°C/2-3h — maximum strength; standard for springs and contacts',
      tensileStrength: { min: 1170, max: 1380, typical: 1310 },
      yieldStrength: { min: 1000, max: 1207, typical: 1170 },
      elongation: { min: 2, max: 5, typical: 4 },
      hardness: { rockwellC: 42 },
    },
    {
      designation: 'HT (1/2 Hard + Aged)',
      description:
        'Cold rolled 37% then aged — highest combined strength in cold-worked + aged condition',
      tensileStrength: { min: 1240, max: 1380, typical: 1310 },
      yieldStrength: { min: 1100, max: 1240, typical: 1170 },
      elongation: { min: 1, max: 4, typical: 2 },
      hardness: { rockwellC: 43 },
    },
  ],
  relatedMaterials: ['cu-c110', 'cu-c260'],
};

export const copperC260: Material = {
  id: 'cu-c260',
  name: 'C260 Cartridge Brass (70/30)',
  family: 'copper',
  subFamily: 'Brass',
  mechanical: {
    density: 8.53,
    tensileStrength: { min: 303, max: 896, typical: 338 },
    yieldStrength: { min: 76, max: 827, typical: 117 },
    elongation: { min: 3, max: 70, typical: 66 },
    hardness: {
      brinell: { min: 55, max: 180, typical: 55 },
      rockwellB: { min: 5, max: 82, typical: 20 },
    },
    elasticModulus: 110,
    shearModulus: 37,
    poissonRatio: 0.375,
    fatigueStrength: { min: 124, max: 193, typical: 138 },
  },
  thermal: {
    conductivity: 120,
    thermalExpansion: 19.9,
    specificHeat: 375,
    meltingRange: { min: 915, max: 955 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Fair weldability — dezincification and zinc fuming occur above 900°C. TIG welding feasible with 70/30 brass or naval brass filler, but porosity and zinc loss degrade weld quality. Silver brazing (650-800°C) is the preferred joining method for brass assemblies. Avoid oxyacetylene welding due to zinc fume (toxic).',
  },
  standards: {
    astm: ['B19', 'B36', 'B134'],
    uns: 'C26000',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    'C260 cartridge brass (70% copper, 30% zinc) is the most widely used brass alloy, optimized for extreme cold-forming operations. The 70/30 composition occupies the optimal point on the Cu-Zn phase diagram where the alloy is entirely single-phase alpha brass, giving it exceptional ductility — up to 70% elongation in the annealed condition. It was originally developed for deep-drawing cartridge cases for ammunition (hence the name), where the metal must flow through extreme forming operations without cracking. Today it is used in a wide range of drawn, stamped, and cold-formed parts where the combination of formability, conductivity, and corrosion resistance is valued.',
  keyCharacteristics: [
    'Best cold-forming brass — up to 70% elongation in annealed condition',
    'Single-phase alpha structure at 70/30 composition — no brittle beta phase',
    'Moderate electrical conductivity (28% IACS) — suitable for electrical hardware',
    'Good corrosion resistance in atmospheric and fresh water environments',
    'Susceptible to stress corrosion cracking (season cracking) in ammoniated environments',
    'Wide range of tempers from dead soft to spring hard via cold working',
  ],
  commonApplications: [
    'Cartridge cases for firearms ammunition (primary application historically)',
    'Deep-drawn parts: cups, shells, cylinders',
    'Plumbing fittings and hardware',
    'Electrical connectors and terminals',
    'Musical instrument bodies (horns, bells)',
    'Lamp fixtures and hardware',
    'Radiator cores and heat exchangers',
  ],
  industries: ['Defense', 'Plumbing', 'Electronics', 'Musical Instruments', 'Automotive'],
  beginnerNote:
    "C260 brass (70% copper, 30% zinc) is the classic forming brass — the gold-colored metal used for ammunition cases, plumbing fittings, and decorative hardware. It can be stretched and drawn into complex shapes without cracking, which is why it's used for ammunition shells that need to be deep-drawn into thin cups. It has decent electrical conductivity, doesn't corrode easily indoors, and has the familiar yellow-gold color. The limitation: don't use it near ammonia or ammonium-containing solutions — it can develop stress cracks (a phenomenon called season cracking).",
  expertNote:
    'The 70/30 composition sits firmly in the single-phase alpha field of the Cu-Zn phase diagram (alpha phase boundary ~37% Zn at room temperature). The alpha brass is FCC-structured with Zn dissolved in the Cu lattice. Stacking fault energy decreases with Zn content, explaining the very high work-hardening rate and exceptional deep-drawing ability — Lankford (r) value ~0.9-1.1, nearly isotropic. Season cracking (stress corrosion cracking): occurs in residual tensile stress + ammonia environment — residual stress from forming must be relieved by low-temperature anneal (200-300°C/30 min) for parts in ammoniated service (refrigeration, marine). Dezincification: preferential dissolution of Zn in low-flow, slightly acidic water — specify dezincification-resistant (DZR) brass C26800 with 0.02-0.08% As for potable water service. Cold work strengthening: 0→85% cold work raises UTS from 303 to 896 MPa while dropping elongation from 70% to 3%.',
  tempers: [
    {
      designation: 'O60 (Annealed)',
      description:
        'Fully annealed — maximum ductility for deep drawing and extreme forming operations; standard for cartridge brass blanks',
      tensileStrength: { min: 303, max: 345, typical: 303 },
      yieldStrength: { min: 76, max: 117, typical: 76 },
      elongation: { min: 60, max: 72, typical: 66 },
      hardness: { brinell: 55 },
    },
    {
      designation: 'H02 (1/2 Hard)',
      description:
        'Moderate cold rolling — balance of strength and ductility for general hardware and fittings',
      tensileStrength: { min: 379, max: 448, typical: 414 },
      yieldStrength: { min: 290, max: 365, typical: 338 },
      elongation: { min: 20, max: 30, typical: 25 },
      hardness: { brinell: 105 },
    },
    {
      designation: 'H04 (Hard)',
      description:
        'Heavy cold rolling — high strength for springs and structural parts requiring maximum load-bearing capacity',
      tensileStrength: { min: 524, max: 600, typical: 552 },
      yieldStrength: { min: 448, max: 524, typical: 483 },
      elongation: { min: 8, max: 14, typical: 8 },
      hardness: { brinell: 163 },
    },
    {
      designation: 'H08 (Spring)',
      description:
        'Maximum cold work — spring temper for high fatigue applications; comparable to beryllium copper in forming operations',
      tensileStrength: { min: 634, max: 724, typical: 669 },
      yieldStrength: { min: 579, max: 655, typical: 614 },
      elongation: { min: 3, max: 7, typical: 5 },
      hardness: { rockwellB: 82 },
    },
  ],
  relatedMaterials: ['cu-c110', 'cu-c932'],
};

export const copperC932: Material = {
  id: 'cu-c932',
  name: 'C932 SAE 660 Bearing Bronze',
  family: 'copper',
  subFamily: 'Bronze',
  mechanical: {
    density: 8.92,
    tensileStrength: { min: 241, max: 310, typical: 241 },
    yieldStrength: { min: 124, max: 172, typical: 124 },
    elongation: { min: 16, max: 24, typical: 20 },
    hardness: {
      brinell: { min: 55, max: 80, typical: 60 },
      rockwellB: { min: 25, max: 65, typical: 55 },
    },
    elasticModulus: 103,
    shearModulus: 38,
    poissonRatio: 0.34,
    fatigueStrength: { min: 97, max: 138, typical: 110 },
  },
  thermal: {
    conductivity: 72,
    thermalExpansion: 18.0,
    specificHeat: 376,
    meltingRange: { min: 854, max: 1000 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: false,
    weldNotes:
      'Welding not recommended — lead content (5-7% Pb) causes hot cracking. For repairs, TIG with silicon bronze filler is feasible but degraded. Standard practice is to bore to oversize and press-fit a new bearing.',
  },
  standards: {
    astm: ['B144'],
    uns: 'C93200',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    'C932 (SAE 660, also known as "standard bearing bronze") is the most widely used bronze alloy for plain bearing and bushing applications. Its composition — 83% copper, 7% tin, 7% lead, 3% zinc — provides the three key properties required in a bearing material: wear resistance (from tin and the hard Cu3Sn phase), lubricity (from lead, which acts as a solid lubricant), and compressive strength adequate to support shaft loads. C932 bushings are used in virtually every rotating machinery application where self-lubricating or oil-impregnated bearings are needed. It is often used as a directly interchangeable, cost-effective replacement for more expensive bearing materials.',
  keyCharacteristics: [
    'Most widely used bearing bronze — SAE 660 is the default bushing alloy',
    '7% Pb provides solid lubrication: lead-rich phases smear across bearing surfaces under load',
    '7% Sn forms Cu3Sn precipitates for hardness and wear resistance',
    'Self-lubricating character extends intervals between re-lubrication',
    'Good machinability due to lead content — easy to machine to close tolerances',
    'Good compressive strength for load-bearing applications',
  ],
  commonApplications: [
    'Plain bearings (bushings) for electric motors and pumps',
    'Automotive engine and transmission bushings',
    'Hydraulic pump bushings',
    'Farm and construction equipment bearings',
    'Marine propeller shaft bushings',
    'Pin bushings for earthmoving equipment',
    'General industrial rotating shaft support',
  ],
  industries: ['Industrial', 'Automotive', 'Marine', 'Construction', 'Agriculture'],
  beginnerNote:
    "C932 bearing bronze is the most common material for plain bearings (bushings) — the cylindrical metal sleeves that support rotating shafts. It works because the lead in the alloy acts as a natural lubricant: tiny lead particles smear across the bearing surface when it rubs against a shaft, reducing friction. It's relatively cheap, easy to machine to precise dimensions, and works in a wide range of environments without fancy lubricants. If you need a simple bearing bushing, C932 is usually the first material to consider.",
  expertNote:
    'Lead-copper bearing theory: lead (Pb) has very low shear strength and melts at 327°C. Under sliding contact, lead-rich phases deform and smear, providing hydrodynamic and boundary lubrication film. PV limit (pressure × velocity): C932 ~ 70,000 psi·ft/min (1.21 MPa·m/s) in continuous oil-lubricated service; dry PV ~50 psi·ft/min. Hardness mismatch for optimal bearing life: bushing HB 55-65 (C932) vs shaft hardness HRC 20-50 (steel) — steel shaft should be harder than bearing to avoid shaft wear. Clearance: typical shaft-to-bushing diametral clearance = 0.001-0.002 in/in of shaft diameter. RoHS compliance: C932 contains lead and is therefore restricted for electrical/electronic equipment (RoHS 2002/95/EC). Lead-free alternatives: C954 (aluminum bronze) for high-load dry service; C863 (manganese bronze) for marine. Dezincification resistance: good due to low Zn content (3%).',
  tempers: [
    {
      designation: 'As-Cast / Sand Cast',
      description:
        'Standard sand-cast condition — slightly coarser grain than centrifugal cast; adequate for most bushing applications',
      tensileStrength: { min: 241, max: 276, typical: 241 },
      yieldStrength: { min: 124, max: 145, typical: 124 },
      elongation: { min: 16, max: 24, typical: 20 },
      hardness: { brinell: 60 },
    },
    {
      designation: 'Centrifugal Cast',
      description:
        'Centrifugally cast tube stock — improved properties vs sand cast due to finer grain and reduced porosity; preferred for precision bushings',
      tensileStrength: { min: 276, max: 310, typical: 296 },
      yieldStrength: { min: 138, max: 172, typical: 152 },
      elongation: { min: 18, max: 26, typical: 22 },
      hardness: { brinell: 70 },
    },
  ],
  relatedMaterials: ['cu-c260', 'cu-c110'],
};

export const copperC510: Material = {
  id: 'cu-c510',
  name: 'C510 Phosphor Bronze',
  family: 'copper',
  subFamily: 'Bronze',
  mechanical: {
    density: 8.86,
    tensileStrength: { min: 310, max: 690, typical: 325 },
    yieldStrength: { min: 140, max: 620, typical: 170 },
    elongation: { min: 3, max: 64, typical: 48 },
    hardness: {
      brinell: { min: 55, max: 200, typical: 65 },
      rockwellB: { min: 10, max: 90, typical: 42 },
    },
    elasticModulus: 110,
    shearModulus: 41,
    poissonRatio: 0.34,
    fatigueStrength: { min: 138, max: 241, typical: 165 },
  },
  thermal: {
    conductivity: 69,
    thermalExpansion: 17.8,
    specificHeat: 380,
    meltingRange: { min: 975, max: 1060 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Fair weldability — TIG welding with phosphor bronze or silicon bronze filler is feasible in the annealed condition. High thermal conductivity requires adequate preheat (150-200°C for sections over 6 mm). Silver brazing is preferred for most joining applications. Avoid overheating to prevent tin loss and porosity.',
  },
  standards: {
    astm: ['B103', 'B139', 'B159'],
    uns: 'C51000',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    'C510 phosphor bronze (94.8% Cu, 5.0% Sn, 0.2% P) is the most widely used phosphor bronze. The tin provides solid-solution strengthening and improves corrosion resistance, while the phosphorus (added as a deoxidizer and strengthener) promotes excellent spring properties and fatigue resistance. C510 combines excellent cold-formability in the annealed condition with high strength in the cold-worked condition, outstanding spring fatigue life, and good electrical conductivity (~15% IACS). These properties make it the standard alloy for electrical spring contacts, connectors, and precision springs in electronics and telecommunications.',
  keyCharacteristics: [
    'Excellent spring fatigue life — superior to brass, approaches beryllium copper for many applications',
    'Good corrosion resistance in atmospheric, marine, and mildly acidic environments',
    'Wide range of tempers from annealed (ductile forming) to spring hard',
    '~15% IACS electrical conductivity — suitable for electrical contact springs',
    'Non-magnetic and non-sparking',
    'Better corrosion resistance than brass due to tin content',
  ],
  commonApplications: [
    'Electrical spring contacts and connectors',
    'Electronic connector pins and terminals',
    'Precision springs and spring washers',
    'Bellows and flexible diaphragms',
    'Fasteners requiring corrosion resistance',
    'Bearing bushings (tin bronze, lighter duty than C932)',
    'Musical instrument reeds and springs',
  ],
  industries: ['Electronics', 'Telecommunications', 'Industrial', 'Marine'],
  beginnerNote:
    "C510 phosphor bronze is the standard spring copper alloy that isn't beryllium copper. It has good spring properties and fatigue life — so when you flex a C510 spring thousands of times, it doesn't lose its shape. The phosphorus makes it slightly stronger and improves the corrosion resistance. It's used heavily in electronic connectors (the springy metal contacts inside USB ports and similar connectors) because it conducts electricity adequately while providing reliable spring force to maintain contact.",
  expertNote:
    'C510 composition: 94.8% Cu, 4.2-5.8% Sn, 0.03-0.35% P (UNS C51000). The phosphorus serves two roles: deoxidizer during casting (removes Cu2O) and precipitation-hardening agent (Cu3P particles at grain boundaries). Spring fatigue: C510 H08 (spring temper) achieves ~165 MPa fatigue endurance at 10^8 cycles vs ~138 MPa for C260 H08 brass — ~20% improvement. Modulus of elasticity in torsion (spring design): 41 GPa. Stress relaxation at 70°C: C510 retains ~92% of initial stress vs ~85% for C260 — important for connectors in warm environments. Cold work response: UTS increases from 325 MPa (O60) to 690 MPa (H08) with 75% cold work, reaching Rockwell B90. C519 (8% Sn) and C521 (8% Sn) are higher-strength versions for demanding spring applications. RoHS compliant (no lead or beryllium).',
  tempers: [
    {
      designation: 'O60 (Annealed)',
      description:
        'Fully annealed — maximum ductility for deep forming and drawing; standard for blanks requiring subsequent cold work',
      tensileStrength: { min: 310, max: 350, typical: 325 },
      yieldStrength: { min: 140, max: 175, typical: 170 },
      elongation: { min: 45, max: 64, typical: 48 },
      hardness: { brinell: 65 },
    },
    {
      designation: 'H02 (1/2 Hard)',
      description:
        'Moderate cold rolling — balanced strength and formability for clips and light springs',
      tensileStrength: { min: 400, max: 480, typical: 440 },
      yieldStrength: { min: 330, max: 410, typical: 365 },
      elongation: { min: 20, max: 35, typical: 25 },
      hardness: { rockwellB: 68 },
    },
    {
      designation: 'H08 (Spring)',
      description:
        'Maximum cold work — spring temper for demanding fatigue applications in electrical contacts and precision springs',
      tensileStrength: { min: 620, max: 690, typical: 655 },
      yieldStrength: { min: 565, max: 620, typical: 590 },
      elongation: { min: 3, max: 7, typical: 4 },
      hardness: { rockwellB: 90 },
    },
  ],
  relatedMaterials: ['cu-c172', 'cu-c260', 'cu-c932'],
};

export const copperC464: Material = {
  id: 'cu-c464',
  name: 'C464 Naval Brass',
  family: 'copper',
  subFamily: 'Brass',
  mechanical: {
    density: 8.41,
    tensileStrength: { min: 370, max: 590, typical: 415 },
    yieldStrength: { min: 170, max: 517, typical: 200 },
    elongation: { min: 15, max: 50, typical: 40 },
    hardness: {
      brinell: { min: 75, max: 160, typical: 87 },
      rockwellB: { min: 30, max: 78, typical: 52 },
    },
    elasticModulus: 105,
    shearModulus: 39,
    poissonRatio: 0.34,
    fatigueStrength: { min: 138, max: 207, typical: 159 },
  },
  thermal: {
    conductivity: 116,
    thermalExpansion: 21.2,
    specificHeat: 377,
    meltingRange: { min: 900, max: 940 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Fair weldability — zinc fuming above 900°C is a concern. TIG welding with naval brass or silicon bronze filler in annealed condition is feasible. Silver brazing is preferred for leak-tight joints. Avoid oxyacetylene — zinc fumes are toxic. Pre-heat to 150°C for sections over 12 mm.',
  },
  standards: {
    astm: ['B21', 'B171'],
    uns: 'C46400',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    'C464 naval brass (59-62% Cu, 37-40% Zn, 0.5-1.0% Sn) was developed specifically for seawater service. The 1% tin addition to 60/40 yellow brass dramatically reduces dezincification — selective dissolution of zinc that weakens standard brasses in seawater and brackish water. Naval brass has been used in marine hardware for over a century, providing a good combination of strength, machinability, corrosion resistance in seawater, and cost-effectiveness. It is available as rod, plate, and tubular products for propeller shafts, marine hardware, condenser tube sheets, and naval fittings.',
  keyCharacteristics: [
    '1% Sn addition inhibits dezincification — the key property vs standard yellow brass in seawater',
    'Better seawater corrosion resistance than C260 or C272 brasses',
    'Good machinability — higher zinc content (vs C510) improves chip breaking',
    'Moderate strength with good ductility for forming marine hardware',
    'Lower cost than tin bronze or copper-nickel for general marine applications',
    'Good resistance to biofouling in marine environments',
  ],
  commonApplications: [
    'Marine propeller shafts and bushings',
    'Naval condenser and heat exchanger tube sheets',
    'Marine hardware: nuts, bolts, and fittings',
    'Pump impellers and valve bodies for seawater',
    'Porthole frames and marine window hardware',
    'Seawater piping and fittings',
    'Deck hardware and cleats',
  ],
  industries: ['Marine', 'Naval', 'Plumbing', 'Oil & Gas'],
  beginnerNote:
    "Naval brass is brass that's been modified specifically to survive in seawater. Regular brass corrodes in seawater through a process called dezincification — the zinc dissolves out, leaving behind a weakened spongy copper shell. Adding 1% tin prevents this. If you need a brass fitting for a marine or seawater application, C464 naval brass is the default choice. It's also a good all-around material for general marine hardware like propeller shafts and pump fittings.",
  expertNote:
    'Dezincification mechanism: in stagnant or slowly flowing seawater at temperatures above ~60°C, the Zn-rich alpha/beta brass phases selectively dissolve; the plugging form creates an apparent intact surface masking catastrophic subsurface dezincification. Tin inhibition: Sn segregates to brass surfaces and inhibits Zn preferential dissolution via selective adsorption. C464 dezincification resistance: passes ISO 6509 test (1% CuCl2, 75°C, 24h — max 200 µm dezincification depth vs >500 µm for uninhibited brasses). C464 vs C280 Muntz Metal: C464 dezincification-resistant; Muntz (60/40, no Sn) is not DZR. Stress corrosion cracking: C464 still susceptible to SCC in ammoniated environments — specify C706 or C715 copper-nickel for ammonia-exposed marine condensers. Composition: 59-62% Cu, 0.5-1.0% Sn, remainder Zn, Fe ≤0.10%, Pb ≤0.20%. Annealed at 425-600°C.',
  tempers: [
    {
      designation: 'O60 (Annealed)',
      description:
        'Fully annealed — maximum ductility and corrosion resistance for marine hardware and fittings',
      tensileStrength: { min: 370, max: 415, typical: 385 },
      yieldStrength: { min: 170, max: 215, typical: 200 },
      elongation: { min: 35, max: 50, typical: 40 },
      hardness: { brinell: 87 },
    },
    {
      designation: 'H02 (1/2 Hard)',
      description:
        'Moderate cold work — increased strength for marine shafts and structural fittings',
      tensileStrength: { min: 450, max: 520, typical: 480 },
      yieldStrength: { min: 380, max: 450, typical: 415 },
      elongation: { min: 18, max: 28, typical: 22 },
      hardness: { rockwellB: 68 },
    },
    {
      designation: 'H04 (Hard)',
      description:
        'Heavy cold work — high strength condition for threaded components and shafts requiring maximum load capacity',
      tensileStrength: { min: 530, max: 590, typical: 555 },
      yieldStrength: { min: 460, max: 517, typical: 485 },
      elongation: { min: 15, max: 22, typical: 18 },
      hardness: { rockwellB: 78 },
    },
  ],
  relatedMaterials: ['cu-c260', 'cu-c110', 'cu-c932'],
};

export const pureCopperGrades: Material[] = [copperC110];
export const brassBronzeGrades: Material[] = [copperC172, copperC260, copperC932, copperC510, copperC464];
export const allCopperGrades: Material[] = [...pureCopperGrades, ...brassBronzeGrades];
