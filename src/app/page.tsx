import React from 'react';
import Link from 'next/link';
import { SearchBar } from '../components/ui/SearchBar';
import { allMaterials, getMaterialsByFamily } from '../data';
import { ArrowRight, Zap, Shield, Wrench, GitCompare, Flame, Square, Droplets } from 'lucide-react';
import { AshbyPlot } from '../components/charts';


export default function HomePage() {
  const aluminums = getMaterialsByFamily('aluminum');
  const steels = getMaterialsByFamily('steel');
  const titaniums = getMaterialsByFamily('titanium');
  const coppers = getMaterialsByFamily('copper');

  const featuredComparisons = [
    { ids: 'al-6061,al-7075', label: '6061 vs 7075', desc: 'The go-to vs the premium' },
    { ids: 'steel-304ss,steel-316ss', label: '304 vs 316 SS', desc: 'Standard vs marine-grade' },
    { ids: 'al-6061,steel-4140', label: '6061 Al vs 4140 Steel', desc: 'Aluminum vs alloy steel' },
    { ids: 'steel-a36,steel-1045', label: 'A36 vs 1045', desc: 'Structural vs machine steel' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4 tracking-tight">
          Material Database
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
          Engineering reference for aluminum and steel alloys. Properties, grades, standards, and side-by-side comparisons.
        </p>
        <div className="max-w-xl mx-auto">
          <SearchBar className="w-full" placeholder="Search 6061, 304 stainless, aircraft aluminum..." />
        </div>
        <p className="text-xs text-zinc-600 mt-3">
          {allMaterials.length} materials · {aluminums.length} aluminum · {steels.length} steel · {titaniums.length} titanium · {coppers.length} copper
        </p>
      </div>

      {/* Quick Filters */}
      <div className="mb-12">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-3">Quick Filters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {([
            { icon: Zap,        label: 'Strength Data',      sub: 'Sort by UTS, yield, fatigue',   href: '/materials?sort=strength' },
            { icon: Shield,     label: 'Corrosion Resistant', sub: 'Good+ corrosion resistance',   href: '/materials?minCorrosion=Good%2B' },
            { icon: Flame,      label: 'Weldable',           sub: 'Good+ weldability',             href: '/materials?minWeldability=Good%2B' },
            { icon: Wrench,     label: 'Machinable',         sub: 'Good+ machinability',           href: '/materials?minMachinability=Good%2B' },
            { icon: Square,     label: 'Formable',           sub: 'Bend, roll, stamp',             href: '/materials?minFormability=Good%2B' },
            { icon: Droplets,   label: 'Castable',           sub: 'Good+ castability',             href: '/materials?minCastability=Good%2B' },
            { icon: GitCompare, label: 'Compare',            sub: 'Side-by-side analysis',         href: '/compare' },
          ] as { icon: React.ElementType; label: string; sub: string; href: string }[]).map(({ icon: Icon, label, sub, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-start gap-3 rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all"
            >
              <Icon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-200 group-hover:text-white leading-tight">{label}</p>
                <p className="text-xs text-zinc-500 mt-0.5 leading-tight">{sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Family cards */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
        <Link href="/families/aluminum" className="group rounded-2xl bg-zinc-800/30 border border-zinc-700/50 p-5 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-bold text-zinc-100">Aluminum</h2>
              <p className="text-xs text-zinc-500 mt-0.5">{aluminums.length} grades · 1xxx–7xxx</p>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors shrink-0" />
          </div>
          <p className="text-xs text-zinc-400 mb-3">
            Structural, aerospace, marine, and architectural grades.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['1xxx', '2xxx', '3xxx', '4xxx', '5xxx', '6xxx', '7xxx'].map((s) => (
              <span key={s} className="text-[10px] bg-blue-900/30 text-blue-400 border border-blue-800/50 px-1.5 py-0.5 rounded font-mono">
                {s}
              </span>
            ))}
          </div>
        </Link>

        <Link href="/families/steel" className="group rounded-2xl bg-zinc-800/30 border border-zinc-700/50 p-5 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-bold text-zinc-100">Steel</h2>
              <p className="text-xs text-zinc-500 mt-0.5">{steels.length} grades · carbon to duplex</p>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 transition-colors shrink-0" />
          </div>
          <p className="text-xs text-zinc-400 mb-3">
            Carbon, alloy, stainless, PH, and duplex steels.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Carbon', 'Alloy', '300-SS', '400-SS', 'PH', 'Duplex'].map((s) => (
              <span key={s} className="text-[10px] bg-orange-900/30 text-orange-400 border border-orange-800/50 px-1.5 py-0.5 rounded">
                {s}
              </span>
            ))}
          </div>
        </Link>

        <Link href="/families/titanium" className="group rounded-2xl bg-zinc-800/30 border border-zinc-700/50 p-5 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-bold text-zinc-100">Titanium</h2>
              <p className="text-xs text-zinc-500 mt-0.5">{titaniums.length} grades · cp-Ti to Ti-6Al-4V</p>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-slate-400 transition-colors shrink-0" />
          </div>
          <p className="text-xs text-zinc-400 mb-3">
            Aerospace, medical, and corrosion-resistant alloys.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['cp-Ti', 'Alpha-Beta'].map((s) => (
              <span key={s} className="text-[10px] bg-slate-800/50 text-slate-400 border border-slate-700/50 px-1.5 py-0.5 rounded">
                {s}
              </span>
            ))}
          </div>
        </Link>

        <Link href="/families/copper" className="group rounded-2xl bg-zinc-800/30 border border-zinc-700/50 p-5 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base font-bold text-zinc-100">Copper</h2>
              <p className="text-xs text-zinc-500 mt-0.5">{coppers.length} grades · ETP to BeCu</p>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0" />
          </div>
          <p className="text-xs text-zinc-400 mb-3">
            Electrical, spring, bearing, and forming alloys.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Pure Cu', 'BeCu', 'Brass', 'Bronze'].map((s) => (
              <span key={s} className="text-[10px] bg-amber-900/30 text-amber-400 border border-amber-800/50 px-1.5 py-0.5 rounded">
                {s}
              </span>
            ))}
          </div>
        </Link>
      </div>

      {/* Ashby scatter plot */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-zinc-200 mb-1">Strength vs. Weight — All Materials</h2>
        <p className="text-xs text-zinc-500 mb-4">Click any point to open the material detail page</p>
        <div className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 p-4">
          <AshbyPlot materials={allMaterials} height={420} />
        </div>
      </div>

      {/* Featured comparisons */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-zinc-200 mb-4">Featured Comparisons</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {featuredComparisons.map(({ ids, label, desc }) => (
            <Link
              key={ids}
              href={`/compare?ids=${ids}`}
              className="group rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4 hover:bg-zinc-800/60 hover:border-zinc-600 transition-all"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-zinc-200 group-hover:text-white">{label}</p>
                <GitCompare className="w-3.5 h-3.5 text-zinc-600 group-hover:text-blue-400 shrink-0" />
              </div>
              <p className="text-xs text-zinc-500 mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/materials"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-xl transition-colors"
        >
          Browse All Materials
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
