import * as React from "react";
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import NavBar from "../components/NavBar";

const EditPet = ({navigation}) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, birthday, setBirthday, setGender, gender, breed, setBreed, dogName } = stateContext
  
  
  
  
  
  
  
  
  
  
  
  const doChangePet = async function () {
    const formData = {
      birthday: birthday,
      gender: gender,
      breed: breed
    }
    navigation.navigate("Pet Profile")
  }
  
  return (
    <SafeAreaView style={container}>
      <View
        style={styles.widget}>
        <Text style={buttonText}>{dogName}</Text>
        <Text >Age</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Birthday</Text>
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Gender</Text>
          <RNPickerSelect 
          placeholder={{label: `What's ${dogName}'s Gender?`, value: null}}
          onValueChange={(value) => setGender(value)}
          items={[
            {label: "Boy", value: "Boy"},
            {label: "Girl", value: "Girl"},
          ]}
          />
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Breed</Text>
          <TextInput
          style={styles.input}
          value={breed}
          placeholder={"Enter Breed"}
          onChangeText={(text)=> setBreed(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={greenButton} onPress={() => doChangePet()}>
        <Text style={buttonText}>Save Furry Friend</Text>
      </TouchableOpacity>
      {/* <NavBar /> */}
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  widget: {
    backgroundColor: '#c4e8f2',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: 310,
    height: 112
  },
  widgetText: {
    fontSize: 20,
    maxWidth: 310,
    maxHeight: 58
  },
  input: {
    height: 25,
    marginBottom: 10,
    backgroundColor: '#fff'
},
  editText: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 12,
    textDecorationLine: 'underline',

  },
  infoSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: "ConcertOne-Regular",
    marginLeft: 20,
  },
  inputInfo: {
    fontFamily: "ConcertOne-Regular",
    fontSize: 16,
  },
  container: {
    backgroundColor: "#F8F5E6",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "left",
    marginLeft: 30,
  },
  subSection: {
    marginVertical: 20
  }
})

export default EditPet;