import { Material } from '../types';

export const steelA36: Material = {
  id: 'steel-a36',
  name: 'A36 Structural Steel',
  family: 'steel',
  subFamily: 'Carbon Steel',
  mechanical: {
    density: 7.85,
    tensileStrength: { min: 400, max: 550, typical: 485 },
    yieldStrength: { min: 250, max: 290, typical: 250 },
    elongation: { min: 20, max: 23, typical: 23 },
    hardness: {
      brinell: { min: 119, max: 159, typical: 137 },
    },
    elasticModulus: 200,
    shearModulus: 79.3,
    poissonRatio: 0.26,
    fatigueStrength: { min: 165, max: 200, typical: 180 },
  },
  thermal: {
    conductivity: 51.9,
    thermalExpansion: 11.7,
    specificHeat: 490,
    meltingRange: { min: 1425, max: 1538 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Good',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability with all standard processes. Low carbon content minimizes preheat requirements for most thicknesses. E70XX electrodes are standard.',
  },
  standards: {
    astm: ['A36'],
    uns: 'K02600',
  },
  corrosionResistance: 'Poor',
  relativeCost: 1,
  description:
    'A36 is the most widely used structural steel in the United States, defined by ASTM A36 specification. It is a low-carbon steel with guaranteed minimum yield and tensile strength, optimized for structural applications. Its combination of weldability, formability, and low cost makes it the backbone of the construction and fabrication industries.',
  keyCharacteristics: [
    'Guaranteed minimum yield strength of 250 MPa (36 ksi)',
    'Excellent weldability without preheat for most applications',
    'Low carbon content (~0.25-0.29% C) enables easy forming and welding',
    'Most widely available structural steel in the US market',
    'Not heat-treatable for strength improvement',
    'Prone to rust without surface protection',
  ],
  commonApplications: [
    'Structural beams and columns',
    'Bridges and overpasses',
    'Building frames and construction',
    'General fabrication and welded assemblies',
    'Plates, angles, and channels',
    'Base plates and gussets',
  ],
  industries: ['Construction', 'Infrastructure', 'Manufacturing'],
  beginnerNote:
    "A36 is the \"default\" steel — it's what most people picture when they think of structural steel. It's affordable, widely available, and easy to weld and cut. If you're building something structural and not sure what steel to use, A36 is almost always a safe starting point. Just remember: it rusts without paint or coating.",
  expertNote:
    'ASTM A36 specifies minimum yield of 250 MPa (36 ksi) and minimum UTS of 400 MPa (58 ksi). Note that A36 is specified by mechanical properties rather than chemical composition — this distinguishes it from SAE grades. For applications requiring consistent machinability, consider 1018 CD instead. Weld with E7018 for critical structural joints; preheat to 65°C for sections over 38 mm thick.',
  tempers: [
    {
      designation: 'As-Rolled (AR)',
      description:
        'Standard hot-rolled condition — surface scale present, meets ASTM A36 minimums',
      tensileStrength: { min: 400, max: 550, typical: 485 },
      yieldStrength: { min: 250, max: 290, typical: 250 },
      elongation: { min: 20, max: 23, typical: 23 },
      hardness: { brinell: 137 },
    },
    {
      designation: 'Normalized (N)',
      description:
        'Air-cooled from ~925°C — relieves rolling stresses, improves toughness and uniformity',
      tensileStrength: { min: 415, max: 490, typical: 448 },
      yieldStrength: { min: 255, max: 290, typical: 262 },
      elongation: { min: 20, max: 23, typical: 22 },
      hardness: { brinell: 131 },
    },
  ],
  relatedMaterials: ['steel-1018', 'steel-1020', 'steel-a572-50'],
};

export const steel1018: Material = {
  id: 'steel-1018',
  name: '1018 Mild Steel',
  family: 'steel',
  subFamily: 'Carbon Steel',
  mechanical: {
    density: 7.87,
    tensileStrength: { min: 400, max: 450, typical: 440 },
    yieldStrength: { min: 250, max: 370, typical: 370 },
    elongation: { min: 15, max: 25, typical: 25 },
    hardness: {
      brinell: { min: 126, max: 163, typical: 131 },
    },
    elasticModulus: 200,
    shearModulus: 79.3,
    poissonRatio: 0.29,
    fatigueStrength: { min: 195, max: 235, typical: 215 },
  },
  thermal: {
    conductivity: 51.9,
    thermalExpansion: 11.7,
    specificHeat: 486,
    meltingRange: { min: 1425, max: 1538 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Good',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability due to low carbon content. No preheat required for sections under 25 mm. Can be case-hardened via carburizing or carbonitriding despite not being through-hardened.',
  },
  standards: {
    astm: ['A108'],
    sae: ['1018'],
    uns: 'G10180',
  },
  corrosionResistance: 'Poor',
  relativeCost: 1,
  description:
    '1018 is a low-carbon steel with approximately 0.18% carbon and 0.6-0.9% manganese, available in both hot-rolled and cold-drawn conditions. Cold-drawn 1018 offers tighter dimensional tolerances, a cleaner surface finish, and higher yield strength due to work hardening. It is one of the most popular steel grades for general machined parts, combining good machinability with excellent weldability and case-hardening capability.',
  keyCharacteristics: [
    'Low carbon content (~0.18% C) gives excellent weldability and formability',
    'Cold-drawn condition offers improved surface finish and tighter tolerances vs A36',
    'Excellent candidate for case hardening (carburizing, carbonitriding)',
    'Higher yield strength in cold-drawn form due to work hardening',
    'Consistent chemical composition under SAE/AISI classification',
    'Not through-hardenable — core remains soft after case hardening',
  ],
  commonApplications: [
    'Shafts, pins, and dowels',
    'Bolts and fasteners',
    'General machined parts',
    'Case-hardened components (gears, cams)',
    'Tie rods and connecting links',
    'Cold-headed fasteners',
  ],
  industries: ['Manufacturing', 'Automotive', 'General Engineering'],
  beginnerNote:
    "1018 is the go-to mild steel for machining. It cuts cleanly, holds tight tolerances in cold-drawn bar stock, and is available everywhere. Think of it as A36's more precise cousin — similar cost, but better for parts you need to machine accurately. It can even be surface-hardened if you need a tough outer shell with a soft, tough core.",
  expertNote:
    'Cold-drawn 1018 (CD) exhibits significantly higher yield strength than hot-rolled due to work hardening (~370 MPa vs ~250 MPa typical). For case hardening, carburize at 900-930°C to achieve surface hardness of 58-63 HRC; core remains at ~20 HRC. Machinability rating ~78% of AISI B1112 free-machining steel. For improved machinability without case-hardening need, consider 12L14 (leaded) or 1215.',
  tempers: [
    {
      designation: 'Hot-Rolled (HR)',
      description:
        'As-rolled condition — scale present, loose tolerances, lower yield strength',
      tensileStrength: { min: 400, max: 430, typical: 415 },
      yieldStrength: { min: 250, max: 310, typical: 275 },
      elongation: { min: 20, max: 25, typical: 23 },
      hardness: { brinell: 126 },
    },
    {
      designation: 'Cold-Drawn (CD)',
      description:
        'Cold-drawn condition — improved surface finish, tighter tolerances, higher yield strength from work hardening',
      tensileStrength: { min: 420, max: 450, typical: 440 },
      yieldStrength: { min: 350, max: 370, typical: 370 },
      elongation: { min: 15, max: 20, typical: 15 },
      hardness: { brinell: 131 },
    },
    {
      designation: 'Annealed (A)',
      description:
        'Slow-cooled from ~870°C — maximum softness, improved ductility, used before cold forming',
      tensileStrength: { min: 340, max: 380, typical: 360 },
      yieldStrength: { min: 190, max: 240, typical: 220 },
      elongation: { min: 25, max: 35, typical: 30 },
      hardness: { brinell: 111 },
    },
  ],
  relatedMaterials: ['steel-a36', 'steel-1020', 'steel-1045'],
};

export const steel1020: Material = {
  id: 'steel-1020',
  name: '1020 Mild Steel',
  family: 'steel',
  subFamily: 'Carbon Steel',
  mechanical: {
    density: 7.87,
    tensileStrength: { min: 380, max: 470, typical: 420 },
    yieldStrength: { min: 210, max: 350, typical: 350 },
    elongation: { min: 15, max: 25, typical: 25 },
    hardness: {
      brinell: { min: 111, max: 149, typical: 131 },
    },
    elasticModulus: 200,
    shearModulus: 79.3,
    poissonRatio: 0.29,
    fatigueStrength: { min: 175, max: 215, typical: 193 },
  },
  thermal: {
    conductivity: 51.9,
    thermalExpansion: 11.7,
    specificHeat: 486,
    meltingRange: { min: 1425, max: 1538 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Good',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability; no preheat required for typical sections. The slightly higher carbon than 1018 requires no special precautions for most applications.',
  },
  standards: {
    sae: ['1020'],
    uns: 'G10200',
  },
  corrosionResistance: 'Poor',
  relativeCost: 1,
  description:
    '1020 is a low-carbon steel with approximately 0.18-0.23% carbon, offering slightly higher carbon than 1018 while retaining excellent weldability and formability. It bridges 1018 and higher-carbon grades, providing adequate strength for general structural and low-stress machined parts. Available in hot-rolled and cold-drawn conditions, it is widely used in welded assemblies and general structural applications where A36 or 1018 could also be used.',
  keyCharacteristics: [
    'Slightly higher carbon than 1018 (~0.20% C) for marginally higher strength',
    'Excellent weldability without preheat for most section thicknesses',
    'Good formability, well-suited to bending and cold forming',
    'Can be case-hardened but not through-hardened',
    'Widely available in bar, plate, and structural forms',
    'No ASTM standard — specified by SAE/AISI composition',
  ],
  commonApplications: [
    'General structural components',
    'Low-stress machined parts',
    'Welded assemblies and frames',
    'Shafts and spindles',
    'Forgings and cold-headed parts',
    'Hot-rolled structural shapes',
  ],
  industries: ['Manufacturing', 'Construction', 'Automotive'],
  beginnerNote:
    "1020 sits right between 1018 and 1045 — it has a tiny bit more carbon than 1018, which gives it slightly more strength, but it's still easy to weld and form. Think of it as a flexible general-purpose mild steel. When you see it in catalogs without a clear reason to prefer it over 1018, the two are often interchangeable in practice.",
  expertNote:
    'UNS G10200 specifies 0.18-0.23% C and 0.30-0.60% Mn, which is a narrower manganese range than 1018 (0.60-0.90% Mn). This makes 1020 slightly less machinable in cold-drawn form. Cold-drawn 1020 yield typically reaches 350 MPa versus 370 MPa for 1020 CD due to the lower Mn content. For applications requiring normalized condition, 1020 normalized achieves ~380 MPa UTS with 35% elongation.',
  tempers: [
    {
      designation: 'Hot-Rolled (HR)',
      description:
        'As-rolled from the mill — scale on surface, wide dimensional tolerance',
      tensileStrength: { min: 380, max: 420, typical: 395 },
      yieldStrength: { min: 210, max: 280, typical: 260 },
      elongation: { min: 20, max: 25, typical: 23 },
      hardness: { brinell: 111 },
    },
    {
      designation: 'Cold-Drawn (CD)',
      description:
        'Cold-drawn from hot-rolled — improved surface finish, dimensional accuracy, and yield strength',
      tensileStrength: { min: 420, max: 470, typical: 448 },
      yieldStrength: { min: 310, max: 350, typical: 350 },
      elongation: { min: 15, max: 20, typical: 15 },
      hardness: { brinell: 131 },
    },
    {
      designation: 'Normalized (N)',
      description:
        'Air-cooled from ~915°C — stress relieved, uniform microstructure, consistent properties',
      tensileStrength: { min: 380, max: 420, typical: 400 },
      yieldStrength: { min: 210, max: 260, typical: 240 },
      elongation: { min: 24, max: 30, typical: 28 },
      hardness: { brinell: 121 },
    },
  ],
  relatedMaterials: ['steel-a36', 'steel-1018', 'steel-1045'],
};

export const steel1045: Material = {
  id: 'steel-1045',
  name: '1045 Medium Carbon Steel',
  family: 'steel',
  subFamily: 'Carbon Steel',
  mechanical: {
    density: 7.85,
    tensileStrength: { min: 570, max: 700, typical: 620 },
    yieldStrength: { min: 310, max: 530, typical: 530 },
    elongation: { min: 12, max: 16, typical: 16 },
    hardness: {
      brinell: { min: 163, max: 207, typical: 179 },
    },
    elasticModulus: 200,
    shearModulus: 80.0,
    poissonRatio: 0.29,
    fatigueStrength: { min: 255, max: 310, typical: 280 },
  },
  thermal: {
    conductivity: 49.8,
    thermalExpansion: 11.3,
    specificHeat: 486,
    meltingRange: { min: 1425, max: 1510 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Weldability is fair due to elevated carbon content (~0.45% C). Preheat to 150-260°C required for most sections. Post-weld stress relief recommended. Low-hydrogen electrodes (E7018) mandatory to prevent hydrogen-induced cracking.',
  },
  standards: {
    astm: ['A108'],
    sae: ['1045'],
    uns: 'G10450',
  },
  corrosionResistance: 'Poor',
  relativeCost: 1,
  description:
    '1045 is a medium-carbon steel with approximately 0.43-0.50% carbon, offering a significant step up in strength and hardness over mild steels like 1018 and A36. It is fully heat-treatable through quench and tempering, allowing a wide range of strength-toughness combinations. In the normalized or Q&T condition, it is widely used for machinery components requiring higher strength, wear resistance, and fatigue performance.',
  keyCharacteristics: [
    'Medium carbon content (~0.45% C) enables through-hardening',
    'Significantly higher strength than A36 or 1018 in Q&T condition',
    'Good response to induction hardening for surface hardening of shafts',
    'Reduced weldability compared to mild steels — preheat required',
    'Excellent fatigue resistance in heat-treated condition',
    'Flame and induction hardening capability for localized hardening',
  ],
  commonApplications: [
    'Gears and sprockets',
    'Shafts and axles',
    'Connecting rods',
    'Machinery components requiring higher strength',
    'Keys and keyways',
    'Tool holders and fixtures',
    'Studs and bolts requiring high strength',
  ],
  industries: ['Automotive', 'Heavy Machinery', 'Mining'],
  beginnerNote:
    '1045 is where steel starts to get serious. The extra carbon gives it much more strength than A36 or 1018, and it can be hardened with heat treatment for even more performance. The catch: it needs special care when welding (preheat is required), and it cracks more easily if you try to bend it cold. Use it when you need a strong, tough part that can be heat-treated.',
  expertNote:
    'Through-hardening via quench and temper (Q&T) at 840-870°C austenitize, water or oil quench, then temper at 205-650°C provides a wide property range: temper at 315°C yields ~900 MPa UTS / 750 MPa YS; temper at 540°C yields ~700 MPa UTS / 580 MPa YS. Induction hardening achieves surface hardness of 54-60 HRC with good core toughness. Carbon equivalent (CE) ~0.52 — preheat mandatory. For higher hardenability in larger cross-sections, consider 4140.',
  tempers: [
    {
      designation: 'Hot-Rolled / As-Rolled (AR)',
      description:
        'As-rolled from mill — meets minimum mechanical properties, scale on surface',
      tensileStrength: { min: 570, max: 630, typical: 600 },
      yieldStrength: { min: 310, max: 380, typical: 345 },
      elongation: { min: 14, max: 16, typical: 16 },
      hardness: { brinell: 179 },
    },
    {
      designation: 'Normalized (N)',
      description:
        'Air-cooled from ~870°C — uniform ferrite-pearlite microstructure, consistent properties',
      tensileStrength: { min: 590, max: 650, typical: 620 },
      yieldStrength: { min: 370, max: 430, typical: 400 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { brinell: 179 },
    },
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~845°C — maximum softness for machining prior to final heat treatment',
      tensileStrength: { min: 570, max: 610, typical: 585 },
      yieldStrength: { min: 310, max: 380, typical: 345 },
      elongation: { min: 15, max: 18, typical: 16 },
      hardness: { brinell: 163 },
    },
    {
      designation: 'Q&T 315°C',
      description:
        'Quenched from 840°C, tempered at 315°C — high strength, moderate toughness',
      tensileStrength: { min: 860, max: 950, typical: 896 },
      yieldStrength: { min: 720, max: 800, typical: 765 },
      elongation: { min: 11, max: 14, typical: 12 },
      hardness: { rockwellC: 43 },
    },
    {
      designation: 'Q&T 540°C',
      description:
        'Quenched from 840°C, tempered at 540°C — balanced strength and toughness for demanding applications',
      tensileStrength: { min: 680, max: 760, typical: 700 },
      yieldStrength: { min: 510, max: 580, typical: 530 },
      elongation: { min: 15, max: 20, typical: 17 },
      hardness: { brinell: 207 },
    },
  ],
  relatedMaterials: ['steel-1018', 'steel-4130', 'steel-4140'],
};

export const steel1060: Material = {
  id: 'steel-1060',
  name: '1060 High-Carbon Steel',
  family: 'steel',
  subFamily: 'Carbon Steel',
  mechanical: {
    density: 7.84,
    tensileStrength: { min: 620, max: 827, typical: 690 },
    yieldStrength: { min: 415, max: 621, typical: 485 },
    elongation: { min: 14, max: 18, typical: 17 },
    hardness: {
      brinell: { min: 179, max: 241, typical: 207 },
    },
    elasticModulus: 200,
    shearModulus: 80,
    poissonRatio: 0.29,
    fatigueStrength: { min: 310, max: 380, typical: 345 },
  },
  thermal: {
    conductivity: 46.6,
    thermalExpansion: 11.3,
    specificHeat: 486,
    meltingRange: { min: 1415, max: 1495 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Fair',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Poor weldability due to high carbon (~0.60% C, CE ~0.73). Preheat to 260-315°C mandatory. Post-weld stress relief at 540-600°C required. Low-hydrogen electrodes (E7018) essential. Welding should be avoided where possible — mechanical fastening preferred.',
  },
  standards: {
    astm: ['A29'],
    sae: ['1060'],
    uns: 'G10600',
  },
  corrosionResistance: 'Poor',
  relativeCost: 1,
  description:
    '1060 is a high-carbon plain steel with approximately 0.55-0.65% carbon, representing the transition from medium-carbon to high-carbon steels. It can be hardened to moderate surface hardness and exhibits good fatigue resistance. It is used for springs, rails, agricultural tools, and applications requiring higher hardness than 1045 but not the full hardness potential of 1080 or 1095. The normalized or cold-drawn condition provides good strength for general use; the Q&T condition provides high strength and fatigue life.',
  keyCharacteristics: [
    'Medium-high carbon (~0.60% C) enables significant through-hardening',
    'Higher hardenability than 1045 — achievable HRC up to ~62 when oil-quenched',
    'Good fatigue resistance in normalized and Q&T conditions',
    'Standard rail steel grade (AREMA Grade 900A)',
    'Higher carbon than 1045 = better hardness potential but reduced weldability and ductility',
    'Good response to induction surface hardening',
  ],
  commonApplications: [
    'Railroad rails and track',
    'Agricultural tillage tools and disc blades',
    'Springs (leaf and coil)',
    'Hammers and hand tools',
    'Saw blades and cutting tools',
    'Wear-resistant parts and liners',
  ],
  industries: ['Railroad', 'Agriculture', 'Manufacturing', 'Mining'],
  beginnerNote:
    "1060 is a high-carbon steel — when you say \"high-carbon,\" engineers typically mean above 0.5% carbon. That extra carbon lets it get very hard with heat treatment, which is why it's used for springs, rail tracks, and agricultural tools. The downside: it's harder to weld (preheat required), more brittle in the hardened state, and corrodes like any plain carbon steel.",
  expertNote:
    'Carbon content (0.55-0.65% C) places 1060 in the upper medium/lower high-carbon range with CE ≈ 0.73, making all welding operations require strict protocol. Hardening: austenitize 800-830°C, water or brine quench for maximum hardness (60-62 HRC as-quenched). For springs: oil quench from 830°C then temper at 370-425°C for 1450-1600 MPa UTS with 35-45 HRC. Rail applications: pearlitic microstructure in normalized condition provides optimal wear resistance and rail contact fatigue life. Head-hardened rails (accelerated cooling) achieve HBW 300-370 for improved wear life. For knife applications, 1060 provides good edge retention with moderate toughness; 1095 is preferred when maximum edge retention is critical.',
  tempers: [
    {
      designation: 'Hot-Rolled / As-Rolled (AR)',
      description: 'As-rolled from mill — decarburized surface, minimum properties',
      tensileStrength: { min: 620, max: 690, typical: 655 },
      yieldStrength: { min: 415, max: 480, typical: 450 },
      elongation: { min: 15, max: 18, typical: 17 },
      hardness: { brinell: 197 },
    },
    {
      designation: 'Normalized (N)',
      description: 'Air-cooled from ~870°C — uniform pearlitic microstructure',
      tensileStrength: { min: 670, max: 760, typical: 724 },
      yieldStrength: { min: 420, max: 490, typical: 455 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { brinell: 207 },
    },
    {
      designation: 'Q&T 315°C',
      description: 'Austenitized at 830°C, oil quenched, tempered at 315°C — high strength for springs',
      tensileStrength: { min: 1310, max: 1450, typical: 1380 },
      yieldStrength: { min: 1100, max: 1240, typical: 1170 },
      elongation: { min: 10, max: 14, typical: 12 },
      hardness: { rockwellC: 42 },
    },
    {
      designation: 'Q&T 540°C',
      description: 'Austenitized at 830°C, oil quenched, tempered at 540°C — balanced strength and toughness',
      tensileStrength: { min: 860, max: 960, typical: 900 },
      yieldStrength: { min: 690, max: 790, typical: 740 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { brinell: 255 },
    },
  ],
  relatedMaterials: ['steel-1045', 'steel-1080', 'steel-4130'],
};

export const steel1080: Material = {
  id: 'steel-1080',
  name: '1080 High-Carbon Steel',
  family: 'steel',
  subFamily: 'Carbon Steel',
  mechanical: {
    density: 7.83,
    tensileStrength: { min: 615, max: 965, typical: 770 },
    yieldStrength: { min: 375, max: 827, typical: 524 },
    elongation: { min: 10, max: 16, typical: 12 },
    hardness: {
      brinell: { min: 174, max: 293, typical: 229 },
    },
    elasticModulus: 200,
    shearModulus: 80,
    poissonRatio: 0.29,
    fatigueStrength: { min: 345, max: 430, typical: 380 },
  },
  thermal: {
    conductivity: 46.6,
    thermalExpansion: 11.2,
    specificHeat: 486,
    meltingRange: { min: 1410, max: 1490 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Fair',
    formability: 'Poor',
    heatTreatable: true,
    weldNotes:
      'Poor weldability — carbon content of ~0.80% C (CE ~0.93) makes weld cracking very likely without strict protocol. Preheat to 315-425°C. Post-weld anneal or full reharden required. Welding of this grade should be avoided in most applications.',
  },
  standards: {
    astm: ['A29'],
    sae: ['1080'],
    uns: 'G10800',
  },
  corrosionResistance: 'Poor',
  relativeCost: 1,
  description:
    '1080 is a high-carbon steel with approximately 0.75-0.88% carbon content. It can be hardened to approximately 65 HRC (water quenched) and offers excellent wear resistance and fatigue strength in heat-treated conditions. It is a classic spring steel and blade steel, used for heavy-duty coil and leaf springs, hand tool blanks, piano wire (music wire), and as a knife steel where moderate toughness combined with high hardness is required. The high carbon content allows a very fine pearlitic structure in the drawn condition (as used in music wire) for extreme tensile strength.',
  keyCharacteristics: [
    'High carbon (0.75-0.88% C) for significant hardening response',
    'Classic spring and blade steel grade',
    'Music wire applications in drawn (work-hardened) condition: UTS up to 2700 MPa',
    'Maximum as-quenched hardness ~65 HRC',
    'Good wear resistance in hardened condition',
    'Poor weldability — preheat and PWHT mandatory',
  ],
  commonApplications: [
    'Coil and leaf springs for heavy-duty applications',
    'Music wire (piano wire, instrument strings)',
    'Cutting tools and saw blades',
    'Hand tool blanks (files, chisels)',
    'Agricultural cutting edges',
    'Knife blades requiring high hardness',
  ],
  industries: ['Manufacturing', 'Agriculture', 'Musical Instruments', 'Consumer'],
  beginnerNote:
    "1080 is very high-carbon steel — at 0.80% C, it's getting into the territory where it can be hardened to very high levels. This makes it good for springs that need to store lots of energy, for cutting tools, and for piano wire (the thin wire used in piano strings, which needs extreme tensile strength). The trade-off is that it's brittle when hardened and very difficult to weld.",
  expertNote:
    'At 0.80% C, 1080 sits near the eutectoid composition (0.77% C), meaning it forms essentially 100% pearlite on slow cooling — fine pearlite with closely spaced cementite lamellae gives excellent wear resistance. Music wire (ASTM A228): patented (austempering through molten lead bath at 550°C) + cold drawn in multiple passes; ultimate tensile strength scales inversely with diameter, reaching 2750 MPa for 0.5 mm wire. Spring applications: 1080 achieves higher fatigue endurance vs 1060 when surface finish and decarburization are controlled. Heat treatment: austenitize at 790-820°C (lower than 1060 to avoid excess austenite grain growth), oil quench, temper at 350-500°C for typical spring applications (55-58 HRC after tempering at 350°C). Decarburization in the 790-870°C range is the primary fatigue failure initiator — use controlled atmosphere or protect with Chem-Ox treatment.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description: 'Furnace-cooled from ~800°C — maximum softness for machining prior to final hardening',
      tensileStrength: { min: 570, max: 655, typical: 615 },
      yieldStrength: { min: 345, max: 420, typical: 375 },
      elongation: { min: 12, max: 18, typical: 15 },
      hardness: { brinell: 174 },
    },
    {
      designation: 'Normalized (N)',
      description: 'Air-cooled from ~870°C — fine pearlitic structure, good strength-toughness balance',
      tensileStrength: { min: 724, max: 800, typical: 770 },
      yieldStrength: { min: 476, max: 565, typical: 524 },
      elongation: { min: 10, max: 14, typical: 11 },
      hardness: { brinell: 229 },
    },
    {
      designation: 'Q&T 315°C',
      description: 'Austenitized at 800°C, oil quenched, tempered at 315°C — high hardness for cutting tools and knives',
      tensileStrength: { min: 1520, max: 1620, typical: 1570 },
      yieldStrength: { min: 1310, max: 1450, typical: 1380 },
      elongation: { min: 8, max: 12, typical: 10 },
      hardness: { rockwellC: 47 },
    },
    {
      designation: 'Q&T 480°C',
      description: 'Austenitized at 800°C, oil quenched, tempered at 480°C — spring temper condition',
      tensileStrength: { min: 1030, max: 1130, typical: 1070 },
      yieldStrength: { min: 860, max: 960, typical: 930 },
      elongation: { min: 12, max: 16, typical: 13 },
      hardness: { rockwellC: 37 },
    },
  ],
  relatedMaterials: ['steel-1060', 'steel-1095', 'steel-4130'],
};

export const steel1095: Material = {
  id: 'steel-1095',
  name: '1095 High-Carbon Steel',
  family: 'steel',
  subFamily: 'Carbon Steel',
  mechanical: {
    density: 7.83,
    tensileStrength: { min: 655, max: 1000, typical: 827 },
    yieldStrength: { min: 380, max: 855, typical: 570 },
    elongation: { min: 8, max: 13, typical: 10 },
    hardness: {
      brinell: { min: 192, max: 302, typical: 248 },
    },
    elasticModulus: 200,
    shearModulus: 80,
    poissonRatio: 0.29,
    fatigueStrength: { min: 365, max: 450, typical: 400 },
  },
  thermal: {
    conductivity: 46.6,
    thermalExpansion: 11.1,
    specificHeat: 486,
    meltingRange: { min: 1405, max: 1485 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Fair',
    formability: 'Poor',
    heatTreatable: true,
    weldNotes:
      'Poor weldability — 0.95% C content makes fusion welding extremely prone to cracking even with extensive preheating (425°C+). Welding is essentially never performed on hardened 1095. For repairs, braze with silver braze or use mechanical attachment.',
  },
  standards: {
    astm: ['A29'],
    sae: ['1095'],
    uns: 'G10950',
  },
  corrosionResistance: 'Poor',
  relativeCost: 1,
  description:
    "1095 is the highest-carbon plain steel in the standard SAE 10xx series, with 0.90-1.03% carbon. It represents the maximum practical carbon content for plain carbon steel before carbide segregation and embrittlement become limiting factors. In the hardened and low-temper condition, 1095 achieves the highest hardness of any 10xx steel (~68 HRC as-quenched), making it the standard for high-edge-retention blades, springs, and cutting tools. It is a classic knife-maker's steel, offering excellent edge retention when properly hardened and tempered.",
  keyCharacteristics: [
    'Highest carbon of standard 10xx series (0.90-1.03% C)',
    'Maximum hardness ~68 HRC as-quenched — highest in plain carbon steels',
    'Classic blade and cutlery steel for edge retention applications',
    'Hypereutectoid composition — carbide network can form if slowly cooled',
    'Good spring properties when tempered to HRC 44-52',
    'Relatively simple alloy — responds to basic heat treatment well',
  ],
  commonApplications: [
    'High-quality knife blades and edged tools',
    'Surgical scalpels (historical)',
    'Saw blades and bandsaw blades',
    'Heavy-duty coil and leaf springs',
    'Cutting edges for agricultural and industrial use',
    'Custom knife blanks for blade smithing',
  ],
  industries: ['Consumer', 'Agriculture', 'Manufacturing', 'Medical'],
  beginnerNote:
    "1095 is the premium plain carbon steel for knives and blades. The very high carbon content (nearly 1%) lets it get extremely hard after heat treatment, which means it can hold a very sharp edge for a long time. It's the steel of choice for quality hunting knives, kitchen knives, and hand tools that need to stay sharp. The trade-offs: it rusts if not maintained, can be brittle if not properly tempered, and cannot be welded.",
  expertNote:
    'At 0.90-1.03% C (hypereutectoid), 1095 forms proeutectoid cementite (Fe3C) at grain boundaries on slow cooling — this network must be broken up by normalizing or spheroidize annealing before hardening. Spheroidize anneal at 750°C → slow cool or cycle through Ac1 → produces spheroidal carbides for maximum machinability and toughness before hardening. Hardening protocol: normalize 870-900°C, austenitize 790-815°C (critical: above ~830°C causes excessive grain growth), oil quench, immediately temper at 175-260°C for blade applications (58-65 HRC), or 315-400°C for springs (50-55 HRC). Water quench achieves maximum hardness (~68 HRC) but greatly increases cracking risk — oil quench is standard. For knife applications, the choice between 1095 and alloy steels (D2, O1, CPM grades) comes down to: 1095 offers simpler heat treatment, better toughness than D2, but inferior corrosion resistance and carbide volume vs tool steels.',
  tempers: [
    {
      designation: 'Annealed / Spheroidized',
      description: 'Furnace-cooled or cycled through Ac1 from ~800°C — spheroidal carbides for maximum machinability',
      tensileStrength: { min: 655, max: 720, typical: 690 },
      yieldStrength: { min: 380, max: 455, typical: 415 },
      elongation: { min: 10, max: 14, typical: 13 },
      hardness: { brinell: 192 },
    },
    {
      designation: 'Normalized (N)',
      description: 'Air-cooled from ~900°C — fine pearlite, good baseline condition',
      tensileStrength: { min: 827, max: 930, typical: 827 },
      yieldStrength: { min: 490, max: 585, typical: 570 },
      elongation: { min: 8, max: 13, typical: 10 },
      hardness: { brinell: 248 },
    },
    {
      designation: 'Q&T 175°C (Knife)',
      description: 'Austenitized at 800°C, oil quenched, tempered at 175°C — high-edge-retention blade temper',
      tensileStrength: { min: 1720, max: 1860, typical: 1790 },
      yieldStrength: { min: 1450, max: 1590, typical: 1520 },
      elongation: { min: 5, max: 9, typical: 7 },
      hardness: { rockwellC: 60 },
    },
    {
      designation: 'Q&T 400°C (Spring)',
      description: 'Austenitized at 800°C, oil quenched, tempered at 400°C — spring and hand tool temper',
      tensileStrength: { min: 1170, max: 1310, typical: 1240 },
      yieldStrength: { min: 965, max: 1100, typical: 1030 },
      elongation: { min: 10, max: 14, typical: 12 },
      hardness: { rockwellC: 48 },
    },
  ],
  relatedMaterials: ['steel-1080', 'steel-1060', 'steel-4140'],
};

export const carbonSteels: Material[] = [steelA36, steel1018, steel1020, steel1045, steel1060, steel1080, steel1095];
