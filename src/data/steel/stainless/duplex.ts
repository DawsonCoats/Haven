import { Material } from '../../types';

export const steel2205: Material = {
  id: 'steel-2205',
  name: '2205 Duplex Stainless Steel',
  family: 'steel',
  subFamily: 'Duplex Stainless',
  mechanical: {
    density: 7.82,
    tensileStrength: { min: 620, max: 860, typical: 655 },
    yieldStrength: { min: 448, max: 690, typical: 448 },
    elongation: { min: 22, max: 32, typical: 25 },
    hardness: {
      brinell: { min: 217, max: 270, typical: 217 },
    },
    elasticModulus: 200,
    shearModulus: 76,
    poissonRatio: 0.28,
    fatigueStrength: { min: 310, max: 400, typical: 345 },
  },
  thermal: {
    conductivity: 19.0,
    thermalExpansion: 13.7,
    specificHeat: 480,
    meltingRange: { min: 1420, max: 1465 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Good weldability but requires careful procedure to maintain the balanced duplex microstructure. Avoid heat input above 2.5 kJ/mm and interpass temperature above 150°C. Use 2209 duplex filler wire to ensure correct austenite/ferrite balance in weld metal. Post-weld solution anneal at 1020-1100°C with water quench recommended for critical corrosive service to restore balanced microstructure. Minimum 3 mm thickness for single-pass welds without backing gas.',
  },
  standards: {
    astm: ['A240', 'A276', 'A790', 'A928'],
    uns: 'S32205',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    '2205 (UNS S32205/S31803) is the most widely used duplex stainless steel, with a two-phase (austenite + ferrite) microstructure achieved through a balanced composition of 22% chromium, 5% nickel, and 3% molybdenum with nitrogen. This duplex microstructure provides approximately twice the yield strength of standard 304/316 austenitic stainless steels while maintaining comparable or superior corrosion resistance. The high chromium, molybdenum, and nitrogen content give a PREN (Pitting Resistance Equivalent Number) of approximately 34, compared to 25 for 316 and 19 for 304. It is the standard material for offshore oil and gas structures, desalination plants, and chemical process equipment exposed to chloride-containing environments.',
  keyCharacteristics: [
    'Duplex microstructure: ~50% austenite + ~50% ferrite',
    'Yield strength ~twice that of 304/316 austenitic grades',
    'PREN ≈ 34 — superior pitting resistance to 316 (PREN ≈ 25)',
    'Excellent stress corrosion cracking (SCC) resistance in chloride environments',
    'Good weldability with correct procedure and 2209 filler',
    'Magnetic (due to ferrite phase) — unlike austenitic grades',
  ],
  commonApplications: [
    'Offshore oil and gas production equipment',
    'Chemical process piping and vessels handling chlorides',
    'Desalination plant heat exchangers',
    'Pulp and paper digesters and bleach plants',
    'Seawater heat exchangers',
    'Pressure vessels for corrosive service',
    'Storage tanks for fertilizers and chemicals',
  ],
  industries: ['Oil & Gas', 'Chemical', 'Marine', 'Pulp & Paper', 'Desalination'],
  beginnerNote:
    "2205 duplex stainless is what you specify when 316 stainless isn't good enough for the environment. It has two types of microstructure mixed together (that's what \"duplex\" means), which gives it roughly twice the strength of standard stainless steels and much better resistance to pitting and chloride corrosion. It's the go-to material for offshore platforms, seawater systems, and chemical plants that handle corrosive chloride-containing media. It costs more than 316 but lasts much longer in aggressive environments.",
  expertNote:
    'The duplex microstructure (50/50 austenite-ferrite target at 1050°C anneal) is achieved by composition balance: 22% Cr, 5% Ni, 3% Mo, 0.16% N. PREN = %Cr + 3.3×%Mo + 16×%N = 22 + 3.3(3) + 16(0.16) ≈ 34. SCC resistance in chloride: Critical chloride concentration for SCC is >1000 ppm Cl⁻ at 100°C vs ~50 ppm for 316 — a 20× improvement. Corrosion allowance: in most offshore service, 2205 can be used with zero corrosion allowance where 316 requires 3-6 mm. Temperature limitations: avoid continuous service above 280°C (sigma phase embrittlement) and below -50°C (475°C embrittlement and ductile-brittle transition in ferrite). Weld heat input restriction (2.5 kJ/mm max) prevents sigma phase formation and ensures correct austenite-ferrite balance in HAZ. Impact toughness: CVN at -46°C ≈ 41 J in annealed condition; drops rapidly below -50°C. PRE(N) 34 may still be insufficient for strongly reducing chloride acids — specify super-duplex 2507 (PREN ≈ 43) for those environments.',
  tempers: [
    {
      designation: 'Annealed (Solution Treated)',
      description: 'Solution annealed at 1020-1100°C, water quenched — only delivery condition; maintains balanced duplex microstructure',
      tensileStrength: { min: 620, max: 760, typical: 655 },
      yieldStrength: { min: 448, max: 550, typical: 448 },
      elongation: { min: 22, max: 32, typical: 25 },
      hardness: { brinell: 217 },
    },
    {
      designation: 'Cold Worked (Light)',
      description: 'Light cold forming (5-15% reduction) — moderate strength increase; duplex structure provides good work-hardening response',
      tensileStrength: { min: 760, max: 860, typical: 800 },
      yieldStrength: { min: 621, max: 720, typical: 655 },
      elongation: { min: 16, max: 24, typical: 18 },
      hardness: { brinell: 245 },
    },
  ],
  relatedMaterials: ['steel-316Lss', 'steel-174PH', 'steel-316ss'],
};

export const duplexStainless: Material[] = [steel2205];
