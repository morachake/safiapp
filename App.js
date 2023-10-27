import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/pages/Login';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded,fontError] = useFonts({
    'Bold' : require('./assets/fonts/Roboto-Black.ttf'),
    'Medium' : require('./assets/fonts/Roboto-Medium.ttf'), 
    'light' : require('./assets/fonts/Roboto-Light.ttf'),
    'Italic' : require('./assets/fonts/Roboto-Italic.ttf')
  })

  const onLayoutRootView = useCallback (async () => {
    if (!fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded,fontError])

  if(!fontsLoaded && fontError){
    return null;
  }
  return (
   <SafeAreaProvider onLayout={onLayoutRootView}>
      <>
          <StatusBar style="auto" />
          <Login/>
      </>         
   </SafeAreaProvider>
  );
}
