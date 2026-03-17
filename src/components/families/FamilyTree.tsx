import Link from 'next/link';
import { Material } from '../../data/types';
import clsx from 'clsx';

interface SeriesGroup {
  slug: string;
  label: string;
  materials: Material[];
}

interface FamilyTreeProps {
  familySlug: string;
  seriesGroups: SeriesGroup[];
  className?: string;
}

export function FamilyTree({ familySlug, seriesGroups, className }: FamilyTreeProps) {
  return (
    <div className={clsx('space-y-3', className)}>
      {seriesGroups.map((group) => {
        const avgUTS = Math.round(
          group.materials.reduce((sum, m) => sum + (m.mechanical.tensileStrength.typical ?? m.mechanical.tensileStrength.min), 0) /
          group.materials.length
        );
        return (
          <div key={group.slug} className="rounded-xl border border-zinc-700/50 bg-zinc-800/30 overflow-hidden">
            <Link
              href={`/families/${familySlug}/${group.slug}`}
              className="flex items-center justify-between px-4 py-3 hover:bg-zinc-700/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono font-semibold text-blue-400 text-sm">{group.label}</span>
                <span className="text-xs text-zinc-500">{group.materials.length} grade{group.materials.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span>Avg UTS: <span className="text-zinc-300">{avgUTS} MPa</span></span>
                <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">→</span>
              </div>
            </Link>
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {group.materials.map((m) => (
                <Link
                  key={m.id}
                  href={`/materials/${m.id}`}
                  className="text-xs bg-zinc-900/60 border border-zinc-700 text-zinc-300 hover:text-blue-400 hover:border-blue-800 px-2.5 py-1 rounded-lg transition-all"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
