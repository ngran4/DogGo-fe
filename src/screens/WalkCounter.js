import React, { useState, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import WalkIcon from '../../assets/images/WalkIcon'
import {
  Text,
  Button,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

const WalkCounter = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, body, buttonText } = stateContext
  const [count, setCount] = useState(0)

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <WalkIcon />
      </View>

      <Text> How often do you like to walk your dog? </Text>

      <Button
        onPress={() => { setCount(count - 1) }} title='-'
      />
      <Text>{count}</Text>
      <Button
        onPress={() => { setCount(count + 1) }} title='+'
      />
      <TouchableOpacity style={greenButton} onPress={() => navigation.navigate('Walk Times')}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default WalkCounter
