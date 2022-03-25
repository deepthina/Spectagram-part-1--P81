import React from "react";

import Profile from "../screens/Profile";
import TabNavigator from "./TabNavigator";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
export default class DrawerNavigation extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }
}
