import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContext'
import Counter from '../components/Counter'
import WalkIcon from '../../assets/images/WalkIcon'
import WalkCounterProgress from '../../assets/images/signup_progress/WalkCounterPorgress'
import {
  Text,
  Button,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import * as dogService from "../services/dogService";
import * as tokenService from "../services/tokenService";


const WalkCounter = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { 
    container, 
    blueButton, 
    greenButton, 
    subHeader, 
    body, 
    buttonText, 
    dogData, 
    setDogData, 
    dogName, 
    numWalks,
    dogId,
    setDogId, 
  } = stateContext
  

  const addWalkCounts = async function () {
    // const formData = {
    //   frequency: numWalks,
    //   walkTimes: []
    // }
    // // putting dogId in stateContext
    // const dogId = dogData[0]._id
    // setDogId(dogId)
    try {
      // await dogService.addWalk(formData, dogId)

      navigation.navigate('Walk Times')
    } catch (error) {
      alert(error.message)
    }
  }

  const lookUpDog = async () => {
    const lookUp = await dogService.getDog()
    console.log(lookUp, "<---- lookUp in WalkCounter");
    // if (lookUp.name && lookup)
  }

  useEffect(() => {
    lookUpDog()
  }, [])

  return (
    <SafeAreaView style={[container]}>

      <View style={[{ height: 64, width: 64 }, { marginBottom: 35 }]}>
        <WalkIcon />
      </View>
      <Text style={[subHeader]}> How many times a day would you ideally walk {dogName}? </Text>

      <Counter style={[{ marginBottom: 90 }, { marginTop: 90 }]} />
      <TouchableOpacity style={[greenButton]} onPress={() => addWalkCounts()}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={[{ height: 64, width: 358 }, { marginTop: 15 }]}>
        <WalkCounterProgress />
      </View>

    </SafeAreaView>
  )
}

export default WalkCounter
