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
import Alerts from "../screens/AlertsScreen";
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
        justifyContent: "space-evenly",
        backgroundColor: "white", 
        height: 80, 
        paddingTop: 8,
        paddingBottom: 8,
      },
    }}
    >
      <Tab.Screen name={homeScreenName} component={HomeScreen}
        options={({ navigation }) => ({
          tabBarButton: () =>
            <HomeIcon onPress={() => navigation.navigate("Home")} />
        })} />
      <Tab.Screen name={alertsName} component={Alerts}
        options={({ navigation }) => ({
          tabBarButton: () =>
            <AlertsIcon onPress={() => navigation.navigate("Alerts")} />
        })} />
      <Tab.Screen name={chatName} component={Chat}
        options={({ navigation }) => ({
          tabBarButton: () =>
            <ChatIcon onPress={() => navigation.navigate("Chat")} />
        })} />
      <Tab.Screen name={settingsName} component={Settings}
        options={({ navigation }) => ({
          tabBarButton: () =>
            <SettingsIcon onPress={() => navigation.navigate("Settings")} />
        })} />
    </Tab.Navigator>
  );
}

export default NavBar;