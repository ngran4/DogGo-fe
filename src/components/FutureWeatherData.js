import React from 'react'
import { View, Text } from 'react-native'
import WeatherIcon from './WeatherIcon'
import Moment from 'moment'

const FutureWeatherData = ({weather}) => {
    Moment.locale('en')

    const sevenDayForecast = []
    for(let i =0; i < 40; i+=8) {
        sevenDayForecast.push(weather.list[i])
    }
    console.log(sevenDayForecast[0].dt_txt)
    timestamp = new Date(2023-10-27)
    const formatDate = timestamp.getDay()
    console.log(formatDate)
    return (
    <View style={{flex:1, flexDirection: 'row', gap: 25}}>
        {sevenDayForecast.map((weather, index) => (
            <View key={index} style={{alignItems: 'center'}}>
                <Text>{Math.round(sevenDayForecast[index].main.temp_max)}°</Text>
                <WeatherIcon iconName={sevenDayForecast[index].weather[0].main} />
                <Text>{Moment(sevenDayForecast[index].dt_txt).format('ddd')}</Text>
            </View>            
        ))}
    </View>
  )
}

export default FutureWeatherData