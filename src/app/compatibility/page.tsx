'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { allMaterials } from '../../data';
import { Material } from '../../data/types';
import {
  findWeldPairing,
  findBroadWeldPairing,
  getGalvanicRisk,
  WeldCompatibility,
  GalvanicRisk,
  GalvanicResult,
  WeldPairing,
} from '../../data/compatibility';
import { Flame, Zap, ChevronDown, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import clsx from 'clsx';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const FAMILY_LABELS: Record<string, string> = {
  aluminum: 'Aluminum Alloys',
  steel: 'Steel Alloys',
  titanium: 'Titanium Alloys',
  copper: 'Copper Alloys',
};

const FAMILY_TAG: Record<string, string> = {
  aluminum: 'Al',
  steel: 'Fe',
  titanium: 'Ti',
  copper: 'Cu',
};

const FAMILY_TAG_COLOR: Record<string, string> = {
  aluminum: 'bg-blue-900/60 text-blue-300',
  steel: 'bg-orange-900/60 text-orange-300',
  titanium: 'bg-violet-900/60 text-violet-300',
  copper: 'bg-amber-900/60 text-amber-300',
};

function weldBadgeColor(c: WeldCompatibility): string {
  switch (c) {
    case 'Excellent': return 'bg-emerald-900/50 border-emerald-700 text-emerald-300';
    case 'Good':      return 'bg-green-900/50 border-green-700 text-green-300';
    case 'Fair':      return 'bg-yellow-900/50 border-yellow-700 text-yellow-300';
    case 'Difficult': return 'bg-orange-900/50 border-orange-700 text-orange-300';
    case 'Not Recommended': return 'bg-red-900/50 border-red-700 text-red-300';
  }
}

function weldDotColor(c: WeldCompatibility): string {
  switch (c) {
    case 'Excellent': return 'bg-emerald-400';
    case 'Good':      return 'bg-green-400';
    case 'Fair':      return 'bg-yellow-400';
    case 'Difficult': return 'bg-orange-400';
    case 'Not Recommended': return 'bg-red-400';
  }
}

function galvanicBadgeColor(r: GalvanicRisk): string {
  switch (r) {
    case 'Low':      return 'bg-emerald-900/50 border-emerald-700 text-emerald-300';
    case 'Moderate': return 'bg-yellow-900/50 border-yellow-700 text-yellow-300';
    case 'High':     return 'bg-orange-900/50 border-orange-700 text-orange-300';
    case 'Severe':   return 'bg-red-900/50 border-red-700 text-red-300';
  }
}

function galvanicDotColor(r: GalvanicRisk): string {
  switch (r) {
    case 'Low':      return 'bg-emerald-400';
    case 'Moderate': return 'bg-yellow-400';
    case 'High':     return 'bg-orange-400';
    case 'Severe':   return 'bg-red-400';
  }
}

// ─── Material Picker ──────────────────────────────────────────────────────────

interface MaterialPickerProps {
  label: string;
  value: string;
  onChange: (id: string) => void;
}

function MaterialPicker({ label, value, onChange }: MaterialPickerProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const grouped = useMemo(() => {
    const families = ['aluminum', 'steel', 'titanium', 'copper'] as const;
    return families.map((fam) => ({
      family: fam,
      label: FAMILY_LABELS[fam],
      materials: allMaterials
        .filter((m) => m.family === fam)
        .filter((m) =>
          query.length < 2 ||
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.subFamily.toLowerCase().includes(query.toLowerCase())
        ),
    })).filter((g) => g.materials.length > 0);
  }, [query]);

  const selected = allMaterials.find((m) => m.id === value);

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-xs font-medium text-zinc-500 mb-1.5">{label}</label>
      <button
        type="button"
        className={clsx(
          'w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl',
          'bg-zinc-800 border border-zinc-700 text-sm transition-colors',
          'hover:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500',
          open && 'border-zinc-600 ring-1 ring-blue-500/50'
        )}
        onClick={() => setOpen((o) => !o)}
      >
        {selected ? (
          <span className="flex items-center gap-2 min-w-0">
            <span className={clsx('text-xs font-medium px-1.5 py-0.5 rounded shrink-0', FAMILY_TAG_COLOR[selected.family])}>
              {FAMILY_TAG[selected.family]}
            </span>
            <span className="text-zinc-100 truncate">{selected.name}</span>
            <span className="text-zinc-500 text-xs truncate hidden sm:block">{selected.subFamily}</span>
          </span>
        ) : (
          <span className="text-zinc-500">Select a material…</span>
        )}
        <ChevronDown className={clsx('w-4 h-4 text-zinc-500 shrink-0 transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute z-50 top-full mt-1 left-0 right-0 rounded-xl bg-zinc-800 border border-zinc-700 shadow-2xl overflow-hidden">
          {/* Search within picker */}
          <div className="p-2 border-b border-zinc-700">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search materials…"
              className="w-full px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              autoFocus
            />
          </div>
          <div className="max-h-72 overflow-y-auto">
            {grouped.map(({ family, label: famLabel, materials }) => (
              <div key={family}>
                <div className="px-3 py-1.5 text-xs font-semibold text-zinc-500 bg-zinc-850 sticky top-0 bg-zinc-800 border-b border-zinc-700/50">
                  {famLabel}
                </div>
                {materials.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className={clsx(
                      'w-full flex items-center gap-2 px-3 py-2 text-left transition-colors text-sm',
                      m.id === value ? 'bg-zinc-700 text-zinc-100' : 'hover:bg-zinc-700/60 text-zinc-300'
                    )}
                    onMouseDown={() => { onChange(m.id); setOpen(false); setQuery(''); }}
                  >
                    <span className={clsx('text-xs font-medium px-1.5 py-0.5 rounded shrink-0', FAMILY_TAG_COLOR[m.family])}>
                      {FAMILY_TAG[m.family]}
                    </span>
                    <span className="truncate">{m.name}</span>
                    <span className="text-zinc-500 text-xs ml-auto shrink-0 hidden sm:block">{m.subFamily}</span>
                  </button>
                ))}
              </div>
            ))}
            {grouped.length === 0 && (
              <div className="px-4 py-6 text-center text-sm text-zinc-500">No materials match your search.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Weld Result Card ─────────────────────────────────────────────────────────

interface WeldResultProps {
  matA: Material;
  matB: Material;
}

function WeldResult({ matA, matB }: WeldResultProps) {
  if (matA.id === matB.id) {
    return (
      <div className="rounded-2xl border border-emerald-700/40 bg-emerald-900/20 p-6 space-y-3">
        <div className="flex items-center gap-3">
          <span className={clsx('inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold', weldBadgeColor('Excellent'))}>
            <span className={clsx('w-2 h-2 rounded-full', weldDotColor('Excellent'))} />
            Excellent
          </span>
          <span className="text-sm text-zinc-300">Same material selected</span>
        </div>
        <p className="text-sm text-zinc-400">
          Autogenous weld (no filler) is possible. Joint properties will closely match the base metal.
          Use standard parameters for <span className="text-zinc-200">{matA.name}</span>.
        </p>
        {matA.processability.weldNotes && (
          <p className="text-xs text-zinc-500 border-t border-zinc-700/50 pt-3">{matA.processability.weldNotes}</p>
        )}
      </div>
    );
  }

  const pairing: WeldPairing | undefined =
    findWeldPairing(matA.subFamily, matB.subFamily) ??
    findBroadWeldPairing(matA.subFamily, matB.subFamily);

  if (!pairing) {
    return (
      <div className="rounded-2xl border border-zinc-700/50 bg-zinc-800/30 p-6 space-y-3">
        <div className="flex items-center gap-2 text-zinc-400">
          <Info className="w-4 h-4 shrink-0" />
          <span className="text-sm">No specific pairing data found for this combination.</span>
        </div>
        <p className="text-xs text-zinc-500">
          Consult a certified welding engineer. Review individual weldability ratings:&nbsp;
          <span className="text-zinc-300">{matA.name}</span> — {matA.processability.weldability};&nbsp;
          <span className="text-zinc-300">{matB.name}</span> — {matB.processability.weldability}.
        </p>
      </div>
    );
  }

  const borderColor: Record<WeldCompatibility, string> = {
    'Excellent': 'border-emerald-700/40 bg-emerald-900/20',
    'Good': 'border-green-700/40 bg-green-900/20',
    'Fair': 'border-yellow-700/40 bg-yellow-900/20',
    'Difficult': 'border-orange-700/40 bg-orange-900/20',
    'Not Recommended': 'border-red-700/40 bg-red-900/20',
  };

  return (
    <div className={clsx('rounded-2xl border p-6 space-y-4', borderColor[pairing.compatibility])}>
      {/* Badge row */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className={clsx('inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold', weldBadgeColor(pairing.compatibility))}>
          <span className={clsx('w-2 h-2 rounded-full', weldDotColor(pairing.compatibility))} />
          {pairing.compatibility}
        </span>
        <span className="text-xs text-zinc-400">
          {matA.subFamily} + {matB.subFamily}
        </span>
      </div>

      {/* Filler metal */}
      {pairing.fillerMetal && (
        <div className="flex items-start gap-2">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider w-28 shrink-0 pt-0.5">Filler Metal</span>
          <span className="text-sm text-zinc-200 font-mono">{pairing.fillerMetal}</span>
        </div>
      )}

      {/* Notes */}
      <div className="flex items-start gap-2">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider w-28 shrink-0 pt-0.5">Guidance</span>
        <p className="text-sm text-zinc-300 leading-relaxed">{pairing.notes}</p>
      </div>

      {/* Individual weldability reference */}
      <div className="border-t border-zinc-700/40 pt-3 grid grid-cols-2 gap-3">
        {[matA, matB].map((m) => (
          <div key={m.id} className="text-xs">
            <span className="text-zinc-500">{m.name}</span>
            <span className="ml-1.5 text-zinc-400">— weldability: </span>
            <span className={clsx('font-medium', {
              'text-emerald-400': m.processability.weldability === 'Excellent',
              'text-green-400': m.processability.weldability === 'Good',
              'text-yellow-400': m.processability.weldability === 'Fair',
              'text-red-400': m.processability.weldability === 'Poor',
              'text-zinc-500': m.processability.weldability === 'N/A',
            })}>
              {m.processability.weldability}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Galvanic Result Card ─────────────────────────────────────────────────────

interface GalvanicResultProps {
  result: GalvanicResult;
  matA: Material;
  matB: Material;
}

function GalvanicResultCard({ result, matA, matB }: GalvanicResultProps) {
  const borderColor: Record<GalvanicRisk, string> = {
    'Low':      'border-emerald-700/40 bg-emerald-900/20',
    'Moderate': 'border-yellow-700/40 bg-yellow-900/20',
    'High':     'border-orange-700/40 bg-orange-900/20',
    'Severe':   'border-red-700/40 bg-red-900/20',
  };

  // Figure out which user-selected material is the anode
  const anodeMat = (() => {
    const keyA = result.anodeFamily;
    // Try to match by subFamily → galvanic key
    if (matA.subFamily === matB.subFamily) return null;
    // The anode key belongs to whichever material has higher anodic index
    // We stored anodeFamily as the galvanic key string, so compare via subFamily lookup
    return null; // We'll just show the family name from result
  })();
  void anodeMat;

  return (
    <div className={clsx('rounded-2xl border p-6 space-y-4', borderColor[result.risk])}>
      {/* Badge + delta */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className={clsx('inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold', galvanicBadgeColor(result.risk))}>
          <span className={clsx('w-2 h-2 rounded-full', galvanicDotColor(result.risk))} />
          {result.risk} Risk
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-800/60 border border-zinc-700/50 px-2.5 py-1 rounded-lg">
          <Zap className="w-3 h-3" />
          Δ {result.delta.toFixed(3)} V
        </span>
      </div>

      {/* Anode / cathode */}
      {result.delta > 0 && (
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-red-900/20 border border-red-800/40 p-3">
            <div className="text-xs font-semibold text-red-400 mb-1">Anode (corrodes)</div>
            <div className="text-sm text-zinc-200">{result.anodeFamily}</div>
          </div>
          <div className="rounded-xl bg-blue-900/20 border border-blue-800/40 p-3">
            <div className="text-xs font-semibold text-blue-400 mb-1">Cathode (protected)</div>
            <div className="text-sm text-zinc-200">{result.cathodeFamily}</div>
          </div>
        </div>
      )}

      {/* Notes */}
      <div className="flex items-start gap-2">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider w-28 shrink-0 pt-0.5">Guidance</span>
        <p className="text-sm text-zinc-300 leading-relaxed">{result.notes}</p>
      </div>

      {/* Corrosion resistance reference */}
      <div className="border-t border-zinc-700/40 pt-3 grid grid-cols-2 gap-3">
        {[matA, matB].map((m) => (
          <div key={m.id} className="text-xs">
            <span className="text-zinc-500">{m.name}</span>
            <span className="ml-1.5 text-zinc-400">— corrosion: </span>
            <span className={clsx('font-medium', {
              'text-emerald-400': m.corrosionResistance === 'Excellent',
              'text-green-400': m.corrosionResistance === 'Good',
              'text-yellow-400': m.corrosionResistance === 'Fair',
              'text-red-400': m.corrosionResistance === 'Poor',
              'text-zinc-500': m.corrosionResistance === 'N/A',
            })}>
              {m.corrosionResistance}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Tab = 'weld' | 'galvanic';
type Environment = 'controlled' | 'industrial' | 'marine';

const ENV_LABELS: Record<Environment, string> = {
  controlled: 'Controlled (indoor)',
  industrial: 'Industrial',
  marine: 'Marine / Outdoor',
};

export default function CompatibilityPage() {
  const [tab, setTab] = useState<Tab>('weld');
  const [matAId, setMatAId] = useState('');
  const [matBId, setMatBId] = useState('');
  const [environment, setEnvironment] = useState<Environment>('controlled');

  const matA = allMaterials.find((m) => m.id === matAId) ?? null;
  const matB = allMaterials.find((m) => m.id === matBId) ?? null;

  const galvanicResult = useMemo<GalvanicResult | null>(() => {
    if (!matA || !matB) return null;
    return getGalvanicRisk(matA.subFamily, matB.subFamily, environment);
  }, [matA, matB, environment]);

  const showWeldResult = tab === 'weld' && matA && matB;
  const showGalvanicResult = tab === 'galvanic' && matA && matB && galvanicResult;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700">
          {tab === 'weld'
            ? <Flame className="w-5 h-5 text-orange-400" />
            : <Zap className="w-5 h-5 text-yellow-400" />
          }
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Compatibility Checker</h1>
          <p className="text-sm text-zinc-500 mt-0.5">Welding and galvanic compatibility between engineering alloys</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-zinc-800/60 rounded-xl border border-zinc-700/50 mb-6 w-fit">
        {([
          { id: 'weld' as Tab, label: 'Welding', icon: Flame },
          { id: 'galvanic' as Tab, label: 'Galvanic / Contact', icon: Zap },
        ] as const).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={clsx(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              tab === id
                ? 'bg-zinc-700 text-zinc-100 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            )}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Material Pickers */}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <MaterialPicker label="Material A" value={matAId} onChange={setMatAId} />
        <MaterialPicker label="Material B" value={matBId} onChange={setMatBId} />
      </div>

      {/* Environment selector (galvanic only) */}
      {tab === 'galvanic' && (
        <div className="mb-6">
          <label className="block text-xs font-medium text-zinc-500 mb-1.5">Environment</label>
          <div className="flex gap-1 flex-wrap">
            {(Object.keys(ENV_LABELS) as Environment[]).map((env) => (
              <button
                key={env}
                type="button"
                onClick={() => setEnvironment(env)}
                className={clsx(
                  'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border',
                  environment === env
                    ? 'bg-zinc-700 text-zinc-100 border-zinc-600'
                    : 'bg-zinc-800/40 text-zinc-400 border-zinc-700/50 hover:text-zinc-200 hover:border-zinc-600'
                )}
              >
                {ENV_LABELS[env]}
              </button>
            ))}
          </div>
          {environment === 'marine' && (
            <p className="mt-2 flex items-center gap-1.5 text-xs text-yellow-400">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              Marine environment applies tightened risk thresholds — electrolyte presence accelerates galvanic corrosion.
            </p>
          )}
        </div>
      )}

      {/* Empty state */}
      {!matA || !matB ? (
        <div className="rounded-2xl border border-zinc-700/50 border-dashed p-14 text-center">
          {tab === 'weld'
            ? <Flame className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
            : <Zap className="w-8 h-8 text-zinc-700 mx-auto mb-3" />
          }
          <p className="text-zinc-400 text-sm mb-1">Select two materials above</p>
          <p className="text-xs text-zinc-600">
            {tab === 'weld'
              ? 'Welding compatibility, filler metal recommendations, and process guidance will appear here.'
              : 'Galvanic risk rating and corrosion recommendations will appear here.'
            }
          </p>
        </div>
      ) : null}

      {/* Weld result */}
      {showWeldResult && <WeldResult matA={matA} matB={matB} />}

      {/* Galvanic result */}
      {showGalvanicResult && (
        <GalvanicResultCard result={galvanicResult} matA={matA} matB={matB} />
      )}

      {/* Info footer */}
      <div className="mt-8 flex items-start gap-2 text-xs text-zinc-600">
        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
        <p>
          Compatibility ratings are general guidelines based on published metallurgical data.
          Always validate with a certified welding engineer or corrosion specialist for critical applications.
          Galvanic potentials are approximations — actual service conditions vary significantly.
        </p>
      </div>
    </div>
  );
}
