'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { allMaterials } from '../../data';
import { filterMaterials, getSubFamilies } from '../../lib/search';
import { MaterialCard } from '../../components/materials/MaterialCard';
import { MaterialTable } from '../../components/materials/MaterialTable';
import { SearchBar } from '../../components/ui/SearchBar';
import { SearchFilters } from '../../lib/search';
import { MaterialFamily, Rating } from '../../data/types';
import { LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react';
import clsx from 'clsx';

type ViewType = 'grid' | 'table';

type MinRating = '' | 'Poor+' | 'Fair+' | 'Good+' | 'Excellent';

type SortBy = 'default' | 'strength' | 'yield' | 'density';

// Re-export from types but local for filter state
interface FilterState {
  query: string;
  family: MaterialFamily | '';
  subFamily: string;
  heatTreatable: boolean | undefined;
  maxCost: number;
  minTensile: string;
  minYield: string;
  maxDensity: string;
  minCorrosionResistance: MinRating;
  minWeldability: MinRating;
  minMachinability: MinRating;
  minFormability: MinRating;
  minCastability: MinRating;
  sortBy: SortBy;
}

const RATING_SCORE: Record<Rating, number> = {
  Excellent: 4,
  Good: 3,
  Fair: 2,
  Poor: 1,
  'N/A': 0,
};

const MIN_RATING_SCORE: Record<MinRating, number> = {
  '': 0,
  'Poor+': 1,
  'Fair+': 2,
  'Good+': 3,
  'Excellent': 4,
};

const DEFAULT_FILTERS: FilterState = {
  query: '',
  family: '',
  subFamily: '',
  heatTreatable: undefined,
  maxCost: 5,
  minTensile: '',
  minYield: '',
  maxDensity: '',
  minCorrosionResistance: '',
  minWeldability: '',
  minMachinability: '',
  minFormability: '',
  minCastability: '',
  sortBy: 'default',
};

const RATING_OPTIONS: { value: MinRating; label: string }[] = [
  { value: '', label: 'Any' },
  { value: 'Poor+', label: 'Poor+' },
  { value: 'Fair+', label: 'Fair+' },
  { value: 'Good+', label: 'Good+' },
  { value: 'Excellent', label: 'Excellent' },
];

const inputClass =
  'w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-zinc-600';

function parseMinRating(value: string | null): MinRating {
  const valid: MinRating[] = ['', 'Poor+', 'Fair+', 'Good+', 'Excellent'];
  if (value && valid.includes(value as MinRating)) return value as MinRating;
  return '';
}

export function MaterialsPageContent() {
  const searchParams = useSearchParams();

  const [view, setView] = useState<ViewType>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState<FilterState>(() => {
    const sort = searchParams.get('sort');
    const minCorrosion = searchParams.get('minCorrosion');
    const minWeldability = searchParams.get('minWeldability');
    const minMachinability = searchParams.get('minMachinability');
    const minFormability = searchParams.get('minFormability');
    const minCastability = searchParams.get('minCastability');

    const sortBy: SortBy =
      sort === 'strength' ? 'strength' :
      sort === 'yield' ? 'yield' :
      sort === 'density' ? 'density' :
      'default';

    return {
      ...DEFAULT_FILTERS,
      sortBy,
      minCorrosionResistance: parseMinRating(minCorrosion),
      minWeldability: parseMinRating(minWeldability),
      minMachinability: parseMinRating(minMachinability),
      minFormability: parseMinRating(minFormability),
      minCastability: parseMinRating(minCastability),
    };
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
    let results = filterMaterials(allMaterials, searchFilters);

    const minTensile = filters.minTensile !== '' ? parseFloat(filters.minTensile) : null;
    const minYield = filters.minYield !== '' ? parseFloat(filters.minYield) : null;
    const maxDensity = filters.maxDensity !== '' ? parseFloat(filters.maxDensity) : null;
    const minCorrosionScore = MIN_RATING_SCORE[filters.minCorrosionResistance];
    const minWeldabilityScore = MIN_RATING_SCORE[filters.minWeldability];
    const minMachinabilityScore = MIN_RATING_SCORE[filters.minMachinability];
    const minFormabilityScore = MIN_RATING_SCORE[filters.minFormability];
    const minCastabilityScore = MIN_RATING_SCORE[filters.minCastability];

    results = results.filter((m) => {
      if (minTensile !== null) {
        const typical = m.mechanical.tensileStrength.typical;
        if (typical === undefined || typical < minTensile) return false;
      }
      if (minYield !== null) {
        const typical = m.mechanical.yieldStrength.typical;
        if (typical === undefined || typical < minYield) return false;
      }
      if (maxDensity !== null) {
        if (m.mechanical.density > maxDensity) return false;
      }
      if (filters.minCorrosionResistance !== '') {
        if (RATING_SCORE[m.corrosionResistance] < minCorrosionScore) return false;
      }
      if (filters.minWeldability !== '') {
        if (RATING_SCORE[m.processability.weldability] < minWeldabilityScore) return false;
      }
      if (filters.minMachinability !== '') {
        if (RATING_SCORE[m.processability.machinability] < minMachinabilityScore) return false;
      }
      if (filters.minFormability !== '') {
        if (RATING_SCORE[m.processability.formability] < minFormabilityScore) return false;
      }
      if (filters.minCastability !== '') {
        const castability = m.processability.castability;
        if (!castability || RATING_SCORE[castability] < minCastabilityScore) return false;
      }
      return true;
    });

    // Sort
    if (filters.sortBy === 'strength') {
      results = [...results].sort((a, b) => {
        const aVal = a.mechanical.tensileStrength.typical ?? a.mechanical.tensileStrength.max;
        const bVal = b.mechanical.tensileStrength.typical ?? b.mechanical.tensileStrength.max;
        return (bVal ?? 0) - (aVal ?? 0);
      });
    } else if (filters.sortBy === 'yield') {
      results = [...results].sort((a, b) => {
        const aVal = a.mechanical.yieldStrength.typical ?? a.mechanical.yieldStrength.max;
        const bVal = b.mechanical.yieldStrength.typical ?? b.mechanical.yieldStrength.max;
        return (bVal ?? 0) - (aVal ?? 0);
      });
    } else if (filters.sortBy === 'density') {
      results = [...results].sort((a, b) => a.mechanical.density - b.mechanical.density);
    }

    return results;
  }, [filters]);

  function clearFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  const activeFilterCount = [
    filters.query,
    filters.family,
    filters.subFamily,
    filters.heatTreatable !== undefined ? true : false,
    filters.maxCost < 5,
    filters.minTensile !== '',
    filters.minYield !== '',
    filters.maxDensity !== '',
    filters.minCorrosionResistance !== '',
    filters.minWeldability !== '',
    filters.minMachinability !== '',
    filters.minFormability !== '',
    filters.minCastability !== '',
    filters.sortBy !== 'default',
  ].filter(Boolean).length;

  const hasActiveFilters = activeFilterCount > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Browse Materials</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Showing {filtered.length} of {allMaterials.length} materials
          </p>
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
            {hasActiveFilters && (
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] font-bold leading-none">
                {activeFilterCount}
              </span>
            )}
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

            {/* Row 1: existing filters */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Family</label>
                <select
                  value={filters.family}
                  onChange={(e) => setFilters((f) => ({ ...f, family: e.target.value as MaterialFamily | '', subFamily: '' }))}
                  className={inputClass}
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
                  className={inputClass}
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
                  className={inputClass}
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

            {/* Divider */}
            <div className="border-t border-zinc-700 mb-4" />

            {/* Row 2: property range filters + sort */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Min Tensile Strength (MPa)</label>
                <input
                  type="number"
                  min={0}
                  placeholder="e.g. 300"
                  value={filters.minTensile}
                  onChange={(e) => setFilters((f) => ({ ...f, minTensile: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Min Yield Strength (MPa)</label>
                <input
                  type="number"
                  min={0}
                  placeholder="e.g. 200"
                  value={filters.minYield}
                  onChange={(e) => setFilters((f) => ({ ...f, minYield: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Max Density (g/cm³)</label>
                <input
                  type="number"
                  min={0}
                  step={0.1}
                  placeholder="e.g. 3.0"
                  value={filters.maxDensity}
                  onChange={(e) => setFilters((f) => ({ ...f, maxDensity: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters((f) => ({ ...f, sortBy: e.target.value as SortBy }))}
                  className={inputClass}
                >
                  <option value="default">Default</option>
                  <option value="strength">Strength (UTS↓)</option>
                  <option value="yield">Yield↓</option>
                  <option value="density">Density↑</option>
                </select>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-700 mb-4" />

            {/* Row 3: rating filters */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Min Corrosion Resistance</label>
                <select
                  value={filters.minCorrosionResistance}
                  onChange={(e) => setFilters((f) => ({ ...f, minCorrosionResistance: e.target.value as MinRating }))}
                  className={inputClass}
                >
                  {RATING_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Min Weldability</label>
                <select
                  value={filters.minWeldability}
                  onChange={(e) => setFilters((f) => ({ ...f, minWeldability: e.target.value as MinRating }))}
                  className={inputClass}
                >
                  {RATING_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Min Machinability</label>
                <select
                  value={filters.minMachinability}
                  onChange={(e) => setFilters((f) => ({ ...f, minMachinability: e.target.value as MinRating }))}
                  className={inputClass}
                >
                  {RATING_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Min Formability</label>
                <select
                  value={filters.minFormability}
                  onChange={(e) => setFilters((f) => ({ ...f, minFormability: e.target.value as MinRating }))}
                  className={inputClass}
                >
                  {RATING_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1.5">Min Castability</label>
                <select
                  value={filters.minCastability}
                  onChange={(e) => setFilters((f) => ({ ...f, minCastability: e.target.value as MinRating }))}
                  className={inputClass}
                >
                  {RATING_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
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
