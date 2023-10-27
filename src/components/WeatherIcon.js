import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

const WeatherIcon = ({ iconName }) => {
  const { container, textTheme } = styles
  return (
    <View style={styles.container}>
      <Feather name={weatherType[iconName]?.icon} size={41.12} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
})

export default WeatherIcon
