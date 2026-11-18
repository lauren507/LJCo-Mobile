import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

type CardProps = {
  eyebrow?: string;
  children: ReactNode;
};

export function Card({ eyebrow, children }: CardProps) {
  return (
    <View className="gap-2 rounded-2xl border border-hickory bg-char p-4">
      {eyebrow ? (
        <Text className="text-xs font-bold uppercase tracking-widest text-bourbon">{eyebrow}</Text>
      ) : null}
      {children}
    </View>
  );
}
