import { Material } from '../types';

export const steel4130: Material = {
  id: 'steel-4130',
  name: '4130 Chromoly Steel',
  family: 'steel',
  subFamily: 'Alloy Steel',
  mechanical: {
    density: 7.85,
    tensileStrength: { min: 560, max: 1020, typical: 670 },
    yieldStrength: { min: 360, max: 910, typical: 436 },
    elongation: { min: 16, max: 25, typical: 25 },
    hardness: {
      brinell: { min: 156, max: 302, typical: 197 },
    },
    elasticModulus: 205,
    shearModulus: 80.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 310, max: 510, typical: 380 },
  },
  thermal: {
    conductivity: 42.7,
    thermalExpansion: 11.2,
    specificHeat: 477,
    meltingRange: { min: 1432, max: 1482 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Good',
    formability: 'Good',
    heatTreatable: true,
    weldNotes:
      'Good weldability in annealed or normalized condition. Preheat to 175-230°C for sections over 6 mm in the hardened condition. Post-weld stress relief at 600-650°C recommended. ER80S-D2 or ER70S-2 filler preferred for TIG; avoid welding in the hardened condition without preheat.',
  },
  standards: {
    astm: ['A29'],
    ams: ['6350', '6351', '6360'],
    sae: ['4130'],
    uns: 'G41300',
  },
  corrosionResistance: 'Poor',
  relativeCost: 2,
  description:
    '4130 is a chromium-molybdenum (chromoly) low-alloy steel with approximately 0.28-0.33% carbon, 0.8-1.1% chromium, and 0.15-0.25% molybdenum. The Cr-Mo alloying improves hardenability, high-temperature strength, and toughness over plain carbon steels. 4130 is widely used in aerospace, motorsport, and cycling for its excellent strength-to-weight ratio, weldability (compared to higher-carbon alloy steels), and availability in thin-wall tubing. It can be welded in the normalized condition without complex preheat procedures.',
  keyCharacteristics: [
    'Chromium-molybdenum alloying for improved hardenability and toughness',
    'Excellent strength-to-weight ratio in heat-treated condition',
    'Best weldability among hardenable alloy steels',
    'Available in thin-wall seamless tubing (DOM and seamless)',
    'Widely available per AMS 6350 for aerospace applications',
    'Good fatigue resistance in normalized and Q&T conditions',
  ],
  commonApplications: [
    'Aircraft tubing and structural frames',
    'Automotive roll cages and chassis',
    'Bicycle frames (high-end steel bikes)',
    'Pressure vessels and hydraulic tubing',
    'Tooling and fixtures',
    'Motorsport suspension components',
    'Firearms barrels and receivers',
  ],
  industries: ['Aerospace', 'Motorsport', 'Cycling', 'Oil & Gas'],
  beginnerNote:
    "4130 chromoly is the alloy steel most people encounter first. It's stronger than mild steel but still weldable without exotic procedures — that's why bicycle frames and race car roll cages are made from it. The \"4130\" designation tells you it has chromium and molybdenum added, which boost strength and hardenability. It comes in thin-wall tubing that's hard to find in plain carbon steel grades.",
  expertNote:
    'In the normalized condition, 4130 achieves ~670 MPa UTS / 436 MPa YS / 25.5% elongation (Brinell ~197). Q&T at 870°C / oil quench / 315°C temper achieves ~1140 MPa UTS. Per AMS 6350, tubing must meet specific wall thickness and straightness tolerances. Critical joints in aircraft structures often require normalized post-weld heat treatment at 900°C to restore toughness in the HAZ. For larger cross-sections requiring through-hardening, 4140 or 4340 offer greater hardenability.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~870°C — maximum softness for machining and forming',
      tensileStrength: { min: 560, max: 620, typical: 585 },
      yieldStrength: { min: 360, max: 415, typical: 380 },
      elongation: { min: 21, max: 28, typical: 25 },
      hardness: { brinell: 156 },
    },
    {
      designation: 'Normalized (N)',
      description:
        'Air-cooled from ~925°C — standard delivery condition for tubing, good balance of strength and toughness',
      tensileStrength: { min: 650, max: 710, typical: 670 },
      yieldStrength: { min: 415, max: 460, typical: 436 },
      elongation: { min: 23, max: 28, typical: 26 },
      hardness: { brinell: 197 },
    },
    {
      designation: 'Q&T 870°C / 315°C',
      description:
        'Austenitized at 870°C, oil quenched, tempered at 315°C — high-strength condition',
      tensileStrength: { min: 990, max: 1050, typical: 1020 },
      yieldStrength: { min: 880, max: 940, typical: 910 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { rockwellC: 32 },
    },
    {
      designation: 'Q&T 870°C / 540°C',
      description:
        'Austenitized at 870°C, oil quenched, tempered at 540°C — balanced strength and toughness',
      tensileStrength: { min: 830, max: 900, typical: 860 },
      yieldStrength: { min: 700, max: 760, typical: 725 },
      elongation: { min: 18, max: 22, typical: 20 },
      hardness: { brinell: 255 },
    },
  ],
  relatedMaterials: ['steel-4140', 'steel-4340', 'steel-1045'],
};

