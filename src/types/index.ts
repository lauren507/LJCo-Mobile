import type { FlavorId } from '@/constants/flavors';

export type Product = {
  id: FlavorId;
  /** Price per bag in cents, to avoid floating point money math. */
  priceCents: number;
  sizeOz: number;
  inStock: boolean;
};

export type BundleTier = {
  bagCount: number;
  discountPercent: number;
};

export type Drop = {
  id: string;
  /** Small batch flavors have no bag color of their own. */
  flavorName: string;
  /** ISO 8601 timestamp of when the drop goes live. */
  releasesAt: string;
};

export type LoyaltyTier = {
  name: string;
  minCoins: number;
};

export type LoyaltyAccount = {
  memberName: string;
  /** Loyalty points are called Jerky Coins. */
  coins: number;
  tier: LoyaltyTier;
  nextTier: LoyaltyTier | null;
};

export type MiniGame = {
  id: 'catcher' | 'trivia' | 'scratch';
  name: string;
  description: string;
  cadence: 'daily' | 'weekly';
  maxCoins: number;
};

export type Subscription = {
  id: string;
  planName: string;
  flavorIds: FlavorId[];
  /** ISO 8601 date of the next shipment. */
  nextShipDate: string;
  status: 'active' | 'skipped' | 'paused';
};
