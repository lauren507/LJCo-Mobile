import type { ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

/** Standard scrolling tab screen: brand background, safe area, large title. */
export function Screen({ title, subtitle, children }: ScreenProps) {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-smoke">
      <ScrollView contentContainerClassName="gap-4 px-5 pb-32 pt-4">
        <View className="gap-1">
          <Text className="text-3xl font-extrabold text-cream">{title}</Text>
          {subtitle ? <Text className="text-base text-tan">{subtitle}</Text> : null}
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