export const steel4140: Material = {
  id: 'steel-4140',
  name: '4140 Chromoly Steel',
  family: 'steel',
  subFamily: 'Alloy Steel',
  mechanical: {
    density: 7.85,
    tensileStrength: { min: 655, max: 1570, typical: 1020 },
    yieldStrength: { min: 414, max: 1420, typical: 655 },
    elongation: { min: 11, max: 26, typical: 18 },
    hardness: {
      brinell: { min: 197, max: 461, typical: 293 },
    },
    elasticModulus: 205,
    shearModulus: 80.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 415, max: 640, typical: 525 },
  },
  thermal: {
    conductivity: 42.6,
    thermalExpansion: 12.3,
    specificHeat: 477,
    meltingRange: { min: 1416, max: 1460 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Fair weldability — preheat to 205-315°C required. Interpass temperature must be maintained. Post-weld stress relief at 650-700°C strongly recommended to prevent delayed hydrogen cracking. Weld only in annealed or normalized condition when possible; avoid welding in hardened condition.',
  },
  standards: {
    astm: ['A29', 'A322'],
    ams: ['6349', '6381'],
    sae: ['4140'],
    uns: 'G41400',
  },
  corrosionResistance: 'Poor',
  relativeCost: 2,
  description:
    '4140 is a chromium-molybdenum alloy steel with approximately 0.38-0.43% carbon, 0.8-1.1% chromium, and 0.15-0.25% molybdenum. The higher carbon content compared to 4130 provides significantly greater hardness and strength in the Q&T condition, at the cost of reduced weldability. 4140 is one of the most widely used engineering steels globally, offering an outstanding combination of strength, toughness, wear resistance, and fatigue life. It is commonly supplied in the pre-hardened and tempered condition (Brinell ~293-321) for direct machining without further heat treatment.',
  keyCharacteristics: [
    'Higher carbon than 4130 (~0.40% C) for greater maximum hardness and strength',
    'Excellent depth of hardening — through-hardens in sections up to ~65 mm diameter',
    'Wide property range achievable through tempering temperature selection',
    'Commonly available pre-hardened to 28-34 HRC for direct machining',
    'Outstanding fatigue resistance in Q&T condition',
    'Good toughness maintained to subzero temperatures in properly tempered condition',
  ],
  commonApplications: [
    'Gears and gear shafts',
    'Crankshafts and camshafts',
    'Spindles and mandrels',
    'High-strength bolts and studs',
    'Die blocks and tooling',
    'Hydraulic cylinder rods',
    'Drill collars and oil field tooling',
  ],
  industries: ['Automotive', 'Heavy Machinery', 'Oil & Gas', 'Defense'],
  beginnerNote:
    '4140 is the workhorse of alloy steels. When someone says they need a strong, tough steel shaft or gear, 4140 is usually the answer. It comes in a pre-hardened form (called "4140 PH" or "4140 HT") that you can machine directly without further heat treatment. It\'s stronger than 4130 but needs more care when welding. Think of it as 4130\'s stronger, less weldable sibling.',
  expertNote:
    'Mechanical properties vary dramatically with tempering temperature. Annealed: 655 MPa UTS / 414 MPa YS / 25.7% elongation. Q&T 315°C: 1570 MPa UTS / 1420 MPa YS / 11% elongation (hardness ~46 HRC). Q&T 540°C: 1140 MPa UTS / 1020 MPa YS / 15% elongation (hardness ~34 HRC). For oil field drill collars, API 7-1 specifies Q&T to 120-165 ksi (827-1138 MPa) UTS. Preheat CE-based: CE = 0.40 + (1.0/6) + (0.20/15) ≈ 0.58 — mandatory preheat. Nitriding achieves surface hardness 65-70 HRC without quench distortion.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~845°C — maximum softness, easiest machining condition',
      tensileStrength: { min: 640, max: 690, typical: 655 },
      yieldStrength: { min: 400, max: 430, typical: 414 },
      elongation: { min: 24, max: 28, typical: 26 },
      hardness: { brinell: 197 },
    },
    {
      designation: 'Normalized (N)',
      description:
        'Air-cooled from ~870°C — uniform microstructure, moderate properties',
      tensileStrength: { min: 930, max: 1000, typical: 965 },
      yieldStrength: { min: 655, max: 720, typical: 690 },
      elongation: { min: 18, max: 22, typical: 20 },
      hardness: { brinell: 280 },
    },
    {
      designation: 'Q&T 315°C',
      description:
        'Austenitized at 845°C, oil quenched, tempered at 315°C — maximum practical hardness',
      tensileStrength: { min: 1520, max: 1620, typical: 1570 },
      yieldStrength: { min: 1380, max: 1460, typical: 1420 },
      elongation: { min: 10, max: 13, typical: 11 },
      hardness: { rockwellC: 46 },
    },
    {
      designation: 'Q&T 540°C',
      description:
        'Austenitized at 845°C, oil quenched, tempered at 540°C — balanced high-strength/toughness for service',
      tensileStrength: { min: 1100, max: 1190, typical: 1140 },
      yieldStrength: { min: 990, max: 1060, typical: 1020 },
      elongation: { min: 14, max: 17, typical: 15 },
      hardness: { rockwellC: 34 },
    },
    {
      designation: 'Pre-Hardened & Tempered (PH)',
      description:
        'Mill-supplied Q&T to ~28-34 HRC — ready for direct machining without further heat treatment',
      tensileStrength: { min: 965, max: 1170, typical: 1035 },
      yieldStrength: { min: 830, max: 1000, typical: 900 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { brinell: 293 },
    },
  ],
  relatedMaterials: ['steel-4130', 'steel-4340', 'steel-1045'],
};

