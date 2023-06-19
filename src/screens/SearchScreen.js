import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";

const data = [
  {
    key: "A",
  },
  {
    key: "B",
  },
  {
    key: "C",
  },
  {
    key: "D",
  },
];

export const SearchScreen = () => {
  const itemWidth = Dimensions.get("window").width / 2 - 20;
  const itemHeight = itemWidth * 1.2; // Adjust the aspect ratio as needed

  const renderItem = ({ item }) => {
    return (
      <Card
        style={[styles.itemContainer, { width: itemWidth, height: itemHeight }]}
      >
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Text>Breakfast and Brunch</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Top categories</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headingStyle: {
    fontSize: 24,
    marginBottom: 10,
  },
  itemContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "lightgray",
    margin: 5,
  },
  flatListContent: {
    flexGrow: 1,
  },
});
