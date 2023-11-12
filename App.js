import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Navigation } from "./src/navigation/index";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation></Navigation>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
