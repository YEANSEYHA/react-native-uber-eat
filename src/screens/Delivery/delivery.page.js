import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { SvgXml } from "react-native-svg";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FoodDetails } from "../FoodDetails";

import { HorizontalViewList } from "../../features/Home/Delivery/HorizontalViewList";

export const DeliveryPage = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={require("../../../assets/Adjust.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>

        <View
          style={{
            marginTop: 15,
            marginBottom: 15,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>Now</Text>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.text}>London Hall</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/icon1.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>American</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/grocery.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>American</Text>
          </View>
        </View>
      </View>
      {/* four item section */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
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
                source={require("../../../assets/convenience1.png")}
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
                source={require("../../../assets/alcohol.png")}
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
                source={require("../../../assets/pet.png")}
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
          <TouchableOpacity
            onPress={() => {
              console.log("Clicked On More page");
              navigation.navigate("CategoriesScreen");
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
          </TouchableOpacity>
        </View>
      </View>
      {/* <FoodDetails /> */}
      {/* Slider Card Section */}
      <FoodDetails />
      <HorizontalViewList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  itemContainer: {
    backgroundColor: "rgba(230, 230, 230, 0.4)",
    flex: 1,
    flexDirection: "column",
    height: 90,
    margin: 10,
    borderRadius: 10.345,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18.6209,
    lineHeight: 23,
    color: "#000000",
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
  dot: {
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18.6209,
    lineHeight: 23,
    color: "black", // Customize dot color if needed
    paddingHorizontal: 5, // Adjust the spacing around the dot if needed
  },
});
