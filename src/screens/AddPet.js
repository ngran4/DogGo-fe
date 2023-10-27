import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView,  Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import AddPetIcon from '../../assets/images/AddPetIcon'
import DatePicker from 'react-native-date-picker'

import * as dogService from '../services/dogService'

const AddPet = ({navigation}) => {
    const [stateContext] = useContext(StateContext)
    const {container, blueButton, greenButton, header, body, buttonText, name, setName, breed, setBreed, birthday, setBirthday, gender, setGender, walking, setWalking} = stateContext

    // const [name, setName] = useState("");
    // const [age, setAge] = useState(0);
    // const [breed, setBreed] = useState("");
    // const [birthday, setBirthday] = useState(new Date);
    // const [gender, setGender] = useState("female");
    // const [walking, setWalking] = useState([{
    //   fequency: 1,
    //   walkTimes: {
    //     time: "1:00 PM"
    //   }
    // }]);

    const handleSubmit= async function () {
      const dogData = {
          name: name,
          breed: breed,
          birthday: birthday,
          gender: gender,
          walking: walking
      }
      
      // navigation.navigate("Location Services")
      
      try {
          await dogService.create(dogData)
      } catch (error) {
          console.log(error)
      }
  }
    

  return (
    <SafeAreaView style={container}>
        <View style={{height: 64, width: 64}}>
            <AddPetIcon />
        </View>
        <Text style={header}>Add a Furry Friend</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder={"Dog Name"}
          onChangeText={ (text) => setName(text)}
          autoCapitalize={"none"}
          />
            {/* <TextInput
            style={styles.input}
            value={breed}
            placeholder={"Dog Breed"}
            secureTextEntry
            onChangeText={(text) => setBreed(text)}
            /> */}
        <TouchableOpacity style={greenButton} onPress={() => navigation.navigate("Walk Counter")}>
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
  },
});

export default AddPet