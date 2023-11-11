import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../components/Auth/Login";
import EnterPasswordScreen from "../components/Auth/EnterPasswordScreen";

const AuthStack = createNativeStackNavigator();
export const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="LogIn" component={LoginScreen} />
        <AuthStack.Screen
          name="EnterPassword"
          component={EnterPasswordScreen}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
