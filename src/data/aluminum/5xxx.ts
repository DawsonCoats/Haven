import { Material } from '../types';

export const al5052: Material = {
  id: 'al-5052',
  name: '5052 Aluminum',
  family: 'aluminum',
  subFamily: '5xxx Series',
  mechanical: {
    density: 2.68,
    tensileStrength: { min: 170, max: 290, typical: 228 },
    yieldStrength: { min: 65, max: 255, typical: 193 },
    elongation: { min: 7, max: 25, typical: 12 },
    hardness: { brinell: { min: 47, max: 77, typical: 60 } },
    elasticModulus: 70.3,
    shearModulus: 25.9,
    poissonRatio: 0.33,
    fatigueStrength: { min: 117, max: 140, typical: 124 },
  },
  thermal: {
    conductivity: 138,
    thermalExpansion: 23.8,
    specificHeat: 880,
    meltingRange: { min: 607, max: 650 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability with all methods. Recommended filler: 5356. Welds have high strength and excellent corrosion resistance in marine environments.',
  },
  standards: {
    astm: ['B209'],
    ams: ['2652'],
    uns: 'A95052',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 2,
  description:
    '5052 is the highest strength non-heat-treatable aluminum alloy containing magnesium (2.2–2.8%) and chromium (0.15–0.35%). It offers excellent corrosion resistance in marine and industrial atmospheres, outstanding fatigue strength, and excellent formability. It is the preferred alloy for sheet metal work requiring good corrosion resistance combined with moderate-to-high strength.',
  keyCharacteristics: [
    'Excellent corrosion resistance, including marine environments',
    'Best fatigue strength of the common non-heat-treatable alloys',
    'Good formability, especially in O and H32 tempers',
    'Excellent weldability',
    'Non-heat-treatable — Mg solid solution strengthened',
    'Good response to anodizing',
  ],
  commonApplications: [
    'Marine components and boat hulls',
    'Fuel tanks and oil lines',
    'Pressure vessels',
    'Automotive body panels',
    'Sheet metal fabrications',
    'Electronic enclosures',
    'Signs and nameplates',
  ],
  industries: ['Marine', 'Automotive', 'Aerospace', 'Construction'],
  beginnerNote:
    "5052 is one of the best all-around aluminum alloys. It's stronger than 3003, still very easy to form and weld, and has excellent resistance to saltwater and corrosion. If you're building anything for marine use or need a strong sheet that bends well, 5052 H32 is usually the go-to choice.",
  expertNote:
    'H32 (strain hardened + stabilized) is the most common commercial temper — provides a practical balance of UTS 228 MPa, YS 193 MPa with 12% elongation. Fatigue limit ~117 MPa (5×10⁸ cycles) — superior to 6061-T6 in cyclic loading. Mg content >3% increases sensitization risk in corrosive environments — 5052 at 2.5% Mg stays below this threshold. Not suitable for >80°C sustained service in H tempers (loss of cold-work strengthening).',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — softest, maximum formability',
      tensileStrength: { min: 165, max: 195, typical: 172 },
      yieldStrength: { min: 62, max: 90, typical: 69 },
      elongation: { min: 19, max: 28, typical: 25 },
      hardness: { brinell: 47 },
    },
    {
      designation: 'H32',
      description: 'Strain hardened and stabilized, quarter hard — most common commercial temper',
      tensileStrength: { min: 214, max: 262, typical: 228 },
      yieldStrength: { min: 159, max: 221, typical: 193 },
      elongation: { min: 10, max: 15, typical: 12 },
      hardness: { brinell: 60 },
    },
    {
      designation: 'H34',
      description: 'Strain hardened and stabilized, half hard — higher strength',
      tensileStrength: { min: 228, max: 276, typical: 262 },
      yieldStrength: { min: 179, max: 241, typical: 214 },
      elongation: { min: 8, max: 12, typical: 10 },
      hardness: { brinell: 68 },
    },
    {
      designation: 'H38',
      description: 'Strain hardened and stabilized, full hard — maximum cold-work strength',
      tensileStrength: { min: 269, max: 310, typical: 290 },
      yieldStrength: { min: 228, max: 269, typical: 255 },
      elongation: { min: 5, max: 9, typical: 7 },
      hardness: { brinell: 77 },
    },
  ],
  relatedMaterials: ['al-3003', 'al-5083', 'al-6061'],
};

