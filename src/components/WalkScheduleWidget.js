import * as React from "react";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import { SafeAreaView, View, Text } from "react-native";

const WalkScheduleWidget = () => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext


  return (
    <SafeAreaView>
      <Text style={homePgHeader}>Walking Schedule</Text>
      {
        "if there is a walking schedule" ? 
        (
          <Text>Display times here</Text>
        ) : 
        <View style={greenButton}>
        <Text style={buttonText}>Set Up Walking Schedule!</Text>
      </View>
      }
    </SafeAreaView>
  )
}

export default WalkScheduleWidget;