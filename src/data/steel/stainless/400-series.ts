import { Material } from '../../types';

export const steel410ss: Material = {
  id: 'steel-410ss',
  name: '410 Stainless Steel',
  family: 'steel',
  subFamily: '400-Series Stainless',
  mechanical: {
    density: 7.75,
    tensileStrength: { min: 480, max: 1030, typical: 690 },
    yieldStrength: { min: 275, max: 827, typical: 415 },
    elongation: { min: 15, max: 25, typical: 20 },
    hardness: {
      brinell: { min: 140, max: 310, typical: 195 },
      rockwellC: { min: 14, max: 32, typical: 22 },
    },
    elasticModulus: 200,
    shearModulus: 76.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 240, max: 440, typical: 320 },
  },
  thermal: {
    conductivity: 24.9,
    thermalExpansion: 9.9,
    specificHeat: 460,
    meltingRange: { min: 1480, max: 1530 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Good',
    heatTreatable: true,
    weldNotes:
      'Fair weldability — preheat to 205-260°C and post-weld anneal or temper at 620-760°C required to prevent cracking and restore toughness. Hardening occurs in the HAZ during welding; without PWHT, the HAZ is brittle. Use 410 or 309 filler. Not recommended for welded assemblies in corrosive service.',
  },
  standards: {
    astm: ['A276', 'A276M'],
    uns: 'S41000',
  },
  corrosionResistance: 'Fair',
  relativeCost: 2,
  description:
    '410 is the basic martensitic stainless steel, with 11.5-13.5% chromium and a maximum of 0.15% carbon. It is the most widely used martensitic stainless and represents the entry point for heat-treatable stainless steels. In the annealed condition, 410 is soft and machinable; after quench and tempering, it achieves moderate to high strength with good hardness. Its chromium content provides mild corrosion resistance — superior to plain carbon steels but significantly inferior to austenitic grades like 304 or 316. Magnetic in all conditions.',
  keyCharacteristics: [
    'Martensitic microstructure — heat-treatable for a range of strength levels',
    'Magnetic in all conditions (unlike 300-series austenitic grades)',
    'Moderate corrosion resistance — suitable for mild environments but not chlorides',
    'Lower thermal expansion (9.9 µm/m·°C) than austenitic grades (~17 µm/m·°C)',
    'Good machinability in annealed condition',
    'Hardness up to ~35 HRC achievable after hardening',
  ],
  commonApplications: [
    'Cutlery and knife blades',
    'Valve seats and stems',
    'Pump shafts and impellers',
    'Steam turbine blades',
    'Fasteners for mild environments',
    'General heat-resisting applications to ~650°C',
    'Petroleum refining equipment',
  ],
  industries: ['Food Processing', 'Petrochemical', 'Power Generation', 'Consumer'],
  beginnerNote:
    '410 is the stainless steel that can be hardened — think knife blades and valve components. Unlike 304 or 316, which stay soft no matter what heat treatment you apply, 410 can be quenched and tempered to achieve real hardness. The trade-off: it\'s magnetic, less corrosion-resistant than 304, and needs careful handling when welding. It\'s the stainless steel of choice when you need hardness more than corrosion resistance.',
  expertNote:
    'Carbon range of 0.08-0.15% determines maximum achievable hardness after austenitizing at 925-1010°C and oil or air quench. Temper at 205-370°C for high strength (900-1000 MPa UTS); temper at 620-760°C for improved toughness (650-750 MPa UTS). Note the "temper embrittlement" range of 370-565°C — avoid tempering in this range. For higher hardness requirements, 420 (0.15-0.40% C) or 440C (0.95-1.20% C) are the alloy progression. Magnetism (Hc typically 5-40 Oe) can interfere with sensitive instruments — specify austenitic grades for non-magnetic requirements.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~870°C — maximum softness, best machinability and formability',
      tensileStrength: { min: 450, max: 520, typical: 480 },
      yieldStrength: { min: 240, max: 310, typical: 275 },
      elongation: { min: 22, max: 28, typical: 25 },
      hardness: { brinell: 140 },
    },
    {
      designation: 'Hardened (H)',
      description:
        'Austenitized at 980°C, air or oil quenched — untempered martensitic condition, maximum hardness but brittle',
      tensileStrength: { min: 1200, max: 1400, typical: 1310 },
      yieldStrength: { min: 1000, max: 1200, typical: 1100 },
      elongation: { min: 5, max: 10, typical: 7 },
      hardness: { rockwellC: 39 },
    },
    {
      designation: 'Q&T 205°C',
      description:
        'Austenitized at 980°C, quenched, tempered at 205°C — high strength, moderate toughness',
      tensileStrength: { min: 1000, max: 1100, typical: 1030 },
      yieldStrength: { min: 795, max: 860, typical: 827 },
      elongation: { min: 13, max: 17, typical: 15 },
      hardness: { rockwellC: 32 },
    },
    {
      designation: 'Q&T 650°C',
      description:
        'Austenitized at 980°C, quenched, high-temperature tempered at 650°C — good toughness for service applications',
      tensileStrength: { min: 620, max: 760, typical: 690 },
      yieldStrength: { min: 520, max: 590, typical: 550 },
      elongation: { min: 18, max: 24, typical: 20 },
      hardness: { brinell: 200 },
    },
  ],
  relatedMaterials: ['steel-416ss', 'steel-440Css', 'steel-304ss'],
};

