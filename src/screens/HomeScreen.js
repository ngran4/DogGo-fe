import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DogProfileWidget from '../components/DogProfileWidget'
import WalkScheduleWidget from '../components/WalkScheduleWidget'
import RemindersWidget from '../components/RemindersWidget'
import CurrentWeather from '../components/CurrentWeather'
import WalkingSchedule from '../components/WalkingSchedule'


const HomeScreen = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, getDogDataFromDB } = stateContext

  useEffect(() => {
    getDogDataFromDB()
  }, [])

  return (
    <SafeAreaView style={container}>
      <CurrentWeather />
      <WalkingSchedule />
      <DogProfileWidget navigation={navigation} />
      <RemindersWidget />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputInfo: {
    fontFamily: 'ConcertOne-Regular',
    fontSize: 16
  },
  subSection: {
    marginVertical: 20
  },
  editText: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 12,
    textDecorationLine: 'underline'

  }
})

export default HomeScreen
