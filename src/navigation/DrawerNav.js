import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import Setting from "../pages/Setting"
import HomeScreen from "../pages/HomeScreen";
import MyAccount from "../pages/MyAccount";
import Help from "../pages/Help"
import CustomDrawer from "../components/CustomDrawer";
import { Ionicons ,EvilIcons, Feather} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
    initialRouteName="Home"drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#D9D9D9",
        drawerActiveTintColor: "#000000",
        drawerStyle: {
          backgroundColor: "#D9D9D9",
          TextStyle: {
            color: "#1111",
          },
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="My Account" component={MyAccount} 
         options={{
          drawerIcon: ({ color, size }) => (
            <EvilIcons name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="App Settings" component={Setting}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}
