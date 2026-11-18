import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { Colors, Shadows } from '@/constants/theme';

type CardProps = {
  /** Small Anton label above the content. */
  label?: string;
  /** Ground color; defaults to cream. Pass a flavor's color for a flavor card. */
  ground?: string;
  /** Text color for the label on this ground; defaults to navy. */
  ink?: string;
  children: ReactNode;
};

/** A content card with the brand's extruded block shadow. */
export function Card({ label, ground = Colors.cream, ink = Colors.navy, children }: CardProps) {
  return (
    <View
      className="mb-2 mr-1.5 gap-3 rounded-lg border-[3px] border-edge p-5"
      style={{ backgroundColor: ground, boxShadow: Shadows.block }}>
      {label ? (
        <Text className="font-display text-label uppercase tracking-[0.6px]" style={{ color: ink }}>
          {label}
        </Text>
      ) : null}
      {children}
    </View>
  );
}
