import { createStackNavigator } from "@react-navigation/stack";
// import { FoodDetails } from "../screens/FoodDetails";

import { SearchScreen } from "../components/searchscreen";

import { SearchScreenDetail } from "../components/searchscreendetail";
const SearchStack = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
      ></SearchStack.Screen>
      {/* <SearchStack.Screen
        name="FoodDetails"
        component={FoodDetails}
      ></SearchStack.Screen> */}
      <SearchStack.Screen
        name="SearchScreenDetail"
        component={SearchScreenDetail}
      ></SearchStack.Screen>
    </SearchStack.Navigator>
  );
};
