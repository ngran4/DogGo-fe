import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"

// screens 
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import Alerts from "../screens/AlertsScreen";
import Chat from "../screens/ChatScreen";

// screen names
const homeName = "Home";
const settingsName = "Settings";
const alertsName = "Alerts";
const chatName = "Chat";

const Tab = createBottomTabNavigator(); 

const NavBar = () => {
  return (
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === homeName) {
          iconName = focused ? "home" : "home-outline";
          
        } else if (route.name === alertsName) {
          iconName = focused ? "list" : "list-outline";

        } else if (route.name === chatName) {
          iconName = focused ? "chatbubbles" : "chatbubbles-outline";

        } else if (route.name === settingsName) {
        iconName = focused ? "settings" : "settings-outline";
      }
        return <Ionicons name={iconName} size={size}  />;
      },
    })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={alertsName} component={Alerts} />
      <Tab.Screen name={chatName} component={Chat} />
      <Tab.Screen name={settingsName} component={Settings} />
    </Tab.Navigator>
  );
}

export default NavBar;