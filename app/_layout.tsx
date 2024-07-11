import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import TestLogin from '@/components/Login';
import TestUiPanel from '@/components/UiPanel';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [auth, setAuth] = useState(false);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const changeView = (view: string) => {
    console.log('changeView: ' + view);
  }

  const clearView = (value: boolean) => {
    setAuth(value);
  }

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {
        auth 
        ? <TestUiPanel goHome={clearView} />
        : <TestLogin changeView={changeView} goHome={clearView} />
      }
      {/* (auth ?  : <TestLogin changeView={changeView} goHome={clearView} />) */}
    </ThemeProvider>
  );
}
