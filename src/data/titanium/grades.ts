import { Material } from '../types';

export const tiGrade2: Material = {
  id: 'ti-gr2',
  name: 'cp-Ti Grade 2',
  family: 'titanium',
  subFamily: 'cp-Ti',
  mechanical: {
    density: 4.51,
    tensileStrength: { min: 345, max: 448, typical: 345 },
    yieldStrength: { min: 276, max: 379, typical: 276 },
    elongation: { min: 20, max: 30, typical: 23 },
    hardness: { brinell: { min: 120, max: 160, typical: 135 } },
    elasticModulus: 103,
    shearModulus: 40,
    poissonRatio: 0.37,
    fatigueStrength: { min: 172, max: 207, typical: 186 },
  },
  thermal: {
    conductivity: 16.4,
    thermalExpansion: 8.6,
    specificHeat: 520,
    meltingRange: { min: 1665, max: 1670 },
  },
  processability: {
    weldability: 'Excellent',
    machinability: 'Fair',
    formability: 'Excellent',
    heatTreatable: false,
    weldNotes:
      'Excellent weldability — must be performed under inert gas shield (argon or helium) to prevent embrittlement from oxygen, nitrogen, and hydrogen absorption. Back-purge required for pipe welding. No post-weld heat treatment required for most applications. TIG welding is standard.',
  },
  standards: {
    astm: ['B265', 'B337', 'B338'],
    uns: 'R50400',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    'cp-Ti (commercially pure titanium) Grade 2 is the most widely used commercially pure titanium grade. With no intentional alloying additions, it achieves moderate strength through controlled interstitial content (oxygen is the primary strengthener in cp-Ti, with Grade 2 having 0.25% O max). It provides the best corrosion resistance of any commercially available titanium, excellent formability, and outstanding weldability. It is the standard titanium grade for chemical process equipment, heat exchangers, and medical implants where corrosion resistance and biocompatibility are primary requirements.',
  keyCharacteristics: [
    'Most widely used cp-Ti grade — best balance of strength, formability, and corrosion resistance',
    'Excellent corrosion resistance in oxidizing acids, seawater, and biological environments',
    'Density 4.51 g/cm³ — 43% less dense than steel, 67% more dense than aluminum',
    'Biocompatible — approved for implantable medical devices (ASTM F67)',
    'No heat treatment required or applicable for strengthening',
    'Excellent weldability under inert gas — no post-weld heat treatment needed',
  ],
  commonApplications: [
    'Chemical process heat exchangers and piping',
    'Desalination plant components',
    'Medical implants (bone plates, screws)',
    'Dental implant components',
    'Seawater cooling systems',
    'Pharmaceutical process equipment',
    'Architectural cladding (Guggenheim Museum Bilbao)',
  ],
  industries: ['Chemical', 'Medical', 'Marine', 'Pharmaceutical', 'Architecture'],
  beginnerNote:
    "Grade 2 titanium is the \"standard\" commercially pure titanium — what most people mean when they just say \"titanium.\" It has no significant alloying additions, so it's not as strong as Ti-6Al-4V (Grade 5), but it's much easier to form, weld, and shape. Its greatest advantages are outstanding corrosion resistance (it resists almost everything including seawater, body fluids, and most acids) and excellent biocompatibility for medical implants. The main barrier to wider use is cost — titanium is significantly more expensive than steel or aluminum.",
  expertNote:
    'In cp-Ti grades, oxygen is the primary strengthener: Grade 1 (0.18% O, 235 MPa UTS), Grade 2 (0.25% O, 345 MPa UTS), Grade 3 (0.35% O, 448 MPa UTS), Grade 4 (0.40% O, 550 MPa UTS). The TiO2 passive layer (5-10 nm thick) forms instantaneously on fresh surfaces and is thermodynamically stable in environments from pH 3 to 12 and from cryogenic temperatures to ~315°C continuous service. Crevice corrosion resistance is excellent in seawater at up to 120°C — compared to 304 stainless which crevice-corrodes above 60°C in seawater. Hydrogen embrittlement: titanium absorbs hydrogen above ~70°C when cathodically polarized; avoid coupling to active metals in aqueous solutions. Modulus (103 GPa) is approximately half that of steel — deflection under load must be accounted for in structural design. For medical bone implants, the modulus mismatch (bone: ~20 GPa, Ti: 103 GPa) causes stress shielding — porous titanium structures or Ti-6Al-4V ELI are preferred for load-bearing implants.',
  tempers: [
    {
      designation: 'Annealed',
      description:
        'Mill annealed at 700-790°C — standard delivery condition for sheet, plate, and tube',
      tensileStrength: { min: 345, max: 415, typical: 345 },
      yieldStrength: { min: 276, max: 345, typical: 276 },
      elongation: { min: 20, max: 30, typical: 23 },
      hardness: { brinell: 135 },
    },
    {
      designation: 'Cold Worked (1/4 Hard)',
      description: 'Light cold reduction — moderate strength increase, reduced formability',
      tensileStrength: { min: 380, max: 450, typical: 414 },
      yieldStrength: { min: 310, max: 380, typical: 345 },
      elongation: { min: 14, max: 20, typical: 15 },
      hardness: { brinell: 155 },
    },
  ],
  relatedMaterials: ['ti-gr4', 'ti-6al4v'],
};

export const tiGrade4: Material = {
  id: 'ti-gr4',
  name: 'cp-Ti Grade 4',
  family: 'titanium',
  subFamily: 'cp-Ti',
  mechanical: {
    density: 4.51,
    tensileStrength: { min: 550, max: 690, typical: 550 },
    yieldStrength: { min: 483, max: 621, typical: 483 },
    elongation: { min: 15, max: 22, typical: 18 },
    hardness: { brinell: { min: 180, max: 220, typical: 195 } },
    elasticModulus: 104,
    shearModulus: 40,
    poissonRatio: 0.37,
    fatigueStrength: { min: 241, max: 296, typical: 262 },
  },
  thermal: {
    conductivity: 16.4,
    thermalExpansion: 8.6,
    specificHeat: 520,
    meltingRange: { min: 1665, max: 1670 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: false,
    weldNotes:
      'Good weldability under strict inert atmosphere protection. Higher strength than Grade 2 means weld HAZ properties remain adequate. Full inert gas shielding (argon trailing shield) required. TIG preferred; back-purge required for pipe.',
  },
  standards: {
    astm: ['B265', 'B337'],
    uns: 'R50700',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    'cp-Ti Grade 4 is the highest-strength commercially pure titanium grade, with 0.40% oxygen maximum — the highest interstitial content of any cp-Ti grade. This gives Grade 4 significantly higher strength than Grades 1-3 while retaining the excellent corrosion resistance and biocompatibility of commercially pure titanium. It is used in applications requiring higher strength than Grade 2 provides but where the full alloy strength of Ti-6Al-4V is not needed, or where the better formability and weldability of cp-Ti vs Ti-6Al-4V is preferred. Major applications include surgical implants (ASTM F67) and aerospace fasteners.',
  keyCharacteristics: [
    'Highest strength cp-Ti grade — 0.40% O content provides solid-solution strengthening',
    'Better strength than Grades 1-3 while retaining cp-Ti corrosion resistance and biocompatibility',
    'ASTM F67 Grade 4 — approved for implantable surgical devices',
    'Density same as other cp-Ti grades (4.51 g/cm³)',
    'Less formable than Grade 2 due to higher strength',
    'Good weldability under strict inert atmosphere protection',
  ],
  commonApplications: [
    'Orthopedic implants requiring higher strength than Grade 2',
    'Dental root-form implants (FDA/CE approved)',
    'Aerospace fasteners requiring corrosion resistance',
    'Marine hardware and fittings',
    'High-strength chemical process components',
  ],
  industries: ['Medical', 'Aerospace', 'Chemical', 'Marine'],
  beginnerNote:
    "Grade 4 is the strongest commercially pure titanium — it's like Grade 2 turned up to maximum. The extra strength comes from more oxygen in the alloy (which acts as a strengthener in titanium). It's used when Grade 2 isn't quite strong enough but you still want the simplicity and biocompatibility of pure titanium rather than going to the Ti-6Al-4V alloy. Dental implants are a common application.",
  expertNote:
    'Grade 4 (0.40% O, 0.05% N, 0.015% H, 0.10% C, 0.50% Fe max per ASTM B265) sits between cp-Ti and Ti-3Al-2.5V in terms of strength. For dental implants, Grade 4 is preferred over Grade 2 because the higher strength allows smaller implant diameters (enabling implants in narrow ridges). However, the 2014 advent of Ti-6Al-4V ELI (Grade 23) anodized implants and Grade 4 Enhanced Fatigue titanium (EF-Ti, nanostructured by ECAP) has shifted some implant specifications. Fatigue strength: 262 MPa (10^7 cycles, R=-1) for standard Grade 4 bar; nanostructured Grade 4 achieves ~350 MPa. Thermal processing: stress relief at 480-600°C/2-4h without loss of properties (no precipitation hardening possible). Springback in cold forming: higher than Grade 2 — compensate in die design.',
  tempers: [
    {
      designation: 'Annealed',
      description: 'Mill annealed — standard delivery condition',
      tensileStrength: { min: 550, max: 620, typical: 550 },
      yieldStrength: { min: 483, max: 552, typical: 483 },
      elongation: { min: 15, max: 22, typical: 18 },
      hardness: { brinell: 195 },
    },
  ],
  relatedMaterials: ['ti-gr2', 'ti-6al4v', 'ti-3al2.5v'],
};

export const ti3Al2V: Material = {
  id: 'ti-3al2.5v',
  name: 'Ti-3Al-2.5V',
  family: 'titanium',
  subFamily: 'Alpha-Beta',
  mechanical: {
    density: 4.48,
    tensileStrength: { min: 620, max: 793, typical: 690 },
    yieldStrength: { min: 483, max: 690, typical: 586 },
    elongation: { min: 14, max: 20, typical: 16 },
    hardness: { brinell: { min: 170, max: 215, typical: 190 } },
    elasticModulus: 105,
    shearModulus: 41,
    poissonRatio: 0.37,
    fatigueStrength: { min: 276, max: 345, typical: 310 },
  },
  thermal: {
    conductivity: 7.5,
    thermalExpansion: 9.2,
    specificHeat: 528,
    meltingRange: { min: 1620, max: 1660 },
  },
  processability: {
    weldability: 'Good',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: true,
    weldNotes:
      'Good weldability under inert atmosphere. Lower beta content than Ti-6Al-4V gives better weld ductility. Full argon or helium shielding required. Back-purge required for tube welding. No post-weld heat treatment typically required for thin-wall tube applications.',
  },
  standards: {
    astm: ['B338'],
    ams: ['4943', '4944'],
    uns: 'R56320',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    'Ti-3Al-2.5V is often called "half 6-4" because its aluminum (3%) and vanadium (2.5%) content is approximately half that of Ti-6Al-4V. This positions it between cp-Ti Grade 4 and Ti-6Al-4V in terms of strength, while providing superior formability and weldability compared to Ti-6Al-4V. It is the standard titanium alloy for seamless hydraulic tubing in aircraft (Boeing and Airbus), where its superior tube-forming characteristics, excellent weld quality, and adequate strength (superior to cp-Ti) make it ideal for aircraft hydraulic, fuel, and pneumatic line systems. Nearly all commercial aircraft hydraulic tubing is Ti-3Al-2.5V.',
  keyCharacteristics: [
    'Standard alloy for aircraft hydraulic tubing — used in virtually all commercial aircraft',
    'Better formability than Ti-6Al-4V — ideal for drawn tube production',
    'Alpha-beta alloy: moderate strength with good weldability',
    '"Half 6-4" — 3% Al + 2.5% V vs Ti-6Al-4V\'s 6% Al + 4% V',
    'Excellent corrosion resistance — equivalent to cp-Ti in most environments',
    'Good fatigue resistance for cyclic hydraulic pressure service',
  ],
  commonApplications: [
    'Aircraft hydraulic tubing (Boeing 7xx, Airbus Axx series — standard spec)',
    'Aircraft fuel and pneumatic line systems',
    'Hydraulic system fittings and manifolds',
    'High-pressure hydraulic components',
    'Bicycle frames (premium grade)',
    'Medical implant components',
  ],
  industries: ['Aerospace', 'Medical', 'Sports'],
  beginnerNote:
    "Ti-3Al-2.5V is the \"middle ground\" titanium — stronger than pure titanium but easier to work with than the full-strength Ti-6Al-4V. Aircraft designers love it for hydraulic tubes because you can draw it into thin tubes and bend it without cracking, while it's still strong enough for hydraulic pressure. The next time you fly on a commercial aircraft, almost all the hydraulic plumbing is made from this alloy.",
  expertNote:
    'Ti-3Al-2.5V (ASTM Grade 9) is an alpha-beta alloy with a minimal beta phase (V content just above beta transus). Primary commercial form is seamless tubing per AMS 4944 (annealed) and 4943 (cold-worked, stress-relieved: CWSR). CWSR condition (20-30% cold draw + partial anneal 480-540°C) achieves 793 MPa UTS vs 620 MPa for annealed. Tube bending: minimum bend radius ~3× OD (vs ~5× OD for Ti-6Al-4V) due to superior formability. Hydraulic system pressure: 3000-5000 psi (21-35 MPa) typical aircraft hydraulic pressure — Ti-3Al-2.5V tubing provides ~50% weight saving vs stainless 304 at same pressure rating. FAA approval: FAA AC 25.981 accepts Ti-3Al-2.5V for fuel systems with fire tests per AS 1055.',
  tempers: [
    {
      designation: 'Annealed',
      description: 'Mill annealed at 700-790°C — standard for tube and sheet',
      tensileStrength: { min: 620, max: 724, typical: 690 },
      yieldStrength: { min: 483, max: 586, typical: 586 },
      elongation: { min: 14, max: 22, typical: 16 },
      hardness: { brinell: 175 },
    },
    {
      designation: 'Cold Worked, Stress Relieved (CWSR)',
      description:
        '20-30% cold drawn, stress-relieved at 480-540°C — standard for aircraft hydraulic tubing (AMS 4943)',
      tensileStrength: { min: 758, max: 827, typical: 793 },
      yieldStrength: { min: 655, max: 724, typical: 690 },
      elongation: { min: 12, max: 16, typical: 15 },
      hardness: { brinell: 215 },
    },
  ],
  relatedMaterials: ['ti-6al4v', 'ti-gr4', 'ti-6al4v-eli'],
};

export const ti6Al4V: Material = {
  id: 'ti-6al4v',
  name: 'Ti-6Al-4V (Grade 5)',
  family: 'titanium',
  subFamily: 'Alpha-Beta',
  mechanical: {
    density: 4.43,
    tensileStrength: { min: 896, max: 1000, typical: 950 },
    yieldStrength: { min: 827, max: 940, typical: 880 },
    elongation: { min: 10, max: 16, typical: 14 },
    hardness: { brinell: { min: 302, max: 363, typical: 334 } },
    elasticModulus: 113.8,
    shearModulus: 44,
    poissonRatio: 0.342,
    fatigueStrength: { min: 510, max: 620, typical: 550 },
  },
  thermal: {
    conductivity: 6.7,
    thermalExpansion: 8.6,
    specificHeat: 560,
    meltingRange: { min: 1604, max: 1660 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Fair',
    formability: 'Fair',
    heatTreatable: true,
    weldNotes:
      'Fair weldability — achievable with strict inert atmosphere control. Full argon shielding with trailing shield and back-purge required to prevent oxygen/nitrogen embrittlement. Post-weld stress relief at 540-600°C/2-4h recommended for thick sections. Alpha case (oxygen-enriched brittle surface layer) forms above 600°C in air — must be removed from all machined surfaces.',
  },
  standards: {
    astm: ['B265', 'B348'],
    ams: ['4928', '4911', '4935', '6931'],
    uns: 'R56400',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 4,
  description:
    'Ti-6Al-4V (Grade 5, UNS R56400) is the most widely used titanium alloy, accounting for more than 50% of all titanium alloy production. Its composition of 6% aluminum and 4% vanadium produces an alpha-beta microstructure that provides an outstanding combination of high specific strength, corrosion resistance, biocompatibility, and moderate formability. At 950 MPa UTS with a density of 4.43 g/cm³, it achieves a specific strength (~214 MPa·cm³/g) that exceeds most steels and aluminum alloys. It is the standard aerospace structural titanium alloy and the benchmark against which all other titanium alloys are measured.',
  keyCharacteristics: [
    '>50% of all titanium alloy production — the most important titanium alloy',
    'Specific strength (~214 MPa·cm³/g) exceeds most steels and all aluminum alloys',
    'Alpha-beta microstructure: 6% Al stabilizes alpha, 4% V stabilizes beta',
    'Excellent corrosion resistance in virtually all non-reducing environments',
    'Biocompatible — ASTM F1472 for non-implant, F136 (ELI grade) for implants',
    'Low thermal conductivity (6.7 W/m·K) — highest specific heat input required in machining',
  ],
  commonApplications: [
    'Aircraft structural frames, spars, and bulkheads',
    'Jet engine fan blades, compressor blades and discs',
    'Aerospace fasteners and springs',
    'Biomedical implants (orthopedic, ELI grade)',
    'Sports equipment (bicycle frames, golf clubs)',
    'Pressure vessels for aerospace and diving',
    'Racing automotive components',
  ],
  industries: ['Aerospace', 'Medical', 'Automotive', 'Sports', 'Defense'],
  beginnerNote:
    "Ti-6Al-4V is the \"6061 of titanium\" — it's the standard grade, the most common, and what most people mean when they say \"titanium alloy\" in engineering. It's incredibly strong for its weight — stronger per gram than most steels — and almost immune to corrosion. The main reasons engineers don't use it everywhere are cost (2-5× more than stainless steel by weight) and difficulty machining (it's tough on cutting tools and needs slow speeds). For aerospace, sports equipment, and medical implants, the weight savings justify the expense.",
  expertNote:
    'Microstructure and properties depend critically on processing: mill-annealed (equiaxed alpha + intergranular beta): UTS ~950 MPa, KIc ~65 MPa√m, best toughness; STA (solution treated + aged): UTS ~1100 MPa, KIc ~55 MPa√m. Beta transus: 995±10°C. Beta annealed (above transus): Widmanstätten microstructure, lower fatigue but higher fracture toughness (~88 MPa√m). Machining: V-notch sensitive in STA condition — carbide tools at low cutting speeds (30-50 m/min, vs 300 m/min for 6061 Al); PVD-coated carbide or CBN required; flood coolant essential. Alpha case (TiO, TiN embrittlement layer): forms at >600°C in air — remove 0.13 mm minimum by chemical milling or grinding. Fatigue: surface finish critical — Ra < 0.8 µm for fatigue applications; shot peening induces -600 MPa compressive residual stress improving HCF life 3×. ELI (Extra Low Interstitials) version: ASTM F136 for surgical implants — 0.13% O max (vs 0.20% standard).',
  tempers: [
    {
      designation: 'Annealed (Mill Annealed)',
      description:
        'Annealed at 700-790°C — standard delivery condition for sheet, plate, bar, and extrusion',
      tensileStrength: { min: 896, max: 1000, typical: 950 },
      yieldStrength: { min: 827, max: 930, typical: 880 },
      elongation: { min: 10, max: 16, typical: 14 },
      hardness: { brinell: 334 },
    },
    {
      designation: 'STA (Solution Treated + Aged)',
      description:
        'Solution treated at 955°C (near beta transus), water quenched, aged at 510°C/4h — maximum strength temper',
      tensileStrength: { min: 1069, max: 1207, typical: 1138 },
      yieldStrength: { min: 965, max: 1103, typical: 1069 },
      elongation: { min: 8, max: 12, typical: 10 },
      hardness: { brinell: 375 },
    },
    {
      designation: 'Beta Annealed',
      description:
        'Annealed above beta transus (~1025°C), air cooled — Widmanstätten microstructure with maximum fracture toughness',
      tensileStrength: { min: 930, max: 1034, typical: 965 },
      yieldStrength: { min: 862, max: 965, typical: 896 },
      elongation: { min: 10, max: 14, typical: 12 },
      hardness: { brinell: 340 },
    },
  ],
  relatedMaterials: ['ti-6al4v-eli', 'ti-3al2.5v', 'ti-gr4'],
};

export const ti6Al4VELI: Material = {
  id: 'ti-6al4v-eli',
  name: 'Ti-6Al-4V ELI (Grade 23)',
  family: 'titanium',
  subFamily: 'Alpha-Beta',
  mechanical: {
    density: 4.43,
    tensileStrength: { min: 827, max: 965, typical: 895 },
    yieldStrength: { min: 758, max: 896, typical: 828 },
    elongation: { min: 10, max: 16, typical: 15 },
    hardness: { brinell: { min: 285, max: 340, typical: 310 } },
    elasticModulus: 113.8,
    shearModulus: 44,
    poissonRatio: 0.342,
    fatigueStrength: { min: 480, max: 590, typical: 515 },
  },
  thermal: {
    conductivity: 6.7,
    thermalExpansion: 8.6,
    specificHeat: 560,
    meltingRange: { min: 1604, max: 1660 },
  },
  processability: {
    weldability: 'Fair',
    machinability: 'Fair',
    formability: 'Good',
    heatTreatable: true,
    weldNotes:
      'Fair weldability — same requirements as standard Ti-6Al-4V. The lower interstitial content gives marginally better weld ductility. Full inert atmosphere with argon trailing shield and back-purge required. Post-weld anneal at 540°C/2h commonly specified for implants.',
  },
  standards: {
    astm: ['F136', 'F1472'],
    ams: ['4930', '4907'],
    uns: 'R56401',
  },
  corrosionResistance: 'Excellent',
  relativeCost: 5,
  description:
    'Ti-6Al-4V ELI (Extra Low Interstitials, Grade 23, UNS R56401) is a higher-purity version of Ti-6Al-4V with reduced oxygen (0.13% max vs 0.20%), nitrogen, carbon, and iron levels. The reduced interstitial content improves fracture toughness, ductility at cryogenic temperatures, and biocompatibility while slightly reducing yield strength. It is the biomedical-grade titanium alloy for load-bearing implants (hip stems, femoral heads, spinal implants) and the primary aerospace titanium for cryogenic applications (liquid oxygen and hydrogen tanks, where ductility at -196°C is critical).',
  keyCharacteristics: [
    'Lower O, N, C, Fe than standard Ti-6Al-4V — higher purity for implant and cryogenic service',
    'ASTM F136 — the primary alloy for load-bearing orthopedic implants (hip, knee, spine)',
    'Better fracture toughness and cryogenic ductility than standard Ti-6Al-4V',
    'Lower strength than standard Grade 5 — 895 vs 950 MPa UTS',
    'Superior biocompatibility and osseointegration (bone attachment) for implants',
    'Standard for cryogenic aerospace applications (LH2/LOX tank structures)',
  ],
  commonApplications: [
    'Hip stem implants and femoral heads',
    'Spinal fusion implants and rods',
    'Knee replacement components',
    'Dental implants (ASTM F136)',
    'Cryogenic aerospace structures',
    'High-reliability aerospace structural castings',
  ],
  industries: ['Medical', 'Aerospace', 'Defense'],
  beginnerNote:
    "Ti-6Al-4V ELI is the medical-grade version of the standard Ti-6Al-4V alloy. \"ELI\" means \"Extra Low Interstitials\" — fewer contaminating elements (oxygen, nitrogen) in the alloy. This extra purity makes it slightly less strong but significantly tougher and more biocompatible, which is exactly what you want for implants that go inside the human body. If you see titanium in a hip or knee replacement, it's almost certainly this alloy.",
  expertNote:
    'ELI specification per ASTM F136: O ≤ 0.13% (vs 0.20% standard), N ≤ 0.05% (vs 0.05%), C ≤ 0.08% (vs 0.08%), Fe ≤ 0.25% (vs 0.30%), H ≤ 0.012% (vs 0.015%). Fracture toughness improvement: KIc ≈ 75 MPa√m (ELI annealed) vs 65 MPa√m (standard annealed) — 15% improvement. Fatigue: similar to standard grade in polished condition. Osseointegration: Ti-6Al-4V ELI with roughened (Ra 1-2 µm) surface via SLA (sandblasted, large grit, acid etched) or TiUnite (anodized) achieves >95% osseointegration rate at 6 months. Cryogenic use: minimum elongation at -196°C: 10% (standard Grade 5 may drop below 5%) — this is the critical failure mode that ELI prevents. 2219 aluminum is the main competitor for cryogenic tank applications; Ti-6Al-4V ELI is preferred where weight is critical and geometry is complex.',
  tempers: [
    {
      designation: 'Annealed',
      description:
        'Mill annealed — standard delivery condition for implant bar and sheet; optimum toughness and ductility',
      tensileStrength: { min: 827, max: 965, typical: 895 },
      yieldStrength: { min: 758, max: 896, typical: 828 },
      elongation: { min: 10, max: 16, typical: 15 },
      hardness: { brinell: 310 },
    },
    {
      designation: 'STA',
      description:
        'Solution treated + aged — higher strength with some reduction in toughness; used for non-implant aerospace applications',
      tensileStrength: { min: 1000, max: 1138, typical: 1069 },
      yieldStrength: { min: 896, max: 1034, typical: 965 },
      elongation: { min: 8, max: 12, typical: 10 },
      hardness: { brinell: 350 },
    },
  ],
  relatedMaterials: ['ti-6al4v', 'ti-3al2.5v', 'ti-gr4'],
};

export const cpTi: Material[] = [tiGrade2, tiGrade4];
export const alphaBetaTi: Material[] = [ti3Al2V, ti6Al4V, ti6Al4VELI];
export const allTitaniumGrades: Material[] = [...cpTi, ...alphaBetaTi];
