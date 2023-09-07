import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { COLORS } from '../constants/Index'

export default function Input  ()  {
  return (
    <View style={styles.container}>
     <TextInput
        style={styles.input}
        placeholder=""
     />
    </View>
  )
}

const styles = ScaledSheet.create({
  container:{
    
  },
  input :{
    backgroundColor: COLORS.lightPrimary
  }
})