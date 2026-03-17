'use client';

import { Tooltip } from '../ui/Tooltip';
import { useViewMode } from '../ui/ViewToggle';
import { Range } from '../../data/types';
import clsx from 'clsx';

interface PropertyRowProps {
  label: string;
  value: string | number | Range | null | undefined;
  unit?: string;
  description?: string;
  beginnerTip?: string;
  highlight?: boolean;
  className?: string;
}

function formatRange(range: Range, unit?: string): string {
  if (range.typical != null) {
    return `${range.typical}${unit ? ' ' + unit : ''} (${range.min}–${range.max})`;
  }
  if (range.min === range.max) return `${range.min}${unit ? ' ' + unit : ''}`;
  return `${range.min}–${range.max}${unit ? ' ' + unit : ''}`;
}

export function PropertyRow({ label, value, unit, description, beginnerTip, highlight, className }: PropertyRowProps) {
  const { mode } = useViewMode();

  if (value === null || value === undefined) return null;

  let displayValue: string;
  if (typeof value === 'object' && 'min' in value) {
    displayValue = formatRange(value as Range, unit);
  } else {
    displayValue = `${value}${unit ? ' ' + unit : ''}`;
  }

  const tooltipText = mode === 'beginner' && beginnerTip ? beginnerTip : description ?? '';

  return (
    <div className={clsx(
      'flex items-center justify-between py-2 px-3 rounded-lg',
      highlight ? 'bg-zinc-800/60' : 'hover:bg-zinc-800/30',
      className
    )}>
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-sm text-zinc-400 truncate">{label}</span>
        {tooltipText && (
          <Tooltip content={tooltipText} />
        )}
      </div>
      <span className="text-sm font-medium text-zinc-100 ml-4 shrink-0">{displayValue}</span>
    </div>
  );
}
