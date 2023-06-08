import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { HomeScreen } from "./src/components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "ios-home" : "ios-home-outline";
                } else if (route.name === "Browse") {
                  iconName = focused ? "ios-search" : "ios-search-outline";
                } else if (route.name === "Grocery") {
                  iconName = focused ? "ios-cart" : "ios-cart-outline";
                } else if (route.name === "Baskets") {
                  iconName = focused ? "ios-basket" : "ios-basket-outline";
                } else if (route.name === "Account") {
                  iconName = focused ? "ios-person" : "ios-person-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Browse" component={HomeScreen} />
            <Tab.Screen name="Grocery" component={HomeScreen} />
            <Tab.Screen name="Baskets" component={HomeScreen} />
            <Tab.Screen name="Account" component={HomeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
