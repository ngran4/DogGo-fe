import React from 'react'
import { View, Text } from 'react-native'

const CurrentWeatherData = ({weather}) => {

  
    return (
    <View>
        <Text style={{color: 'black', fontSize: 20}}>City: {weather.city.name}</Text>
        <Text style={{color: 'black', fontSize: 20}}>Current Temp: {weather.list[0].main.temp}°</Text>
        <Text style={{color: 'black', fontSize: 20}}>Feels Like: {weather.list[0].main.feels_like}°</Text>
        <Text style={{color: 'black', fontSize: 20}}>Description: {weather.list[0].weather[0].description}</Text>
    </View>
  )
}

export default CurrentWeatherData