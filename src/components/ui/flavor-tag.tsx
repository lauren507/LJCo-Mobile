import { Text, View } from 'react-native';

import { flavors, type FlavorId } from '@/constants/flavors';
import { Colors, Shadows } from '@/constants/theme';

/**
 * A Classic flavor's name in Docktrin on its bag color. The text is lowercased
 * on purpose: Docktrin's lowercase glyphs are the clean caps from the bags.
 */
export function FlavorTag({ flavor }: { flavor: FlavorId }) {
  const { label, color, ink } = flavors[flavor];

  return (
    <View
      className="min-h-16 w-[120px] items-center justify-center rounded-md border-2 px-3 py-2"
      style={{ backgroundColor: color, borderColor: Colors.navy, boxShadow: Shadows.hard }}>
      <Text className="text-center font-flavor text-flavor-tag lowercase" style={{ color: ink }}>
        {label}
      </Text>
    </View>
  );
}
