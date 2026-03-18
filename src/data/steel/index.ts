export * from './carbon';
export * from './alloy';
export * from './stainless/300-series';
export * from './stainless/400-series';
export * from './ph-stainless';
export * from './stainless/duplex';
export * from './cast';

import { carbonSteels } from './carbon';
import { alloySteels } from './alloy';
import { stainless300Series } from './stainless/300-series';
import { stainless400Series } from './stainless/400-series';
import { phStainless } from './ph-stainless';
import { duplexStainless } from './stainless/duplex';
import { castSteels } from './cast';

export const allSteel = [
  ...carbonSteels,
  ...alloySteels,
  ...stainless300Series,
  ...stainless400Series,
  ...phStainless,
  ...duplexStainless,
  ...castSteels,
];
