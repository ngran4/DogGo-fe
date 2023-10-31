import * as React from "react";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const WeatherWidget = () => {
  return (
    <SafeAreaView>
      <View style={styles.widget}>
        <Text>Weather Widget</Text> 
      </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  widget: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    width: 310,
    height: 108
  },
  widgetText: {
    fontSize: 20,
    maxWidth: 310,
    maxHeight: 58
  }
})


export default WeatherWidget;