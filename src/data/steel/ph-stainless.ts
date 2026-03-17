import { Material } from '../types';

export const steel174PH: Material = {
  id: 'steel-174PH',
  name: '17-4 PH Stainless Steel',
  family: 'steel',
  subFamily: 'PH Stainless',
  mechanical: {
    density: 7.78,
    tensileStrength: { min: 793, max: 1310, typical: 1310 },
    yieldStrength: { min: 517, max: 1170, typical: 1170 },
    elongation: { min: 10, max: 18, typical: 14 },
    hardness: {
      brinell: { min: 241, max: 388, typical: 388 },
      rockwellC: { min: 25, max: 42, typical: 40 },
    },
    elasticModulus: 197,
    shearModulus: 77,
    poissonRatio: 0.27,
    fatigueStrength: { min: 448, max: 689, typical: 524 },
  },
  thermal: {
    conductivity: 18.3,
    thermalExpansion: 10.8,
    specificHeat: 460,
    meltingRange: { min: 1400, max: 1440 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Good weldability — 17-4 PH can be welded in the annealed (solution treated, Condition A) or aged condition. Post-weld precipitation hardening restores full strength. Use 17-4 PH or 308L filler. The weld will be in the austenitic condition until re-aged; re-age the entire weldment to restore properties.',
  },
  standards: {
    astm: ['A564', 'A693', 'A705'],
    ams: ['5604', '5643', '5622'],
    uns: 'S17400',
  },
  corrosionResistance: 'Good',
  relativeCost: 4,
  description:
    '17-4 PH (also UNS S17400) is a chromium-nickel-copper precipitation-hardening stainless steel that combines the corrosion resistance of a martensitic stainless steel with the ability to be hardened to high strength levels by a simple low-temperature aging treatment. The "17-4" refers to its approximate composition of 17% chromium and 4% nickel, with copper as the primary precipitation-hardening element. The aging (precipitation hardening) treatment is performed at 480-620°C, far below any heat that would compromise part geometry. This makes 17-4 PH ideal for complex, precision parts that need both strength and corrosion resistance.',
  keyCharacteristics: [
    'Precipitation hardening provides high strength from simple low-temperature aging (480-620°C)',
    'Combines strength of alloy steel with corrosion resistance of stainless',
    '17% Cr + 4% Ni + 3-5% Cu — copper-precipitation strengthening',
    'Good machinability in annealed (Condition A) state, retains good machinability after aging',
    'Multiple aging conditions (H900 through H1150) provide range of strength/toughness tradeoffs',
    'Magnetic in all conditions (martensitic structure)',
  ],
  commonApplications: [
    'Aerospace structural components and fittings',
    'Pump shafts and impellers in corrosive service',
    'Chemical process equipment',
    'Nuclear fuel containment components',
    'Firearms components (barrels, actions)',
    'High-strength fasteners requiring corrosion resistance',
    'Medical surgical instruments and devices',
  ],
  industries: ['Aerospace', 'Defense', 'Medical', 'Chemical', 'Oil & Gas'],
  beginnerNote:
    "17-4 PH is a \"best of both worlds\" stainless steel — it's as strong as a real steel alloy but resists corrosion like stainless. The \"PH\" stands for precipitation hardening, which means you heat it at a relatively low temperature after machining and it becomes much stronger. This is convenient because the aging temperature is low enough that parts don't warp. It's widely used in aerospace parts, pump shafts, and medical equipment.",
  expertNote:
    'Aging conditions: Condition A (annealed/solution treated, 1040°C, air cool): ~794 MPa UTS; H900 (480°C/1h): 1310 MPa UTS, 1170 MPa YS, 10% el, 40 HRC — maximum strength, lowest toughness; H925 (495°C/4h): 1170 MPa UTS, 1070 MPa YS, 14% el; H1025 (550°C/4h): 1000 MPa UTS, 862 MPa YS, 16% el — best balance; H1075 (580°C/4h): 931 MPa UTS, 793 MPa YS, 16% el; H1150 (620°C/4h): 793 MPa UTS, 517 MPa YS, 18% el — best ductility/toughness. H900 condition is susceptible to SCC in chloride environments — prefer H1025 or H1150 for marine service. Hardness is retained to ~260°C in service. Note: 17-4 PH is martensitic, not austenitic — fully magnetic. Coefficient of thermal expansion (10.8 µm/m·°C) is closer to alloy steels than to austenitic stainless.',
  tempers: [
    {
      designation: 'Condition A (Annealed)',
      description: 'Solution annealed at 1040°C, air cooled — soft condition for machining, before precipitation hardening',
      tensileStrength: { min: 793, max: 896, typical: 896 },
      yieldStrength: { min: 517, max: 655, typical: 620 },
      elongation: { min: 16, max: 22, typical: 18 },
      hardness: { brinell: 241 },
    },
    {
      designation: 'H900',
      description: 'Aged at 480°C for 1 hour — maximum strength condition, used for aerospace structural components',
      tensileStrength: { min: 1276, max: 1345, typical: 1310 },
      yieldStrength: { min: 1138, max: 1207, typical: 1170 },
      elongation: { min: 10, max: 14, typical: 14 },
      hardness: { rockwellC: 40 },
    },
    {
      designation: 'H1025',
      description: 'Aged at 550°C for 4 hours — optimum combination of strength, toughness, and SCC resistance; most commonly specified condition',
      tensileStrength: { min: 965, max: 1069, typical: 1000 },
      yieldStrength: { min: 827, max: 896, typical: 862 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { rockwellC: 33 },
    },
    {
      designation: 'H1150',
      description: 'Aged at 620°C for 4 hours — maximum ductility and toughness, best SCC resistance of the aged conditions',
      tensileStrength: { min: 758, max: 862, typical: 793 },
      yieldStrength: { min: 483, max: 558, typical: 517 },
      elongation: { min: 16, max: 22, typical: 18 },
      hardness: { brinell: 229 },
    },
  ],
  relatedMaterials: ['steel-155PH', 'steel-304ss', 'steel-316ss'],
};

export const steel155PH: Material = {
  id: 'steel-155PH',
  name: '15-5 PH Stainless Steel',
  family: 'steel',
  subFamily: 'PH Stainless',
  mechanical: {
    density: 7.78,
    tensileStrength: { min: 793, max: 1310, typical: 1207 },
    yieldStrength: { min: 517, max: 1170, typical: 1138 },
    elongation: { min: 10, max: 18, typical: 15 },
    hardness: {
      brinell: { min: 241, max: 388, typical: 363 },
      rockwellC: { min: 25, max: 42, typical: 38 },
    },
    elasticModulus: 197,
    shearModulus: 77,
    poissonRatio: 0.27,
    fatigueStrength: { min: 448, max: 689, typical: 517 },
  },
  thermal: {
    conductivity: 18.4,
    thermalExpansion: 10.8,
    specificHeat: 460,
    meltingRange: { min: 1400, max: 1440 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Good weldability — similar to 17-4 PH. The absence of delta ferrite in 15-5 PH (unlike 17-4 PH) provides better toughness in the weld metal, making it preferred for heavy weldments. Post-weld age to restore strength. Use 15-5 PH or 17-4 PH filler.',
  },
  standards: {
    astm: ['A564', 'A693'],
    ams: ['5659', '5826'],
    uns: 'S15500',
  },
  corrosionResistance: 'Good',
  relativeCost: 5,
  description:
    "15-5 PH (UNS S15500) is a martensitic precipitation-hardening stainless steel very similar to 17-4 PH, but with a key difference: 15-5 PH is produced by vacuum induction melting followed by vacuum arc remelting (VIM-VAR), resulting in a cleaner microstructure with no delta ferrite. The absence of delta ferrite improves transverse toughness (Charpy impact) significantly compared to 17-4 PH, making 15-5 PH preferred for thick section, high-toughness applications such as aerospace landing gear, structural rings, and gun barrels where 17-4 PH's lower transverse toughness would be limiting.",
  keyCharacteristics: [
    'VIM-VAR melting eliminates delta ferrite — significantly better transverse toughness than 17-4 PH',
    'Same precipitation hardening mechanism as 17-4 PH (Cu precipitation)',
    'Higher fracture toughness in all orientations vs 17-4 PH',
    'Good corrosion resistance — equivalent to 17-4 PH',
    'Premium grade for thick-section aerospace and defense components',
    'Magnetic in all conditions (martensitic)',
  ],
  commonApplications: [
    'Aircraft structural rings and frames',
    'Landing gear components',
    'Aerospace fasteners requiring toughness + corrosion resistance',
    'Military aircraft structural fittings',
    'Valve bodies and actuators in corrosive service',
    'Precision castings (VIM-VAR quality)',
  ],
  industries: ['Aerospace', 'Defense', 'Oil & Gas'],
  beginnerNote:
    "15-5 PH is the tougher, cleaner version of 17-4 PH. Both are precipitation-hardening stainless steels with similar strength and corrosion resistance. The difference is in manufacturing: 15-5 PH is made with a cleaner process (vacuum arc remelting) that removes impurities and eliminates the tiny ferrite patches found in 17-4 PH. This makes 15-5 PH significantly tougher, especially in the cross-grain direction. It's used where 17-4 PH's toughness isn't quite enough, like landing gear parts.",
  expertNote:
    "The absence of delta ferrite in 15-5 PH (achieved by slightly lower Cr: 14-15.5% vs 17-4 PH's 15-17.5%) is a critical metallurgical advantage: delta ferrite is brittle and acts as crack initiation sites in 17-4 PH. CVN impact energy (short-transverse) for 15-5 PH H1025 is ~47 J vs ~20 J for 17-4 PH H1025 — a 2× toughness advantage. VIM-VAR melting also reduces non-metallic inclusion content by ~50% vs air-melt, further improving fatigue life and fracture toughness. Aging curves are essentially identical to 17-4 PH: H900 (480°C/1h), H925, H1025, H1075, H1150. AMS 5659 is the primary bar/billet specification; AMS 5826 covers sheet/strip. For applications requiring maximum ductility in aged condition: specify H1150-M (double-temper: 760°C/2h + 620°C/4h) per AMS 5659.",
  tempers: [
    {
      designation: 'Condition A (Annealed)',
      description: 'Solution annealed at 1040°C, air cooled — soft for machining, before precipitation hardening',
      tensileStrength: { min: 793, max: 896, typical: 896 },
      yieldStrength: { min: 517, max: 655, typical: 620 },
      elongation: { min: 16, max: 22, typical: 18 },
      hardness: { brinell: 241 },
    },
    {
      designation: 'H900',
      description: 'Aged at 480°C for 1 hour — maximum strength; absence of delta ferrite provides better toughness than 17-4 PH H900',
      tensileStrength: { min: 1276, max: 1345, typical: 1310 },
      yieldStrength: { min: 1138, max: 1207, typical: 1170 },
      elongation: { min: 10, max: 14, typical: 14 },
      hardness: { rockwellC: 38 },
    },
    {
      designation: 'H1025',
      description: 'Aged at 550°C for 4 hours — best balance of strength and toughness; preferred for structural aerospace applications',
      tensileStrength: { min: 931, max: 1034, typical: 1000 },
      yieldStrength: { min: 793, max: 862, typical: 862 },
      elongation: { min: 14, max: 18, typical: 16 },
      hardness: { rockwellC: 33 },
    },
    {
      designation: 'H1150',
      description: 'Aged at 620°C for 4 hours — maximum toughness and ductility condition',
      tensileStrength: { min: 758, max: 862, typical: 793 },
      yieldStrength: { min: 483, max: 558, typical: 517 },
      elongation: { min: 16, max: 22, typical: 18 },
      hardness: { brinell: 229 },
    },
  ],
  relatedMaterials: ['steel-174PH', 'steel-304ss', 'steel-316ss'],
};

export const phStainless: Material[] = [steel174PH, steel155PH];
