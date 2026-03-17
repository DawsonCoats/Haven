export type UnitSystem = 'metric' | 'imperial';

// Conversion functions (metric → imperial)
export const convert = {
  stress: (mpa: number) => mpa * 0.14504,                  // MPa → ksi
  density: (gcc: number) => gcc * 0.036127,                // g/cm³ → lb/in³
  modulus: (gpa: number) => gpa * 0.14504,                 // GPa → Msi
  thermalConductivity: (wmk: number) => wmk * 0.57779,     // W/m·K → BTU/hr·ft·°F
  thermalExpansion: (ummc: number) => ummc * 0.55556,      // µm/m·°C → µin/in·°F
  specificHeat: (jkgk: number) => jkgk * 0.000239,        // J/kg·K → BTU/lb·°F
  temperature: (c: number) => c * 9 / 5 + 32,             // °C → °F
};

// Unit labels per system
export const unitLabels = {
  stress: { metric: 'MPa', imperial: 'ksi' },
  density: { metric: 'g/cm³', imperial: 'lb/in³' },
  modulus: { metric: 'GPa', imperial: 'Msi' },
  thermalConductivity: { metric: 'W/m·K', imperial: 'BTU/hr·ft·°F' },
  thermalExpansion: { metric: 'µm/m·°C', imperial: 'µin/in·°F' },
  specificHeat: { metric: 'J/kg·K', imperial: 'BTU/lb·°F' },
  temperature: { metric: '°C', imperial: '°F' },
};

// Format a single value for display, converting if needed
export function formatValue(
  value: number,
  unitType: keyof typeof unitLabels,
  system: UnitSystem,
  decimals = 1
): string {
  if (system === 'metric') {
    return value.toFixed(decimals);
  }
  return convert[unitType](value).toFixed(decimals);
}

// Format a Range object (has min, max, optional typical)
export function formatRange(
  range: { min: number; max: number; typical?: number },
  unitType: keyof typeof unitLabels,
  system: UnitSystem,
  decimals = 1
): string {
  const cvt = (v: number) =>
    system === 'metric' ? v.toFixed(decimals) : convert[unitType](v).toFixed(decimals);

  const minStr = cvt(range.min);
  const maxStr = cvt(range.max);

  if (range.typical != null) {
    return `${minStr} – ${maxStr} (${cvt(range.typical)})`;
  }
  return `${minStr} – ${maxStr}`;
}
