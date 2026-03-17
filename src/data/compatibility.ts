// ─── Welding Compatibility ────────────────────────────────────────────────────

export type WeldCompatibility =
  | 'Excellent'
  | 'Good'
  | 'Fair'
  | 'Difficult'
  | 'Not Recommended';

export interface WeldPairing {
  /** material.subFamily values (order-independent) */
  families: [string, string];
  compatibility: WeldCompatibility;
  fillerMetal?: string;
  notes: string;
}

/**
 * All defined weld pairings. Lookup checks both orderings so entries only need
 * to be listed once.
 */
export const WELD_PAIRINGS: WeldPairing[] = [
  // ── Aluminum ──────────────────────────────────────────────────────────────
  {
    families: ['6xxx Series', '6xxx Series'],
    compatibility: 'Excellent',
    fillerMetal: '4043 or 5356',
    notes:
      'Same-alloy autogenous weld is possible. 4043 offers better crack resistance; 5356 provides higher strength and is preferred for anodized finishes.',
  },
  {
    families: ['5xxx Series', '5xxx Series'],
    compatibility: 'Excellent',
    fillerMetal: '5356',
    notes:
      '5xxx alloys weld well together. 5356 filler matches the Mg-bearing base metal. Avoid 4043 on Mg >2 % base metals.',
  },
  {
    families: ['1xxx Series', '1xxx Series'],
    compatibility: 'Excellent',
    fillerMetal: '1100 or 4043',
    notes:
      'Commercially pure aluminum welds easily. Low strength — typically used in food/chemical equipment.',
  },
  {
    families: ['3xxx Series', '3xxx Series'],
    compatibility: 'Excellent',
    fillerMetal: '4043 or 5356',
    notes: 'Mn-bearing alloys have good weldability. 4043 filler recommended for general use.',
  },
  {
    families: ['6xxx Series', '5xxx Series'],
    compatibility: 'Good',
    fillerMetal: '5356',
    notes:
      '5356 filler bridges the alloy difference well. Joint efficiency is good; post-weld strength somewhat reduced in the HAZ.',
  },
  {
    families: ['6xxx Series', '7xxx Series'],
    compatibility: 'Good',
    fillerMetal: '5356',
    notes:
      '5356 filler recommended. Be aware that 7xxx HAZ can be sensitized to stress-corrosion cracking; post-weld age treatment where possible.',
  },
  {
    families: ['7xxx Series', '7xxx Series'],
    compatibility: 'Fair',
    fillerMetal: '5356',
    notes:
      '7xxx alloys are generally considered difficult to weld due to hot-cracking tendency. Use 5356 filler; minimize heat input and consider friction-stir welding as an alternative.',
  },
  {
    families: ['2xxx Series', '6xxx Series'],
    compatibility: 'Difficult',
    fillerMetal: '4043',
    notes:
      '2xxx alloys have high hot-cracking susceptibility. 4043 filler can help but joint quality is inconsistent. Riveting or mechanical fastening often preferred.',
  },
  {
    families: ['2xxx Series', '7xxx Series'],
    compatibility: 'Difficult',
    fillerMetal: '4043',
    notes:
      'Both series are crack-prone; their combination is especially challenging. Friction-stir welding is strongly preferred for aerospace applications.',
  },
  {
    families: ['2xxx Series', '2xxx Series'],
    compatibility: 'Difficult',
    fillerMetal: '2319',
    notes:
      '2xxx alloys have high hot-cracking susceptibility due to Cu content. 2319 or 4043 filler; very low heat input required. Friction-stir welding preferred where possible.',
  },
  {
    families: ['2xxx Series', '5xxx Series'],
    compatibility: 'Difficult',
    notes:
      'Combination of Cu-bearing 2xxx and Mg-bearing 5xxx increases cracking risk. Mechanical fastening strongly preferred.',
  },

  // ── Steel ─────────────────────────────────────────────────────────────────
  {
    families: ['Carbon Steel', 'Carbon Steel'],
    compatibility: 'Excellent',
    fillerMetal: 'ER70S-6',
    notes:
      'Carbon steel welds readily with common MIG/TIG/SMAW processes. Preheat (150–260 °C) required for carbon content >0.30 %. ER70S-6 is the standard general-purpose filler.',
  },
  {
    families: ['Alloy Steel', 'Alloy Steel'],
    compatibility: 'Good',
    fillerMetal: 'Match base metal; ER80S-D2 typical',
    notes:
      'Low-alloy steels weld well with matching filler. Higher carbon/alloy grades require preheat (200–400 °C) and controlled interpass temperature. PWHT reduces residual stress.',
  },
  {
    families: ['Carbon Steel', 'Alloy Steel'],
    compatibility: 'Good',
    fillerMetal: 'ER70S-6 or ER80S-D2',
    notes:
      'Compatible families; match filler to the higher-strength member. Preheat per the higher-carbon base metal.',
  },
  {
    families: ['300-Series Stainless', '300-Series Stainless'],
    compatibility: 'Excellent',
    fillerMetal: 'Match composition (e.g. ER308L, ER316L)',
    notes:
      'Austenitic stainless welds excellently. Use low-carbon (L-grade) filler to minimize sensitization. Back-purge with argon for root passes.',
  },
  {
    families: ['400-Series Stainless', '400-Series Stainless'],
    compatibility: 'Good',
    fillerMetal: 'Match composition or 309L',
    notes:
      'Ferritic/martensitic grades require preheat (150–300 °C) and PWHT to restore toughness. Control interpass temperature.',
  },
  {
    families: ['PH Stainless', 'PH Stainless'],
    compatibility: 'Good',
    fillerMetal: 'Match base metal (e.g. ER17-4)',
    notes:
      'PH stainless can be welded in the annealed condition. Post-weld aging treatment required to restore precipitation-hardened strength.',
  },
  {
    families: ['Duplex Stainless', 'Duplex Stainless'],
    compatibility: 'Good',
    fillerMetal: '2209 duplex filler',
    notes:
      'Use matching duplex filler with slight Ni overalloying. Control heat input to maintain ferrite/austenite balance. PWHT generally not required.',
  },
  {
    families: ['300-Series Stainless', '400-Series Stainless'],
    compatibility: 'Fair',
    fillerMetal: '309 or 309L',
    notes:
      '309 filler bridges the microstructural difference. Preheat for the ferritic/martensitic side; control interpass temperature. Joint efficiency is adequate for most applications.',
  },
  {
    families: ['Carbon Steel', '300-Series Stainless'],
    compatibility: 'Fair',
    fillerMetal: '309L',
    notes:
      '309L filler provides a buttering layer that accommodates the composition gradient. Preheat carbon steel side; back-purge if full penetration required. Thermal expansion mismatch causes residual stress.',
  },
  {
    families: ['Carbon Steel', '400-Series Stainless'],
    compatibility: 'Fair',
    fillerMetal: '309L',
    notes:
      'Similar approach to CS/300-series. Preheat martensitic 400-series if >0.1 % C. 309L filler recommended.',
  },
  {
    families: ['Alloy Steel', '300-Series Stainless'],
    compatibility: 'Fair',
    fillerMetal: '309L or 312',
    notes:
      'Dilution from alloy steel side can affect austenite stability. 312 filler tolerates higher dilution. Preheat alloy steel per its carbon equivalent.',
  },
  {
    families: ['Carbon Steel', 'Aluminum'],
    compatibility: 'Not Recommended',
    notes:
      'Fusion welding forms brittle iron-aluminide intermetallics (Fe₃Al, FeAl) that cause immediate joint failure. Explosion welding or friction-stir welding with appropriate interlayers are the only viable joining methods.',
  },
  {
    families: ['Alloy Steel', 'Aluminum'],
    compatibility: 'Not Recommended',
    notes:
      'Same intermetallic issue as carbon steel/aluminum. No conventional fusion process is practical. Mechanical fastening, adhesive bonding, or specialized solid-state processes required.',
  },
  {
    families: ['300-Series Stainless', 'Aluminum'],
    compatibility: 'Not Recommended',
    notes:
      'Brittle intermetallic phases form along the fusion line. Friction-stir welding or explosive bonding with transition inserts are alternatives for structural applications.',
  },

  // ── Titanium ──────────────────────────────────────────────────────────────
  {
    families: ['cp-Ti', 'cp-Ti'],
    compatibility: 'Excellent',
    fillerMetal: 'ERTi-1 or ERTi-2',
    notes:
      'CP titanium welds easily. All welding must be done under full inert-gas shielding (argon or helium) — front, back, and trailing shield — to prevent oxygen/nitrogen contamination. No preheat required.',
  },
  {
    families: ['Alpha-Beta', 'Alpha-Beta'],
    compatibility: 'Excellent',
    fillerMetal: 'ERTi-5 (Ti-6Al-4V) or ERTi-6',
    notes:
      'Ti-6Al-4V and similar alloys weld well under full inert atmosphere. Post-weld stress-relief anneal (480–540 °C, 2–4 h) improves ductility. Inert shielding is mandatory.',
  },
  {
    families: ['cp-Ti', 'Alpha-Beta'],
    compatibility: 'Good',
    fillerMetal: 'ERTi-2 or ERTi-5',
    notes:
      'CP titanium and alpha-beta alloys are compatible; use filler matching the higher-strength member. Full inert-gas shielding mandatory.',
  },
  {
    families: ['cp-Ti', 'Carbon Steel'],
    compatibility: 'Not Recommended',
    notes:
      'Fusion welding produces brittle TiC and iron-titanide intermetallics. Explosion welding or diffusion bonding with a vanadium/copper interlayer are the only practical options.',
  },
  {
    families: ['Alpha-Beta', 'Carbon Steel'],
    compatibility: 'Not Recommended',
    notes:
      'Same brittleness issue as CP Ti/steel. Mechanical or solid-state joining required.',
  },
  {
    families: ['cp-Ti', 'Alloy Steel'],
    compatibility: 'Not Recommended',
    notes: 'Intermetallic formation makes fusion welding impractical. Use solid-state processes or mechanical fastening.',
  },
  {
    families: ['Alpha-Beta', 'Alloy Steel'],
    compatibility: 'Not Recommended',
    notes: 'Intermetallic formation makes fusion welding impractical.',
  },
  {
    families: ['cp-Ti', '6xxx Series'],
    compatibility: 'Not Recommended',
    notes:
      'TiAl₃ and other intermetallics form at the fusion boundary, making the joint extremely brittle. Friction-stir welding or explosion welding with interlayers are research-stage alternatives.',
  },
  {
    families: ['Alpha-Beta', '6xxx Series'],
    compatibility: 'Not Recommended',
    notes:
      'Titanium/aluminum fusion welds are inherently brittle due to intermetallic formation. Solid-state or mechanical joining required.',
  },
  {
    families: ['cp-Ti', '7xxx Series'],
    compatibility: 'Not Recommended',
    notes: 'Same intermetallic brittleness as Ti/Al combinations. Fusion welding is not viable.',
  },
  {
    families: ['Alpha-Beta', '7xxx Series'],
    compatibility: 'Not Recommended',
    notes: 'Intermetallic formation prevents viable fusion welded joints.',
  },

  // ── Copper ────────────────────────────────────────────────────────────────
  {
    families: ['Pure Copper', 'Pure Copper'],
    compatibility: 'Good',
    fillerMetal: 'ERCu',
    notes:
      'Copper welds well but requires substantial preheat (300–500 °C) due to extremely high thermal conductivity. TIG or MIG with ERCu filler; shielding gas N₂ or Ar/He mix.',
  },
  {
    families: ['Brass', 'Brass'],
    compatibility: 'Good',
    fillerMetal: 'ERCuZn-C or silicon bronze',
    notes:
      'Zinc volatilization (fuming) is a concern. Low heat input, good ventilation, and zinc-compatible filler required. Brazing is often preferred over fusion welding.',
  },
  {
    families: ['Bronze', 'Bronze'],
    compatibility: 'Good',
    fillerMetal: 'ERCuSn-A or ERCuSi-A',
    notes:
      'Tin bronzes and silicon bronzes weld well; phosphor bronze requires care with hot-cracking. Preheat 100–200 °C. TIG or MIG preferred.',
  },
  {
    families: ['Pure Copper', 'Brass'],
    compatibility: 'Good',
    fillerMetal: 'ERCuZn-C or ERCu',
    notes: 'Compatible copper alloys; use filler that bridges the zinc content. Moderate preheat required.',
  },
  {
    families: ['Pure Copper', 'Bronze'],
    compatibility: 'Good',
    fillerMetal: 'ERCuSn-A or ERCu',
    notes: 'Good compatibility. Preheat the copper side to compensate for heat sink.',
  },
  {
    families: ['Pure Copper', 'Carbon Steel'],
    compatibility: 'Difficult',
    fillerMetal: 'ERCuSi-A (silicon bronze)',
    notes:
      'Direct fusion weld is difficult due to thermal property mismatch and limited mutual solubility. Silicon bronze braze-welding or specialized TIG techniques can produce functional joints. Mechanical fastening preferred for structural loads.',
  },
  {
    families: ['Brass', 'Carbon Steel'],
    compatibility: 'Difficult',
    notes:
      'Zinc fuming and limited Fe-Cu solubility make direct fusion impractical. Braze-welding or mechanical fastening recommended.',
  },
  {
    families: ['Bronze', 'Carbon Steel'],
    compatibility: 'Difficult',
    fillerMetal: 'ERCuSi-A',
    notes:
      'Silicon bronze braze-welding is feasible for light structural applications. High-stress joints should use mechanical fastening.',
  },
  {
    families: ['Pure Copper', '300-Series Stainless'],
    compatibility: 'Difficult',
    fillerMetal: 'ERCuNi or ERNiCu-7',
    notes:
      'Requires Ni-bearing filler to bridge the composition gap. Preheat copper to compensate for thermal conductivity. Hot-cracking risk; low heat input preferred.',
  },
];

