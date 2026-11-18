/**
 * Louisville Jerky Co. brand values for places that take style values instead
 * of class names (tab bar, shadows, game rendering). Screens should use the
 * Tailwind utilities generated from src/global.css; keep the two in sync.
 */
export const Colors = {
  cream: '#ded7b9',
  gold: '#eaaf3f',
  orange: '#f4762d',
  pink: '#f7a8a6',
  lavender: '#c67eac',
  red: '#ef3f4f',
  sky: '#63c5d8',
  navy: '#1e1a3b',
  inkBlack: '#090420',
  leafGreen: '#54a94d',
  estPink: '#d18cbd',
} as const;

export type BrandColor = keyof typeof Colors;

/**
 * The brand's hard offset shadows: the logo's 3D extrusion applied to
 * everything. Never blurred.
 */
export const Shadows = {
  /** Certification pills, small tags. */
  hardSm: `0px 3px 0px 0px ${Colors.inkBlack}`,
  /** CTA buttons and FlavorTags. */
  hard: `0px 5px 0px 0px ${Colors.inkBlack}`,
  /** A pressed CTA. */
  pressed: `0px 1px 0px 0px ${Colors.inkBlack}`,
  /** Cards and product panels. */
  block: `6px 8px 0px 0px ${Colors.navy}`,
} as const;
