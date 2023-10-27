import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import AddPetIcon from '../../assets/images/AddPetIcon'

const AddPet = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, body, buttonText } = stateContext

  return (
    <SafeAreaView style={container}>
        <View style={{height: 64, width: 64}}>
            <AddPetIcon />
         </View>
        <Text style={header}>Add a Furry Friend</Text>
        <Text>Image Upload Placeholder</Text>
        <Text>Name Input Placeholder</Text>
        <TouchableOpacity style={greenButton} onPress={() => navigation.navigate("Walk Counter")}>
            <Text style={buttonText}>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AddPet
