import { Material } from '../types';

export const castSteelA27Gr6535: Material = {
  id: 'cast-steel-a27-65-35',
  name: 'Cast Steel A27 Gr 65-35',
  family: 'steel',
  subFamily: 'Cast Steel',
  mechanical: {
    density: 7.83,
    tensileStrength: { min: 448, max: 552, typical: 448 },
    yieldStrength: { min: 241, max: 310, typical: 241 },
    elongation: { min: 22, max: 30, typical: 22 },
    hardness: { brinell: { min: 130, max: 180, typical: 143 } },
    elasticModulus: 200,
    shearModulus: 77,
    poissonRatio: 0.29,
    fatigueStrength: { min: 186, max: 228, typical: 207 },
  },
  thermal: {
    conductivity: 51,
    thermalExpansion: 12.0,
    specificHeat: 502,
    meltingRange: { min: 1430, max: 1530 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Good',
    formability: 'Poor',
    castability: 'Good',
    heatTreatable: true,
    weldNotes: 'Good weldability with low-hydrogen electrodes (E7018 or equivalent). Preheat to 100–200°C for sections >25mm. PWHT recommended to relieve residual stresses in structural applications.',
  },
  standards: {
    astm: ['A27'],
  },
  corrosionResistance: 'Fair',
  relativeCost: 3,
  description:
    'ASTM A27 Grade 65-35 is the standard-grade low carbon cast steel, the most widely used cast steel specification. It provides the strength and toughness of mild steel in complex cast shapes that cannot be economically produced by forging or machining from bar stock. Cast steel offers the design freedom of casting combined with significantly higher strength, toughness, and weldability than cast iron grades. Grade 65-35 is normalized and tempered, giving good balance of strength, ductility, and toughness for general-purpose structural castings.',
  keyCharacteristics: [
    'Steel-level strength and toughness in cast form',
    'Good weldability — can be welded and repaired in the field',
    'Heat-treatable — normalize/temper or quench/temper available',
    'Significantly higher toughness than gray or ductile iron',
    'More complex to produce than iron castings — higher cost',
    'Good for structural components requiring welded assemblies',
  ],
  commonApplications: [
    'Railway car couplers and draft gear',
    'Mining equipment components',
    'Earthmoving and construction equipment parts',
    'Crane hooks and rigging hardware',
    'Pump and valve bodies for high-pressure service',
    'Structural brackets and supports',
  ],
  industries: ['Rail', 'Mining', 'Construction', 'Heavy Equipment'],
  beginnerNote:
    'Cast steel is steel that\'s been melted and poured into a mold — it has the strength and toughness of steel, unlike cast iron which is brittle. The trade-off is it\'s more expensive and harder to cast than iron. It\'s used when you need steel\'s properties but the shape is too complex to forge or machine from bar.',
  expertNote:
    'A27 Gr 65-35 (0.30% C max, 0.60% Si max, 0.70% Mn max). Normalize at 900–980°C + temper at 595–705°C. Alternatively, anneal at 843–899°C. Weld repair is straightforward — major advantage over cast iron. Charpy V-notch toughness typically 18–27 J at room temperature; lower toughness than wrought steels of same composition due to segregation and porosity. For improved toughness, upgrade to ASTM A148 Gr 80-50 (Q&T). Hot isostatic pressing (HIP) can eliminate internal porosity in critical castings.',
  tempers: [
    {
      designation: 'N+T',
      description: 'Normalized and tempered — standard condition',
      tensileStrength: { min: 448, max: 517, typical: 448 },
      yieldStrength: { min: 241, max: 310, typical: 241 },
      elongation: { min: 22, max: 30, typical: 22 },
      hardness: { brinell: 143 },
    },
  ],
  relatedMaterials: ['cast-steel-a148-105-85', 'steel-4130'],
  availableForms: ['casting'],
  manufacturingProcesses: ['casting', 'machining', 'welding'],
};

export const castSteelA148Gr10585: Material = {
  id: 'cast-steel-a148-105-85',
  name: 'Cast Steel A148 Gr 105-85',
  family: 'steel',
  subFamily: 'Cast Steel',
  mechanical: {
    density: 7.83,
    tensileStrength: { min: 724, max: 862, typical: 724 },
    yieldStrength: { min: 586, max: 690, typical: 586 },
    elongation: { min: 17, max: 22, typical: 17 },
    hardness: { brinell: { min: 210, max: 280, typical: 240 } },
    elasticModulus: 200,
    shearModulus: 77,
    poissonRatio: 0.29,
    fatigueStrength: { min: 290, max: 360, typical: 310 },
  },
  thermal: {
    conductivity: 46,
    thermalExpansion: 12.0,
    specificHeat: 502,
    meltingRange: { min: 1430, max: 1530 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Fair',
    formability: 'Poor',
    castability: 'Good',
    heatTreatable: true,
    weldNotes: 'Requires preheat 200–315°C, low-hydrogen process, and PWHT at 595–650°C. Higher carbon/alloy content vs A27 — more weld cracking susceptibility.',
  },
  standards: {
    astm: ['A148'],
  },
  corrosionResistance: 'Fair',
  relativeCost: 4,
  description:
    'ASTM A148 Grade 105-85 is a high-strength quenched and tempered cast steel used for demanding structural applications. The alloy composition (typically low-alloy C-Mn-Si with optional Ni, Cr, Mo additions) allows heat treatment to achieve 105 ksi minimum UTS with 17% elongation — significantly stronger than A27 while retaining meaningful ductility. It is used in crane booms, dragline buckets, heavy-duty mining equipment, and structural components requiring high strength in complex cast shapes.',
  keyCharacteristics: [
    'High strength quenched and tempered cast steel',
    'Maintains good ductility at high strength level',
    'Significant improvement over A27 for structural applications',
    'Weldable with proper preheat and PWHT procedures',
    'Used where high loads or weight reduction are driving factors',
    'Available in multiple ASTM A148 grades up to 260-210',
  ],
  commonApplications: [
    'Crane boom end connections and pins',
    'Dragline and excavator bucket lips',
    'Heavy-duty mining equipment',
    'Offshore equipment structural nodes',
    'Military vehicle components',
    'High-load structural nodes',
  ],
  industries: ['Mining', 'Construction', 'Offshore', 'Defense'],
  beginnerNote:
    'A148 Gr 105-85 is the high-strength version of cast steel. Where A27 is like mild steel in cast form, A148 105-85 is like a higher-strength alloy steel. You use it when A27 isn\'t strong enough — for heavy crane parts, mining equipment, and anywhere you need to minimize weight while handling large loads.',
  expertNote:
    'A148 Gr 105-85 requires Q&T: austenitize 870–950°C, quench, temper 595–650°C. Alloy additions vary by foundry practice (C 0.30–0.40%, Mn 0.60–1.20%, Ni/Cr/Mo as needed). Weld procedure qualification required; minimum preheat 200°C, PWHT mandatory. Charpy V-notch impact toughness: typically 20–40 J at room temperature. For even higher strength, A148 grades extend to 150-125 and 260-210 for specialty applications. Compared to cast ductile iron: A148 offers better toughness at equivalent or higher strength, better weldability; ductile iron offers lower cost and simpler casting practice.',
  tempers: [
    {
      designation: 'Q+T',
      description: 'Quenched and tempered — standard condition for this grade',
      tensileStrength: { min: 724, max: 862, typical: 724 },
      yieldStrength: { min: 586, max: 690, typical: 586 },
      elongation: { min: 17, max: 22, typical: 17 },
      hardness: { brinell: 240 },
    },
  ],
  relatedMaterials: ['cast-steel-a27-65-35', 'steel-4340'],
  availableForms: ['casting'],
  manufacturingProcesses: ['casting', 'machining', 'welding'],
};

export const castSteelCF8M: Material = {
  id: 'cast-steel-cf8m',
  name: 'Cast Steel CF-8M',
  family: 'steel',
  subFamily: 'Cast Steel',
  mechanical: {
    density: 7.98,
    tensileStrength: { min: 517, max: 621, typical: 517 },
    yieldStrength: { min: 241, max: 310, typical: 241 },
    elongation: { min: 30, max: 45, typical: 35 },
    hardness: { brinell: { min: 149, max: 190, typical: 163 } },
    elasticModulus: 200,
    shearModulus: 77,
    poissonRatio: 0.29,
  },
  thermal: {
    conductivity: 15,
    thermalExpansion: 17.8,
    specificHeat: 502,
    meltingRange: { min: 1370, max: 1430 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Fair',
    formability: 'Poor',
    castability: 'Good',
    heatTreatable: false,
    weldNotes: 'Good weldability with matching ER316/316L filler. Solution anneal (1050–1120°C water quench) after welding for maximum corrosion resistance in aggressive media.',
  },
  standards: {
    astm: ['A351', 'A743'],
    uns: 'J92900',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    'CF-8M is the cast equivalent of wrought 316 stainless steel (18-8 + Mo), the most commonly specified cast austenitic stainless steel for corrosive service. The "CF" ACI designation indicates corrosion-resistant, austenitic structure; "8" approximates 0.08% maximum carbon; "M" indicates molybdenum addition. The 2–3% Mo provides pitting and crevice corrosion resistance in chloride environments. CF-8M is the go-to cast stainless for chemical processing, marine, food, and pharmaceutical applications requiring complex shapes with full corrosion resistance.',
  keyCharacteristics: [
    'Cast equivalent of 316 stainless steel',
    'Excellent corrosion resistance — Mo addition provides chloride pitting resistance',
    'Austenitic — non-magnetic, cannot be hardened by heat treatment',
    'Good weldability with matching filler',
    'High ductility and toughness down to cryogenic temperatures',
    'Most commonly specified cast austenitic stainless',
  ],
  commonApplications: [
    'Chemical process pump housings and impellers',
    'Marine seawater valve and pump bodies',
    'Food and pharmaceutical process equipment',
    'Pulp and paper industry components',
    'Desalination plant components',
    'Petrochemical process fittings',
  ],
  industries: ['Chemical Processing', 'Marine', 'Food & Pharma', 'Oil & Gas'],
  beginnerNote:
    'CF-8M is 316 stainless steel in cast form. If you need a complex stainless steel part that would be impossible to machine from bar, you cast it in CF-8M and get all the corrosion resistance of 316 with the design freedom of casting. It\'s expensive but necessary for pumps, valves, and fittings handling corrosive fluids.',
  expertNote:
    'CF-8M composition: 18–21% Cr, 9–12% Ni, 2–3% Mo, C ≤0.08%. Dual-phase microstructure: austenite + 5–25% ferrite (required to prevent hot cracking during solidification). Ferrite number (FN) typically 5–15 per WRC-1992 diagram. Higher ferrite improves weldability but marginally reduces corrosion resistance. Solution anneal at 1050–1120°C + water quench eliminates sensitization. CF-3M (low carbon, ≤0.03% C) is preferred when solution anneal after welding is not possible — equivalent to 316L. PREN (pitting resistance equivalent) = %Cr + 3.3×%Mo + 16×%N ≈ 25–28 for CF-8M; adequate for seawater in most cases but duplex grades (CD-4MCu) preferred for very aggressive chloride environments.',
  relatedMaterials: ['cast-steel-a27-65-35'],
  availableForms: ['casting'],
  manufacturingProcesses: ['casting', 'machining'],
};

export const castSteelCA15: Material = {
  id: 'cast-steel-ca15',
  name: 'Cast Steel CA-15',
  family: 'steel',
  subFamily: 'Cast Steel',
  mechanical: {
    density: 7.70,
    tensileStrength: { min: 620, max: 825, typical: 724 },
    yieldStrength: { min: 448, max: 620, typical: 517 },
    elongation: { min: 18, max: 25, typical: 18 },
    hardness: { brinell: { min: 180, max: 241, typical: 217 } },
    elasticModulus: 200,
    shearModulus: 77,
    poissonRatio: 0.28,
    fatigueStrength: { min: 276, max: 345, typical: 310 },
  },
  thermal: {
    conductivity: 25,
    thermalExpansion: 10.8,
    specificHeat: 460,
    meltingRange: { min: 1450, max: 1510 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Poor',
    castability: 'Good',
    heatTreatable: true,
    weldNotes: 'Requires preheat 205–315°C and PWHT at 650–760°C. Use matching CA-15 or 410 filler wire. Full anneal or temper required after welding to restore properties and prevent HAZ cracking.',
  },
  standards: {
    astm: ['A217', 'A743'],
    uns: 'J91150',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    'CA-15 is the cast equivalent of wrought 410 stainless steel — a 12% chromium martensitic stainless steel. It provides moderate corrosion resistance in mildly corrosive environments combined with high strength achievable through heat treatment. Unlike austenitic CF-8M, CA-15 is magnetic and can be hardened by quenching and tempering. It is used in applications requiring higher strength than CF-8M with moderate corrosion resistance, such as turbine components, valves, and pump parts in mild corrosive service.',
  keyCharacteristics: [
    'Cast equivalent of 410 stainless steel',
    'Martensitic — heat-treatable to high strength levels',
    'Magnetic (unlike austenitic stainless)',
    'Moderate corrosion resistance — suitable for mildly corrosive environments',
    'Better strength and hardness than CF-8M when heat treated',
    'Good erosion and cavitation resistance',
  ],
  commonApplications: [
    'Hydraulic turbine runners and guide vanes',
    'Pump impellers in mildly corrosive service',
    'Steam turbine castings',
    'Valve bodies and trim (oil/gas)',
    'Industrial mixer and agitator components',
    'Mining slurry pump components',
  ],
  industries: ['Power Generation', 'Oil & Gas', 'Hydraulics', 'Mining'],
  beginnerNote:
    'CA-15 is the heat-treatable cast stainless steel — unlike CF-8M (316) which stays soft, CA-15 can be hardened like a tool steel while still resisting mild corrosion. It\'s used in turbines and pumps where you need both corrosion resistance and high strength or wear resistance.',
  expertNote:
    'CA-15 composition: 11.5–14% Cr, 1% Ni max, 0.15% C max. Martensitic transformation on quenching from ~980°C. Normalize and temper at 620–760°C achieves balance of strength and toughness; higher temper temperatures sacrifice strength for toughness. Minimum 1% Ni in CA-15M variant improves toughness. PWHT after welding mandatory — untempered martensite in HAZ will crack. Cavitation resistance is a key property for hydraulic turbine applications: CA-15 resists cavitation pitting better than CF-8M in high-velocity hydraulic environments. For seawater or aggressive chloride environments, upgrade to CF-8M or duplex grades.',
  tempers: [
    {
      designation: 'N+T (low)',
      description: 'Normalized + high temper — maximum toughness',
      tensileStrength: { min: 620, max: 690, typical: 655 },
      yieldStrength: { min: 448, max: 517, typical: 483 },
      elongation: { min: 20, max: 28, typical: 22 },
      hardness: { brinell: 187 },
    },
    {
      designation: 'N+T (high)',
      description: 'Normalized + low temper — maximum strength',
      tensileStrength: { min: 760, max: 862, typical: 793 },
      yieldStrength: { min: 586, max: 655, typical: 621 },
      elongation: { min: 15, max: 20, typical: 15 },
      hardness: { brinell: 241 },
    },
  ],
  relatedMaterials: ['cast-steel-cf8m', 'cast-steel-a148-105-85'],
  availableForms: ['casting'],
  manufacturingProcesses: ['casting', 'machining'],
};

export const castSteels: Material[] = [
  castSteelA27Gr6535,
  castSteelA148Gr10585,
  castSteelCF8M,
  castSteelCA15,
];
