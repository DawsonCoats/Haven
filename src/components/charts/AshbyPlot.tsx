'use client';

import { useState, useMemo } from 'react';
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
import { estimateCost } from '../../data/pricing';

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
  xVal: number;
  yVal: number;
}

// --- Axis definitions ---
interface AxisDef {
  label: string;
  unit: string;
  getValue: (m: Material) => number | undefined;
}

const AXES: Record<string, AxisDef> = {
  density: {
    label: 'Density',
    unit: 'g/cm³',
    getValue: (m) => m.mechanical.density,
  },
  tensileStrength: {
    label: 'Tensile Strength',
    unit: 'MPa',
    getValue: (m) => m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min,
  },
  yieldStrength: {
    label: 'Yield Strength',
    unit: 'MPa',
    getValue: (m) => m.mechanical.yieldStrength.typical ?? m.mechanical.yieldStrength.min,
  },
  elasticModulus: {
    label: 'Elastic Modulus',
    unit: 'GPa',
    getValue: (m) => m.mechanical.elasticModulus,
  },
  hardnessBrinell: {
    label: 'Hardness - Brinell',
    unit: 'HB',
    getValue: (m) => m.mechanical.hardness.brinell?.typical ?? m.mechanical.hardness.brinell?.min,
  },
  fatigueStrength: {
    label: 'Fatigue Strength',
    unit: 'MPa',
    getValue: (m) => m.mechanical.fatigueStrength?.typical ?? m.mechanical.fatigueStrength?.min,
  },
  thermalConductivity: {
    label: 'Thermal Conductivity',
    unit: 'W/m·K',
    getValue: (m) => m.thermal.conductivity,
  },
  thermalExpansion: {
    label: 'Thermal Expansion',
    unit: 'µm/m·°C',
    getValue: (m) => m.thermal.thermalExpansion,
  },
  estCostPerCube: {
    label: 'Est. Cost ($/in³ cube)',
    unit: '$/in³',
    getValue: (m) => estimateCost(m.id, m.mechanical.density)?.costPerCubeUsd,
  },
};

const AXIS_OPTIONS = [
  { key: 'density', label: 'Density (g/cm³)' },
  { key: 'tensileStrength', label: 'Tensile Strength (MPa)' },
  { key: 'yieldStrength', label: 'Yield Strength (MPa)' },
  { key: 'elasticModulus', label: 'Elastic Modulus (GPa)' },
  { key: 'hardnessBrinell', label: 'Hardness - Brinell (HB)' },
  { key: 'fatigueStrength', label: 'Fatigue Strength (MPa)' },
  { key: 'thermalConductivity', label: 'Thermal Conductivity (W/m·K)' },
  { key: 'thermalExpansion', label: 'Thermal Expansion (µm/m·°C)' },
  { key: 'estCostPerCube', label: 'Est. Cost ($/in³ cube)' },
];

