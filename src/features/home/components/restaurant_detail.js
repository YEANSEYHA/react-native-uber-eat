import { View, Text, Image, Button } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RestaurantDetail = () => {
  const [amount, SetAmount] = useState(0);

  const onClickAdd = async () => {
    try {
      SetAmount(amount + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickMinus = async () => {
    if (amount < 1) {
      return;
    }
    SetAmount(amount - 1);
  };

  const addedToCart = async () => {
    try {
      await AsyncStorage.setItem("amountItem", amount.toString()); // Convert amount to a string before storing
      console.log("Log Amount of value from local storage", amount);
      const value = await AsyncStorage.getItem("amountItem");
      console.log("Retrieve the total amount", value);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ height: 160 }}>
        <Image
          source={{
            uri: "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        ></Image>
      </View>
      <View style={{ height: 180 }}>
        <Image
          source={{
            uri: "https://cdn3.vectorstock.com/i/1000x1000/19/17/abstract-city-map-with-pins-navigation-app-screen-vector-31251917.jpg",
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        ></Image>
      </View>
      <Text>Lanespan Pizza & Pub(Emeryville)</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginLeft: "25%",
          marginRight: "25%",
        }}
      >
        <Button title="+" onPress={onClickAdd}>
          +
        </Button>
        <Text>Amount-{amount}</Text>
        <Button title="-" onPress={onClickMinus}>
          -
        </Button>
      </View>
      <View>
        <Button
          title="Add 2 to basket.US$16.99"
          color="black"
          onPress={addedToCart}
        >
          Add2
        </Button>
      </View>
    </View>
  );
};
