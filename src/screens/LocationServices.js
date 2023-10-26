import React, { useEffect, useState, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native'
import * as Location from 'expo-location'
import LocationIcon from '../../assets/images/LocationIcon'
import LocationProgress from '../../assets/images/signup_progress/LocationProgress'

const LocationServices = ({navigation}) => {

  const [stateContext] = useContext(StateContext)
  const {container, blueButton, greenButton, header, body, buttonText} = stateContext
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

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
        <View style={{height: 64, width: 64}}>
          <LocationIcon />
        </View>
        <Text>{error}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={container}>
      <View style={{height: 64, width: 64}}>
        <LocationIcon />
      </View>
      <Text style={header}>Location Services</Text>
      <Text style={body}>We use your location to keep you and your furry friend comfortable with weather alerts and suggested walking times to avoid inclement weather.</Text>
      <TouchableOpacity style={greenButton} onPress={() => navigation.navigate("Add a Furry Friend")}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={{height:64, width:358}}>
        <LocationProgress />
      </View>
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
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderRadius: 20,
      borderWidth: 1,
      margin: 10, 
      width: 310,
      height: 58,
    },
    buttonText: {
      fontSize: 20,
      maxWidth: 310,
      maxHeight: 58,
    },
})

export default LocationServices