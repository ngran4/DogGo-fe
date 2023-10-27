import React, { useState, useContext } from "react";
import { StateContext } from "../context/StateContext";
import RNPickerSelect from "react-native-picker-select";
import { numberOfDropdowns } from "./walkinfo";
import WalkTimeIcon from "../../assets/images/WalkTimeIcon";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import TimeSelector from '../components/TimeSelector'

const WalkTime = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [stateContext] = useContext(StateContext);
  const { numWalks, setNumWalks } = stateContext;
  const { container, greenButton, buttonText, blueButton } = stateContext;

  async function submitData() {
    // The data will be collated and submitted here before submitting
    // Then the user will be sent to the home page
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Text>What times of the day would you ideally walk Fido?</Text>

      {/* other content of PageB */}
      {selectedValue && <Text> Selected: {selectedValue}</Text>}
      <TimeSelector />
      <TouchableOpacity style={greenButton} onPress={submitData}>
        <Text style={buttonText}>Start Walking!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={blueButton}>
        <Text style={buttonText}>Do Later</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WalkTime;
