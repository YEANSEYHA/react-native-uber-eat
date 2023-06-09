import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SingleFoodCard } from "./SingleFoodCard";

export const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.optionContainer}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Delivery</Text>
        </View>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Pickup</Text>
        </View>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Dine-in</Text>
        </View>
      </View>
      <SingleFoodCard navigation={navigation} />

      <SingleFoodCard navigation={navigation} />
      <SingleFoodCard navigation={navigation} />
      <SingleFoodCard navigation={navigation} />
      <SingleFoodCard navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    width: 100,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
  },
});
