'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Label,
} from 'recharts';
import type { Material } from '../../data/types';
import { SUBFAMILY_COLORS } from '../../lib/chartHelpers';

interface Props {
  materials: Material[];
}

function shortName(m: Material): string {
  return m.name
    .replace(/\bAluminum\b/gi, 'Al')
    .replace(/\bSteel\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function TooltipStrength({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px', color: '#f4f4f5', padding: '10px 14px', fontSize: 12 }}>
      <p className="font-semibold text-zinc-100 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="text-zinc-400">{p.name}: <span className="text-zinc-200">{p.value} MPa</span></p>
      ))}
    </div>
  );
}

function TooltipDuctility({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px', color: '#f4f4f5', padding: '10px 14px', fontSize: 12 }}>
      <p className="font-semibold text-zinc-100 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="text-zinc-400">{p.name}: <span className="text-zinc-200">{p.value}%</span></p>
      ))}
    </div>
  );
}

export function PropertyBarChart({ materials }: Props) {
  const strengthData = materials.map((m) => ({
    name: shortName(m),
    UTS: m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min,
    YS: m.mechanical.yieldStrength.typical ?? m.mechanical.yieldStrength.min,
    color: SUBFAMILY_COLORS[m.subFamily] ?? '#71717a',
  }));

  const ductilityData = materials.map((m) => ({
    name: shortName(m),
    Elongation: m.mechanical.elongation.typical ?? m.mechanical.elongation.min,
    color: SUBFAMILY_COLORS[m.subFamily] ?? '#71717a',
  }));

  return (
    <div className="space-y-8">
      {/* Strength chart */}
      <div>
        <p className="text-xs text-zinc-500 uppercase tracking-wide mb-3">Tensile &amp; Yield Strength</p>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={strengthData} margin={{ top: 5, right: 20, bottom: 5, left: 50 }} barCategoryGap="30%">
            <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 11 }} stroke="#52525b" />
            <YAxis tick={{ fill: '#a1a1aa', fontSize: 11 }} stroke="#52525b">
              <Label value="MPa" angle={-90} position="insideLeft" offset={-35} fill="#71717a" fontSize={12} />
            </YAxis>
            <Tooltip content={<TooltipStrength />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
            <Legend wrapperStyle={{ fontSize: 12, color: '#a1a1aa' }} />
            <Bar dataKey="UTS" name="UTS" maxBarSize={40}>
              {strengthData.map((entry, i) => (
                <Cell key={i} fill={entry.color} fillOpacity={0.9} />
              ))}
            </Bar>
            <Bar dataKey="YS" name="Yield Strength" maxBarSize={40}>
              {strengthData.map((entry, i) => (
                <Cell key={i} fill={entry.color} fillOpacity={0.45} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Ductility chart */}
      <div>
        <p className="text-xs text-zinc-500 uppercase tracking-wide mb-3">Elongation (Ductility)</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={ductilityData} margin={{ top: 5, right: 20, bottom: 5, left: 50 }} barCategoryGap="40%">
            <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#a1a1aa', fontSize: 11 }} stroke="#52525b" />
            <YAxis tick={{ fill: '#a1a1aa', fontSize: 11 }} stroke="#52525b">
              <Label value="%" angle={-90} position="insideLeft" offset={-35} fill="#71717a" fontSize={12} />
            </YAxis>
            <Tooltip content={<TooltipDuctility />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
            <Bar dataKey="Elongation" maxBarSize={48}>
              {ductilityData.map((entry, i) => (
                <Cell key={i} fill={entry.color} fillOpacity={0.85} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
