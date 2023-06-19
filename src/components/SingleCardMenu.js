import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SingleCardMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heartIcon}>
        <AntDesign name="heart" size={24} color="white" />
      </View>
      <View style={styles.rewardContainer}>
        <Text style={styles.rewardText}>5 orders until $5 reward</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://previews.123rf.com/images/puhhha/puhhha1802/puhhha180200064/94675512-people-eating-healthy-food-on-outdoor-party-young-smiling-friends-enjoying-food-and-drinks-having.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <Text style={styles.restaurantName}>Cardinal Chips</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.4</Text>
          </View>
        </View>
        <Text style={styles.deliveryText}>$0.29 Delivery Fee. 10-25 min</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 250,
  },
  heartIcon: {
    position: "absolute",
    zIndex: 9,
    top: 10,
    right: 10,
  },
  rewardContainer: {
    position: "absolute",
    zIndex: 9,
    top: 10,
    left: 0,
    backgroundColor: "#34A853",
    width: 235,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  rewardText: {
    color: "white",
  },
  imageContainer: {
    flex: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    flex: 2,
    marginTop: 5,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantName: {
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16.5519,
    color: "#000000",
    textAlign: "center",
  },
  ratingContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
  },
  ratingText: {
    textAlign: "center",
  },
  deliveryText: {
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14.4829,
    lineHeight: 21,
    color: "#6B6B6B",
  },
});

export default SingleCardMenu;
