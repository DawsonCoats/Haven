'use client';

import { useRouter } from 'next/navigation';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';
import type { Material } from '../../data/types';
import { SUBFAMILY_COLORS } from '../../lib/chartHelpers';

interface Props {
  materials: Material[];
  title?: string;
  height?: number;
}

interface DotPoint {
  x: number;
  y: number;
  id: string;
  name: string;
  uts: number;
  ys: number;
  density: number;
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: { payload: DotPoint }[] }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px', color: '#f4f4f5', padding: '10px 14px', fontSize: 12 }}>
      <p className="font-semibold text-zinc-100 mb-1">{d.name}</p>
      <p className="text-zinc-400">UTS: <span className="text-zinc-200">{d.uts} MPa</span></p>
      <p className="text-zinc-400">YS: <span className="text-zinc-200">{d.ys} MPa</span></p>
      <p className="text-zinc-400">Density: <span className="text-zinc-200">{d.density} g/cm³</span></p>
    </div>
  );
}

export function AshbyPlot({ materials, height = 420 }: Props) {
  const router = useRouter();

  // Group by subFamily
  const bySubFamily = new Map<string, DotPoint[]>();
  for (const m of materials) {
    if (!bySubFamily.has(m.subFamily)) bySubFamily.set(m.subFamily, []);
    bySubFamily.get(m.subFamily)!.push({
      x: m.mechanical.density,
      y: m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min,
      id: m.id,
      name: m.name,
      uts: m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min,
      ys: m.mechanical.yieldStrength.typical ?? m.mechanical.yieldStrength.min,
      density: m.mechanical.density,
    });
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ScatterChart margin={{ top: 10, right: 20, bottom: 40, left: 60 }}>
        <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
        <XAxis
          type="number"
          dataKey="x"
          domain={[2, 9]}
          tick={{ fill: '#a1a1aa', fontSize: 11 }}
          stroke="#52525b"
        >
          <Label value="Density (g/cm³)" position="bottom" offset={20} fill="#71717a" fontSize={12} />
        </XAxis>
        <YAxis
          type="number"
          dataKey="y"
          tick={{ fill: '#a1a1aa', fontSize: 11 }}
          stroke="#52525b"
        >
          <Label value="Tensile Strength (MPa)" angle={-90} position="insideLeft" offset={-40} fill="#71717a" fontSize={12} />
        </YAxis>
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: '#a1a1aa', paddingTop: 8 }}
        />
        {Array.from(bySubFamily.entries()).map(([subFamily, data]) => (
          <Scatter
            key={subFamily}
            name={subFamily}
            data={data}
            fill={SUBFAMILY_COLORS[subFamily] ?? '#71717a'}
            opacity={0.85}
            onClick={(point) => router.push(`/materials/${(point as unknown as DotPoint).id}`)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
}
