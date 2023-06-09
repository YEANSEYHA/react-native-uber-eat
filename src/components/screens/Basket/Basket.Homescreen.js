import { View, Text, Image, StyleSheet } from "react-native";

export const BasketHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Orders</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
