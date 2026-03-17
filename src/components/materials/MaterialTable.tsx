'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Material } from '../../data/types';
import { RatingBadge } from './RatingBadge';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { sortMaterials } from '../../lib/search';
import clsx from 'clsx';

type SortKey = 'name' | 'tensileStrength' | 'yieldStrength' | 'density' | 'cost';

interface MaterialTableProps {
  materials: Material[];
  className?: string;
}

export function MaterialTable({ materials, className }: MaterialTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const sorted = sortMaterials(materials, sortKey, sortDir);

  function SortIcon({ col }: { col: SortKey }) {
    if (col !== sortKey) return <ArrowUpDown className="w-3 h-3 opacity-30" />;
    return sortDir === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />;
  }

  function ColHeader({ col, label, align = 'left' }: { col: SortKey; label: string; align?: 'left' | 'right' }) {
    return (
      <th
        className={clsx(
          'px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide cursor-pointer hover:text-zinc-200 select-none',
          align === 'right' ? 'text-right' : 'text-left'
        )}
        onClick={() => handleSort(col)}
      >
        <span className={clsx('inline-flex items-center gap-1', align === 'right' && 'flex-row-reverse')}>
          {label}
          <SortIcon col={col} />
        </span>
      </th>
    );
  }

  return (
    <div className={clsx('overflow-x-auto rounded-xl border border-zinc-700', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-700 bg-zinc-800/50">
            <ColHeader col="name" label="Material" />
            <th className="px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide text-left">Series</th>
            <ColHeader col="tensileStrength" label="UTS (MPa)" align="right" />
            <ColHeader col="yieldStrength" label="YS (MPa)" align="right" />
            <ColHeader col="density" label="Density" align="right" />
            <th className="px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">Corrosion</th>
            <th className="px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">Weldability</th>
            <ColHeader col="cost" label="Cost" align="right" />
          </tr>
        </thead>
        <tbody>
          {sorted.map((m, i) => {
            const uts = m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min;
            const ys = m.mechanical.yieldStrength.typical ?? m.mechanical.yieldStrength.min;
            return (
              <tr
                key={m.id}
                className={clsx(
                  'border-b border-zinc-700/30 hover:bg-zinc-800/40 transition-colors',
                  i % 2 === 1 ? 'bg-zinc-800/10' : ''
                )}
              >
                <td className="px-4 py-3">
                  <Link href={`/materials/${m.id}`} className="font-medium text-zinc-100 hover:text-blue-400 transition-colors">
                    {m.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-zinc-500 text-xs">{m.subFamily}</td>
                <td className="px-4 py-3 text-right text-zinc-200 tabular-nums">{uts}</td>
                <td className="px-4 py-3 text-right text-zinc-200 tabular-nums">{ys}</td>
                <td className="px-4 py-3 text-right text-zinc-400 tabular-nums text-xs">
                  {m.mechanical.density} g/cm³
                </td>
                <td className="px-4 py-3"><RatingBadge rating={m.corrosionResistance} size="sm" /></td>
                <td className="px-4 py-3"><RatingBadge rating={m.processability.weldability} size="sm" /></td>
                <td className="px-4 py-3 text-right text-zinc-400 text-xs">{'$'.repeat(m.relativeCost)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
