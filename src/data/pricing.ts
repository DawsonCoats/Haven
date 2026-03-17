// Approximate small-quantity distributor prices (USD/lb), 2024-2025
// Prices vary by form factor, temper, quantity, and market conditions.
// Expect ±20-30% variance. Use for reference/comparison only.

export interface MaterialPrice {
  pricePerLb: number;       // USD per pound
  notes?: string;           // e.g. "Premium for aerospace cert", "Highly volatile — BeCu"
}

export const MATERIAL_PRICES: Record<string, MaterialPrice> = {
  // Aluminum
  'al-1100':  { pricePerLb: 1.20 },
  'al-2011':  { pricePerLb: 2.20 },
  'al-2017':  { pricePerLb: 2.40 },
  'al-2024':  { pricePerLb: 2.50 },
  'al-2219':  { pricePerLb: 4.50, notes: 'Specialty alloy, limited availability' },
  'al-3003':  { pricePerLb: 1.30 },
  'al-4032':  { pricePerLb: 2.80, notes: 'Piston alloy, limited distributors' },
  'al-5052':  { pricePerLb: 1.60 },
  'al-5083':  { pricePerLb: 1.80 },
  'al-5086':  { pricePerLb: 1.90 },
  'al-5754':  { pricePerLb: 1.70 },
  'al-6005A': { pricePerLb: 1.55 },
  'al-6013':  { pricePerLb: 2.80, notes: 'Aerospace grade, lower availability' },
  'al-6061':  { pricePerLb: 1.50 },
  'al-6063':  { pricePerLb: 1.45 },
  'al-6082':  { pricePerLb: 1.60 },
  'al-6351':  { pricePerLb: 1.55 },
  'al-7001':  { pricePerLb: 8.00, notes: 'Very limited availability' },
  'al-7050':  { pricePerLb: 4.50 },
  'al-7068':  { pricePerLb: 12.00, notes: 'Ultra-premium, aerospace only' },
  'al-7075':  { pricePerLb: 3.00 },
  'al-7150':  { pricePerLb: 5.00, notes: 'Aerospace sheet/plate' },
  // Carbon & Alloy Steel
  'steel-a36':   { pricePerLb: 0.55 },
  'steel-1018':  { pricePerLb: 0.65 },
  'steel-1020':  { pricePerLb: 0.65 },
  'steel-1045':  { pricePerLb: 0.75 },
  'steel-4130':  { pricePerLb: 1.00 },
  'steel-4140':  { pricePerLb: 0.90 },
  'steel-4340':  { pricePerLb: 1.20 },
  'steel-h13':   { pricePerLb: 4.50, notes: 'Tool steel — price varies by condition' },
  'steel-d2':    { pricePerLb: 4.00, notes: 'Tool steel' },
  // Stainless Steel
  'steel-303ss':  { pricePerLb: 1.60 },
  'steel-304ss':  { pricePerLb: 1.50 },
  'steel-304Lss': { pricePerLb: 1.55 },
  'steel-316ss':  { pricePerLb: 2.00 },
  'steel-316Lss': { pricePerLb: 2.10 },
  'steel-321ss':  { pricePerLb: 2.20 },
  'steel-347ss':  { pricePerLb: 2.50 },
  'steel-410ss':  { pricePerLb: 1.40 },
  'steel-416ss':  { pricePerLb: 1.45 },
  'steel-430ss':  { pricePerLb: 1.35 },
  'steel-440Css': { pricePerLb: 2.00 },
  'steel-2205':   { pricePerLb: 3.50, notes: 'Duplex — Ni/Mo content drives price' },
  // PH Stainless
  'steel-174PH':  { pricePerLb: 3.00, notes: 'Precipitation hardened stainless' },
  'steel-155PH':  { pricePerLb: 3.50, notes: 'Precipitation hardened stainless' },
  // Titanium
  'ti-gr2':       { pricePerLb: 15.00 },
  'ti-gr4':       { pricePerLb: 18.00 },
  'ti-3al2.5v':   { pricePerLb: 20.00, notes: 'Primarily tubing stock' },
  'ti-6al4v':     { pricePerLb: 22.00 },
  'ti-6al4v-eli': { pricePerLb: 28.00, notes: 'ELI grade premium for biomedical' },
  // Copper alloys
  'cu-c110': { pricePerLb: 4.00, notes: 'Tracks copper commodity price closely' },
  'cu-c172': { pricePerLb: 22.00, notes: 'BeCu — beryllium content drives cost; volatile' },
  'cu-c260': { pricePerLb: 2.50 },
  'cu-c464': { pricePerLb: 2.80 },
  'cu-c510': { pricePerLb: 3.20 },
  'cu-c932': { pricePerLb: 3.00 },
};

// Volume of a 1"×1"×1" cube in cm³
const CUBIC_INCH_CM3 = 16.3871;
// Grams per pound
const G_PER_LB = 453.592;

export interface CostEstimate {
  pricePerLb: number;
  pricePerKg: number;
  costPerCubeUsd: number;   // cost of a 1"×1"×1" cube in USD
  massPerCubeLb: number;    // mass of a 1" cube in lb
  notes?: string;
}

export function estimateCost(materialId: string, densityGcm3: number): CostEstimate | null {
  const entry = MATERIAL_PRICES[materialId];
  if (!entry) return null;
  const massPerCubeLb = (densityGcm3 * CUBIC_INCH_CM3) / G_PER_LB;
  return {
    pricePerLb: entry.pricePerLb,
    pricePerKg: entry.pricePerLb * 2.20462,
    costPerCubeUsd: entry.pricePerLb * massPerCubeLb,
    massPerCubeLb,
    notes: entry.notes,
  };
}
