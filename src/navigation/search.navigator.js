import { createStackNavigator } from "@react-navigation/stack";

import { FoodDetails } from "../components/screens/FoodDetails";
import { SearchScreen } from "../components/screens/SearchScreen";

const SearchStack = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
      ></SearchStack.Screen>
      <SearchStack.Screen
        name="FoodDetails"
        component={FoodDetails}
      ></SearchStack.Screen>
    </SearchStack.Navigator>
  );
};