export const steel4340: Material = {
  id: 'steel-4340',
  name: '4340 Alloy Steel',
  family: 'steel',
  subFamily: 'Alloy Steel',
  mechanical: {
    density: 7.85,
    tensileStrength: { min: 745, max: 1875, typical: 1080 },
    yieldStrength: { min: 470, max: 1670, typical: 710 },
    elongation: { min: 10, max: 22, typical: 16 },
    hardness: {
      brinell: { min: 217, max: 555, typical: 315 },
    },
    elasticModulus: 205,
    shearModulus: 80.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 470, max: 760, typical: 615 },
  },
  thermal: {
    conductivity: 44.5,
    thermalExpansion: 12.3,
    specificHeat: 475,
    meltingRange: { min: 1427, max: 1482 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Weldability is fair; preheat to 260-370°C required in all conditions. PWHT at 650-680°C mandatory to prevent hydrogen-induced cracking. Due to high alloy content, 4340 is susceptible to delayed cracking. Welding in hardened condition is strongly discouraged.',
  },
  standards: {
    astm: ['A322'],
    ams: ['6415', '6484'],
    sae: ['4340'],
    uns: 'G43400',
  },
  corrosionResistance: 'Poor',
  relativeCost: 3,
  description:
    '4340 is a nickel-chromium-molybdenum alloy steel with approximately 0.38-0.43% carbon, 1.65-2.00% nickel, 0.70-0.90% chromium, and 0.20-0.30% molybdenum. The higher alloy content provides exceptional hardenability — it will through-harden in sections up to 150 mm diameter — along with outstanding toughness and fatigue resistance. 4340 is the premier alloy steel for the most demanding applications, including aircraft landing gear, large crankshafts, and highly stressed structural aerospace components.',
  keyCharacteristics: [
    'Exceptional hardenability — through-hardens in sections up to 150 mm',
    'Ni-Cr-Mo alloying provides highest toughness among standard alloy steels',
    'Achieves the highest strength levels of standard alloy steels (>1800 MPa UTS)',
    'Outstanding fatigue life in highly stressed applications',
    'Good dimensional stability during heat treatment compared to simpler alloys',
    'AMS 6415 is the primary aerospace specification',
  ],
  commonApplications: [
    'Aircraft landing gear components',
    'Large crankshafts and connecting rods',
    'Large, highly stressed gears',
    'Structural aircraft forgings',
    'Drill collars and oil field equipment',
    'Heavy-duty axles and shafts',
    'Ordnance and defense components',
  ],
  industries: ['Aerospace', 'Defense', 'Heavy Machinery'],
  beginnerNote:
    '4340 is the premium alloy steel — the one engineers reach for when they need the absolute best combination of strength and toughness. It has nickel added (unlike 4130/4140) which gives it exceptional toughness, especially at high strength levels. Aircraft landing gear is the classic example: it needs to absorb massive impact loads without breaking. The downside is cost and difficulty welding.',
  expertNote:
    'The Ni addition (1.65-2.00%) dramatically improves low-temperature toughness and hardenability versus 4140. Q&T 315°C achieves 1875 MPa UTS / 1670 MPa YS / 10% elongation (Charpy V-notch ~20 J). Q&T 540°C achieves 1370 MPa UTS / 1170 MPa YS / 14% elongation (CVN ~47 J). Vacuum arc remelted (VAR) 4340 (AMS 6414) is required for critical aerospace fatigue applications. Maraging 300 or 17-4 PH may be considered when weldability is critical at comparable strength levels. Carbon equivalent ~0.87 — always preheat.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~845°C — maximum softness, used for machining prior to final heat treatment',
      tensileStrength: { min: 745, max: 800, typical: 745 },
      yieldStrength: { min: 470, max: 530, typical: 470 },
      elongation: { min: 20, max: 24, typical: 22 },
      hardness: { brinell: 217 },
    },
    {
      designation: 'Normalized (N)',
      description:
        'Air-cooled from ~870°C — used for stress relief and property uniformity before Q&T',
      tensileStrength: { min: 1080, max: 1140, typical: 1110 },
      yieldStrength: { min: 710, max: 790, typical: 745 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { brinell: 315 },
    },
    {
      designation: 'Q&T 315°C',
      description:
        'Austenitized at 845°C, oil quenched, tempered at 315°C — maximum strength for aerospace structural components',
      tensileStrength: { min: 1840, max: 1910, typical: 1875 },
      yieldStrength: { min: 1640, max: 1700, typical: 1670 },
      elongation: { min: 9, max: 12, typical: 10 },
      hardness: { rockwellC: 54 },
    },
    {
      designation: 'Q&T 425°C',
      description:
        'Austenitized at 845°C, oil quenched, tempered at 425°C — high strength with improved toughness',
      tensileStrength: { min: 1590, max: 1660, typical: 1620 },
      yieldStrength: { min: 1380, max: 1450, typical: 1420 },
      elongation: { min: 11, max: 14, typical: 12 },
      hardness: { rockwellC: 47 },
    },
    {
      designation: 'Q&T 540°C',
      description:
        'Austenitized at 845°C, oil quenched, tempered at 540°C — optimized balance of strength and impact toughness',
      tensileStrength: { min: 1340, max: 1410, typical: 1370 },
      yieldStrength: { min: 1140, max: 1210, typical: 1170 },
      elongation: { min: 13, max: 16, typical: 14 },
      hardness: { brinell: 409 },
    },
  ],
  relatedMaterials: ['steel-4140', 'steel-4130', 'steel-8620'],
};

