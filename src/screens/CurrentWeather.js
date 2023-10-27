import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
// StyleSheet is used so we can write CSS as an object to make our code more clean and not use inline styles (see below)
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
// The below icon comes from icons.expo.fyi - the icons are installed automatically when we start the native project with expo
import { Feather } from '@expo/vector-icons'  
import { weatherType } from '../utilities/weatherType'
import CurrentWeatherData from '../components/CurrentWeatherData'
import FutureWeatherData from '../components/FutureWeatherData'

const CurrentWeather = ({  }) => {
  const [stateContext] = useContext(StateContext)
  const {weather, loading, error} = stateContext
// if(weather?.list) {
//   console.log(weather.list[0].weather[0].description)
// }
  // const weatherCondition = weather[0]?.main

  if(weather?.list) {
      return (
        // SafeAreaView will move the Views into the space on the phone that is most viewable and not used by default phone UI elements, such as the status bar at the top of the phone, etc
        <SafeAreaView style={{backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
            <CurrentWeatherData weather={weather} />
            <FutureWeatherData weather={weather} />
        </SafeAreaView>
      )
    }
  

  return (
    // SafeAreaView will move the Views into the space on the phone that is most viewable and not used by default phone UI elements, such as the status bar at the top of the phone, etc
    <SafeAreaView style={{backgroundColor: 'blue'}}>
      <View>
        <Text style={{color: 'black', fontSize: 50}}>Loading Weather</Text>
      </View>
    </SafeAreaView>
  )
}


// We create a styles variable to pass into the View component above, by passing in the container object with all of our styles added into the View style attribute
// Flexbox - You don't need to use display: 'flex' on mobile, as it's not needed. However, flex: "num" will tell the compiler how much of the screen should be filled
// You can have multiple objects within the styles Component, which can then be passed to other pieces of the Class component, as needed
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather
