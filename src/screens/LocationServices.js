import React, { useEffect, useState, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import * as Location from 'expo-location'
import LocationIcon from '../../assets/images/LocationIcon'
import LocationProgress from '../../assets/images/signup_progress/LocationProgress'
import WalkAlert from '../components/WalkAlert'
import Moment from 'moment'

const LocationServices = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const {container, greenButton, header, body, buttonText, setLat, setLon, lat, lon} = stateContext
  const [error, setError] = useState(null)

  // Needed to pass in the current time to the Alert example on the screen
  Moment.locale('en')
  const time = new Date
  const formatTime = Moment(time).format("h:mm")
  
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      const location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon])

  if (error) {
    return (
      <SafeAreaView style={container}>
        <View style={{ height: 64, width: 64 }}>
          <LocationIcon />
        </View>
        <Text>{error}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64}}>
        <LocationIcon />
      </View>
      <Text style={[header, {marginTop: 15 }]}>Location Services</Text>
      <WalkAlert 
        styles={{marginTop: 28}} 
        text={'Almost time to walk Fido, consider checking the weather before you head out! 🌧️'}
        time={formatTime} 
      />
      <Text style={[body, {marginTop: 20}]}>
        We use your location to keep you and your furry friend comfortable with weather alerts and suggested walking times to avoid inclement weather.
      </Text>
      <TouchableOpacity style={[greenButton, {marginTop: 40, marginBottom: 8}]} onPress={() => navigation.navigate('Add a Furry Friend')}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={{ height: 64, width: 358}}>
        <LocationProgress />
      </View>
    </SafeAreaView>
  )
}

export default LocationServices
