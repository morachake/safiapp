import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../constants/Index";
import { Entypo } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <Entypo name="location-pin" size={24} color="black" />
        <TextInput
          placeholder="Enter your Location"
          style={styles.input}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputcontainer: { 
    flexDirection: 'row',
    width: "90%", 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 4 },
  input: {
    width: "80%",
    height: 50,
    border: "none",
    paddingHorizontal: 15,
    borderRadius: 15,
  }
})