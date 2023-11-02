import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/Index';

export default function CategoryCard() {
  return (
    <View style={styles.container}>
        <Text style={{color:"#FFF"}}>Plastic</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignContent: 'center',
        height: 37,
        paddingHorizontal: 10,
        width: 100,
        backgroundColor: COLORS.primary,
        borderRadius: 12,
        marginHorizontal:10
    }
})