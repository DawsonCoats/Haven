import { Material } from '../types';

export const al4032: Material = {
  id: 'al-4032',
  name: '4032 Aluminum',
  family: 'aluminum',
  subFamily: '4xxx Series',
  mechanical: {
    density: 2.68,
    tensileStrength: { min: 234, max: 380, typical: 380 },
    yieldStrength: { min: 193, max: 315, typical: 315 },
    elongation: { min: 9, max: 12, typical: 9 },
    hardness: { brinell: { min: 100, max: 120, typical: 120 } },
    elasticModulus: 79.3,
    shearModulus: 30,
    poissonRatio: 0.33,
    fatigueStrength: { min: 110, max: 138, typical: 110 },
  },
  thermal: {
    conductivity: 154,
    thermalExpansion: 19.4,
    specificHeat: 864,
    meltingRange: { min: 535, max: 571 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Good',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Weldable using TIG or MIG with 4047 filler — the high Si content reduces hot-cracking tendency. HAZ strength reduction is moderate. Not widely used as a structural weldment alloy; welding is primarily for repair.',
  },
  standards: {
    astm: ['B209'],
    ams: ['4145'],
    uns: 'A94032',
  },
  corrosionResistance: 'Good',
  relativeCost: 3,
  description:
    '4032 is a silicon-copper-magnesium-nickel aluminum alloy specifically formulated for piston and engine component applications. The high silicon content (11-13.5%) gives 4032 a very low coefficient of thermal expansion (19.4 µm/m·°C) compared to most aluminum alloys (~23 µm/m·°C), which is critical for pistons that must maintain precise clearances over wide temperature ranges. The nickel and copper additions provide good elevated-temperature strength and wear resistance. Silicon also reduces density below typical 2xxx and 6xxx alloys.',
  keyCharacteristics: [
    'Low CTE (19.4 µm/m·°C) — ~18% lower than 6061, ideal for pistons',
    'High Si (11-13.5%) + Ni for wear resistance and elevated-temperature strength',
    'Lowest density of commonly used heat-treatable aluminum alloys',
    'Good strength-to-weight at elevated temperatures (to ~200°C)',
    'Higher elastic modulus (79 GPa) than most aluminum alloys due to Si content',
    'Good machinability in T6 temper',
  ],
  commonApplications: [
    'Automotive pistons and cylinder components',
    'Engine components requiring dimensional stability at temperature',
    'Compressor pistons',
    'Aircraft engine pistons',
    'Industrial pump pistons',
    'High-temperature wear-resistant components',
  ],
  industries: ['Automotive', 'Aerospace', 'Industrial'],
  beginnerNote:
    "4032 is the piston aluminum. The high silicon content gives it two important properties: it expands less when heated (important so pistons don't seize in cylinders), and it's harder and more wear-resistant than typical aluminum. If you need an aluminum part that must stay dimensionally stable through temperature cycles and resist wear, 4032 is the specialty alloy to consider.",
  expertNote:
    'The low CTE (19.4 µm/m·°C, vs 23.6 for 6061) arises from the high Si content — silicon has a CTE of ~2.6 µm/m·°C, pulling the composite CTE down as volume fraction increases. Alloy composition: 11.0-13.5% Si, 0.50-1.30% Cu, 0.80-1.30% Mg, 0.50-1.30% Ni. Strengthening: solution treat at 504°C, quench, age at 171°C (T6). Elastic modulus of 79.3 GPa exceeds most wrought aluminum alloys due to the inherently stiff Si phase. High-Si alloys require PCD (polycrystalline diamond) tooling for extended production runs — carbide tools dull rapidly due to abrasive primary Si particles. Wear resistance rated approximately 2× that of 6061-T6 in sliding contact.',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — maximum formability for preliminary operations',
      tensileStrength: { min: 193, max: 241, typical: 207 },
      yieldStrength: { min: 138, max: 180, typical: 145 },
      elongation: { min: 10, max: 14, typical: 12 },
      hardness: { brinell: 65 },
    },
    {
      designation: 'T6',
      description: 'Solution heat treated and artificially aged at 171°C — standard piston temper, maximum practical strength',
      tensileStrength: { min: 360, max: 400, typical: 380 },
      yieldStrength: { min: 295, max: 330, typical: 315 },
      elongation: { min: 8, max: 12, typical: 9 },
      hardness: { brinell: 120 },
    },
  ],
  relatedMaterials: ['al-6061', 'al-2024'],
  availableForms: ['bar', 'rod', 'wire', 'forging', 'casting'],
  manufacturingProcesses: ['forging', 'casting', 'machining'],
};

export const aluminumSeries4xxx: Material[] = [al4032];
