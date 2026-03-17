'use client';

import { Printer } from 'lucide-react';

export function DataSheetButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 transition-all"
    >
      <Printer className="w-3.5 h-3.5" />
      Download Data Sheet
    </button>
  );
}
