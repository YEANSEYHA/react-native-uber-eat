import { createStackNavigator } from "@react-navigation/stack";

import { AccountHomeScreen } from "../features/account/screens/accountscreen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen
        name="AccountHomeScreen"
        component={AccountHomeScreen}
      ></AccountStack.Screen>
    </AccountStack.Navigator>
  );
};
