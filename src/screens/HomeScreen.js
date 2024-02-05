import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import DogProfileWidget from '../components/DogProfileWidget'
import WalkScheduleWidget from '../components/WalkScheduleWidget'
import RemindersWidget from '../components/RemindersWidget'
import CurrentWeather from '../components/CurrentWeather'
import WalkingSchedule from '../components/WalkingSchedule'

import * as authService from '../services/authService'

const HomeScreen = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText } = stateContext

  const doLogout = async function () {
    try {
      await authService.logout()
      navigation.navigate('Welcome')
    } catch (error) {
      console.log(error)
    }
  }

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
