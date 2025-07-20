import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    // ✅ 5 Static Fonts
    'Merriweather': require('../assets/fonts/Merriweather_24pt_SemiCondensed-BoldItalic.ttf'),
    'Bitter': require('../assets/fonts/Bitter-ExtraBoldItalic.ttf'),
    'Cabin': require('../assets/fonts/Cabin_Condensed-BoldItalic.ttf'),
    'FiraSans': require('../assets/fonts/FiraSans-BlackItalic.ttf'),
    'WinkyRough': require('../assets/fonts/WinkyRough-Black.ttf'),

    // ✅ 5 Variable Fonts
    'PlusJakartaSans': require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
    'SplineSans': require('../assets/fonts/SplineSans-VariableFont_wght.ttf'),
    'IBMPlexSans': require('../assets/fonts/IBMPlexSans-VariableFont_wdth,wght.ttf'),
    'Manrope': require('../assets/fonts/Manrope-VariableFont_wght.ttf'),
    'RedHatDisplay': require('../assets/fonts/RedHatDisplay-VariableFont_wght.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Slot />
    </View>
  );
}
