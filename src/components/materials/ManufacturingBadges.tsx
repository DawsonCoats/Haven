import {
  Wrench,
  Flame,
  Layers,
  Hammer,
  Zap,
  Printer,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import type { ManufacturingProcess } from '../../data/types';

const PROCESS_META: Record<ManufacturingProcess, { label: string; Icon: React.ComponentType<{ className?: string }> }> = {
  machining:  { label: 'Machining',  Icon: Wrench },
  casting:    { label: 'Casting',    Icon: Flame },
  forming:    { label: 'Forming',    Icon: Layers },
  forging:    { label: 'Forging',    Icon: Hammer },
  welding:    { label: 'Welding',    Icon: Zap },
  additive:   { label: 'Additive',   Icon: Printer },
  extrusion:  { label: 'Extrusion',  Icon: ArrowRight },
  rolling:    { label: 'Rolling',    Icon: RotateCcw },
};

export function ManufacturingBadges({ processes }: { processes: ManufacturingProcess[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {processes.map((p) => {
        const { label, Icon } = PROCESS_META[p];
        return (
          <span
            key={p}
            className="inline-flex items-center gap-1.5 text-xs bg-zinc-800/80 border border-zinc-700 text-zinc-300 px-2 py-1 rounded-md"
            title={label}
          >
            <Icon className="w-3 h-3 text-zinc-500" />
            {label}
          </span>
        );
      })}
    </div>
  );
}
