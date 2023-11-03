import React from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { COLORS } from "../constants/Index";
import { Entypo } from '@expo/vector-icons';
import CategoryCard from "../components/Categorycards";
import { ScrollView } from "react-native-gesture-handler";
import Homecards from "../components/Homecards";

export default function SearchScreen() {
  const categoryData = ["Plastic", "Paper", "Glass", "Metal", "Organic"]
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <Entypo name="location-pin" size={24} color="black" />
        <TextInput
          placeholder="Enter your Location"
          style={styles.input}
        />
      </View>
      <ScrollView stickyHeaderIndices={[0]} contentContainerStyle={{ alignItems: "center" }}>
        
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
    padding: 4
  },
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
    paddingVertical: 20

  },
  homecardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    paddingVertical: 10
  }
})