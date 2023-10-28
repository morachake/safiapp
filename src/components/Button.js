import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/Index";

export default function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: "#FFFF", fontFamily: "Medium", fontSize: 14 }}>
        Login
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 50,
    width: "50%",
    borderRadius: 15,
  },
});
