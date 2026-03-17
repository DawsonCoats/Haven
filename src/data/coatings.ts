import { Coating, MaterialFamily } from './types';

export const allCoatings: Coating[] = [
  // ── Aluminum ──────────────────────────────────────────────────────────────

  {
    id: 'anodize-ii',
    name: 'Type II Anodize',
    shortName: 'Anodize II',
    applicableFamilies: ['aluminum'],
    description:
      'Electrochemical conversion coating that grows a dense aluminum oxide layer integral to the surface. Provides excellent corrosion protection and moderate wear improvement with a wide range of decorative color options.',
    thickness: '5–25 µm',
    temperatureLimit: 175,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Significantly Improves',
        detail: 'Dense aluminum oxide layer, excellent corrosion protection',
      },
      {
        property: 'Wear Resistance',
        effect: 'Improves',
        detail: 'Harder than bare aluminum',
      },
      {
        property: 'Electrical Conductivity',
        effect: 'Eliminates',
        detail: 'Anodize is non-conductive — use Alodine if conductivity needed',
      },
    ],
    fatigueEffect: 'Reduces',
    fatigueNote:
      'Anodize introduces surface tensile stresses that reduce fatigue life ~10–20%. Shot peen before anodizing for fatigue-critical parts.',
    commonUses: [
      'General aerospace structures',
      'Structural components',
      'Consumer electronics enclosures',
      'Architectural extrusions',
    ],
  },

  {
    id: 'anodize-iii',
    name: 'Type III Hard Anodize',
    shortName: 'Hard Anodize',
    applicableFamilies: ['aluminum'],
    description:
      'High-current density anodizing process that produces a thick, very hard aluminum oxide layer. Provides dramatically improved wear resistance at the cost of a more severe fatigue penalty.',
    thickness: '25–75 µm',
    temperatureLimit: 175,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Significantly Improves',
        detail: 'Thick, dense oxide layer provides excellent barrier protection',
      },
      {
        property: 'Wear Resistance',
        effect: 'Significantly Improves',
        detail: 'Surface hardness 60–70 HRC equivalent, excellent abrasion resistance',
      },
      {
        property: 'Electrical Conductivity',
        effect: 'Eliminates',
        detail: 'Non-conductive coating — same as Type II',
      },
    ],
    fatigueEffect: 'Reduces',
    fatigueNote:
      'More severe than Type II — can reduce fatigue strength 20–30%. Avoid on thin sections or fatigue-critical applications.',
    commonUses: [
      'Hydraulic cylinders',
      'Sliding and bearing surfaces',
      'Molds and tooling',
      'Wear plates',
    ],
  },

  {
    id: 'alodine',
    name: 'Alodine / Chromate Conversion (Chem Film)',
    shortName: 'Alodine',
    applicableFamilies: ['aluminum'],
    description:
      'Chemical conversion coating per MIL-DTL-5541. Produces a thin chromate film that provides moderate corrosion protection while preserving electrical conductivity. Commonly used as a paint primer or where grounding is required.',
    thickness: '0.5–2 µm (negligible dimensional change)',
    temperatureLimit: 150,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Improves',
        detail: 'MIL-DTL-5541 compliant, good corrosion protection',
      },
      {
        property: 'Electrical Conductivity',
        effect: 'No Change',
        detail: 'Maintains electrical conductivity — preferred over anodize when grounding required',
      },
    ],
    fatigueEffect: 'No Change',
    commonUses: [
      'Electrical bonding surfaces',
      'Paint primer base coat',
      'Aerospace structural components',
    ],
  },

  // ── Steel ─────────────────────────────────────────────────────────────────

  {
    id: 'zinc-plate',
    name: 'Zinc Plating',
    shortName: 'Zinc Plate',
    applicableFamilies: ['steel'],
    description:
      'Electrodeposited zinc coating that acts as a sacrificial anode to protect steel. Zinc corrodes preferentially, providing galvanic protection even when the coating is scratched. Common on fasteners and sheet metal hardware.',
    thickness: '5–25 µm',
    temperatureLimit: 120,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Significantly Improves',
        detail: 'Sacrificial anode — zinc corrodes preferentially, protects steel even at scratches',
      },
    ],
    fatigueEffect: 'Reduces',
    fatigueNote:
      'Hydrogen embrittlement risk in high-strength steels (>1000 MPa). Use bake relief after plating.',
    commonUses: [
      'Fasteners',
      'Brackets and sheet metal hardware',
      'General hardware components',
    ],
  },

  {
    id: 'nickel-plate',
    name: 'Electroless Nickel Plating',
    shortName: 'E-Nickel',
    applicableFamilies: ['aluminum', 'steel', 'copper'],
    description:
      'Autocatalytic nickel-phosphorus coating deposited without electrical current, providing extremely uniform thickness even on complex geometries. Good corrosion and wear resistance; hardness can be increased with heat treatment.',
    thickness: '5–75 µm',
    temperatureLimit: 300,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Significantly Improves',
        detail: 'Excellent barrier coating, good in chemical environments',
      },
      {
        property: 'Wear Resistance',
        effect: 'Improves',
        detail: '~50 HRC as-plated, up to 70 HRC after heat treatment',
      },
    ],
    fatigueEffect: 'Reduces',
    fatigueNote:
      'Tensile residual stresses from plating reduce fatigue life. Avoid on fatigue-critical steel components.',
    commonUses: [
      'Molds and dies',
      'Pump shafts and impellers',
      'Hydraulic components',
      'Precision parts requiring uniform coating',
    ],
  },

  {
    id: 'black-oxide',
    name: 'Black Oxide',
    shortName: 'Black Oxide',
    applicableFamilies: ['steel'],
    description:
      'Chemical conversion coating that produces a black magnetite (Fe₃O₄) surface layer. Provides minimal corrosion protection on its own and is primarily used for cosmetic appearance or to reduce light reflection. Must be sealed with oil or wax.',
    thickness: '1–2 µm (essentially zero dimensional change)',
    temperatureLimit: 300,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Improves',
        detail: 'Minimal protection alone — must be used with oil or wax. Primarily cosmetic.',
      },
      {
        property: 'Wear Resistance',
        effect: 'No Change',
        detail: 'No meaningful improvement to wear properties',
      },
    ],
    fatigueEffect: 'No Change',
    commonUses: [
      'Tools and tooling',
      'Fasteners',
      'Military and firearms equipment',
      'Cosmetic finish applications',
    ],
  },

  {
    id: 'phosphate',
    name: 'Phosphate (Parkerizing)',
    shortName: 'Phosphate',
    applicableFamilies: ['steel'],
    description:
      'Chemical conversion coating that deposits iron or manganese phosphate crystals on steel. Provides a good base for paint or oil, and moderate standalone corrosion resistance. Traditional military and firearms finish.',
    thickness: '5–20 µm',
    temperatureLimit: 150,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Improves',
        detail: 'Good base for paint/oil, poor standalone corrosion resistance',
      },
    ],
    fatigueEffect: 'No Change',
    commonUses: [
      'Firearms components',
      'Base coat for paint systems',
      'Military equipment',
    ],
  },

  {
    id: 'chrome-hard',
    name: 'Hard Chrome Plating',
    shortName: 'Hard Chrome',
    applicableFamilies: ['steel'],
    description:
      'Electrodeposited chromium coating used to restore worn surfaces and provide extreme wear resistance. Very high hardness (~70 HRC) with excellent abrasion resistance. Carries significant fatigue penalty due to hydrogen embrittlement and residual tensile stresses.',
    thickness: '25–250 µm',
    temperatureLimit: 425,
    propertyEffects: [
      {
        property: 'Wear Resistance',
        effect: 'Significantly Improves',
        detail: '~70 HRC, excellent abrasion and adhesion resistance',
      },
      {
        property: 'Corrosion Resistance',
        effect: 'Improves',
        detail: 'Good barrier protection in most environments',
      },
    ],
    fatigueEffect: 'Reduces',
    fatigueNote:
      'Severe fatigue penalty — hydrogen embrittlement and residual tensile stresses can reduce fatigue life 50%+. Avoid on cyclic-load components.',
    commonUses: [
      'Hydraulic rods and cylinders',
      'Bearing journals',
      'Rolls and mandrels',
      'Dies and tooling',
    ],
  },

  // ── Stainless Steel specific ──────────────────────────────────────────────

  {
    id: 'passivation',
    name: 'Passivation',
    shortName: 'Passivation',
    applicableFamilies: ['steel'],
    description:
      'Chemical treatment (per ASTM A967 / AMS 2700) that removes free iron, sulfides, and other contaminants from stainless steel surfaces, restoring the native chromium oxide passive layer. Not a coating — no material is added.',
    thickness: 'Negligible (chemical treatment)',
    temperatureLimit: 425,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Improves',
        detail: 'Removes free iron and contaminants, restores native oxide layer per ASTM A967',
      },
    ],
    fatigueEffect: 'No Change',
    commonUses: [
      'Medical devices and implants',
      'Food processing equipment',
      'Aerospace stainless components',
    ],
    notes: 'Applicable to stainless steel only. Not a coating — removes contamination and restores native passive layer.',
  },

  // ── Universal ─────────────────────────────────────────────────────────────

  {
    id: 'powder-coat',
    name: 'Powder Coat',
    shortName: 'Powder Coat',
    applicableFamilies: ['aluminum', 'steel'],
    description:
      'Dry polymer powder electrostatically applied and thermally cured to form a thick, durable organic coating. Provides excellent corrosion protection and wide color choice. Applied at 180–200°C — verify base material temper is not affected.',
    thickness: '50–125 µm',
    temperatureLimit: 120,
    propertyEffects: [
      {
        property: 'Corrosion Resistance',
        effect: 'Significantly Improves',
        detail: 'Thick barrier coating, excellent outdoor durability',
      },
      {
        property: 'Wear Resistance',
        effect: 'Improves',
        detail: 'Good impact and scratch resistance',
      },
    ],
    fatigueEffect: 'No Change',
    fatigueNote: 'Minimal fatigue effect, but check adhesion on sharp edges.',
    commonUses: [
      'Automotive components',
      'Architectural metalwork',
      'Outdoor furniture',
      'General industrial equipment',
    ],
    notes: 'Cure temperature (~180–200°C) may over-age aluminum tempers — verify acceptable for alloy and temper.',
  },

  {
    id: 'pvd-dlc',
    name: 'PVD / DLC (Diamond-Like Carbon)',
    shortName: 'PVD / DLC',
    applicableFamilies: ['steel', 'titanium'],
    description:
      'Physical vapor deposition of amorphous carbon films with diamond-like sp³ bonding. Extremely hard (2000–5000 HV), very thin, and with low friction. Compressive residual stresses from the PVD process are generally neutral to slightly beneficial for fatigue.',
    thickness: '1–5 µm',
    temperatureLimit: 350,
    propertyEffects: [
      {
        property: 'Wear Resistance',
        effect: 'Significantly Improves',
        detail: 'Hardest commercial coating, 2000–5000 HV',
      },
      {
        property: 'Corrosion Resistance',
        effect: 'Improves',
        detail: 'Good barrier protection in most environments',
      },
    ],
    fatigueEffect: 'No Change',
    fatigueNote: 'Compressive residual stresses from PVD can slightly improve fatigue.',
    commonUses: [
      'Cutting tools and drills',
      'Molds and dies',
      'Medical implants',
      'Premium fasteners',
    ],
  },

  // ── Titanium specific ─────────────────────────────────────────────────────

  {
    id: 'tin-coating',
    name: 'Titanium Nitride (TiN)',
    shortName: 'TiN',
    applicableFamilies: ['titanium', 'steel'],
    description:
      'Physical vapor deposited ceramic hard coating with characteristic gold color. Extremely hard, chemically inert, and biocompatible. Widely used on cutting tools and medical devices.',
    thickness: '1–5 µm',
    temperatureLimit: 600,
    propertyEffects: [
      {
        property: 'Wear Resistance',
        effect: 'Significantly Improves',
        detail: 'Gold-colored ceramic coating, excellent hardness',
      },
      {
        property: 'Corrosion Resistance',
        effect: 'Improves',
        detail: 'Chemically inert, good barrier in most environments',
      },
    ],
    fatigueEffect: 'No Change',
    commonUses: [
      'Cutting tools and drills',
      'Medical and dental instruments',
      'Decorative gold finish applications',
    ],
    color: 'Gold',
  },
];

export function getCoatingsForFamily(family: MaterialFamily): Coating[] {
  return allCoatings.filter((c) => c.applicableFamilies.includes(family));
}
