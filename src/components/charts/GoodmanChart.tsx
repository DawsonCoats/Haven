'use client';

import {
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  ReferenceLine,
} from 'recharts';
import type { Material } from '../../data/types';

interface GoodmanChartProps {
  material: Material;
}

interface ExamplePoint {
  name: string;
  label: string;
  sigma_m: number;
  sigma_a: number;
  sf: number;
  color: string;
}

function estimateSe(material: Material): number | null {
  if (material.mechanical.fatigueStrength?.typical != null) {
    return material.mechanical.fatigueStrength.typical;
  }
  const su = material.mechanical.tensileStrength.typical;
  if (su == null) return null;
  const family = material.family;
  if (family === 'aluminum') return 0.40 * su;
  if (family === 'titanium') return 0.45 * su;
  if (family === 'copper') return 0.35 * su;
  // steel and default
  return 0.45 * su;
}

const POINT_COLORS = ['#60a5fa', '#34d399', '#f59e0b'];

function computePoints(se: number, su: number): ExamplePoint[] {
  // R = -1: fully reversed
  const p1: ExamplePoint = {
    name: 'R = −1',
    label: 'Fully Reversed — worst case cyclic loading',
    sigma_m: 0,
    sigma_a: se,
    sf: 1.0,
    color: POINT_COLORS[0],
  };

  // R = 0: pulsating tension
  const sa_r0 = (se * su) / (se + su);
  const p2: ExamplePoint = {
    name: 'R = 0',
    label: 'Zero-to-Max Tension (e.g. bolt preload cycling)',
    sigma_m: sa_r0,
    sigma_a: sa_r0,
    sf: 1.0,
    color: POINT_COLORS[1],
  };

  // R = 0.5: high mean stress
  const sa_r05 = (se * su) / (su + 3 * se);
  const p3: ExamplePoint = {
    name: 'R = 0.5',
    label: 'High Mean Stress (press-fit / high preload scenario)',
    sigma_m: 3 * sa_r05,
    sigma_a: sa_r05,
    sf: 1.0,
    color: POINT_COLORS[2],
  };

  return [p1, p2, p3];
}

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: ExamplePoint;
}

function CustomDot({ cx, cy, payload }: CustomDotProps) {
  if (cx == null || cy == null || !payload) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill={payload.color}
      stroke="#09090b"
      strokeWidth={2}
    />
  );
}

