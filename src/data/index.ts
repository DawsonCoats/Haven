export * from './types';
export * from './aluminum';
export * from './steel';
export * from './titanium';
export * from './copper';
export * from './cast-iron';

import { allAluminum } from './aluminum';
import { allSteel } from './steel';
import { allTitanium } from './titanium';
import { allCopper } from './copper';
import { allCastIron } from './cast-iron';
import { Material } from './types';

export const allMaterials: Material[] = [
  ...allAluminum,
  ...allSteel,
  ...allTitanium,
  ...allCopper,
  ...allCastIron,
];

export function getMaterialById(id: string): Material | undefined {
  return allMaterials.find((m) => m.id === id);
}

export function getMaterialsByFamily(family: string): Material[] {
  return allMaterials.filter((m) => m.family === family);
}

export function getMaterialsBySubFamily(subFamily: string): Material[] {
  return allMaterials.filter((m) => m.subFamily === subFamily);
}

export function getRelatedMaterials(material: Material): Material[] {
  if (!material.relatedMaterials?.length) return [];
  return material.relatedMaterials
    .map((id) => allMaterials.find((m) => m.id === id))
    .filter((m): m is Material => m !== undefined);
}

export const aluminumSubFamilies = [
  '1xxx Series',
  '2xxx Series',
  '3xxx Series',
  '4xxx Series',
  '5xxx Series',
  '6xxx Series',
  '7xxx Series',
  'Cast Aluminum',
];

export const steelSubFamilies = [
  'Carbon Steel',
  'Alloy Steel',
  '300-Series Stainless',
  '400-Series Stainless',
  'PH Stainless',
  'Duplex Stainless',
  'Cast Steel',
];

export const titaniumSubFamilies = [
  'cp-Ti',
  'Alpha-Beta',
];

export const copperSubFamilies = [
  'Pure Copper',
  'Beryllium Copper',
  'Brass',
  'Bronze',
];

export const castIronSubFamilies = [
  'Gray Iron',
  'Ductile Iron',
  'Malleable Iron',
];

export const seriesSlugMap: Record<string, string> = {
  // Aluminum
  '1xxx': '1xxx Series',
  '2xxx': '2xxx Series',
  '3xxx': '3xxx Series',
  '4xxx': '4xxx Series',
  '5xxx': '5xxx Series',
  '6xxx': '6xxx Series',
  '7xxx': '7xxx Series',
  'cast-aluminum': 'Cast Aluminum',
  // Steel
  'carbon': 'Carbon Steel',
  'alloy': 'Alloy Steel',
  '300-series': '300-Series Stainless',
  '400-series': '400-Series Stainless',
  'ph-stainless': 'PH Stainless',
  'duplex': 'Duplex Stainless',
  'cast-steel': 'Cast Steel',
  // Titanium
  'cp': 'cp-Ti',
  'alpha-beta': 'Alpha-Beta',
  // Copper
  'pure': 'Pure Copper',
  'beryllium': 'Beryllium Copper',
  'brass': 'Brass',
  'bronze': 'Bronze',
  // Cast Iron
  'gray-iron': 'Gray Iron',
  'ductile-iron': 'Ductile Iron',
  'malleable-iron': 'Malleable Iron',
};

export const subFamilySlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(seriesSlugMap).map(([k, v]) => [v, k])
);
