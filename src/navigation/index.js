import React from "react";
import { AppNavigator } from "./AppNavigator";
import { View, Text } from "react-native";
import { AuthNavigator } from "./AuthNavigator";

export const Navigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </View>
  );
};
