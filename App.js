import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./src/navigation/Index";
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Bold: require("./assets/fonts/Roboto-Black.ttf"),
    Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Light: require("./assets/fonts/Roboto-Light.ttf"),
    Italic: require("./assets/fonts/Roboto-Italic.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (!fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && fontError) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
