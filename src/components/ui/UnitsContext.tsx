'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import type { UnitSystem } from '../../lib/units';

interface UnitsContextType {
  units: UnitSystem;
  setUnits: (units: UnitSystem) => void;
}

const UnitsContext = createContext<UnitsContextType>({
  units: 'metric',
  setUnits: () => {},
});

export function UnitsProvider({ children }: { children: React.ReactNode }) {
  const [units, setUnitsState] = useState<UnitSystem>('metric');

  useEffect(() => {
    const stored = localStorage.getItem('haven-units') as UnitSystem | null;
    if (stored === 'metric' || stored === 'imperial') {
      setUnitsState(stored);
    }
  }, []);

  function setUnits(u: UnitSystem) {
    setUnitsState(u);
    localStorage.setItem('haven-units', u);
  }

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
}

export function useUnits() {
  return useContext(UnitsContext);
}

export function UnitsToggle({ className }: { className?: string }) {
  const { units, setUnits } = useUnits();

  return (
    <div className={clsx('flex items-center bg-zinc-800 rounded-lg p-0.5 border border-zinc-700', className)}>
      <button
        type="button"
        onClick={() => setUnits('metric')}
        className={clsx(
          'px-2.5 py-1 rounded-md text-xs font-medium transition-all',
          units === 'metric'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-zinc-400 hover:text-zinc-200'
        )}
      >
        SI
      </button>
      <button
        type="button"
        onClick={() => setUnits('imperial')}
        className={clsx(
          'px-2.5 py-1 rounded-md text-xs font-medium transition-all',
          units === 'imperial'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-zinc-400 hover:text-zinc-200'
        )}
      >
        IMP
      </button>
    </div>
  );
}
