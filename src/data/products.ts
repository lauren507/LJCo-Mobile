import type { BundleTier, Product } from '@/types';

/**
 * Mock catalog for Phase 1: the six Classic flavors. Prices and stock are
 * placeholders until the Shopify Storefront API replaces this in Phase 2.
 */
export const products: Product[] = [
  { id: 'smoked-black-pepper', priceCents: 799, sizeOz: 3, inStock: true },
  { id: 'pepperoni-pizza', priceCents: 799, sizeOz: 3, inStock: true },
  { id: 'maple-bacon', priceCents: 799, sizeOz: 3, inStock: true },
  { id: 'general-tsos', priceCents: 799, sizeOz: 3, inStock: true },
  { id: 'buffalo-hot-wing', priceCents: 799, sizeOz: 3, inStock: false },
  { id: 'smoky-carolina-bbq', priceCents: 799, sizeOz: 3, inStock: true },
];

/** Placeholder discounts for the bundle builder. */
export const bundleTiers: BundleTier[] = [
  { bagCount: 5, discountPercent: 10 },
  { bagCount: 10, discountPercent: 20 },
];
