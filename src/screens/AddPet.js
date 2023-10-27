import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import AddPetIcon from '../../assets/images/AddPetIcon'

const AddPet = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, body, buttonText, dogName, setDogName } = stateContext


  const doAddPet = async function () {
    const formData = {
      dogName: dogName
    }

    navigation.navigate("Walk Counter")
  }

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <AddPetIcon />
      </View>
      <Text style={header}>Add a Furry Friend</Text>
      <TextInput
        style={styles.input}
        value={dogName}
        placeholder={"Dog Name"}
        onChangeText={(text) => setDogName(text)}
        autoCapitalize={"none"}
      />
      {/* <TextInput
            style={styles.input}
            value={breed}
            placeholder={"Dog Breed"}
            secureTextEntry
            onChangeText={(text) => setBreed(text)}
            /> */}
      <TouchableOpacity style={greenButton} onPress={() => doAddPet()}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 25,
    marginBottom: 10,
    backgroundColor: '#fff'
  }
})

export default AddPet