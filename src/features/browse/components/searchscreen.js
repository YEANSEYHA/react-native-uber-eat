import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { SearchComponent } from "@components/Search/Search-component";
import { useNavigation } from "@react-navigation/native";

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

  {
    key: "D",
  },
  {
    key: "D",
  },
];

export const SearchScreen = () => {
  const navigation = useNavigation();
  const itemWidth = Dimensions.get("window").width / 2 - 20;
  const itemHeight = itemWidth * 1.2; // Adjust the aspect ratio as needed

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.itemContainer, { width: itemWidth, height: 140 }]}>
        <View style={{ height: "70%" }}>
          <Image
            source={{
              uri: "https://d1ralsognjng37.cloudfront.net/7e05e083-7920-4b88-a09e-e97bf143dcc2.jpeg",
            }}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            resizeMode="cover"
          ></Image>
        </View>
        <View
          style={{
            height: "30%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Breakfast & brunch
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Press me")}>
        <SearchComponent />
      </TouchableOpacity>

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
    backgroundColor: "white",
  },
  headingStyle: {
    marginTop: 15,
    fontSize: 24,
    marginBottom: 10,
  },
  itemContainer: {
    margin: 5,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 15,
  },
  flatListContent: {
    flexGrow: 1,
  },
});
