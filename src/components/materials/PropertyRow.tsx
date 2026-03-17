'use client';

import { Tooltip } from '../ui/Tooltip';
import { Range } from '../../data/types';
import clsx from 'clsx';
import { useUnits } from '../ui/UnitsContext';
import { unitLabels, formatValue, formatRange as fmtRange } from '../../lib/units';

type UnitType = keyof typeof unitLabels;

interface PropertyRowProps {
  label: string;
  value: string | number | Range | null | undefined;
  unit?: string;
  unitType?: UnitType;
  description?: string;
  highlight?: boolean;
  className?: string;
}

function formatRangeLegacy(range: Range, unit?: string): string {
  if (range.typical != null) {
    return `${range.typical}${unit ? ' ' + unit : ''} (${range.min}–${range.max})`;
  }
  if (range.min === range.max) return `${range.min}${unit ? ' ' + unit : ''}`;
  return `${range.min}–${range.max}${unit ? ' ' + unit : ''}`;
}

export function PropertyRow({ label, value, unit, unitType, description, highlight, className }: PropertyRowProps) {
  const { units } = useUnits();

  if (value === null || value === undefined) return null;

  let displayValue: string;

  if (unitType) {
    const label_ = unitLabels[unitType][units];
    if (typeof value === 'object' && 'min' in value) {
      const rangeStr = fmtRange(value as Range, unitType, units);
      displayValue = `${rangeStr} ${label_}`;
    } else if (typeof value === 'number') {
      displayValue = `${formatValue(value, unitType, units)} ${label_}`;
    } else {
      // string value — can't convert, just show with unit label
      displayValue = `${value} ${label_}`;
    }
  } else {
    if (typeof value === 'object' && 'min' in value) {
      displayValue = formatRangeLegacy(value as Range, unit);
    } else {
      displayValue = `${value}${unit ? ' ' + unit : ''}`;
    }
  }

  const tooltipText = description ?? '';

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
