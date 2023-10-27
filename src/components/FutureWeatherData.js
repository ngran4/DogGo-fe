import React from 'react'
import { View, Text } from 'react-native'

const FutureWeatherData = ({weather}) => {

    // const weatherData = weather?.splice(1,7)
    console.log(weather)
    const sevenDayForecast = []
    for(let i =0; i < 56; i+=8) {
        sevenDayForecast.push(weather.list[i])
    }

    return (
    <View>
        {/* {weatherData.map((weather, index) => ( */}
            <View key={1}>
                <Text>test</Text>
            </View>            
        {/* ))} */}
    </View>
  )
}

export default FutureWeatherData