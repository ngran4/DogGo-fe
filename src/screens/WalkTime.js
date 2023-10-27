import React, { useState, useContext } from "react";
import { StateContext } from "../context/StateContext";
import RNPickerSelect from "react-native-picker-select";
import WalkTimeIcon from "../../assets/images/WalkTimeIcon";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import TimeSelector from '../components/TimeSelector'
import WalkTimeProgress from '../../assets/images/signup_progress/WalkTimeProgress';

const WalkTime = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [stateContext] = useContext(StateContext);
  const { numWalks, setNumWalks } = stateContext;
  const { container, greenButton, buttonText, blueButton, subHeader, doLater } = stateContext;

  async function submitData() {
    // The data will be collated and submitted here before submitting
    // Then the user will be sent to the home page
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={container}>
          <View style={[{height: 64, width: 64}, {marginBottom: 35}]}>
            <WalkTimeIcon />
          </View>
      <Text style={subHeader}>What times of the day would you ideally walk Fido?</Text>

      {/* other content of PageB */}
      {selectedValue && <Text> Selected: {selectedValue}</Text>}
      <TimeSelector />
      <TouchableOpacity style={greenButton} onPress={submitData}>
        <Text style={buttonText}>Start Walking!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={doLater}>Do Later</Text>
      </TouchableOpacity>

      <View style={[{height: 64, width: 358}]}>
        <WalkTimeProgress/>
      </View>
    </SafeAreaView>
  );
};

export default WalkTime;
