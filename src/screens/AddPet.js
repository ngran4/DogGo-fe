import React, { useContext, useState } from 'react'
import { StateContext } from "../context/StateContext";
// import * as ImagePicker from 'expo-image-picker'
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";
import AddPetIcon from "../../assets/images/AddPetIcon";
// import PetPhotoIcon from "../../assets/images/PetPhotoIcon";
import GenderPicker from "../components/GenderPicker";
// import * as photoService from "../services/photoService";
import * as dogService from "../services/dogService";

const screenWidth = Dimensions.get('window').width

const AddPet = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const {
    container,
    blueButton,
    greenButton,
    subHeader,
    body,
    buttonText,
    dogName,
    setDogName,
    birthday,
    setBirthday,
    breed,
    setBreed,
    gender,
    setGender,
    colors
  } = stateContext
  const [image, setImage] = useState(null)
  const [open, setOpen] = useState(false)


  // ------------ image ------------ //

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1
  //   })

  //   console.log(result)

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri)
  //   }
  // }

  // const uploadImage = async () => {
  //   const photoData = new FormData()
  //   photoData.append('photo', {
  //     uri: image,
  //     type: 'image/jpeg',
  //     name: 'textPhoto.jpg'
  //   })

  //   const response = await photoService.create(photoData)
  //   console.log(response, '<----- response')

    // let responseJSON = await response.json();
    // console.log(responseJSON, "<------ responseJSON");

    // return responseJSON.url
  // }

  // ------------ image ------------ //

  const doAddPet = async function () {
    const formData = {
      name: dogName,
      photo: null,
      age: 0,
      breed: null,
      birthday: null,
      gender: gender
    }
    try {
      console.log(formData, '<----- formData')
      await dogService.createDog(formData)
      navigation.navigate('Walk Counter')
    } catch (error) {
      alert(error.message)
    };
  }

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <AddPetIcon />
      </View>
      <Text style={[subHeader, { marginBottom: 15 }]}>Add a Furry Friend</Text>
      <View style={{ flex: 0.8 }}>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            value={dogName}
            placeholder='Name'
            placeholderTextColor='grey'
            onChangeText={(text) => setDogName(text)}
            autoCapitalize='none'
          />
        </View>
      <GenderPicker />
      </View>
      <TouchableOpacity style={greenButton} onPress={() => doAddPet()}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingRight: 15,
    paddingTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: screenWidth * 0.7,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontWeight: 600
  },
  roundedImage: {
    height: 180,
    width: 180,
    borderRadius: 90,
    overflow: 'hidden'
  }
})

export default AddPet