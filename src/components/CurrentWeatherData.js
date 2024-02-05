import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import WeatherIcon from './WeatherIcon'

const CurrentWeatherData = ({ weather }) => {
  const [stateContext] = useContext(StateContext)
  const { colors } = stateContext

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={{ fontSize: 17.41, fontFamily: 'OpenSans-Regular' }}>{weather.city.name}</Text>
        <Text style={{ fontSize: 45.53, fontFamily: 'OpenSans-Regular', fontWeight: 'light' }}>{Math.round(weather.list[0].main.temp)}°</Text>
      </View>
      <View style={{ marginTop: 15, marginLeft: 11.64 }}>
        <WeatherIcon iconName={weather.list[0].weather[0].main} />
      </View>
      <View>
        <Text style={{ color: colors.darkBlue, fontSize: 15.23, fontFamily: 'OpenSans-Regular', fontWeight: 'light' }}>Feels Like <Text style={{ color: 'black' }}>{Math.round(weather.list[0].main.feels_like)}°</Text></Text>
        <Text style={{ fontSize: 15.23, fontFamily: 'OpenSans-Regular', fontWeight: 'light' }}>{weather.list[0].weather[0].description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    gap: 25
  }
})

export default CurrentWeatherData
