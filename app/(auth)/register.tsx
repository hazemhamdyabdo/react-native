import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Register() {
  return (
    <View>
      <Text>Register Page</Text>
      <Link href="/(auth)/sign-in">Sign In</Link>
    </View>
  );
}
