import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import 'react-native-reanimated';
import Login from './Login';

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {

  return (
      <View >
        <Login />
      </View>
  );
}




