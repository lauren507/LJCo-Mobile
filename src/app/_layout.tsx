import '@/global.css';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { Colors } from '@/constants/theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // The keys are the font family names used by the font-* tokens in global.css.
  const [fontsLoaded, fontError] = useFonts({
    Anton: require('@/assets/fonts/Anton-Regular.ttf'),
    Docktrin: require('@/assets/fonts/Docktrin.ttf'),
    'GothamPro-Medium': require('@/assets/fonts/GothamPro-Medium.ttf'),
    'GothamPro-Bold': require('@/assets/fonts/GothamPro-Bold.ttf'),
    'GreycliffCF-Bold': require('@/assets/fonts/GreycliffCF-Bold.otf'),
  });
  const ready = fontsLoaded || fontError != null;

  useEffect(() => {
    if (ready) {
      SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.cream },
        }}
      />
    </>
  );
}
