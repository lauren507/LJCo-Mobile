import type { BundleTier, Product } from '@/types';

/** Mock catalog for Phase 1. Replaced by the Shopify Storefront API in Phase 2. */
export const products: Product[] = [
  {
    id: 'original',
    name: 'Original',
    tagline: 'Hickory smoke, cracked pepper',
    priceCents: 899,
    sizeOz: 3,
    heat: 'mild',
    smallBatch: false,
    inStock: true,
  },
  {
    id: 'bourbon-barrel',
    name: 'Bourbon Barrel',
    tagline: 'Kentucky bourbon and brown sugar',
    priceCents: 999,
    sizeOz: 3,
    heat: 'mild',
    smallBatch: false,
    inStock: true,
  },
  {
    id: 'sweet-heat',
    name: 'Sweet Heat',
    tagline: 'Honey up front, cayenne on the finish',
    priceCents: 899,
    sizeOz: 3,
    heat: 'medium',
    smallBatch: false,
    inStock: true,
  },
  {
    id: 'smoked-teriyaki',
    name: 'Smoked Teriyaki',
    tagline: 'Soy, ginger and garlic',
    priceCents: 899,
    sizeOz: 3,
    heat: 'mild',
    smallBatch: false,
    inStock: true,
  },
  {
    id: 'habanero-lime',
    name: 'Habanero Lime',
    tagline: 'Bright citrus, serious burn',
    priceCents: 999,
    sizeOz: 3,
    heat: 'hot',
    smallBatch: false,
    inStock: false,
  },
  {
    id: 'maple-chipotle',
    name: 'Maple Chipotle',
    tagline: 'Small Batch No. 14',
    priceCents: 1199,
    sizeOz: 3,
    heat: 'medium',
    smallBatch: true,
    inStock: true,
  },
];

export const bundleTiers: BundleTier[] = [
  { bagCount: 5, discountPercent: 10, label: '5 bags' },
  { bagCount: 10, discountPercent: 20, label: '10 bags' },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
