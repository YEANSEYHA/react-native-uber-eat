import { View, Text, StyleSheet } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
