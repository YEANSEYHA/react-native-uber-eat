import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const SearchComponent = ({ onPress }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    console.log("Navigate to the new screen");
    navigation.navigate("SearchScreenDetail");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon name="search" size={22} color="black" />
      </View>
      <TextInput
        placeholder="Food, shopping, drinks, etc"
        style={styles.text}
        onFocus={handleClick}
      />
    </TouchableOpacity>
  );
};

// Rest of the code remains the same...

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 44,
    backgroundColor: "#EEEEEE",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    fontSize: 16,
  },
});