/**
 * Find a WeldPairing for two subFamily strings.
 * Returns undefined if no specific pairing is defined.
 */
export function findWeldPairing(
  subFamilyA: string,
  subFamilyB: string
): WeldPairing | undefined {
  return WELD_PAIRINGS.find(
    (p) =>
      (p.families[0] === subFamilyA && p.families[1] === subFamilyB) ||
      (p.families[0] === subFamilyB && p.families[1] === subFamilyA)
  );
}

// ─── Family-level weld fallback ───────────────────────────────────────────────

/**
 * Maps a subFamily string to a broad family key used for cross-family fallback
 * lookups when no exact subFamily pairing exists.
 */
export const SUBFAMILY_TO_BROAD: Record<string, string> = {
  // Aluminum
  '1xxx Series': 'Aluminum',
  '2xxx Series': 'Aluminum 2xxx',
  '3xxx Series': 'Aluminum',
  '4xxx Series': 'Aluminum',
  '5xxx Series': 'Aluminum',
  '6xxx Series': 'Aluminum 6xxx',
  '7xxx Series': 'Aluminum 7xxx',
  // Steel
  'Carbon Steel': 'Carbon Steel',
  'Alloy Steel': 'Alloy Steel',
  'Tool Steel': 'Alloy Steel',
  '300-Series Stainless': 'Stainless 300',
  '400-Series Stainless': 'Stainless 400',
  'PH Stainless': 'Stainless 300',
  'Duplex Stainless': 'Stainless 300',
  // Titanium
  'cp-Ti': 'Titanium',
  'Alpha-Beta': 'Titanium',
  // Copper
  'Pure Copper': 'Copper',
  'Beryllium Copper': 'Copper',
  'Brass': 'Brass',
  'Bronze': 'Bronze',
};

