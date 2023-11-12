import React from "react";
import { AppNavigator } from "./AppNavigator";
import { View, Text } from "react-native";
import { AuthNavigator } from "./AuthNavigator";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log("Log is Authecate", isAuthenticated);

  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </View>
  );
};
