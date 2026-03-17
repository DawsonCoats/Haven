import { Temper } from '../../data/types';
import clsx from 'clsx';

interface TemperTableProps {
  tempers: Temper[];
  className?: string;
}

function hardnessDisplay(h: Temper['hardness']): string {
  if (!h) return '—';
  const parts: string[] = [];
  if (h.brinell != null) parts.push(`${h.brinell} HB`);
  if (h.rockwellB != null) parts.push(`${h.rockwellB} HRB`);
  if (h.rockwellC != null) parts.push(`${h.rockwellC} HRC`);
  return parts.join(' / ') || '—';
}

function rangeDisplay(r: { min: number; max: number; typical?: number } | undefined, unit: string): string {
  if (!r) return '—';
  if (r.typical != null) return `${r.typical} ${unit}`;
  return `${r.min}–${r.max} ${unit}`;
}

export function TemperTable({ tempers, className }: TemperTableProps) {
  if (!tempers.length) return null;

  return (
    <div className={clsx('overflow-x-auto rounded-xl border border-zinc-700', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-700 bg-zinc-800/50">
            <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">Temper</th>
            <th className="text-left px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">Description</th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">UTS</th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">YS</th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">Elong.</th>
            <th className="text-right px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wide">Hardness</th>
          </tr>
        </thead>
        <tbody>
          {tempers.map((t, i) => (
            <tr
              key={t.designation}
              className={clsx(
                'border-b border-zinc-700/50',
                i % 2 === 0 ? 'bg-transparent' : 'bg-zinc-800/20'
              )}
            >
              <td className="px-4 py-3">
                <span className="font-mono font-semibold text-blue-400 text-sm">{t.designation}</span>
              </td>
              <td className="px-4 py-3 text-zinc-300 text-xs max-w-xs">{t.description}</td>
              <td className="px-4 py-3 text-right text-zinc-200 tabular-nums">
                {rangeDisplay(t.tensileStrength, 'MPa')}
              </td>
              <td className="px-4 py-3 text-right text-zinc-200 tabular-nums">
                {rangeDisplay(t.yieldStrength, 'MPa')}
              </td>
              <td className="px-4 py-3 text-right text-zinc-200 tabular-nums">
                {rangeDisplay(t.elongation, '%')}
              </td>
              <td className="px-4 py-3 text-right text-zinc-400 text-xs tabular-nums">
                {hardnessDisplay(t.hardness)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
