'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getMaterialById } from '../../data';
import { CompareTable } from '../../components/compare/CompareTable';
import { CompareSelector } from '../../components/compare/CompareSelector';
import { PropertyBarChart } from '../../components/charts';
import { Material } from '../../data/types';
import { GitCompare, Info } from 'lucide-react';

export function ComparePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const ids = searchParams.get('ids');
    if (ids) {
      const parsed = ids.split(',').filter((id) => getMaterialById(id));
      setSelectedIds(parsed.slice(0, 4));
    }
  }, [searchParams]);

  function updateUrl(ids: string[]) {
    const params = new URLSearchParams();
    if (ids.length > 0) params.set('ids', ids.join(','));
    router.replace(`/compare?${params.toString()}`, { scroll: false });
  }

  function handleAdd(id: string) {
    const next = [...selectedIds, id].slice(0, 4);
    setSelectedIds(next);
    updateUrl(next);
  }

  function handleRemove(id: string) {
    const next = selectedIds.filter((i) => i !== id);
    setSelectedIds(next);
    updateUrl(next);
  }

  const materials = selectedIds
    .map((id) => getMaterialById(id))
    .filter((m): m is Material => m !== undefined);

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/compare?ids=${selectedIds.join(',')}`
    : '';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <GitCompare className="w-6 h-6 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-zinc-100">Compare Materials</h1>
            <p className="text-sm text-zinc-500 mt-0.5">Side-by-side property comparison</p>
          </div>
        </div>
        {selectedIds.length >= 2 && shareUrl && (
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(shareUrl)}
            className="text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-700 bg-zinc-800 px-3 py-1.5 rounded-lg transition-colors"
            title="Copy shareable link"
          >
            Copy link
          </button>
        )}
      </div>

      {/* Selector */}
      <div className="mb-8">
        <CompareSelector
          selected={selectedIds}
          onAdd={handleAdd}
          onRemove={handleRemove}
          maxItems={4}
        />
      </div>

      {materials.length === 0 && (
        <div className="rounded-2xl border border-zinc-700/50 border-dashed p-16 text-center">
          <GitCompare className="w-10 h-10 text-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-400 mb-2">Add materials to compare</p>
          <p className="text-xs text-zinc-600">Search above or use a featured comparison link from the home page</p>
        </div>
      )}

      {materials.length === 1 && (
        <div className="rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-6 text-center">
          <Info className="w-5 h-5 text-blue-400 mx-auto mb-2" />
          <p className="text-zinc-400 text-sm">Add at least one more material to compare.</p>
          <p className="text-xs text-zinc-600 mt-1">You can compare up to 4 materials at once.</p>
        </div>
      )}

      {materials.length >= 2 && (
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs text-zinc-500 flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-900/60 border border-emerald-700" />
              Best value
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded-full bg-red-900/60 border border-red-700" />
              Worst value
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-900/60 border border-yellow-700" />
              Mid range
            </span>
          </div>
          <CompareTable materials={materials} />
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-zinc-200 mb-4">Visual Comparison</h2>
            <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 p-4">
              <PropertyBarChart materials={materials} />
            </div>
          </div>
        </div>
      )}

      {materials.length === 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-medium text-zinc-400 mb-3">Popular Comparisons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { ids: ['al-6061', 'al-7075'], label: '6061 vs 7075' },
              { ids: ['steel-304ss', 'steel-316ss'], label: '304 vs 316 SS' },
              { ids: ['al-6061', 'steel-4140'], label: '6061 Al vs 4140' },
              { ids: ['steel-a36', 'steel-4140'], label: 'A36 vs 4140' },
            ].map(({ ids, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setSelectedIds(ids);
                  updateUrl(ids);
                }}
                className="rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4 text-left hover:bg-zinc-800/60 hover:border-zinc-600 transition-all"
              >
                <p className="text-sm font-medium text-zinc-200">{label}</p>
                <p className="text-xs text-zinc-500 mt-1">Quick compare →</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
