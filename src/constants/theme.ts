/**
 * Brand colors for native APIs that take color values instead of class names
 * (tab bar, navigation chrome, game rendering). Screens should use the
 * Tailwind utilities generated from src/global.css; keep the two in sync.
 */
export const Colors = {
  smoke: '#17120f',
  char: '#231b16',
  hickory: '#3a2c23',
  cream: '#f6ecd9',
  tan: '#b8a48a',
  ember: '#e2562b',
  bourbon: '#d9942b',
  pepper: '#7fa650',
} as const;

export type BrandColor = keyof typeof Colors;
