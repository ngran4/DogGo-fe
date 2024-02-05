import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
// StyleSheet is used so we can write CSS as an object to make our code more clean and not use inline styles (see below)
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'
// The below icon comes from icons.expo.fyi - the icons are installed automatically when we start the native project with expo
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import CurrentWeatherData from './CurrentWeatherData'
import FutureWeatherData from './FutureWeatherData'

const CurrentWeather = ({ }) => {
  const [stateContext] = useContext(StateContext)
  const { weather, loading, error, body } = stateContext

  if (weather?.list) {
    return (
    // SafeAreaView will move the Views into the space on the phone that is most viewable and not used by default phone UI elements, such as the status bar at the top of the phone, etc
      <SafeAreaView style={styles.container}>
        <CurrentWeatherData weather={weather} />
        <FutureWeatherData weather={weather} />
      </SafeAreaView>
    )
  }

  return (
    // SafeAreaView will move the Views into the space on the phone that is most viewable and not used by default phone UI elements, such as the status bar at the top of the phone, etc
    <SafeAreaView>
      <View>
        <Text style={body}>Loading Weather</Text>
        <ActivityIndicator size='large' />
      </View>
    </SafeAreaView>
  )
}

// We create a styles variable to pass into the View component above, by passing in the container object with all of our styles added into the View style attribute
// Flexbox - You don't need to use display: 'flex' on mobile, as it's not needed. However, flex: "num" will tell the compiler how much of the screen should be filled
// You can have multiple objects within the styles Component, which can then be passed to other pieces of the Class component, as needed
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 358,
    height: 168.663,
    flexShrink: 0,
    borderRadius: 23.58,
    backgroundColor: '#FFF',
    // marginLeft: 16,
    // marginTop: 10,
    marginBottom: 20
  }
})

export default CurrentWeather
