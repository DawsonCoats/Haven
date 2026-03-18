import { Material } from '../types';

export const al1100: Material = {
  id: 'al-1100',
  name: '1100 Aluminum',
  family: 'aluminum',
  subFamily: '1xxx Series',
  mechanical: {
    density: 2.71,
    tensileStrength: { min: 75, max: 165, typical: 110 },
    yieldStrength: { min: 25, max: 145, typical: 97 },
    elongation: { min: 4, max: 35, typical: 20 },
    hardness: { brinell: { min: 23, max: 35, typical: 28 } },
    elasticModulus: 69,
    shearModulus: 26,
    poissonRatio: 0.33,
    fatigueStrength: { min: 35, max: 50, typical: 45 },
  },
  thermal: {
    conductivity: 222,
    thermalExpansion: 23.6,
    specificHeat: 904,
    meltingRange: { min: 643, max: 657 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes: 'Excellent weldability with all methods. Filler 1100 or 4043 recommended.',
  },
  standards: {
    astm: ['B209', 'B211', 'B221'],
    uns: 'A91100',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 1,
  description:
    '1100 is a commercially pure aluminum (99%+ Al) known for its exceptional corrosion resistance, high thermal and electrical conductivity, and excellent formability. It is non-heat-treatable and strengthened primarily by cold working.',
  keyCharacteristics: [
    '99%+ pure aluminum',
    'Highest corrosion resistance in aluminum family',
    'Excellent thermal and electrical conductivity',
    'Very soft and easily formed',
    'Non-heat-treatable',
  ],
  commonApplications: [
    'Chemical equipment and storage tanks',
    'Food processing equipment',
    'Heat exchangers',
    'Decorative trim',
    'Electrical conductors',
    'Reflectors',
  ],
  industries: ['Chemical Processing', 'Food & Beverage', 'HVAC', 'Electrical'],
  beginnerNote:
    "1100 is the \"pure\" aluminum — think of it as aluminum in its simplest form. It's very soft and easy to bend, which makes it great for forming into complex shapes. The trade-off is it's not very strong, so don't use it where structural strength matters.",
  expertNote:
    'H14 temper offers a practical balance of formability and strength (UTS ~125 MPa). Electrical conductivity ~59% IACS. Avoid in applications requiring strength >130 MPa — consider 3003 for moderate strength with similar corrosion resistance.',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — softest, most formable condition',
      tensileStrength: { min: 75, max: 105, typical: 90 },
      yieldStrength: { min: 25, max: 45, typical: 34 },
      elongation: { min: 25, max: 45, typical: 35 },
      hardness: { brinell: 23 },
    },
    {
      designation: 'H14',
      description: 'Strain hardened half-hard — good balance of strength and formability',
      tensileStrength: { min: 110, max: 140, typical: 125 },
      yieldStrength: { min: 97, max: 117, typical: 103 },
      elongation: { min: 8, max: 14, typical: 9 },
      hardness: { brinell: 28 },
    },
    {
      designation: 'H18',
      description: 'Strain hardened full-hard — maximum strength for non-heat-treatable',
      tensileStrength: { min: 140, max: 165, typical: 152 },
      yieldStrength: { min: 124, max: 145, typical: 138 },
      elongation: { min: 4, max: 8, typical: 5 },
      hardness: { brinell: 35 },
    },
  ],
  relatedMaterials: ['al-3003', 'al-5052'],

  availableForms: ['sheet', 'plate', 'bar', 'rod', 'wire', 'tube', 'strip', 'extrusion'],
  manufacturingProcesses: ['forming', 'rolling', 'extrusion', 'machining', 'welding'],
};

export const aluminumSeries1xxx: Material[] = [al1100];
