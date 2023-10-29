import { Feather, FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/Button";
import { COLORS, IMAGES } from "../constants/Index";
export default function SignUp() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
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
            Create a new account
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 18 }}>
          <TextInput placeholder="Type : " style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="First Name" style={styles.input} />
          <TextInput placeholder="LastName : " style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
              marginTop: 20,
              width: "90%"
            }}
          >
            <FontAwesome name="check-square" size={24} color={COLORS.primary} />
            <Text>
              By signing up you accept the Term of services and Privacy Policy
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 18 }}>
          <View
            style={{ justifyContent: "space-around", alignItems: "center" }}
          />
          
          <Button />
          <Text style={{ fontFamily: "Light", fontSize: 12, marginTop: 12 }}>
            Already have an account ? Login
          </Text>
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
    marginTop: 19,
  },
  socialIcons: {
    marginTop: 25,
    flexDirection: "row",
  },
});
