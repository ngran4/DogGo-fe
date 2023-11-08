import * as React from "react";
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";


const LogIn = ()  => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, dogName } = stateContext

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={header}>Log In</Text>
      </View>
    </SafeAreaView>
  )
}

export default LogIn;