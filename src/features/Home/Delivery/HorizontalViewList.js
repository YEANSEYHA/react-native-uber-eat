import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const HorizontalViewList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>
          Order from these restaurants and Save
        </Text>
        <View>
          <Text>Browse offer</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://previews.123rf.com/images/puhhha/puhhha1802/puhhha180200064/94675512-people-eating-healthy-food-on-outdoor-party-young-smiling-friends-enjoying-food-and-drinks-having.jpg",
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 165,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#D2D7F0",
    overflow: "hidden", // Apply overflow hidden to hide the image overflow outside the container
  },
  textContainer: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10, // Add padding to the text container for spacing
  },
  textTitle: {
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16.5519,
    lineHeight: 21,
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 25, // Apply the same border radius as the container
  },
});
