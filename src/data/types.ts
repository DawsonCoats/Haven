export type Rating = 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'N/A';

export type CoatingEffect = 'Significantly Improves' | 'Improves' | 'No Change' | 'Reduces' | 'Eliminates';

export interface CoatingPropertyEffect {
  property: string;           // e.g. "Corrosion Resistance"
  effect: CoatingEffect;
  detail: string;             // e.g. "Provides sacrificial zinc barrier, excellent in outdoor environments"
}

export interface Coating {
  id: string;
  name: string;
  shortName: string;          // e.g. "Anodize II"
  applicableFamilies: MaterialFamily[];
  description: string;
  thickness: string;          // e.g. "5–25 µm"
  temperatureLimit: number;   // max service temp °C
  propertyEffects: CoatingPropertyEffect[];
  fatigueEffect?: CoatingEffect;  // separate since it's important
  fatigueNote?: string;
  commonUses: string[];
  notes?: string;
  color?: string;             // visual appearance
}
export type CostRating = 1 | 2 | 3 | 4 | 5;

export interface Range {
  min: number;
  max: number;
  typical?: number;
}

export type MaterialFamily = 'aluminum' | 'steel' | 'titanium' | 'copper' | 'cast-iron';

export type MaterialForm =
  | 'bar' | 'rod' | 'wire' | 'plate' | 'sheet' | 'strip'
  | 'tube' | 'pipe' | 'structural-angle' | 'c-channel' | 'i-beam'
  | 'forging' | 'casting' | 'extrusion' | 'powder';

export type ManufacturingProcess =
  | 'machining' | 'casting' | 'forming' | 'forging'
  | 'welding' | 'additive' | 'extrusion' | 'rolling';


export interface Temper {
  designation: string;
  description: string;
  tensileStrength?: Range;
  yieldStrength?: Range;
  elongation?: Range;
  hardness?: { brinell?: number; rockwellB?: number; rockwellC?: number };
}

export interface Material {
  id: string;
  name: string;
  family: MaterialFamily;
  subFamily: string;

  mechanical: {
    density: number;
    tensileStrength: Range;
    yieldStrength: Range;
    elongation: Range;
    hardness: {
      brinell?: Range;
      rockwellB?: Range;
      rockwellC?: Range;
    };
    elasticModulus: number;
    shearModulus?: number;
    poissonRatio?: number;
    fatigueStrength?: Range;
  };

  thermal: {
    conductivity: number;
    thermalExpansion: number;
    specificHeat?: number;
    meltingRange?: Range;
  };

  processability: {
    weldability: Rating;
    machinability: Rating;
    formability: Rating;
    castability?: Rating;
    heatTreatable: boolean;
    weldNotes?: string;
  };

  standards: {
    astm?: string[];
    ams?: string[];
    uns?: string;
    iso?: string[];
    din?: string[];
    sae?: string[];
  };

  corrosionResistance: Rating;
  relativeCost: CostRating;

  description: string;
  keyCharacteristics: string[];
  commonApplications: string[];
  industries: string[];
  beginnerNote?: string;
  expertNote?: string;

  tempers?: Temper[];
  relatedMaterials?: string[];

  availableForms?: MaterialForm[];
  manufacturingProcesses?: ManufacturingProcess[];
}
