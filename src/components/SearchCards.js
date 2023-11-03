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
     width:"85%",
     margin: 10,
     height:76,
     padding:5,
     backgroundColor:COLORS.background,
     borderRadius: 10
    },
    image:{
        height:75,
        borderRadius:10,
    }
})