import type { ReactNode } from 'react';
import { Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// On web the tab bar floats over the top of the page instead of sitting below it.
const webPreview = Platform.OS === 'web' ? 'mx-auto w-full max-w-[430px] pt-20' : 'pt-4';

/** Standard scrolling tab screen on the Classic cream ground. */
export function Screen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-ground">
      <ScrollView contentContainerClassName={`gap-6 px-5 pb-32 ${webPreview}`}>{children}</ScrollView>
    </SafeAreaView>
  );
}
