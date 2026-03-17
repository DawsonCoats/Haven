'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { allMaterials } from '../../data';
import { searchMaterials } from '../../lib/search';
import { Material } from '../../data/types';
import clsx from 'clsx';

interface SearchBarProps {
  className?: string;
  onSelect?: (material: Material) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export function SearchBar({ className, onSelect, placeholder = 'Search materials, grades, applications...', autoFocus }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Material[]>([]);
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    const found = searchMaterials(allMaterials, query).slice(0, 8);
    setResults(found);
    setOpen(found.length > 0);
    setHighlighted(0);
  }, [query]);

  function handleSelect(material: Material) {
    setQuery('');
    setOpen(false);
    if (onSelect) {
      onSelect(material);
    } else {
      router.push(`/materials/${material.id}`);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[highlighted]) handleSelect(results[highlighted]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className={clsx('relative', className)}>
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-zinc-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(''); setOpen(false); }}
            className="absolute right-3 text-zinc-400 hover:text-zinc-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      {open && (
        <div className="absolute z-50 top-full mt-1 w-full rounded-xl bg-zinc-800 border border-zinc-700 shadow-2xl overflow-hidden">
          {results.map((m, i) => (
            <button
              key={m.id}
              type="button"
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
                i === highlighted ? 'bg-zinc-700' : 'hover:bg-zinc-700/50'
              )}
              onMouseDown={() => handleSelect(m)}
              onMouseEnter={() => setHighlighted(i)}
            >
              <span className={clsx(
                'text-xs font-medium px-2 py-0.5 rounded-full',
                m.family === 'aluminum' ? 'bg-blue-900/60 text-blue-300' : 'bg-orange-900/60 text-orange-300'
              )}>
                {m.family === 'aluminum' ? 'Al' : 'Steel'}
              </span>
              <span className="text-sm text-zinc-100">{m.name}</span>
              <span className="text-xs text-zinc-500 ml-auto">{m.subFamily}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
