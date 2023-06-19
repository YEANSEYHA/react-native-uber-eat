import { View, Text, Image, StyleSheet } from "react-native";

export const FreshGroceries = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        height: 245,
        padding: 10,
      }}
    >
      <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <View style={{ height: "50%" }}>
          <Image
            source={{
              uri: "https://post.greatist.com/wp-content/uploads/sites/2/2021/07/369366-grt-Pineapple-Benefits-732x549-thumbnail.jpg",
            }}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </View>
        <Text style={styles.textPineapple}>Organic Pineapple</Text>
        <View style={{ height: "20%" }}>
          <Text style={{ color: "#6B6B6B" }}>$9.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPineapple: {
    height: "30%",
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
    color: "#000000",
  },
});
