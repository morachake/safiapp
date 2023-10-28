import { Feather, FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/Button";
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
        <View style={{ alignItems: "center", marginTop: 18 }}>
          <TextInput placeholder="Type : " style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
        </View>
        <View style={{ alignItems: "center", marginTop: 18 }}>
          <View
            style={{ justifyContent: "space-around", alignItems: "center" }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <FontAwesome name="check-square" size={24} color={COLORS.primary} />
            <Text>Forgot password?</Text>
          </View>
          <Button />
          <Text style={{ fontFamily: "Bold", fontSize: 25 }}>OR</Text>
          <View style={styles.socialIcons}>
            <Entypo name="facebook-with-circle" size={44} color="#0021F5" />
            <AntDesign name="google" size={44} color="black" />
            <AntDesign name="apple1" size={44} color="black" />
          </View>
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
  input: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightPrimary,
    height: 50,
    width: "90%",
    borderRadius: 15,
    padding: 8,
    fontSize: 13,
    color: COLORS.primary,
    marginTop: 15,
  },
  socialIcons: {
    marginTop: 20,
    flexDirection: "row",
  },
});
