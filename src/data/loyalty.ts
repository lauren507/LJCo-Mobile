import type { LoyaltyAccount, LoyaltyTier, MiniGame, Subscription } from '@/types';

/** Placeholder tier names and thresholds. */
export const loyaltyTiers: LoyaltyTier[] = [
  { name: 'Jerky Head', minCoins: 0 },
  { name: 'Super Jerky Head', minCoins: 500 },
  { name: 'Jerky Legend', minCoins: 1500 },
];

/** Mock signed-in member for Phase 1. */
export const loyaltyAccount: LoyaltyAccount = {
  memberName: 'Sam',
  coins: 820,
  tier: loyaltyTiers[1],
  nextTier: loyaltyTiers[2],
};

export const miniGames: MiniGame[] = [
  {
    id: 'catcher',
    name: 'Ingredient Catcher',
    description: 'Catch the good stuff for 30 seconds.',
    cadence: 'daily',
    maxCoins: 50,
  },
  {
    id: 'trivia',
    name: 'Jerky Trivia',
    description: 'Three questions. No pressure.',
    cadence: 'daily',
    maxCoins: 30,
  },
  {
    id: 'scratch',
    name: 'Scratch-Off',
    description: 'Scratch for Jerky Coins or a discount code.',
    cadence: 'weekly',
    maxCoins: 100,
  },
];

/** Mock Jerky Club subscription. Replaced by Recharge in Phase 3. */
export const subscription: Subscription = {
  id: 'sub-1',
  planName: 'Jerky Club 5-Pack',
  flavorIds: [
    'smoked-black-pepper',
    'pepperoni-pizza',
    'maple-bacon',
    'general-tsos',
    'smoky-carolina-bbq',
  ],
  nextShipDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(),
  status: 'active',
};
