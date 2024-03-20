import * as React from 'react'
import { useContext, useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, buttonText, Pressable, Image, Dimensions } from 'react-native'
import { StateContext } from '../context/StateContext'
import NavBar from '../components/NavBar'

const screenWidth = Dimensions.get('window').width

const PetProfile = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, dogName, breed, gender, birthday } = stateContext
  const [age, setAge] = useState(0)

  // putting context into objects
  const birthdayDate = new Date(birthday).toISOString().slice(0, 10)

  const useGetAge = (birthdayDate) => {
    {
      let today = new Date();
      let birthDate = new Date(birthdayDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setAge(age)
    }
  }

  useEffect(() => {
    useGetAge(birthdayDate)
  }, [])

  console.log(age)

  return (
    <SafeAreaView style={styles.container}>
      {/* <Pressable */}
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() =>
          // console.log("Edit Pet Profile")
          navigation.navigate('Edit Pet')}
      >
        <Text style={styles.editText}>Edit Pet Profile</Text>
      </TouchableOpacity>
      {/* </Pressable> */}
      <View
        style={styles.widget}
      >
        <Image style={styles.tinyLogo} source={require('../../assets/images/addphoto.png')} />
        <View>
          <Text style={buttonText}>{dogName}</Text>
          <Text style={styles.inputInfo}>{age}</Text>
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Birthday</Text>
          {
            { age } != null
              ?
              <View>
                <Text style={styles.inputInfo}>{new Date(birthday).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}</Text>
                <Text style={styles.inputInfo}>{age} years old</Text>
              </View>
              : <Text style={styles.inputInfo}>Include {dogName}'s Birthday</Text>
          }
        </View>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Gender</Text>
          {
            { gender } != null
              ? <Text style={styles.inputInfo}>{gender}</Text>
              : <Text style={styles.inputInfo}>Include {dogName}'s Gender</Text>
          }
        </View>
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Breed</Text>
          {
            { breed } != null
              ? <Text style={styles.inputInfo}>{breed}</Text>
              : <Text style={styles.inputInfo}>Include {dogName}'s Breed</Text>
          }

        </View>
      </View>
      <NavBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  widget: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#c4e8f2',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    width: screenWidth * 0.95,
    height: 112
  },
  widgetText: {
    fontSize: 20,
    maxWidth: 310,
    maxHeight: 58
  },
  editBtn: {
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: 10
  },
  editText: {
    display: 'flex',
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  infoSection: {
    display: 'flex',
    // justifyContent: 'flex-start',
    fontFamily: 'ConcertOne-Regular',
    marginLeft: 20
  },
  inputInfo: {
    fontFamily: 'ConcertOne-Regular',
    fontSize: 16
  },
  container: {
    backgroundColor: '#F8F5E6',
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: 'left'
    // marginLeft: 30,
  },
  subSection: {
    marginVertical: 20
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
})

export default PetProfile
