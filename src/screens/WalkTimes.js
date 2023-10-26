import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from "react-native"

const WalkTimes = ({navigation}) => {

const [stateContext] = useContext(StateContext)
const {container, blueButton, greenButton, header, body, buttonText} = stateContext

async function submitData() {
    // The data will be collated and submitted here before submitting
    // Then the user will be sent to the home page
    navigation.navigate("Home")
}
  return (
    <SafeAreaView>
        <View>
            <Text>What times of the day would you ideally walk DOG'S NAME?</Text>
            <Text>Dropdown placeholder</Text>
            <Text>dropdown placeholder</Text>
            <TouchableOpacity style={greenButton} onPress={submitData}>
                <Text style={buttonText}>Start Walking</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default WalkTimes