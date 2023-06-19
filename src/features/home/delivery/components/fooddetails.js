import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import SingleCardMenu from "@components/SingleCardMenu";

export const FoodDetails = ({ navigation }) => {
  return (
    <FlatList
      data={[{ key: "1" }, { key: "2" }]} // Replace with your actual data
      renderItem={({ item }) => <SingleCardMenu navigation={navigation} />}
      keyExtractor={(item) => item.key}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    height: 25, // Adjust the desired spacing between items
  },
  listContainer: {
    margin: 10, // Adjust the desired margin value
    // Adjust the desired margin bottom value
  },
});
