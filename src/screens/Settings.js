import React, { useContext } from 'react';
import { StateContext } from '../context/StateContext'
import { View, Text, SafeAreaView } from 'react-native'; 

const Settings = () => {
  const [stateContext] = useContext(StateContext)
  const { container, header } = stateContext

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={header}>Settings</Text>
      </View>
    </SafeAreaView>
  )
}

export default Settings