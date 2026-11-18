import * as Haptics from 'expo-haptics';
import { Platform, Pressable, Text } from 'react-native';

import { Colors, Shadows } from '@/constants/theme';

type Tone = 'gold' | 'sky' | 'green' | 'pink' | 'cream' | 'navy';

type ButtonProps = {
  /** Short, uppercase, imperative: GET A BAG!, I WANT IT!, SHOP CLASSICS. */
  label: string;
  onPress?: () => void;
  tone?: Tone;
  size?: 'md' | 'lg';
  disabled?: boolean;
};

const tones: Record<Tone, { fill: string; label: string; edge: string }> = {
  gold: { fill: Colors.gold, label: Colors.navy, edge: Colors.navy },
  sky: { fill: Colors.sky, label: Colors.navy, edge: Colors.navy },
  green: { fill: Colors.leafGreen, label: Colors.navy, edge: Colors.navy },
  pink: { fill: Colors.pink, label: Colors.navy, edge: Colors.navy },
  cream: { fill: Colors.cream, label: Colors.navy, edge: Colors.navy },
  navy: { fill: Colors.navy, label: Colors.cream, edge: Colors.inkBlack },
};

/** The CTA pill: Anton caps, a 3px outline and a hard 5px drop shadow. */
export function Button({ label, onPress, tone = 'gold', size = 'md', disabled }: ButtonProps) {
  const { fill, label: labelColor, edge } = tones[tone];
  const large = size === 'lg';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={() => {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress?.();
      }}
      className={`self-start rounded-pill border-[3px] ${large ? 'px-11 py-4' : 'px-9 py-3.5'}`}
      style={({ pressed }) => ({
        backgroundColor: fill,
        borderColor: edge,
        opacity: disabled ? 0.5 : 1,
        boxShadow: pressed ? Shadows.pressed : Shadows.hard,
        transform: [{ translateY: pressed ? 4 : 0 }],
      })}>
      <Text
        className={`font-display uppercase tracking-[0.5px] ${large ? 'text-[26px] leading-[28px]' : 'text-cta-label'}`}
        style={{ color: labelColor }}>
        {label}
      </Text>
    </Pressable>
  );
}
