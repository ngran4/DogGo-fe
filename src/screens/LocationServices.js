import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'

const LocationServices = () => {
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  
  const {container, title} = styles

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon])

  if(lat && lon) {
    console.log(`Latitude: ${lat} / Longitude: ${lon}`)
  }

  if (error) {
    return (
      <SafeAreaView style={container}>
        <Image source={require('../../assets/images/locationPin.png')} />
        <Text>{error}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={container}>
        <Image source={require('../../assets/images/locationPin.png')} />
        <Text style={title}>Location Services</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
    },
})

export default LocationServices