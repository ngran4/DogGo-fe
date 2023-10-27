import React from 'react'
import { View, Text } from 'react-native'
import WeatherIcon from './WeatherIcon'

const FutureWeatherData = ({weather}) => {

    // const weatherData = weather?.splice(1,7)

    const sevenDayForecast = []
    for(let i =0; i < 40; i+=8) {
        sevenDayForecast.push(weather.list[i])
    }
    // console.log(sevenDayForecast[0])
    timestamp = new Date()
    return (
    <View style={{flex:1, flexDirection: 'row', gap: 20}}>
        {sevenDayForecast.map((weather, index) => (
            <View key={index}>
                <Text>{Math.round(sevenDayForecast[0].main.temp_max)}</Text>
                <WeatherIcon iconName={sevenDayForecast[0].weather[0].main} />
                <Text>test</Text>
            </View>            
        ))}
    </View>
  )
}

export default FutureWeatherData