interface TooltipPayloadEntry {
  payload: ExamplePoint;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload as ExamplePoint;
  if (d.sigma_m == null || d.sigma_a == null) return null;
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs shadow-lg max-w-[220px]">
      <p className="font-semibold text-zinc-100 mb-1">{d.name}</p>
      <p className="text-zinc-400 mb-2 leading-snug">{d.label}</p>
      <div className="space-y-0.5 font-mono text-zinc-300">
        <div className="flex justify-between gap-4">
          <span className="text-zinc-500">σ_m</span>
          <span>{d.sigma_m.toFixed(1)} MPa</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-zinc-500">σ_a</span>
          <span>{d.sigma_a.toFixed(1)} MPa</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-zinc-500">SF</span>
          <span>{d.sf.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export function GoodmanChart({ material }: GoodmanChartProps) {
  const su = material.mechanical.tensileStrength.typical;
  const se = estimateSe(material);

  if (se == null || su == null) {
    return (
      <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 px-4 py-8 text-center">
        <p className="text-zinc-500 text-sm">Insufficient data for fatigue analysis</p>
      </div>
    );
  }

  // Goodman boundary line: from (0, Se) to (Su, 0)
  const goodmanLine = [
    { x: 0, y: se },
    { x: su, y: 0 },
  ];

  const points = computePoints(se, su);
  const yMax = se * 1.1;

  // Separate scatter data per point so each gets its own legend entry
  // We use a single Scatter with custom dot instead
  const scatterData = points.map((p) => ({
    ...p,
    x: p.sigma_m,
    y: p.sigma_a,
  }));

  return (
    <div className="space-y-6">
      {/* Estimated Se note if no measured fatigue data */}
      {!material.mechanical.fatigueStrength?.typical && (
        <p className="text-xs text-amber-500/80">
          Note: Endurance limit estimated as {material.family === 'aluminum' ? '40%' : material.family === 'copper' ? '35%' : '45%'} of UTS
          (no measured fatigue data available for this material).
        </p>
      )}

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart margin={{ top: 16, right: 24, bottom: 40, left: 48 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, su]}
              tick={{ fill: '#71717a', fontSize: 11 }}
              tickLine={{ stroke: '#3f3f46' }}
              axisLine={{ stroke: '#3f3f46' }}
            >
              <Label value="Mean Stress (MPa)" position="insideBottom" offset={-28} fill="#71717a" fontSize={11} />
            </XAxis>
            <YAxis
              dataKey="y"
              type="number"
              domain={[0, yMax]}
              tick={{ fill: '#71717a', fontSize: 11 }}
              tickLine={{ stroke: '#3f3f46' }}
              axisLine={{ stroke: '#3f3f46' }}
            >
              <Label value="Alternating Stress (MPa)" angle={-90} position="insideLeft" offset={-32} fill="#71717a" fontSize={11} />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />

            {/* SF = 2 threshold — horizontal dashed line at Se/2 */}
            <ReferenceLine
              y={se / 2}
              stroke="#a78bfa"
              strokeDasharray="4 3"
              strokeWidth={1.5}
              label={{ value: 'SF = 2 threshold', position: 'insideTopRight', fill: '#a78bfa', fontSize: 10 }}
            />

            {/* SAFE zone label */}
            <ReferenceLine
              x={su * 0.06}
              stroke="transparent"
              label={{ value: 'SAFE', position: 'insideTopRight', fill: '#22c55e', fontSize: 10, fontWeight: 600 }}
            />

            {/* Goodman boundary line */}
            <Line
              data={goodmanLine}
              dataKey="y"
              name="Goodman Limit"
              type="linear"
              dot={false}
              stroke="#f97316"
              strokeWidth={2}
              strokeDasharray="6 3"
              legendType="line"
            />

            {/* Example operating points */}
            <Scatter
              data={scatterData}
              name="Operating Points"
              shape={<CustomDot />}
              legendType="circle"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Summary table */}
      <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 overflow-hidden">
        <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wide bg-zinc-800/30 border-b border-zinc-700/30">
          Example Operating Points
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-zinc-700/30">
                <th className="text-left px-3 py-2 text-zinc-500 font-medium">Loading Scenario</th>
                <th className="text-right px-3 py-2 text-zinc-500 font-medium">σ_m (MPa)</th>
                <th className="text-right px-3 py-2 text-zinc-500 font-medium">σ_a (MPa)</th>
                <th className="text-right px-3 py-2 text-zinc-500 font-medium">Safety Factor*</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-700/20">
              {points.map((p) => (
                <tr key={p.name} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-3 py-2 text-zinc-300 flex items-center gap-2">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span>
                      <span className="font-mono text-zinc-400 mr-1.5">{p.name}</span>
                      {p.label}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-zinc-300">{p.sigma_m.toFixed(1)}</td>
                  <td className="px-3 py-2 text-right font-mono text-zinc-300">{p.sigma_a.toFixed(1)}</td>
                  <td className="px-3 py-2 text-right font-mono">
                    <span className={p.sf >= 2 ? 'text-emerald-400' : p.sf >= 1.5 ? 'text-amber-400' : 'text-zinc-400'}>
                      {p.sf.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-3 py-2 text-[10px] text-zinc-600 border-t border-zinc-700/20 space-y-0.5">
          <p>* SF = 1 / (σ_a/Se + σ_m/Su) — points on the Goodman line have SF = 1.0 (boundary condition).</p>
          <p><span className="text-violet-400">━ ━</span> SF = 2 threshold line at σ_a = {(se / 2).toFixed(0)} MPa — any fully-reversed load below this line has infinite life with a 2× safety factor.</p>
          <p>Se = {se.toFixed(0)} MPa &nbsp;|&nbsp; Su = {su.toFixed(0)} MPa</p>
        </div>
      </div>
    </div>
  );
}
