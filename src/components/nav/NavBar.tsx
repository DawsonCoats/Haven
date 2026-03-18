'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layers, GitCompare, Home, ChevronDown, Zap } from 'lucide-react';
import { SearchBar } from '../ui/SearchBar';
import { UnitsToggle } from '../ui/UnitsContext';
import clsx from 'clsx';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/materials', label: 'Browse', icon: Layers },
  { href: '/compare', label: 'Compare', icon: GitCompare },
  { href: '/compatibility', label: 'Compatibility', icon: Zap },
];

export function NavBar() {
  const pathname = usePathname();
  const [familiesOpen, setFamiliesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-bold tracking-tight text-zinc-100">Haven</span>
          <span className="text-xs text-zinc-500 hidden sm:block">Material DB</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors',
                pathname === href
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </Link>
          ))}

          {/* Families dropdown */}
          <div className="relative">
            <button
              type="button"
              className={clsx(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors',
                pathname.startsWith('/families')
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              )}
              onClick={() => setFamiliesOpen((o) => !o)}
              onBlur={() => setTimeout(() => setFamiliesOpen(false), 150)}
            >
              Families
              <ChevronDown className={clsx('w-3 h-3 transition-transform', familiesOpen && 'rotate-180')} />
            </button>
            {familiesOpen && (
              <div className="absolute top-full mt-1 left-0 w-52 rounded-xl bg-zinc-800 border border-zinc-700 shadow-xl overflow-hidden">
                <Link href="/families/aluminum" className="block px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-700">
                  Aluminum Alloys
                </Link>
                <Link href="/families/steel" className="block px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-700">
                  Steel Alloys
                </Link>
                <Link href="/families/titanium" className="block px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-700">
                  Titanium Alloys
                </Link>
                <Link href="/families/copper" className="block px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-700">
                  Copper Alloys
                </Link>
                <Link href="/families/cast-iron" className="block px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-700">
                  Cast Iron
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Search + Units toggle */}
        <div className="flex-1 flex items-center gap-3 justify-end">
          <div className="max-w-sm flex-1 hidden sm:block">
            <SearchBar />
          </div>
          <UnitsToggle className="shrink-0" />
        </div>

      </nav>
    </header>
  );
}
