import Link from 'next/link';
import { Material } from '../../data/types';
import { RatingBadge } from './RatingBadge';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface MaterialCardProps {
  material: Material;
  showFamily?: boolean;
  className?: string;
}

export function MaterialCard({ material: m, showFamily, className }: MaterialCardProps) {
  const uts = m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min;
  const ys = m.mechanical.yieldStrength.typical ?? m.mechanical.yieldStrength.min;

  return (
    <Link
      href={`/materials/${m.id}`}
      className={clsx(
        'group block rounded-xl bg-zinc-800/50 border border-zinc-700/50 p-4 hover:bg-zinc-800 hover:border-zinc-600 transition-all',
        className
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-zinc-100 text-sm group-hover:text-white">{m.name}</h3>
          {showFamily && (
            <p className="text-xs text-zinc-500 mt-0.5">{m.subFamily}</p>
          )}
        </div>
        <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0 mt-0.5" />
      </div>

      <p className="text-xs text-zinc-400 line-clamp-2 mb-3">{m.description.slice(0, 100)}...</p>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-zinc-900/50 rounded-lg p-2">
          <p className="text-[10px] text-zinc-500 mb-0.5">UTS</p>
          <p className="text-sm font-semibold text-zinc-200">{uts} <span className="text-xs font-normal text-zinc-500">MPa</span></p>
        </div>
        <div className="bg-zinc-900/50 rounded-lg p-2">
          <p className="text-[10px] text-zinc-500 mb-0.5">Yield</p>
          <p className="text-sm font-semibold text-zinc-200">{ys} <span className="text-xs font-normal text-zinc-500">MPa</span></p>
        </div>
        <div className="bg-zinc-900/50 rounded-lg p-2">
          <p className="text-[10px] text-zinc-500 mb-0.5">Density</p>
          <p className="text-sm font-semibold text-zinc-200">{m.mechanical.density} <span className="text-xs font-normal text-zinc-500">g/cm³</span></p>
        </div>
        <div className="bg-zinc-900/50 rounded-lg p-2">
          <p className="text-[10px] text-zinc-500 mb-0.5">Weldability</p>
          <RatingBadge rating={m.processability.weldability} size="sm" />
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <RatingBadge rating={m.corrosionResistance} size="sm" />
        <span className="text-xs bg-zinc-900/50 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-700">
          Cost: {'$'.repeat(m.relativeCost)}
        </span>
        {m.processability.heatTreatable && (
          <span className="text-xs bg-purple-900/30 text-purple-400 px-2 py-0.5 rounded-full border border-purple-800/50">
            Heat treatable
          </span>
        )}
      </div>
    </Link>
  );
}
