import { Text, SafeAreaView, Image, StyleSheet, Platform } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useLocalSearchParams } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import routersConfig from '@/src/configs/routers';
import pagesConfig from '@/src/configs/pages';

export default function Page({ setTitle }: any) {
  const { name } = useLocalSearchParams();
  console.log(`Path: ${name}`);
  const [form, setForm] = useState<any>();

  useEffect(() => {
    const route = routersConfig.routers.findLast((r) => r.path === name);
    if (route) {
      const { title, page } = route;
      const jsonObject = Object.entries(pagesConfig).find(([key, val]) => key === page)?.[1];
      //console.log(jsonObject);
      setForm(jsonObject);
    }
  }, [name]);

  return (
    <Text>Page Name: {name}</Text>
  );
}
