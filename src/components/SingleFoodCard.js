import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export const SingleFoodCard = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("FoodDetails")}>
      <View style={styles.singleCardContainer}>
        <Image
          source={require("../../assets/food2.png")}
          style={styles.image}
        ></Image>
        <View style={styles.divideText}>
          <View>
            <Text>Adenine Kitchen</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text>4.4</Text>
          </View>
        </View>
        <Text>$0.29 Delivery Fee . 10-25min</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  divideText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  singleCardContainer: {
    margin: 30,
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    backgroundColor: "lightgray",
    borderRadius: 50,
  },
});
