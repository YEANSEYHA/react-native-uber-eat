import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { SingleItem } from "./SingleItem";

export const ItemDetails = () => {
  return (
    <View style={styles.container}>
      <SingleItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
