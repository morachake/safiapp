import React from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Index';

export default function SearchCards() {
  return (
   <View style={styles.container}>
    <Image 
        source={require("../assets/images/clearbottle.png")}
        style={styles.image}
    />
    <Text style={{fontFamily:"Medium"}}>Kambi ya kikuyu</Text>
   </View>
  );
}


const styles = StyleSheet.create({
    container: {
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
     width:"80%",
     margin: 20,
     height:76,
     backgroundColor:COLORS.background
    },
    image:{
        height:75,
        borderRadius:10,
    }
})