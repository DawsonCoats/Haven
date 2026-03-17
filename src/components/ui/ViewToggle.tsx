'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { BookOpen, Microscope } from 'lucide-react';
import clsx from 'clsx';

type ViewMode = 'beginner' | 'expert';

interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType>({
  mode: 'beginner',
  setMode: () => {},
});

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ViewMode>('beginner');

  useEffect(() => {
    const stored = localStorage.getItem('haven-view-mode') as ViewMode | null;
    if (stored === 'beginner' || stored === 'expert') {
      setModeState(stored);
    }
  }, []);

  function setMode(m: ViewMode) {
    setModeState(m);
    localStorage.setItem('haven-view-mode', m);
  }

  return (
    <ViewModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  return useContext(ViewModeContext);
}

export function ViewToggle({ className }: { className?: string }) {
  const { mode, setMode } = useViewMode();

  return (
    <div className={clsx('flex items-center bg-zinc-800 rounded-lg p-0.5 border border-zinc-700', className)}>
      <button
        type="button"
        onClick={() => setMode('beginner')}
        className={clsx(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all',
          mode === 'beginner'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-zinc-400 hover:text-zinc-200'
        )}
      >
        <BookOpen className="w-3.5 h-3.5" />
        Beginner
      </button>
      <button
        type="button"
        onClick={() => setMode('expert')}
        className={clsx(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all',
          mode === 'expert'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-zinc-400 hover:text-zinc-200'
        )}
      >
        <Microscope className="w-3.5 h-3.5" />
        Expert
      </button>
    </div>
  );
}
