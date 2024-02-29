import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContext'
import WalkTimeIcon from '../../assets/images/WalkTimeIcon'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import TimeSelector from '../components/TimeSelector'
import WalkTimeProgress from '../../assets/images/signup_progress/WalkTimeProgress'
import * as dogService from '../services/dogService'
import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dogs`;


const WalkTime = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null)
  const [stateContext] = useContext(StateContext)
  const { 
    container, 
    greenButton, 
    buttonText, 
    blueButton, 
    subHeader, 
    doLater, 
    numWalks, 
    setNumWalks, 
    walkTimes,
    setWalkTimes,
    dogName,
    setDogId,
    setDogData,
    dogData, 
  } = stateContext

  async function addWalkTimes () {
    // The data will be collated and submitted here before submitting
    const formData = {
      walking: walkTimes
    }
    console.log(formData, "<----- formData in WalkTimes");
    console.log(typeof formData, "<----- typeof formData in WalkTimes")
    // putting dogId in stateContext
    const dogId = dogData[0]._id
    setDogId(dogId)
    try {
      await dogService.addWalk(walkTimes, dogId)
      navigation.navigate('Home')
    } catch (error) {
      alert(error.message)
    }
  }

  const getDog = async () => {
    try {
      const token = await tokenService.getToken();
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("Content-Type", "application/json");
  
      const response = await fetch(BASE_URL, {
        method: "GET",
        headers: headers,
      })
      const json = await response.json();
      console.log(json, "<----- json in getDog");
      setDogData(json);
      dogData.map((dog) => {
        if (dog.name === dogName && dog.birthday === birthday) {
        const dogId = dogData[0]._id
        setDogId(dogId) 
        console.log(dogId, "<----- dogId in getDog")
        setDogData(getCurrentDog(dogId))
      } else {
        throw new Error("Dog not found")
      }
      })
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    // const dogData = dogService.getDog()
    // setDogData(dogData)
    getDog()
  }, [])

  return (
    <SafeAreaView style={container}>
      <View style={[{ height: 64, width: 64 }, { marginBottom: 35 }]}>
        <WalkTimeIcon />
      </View>
      <Text style={subHeader}>What times of the day would you ideally walk {dogName}?</Text>

      {/* other content of PageB */}
      {selectedValue && <Text> Selected: {selectedValue}</Text>}
      <TimeSelector />
      <TouchableOpacity style={greenButton} onPress={addWalkTimes}>
        <Text style={buttonText}>Start Walking!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={doLater}>Do Later</Text>
      </TouchableOpacity>

      <View style={[{ height: 64, width: 358 }]}>
        <WalkTimeProgress />
      </View>
    </SafeAreaView>
  )
}

export default WalkTime
