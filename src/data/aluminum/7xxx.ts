import { Material } from '../types';

export const al7075: Material = {
  id: 'al-7075',
  name: '7075 Aluminum',
  family: 'aluminum',
  subFamily: '7xxx Series',
  mechanical: {
    density: 2.81,
    tensileStrength: { min: 228, max: 572, typical: 572 },
    yieldStrength: { min: 103, max: 503, typical: 503 },
    elongation: { min: 8, max: 17, typical: 11 },
    hardness: { brinell: { min: 60, max: 175, typical: 150 } },
    elasticModulus: 71.7,
    shearModulus: 26.9,
    poissonRatio: 0.33,
    fatigueStrength: { min: 159, max: 200, typical: 159 },
  },
  thermal: {
    conductivity: 130,
    thermalExpansion: 23.6,
    specificHeat: 870,
    meltingRange: { min: 477, max: 635 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Fusion welding not recommended — severe hot cracking susceptibility and significant strength loss. Typically joined with mechanical fasteners. Resistance welding is possible for non-structural applications.',
  },
  standards: {
    astm: ['B209'],
    ams: ['2014', '4045'],
    uns: 'A97075',
  },
  corrosionResistance: 'Poor',
  relativeCost: 3,
  description:
    '7075 is the benchmark high-strength aluminum alloy, offering the highest strength of the common aluminum alloys. It is an aluminum-zinc-magnesium-copper alloy where strength derives from precipitation hardening of MgZn₂ (eta phase) and Mg₃Zn₃Al₂ (T phase) precipitates. The T6 temper provides exceptional strength (UTS 572 MPa) but with poor corrosion resistance and SCC susceptibility — the T73 over-aged temper trades some strength for significantly improved corrosion resistance.',
  keyCharacteristics: [
    'Highest strength of the common aluminum alloys',
    'Exceptional strength-to-weight ratio in T6 temper',
    'Poor corrosion resistance — requires protective coating',
    'Susceptible to stress-corrosion cracking (SCC) in T6 temper',
    'T73/T7351 offers improved corrosion/SCC resistance at reduced strength',
    'Not suitable for fusion welding',
  ],
  commonApplications: [
    'Aircraft wings and fuselage structural members',
    'Aerospace spar caps and ribs',
    'Gears and shafts',
    'Molds and tooling plates',
    'High-stress machine components',
    'Sporting goods (bicycle components, golf clubs)',
  ],
  industries: ['Aerospace', 'Defense', 'Motorsport'],
  beginnerNote:
    "7075 is the strongest common aluminum alloy — it's stronger than many steels by strength-to-weight ratio. However, that strength comes with trade-offs: it corrodes easily, can crack under sustained stress in corrosive environments, and you can't weld it. Use it when strength is the absolute priority and you can protect the surface. The T6 temper gives maximum strength; T73 is slightly weaker but much better for corrosion resistance.",
  expertNote:
    'T6 temper: peak-aged condition, coherent GP zones and semi-coherent eta\' precipitates. SCC susceptibility is highest in T6 (short-transverse K_ISCC ~5–10 MPa√m) — T73 (over-aged) raises K_ISCC to ~15–20 MPa√m by converting to incoherent eta phase. T651 is standard for plate — stress relief by stretching reduces residual stress from quench, critical for dimensional stability of machined components. Fracture toughness K_IC ~24 MPa√m (T651, L-T orientation) — low vs 7050-T7451 (~37 MPa√m). Density 2.81 g/cm³ is highest in common aluminums — important for weight-critical applications. Alclad 7075 available for improved corrosion protection.',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — softest condition for forming operations',
      tensileStrength: { min: 220, max: 270, typical: 228 },
      yieldStrength: { min: 95, max: 120, typical: 103 },
      elongation: { min: 14, max: 20, typical: 17 },
      hardness: { brinell: 60 },
    },
    {
      designation: 'T6',
      description: 'Solution heat treated and artificially aged — maximum strength',
      tensileStrength: { min: 538, max: 607, typical: 572 },
      yieldStrength: { min: 469, max: 538, typical: 503 },
      elongation: { min: 9, max: 13, typical: 11 },
      hardness: { brinell: 150 },
    },
    {
      designation: 'T651',
      description: 'Solution heat treated, stress relieved by stretching, artificially aged — plate and bar',
      tensileStrength: { min: 538, max: 607, typical: 572 },
      yieldStrength: { min: 469, max: 538, typical: 503 },
      elongation: { min: 9, max: 13, typical: 11 },
      hardness: { brinell: 150 },
    },
    {
      designation: 'T73',
      description: 'Over-aged for improved SCC resistance — reduced strength, much better corrosion performance',
      tensileStrength: { min: 490, max: 530, typical: 503 },
      yieldStrength: { min: 420, max: 460, typical: 434 },
      elongation: { min: 9, max: 13, typical: 11 },
      hardness: { brinell: 135 },
    },
  ],
  relatedMaterials: ['al-7050', 'al-7068', 'al-2024'],
};

