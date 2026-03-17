import { Suspense } from 'react';
import { ComparePageContent } from './ComparePageContent';

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-8 text-zinc-500 text-sm">Loading...</div>}>
      <ComparePageContent />
    </Suspense>
  );
}