export const steel416ss: Material = {
  id: 'steel-416ss',
  name: '416 Stainless Steel',
  family: 'steel',
  subFamily: '400-Series Stainless',
  mechanical: {
    density: 7.75,
    tensileStrength: { min: 520, max: 793, typical: 655 },
    yieldStrength: { min: 275, max: 621, typical: 414 },
    elongation: { min: 20, max: 30, typical: 25 },
    hardness: {
      brinell: { min: 155, max: 262, typical: 195 },
      rockwellC: { min: 16, max: 27, typical: 20 },
    },
    elasticModulus: 200,
    shearModulus: 76.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 225, max: 380, typical: 295 },
  },
  thermal: {
    conductivity: 24.9,
    thermalExpansion: 9.9,
    specificHeat: 460,
    meltingRange: { min: 1480, max: 1530 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Excellent',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Poor weldability — sulfur content for free-machining causes hot cracking in welds. Welding is not recommended for structural applications. If welding is unavoidable, preheat to 205-315°C, use 410 filler, and apply immediate PWHT at 620-760°C. Corrosion resistance at the weld will be significantly reduced.',
  },
  standards: {
    astm: ['A582'],
    uns: 'S41600',
  },
  corrosionResistance: 'Fair',
  relativeCost: 2,
  description:
    '416 stainless steel is a free-machining version of 410, produced by adding sulfur (and sometimes selenium) to the martensitic 12% chromium base composition. This creates the highest machinability of any stainless steel — approximately 85% of B1112 free-machining carbon steel — making it ideal for high-volume screw-machine production where corrosion resistance and heat treatability are both required. Like 410, 416 is fully heat-treatable to achieve a wide range of strength levels.',
  keyCharacteristics: [
    'Highest machinability of any martensitic stainless steel grade',
    'Sulfur addition enables efficient screw-machine production',
    'Heat-treatable to same strength levels as 410',
    'Magnetic in all conditions',
    'Poor weldability — not suitable for welded assemblies',
    'Inferior corrosion resistance to 410 due to sulfide inclusions creating local anodes',
  ],
  commonApplications: [
    'High-volume screw-machined parts (screws, nuts, studs)',
    'Valve components and pump shafts requiring machining',
    'Gears and pinions',
    'Nuts, bolts, and fasteners for mild environments',
    'Instrument components',
    'Motor shafts requiring corrosion resistance and machinability',
  ],
  industries: ['Automotive', 'Industrial', 'Oil & Gas'],
  beginnerNote:
    "416 is to 410 what 303 is to 304 — it's the free-machining version. If you need a stainless steel part that can be heat-hardened AND machined efficiently on a screw machine, 416 is the answer. It's the most machinable stainless steel available. Like 303, the sulfur that makes it machine well also makes it difficult to weld, so 416 is exclusively for machined (not welded) applications.",
  expertNote:
    'Sulfur content (0.15% min per A582) dramatically improves chip formation but creates MnS inclusions that act as preferential corrosion initiation sites, reducing pitting resistance compared to 410 by approximately 30-40% in chloride environments. Machinability ~85% of B1112. Heat treatment is identical to 410: austenitize 925-1010°C, oil or air quench, temper 150-370°C for high strength or 620-760°C for improved toughness. In Q&T 620°C condition, 416 achieves ~793 MPa UTS / 621 MPa YS / 20% elongation. For applications requiring better corrosion resistance than 416 with retained machinability, consider 303 (austenitic) if heat treatment is not required.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~870°C — maximum softness for machining, as-delivered condition for bar stock',
      tensileStrength: { min: 500, max: 545, typical: 520 },
      yieldStrength: { min: 260, max: 295, typical: 275 },
      elongation: { min: 27, max: 33, typical: 30 },
      hardness: { brinell: 155 },
    },
    {
      designation: 'Q&T 315°C',
      description:
        'Austenitized at 980°C, oil quenched, tempered at 315°C — high strength condition',
      tensileStrength: { min: 960, max: 1070, typical: 1000 },
      yieldStrength: { min: 760, max: 860, typical: 795 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { rockwellC: 27 },
    },
    {
      designation: 'Q&T 620°C',
      description:
        'Austenitized at 980°C, oil quenched, tempered at 620°C — balanced strength and toughness, most common service condition',
      tensileStrength: { min: 760, max: 830, typical: 793 },
      yieldStrength: { min: 600, max: 645, typical: 621 },
      elongation: { min: 18, max: 23, typical: 20 },
      hardness: { brinell: 235 },
    },
  ],
  relatedMaterials: ['steel-410ss', 'steel-440Css', 'steel-303ss'],
};