function CustomTooltip({ active, payload, xAxisKey, yAxisKey }: {
  active?: boolean;
  payload?: { payload: DotPoint }[];
  xAxisKey: string;
  yAxisKey: string;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const xDef = AXES[xAxisKey];
  const yDef = AXES[yAxisKey];
  return (
    <div style={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px', color: '#f4f4f5', padding: '10px 14px', fontSize: 12 }}>
      <p className="font-semibold text-zinc-100 mb-1">{d.name}</p>
      <p className="text-zinc-400">{xDef.label}: <span className="text-zinc-200">{d.xVal} {xDef.unit}</span></p>
      <p className="text-zinc-400">{yDef.label}: <span className="text-zinc-200">{d.yVal} {yDef.unit}</span></p>
    </div>
  );
}

function computeDomain(values: number[]): [number, number] {
  if (values.length === 0) return [0, 1];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;
  const padding = range === 0 ? Math.abs(min) * 0.1 + 1 : range * 0.1;
  return [
    parseFloat((min - padding).toPrecision(4)),
    parseFloat((max + padding).toPrecision(4)),
  ];
}

export function AshbyPlot({ materials, height = 420 }: Props) {
  const router = useRouter();

  const [xAxisKey, setXAxisKey] = useState('density');
  const [yAxisKey, setYAxisKey] = useState('tensileStrength');
  const [panelOpen, setPanelOpen] = useState(false);

  // Build set of all subFamilies and individual material toggle state
  const allSubFamilies = useMemo(() => {
    const set = new Set<string>();
    for (const m of materials) set.add(m.subFamily);
    return Array.from(set).sort();
  }, [materials]);

  // Track which material ids are checked (all checked by default)
  const [checkedIds, setCheckedIds] = useState<Set<string>>(
    () => new Set(materials.map((m) => m.id))
  );

  // Group materials by subFamily for the panel
  const bySubFamilyAll = useMemo(() => {
    const map = new Map<string, Material[]>();
    for (const m of materials) {
      if (!map.has(m.subFamily)) map.set(m.subFamily, []);
      map.get(m.subFamily)!.push(m);
    }
    return map;
  }, [materials]);

  const xDef = AXES[xAxisKey];
  const yDef = AXES[yAxisKey];

  // Build plot data — only checked materials with both axis values defined
  const plotData = useMemo(() => {
    const map = new Map<string, DotPoint[]>();
    for (const m of materials) {
      if (!checkedIds.has(m.id)) continue;
      const xVal = xDef.getValue(m);
      const yVal = yDef.getValue(m);
      if (xVal == null || yVal == null) continue;
      if (!map.has(m.subFamily)) map.set(m.subFamily, []);
      map.get(m.subFamily)!.push({
        x: xVal,
        y: yVal,
        id: m.id,
        name: m.name,
        xVal,
        yVal,
      });
    }
    return map;
  }, [materials, checkedIds, xDef, yDef]);

  // Compute domains
  const { xDomain, yDomain } = useMemo(() => {
    const allPoints = Array.from(plotData.values()).flat();
    return {
      xDomain: computeDomain(allPoints.map((p) => p.x)),
      yDomain: computeDomain(allPoints.map((p) => p.y)),
    };
  }, [plotData]);

  function toggleMaterial(id: string) {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSubFamily(sf: string) {
    const sfMaterials = bySubFamilyAll.get(sf) ?? [];
    const allChecked = sfMaterials.every((m) => checkedIds.has(m.id));
    setCheckedIds((prev) => {
      const next = new Set(prev);
      for (const m of sfMaterials) {
        if (allChecked) next.delete(m.id);
        else next.add(m.id);
      }
      return next;
    });
  }

  return (
    <div className="flex gap-4 w-full">
      {/* Collapsible material panel */}
      <div className="flex-shrink-0">
        <button
          onClick={() => setPanelOpen((v) => !v)}
          className="mb-2 px-3 py-1.5 text-xs rounded bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 transition-colors"
        >
          {panelOpen ? '← Hide Materials' : 'Materials →'}
        </button>
        {panelOpen && (
          <div
            className="w-52 max-h-[420px] overflow-y-auto rounded-lg border border-zinc-700 bg-zinc-900 p-3"
            style={{ fontSize: 12 }}
          >
            {allSubFamilies.map((sf) => {
              const sfMaterials = bySubFamilyAll.get(sf) ?? [];
              const allChecked = sfMaterials.every((m) => checkedIds.has(m.id));
              const someChecked = sfMaterials.some((m) => checkedIds.has(m.id));
              return (
                <div key={sf} className="mb-3">
                  <label className="flex items-center gap-1.5 cursor-pointer mb-1">
                    <input
                      type="checkbox"
                      checked={allChecked}
                      ref={(el) => {
                        if (el) el.indeterminate = someChecked && !allChecked;
                      }}
                      onChange={() => toggleSubFamily(sf)}
                      className="accent-zinc-400"
                    />
                    <span
                      className="font-semibold text-zinc-200"
                      style={{ color: SUBFAMILY_COLORS[sf] ?? '#a1a1aa' }}
                    >
                      {sf}
                    </span>
                  </label>
                  {sfMaterials.map((m) => (
                    <label key={m.id} className="flex items-center gap-1.5 cursor-pointer ml-3 mb-0.5">
                      <input
                        type="checkbox"
                        checked={checkedIds.has(m.id)}
                        onChange={() => toggleMaterial(m.id)}
                        className="accent-zinc-400"
                      />
                      <span className="text-zinc-400">{m.name}</span>
                    </label>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Chart area */}
      <div className="flex-1 min-w-0">
        {/* Axis selectors */}
        <div className="flex gap-4 mb-3 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-xs text-zinc-400">X axis:</label>
            <select
              value={xAxisKey}
              onChange={(e) => setXAxisKey(e.target.value)}
              className="text-xs rounded bg-zinc-800 border border-zinc-700 text-zinc-200 px-2 py-1"
            >
              {AXIS_OPTIONS.map((opt) => (
                <option key={opt.key} value={opt.key}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-zinc-400">Y axis:</label>
            <select
              value={yAxisKey}
              onChange={(e) => setYAxisKey(e.target.value)}
              className="text-xs rounded bg-zinc-800 border border-zinc-700 text-zinc-200 px-2 py-1"
            >
              {AXIS_OPTIONS.map((opt) => (
                <option key={opt.key} value={opt.key}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={height}>
          <ScatterChart margin={{ top: 10, right: 20, bottom: 40, left: 60 }}>
            <CartesianGrid stroke="#3f3f46" strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="x"
              domain={xDomain}
              tick={{ fill: '#a1a1aa', fontSize: 11 }}
              stroke="#52525b"
            >
              <Label
                value={`${xDef.label} (${xDef.unit})`}
                position="bottom"
                offset={20}
                fill="#71717a"
                fontSize={12}
              />
            </XAxis>
            <YAxis
              type="number"
              dataKey="y"
              domain={yDomain}
              tick={{ fill: '#a1a1aa', fontSize: 11 }}
              stroke="#52525b"
            >
              <Label
                value={`${yDef.label} (${yDef.unit})`}
                angle={-90}
                position="insideLeft"
                offset={-40}
                fill="#71717a"
                fontSize={12}
              />
            </YAxis>
            <Tooltip
              content={<CustomTooltip xAxisKey={xAxisKey} yAxisKey={yAxisKey} />}
              cursor={{ fill: 'rgba(255,255,255,0.04)' }}
            />
            <Legend wrapperStyle={{ fontSize: 12, color: '#a1a1aa', paddingTop: 8 }} />
            {Array.from(plotData.entries()).map(([subFamily, data]) => (
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
      </div>
    </div>
  );
}

export default AshbyPlot;
