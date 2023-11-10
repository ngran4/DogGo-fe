import React, { useState } from 'react'
import { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, TextInput, Dimensions } from "react-native";
// import RNPickerSelect from "react-native-picker-select";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import NavBar from "../components/NavBar";

const screenWidth = Dimensions.get('window').width;

const EditPet = ({navigation}) => {
  // const [mode, setMode] = useState('date')
  // const [show, setShow] = useState(false)

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    [    
      {label: 'Boy', value: 'Boy'},
      {label: 'Girl', value: 'Girl'}
    ]
  );

  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, birthday, setBirthday, setGender, gender, breed, setBreed, dogName } = stateContext



  // const onChange = (event, selectedDate) => {
  //   setShow(false)
  //   if (event?.type === 'dismissed') {
  //     setBirthday(new Date())
  //     return
  //   }
  //   const currentDate = selectedDate;
  //   setBirthday(currentDate)
  // }
  
  // const showMode = (currentMode) => {
  //   setShow(true)
  //   setMode(currentMode)
  // } 
  
  // const showDatepicker = () => {
  //   showMode('date')
  // }
  
    
  const doUpdatePet = async function () {
    const formData = {
      birthday: birthday,
      gender: setGender(value),
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
          {/* <TouchableOpacity onPress={showDatepicker}>
            <Text>What's {dogName}'s Birthday</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={birthday}
              mode={'date'}
              display="default"
              onChange={onChange}
            />
          )} */}
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
          placeholder={`Whats ${dogName}'s gender?`}
          onValueChange={(value) => setGender(value)}
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
      {/* <NavBar /> */}
    </SafeAreaView>

  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingRight: 15,
    paddingTop: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: screenWidth * 0.5,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontWeight: 600,
  },
  inputAndroid: {
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: screenWidth * 0.45,
  },
});

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