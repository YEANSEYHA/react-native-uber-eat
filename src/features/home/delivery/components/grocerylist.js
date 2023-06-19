import React from "react";
import { View, StyleSheet } from "react-native";
import { FreshGroceries } from "./freshgroceries"; // Assuming the FreshGroceries component is imported correctly

export const GroceryList = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((grocery, index) => (
        <FreshGroceries
          key={index}
          imageSource={grocery.imageSource}
          title={grocery.title}
          price={grocery.price}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