export const steel8620: Material = {
  id: 'steel-8620',
  name: '8620 Alloy Steel',
  family: 'steel',
  subFamily: 'Alloy Steel',
  mechanical: {
    density: 7.85,
    tensileStrength: { min: 530, max: 830, typical: 632 },
    yieldStrength: { min: 295, max: 635, typical: 357 },
    elongation: { min: 16, max: 26, typical: 26 },
    hardness: {
      brinell: { min: 149, max: 241, typical: 183 },
      rockwellC: { min: 58, max: 62, typical: 60 },
    },
    elasticModulus: 200,
    shearModulus: 80.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 310, max: 480, typical: 380 },
  },
  thermal: {
    conductivity: 46.6,
    thermalExpansion: 11.7,
    specificHeat: 460,
    meltingRange: { min: 1427, max: 1482 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Good',
    formability: 'Good',
    heatTreatable: true,
    weldNotes:
      'Good weldability in the annealed or normalized condition. Preheat to 150-175°C recommended for sections over 25 mm. Low-hydrogen electrodes preferred. Not typically welded in the carburized/hardened condition.',
  },
  standards: {
    astm: ['A29'],
    ams: ['6274'],
    sae: ['8620'],
    uns: 'G86200',
  },
  corrosionResistance: 'Poor',
  relativeCost: 2,
  description:
    '8620 is a nickel-chromium-molybdenum low-alloy steel with approximately 0.18-0.23% carbon, 0.40-0.70% nickel, 0.40-0.60% chromium, and 0.15-0.25% molybdenum. The low base carbon content and Ni-Cr-Mo alloying make 8620 an ideal carburizing (case-hardening) steel. After carburizing, the case achieves 58-62 HRC while the core retains excellent toughness — a combination unachievable with through-hardening steels. It is the standard alloy for case-hardened gears, ring gears, and small pinions in the automotive industry.',
  keyCharacteristics: [
    'Premium case-hardening steel — standard for carburized gears in automotive industry',
    'Low base carbon provides tough, ductile core after carburizing',
    'Ni-Cr-Mo alloying ensures good core hardenability in thicker sections',
    'Case hardness of 58-62 HRC achievable after carburizing and quenching',
    'Better core toughness than plain carbon case-hardening steels (1018, 1020)',
    'Good combination of weldability and case-hardening response',
  ],
  commonApplications: [
    'Case-hardened ring gears and pinions',
    'Camshafts and cam followers',
    'Transmission gears',
    'Differential components',
    'Carburized bushings and bearing races',
    'Small sprockets and chain drives',
    'Agricultural gearbox components',
  ],
  industries: ['Automotive', 'Heavy Machinery', 'Agricultural'],
  beginnerNote:
    '8620 is the go-to steel when you need a gear or cam with a rock-hard surface but a tough, impact-resistant core. You start with soft, machinable 8620 steel, machine your part, then send it for carburizing (a process that adds carbon to the surface). The result: a wear-resistant surface that can handle grinding contact, with a tough core that absorbs shock. Think of it as giving steel a hard shell and a tough interior.',
  expertNote:
    'Carburizing is performed at 900-940°C for 4-12 hours depending on required case depth (typically 0.5-1.5 mm). After carburizing, quench from 820-850°C (direct or reheat) into oil, then temper at 150-180°C. Case hardness: 58-62 HRC. Core hardness: 30-42 HRC depending on section size and quench rate. The Ni content improves retained austenite stability and toughness; for heavy-duty applications, 9310 (higher Ni) is the upgrade path. AMS 6274 bars are standard for aerospace-quality gear production.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~870°C — maximum softness for machining prior to carburizing',
      tensileStrength: { min: 530, max: 590, typical: 560 },
      yieldStrength: { min: 295, max: 365, typical: 325 },
      elongation: { min: 22, max: 28, typical: 26 },
      hardness: { brinell: 149 },
    },
    {
      designation: 'Normalized (N)',
      description:
        'Air-cooled from ~925°C — standard pre-machining condition, uniform microstructure',
      tensileStrength: { min: 620, max: 650, typical: 632 },
      yieldStrength: { min: 345, max: 380, typical: 357 },
      elongation: { min: 24, max: 28, typical: 26 },
      hardness: { brinell: 183 },
    },
    {
      designation: 'Carburized & Hardened (CH)',
      description:
        'Carburized at 920°C, oil quenched, tempered at 165°C — production case-hardened condition; hardness values represent case (surface)',
      tensileStrength: { min: 790, max: 860, typical: 830 },
      yieldStrength: { min: 595, max: 650, typical: 635 },
      elongation: { min: 16, max: 20, typical: 17 },
      hardness: { rockwellC: 60 },
    },
    {
      designation: 'Q&T 315°C (Through-Hardened)',
      description:
        'Austenitized at 845°C, oil quenched, tempered at 315°C — through-hardened condition for applications not requiring carburizing',
      tensileStrength: { min: 1000, max: 1100, typical: 1050 },
      yieldStrength: { min: 830, max: 930, typical: 880 },
      elongation: { min: 13, max: 17, typical: 14 },
      hardness: { brinell: 302 },
    },
  ],
  relatedMaterials: ['steel-4130', 'steel-4340', 'steel-1018'],
};

