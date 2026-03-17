'use client';

import { Material } from '../../data/types';
import { buildComparison, PropertyComparison } from '../../lib/compare';
import { RatingBadge } from '../materials/RatingBadge';
import { Rating } from '../../data/types';
import { ArrowUp, Minus } from 'lucide-react';
import clsx from 'clsx';

interface CompareTableProps {
  materials: Material[];
}

function DeltaIndicator({ delta }: { delta: PropertyComparison['deltas'][number] }) {
  if (delta === 'best') return <ArrowUp className="w-3 h-3 text-emerald-400 inline ml-1" />;
  if (delta === 'worst') return <ArrowUp className="w-3 h-3 text-red-400 inline ml-1 rotate-180" />;
  if (delta === 'mid') return <Minus className="w-3 h-3 text-yellow-500 inline ml-1" />;
  return null;
}

function CellValue({ value, delta, isRating }: { value: string | number | null; delta: PropertyComparison['deltas'][number]; isRating?: boolean }) {
  if (value === null || value === undefined) return <span className="text-zinc-600">—</span>;

  const bgClass = delta === 'best' ? 'bg-emerald-900/20' : delta === 'worst' ? 'bg-red-900/20' : '';

  if (isRating && typeof value === 'string') {
    return (
      <div className={clsx('flex items-center justify-center gap-1 py-1 px-2 rounded', bgClass)}>
        <RatingBadge rating={value as Rating} size="sm" />
        <DeltaIndicator delta={delta} />
      </div>
    );
  }

  return (
    <div className={clsx('inline-flex items-center px-2 py-1 rounded tabular-nums', bgClass)}>
      <span>{value}</span>
      <DeltaIndicator delta={delta} />
    </div>
  );
}

export function CompareTable({ materials }: CompareTableProps) {
  const rows = buildComparison(materials);

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-700 bg-zinc-800/50">
            <th className="text-left px-4 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wide w-40">Property</th>
            {materials.map((m) => (
              <th key={m.id} className="text-center px-4 py-4 min-w-[160px]">
                <div className="font-semibold text-zinc-100">{m.name}</div>
                <div className="text-xs text-zinc-500 font-normal mt-0.5">{m.subFamily}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Header row: overview */}
          <tr className="border-b border-zinc-700 bg-zinc-900/30">
            <td className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wide" colSpan={materials.length + 1}>
              Mechanical
            </td>
          </tr>
          {rows.filter(r => ['density','tensileStrength','yieldStrength','elongation','elasticModulus'].includes(r.key)).map((row) => (
            <tr key={row.key} className="border-b border-zinc-700/30 hover:bg-zinc-800/20">
              <td className="px-4 py-3 text-zinc-400 text-xs">
                <div className="font-medium">{row.label}</div>
                {row.unit && <div className="text-zinc-600">{row.unit}</div>}
              </td>
              {row.values.map((v, i) => (
                <td key={i} className="px-4 py-3 text-center text-zinc-200">
                  <CellValue value={v} delta={row.deltas[i]} isRating={row.isRating} />
                </td>
              ))}
            </tr>
          ))}

          <tr className="border-b border-zinc-700 bg-zinc-900/30">
            <td className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wide" colSpan={materials.length + 1}>
              Thermal
            </td>
          </tr>
          {rows.filter(r => ['thermalConductivity','thermalExpansion'].includes(r.key)).map((row) => (
            <tr key={row.key} className="border-b border-zinc-700/30 hover:bg-zinc-800/20">
              <td className="px-4 py-3 text-zinc-400 text-xs">
                <div className="font-medium">{row.label}</div>
                {row.unit && <div className="text-zinc-600">{row.unit}</div>}
              </td>
              {row.values.map((v, i) => (
                <td key={i} className="px-4 py-3 text-center text-zinc-200">
                  <CellValue value={v} delta={row.deltas[i]} isRating={row.isRating} />
                </td>
              ))}
            </tr>
          ))}

          <tr className="border-b border-zinc-700 bg-zinc-900/30">
            <td className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wide" colSpan={materials.length + 1}>
              Processability & Cost
            </td>
          </tr>
          {rows.filter(r => ['corrosionResistance','weldability','machinability','relativeCost'].includes(r.key)).map((row) => (
            <tr key={row.key} className="border-b border-zinc-700/30 hover:bg-zinc-800/20">
              <td className="px-4 py-3 text-zinc-400 text-xs">
                <div className="font-medium">{row.label}</div>
                {row.unit && <div className="text-zinc-600">{row.unit}</div>}
              </td>
              {row.values.map((v, i) => (
                <td key={i} className="px-4 py-3 text-center text-zinc-200">
                  <CellValue value={v} delta={row.deltas[i]} isRating={row.isRating} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
