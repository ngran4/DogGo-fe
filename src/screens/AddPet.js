import React, { useContext, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import { StateContext } from '../context/StateContext'
import AddPetIcon from '../../assets/images/AddPetIcon'
import PetPhotoIcon from '../../assets/images/PetPhotoIcon'
import * as photoService from '../services/photoService'

const screenWidth = Dimensions.get('window').width;

const AddPet = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, subHeader, body, buttonText, dogName, setDogName } = stateContext
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    let photoData = new FormData();
    photoData.append('photo', {
      uri: image,
      type: 'image/jpeg',
      name: 'textPhoto.jpg'
    });

    const response = await photoService.create(photoData)
    console.log(response, '<----- response')

    let responseJSON = await response.json();
    console.log(responseJSON, '<------ responseJSON')
  }

  const doAddPet = async function () {
    const formData = {
      dogName: dogName
    }

    // Upload the image
    await uploadImage();

    navigation.navigate("Walk Counter")
  }

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <AddPetIcon />
      </View>
      <Text style={[subHeader, {marginBottom:15}]}>Add a Furry Friend</Text>
      {/* <View style={{ height: 180, width: 180, marginBottom: 20, marginTop: 20 }}> */}

      <TouchableOpacity style={{ height: 180, width: 180, marginBottom: 20, marginTop: 20 }} onPress={() => pickImage()}>
        <PetPhotoIcon />
      </TouchableOpacity>

      {/* </View> */}
      <View style={{flex: 0.8, alignItems: 'center'}}>      
        <TextInput
        style={styles.input}
        value={dogName}
        placeholder={"Name"}
        onChangeText={(text) => setDogName(text)}
        autoCapitalize={"none"}
      />
      </View>

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
    paddingRight: 15,
    paddingTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: screenWidth * 0.7,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontWeight: 600,
  }
})


export default AddPet