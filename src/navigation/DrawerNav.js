import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "../pages/HomeScreen";


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      
    }} >
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
    </Drawer.Navigator>
  );
}
