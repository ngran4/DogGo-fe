import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
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
// import {Picker} from '@react-native-picker/picker';
import DropDownPicker from "react-native-dropdown-picker";
import { StateContext } from "../context/StateContext";
import AddPetIcon from "../../assets/images/AddPetIcon";
import PetPhotoIcon from "../../assets/images/PetPhotoIcon";
import * as photoService from "../services/photoService";
import * as dogService from "../services/dogService";

const screenWidth = Dimensions.get("window").width;

const AddPet = ({ navigation }) => {
  const [stateContext] = useContext(StateContext);
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
    colors,
  } = stateContext;
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    {label: 'Select Gender', value: ''},
    {label: 'Male', value: 'M'},
    {label: 'Female', value: 'F'},
   ]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    let photoData = new FormData();
    photoData.append("photo", {
      uri: image,
      type: "image/jpeg",
      name: "textPhoto.jpg",
    });

    const response = await photoService.create(photoData);
    console.log(response, "<----- response");

    let responseJSON = await response.json();
    console.log(responseJSON, "<------ responseJSON");

    // return responseJSON.url
  };

  const doAddPet = async function () {
    const formData = {
      dogName: dogName,
      birthday: null,
      gender: null,
      breed: null,
    };

    // Upload the image
    // await uploadImage();

    navigation.navigate("Walk Counter");
  };

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <AddPetIcon />
      </View>
      <Text style={[subHeader, { marginBottom: 15 }]}>Add a Furry Friend</Text>
      {/* <View style={{ height: 180, width: 180, marginBottom: 20, marginTop: 20 }}> 

      <TouchableOpacity style={{ height: 180, width: 180, marginBottom: 20, marginTop: 20 }} onPress={() => pickImage()}>
        
        {image ? (
          <Image source={{ uri: image }} style={styles.roundedImage} />
        ) : (
          <PetPhotoIcon />
        )}

      </TouchableOpacity>

      </View> */}
      <View style={{ flex: 0.8 }}>
        <View style={{alignItems: "center"}}>
        <TextInput
          style={styles.input}
          value={dogName}
          placeholder={"Name"}
          placeholderTextColor={"grey"}
          onChangeText={(text) => setDogName(text)}
          autoCapitalize={"none"}
        />
        </View>
          <View style={{borderBottomWidth: 2, borderBottomColor: 'black', alignItems: 'flex-start', width: screenWidth * 0.28, marginTop: 5}}>
        <DropDownPicker
          open={open}
          value={gender}
          placeholder="Sex"
          items={[
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
          ]}
          setOpen={setOpen}
          setValue={setGender}
          setItems={setItems}
          style={{backgroundColor: colors.background, borderColor: colors.background, width: screenWidth * 0.3, paddingLeft: 0, color: "grey"}}
          placeholderStyle={{
            color: "grey",
            fontSize: 20,
            fontWeight: 600,
            fontFamily: "OpenSans-Regular",
            paddingLeft: 0,
          }}
          dropDownContainerStyle={{
            backgroundColor: colors.background,
            borderColor: colors.background,
          }}
          listItemLabelStyle={{
            color: "grey",
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "OpenSans-Regular",
          }}
          selectedItemLabelStyle={{
            color: "grey",
            fontSize: 15,
}}
        />
      </View>
      </View>
      <TouchableOpacity style={greenButton} onPress={() => doAddPet()}>
        <Text style={buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingRight: 15,
    paddingTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: screenWidth * 0.7,
    fontFamily: "OpenSans-Regular",
    fontSize: 20,
    fontWeight: 600,
  },
  roundedImage: {
    height: 180,
    width: 180,
    borderRadius: 90,
    overflow: "hidden",
  },
});


export default AddPet;

// const doAddPet = async function () {
//   // Create FormData for the image
//   let photoData = new FormData();
//   photoData.append('photo', {
//     uri: image,
//     type: 'image/jpeg',
//     name: 'textPhoto.jpg'
//   });

//   // Create FormData for the dog name
//   const formData = new FormData();
//   formData.append('dogName', dogName);

//   // Combine photoData and formData
//   for (let [key, value] of formData.entries()) {
//     photoData.append(key, value);
//   }

//   // Use dogService.create() to upload the combined data
//   const response = await dogService.create(photoData);
//   console.log(response, '<----- response')

//   let responseJSON = await response.json();
//   console.log(responseJSON, '<------ responseJSON')

//   navigation.navigate("Walk Counter")
// }
