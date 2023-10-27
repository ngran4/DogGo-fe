import React, { useState, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import Counter from '../components/Counter';
import WalkIcon from '../../assets/images/WalkIcon'
import {
    Text,
    Button,
    View,
    SafeAreaView,
    TouchableOpacity,
} from "react-native"

const WalkCounter = ({navigation}) => {

    const [stateContext] = useContext(StateContext)
    const {container, blueButton, greenButton, subHeader, body, buttonText} = stateContext 
    const [count, setCount] = useState(0);
    // const { numWalks, setNumWalks } = stateContext;
    
    // const handleCounterChange = (newCount) => {
    //   setNumWalks(newCount);
    // };

    return (
        <SafeAreaView style={[container, ]}>
          <View style={[{height: 64, width: 64}, {marginBottom: 35}]}>
            <WalkIcon />
          </View>

                <Text style={[subHeader, ]}> How many times a day would you ideally walk Fido? </Text>
              <Counter style={[{marginBottom: 90}, {marginTop: 90}]} />
                <TouchableOpacity style={[greenButton, ]} onPress={() => navigation.navigate("Walk Times")}>
                    <Text style={buttonText}>Next</Text>
                </TouchableOpacity>

    </SafeAreaView>
  )
}

export default WalkCounter
