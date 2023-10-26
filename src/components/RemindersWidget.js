import * as React from "react";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import { SafeAreaView, View, Text} from "react-native";

const RemindersWidget = () => {


  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext


  return (
    <SafeAreaView>
      <Text style={homePgHeader}>Upcoming Reminders</Text>
      <View style={greenButton}>
        <Text style={buttonText}>Set Up upcoming reminders!</Text>
      </View>
    </SafeAreaView>
  )
}

export default RemindersWidget;