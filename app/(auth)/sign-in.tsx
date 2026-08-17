import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>Sign In Page</Text>
      <Link href="/(auth)/register">Register</Link>
    </View>
  );
};

export default SignIn;
