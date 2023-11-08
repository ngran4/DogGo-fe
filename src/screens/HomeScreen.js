import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import DogProfileWidget from '../components/DogProfileWidget'
import WalkScheduleWidget from '../components/WalkScheduleWidget'
import RemindersWidget from '../components/RemindersWidget'
import CurrentWeather from '../components/CurrentWeather'
import WalkingSchedule from '../components/WalkingSchedule'


const HomeScreen = ({navigation}) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext

  return (
    <SafeAreaView style={container}>
      <CurrentWeather/>
      <WalkingSchedule />
      <DogProfileWidget navigation={navigation}/>
      <RemindersWidget />
    </SafeAreaView>
  )
}



export default HomeScreen