export const al5083: Material = {
  id: 'al-5083',
  name: '5083 Aluminum',
  family: 'aluminum',
  subFamily: '5xxx Series',
  mechanical: {
    density: 2.66,
    tensileStrength: { min: 270, max: 350, typical: 303 },
    yieldStrength: { min: 125, max: 250, typical: 214 },
    elongation: { min: 10, max: 16, typical: 12 },
    hardness: { brinell: { min: 65, max: 90, typical: 75 } },
    elasticModulus: 70.3,
    shearModulus: 26.4,
    poissonRatio: 0.33,
    fatigueStrength: { min: 148, max: 165, typical: 150 },
  },
  thermal: {
    conductivity: 117,
    thermalExpansion: 23.8,
    specificHeat: 900,
    meltingRange: { min: 574, max: 638 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability with all methods. Recommended filler: 5183 or 5356. Weld joints retain high strength and excellent corrosion resistance. Preferred filler 5183 matches base metal composition for marine service.',
  },
  standards: {
    astm: ['B209'],
    ams: ['4056'],
    uns: 'A95083',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 2,
  description:
    '5083 is a high-strength non-heat-treatable aluminum-magnesium alloy (Mg 4.0–4.9%) offering the highest strength of the 5xxx series alloys not artificially hardened. It exhibits exceptional performance in extreme environments including marine, offshore, and cryogenic applications. Its strength actually increases at cryogenic temperatures, making it valuable for LNG and liquid oxygen vessels.',
  keyCharacteristics: [
    'Highest strength of common non-heat-treatable aluminum alloys',
    'Excellent corrosion resistance in seawater and industrial atmospheres',
    'Strength increases at cryogenic temperatures',
    'Excellent weldability with high joint efficiency',
    'Good toughness at low temperatures',
    'H116 and H321 tempers certified for marine service',
  ],
  commonApplications: [
    'Marine hulls and ship structures',
    'Cryogenic vessels and LNG tanks',
    'Bridges and structural applications',
    'Offshore platforms and structures',
    'Rail car bodies',
    'Military vehicles and armor',
    'Pressure vessels',
  ],
  industries: ['Marine', 'Defense', 'Energy', 'Construction'],
  beginnerNote:
    "5083 is the heavy-duty marine aluminum. If you're building a boat hull, offshore platform, or anything that needs to be strong and resist seawater corrosion, this is the alloy. It's not as easy to form as 5052, but it's significantly stronger — a trade-off worth making for serious structural marine work.",
  expertNote:
    'H116 and H321 tempers are specifically qualified per ASTM B928 for marine applications (sensitization-resistant). Mg content (4.0–4.9%) is above the ~3% threshold where sensitization can occur — H116/H321 temper control (restricted cold work) limits this risk. Cryogenic tensile strength actually increases vs room temperature (UTS ~330 MPa at -196°C). Not recommended for >65°C sustained service in H tempers. Fracture toughness K_IC ~25–30 MPa√m in H116. Weld efficiency typically 90% with 5183 filler.',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — softest, maximum formability',
      tensileStrength: { min: 270, max: 310, typical: 290 },
      yieldStrength: { min: 110, max: 150, typical: 125 },
      elongation: { min: 14, max: 20, typical: 16 },
      hardness: { brinell: 65 },
    },
    {
      designation: 'H116',
      description:
        'Strain hardened and stabilized — certified for marine service (ASTM B928)',
      tensileStrength: { min: 290, max: 340, typical: 303 },
      yieldStrength: { min: 200, max: 240, typical: 214 },
      elongation: { min: 10, max: 14, typical: 12 },
      hardness: { brinell: 75 },
    },
    {
      designation: 'H321',
      description:
        'Thermomechanically treated — alternative marine service certification temper',
      tensileStrength: { min: 290, max: 340, typical: 303 },
      yieldStrength: { min: 200, max: 240, typical: 214 },
      elongation: { min: 10, max: 14, typical: 12 },
      hardness: { brinell: 75 },
    },
  ],
  relatedMaterials: ['al-5052', 'al-5754', 'al-6061'],
};

