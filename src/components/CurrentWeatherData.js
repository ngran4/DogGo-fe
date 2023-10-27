import React, {useContext} from 'react'
import { StateContext } from '../context/StateContext'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import WeatherIcon from './WeatherIcon'

const CurrentWeatherData = ({weather}) => {

    const [stateContext] = useContext(StateContext)
    const {colors} = stateContext
    // console.log(colors)

    // console.log(weather.list[0].weather[0].main)
    return (
    <View style={styles.wrapper}>
        <View>
            <Text style={{fontSize: 17.41, fontFamily: 'OpenSans-Regular'}}>{weather.city.name}</Text>
            <Text style={{fontSize: 45.53, fontFamily: 'OpenSans-Regular', fontWeight: 'light'}}>{Math.round(weather.list[0].main.temp)}°</Text>
        </View>
            <WeatherIcon iconName={weather.list[0].weather[0].main} />
        <View>
            <Text style={{color: colors.darkBlue, fontSize: 15.23, fontFamily: 'OpenSans-Regular', fontWeight: 'light'}}>Feels Like <Text style={{color: 'black'}}>{Math.round(weather.list[0].main.feels_like)}°</Text></Text>
            <Text style={{fontSize: 15.23, fontFamily: 'OpenSans-Regular', fontWeight: 'light'}}>{weather.list[0].weather[0].description}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 2,
        flexDirection: 'row',
        paddingTop: 19.59,
        gap: 15,
    }
})

export default CurrentWeatherData