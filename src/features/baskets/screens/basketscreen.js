import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BasketHomeScreen = () => {
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    // Try to get the local storage of cart in the screen
    const retrieveCart = async () => {
      try {
        const value = await AsyncStorage.getItem("amountItem");
        console.log("Retrieve the total amount", value);
        if (value !== null) {
          setCartItem(parseInt(value)); // Convert value to a number
        }
      } catch (err) {
        console.log(err);
      }
    };

    retrieveCart();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.orders}>
        <Text>Orders</Text>
      </View>
      <Text>Total cart: {cartItem}</Text>
      <View style={styles.cartsContainer}>
        <Text style={styles.cartsText}>Carts</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../../../../assets/cart-image.png")} />
      </View>
      <View style={styles.addItemHeadingContainer}>
        <Text style={styles.addItemHeading}>Add Items to start a basket</Text>
      </View>
      <View style={styles.descriptionItemContainer}>
        <Text style={styles.descriptionText}>
          Once you add an item from a restaurant or store, your basket will
          appear here
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button onPress={() => {}} title="Start Shopping" color="white" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  orders: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    display: "flex",
    flexDirection: "row-reverse",
    alignSelf: "flex-end",
    backgroundColor: "lightgray",
    width: 60,
    height: 40,
    borderRadius: 20,
    marginBottom: 0,
  },
  cartsContainer: {
    marginLeft: 20,
  },
  cartsText: {
    fontSize: 36,
    fontWeight: 700,
  },
  imageContainer: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addItemHeadingContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  addItemHeading: {
    fontSize: 20,
    fontWeight: 600,
  },
  descriptionItemContainer: {
    display: "flex",
    alignItems: "center",
    margin: 20,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginLeft: 25,
    marginRight: 25,
    color: "#545454",
  },
  containerButton: {
    width: 170,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    borderRadius: 25,
    marginTop: 25,
    fontSize: 14,
  },
});
