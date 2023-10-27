import React, { useState, useContext } from "react";
import { StateContext } from '../context/StateContext'
import Counter from '../components/Counter';
import WalkIcon from '../../assets/images/WalkIcon'
import {
    Text,
    Button,
    View,
    SafeAreaView,
    TouchableOpacity
} from "react-native"

const WalkCounter = ({navigation}) => {

    const [stateContext] = useContext(StateContext)
    // const { numWalks, setNumWalks } = stateContext;
    
    // const handleCounterChange = (newCount) => {
    //   setNumWalks(newCount);
    // };

    const {container, blueButton, greenButton, header, body, buttonText, subHeader} = stateContext 

    return (
        <SafeAreaView style={container}>
          <View style={{height: 64, width: 64}}>
            <WalkIcon />
          </View>

                <Text style={subHeader}> How often do you like to walk your dog? </Text>
              <Counter />
                <TouchableOpacity style={greenButton} onPress={() => navigation.navigate("Walk Times")}>
                    <Text style={buttonText}>Next</Text>
                </TouchableOpacity>

        </SafeAreaView>
    )
}

export default WalkCounter