/** Broad-family fallback pairings (used when no subFamily match is found). */
export const BROAD_WELD_PAIRINGS: WeldPairing[] = [
  {
    families: ['Aluminum', 'Aluminum'],
    compatibility: 'Good',
    fillerMetal: '4043 or 5356',
    notes:
      'Most aluminum alloys can be fusion welded. Consult specific subFamily data for filler selection and crack risk.',
  },
  {
    families: ['Aluminum 2xxx', 'Aluminum'],
    compatibility: 'Difficult',
    notes:
      '2xxx alloys are prone to hot cracking. Mechanical fastening or friction-stir welding is often preferred when joining to other aluminum series.',
  },
  {
    families: ['Carbon Steel', 'Stainless 300'],
    compatibility: 'Fair',
    fillerMetal: '309L',
    notes: 'Use 309L filler; preheat carbon steel side. Thermal expansion mismatch must be managed.',
  },
  {
    families: ['Carbon Steel', 'Stainless 400'],
    compatibility: 'Fair',
    fillerMetal: '309L',
    notes: 'Preheat martensitic grades. 309L filler bridges the composition difference.',
  },
  {
    families: ['Aluminum', 'Carbon Steel'],
    compatibility: 'Not Recommended',
    notes: 'Brittle intermetallic phases form; fusion welding is not practical.',
  },
  {
    families: ['Aluminum', 'Alloy Steel'],
    compatibility: 'Not Recommended',
    notes: 'Brittle intermetallic phases form; solid-state or mechanical joining required.',
  },
  {
    families: ['Titanium', 'Carbon Steel'],
    compatibility: 'Not Recommended',
    notes: 'Brittle TiC and iron-titanide intermetallics form. Solid-state joining only.',
  },
  {
    families: ['Titanium', 'Alloy Steel'],
    compatibility: 'Not Recommended',
    notes: 'Intermetallic formation. Solid-state or mechanical fastening required.',
  },
  {
    families: ['Titanium', 'Aluminum'],
    compatibility: 'Not Recommended',
    notes: 'TiAl₃ intermetallic formation. Friction-stir or explosion welding with interlayers is experimental.',
  },
  {
    families: ['Copper', 'Carbon Steel'],
    compatibility: 'Difficult',
    fillerMetal: 'ERCuSi-A',
    notes: 'Braze-welding with silicon bronze is feasible for light loads. Mechanical joining preferred.',
  },
  {
    families: ['Copper', 'Alloy Steel'],
    compatibility: 'Difficult',
    notes: 'Very limited fusion weld options. Braze-welding or mechanical joining preferred.',
  },
];

