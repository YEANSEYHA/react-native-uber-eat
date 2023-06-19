import { createStackNavigator } from "@react-navigation/stack";

import { BasketHomeScreen } from "../features/baskets/screens/basketscreen";

const BasketStack = createStackNavigator();

export const BasketNavigator = () => {
  return (
    <BasketStack.Navigator screenOptions={{ headerShown: false }}>
      <BasketStack.Screen
        name="BasketHomeScreen"
        component={BasketHomeScreen}
      ></BasketStack.Screen>
    </BasketStack.Navigator>
  );
};
