import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DeliveryPage } from "../screens/Delivery/delivery.page";

export const HomeScreen = () => {
  const [activeButton, setActiveButton] = useState("Delivery");

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "Delivery":
        return <DeliveryPage />;
      case "Pickup":
        return <Text>Pickup Content</Text>;
      case "Dine-in":
        return <Text>Dine-in Content</Text>;
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
    backgroundColor: "white",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    color: "black",
  },
  activeButtonStyle: {
    backgroundColor: "black",
  },
  buttonText: {
    color: "black",
  },
  activeButtonText: {
    color: "white",
  },
});