/**
 * Find a broad-family WeldPairing using SUBFAMILY_TO_BROAD mapping.
 */
export function findBroadWeldPairing(
  subFamilyA: string,
  subFamilyB: string
): WeldPairing | undefined {
  const broadA = SUBFAMILY_TO_BROAD[subFamilyA] ?? subFamilyA;
  const broadB = SUBFAMILY_TO_BROAD[subFamilyB] ?? subFamilyB;

  return BROAD_WELD_PAIRINGS.find(
    (p) =>
      (p.families[0] === broadA && p.families[1] === broadB) ||
      (p.families[0] === broadB && p.families[1] === broadA)
  );
}

// ─── Galvanic Compatibility ───────────────────────────────────────────────────

export type GalvanicRisk = 'Low' | 'Moderate' | 'High' | 'Severe';

/**
 * Anodic index values (V) relative to gold. The more negative (anodic) metal
 * in a pair is the one that will corrode (the anode).
 * Higher value = more anodic = corrodes preferentially.
 */
export const GALVANIC_INDEX: Record<string, number> = {
  'Gold/Platinum': 0.00,
  'Titanium': 0.15,
  'Stainless 316': 0.25,
  'Stainless 304': 0.30,
  'Nickel': 0.30,
  'Stainless 400': 0.35,
  'Copper': 0.35,
  'Bronze': 0.40,
  'Brass': 0.45,
  'Steel Alloy': 0.55,
  'Carbon Steel': 0.60,
  'Cast Iron': 0.65,
  'Aluminum 6xxx': 0.75,
  'Aluminum 2xxx': 0.75,
  'Aluminum 7xxx': 0.80,
  'Zinc': 1.25,
  'Magnesium': 1.75,
};

