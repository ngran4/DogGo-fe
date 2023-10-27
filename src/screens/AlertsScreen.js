import React, {useContext} from 'react';
import { StateContext } from '../context/StateContext'
import { View, Text, SafeAreaView } from 'react-native'; 

const AlertsScreen = () => {
  const [stateContext] = useContext(StateContext)
  const { container, header } = stateContext
  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={header}>Alerts</Text>
      </View>
    </SafeAreaView>
  )
}

export default AlertsScreen