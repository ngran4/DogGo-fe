import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { View, Text, SafeAreaView } from 'react-native'

const Chat = () => {
  const [stateContext] = useContext(StateContext)
  const { container, header } = stateContext

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={header}>Chat</Text>
      </View>
    </SafeAreaView>
  )
}

export default Chat
