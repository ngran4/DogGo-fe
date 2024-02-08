import React, { useContext, useState } from "react";
import { StateContext } from "../context/StateContext";
// import * as ImagePicker from 'expo-image-picker'
import {
  Button,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AddPetIcon from "../../assets/images/AddPetIcon";
import PetPhotoIcon from "../../assets/images/PetPhotoIcon";
import GenderPicker from "../components/GenderPicker";
import * as photoService from "../services/photoService";
import * as dogService from "../services/dogService";

const screenWidth = Dimensions.get("window").width;

const AddPet = ({ navigation }) => {
  // const [stateContext] = useContext(StateContext);
  const {
    container,
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
  } = useContext(StateContext)[0];
  const [image, setImage] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleAddDate = (_, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setBirthday(currentDate);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const doAddPet = async function () {
    const formData = {
      name: dogName,
      // photo: null,
      // age: 0,
      // breed: null,
      // birthday: null,
      // gender: setGender(items.value)
    };
    try {
      console.log(formData, "<----- formData");
      await dogService.createDog(formData);
      navigation.navigate("Walk Counter");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <AddPetIcon />
      </View>
      <Text style={[subHeader, { marginBottom: 15 }]}>Add a Furry Friend</Text>

      <View style={{ flex: 0.8 }}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.input}
            value={dogName}
            placeholder="Name"
            placeholderTextColor="grey"
            onChangeText={(text) => setDogName(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
        <GenderPicker />
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "black",
            alignItems: "center",
            width: screenWidth * 0.4,
            marginTop: 12,
          }}
        >
          {/* <DateTimePicker
            value={birthday}
            mode="date"
            display="default"
            onChange={handleAddDate}
            accentColor={colors.background}
            style={{ justifyContent: 'center'}}
          /> */}
      <Button title="Birthday" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        value={birthday}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        onChange={handleAddDate}
      />
        </View>
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

// // ------------ image ------------ //

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

//   // let responseJSON = await response.json();
//   // console.log(responseJSON, "<------ responseJSON");

//   // return responseJSON.url
// }

{
  /* <View style={{ height: 180, width: 180, marginBottom: 20, marginTop: 20 }}>

      <TouchableOpacity style={{ height: 180, width: 180, marginBottom: 20, marginTop: 20 }} onPress={() => pickImage()}>

        {image ? (
          <Image source={{ uri: image }} style={styles.roundedImage} />
        ) : (
          <PetPhotoIcon />
        )}

      </TouchableOpacity>

      </View> */
}
// // ------------ image ------------ //
