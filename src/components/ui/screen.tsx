import type { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/** Standard scrolling tab screen on the Classic cream ground. */
export function Screen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-ground">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-32 pt-4">{children}</ScrollView>
    </SafeAreaView>
  );
}
