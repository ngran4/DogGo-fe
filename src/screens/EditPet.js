import React, { useState } from 'react'
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, TextInput, Dimensions } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import {Calendar} from 'react-native-calendars';

// not supported on web
// import RNPickerSelect from "react-native-picker-select";
// import DateTimePicker from '@react-native-community/datetimepicker';

import NavBar from "../components/NavBar";

const screenWidth = Dimensions.get('window').width;

const EditPet = ({navigation}) => {
  // Date Picker
  const [selected, setSelected] = useState("");
  const [currDate, setCurrDate] = useState(new Date());

  // Gender Picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    [    
      {label: 'Boy', value: 'Boy'},
      {label: 'Girl', value: 'Girl'}
    ]
  );

  // State Context
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, birthday, setBirthday, setGender, gender, breed, setBreed, dogName, setDogName } = stateContext

  
  
  // POST info 
  const doUpdatePet = async function () {
    const formData = {
      dogName: dogName,
      birthday: setBirthday(selected),
      gender: setGender(value),
      breed: breed
    }
    navigation.navigate("Pet Profile")
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.widget}>
        <Text style={buttonText}>Edit Name</Text>
        <TextInput
          style={styles.input}
          value={dogName}
          placeholder={dogName}
          onChangeText={(text)=> setDogName(text)}
          />
        <Text >Age</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Birthday</Text>
          <TouchableOpacity >
            <Text>What's {dogName}'s Birthday</Text>
          </TouchableOpacity>
          {/* <Text>{currDate}</Text> */}
          <Calendar
          // onPressArrowLeft={subtractMonth => subtractMonth()}
          disableArrowRight={true}
          onDayPress={(day) => 
            // console.log(selected.dateString)
            setSelected(day.dateString)
          }
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, marked: true, selectedColor: 'blue'}}
          }
          />
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Gender</Text>
          {/* <RNPickerSelect 
          placeholder={{label: `What's ${dogName}'s Gender?`, value: null}}
          onValueChange={(value) => setGender(value)}
          items={[
            {label: "Boy", value: "Boy"},
            {label: "Girl", value: "Girl"},
          ]}
          /> */}
          <DropDownPicker
          style={styles.picker}
          placeholder={`Whats ${dogName}'s gender?`}
          onßChange={(value) => setGender(value)}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
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
      <TouchableOpacity style={greenButton} onPress={() => doUpdatePet()}>
        <Text style={buttonText}>Save Furry Friend</Text>
      </TouchableOpacity>
      <NavBar />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F5E6", 
    flex: 1,
    alignItems: "left",
    marginLeft: 30,
    screenHeight: 0.9
  },
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
    paddingRight: 15,
    paddingTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: screenWidth * 0.7,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontWeight: 600,
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
  subSection: {
    marginVertical: 20,
  },
  picker: {
    zIndex: null
  }
})

export default EditPet;