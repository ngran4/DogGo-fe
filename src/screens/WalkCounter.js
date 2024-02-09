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
  const { container, blueButton, greenButton, subHeader, body, buttonText, dogData, setDogData, dogName, numWalks } = stateContext
  const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dogs`;

  const addWalkCounts = async function () {
    const formData = {
      frequency: numWalks,
      walkTimes: []
    }
    let getDogId = dogData[0]._id
    console.log(getDogId, "<----- getDogId in WalkCounter");
    try {
      await dogService.addWalkCounts(formData, getDogId)
      navigation.navigate('Walk Times')
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
    } catch (error) {
      throw error;
    }
  }
  console.log(dogData, "<----- dogData in WalkCounter");

  useEffect(() => {
    getDog()
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