/** Maps material subFamily → GALVANIC_INDEX key */
export const SUBFAMILY_TO_GALVANIC_KEY: Record<string, string> = {
  '1xxx Series': 'Aluminum 6xxx',  // CP Al, similar potential
  '2xxx Series': 'Aluminum 2xxx',
  '3xxx Series': 'Aluminum 6xxx',
  '4xxx Series': 'Aluminum 6xxx',
  '5xxx Series': 'Aluminum 6xxx',
  '6xxx Series': 'Aluminum 6xxx',
  '7xxx Series': 'Aluminum 7xxx',
  'Carbon Steel': 'Carbon Steel',
  'Alloy Steel': 'Steel Alloy',
  'Tool Steel': 'Steel Alloy',
  '300-Series Stainless': 'Stainless 304',
  '400-Series Stainless': 'Stainless 400',
  'PH Stainless': 'Stainless 304',
  'Duplex Stainless': 'Stainless 316',
  'cp-Ti': 'Titanium',
  'Alpha-Beta': 'Titanium',
  'Pure Copper': 'Copper',
  'Beryllium Copper': 'Copper',
  'Brass': 'Brass',
  'Bronze': 'Bronze',
};

function galvanicRiskFromDelta(delta: number, marine: boolean): GalvanicRisk {
  // Marine/wet environment: tighten thresholds by one step
  if (marine) {
    if (delta < 0.10) return 'Low';
    if (delta < 0.25) return 'Moderate';
    if (delta < 0.40) return 'High';
    return 'Severe';
  }
  if (delta < 0.15) return 'Low';
  if (delta < 0.35) return 'Moderate';
  if (delta < 0.50) return 'High';
  return 'Severe';
}

