import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import CreatePost from "../screens/CreatePost";
import Feed from "../screens/Feed";

const Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;

            if (route.name === "CreatePost") {
              iconName = focused ? "create" : "create-outline";
            } else if (route.name === "Feed") {
              iconName = focused ? "book" : "book-outline";
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="CreatePost" component={CreatePost} />
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
    );
  }
}
