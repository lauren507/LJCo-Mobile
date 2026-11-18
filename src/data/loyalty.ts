import type { LoyaltyAccount, LoyaltyTier, MiniGame, Subscription } from '@/types';

export const loyaltyTiers: LoyaltyTier[] = [
  { name: 'Snacker', minPoints: 0 },
  { name: 'Smokehouse Regular', minPoints: 500 },
  { name: 'Pitmaster', minPoints: 1500 },
];

/** Mock signed-in member for Phase 1. */
export const loyaltyAccount: LoyaltyAccount = {
  memberName: 'Sam',
  points: 820,
  tier: loyaltyTiers[1],
  nextTier: loyaltyTiers[2],
};

export const miniGames: MiniGame[] = [
  {
    id: 'catcher',
    name: 'Ingredient Catcher',
    description: 'Catch the good stuff for 30 seconds',
    cadence: 'daily',
    maxPoints: 50,
  },
  {
    id: 'trivia',
    name: 'Jerky Trivia',
    description: 'Three questions on food and the brand',
    cadence: 'daily',
    maxPoints: 30,
  },
  {
    id: 'scratch',
    name: 'Scratch-Off',
    description: 'Scratch for points or a discount code',
    cadence: 'weekly',
    maxPoints: 100,
  },
];

/** Mock Jerky Club subscription. Replaced by Recharge in Phase 3. */
export const subscription: Subscription = {
  id: 'sub-1',
  planName: 'Jerky Club 5-Pack',
  productIds: ['original', 'bourbon-barrel', 'sweet-heat', 'smoked-teriyaki', 'original'],
  nextShipDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
  status: 'active',
};
