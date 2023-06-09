import { View, Text } from "react-native";
import { SingleFoodCard } from "../SingleFoodCard";

export const FoodDetails = ({ navigation }) => {
  return (
    <View>
      <SingleFoodCard navigation={navigation} />
    </View>
  );
};