export const al7050: Material = {
  id: 'al-7050',
  name: '7050 Aluminum',
  family: 'aluminum',
  subFamily: '7xxx Series',
  mechanical: {
    density: 2.83,
    tensileStrength: { min: 441, max: 524, typical: 511 },
    yieldStrength: { min: 393, max: 469, typical: 441 },
    elongation: { min: 10, max: 16, typical: 13 },
    hardness: { brinell: { min: 130, max: 165, typical: 145 } },
    elasticModulus: 71.7,
    shearModulus: 26.9,
    poissonRatio: 0.33,
    fatigueStrength: { min: 152, max: 179, typical: 165 },
  },
  thermal: {
    conductivity: 157,
    thermalExpansion: 23.5,
    specificHeat: 860,
    meltingRange: { min: 488, max: 638 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Fusion welding not recommended — primarily joined with mechanical fasteners and adhesive bonding in aerospace applications. Resistance welding is possible.',
  },
  standards: {
    astm: ['B209'],
    ams: ['4050'],
    uns: 'A97050',
  },
  corrosionResistance: 'Fair',
  relativeCost: 4,
  description:
    '7050 is a high-strength aluminum alloy developed specifically for thick-section aerospace applications where the quench sensitivity limitations of 7075 are problematic. The addition of zirconium (replacing chromium) substantially reduces quench sensitivity, allowing center properties in thick plate (up to 150 mm) to approach surface properties. The T7451 temper (over-aged) provides an excellent combination of strength, fracture toughness, and resistance to stress-corrosion cracking, making it the preferred alloy for major aerospace structural components.',
  keyCharacteristics: [
    'Lower quench sensitivity than 7075 — maintains properties in thick sections',
    'Superior fracture toughness vs 7075-T651',
    'T7451 temper provides excellent SCC resistance',
    'Preferred for aircraft fuselage frames and bulkheads',
    'Higher thermal conductivity than 7075',
    'Zr addition provides recrystallization control and reduced quench sensitivity',
  ],
  commonApplications: [
    'Aircraft fuselage frames and bulkheads',
    'Wing ribs and spars',
    'Thick structural aerospace plate',
    'Aerospace forgings',
    'Defense structural components',
    'Helicopter rotor components',
  ],
  industries: ['Aerospace', 'Defense'],
  beginnerNote:
    "7050 is designed for large, thick aerospace parts where 7075 doesn't work well. When you heat-treat thick aluminum, the center cools slower than the surface, which can weaken it — 7050 was engineered to resist this problem. It's slightly less strong than 7075-T6 but much tougher and more corrosion-resistant in the T7451 temper. It's found in major aircraft structural frames and bulkheads.",
  expertNote:
    'Zr addition (0.08–0.15%) replaces Cr of 7075, forming Al₃Zr dispersoids that pin grain boundaries and dramatically reduce quench sensitivity. Hardenability: 7050 maintains >90% of surface properties at the center of 150 mm plate; 7075 drops to ~70% at 50 mm. T7451 (over-aged, stress-relieved by stretching): K_IC ~37–42 MPa√m (L-T) vs ~24 MPa√m for 7075-T651 — critical for damage-tolerant design. Short-transverse K_ISCC >25 MPa√m in T7451. Higher Cu content (2.0–2.6%) vs 7075 (1.2–2.0%) contributes to improved strength and corrosion balance. Preferred per Boeing and Airbus specs for fuselage frames.',
  tempers: [
    {
      designation: 'T7451',
      description:
        'Solution heat treated, stress relieved by stretching, over-aged — standard aerospace plate temper with excellent SCC resistance',
      tensileStrength: { min: 490, max: 531, typical: 511 },
      yieldStrength: { min: 421, max: 462, typical: 441 },
      elongation: { min: 11, max: 15, typical: 13 },
      hardness: { brinell: 145 },
    },
    {
      designation: 'T7452',
      description:
        'Solution heat treated, stress relieved by compression, over-aged — forgings',
      tensileStrength: { min: 462, max: 510, typical: 490 },
      yieldStrength: { min: 400, max: 448, typical: 421 },
      elongation: { min: 8, max: 12, typical: 10 },
      hardness: { brinell: 140 },
    },
    {
      designation: 'T736',
      description:
        'Solution heat treated, stress relieved by stretching, RRA over-aged — retrogression and re-aging, high strength + good SCC',
      tensileStrength: { min: 524, max: 565, typical: 545 },
      yieldStrength: { min: 462, max: 503, typical: 483 },
      elongation: { min: 10, max: 14, typical: 12 },
      hardness: { brinell: 158 },
    },
  ],
  relatedMaterials: ['al-7075', 'al-7068', 'al-2024'],
};

export const al7068: Material = {
  id: 'al-7068',
  name: '7068 Aluminum',
  family: 'aluminum',
  subFamily: '7xxx Series',
  mechanical: {
    density: 2.85,
    tensileStrength: { min: 607, max: 690, typical: 683 },
    yieldStrength: { min: 565, max: 655, typical: 641 },
    elongation: { min: 7, max: 12, typical: 9 },
    hardness: { brinell: { min: 170, max: 200, typical: 185 } },
    elasticModulus: 72,
    shearModulus: 27,
    poissonRatio: 0.33,
    fatigueStrength: { min: 165, max: 207, typical: 179 },
  },
  thermal: {
    conductivity: 125,
    thermalExpansion: 23.0,
    specificHeat: 863,
    meltingRange: { min: 477, max: 629 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Poor',
    heatTreatable: true,
    weldNotes:
      'Fusion welding not recommended — extreme hot cracking susceptibility and severe strength reduction. Used exclusively with mechanical fasteners in structural applications.',
  },
  standards: {
    ams: ['2104'],
    uns: 'A97068',
  },
  corrosionResistance: 'Poor',
  relativeCost: 5,
  description:
    '7068 is the highest-strength aluminum alloy in commercial production, offering tensile strength exceeding 680 MPa in T6511 temper. It is an aluminum-zinc-magnesium-copper alloy with higher alloy content than 7075 (Zn 7.2–8.2%, Mg 2.2–3.2%, Cu 1.8–2.4%). Available as extrusions and bar/rod, it is used in the most demanding high-strength applications where minimum weight is critical. The very high strength comes at the cost of poor corrosion resistance, limited formability, and high cost.',
  keyCharacteristics: [
    'Highest strength aluminum alloy commercially available',
    'UTS exceeding 680 MPa in T6511 temper',
    'Available primarily as extrusions and bar/rod',
    'Poor corrosion resistance — requires anodizing or coating',
    'Limited formability due to very high alloy content',
    'Extremely high cost — used only where strength is paramount',
  ],
  commonApplications: [
    'Aerospace structural fasteners and pins',
    'Military component frames',
    'Ultra-high-stress aerospace fittings',
    'Motorsport suspension components',
    'High-performance firearm components',
    'Critical weight-limited structural parts',
  ],
  industries: ['Aerospace', 'Defense', 'Motorsport'],
  beginnerNote:
    "7068 is the strongest aluminum you can buy commercially — stronger than many steels by weight. If weight is absolutely critical and you need maximum strength, this is it. The catch is that it's very expensive, doesn't form easily, corrodes quickly without protection, and can't be welded. It's reserved for the most demanding aerospace and defense applications where nothing else will do.",
  expertNote:
    'Highest commercially available aluminum alloy: T6511 UTS 683 MPa, YS 641 MPa — approximately 19% higher UTS than 7075-T6. Higher Zn content (7.2–8.2% vs 5.1–6.1% for 7075) produces denser MgZn₂ precipitate distribution. Fracture toughness K_IC ~22–26 MPa√m — slightly below 7075-T651 due to higher precipitate density. SCC susceptibility is severe in T6511 — anodizing and chemical conversion coating essential for any moist service environment. Extrusion is the primary product form — availability in plate/sheet is limited. AMS 2104 qualification required. Cost premium over 7075 is approximately 3–4x — only justified for the most critical weight-limited applications.',
  tempers: [
    {
      designation: 'T6511',
      description:
        'Solution heat treated, stress relieved by stretching, artificially aged — standard extrusion temper, maximum strength',
      tensileStrength: { min: 655, max: 710, typical: 683 },
      yieldStrength: { min: 621, max: 669, typical: 641 },
      elongation: { min: 7, max: 11, typical: 9 },
      hardness: { brinell: 185 },
    },
    {
      designation: 'T6',
      description: 'Solution heat treated and artificially aged — bar and rod',
      tensileStrength: { min: 621, max: 683, typical: 655 },
      yieldStrength: { min: 586, max: 641, typical: 614 },
      elongation: { min: 7, max: 11, typical: 9 },
      hardness: { brinell: 180 },
    },
    {
      designation: 'T73',
      description: 'Over-aged for improved SCC resistance — reduced strength vs T6511',
      tensileStrength: { min: 552, max: 607, typical: 579 },
      yieldStrength: { min: 503, max: 552, typical: 524 },
      elongation: { min: 8, max: 12, typical: 10 },
      hardness: { brinell: 163 },
    },
  ],
  relatedMaterials: ['al-7075', 'al-7050'],
};

export const al7001: Material = {
  id: 'al-7001',
  name: '7001 Aluminum',
  family: 'aluminum',
  subFamily: '7xxx Series',
  mechanical: {
    density: 2.83,
    tensileStrength: { min: 345, max: 672, typical: 672 },
    yieldStrength: { min: 276, max: 607, typical: 607 },
    elongation: { min: 9, max: 15, typical: 9 },
    hardness: { brinell: { min: 100, max: 180, typical: 175 } },
    elasticModulus: 71.0,
    shearModulus: 26.9,
    poissonRatio: 0.33,
    fatigueStrength: { min: 150, max: 193, typical: 150 },
  },
  thermal: {
    conductivity: 130,
    thermalExpansion: 23.0,
    specificHeat: 860,
    meltingRange: { min: 476, max: 629 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Poor weldability — high copper content causes hot cracking. Fusion welding not recommended. Mechanical fastening or adhesive bonding are standard joining methods.',
  },
  standards: {
    ams: ['2001'],
    uns: 'A97001',
  },
  corrosionResistance: 'Poor',
  relativeCost: 5,
  description:
    '7001 is an ultra-high-strength aluminum-zinc-copper alloy representing one of the highest-strength wrought aluminum alloys in the 7xxx series. With zinc, magnesium, and copper as primary alloying elements, 7001-T6 achieves 672 MPa (97 ksi) tensile strength — significantly higher than 7075. It was developed for demanding aerospace structural applications where weight is critical and maximum strength is required. The T73 over-aged temper provides improved stress-corrosion cracking resistance at some strength penalty.',
  keyCharacteristics: [
    'Ultra-high strength — 672 MPa UTS in T6, higher than 7075',
    'Zn-Mg-Cu precipitation hardening system (MgZn2 precipitates)',
    'High cost and limited availability vs more common 7075/7050',
    'Poor corrosion resistance — requires anodizing or coating',
    'Not fusion-weldable',
    'T73 temper provides improved SCC resistance at ~580 MPa UTS',
  ],
  commonApplications: [
    'Airframe structural components requiring maximum strength',
    'Military aircraft structures',
    'High-performance sports equipment',
    'Weight-critical structural members',
    'Aerospace fittings and brackets',
  ],
  industries: ['Aerospace', 'Defense', 'Sports'],
  beginnerNote:
    "7001 is one of the strongest aluminum alloys available — stronger than the common 7075. It's used in parts of aircraft where every gram matters and maximum strength is needed. Like most ultra-high-strength aluminum, it doesn't resist corrosion well and can't be welded, so it needs protective coatings and mechanical fasteners.",
  expertNote:
    'Composition: 6.8-8.0% Zn, 2.6-3.4% Cu, 2.6-3.4% Mg. The high Zn/Mg ratio and Cu addition give maximum MgZn2 precipitation hardening. T6 peak-aged at 120°C achieves 672 MPa UTS / 607 MPa YS. T73 over-aged (3-stage aging: 107°C → 163°C → 107°C) achieves ~580 MPa UTS with markedly improved SCC resistance — KISCC increases from ~5 MPa√m (T6) to ~20 MPa√m (T73). Note the "SCC-prone zone" in T6 temper under sustained stress in humid environments — structural designs using T6 must avoid sustained tensile loading in the short-transverse direction. Modern alternatives for ultra-high-strength with better SCC resistance include 7068 and 7150.',
  tempers: [
    {
      designation: 'T6',
      description: 'Solution heat treated and artificially aged at 120°C — maximum strength, limited SCC resistance',
      tensileStrength: { min: 640, max: 703, typical: 672 },
      yieldStrength: { min: 580, max: 635, typical: 607 },
      elongation: { min: 9, max: 13, typical: 9 },
      hardness: { brinell: 175 },
    },
    {
      designation: 'T73',
      description: 'Solution heat treated and over-aged (3-stage) — improved SCC resistance at moderate strength penalty',
      tensileStrength: { min: 545, max: 600, typical: 572 },
      yieldStrength: { min: 462, max: 517, typical: 490 },
      elongation: { min: 10, max: 14, typical: 11 },
      hardness: { brinell: 155 },
    },
  ],
  relatedMaterials: ['al-7075', 'al-7068', 'al-7050'],
};

export const al7150: Material = {
  id: 'al-7150',
  name: '7150 Aluminum',
  family: 'aluminum',
  subFamily: '7xxx Series',
  mechanical: {
    density: 2.83,
    tensileStrength: { min: 400, max: 593, typical: 580 },
    yieldStrength: { min: 330, max: 524, typical: 510 },
    elongation: { min: 10, max: 14, typical: 11 },
    hardness: { brinell: { min: 130, max: 165, typical: 160 } },
    elasticModulus: 71.7,
    shearModulus: 27.2,
    poissonRatio: 0.33,
    fatigueStrength: { min: 150, max: 186, typical: 152 },
  },
  thermal: {
    conductivity: 130,
    thermalExpansion: 23.4,
    specificHeat: 860,
    meltingRange: { min: 477, max: 629 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Poor weldability — not suitable for fusion welding due to hot cracking. Standard aerospace joining methods: structural adhesives, blind rivets, and HI-LOK/lockbolt fasteners.',
  },
  standards: {
    ams: ['2750', '2770'],
    uns: 'A97150',
  },
  corrosionResistance: 'Fair',
  relativeCost: 5,
  description:
    '7150 is a high-strength aluminum-zinc-magnesium-copper alloy specifically developed for the fuselage skins and upper wing skins of commercial aircraft. It is a modification of 7075 with slightly increased zinc and copper, designed to achieve improved strength in the T6151 (peak-aged, stress-relieved plate) and T7751 (over-aged plate) tempers compared to 7075. It is used extensively in Boeing 757, 767, and 777 upper wing cover panels and fuselage longeron sections where the combination of high strength and improved corrosion/SCC resistance is required.',
  keyCharacteristics: [
    'Designed for upper wing skins and fuselage panels on commercial jets',
    'Higher Zn and Cu vs 7075 for improved strength in thick plate',
    'T7751 over-aged temper: good SCC resistance with 580 MPa UTS',
    'Used in Boeing 757/767/777 upper wing covers and fuselage structures',
    'Better SCC resistance than 7075-T6 due to T7751 over-aging',
    'Available primarily as thick plate (ASTM B209/AMS 2750)',
  ],
  commonApplications: [
    'Commercial aircraft upper wing cover panels',
    'Fuselage longeron sections',
    'Boeing 757/767/777 structural members',
    'Aerospace thick plate components requiring high strength',
    'Military aircraft primary structures',
  ],
  industries: ['Aerospace', 'Defense'],
  beginnerNote:
    "7150 is an aerospace-specific aluminum for commercial airplane structures. It's used in places like the upper wing panels and fuselage sections of Boeing jets where you need strong, lightweight aluminum with decent corrosion resistance. It's similar to 7075 but optimized for the thick plate forms used in large airplane structures.",
  expertNote:
    '7150 composition: 5.9-6.9% Zn, 1.9-2.5% Cu, 2.0-2.7% Mg, 0.08-0.15% Zr. The Zr addition (replacing Mn/Cr) produces fine Al3Zr dispersoids that control recrystallization in thick plate, maintaining an unrecrystallized fibrous grain structure that maximizes fracture toughness (KIc ~26 MPa√m in T7751). T7751: solution treat 471-482°C, quench, 3-stage age (107°C/7h → 163°C/8h → 107°C/24h) with stress relief by stretching after quench. Compared to 7075-T7351: 7150-T7751 offers ~10% higher YS (510 vs 462 MPa) and equivalent SCC resistance. For fuselage applications, the T6151 (peak-aged) temper is used where maximum strength is the driver, accepting lower SCC resistance. Fatigue crack growth rate is similar to 7075-T7351.',
  tempers: [
    {
      designation: 'T6151',
      description: 'Solution heat treated, stress relieved by stretching, artificially aged to peak strength — maximum strength for structural applications',
      tensileStrength: { min: 560, max: 620, typical: 593 },
      yieldStrength: { min: 496, max: 552, typical: 524 },
      elongation: { min: 10, max: 14, typical: 11 },
      hardness: { brinell: 165 },
    },
    {
      designation: 'T7751',
      description: 'Solution heat treated, stress relieved by stretching, over-aged — standard wing and fuselage panel temper with improved SCC resistance',
      tensileStrength: { min: 545, max: 600, typical: 580 },
      yieldStrength: { min: 483, max: 538, typical: 510 },
      elongation: { min: 10, max: 15, typical: 11 },
      hardness: { brinell: 160 },
    },
  ],
  relatedMaterials: ['al-7075', 'al-7050', 'al-7068'],
};

export const aluminumSeries7xxx: Material[] = [al7075, al7050, al7068, al7001, al7150];
