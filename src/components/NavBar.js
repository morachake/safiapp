import React from 'react';
import { View ,Text} from 'react-native';
import { Entypo , Octicons} from '@expo/vector-icons';

import { COLORS } from '../constants/Index';
export default function NavBar() {
  return (
    <View style={{flexDirection:'row'}}>
        <Entypo name="menu" size={24} color="black" />
        <Text>Home</Text>
        <Octicons name="filter" size={24} color="black" />
    </View>
  );
}
