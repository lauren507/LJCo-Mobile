import type { Drop } from '@/types';

/** Mock small batch drop. Always a few days out so the countdown has something to show. */
export const nextDrop: Drop = {
  id: 'drop-chimichurri',
  flavorName: 'Chimichurri',
  releasesAt: new Date(Date.now() + (3 * 24 + 6) * 60 * 60 * 1000).toISOString(),
};
