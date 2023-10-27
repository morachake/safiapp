import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Login() {
  return (
    <SafeAreaView  style={{flex:1}}>
     <View>
      <Text>Login to your account</Text>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container : {
  //   flex:1,
  //   paddingTop : insets.top
  // }
})