import { Material } from '../types';

export const al3003: Material = {
  id: 'al-3003',
  name: '3003 Aluminum',
  family: 'aluminum',
  subFamily: '3xxx Series',
  mechanical: {
    density: 2.73,
    tensileStrength: { min: 95, max: 200, typical: 150 },
    yieldStrength: { min: 35, max: 185, typical: 145 },
    elongation: { min: 4, max: 30, typical: 8 },
    hardness: { brinell: { min: 28, max: 55, typical: 40 } },
    elasticModulus: 69,
    shearModulus: 25,
    poissonRatio: 0.33,
    fatigueStrength: { min: 55, max: 70, typical: 62 },
  },
  thermal: {
    conductivity: 155,
    thermalExpansion: 23.2,
    specificHeat: 893,
    meltingRange: { min: 643, max: 654 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability with all methods. Recommended fillers: 1100 or 4043. Produces sound welds with no hot cracking tendency.',
  },
  standards: {
    astm: ['B209'],
    uns: 'A93003',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 1,
  description:
    '3003 is the most widely used aluminum alloy. It is essentially 1100 with the addition of approximately 1.2% manganese, which increases strength by about 20% while retaining excellent corrosion resistance and formability. It is non-heat-treatable and strengthened by cold working. The manganese addition provides solid solution strengthening and improves resistance to softening at elevated temperatures.',
  keyCharacteristics: [
    '~20% stronger than 1100 with similar corrosion resistance',
    'Excellent formability in all tempers',
    'Excellent weldability',
    'Non-heat-treatable — strengthened by cold work',
    'Good resistance to elevated temperatures',
    'Most widely used aluminum alloy',
  ],
  commonApplications: [
    'Cooking utensils and kitchen equipment',
    'Chemical equipment and storage tanks',
    'Pressure vessels',
    'General sheet metal work',
    'Roofing and siding',
    'HVAC ducting',
    'Heat exchangers',
    'Trailer panels',
  ],
  industries: ['HVAC', 'Food Processing', 'Construction', 'Chemical Processing'],
  beginnerNote:
    "3003 is the most popular aluminum alloy for a reason — it's a great all-around material. Think of it as a slightly stronger version of pure aluminum (1100) that's just as easy to form and weld. It's the go-to choice when you need good corrosion resistance and formability at a low cost.",
  expertNote:
    'Manganese content (1.0–1.5%) provides solid solution strengthening and raises the recrystallization temperature, making it superior to 1100 for elevated temperature service (up to ~150°C sustained). H14 is the most common temper — UTS 150 MPa, YS 145 MPa provides a practical strength/formability balance. Not suitable where UTS >200 MPa is required — step up to 5052 or 5083 for higher strength with similar corrosion behavior.',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — softest, most formable condition',
      tensileStrength: { min: 95, max: 120, typical: 110 },
      yieldStrength: { min: 35, max: 48, typical: 41 },
      elongation: { min: 25, max: 35, typical: 30 },
      hardness: { brinell: 28 },
    },
    {
      designation: 'H14',
      description: 'Strain hardened half-hard — good balance of strength and formability',
      tensileStrength: { min: 140, max: 165, typical: 150 },
      yieldStrength: { min: 130, max: 160, typical: 145 },
      elongation: { min: 6, max: 10, typical: 8 },
      hardness: { brinell: 40 },
    },
    {
      designation: 'H18',
      description: 'Strain hardened full-hard — maximum cold-work strength',
      tensileStrength: { min: 185, max: 215, typical: 200 },
      yieldStrength: { min: 170, max: 200, typical: 185 },
      elongation: { min: 3, max: 6, typical: 4 },
      hardness: { brinell: 55 },
    },
  ],
  relatedMaterials: ['al-1100', 'al-5052'],
};

export const aluminumSeries3xxx: Material[] = [al3003];
