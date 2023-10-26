import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import DogProfileWidget from '../components/DogProfileWidget'
import WalkScheduleWidget from '../components/WalkScheduleWidget'
import RemindersWidget from '../components/RemindersWidget'


const HomeScreen = () => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext

  return (
    <SafeAreaView style={container}>
      <Text>Home Screen!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('WeatherWidget')}>
        <Text>Weather Widget</Text>
      </TouchableOpacity>
      <DogProfileWidget />
      <WalkScheduleWidget/>
      <RemindersWidget/>
      <Text>NAV BAR</Text>
    </SafeAreaView>
  )
}



export default HomeScreen
