'use client';

import { useState, useMemo } from 'react';
import { allMaterials } from '../../data';
import { filterMaterials, getSubFamilies } from '../../lib/search';
import { MaterialCard } from '../../components/materials/MaterialCard';
import { MaterialTable } from '../../components/materials/MaterialTable';
import { SearchBar } from '../../components/ui/SearchBar';
import { SearchFilters } from '../../lib/search';
import { MaterialFamily } from '../../data/types';
import { LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react';
import clsx from 'clsx';

type ViewType = 'grid' | 'table';

// Re-export from types but local for filter state
interface FilterState {
  query: string;
  family: MaterialFamily | '';
  subFamily: string;
  heatTreatable: boolean | undefined;
  maxCost: number;
}

export default function MaterialsPage() {
  const [view, setView] = useState<ViewType>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    query: '',
    family: '',
    subFamily: '',
    heatTreatable: undefined,
    maxCost: 5,
  });

  const subFamilies = useMemo(() => getSubFamilies(allMaterials), []);

  const filtered = useMemo(() => {
    const searchFilters: SearchFilters = {
      query: filters.query || undefined,
      family: filters.family || undefined,
      subFamily: filters.subFamily || undefined,
      heatTreatable: filters.heatTreatable,
      maxCost: filters.maxCost < 5 ? filters.maxCost : undefined,
    };
    return filterMaterials(allMaterials, searchFilters);
  }, [filters]);

  function clearFilters() {
    setFilters({ query: '', family: '', subFamily: '', heatTreatable: undefined, maxCost: 5 });
  }

  const hasActiveFilters = filters.query || filters.family || filters.subFamily || filters.heatTreatable !== undefined || filters.maxCost < 5;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Browse Materials</h1>
          <p className="text-sm text-zinc-500 mt-1">{filtered.length} of {allMaterials.length} materials</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFilters((s) => !s)}
            className={clsx(
              'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors border',
              showFilters ? 'bg-zinc-700 border-zinc-600 text-zinc-100' : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-200'
            )}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
            {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-blue-500" />}
          </button>
          <div className="flex bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => setView('grid')}
              className={clsx('p-2 transition-colors', view === 'grid' ? 'bg-zinc-700 text-zinc-100' : 'text-zinc-400 hover:text-zinc-200')}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setView('table')}
              className={clsx('p-2 transition-colors', view === 'table' ? 'bg-zinc-700 text-zinc-100' : 'text-zinc-400 hover:text-zinc-200')}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="mb-6 space-y-4">
        <SearchBar
          className="max-w-xl"
          onSelect={(m) => window.location.href = `/materials/${m.id}`}
        />
        {showFilters && (
          <div className="rounded-xl bg-zinc-800/50 border border-zinc-700 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-zinc-300">Filters</h3>
              {hasActiveFilters && (
                <button type="button" onClick={clearFilters} className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1">
                  <X className="w-3 h-3" /> Clear all
                </button>
              )}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Family</label>
                <select
                  value={filters.family}
                  onChange={(e) => setFilters((f) => ({ ...f, family: e.target.value as MaterialFamily | '', subFamily: '' }))}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">All families</option>
                  <option value="aluminum">Aluminum</option>
                  <option value="steel">Steel</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Sub-family</label>
                <select
                  value={filters.subFamily}
                  onChange={(e) => setFilters((f) => ({ ...f, subFamily: e.target.value }))}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">All series</option>
                  {subFamilies
                    .filter((sf) => !filters.family || allMaterials.some((m) => m.subFamily === sf && m.family === filters.family))
                    .map((sf) => (
                      <option key={sf} value={sf}>{sf}</option>
                    ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Heat Treatable</label>
                <select
                  value={filters.heatTreatable === undefined ? '' : String(filters.heatTreatable)}
                  onChange={(e) => setFilters((f) => ({
                    ...f,
                    heatTreatable: e.target.value === '' ? undefined : e.target.value === 'true',
                  }))}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Any</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Max Cost: {'$'.repeat(filters.maxCost)}</label>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={filters.maxCost}
                  onChange={(e) => setFilters((f) => ({ ...f, maxCost: Number(e.target.value) }))}
                  className="w-full accent-blue-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-zinc-500">
          <p className="text-lg mb-2">No materials found</p>
          <button type="button" onClick={clearFilters} className="text-sm text-blue-400 hover:underline">Clear filters</button>
        </div>
      ) : view === 'grid' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <MaterialCard key={m.id} material={m} showFamily />
          ))}
        </div>
      ) : (
        <MaterialTable materials={filtered} />
      )}
    </div>
  );
}
