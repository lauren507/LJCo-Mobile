import { Text, View } from 'react-native';

import { Colors, Shadows } from '@/constants/theme';

type Kind = 'plant-based' | 'gluten-free' | 'non-gmo';

const kinds: Record<Kind, { label: string; fill: string }> = {
  'plant-based': { label: 'Plant Based', fill: Colors.leafGreen },
  'gluten-free': { label: 'Gluten Free', fill: Colors.gold },
  'non-gmo': { label: 'Non-GMO', fill: Colors.lavender },
};

/** A certification pill. These support the story; they never lead it. */
export function CertBadge({ kind }: { kind: Kind }) {
  const { label, fill } = kinds[kind];

  return (
    <View
      className="rounded-pill border-[3px] px-3.5 pb-1 pt-[5px]"
      style={{ backgroundColor: fill, borderColor: Colors.inkBlack, boxShadow: Shadows.hardSm }}>
      <Text
        className="font-display text-label uppercase tracking-[0.6px]"
        style={{ color: Colors.inkBlack }}>
        {label}
      </Text>
    </View>
  );
}
