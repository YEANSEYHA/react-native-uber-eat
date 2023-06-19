import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../features/home/screens/homescreen";
import { FoodDetails } from "../features/home/delivery/components/fooddetails";
import { CategoriesScreen } from "../features/home/delivery/screens/categoryscreen";

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
      <HomeStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
