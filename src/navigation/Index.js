import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DrawerNav from "./DrawerNav";
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle:{
          backgroundColor: "#000000",
          elevation: 0,
        },
        headerTitleStyle:{
          fontFamily:"Light"
        }
      }}
    >
      <Stack.Screen name="Home" component={DrawerNav} />
    </Stack.Navigator>
  );
}