export const al5754: Material = {
  id: 'al-5754',
  name: '5754 Aluminum',
  family: 'aluminum',
  subFamily: '5xxx Series',
  mechanical: {
    density: 2.67,
    tensileStrength: { min: 190, max: 270, typical: 220 },
    yieldStrength: { min: 80, max: 220, typical: 170 },
    elongation: { min: 10, max: 25, typical: 14 },
    hardness: { brinell: { min: 50, max: 72, typical: 58 } },
    elasticModulus: 70,
    shearModulus: 26,
    poissonRatio: 0.33,
    fatigueStrength: { min: 110, max: 130, typical: 117 },
  },
  thermal: {
    conductivity: 147,
    thermalExpansion: 23.7,
    specificHeat: 896,
    meltingRange: { min: 600, max: 650 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability with all methods. Recommended filler: 5356 or 5754. Commonly used in automotive tailor-welded blanks and laser welding applications.',
  },
  standards: {
    iso: ['5182'],
    din: ['EN AW-5754'],
    uns: 'A95754',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 2,
  description:
    '5754 is an aluminum-magnesium alloy (Mg 2.6–3.6%) that represents the European automotive industry standard for body-in-white aluminum sheet. It offers an excellent combination of moderate strength, outstanding formability, excellent corrosion resistance, and good weldability. The Mg content is deliberately kept below the sensitization threshold for long-term corrosion resistance.',
  keyCharacteristics: [
    'Outstanding formability — preferred for automotive stamping',
    'Excellent corrosion resistance including seawater',
    'Good weldability and laser weldability',
    'Non-heat-treatable — Mg solid solution strengthened',
    'Mg content below sensitization threshold',
    'European automotive standard alloy (EN AW-5754)',
  ],
  commonApplications: [
    'Automotive body panels and floor plates',
    'Floor tread plates',
    'Marine deck panels',
    'Rail car interior panels',
    'Scaffolding and platforms',
    'Furniture and decorative applications',
  ],
  industries: ['Automotive', 'Marine', 'Transportation'],
  beginnerNote:
    "5754 is the automotive body aluminum, especially popular in Europe. It's slightly softer and more formable than 5083, making it easier to press into complex body panel shapes. It has excellent corrosion resistance and welds well. Think of it as a 'medium-strength, maximum-formability' marine-grade aluminum.",
  expertNote:
    'Preferred over 5052 in European automotive applications for slightly better Mg homogeneity and surface quality per EN 485 standards. H22 (quarter-hard) is the standard automotive delivery temper — provides sufficient formability for outer panel stamping. Springback is predictable and well-characterized. Natural aging after forming is minimal (<5 MPa YS increase), which simplifies forming simulations. Compliant with EU automotive recycling directives — high secondary aluminum compatibility. r-values (Lankford coefficients) typically 0.6–0.8, limiting deep-draw capability vs steel.',
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — maximum formability for deep drawing',
      tensileStrength: { min: 190, max: 240, typical: 210 },
      yieldStrength: { min: 80, max: 120, typical: 100 },
      elongation: { min: 20, max: 28, typical: 24 },
      hardness: { brinell: 50 },
    },
    {
      designation: 'H22',
      description: 'Strain hardened and stabilized, quarter hard — standard automotive temper',
      tensileStrength: { min: 210, max: 260, typical: 220 },
      yieldStrength: { min: 150, max: 195, typical: 170 },
      elongation: { min: 10, max: 18, typical: 14 },
      hardness: { brinell: 58 },
    },
    {
      designation: 'H24',
      description: 'Strain hardened and stabilized, half hard — higher strength panels',
      tensileStrength: { min: 240, max: 280, typical: 250 },
      yieldStrength: { min: 180, max: 230, typical: 200 },
      elongation: { min: 8, max: 13, typical: 10 },
      hardness: { brinell: 66 },
    },
  ],
  relatedMaterials: ['al-5052', 'al-5083'],
};

