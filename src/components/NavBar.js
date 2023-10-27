import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"

// Icons 
import SettingsIcon from "../../assets/images/SettingsIcon";
import ChatIcon from "../../assets/images/ChatIcon";
import AlertsIcon from "../../assets/images/AlertsIcon";
import HomeIcon from "../../assets/images/HomeIcon";

// screens 
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import AlertsScreen from "../screens/AlertsScreen";
import Chat from "../screens/ChatScreen";

// screen names
const homeScreenName = "Home";
const settingsName = "Settings";
const alertsName = "Alerts";
const chatName = "Chat";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { 
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white", 
        height: 80, 
        paddingTop: 8,
        paddingBottom: 8,
      },
    }}
    >
      
      <Tab.Screen name={homeScreenName}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon />
          )
        }} >
        {() => <HomeScreen />}
      </Tab.Screen>

      <Tab.Screen name={alertsName}
        options={{
          tabBarIcon: ({ focused }) => (
            <AlertsIcon />
          )
        }} >
          {() => <AlertsScreen />}
        </Tab.Screen>

      <Tab.Screen name={chatName}
        options={{
          tabBarIcon: ({ focused }) => (
            <ChatIcon />
          )
        }}>
        {() => <Chat />}
        </Tab.Screen>

      <Tab.Screen name={settingsName}
        options={{
          tabBarIcon: ({ focused }) => (
            <SettingsIcon />
          )
        }}>
          {() => <Settings />}
          </Tab.Screen>

    </Tab.Navigator>
  );
}

export default NavBar;