export const steel4150: Material = {
  id: 'steel-4150',
  name: '4150 Chromoly Steel',
  family: 'steel',
  subFamily: 'Alloy Steel',
  mechanical: {
    density: 7.85,
    tensileStrength: { min: 1020, max: 1620, typical: 1140 },
    yieldStrength: { min: 862, max: 1380, typical: 1000 },
    elongation: { min: 11, max: 16, typical: 13 },
    hardness: {
      brinell: { min: 293, max: 461, typical: 334 },
      rockwellC: { min: 31, max: 48, typical: 36 },
    },
    elasticModulus: 200,
    shearModulus: 80,
    poissonRatio: 0.29,
    fatigueStrength: { min: 520, max: 690, typical: 586 },
  },
  thermal: {
    conductivity: 42.7,
    thermalExpansion: 12.3,
    specificHeat: 473,
    meltingRange: { min: 1400, max: 1475 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Fair weldability — preheat to 200-315°C required. Post-weld stress relief at 595-650°C strongly recommended. Low-hydrogen electrodes (E8018-B2 or E9018) required. Higher carbon than 4140 increases cracking risk — follow AWS D1.1 procedures strictly.',
  },
  standards: {
    astm: ['A322'],
    sae: ['4150'],
    uns: 'G41500',
  },
  corrosionResistance: 'Poor',
  relativeCost: 2,
  description:
    "4150 is a chromium-molybdenum alloy steel with approximately 0.48-0.53% carbon — the high-carbon version of 4140. The additional carbon (vs 4140's 0.38-0.43% C) provides increased through-hardening capability and higher achievable strength and hardness, making 4150 suitable for heavier cross-sections and applications requiring greater surface hardness. It shares 4140's excellent hardenability but at higher strength levels in comparable Q&T conditions. Applications include high-strength fasteners, pressure vessels, and heavy machinery components.",
  keyCharacteristics: [
    "High-carbon version of 4140 — ~0.50% C vs 4140's ~0.40% C",
    'Higher achievable strength and hardness than 4140 in equivalent Q&T tempers',
    'Better through-hardening in large cross-sections',
    'Excellent hardenability due to Cr-Mo addition (same as 4140)',
    'Premium alloy for heavy-duty applications requiring >1000 MPa UTS',
    'Readily oil-quenched for most cross-sections',
  ],
  commonApplications: [
    'High-strength bolts and studs (Grade 8.8 and higher)',
    'Pressure vessel components requiring high strength',
    'Heavy-duty gears and pinions',
    'Mining and drilling equipment',
    'Heavy-truck axles and drivetrain components',
    'Downhole oil tool components',
  ],
  industries: ['Oil & Gas', 'Mining', 'Heavy Machinery', 'Automotive'],
  beginnerNote:
    "4150 is essentially \"high-carbon 4140\" — if you need the strength of 4140 but need to go even higher, 4150 is the next step. The extra carbon lets it achieve greater hardness and strength, but it's also a bit harder to weld and a bit more brittle at a given hardness level. Use it when 4140 isn't quite strong enough.",
  expertNote:
    "Composition: 0.48-0.53% C, 0.80-1.10% Cr, 0.15-0.25% Mo. Carbon equivalent ≈ 0.87 vs 4140's ~0.75. The higher carbon shifts the CCT curve to longer times (improved hardenability) and increases the martensite start temperature, reducing retained austenite. As-quenched hardness achieves ~54 HRC vs 4140's ~50 HRC. At equal temper temperature, 4150 provides ~100 MPa higher tensile strength than 4140. Critical design consideration: in the notch-sensitive Q&T condition above 1380 MPa UTS, the impact energy (CVN) drops below 27 J — specify minimum CVN toughness for critical applications. For extremely demanding applications (aerospace fasteners), vacuum arc remelt (VAR) or electroslag remelt (ESR) quality is specified to control inclusion content.",
  tempers: [
    {
      designation: 'Annealed (A)',
      description: 'Furnace-cooled from ~870°C — maximum softness for machining',
      tensileStrength: { min: 930, max: 1030, typical: 1000 },
      yieldStrength: { min: 820, max: 920, typical: 862 },
      elongation: { min: 13, max: 17, typical: 15 },
      hardness: { brinell: 293 },
    },
    {
      designation: 'Q&T 315°C',
      description: 'Austenitized at 845°C, oil quenched, tempered at 315°C — maximum practical strength',
      tensileStrength: { min: 1520, max: 1720, typical: 1620 },
      yieldStrength: { min: 1310, max: 1450, typical: 1380 },
      elongation: { min: 9, max: 13, typical: 11 },
      hardness: { rockwellC: 48 },
    },
    {
      designation: 'Q&T 540°C',
      description: 'Austenitized at 845°C, oil quenched, tempered at 540°C — standard high-strength structural condition',
      tensileStrength: { min: 1100, max: 1210, typical: 1140 },
      yieldStrength: { min: 930, max: 1030, typical: 1000 },
      elongation: { min: 12, max: 16, typical: 13 },
      hardness: { rockwellC: 36 },
    },
  ],
  relatedMaterials: ['steel-4140', 'steel-4340', 'steel-4130'],
};

export const steel52100: Material = {
  id: 'steel-52100',
  name: '52100 Bearing Steel',
  family: 'steel',
  subFamily: 'Alloy Steel',
  mechanical: {
    density: 7.83,
    tensileStrength: { min: 758, max: 2000, typical: 1000 },
    yieldStrength: { min: 517, max: 1650, typical: 850 },
    elongation: { min: 2, max: 14, typical: 12 },
    hardness: {
      brinell: { min: 197, max: 590, typical: 295 },
      rockwellC: { min: 21, max: 64, typical: 58 },
    },
    elasticModulus: 200,
    shearModulus: 80,
    poissonRatio: 0.29,
    fatigueStrength: { min: 517, max: 758, typical: 620 },
  },
  thermal: {
    conductivity: 46.6,
    thermalExpansion: 11.9,
    specificHeat: 473,
    meltingRange: { min: 1425, max: 1490 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Fair',
    formability: 'Poor',
    heatTreatable: true,
    weldNotes:
      'Poor weldability — very high carbon content (~1.0% C) with CE ~1.35. Any welding requires preheat to 370-425°C, post-weld immediate anneal or full Q&T cycle. Welding 52100 is strongly discouraged for structural applications.',
  },
  standards: {
    astm: ['A295'],
    sae: ['52100'],
    uns: 'G52986',
  },
  corrosionResistance: 'Poor',
  relativeCost: 2,
  description:
    '52100 is the most widely used bearing steel in the world, with approximately 1.0% carbon and 1.3-1.6% chromium. The chromium combines with carbon to form hard chromium carbides (Cr7C3) that provide exceptional wear resistance, while the high carbon content enables hardening to 60-65 HRC. This steel was developed specifically for rolling-element bearings — ball and roller bearings — where resistance to rolling contact fatigue, surface hardness, and dimensional stability are paramount. Through-hardened 52100 is the default choice for bearing races and balls in most industrial, automotive, and aerospace bearings.',
  keyCharacteristics: [
    'Universal bearing steel — >70% of all rolling element bearings worldwide',
    'High C (1.0%) + Cr (1.5%) creates hard chromium carbides for contact fatigue resistance',
    'Maximum hardness 60-65 HRC after hardening — required for bearing race surfaces',
    'Exceptional rolling contact fatigue life when properly hardened and tempered',
    'Dimensional stability during and after heat treatment critical for bearing applications',
    'Through-hardened for bearings; case-hardened grades (8620) used for impact-loaded bearings',
  ],
  commonApplications: [
    'Ball and roller bearing races and rolling elements',
    'Precision bearing components',
    'Balls for ball bearings',
    'Precision gauge components',
    'High-load wear surfaces',
    'Precision dies requiring high hardness',
  ],
  industries: ['Automotive', 'Aerospace', 'Industrial', 'Precision Instruments'],
  beginnerNote:
    "52100 is the steel that almost all bearings are made from. The combination of high carbon and chromium makes it very hard and wear-resistant — exactly what you need when metal balls are rolling against metal races millions of times. If you need a very hard steel that can withstand repetitive contact loading without cracking, 52100 is typically the choice. It's difficult to machine in the hardened state (requires grinding) and can't really be welded.",
  expertNote:
    'Composition: 0.93-1.05% C, 1.35-1.60% Cr, 0.25-0.45% Mn. Standard heat treatment: spheroidize anneal (750-800°C, slow cool) for machining; harden (austenitize 845-870°C to dissolve carbides but retain some undissolved Cr7C3 as wear-resistant particles), oil quench; temper at 150-175°C for HRC 60-64. Retained austenite in quenched condition: 8-15% depending on austenitizing temperature — excessive RA causes dimensional instability, minimize by subzero treatment (-60 to -85°C) before tempering. Contact fatigue life is extremely sensitive to cleanliness: vacuum-degassed or electroslag-remelt quality (DIN 100Cr6 VEW) achieves 3-5× life of conventional quality. Carburizing-grade alternatives: 8620 and 4118 for impact-loaded bearings where core toughness is needed. Hardness of 60-62 HRC required for bearings — lower hardness sharply reduces fatigue life per Harris L10 life factor.',
  tempers: [
    {
      designation: 'Spheroidize Annealed',
      description: 'Slow cool or cycled from 750-800°C — spheroidal carbides for machining; standard pre-hardening condition',
      tensileStrength: { min: 690, max: 793, typical: 758 },
      yieldStrength: { min: 476, max: 558, typical: 517 },
      elongation: { min: 12, max: 16, typical: 14 },
      hardness: { brinell: 197 },
    },
    {
      designation: 'Through-Hardened (H+T 150°C)',
      description: 'Austenitized at 845-860°C, oil quenched, tempered at 150°C — standard bearing condition for races and balls',
      tensileStrength: { min: 1930, max: 2070, typical: 2000 },
      yieldStrength: { min: 1590, max: 1720, typical: 1650 },
      elongation: { min: 1, max: 3, typical: 2 },
      hardness: { rockwellC: 63 },
    },
    {
      designation: 'Through-Hardened (H+T 175°C)',
      description: 'Austenitized at 845°C, oil quenched, tempered at 175°C — standard HRC 60-62 for precision bearings',
      tensileStrength: { min: 1860, max: 1970, typical: 1930 },
      yieldStrength: { min: 1520, max: 1650, typical: 1590 },
      elongation: { min: 2, max: 4, typical: 3 },
      hardness: { rockwellC: 61 },
    },
  ],
  relatedMaterials: ['steel-4140', 'steel-440Css', 'steel-4340'],
};

export const alloySteels: Material[] = [steel4130, steel4140, steel4340, steel8620, steel4150, steel52100];
