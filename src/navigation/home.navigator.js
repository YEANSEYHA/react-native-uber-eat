import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../components/HomeScreen";
import { FoodDetails } from "../components/screens/FoodDetails";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name="FoodDetails"
        component={FoodDetails}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
