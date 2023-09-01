import React from 'react'

import { Text, View } from 'react-native'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../constants/Index';


export default function LoginPage()  {
 
  return (
    <View>
      <Text style={styles.header}> Login to Your Account</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  header: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: "Roboto",   
  }
})
