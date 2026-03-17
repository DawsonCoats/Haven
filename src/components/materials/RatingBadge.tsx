import { Rating } from '../../data/types';
import clsx from 'clsx';

const ratingConfig: Record<Rating, { label: string; className: string }> = {
  Excellent: { label: 'Excellent', className: 'bg-emerald-900/50 text-emerald-300 border-emerald-800' },
  Good: { label: 'Good', className: 'bg-blue-900/50 text-blue-300 border-blue-800' },
  Fair: { label: 'Fair', className: 'bg-yellow-900/50 text-yellow-300 border-yellow-800' },
  Poor: { label: 'Poor', className: 'bg-red-900/50 text-red-300 border-red-800' },
  'N/A': { label: 'N/A', className: 'bg-zinc-800 text-zinc-500 border-zinc-700' },
};

interface RatingBadgeProps {
  rating: Rating;
  className?: string;
  size?: 'sm' | 'md';
}

export function RatingBadge({ rating, className, size = 'md' }: RatingBadgeProps) {
  const config = ratingConfig[rating] ?? ratingConfig['N/A'];
  return (
    <span
      className={clsx(
        'inline-block rounded-full border font-medium',
        size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
