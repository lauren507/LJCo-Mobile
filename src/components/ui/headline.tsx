import { Text, View } from 'react-native';

type HeadlineProps = {
  /** Two or three short lines. Rendered uppercase. */
  lines: string[];
  size?: 'hero' | 'headline' | 'subhead';
  align?: 'left' | 'center';
  /** Text color; defaults to ink. */
  color?: string;
};

const sizeClass = {
  hero: 'text-hero',
  headline: 'text-headline',
  subhead: 'text-subhead',
} as const;

/**
 * Stacked uppercase Anton lines. This is the design system's plain Headline
 * (ink fill, no outline): React Native has no text stroke, so the outlined
 * cream and gold variant is not available here.
 */
export function Headline({ lines, size = 'headline', align = 'left', color }: HeadlineProps) {
  return (
    <View accessibilityRole="header" accessible accessibilityLabel={lines.join(' ')}>
      {lines.map((line) => (
        <Text
          key={line}
          className={`font-display uppercase text-ink ${sizeClass[size]} ${align === 'center' ? 'text-center' : ''}`}
          style={color ? { color } : undefined}>
          {line}
        </Text>
      ))}
    </View>
  );
}
