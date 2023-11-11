import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MiddleLineText = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#A4A4A4", // You can change the color to your preference
  },
  text: {
    marginHorizontal: 10, // Adjust the horizontal margin as needed
    color: "#A4A4A4",
  },
});

export default MiddleLineText;
