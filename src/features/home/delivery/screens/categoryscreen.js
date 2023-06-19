import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

export const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleContainer}>All Categories</Text>
      </View>
      <View
        style={{
          marginTop: 25,
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            height: 100,
          }}
        >
          <View style={{ height: 75, backgroundColor: "white" }}>
            <View style={styles.imageContainer2}>
              <Image
                source={require("../../../../../assets/convenience1.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Uber Move Text",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: 14.4829,
                lineHeight: 21,
                textAlign: "center",
                color: "#000000",
              }}
            >
              Convenience
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            height: 100,
          }}
        >
          <View style={{ height: 75, backgroundColor: "white" }}>
            <View style={styles.imageContainer2}>
              <Image
                source={require("../../../../../assets/alcohol.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Uber Move Text",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: 14.4829,
                lineHeight: 21,
                textAlign: "center",
                color: "#000000",
              }}
            >
              Alcohol
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            height: 100,
          }}
        >
          <View style={{ height: 75, backgroundColor: "white" }}>
            <View style={styles.imageContainer2}>
              <Image
                source={require("../../../../../assets/pet.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Uber Move Text",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: 14.4829,
                lineHeight: 21,
                textAlign: "center",
                color: "#000000",
              }}
            >
              Pet Supplies
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            height: 100,
          }}
        >
          <View style={{ height: 75, backgroundColor: "white" }}>
            <View style={styles.imageContainer2}>
              <FontAwesome name="ellipsis-h" size={20} color="#000000" />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Uber Move Text",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: 14.4829,
                lineHeight: 21,
                textAlign: "center",
                color: "#000000",
              }}
            >
              More
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  imageContainer2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(230, 230, 230, 0.4)",
    borderRadius: 5.17248,
    marginLeft: 10,
    marginRight: 10,
  },
});
