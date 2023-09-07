import { StatusBar } from 'expo-status-bar';
import LoginPage from './src/pages/LoginPage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import {  View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [isLoaded] = useFonts({
    "bold":require("./assets/fonts/Roboto-Bold.ttf"),
    "medium":require("./assets/fonts/Roboto-Medium.ttf")
  })
  const handleOnLayout = useCallback(async () =>{
    if(isLoaded){
      await SplashScreen.hideAsync();
    }
  },[isLoaded])

  if(!isLoaded){
    return null;
  }
  return (
    <>
      <StatusBar style="auto" />
      <LoginPage/>
    </>
  );
}

