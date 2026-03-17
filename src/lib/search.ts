import { Material, Rating, MaterialFamily } from '../data/types';

export interface SearchFilters {
  query?: string;
  family?: MaterialFamily;
  subFamily?: string;
  minUTS?: number;
  maxUTS?: number;
  minYS?: number;
  maxYS?: number;
  minElongation?: number;
  maxDensity?: number;
  weldability?: Rating[];
  machinability?: Rating[];
  corrosionResistance?: Rating[];
  heatTreatable?: boolean;
  maxCost?: number;
  industries?: string[];
}

export function filterMaterials(materials: Material[], filters: SearchFilters): Material[] {
  return materials.filter((m) => {
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const searchableText = [
        m.name,
        m.id,
        m.subFamily,
        m.description,
        ...m.keyCharacteristics,
        ...m.commonApplications,
        ...m.industries,
        m.standards.astm?.join(' ') ?? '',
        m.standards.ams?.join(' ') ?? '',
        m.standards.uns ?? '',
      ].join(' ').toLowerCase();
      if (!searchableText.includes(q)) return false;
    }

    if (filters.family && m.family !== filters.family) return false;
    if (filters.subFamily && m.subFamily !== filters.subFamily) return false;

    if (filters.minUTS != null && m.mechanical.tensileStrength.typical != null) {
      if ((m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min) < filters.minUTS) return false;
    }
    if (filters.maxUTS != null) {
      if (m.mechanical.tensileStrength.max > filters.maxUTS) return false;
    }

    if (filters.minYS != null) {
      if ((m.mechanical.yieldStrength.typical ?? m.mechanical.yieldStrength.min) < filters.minYS) return false;
    }

    if (filters.minElongation != null) {
      if ((m.mechanical.elongation.typical ?? m.mechanical.elongation.min) < filters.minElongation) return false;
    }

    if (filters.maxDensity != null) {
      if (m.mechanical.density > filters.maxDensity) return false;
    }

    if (filters.weldability?.length) {
      if (!filters.weldability.includes(m.processability.weldability)) return false;
    }

    if (filters.machinability?.length) {
      if (!filters.machinability.includes(m.processability.machinability)) return false;
    }

    if (filters.corrosionResistance?.length) {
      if (!filters.corrosionResistance.includes(m.corrosionResistance)) return false;
    }

    if (filters.heatTreatable != null) {
      if (m.processability.heatTreatable !== filters.heatTreatable) return false;
    }

    if (filters.maxCost != null) {
      if (m.relativeCost > filters.maxCost) return false;
    }

    if (filters.industries?.length) {
      const hasIndustry = filters.industries.some((ind) =>
        m.industries.some((i) => i.toLowerCase().includes(ind.toLowerCase()))
      );
      if (!hasIndustry) return false;
    }

    return true;
  });
}

export function sortMaterials(
  materials: Material[],
  sortKey: keyof Material | 'tensileStrength' | 'yieldStrength' | 'density' | 'cost',
  direction: 'asc' | 'desc' = 'asc'
): Material[] {
  const sorted = [...materials].sort((a, b) => {
    let aVal: number;
    let bVal: number;

    switch (sortKey) {
      case 'tensileStrength':
        aVal = a.mechanical.tensileStrength.typical ?? a.mechanical.tensileStrength.min;
        bVal = b.mechanical.tensileStrength.typical ?? b.mechanical.tensileStrength.min;
        break;
      case 'yieldStrength':
        aVal = a.mechanical.yieldStrength.typical ?? a.mechanical.yieldStrength.min;
        bVal = b.mechanical.yieldStrength.typical ?? b.mechanical.yieldStrength.min;
        break;
      case 'density':
        aVal = a.mechanical.density;
        bVal = b.mechanical.density;
        break;
      case 'cost':
        aVal = a.relativeCost;
        bVal = b.relativeCost;
        break;
      default:
        return a.name.localeCompare(b.name);
    }

    return direction === 'asc' ? aVal - bVal : bVal - aVal;
  });

  return sorted;
}

export function getSubFamilies(materials: Material[]): string[] {
  return [...new Set(materials.map((m) => m.subFamily))];
}

export function getIndustries(materials: Material[]): string[] {
  const all = materials.flatMap((m) => m.industries);
  return [...new Set(all)].sort();
}

export function fuzzyScore(material: Material, query: string): number {
  const q = query.toLowerCase();
  let score = 0;

  if (material.id.toLowerCase().includes(q)) score += 10;
  if (material.name.toLowerCase().includes(q)) score += 8;
  if (material.subFamily.toLowerCase().includes(q)) score += 5;
  if (material.description.toLowerCase().includes(q)) score += 3;
  if (material.commonApplications.some((a) => a.toLowerCase().includes(q))) score += 4;
  if (material.industries.some((i) => i.toLowerCase().includes(q))) score += 3;
  if (material.standards.astm?.some((s) => s.toLowerCase().includes(q))) score += 6;
  if (material.standards.ams?.some((s) => s.toLowerCase().includes(q))) score += 6;
  if (material.standards.uns?.toLowerCase().includes(q)) score += 6;

  return score;
}

export function searchMaterials(materials: Material[], query: string): Material[] {
  if (!query.trim()) return materials;
  return materials
    .map((m) => ({ material: m, score: fuzzyScore(m, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ material }) => material);
}
