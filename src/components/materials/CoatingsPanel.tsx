'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getCoatingsForFamily } from '../../data/coatings';
import type { MaterialFamily, CoatingEffect } from '../../data/types';

interface Props {
  family: MaterialFamily;
}

function effectBadgeClass(effect: CoatingEffect): string {
  switch (effect) {
    case 'Significantly Improves':
      return 'bg-emerald-900/50 text-emerald-300 border-emerald-800';
    case 'Improves':
      return 'bg-green-900/40 text-green-300 border-green-800';
    case 'No Change':
      return 'bg-yellow-900/30 text-yellow-300 border-yellow-800';
    case 'Reduces':
      return 'bg-red-900/40 text-red-300 border-red-800';
    case 'Eliminates':
      return 'bg-red-900/60 text-red-200 border-red-700';
    default:
      return 'bg-zinc-800 text-zinc-400 border-zinc-700';
  }
}

function effectLabel(effect: CoatingEffect): string {
  switch (effect) {
    case 'Significantly Improves': return '++ Significantly Improves';
    case 'Improves':               return '+ Improves';
    case 'No Change':              return '~ No Change';
    case 'Reduces':                return '− Reduces';
    case 'Eliminates':             return '✕ Eliminates';
    default:                       return effect;
  }
}

export function CoatingsPanel({ family }: Props) {
  const [open, setOpen] = useState(true);
  const coatings = getCoatingsForFamily(family);

  if (coatings.length === 0) return null;

  return (
    <section>
      {/* Section header — collapsible toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left mb-3"
      >
        <h2 className="text-lg font-semibold text-zinc-200">Surface Treatments &amp; Coatings</h2>
        <span className="text-zinc-500 hover:text-zinc-300 transition-colors">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      {open && (
        <div className="grid sm:grid-cols-2 gap-4">
          {coatings.map((coating) => (
            <div
              key={coating.id}
              className="rounded-xl bg-zinc-800/20 border border-zinc-700/50 p-4 flex flex-col gap-3"
            >
              {/* Card header */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-zinc-100 leading-snug">
                    {coating.name}
                  </h3>
                  {coating.color && (
                    <span className="text-xs bg-zinc-700/60 text-zinc-400 border border-zinc-600 px-2 py-0.5 rounded-full shrink-0">
                      {coating.color}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{coating.description}</p>
              </div>

              {/* Thickness + temp badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-xs bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1">
                  <span className="text-zinc-500">Thickness</span>
                  <span className="text-zinc-200 font-mono">{coating.thickness}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-zinc-800 border border-zinc-700 rounded-lg px-2.5 py-1">
                  <span className="text-zinc-500">Max Temp</span>
                  <span className="text-zinc-200 font-mono">{coating.temperatureLimit}°C</span>
                </span>
              </div>

              {/* Property effects */}
              <div className="space-y-2">
                <p className="text-[10px] text-zinc-500 uppercase tracking-wide">Property Effects</p>
                {coating.propertyEffects.map((pe) => (
                  <div key={pe.property} className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-400 min-w-0 shrink-0">{pe.property}</span>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full border whitespace-nowrap ${effectBadgeClass(pe.effect)}`}
                      >
                        {effectLabel(pe.effect)}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-snug pl-0.5">{pe.detail}</p>
                  </div>
                ))}
              </div>

              {/* Fatigue callout — amber warning */}
              {coating.fatigueEffect && (
                <div
                  className={`rounded-lg px-3 py-2.5 border ${
                    coating.fatigueEffect === 'Reduces' || coating.fatigueEffect === 'Eliminates'
                      ? 'bg-amber-950/40 border-amber-800/50'
                      : 'bg-zinc-800/30 border-zinc-700/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] text-amber-400 uppercase tracking-wide font-semibold">
                      Fatigue
                    </span>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${effectBadgeClass(coating.fatigueEffect)}`}
                    >
                      {effectLabel(coating.fatigueEffect)}
                    </span>
                  </div>
                  {coating.fatigueNote && (
                    <p className="text-[11px] text-amber-300/80 leading-relaxed">
                      {coating.fatigueNote}
                    </p>
                  )}
                </div>
              )}

              {/* Common uses */}
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1.5">Common Uses</p>
                <div className="flex flex-wrap gap-1.5">
                  {coating.commonUses.map((use) => (
                    <span
                      key={use}
                      className="text-[11px] bg-zinc-800/60 border border-zinc-700/60 text-zinc-400 px-2 py-0.5 rounded-md"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional notes */}
              {coating.notes && (
                <p className="text-[11px] text-zinc-500 italic leading-relaxed border-t border-zinc-700/40 pt-2">
                  {coating.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
