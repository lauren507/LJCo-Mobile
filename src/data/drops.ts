import type { Drop } from '@/types';

/** Mock Small Batch drop. Always a few days out so the countdown has something to show. */
export const nextDrop: Drop = {
  id: 'drop-14',
  productId: 'maple-chipotle',
  title: 'Small Batch No. 14',
  releasesAt: new Date(Date.now() + (3 * 24 + 6) * 60 * 60 * 1000).toISOString(),
  bagsAvailable: 400,
};