export const steel430ss: Material = {
  id: 'steel-430ss',
  name: '430 Stainless Steel',
  family: 'steel',
  subFamily: '400-Series Stainless',
  mechanical: {
    density: 7.74,
    tensileStrength: { min: 450, max: 600, typical: 517 },
    yieldStrength: { min: 205, max: 310, typical: 276 },
    elongation: { min: 20, max: 30, typical: 22 },
    hardness: {
      brinell: { min: 155, max: 185, typical: 170 },
    },
    elasticModulus: 200,
    shearModulus: 76.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 205, max: 260, typical: 230 },
  },
  thermal: {
    conductivity: 26.1,
    thermalExpansion: 10.4,
    specificHeat: 460,
    meltingRange: { min: 1425, max: 1510 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Good',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Good weldability but grain growth in the HAZ can reduce toughness and ductility. Post-weld annealing at 790°C recommended to restore properties. Use 430 or 309 filler. Avoid welding in thicknesses over 8 mm without full post-weld anneal. Not hardenable by heat treatment.',
  },
  standards: {
    astm: ['A240', 'A276'],
    uns: 'S43000',
  },
  corrosionResistance: 'Good',
  relativeCost: 2,
  description:
    '430 is the most widely used ferritic stainless steel, with 16-18% chromium and low carbon content (0.12% max). As a ferritic grade, 430 is non-hardenable by heat treatment, magnetic in all conditions, and has lower thermal expansion than austenitic grades. It provides good corrosion resistance in mild environments and mildly corrosive media, comparable to 304 in many indoor applications. Its primary applications are decorative and functional surfaces in consumer goods, automotive trim, and appliances where the cost premium of austenitic grades is not justified.',
  keyCharacteristics: [
    'Ferritic microstructure — magnetic, non-hardenable by heat treatment',
    'Good corrosion resistance in mild environments and mild chemicals',
    'Lower cost than austenitic grades (304/316) due to absence of nickel',
    'Lower thermal expansion than austenitic grades — important for precision components',
    'Cannot be strengthened by heat treatment — cold work only',
    'Good resistance to stress corrosion cracking (SCC) unlike austenitic grades',
  ],
  commonApplications: [
    'Automotive exhaust systems and trim',
    'Dishwasher interiors and appliance trim',
    'Kitchen sink and countertop components',
    'Decorative architectural panels',
    'Barbecue grills and outdoor furniture',
    'Coin and token production',
    'Washing machine drums and tubs',
  ],
  industries: ['Automotive', 'Appliances', 'Architecture', 'Consumer'],
  beginnerNote:
    "430 is the ferritic stainless — it's the stainless you find in appliances and automotive trim where cost matters more than maximum corrosion resistance. It's magnetic (unlike 304), which is why a magnet sticks to a stainless dishwasher tub but not to a 304 stainless sink. It's cheaper than 304 because it has no nickel, and it resists corrosion well enough for most indoor and mild-weather applications.",
  expertNote:
    'Ferritic 430 has a body-centered cubic (BCC) crystal structure versus FCC in austenitics, giving it magnetic permeability (μr ~600-1100). The absence of nickel eliminates susceptibility to stress corrosion cracking (SCC) in chloride environments — a significant advantage over 304 in hot chloride service. However, ferritic grades exhibit a ductile-to-brittle transition temperature (DBTT) around -10°C to 0°C, limiting cryogenic use. 475°C embrittlement occurs after extended exposure at 400-500°C due to Cr-rich α\' phase precipitation. For improved formability and corrosion resistance in ferritic grades, consider 439 (Ti-stabilized) or 444 (Mo-bearing).',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Full anneal at 780-850°C, air cooled — maximum softness and ductility, standard delivery condition for sheet, strip, and bar',
      tensileStrength: { min: 450, max: 540, typical: 517 },
      yieldStrength: { min: 205, max: 310, typical: 276 },
      elongation: { min: 22, max: 30, typical: 22 },
      hardness: { brinell: 155 },
    },
    {
      designation: 'Cold Rolled (1/4 Hard)',
      description:
        'Light cold rolling for moderate strength increase — common for appliance and automotive trim sheet where form is required',
      tensileStrength: { min: 565, max: 655, typical: 600 },
      yieldStrength: { min: 450, max: 545, typical: 483 },
      elongation: { min: 15, max: 24, typical: 18 },
      hardness: { brinell: 180 },
    },
    {
      designation: 'Cold Rolled (1/2 Hard)',
      description:
        'Moderate cold rolling — increased strength for structural trim applications; available in sheet and strip',
      tensileStrength: { min: 655, max: 760, typical: 700 },
      yieldStrength: { min: 550, max: 655, typical: 600 },
      elongation: { min: 10, max: 18, typical: 14 },
      hardness: { brinell: 200 },
    },
  ],
  relatedMaterials: ['steel-304ss', 'steel-410ss', 'steel-439ss'],
};

