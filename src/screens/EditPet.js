import React, { useState, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { Button, SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native'
// import DropDownPicker from 'react-native-dropdown-picker'
// import { Calendar } from 'react-native-calendars'
import * as ImagePicker from 'expo-image-picker'
import * as photoService from '../services/photoService'
import * as dogService from '../services/dogService'
import DateTimePickerModal from "react-native-modal-datetime-picker";

// not supported on web
// import RNPickerSelect from "react-native-picker-select";
// import DateTimePicker from '@react-native-community/datetimepicker';

import NavBar from '../components/NavBar'
import GenderPicker from '../components/GenderPicker'

const screenWidth = Dimensions.get('window').width

const EditPet = ({ navigation }) => {
  // Date Picker
  const [selected, setSelected] = useState('')
  const [currDate, setCurrDate] = useState(new Date())
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
    setBirthday(date);
    hideDatePicker();
  };

  // Gender Picker
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: 'Select Gender', value: '' },
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' }
  ])

  // image Picker
  const [image, setImage] = useState(null)

  // State Context
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, birthday, setBirthday, setGender, gender, breed, setBreed, dogName, setDogName } = stateContext

  // ------------ POST ------------ //
  const doUpdatePet = async function () {
    const formData = {
      dogName,
      birthday: setBirthday(selected),
      gender: setGender(value)
      // breed: breed
    }
    // Upload the image
    await uploadImage()
    await dogService.editDog(formData)
    navigation.navigate('Pet Profile')
  }
  // ------------ POST ------------ //

  // ------------ image ------------ //

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const uploadImage = async () => {
    const photoData = new FormData()
    photoData.append('photo', {
      uri: image,
      type: 'image/jpeg',
      name: 'textPhoto.jpg'
    })

    const response = await photoService.create(photoData)
    console.log(response, '<----- response')

    // let responseJSON = await response.json();
    // console.log(responseJSON, "<------ responseJSON");

    // return responseJSON.url
  }

  // ------------ image ------------ //

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View
          style={styles.widget}
        >
          <TouchableOpacity onPress={() => pickImage()}>
            {image
              ? (
                <Image source={{ uri: image }} style={styles.roundedImage} />
                )
              : (
                <Image style={styles.tinyLogo} source={require('../../assets/images/addphoto.png')} />
                )}
          </TouchableOpacity>
          <View>
            <Text style={buttonText}>Edit Name</Text>
            <TextInput
              style={styles.input}
              value={dogName}
              placeholder={dogName}
              onChangeText={(text) => setDogName(text)}
            />
          </View>
        </View>
        <View style={styles.infoSection}>
          <View style={styles.subSection}>
            <Text style={homePgHeader}>Birthday</Text>
            <TouchableOpacity>
              <Text>What's {dogName}'s Birthday</Text>
            </TouchableOpacity>
            {/* <Text>{currDate}</Text> */}
            <View>
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
        <View style={styles.infoSection}>
          <View style={styles.subSection}>
            <Text style={homePgHeader}>Gender</Text>
              <GenderPicker />
          </View>
        </View>
        <View style={styles.infoSection}>
          <View style={styles.subSection}>
            <Text style={homePgHeader}>Breed</Text>
            <TextInput
              style={styles.input}
              value={breed}
              placeholder='Enter Breed'
              onChangeText={(text) => setBreed(text)}
            />
          </View>
        </View>
        <TouchableOpacity style={greenButton} onPress={() => doUpdatePet()}>
          <Text style={buttonText}>Save Furry Friend</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F5E6',
    flex: 1,
    alignItems: 'left',
    // marginLeft: 30,
    screenHeight: 0.9
  },
  scroll: {
    // flex: 0.5,
    // marginBottom: 50
    // screenWidth: 0.9
  },
  widget: {
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'center',
    backgroundColor: '#c4e8f2',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: screenWidth * 0.9,
    height: 112
  },
  widgetText: {
    fontSize: 20,
    maxWidth: 310,
    maxHeight: 58
  },
  input: {
    paddingRight: 15,
    paddingTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: screenWidth * 0.65,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontWeight: 600
  },
  editText: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 12,
    textDecorationLine: 'underline'

  },
  infoSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontFamily: 'ConcertOne-Regular',
    marginLeft: 20
  },
  inputInfo: {
    fontFamily: 'ConcertOne-Regular',
    fontSize: 16
  },
  subSection: {
    marginVertical: 20
  },
  picker: {
    zIndex: null,
    width: screenWidth * 0.9
  },
  calendar: {
    width: screenWidth * 0.9
    // height: 350,
    // backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 10,
    // marginTop: 20,
    // marginBottom: 20,
  },
  tinyLogo: {
    // display: 'flex',
    // justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    width: 70,
    height: 70
  },
  roundedImage: {
    height: 70,
    width: 70,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 90,
    overflow: 'hidden'
  }
})

export default EditPet
