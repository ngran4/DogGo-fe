import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Text>Alerts</Text>
      <Text>Chat</Text>
      <Text>Settings</Text> */}
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavBar;