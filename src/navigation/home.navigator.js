import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../features/home/screens/homescreen";
import { FoodDetails } from "../features/home/delivery/components/fooddetails";
import { CategoriesScreen } from "../features/home/delivery/screens/categoryscreen";
import { RestaurantDetail } from "../features/home/components/restaurant_detail";
import { ItemDetails } from "../Screens/ItemDetails";

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
      <HomeStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name="ItemDetails"
        component={ItemDetails}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
