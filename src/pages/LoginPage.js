import React from 'react'

import { Text, View } from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../constants/Index';
import Input from '../components/Input';


export default function LoginPage()  {
 
  return (
    <View style={styles.container}>
      <Text>Create a New Account</Text>
     <Input/>
     <Input/>
     <Input/>
     <Input/>
    </View>
  )
}

const styles = ScaledSheet.create({
  container:{

  },
  header: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: "Roboto",   
  }
})
