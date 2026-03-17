import Link from 'next/link';
import { Material } from '../../data/types';
import { RatingBadge } from './RatingBadge';
import { ArrowRight } from 'lucide-react';

interface RelatedMaterialsProps {
  materials: Material[];
  title?: string;
}

export function RelatedMaterials({ materials, title = 'Also Consider' }: RelatedMaterialsProps) {
  if (!materials.length) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-3">{title}</h3>
      <div className="space-y-2">
        {materials.map((m) => {
          const uts = m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min;
          return (
            <Link
              key={m.id}
              href={`/materials/${m.id}`}
              className="group flex items-center justify-between rounded-lg bg-zinc-800/50 border border-zinc-700/50 px-3 py-2.5 hover:bg-zinc-700/50 hover:border-zinc-600 transition-all"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">{m.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{uts} MPa UTS · <span className="capitalize">{m.family}</span></p>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-2">
                <RatingBadge rating={m.corrosionResistance} size="sm" />
                <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
