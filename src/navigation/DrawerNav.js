import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import HomeScreen from "../pages/HomeScreen";


const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      drawerActiveBackgroundColor :"#D9D9D9",
      drawerActiveTintColor: "#000000",
      drawerStyle: {
        backgroundColor: "#D9D9D9",
        TextStyle: {
          color : "#1111",
        }
      },
    }} >
      <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
    </Drawer.Navigator>
  );
}
