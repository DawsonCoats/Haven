'use client';

import { useState } from 'react';
import { allMaterials } from '../../data';
import { searchMaterials } from '../../lib/search';
import { Material } from '../../data/types';
import { Search, X } from 'lucide-react';
import clsx from 'clsx';

interface CompareSelectorProps {
  selected: string[];
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  maxItems?: number;
}

export function CompareSelector({ selected, onAdd, onRemove, maxItems = 4 }: CompareSelectorProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const results = query.length >= 2
    ? searchMaterials(allMaterials, query).filter((m) => !selected.includes(m.id)).slice(0, 8)
    : [];

  const selectedMaterials = selected
    .map((id) => allMaterials.find((m) => m.id === id))
    .filter((m): m is Material => m !== undefined);

  function handleAdd(material: Material) {
    onAdd(material.id);
    setQuery('');
    setOpen(false);
  }

  return (
    <div className="space-y-3">
      {/* Selected chips */}
      <div className="flex flex-wrap gap-2">
        {selectedMaterials.map((m) => (
          <div
            key={m.id}
            className="flex items-center gap-2 bg-zinc-700 border border-zinc-600 rounded-lg px-3 py-1.5"
          >
            <span className={clsx(
              'text-xs font-medium px-1.5 py-0.5 rounded',
              m.family === 'aluminum' ? 'bg-blue-900/60 text-blue-300' : 'bg-orange-900/60 text-orange-300'
            )}>
              {m.family === 'aluminum' ? 'Al' : 'Fe'}
            </span>
            <span className="text-sm text-zinc-100">{m.name}</span>
            <button
              type="button"
              onClick={() => onRemove(m.id)}
              className="text-zinc-500 hover:text-zinc-300 transition-colors ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
        {selected.length < maxItems && (
          <div className="relative">
            <div className="relative flex items-center">
              <Search className="absolute left-2.5 w-3.5 h-3.5 text-zinc-500 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                placeholder="Add material..."
                className="pl-8 pr-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-600 border-dashed text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 w-48"
              />
            </div>
            {open && results.length > 0 && (
              <div className="absolute z-50 top-full mt-1 left-0 w-64 rounded-xl bg-zinc-800 border border-zinc-700 shadow-2xl overflow-hidden">
                {results.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className="w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-zinc-700 transition-colors"
                    onMouseDown={() => handleAdd(m)}
                  >
                    <span className={clsx(
                      'text-xs font-medium px-1.5 py-0.5 rounded shrink-0',
                      m.family === 'aluminum' ? 'bg-blue-900/60 text-blue-300' : 'bg-orange-900/60 text-orange-300'
                    )}>
                      {m.family === 'aluminum' ? 'Al' : 'Fe'}
                    </span>
                    <span className="text-sm text-zinc-200">{m.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {selected.length >= maxItems && (
        <p className="text-xs text-zinc-500">Maximum {maxItems} materials. Remove one to add another.</p>
      )}
    </div>
  );
}
