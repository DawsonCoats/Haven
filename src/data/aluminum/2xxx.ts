import { Material } from '../types';

export const al2024: Material = {
  id: 'al-2024',
  name: '2024 Aluminum',
  family: 'aluminum',
  subFamily: '2xxx Series',
  mechanical: {
    density: 2.78,
    tensileStrength: { min: 325, max: 483, typical: 469 },
    yieldStrength: { min: 275, max: 345, typical: 325 },
    elongation: { min: 10, max: 20, typical: 18 },
    hardness: { brinell: { min: 100, max: 130, typical: 120 } },
    elasticModulus: 73.1,
    shearModulus: 28,
    poissonRatio: 0.33,
    fatigueStrength: { min: 138, max: 165, typical: 138 },
  },
  thermal: {
    conductivity: 121,
    thermalExpansion: 23.2,
    specificHeat: 875,
    meltingRange: { min: 500, max: 638 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Susceptible to hot cracking — fusion welding generally not recommended. Resistance welding is acceptable. Often joined with mechanical fasteners or adhesive bonding in aerospace applications.',
  },
  standards: {
    astm: ['B209'],
    ams: ['2024'],
    uns: 'A92024',
  },
  corrosionResistance: 'Poor',
  relativeCost: 3,
  description:
    '2024 is a high-strength aluminum-copper alloy widely used in aerospace applications. It offers an excellent strength-to-weight ratio but has poor corrosion resistance and poor weldability. It is typically used in clad (Alclad) form or with protective coatings. The alloy derives its strength from precipitation hardening with copper as the primary alloying element.',
  keyCharacteristics: [
    'High strength-to-weight ratio',
    'Excellent fatigue resistance',
    'Heat-treatable alloy (Cu-based precipitation hardening)',
    'Poor corrosion resistance — requires cladding or coating',
    'Poor fusion weldability — typically mechanically fastened',
    'Good machinability',
  ],
  commonApplications: [
    'Aircraft fuselage skins and structures',
    'Wing tension members',
    'Aerospace fasteners and rivets',
    'Automotive structural components',
    'High-stress structural parts',
    'Military vehicle components',
  ],
  industries: ['Aerospace', 'Automotive', 'Defense'],
  beginnerNote:
    "2024 is the classic aerospace aluminum — it's very strong for its weight, which is why it's used in aircraft. However, it rusts (corrodes) more easily than other aluminums, so it's often coated or clad with a purer aluminum layer. Don't try to weld it — use rivets or bolts instead.",
  expertNote:
    'T3 temper (solution heat treated + cold worked) is preferred for fatigue-critical applications due to superior fatigue life vs T4. Alclad 2024 provides corrosion protection with minimal strength penalty. Stress-corrosion cracking (SCC) susceptibility is moderate in T3 vs significant in T6 — T3 or T351 is preferred over T6 for sheet. Cladding thickness is typically 1.5–2.5% per side.',
  tempers: [
    {
      designation: 'T3',
      description:
        'Solution heat treated, cold worked, naturally aged — optimum fatigue resistance',
      tensileStrength: { min: 448, max: 517, typical: 483 },
      yieldStrength: { min: 310, max: 380, typical: 345 },
      elongation: { min: 15, max: 20, typical: 18 },
      hardness: { brinell: 120 },
    },
    {
      designation: 'T4',
      description: 'Solution heat treated and naturally aged — slightly lower strength than T3',
      tensileStrength: { min: 434, max: 503, typical: 469 },
      yieldStrength: { min: 290, max: 360, typical: 325 },
      elongation: { min: 16, max: 22, typical: 20 },
      hardness: { brinell: 120 },
    },
    {
      designation: 'T351',
      description:
        'Solution heat treated, stress relieved by stretching, naturally aged — plate and bar',
      tensileStrength: { min: 448, max: 517, typical: 483 },
      yieldStrength: { min: 310, max: 380, typical: 345 },
      elongation: { min: 15, max: 20, typical: 18 },
      hardness: { brinell: 120 },
    },
    {
      designation: 'T851',
      description:
        'Solution heat treated, stress relieved by stretching, artificially aged — improved SCC resistance',
      tensileStrength: { min: 455, max: 490, typical: 476 },
      yieldStrength: { min: 400, max: 435, typical: 414 },
      elongation: { min: 6, max: 10, typical: 8 },
      hardness: { brinell: 128 },
    },
  ],
  relatedMaterials: ['al-7075', 'al-6061', 'al-2011'],
  availableForms: ['sheet', 'plate', 'bar', 'rod', 'tube', 'extrusion', 'forging'],
  manufacturingProcesses: ['machining', 'forming', 'forging', 'rolling'],
};

export const al2011: Material = {
  id: 'al-2011',
  name: '2011 Aluminum',
  family: 'aluminum',
  subFamily: '2xxx Series',
  mechanical: {
    density: 2.83,
    tensileStrength: { min: 310, max: 405, typical: 380 },
    yieldStrength: { min: 241, max: 310, typical: 295 },
    elongation: { min: 12, max: 18, typical: 15 },
    hardness: { brinell: { min: 85, max: 105, typical: 95 } },
    elasticModulus: 70.3,
    shearModulus: 26.4,
    poissonRatio: 0.33,
    fatigueStrength: { min: 124, max: 138, typical: 131 },
  },
  thermal: {
    conductivity: 151,
    thermalExpansion: 23.2,
    specificHeat: 875,
    meltingRange: { min: 541, max: 643 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Excellent',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Not recommended for fusion welding due to hot cracking susceptibility. Primarily a screw machine stock alloy — designed for high-speed machining, not welding.',
  },
  standards: {
    astm: ['B209', 'B211'],
    uns: 'A92011',
  },
  corrosionResistance: 'Poor',
  relativeCost: 2,
  description:
    '2011 is a free-machining aluminum-copper alloy designed specifically for high-speed screw machine operations. It contains small additions of bismuth and lead (or tin in lead-free versions) that form soft inclusions promoting chip breakage. It offers excellent machinability with good mechanical strength but has poor corrosion resistance and is not intended for welding.',
  keyCharacteristics: [
    'Excellent machinability — best in aluminum family',
    'Free-machining with bismuth and lead (or tin) additions',
    'Good mechanical strength for a machining alloy',
    'Heat-treatable for additional strength',
    'Poor corrosion resistance',
    'Not suitable for welding',
  ],
  commonApplications: [
    'Screw machine products',
    'Automatic lathe parts',
    'Fittings and connectors',
    'Valves and valve components',
    'Nuts, bolts, and fasteners',
    'Precision machined components',
  ],
  industries: ['Manufacturing', 'Automotive', 'Industrial'],
  beginnerNote:
    "2011 is the \"easy-to-machine\" aluminum. If you need to make lots of precision parts on a lathe or screw machine, this is your alloy — it cuts cleanly and quickly. The downside is it corrodes more easily than other aluminums, so it's usually used in protected or indoor environments.",
  expertNote:
    'Contains Bi and Pb (typically 0.2–0.6% each) to promote short chip formation in high-speed turning — achieves up to 300% higher machinability rating vs 2024. T3 temper is most common for screw machine stock. Lead-free variants (Bi/Sn) are available for RoHS compliance. Anodizing adhesion is poor due to Cu content — apply clear lacquer or chromate conversion coating for corrosion protection.',
  tempers: [
    {
      designation: 'T3',
      description:
        'Solution heat treated, cold worked, naturally aged — standard temper for screw machine stock',
      tensileStrength: { min: 352, max: 405, typical: 380 },
      yieldStrength: { min: 269, max: 310, typical: 295 },
      elongation: { min: 12, max: 17, typical: 15 },
      hardness: { brinell: 95 },
    },
    {
      designation: 'T8',
      description:
        'Solution heat treated, cold worked, artificially aged — higher strength',
      tensileStrength: { min: 386, max: 420, typical: 405 },
      yieldStrength: { min: 310, max: 345, typical: 331 },
      elongation: { min: 10, max: 15, typical: 12 },
      hardness: { brinell: 100 },
    },
  ],
  relatedMaterials: ['al-2024', 'al-6061'],
  availableForms: ['bar', 'rod', 'extrusion'],
  manufacturingProcesses: ['machining'],
};

export const al2017: Material = {
  id: 'al-2017',
  name: '2017 Aluminum',
  family: 'aluminum',
  subFamily: '2xxx Series',
  mechanical: {
    density: 2.79,
    tensileStrength: { min: 179, max: 427, typical: 427 },
    yieldStrength: { min: 69, max: 276, typical: 276 },
    elongation: { min: 12, max: 22, typical: 22 },
    hardness: { brinell: { min: 45, max: 105, typical: 105 } },
    elasticModulus: 71.7,
    shearModulus: 28,
    poissonRatio: 0.33,
    fatigueStrength: { min: 124, max: 138, typical: 124 },
  },
  thermal: {
    conductivity: 134,
    thermalExpansion: 23.6,
    specificHeat: 875,
    meltingRange: { min: 513, max: 641 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Susceptible to hot cracking — fusion welding not recommended. Primarily used mechanically fastened. Was the original 2xxx rivet alloy before 2024.',
  },
  standards: {
    astm: ['B209', 'B211'],
    ams: ['2017'],
    uns: 'A92017',
  },
  corrosionResistance: 'Poor',
  relativeCost: 2,
  description:
    "2017 is a copper-magnesium-silicon aluminum alloy and was the first age-hardenable aluminum alloy widely used in aircraft structures (pre-WWII through WWII era). It was the original aircraft rivet alloy, replaced in most applications by 2024 due to 2024's superior strength and fatigue resistance. 2017 remains in use for rivets, fasteners, and screw machine parts where its good machinability and moderate strength are sufficient. The T4 temper is the most common condition.",
  keyCharacteristics: [
    'Original wrought heat-treatable aircraft aluminum alloy (pre-2024)',
    'Good machinability and moderate strength in T4 temper',
    'Copper-magnesium-silicon strengthening system',
    'Poor corrosion resistance — requires cladding or protective coatings',
    'Poor weldability — joined by riveting',
    'Largely superseded by 2024 in structural aerospace applications',
  ],
  commonApplications: [
    'Aircraft rivets and fasteners',
    'Screw machine products',
    'Light structural fittings',
    'General-purpose hardware',
    'Instrument components',
  ],
  industries: ['Aerospace', 'Defense', 'Manufacturing'],
  beginnerNote:
    "2017 is the \"original\" aircraft aluminum — it was used in World War II aircraft before better alloys were developed. Today it's mostly been replaced by 2024, but it still shows up as rivet material and in screw machine shops. It's strong and machines well but corrodes easily, so it needs a coating or protective treatment for outdoor use.",
  expertNote:
    '2017-T4 was the dominant aircraft structural alloy from ~1920s through mid-WWII. Composition: 3.5-4.5% Cu, 0.40-0.80% Mg, 0.20-0.80% Si. The Cu-Mg-Si precipitation system gives good room-temperature aging response but lower strength than 2024. Natural aging at room temperature (T4 temper) achieves 427 MPa UTS, 276 MPa YS. For direct replacement comparisons: 2024-T3 exceeds 2017-T4 in both strength (~12%) and fatigue life (~20%) with similar density. Corrosion protection mandatory; Cu content (4%) creates galvanic couples. Rivet designation AN470 (formerly AN430).',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — maximum softness for forming',
      tensileStrength: { min: 179, max: 220, typical: 179 },
      yieldStrength: { min: 69, max: 100, typical: 69 },
      elongation: { min: 18, max: 24, typical: 22 },
      hardness: { brinell: 45 },
    },
    {
      designation: 'T4',
      description: 'Solution heat treated and naturally aged — standard commercial temper, most common condition',
      tensileStrength: { min: 400, max: 455, typical: 427 },
      yieldStrength: { min: 255, max: 295, typical: 276 },
      elongation: { min: 14, max: 22, typical: 22 },
      hardness: { brinell: 105 },
    },
  ],
  relatedMaterials: ['al-2024', 'al-2011'],
  availableForms: ['bar', 'rod', 'wire', 'extrusion'],
  manufacturingProcesses: ['machining', 'forging'],
};

export const al2219: Material = {
  id: 'al-2219',
  name: '2219 Aluminum',
  family: 'aluminum',
  subFamily: '2xxx Series',
  mechanical: {
    density: 2.84,
    tensileStrength: { min: 172, max: 476, typical: 476 },
    yieldStrength: { min: 76, max: 393, typical: 393 },
    elongation: { min: 10, max: 18, typical: 10 },
    hardness: { brinell: { min: 41, max: 130, typical: 130 } },
    elasticModulus: 73.8,
    shearModulus: 28,
    poissonRatio: 0.33,
    fatigueStrength: { min: 103, max: 138, typical: 103 },
  },
  thermal: {
    conductivity: 116,
    thermalExpansion: 22.3,
    specificHeat: 864,
    meltingRange: { min: 543, max: 643 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Exceptional weldability for a 2xxx alloy — the only commonly fusion-weldable 2xxx grade. Use 2319 filler (matching alloy). Weld joints recover to ~70% of base metal strength after PWHT. NASA certified for cryogenic propellant tanks on Space Shuttle and SLS.',
  },
  standards: {
    astm: ['B209', 'B211'],
    ams: ['2219'],
    uns: 'A92219',
  },
  corrosionResistance: 'Poor',
  relativeCost: 4,
  description:
    '2219 is a high-copper aluminum alloy specifically designed for elevated-temperature and cryogenic service with the unique property (for 2xxx) of being fusion-weldable. Its high copper content (6.3%) combined with zirconium and manganese additions provides excellent strength from cryogenic temperatures (-270°C) through 300°C. It was selected for the Space Shuttle External Tank (liquid oxygen and hydrogen propellant tanks) and continues to be used on the SLS core stage. The T87 temper (solution treated, cold worked 7%, aged) provides the highest strength.',
  keyCharacteristics: [
    'Only commonly fusion-weldable 2xxx aluminum alloy',
    'Excellent cryogenic strength — maintains properties to -270°C',
    'Good elevated-temperature strength to ~175°C',
    'High copper (6.3%) with Zr and Mn for weld and thermal stability',
    'Used in cryogenic propellant tanks (Space Shuttle ET, SLS)',
    'T87 temper: solution heat treated + 7% cold work + artificial age',
  ],
  commonApplications: [
    'Space launch vehicle propellant tanks (LOX/LH2)',
    'Cryogenic pressure vessels',
    'High-temperature structural applications',
    'Aerospace weldments requiring elevated-temperature service',
    'Rocket motor casings',
    'Military aircraft skins and structures',
  ],
  industries: ['Aerospace', 'Defense', 'Cryogenic'],
  beginnerNote:
    "2219 is the aerospace aluminum you can weld. Most 2xxx alloys (like 2024) cannot be fusion-welded because they crack. 2219 was specifically engineered to be weldable while still being strong, which is why it's used for liquid hydrogen and oxygen tanks on rockets — those tanks need strong welded seams that can handle extreme cold without becoming brittle.",
  expertNote:
    'Key compositional feature: high Cu (5.8-6.8%) with Zr (0.10-0.25%) + Mn (0.20-0.40%) additions. Zr suppresses recrystallization and grain growth during welding (forming ZrAl3 dispersoids). The T87 temper adds 7% pre-age cold work to the T4 condition before artificial aging at 177°C, achieving 476 MPa UTS vs 455 MPa for T6. Cryogenic tensile strength actually increases vs room temperature (typical for FCC metals). Fracture toughness at -196°C: KIc ~39 MPa√m (T87). Weld with 2319 filler (matched composition); weld HAZ strength ~310 MPa after PWHT. Stress-corrosion cracking (SCC) resistance is good in T87 — better than 2024-T3 in the short-transverse direction.',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — maximum softness for forming operations',
      tensileStrength: { min: 172, max: 215, typical: 172 },
      yieldStrength: { min: 76, max: 105, typical: 76 },
      elongation: { min: 16, max: 22, typical: 18 },
      hardness: { brinell: 41 },
    },
    {
      designation: 'T4',
      description: 'Solution heat treated and naturally aged',
      tensileStrength: { min: 360, max: 400, typical: 393 },
      yieldStrength: { min: 186, max: 248, typical: 248 },
      elongation: { min: 16, max: 22, typical: 20 },
      hardness: { brinell: 90 },
    },
    {
      designation: 'T6',
      description: 'Solution heat treated and artificially aged at 177°C',
      tensileStrength: { min: 414, max: 469, typical: 455 },
      yieldStrength: { min: 345, max: 400, typical: 352 },
      elongation: { min: 10, max: 14, typical: 10 },
      hardness: { brinell: 115 },
    },
    {
      designation: 'T87',
      description: 'Solution heat treated, 7% cold work, artificially aged — maximum strength temper, used for cryogenic tank skins',
      tensileStrength: { min: 455, max: 496, typical: 476 },
      yieldStrength: { min: 372, max: 414, typical: 393 },
      elongation: { min: 9, max: 13, typical: 10 },
      hardness: { brinell: 130 },
    },
  ],
  relatedMaterials: ['al-2024', 'al-7075'],
  availableForms: ['sheet', 'plate', 'bar', 'rod', 'forging'],
  manufacturingProcesses: ['machining', 'forming', 'forging', 'welding'],
};

export const aluminumSeries2xxx: Material[] = [al2024, al2011, al2017, al2219];