export const al5086: Material = {
  id: 'al-5086',
  name: '5086 Aluminum',
  family: 'aluminum',
  subFamily: '5xxx Series',
  mechanical: {
    density: 2.66,
    tensileStrength: { min: 240, max: 317, typical: 290 },
    yieldStrength: { min: 96, max: 255, typical: 207 },
    elongation: { min: 10, max: 22, typical: 14 },
    hardness: { brinell: { min: 60, max: 85, typical: 77 } },
    elasticModulus: 70.3,
    shearModulus: 26.4,
    poissonRatio: 0.33,
    fatigueStrength: { min: 138, max: 165, typical: 145 },
  },
  thermal: {
    conductivity: 125,
    thermalExpansion: 23.8,
    specificHeat: 900,
    meltingRange: { min: 585, max: 641 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability — use 5356 or 5556 filler. Non-heat-treatable so welded strength is comparable to base metal. One of the preferred alloys for pressure vessel welding due to excellent retained weld ductility. Certifiable for ASME pressure vessel code.',
  },
  standards: {
    astm: ['B209', 'B928'],
    uns: 'A95086',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 2,
  description:
    '5086 is a high-magnesium non-heat-treatable aluminum alloy providing the best combination of strength, corrosion resistance, and weldability in the 5xxx series for marine and pressure vessel applications. With 3.5-4.5% magnesium, it achieves higher strength than 5052 while maintaining superior seawater corrosion resistance. It is resistant to stress corrosion cracking in marine atmospheres and is approved for welded pressure vessels under ASME. The H116 temper is specifically developed for marine applications with controlled grain structure and corrosion resistance.',
  keyCharacteristics: [
    'Higher strength than 5052 with equivalent corrosion resistance in marine environments',
    '3.5-4.5% Mg — solid-solution strengthened, non-heat-treatable',
    'Excellent seawater and saltwater corrosion resistance (superior to 5052)',
    'H116 temper specifically designed for marine structural applications',
    'Good weldability — use 5356 or 5556 filler',
    'Approved for ASME pressure vessel applications',
  ],
  commonApplications: [
    'Marine hulls and boat structures (primary structural alloy)',
    'Offshore platforms and equipment',
    'Pressure vessels and tanks',
    'Chemical plant equipment',
    'Cryogenic vessels',
    'Automotive fuel tanks',
  ],
  industries: ['Marine', 'Chemical', 'Cryogenic', 'Automotive'],
  beginnerNote:
    "5086 is the step up from 5052 for serious marine applications. Both resist saltwater corrosion very well, but 5086 is stronger and better suited for structural boat hulls and offshore equipment. If you're building something that lives in or near the ocean and needs structural strength, 5086 is the marine aluminum to use. It can't be hardened by heat treatment — it gets its strength from the magnesium content and cold working.",
  expertNote:
    "ASTM B928 governs 5086 sheet specifically for marine applications, with additional requirements for grain structure and inter-granular corrosion resistance testing beyond B209. H116 temper requires specific deformation and final annealing sequence to produce a microstructure resistant to exfoliation corrosion. Mg content (3.5-4.5%) is below the ~4.5-5% threshold where beta-phase (Mg2Al3) precipitation at grain boundaries becomes sensitization risk in the H3x tempers. This makes 5086 more SCC-resistant in marine service than 5456 or 5083. PREN equivalent concepts do not apply to aluminum, but 5086's resistance to Cl- pitting is excellent due to Mg-rich passive film. For pressure vessel applications, ASME Section II accepts 5086-H32 and H116.",
  tempers: [
    {
      designation: 'O',
      description: 'Annealed — maximum formability, lowest strength',
      tensileStrength: { min: 240, max: 290, typical: 260 },
      yieldStrength: { min: 96, max: 145, typical: 117 },
      elongation: { min: 18, max: 25, typical: 22 },
      hardness: { brinell: 58 },
    },
    {
      designation: 'H32',
      description: 'Strain hardened (1/4 hard) and stabilized — good balance of strength and formability',
      tensileStrength: { min: 275, max: 345, typical: 290 },
      yieldStrength: { min: 193, max: 255, typical: 207 },
      elongation: { min: 10, max: 16, typical: 12 },
      hardness: { brinell: 77 },
    },
    {
      designation: 'H34',
      description: 'Strain hardened (1/2 hard) and stabilized — higher strength for structural applications',
      tensileStrength: { min: 303, max: 372, typical: 317 },
      yieldStrength: { min: 221, max: 269, typical: 241 },
      elongation: { min: 8, max: 14, typical: 10 },
      hardness: { brinell: 85 },
    },
    {
      designation: 'H116',
      description: 'Strain hardened and thermally stabilized specifically for marine service — ASTM B928 requirements for exfoliation corrosion resistance',
      tensileStrength: { min: 275, max: 345, typical: 290 },
      yieldStrength: { min: 193, max: 255, typical: 207 },
      elongation: { min: 10, max: 16, typical: 12 },
      hardness: { brinell: 77 },
    },
  ],
  relatedMaterials: ['al-5052', 'al-5083', 'al-5754'],
};

export const aluminumSeries5xxx: Material[] = [al5052, al5083, al5754, al5086];
