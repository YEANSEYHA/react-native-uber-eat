import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SingleFoodCard } from "./SingleFoodCard";

export const HomeScreen = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState("Delivery");

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "Delivery":
        return (
          <View>
            <SingleFoodCard navigation={navigation} />
          </View>
        );
      case "Pickup":
        return (
          <View>
            <Text>Pickup Content</Text>
          </View>
        );
      case "Dine-in":
        return (
          <View>
            <Text>Dine-in Content</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            activeButton === "Delivery" && styles.activeButtonStyle,
          ]}
          onPress={() => handleButtonPress("Delivery")}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === "Delivery" && styles.activeButtonText,
            ]}
          >
            Delivery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            activeButton === "Pickup" && styles.activeButtonStyle,
          ]}
          onPress={() => handleButtonPress("Pickup")}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === "Pickup" && styles.activeButtonText,
            ]}
          >
            Pickup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            activeButton === "Dine-in" && styles.activeButtonStyle,
          ]}
          onPress={() => handleButtonPress("Dine-in")}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === "Dine-in" && styles.activeButtonText,
            ]}
          >
            Dine-in
          </Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
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
  activeButtonStyle: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
  },
  activeButtonText: {
    color: "black",
  },
});
