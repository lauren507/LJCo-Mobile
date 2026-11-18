export type HeatLevel = 'mild' | 'medium' | 'hot';

export type Product = {
  id: string;
  name: string;
  tagline: string;
  /** Price per bag in cents, to avoid floating point money math. */
  priceCents: number;
  sizeOz: number;
  heat: HeatLevel;
  smallBatch: boolean;
  inStock: boolean;
};

export type BundleTier = {
  bagCount: number;
  discountPercent: number;
  label: string;
};

export type Drop = {
  id: string;
  productId: string;
  title: string;
  /** ISO 8601 timestamp of when the drop goes live. */
  releasesAt: string;
  bagsAvailable: number;
};

export type LoyaltyTier = {
  name: string;
  minPoints: number;
};

export type LoyaltyAccount = {
  memberName: string;
  points: number;
  tier: LoyaltyTier;
  nextTier: LoyaltyTier | null;
};

export type MiniGame = {
  id: 'catcher' | 'trivia' | 'scratch';
  name: string;
  description: string;
  cadence: 'daily' | 'weekly';
  maxPoints: number;
};

export type Subscription = {
  id: string;
  planName: string;
  productIds: string[];
  /** ISO 8601 date of the next shipment. */
  nextShipDate: string;
  status: 'active' | 'skipped' | 'paused';
};
