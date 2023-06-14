import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const DeliveryPage = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../../assets/icon1.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>American</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../../assets/grocery.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>American</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
  itemContainer: {
    backgroundColor: "rgba(230, 230, 230, 0.4)",
    flex: 1,
    flexDirection: "column",
    height: 90,
    margin: 10,
    borderRadius: 10.345,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18.6209,
    lineHeight: 23,
    color: "#000000",
  },
});
