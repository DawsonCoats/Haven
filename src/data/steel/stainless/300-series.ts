import { Material } from '../../types';

export const steel303ss: Material = {
  id: 'steel-303ss',
  name: '303 Stainless Steel',
  family: 'steel',
  subFamily: '300-Series Stainless',
  mechanical: {
    density: 7.93,
    tensileStrength: { min: 515, max: 620, typical: 620 },
    yieldStrength: { min: 200, max: 310, typical: 310 },
    elongation: { min: 40, max: 50, typical: 40 },
    hardness: {
      brinell: { min: 160, max: 190, typical: 170 },
    },
    elasticModulus: 193,
    shearModulus: 77.0,
    poissonRatio: 0.29,
    fatigueStrength: { min: 240, max: 290, typical: 260 },
  },
  thermal: {
    conductivity: 16.2,
    thermalExpansion: 17.2,
    specificHeat: 500,
    meltingRange: { min: 1399, max: 1421 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Excellent',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Weldability is poor due to sulfur addition for machinability. Sulfur promotes hot cracking in the weld zone. When welding is required, use 304L or 316L filler and expect reduced corrosion resistance at welds. For welded assemblies, use 304 or 316 instead.',
  },
  standards: {
    astm: ['A582'],
    uns: 'S30300',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    '303 stainless steel is a free-machining austenitic stainless steel produced by adding sulfur (and sometimes selenium) to the 18-8 (18% Cr, 8% Ni) base composition. The sulfur inclusions act as internal chip breakers, dramatically improving machinability — the best of any standard stainless steel — at the cost of reduced corrosion resistance and weldability. 303 is the standard choice for high-volume, screw-machine parts where machining cost must be minimized and welding is not required.',
  keyCharacteristics: [
    'Highest machinability of any standard stainless steel grade',
    'Sulfur addition (~0.15% min) creates internal chip breakers',
    'Austenitic — non-magnetic in annealed condition, non-heat-treatable for strength',
    'Good corrosion resistance in mild environments but inferior to 304',
    'Poor weldability — not suitable for welded assemblies',
    'Available primarily in bar and rod for screw machine production',
  ],
  commonApplications: [
    'Screw machine parts (nuts, bolts, screws)',
    'Shafts and fittings requiring intensive machining',
    'Instrumentation components',
    'Valve bodies and pump shafts',
    'Precision machined medical components (non-implant)',
    'Aerospace hardware not requiring high corrosion resistance',
  ],
  industries: ['Medical', 'Food Processing', 'Automotive', 'Aerospace'],
  beginnerNote:
    "303 is stainless steel made for the machine shop. Standard stainless (304) is notoriously difficult to machine — it work-hardens and gums up cutting tools. 303 fixes this by adding sulfur, which makes the chips break cleanly. The trade-off: you can't weld it without problems, and its corrosion resistance is slightly lower than 304. If you're making a lot of turned parts and welding isn't needed, 303 will save you significant machining time and cost.",
  expertNote:
    'The sulfur content (0.15% min per ASTM A582) creates MnS inclusions that act as stress risers in the microstructure, improving chip formation but reducing fatigue strength (~15-20% lower than 304), corrosion resistance (particularly in chloride environments), and weldability due to hot cracking sensitivity. Machinability rating approximately 78% of B1112 versus 45% for 304. For applications requiring better corrosion resistance than 303 but better machinability than 304, consider 303Se (selenium-bearing) which offers marginally better corrosion resistance.',
  tempers: [
    {
      designation: 'Annealed (2B)',
      description:
        'Solution annealed at 1010-1120°C — standard delivery condition for bar stock, fully austenitic and soft',
      tensileStrength: { min: 515, max: 620, typical: 620 },
      yieldStrength: { min: 200, max: 310, typical: 310 },
      elongation: { min: 40, max: 50, typical: 40 },
      hardness: { brinell: 170 },
    },
    {
      designation: 'Cold Drawn (1/4 Hard)',
      description:
        'Light cold drawing — small increase in strength, still good machinability; standard for bar stock',
      tensileStrength: { min: 620, max: 724, typical: 655 },
      yieldStrength: { min: 480, max: 586, typical: 517 },
      elongation: { min: 28, max: 38, typical: 32 },
      hardness: { brinell: 190 },
    },
  ],
  relatedMaterials: ['steel-304ss', 'steel-316ss', 'steel-416ss'],
};

export const steel304ss: Material = {
  id: 'steel-304ss',
  name: '304 Stainless Steel',
  family: 'steel',
  subFamily: '300-Series Stainless',
  mechanical: {
    density: 7.93,
    tensileStrength: { min: 515, max: 620, typical: 580 },
    yieldStrength: { min: 205, max: 310, typical: 260 },
    elongation: { min: 40, max: 45, typical: 40 },
    hardness: {
      brinell: { min: 150, max: 201, typical: 150 },
    },
    elasticModulus: 193,
    shearModulus: 77.0,
    poissonRatio: 0.29,
    fatigueStrength: { min: 260, max: 310, typical: 290 },
  },
  thermal: {
    conductivity: 16.2,
    thermalExpansion: 17.2,
    specificHeat: 500,
    meltingRange: { min: 1399, max: 1454 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability with all standard processes. For sections under 3 mm, no filler required for autogenous welds. Use 308L filler for like-to-like welding. Post-weld sensitization risk in thick sections — consider 304L for heavy-gauge weldments. No post-weld heat treatment typically required.',
  },
  standards: {
    astm: ['A240', 'A276', 'A312'],
    uns: 'S30400',
    iso: ['4301'],
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    '304 stainless steel is the most widely used austenitic stainless steel and the most common stainless steel globally. With 18% chromium and 8% nickel (the classic "18-8" composition), it offers an excellent balance of corrosion resistance, formability, weldability, and cost. It is the standard material for food-contact surfaces, kitchen equipment, chemical containers, and architectural applications. The 304 designation is defined by ASTM/SAE as UNS S30400, equivalent to EN 1.4301.',
  keyCharacteristics: [
    'Classic "18-8" austenitic stainless — 18% Cr, 8% Ni',
    'Most widely produced and available stainless steel grade worldwide',
    'Non-magnetic in annealed condition; may become slightly magnetic after cold working',
    'Excellent corrosion resistance in atmospheric, food-contact, and mild chemical environments',
    'Work hardens significantly during forming — important for deep drawing operations',
    'Cannot be hardened by heat treatment; strengthened only by cold work',
  ],
  commonApplications: [
    'Kitchen equipment and food processing surfaces',
    'Food and beverage storage tanks',
    'Chemical containers and piping',
    'Architectural panels and trim',
    'Pharmaceutical equipment',
    'Automotive trim and exhaust components',
    'Sinks, countertops, and appliances',
  ],
  industries: ['Food & Beverage', 'Medical', 'Construction', 'Chemical'],
  beginnerNote:
    "304 is the \"standard\" stainless steel — if someone just says \"stainless steel\" without specifying a grade, they almost certainly mean 304 (or something very close to it). It doesn't rust in normal environments, it's easy to weld and form, and it's available everywhere at a reasonable price. Use it for anything that needs to look clean, resist light corrosion, and be sanitary. The main limitation: it can still corrode in salt water or harsh chemicals — that's where 316 takes over.",
  expertNote:
    'The carbon ceiling of 0.08% max in 304 (vs 0.03% in 304L) creates sensitization risk in heat-affected zones of welds performed on material 6 mm and over. Sensitization occurs when Cr23C6 precipitates at grain boundaries between 425-870°C, depleting chromium and creating susceptibility to intergranular corrosion. For welded assemblies in corrosive service, use 304L (0.03% max C) or solution anneal the weldment. Work hardening rate is high — forming limit diagram analysis recommended for complex deep-draw operations.',
  tempers: [
    {
      designation: 'Annealed (2B / No. 1)',
      description:
        'Solution annealed at 1010-1120°C, water quenched — standard delivery condition for sheet and plate',
      tensileStrength: { min: 515, max: 580, typical: 545 },
      yieldStrength: { min: 205, max: 260, typical: 215 },
      elongation: { min: 40, max: 50, typical: 45 },
      hardness: { brinell: 150 },
    },
    {
      designation: '1/4 Hard',
      description:
        'Light cold rolling — moderate strength increase with good remaining ductility',
      tensileStrength: { min: 655, max: 760, typical: 690 },
      yieldStrength: { min: 515, max: 620, typical: 550 },
      elongation: { min: 25, max: 35, typical: 30 },
      hardness: { brinell: 183 },
    },
    {
      designation: '1/2 Hard',
      description:
        'Moderate cold rolling — significant strength increase for spring-temper applications',
      tensileStrength: { min: 860, max: 965, typical: 895 },
      yieldStrength: { min: 760, max: 860, typical: 795 },
      elongation: { min: 12, max: 18, typical: 14 },
      hardness: { brinell: 240 },
    },
    {
      designation: 'Full Hard',
      description:
        'Heavy cold rolling — maximum achievable strength for non-heat-treatable austenitic stainless',
      tensileStrength: { min: 1275, max: 1380, typical: 1310 },
      yieldStrength: { min: 965, max: 1070, typical: 1000 },
      elongation: { min: 6, max: 10, typical: 8 },
      hardness: { brinell: 380 },
    },
  ],
  relatedMaterials: ['steel-304Lss', 'steel-316ss', 'steel-303ss'],
};

export const steel304Lss: Material = {
  id: 'steel-304Lss',
  name: '304L Stainless Steel',
  family: 'steel',
  subFamily: '300-Series Stainless',
  mechanical: {
    density: 7.93,
    tensileStrength: { min: 485, max: 585, typical: 535 },
    yieldStrength: { min: 170, max: 275, typical: 240 },
    elongation: { min: 40, max: 45, typical: 40 },
    hardness: {
      brinell: { min: 140, max: 190, typical: 150 },
    },
    elasticModulus: 193,
    shearModulus: 77.0,
    poissonRatio: 0.29,
    fatigueStrength: { min: 240, max: 290, typical: 260 },
  },
  thermal: {
    conductivity: 16.2,
    thermalExpansion: 17.2,
    specificHeat: 500,
    meltingRange: { min: 1399, max: 1454 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability — the low carbon content (0.03% max) eliminates sensitization risk, making 304L the preferred grade for heavy-gauge welded assemblies. No post-weld annealing required for corrosion resistance. Use 308L filler rod for like-to-like welding.',
  },
  standards: {
    astm: ['A240', 'A276', 'A312'],
    uns: 'S30403',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    '304L is the low-carbon variant of 304 stainless steel, with carbon limited to 0.03% maximum (versus 0.08% for 304). This ultra-low carbon content prevents sensitization — the precipitation of chromium carbides at grain boundaries during welding — and eliminates the need for post-weld annealing in most service environments. 304L is preferred for heavy-gauge welded pressure vessels, cryogenic equipment, and any application where weld corrosion resistance is critical. The trade-off is slightly lower room-temperature yield strength, though ASME code allows the same design stress as 304 at temperatures above 538°C.',
  keyCharacteristics: [
    'Ultra-low carbon (0.03% max) prevents weld sensitization',
    'No post-weld heat treatment required for corrosion resistance',
    'Identical corrosion resistance to 304 in the annealed condition',
    'Slightly lower yield strength than 304 — use 316L or nitrogen-strengthened grades if strength is critical',
    'Preferred for heavy-gauge fabrications, pressure vessels, and cryogenic service',
    'Interchangeable with 304 in most applications per dual certification',
  ],
  commonApplications: [
    'Heavy-gauge welded pressure vessels',
    'Cryogenic storage and transport equipment',
    'Chemical process piping and vessels',
    'Nuclear containment structures',
    'Pharmaceutical and sanitary piping systems',
    'Storage tanks for aggressive chemicals',
  ],
  industries: ['Chemical', 'Oil & Gas', 'Cryogenic', 'Nuclear'],
  beginnerNote:
    "304L is 304 with less carbon. That sounds like a small difference, but it matters a lot when welding: standard 304 can become vulnerable to corrosion right at the weld zone due to a process called sensitization. The lower carbon in 304L prevents this. If you're welding thick stainless sections and need the welds to resist corrosion just as well as the base metal, use 304L instead of 304.",
  expertNote:
    'Dual-certified 304/304L (meeting both 0.08% C max for 304 and 0.03% C max for 304L) is common in mill production and accepted by most codes including ASME VIII. Sensitization occurs when carbon content exceeds 0.03% after thermal cycling between 425-870°C — Cr23C6 precipitates deplete the chromium-depleted zone to <12% Cr, enabling intergranular attack. For cryogenic service (-196°C), 304L maintains adequate toughness; austenitic stainless steels do not undergo ductile-to-brittle transition. Nitrogen additions (0.1-0.16%) in 304LN provide strength equivalent to 304 while maintaining sensitization resistance.',
  tempers: [
    {
      designation: 'Annealed (2B / No. 1)',
      description:
        'Solution annealed at 1010-1120°C — standard delivery, low carbon prevents sensitization in this condition',
      tensileStrength: { min: 485, max: 555, typical: 520 },
      yieldStrength: { min: 170, max: 240, typical: 205 },
      elongation: { min: 40, max: 50, typical: 45 },
      hardness: { brinell: 145 },
    },
    {
      designation: '1/4 Hard',
      description:
        'Light cold rolling — moderate strength increase; slightly lower than equivalent 304 due to lower base carbon',
      tensileStrength: { min: 620, max: 724, typical: 655 },
      yieldStrength: { min: 483, max: 586, typical: 517 },
      elongation: { min: 26, max: 35, typical: 30 },
      hardness: { brinell: 175 },
    },
    {
      designation: '1/2 Hard',
      description:
        'Moderate cold rolling — significant strength for spring temper sheet and strip applications',
      tensileStrength: { min: 827, max: 930, typical: 862 },
      yieldStrength: { min: 724, max: 827, typical: 758 },
      elongation: { min: 12, max: 18, typical: 15 },
      hardness: { brinell: 235 },
    },
    {
      designation: 'Full Hard',
      description:
        'Heavy cold rolling — maximum achievable strength for non-heat-treatable austenitic grade',
      tensileStrength: { min: 1170, max: 1310, typical: 1240 },
      yieldStrength: { min: 930, max: 1030, typical: 965 },
      elongation: { min: 6, max: 10, typical: 8 },
      hardness: { brinell: 360 },
    },
  ],
  relatedMaterials: ['steel-304ss', 'steel-316Lss', 'steel-321ss'],
};

export const steel316ss: Material = {
  id: 'steel-316ss',
  name: '316 Stainless Steel',
  family: 'steel',
  subFamily: '300-Series Stainless',
  mechanical: {
    density: 7.99,
    tensileStrength: { min: 515, max: 620, typical: 580 },
    yieldStrength: { min: 205, max: 310, typical: 290 },
    elongation: { min: 40, max: 45, typical: 40 },
    hardness: {
      brinell: { min: 150, max: 217, typical: 170 },
    },
    elasticModulus: 193,
    shearModulus: 74.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 260, max: 310, typical: 290 },
  },
  thermal: {
    conductivity: 16.3,
    thermalExpansion: 15.9,
    specificHeat: 502,
    meltingRange: { min: 1371, max: 1399 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability. For heavy sections, use 316L filler to prevent sensitization at the weld. Post-weld annealing restores full corrosion resistance but is not always required. Use 316L filler (not 316) for most welding to ensure weld metal has low-carbon composition.',
  },
  standards: {
    astm: ['A240', 'A276', 'A312'],
    uns: 'S31600',
    iso: ['4401'],
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    '316 stainless steel is the second most widely used austenitic stainless steel, distinguished from 304 by the addition of 2-3% molybdenum. The molybdenum dramatically improves resistance to chloride pitting and crevice corrosion, making 316 the standard grade for marine environments, chemical processing with halide-containing media, and medical/pharmaceutical applications. It is also known as "marine grade" or "surgical steel" in non-technical contexts.',
  keyCharacteristics: [
    '2-3% molybdenum addition provides superior chloride corrosion resistance vs 304',
    'Resists pitting in chloride environments where 304 would fail',
    'Standard grade for marine hardware, surgical instruments, and pharmaceutical equipment',
    'Slightly lower thermal expansion than 304 (15.9 vs 17.2 µm/m·°C)',
    'Higher density than 304 (7.99 vs 7.93 g/cm³) due to Mo content',
    'Non-magnetic in annealed condition; can become slightly magnetic after cold work',
  ],
  commonApplications: [
    'Marine hardware and boat fittings',
    'Chemical processing equipment handling chlorides',
    'Surgical instruments and medical devices',
    'Pharmaceutical processing equipment',
    'Food processing equipment in high-salinity environments',
    'Coastal architectural elements',
    'Laboratory equipment',
  ],
  industries: ['Marine', 'Medical', 'Chemical', 'Pharmaceutical', 'Food & Beverage'],
  beginnerNote:
    "316 is 304 with molybdenum added, and that makes a big difference near salt water or harsh chemicals. If your part will be on a boat, near the ocean, or handling chloride-containing chemicals (like acids or bleach), 304 may corrode while 316 survives. It costs more than 304, so don't over-specify it for indoor or dry applications where 304 is perfectly adequate.",
  expertNote:
    'Molybdenum (2-3%) raises the critical pitting potential in chloride solutions by approximately 300 mV versus 304, quantifiable by the PREN (Pitting Resistance Equivalent Number): PREN = %Cr + 3.3×%Mo + 16×%N. 316 PREN ≈ 25 vs 304 PREN ≈ 19. Critical chloride threshold for 316 in neutral aerated solutions is ~200 ppm Cl⁻ at room temperature (304: ~50 ppm). For more aggressive chloride environments, consider 2205 duplex (PREN ≈ 34) or super-austenitic 904L (PREN ≈ 35). Heavy weldments should use 316L filler to prevent sensitization.',
  tempers: [
    {
      designation: 'Annealed (2B / No. 1)',
      description:
        'Solution annealed at 1010-1120°C — standard delivery condition, fully softened',
      tensileStrength: { min: 515, max: 580, typical: 550 },
      yieldStrength: { min: 205, max: 260, typical: 220 },
      elongation: { min: 40, max: 50, typical: 45 },
      hardness: { brinell: 150 },
    },
    {
      designation: '1/4 Hard',
      description:
        'Light cold rolling for moderate strength increase in sheet applications',
      tensileStrength: { min: 620, max: 760, typical: 690 },
      yieldStrength: { min: 515, max: 620, typical: 550 },
      elongation: { min: 25, max: 35, typical: 30 },
      hardness: { brinell: 190 },
    },
    {
      designation: '1/2 Hard',
      description:
        'Moderate cold rolling — significantly increased strength for spring and structural applications',
      tensileStrength: { min: 860, max: 965, typical: 900 },
      yieldStrength: { min: 760, max: 860, typical: 800 },
      elongation: { min: 12, max: 18, typical: 14 },
      hardness: { brinell: 255 },
    },
  ],
  relatedMaterials: ['steel-316Lss', 'steel-304ss', 'steel-317ss'],
};

export const steel316Lss: Material = {
  id: 'steel-316Lss',
  name: '316L Stainless Steel',
  family: 'steel',
  subFamily: '300-Series Stainless',
  mechanical: {
    density: 7.99,
    tensileStrength: { min: 485, max: 585, typical: 540 },
    yieldStrength: { min: 170, max: 290, typical: 240 },
    elongation: { min: 40, max: 45, typical: 40 },
    hardness: {
      brinell: { min: 140, max: 190, typical: 155 },
    },
    elasticModulus: 193,
    shearModulus: 74.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 240, max: 290, typical: 265 },
  },
  thermal: {
    conductivity: 16.3,
    thermalExpansion: 15.9,
    specificHeat: 502,
    meltingRange: { min: 1371, max: 1399 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability — the premier choice for welded assemblies in corrosive service. Low carbon (0.03% max) eliminates sensitization risk. No post-weld annealing required. Use 316L filler exclusively when welding 316L base metal. This is the standard filler metal for all 316-type weldments.',
  },
  standards: {
    astm: ['A240', 'A276', 'A312'],
    uns: 'S31603',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    '316L is the low-carbon variant of 316 stainless steel, with carbon limited to 0.03% maximum. It combines the superior chloride resistance of 316 (from the 2-3% molybdenum addition) with the weld sensitization resistance of the low-carbon composition. 316L is the standard grade for marine welded assemblies, chemical plant piping, and medical implants. It is widely used in the pharmaceutical industry (316L is required for pharmaceutical-grade piping under FDA/cGMP guidelines) and in implantable medical devices (ASTM F138).',
  keyCharacteristics: [
    'Combines Mo corrosion resistance of 316 with sensitization-free welding of low-carbon grade',
    'ASTM F138 grade used for implantable medical devices',
    'Required grade for pharmaceutical-grade (BPE) piping systems',
    'Excellent resistance to pitting and crevice corrosion in chloride environments',
    'No post-weld annealing required for corrosion resistance in service',
    'Dual-certified 316/316L material is commonly available',
  ],
  commonApplications: [
    'Marine welded assemblies and offshore structures',
    'Chemical plant piping handling chloride media',
    'Pharmaceutical and bioprocessing equipment',
    'Implantable medical devices (per ASTM F138)',
    'Nuclear waste storage containers',
    'Desalination equipment',
    'Coastal and tidal zone structures',
  ],
  industries: ['Marine', 'Medical', 'Chemical', 'Nuclear'],
  beginnerNote:
    "316L is the \"marine-grade\" stainless you weld. Whenever you're building something that needs to be welded and will live near salt water, chemicals, or inside a body (implants), 316L is the right choice. The \"L\" means low carbon, which prevents a specific type of corrosion that can form at weld joints. Most marine fabrication shops stock 316L as their standard stainless steel.",
  expertNote:
    'ASTM F138 (316L for surgical implants) adds additional restrictions: 0.10% max Si, 2.25-3.00% Mo, and nonmetallic inclusion requirements. For aggressive offshore service (seawater with high chloride at elevated temperatures), 316L PREN ≈ 25 may be insufficient — specify duplex 2205 (PREN ≈ 34) or super-duplex 2507 (PREN ≈ 43). Nitrogen-strengthened 316LN provides higher yield strength (min 170 MPa → 310 MPa) while maintaining low carbon. In cryogenic service to -196°C, 316L maintains excellent toughness.',
  tempers: [
    {
      designation: 'Annealed (2B / No. 1)',
      description:
        'Solution annealed at 1010-1120°C — standard delivery condition; low carbon eliminates sensitization risk entirely',
      tensileStrength: { min: 485, max: 555, typical: 515 },
      yieldStrength: { min: 170, max: 250, typical: 205 },
      elongation: { min: 40, max: 50, typical: 45 },
      hardness: { brinell: 145 },
    },
    {
      designation: '1/4 Hard',
      description:
        'Light cold rolling — moderate strength; preferred for welded assemblies requiring corrosion resistance',
      tensileStrength: { min: 620, max: 724, typical: 655 },
      yieldStrength: { min: 483, max: 586, typical: 517 },
      elongation: { min: 25, max: 34, typical: 29 },
      hardness: { brinell: 180 },
    },
    {
      designation: '1/2 Hard',
      description:
        'Moderate cold rolling — increased strength while maintaining the chloride corrosion advantage of 316',
      tensileStrength: { min: 827, max: 930, typical: 862 },
      yieldStrength: { min: 724, max: 827, typical: 758 },
      elongation: { min: 12, max: 18, typical: 14 },
      hardness: { brinell: 245 },
    },
    {
      designation: 'Full Hard',
      description:
        'Heavy cold rolling — maximum cold-worked strength, retains Mo corrosion advantage of 316 base',
      tensileStrength: { min: 1170, max: 1310, typical: 1240 },
      yieldStrength: { min: 930, max: 1030, typical: 965 },
      elongation: { min: 6, max: 10, typical: 8 },
      hardness: { brinell: 365 },
    },
  ],
  relatedMaterials: ['steel-316ss', 'steel-304Lss', 'steel-321ss'],
};

export const steel321ss: Material = {
  id: 'steel-321ss',
  name: '321 Stainless Steel',
  family: 'steel',
  subFamily: '300-Series Stainless',
  mechanical: {
    density: 7.90,
    tensileStrength: { min: 515, max: 690, typical: 620 },
    yieldStrength: { min: 205, max: 310, typical: 275 },
    elongation: { min: 40, max: 50, typical: 40 },
    hardness: {
      brinell: { min: 150, max: 200, typical: 160 },
    },
    elasticModulus: 193,
    shearModulus: 77.0,
    poissonRatio: 0.29,
    fatigueStrength: { min: 260, max: 310, typical: 285 },
  },
  thermal: {
    conductivity: 16.1,
    thermalExpansion: 16.6,
    specificHeat: 502,
    meltingRange: { min: 1399, max: 1454 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability. Titanium stabilization prevents sensitization of the base metal during welding. However, the weld metal itself is not stabilized — use 347 filler rod for welds that will see elevated temperature service, as Ti vaporizes during welding. Alternatively, use 321 filler only for applications below the sensitization range.',
  },
  standards: {
    astm: ['A240', 'A276', 'A312'],
    uns: 'S32100',
  },
  corrosionResistance: 'Good',
  relativeCost: 4,
  description:
    '321 stainless steel is a titanium-stabilized austenitic stainless steel. Titanium (minimum 5×carbon content) is added to preferentially combine with carbon, forming TiC instead of Cr23C6. This prevents the chromium depletion (sensitization) that occurs in standard 304 at elevated temperatures, making 321 the preferred grade for continuous service in the sensitization temperature range of 425-870°C. It is widely used in aerospace exhaust systems and jet engine components where 304L\'s lower temperature strength would be insufficient.',
  keyCharacteristics: [
    'Titanium stabilization (min 5×C) prevents sensitization in 425-870°C service range',
    'Better elevated-temperature strength than 304L',
    'Preferred for cyclic temperature service in the sensitization range',
    'Ti vaporizes during welding — use 347 filler for welded joints in high-temperature service',
    'Good oxidation resistance to ~870°C',
    'Slightly lower density than 304/316 due to Ti addition replacing some Fe',
  ],
  commonApplications: [
    'Aircraft exhaust manifolds and collectors',
    'Jet engine hot section components',
    'Expansion joints in heat exchanger systems',
    'Furnace components and heat shields',
    'High-temperature chemical process vessels',
    'Refinery piping operating in sensitization temperature range',
  ],
  industries: ['Aerospace', 'Petrochemical', 'Power Generation'],
  beginnerNote:
    "321 is a specialized stainless steel designed for hot applications. Standard 304 stainless becomes vulnerable to a type of corrosion at the temperatures found in aircraft exhausts and jet engines. 321 solves this by adding titanium, which ties up the carbon before it can cause problems. If your application involves stainless at temperatures between 400-870°C, 321 is often the right choice over standard 304.",
  expertNote:
    'Titanium content must be ≥5×C (typically 0.40-0.70% Ti). Ti combines preferentially with carbon to form TiC, leaving chromium available to maintain the passive layer. Unlike low-carbon grades (304L), 321 maintains this protection at continuous elevated temperatures where carbon mobility is high. However, welding vaporizes Ti from the weld puddle, leaving weld metal unsensitized — use 347 (Nb-stabilized) filler for high-temperature welded joints as Nb is not lost during welding. For heavy-section welded applications in high-temperature service, 347 base metal with 347 filler is the more reliable choice.',
  tempers: [
    {
      designation: 'Annealed (2B / No. 1)',
      description:
        'Solution annealed at 1010-1120°C — titanium stabilization prevents sensitization; standard delivery for sheet and plate',
      tensileStrength: { min: 515, max: 620, typical: 620 },
      yieldStrength: { min: 205, max: 310, typical: 275 },
      elongation: { min: 40, max: 50, typical: 45 },
      hardness: { brinell: 160 },
    },
    {
      designation: 'Stabilize Annealed (SA)',
      description:
        'Post-fabrication stabilization anneal at 870-900°C — used after cold forming or welding to ensure all TiC precipitation is complete and no free carbon remains',
      tensileStrength: { min: 550, max: 660, typical: 620 },
      yieldStrength: { min: 220, max: 310, typical: 275 },
      elongation: { min: 38, max: 48, typical: 42 },
      hardness: { brinell: 165 },
    },
  ],
  relatedMaterials: ['steel-347ss', 'steel-304Lss', 'steel-316Lss'],
};

export const steel347ss: Material = {
  id: 'steel-347ss',
  name: '347 Stainless Steel',
  family: 'steel',
  subFamily: '300-Series Stainless',
  mechanical: {
    density: 7.98,
    tensileStrength: { min: 515, max: 690, typical: 655 },
    yieldStrength: { min: 205, max: 310, typical: 275 },
    elongation: { min: 40, max: 50, typical: 40 },
    hardness: {
      brinell: { min: 150, max: 200, typical: 165 },
    },
    elasticModulus: 193,
    shearModulus: 77.0,
    poissonRatio: 0.29,
    fatigueStrength: { min: 260, max: 310, typical: 290 },
  },
  thermal: {
    conductivity: 16.3,
    thermalExpansion: 16.6,
    specificHeat: 502,
    meltingRange: { min: 1399, max: 1454 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability with stabilization benefits retained in the weld metal. Unlike 321, niobium does not vaporize during welding, so 347 filler rod produces a weld metal that is also stabilized against sensitization. This makes 347 superior to 321 for heavy welds and complex multi-pass weldments in elevated-temperature service.',
  },
  standards: {
    astm: ['A240', 'A276', 'A312'],
    uns: 'S34700',
  },
  corrosionResistance: 'Good',
  relativeCost: 4,
  description:
    '347 stainless steel is a niobium-stabilized (with minor tantalum) austenitic stainless steel, functionally similar to 321 but with niobium (columbium) as the stabilizing element instead of titanium. The key advantage over 321 is that niobium does not volatilize during welding, so the weld metal retains its stabilized, sensitization-resistant character. This makes 347 the preferred grade for heavy multi-pass welded assemblies in elevated-temperature service. It is widely specified in aerospace and power generation for high-temperature components subjected to welding.',
  keyCharacteristics: [
    'Niobium stabilization — unlike Ti in 321, Nb is retained in weld metal during welding',
    'Superior to 321 for heavy, multi-pass welded joints in high-temperature service',
    'Prevents sensitization in the 425-870°C service range',
    'Excellent elevated-temperature strength and creep resistance',
    'Good oxidation resistance to ~870°C',
    '347 filler rod is the standard choice for welding both 321 and 347 base metal in service above 425°C',
  ],
  commonApplications: [
    'Aircraft exhaust stacks and manifolds',
    'Gas turbine components and hot-section parts',
    'High-temperature petrochemical piping',
    'Welded assemblies in refinery service at elevated temperatures',
    'Steam superheater tubes and headers',
    'Nuclear reactor components',
  ],
  industries: ['Aerospace', 'Power Generation', 'Petrochemical'],
  beginnerNote:
    "347 is closely related to 321 — both are designed for hot applications and both prevent the corrosion problem that affects standard 304. The difference is in the welding: 321 uses titanium for stabilization, but titanium evaporates when you weld it, leaving the weld unprotected. 347 uses niobium instead, which stays put during welding. So for welded joints that will get hot, 347 is the more reliable choice.",
  expertNote:
    'Niobium content must be ≥10×C (typically 0.60-1.00% Nb+Ta). Unlike Ti in 321, Nb has a much lower vapor pressure and is retained in the weld pool, providing stabilization in the as-deposited weld metal. This eliminates the need for post-weld stabilization anneal at 870-900°C that is sometimes required for 321 weldments in critical service. For highest-temperature applications above 870°C, consider Alloy 800H or 253MA. Knife-line attack (attack of a narrow band immediately adjacent to the fusion line) can occur in 347 welds exposed to nitric-hydrofluoric acid mixtures — specify low-carbon 347H (0.04-0.10% C) for such environments.',
  tempers: [
    {
      designation: 'Annealed (2B / No. 1)',
      description:
        'Solution annealed at 1010-1120°C — niobium stabilization retained through annealing; standard delivery condition',
      tensileStrength: { min: 515, max: 690, typical: 655 },
      yieldStrength: { min: 205, max: 310, typical: 275 },
      elongation: { min: 40, max: 50, typical: 45 },
      hardness: { brinell: 165 },
    },
    {
      designation: 'Stabilize Annealed (SA)',
      description:
        'Post-weld or post-form stabilization anneal at 870-900°C — ensures full NbC precipitation; preferred for welded assemblies entering sensitization-range service',
      tensileStrength: { min: 550, max: 690, typical: 655 },
      yieldStrength: { min: 220, max: 310, typical: 275 },
      elongation: { min: 38, max: 48, typical: 43 },
      hardness: { brinell: 165 },
    },
  ],
  relatedMaterials: ['steel-321ss', 'steel-316Lss', 'steel-304Lss'],
};

export const stainless300Series: Material[] = [
  steel303ss,
  steel304ss,
  steel304Lss,
  steel316ss,
  steel316Lss,
  steel321ss,
  steel347ss,
];
