import { Material } from '../data/types';

export type DeltaDirection = 'higher-better' | 'lower-better' | 'neutral';

export interface PropertyComparison {
  key: string;
  label: string;
  unit: string;
  values: (number | string | null)[];
  deltas: ('best' | 'worst' | 'mid' | 'neutral')[];
  direction: DeltaDirection;
  isRating?: boolean;
}

const RATING_ORDER = ['Poor', 'Fair', 'Good', 'Excellent', 'N/A'] as const;
const COST_DIRECTION: DeltaDirection = 'lower-better';

function ratingToNumber(rating: string): number {
  const idx = RATING_ORDER.indexOf(rating as typeof RATING_ORDER[number]);
  return idx === -1 ? -1 : idx;
}

function assignDeltas(
  values: (number | null)[],
  direction: DeltaDirection
): ('best' | 'worst' | 'mid' | 'neutral')[] {
  const nums = values.filter((v): v is number => v !== null);
  if (nums.length < 2) return values.map(() => 'neutral');

  const best = direction === 'lower-better' ? Math.min(...nums) : Math.max(...nums);
  const worst = direction === 'lower-better' ? Math.max(...nums) : Math.min(...nums);

  return values.map((v) => {
    if (v === null) return 'neutral';
    if (v === best && best !== worst) return 'best';
    if (v === worst && best !== worst) return 'worst';
    return 'mid';
  });
}

function getTypical(range: { min: number; max: number; typical?: number }): number {
  return range.typical ?? range.min;
}

export function buildComparison(materials: Material[]): PropertyComparison[] {
  if (materials.length === 0) return [];

  const rows: PropertyComparison[] = [];

  // Density
  {
    const values = materials.map((m) => m.mechanical.density);
    rows.push({
      key: 'density',
      label: 'Density',
      unit: 'g/cm³',
      values,
      deltas: assignDeltas(values, 'lower-better'),
      direction: 'lower-better',
    });
  }

  // Tensile Strength
  {
    const values = materials.map((m) => getTypical(m.mechanical.tensileStrength));
    rows.push({
      key: 'tensileStrength',
      label: 'Tensile Strength',
      unit: 'MPa',
      values,
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
    });
  }

  // Yield Strength
  {
    const values = materials.map((m) => getTypical(m.mechanical.yieldStrength));
    rows.push({
      key: 'yieldStrength',
      label: 'Yield Strength',
      unit: 'MPa',
      values,
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
    });
  }

  // Elongation
  {
    const values = materials.map((m) => getTypical(m.mechanical.elongation));
    rows.push({
      key: 'elongation',
      label: 'Elongation',
      unit: '%',
      values,
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
    });
  }

  // Elastic Modulus
  {
    const values = materials.map((m) => m.mechanical.elasticModulus);
    rows.push({
      key: 'elasticModulus',
      label: 'Elastic Modulus',
      unit: 'GPa',
      values,
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
    });
  }

  // Thermal Conductivity
  {
    const values = materials.map((m) => m.thermal.conductivity);
    rows.push({
      key: 'thermalConductivity',
      label: 'Thermal Conductivity',
      unit: 'W/m·K',
      values,
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
    });
  }

  // Thermal Expansion
  {
    const values = materials.map((m) => m.thermal.thermalExpansion);
    rows.push({
      key: 'thermalExpansion',
      label: 'Thermal Expansion (CTE)',
      unit: 'µm/m·°C',
      values,
      deltas: assignDeltas(values, 'neutral'),
      direction: 'neutral',
    });
  }

  // Corrosion Resistance (rating)
  {
    const values = materials.map((m) => ratingToNumber(m.corrosionResistance));
    rows.push({
      key: 'corrosionResistance',
      label: 'Corrosion Resistance',
      unit: '',
      values: materials.map((m) => m.corrosionResistance),
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
      isRating: true,
    });
  }

  // Weldability (rating)
  {
    const values = materials.map((m) => ratingToNumber(m.processability.weldability));
    rows.push({
      key: 'weldability',
      label: 'Weldability',
      unit: '',
      values: materials.map((m) => m.processability.weldability),
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
      isRating: true,
    });
  }

  // Machinability (rating)
  {
    const values = materials.map((m) => ratingToNumber(m.processability.machinability));
    rows.push({
      key: 'machinability',
      label: 'Machinability',
      unit: '',
      values: materials.map((m) => m.processability.machinability),
      deltas: assignDeltas(values, 'higher-better'),
      direction: 'higher-better',
      isRating: true,
    });
  }

  // Relative Cost
  {
    const values = materials.map((m) => m.relativeCost);
    rows.push({
      key: 'relativeCost',
      label: 'Relative Cost',
      unit: '1–5',
      values,
      deltas: assignDeltas(values, COST_DIRECTION),
      direction: COST_DIRECTION,
    });
  }

  return rows;
}

export function getSpecificStrength(material: Material): number {
  const uts = material.mechanical.tensileStrength.typical ?? material.mechanical.tensileStrength.min;
  return Math.round(uts / material.mechanical.density);
}
