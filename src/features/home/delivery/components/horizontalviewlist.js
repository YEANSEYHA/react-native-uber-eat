import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const HorizontalViewList = ({ data }) => {
  return (
    <ScrollView horizontal={true}>
      {data.map((item, index) => (
        <View style={{ flex: 1 }}>
          <View key={index} style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>
                Order from these restaurants and Save
              </Text>
              <TouchableOpacity style={styles.containerButton}>
                <Text style={styles.text}>Browse offer</Text>
                <Icon name="angle-right" size={18} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: item.image,
                }}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    height: 165,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#D2D7F0",
  },
  textContainer: {
    width: "60%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10, // Add padding to the text container for spacing
  },
  textTitle: {
    fontFamily: "Uber Move Text",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16.5519,
    lineHeight: 21,
  },
  imageContainer: {
    width: "40%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
  },
  containerButton: {
    backgroundColor: "white",
    height: 27,
    width: 107,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
