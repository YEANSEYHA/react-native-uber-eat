import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../utils/LocalStorageUtil";

export const SingleItem = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(1);
  const [singlePrice, setSinglePrice] = useState(5);
  const navigation = useNavigation();

  useEffect(async () => {
    const res = await getDataFromLocalStorage("single_item");
    console.log("log res", res);
  }, []);

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

  const addedItemToBasket = async () => {
    console.log("Log user press on Baskets");
    const item = {
      id: 1,
      name: "Football2",
    };
    await saveDataToLocalStorage(item, "single_item");
  };

  const handleBackToHomeScreen = () => {
    console.log("Log user press on Cross");
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={handleBackToHomeScreen}>
          <Image
            source={require("../../assets/images/Times.png")}
            resizeMode="contain"
          />
        </Pressable>

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
      <Pressable
        onPress={addedItemToBasket}
        style={{
          backgroundColor: "black",
          padding: 20,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
          Add {totalItem} to basket
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
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