export const steel440Css: Material = {
  id: 'steel-440Css',
  name: '440C Stainless Steel',
  family: 'steel',
  subFamily: '400-Series Stainless',
  mechanical: {
    density: 7.65,
    tensileStrength: { min: 760, max: 1900, typical: 1140 },
    yieldStrength: { min: 450, max: 1480, typical: 965 },
    elongation: { min: 2, max: 14, typical: 13 },
    hardness: {
      brinell: { min: 207, max: 580, typical: 330 },
      rockwellC: { min: 26, max: 59, typical: 57 },
    },
    elasticModulus: 200,
    shearModulus: 76.0,
    poissonRatio: 0.28,
    fatigueStrength: { min: 310, max: 560, typical: 450 },
  },
  thermal: {
    conductivity: 24.2,
    thermalExpansion: 10.2,
    specificHeat: 460,
    meltingRange: { min: 1370, max: 1480 },
  },
  processability: {
    weldability: 'Poor',
    machinability: 'Fair',
    formability: 'Poor',
    heatTreatable: true,
    weldNotes:
      'Poor weldability due to very high carbon content (~1.0% C). Welding causes martensitic hardening in the HAZ, leading to cracking without preheat (300-375°C). Post-weld annealing or full reharden-and-temper cycle required. Welding is strongly discouraged for structural applications and is essentially never performed on hardened 440C components.',
  },
  standards: {
    astm: ['A276'],
    uns: 'S44004',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    '440C is the highest-carbon member of the 440 stainless steel family (440A, 440B, 440C), with 0.95-1.20% carbon and 16-18% chromium. This high carbon content, combined with the chromium, enables 440C to achieve the highest hardness of any standard stainless steel grade — up to 58-60 HRC after hardening and tempering. This makes it the premier stainless steel for bearings, cutting tools, and wear-resistant components where both hardness and corrosion resistance are required. It is significantly harder than 410 and provides better corrosion resistance in its hardened condition than 410 or 416.',
  keyCharacteristics: [
    'Highest achievable hardness of any standard stainless steel — up to 58-60 HRC',
    'High carbon (0.95-1.20%) and chromium (16-18%) combination for hardness plus corrosion resistance',
    'Standard grade for corrosion-resistant ball bearings and precision races',
    'Good corrosion resistance in hardened condition — superior to 410/416 in chloride-free environments',
    'Magnetic in all conditions (martensitic structure)',
    'Poor weldability and formability due to high carbon content',
  ],
  commonApplications: [
    'Ball and roller bearings',
    'Valve seats and balls for high-wear service',
    'Surgical instruments requiring edge retention',
    'High-quality cutlery and kitchen knives',
    'Measurement and gauge tools',
    'Pump components and mechanical seals',
    'Molds and dies in corrosive environments',
  ],
  industries: ['Medical', 'Aerospace', 'Industrial', 'Consumer'],
  beginnerNote:
    "440C is the hardest standard stainless steel you can get. When you need something that's both corrosion-resistant and very hard — like a stainless bearing or a high-quality knife — 440C is typically the answer. The high carbon content is what gives it that extreme hardness after heat treatment. The trade-offs are that it's brittle in the hardened state (very low elongation), can't be welded, and is harder to form or machine than softer stainless grades.",
  expertNote:
    'Hardening sequence: austenitize at 1010-1065°C (lower end reduces carbide dissolution and retained austenite; higher end improves wear resistance), oil or air quench, temper at 150-370°C. Typical hardened + tempered (150°C) properties: 1900 MPa UTS, 1480 MPa YS, 2% elongation, 57-59 HRC. Retained austenite (RA) can be significant at austenitizing temperatures above 1050°C — subzero treatment at -73°C before tempering minimizes RA. Corrosion resistance in hardened condition is reduced versus annealed due to Cr precipitation in carbides — PREN of hardened 440C is effectively lower than the nominal 17% Cr suggests. For superior corrosion resistance at high hardness, consider tool steels coated with CrN or powder-metallurgy grades with nitrogen alloying.',
  tempers: [
    {
      designation: 'Annealed (A)',
      description:
        'Furnace-cooled from ~870°C — maximum softness for machining prior to final hardening',
      tensileStrength: { min: 740, max: 780, typical: 760 },
      yieldStrength: { min: 430, max: 470, typical: 450 },
      elongation: { min: 13, max: 16, typical: 14 },
      hardness: { brinell: 207 },
    },
    {
      designation: 'Hardened + Tempered 150°C',
      description:
        'Austenitized at 1010-1040°C, oil quenched, tempered at 150°C — maximum hardness for bearings and cutting tools',
      tensileStrength: { min: 1860, max: 1940, typical: 1900 },
      yieldStrength: { min: 1450, max: 1510, typical: 1480 },
      elongation: { min: 1, max: 3, typical: 2 },
      hardness: { rockwellC: 58 },
    },
    {
      designation: 'Hardened + Tempered 315°C',
      description:
        'Austenitized at 1010-1040°C, oil quenched, tempered at 315°C — improved toughness with some hardness reduction',
      tensileStrength: { min: 1760, max: 1860, typical: 1800 },
      yieldStrength: { min: 1340, max: 1430, typical: 1380 },
      elongation: { min: 2, max: 4, typical: 3 },
      hardness: { rockwellC: 54 },
    },
    {
      designation: 'Hardened + Tempered 540°C',
      description:
        'Austenitized at 1010°C, oil quenched, tempered at 540°C — moderate hardness with significantly improved toughness',
      tensileStrength: { min: 1310, max: 1450, typical: 1380 },
      yieldStrength: { min: 1030, max: 1140, typical: 1070 },
      elongation: { min: 5, max: 9, typical: 7 },
      hardness: { rockwellC: 43 },
    },
  ],
  relatedMaterials: ['steel-410ss', 'steel-416ss', 'steel-440Bss'],
};

export const stainless400Series: Material[] = [
  steel410ss,
  steel416ss,
  steel430ss,
  steel440Css,
];
