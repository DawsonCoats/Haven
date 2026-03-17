export type Rating = 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'N/A';
export type CostRating = 1 | 2 | 3 | 4 | 5;

export interface Range {
  min: number;
  max: number;
  typical?: number;
}

export type MaterialFamily = 'aluminum' | 'steel' | 'titanium' | 'copper';

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
}
