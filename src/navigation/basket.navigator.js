import { createStackNavigator } from "@react-navigation/stack";
import { BasketHomeScreen } from "../components/screens/Basket/Basket.Homescreen";

const BasketStack = createStackNavigator();

export const BasketNavigator = () => {
  return (
    <BasketStack.Navigator headerMode="none">
      <BasketStack.Screen
        name="BasketHomeScreen"
        component={BasketHomeScreen}
      ></BasketStack.Screen>
    </BasketStack.Navigator>
  );
};
