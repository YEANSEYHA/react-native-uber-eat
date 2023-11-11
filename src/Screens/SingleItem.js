import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export const SingleItem = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(1);
  const [singlePrice, setSinglePrice] = useState(5);

  const handleAddItem = () => {
    let newAmount = totalItem + 1;
    setTotalItem(newAmount);
  };
  const handleMinusItem = () => {
    if (totalItem < 1) return;
    let newAmount = totalItem - 1;
    setTotalItem(newAmount);
  };

  const caculatePrice = (amount) => {
    let totalPrice = amount * singlePrice;
    return totalPrice;
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/Times.png")}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/images/Cart.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://fastfood.theringer.com/img/items/3.jpg",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>KFC Friend Fries</Text>
      </View>
      <View style={styles.itemDescription}>
        <Text style={styles.description}>Information</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text>Price</Text>
        <Text>5$</Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.countingContainer}>
          <Pressable onPress={handleMinusItem}>
            <Text style={styles.singleSymbolStyle}>-</Text>
          </Pressable>
          <Text>{totalItem}</Text>
          <Pressable onPress={handleAddItem}>
            <Text style={styles.singleSymbolStyle}>+</Text>
          </Pressable>
        </View>

        <Text>{caculatePrice(totalItem)}$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  imageContainer: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
  },
  itemDescription: {},
  description: {
    fontSize: 18,
    paddingHorizontal: 20,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    fontSize: 16,
  },
  countingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 80,
    height: 30,
    borderWidth: "2px #E8E8E8",
  },
  singleSymbolStyle: {
    fontSize: 24,
  },
});
