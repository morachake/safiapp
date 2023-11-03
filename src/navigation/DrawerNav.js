import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import Setting from "../pages/Setting"
import HomeScreen from "../pages/HomeScreen";
import MyAccount from "../pages/MyAccount";
import Help from "../pages/Help"
import CustomDrawer from "../components/CustomDrawer";
import { Ionicons , Feather, Entypo , FontAwesome5} from '@expo/vector-icons';
import { COLORS } from "../constants/Index";
import SearchScreen from "../pages/SearchScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
    initialRouteName="Home"drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: "#FFFF",
        drawerInactiveTintColor : COLORS.secondary,
        drawerLabelStyle:{
          marginLeft:-20,
          fontFamily: "Medium",
          fontSize: 15,
        },
        drawerStyle: {
          backgroundColor: "#D9D9D9",
          TextStyle: {
            color: "#1111",
          },
        },
      }}
    >
      <Drawer.Screen name="Home" component={SearchScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="My Account" component={MyAccount} 
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
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
      <Drawer.Screen name="Help" component={Help} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="help" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
