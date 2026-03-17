export * from './1xxx';
export * from './2xxx';
export * from './3xxx';
export * from './4xxx';
export * from './5xxx';
export * from './6xxx';
export * from './7xxx';

import { aluminumSeries1xxx } from './1xxx';
import { aluminumSeries2xxx } from './2xxx';
import { aluminumSeries3xxx } from './3xxx';
import { aluminumSeries4xxx } from './4xxx';
import { aluminumSeries5xxx } from './5xxx';
import { aluminumSeries6xxx } from './6xxx';
import { aluminumSeries7xxx } from './7xxx';

export const allAluminum = [
  ...aluminumSeries1xxx,
  ...aluminumSeries2xxx,
  ...aluminumSeries3xxx,
  ...aluminumSeries4xxx,
  ...aluminumSeries5xxx,
  ...aluminumSeries6xxx,
  ...aluminumSeries7xxx,
];
