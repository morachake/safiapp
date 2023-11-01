/* eslint-disable prettier/prettier */
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View , Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  return (
   <View style={{flex:1}}>
     <DrawerContentScrollView {...props} contentContainerStyle={{
        backgroundColor:"#D9D9D9"
     }}> 
     <View style={{backgroundColor:"#388479",height:140 , alignItems:"center", justifyContent:"space-around"}}>
        <EvilIcons name="user" size={84} color="#FFFF"  />
        <Text style={{color:"#FFFF",fontFamily:"Medium",fontSize:25}}>Moracha</Text>
     </View>
     <View style={{flex:1,paddingTop:10}}>
        <DrawerItemList {...props} />
     </View>
     
        <View>
        </View>
    </DrawerContentScrollView> 
   </View> 
   );
}