function galvanicNotes(
  risk: GalvanicRisk,
  anodeKey: string,
  cathodeKey: string,
  delta: number
): string {
  const anode = anodeKey;
  const cathode = cathodeKey;

  if (delta === 0) {
    return `${anode} and ${cathode} have the same anodic index — no galvanic driving force. Minimal risk in all environments.`;
  }

  const anodeLine = `${anode} is the anode and will corrode preferentially; ${cathode} is protected.`;

  switch (risk) {
    case 'Low':
      return `${anodeLine} Low galvanic potential difference (${delta.toFixed(2)} V). Generally acceptable without special precautions; apply protective coating for outdoor or wet service.`;
    case 'Moderate':
      return `${anodeLine} Moderate potential difference (${delta.toFixed(2)} V). Use insulating washers or gaskets to break electrical contact. Apply barrier coatings. Avoid joint in wet environments where possible.`;
    case 'High':
      return `${anodeLine} High galvanic potential difference (${delta.toFixed(2)} V). Insulate the joint completely with non-conductive bushings, washers, and paste sealant. Consider same-material or coated fasteners. Do not use in marine or immersed service without full dielectric isolation.`;
    case 'Severe':
      return `${anodeLine} Severe galvanic potential difference (${delta.toFixed(2)} V). Direct metal-to-metal contact will cause rapid corrosion of the anode. Full dielectric isolation is mandatory. Re-evaluate material selection — use compatible alloys or protective interlayers.`;
  }
}

export interface GalvanicResult {
  risk: GalvanicRisk;
  delta: number;
  anodeFamily: string;
  cathodeFamily: string;
  notes: string;
}

/**
 * Calculate galvanic compatibility between two material subFamilies.
 * @param subFamilyA  - material.subFamily of the first material
 * @param subFamilyB  - material.subFamily of the second material
 * @param environment - 'controlled' | 'industrial' | 'marine'
 */
export function getGalvanicRisk(
  subFamilyA: string,
  subFamilyB: string,
  environment: 'controlled' | 'industrial' | 'marine' = 'controlled'
): GalvanicResult {
  const keyA = SUBFAMILY_TO_GALVANIC_KEY[subFamilyA] ?? subFamilyA;
  const keyB = SUBFAMILY_TO_GALVANIC_KEY[subFamilyB] ?? subFamilyB;

  const indexA = GALVANIC_INDEX[keyA] ?? 0.5;
  const indexB = GALVANIC_INDEX[keyB] ?? 0.5;

  const delta = Math.abs(indexA - indexB);
  const marine = environment === 'marine';
  const risk = galvanicRiskFromDelta(delta, marine);

  // The metal with the higher anodic index is the anode (corrodes)
  const [anodeKey, cathodeKey] =
    indexA >= indexB ? [keyA, keyB] : [keyB, keyA];

  return {
    risk,
    delta,
    anodeFamily: anodeKey,
    cathodeFamily: cathodeKey,
    notes: galvanicNotes(risk, anodeKey, cathodeKey, delta),
  };
}
