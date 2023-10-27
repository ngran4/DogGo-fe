import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import DogProfileWidget from '../components/DogProfileWidget'
import WalkScheduleWidget from '../components/WalkScheduleWidget'
import RemindersWidget from '../components/RemindersWidget'
import CurrentWeather from '../components/CurrentWeather'


const HomeScreen = ({navigation}) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext

  return (
    <SafeAreaView style={container}>
      <CurrentWeather/>
      <DogProfileWidget navigation={navigation}/>
      <WalkScheduleWidget/>
      <RemindersWidget/>
    </SafeAreaView>
  )
}



export default HomeScreen
