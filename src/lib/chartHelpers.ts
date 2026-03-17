import type { Rating, Material } from '../data/types';

export function ratingToScore(rating: Rating): number {
  switch (rating) {
    case 'Excellent': return 100;
    case 'Good':      return 66;
    case 'Fair':      return 33;
    case 'Poor':      return 0;
    case 'N/A':       return 0;
  }
}

export function getGlobalRanges(materials: Material[]) {
  const utsMax = Math.max(...materials.map((m) => m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min));
  const elongMax = Math.max(...materials.map((m) => m.mechanical.elongation.typical ?? m.mechanical.elongation.min));
  const modMax = Math.max(...materials.map((m) => m.mechanical.elasticModulus));
  return { utsMax, elongMax, modMax };
}

export const SUBFAMILY_COLORS: Record<string, string> = {
  // Aluminum
  '1xxx Series':           '#60a5fa', // blue-400
  '2xxx Series':           '#818cf8', // indigo-400
  '3xxx Series':           '#34d399', // emerald-400
  '4xxx Series':           '#4ade80', // green-400
  '5xxx Series':           '#2dd4bf', // teal-400
  '6xxx Series':           '#38bdf8', // sky-400
  '7xxx Series':           '#c084fc', // purple-400
  // Steel
  'Carbon Steel':          '#fb923c', // orange-400
  'Alloy Steel':           '#f87171', // red-400
  '300-Series Stainless':  '#fbbf24', // amber-400
  '400-Series Stainless':  '#a3e635', // lime-400
  'PH Stainless':          '#e879f9', // fuchsia-400
  'Duplex Stainless':      '#f472b6', // pink-400
  // Titanium
  'cp-Ti':                 '#94a3b8', // slate-400
  'Alpha-Beta':            '#64748b', // slate-500
  // Tool Steel
  'Tool Steel':            '#dc2626', // red-600
  // Copper
  'Pure Copper':           '#f97316', // orange-500
  'Beryllium Copper':      '#eab308', // yellow-500
  'Brass':                 '#ca8a04', // yellow-600
  'Bronze':                '#92400e', // amber-900 (dark bronze)
};
