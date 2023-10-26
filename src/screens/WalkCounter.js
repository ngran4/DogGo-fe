import React, { useState, useContext } from "react";
import { StateContext } from '../context/StateContext'
import {
    Text,
    Button,
    View,
    SafeAreaView,
    TouchableOpacity
} from "react-native"

const WalkCounter = ({navigation}) => {

    const [stateContext] = useContext(StateContext)
    const {container, blueButton, greenButton, header, body, buttonText} = stateContext 
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView>
            <View>
                <Text> How often do you like to walk your dog? </Text>
                
                <Button
                    onPress={() => {setCount(count - 1)}} title="-"
                />
                <Text>{count}</Text>
                <Button
                    onPress={() => {setCount(count + 1)}} title="+"
                />
                <TouchableOpacity style={greenButton} onPress={() => navigation.navigate("Walk Times")}>
                    <Text style={buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default WalkCounter