import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import DrawerNav from './DrawerNav';

const Stack =  createNativeStackNavigator()
export default function Navigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={DrawerNav} />
    </Stack.Navigator>
  )
}
