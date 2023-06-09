import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { HomeNavigator } from "./home.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
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
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Home2" component={HomeNavigator} />
      <Tab.Screen name="Home3" component={HomeNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);
