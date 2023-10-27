import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, IMAGES } from "../constants/Index";
export default function Login() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingTop: 10 }}>
        <View style={styles.container}>
          <Feather name="chevron-left" size={26} color="black" />
          <Image source={IMAGES.logo} style={styles.image} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              alignItems: "center",
              color: COLORS.primary,
              fontSize: 32,
              fontFamily: "Medium",
            }}
          >
            Login to your account
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput placeholder="Type :" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 61,
    height: 45,
  },
});
