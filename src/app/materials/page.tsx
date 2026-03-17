import { Suspense } from 'react';
import { MaterialsPageContent } from './MaterialsPageContent';

export default function MaterialsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 text-zinc-500">Loading...</div>}>
      <MaterialsPageContent />
    </Suspense>
  );
}
