import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../constants/Index";
import { Entypo } from '@expo/vector-icons';
import CategoryCard from "../components/Categorycards";
import { ScrollView } from "react-native-gesture-handler";

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
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </ScrollView>
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
  },
  scrollView: {
    marginTop: 10,
    width: "100%",
    height: 200,
  },
  scrollViewContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
})