import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { View, Text, SafeAreaView } from 'react-native'

const ComingSoonScreen = () => {
  const [stateContext] = useContext(StateContext)
  const { container, header } = stateContext
  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={header}>Coming Soon</Text>
      </View>
    </SafeAreaView>
  )
}

export default ComingSoonScreen
