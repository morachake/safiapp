import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import DrawerNav from "./DrawerNav";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={DrawerNav} />
    </Stack.Navigator>
  );
}
