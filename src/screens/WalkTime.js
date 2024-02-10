import React, { useState, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import WalkTimeIcon from '../../assets/images/WalkTimeIcon'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import TimeSelector from '../components/TimeSelector'
import WalkTimeProgress from '../../assets/images/signup_progress/WalkTimeProgress'
import * as dogService from '../services/dogService'

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
    dogId,
  } = stateContext

  async function addWalkTimes () {
    // The data will be collated and submitted here before submitting
    
    console.log(walkTimes, "<----- walkTimes in WalkTime");
    const formData = {
      frequency: numWalks,
      walkTimes: [walkTimes]
    }
    try{
      await dogService.addWalkCounts(formData, dogId)
      navigation.navigate('Home')
    } catch (error) {
      alert(error.message)
    }
  }

  console.log(dogId, "<----- dogId in WalkTime");

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
