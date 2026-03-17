'use client';

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import type { Material } from '../../data/types';
import { ratingToScore, getGlobalRanges } from '../../lib/chartHelpers';
import { allMaterials } from '../../data';

interface Props {
  material: Material;
}

export function MaterialRadar({ material: m }: Props) {
  const { utsMax, elongMax, modMax } = getGlobalRanges(allMaterials);

  const data = [
    {
      axis: 'Strength',
      value: Math.round(((m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min) / utsMax) * 100),
    },
    {
      axis: 'Ductility',
      value: Math.round(((m.mechanical.elongation.typical ?? m.mechanical.elongation.min) / elongMax) * 100),
    },
    {
      axis: 'Stiffness',
      value: Math.round((m.mechanical.elasticModulus / modMax) * 100),
    },
    {
      axis: 'Corrosion',
      value: ratingToScore(m.corrosionResistance),
    },
    {
      axis: 'Machinability',
      value: ratingToScore(m.processability.machinability),
    },
    {
      axis: 'Weldability',
      value: ratingToScore(m.processability.weldability),
    },
  ];

  const color = m.family === 'aluminum' ? '#38bdf8' : '#fb923c';

  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
        <PolarGrid stroke="#3f3f46" />
        <PolarAngleAxis
          dataKey="axis"
          tick={{ fill: '#a1a1aa', fontSize: 11 }}
        />
        <Radar
          dataKey="value"
          stroke={color}
          fill={color}
          fillOpacity={0.25}
          strokeOpacity={0.8}
          strokeWidth={1.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
