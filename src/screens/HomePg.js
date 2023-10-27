import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import NavBar from '../components/NavBar'
import HomeScreen from './HomeScreen'

const HomePage = ({navigation}) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext

  return (
    <SafeAreaView style={container}>
      <HomeScreen/>
      <NavBar/>
    </SafeAreaView>
  )
}



export default HomePage
